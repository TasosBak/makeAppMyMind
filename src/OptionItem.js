import React from "react";

export const OptionItem = ({ option, handleDeleteOption }) => {
  return (
    <div>
      {option}

      <button onClick={() => handleDeleteOption(option)}>remove</button>
    </div>
  );
};
