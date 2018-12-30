import * as React from "react";
import { INCREASE_SCORE, ZERO_SCORE } from "../Constants";

export interface IScoreContext extends IState {
  updateScore: (option: string) => void;
  score: number;
}

interface IState {
  score: number;
}

export const ScoreContext = React.createContext<IScoreContext>({
  score: 0,
  updateScore: () => {
    console.log("dupa");
  }
});

export class ScoreProvider extends React.Component<{}, IState> {
  constructor(props: {}) {
    super(props);
    this.state = {
      score: 0
    };
    this.updateScore = this.updateScore.bind(this);
  }

  public updateScore(option: string) {
    if (option === INCREASE_SCORE) {
      this.setState(prevState => ({ score: prevState.score + 1 }));
    } else if (option === ZERO_SCORE) {
      this.setState({ score: 0 });
    }
  }

  public render() {
    const { score } = this.state;
    return (
      <ScoreContext.Provider value={{ score, updateScore: this.updateScore }}>
        {this.props.children}
      </ScoreContext.Provider>
    );
  }
}

export const ScoreConsumer = ScoreContext.Consumer;
