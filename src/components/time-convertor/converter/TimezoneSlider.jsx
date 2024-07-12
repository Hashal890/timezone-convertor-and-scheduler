import React from "react";
import {
  Box,
  Slider,
  SliderTrack,
  SliderFilledTrack,
  SliderThumb,
} from "@chakra-ui/react";

const TimezoneSlider = ({ value, onChange }) => {
  return (
    <Box p={4} mb={4}>
      <Slider
        defaultValue={value}
        min={0}
        max={24}
        step={1}
        onChange={onChange}
      >
        <SliderTrack>
          <SliderFilledTrack />
        </SliderTrack>
        <SliderThumb />
      </Slider>
    </Box>
  );
};

export default TimezoneSlider;
