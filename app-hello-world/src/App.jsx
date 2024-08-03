import './App.css'

import Header from './Header'

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
