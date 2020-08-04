import React from "react"
import "./style.css"

const Buttons = ({tasks, hideDoneTasks}) => {
	if (tasks.length === 0) {
		return null;
	}
	return (
		<div className="buttons">
	
			<button 
			className="buttons__done"
			disabled={tasks.every(({ done }) => done === false)} >
				{hideDoneTasks === false ? "Ukryj ukończone" : "Pokaż wszystkie"}
			</button>

			<button 
			className="buttons__done" 
			disabled={tasks.every(({done}) => done)} >
				Ukończ wszystkie
			</button>

		</div>	
	)
};
export default Buttons;