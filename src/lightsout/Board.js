import React, { Component } from "react";
import Cell from "./Cell";
import "./Board.css";
import { Button } from '../components/ButtonElements';
import { withRouter } from 'react-router';
import {Modal} from '../Modal/modal'

/** Game board of Lights out.
 *
 * Properties:
 *
 * - nrows: number of rows of board
 * - ncols: number of cols of board
 * - chanceLightStartsOn: float, chance any cell is lit at start of game
 *
 * State:
 *
 * - hasWon: boolean, true when board is all off
 * - board: array-of-arrays of true/false
 *
 *    For this board:
 *       .  .  .
 *       O  O  .     (where . is off, and O is on)
 *       .  .  .
 *
 *    This would be: [[f, f, f], [t, t, f], [f, f, f]]
 *
 *  This should render an HTML table of individual <Cell /> components.
 *
 *  This doesn't handle any clicks --- clicks are on individual cells
 *
 **/
//
class Board extends Component {
  static defaultProps = {
    nrows: 5,
    ncols: 5,
    chanceLightStartsOn: 0.25,
    aboutdataz : 'Lights Out is a puzzle game consisting of a grid of lights that are either on (light green) or off (dark green). In classic mode, pressing any light will toggle it and its adjacent lights. In variant mode, pressing a light will toggle all the lights in its row and column. The goal of the game is to switch all the lights off.',
    abouturlz : 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS5AIo_ZEGy-pOSwea3YY_iD5yVxCUHIH61sw&usqp=CAU'
  };
  constructor(props) {
    super(props);

    // TODO: set initial state
    this.state = {
      hasWon: false,
      board: this.createBoard(),
      showModal : false, 
    };
    this.openModal = this.openModal.bind(this);
  }

  /** create a board nrows high/ncols wide, each cell randomly lit or unlit */

  createBoard() {
    let board = [];
    // TODO: create array-of-arrays of true/false values
    for (let y = 0; y < this.props.nrows; y++) {
      let row = [];
      for (let x = 0; x < this.props.ncols; x++) {
        row.push(Math.random() < this.props.chanceLightStartsOn);
      }
      board.push(row);
    }
    return board;
  }

  /** handle changing a cell: update board & determine if winner */

  flipCellsAround(coord) {
    let { ncols, nrows } = this.props;
    let board = this.state.board;
    let [y, x] = coord.split("-").map(Number);

    function flipCell(y, x) {
      // if this coord is actually on board, flip it

      if (x >= 0 && x < ncols && y >= 0 && y < nrows) {
        board[y][x] = !board[y][x];
      }
    }
    // TODO: flip this cell and the cells around it
    flipCell(y, x); //Flip initial cell
    flipCell(y, x - 1); //flip left
    flipCell(y, x + 1); //flip right
    flipCell(y - 1, x); //flip below
    flipCell(y + 1, x); //flip above

    // win when every cell is turned off
    // TODO: determine is the game has been won
    let hasWon = board.every(row => row.every(cell => !cell));

    this.setState({ board: board, hasWon: hasWon });
  }


  openModal() {
    this.setState(
      {
        showModal : (this.state.showModal ? false : true)
      });
  }

  /** Render game board or winning message. */
  makeTable() {
    let tblBoard = [];
    for (let y = 0; y < this.props.nrows; y++) {
      let row = [];
      for (let x = 0; x < this.props.ncols; x++) {
        let coord = `${y}-${x}`;
        row.push(
          <Cell
            key={coord}
            isLit={this.state.board[y][x]}
            flipCellsAroundMe={() => this.flipCellsAround(coord)}
          />
        );
      }
      tblBoard.push(<tr key={y}>{row}</tr>);
    }
    return (
      <table className='Board'>
        <tbody>{tblBoard}</tbody>
      </table>
    );
  }
  render() {

    const { history } = this.props;
    
    return (
      <div>
      <div className='containerz'>
      <Modal abouturl={this.props.abouturlz} aboutdata ={this.props.aboutdataz} showModal={this.state.showModal} setShowModal={this.openModal} />
      </div>
      <div className='mainz'>
        {this.state.hasWon ? (
          <div className='winner'>
            <span className='neon-orange'>YOU</span>
            <span className='neon-blue'>WIN!</span>
          </div>
        ) : (
          <div className="mobilezoom">
            <div className='Board-title'>
              <div className='neon-orange'>Lights</div>
              <div className='neon-blue'>Out</div>
            </div>
            <br/>
              <br/>
            <Button onClick={this.openModal}>How to play ?</Button>
            <br/>
            <br/>
            {this.makeTable()}
            <br/>
        <br/>
            <Button  onClick={() => history.push('/')} primary='true' dark='true'>
      GO BACK
    </Button>
          </div>

        )}
        <br/>
        
        <br/>
      </div>
      </div>
    );
  }
}

export default withRouter(Board);
