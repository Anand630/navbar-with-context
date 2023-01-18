import NavBar from '../Navbar'
import ThemeContext from '../../context/ThemeContext'
import './index.css'

const NotFound = () => (
  <ThemeContext.Consumer>
    {value => {
      const {isDarkTheme} = value
      const bgColor = isDarkTheme
        ? 'light-mode-not-found-page-container'
        : 'dark-mode-not-found-page-container'
      const headingColor = isDarkTheme
        ? 'dark-mode-not-found-heading'
        : 'light-mode-not-found-heading'
      const descriptionColor = isDarkTheme
        ? 'dark-mode-description'
        : 'light-mode-description'
      return (
        <div className={bgColor}>
          <NavBar />
          <div className="not-found-bottom-container">
            <img
              className="not-found-pic"
              src="https://assets.ccbp.in/frontend/react-js/not-found-img.png"
              alt="not found"
            />
            <h1 className={headingColor}>Lost Your Way?</h1>
            <p className={descriptionColor}>
              We cannot seem to find the page you are looking for.
            </p>
          </div>
        </div>
      )
    }}
  </ThemeContext.Consumer>
)

export default NotFound
