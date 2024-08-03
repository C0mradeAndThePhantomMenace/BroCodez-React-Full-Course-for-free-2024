
import './App.css'

import React from 'react'

const Header = () => <h1>App</h1>
const MainBody = () => <p>MainBody</p>
const Footer = () => <h4>Footer &copy; app-2-cards</h4>

const App = () => {
  return (
    <>
      <Header></Header>
      <hr />
      <MainBody></MainBody>
      <hr />
      <Footer></Footer>
    </>
  )
}

export default App