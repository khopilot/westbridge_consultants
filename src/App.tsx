import { Routes, Route, useLocation } from 'react-router-dom'
import Navigation from './components/Navigation'
import Home from './pages/Home'
import Services from './pages/Services'
import Projects from './pages/Projects'
import About from './pages/About'
import Contact from './pages/Contact'
import Landing from './pages/Landing'
import Footer from './components/Footer'

function App() {
  const location = useLocation()
  const isLandingPage = location.pathname === '/landing'

  return (
    <div className="App">
      {!isLandingPage && <Navigation />}
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/landing" element={<Landing />} />
          <Route path="/services" element={<Services />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>
      {!isLandingPage && <Footer />}
    </div>
  )
}

export default App
