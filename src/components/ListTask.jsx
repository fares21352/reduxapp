import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import Task from './Task'
import { setFilter } from '../features/TasksSlice'

export default function ListTask() {
    const { items, filter } = useSelector(state => state.tasks)
    const dispatch = useDispatch()

    const filtered = items.filter(t => {
        if (filter === 'all') return true
        if (filter === 'done') return t.isDone
        if (filter === 'not_done') return !t.isDone
        return true
    })

    return (
        <div className="list-task">
            <div className="filters">
                <button onClick={() => dispatch(setFilter('all'))} className={filter === 'all' ? 'active' : ''}>All</button>
                <button onClick={() => dispatch(setFilter('done'))} className={filter === 'done' ? 'active' : ''}>Done</button>
                <button onClick={() => dispatch(setFilter('not_done'))} className={filter === 'not_done' ? 'active' : ''}>Not Done</button>
            </div>

            {filtered.length === 0 ? (
                <p>No tasks yet</p>
            ) : (
                filtered.map(task => <Task key={task.id} task={task} />)
            )}
        </div>
    )
}
