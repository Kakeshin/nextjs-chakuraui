import { GithubResponse } from '@/data/types/response/githubResponse';
import githubRepository from '@/repository/githubRepository';
import { NextApiRequest, NextApiResponse } from 'next';

const handler = async (
  _: NextApiRequest,
  res: NextApiResponse<GithubResponse>
) => {
  const data = await githubRepository.getMe();
  res.status(200).json(data);
};

export default handler;
