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
                                        <a className='nav-item nav-link' href='/pricelist'>Price List</a>
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
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-truck" viewBox="0 0 16 16">
                            <path d="M0 3.5A1.5 1.5 0 0 1 1.5 2h9A1.5 1.5 0 0 1 12 3.5V5h1.02a1.5 1.5 0 0 1 1.17.563l1.481 1.85a1.5 1.5 0 0 1 .329.938V10.5a1.5 1.5 0 0 1-1.5 1.5H14a2 2 0 1 1-4 0H5a2 2 0 1 1-3.998-.085A1.5 1.5 0 0 1 0 10.5zm1.294 7.456A2 2 0 0 1 4.732 11h5.536a2 2 0 0 1 .732-.732V3.5a.5.5 0 0 0-.5-.5h-9a.5.5 0 0 0-.5.5v7a.5.5 0 0 0 .294.456M12 10a2 2 0 0 1 1.732 1h.768a.5.5 0 0 0 .5-.5V8.35a.5.5 0 0 0-.11-.312l-1.48-1.85A.5.5 0 0 0 13.02 6H12zm-9 1a1 1 0 1 0 0 2 1 1 0 0 0 0-2m9 0a1 1 0 1 0 0 2 1 1 0 0 0 0-2" />
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
