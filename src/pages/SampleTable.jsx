import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import './SampleTable.css'

export default function SampleTable() {
  return (
    <>
        <section className='shopping-cart spad'>
            <div className='container'>
                <div id='top_section' className='table-responsive sticky-top xs-margin-top-20px'>
                    <div className='row'></div>
                    <table cellPadding='0' cellSpacing='0' style={{margin:'auto'}} className='table-styles'>
                        <tbody>
                            <tr>
                                <td>
                                    <strong>Total Products</strong>
                                    <span className='product_count'></span>
                                </td>
                                
                                <td>
                                    <strong>Overall total</strong>
                                    <span className='product_count'></span>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>

                <div className='row'>
                    <div className='col-lg-12'>
                        <div className='shopping-cart-table table-resposive'>
                            <table cellPadding='0' cellSpacing='0' id='example' class='pricelist-table pricelist-products table-styles'>
                                <thead>
                                    <tr style={{backgroundColor:'#f83700',color:'#fff'}}>
                                        <th>Image</th>
                                        <th class="product_name" style={{display: "none"}}>Code</th>
                                        <th>Product</th>
                                        <th class="medium_visiable" style={{display: "none"}}>Content</th>
                                        <th style={{width:'10%'}}>Price</th>
                                        <th style={{display:"none"}}>Amount</th>
                                        <th>Quantity</th>
                                        <th>Total</th>
                                    </tr>
                                </thead>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </>
  )
}
