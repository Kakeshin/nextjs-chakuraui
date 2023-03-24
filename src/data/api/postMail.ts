import axios from 'axios';
import { MailerResponse } from '@/data/types/response/mailerResponse';
import { MailerRequest } from '@/data/types/request/mailerRequest';

const postMail = async (
  mailerRequest: MailerRequest
): Promise<MailerResponse> => {
  const baseUrl = process.env.BASE_URL;
  const url = `${baseUrl}/mailer`;

  try {
    const result = await axios.post(url, {
      token: process.env.MAILER_TOKEN,
      name: mailerRequest.name,
      address: mailerRequest.address,
      message: mailerRequest.message,
    });

    return result.data;
  } catch (error) {
    return {
      name: `${error}`,
    };
  }
};

export default postMail;
