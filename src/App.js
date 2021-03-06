import React, { Component } from 'react';
import { add, sub, div, mul } from './operators';
import generate from './generate';
import './App.css';

const WIN = 'WIN';
const LOSE = 'LOSE';

class App extends Component {
  state = {
    goal: 4,
    moves: 3,
    initResult: 3,
    currentResult: 3,
    operators: [add(4), sub(4), div(4)]
  };

  constructor(props) {
    super(props);
    const initState = {
     ...generate(),
     gameEnd: false,
     gameResult: null
    }
  
    this.initState = initState;
  
    // Create a copy of initState
    this.state = { ...initState };
  }
  
  doReset = e => {
    e.preventDefault();
    this.setState(this.initState);
  }

  doClickButton = op => e => {
    e.preventDefault();
    if (this.state.gameEnd) return 

    this.setState(prevState => {
      // Calculate the current result
      const currentResult = op.func(prevState.currentResult);
      // Reduce remaining moves
      const moves = prevState.moves - 1;

      const gameEnd = moves === 0;
      const gameResult = currentResult === prevState.goal ? WIN : LOSE;

      return { currentResult, moves, gameEnd, gameResult };
    })
  }

  render() {
    return (
      <div className="App">
        <div className="show-archive">
          <div className="goal-archive">
            <h1 className="goal-archive-text">4</h1>
            <p className="goal-archive-label">goal</p>
          </div>
          <div className="move-archive">
            <h1 className="move-archive-text">3</h1>
            <p className="move-archive-label">moves</p>
          </div>
        </div>
        <div className="display">3</div>
        {this.state.gameEnd ? this.state.gameResult : null}
        <div className="buttons">
          {this.state.operators.map(op => (
            <button 
              key={op.label}
              className="btn"
              onClick={this.doClickButton(op)}
            >
              {op.label}
            </button>
          ))}
          <button className="btn btn-secondary btn-clear" onClick={this.doReset}>CLR</button>
          <button className="btn btn-secondary btn-help">
            <i className="help-icon">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                <path
                  fill="#fff"
                  d="M504 256c0 136.997-111.043 248-248 248S8 392.997 8 256C8 119.083 119.043 8 256 8s248 111.083 248 248zM262.655 90c-54.497 0-89.255 22.957-116.549 63.758-3.536 5.286-2.353 12.415 2.715 16.258l34.699 26.31c5.205 3.947 12.621 3.008 16.665-2.122 17.864-22.658 30.113-35.797 57.303-35.797 20.429 0 45.698 13.148 45.698 32.958 0 14.976-12.363 22.667-32.534 33.976C247.128 238.528 216 254.941 216 296v4c0 6.627 5.373 12 12 12h56c6.627 0 12-5.373 12-12v-1.333c0-28.462 83.186-29.647 83.186-106.667 0-58.002-60.165-102-116.531-102zM256 338c-25.365 0-46 20.635-46 46 0 25.364 20.635 46 46 46s46-20.636 46-46c0-25.365-20.635-46-46-46z"
                />
              </svg>
            </i>
          </button>
        </div>
      </div>
    );
  }
}

export default App;
