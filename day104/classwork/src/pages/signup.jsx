import { useNavigate } from "react-router-dom";

function Signup() {
    let navigate = useNavigate()
    const handleSignup = (e) => {
        e.preventDefault()
        const email = e.target.email.value
        const password = e.target.password.value
        const userData = {
            email,
            password
        }
        localStorage.setItem("user", JSON.stringify(userData))
        navigate("/login")
    }

    return (
        <div>
            <h2>signup</h2>
            <form onSubmit={handleSignup}>
                <input type="email" name="email" placeholder="email"/>
                <input type="password" name="password" placeholder="password"/>
                <button>signup</button>
            </form>
        </div>
    )
}

export default Signup