import "./App.css";
import CountView from "./components/CountView";
import CountButton from "./components/CountButton";
import { useState } from "react";

function App() {
  const [count, setCount] = useState(0);

  const incrementHandler = () => {
    setCount((count) => count + 1);
  };

  const decrementHandler = () => {
    setCount((count) => count - 1);
  };

  return (
    <div className="App">
      <CountView count={count} />
      <CountButton
        incrementFn={incrementHandler}
        decrementFn={decrementHandler}
      />
    </div>
  );
}

export default App;
