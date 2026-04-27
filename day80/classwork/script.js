const users = []
const form = document.getElementById("form")
function registerUser(e) {
    e.preventDefault();
    const name = form.name.value
    const email = form.email.value
    const password = form.password.value
    
    const newUser = {
        name,
        email,
        password,
    }

    const userExists = users.some((user) => user.email === newUser.email)
    if (userExists) {
        alert("Email already exists")
        return
    }
    users.push(newUser)
    console.log(users)
    alert("you have successfully registered")
}

form.onsubmit = registerUser

const login = document.getElementById("login")

function loginUser(e) {
    e.preventDefault();

    const email = login.email.value;
    const password = login.password.value;

    const isValidUser = users.some((user) => user.email === email && user.password === password);

    if (!isValidUser) {
        alert("Email or password is incorrect");
        return;
    }

    alert("Login successful");
}

login.onsubmit = loginUser