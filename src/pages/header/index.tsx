import {
  Heading, HStack, Box, Button,
} from '@chakra-ui/react';
import NextLink from 'next/link';

function Page() {
  return (
    <Box bg="white" mb="1px">
      <HStack p="10px">
        <NextLink href="/">
          <Heading mr="20px">Kakeshin Dev</Heading>
        </NextLink>
        <Box>
          <NextLink href="/">
            <Button colorScheme="green" variant="outline">
              Home
            </Button>
          </NextLink>
          <NextLink href="/profile">
            <Button colorScheme="green" variant="outline">
              Profile
            </Button>
          </NextLink>
          <NextLink href="/portfolio">
            <Button colorScheme="green" variant="outline">
              Portfolio
            </Button>
          </NextLink>
          <NextLink href="/contact">
            <Button colorScheme="green" variant="outline">
              Contact
            </Button>
          </NextLink>
        </Box>
      </HStack>
    </Box>
  );
}

export default Page;
