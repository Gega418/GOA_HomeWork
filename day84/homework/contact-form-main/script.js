class UserForm {
    constructor() {
        this.form = document.querySelector("form")
        this.firstName = document.getElementById("first")
        this.lastName = document.getElementById("last")
        this.emailInput = document.getElementById("email")
        this.general = document.getElementById("general")
        this.support = document.getElementById("support")
        this.message = document.getElementById("message1")
        this.consent = document.getElementById("consent")
        this.submitBtn = document.querySelector("button")
        this.form.addEventListener("submit", (e) => this.userRegister(e))
    }

    userRegister(e) {
        e.preventDefault()

        const first = this.firstName.value
        const last = this.lastName.value
        const email = this.emailInput.value
        const msg = this.message.value
        const cons = this.consent.value

        if (!first || !last || !email || !msg /*|| !cons*/) {
            alert("please give all the inputs values")
            return
        }

        const users = JSON.parse(localStorage.getItem("Users")) || []
        const emailExists = users.some((user) => user.email === email)

        if (emailExists) {
            alert("email is already registered")
            return
        }

        const newUser = {
            firstName: first,
            lastName: last,
            email: email,
            message: msg,
        }

        users.push(newUser)
        localStorage.setItem("Users", JSON.stringify(users))
        alert("registered successfully")
        this.form.reset()
    }
}

new UserForm()