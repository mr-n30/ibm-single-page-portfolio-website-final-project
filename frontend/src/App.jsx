import { useState } from 'react'
import Navbar from './assets/components/Navbar'
import UserInfo from './assets/components/UserInfo'
import Skills from './assets/components/Skills'
import Projects from './assets/components/Projects'
import Recommendations from './assets/components/Recommendations'

function App() {
  return (
    <>
      <Navbar />
      <UserInfo />
      <Skills />
      <Projects />
      <Recommendations />
    </>
  )
}

export default App
