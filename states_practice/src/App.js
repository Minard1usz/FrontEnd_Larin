import React from 'react';
import './App.css';


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      counter: this.props.counter
    }
  }
  
      nextNumber = () => {
        if (this.state.counter < 50) {
          this.setState(state => ({
            counter: state.counter + 1
        }))
      }
    }
      prevNumber = () => {
        if (this.state.counter > -50) {
          this.setState(state => ({
            counter: state.counter -1
        }))
      }
    }
      randomNumber = () => {
       this.setState({
         counter: +(Math.random() * (50 - -50) + -50).toFixed(0)
       })
      }
  
      resNumber = () => {
        this.setState({
          counter: this.props.counter
        })
      }
  
  render() {
    const {counter} = this.state;
    return (
      <div className="app">
        <div className="counter">{counter}</div>
        <div className="controls">
          <button onClick={this.nextNumber}>INC</button>
          <button onClick={this.prevNumber}>DEC</button>
          <button onClick={this.randomNumber}>RND</button>
          <button onClick={this.resNumber}>RESET</button>
        </div>
      </div>
    )
  }
}

export default App;
