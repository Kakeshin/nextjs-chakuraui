import getGithubRepository from '@/data/api/getGithubRepository';
import { GithubResponse } from '@/data/types/response/githubResponse';

interface GithubRepositoryInterface {
  getMe: () => Promise<GithubResponse>;
}

const githubRepository: GithubRepositoryInterface = {
  getMe: async () => {
    const result = await getGithubRepository();
    return result;
  },
};

export default githubRepository;
