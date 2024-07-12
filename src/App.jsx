import React from "react";
import { Box, Text, useColorModeValue } from "@chakra-ui/react";
import Navbar from "./components/common/Navbar";
import TimeZoneConverter from "./components/time-convertor/TimeZoneConverter";

function App() {
  return (
    <Box fontFamily={"cursive"}>
      <Navbar />
      <Text
        textAlign={"center"}
        fontWeight={800}
        fontSize={25}
        color={useColorModeValue("black", "white")}
        mt={24}
      >
        TimeZone Converter and Scheduler
      </Text>
      <TimeZoneConverter />
    </Box>
  );
}

export default App;
