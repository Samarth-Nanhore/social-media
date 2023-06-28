import React from "react";
import { Box, Spinner } from "@chakra-ui/react";

const Loader = () => {
  return (
    <Box
      display="flex"
      alignItems="center"
      justifyContent="center"
      minHeight="100vh"
    >
      <Spinner size="xl" color="blue.500" thickness="4px" />
    </Box>
  );
};

export default Loader;
