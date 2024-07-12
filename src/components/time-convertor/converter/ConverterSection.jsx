import React, { useState } from "react";
import { Box, Button, Flex } from "@chakra-ui/react";
import moment from "moment";
import TimezoneSearchAndSelect from "./TimezoneSearchAndSelect";
import { INIT_FORMATTED_TIME_ZONES } from "../../../assets/data";
import DatePicker from "./DatePicker";
import ScheduleMeetButton from "./ScheduleMeetButton";
import TimezoneSlider from "./TimezoneSlider";

const ConverterSection = () => {
  const [timezones, setTimezones] = useState(INIT_FORMATTED_TIME_ZONES);
  const [selectedDate, setSelectedDate] = useState(moment.utc().toDate());
  const [time, setTime] = useState(moment.utc().toDate());

  const handleTimezoneSelect = (timezone) => {
    if (!timezones.find((tz) => tz.value === timezone.value)) {
      setTimezones([...timezones, timezone]);
    }
  };

  const handleDateAndTimeChange = (date) => {
    setSelectedDate(date);
    setTime(date);
  };

  const handleReverseOrder = () => {
    setTimezones([...timezones].reverse());
  };

  const handleSliderChange = (value) => {
    setTime(moment.utc().startOf("day").add(value, "hours").toDate());
  };

  return (
    <Box>
      <TimezoneSearchAndSelect onSelect={handleTimezoneSelect} />
      <Flex
        justifyContent={["center", "space-between"]}
        alignItems={"center"}
        mb={2}
        mt={2}
        flexDir={["column", "row"]}
        gap={4}
      >
        <DatePicker
          selectedDate={selectedDate}
          handleDateAndTimeChange={handleDateAndTimeChange}
        />
        <Button onClick={handleReverseOrder} colorScheme={"linkedin"}>
          Reverse Order
        </Button>
        <ScheduleMeetButton time={time} />
      </Flex>
      <TimezoneSlider
        value={moment.utc(time).hours()}
        onChange={handleSliderChange}
      />
    </Box>
  );
};

export default ConverterSection;
