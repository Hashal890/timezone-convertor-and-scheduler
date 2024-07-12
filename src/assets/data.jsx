import ConverterSection from "../components/time-convertor/converter/ConverterSection";
import TableSection from "../components/time-convertor/table/TableSection";
import TimeDifferenceSection from "../components/time-convertor/time-difference/TimeDifferenceSection";
import timeZonesData from "./time-zones.json";

export const TIME_ZONE_CONVERTOR_NAVBAR_HEADINGS = [
  "Converter",
  "Time Difference",
  "Table",
];

export const TIME_ZONE_CONVERTOR_CONTENT_FILES = [
  <ConverterSection />,
  <TimeDifferenceSection />,
  <TableSection />,
];

export const INIT_FORMATTED_TIME_ZONES = [
  {
    countryCode: "IN",
    label: "India (Asia/Kolkata)",
    offset: 5.5,
    value: "Asia/Kolkata",
  },
  {
    countryCode: "US",
    label: "United States (America/Chicago)",
    offset: 5,
    value: "America/Chicago",
  },
];

export const FORMATED_TIME_ZONES = () => {
  const { zones } = timeZonesData;

  const formattedTimeZones = zones.map((zone) => {
    const { countryCode, countryName, zoneName, gmtOffset } = zone;

    return {
      label: `${countryName} (${zoneName})`,
      value: zoneName,
      offset: gmtOffset / 3600,
      countryCode,
    };
  });

  return formattedTimeZones;
};
