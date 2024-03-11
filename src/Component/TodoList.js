import { useDispatch } from "react-redux"
import { updateStatus } from "../Store/todoSlice"

const TodoList = ({ task }) => {
    const { id, title, desc, completed } = task
    const dispatch = useDispatch()
    const handleChange = (id) => {
        // style={{ textDecorationLine: completed ? 'line-through' : 'none' }}
        dispatch(updateStatus(id))
    }
    return (<>
        <div className= {`${!completed?'bg-green-300':'bg-slate-500'} text-left px-24 m-2 w-96   shadow-xl rounded-2xl`}>
            <div className="flex flex-wrap  font-bold ">
                <input type='checkbox' className=" mr-3 " checked={completed} onChange={() => handleChange(id)} />
                <h1 className={`text-decoration-line: ${completed?'line-through':'none'}`} > {title}</h1>
            </div>
            <h4 className="text-left font-serif">{desc}</h4>

        </div>
    </>)

}

export default TodoList;