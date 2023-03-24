import { Box, Image, AspectRatio } from '@chakra-ui/react';

function Page() {
  return (
    <Box bg="white">
      <AspectRatio ratio={1 / 0.33}>
        <Image src="icon.jpg" alt="icon" />
      </AspectRatio>
    </Box>
  );
}

export default Page;
