import {
  Heading,
  Box,
  Container,
  Flex,
  Wrap,
  WrapItem,
  Text,
  VStack,
  Button,
  FormControl,
  FormLabel,
  Input,
  InputGroup,
  InputLeftElement,
  Textarea,
} from '@chakra-ui/react';
import { MdOutlineEmail } from 'react-icons/md';
import { BsPerson } from 'react-icons/bs';
import Bread from '@/pages/bread/index';
import { useState } from 'react';
import axios from 'axios';

function Page() {
  const [name, setName] = useState('');
  const [address, setAddress] = useState('');
  const [message, setMessage] = useState('');
  const isDisabled = !name || !address || !message;

  const handleNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value);
  };
  const handleAddressChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setAddress(e.target.value);
  };
  const handleMessageChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setMessage(e.target.value);
  };
  const buttonHandler = async () => {
    await axios
      .post('./api/mailer', {
        name,
        address,
        message,
      })
      .then(() => {})
      .catch(() => {});
  };

  return (
    <Box bg="clear" px="15px" py="5px">
      <Bread title="Contact" />
      <Container bg="clear" maxW="full" mt={0} centerContent overflow="hidden">
        <Flex>
          <Box
            bg="white"
            color="blackAlpha.800"
            borderRadius="lg"
            m={{ sm: 4, md: 16, lg: 10 }}
            p={{ sm: 5, md: 5, lg: 16 }}
            boxShadow="base"
            rounded="md"
          >
            <Box p={4}>
              <Wrap
                spacing={{
                  base: 20,
                  sm: 3,
                  md: 5,
                  lg: 20,
                }}
              >
                <WrapItem>
                  <Box>
                    <Heading>Contact</Heading>
                    <Text mt={{ sm: 3, md: 3, lg: 5 }} color="gray.500">
                      Fill up the form below to contact
                    </Text>
                    <Box
                      py={{
                        base: 5,
                        sm: 5,
                        md: 8,
                        lg: 10,
                      }}
                    >
                      {/* <VStack pl={0} spacing={3} alignItems="flex-start">
                        <Button
                          size="md"
                          height="48px"
                          width="300px"
                          variant="ghost"
                          color="blackAlpha.700"
                          _hover={{ border: '2px solid #1C6FEB' }}
                          leftIcon={<MdEmail color="#1970F1" size="20px" />}
                        >
                          hogehoge.fugafuga@example.com
                        </Button>
                        <Button
                          size="md"
                          height="48px"
                          width="110px"
                          variant="ghost"
                          color="blackAlpha.700"
                          _hover={{ border: '2px solid #1C6FEB' }}
                          leftIcon={
                            <MdLocationOn color="#1970F1" size="20px" />
                          }
                        >
                          Japan
                        </Button>
                      </VStack> */}
                    </Box>
                    {/* <HStack
                      mt={{ lg: 10, md: 10 }}
                      spacing={5}
                      px={5}
                      alignItems="flex-start"
                    >
                      <IconButton
                        aria-label="twitter"
                        variant="ghost"
                        size="lg"
                        isRound
                        _hover={{ bg: '#0D74FF' }}
                        color="blackAlpha.700"
                        icon={<BsTwitter size="28px" />}
                      />
                      <IconButton
                        aria-label="github"
                        variant="ghost"
                        size="lg"
                        isRound
                        _hover={{ bg: '#0D74FF' }}
                        color="blackAlpha.700"
                        icon={<BsGithub size="28px" />}
                      />
                      <IconButton
                        aria-label="discord"
                        variant="ghost"
                        size="lg"
                        isRound
                        _hover={{ bg: '#0D74FF' }}
                        color="blackAlpha.700"
                        icon={<BsDiscord size="28px" />}
                      />
                    </HStack> */}
                  </Box>
                </WrapItem>
                <WrapItem>
                  <Box bg="white" borderRadius="lg">
                    <Box m={8} color="#0B0E3F">
                      <VStack spacing={5}>
                        <FormControl>
                          <FormControl id="name" isRequired>
                            <FormLabel>Your Name</FormLabel>
                            <InputGroup borderColor="#E0E1E7">
                              <InputLeftElement pointerEvents="none">
                                <BsPerson color="gray.800" />
                              </InputLeftElement>
                              <Input
                                type="text"
                                size="md"
                                value={name}
                                onChange={handleNameChange}
                              />
                            </InputGroup>
                          </FormControl>
                          <FormControl id="email" isRequired>
                            <FormLabel>Mail</FormLabel>
                            <InputGroup borderColor="#E0E1E7">
                              <InputLeftElement pointerEvents="none">
                                <MdOutlineEmail color="gray.800" />
                              </InputLeftElement>
                              <Input
                                type="email"
                                size="md"
                                value={address}
                                onChange={handleAddressChange}
                              />
                            </InputGroup>
                          </FormControl>
                          <FormControl id="message" isRequired>
                            <FormLabel>Message</FormLabel>
                            <Textarea
                              borderColor="gray.300"
                              placeholder="message"
                              value={message}
                              onChange={handleMessageChange}
                            />
                          </FormControl>
                          <FormControl id="name" float="right">
                            <Button
                              variant="solid"
                              bg="#0D74FF"
                              color="white"
                              type="submit"
                              onClick={buttonHandler}
                              isDisabled={isDisabled}
                            >
                              Send Message
                            </Button>
                          </FormControl>
                        </FormControl>
                      </VStack>
                    </Box>
                  </Box>
                </WrapItem>
              </Wrap>
            </Box>
          </Box>
        </Flex>
      </Container>
    </Box>
  );
}

export default Page;
