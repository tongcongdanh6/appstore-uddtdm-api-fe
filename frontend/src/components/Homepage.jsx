import axios from 'axios'
import React, { useEffect } from 'react'
import Header from './Header'
import ProductList from './sections/ProductList'
import {useDispatch} from 'react-redux'
import MegaMenu from './MegaMenu'
import Intro from './sections/Intro'
import Products from './sections/Products'
import Advertising from './sections/Advertising'
import Footer from './Footer'

const Homepage = () => {
  const dispatcher = useDispatch();

  const fetchProducts = async () => {
    try {
      const result = await axios.get(process.env.REACT_APP_API_URL + '/products');
      
      // dispatch to store
      dispatcher({
        type: 'SET_PRODUCTS',
        payload: result.data
      });

    } catch(err) {

    }
  }

  useEffect(() => {
    fetchProducts();
  },[]);
  return (
    <div className='homepage-v2 white-skin animated'>
      <Header/>
      <MegaMenu/>
      <div className='container'>
        <div className="row pt-4">
          <div className="col-lg-12">
            <Intro/>
            <Products/>
            <Advertising/>
            <ProductList/>
          </div>
        </div>
      </div>
      <Footer/>
    </div>
  )
}

export default Homepage