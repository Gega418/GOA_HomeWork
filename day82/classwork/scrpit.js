const users = JSON.parse(localStorage.getItem("Users")) || []
const form = document.querySelector("form")
const ul = document.querySelector("ul")

const renderLogin = () => {
    document.querySelector("ul").innerHTML = ""
    users.forEach((item) => {
        const li = document.createElement("li")
        li.innerHTML = item.email
        ul.appendChild(li)
    })

}

function loginUser(e) {
    e.preventDefault();
    const name = form.name.value
    const email = form.email.value
    const password = form.password.value

    const newUser = {
        name,
        email,
        password,
    }

    users.push(newUser)
    console.log(users)
    alert("you have successfully logged in")
    localStorage.setItem("Users", JSON.stringify(users))
    renderLogin()
}

form.onsubmit = loginUser
renderLogin()