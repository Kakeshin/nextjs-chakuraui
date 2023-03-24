import { NextApiRequest, NextApiResponse } from 'next';
import { HelloResponse } from '@/data/types/response/helloResponse';
import helloRepository from '@/repository/helloRepository';

const handler = async (
  _: NextApiRequest,
  res: NextApiResponse<HelloResponse>
) => {
  const data = await helloRepository.postHello();

  res.status(200).json(data);
};

export default handler;
