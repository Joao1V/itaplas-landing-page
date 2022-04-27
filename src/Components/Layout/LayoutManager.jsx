import React from 'react'
import Header from "./Default/Header";
import Main from "./Default/Main";
import Footer from "./Default/Footer";

const LayoutManager = () => {

  return (
      <div style={{background:"gainsboro"}}>
        <Header/>
        <Main/>
        <Footer/>
      </div>
  )
}

export default LayoutManager