import getHello from '@/data/api/getHello';
import postHello from '@/data/api/postHello';
import { HelloResponse } from '@/data/types/response/helloResponse';

interface HelloRepositoryInterFace {
  getHello: () => Promise<HelloResponse>;
  postHello: () => Promise<HelloResponse>;
}

const helloRepository: HelloRepositoryInterFace = {
  getHello: async () => {
    const result = await getHello();
    return result;
  },

  postHello: async () => {
    const { name } = await postHello();
    return { name };
  },
};

export default helloRepository;
