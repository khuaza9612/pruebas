import React from 'react'
import umbrella from '../img/umbrella.png'
import nap from '../img/nap.png'
import bolsas from '../img/bolsas.png'
import puff from '../img/puff.png'
import './Nav.css'


export default function Nav() {
  return (
    // <div className='container'>
    //     <div className='row'>
    //         <ul className='nav'>
    //         <p className=''><img src={umbrella} alt='puf'></img>PUFI PUFF</p>
    //         <p className='navbar-menu'><img src={bolsas} alt='puf'></img>PUFI PUFF</p>
    //         <p className='navbar-menu'><img src={nap} alt='puf'></img>PUFI PUFF</p>
    //         <p className='navbar-menu'><img src={puff} alt='puf'></img>PUFI PUFF</p>
                        
            
    //     </ul>
    //     </div>
    //     <ul className='account'>
    //         <dd className='navbar-menu'>MI CUENTA</dd>
    //         <dd>MI COMPRA</dd>
    //     </ul>
    // </div>
    
    
        <div className='navbar_container'>
            <div className='nav'>
            <h1>Pufi</h1>
            <ul className='menu'>
              <dd><img src={puff} alt='puf'></img>Pufi Puff</dd>
                <dd className='navbar-menu'><img src={umbrella} alt='rain'></img>PUFI RAIN</dd>
                <dd className='navbar-menu'><img src={nap} alt='cart'></img>PUFI CART</dd>
                <dd className='navbar-menu'><img src={bolsas} alt='nap'></img>PUFI NAP</dd>
            </ul>
            <ul className='account'>
                <dd className='navbar-menu'>MI CUENTA</dd>
                <dd>MI COMPRA</dd>
            </ul>
            </div> 
        </div>
      )
    
                
    
  
}