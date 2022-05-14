import React from 'react'
import Navbar from '../Components/Navbar'
import Footer from '../Components/Footer'
import Header from '../Components/Header'
import Banner from '../Components/Banner'
import Products from '../Components/ProductList'




export const Landing = () => {
  return (
    <>
    <Navbar/>
    <Header/>
    <Banner/>
    <Products/>
    <Footer/>
    </>
  )
}
