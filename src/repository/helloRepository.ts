import getHello from '@/data/api/getHello';
import { HelloResponse } from '@/data/types/response/helloResponse';

interface HelloRepositoryInterFace {
  getHello: () => Promise<HelloResponse>;
  postHello: () => Promise<HelloResponse>;
}

const helloRepository: HelloRepositoryInterFace = {
  getHello: async () => {
    const { name } = await getHello();
    return { name };
  },

  postHello: async () => {
    const { name } = await getHello();
    return { name };
  },
};

export default helloRepository;
