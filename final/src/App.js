import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './Pages/Home';
import Review from './Pages/Review';
import Project from './Pages/Project';
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
          <Route path="/review" element={<Review/>}/>
          <Route path="/project" element={<Project/>}/>
          <Route path="*" element={<ErrorPage/>}/>
        </Routes>
      </main>
      <Footer/>
    </Router>
  );
}

export default App;