import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './EstimateForm.css';

export default function EstimateForm() {
    const [orderData, setOrderData] = useState(null);
    const today = new Date();

    const formattedDate = today.toLocaleDateString('en-GB', {
        day: '2-digit',
        month: '2-digit',
        year: 'numeric',
    });

    useEffect(() => {
        const data = localStorage.getItem('orderData');
        if (data) {
            setOrderData(JSON.parse(data));
        }
    }, []);

    const handleSubmit = async () => {
        try {
            await axios.post('http://localhost:5000/send-estimate', { orderData });
            alert('Estimate sent successfully');
        } catch (error) {
            console.error('Error sending estimate:', error);
            alert('Failed to send estimate');
        }
    };

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
                                        </div>
                                    </div>
                                    <div className='px-2 py-2 text-center'>
                                        <div id='report_area' className='w-100'>
                                            <table cellPadding='0' cellSpacing='0' className='report_table print_order' style={{ width: '100%' }}>
                                                <thead>
                                                    <tr>
                                                        <th colSpan='7' className='table-th'>
                                                            <div style={{ display: 'table', width: '100%' }}>
                                                                <div style={{ display: 'flex',justifyContent:'space-around' }}>
                                                                    {/* <div className='enquiryno'>Enquiry No: 2024ENQ2</div> */}
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
                                                                                <div style={{ display: 'table-cell', textAlign: 'left', paddingLeft: '10px' }}>Mobile: 9043338930 / 8190827346&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</div>
                                                                                <div style={{ display: 'table-cell', textAlign: 'right', paddingRight: '20px' }}>E-mail: thangathaaicrackers@gmail.com</div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div style={{ display: 'table', width: 'auto', margin: 'auto' }}>
                                                                <div style={{ display: 'table-row' }}>
                                                                    <div style={{ display: 'table-cell', textAlign: 'center', verticalAlign: 'top' }}>
                                                                        <div style={{ width: '100%' }}>Thangathai Fireworks Sivakasi</div>
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
                                                                    <div style={{ display: 'table-cell', width: '100%', textAlign: 'center', marginBottom: '5px', fontWeight: 'bold' }}>Customer Details</div>
                                                                </div>
                                                                <div style={{ display: 'table-row' }}>
                                                                    <div style={{ display: 'table-cell', textAlign: 'center' }}>
                                                                        <label style={{ width: '100%' }}>{orderData?.username}</label>
                                                                        <br />
                                                                        <label style={{ width: '100%' }}>{orderData?.phoneNo}</label>
                                                                        <br />
                                                                        <label style={{ width: '100%' }}>{orderData?.address}</label>
                                                                        <br />
                                                                        <label style={{ width: '100%' }}>{orderData?.city}, {orderData?.state}</label>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </th>
                                                    </tr>
                                                    <tr>
                                                        <th className='th-headers' style={{ width: '10px' }}>S.NO</th>
                                                        <th className='th-headers'>Product Name</th>
                                                        <th className='th-headers' style={{ width: '75px' }}>Quantity</th>
                                                        <th className='th-headers' style={{ width: '100px' }}>Rate Rs</th>
                                                        <th className='th-headers' style={{ width: '10px' }}>Amount Rs</th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    {orderData?.orderItems.map((item, index) => (
                                                        <tr key={index}>
                                                            <td className='td-item-column'>{index + 1}</td>
                                                            <td className='td-item-column'>{item.name}</td>
                                                            <td className='td-item-column'>{item.quantity}</td>
                                                            <td className='td-item-column'>{item.price}</td>
                                                            <td className='td-item-column'>{item.total}</td>
                                                        </tr>
                                                    ))}
                                                    <tr>
                                                        <th colSpan='4' className='td-item-column' style={{ textAlign: 'left' }}>Total Items:</th>
                                                        <th className='td-item-column'>{orderData?.orderItems.length}</th>
                                                    </tr>
                                                    <tr>
                                                        <th colSpan='4' className='td-item-column' style={{ textAlign: 'left' }}>Overall Total</th>
                                                        <th className='td-item-column'>{orderData?.overallTotal}</th>
                                                    </tr>
                                                </tbody>
                                            </table>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div style={{ display: 'flex', justifyContent: 'start', gap: '1rem', paddingLeft: '28px', paddingTop: '20px' }}>
                        {/* <div>
                            <div className='form-group'>
                                <a className='btn btn-danger poppins' style={{ backgroundColor: '#17a2b8', border: '1px solid #17a2b8', fontSize: '11px' }}>Back</a>
                            </div>
                        </div> */}
                        <div>
                            <div className='form-group'>
                                <a className='btn btn-danger poppins' onClick={handleSubmit} style={{ backgroundColor: '#17a2b8', border: '1px solid #17a2b8', fontSize: '11px' }}>Submit</a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}
