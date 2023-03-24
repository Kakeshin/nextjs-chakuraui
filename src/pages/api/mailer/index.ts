import { NextApiRequest, NextApiResponse } from 'next';
import { UserResponse } from '@/data/types/response/getUserResponse';
import UserRepository from '@/repository/userRepository';

const handler = async (
  req: NextApiRequest,
  res: NextApiResponse<UserResponse>
) => {
  if (req.method !== 'POST') {
    res.status(405).send({ name: 'Only POST requests allowed' });
    return;
  }
  const data = await UserRepository.fetchUser({
    name: req.body.name,
    email: req.body.email,
    message: req.body.message,
  });

  res.status(200).json(data);
};

export default handler;
