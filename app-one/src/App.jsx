
import './App.css'

const Header = () => (
  <header>
    <h1>App-One</h1>
    <nav>
      <ul>
        <li><a href="#">Home</a></li>
        <li><a href="#">About</a></li>
        <li><a href="#">Service</a></li>
        <li><a href="#">Contact Us</a></li>
      </ul>
    </nav>
    <hr />
  </header>
)

const Footer = () => (
  <footer>
    <p>&copy; App-One</p>
  </footer>
)

const Main = () => (
  <main>
    <p>App-one content come here</p>
    <hr />
  </main>
)
const App = () => (
  <>
    <Header />
    <Main />
    <Footer />
  </>
)

export default App
