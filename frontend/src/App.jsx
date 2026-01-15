import React from 'react'
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom'
import Navbar from './components/Navbar'
import HelpBtn from './components/HelpBtn'
import Search from "./pages/Search"
import RecipeDetail from "./pages/RecipeDetail"

const AppContent = () => {
const location = useLocation();
  


  return (
    <div className='min-h-screen bg-[#FFF5F5]'>
      <Navbar />
      
      <Routes>
        <Route path="/" element={<Search />} />
        <Route path="/recipe/:id" element={<RecipeDetail />} />
      </Routes>
      
      <HelpBtn />
    </div>
  );
};

const App = () => {
  return (
    <Router>
      <AppContent />
    </Router>
  );
};

export default App