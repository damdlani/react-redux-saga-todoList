import React from "react"
import { useDispatch, useSelector } from 'react-redux';
import { selectTasks, toggleHideDone, setEachDone} from '../tasksSlice';
import { ButtonsBox, Button } from './styled';

const Buttons = () => {
	const { tasks, hideDone } = useSelector(selectTasks);
	const dispatch = useDispatch();

	if (tasks.length === 0) {
		return null;
	}

	return (
		<ButtonsBox>
			<Button
			disabled={tasks.every(({ done }) => done === false)}
			onClick={() => dispatch(toggleHideDone())}
			>
				{hideDone === false ? "Ukryj ukończone" : "Pokaż wszystkie"}
			</Button>

			<Button
			disabled={tasks.every(({done}) => done)}
			onClick={() => dispatch(setEachDone())}
			>
				Ukończ wszystkie
			</Button>
		</ButtonsBox>	
	)
};
export default Buttons;