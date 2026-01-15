import React from 'react'
import { ChefHat } from 'lucide-react';

const Navbar = () => {
  return (
    <>
    <nav className='w-full bg-[#ED001C] sticky top-0 px-4 py-1 sm:px-20 sm:py-3 flex justify-between z-50'>
        <div className='flex items-center gap-1'>
          <ChefHat className='text-white w-10 h-10 sm:w-12 sm:h-12 p-1 rounded' />
          <div className='leading-none'>
            <h2 className='text-white font-bold text-md sm:text-xl'>JanoRecipe</h2>
            <span className='text-[#FDE5E9] font-semibold text-xs sm:text-sm'>Jano, Pakao, Khao</span>
          </div>
            
        </div>

    </nav>
    </>
  )
}

export default Navbar