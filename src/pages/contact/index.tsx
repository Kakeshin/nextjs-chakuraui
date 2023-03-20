import { Heading, Box } from "@chakra-ui/react";
import Bread from "../bread/index";

const Page = () => {
  return (
    <Box bg="white" px="15px" py="5px">
      <Bread title="Contact" />

      <Heading color="orange.400">Contact</Heading>
    </Box>
  );
};

export default Page;
