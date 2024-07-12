import React from "react";
import { Box } from "@chakra-ui/react";
import Select from "react-select";
import makeAnimated from "react-select/animated";
import { FORMATED_TIME_ZONES } from "../../../assets/data";

const TimezoneSearchAndSelect = ({ onSelect }) => {
  const animatedComponents = makeAnimated();
  const formattedTimeZones = FORMATED_TIME_ZONES();

  return (
    <Box p={4}>
      <Select
        options={formattedTimeZones}
        onChange={onSelect}
        placeholder="Search or select a timezone"
        components={animatedComponents}
      />
    </Box>
  );
};

export default TimezoneSearchAndSelect;
