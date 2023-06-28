import {
  Box,
  Avatar,
  Text,
  IconButton,
  Flex,
  Center,
  HStack,
} from "@chakra-ui/react";
import { FiHeart, FiMessageSquare, FiBookmark, FiShare } from "react-icons/fi";

export const DisplayPost = ({
  content,
  username,
  fullName,
  likes,
  comments,
  _id,
}) => {
  return (
    <Center>
      <Box
        borderWidth="1px"
        borderRadius="md"
        p={4}
        bg="white"
        shadow="md"
        width={{ base: "100%", md: "500px" }}
        mb={4}
      >
        <Flex align="center" mb={2}>
          <Avatar size="sm" name={fullName} src="/avatar.jpg" mr={2} />
          <Flex flexDirection="column">
            <Text fontWeight="bold">{fullName}</Text>
            <Text fontSize="sm" color="gray.500">
              {username}
            </Text>
          </Flex>
        </Flex>
        <Text mb={4}>{content}</Text>
        <HStack spacing={2} mb={2}>
          <IconButton
            aria-label="Like post"
            icon={<FiHeart />}
            colorScheme="red"
            variant="ghost"
          />
          <IconButton
            aria-label="Comment on post"
            icon={<FiMessageSquare />}
            colorScheme="blue"
            variant="ghost"
          />
          <IconButton
            aria-label="Bookmark post"
            icon={<FiBookmark />}
            colorScheme="gray"
            variant="ghost"
          />
          <IconButton
            aria-label="Share post"
            icon={<FiShare />}
            colorScheme="gray"
            variant="ghost"
          />
        </HStack>
      </Box>
    </Center>
  );
};
