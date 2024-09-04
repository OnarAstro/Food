// eslint-disable-next-line no-unused-vars
import React, { useState } from 'react'
import './Home.css'
import Header from '../../components/Header/Header'
import ExploreMenu from '../../components/ExploreMenu/ExploreMenu'
import FoodDisplay from '../../components/FoodDisplay/FoodDisplay'
import AppDownload from '../../components/AppDownload/AppDownload'
// import Test from '../../components/test/Test'


const Home = () => {


  const [omar, setOmar] = useState('All');
  
  
  return (
    <div>
      <Header />
      <ExploreMenu category={omar} setCategory={setOmar} />
      <FoodDisplay category={omar}/>
      <AppDownload /> 
    </div>
  )
}

export default Home