import classes from "./List.module.css";
import { useState } from "react";

function List() {
	const [task, setTask] = useState();

	const addTask = (e) => {
		setTask(e.target.value);
	};
	function deleteTask() {}
	function reArrange() {}
	function taskHandle() {}

	return (
		<div>
			<h1>TO-DO-LIST</h1>
			<input type="text" id="inputHandle" placeholder="Enter a task"></input>
			<button id="buttonHandle" onClick={addTask}>
				Add
			</button>
			<ol>
				<li id="listHandle">{task}</li>
			</ol>
		</div>
	);
}
export default List;
