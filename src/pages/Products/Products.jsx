import React, { useState } from 'react'
import './Products.css'
import products from './ProductLists'
import NavBar from '../../components/NavBar/NavBar'
import Footer from '../../components/NavBar/Footer/Footer'

export default function Products() {
    const [noOfElement, setnoOfElement] = useState(4)

    const loadMore = () => {
        setnoOfElement(noOfElement + noOfElement)
    }

    const slice = products.imgdata.slice(0, noOfElement);

    return (
        <>
            <section id='nav-section'>
                <NavBar></NavBar>
            </section>

            <section className='products-section'>
                <div className='container'>
                    <div className='row'>
                        <div className='col-lg-12'>
                            <div className='title-box'>
                                <span className='subtitle'>All the best item for You</span>
                                <h3 className='main-title'>Our Products</h3>
                            </div>
                            <div className='row productlist'>
                                {slice.map((item, index) => {
                                    return (
                                        <div className='col-xs-12 col-sm-12 col-ms-3 col-lg-3 xs-margin-top-20px'>
                                            <div className='contain-product layout-default card'>
                                                <div className='product-thumb' style={{ minHeight: '200px' }}>
                                                    <img src={item.img} alt='lakshmi' width={'100%'} className='product-thumbnail'></img>
                                                </div>
                                                <div className='info' style={{ textAlign: 'center' }}>
                                                    <h5 className='product-title'>{item.desc}</h5>
                                                    <div className='price'>
                                                        <span className='price-amount'>
                                                            <span>{item.price}</span>
                                                        </span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    )
                                })}

                            </div>
                        </div>
                    </div>

                    <div style={{ display: 'flex', justifyContent: 'center' }}>
                        <button onClick={() => loadMore()} >Load more</button>
                    </div>
                </div>
            </section>

            <section id='footer-section'>
                <Footer></Footer>
            </section>
        </>
    )
}
