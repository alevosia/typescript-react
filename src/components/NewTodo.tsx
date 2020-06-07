import React, { useRef } from 'react'
import './NewTodo.css'

interface Props {
	onAddTodo: (text: string) => void
}

const NewTodo: React.FC<Props> = ({ onAddTodo }) => {
	const textInputRef = useRef<HTMLInputElement>(null)

	const submitHandler = (event: React.FormEvent) => {
		event.preventDefault()
		const enteredText = textInputRef.current?.value

		if (enteredText) {
			onAddTodo(enteredText)
		}
	}

	return (
		<form onSubmit={submitHandler}>
			<div>
				<label htmlFor="todo-text">Todo Text</label>
				<input ref={textInputRef} type="text" id="todo-text" className="form-control" />
			</div>
			<button type="submit">ADD TODO</button>
		</form>
	)
}

export default NewTodo
