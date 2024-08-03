
import './App.css'

import React from 'react'

const Header = () => <h1>App</h1>
const MainBody = () => (
  <>
    <h2>MainBody</h2>
    <Card></Card>
    <Card></Card>
    <Card></Card>
    <Card></Card>
    <Card></Card>
    <Card></Card>
    <Card></Card>
    <Card></Card>
    <Card></Card>
    <Card></Card>
    <Card></Card>
    <Card></Card>
    <Card></Card>
    <Card></Card>
    <Card></Card>
    <Card></Card>
  </>
)
const Footer = () => <h4>Footer &copy; app-2-cards</h4>

import Card from './Card'

const App = () => {
  return (
    <>
      <Header></Header>
      <hr />
      <MainBody ></MainBody>

      <hr />
      <Footer></Footer>
    </>
  )
}

export default App