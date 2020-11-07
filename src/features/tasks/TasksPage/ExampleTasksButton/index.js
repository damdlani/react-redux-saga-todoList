import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { ButtonsBox, Button } from '../../styledButtons';
import { fetchExampleTasks, selectIsExampleTaskLoading } from '../tasksSlice';

export const ExampleTasksButton = () => {
	const dispatch = useDispatch(); 
	const loading = useSelector(selectIsExampleTaskLoading)
	
    return (
		<ButtonsBox>
			<Button 
				disabled={loading}	
				onClick={() => dispatch(fetchExampleTasks())}
			>
				{loading ? 'Ładowanie...' : 'Pobierz losowe zadanie'}
			</Button>
		</ButtonsBox>	
	)
};