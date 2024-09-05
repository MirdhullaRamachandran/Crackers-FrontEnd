import React from 'react'
import NavBar from '../../components/NavBar/NavBar'
import pricelistpdf from '../../assets/thangathai.pdf'
import './PriceList.css'
import Footer from '../../components/NavBar/Footer/Footer'

export default function PriceList() {
    return (
        <>
            <section id='nav-section'>
                <NavBar></NavBar>
            </section>

            <section id='price'>
                <h2 className='pricelist-h2 container'>Price List</h2>
                <div className='desktop-view container'>
                    <object data={pricelistpdf} type='application/pdf' width={'100%'} height={'800px'}></object>
                </div>
                {/* For Media Query */}
                <div className='mobile-view container'>
                    <a href={pricelistpdf} style={{ backgroundColor: '#002366', color: '#ffffff', padding: '5px' }}>Download Price List</a>
                </div>
            </section>

            <section id='footer-section'>
                <Footer></Footer>
            </section>
        </>
    )
}
