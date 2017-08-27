import User from "../models/User";
import UserRepository from "../repositories/UserRepository";
import _ from 'lodash';


export default class UserStorage implements UserRepository {
  private mockData: Array<UserDAO> = [
    {
      id: 1,
      name: 'モガミン',
      lovedTopics: [1, 2, 3],
      myTopics: [1],
      myComments: [],
      tags: []
    }
  ];

  getUser(id: number): User | undefined {
    this.mockData.find((dao) => dao.id === id);
  }
}

interface UserDAO {
  id:number,
  name: string,
  lovedTopics: Array<number>,
  myTopics: Array<number>,
  myComments: Array<number>,
  tags: Array<number>
}