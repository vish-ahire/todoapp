import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useState } from 'react'
import { useEffect } from 'react';
import { addTodo } from '../Store/todoSlice';

function CreateTask() {

    const api = useSelector(s => s.todo.todos);

    const data = [...api]
    
    const [input, setInput] = useState({ title: "", desc: "", completed: false })
    const [error, setError] = useState({ title: "" })
    const dispatch = useDispatch()
    const handleClick = () => {
        let error = {}
        !input.title ? error.title = "Title should not be empty" : null
        !input.desc ? error.desc = "Description shoould not be empty" : null
        setError(error)
    }
    const handlechange = (e) => setInput({ ...input, [e.target.name]: e.target.value })

    useEffect(() => {

        if (!Object.keys(error).length) {
            dispatch(addTodo({ ...input, id: Date.now() }))
            setInput({ ...input, title: "", desc: "" })
        }
    }, [error])
    return (
        <div className="flex flex-col  items-center">
            <div className="flex flex-col w-72 ">
                <div className="flex justify-between items-center" >
                    <label >Title</label>
                    <input
                        className="border p-1 m-2 border-2px bg-slate-300"
                        type="text"
                        name="title"
                        placeholder="Title"
                        value={input.title}
                        onChange={handlechange}
                    ></input>
                </div>
                {error.title ? <p className="text-red-500">{error.title}</p> : null}
                <div className="flex justify-between items-center">
                    <label className="">Description</label>
                    <textarea
                        name="desc"
                        rows={6}

                        value={input.desc}
                        onChange={handlechange}
                        className=' border border-solid m-2 p-2 h-10 w-48 '
                        placeholder="Description">
                    </textarea>
                </div>
            </div>
            {error.desc && <p className="text-red-500">{error.desc}</p>}
            <button className="bg-blue-400 m-2 p-2 rounded-xl" onClick={handleClick}>CreateTask</button>
        </div>
    )
}

export default CreateTask