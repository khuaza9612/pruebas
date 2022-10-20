import Footer from "./footer";
import cart from "../img/fondo.jpg";
import puff from "../img/fondo.jpg";
import rain from "../img/fondo.jpg";
import Nav from "./Nav.jsx";
import umbrella from "../img/pUmbrella.jpg";
import './fondo.css'
import React, { useState,useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {getProductos} from '../redux/actions.js'
import Subscription from "./input";
import Grilla from "./grilla";
const LandingPage = () => {
  let productos = useSelector(state => state.productos)
  let dispatch = useDispatch()

  useEffect(()=>{
      dispatch(getProductos())
  },[dispatch])
  console.log(productos)
    return (
      <>
      <div className='landingPage_container'>
        <Nav/>
        <div id="carouselExampleDark" className="carousel carousel-dark slide" data-bs-ride="carousel">
          <div className="carousel-indicators">
            <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
            <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="1" aria-label="Slide 2"></button>
            <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="2" aria-label="Slide 3"></button>
          </div>
          <div className="carousel-inner">
            <div className="carousel-item active" data-bs-interval="10000">
              <img src={puff} className="img-fluid  w-100" alt="" />
              <div className="textcarousel carousel-caption d-none d-md-block">
                <h2>ESTÁR CÓMODO,<br></br> NUNCA FUE TAN FÁCIL</h2>
                <button className=' btnShop bg-transparent'>SHOP</button>
              </div>
            </div>
            <div className="carousel-item" data-bs-interval="2000">
              <img src={cart} className="img-fluid  w-100" alt="cart" />
              <div className="textcarousel carousel-caption d-none d-md-block">
                <h2>ESTÁR CÓMODO,<br></br> NUNCA FUE TAN FÁCIL</h2>
                <button className=' btnShop bg-transparent'>SHOP</button>
              </div>
            </div>
            <div className="carousel-item">
              <img src={rain} className=" img-fluid  w-100" alt="rain" />
              <div className="textcarousel carousel-caption d-none d-md-block">
                <h2>ESTÁR CÓMODO,<br></br> NUNCA FUE TAN FÁCIL</h2>
                <button className=' btnShop bg-transparent'>SHOP</button>
              </div>
            </div>
          </div>
          <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="prev">
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            
          </button>
          <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="next">
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>
  
      </div>

      <div className="grilla">
      <div className="textgrilla2">
         
        <button className=' btnShop bg-transparent'>SHOP</button>
      </div>

        <div className="textgrilla">
        <img src={umbrella} className=" img-fluid  w-50" alt="rain"  />
        <h2>PUfi Rain</h2>
        <p>Esto es un texto simulado</p>
        <button className="botong">{"<"}Ver Mas</button>
        </div>

      </div>
      <div className="grilla">
     
        <div className="textgrilla">
        <img src={umbrella} className=" img-fluid  w-50" alt="rain"  />
        <h2>PUfi Rain</h2>
        <p>Esto es un texto simulado</p>
        <button className="botong">{"<"}Ver Mas</button>
        </div>
        <div className="textgrilla2">
         
         <button className=' btnShop bg-transparent'>SHOP</button>
       </div>
 
      </div>
      <div className="grilla">
      <div className="textgrilla2">
         
        <button className=' btnShop bg-transparent'>SHOP</button>
      </div>

        <div className="textgrilla">
        <img src={umbrella} className=" img-fluid  w-50" alt="rain"  />
        <h2>PUfi Rain</h2>
        <p>Esto es un texto simulado</p>
        <button className="botong">{"<"}Ver Mas</button>
        </div>

      </div>
      <div className="grilla">
              <div className="textgrilla">
        <img src={umbrella} className=" img-fluid  w-50" alt="rain"  />
        <h2>PUfi Rain</h2>
        <p>Esto es un texto simulado</p>
        <button className="botong">{"<"}Ver Mas</button>
        </div>
        <div className="textgrilla2">
         
         <button className=' btnShop bg-transparent'>SHOP</button>
       </div>
      </div>
      
      {
                productos && productos.map(p =>{
                    return(
                        <div>
                            <Grilla  img={p.img} id={p.id} img2={p.img2} img3={p.img3} key={p.id} />
                        </div>
                    )
                })
            }
           
      <div className='sups'>
            <p className='p1'>NEWSLETTER</p>
            <p className='p2'>SUSCRIBITE</p>
            <Subscription/>
            <p className='p3'>Y enterate de todas las novedades</p>
          
        </div>
        <Footer/>
      </>
      // grilla ---------------------------
    )
  }
  
  export default LandingPage; 