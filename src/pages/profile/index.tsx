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
    <Box bg="white" px="15px" py="5px">
      <Bread title="Profile" />

      <Box
        w="full"
        mt="10px"
        p="10px"
        border="1px"
        borderColor="blackAlpha.400"
        borderRadius="5px"
        boxShadow="base"
        rounded="md"
      >
        <Heading>{name}</Heading>
        <Heading>{url}</Heading>
        <Heading>{twitter}</Heading>
      </Box>
    </Box>
  );
}

export default Page;
