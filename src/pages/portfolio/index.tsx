import { Box, Heading } from '@chakra-ui/react';
import Bread from '@/pages/bread/index';
import { useEffect, useState } from 'react';
import axios from 'axios';

function Page() {
  const [name, setName] = useState('');
  const [url, setUrl] = useState('');
  const [twitter, setTwitter] = useState('');

  useEffect(() => {
    const api = async () => {
      const { data } = await await axios.get('./api/github');
      return data;
    };
    api().then((res) => {
      setUrl(res.url);
      setName(res.name);
      setTwitter(res.twitter);
    });
  }, []);

  return (
    <Box>
      <Bread title="Portfolio" />
      <Heading>{name}</Heading>
      <Heading>{url}</Heading>
      <Heading>{twitter}</Heading>
    </Box>
  );
}

export default Page;
