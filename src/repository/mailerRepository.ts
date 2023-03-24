import postMail from '@/data/api/postMail';
import { MailerRequest } from '@/data/types/request/mailerRequest';
import { MailerResponse } from '@/data/types/response/mailerResponse';

interface MailerRepositoryInterface {
  postMail: (req: MailerRequest) => Promise<MailerResponse>;
}

const mailerRepository: MailerRepositoryInterface = {
  postMail: async (req: MailerRequest) => {
    const { name } = await postMail(req);
    return { name };
  },
};

export default mailerRepository;
