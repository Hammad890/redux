import { increment,decrement } from "../store/reducers/counterReducer";
import { useDispatch,useSelector } from "react-redux";

export const Counter = () => {
    const dispatch = useDispatch();
    const counter = useSelector((state) => state.counter.counter);
    console.log(counter)

    const handleIncrement=()=>{
        dispatch(increment(1));
    }
    const handleDecrement=()=>{
        dispatch(decrement(1));
    }
    return (
        <div>
            <h1>Counter: {counter}</h1>
            <button onClick={handleIncrement}>+</button>
            <button onClick={handleDecrement}>-</button>
        </div>
    )
}