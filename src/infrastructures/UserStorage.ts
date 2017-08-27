import User from "../models/User";
import UserRepository from "../repositories/UserRepository";
import {AsyncStorage} from "react-native";

export default class UserStorage implements UserRepository {
  private mockData: Array<UserDAO> = [
    {
      id: 1,
      name: 'モガミン',
      lovedTopics: [1, 2, 3],
      myTopics: [1],
      tags: []
    }
  ];

  public getUser(id: number): Promise<User> {
    return AsyncStorage.getItem('users').then<Array<UserDAO>>((daoArrayStr) => {
      return JSON.parse(daoArrayStr);
    }).then<User>((daoArray) => {
      const selectedUserDao = daoArray.find((dao) => dao.id === id)
      if (selectedUserDao) {
        return UserStorage.convertDaoToObject(selectedUserDao);
      } else {
        throw new Error('Invalid value.');
      }
    });
  }

  public setUser(user: User): void {
    AsyncStorage.getItem('users').then((daoArrayStr) => {
      const userDaoArray = <Array<UserDAO>>JSON.parse(daoArrayStr);
      const newUserDaoArray = [
        ...userDaoArray,
        UserStorage.convertObjectToDao(user)
      ];
      AsyncStorage.setItem('users', JSON.stringify(newUserDaoArray))
    })
  }

  private static convertDaoToObject(dao: UserDAO): User {
    return new User(dao.id, dao.name, dao.lovedTopics, dao.myTopics, dao.tags);
  }

  private static convertObjectToDao(user: User): UserDAO {
    return {
      id: user.id,
      name: user.name,
      lovedTopics: user.lovedTopics,
      myTopics: user.myTopics,
      tags: user.tags
    }
  }
}

export interface UserDAO {
  id: number | undefined, // setUserする前はidは存在しないはずなのでundefも取りうる仕様の方がいいのではという気がした。
  name: string,
  lovedTopics: Array<number>,
  myTopics: Array<number>,
  tags: Array<number>
}