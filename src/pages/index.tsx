import { Box, Image, AspectRatio } from "@chakra-ui/react";

const Page = () => {
  return (
    <Box bg="white">
      <AspectRatio ratio={1 / 0.33}>
        <Image src="icon.jpg" />
      </AspectRatio>
    </Box>
  );
};

export default Page;
