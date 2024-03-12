import { useNavigate } from "react-router-dom"

const Home = () => {
    const navigate=useNavigate()
    return <>
        <div className="flex flex-col items-center ">
            <div className="text-center font-bold text-3xl text-green-700 my-auto py-20">
                Welcome 
            </div>
            <div>
                <button
                    onClick={() => { navigate('/register' ,{ replace: true }) }} 
                    className="p-2 m-2 shadow-lg bg-blue-900 text-white rounded-2xl w-24">
                    Register</button>
                <button
                    onClick={() => { navigate( '/login',{replace:true}) }}
                    className="p-2 m-2 shadow-2xl bg-blue-900 text-white rounded-2xl w-24">
                    Login</button>
            </div>
        </div>
    </>
}

export default Home