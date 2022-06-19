import { useState, useEffect } from "react";
import "./index.css";

function App() {
  const [counter, setCounter] = useState(50);

  useEffect(() => {
    const id = setInterval(() => {
      setCounter((previousValue) => {
        if (previousValue >= 60) {
          clearInterval(id);
          return 50;
        }
        return previousValue + 1;
      });
    }, 1000);

    return function cleanUp() {
      clearInterval(id);
    };
  }, []);

  return (
    <div className="App">
      <h1>Counter</h1>
      <h3> {counter}</h3>
    </div>
  );
}

export default App;
