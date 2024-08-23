import React, { useState } from 'react';
import NavBar from '../../components/NavBar/NavBar';
import itemLists from './HomeItemLists';
import './Home.css';
import Footer from '../../components/NavBar/Footer/Footer';
import { useForm } from 'react-hook-form';

export default function Home() {
    const { register, handleSubmit, formState: { errors }, setError, clearErrors } = useForm();
    const [selectedItems, setSelectedItems] = useState(
        itemLists.map(item => ({ ...item, quantity: '', total: '' }))
    );
    const [orderError, setOrderError] = useState('');

    const handleQuantityChange = (index, quantity) => {
        const updatedItems = selectedItems.map((item, i) => {
            if (i === index) {
                const updatedQuantity = parseInt(quantity, 10);
                const updatedTotal = updatedQuantity > 0 ? item.price * updatedQuantity : '';

                return {
                    ...item,
                    quantity: updatedQuantity >= 0 ? updatedQuantity : '',
                    total: updatedTotal,
                };
            }
            return item;
        });

        setSelectedItems(updatedItems);
        clearErrors('orderTotal'); // Clear the error when quantities change
    };

    const calculateOverallTotal = () => {
        return selectedItems.reduce((acc, item) => acc + (item.total || 0), 0);
    };

    const calculateSelectedProductCount = () => {
        return selectedItems.filter(item => item.quantity > 0).length;
    };

    const onSubmit = (data) => {
        const overallTotal = calculateOverallTotal();

        if (overallTotal < 3000) {
            setOrderError('Your minimum order should be at least Rs 3000.');
            setError('orderTotal', { type: 'manual', message: 'Minimum order not met' });
        } else {
            setOrderError('');
            console.log(data);
        }
    };

    return (
        <>
            <section id='nav-section'>
                <NavBar />
            </section>

            <section id='products-lists'>
                <div className='container'>
                    <div className='row d-flex'>
                        <div className='col-lg-4 col-md-7'>
                            <h3>Product List</h3>
                        </div>
                    </div>
                </div>

                <div className='container'>
                    <div id='top_section' className='table-responsive sticky-top xs-margin-top-20px'>
                        <div className='row'></div>
                        <table cellPadding='0' cellSpacing='0' style={{ margin: 'auto' }}>
                            <tbody>
                                <tr>
                                    <td><strong>Total Products Selected: </strong> {calculateSelectedProductCount()}</td>
                                    <td><strong>Overall Total: </strong> Rs {calculateOverallTotal().toFixed(2)}</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>

                    <div className='row'>
                        <div className='col-lg-12'>
                            <div className='table-responsive'>
                                <table cellPadding='0' cellSpacing='0' className='pricelist_table pricelist_products'>
                                    <thead>
                                        <tr className='tr-row'>
                                            <th>Image</th>
                                            <th>Product</th>
                                            <th align='text-center'>Price</th>
                                            <th>Quantity</th>
                                            <th>Total</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr className='cart__total' style={{ backgroundColor: '#F83700', color: '#FFF', margin: 0, padding: 0 }}>
                                            <td colSpan='5'><h5>SOUND CRACKERS</h5></td>
                                        </tr>
                                        {selectedItems.map((item, index) => (
                                            <tr key={index}>
                                                <td className='text-center' width='5%'>
                                                    <img src={item.img} width='50px' alt={item.name} />
                                                </td>
                                                <td>{item.name}</td>
                                                <td>Rs {item.price}</td>
                                                <td>
                                                    <input
                                                        type='number'
                                                        name='quantity'
                                                        className='form-control'
                                                        min='1'
                                                        value={item.quantity}
                                                        onChange={(e) =>
                                                            handleQuantityChange(index, e.target.value)
                                                        }
                                                    />
                                                </td>
                                                <td>
                                                    <input
                                                        type='text'
                                                        name='total'
                                                        className='form-control'
                                                        readOnly
                                                        value={item.total !== '' ? ` ${item.total.toFixed(2)}` : ''}
                                                    />
                                                </td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section id='form'>
                <div className="container mt-5">
                    {orderError && (
                        <div className="alert-width alert alert-danger">
                            {orderError}
                        </div>
                    )}
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <div className="mb-3">
                            <label htmlFor="name" className="form-label">Name</label>
                            <input
                                type="text"
                                id="name"
                                style={{width:'60%'}}
                                className={`field-width form-control ${errors.name ? 'is-invalid' : ''}`}
                                {...register('name', { required: 'Name is required' })}
                            />
                            {errors.name && <div className="invalid-feedback">{errors.name.message}</div>}
                        </div>

                        <div className="mb-3">
                            <label htmlFor="mobile" className="form-label">Mobile Number</label>
                            <input
                                type="tel"
                                id="mobile"
                                style={{width:'60%'}}
                                className={`field-width form-control  ${errors.mobile ? 'is-invalid' : ''}`}
                                {...register('mobile', {
                                    required: 'Mobile number is required',
                                    pattern: {
                                        value: /^[0-9]{10}$/,
                                        message: 'Mobile number must be 10 digits',
                                    },
                                })}
                            />
                            {errors.mobile && <div className="invalid-feedback">{errors.mobile.message}</div>}
                        </div>

                        <div className="mb-3">
                            <label htmlFor="email" className="form-label">Email</label>
                            <input
                                type="email"
                                id="email"
                                style={{width:'60%'}}
                                className={`field-width form-control  ${errors.email ? 'is-invalid' : ''}`}
                                {...register('email', {
                                    required: 'Email is required',
                                    pattern: {
                                        value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
                                        message: 'Enter a valid email address',
                                    },
                                })}
                            />
                            {errors.email && <div className="invalid-feedback">{errors.email.message}</div>}
                        </div>

                        <div className="mb-3">
                            <label htmlFor="address" className="form-label">Address</label>
                            <input
                                type="text"
                                id="address"
                                style={{width:'60%'}}
                                className={`field-width form-control  ${errors.address ? 'is-invalid' : ''}`}
                                {...register('address', { required: 'Address is required' })}
                            />
                            {errors.address && <div className="invalid-feedback">{errors.address.message}</div>}
                        </div>

                        <div className="mb-3">
                            <label htmlFor="city" className="form-label">City</label>
                            <input
                                type="text"
                                id="city"
                                style={{width:'60%'}}
                                className={`field-width form-control ${errors.city ? 'is-invalid' : ''}`}
                                {...register('city', { required: 'City is required' })}
                            />
                            {errors.city && <div className="invalid-feedback">{errors.city.message}</div>}
                        </div>

                        <div className="mb-3">
                            <label htmlFor="state" className="form-label">State</label>
                            <input
                                type="text"
                                id="state"
                                style={{width:'60%'}}
                                className={`field-width form-control ${errors.state ? 'is-invalid' : ''}`}
                                {...register('state', { required: 'State is required' })}
                            />
                            {errors.state && <div className="invalid-feedback">{errors.state.message}</div>}
                        </div>

                        <button type="submit" className="btn btn-success">Submit</button>
                    </form>
                </div>

            </section>

            <section id='footer-section'>
                <Footer />
            </section>
        </>
    );
}
