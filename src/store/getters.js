import { tomorrow } from '../js/time.js'

export const getters = {
    currentTodo(state) {
        return state.todos[state.currentIndex]
    },

    todayTasks(state) {

        // 存储当天任务
        const tasks = []

        state.todos.forEach(todo => {

            todo.tasks.forEach(task => {

                if (task.date <= tomorrow && !task.done && !task.deleted) {

                    // 存储当天未完成的任务
                    tasks.push(task)
                }
            })
        })
        return tasks;
    }
}