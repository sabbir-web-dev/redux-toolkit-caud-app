import React from 'react'
import { BrowserRouter, Route,Routes } from 'react-router-dom'
// import Home from '../Pages/Home'
import Error from '../Pages/Error'
import Navber from '../Layout/Navber'
import BooksView from '../Features/Books/BooksView'
import AddBook from '../Features/Books/AddBook'
import EditBook from '../Features/Books/EditBook'

function RoutesApp() {
  return (
    <div>
      <BrowserRouter>
      <Navber />
        <Routes>
          {/* <Route path='/' element={<Home />} /> */}
          <Route path='/add-book' element={<AddBook/>} />
          <Route path='/books' element={<BooksView/>} />
          <Route path='/' element={<BooksView/>} />
          <Route path='/edit' element={<EditBook/>} />
          <Route path='*' element={<Error />} />
        </Routes> 
      </BrowserRouter>
    </div>
  )
}

export default RoutesApp

