import HeroPage from "../pages/HeroPage"
import Navbar from "../components/Navbar"
import AboutPage from "../pages/AboutPage"
import ClassPage from "../pages/ClassPage"
import MembershipPage from "../pages/MembershipPage"
import '../src/App.css'
function App() {
  return (
    <main>
      <Navbar />
      <HeroPage />
      <AboutPage />
      <ClassPage />
      <MembershipPage />
    </main>
  )
}

export default App