import React, { useEffect, useState } from 'react';
import NavBar from '../../components/NavBar/NavBar';
import './Home.css';
import Footer from '../../components/NavBar/Footer/Footer';
import { useForm } from 'react-hook-form';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';

export default function Home() {
    const { register, handleSubmit, formState: { errors }, setError, clearErrors } = useForm();
    const [selectedItems, setSelectedItems] = useState([]);
    const [orderError, setOrderError] = useState('');
    const [modalVisible, setModalVisible] = useState(false);
    const [selectedImage, setSelectedImage] = useState(null);

    const handleDataget = () => {
        axios
            .get('http://localhost:5000/api/getcrackers')
            .then((res) => {
                if (res?.data) {
                    setSelectedItems(res.data.data)
                }
            }).catch((err) => console.log(err));
    }

    useEffect(() => {
        handleDataget();
    }, []);


    const handleQuantityChange = (index, quantity) => {
        console.log(quantity);
        // let dummy = selectedItems;
        // let updatedItems;

        // if (dummy?.length > 0) {
        //     updatedItems = dummy?.map(item => {
        //         if (item._id === newItem._id) {
        //             item.quantity = quantity;
        //             item.total = item.price * quantity

        //             return item;
        //         } else {
        //             let item = {
        //                 _id: newItem._id, quantity, price: newItem.price
        //             }
        //             return item;
        //         }
        //     })

        // } else {
        //     let item = {
        //         _id: newItem._id, quantity, price: newItem.price
        //     }
        //     updatedItems = [...dummy, item]
        // }

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

        console.log(updatedItems);
        setSelectedItems(updatedItems);
        clearErrors('orderTotal'); // Clear the error when quantities change
    };

    const calculateOverallTotal = () => {
        let data = selectedItems?.reduce((acc, item) => acc + (item.total || 0), 0);
        // console.log(data);
        return data;
    };

    const calculateSelectedProductCount = () => {
        return selectedItems.filter(item => item.quantity > 0).length;
    };

    const onSubmit = async (data) => {
        const overallTotal = calculateOverallTotal();
        let filterItems = []


        selectedItems?.filter(i => {
            if (i.quantity > 0) {
                let item = { productId: i._id, quantity: i.quantity, total: i.total };
                filterItems.push(item);
            }
        });

        console.log(filterItems);
        let finalData = { ...data, overallTotal, orderItems: filterItems };

        let response = await axios.post('http://localhost:5000/api/userestim', finalData);

        console.log(response);
        // if (overallTotal < 3000) {
        //     setOrderError('Your minimum order should be at least Rs 3000.');
        //     setError('orderTotal', { type: 'manual', message: 'Minimum order not met' });
        // } else {
        //     setOrderError('');
        //     console.log(data);
        // }
    };

    const handleImageClick = (imageUrl) => {
        setSelectedImage(imageUrl);
        setModalVisible(true);
    };

    const closeModal = () => {
        setModalVisible(false);
        setSelectedImage(null);
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
                        <table cellPadding='0' cellSpacing='0' style={{ margin: 'auto' }} className='table-styles'>
                            <tbody>
                                <tr>
                                    <td>
                                        <strong>Total Products</strong>
                                        <span className='product_count'>    {calculateSelectedProductCount()}</span>
                                    </td>

                                    <td>
                                        <strong>Overall total</strong>
                                        <span className='product_count'> {calculateOverallTotal()}</span>
                                        {/* <span className='product_count'> {calculateOverallTotal()?.toFixed(2)}</span> */}
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
                                        <tr style={{ backgroundColor: '#f83700', color: '#fff' }}>
                                            <th>Image</th>
                                            <th class="product_name" style={{ display: "none" }}>Code</th>
                                            <th>Product</th>
                                            <th class="medium_visiable" style={{ display: "none" }}>Content</th>
                                            <th style={{ width: '10%' }}>Price</th>
                                            <th style={{ display: "none" }}>Amount</th>
                                            <th>Quantity</th>
                                            <th>Total</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr className='category_row cart__total' style={{ backgroundColor: '#F83700', color: '#FFF', margin: 0, padding: 0 }}>
                                            <td colSpan='5'>
                                                <h5 style={{ margin: 0, padding: 0 }}>SOUND CRACKERS</h5>
                                            </td>
                                        </tr>
                                        {selectedItems?.map((item, index) => (

                                            <tr className='product_row' key={index}>
                                                <td className='product_image text-center' width='5%'>
                                                    <img
                                                        src={item.imageUrl}
                                                        width='50px'
                                                        alt=''
                                                        onClick={() => handleImageClick(item.imageUrl)}
                                                        style={{ cursor: 'pointer' }}
                                                    />
                                                </td>
                                                <td id='2' className='product_name text-center'>{item.name}</td>
                                                <td className='text-center' width='10%'>Rs
                                                    <span className='actual_price'> {item.price}</span>
                                                </td>
                                                <td className='quantity text-center pd' width='10%'>
                                                    <input type='number' name='quantity' min='1' className='form-control qty_box quantity_2' value={item.quantity || 0}
                                                        onChange={(e) =>
                                                            handleQuantityChange(index, e.target.value)
                                                        }></input>
                                                </td>
                                                <td id='0' className='amount text-center pd' width='10%'>
                                                    <input type='text' name='amount' className='form-control' disabled style={{ paddingLeft: 0, paddingRight: '7px' }} value={item.total && item.total != 0 ? ` ${item.total}` : 0}></input>
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
                                style={{ width: '60%' }}
                                className={`field-width form-control ${errors.name ? 'is-invalid' : ''}`}
                                {...register('username', { required: 'Name is required' })}
                            />
                            {errors.name && <div className="invalid-feedback">{errors.name.message}</div>}
                        </div>

                        <div className="mb-3">
                            <label htmlFor="mobile" className="form-label">Mobile Number</label>
                            <input
                                type="tel"
                                id="mobile"
                                style={{ width: '60%' }}
                                className={`field-width form-control  ${errors.mobile ? 'is-invalid' : ''}`}
                                {...register('phoneNo', {
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
                                style={{ width: '60%' }}
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
                                style={{ width: '60%' }}
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
                                style={{ width: '60%' }}
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
                                style={{ width: '60%' }}
                                className={`field-width form-control ${errors.state ? 'is-invalid' : ''}`}
                                {...register('state', { required: 'State is required' })}
                            />
                            {errors.state && <div className="invalid-feedback">{errors.state.message}</div>}
                        </div>

                        <button type="submit" className="btn btn-success">Submit</button>
                    </form>
                </div>
            </section>

            {modalVisible && (
                <div className="modal fade show d-block" tabIndex="-1" role="dialog">
                    <div className="modal-dialog" role="document">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title">Product Image</h5>
                            </div>
                            <div className="modal-body">
                                <img src={selectedImage} className="img-fluid" alt="Product" />
                            </div>
                            <div className="modal-footer">
                                <button type="button" className="btn btn-secondary" onClick={closeModal}>Close</button>
                            </div>
                        </div>
                    </div>
                </div>
            )}


            <section id='footer-section'>
                <Footer />
            </section>
        </>
    );
}
