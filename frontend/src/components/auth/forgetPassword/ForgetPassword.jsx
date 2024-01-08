import React from "react";
import { Link, NavLink, useLocation, useNavigate } from "react-router-dom";
import {
  Container,
  Box,
  Heading,
  FormControl,
  FormLabel,
  Input,
  Button,
  Text,
  Center,
  Flex,
  Divider,
  Image,
  ButtonGroup,
} from "@chakra-ui/react";

const ForgetPassword = () => {
  const history = useNavigate();
  const handleSubmit = () => {};

  const handleCancel = () => {
    history("/auth");
  };
  return (
    <Box w="100%" minH="100vh" p={8}>
      <Container py={10} border="2px solid #009e66">
        <Box w="100%" p={4} maxW="700px" borderRadius="md">
          <Heading
            mb={5}
            mt={4}
            color="#f0f0f0"
            fontWeight="500"
            fontSize="23px"
          >
            Find Your AIMemesGallery account
          </Heading>
          <Divider />
          <Text fontSize="" color="#9f9f9f" mt={5} mb={5}>
            Please enter your email address to search for your account.
          </Text>
          <form onSubmit={handleSubmit}>
            <FormControl mt={2} mb={5}>
              <Input
                required
                size="lg"
                borderRadius="none"
                fontSize="16px"
                bg="#161616"
                lineHeight="1.5"
                border="none"
                color="#f1f1f1"
                _focus={{ ring: "#009e66", outline: "1px solid #009e66" }}
                w="full"
                p={3}
                type="email"
                name="email"
                placeholder="Email address"
              />
            </FormControl>
            <Divider />
            <ButtonGroup mt={5}>
              <Button
                bg="#009e66"
                _hover={{ bg: "#009e66" }}
                fontSize="16px"
                color="white"
                mb={2}
                type="submit"
                width="100%"
              >
                submit
              </Button>
              <Button
                bg="#ccc"
                fontSize="16px"
                color="#000"
                width="100%"
                onClick={handleCancel}
              >
                cancel
              </Button>
            </ButtonGroup>
          </form>
        </Box>
      </Container>
    </Box>
  );
};

export default ForgetPassword;
