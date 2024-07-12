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
        fontWeight={600}
        fontSize={[18, 16, 25]}
        color={useColorModeValue("black", "white")}
        mt={24}
        mb={[6, 6, 12]}
      >
        TimeZone Converter and Scheduler
      </Text>
      <TimeZoneConverter />
    </Box>
  );
}

export default App;
