const form = document.querySelector("form")
const mainImg = document.getElementById("avatarimg")
const user = document.getElementById("username")
const joinDate = document.querySelector("span")
const bio = document.getElementById("biotext")
const repos = document.getElementById("repositories")
const followers = document.getElementById("followers")
const following = document.getElementById("following")
const userSom = document.getElementById("usersom")

import fetchData from "./fetch.js"

const renderUser = (data) => {
    user.textContent = data.login
    mainImg.src = data.avatar_url
    repos.textContent = data.public_repos
    followers.textContent = data.followers
    following.textContent = data.following
    if (data.bio !== null && data.bio !== "") {
        bio.textContent = data.bio;
    } else {
        bio.textContent = "This profile has no bio";
    }
    userSom.textContent = `@${data.login}`
    const date = data.created_at.split('T')[0]
    joinDate.textContent = `${date}`
}

form.addEventListener("submit", async (e) =>{
    e.preventDefault()
    const user = form.searchinput.value
    const data = await fetchData(`https://api.github.com/users/${user}`)
    console.log(data)
    renderUser(data)
})