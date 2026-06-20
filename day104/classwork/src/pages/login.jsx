import { useNavigate } from "react-router-dom";

function Login() {
    let navigate = useNavigate()
    const handleLogin = (e) => {
        e.preventDefault()
        const email = e.target.email.value
        const password = e.target.password.value
        const savedUser = JSON.parse(localStorage.getItem("user"))

        if(savedUser && savedUser.email === email && savedUser.password === password){
            navigate("/")
        }
    }

    return (
        <div>
            <h2>login</h2>
            <form onSubmit={handleLogin}>
                <input type="email" name="email" placeholder="email"/>
                <input type="password" name="password" placeholder="password"/>
                <button>signup</button>
            </form>
        </div>
    )
}

export default Login