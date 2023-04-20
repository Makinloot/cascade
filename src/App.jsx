import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Header from "./components/header/Header"
import Hero from "./components/hero/Hero"
import Music from "./pages/music/Music"
import About from "./pages/about/About"
import WorkingOn from "./pages/working-on/WorkingOn"
import Podcasts from "./pages/podcasts/Podcasts"
import Contact from "./pages/contact/Contact"

function App() {

  return (
    <Router>
      <div className="app">
        <Header />
        <Hero />
        <Routes>
          <Route path="/" element={<About />} />
          <Route path="/music" element={<Music />} />
          <Route path="/working-on" element={<WorkingOn />} />
          <Route path="/podcasts" element={<Podcasts />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
    </Router>
  )
}

export default App
