import axios from 'axios';
import { UserResponse } from '@/data/types/response/getUserResponse';
import { UserRequest } from '@/data/types/request/getUserRequest';

const getUser = async (request: UserRequest): Promise<UserResponse> => {
  const baseUrl = process.env.BASE_URL;
  const url = `${baseUrl}/hello`;

  console.log(request);

  return (await axios.get<UserResponse>(url)).data;
};

export default getUser;
