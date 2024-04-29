import { Outlet, redirect } from 'react-router-dom'
import './App.css'

import Navbar from "./Components/Navbar"
import Sidenav from "./Components/Sidenav"


const App = () => {
  return (
    <>
      <Navbar />
      <div className='flex j-spc-between'>
        <Sidenav />
        <section id='content-navigator' className='flex justify-center'>
          <Outlet />
        </section>
      </div>
    </>
  )
}

export default App