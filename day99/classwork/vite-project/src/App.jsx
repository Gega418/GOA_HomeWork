import './App.css'
import running from "./assets/Group 8 (1).svg"
import random from "./assets/Group 16 (1).svg"
import camera from "./assets/Group 17 (1).svg"
import shopping from "./assets/Group 18 (1).svg"
import crypto from "./assets/Group 20 (1).svg"
import Divs from './components/divs.jsx'

function App() {

  return (
    <>
      <div id='main'>
        <div id='content'>
          <h1>Check out our most popular courses!</h1>
        </div>
        <Divs icon={running} title="animation" description="asdasnfibfiafisi"/>
        <Divs icon={random} title="design" description="asddasnfjanfn"/>
        <Divs icon={camera} title="photography" description="asddasnfjanfn"/>
        <Divs icon={shopping} title="business" description="asddasnfjanfn"/>
        <Divs icon={crypto} title="crypto" description="asddasnfjanfn"/>
      </div>
    </>
  )
}

export default App
