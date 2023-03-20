import { Box, Heading, HStack, Text, Image } from "@chakra-ui/react";

const Page = () => {
  return (
    <Box bg="white">
      <Image src="icon.jpg" w="full" h="sm" />
      {/* <HStack ml="10px" mr="10px">
        <Box bg="red">
          <Heading>SNS</Heading>
          <Text>Hoge</Text>
        </Box>
        <Box bg="blue">
          <Heading>Git</Heading>
          <Text>Fuga</Text>
        </Box>
        <Box>
          <Heading>Twitter</Heading>
        </Box>
      </HStack> */}
    </Box>
  );
};

export default Page;
