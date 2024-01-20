import React, { useState } from "react";
import { Inputdiv, Sbtn, Sinput } from "../style/styled";

export const Todo = ({ onChoosen }) => {
  const [title, setTitle] = useState("");
  return (
    <Inputdiv>
      <Sinput
        type="text"
        placeholder="What do you want to do?"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <Sbtn
        onClick={(e) => {
          e.preventDefault();
          onChoosen(title);
          setTitle("");
        }}
      >
        Add
      </Sbtn>
    </Inputdiv>
  );
};
