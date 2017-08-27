import User from "../models/User";

interface UserRepository {
  getUser(id: number): Promise<User>;
  setUser(user: User): void; // TODO: 本当にvoidでいいのか?
}

export default UserRepository;