import React, { useState } from "react";
import { Box } from "@chakra-ui/react";
import TimezoneSearchAndSelect from "./TimezoneSearchAndSelect";
import { INIT_FORMATTED_TIME_ZONES } from "../../../assets/data";

const ConverterSection = () => {
  const [timezones, setTimezones] = useState(INIT_FORMATTED_TIME_ZONES);

  const handleTimezoneSelect = (timezone) => {
    if (!timezones.find((tz) => tz.value === timezone.value)) {
      setTimezones([...timezones, timezone]);
    }
  };

  return (
    <Box>
      <TimezoneSearchAndSelect onSelect={handleTimezoneSelect} />
    </Box>
  );
};

export default ConverterSection;
