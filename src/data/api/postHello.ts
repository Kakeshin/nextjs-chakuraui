import axios from 'axios';
import { HelloResponse } from '@/data/types/response/helloResponse';

const postHello = async (): Promise<HelloResponse> => {
  const baseUrl = process.env.BASE_URL;
  const url = `${baseUrl}/postHello`;

  try {
    const result = await axios.post(url);
    return result.data;
  } catch (error) {
    return {
      name: `${error}`,
    };
  }
};

export default postHello;
