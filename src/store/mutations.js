import * as types from './mutations-types'

// mutations里面的参数，第一个默认为state，接下来的为自定义参数
export const mutations = {

    //  es6的计算属性命名功能来使用一个常量作为函数名
    [types.SELECTTODO](state, selected) {
        state.unselect = null
        state.selected = selected
    },

    [types.UNSELECTTODO](state) {
        state.unselect = state.selected
        state.selected = null
    },

    [types.NEXTTODO](state) {
        if (state.currentIndex < state.todos.length - 1) {
            state.currentIndex++
        }
    },

    [types.PREVTODO](state) {
        if (state.currentIndex > 0) {
            state.currentIndex--
        }
    },

    [types.DELETETASK](_, { task }) {
        task.deleted = true
    },

    [types.TOGGLEEDITING](state) {
        if (state.editing && state.editing.text) {
            state.selected.todo.tasks.unshift({
                title: state.editing.text,
                date: new Date(),
                done: false,
                deleted: false
            })
        }
        state.editing = state.editing ? null : { text: '' }
    }
}