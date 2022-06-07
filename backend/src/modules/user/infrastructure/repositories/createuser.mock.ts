import { User } from '../controllers/PutUserController';

export async function createUser(userOptions: User): Promise<User | null> {
  try {
    return userOptions;
  } catch (error) {
    return null;
  }
}
