const searchForm = document.getElementById("searchform");
const profileInfos = document.getElementById("infos");

const fetchData = async (url) =>{
    const respone = await fetch(url)
    const data = await respone.json()
    return data
}


const renderUser = (data) => {
    profileInfos.innerHTML =""
    const name = document.createElement("h2")
    name.textContent = data.login
    profileInfos.appendChild(name)
    const img = document.createElement("img")
    img.src = data.avatar_url
    profileInfos.appendChild(img)
    const repos = document.createElement("p")
    repos.textContent = data.repos_url
    profileInfos.appendChild(repos)
    const followers = document.createElement("p")
    followers.textContent = data.followers
    profileInfos.appendChild(followers)
}

searchForm.addEventListener("submit", async (e) =>{
    e.preventDefault()
    const user = searchForm.user.value;
    const data = await fetchData(`https://api.github.com/users/${user}`)
    console.log(data);
    renderUser(data)
})


