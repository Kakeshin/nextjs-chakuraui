import axios from 'axios';
import { GithubResponse } from '../types/response/githubResponse';

const getGithubRepository = async (): Promise<GithubResponse> => {
  const url = `${process.env.BASE_URL}/github/me`;
  try {
    const result = await axios.get(url);
    console.log('Axe Success');
    console.log(result);
    return result.data;
  } catch (error) {
    console.log('Axe Error');
    return {
      html_url: '',
      name: '',
      twitter_username: '',
      message: `${error}`,
    };
  }
};

export default getGithubRepository;
