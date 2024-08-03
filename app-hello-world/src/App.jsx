import './App.css'

const Header = () => <header>Header should be here</header>
const Main = () => <main>Main should be here</main>
const Footer = () => <footer>Footer should be here</footer>


const App = () => {
  return (
    <>
      <Header></Header>
      <hr />
      <Main></Main>
      <hr />
      <Footer></Footer>
    </>
  )
}

export default App
