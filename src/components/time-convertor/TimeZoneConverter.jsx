import React from "react";
import { Box, Tab, TabList, TabPanel, TabPanels, Tabs } from "@chakra-ui/react";
import {
  TIME_ZONE_CONVERTOR_CONTENT_FILES,
  TIME_ZONE_CONVERTOR_NAVBAR_HEADINGS,
} from "../../assets/data";

const TimeZoneConverter = () => {
  return (
    <Box maxW={"1200px"} m={"auto"} mt={4}>
      <Tabs color={"teal"} variant="enclosed">
        <TabList>
          {TIME_ZONE_CONVERTOR_NAVBAR_HEADINGS.map((heading, index) => (
            <Tab key={index + 1}>{heading}</Tab>
          ))}
        </TabList>
        <TabPanels>
          {TIME_ZONE_CONVERTOR_CONTENT_FILES.map((contentFile, index) => (
            <TabPanel key={index + 1}>{contentFile}</TabPanel>
          ))}
        </TabPanels>
      </Tabs>
    </Box>
  );
};

export default TimeZoneConverter;
