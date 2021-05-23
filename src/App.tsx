import React from "react";
import List from "./List/List";

const App: React.VFC = () => {
  return (
    <div style={{ display: "flex", paddingLeft: "50px", paddingTop: "50px" }}>
      <List />
    </div>
  );
};

export default App;
