import React from 'react'
 import "./home.css"
import HomeLanding from './HomeLanding'
import TopContact from './TopContact'
import Footer from '../Footer'
const Home = () => {
  return (
    <div>
        <TopContact/>
        <HomeLanding/>
        <Footer/>
    </div>
  )
}

export default Home