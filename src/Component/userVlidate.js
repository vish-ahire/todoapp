import { useNavigate } from "react-router-dom";

const userValidate=( input)=>{
    const navigate = useNavigate()
    const data = localStorage.getItem("userInfo")
    let error={}
    if (!data) {
        return false;
    } else {
        let userData = JSON.parse(data);
        if (userData.email === user.email && userData.password === user.password) {
            navigate("/todo", { replace: true });
            return true;
        }
        else {

            return error.msg="Invalid Credentials!";
        }
    }
}