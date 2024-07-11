import ConverterSection from "../components/time-convertor/converter/ConverterSection";
import ISTSection from "../components/time-convertor/ist/ISTSection";
import TableSection from "../components/time-convertor/table/TableSection";
import TimeDifferenceSection from "../components/time-convertor/time-difference/TimeDifferenceSection";
import UTCSection from "../components/time-convertor/utc/UTCSection";

export const TIME_ZONE_CONVERTOR_NAVBAR_HEADINGS = [
  "Converter",
  "Time Difference",
  "Table",
  "UTC",
  "IST",
];

export const TIME_ZONE_CONVERTOR_CONTENT_FILES = [
  <ConverterSection />,
  <TimeDifferenceSection />,
  <TableSection />,
  <UTCSection />,
  <ISTSection />,
];
