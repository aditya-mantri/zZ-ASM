import React, { Component } from "react";
import Dice from "./Dice";
import ScoreTable from "./ScoreTable";
import "./Game.css";
import { Button } from '../components/ButtonElements';
import { withRouter } from 'react-router';
import {Modal} from '../Modal/modal'

const NUM_DICE = 5;
const NUM_ROLLS = 3;



class Game extends Component {

  static defaultProps = {
    aboutdataz : 'Roll out the dice. Each turn consists of a maximum of three rolls. The first roll must be made with all five dice. If the player chooses to roll a second and, if desired, a third time, he may pick up any or all the dice and roll again. It is the skillful use of these two optional rolls of the dice that can turn an unlucky first or second roll into a high-scoring turn. A score must be entered after the last roll in the appropriate box or a zero entered in a box of the player’s choice.',
    abouturlz : 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQq3fbPUbJf97E4X57Lc6eYX_WYMCckk7UVvg&usqp=CAU'
  };

  constructor(props) {
    super(props);
    this.state = {
      dice: Array.from({ length: NUM_DICE }),
      locked: Array(NUM_DICE).fill(false),
      rollsLeft: NUM_ROLLS,
      rolling: false,
      showModal : false, 
      scores: {
        ones: undefined,
        twos: undefined,
        threes: undefined,
        fours: undefined,
        fives: undefined,
        sixes: undefined,
        threeOfKind: undefined,
        fourOfKind: undefined,
        fullHouse: undefined,
        smallStraight: undefined,
        largeStraight: undefined,
        yahtzee: undefined,
        chance: undefined
      }
    };
    console.log(this.state);
    this.roll = this.roll.bind(this);
    this.doScore = this.doScore.bind(this);
    this.toggleLocked = this.toggleLocked.bind(this);
    this.animateRoll = this.animateRoll.bind(this);
    this.openModal = this.openModal.bind(this);
  }
  componentDidMount() {
    this.animateRoll();
  }

  animateRoll() {
    this.setState({ rolling: true }, () => {
      setTimeout(this.roll, 1000);
    });
  }

  roll(evt) {
    // roll dice whose indexes are in reroll
    this.setState(st => ({
      dice: st.dice.map((d, i) =>
        st.locked[i] ? d : Math.ceil(Math.random() * 6)
      ),
      locked: st.rollsLeft > 1 ? st.locked : Array(NUM_DICE).fill(true),
      rollsLeft: st.rollsLeft - 1,
      rolling: false
    }));
  }

  toggleLocked(idx) {
    // toggle whether idx is in locked or not
    if (this.state.rollsLeft > 0 && !this.state.rolling) {
      this.setState(st => ({
        locked: [
          ...st.locked.slice(0, idx),
          !st.locked[idx],
          ...st.locked.slice(idx + 1)
        ]
      }));
    }
  }

  openModal() {
    this.setState(
      {
        showModal : (this.state.showModal ? false : true)
      });
  }

  doScore(rulename, ruleFn) {
    // evaluate this ruleFn with the dice and score this rulename
    this.setState(st => ({
      scores: { ...st.scores, [rulename]: ruleFn(this.state.dice) },
      rollsLeft: NUM_ROLLS,
      locked: Array(NUM_DICE).fill(false)
    }));
    this.animateRoll();
  }

  displayRollInfo() {
    const messages = [
      "0 Rolls Left",
      "1 Roll Left",
      "2 Rolls Left",
      "Starting Round"
    ];
    return messages[this.state.rollsLeft];
  }

  render() {
    
    const { history } = this.props;
    const { dice, locked, rollsLeft, rolling, scores } = this.state;
    return (
      <div>
      <div className='containerz'>
      <Modal abouturl={this.props.abouturlz} aboutdata ={this.props.aboutdataz} showModal={this.state.showModal} setShowModal={this.openModal} />
      </div>
      <div className='appgame'>
      <div className='Game'>
         <Button onClick={this.openModal}>How to play ?</Button>
        <header className='Game-header'>
          <h1 className='App-title'>Yahtzee!</h1>
          <section className='Game-dice-section'>
            <Dice
              dice={dice}
              locked={locked}
              handleClick={this.toggleLocked}
              disabled={rollsLeft === 0}
              rolling={rolling}
            />
            <div className='Game-button-wrapper'>
              <button
                className='Game-reroll'
                disabled={locked.every(x => x) || rollsLeft === 0 || rolling}
                onClick={this.animateRoll}
              >
                {this.displayRollInfo()}
              </button>
            </div>
          </section>
        </header>
        <ScoreTable doScore={this.doScore} scores={scores} />
         <br/>
        <Button  onClick={() => history.push('/')} primary='true' dark='true'>
           GO BACK
       </Button>
       <br/>
      </div>
      </div>
      </div>

    );
  }
}

export default withRouter(Game);
