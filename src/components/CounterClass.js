import { Component } from 'react'
import { connect } from 'react-redux';

import classes from './Counter.module.css';
export class CounterClass extends Component {
    incrementHandler() {
        this.props.increment()
    }
    
    increaseHandler() {
        this.props.increase()
    }

    decrementHandler() {
        this.props.decrement()
    }

    toggleCounterHandler() {
        this.props.toggle()
    }

    render() {
        return (
            <main className={classes.counter}>
              <h1>Redux Counter</h1>
              {this.props.show && <div className={classes.value}>{this.props.counter}</div>}
              <div className={classes.actions}>
                <button onClick={this.incrementHandler.bind(this)}>Increment</button>
                <button onClick={this.increaseHandler.bind(this)}>Increase</button>
                <button onClick={this.decrementHandler.bind(this)}>Decrement</button>
              </div>
              <button onClick={this.toggleCounterHandler}>Toggle Counter</button>
            </main>
          )
    }
}

const mapStateToProps = state => {
    return {
        counter: state.counter,
        show: state.showCounter
    }
}

const mapDispatchToProps = dispatch => {
    return {
        increase: () => dispatch({ type: 'increase'}),
        increment: () => dispatch({ type: 'increment'}),
        decrement: () => dispatch({ type: 'decrement'}),
        toggle: () => dispatch({ type: 'toggle'})
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(CounterClass)