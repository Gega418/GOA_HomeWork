import { useState } from "react"
import { useNavigate } from "react-router-dom"

const Register = ({setRegisteredUser}) => {
    
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    let navigate = useNavigate()

    const handleRegister = (e) => {
        e.preventDefault()
        if(email && password){
            setRegisteredUser({email, password})
            alert("register successfull")
            navigate("/Login")
        }else{
            alert("fill all the inputs")
        }
    }

    return(
        <div>
            <h2>Register</h2>
            <form action="" onSubmit={handleRegister}>
                <div>
                    <label>email:</label>
                    <input type="email" name="email" id="email" placeholder="enter email" value={email} onChange={(e) => setEmail(e.target.value)}/>
                </div>
                <br />
                <div>
                    <label>password:</label>
                    <input type="password" name="password" id="password" placeholder="enter password" value={password} onChange={(e) => setPassword(e.target.value)}/>
                </div>
                <br />
                <button>register</button>
            </form>
        </div>
    )
}

export default Register