import './App.css'
import useToggle from './hooks/useToggle'

function App() {
  const[dark, handleDark] = useToggle(true)
  return (
    <div className={`h-[100vh] ${dark ? "bg-black" : "bg-white"}`}>
      <button onClick = {() => {
        handleDark()
      }}>change mode</button>
      <p>{dark ? "Dark mode is on" : "light mode is on"}</p>
    </div>
  )
}

export default App
