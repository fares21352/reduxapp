import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { toggleDone, editTask, deleteTask } from '../features/TasksSlice'

export default function Task({ task }) {
    const dispatch = useDispatch()
    const [editing, setEditing] = useState(false)
    const [text, setText] = useState(task.description)

    const save = () => {
        if (!text.trim()) return
        dispatch(editTask({ id: task.id, description: text.trim() }))
        setEditing(false)
    }

    return (
        <div className={`task ${task.isDone ? 'done' : ''}`}>
            <input
                type="checkbox"
                checked={task.isDone}
                onChange={() => dispatch(toggleDone(task.id))}
            />

            {editing ? (
                <>
                    <input value={text} onChange={(e) => setText(e.target.value)} />
                    <button onClick={save}>Save</button>
                    <button onClick={() => { setEditing(false); setText(task.description); }}>Cancel</button>
                </>
            ) : (
                <>
                    <span className="desc">{task.description}</span>
                    <button onClick={() => setEditing(true)}>Edit</button>
                    <button onClick={() => dispatch(deleteTask(task.id))}>Delete</button>
                </>
            )}
        </div>
    )
}
