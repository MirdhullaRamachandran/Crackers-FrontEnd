import React, { useEffect, useState } from 'react';
import NavBar from '../../components/NavBar/NavBar';
import './Home.css';
import Footer from '../../components/NavBar/Footer/Footer';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useForm } from 'react-hook-form';

export default function Home() {
    const { register, handleSubmit, formState: { errors }, setError, clearErrors } = useForm();
    const [selectedItems, setSelectedItems] = useState([]);
    const [orderError, setOrderError] = useState('');
    const [modalVisible, setModalVisible] = useState(false);
    const [selectedImage, setSelectedImage] = useState(null);
    const [filteredItems, setFilteredItems] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');

    const handleDataget = () => {
        axios
            .get('https://web.thangathaaicrackers.com/api/getcrackers')
            .then((res) => {
                if (res?.data) {
                    setSelectedItems(res.data.data);
                    setFilteredItems(res.data.data);
                }
            })
            .catch((err) => console.log(err));
    };

    useEffect(() => {
        handleDataget();
    }, []);

    useEffect(() => {
        if (searchTerm) {
            const filtered = selectedItems.filter(item =>
                item.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                item.category.toLowerCase().includes(searchTerm.toLowerCase())
            );
            setFilteredItems(filtered);
        } else {
            setFilteredItems(selectedItems);
        }
    }, [searchTerm, selectedItems]);


    const handleQuantityChange = (id, quantity) => {
        const updatedItems = selectedItems.map((item) => {
            if (item._id === id) {
                const updatedQuantity = parseInt(quantity, 10);

                // Apply the discount if available
                const discountedPrice = item.discount
                    ? item.price - (item.price * item.discount / 100)
                    : item.price;

                const updatedTotal = updatedQuantity > 0 ? discountedPrice * updatedQuantity : '';

                return {
                    ...item,
                    quantity: updatedQuantity >= 0 ? updatedQuantity : '',
                    total: updatedTotal,
                };
            }
            return item;
        });

        setSelectedItems(updatedItems);
    };

    const calculateOverallTotal = () => {
        return selectedItems.reduce((acc, item) => acc + (item.total || 0), 0);
    };

    const calculateSelectedProductCount = () => {
        return selectedItems.filter(item => item.quantity > 0).length;
    };

    const onSubmit = async (data) => {
        const overallTotal = calculateOverallTotal();

        if (overallTotal < 3000) {
            setOrderError('The minimum order amount is Rs 3000.');
            return;
        } else {
            setOrderError('');
        }

        let filterItems = selectedItems.filter(item => item.quantity > 0).map(item => ({
            productId: item._id,
            quantity: item.quantity,
            total: item.total,
            name: item.name,
            price: item.price,
            discount: item.discount // Include discount in the submitted data
        }));

        let finalData = { ...data, overallTotal, orderItems: filterItems };

        localStorage.setItem('orderData', JSON.stringify(finalData));

        await axios.post('https://web.thangathaaicrackers.com/api/userestim', finalData);

        window.location.href = '/preview';
    };

    const handleImageClick = (imageUrl) => {
        setSelectedImage(imageUrl);
        setModalVisible(true);
    };

    const closeModal = () => {
        setModalVisible(false);
        setSelectedImage(null);
    };

    const renderCategory = (categoryName) => {
        return (
            <>
                <tr className='category_row cart__total' style={{ backgroundColor: '#aab1ff', color: '#FFF', margin: 0, padding: 0 }}>
                    <td colSpan='6'>
                        <h5 style={{ margin: 0, padding: 0 }}>{categoryName.toUpperCase()}</h5>
                    </td>
                </tr>
                {filteredItems
                    ?.filter(item => item.category === categoryName)
                    ?.map((item) => (
                        <tr className='product_row' key={item._id}>
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
                            {/* Discount Column */}
                            <td className='text-center' width='10%'>
                                {item.discount ? `${item.discount}%` : '0%'}
                            </td>
                            <td className='quantity text-center pd' width='10%'>
                                <input
                                    type='number'
                                    name='quantity'
                                    min='1'
                                    className='form-control qty_box quantity_2'
                                    value={item.quantity || 0}
                                    onChange={(e) =>
                                        handleQuantityChange(item._id, e.target.value)
                                    }
                                ></input>
                            </td>
                            <td id='0' className='amount text-center pd' width='10%'>
                                <input
                                    type='text'
                                    name='amount'
                                    className='form-control'
                                    disabled
                                    style={{ paddingLeft: 0, paddingRight: '7px' }}
                                    value={item.total && item.total !== 0 ? ` ${item.total}` : 0}
                                ></input>
                            </td>
                        </tr>
                    ))}
            </>
        );
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
                    <div className='col-lg-4 col-md-5'>
                        {/* Search Input */}
                        <input
                            type='text'
                            placeholder='Search by product or category...'
                            className='form-control'
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                        />
                    </div>
                </div>
                <div className='container'>
                    <div id='top_section' className='table-responsive sticky-top xs-margin-top-20px'>
                        <table cellPadding='0' cellSpacing='0' style={{ margin: 'auto' }} className='table-styles'>
                            <tbody>
                                <tr>
                                    <td>
                                        <strong>Total Products </strong>
                                        <span className='product_count'>{calculateSelectedProductCount()}</span>
                                    </td>
                                    <td>
                                        <strong>Overall Total </strong>
                                        <span className='product_count'>{calculateOverallTotal()}</span>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>

                    <div className='row'>
                        <div className='col-lg-12'>
                            <div className='shopping-cart-table table-responsive'>
                                <table cellPadding='0' cellSpacing='0' id='example' className='pricelist-table pricelist-products table-styles'>
                                    <thead>
                                        <tr style={{ backgroundColor: '#eca1fe', color: '#fff' }}>
                                            <th>Image</th>
                                            <th>Product</th>
                                            <th>Price</th>
                                            <th>Discount</th> {/* Added Discount Column */}
                                            <th>Quantity</th>
                                            <th>Total</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {renderCategory('Single Sound Crackers')}
                                        {renderCategory('Ground Chakkars')}
                                        {renderCategory('Fancy Chakkars')}
                                        {renderCategory('Flowerpots')}
                                        {renderCategory('Fancy Fountains')}
                                        {renderCategory('Fancy & Novelties')}
                                        {renderCategory('Bombs')}
                                        {renderCategory('Loose Crackers')}
                                        {renderCategory('Rockets')}
                                        {renderCategory('Ariel Fancy')}
                                        {renderCategory('Multiple Color shots')}
                                        {renderCategory('Sparklers')}
                                        {renderCategory('Special Sparklers')}
                                        {renderCategory('Twinkling Star')}
                                        {renderCategory('Candle')}
                                        {renderCategory('Confetti')}
                                        {renderCategory('Cartoons')}
                                        {renderCategory('New Items')}
                                        {renderCategory('Color Matches')}
                                        {renderCategory('Deepavali Gun')}
                                        {renderCategory('Sky Lanterns')}
                                        {renderCategory('Gift Boxes')}

                                        <tr>
                                            <td colSpan='5' style={{ textAlign: 'right', fontSize: '16px', color: '#17a3b8', fontWeight: 'bold', padding: '10px' }}>
                                                Overall Total
                                            </td>
                                            <td style={{ textAlign: 'start', padding: '10px' }}>
                                                {calculateOverallTotal()}
                                            </td>
                                        </tr>

                                        {calculateOverallTotal() < 3000 && (
                                            <tr>
                                                <td colSpan='6' className='text-center text-danger'>
                                                    <strong>The minimum order amount is Rs 3000.</strong>
                                                </td>
                                            </tr>
                                        )}
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
                                        message: 'Invalid mobile number',
                                    },
                                })}
                            />
                            {errors.mobile && <div className="invalid-feedback">{errors.mobile.message}</div>}
                        </div>

                        <div className="mb-3">
                            <label htmlFor="email" className="form-label">Email Address</label>
                            <input
                                type="email"
                                id="email"
                                style={{ width: '60%' }}
                                className={`field-width form-control ${errors.email ? 'is-invalid' : ''}`}
                                {...register('email', {
                                    required: 'Email address is required',
                                    pattern: {
                                        value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                                        message: 'Invalid email address',
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

                        <button type="submit" className="btn" style={{ width: '150px', backgroundColor: '#aab1ff' }}>
                            Submit
                        </button>
                    </form>
                </div>
            </section>

            {modalVisible && selectedImage && (
                <div className="modal fade show" style={{ display: 'block' }}>
                    <div className="modal-dialog modal-lg">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title">Image Preview</h5>
                                <button type="button" className="btn-close" onClick={closeModal}></button>
                            </div>
                            <div className="modal-body">
                                <img src={selectedImage} alt="Cracker" className="img-fluid" />
                            </div>
                            <div className="modal-footer">
                                <button type="button" className="btn btn-secondary" onClick={closeModal}>Close</button>
                            </div>
                        </div>
                    </div>
                </div>
            )}

            <div className="sticky-sidebar">
                <a href="https://wa.me/9092346104?text=Hello, I have a question about how to place an Order?" target="_blank" rel="noopener noreferrer" className="whatsapp-button">
                    <i className="fab fa-whatsapp"></i>
                </a>
                <div className="callus-button">
                    <a href="tel:8190827346" className="phone-icon">
                        <i className="fas fa-phone-alt"></i>
                    </a>
                    <div className="phone-tooltip" style={{ color: 'black' }}>
                        Call: <span style={{ color: 'white' }}>8190827346</span>
                    </div>
                </div>
            </div>

            <section id='footer-section'>
                <Footer />
            </section>
        </>
    );
}
