import classes from './Counter.module.css';
import {useSelector,useDispatch} from 'react-redux'
import { counterActions } from '../store/index';
const Counter = () => {
  const counter=useSelector(state=>state.counterReducer.counter);
  const show=useSelector(state=>state.counterReducer.showCounter);
  const dispatch=useDispatch();
  const toggleCounterHandler = () => {
    dispatch(counterActions.toggle())
  };

  
  const incrementHandler=()=>{
    dispatch(counterActions.increment());
  }
  const increaseRandomHandler=()=>{
    dispatch(counterActions.increasebyvalue({value:5}))
  }
  const decrementHandler=()=>{
    dispatch(counterActions.decrement());
  }
  return (

    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      {show&&  <div className={classes.value}>{counter}</div>}
      <div>
        <button onClick={incrementHandler}>
          Increment
        </button>
        <button onClick={increaseRandomHandler}>
          Increment By 5
        </button>
        <button onClick={decrementHandler}>
         Decrement
        </button>
      </div>
     <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
};

export default Counter;
