import './App.css';
import { useState } from 'react';
import styled from 'styled-components';
import { SquareForm } from './components/SquareForm';

const Box = styled.div`
  height: ${(props) => `${props.height * 0.5}vh;`};
  width: ${(props) => ` ${props.width * 0.5}vw;`};
  background: rgb(109, 158, 235);
  border-width: 2px;
  border-color: #fff;
  border-style: solid;
`;

const Flex = styled.div`
  display: flex;
  flex-direction: row;
`;

function App() {
  const [columnsObject, setColumnsObject] = useState(<Box width={100} height={100} />);

  const createBoxes = (columns, lines) => {
    columns = columns > 0 ? columns : 1;
    lines = lines > 0 ? lines : 1;

    let linesBoxes = [];
    for (let i = 0; i < columns; i++) {
      linesBoxes.push(<Box key={i} width={100 / columns} height={100 / lines} />);
    }
    let columnsBoxes = [];
    for (let i = 0; i < lines; i++) {
      columnsBoxes.push(<Flex key={i}>{linesBoxes}</Flex>);
    }
    setColumnsObject(columnsBoxes);
  }

  return (
    <div className="App">
      <header />
      <SquareForm createBoxes={createBoxes} columnsObject={columnsObject} />
    </div>
  );
}

export default App;
