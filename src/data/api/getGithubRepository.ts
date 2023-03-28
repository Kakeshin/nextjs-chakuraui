import axios from 'axios';
import { GithubResponse } from '../types/response/githubResponse';

const getGithubRepository = async (): Promise<GithubResponse> => {
  const url = `${process.env.BASE_URL}/github/me`;
  try {
    const result = await axios.get(url);
    return result.data;
  } catch (error) {
    return {
      url: '',
      name: '',
      twitter: '',
      message: `${error}`,
    };
  }
};

export default getGithubRepository;
