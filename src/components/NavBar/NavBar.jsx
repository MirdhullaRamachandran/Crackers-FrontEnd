import React from 'react'
import './NavBar.css'
import logo from '../../assets/crackerslogo.jpeg'
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
                            <div className='col-12 col-sm-6 col-lg-4 text-center text-sm-left' style={{ padding: '16px' }}>
                                <img src={logo} alt='lgo' style={{ width: '100%' }}></img>
                            </div>
                            <div className='col-12 col-sm-6 col-lg-8 d-flex align-items-center justify-content-center justify-content-sm-end'>
                                <div className='promotional-info d-flex align-items-center justify-content-center mb-3'>
                                    <div className='promo-text text-center'>
                                        <strong style={{color:'red'}}>80% Discount</strong><br />
                                        {/* <strong>Buy for 3000Rs : Get 25 Shots Free!</strong><br />
                                        <strong>Buy for 5000Rs : Get 30 Shots Free!</strong> */}
                                    </div>
                                </div>
                                <div className='navbar navbar-expand-lg navbar-dark'>
                                    <div className='navbar-nav'>
                                        <a className='nav-item nav-link' href='/'>Home</a>
                                        <a className='nav-item nav-link' href='/about'>About Us</a>
                                        {/* <a className='nav-item nav-link' href='/pricelist'>Price List</a> */}
                                        <a className='nav-item nav-link' href='/products'>Products</a>
                                        <a className='nav-item nav-link' href='/contact'>Contact</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </header>
            <div className='pad container'>
                <div className='row bg-red text-white ml-0 mr-0'>
                    <div className='col-6 col-md-3 pt-2 pb-2 d-flex align-items-center justify-content-start'>
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-cart2" viewBox="0 0 16 16"
                            style={{ marginRight: 0 }}>
                            <path d="M0 2.5A.5.5 0 0 1 .5 2H2a.5.5 0 0 1 .485.379L2.89 4H14.5a.5.5 0 0 1 .485.621l-1.5 6A.5.5 0 0 1 13 11H4a.5.5 0 0 1-.485-.379L1.61 3H.5a.5.5 0 0 1-.5-.5M3.14 5l1.25 5h8.22l1.25-5zM5 13a1 1 0 1 0 0 2 1 1 0 0 0 0-2m-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0m9-1a1 1 0 1 0 0 2 1 1 0 0 0 0-2m-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0" />
                        </svg>
                        Minimum<br></br> Order amount Rs.3000
                    </div>
                    <div className='col-6 col-md-3 pt-2 pb-2 d-flex align-items-center justify-content-start'>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6"
                            style={{ marginRight: 0 }}>
                            <path stroke-linecap="round" stroke-linejoin="round" d="M8.25 18.75a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m3 0h6m-9 0H3.375a1.125 1.125 0 0 1-1.125-1.125V14.25m17.25 4.5a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m3 0h1.125c.621 0 1.129-.504 1.09-1.124a17.902 17.902 0 0 0-3.213-9.193 2.056 2.056 0 0 0-1.58-.86H14.25M16.5 18.75h-2.25m0-11.177v-.958c0-.568-.422-1.048-.987-1.106a48.554 48.554 0 0 0-10.026 0 1.106 1.106 0 0 0-.987 1.106v7.635m12-6.677v6.677m0 4.5v-4.5m0 0h-12" />
                        </svg>

                        Freight charges extra
                    </div>
                    <div className='col-6 col-md-3 pt-2 pb-2 d-flex align-items-center justify-content-start'>
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-award" viewBox="0 0 16 16">
                            <path d="M9.669.864 8 0 6.331.864l-1.858.282-.842 1.68-1.337 1.32L2.6 6l-.306 1.854 1.337 1.32.842 1.68 1.858.282L8 12l1.669-.864 1.858-.282.842-1.68 1.337-1.32L13.4 6l.306-1.854-1.337-1.32-.842-1.68zm1.196 1.193.684 1.365 1.086 1.072L12.387 6l.248 1.506-1.086 1.072-.684 1.365-1.51.229L8 10.874l-1.355-.702-1.51-.229-.684-1.365-1.086-1.072L3.614 6l-.25-1.506 1.087-1.072.684-1.365 1.51-.229L8 1.126l1.356.702z" />
                            <path d="M4 11.794V16l4-1 4 1v-4.206l-2.018.306L8 13.126 6.018 12.1z" />
                        </svg>
                        Premium Quality
                    </div>
                    <div className='col-6 col-md-3 pt-2 pb-2 d-flex align-items-center justify-content-start'>
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-cart2" viewBox="0 0 16 16">
                            <path d="M0 2.5A.5.5 0 0 1 .5 2H2a.5.5 0 0 1 .485.379L2.89 4H14.5a.5.5 0 0 1 .485.621l-1.5 6A.5.5 0 0 1 13 11H4a.5.5 0 0 1-.485-.379L1.61 3H.5a.5.5 0 0 1-.5-.5M3.14 5l1.25 5h8.22l1.25-5zM5 13a1 1 0 1 0 0 2 1 1 0 0 0 0-2m-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0m9-1a1 1 0 1 0 0 2 1 1 0 0 0 0-2m-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0" />
                        </svg>
                        Assured Delivery
                    </div>
                </div>
            </div>
        </>
    )
}