import React, { useState } from 'react'

// components
import NewTodo from './components/NewTodo'
import TodoList from './components/TodoList'
import { Todo } from './typings'

const App: React.FC = () => {
	const [todos, setTodos] = useState<Todo[]>([])

	const addTodoHandler = (text: string) => {
		const newTodo: Todo = {
			id: (todos.length + 1).toString(),
			text,
		}

		setTodos((previousTodos) => [...previousTodos, newTodo])
	}

	const deleteTodoHandler = (todoId: string) => {
		setTodos((previousTodos) => previousTodos.filter((todo) => todo.id !== todoId))
	}

	return (
		<div className="App">
			<NewTodo onAddTodo={addTodoHandler} />
			<TodoList items={todos} onDeleteTodo={deleteTodoHandler} />
		</div>
	)
}

export default App
