import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Header from "./components/header/Header"
import Hero from "./components/hero/Hero"
import Music from "./pages/music/Music"
import About from "./pages/about/About"

function App() {

  return (
    <Router>
      <div className="app">
        <Header />
        <Hero />
        <Routes>
          <Route path="/" element={<About />} />
          <Route path="/music" element={<Music />} />
        </Routes>
      </div>
    </Router>
  )
}

export default App
