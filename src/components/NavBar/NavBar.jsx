import React from 'react'
import './NavBar.css'
import logo from '../../assets/crackerslogo.png'

export default function NavBar() {
    return (
        <>
            <header>
                <div className='main'>
                    <div className='container'>
                        <div className='row'>
                            <div className='col-md-12'>
                                <marquee className='marquee-header'>All type of crackers available. Our brands: Sony, Mother's, Rajkala, Bluestar.</marquee>
                            </div>
                            <div className='col-12 col-sm-6 col-lg-4 text-center text-sm-left'>
                                <img src={logo} alt='lgo' style={{ width: '100%' }}></img>
                            </div>
                            <div className='col-12 col-sm-6 col-lg-8 d-flex align-items-center justify-content-center justify-content-sm-end'>
                                <div className='navbar navbar-expand-lg navbar-dark'>
                                    <div className='navbar-nav'>
                                        <a className='nav-item nav-link' href='/'>Home</a>
                                        <a className='nav-item nav-link' href='/about'>About Us</a>
                                        <a className='nav-item nav-link' >Price List</a>
                                        <a className='nav-item nav-link' >Products</a>
                                        <a className='nav-item nav-link' >Contact</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </header>
            <div className='pad container'>
                <div className='row bg-primary text-white ml-0 mr-0'>
                    <div className='col-6 col-md-3 pt-2 pb-2 d-flex align-items-center justify-content-start'>
                        <p>Minimum Order amount Rs.3000</p>
                    </div>
                    <div className='col-6 col-md-3 pt-2 pb-2 d-flex align-items-center justify-content-start'>
                        <p>Freight charges extra</p>
                    </div>
                    <div className='col-6 col-md-3 pt-2 pb-2 d-flex align-items-center justify-content-start'>
                        <p>Premium Quality</p>
                    </div>
                    <div className='col-6 col-md-3 pt-2 pb-2 d-flex align-items-center justify-content-start'>
                        <p>Assured Delivery</p>
                    </div>
                </div>
            </div>
        </>
    )
}
