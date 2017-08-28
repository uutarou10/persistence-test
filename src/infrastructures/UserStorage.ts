import User from "../models/User";
import UserRepository from "../repositories/UserRepository";
import {AsyncStorage} from "react-native";
import Topic from "../models/Topic";
import Tag from "../models/Tag";

export default class UserStorage implements UserRepository {
  // private mockData: Array<UserDAO> = [
  //   {
  //     id: 1,
  //     name: 'モガミン',
  //     lovedTopics: [1, 2, 3],
  //     myTopics: [1],
  //     tags: []
  //   }
  // ];

  public getUser(id: number): Promise<User> {
    return this.getAllDaoArray().then<User>((daoArray) => {
      const selectedUser = daoArray.find((dao) => dao.id == id);
      if (selectedUser) {
        return UserStorage.convertDaoToObject(selectedUser);
      } else {
        throw new Error('Invalid value.');
      }
    })
  }

  setUser(user: User): Promise<void> {
    return this.getAllDaoArray().then<void>((daoArray) => {
      const newDaoArray = [
        ...daoArray,
        UserStorage.convertObjectToDao(user)
      ];
      return AsyncStorage.setItem('users', JSON.stringify(newDaoArray));
    })
  }

  private getAllDaoArray(): Promise<Array<UserDAO>> {
    return AsyncStorage.getItem('users').then<Array<UserDAO>>((daoArrayString) => {
      return JSON.parse(daoArrayString);
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
  lovedTopics: Array<Topic>,
  myTopics: Array<Topic>,
  tags: Array<Tag>
}