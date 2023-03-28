import { Box, Heading } from '@chakra-ui/react';
import Bread from '@/pages/bread/index';
import { useState } from 'react';
import axios from 'axios';

function Page() {
  const [name, setName] = useState('');
  const [url, setUrl] = useState('');
  const [twitter, setTwitter] = useState('');
  const handler = async () => {
    const res = await (await axios.get('./api/github')).data;
    setUrl(res.url);
    setName(res.name);
    setTwitter(res.twitter);
  };

  handler();

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
