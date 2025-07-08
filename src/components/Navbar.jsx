import React from 'react'


function Navbar(handleClick) {
  return (
    <>
     <nav className="bg-[#150e0a] z-[2] text-white px-6 py-4 shadow-md w-full  ">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-xl font-bold">NICOBAR MARITIME</div>
        <ul className="flex space-x-10 mx-5 ">
          <li className='relative group'>   
           <span className="hover:text-blue-500 cursor-pointer">Home</span>
            <div className="absolute top-full mt-2 left-1/2 -translate-x-1/2 bg-white text-black p-4 rounded shadow-lg z-50 w-92 h-92  group-hover:opacity-100 group-hover:visible invisible  ">
            <h3 className="font-bold text-lg mb-2">Welcome Home!</h3>
            <p>This is a popup when hovering over Home.</p>
          </div>
          </li>
          <li className="relative group">
            <span className="hover:text-blue-500 cursor-pointer href">About</span>

            
            <div className="absolute top-8 left-0  bg-white p-4 w-92 h-92 rounded-lg shadow-xl opacity-0 group-hover:opacity-100 group-hover:visible invisible transition duration-300 z-50">
              
             
            </div>
          </li>
          <li className="hover:text-blue-800">Services</li>
          <li className="hover:text-blue-800 " onClick={handleClick}> <a href='#con'>  Contact Us</a> </li>
        </ul>
      </div>
    </nav>
    
    </>
  )
}

export default Navbar
