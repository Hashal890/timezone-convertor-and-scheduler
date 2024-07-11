import { Box, Flex, useColorModeValue } from "@chakra-ui/react";
import ToggleColorMode from "./ToggleColorMode";

const Navbar = () => {
  return (
    <Flex
      h={16}
      alignItems={"center"}
      justifyContent={"space-between"}
      bg={useColorModeValue("gray.100", "gray.900")}
      px={4}
    >
      <Box fontSize={["12px", "12px", "14px"]}>
        TimeZone Convertor and Scheduler
      </Box>
      <ToggleColorMode />
    </Flex>
  );
};

export default Navbar;
