import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';

import Login from './pages/login';
import Signup from './pages/signup';
import Home from './pages/home';

function App() {
  return (
    <BrowserRouter>
      <nav>
        <Link to="/">Home</Link> 
        <Link to="/login">Login</Link> 
        <Link to="/signup">Signup</Link>
      </nav>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;