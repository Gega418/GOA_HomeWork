import { useState } from "react"
import { useNavigate } from "react-router-dom"

const Login = ({registeredUser, setLoggedInUser}) => {
    
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    let navigate = useNavigate()

    const handleLogin = (e) => {
        e.preventDefault()
        if(!registeredUser){
            alert("user is not registered")
            return
        }
        if(registeredUser.email === email && registeredUser.password === password) {
            setLoggedInUser(registeredUser)
            alert("logged in successfull")
            navigate("/Products")
        }else{
            alert("email or pass incorrect")
        }
    }

    return (
        <div>
            <h2>login</h2>
            <form action="" onSubmit={handleLogin}>
                <div>
                    <label>email</label>
                    <input type="email" name="email" placeholder="enter email" value={email} onChange={(e) => setEmail(e.target.value)}/>
                </div>
                <br />
                <div>
                    <label>password</label>
                    <input type="password" name="password" placeholder="enter password" value={password} onChange={(e) => setPassword(e.target.value)}/>
                </div>
                <button>Login</button>
            </form>
        </div>
    )
}

export default Login