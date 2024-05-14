import React from 'react'
import logo from "../assests/amarLogo.png"

const Header = () => {
  return (
    <div className='flex justify-between p-4  bg-gray-900 ' >
        <div><img src={logo} height={50} width={177} alt='image load'/></div>
        <div className='text-white'>icon</div>
    </div>
  )
}

export default Header