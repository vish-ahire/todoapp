import { useState, useEffect } from "react"
import { validateValue } from "./validateValue"
import {  useNavigate  } from "react-router-dom"
const Register = () => {
    const [input, setInput] = useState({
        email: "",
        password: "",
        age: 0
    })
    const navigate=useNavigate()
    const [Reg,setReg]=useState(false)
    const [error, setError] = useState({age:""})
    const handlechange = (e) => setInput({ ...input, [e.target.name]: e.target.value })
    const handleSubmit = (e) => {
        e.preventDefault()
        setError(validateValue(input))
    }
    useEffect(() => {
        if (!Object.keys(error).length ) {
            localStorage.setItem("userInfo", JSON.stringify(input));
            navigate('/login', { replace: true });
            setReg(true)
        }
    }, [error])

    return (
        <>
            <div className="text-center font-bold text-4xl my-10 ">Login</div>
            <div className="flex items-center flex-col ">
                <input
                    className="border rounded-xl border-1px  border-black m-2 p-1 placeholder:text-center"
                    type="email"
                    name="email"
                    placeholder="Email"
                    value={input.email}
                    onChange={handlechange}
                ></input>
                {error?.email && <p className="text-red-500">{error.email}</p>}
                <input
                    className=" border rounded-xl border-1px border-black m-2 p-1 placeholder:text-center"
                    type="password"
                    name="password"
                    placeholder="Password"
                    value={input.password}
                    onChange={handlechange}
                ></input>
                {error?.password && <p className="text-red-500 text-center  ">{error.password}</p>}

                <input
                    className=" border rounded-xl border-1px border-black m-2 p-1"
                    type="number"
                    min={0}
                    max={150}
                    name="age"
                    placeholder="Age"
                    value={input.age}
                    onChange={handlechange}
                ></input>
                {error?.age && <p className="text-red-500">{error.age}</p>}
                <button className="bg-slate-300 my-10 p-2 rounded-lg"
                    onClick={(e) => handleSubmit(e)}
                >Register</button>
                
            </div>
        </>
    )
}
export default Register