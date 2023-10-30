import { Component } from 'react';
import './App.css';

class WhoAmI extends Component {
    constructor(props) {
      super(props);
      this.state = {
        age: 27,
        text: '+++'
      }
    }

    nextYear = () => {
      this.setState(state => ({
          age: state.age + 1
        }))
    }

  render() {
    const {name, surname, link} = this.props;
    return (
      <div>
        <button onClick={this.nextYear}>{this.state.text}</button>
        <h1>My name is {name}, surname - {surname}, age - {this.state.age}</h1>
        <a href={link}>My profile</a>
      </div>
    )
  }
}



function App() {
  return (
  <div className="App">
    <WhoAmI name="John" surname="Smith" link="facebook.com"/>
    <WhoAmI name="Alex" surname="Shepard" link="vk.com"/>
  </div>
  );
}

export default App;
