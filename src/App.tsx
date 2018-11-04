import React, { Component } from 'react';
import Board from './Board/Board';

class App extends Component {
    public render() {
        return (
            <React.Fragment>
                <h1>Welcome</h1>
                <Board />
            </React.Fragment>
        );
    }
}

export default App;
