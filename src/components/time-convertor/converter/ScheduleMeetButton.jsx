import React from "react";
import { Button } from "@chakra-ui/react";
import moment from "moment";

const ScheduleMeetButton = ({ time }) => {
  const scheduleMeet = () => {
    const startTime = moment(time).utc().format("YYYYMMDDTHHmmss") + "Z";
    const endTime =
      moment(time).add(1, "hours").utc().format("YYYYMMDDTHHmmss") + "Z";

    const meetUrl = `https://calendar.google.com/calendar/u/0/r/eventedit?dates=${startTime}/${endTime}`;

    window.open(meetUrl, "_blank");
  };

  return (
    <Button onClick={scheduleMeet} colorScheme={"linkedin"}>
      Schedule Meet
    </Button>
  );
};

export default ScheduleMeetButton;
