import Vue from 'vue'
import Vuex from 'vuex'
import TodoList from './modules/todoList'

Vue.use(Vuex)

export default new Vuex.Store({
	state: {
	},
	mutations: {
	},
	actions: {
	},
	modules: {
		TodoList
	}
})
