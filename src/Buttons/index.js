import React from "react"
import { ButtonsBox, Button } from './styled';

const Buttons = ({tasks, hideDone, toggleHideDone, setEachDone}) => {
	if (tasks.length === 0) {
		return null;
	}
	return (
		<ButtonsBox>
	
			<Button
			disabled={tasks.every(({ done }) => done === false)}
			onClick={toggleHideDone}
			>
				{hideDone === false ? "Ukryj ukończone" : "Pokaż wszystkie"}
			</Button>

			<Button
			disabled={tasks.every(({done}) => done)}
			onClick={setEachDone}
			>
				Ukończ wszystkie
			</Button>

		</ButtonsBox>	
	)
};
export default Buttons;