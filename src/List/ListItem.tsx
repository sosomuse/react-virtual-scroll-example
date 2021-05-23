/* eslint-disable react/prop-types */
import React from "react";

type Props = {
  children: React.ReactNode;
  itemHeight: number;
};

const ListItem: React.VFC<Props> = ({ children, itemHeight }) => {
  return (
    <li
      style={{
        height: itemHeight,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      {children}
    </li>
  );
};

export default React.memo(ListItem);
