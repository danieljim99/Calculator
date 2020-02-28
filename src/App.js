import React, {Component} from 'react';
import {evaluate} from 'mathjs';
import Body from "./components/Body";
import './style/App.css';

class App extends Component {
  state = {
    display: [],
    displayReg: [],
    science: false
  };

  appendDisplayHandler = (insert) => {
    let display = this.state.display.slice();

    if(insert === "<="){
      display.splice(display.length - 1, 1);
    } else {
      display.push(insert);
    }

    this.setState({display});
  }

  appendDisplayOperationHandler = (insert) => {
    this.setState({display: insert.slice()});
  }

  downArrowHandler = () => {
    let displayReg = this.state.displayReg.slice();

    displayReg.push(displayReg.shift());

    this.setState({displayReg});
  }

  upArrowHandler = () => {
    let displayReg = this.state.displayReg.slice();

    displayReg.unshift(displayReg.pop());

    this.setState({displayReg});
  }

  solveHandler = () => {
    try{
      let operation = "";
      this.state.display.forEach(elem => {
        operation += elem;
      });

      let displayReg = this.state.displayReg.slice();

      displayReg.push(this.state.display.slice());

      let display = evaluate(operation);

      display = display.toString().split("");

      this.setState({display, displayReg});
    } catch {
      this.setState({display: []});
    }
  }

  changeModeHandler = () => {
    this.setState({science: !this.state.science});
  }

  render() {
    return (
      <div className="App">
        <Body display={this.state.display} displayReg={this.state.displayReg} upArrow={this.upArrowHandler} downArrow={this.downArrowHandler} appendDisplay={this.appendDisplayHandler} appendDisplayOperation={this.appendDisplayOperationHandler} solve={this.solveHandler} changeMode={this.changeModeHandler} science={this.state.science} keys={["<=", "SM", "/", "*", "7", "8", "9", "-", "4", "5", "6", "+", "1", "2", "3", "=", "0", "."]} scienceKeys={["sin(", "cos(", "tan(", "(", ")"]}/>
      </div>
    )
  }
}

export default App;
