import { useState } from 'react'
import { createBrowserRouter , createRoutesFromElements , Route , RouterProvider } from 'react-router-dom'
import './App.css'
import Rootlayout from './componat/Rootlayout'
import Home from './page/Home'


const router = createBrowserRouter(createRoutesFromElements(
  <Route element={<Rootlayout/>}>
    <Route path='/' element={<Home/>}></Route>
  </Route>
))


function App() {

  return (
    <>
    <RouterProvider router={router} />     
    </>
  )
}

export default App
