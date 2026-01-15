import React, { useState } from 'react'
import { Search } from 'lucide-react'

const SearchBar = ({ onSearch }) => {
  const [ingredient, setIngredient] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    onSearch(ingredient);
  };

  return (
    <form onSubmit={handleSubmit} className='flex items-center gap-2 sm:gap-3 max-w-2xl justify-center mx-4 sm:mx-auto my-20'>

     <div className="relative w-full">
    <input
      type="text"
      value={ingredient}
      onChange={(e) => setIngredient(e.target.value)}
      placeholder="Search by ingredients (e.g., paneer, pasta, cheese)"
      className="w-full px-2 py-2 sm:px-4 sm:py-4 pr-12 text-sm text-gray-700 border-2 border-[#F2BFBF] bg-white rounded-[10px]
      focus:outline-none focus:ring-3 focus:ring-[#DE8385] placeholder-[#961A1A] transition shadow-lg"
    />

    {/* ❌ CLEAR BUTTON */}
    {ingredient && (
      <button
        type="button"   // 👈 VERY IMPORTANT
        onClick={() => {
          setIngredient("");
          setRecipes([]);
          setError("");
        }}
        className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600 text-lg">
        ✕
      </button>
    )}
  </div>

      <button type="submit" className='flex items-center gap-2 text-sm font-semibold bg-[#EA0014] px-2 py-2 sm:px-6 sm:py-4 text-white 
      rounded-lg hover:bg-red-700 active:scale-95 transition hover:cursor-pointer'>
        <Search className='w-4 h-4'/>
        Search
      </button>
    </form>
  )
}

export default SearchBar