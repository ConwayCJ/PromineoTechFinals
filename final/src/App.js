import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './Pages/Home';
import About from './Pages/About';
import Profile from './Pages/Profile';
import ErrorPage from './Pages/ErrorPage'
import Navigation from './components/Navigation'
import Footer from './components/Footer'

function App() {
  return (
    <Router>
      <Navigation/>
      <main>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/about" element={<About/>}/>
          <Route path="/profile" element={<Profile/>}/>
          <Route path="*" element={<ErrorPage/>}/>
        </Routes>
      </main>
      <Footer/>
    </Router>
  );
}

export default App;