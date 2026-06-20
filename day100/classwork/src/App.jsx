import { useState } from "react";
import "./App.css"
function App() {
  const [userData, setUserData] = useState({})

  const fetchData = async (url) =>{
    const res = await fetch(url);
    const data = await res.json();

    console.log(data)
    setUserData(data)
  }
  
  
  const handleSearch = async (e) =>{
    e.preventDefault()
    const user = e.target.username.value;
    await fetchData(`https://api.github.com/users/${user}`)
  }
  
  return(
    <div>
      <form action="" onSubmit={handleSearch}>
        <input type="text" name="username" placeholder="Search the user..." />
        <button>Search</button>
      </form>
      <div>
        <img src={userData.avatar_url} alt="Profile" />
        <h2>{userData.login || "სახელი არ არის მითითებული"}</h2>
        <p>@{userData.login}</p>
        <strong>Followers:</strong> {userData.followers} | <strong> Following:</strong> {userData.following}
        <p>{userData.bio || "bio empty."}</p>
      </div>
    </div>
  )
}

export default App