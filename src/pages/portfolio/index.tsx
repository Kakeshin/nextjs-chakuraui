import { Box, Heading } from "@chakra-ui/react";
import Bread from "../bread/index";

const Page = () => {
  return (
    <Box bg="white" px="15px" py="5px">
      <Bread title="Portfolio" />

      <Heading color="orange.400">Portfolio</Heading>
    </Box>
  );
};

export default Page;
