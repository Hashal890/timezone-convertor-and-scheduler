import React from "react";
import { Flex, IconButton, Text } from "@chakra-ui/react";
import { CloseIcon } from "@chakra-ui/icons";
import moment from "moment";
import { Draggable } from "@hello-pangea/dnd";

const TimezoneCard = ({ index, timezone, time, onRemove }) => {
  const { value, label, offset } = timezone;

  return (
    <Draggable key={value} draggableId={value} index={index}>
      {(provided) => (
        <Flex
          ref={provided.innerRef}
          {...provided.draggableProps}
          {...provided.dragHandleProps}
          p={4}
          mb={2}
          align={"center"}
          justify={"space-between"}
          bg={"gray.100"}
          borderRadius={"md"}
        >
          <Text>
            {label}:{" "}
            {moment(time).utcOffset(offset).format("YYYY-MM-DD HH:mm:ss")}
          </Text>
          <IconButton
            icon={<CloseIcon />}
            size="sm"
            onClick={() => onRemove(value)}
            colorScheme={"red"}
            bg={"red.500"}
            color={"white"}
            _hover={{ bg: "red.800" }}
          />
        </Flex>
      )}
    </Draggable>
  );
};

export default TimezoneCard;
