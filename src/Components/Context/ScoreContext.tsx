import * as React from "react";

interface IScoreContext extends IState {
  updateScore: (option: string) => void;
}

interface IState {
  score: number;
}

export const ScoreContext = React.createContext<IScoreContext | null>(null);

export class ScoreProvider extends React.Component<{}, IState> {
  constructor(props: {}) {
    super(props);
    this.state = {
      score: 0
    };
    this.updateScore = this.updateScore.bind(this);
  }

  public updateScore(tet: string) {
    if (tet === "increase") {
      this.setState(prevState => ({ score: prevState.score + 1 }));
    } else {
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
