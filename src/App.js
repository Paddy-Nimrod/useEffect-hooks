import React, { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [name, setName] = useState("");
  const [state, setState] = useState({
    name: "",
    selected: false,
    isValid: false,
  });

  const handleAdd = () => {
    setState((prev) => ({ ...prev, name }));
  };
  const handleSelect = () => {
    setState((prev) => ({ ...prev, selected: true }));
  };

  // const user = useMemo(
  //   () => ({
  //     name: state.name,
  //     selected: state.selected,
  //   }),
  //   [state.name, state.selected]
  // );

  useEffect(() => {
    console.log("The state has changed, useEffect hook runs");
  }, [state.name, state.selected]);

  return (
    <div className="App">
      <div>
        <input type="text" onChange={(event) => setName(event.target.value)} />
        <button onClick={handleAdd}>Add name</button>
        <button onClick={handleSelect}>select</button>
      </div>
      <div>
        {`name: ${state.name}`}
        {`selected: ${state.selected.toString()}`}
      </div>
    </div>
  );
}

export default App;
