import { Heading, HStack, Box, Button } from '@chakra-ui/react';
import NextLink from 'next/link';

function Page() {
  return (
    <Box bg="white" mb="1px">
      <HStack p="10px">
        <NextLink href="/">
          <Heading mr="20px">Kakeshin Dev</Heading>
        </NextLink>
        <Box>
          <NextLink href="/profile">
            <Button colorScheme="green" variant="outline" mx="5px">
              Profile
            </Button>
          </NextLink>
          <NextLink href="/portfolio">
            <Button colorScheme="green" variant="outline" mx="5px">
              Portfolio
            </Button>
          </NextLink>
          <NextLink href="/contact">
            <Button colorScheme="green" variant="outline" mx="5px">
              Contact
            </Button>
          </NextLink>
        </Box>
      </HStack>
    </Box>
  );
}

export default Page;
