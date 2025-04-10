import React from 'react'
import {Routes,Route} from "react-router-dom"

import Sidebar from '../Components/Sidebar'
import AddProduct from '../Components/AddProduct'
import ListProduct from '../Components/ListProduct'

const Admin = () => {
  return (
    <div className='flex-wrap sm:flex-wrap md:flex   bg-[#ebebed]'>
      <Sidebar/>
      <Routes>
        <Route path="/addproduct" element={<AddProduct/>}/>
        <Route path="/listproduct" element={<ListProduct/>}/>
      </Routes>
    </div>
  )
}

export default Admin