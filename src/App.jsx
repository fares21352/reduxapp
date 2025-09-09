import React from 'react'
import AddTask from './components/AddTask'
import ListTask from './components/ListTask'

export default function App() {
    return (
        <div className="container">
            <h1>ToDo - Redux</h1>
            <AddTask />
            <ListTask />
        </div>
    )
}
