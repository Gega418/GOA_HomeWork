import Nav from './components/Nav.jsx'
import AboutOurWebPage from './sections/AboutOurWebPage';
import ContactUs from './sections/ContactUs';
import './App.css';

export default function App() {
  return (
    <div className="app-container">
      <Nav />
      <main className="main-content">
        <AboutOurWebPage />
        <ContactUs />
      </main>
    </div>
  );
}