import React from "react";
import { Box } from "@chakra-ui/react";
import { DragDropContext, Droppable } from "@hello-pangea/dnd";
import TimezoneCard from "./TimezoneCard";

const TimezoneList = ({ timezones, time, onRemove, onReorder }) => {
  const handleOnDragEnd = (result) => {
    if (!result.destination) return;
    const items = Array.from(timezones);
    const [reorderedItem] = items.splice(result.source.index, 1);
    items.splice(result.destination.index, 0, reorderedItem);
    onReorder(items);
  };

  return (
    <Box mt={8}>
      <DragDropContext onDragEnd={handleOnDragEnd}>
        <Droppable droppableId={"timezones"}>
          {(provided) => (
            <Box {...provided.droppableProps} ref={provided.innerRef}>
              {timezones.map((timezone, index) => (
                <TimezoneCard
                  key={index + 1}
                  index={index}
                  timezone={timezone}
                  time={time}
                  onRemove={onRemove}
                />
              ))}
              {provided.placeholder}
            </Box>
          )}
        </Droppable>
      </DragDropContext>
    </Box>
  );
};

export default TimezoneList;
