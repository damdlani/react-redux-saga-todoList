import React from "react"
import "./style.css"

const Buttons = ({tasks, hideDone, toggleHideDone, setEachDone}) => {
	if (tasks.length === 0) {
		return null;
	}
	return (
		<div className="buttons">
	
			<button 
			className="buttons__done"
			disabled={tasks.every(({ done }) => done === false)}
			onClick={toggleHideDone}
			>
				{hideDone === false ? "Ukryj ukończone" : "Pokaż wszystkie"}
			</button>

			<button 
			className="buttons__done" 
			disabled={tasks.every(({done}) => done)}
			onClick={setEachDone}
			>
				Ukończ wszystkie
			</button>

		</div>	
	)
};
export default Buttons;