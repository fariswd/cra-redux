import { useContext } from "react";
import { useDispatch, useSelector } from "react-redux";
import { CounterContext } from "../../contexts/CounterContext";
import {
  add,
  dec,
  incrementMeAsync,
  selectCount,
  selectStatus,
} from "./counterMeSlice";
import style from "./counter.module.css";

const CounterMe = () => {
  // const [count, setCount] = useState(0);
  const count = useSelector(selectCount);
  const status = useSelector(selectStatus);
  const dispatch = useDispatch();

  const {
    count: countContext,
    add: addContext,
    dec: decContext,
  } = useContext(CounterContext);

  return (
    <div className={`${style.container} ${style.margin}`}>
      <p>{status}</p>
      <p>this is counter me: {count}</p>
      <div>
        <button onClick={() => dispatch(add())}>tambah</button>
        <button onClick={() => dispatch(dec())}>kurang</button>
        <button onClick={() => dispatch(incrementMeAsync())}>
          tambah async
        </button>
      </div>
      <div style={{ marginTop: 100 }}></div>
      <p>this is counter context me: {countContext}</p>
      <div>
        <button onClick={addContext}>tambah</button>
        <button onClick={decContext}>kurang</button>
      </div>
    </div>
  );
};

export default CounterMe;
