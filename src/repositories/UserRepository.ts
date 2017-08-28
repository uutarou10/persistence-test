import User from "../models/User";

interface UserRepository {
  getUser(id: number): Promise<User>;
  setUser(user: User): Promise<void>;
}

export default UserRepository;