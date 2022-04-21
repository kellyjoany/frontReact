import { useState } from 'react';
import styled from 'styled-components';

const Container = styled.div`
	display: flex;
	flex-direction: column;
  align-items: center;
  justify-content: center;
	padding: 5% 0 10% 0;
`;

const Form = styled.form`
  display: flex;
  flex-direction: row;
`;

const Input = styled.input`
  margin: 12px 16px;
	border: 
` ;

const Button = styled.button`
  padding: 8px 12px;
`;


export const SquareForm = ({ columnsObject, createBoxes }) => {
	const [lines, setLines] = useState(1);
  const [columns, setColumns] = useState(1);

	return (
		<Container>
			{columnsObject}
			<Form>
				<label>
					Columns:
					<Input type="number" value={columns} onChange={(e) => setColumns(e.target.value >= 0 ? e.target.value : 1)} />
				</label>
				<label>
					Lines:
					<Input type="number" value={lines} onChange={(e) => setLines(e.target.value >= 0 ? e.target.value : 1)} />
				</label>
			</Form>
			<Button onClick={() => createBoxes(columns, lines)}>Create</Button>
		</Container>
	)
};
