/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from 'react'
import './test.css'
import { menu_list } from '../../assets/assets'
const Test = ({onar,setOnar}) => {

  const astro = menu_list

  return (
    <div>
      <h1>test</h1>
      <p>test</p>
      <div>
        {astro.map((item, index)=> {
          return (
            <div
            className='omar'
              onClick={()=>
                setOnar((omar) =>
                omar === item.menu_name ? "All" : item.menu_name
                )
              }
              key={index}
              >
                <img className={onar===item.menu_name?"active":""} src={item.menu_image} alt="" />
                <p>{item.menu_name}</p>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default Test