
import "./App.css";
import { useDispatch, useSelector } from "react-redux";
import { addNumber, subtractNumber } from "./redux/modules/counter";

function App() {
  const dispatch = useDispatch();
  const counter = useSelector((state)=> state.counter.number);
  console.log('counter', counter);

  const addHandler = () => {
    dispatch(addNumber(1));
  }

  const subtractHandler = () => {
    dispatch(subtractNumber(1));
  }
  return (
  <div>
    <p>{counter}</p>
    <button onClick={addHandler}>+</button>
    <button onClick={subtractHandler}>-</button>
  </div>
  );
}

export default App;
