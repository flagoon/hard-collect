import * as React from 'react';
import Cell from './Cell/Cell';

const Board = (): JSX.Element => {
    const test = [];
    for (let i = 0; i < 10; i++) {
        test.push(i.toString());
    }

    return (
        <React.Fragment>
            {test.map(el => {
                return <Cell key={el} id={el} />;
            })}
        </React.Fragment>
    );
};

export default Board;
