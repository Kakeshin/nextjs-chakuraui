import getUser from '@/data/api/getUser';
import { UserRequest } from '@/data/types/request/getUserRequest';
import { UserResponse } from '@/data/types/response/getUserResponse';

interface UserRepositoryInterface {
  fetchUser: (req: UserRequest) => Promise<UserResponse>;
}

const UserRepository: UserRepositoryInterface = {
  fetchUser: async (req: UserRequest) => {
    const { name } = await getUser(req);
    return { name };
  },
};

export default UserRepository;
