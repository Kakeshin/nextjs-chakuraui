import { Box } from '@chakra-ui/react';
import Bread from '@/pages/bread/index';

function Page() {
  return (
    <Box bg="white" px="15px" py="5px">
      <Bread title="Portfolio" />
      <Box
        w="full"
        mt="10px"
        p="10px"
        border="1px"
        borderColor="blackAlpha.400"
        borderRadius="5px"
        boxShadow="base"
        rounded="md"
      />
    </Box>
  );
}

export default Page;
