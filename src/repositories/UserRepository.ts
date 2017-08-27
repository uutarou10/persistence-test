import User from "../models/User";

interface UserRepository {
  getUser(id: number): User | undefined;
  setUser(user: User): boolean;
}

export default UserRepository;