import { NextApiRequest, NextApiResponse } from 'next';
import { MailerResponse } from '@/data/types/response/mailerResponse';
import mailerRepository from '@/repository/mailerRepository';

const handler = async (
  req: NextApiRequest,
  res: NextApiResponse<MailerResponse>
) => {
  if (req.method !== 'POST') {
    res.status(405).send({ name: 'Only POST requests allowed' });
    return;
  }
  const data = await mailerRepository.postMail({
    name: req.body.name,
    address: req.body.address,
    message: req.body.message,
  });

  res.status(200).json(data);
};

export default handler;
