import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { addTask } from '../features/TasksSlice'

export default function AddTask() {
    const [text, setText] = useState('')
    const dispatch = useDispatch()

    const onSubmit = (e) => {
        e.preventDefault()
        if (!text.trim()) return
        dispatch(addTask(text.trim()))
        setText('')
    }

    return (
        <form onSubmit={onSubmit} className="add-task">
            <input
                value={text}
                onChange={(e) => setText(e.target.value)}
                placeholder="Write a new task..."
            />
            <button type="submit">Add</button>
        </form>
    )
}
