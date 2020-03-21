import axios from "axios";

const state = {
	todo_data: [
		{
			id: 1,
			title: "fai un bel sito",
			completed: false
		},
		{
			id: 2,
			title: "ama marghi",
			completed: true
		}
	]
};

const getters = {
	getAllTodos: (state) => state.todo_data
};

const actions = {
	async fetchTodos ({commit}) {
		const response = await axios.get("https://jsonplaceholder.typicode.com/todos")
			.catch(err => console.log(err));
		commit("setTodos", response.data)
	},

	async fetchSomeTodos ({commit}, event) {
		//get selected max number
		const max = parseInt(event.target.options[event.target.options.selectedIndex].innerText);
		const response = await axios.get(`https://jsonplaceholder.typicode.com/todos?_limit=${max}`)
			.catch(err => console.log(err));
		commit("setTodos", response.data)
	},

	async postTodo ({commit}, title) {
		const response = await axios.post("https://jsonplaceholder.typicode.com/todos", {title, completed: false})
				.catch(err => console.log(err))
		commit("addTodo", response.data)
	},

	async deleteTodo ({commit}, id) {
		await axios.delete(`https://jsonplaceholder.typicode.com/todos/${id}`)
				.catch(err => console.log(err))
		commit("removeTodo", id)
	}
};

const mutations = {
	setTodos: (state, todos) => {
		//state.todo_data = state.todo_data.concat(todos)
		state.todo_data = todos
	},
	addTodo: (state, todo) => {
		state.todo_data.unshift(todo)
	},
	removeTodo: (state, id) => {
		state.todo_data = state.todo_data.filter((el) => el.id !== id)
	}
};

export default {
	state,
	getters,
	actions,
	mutations
}