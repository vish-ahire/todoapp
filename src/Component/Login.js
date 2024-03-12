import { useEffect, useState } from "react"
import { validateValue } from "./validateValue"
import { NavLink } from "react-router-dom"
import { useDispatch, useSelector } from "react-redux"
import { isLogin } from "../Store/userSlice"
import { useNavigate } from 'react-router-dom';


const Login = () => {
    const [input, setInput] = useState({
        email: "",
        password: ""
    })
    const navigate = useNavigate();
    const data=useSelector(state=> state.user.login)
    console.log(data)
    const dispatch=useDispatch()
    const [error, setError] = useState({ email: "" })
    const [isValid, setIsValid] = useState({})
    const handlechange = (e) => setInput({ ...input, [e.target.name]: e.target.value })
    const handleSubmit = (e) => {
        e.preventDefault()
        setError(validateValue(input))
        
    }
    const validateUser = (user) => {
        const data = localStorage.getItem("userInfo")
        if (!data) {
            setIsValid("Please Register")
            return false;
        } else {
            let userData = JSON.parse(data);
            if (userData.email === user.email && userData.password === user.password) {
                dispatch(isLogin(true))
                navigate( "/todo");
                return true;
            }
            else {
                setIsValid("Inavlid Credential")
                return false;
            }
        }
    }
    
    useEffect(() => {
        if (!Object.keys(error).length)
            validateUser(input) ? <NavLink to="/TodoList"></NavLink> : null
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

                <button className="bg-slate-300 my-10 p-2 rounded-lg"
                    onClick={(e) => handleSubmit(e)}
                >Login</button>
                {Object.keys(isValid).length > 0 && <p className="text-red-500">{isValid}</p>}
            </div>
        </>
    )
}

export default Login