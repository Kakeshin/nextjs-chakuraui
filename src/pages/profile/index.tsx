import { Box, Heading } from '@chakra-ui/react';
import Bread from '@/pages/bread/index';
import { useEffect, useState } from 'react';
import axios from 'axios';

interface StateInterface {
  name: string;
  url: string;
  twitter: string;
}

function Page() {
  const [state, setState] = useState<StateInterface>();

  useEffect(() => {
    const api = async () => {
      const { data } = await await axios.get('./api/github');
      return data;
    };
    api().then((res) => {
      setState({ name: res.name, url: res.url, twitter: res.twitter });
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
        <Heading>{state?.name}</Heading>
        <Heading>{state?.url}</Heading>
        <Heading>{state?.twitter}</Heading>
      </Box>
    </Box>
  );
}

export default Page;
