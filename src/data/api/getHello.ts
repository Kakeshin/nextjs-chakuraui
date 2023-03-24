import axios from 'axios';
import { HelloResponse } from '@/data/types/response/helloResponse';

const getHello = async (): Promise<HelloResponse> => {
  const baseUrl = process.env.BASE_URL;
  const url = `${baseUrl}/hello`;

  try {
    const result = await axios.get(url);
    return result.data;
  } catch (error) {
    console.error(error);
    return {
      name: `${error}`,
    };
  }
};

export default getHello;
