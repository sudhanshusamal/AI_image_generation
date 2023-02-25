import React from 'react';
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom'

import { logo } from './assets';

import { Home, CreatePost } from './pages';

const App = () => {
  return (
    <BrowserRouter>
      <header className='w-full flex justify-between items-center  sm:px-8 px-4 border-b border-b-[#3c3f46]'>
      <Link to='/'><img src={logo} alt="image odyssey" className='w-20 py-5 object-contain'></img></Link>
      <Link to='/create' className='font-inter font-medium bg-[#aa64ff] text-white px-4 py-2 rounded-md'>Generate Image</Link>
      </header>
      <main className="sm:p-8 px-4 py-8 w-full bg-[#2f3035] min-h-[calc(100vh-73px)]">
        <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/create' element={<CreatePost />}  />
        </Routes>
      </main>
    </BrowserRouter>
  )
}

export default App