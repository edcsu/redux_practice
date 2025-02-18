import { useSelector, useDispatch } from 'react-redux';

import classes from './Counter.module.css';

const Counter = () => {
  const counter = useSelector(state => state.counter)
  const show = useSelector(state => state.showCounter)
  
  const dispatch = useDispatch()
  
  const toggleCounterHandler = () => {
    dispatch({ type: 'toggle'})
  };

  const incrementHandler = () => {
    dispatch({ type: 'increment'})
  }

  const decrementHandler = () => {
    dispatch({ type: 'decrement'})
  }
  
  const increaseHandler = () => {
    dispatch({ type: 'increase', amount: 5})
  }

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      {show && <div className={classes.value}>{counter}</div>}
      <div className={classes.actions}>
        <button onClick={incrementHandler}>Increment</button>
        <button onClick={increaseHandler}>Increase</button>
        <button onClick={decrementHandler}>Decrement</button>
      </div>
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
};

export default Counter;
