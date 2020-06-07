import React from 'react'
import { Todo } from '../typings'
import './TodoList.css'

interface Props {
	items: Todo[]
	onDeleteTodo: (id: string) => void
}

const TodoList: React.FC<Props> = ({ items, onDeleteTodo }) => {
	return (
		<ul>
			{items.map((todo) => (
				<li key={todo.id}>
					<span>{todo.text}</span>
					<span
						style={{
							marginLeft: '15px',
							fontSize: '24px',
							cursor: 'pointer',
						}}
						onClick={() => onDeleteTodo(todo.id)}
					>
						&times;
					</span>
				</li>
			))}
		</ul>
	)
}

export default TodoList
