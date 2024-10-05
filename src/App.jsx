import { useState } from "react";
import "./App.css";

function Square() {
  const [value, setValue] = useState(null);

  function handleClick() {
    setValue("X");
  }

  return (
    <button
      className="text-lg bg-white size-14 m-1 border border-gray-200 rounded-sm"
      onClick={handleClick}
    >
      {value}
    </button>
  );
}

export default function Board() {
  return (
    <>
      <div>
        <Square />
        <Square />
        <Square />
      </div>

      <div>
        <Square />
        <Square />
        <Square />
      </div>
      <div>
        <Square />
        <Square />
        <Square />
      </div>
    </>
  );
}
