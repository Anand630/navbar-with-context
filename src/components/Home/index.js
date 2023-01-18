import NavBar from '../Navbar'
import ThemeContext from '../../context/ThemeContext'
import './index.css'

const Home = () => (
  <ThemeContext.Consumer>
    {value => {
      const {isDarkTheme} = value
      const bgColor = isDarkTheme
        ? 'light-mode-home-page-container'
        : 'dark-mode-home-page-container'
      const headingColor = isDarkTheme
        ? 'dark-mode-home-heading'
        : 'light-mode-home-heading'
      const homeImage = isDarkTheme
        ? 'https://assets.ccbp.in/frontend/react-js/home-dark-img.png'
        : 'https://assets.ccbp.in/frontend/react-js/home-light-img.png'
      return (
        <div className={bgColor}>
          <NavBar />
          <div className="home-bottom-container">
            <img className="home-pic" src={homeImage} alt="home" />
            <h1 className={headingColor}>Home</h1>
          </div>
        </div>
      )
    }}
  </ThemeContext.Consumer>
)

export default Home
