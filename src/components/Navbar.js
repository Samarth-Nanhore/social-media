import { Flex, Spacer, Box, Button } from "@chakra-ui/react";

export const Navbar = () => {
  return (
    <>
      <Flex bg="blue.500" p={4} align="center">
        <Box ml={4} fontWeight="bold" fontSize="lg" color="white">
          Music-Connect
        </Box>
        <Spacer />
      </Flex>
    </>
  );
};
