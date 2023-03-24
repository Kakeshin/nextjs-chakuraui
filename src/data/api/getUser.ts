import axios from 'axios';
import { UserResponse } from '@/data/types/response/getUserResponse';
import { UserRequest } from '@/data/types/request/getUserRequest';

const getUser = async (userRequest: UserRequest): Promise<UserResponse> => {
  const baseUrl = process.env.BASE_URL;
  const url = `${baseUrl}/mailer`;

  try {
    const result = await axios.post(url, {
      token: process.env.MAILER_TOKEN,
      name: userRequest.name,
      address: userRequest.email,
      message: userRequest.message,
    });

    return result.data;
  } catch (error) {
    return {
      name: `${error}`,
    };
  }
};

export default getUser;
