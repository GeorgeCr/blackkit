import React from "react";
import { useSelector, useDispatch } from "react-redux";

function App() {
  const testValue = useSelector((state) => state);
  const dispatch = useDispatch();
  console.log("test val", testValue);

  const handleToggle = () => {
    dispatch({ type: "TOGGLED" });
  };

  return (
    <div>
      App js {testValue.root.idk && <span>IDK!</span>}{" "}
      {testValue.root.test && <span>test</span>}
      <button role="button" onClick={handleToggle}>Toggle</button>
    </div>
  );
}

export default App;
