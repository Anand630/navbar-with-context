import NavBar from '../Navbar'
import ThemeContext from '../../context/ThemeContext'
import './index.css'

const About = () => (
  <ThemeContext.Consumer>
    {value => {
      const {isDarkTheme} = value
      const bgColor = isDarkTheme
        ? 'light-mode-about-page-container'
        : 'dark-mode-about-page-container'
      const headingColor = isDarkTheme
        ? 'dark-mode-about-heading'
        : 'light-mode-about-heading'
      const aboutImage = isDarkTheme
        ? 'https://assets.ccbp.in/frontend/react-js/about-dark-img.png'
        : 'https://assets.ccbp.in/frontend/react-js/about-light-img.png'
      return (
        <div className={bgColor}>
          <NavBar />
          <div className="about-bottom-container">
            <img className="about-pic" src={aboutImage} alt="about" />
            <h1 className={headingColor}>About</h1>
          </div>
        </div>
      )
    }}
  </ThemeContext.Consumer>
)

export default About
