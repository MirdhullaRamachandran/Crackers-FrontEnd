import React from 'react'
import './EstimateForm.css'

export default function EstimateForm() {
    const today = new Date();

    // Format the date as DD-MM-YYYY
    const formattedDate = today.toLocaleDateString('en-GB', {
        day: '2-digit',
        month: '2-digit',
        year: 'numeric',
    });
    return (
        <>  
            <section className='about spad'>
                <div className='container'>
                    <div className='row'>
                        <div className='col-lg-12'>
                            <div className='table-responsive'>
                                <div className='card-box mx-3 my-3 order_preview' style={{ width: '98%' }}>
                                    <div className='px-2 py-2'>
                                        <div className='row'>
                                            <div className='col-12 text-center'>
                                                <h2 className='font-weight-bold py-4'>Order Preview</h2>
                                            </div>
                                            <div className='col-sm-3 tet-center'>
                                                <div className='form-group'>
                                                    <a className='btn btn-danger poppins' style={{ fontSize: '11px' }}>Back</a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className='px-2 py-2 text-center'>
                                        <div id='report_area' className='w-100'>
                                            <table cellPadding='0' cellSpacing='0' className='report_table print_order' style={{ width: '100%' }}>
                                                <thead>
                                                    <tr>
                                                        <th colSpan='7' className='table-th'>
                                                            <div style={{ display: 'table', width: '100%' }}>
                                                                <div style={{ display: 'table-row' }}>
                                                                    <div className='enquiryno'>Enquiry No: 2024ENQ2</div>
                                                                    <div className='estimate'>ESTIMATE</div>
                                                                    <div className='currentdate'>Date: {formattedDate}</div>
                                                                </div>
                                                            </div>
                                                        </th>
                                                    </tr>
                                                    <tr>
                                                        <th colSpan='7' className='table-th'>
                                                            <div style={{ display: 'table', width: '100%' }}>
                                                                <div style={{ display: 'table-row' }}>
                                                                    <div style={{ display: 'table-cell', textAlign: 'center' }}>
                                                                        <div style={{ display: 'table' }}>
                                                                            <div style={{ display: 'table-row' }}>
                                                                                <div style={{ display: 'table-cell', textAlign: 'left', paddingLeft: '10px' }}>Mobile : </div>
                                                                                <div style={{ display: 'table-cell', textAlign: 'left', paddingLeft: '10px' }}>93608 13543 , Google pay and Phone pay No: 79047 70238</div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                    <div style={{ display: 'table-cell', textAlign: 'right', verticalAlign: 'top', paddingRight: '10px' }}>E-mail : crackersbuy365@gmail.com</div>
                                                                </div>
                                                            </div>
                                                            <div style={{ display: 'table', width: 'auto', margin: 'auto' }}>
                                                                <div style={{ display: 'table-row' }}>
                                                                    <div style={{ display: 'table-cell', textAlign: 'center', verticalAlign: 'top' }}>
                                                                        <div style={{ width: '100%' }}>Sakthi Fireworks Sivakasi</div>
                                                                        <div style={{ width: '100%', fontWeight: 'normal' }}>Sivakasi, Tamil Nadu, India 626130</div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </th>
                                                    </tr>
                                                    <tr>
                                                        <th colSpan='7' className='table-th'>
                                                            <div style={{ display: 'table', width: '100%' }}>
                                                                <div style={{ display: 'table-row' }}>
                                                                    <div style={{ display: 'table-cell', width: '50%' }}>
                                                                        <div style={{ width: '100%', textAlign: 'center', marginBottom: '5px', fontWeight: 'bold' }}>Customer Details</div>
                                                                        <label style={{ width: '100%', paddingLeft: '10px' }}>---Dinesh---</label>
                                                                        <br />
                                                                        ---9876543210---
                                                                        <label style={{ width: '100%', paddingLeft: '10px' }}>---No:2/252 ,Agathiar 1st street---</label>
                                                                        <br />
                                                                        ---chennai, Tamil Nadu---
                                                                    </div>
                                                                    <div style={{ display: 'table-cell', width: '50%' }}>
                                                                        <div style={{ width: '100%', textAlign: 'center', marginBottom: '5px', fontWeight: 'bold' }}>Bank Details</div>
                                                                        <div style={{ display: 'table', width: 'auto', float: 'right' }}>
                                                                            <div style={{ display: 'table-row' }}>
                                                                                <div style={{ display: 'table-cell', textAlign: 'right', verticalAlign: 'top' }}>A/C Name :</div>
                                                                                <div style={{ display: 'table-cell', textAlign: 'right', verticalAlign: 'top', paddingLeft: '10px', paddingRight: '10px' }}>S.SANTHALAKSHMI:</div>
                                                                            </div>
                                                                            <div style={{ display: 'table-row' }}>
                                                                                <div style={{ display: 'table-cell', textAlign: 'right', verticalAlign: 'top' }}>A/C Number :</div>
                                                                                <div style={{ display: 'table-cell', textAlign: 'right', verticalAlign: 'top', paddingLeft: '10px', paddingRight: '10px' }}>231100050309179</div>
                                                                            </div>
                                                                            <div style={{ display: 'table-row' }}>
                                                                                <div style={{ display: 'table-cell', textAlign: 'right', verticalAlign: 'top' }}>A/C Type :</div>
                                                                                <div style={{ display: 'table-cell', textAlign: 'right', verticalAlign: 'top', paddingLeft: '10px', paddingRight: '10px' }}>Saving</div>
                                                                            </div>
                                                                            <div style={{ display: 'table-row' }}>
                                                                                <div style={{ display: 'table-cell', textAlign: 'right', verticalAlign: 'top' }}>Bank Name :</div>
                                                                                <div style={{ display: 'table-cell', textAlign: 'right', verticalAlign: 'top', paddingLeft: '10px', paddingRight: '10px' }}>TMB</div>
                                                                            </div>
                                                                            <div style={{ display: 'table-row' }}>
                                                                                <div style={{ display: 'table-cell', textAlign: 'right', verticalAlign: 'top' }}>IFSC Code :</div>
                                                                                <div style={{ display: 'table-cell', textAlign: 'right', verticalAlign: 'top', paddingLeft: '10px', paddingRight: '10px' }}>TMBL0000231</div>
                                                                            </div>
                                                                            <div style={{ display: 'table-row' }}>
                                                                                <div style={{ display: 'table-cell', textAlign: 'right', verticalAlign: 'top' }}>Gpay :</div>
                                                                                <div style={{ display: 'table-cell', textAlign: 'right', verticalAlign: 'top', paddingLeft: '10px', paddingRight: '10px' }}>79047 70238</div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </th>
                                                    </tr>
                                                    <tr>
                                                        <th className='th-headers' style={{width:'10px'}}>S.NO</th>
                                                        <th className='th-headers'>Product Name</th>
                                                        <th className='th-headers' style={{width:'75px'}}>Content</th>
                                                        <th className='th-headers' style={{width:'75px'}}>Quantity</th>
                                                        <th className='th-headers' style={{width:'100px'}}>Rate Rs</th>
                                                        <th className='th-headers' style={{width:'10px'}}>Amount Rs</th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    <tr>
                                                        <th colSpan='6' className='td-item-column'>Net Total</th>
                                                        <th className='td-item-column' style={{width:'125px'}}>---</th>
                                                    </tr>
                                                    
                                                    <tr>
                                                        <th colSpan='6' className='td-item-column'>Discount</th>
                                                        <th className='td-item-column' style={{width:'125px'}}>---</th>
                                                    </tr>

                                                    <tr>
                                                        <th colSpan='6' className='td-item-column'>Sub Total</th>
                                                        <th className='td-item-column' style={{width:'125px'}}>---</th>
                                                    </tr>
                                                    
                                                    <tr>
                                                        <th colSpan='6' className='td-item-column'>Round Off</th>
                                                        <th className='td-item-column' style={{width:'125px'}}>---</th>
                                                    </tr>

                                                    <tr>
                                                        <th colSpan='3' className='td-item-column' style={{textAlign:'left'}}>Total Items: ---</th>
                                                        <th colSpan='3' className='td-item-column'>Overall Total</th>
                                                        <th className='td-item-column' style={{width:'125px'}}>---</th>
                                                    </tr>
                                                </tbody>
                                            </table>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section >
        </>
    )
}
