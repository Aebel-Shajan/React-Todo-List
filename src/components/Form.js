import React, { useState } from "react";


function Form(props) {
	/* 
	1. We are setting the initial name value as "Use hooks!".
	2. We are defining a function whose job is to modify name, called setName().
	3. useState() returns these two things, so we are using array destructuring to capture them both in separate variables.
	*/
	const [name, setName] = useState("");
	
	function handleChange(e) {
		setName(e.target.value);
	}

	function handleSubmit(e) {
		e.preventDefault();
		if (name.length > 0) {
			props.addTask(name);
		}
		setName("");
	}

	return (
		<form onSubmit={handleSubmit}>
			<h2 className="label-wrapper">
				<label htmlFor="new-todo-input" className="label__lg">
					What needs to be done?
				</label>
			</h2>
			<input
				type="text"
				id="new-todo-input"
				className="input input__lg"
				name="text"
				autoComplete="off"
				value={name}
				onChange={handleChange}
			/>
			<button type="submit" className="btn btn__primarybtn__lg">
				Add
			</button>
		</form>
	)
}

export default Form;