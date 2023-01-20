import React from 'react'
import teslaLogo from "../../assets/tesla.svg";

function Navbar() {
  return (
    <div className='flex justify-around items-center px-4 py-3  '>
        <img src={teslaLogo} alt = "tesla logo" className='w-36'/>

        <nav>
        <ul className='flex space-x-4 items-center'>
                <li className='text-xl text-gray-800 font-semibold'>Model S</li>
                <li className='text-xl text-gray-800 font-semibold'>Model 3</li>
                <li className='text-xl text-gray-800 font-semibold'>Model X</li>
                <li className='text-xl text-gray-800 font-semibold'>Model Y</li>
                <li className='text-xl text-gray-800 font-semibold'>Solar Roof</li>
                <li className='text-xl text-gray-800 font-semibold'>Solar  Panels</li>
            </ul>
        </nav>

        <div>
            <ul className='flex space-x-4 items-center'>
                <li className='text-xl text-gray-800 font-semibold'>Shop</li>
                <li className='text-xl text-gray-800 font-semibold'>Account</li>
                <li className='text-xl text-gray-800 font-semibold'>Menu</li>
            </ul>
        </div>

    </div>
  )
}

export default Navbar