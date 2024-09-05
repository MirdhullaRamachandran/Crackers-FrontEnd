import React, { useState, useEffect } from 'react';
import './Products.css';
import NavBar from '../../components/NavBar/NavBar';
import Footer from '../../components/NavBar/Footer/Footer';

export default function Products() {
    const [noOfElement, setnoOfElement] = useState(4);
    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/api/getcrackers')
            .then(response => response.json())
            .then(data => {
                setProducts(data.data);
            })
            .catch(error => console.error('Error fetching products:', error));
    }, []);

    const loadMore = () => {
        setnoOfElement(noOfElement + noOfElement);
    };

    const slice = products.slice(0, noOfElement);

    return (
        <>
            <section id='nav-section'>
                <NavBar />
            </section>

            <section className='products-section'>
                <div className='container'>
                    <div className='row'>
                        <div className='col-lg-12'>
                            <div className='title-box'>
                                <span className='subtitle'>All the best items for You</span>
                                <h3 className='main-title'>Our Products</h3>
                            </div>
                            <div className='row productlist'>
                                {slice.map((item, index) => (
                                    <div key={index} className='col-xs-12 col-sm-12 col-ms-3 col-lg-3 xs-margin-top-20px'>
                                        <div className='contain-product layout-default card'>
                                            <div className='product-thumb' style={{ minHeight: '200px' }}>
                                                <img src={item.imageUrl} alt={item.name} width={'100%'} className='product-thumbnail' />
                                            </div>
                                            <div className='info' style={{ textAlign: 'center' }}>
                                                <h5 className='product-title'>{item.name}</h5>
                                                <div className='price'>
                                                    <span className='price-amount'>
                                                        <span>{item.price}</span>
                                                    </span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>

                    <div style={{ display: 'flex', justifyContent: 'center' }}>
                        <button onClick={loadMore}>Load more</button>
                    </div>
                </div>
            </section>

            <section id='footer-section'>
                <Footer />
            </section>
        </>
    );
}
