import React from "react"
import { useDispatch, useSelector } from 'react-redux';
import { toggleHideDone, setEachDone, selectTasks, selectHideDone, selectIsEveryDone, selectIsNoneDone} from '../tasksSlice';
import { ButtonsBox, Button } from '../../styledButtons';

const Buttons = () => {
	const tasks = useSelector(selectTasks);
	const hideDone = useSelector(selectHideDone);
	const isEveryDone = useSelector(selectIsEveryDone);
	const isNoneDone = useSelector(selectIsNoneDone);
	const dispatch = useDispatch();

	if (tasks.length === 0) {
		return null;
	}

	return (
		<ButtonsBox>
			<Button
				disabled={isNoneDone}
				onClick={() => dispatch(toggleHideDone())}
			>
				{hideDone === false ? "Ukryj ukończone" : "Pokaż wszystkie"}
			</Button>

			<Button
				disabled={isEveryDone}
				onClick={() => dispatch(setEachDone())}
			>
				Ukończ wszystkie
			</Button>
		</ButtonsBox>	
	)
};
export default Buttons;