import React from 'react'
import { Routes,Route } from 'react-router-dom'
import { Signup } from '../components/Signup'
import { Login } from '../components/Login'
import { Home } from '../components/Home'
import { AddBook } from '../components/AddBook'
import { BookDetails } from '../components/BookDetails'
import { Wishlist } from '../components/Wishlist'

export const AllRoute = () => {
  return (
    <div>
        <Routes>
          <Route path='/' element={<Signup/>}/>
          <Route path='/login' element={<Login/>}/>
          <Route path='/home' element={<Home/>}/>
          <Route path='/addbook' element={<AddBook/>}/>
          <Route path='/bookdetails' element={<BookDetails/>}/>
          <Route path='/wishlist' element={<Wishlist />}/>
        </Routes>
    </div>
  )
}
