import { Box, Button, Flex, Input, Text } from "@chakra-ui/react";
import { useContext } from "react";
import { LoginContext } from "../contexts/loginContext";

export const Login = () => {
  const {
    handleUsernameChange,
    handlePasswordChange,
    handleLogin,
    username,
    password,
    handleGuestLogin,
  } = useContext(LoginContext);

  return (
    <>
      <Flex align="center" justify="center" minHeight="100vh" bg="gray.100">
        <Box
          bg="white"
          p={8}
          borderRadius="md"
          boxShadow="md"
          maxW="400px"
          width="100%"
        >
          <Text textAlign="center" fontSize="xl" fontWeight="bold" mb={4}>
            Welcome to TechTrends
          </Text>
          <Text textAlign="center" fontSize="lg" mb={8}>
            Login
          </Text>
          <Box mb={4}>
            <Input
              placeholder="Username"
              value={username}
              onChange={handleUsernameChange}
            />
          </Box>
          <Box mb={4}>
            <Input
              type="password"
              placeholder="Password"
              value={password}
              onChange={handlePasswordChange}
            />
          </Box>
          <Button
            colorScheme="blue"
            size="lg"
            width="100%"
            onClick={handleLogin}
          >
            Login
          </Button>
          <Button
            colorScheme="gray"
            size="lg"
            width="100%"
            mt={4}
            onClick={handleGuestLogin}
          >
            Guest Login
          </Button>
        </Box>
      </Flex>
    </>
  );
};
