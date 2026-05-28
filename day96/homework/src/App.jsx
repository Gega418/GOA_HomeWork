import './App.css'

function App() {

  return (
    <>
      <div className="container">
      <div className="profile-card">
        <div className="avatar-container">
        </div>
        <h1 className="name">Jessica Randall</h1>
        <p className="location">London, United Kingdom</p>
        <p className="bio">"Front-end developer and avid reader."</p>
        <div className="links-container">
          <a href="#" className="social-link" target="_blank" rel="noopener noreferrer">
            GitHub
          </a>
          <a href="#" className="social-link" target="_blank" rel="noopener noreferrer">
            Frontend Mentor
          </a>
          <a href="#" className="social-link" target="_blank" rel="noopener noreferrer">
            LinkedIn
          </a>
          <a href="#" className="social-link" target="_blank" rel="noopener noreferrer">
            Twitter
          </a>
          <a href="#" className="social-link" target="_blank" rel="noopener noreferrer">
            Instagram
          </a>
        </div>
      </div>
    </div>
    </>
  )
}

export default App
