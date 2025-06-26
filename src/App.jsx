import HeroPage from "../pages/HeroPage"
import Navbar from "../components/Navbar"
import AboutPage from "../pages/AboutPage"
import ClassPage from "../pages/ClassPage"
import '../src/App.css'
function App() {
  return (
    <main>
      <Navbar />
      <HeroPage />
      <AboutPage />
      <ClassPage />
    </main>
  )
}

export default App