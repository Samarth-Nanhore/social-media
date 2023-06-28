import { Box, VStack, Button, Icon } from "@chakra-ui/react";
import { FiHome, FiCompass, FiBookmark, FiUser, FiEdit2 } from "react-icons/fi";

export const Sidebar = () => {
  return (
    <>
      <Box bg="gray.200" w="60" p={4} h="50vh" m={"0"}>
        <VStack spacing={4} align="stretch">
          <Button
            leftIcon={<Icon as={FiHome} />}
            colorScheme="blue"
            variant="solid"
          >
            Home
          </Button>
          <Button
            leftIcon={<Icon as={FiCompass} />}
            colorScheme="blue"
            variant="solid"
          >
            Explore
          </Button>
          <Button
            leftIcon={<Icon as={FiBookmark} />}
            colorScheme="blue"
            variant="solid"
          >
            Bookmark
          </Button>
          <Button
            leftIcon={<Icon as={FiUser} />}
            colorScheme="blue"
            variant="solid"
          >
            Profile
          </Button>
          <Button colorScheme="blue" variant="solid">
            Create New Post
          </Button>
        </VStack>
      </Box>
    </>
  );
};
