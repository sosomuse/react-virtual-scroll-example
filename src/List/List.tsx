import React from "react";
import { DATA } from "./data";
import ListItem from "./ListItem";
import { useVirtualScroll } from "./useVirtualScroll";

const items = DATA;
const itemHeight = 50;
const containerHeight = 500;
const containerWidth = 500;

const List: React.VFC = () => {
  const { displayingItems, handleScroll, startIndex } = useVirtualScroll({
    containerHeight,
    itemHeight,
    items,
  });

  return (
    <div
      onScroll={handleScroll}
      style={{
        width: containerWidth,
        height: containerHeight,
        overflowY: "scroll",
        border: "1px solid gray",
      }}
    >
      <div style={{ height: items.length * itemHeight }}>
        <ul
          style={{
            margin: 0,
            padding: 0,
            listStyle: "none",
            position: "relative",
            top: startIndex * itemHeight,
          }}
        >
          {displayingItems.map((item) => (
            <ListItem key={item} itemHeight={itemHeight}>
              {item}
            </ListItem>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default List;
