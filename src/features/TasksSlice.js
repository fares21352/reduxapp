import { createSlice, nanoid } from '@reduxjs/toolkit'

const tasksSlice = createSlice({
    name: 'tasks',
    initialState: {
        items: [],
        filter: 'all'
    },
    reducers: {
        addTask: {
            reducer(state, action) {
                state.items.push(action.payload)
            },
            prepare(description) {
                return { payload: { id: nanoid(), description, isDone: false } }
            }
        },
        toggleDone(state, action) {
            const t = state.items.find(task => task.id === action.payload)
            if (t) t.isDone = !t.isDone
        },
        editTask(state, action) {
            const { id, description } = action.payload
            const t = state.items.find(task => task.id === id)
            if (t) t.description = description
        },
        deleteTask(state, action) {
            state.items = state.items.filter(task => task.id !== action.payload)
        },
        setFilter(state, action) {
            state.filter = action.payload
        }
    }
})

export const { addTask, toggleDone, editTask, deleteTask, setFilter } = tasksSlice.actions
export default tasksSlice.reducer
