import React, { useState, useEffect } from 'react'
import useMediaQuery from '../hooks/useMediaQuery';
import teslaLogo from "../../assets/tesla.svg";


function Navbar() {
  const isMobileScreen = useMediaQuery("(max-width:1050px)");
  const [isMenuVisible, setIsMenuVisible] = useState(false);

  return (
    <div className='flex justify-between lg:justify-around  items-center px-4 py-3 z-20   '>
      <img src={teslaLogo} alt="tesla logo" className='w-36' />
      <nav className='relative'>
        <div className='absolute left-4' aria-roledescription='highliter'></div>
        {
          !isMobileScreen ?
            <ul className='flex space-x-4  items-center'>
              <li className=' text-gray-800 font-semibold px-3 py-0.5 rounded hover:bg-gray-500/50 cursor-pointer'>Model S</li>
              <li className=' text-gray-800 font-semibold px-3 py-0.5 rounded hover:bg-gray-500/50 cursor-pointer'>Model 3</li>
              <li className=' text-gray-800 font-semibold px-3 py-0.5 rounded hover:bg-gray-500/50 cursor-pointer'>Model X</li>
              <li className=' text-gray-800 font-semibold px-3 py-0.5 rounded hover:bg-gray-500/50 cursor-pointer'>Model Y</li>
              <li className=' text-gray-800 font-semibold px-3 py-0.5 rounded hover:bg-gray-500/50 cursor-pointer'>Solar Roof</li>
              <li className=' text-gray-800 font-semibold px-3 py-0.5 rounded hover:bg-gray-500/50 cursor-pointer'>Solar Panels</li>

            </ul>
            :
            ""
        }
      </nav>

      <div>
        <ul className='flex space-x-2  lg:space-x-4 items-center'>
          {
            !isMobileScreen ?
              <>
                <li className=' text-gray-800 font-semibold py-0.5 px-3 rounded hover:bg-gray-500/50 cursor-pointer'>Shop</li>
                <li className=' text-gray-800 font-semibold py-0.5 px-3 rounded hover:bg-gray-500/50 cursor-pointer'>Account</li>
              </>
              :
              ""
          }
          <li >
            <button className='  text-gray-800 font-semibold py-0.5 px-3 rounded bg-gray-500/50 cursor-pointer backdrop-blur'
              onClick={() => setIsMenuVisible(true)}
            >
              Menu
            </button>
          </li>
        </ul>
      </div>


      <aside
        className={`h-screen ${isMenuVisible ? "sm:w-3/4 md:w-2/6 lg:w-3/12 px-4 py-2" : "w-0"} rounded-tl rounded-bl fixed top-0 right-0 bg-white transition-[width] overflow-y-scroll z-10`}
      >
        <button
          className={`absolute right-1 top-1 ${!isMenuVisible ? "hidden" : ""}`}
          onClick={() => setIsMenuVisible(false)}
        >
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="lg:w-6 lg:h-6 w-8 h-8 ">
            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
        <section className='my-6'>


          <ul className='flex flex-col space-y-4  items-start'>
            {
              isMobileScreen ?
                <>
                  <li className=' text-gray-800 font-semibold px-3 py-0.5 rounded hover:bg-gray-500/50 cursor-pointer'>Model S</li>
                  <li className=' text-gray-800 font-semibold px-3 py-0.5 rounded hover:bg-gray-500/50 cursor-pointer'>Model 3</li>
                  <li className=' text-gray-800 font-semibold px-3 py-0.5 rounded hover:bg-gray-500/50 cursor-pointer'>Model X</li>
                  <li className=' text-gray-800 font-semibold px-3 py-0.5 rounded hover:bg-gray-500/50 cursor-pointer'>Model Y</li>
                  <li className=' text-gray-800 font-semibold px-3 py-0.5 rounded hover:bg-gray-500/50 cursor-pointer'>Solar Roof</li>
                  <li className=' text-gray-800 font-semibold px-3 py-0.5 rounded hover:bg-gray-500/50 cursor-pointer'>Solar Panels</li>
                  <li className=' text-gray-800 font-semibold py-0.5 px-3 rounded hover:bg-gray-500/50 cursor-pointer'>Shop</li>
                  <li className=' text-gray-800 font-semibold py-0.5 px-3 rounded hover:bg-gray-500/50 cursor-pointer'>Account</li>
                </>
                :
                ""
            }
            <li className=' text-gray-800 font-semibold py-0.5 px-3 rounded hover:bg-gray-500/50 cursor-pointer'>Existing Inventory</li>
            <li className=' text-gray-800 font-semibold py-0.5 px-3 rounded hover:bg-gray-500/50 cursor-pointer'>Used Inventory</li>
            <li className=' text-gray-800 font-semibold py-0.5 px-3 rounded hover:bg-gray-500/50 cursor-pointer'>Trade-ln</li>
            <li className=' text-gray-800 font-semibold py-0.5 px-3 rounded hover:bg-gray-500/50 cursor-pointer'>Demo Drive</li>
            <li className=' text-gray-800 font-semibold py-0.5 px-3 rounded hover:bg-gray-500/50 cursor-pointer'>Insurance</li>
            <li className=' text-gray-800 font-semibold py-0.5 px-3 rounded hover:bg-gray-500/50 cursor-pointer'>Cybertruck</li>
            <li className=' text-gray-800 font-semibold py-0.5 px-3 rounded hover:bg-gray-500/50 cursor-pointer'>Roadster</li>
            <li className=' text-gray-800 font-semibold py-0.5 px-3 rounded hover:bg-gray-500/50 cursor-pointer'>Semi</li>
            <li className=' text-gray-800 font-semibold py-0.5 px-3 rounded hover:bg-gray-500/50 cursor-pointer'>Charging</li>
            <li className=' text-gray-800 font-semibold py-0.5 px-3 rounded hover:bg-gray-500/50 cursor-pointer'>Commercial Energy</li>
            <li className=' text-gray-800 font-semibold py-0.5 px-3 rounded hover:bg-gray-500/50 cursor-pointer'>Utilities</li>
            <li className=' text-gray-800 font-semibold py-0.5 px-3 rounded hover:bg-gray-500/50 cursor-pointer'>Find Us</li>

          </ul>


        </section>

      </aside>
    </div>
  )
}

export default Navbar