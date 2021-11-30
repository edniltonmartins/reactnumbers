import { useState } from "react";

function App(/**/{title, description}) {
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

      {/* Tabuada dando todos os elementos do Array com map */}
      <ul>
      {[0,1,2,3,4].map((i)=> (
        <li>{number} x {i} = {number * i}</li>
      ))}
      </ul>

      <h2 className={number >=0 ? "positive" : "negative"}>
        {number >= 0 ? "Positivo" : "Negativo"}
      </h2>
      <ul>
        {Array.from({ length: 11}).map( (_, i) =>(
          <li>
            {number} * {i} = <strong>{number * i}</strong>
          </li>
        ))}
        
      </ul>  
       
      
    </>
  );
}

export default App;
