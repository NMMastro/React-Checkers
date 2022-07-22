import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

class Piece extends React.Component {

}

class Square extends React.Component {
  render() {
    return(
      <button className={"square " + this.props.color}>
        {this.props.value}
      </button>
    );
  }
}

class GameBoard extends React.Component {

  renderSquare(i, color) {
    return <Square value={i} color={color}/>
  }

  render() {
    return(
      <div className="board centered">
        <div className="board-row">
          {this.renderSquare(1, "light-square")}
          {this.renderSquare(2, "dark-square")}
          {this.renderSquare(3, "light-square")}
          {this.renderSquare(4, "dark-square")}
          {this.renderSquare(5, "light-square")}
          {this.renderSquare(6, "dark-square")}
          {this.renderSquare(7, "light-square")}
          {this.renderSquare(8, "dark-square")}
        </div>
        <div className="board-row">
          {this.renderSquare(9, "dark-square")}
          {this.renderSquare(10, "light-square")}
          {this.renderSquare(11, "dark-square")}
          {this.renderSquare(12, "light-square")}
          {this.renderSquare(13, "dark-square")}
          {this.renderSquare(14, "light-square")}
          {this.renderSquare(15, "dark-square")}
          {this.renderSquare(16, "light-square")}
        </div>
        <div className="board-row">
          {this.renderSquare(1, "light-square")}
          {this.renderSquare(2, "dark-square")}
          {this.renderSquare(3, "light-square")}
          {this.renderSquare(4, "dark-square")}
          {this.renderSquare(5, "light-square")}
          {this.renderSquare(6, "dark-square")}
          {this.renderSquare(7, "light-square")}
          {this.renderSquare(8, "dark-square")}
        </div>
        <div className="board-row">
          {this.renderSquare(9, "dark-square")}
          {this.renderSquare(10, "light-square")}
          {this.renderSquare(11, "dark-square")}
          {this.renderSquare(12, "light-square")}
          {this.renderSquare(13, "dark-square")}
          {this.renderSquare(14, "light-square")}
          {this.renderSquare(15, "dark-square")}
          {this.renderSquare(16, "light-square")}
        </div>
        <div className="board-row">
          {this.renderSquare(1, "light-square")}
          {this.renderSquare(2, "dark-square")}
          {this.renderSquare(3, "light-square")}
          {this.renderSquare(4, "dark-square")}
          {this.renderSquare(5, "light-square")}
          {this.renderSquare(6, "dark-square")}
          {this.renderSquare(7, "light-square")}
          {this.renderSquare(8, "dark-square")}
        </div>
        <div className="board-row">
          {this.renderSquare(9, "dark-square")}
          {this.renderSquare(10, "light-square")}
          {this.renderSquare(11, "dark-square")}
          {this.renderSquare(12, "light-square")}
          {this.renderSquare(13, "dark-square")}
          {this.renderSquare(14, "light-square")}
          {this.renderSquare(15, "dark-square")}
          {this.renderSquare(16, "light-square")}
        </div>
        <div className="board-row">
          {this.renderSquare(1, "light-square")}
          {this.renderSquare(2, "dark-square")}
          {this.renderSquare(3, "light-square")}
          {this.renderSquare(4, "dark-square")}
          {this.renderSquare(5, "light-square")}
          {this.renderSquare(6, "dark-square")}
          {this.renderSquare(7, "light-square")}
          {this.renderSquare(8, "dark-square")}
        </div>
        <div className="board-row">
          {this.renderSquare(9, "dark-square")}
          {this.renderSquare(10, "light-square")}
          {this.renderSquare(11, "dark-square")}
          {this.renderSquare(12, "light-square")}
          {this.renderSquare(13, "dark-square")}
          {this.renderSquare(14, "light-square")}
          {this.renderSquare(15, "dark-square")}
          {this.renderSquare(16, "light-square")}
        </div>
      </div>
    );
  }
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<GameBoard />)
