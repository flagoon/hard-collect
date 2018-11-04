import * as React from 'react';

interface IProps {
    id: string;
}

const Cell: React.SFC<IProps> = ({id}) => {
    return <div>{id}</div>
}

export default Cell;