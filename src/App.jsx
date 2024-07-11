import React from "react";
import { Box, Text, useColorModeValue } from "@chakra-ui/react";
import Navbar from "./components/common/Navbar";

function App() {
  return (
    <Box fontFamily={"cursive"}>
      <Navbar />
      <Text
        textAlign={"center"}
        fontWeight={800}
        fontSize={25}
        color={useColorModeValue("black", "white")}
        mt={4}
      >
        TimeZone Convertor and Scheduler
      </Text>
    </Box>
  );
}

export default App;
