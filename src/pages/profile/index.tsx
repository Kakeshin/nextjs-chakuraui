import { Box } from "@chakra-ui/react";
import Bread from "../bread/index";

const Page = () => {
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
      ></Box>
    </Box>
  );
};

export default Page;
