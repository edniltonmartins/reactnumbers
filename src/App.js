import { useState } from "react";

function App({title, description}) {
  const [ number, setNumber ] = useState(0);
  return (
    <>
      <h1>{title} - {number}</h1>
      <h2 className={number >=0 ? "positive" : "negative"}>
        {number >= 0 ? "Positivo" : "Negativo"}
      </h2>
      <input
        type="number"
        name="number"
        value={number}
        onChange={(/*event*/{target})=> setNumber(parseInt(target.value))}
      ></input>
    </>
  );
}

export default App;
