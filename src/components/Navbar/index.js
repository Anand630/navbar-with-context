import {Link} from 'react-router-dom'
import ThemeContext from '../../context/ThemeContext'
import './index.css'

const NavBar = () => (
  <ThemeContext.Consumer>
    {value => {
      const {isDarkTheme, toggleTheme} = value

      const navClass = isDarkTheme ? 'dark-mode-nav-bar' : 'light-mode-nav-bar'
      const webSiteLogo = isDarkTheme
        ? 'https://assets.ccbp.in/frontend/react-js/website-logo-dark-theme-img.png'
        : 'https://assets.ccbp.in/frontend/react-js/website-logo-light-theme-img.png'
      const menuOptionClass = isDarkTheme
        ? 'dark-mode-nav-link-item'
        : 'light-mode-nav-link-item'
      const themeTogglerPic = isDarkTheme
        ? 'https://assets.ccbp.in/frontend/react-js/light-theme-img.png'
        : 'https://assets.ccbp.in/frontend/react-js/dark-theme-img.png'

      return (
        <nav className={navClass}>
          <div className="nav-bar-items-container">
            <img
              src={webSiteLogo}
              className="website-logo"
              alt="website logo"
            />
            <ul className="nav-menu-options-container">
              <li className="home-menu-option">
                <Link to="/" className={menuOptionClass}>
                  Home
                </Link>
              </li>
              <li className="about-menu-option">
                <Link to="/about" className={menuOptionClass}>
                  About
                </Link>
              </li>
            </ul>
            <button
              data-testid="theme"
              onClick={toggleTheme}
              className="theme-button"
              type="button"
            >
              <img
                src={themeTogglerPic}
                className="theme-toggler-pic"
                alt="theme"
              />
            </button>
          </div>
        </nav>
      )
    }}
  </ThemeContext.Consumer>
)

export default NavBar
