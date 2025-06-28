import { useState } from "react"
function Navbar() {
    const [isActive, setIsActive] = useState(false)

    const toggleHamMenu = () => {
        setIsActive(!isActive)
    }
    return (
        <>
            <div className={`off-screen-menu ${isActive ? "active" : ""}`}>
                <ul>
                    <li>
                        <a href="#">Home</a>
                    </li>
                    <li>
                        <a href="#">About</a>
                    </li>
                    <li>
                        <a href="#">Classes</a>
                    </li>
                    <li>
                        <a href="#">Membership Plans</a>
                    </li>
                </ul>
            </div>
            <nav className="mobile-nav">
                <p>FitZone</p>
                <div className={`ham-menu ${isActive ? "active" : ""}`} onClick={toggleHamMenu}>
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
            </nav>
            <header className="normal-header">
                <nav className="normal-nav">
                    <p>FitZone</p>
                    <div className="nav-content">
                        <a href="#">Home</a>
                        <a href="#">About</a>
                        <a href="#">Classes</a>
                        <a href="#">Membership Plans</a>
                    </div>
                </nav>

            </header>

        </>
    )
}

export default Navbar