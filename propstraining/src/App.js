import { Component } from 'react';
import './App.css';

class WhoAmI extends Component {
    constructor(props) {
      super(props);
      this.state = {
        age: 27,
        text: '+++',
        position: ''
      }
    }

    nextYear = () => {
      this.setState(state => ({
          age: state.age + 1
        }))
    }

    commitInputChanges = (e, color) => {
      console.log(color);
      this.setState({
        position: e.target.value
      })
    }

  render() {
    const {name, surname, link} = this.props;
    const {position, age} = this.state;
    console.log(this);
    return (
      <div>
        <button onClick={this.nextYear}>{this.state.text}</button>
        <h1>My name is {name}, surname - {surname}, 
        age - {age}, 
        position - {position}</h1>
        <a href={link}>My profile</a>
        <form>
          <span>Введіть посаду</span>
          <input type="text" onChange={(e) => this.commitInputChanges(e, 'some color')} />
        </form>
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
