import React, { useState } from 'react';
import NavBar from '../../components/NavBar/NavBar';
import Footer from '../../components/NavBar/Footer/Footer';
import axios from 'axios';
import { useForm } from 'react-hook-form';
import Resizer from 'react-image-file-resizer'; // Import for image resizing

export default function Admin() {
    const [selectedImage, setSelectedImage] = useState(null); // State to store the selected image
    const {
        register,
        handleSubmit,
        formState: { errors },
        reset,
    } = useForm();

    // Handle form data submission
    const handleData = (data) => {
        const { name, price, category, discount } = data;

        // Ensure image is selected
        if (selectedImage) {
            uploadData(name, price, category, discount, selectedImage);
        } else {
            alert('Please select an image before submitting.');
        }
    };

    // Upload data and image to the backend
    const uploadData = (name, price, category, discount, image) => {
        const formData = new FormData();
        formData.append('name', name);
        formData.append('price', price);
        formData.append('category', category);
        formData.append('discount', discount); // Append discount to form data
        formData.append('image', image);

        // Post data to the backend
        axios.post('http://localhost:5000/api/crackers', formData, {
            headers: {
                'Content-Type': 'multipart/form-data',
            },
        })
            .then((res) => {
                console.log(res);
                if (res?.status === 201) {
                    alert('Image and data uploaded successfully!');
                    reset(); // Reset form fields
                    setSelectedImage(null); // Reset selected image
                }
            }).catch((err) => {
                console.error(err);
                alert('Failed to upload data and image!');
            });
    };

    // Handle image selection and resizing
    const handleImageChange = (event) => {
        const file = event.target.files[0];

        // Check if file is a valid image (JPG or PNG)
        if (file && (file.type === 'image/jpeg' || file.type === 'image/png')) {
            // Resize the image
            Resizer.imageFileResizer(
                file,
                800, // max width
                800, // max height
                'JPEG', // output format (can also be 'PNG')
                80, // quality (0-100)
                0, // rotation
                (uri) => {
                    // uri is the resized image
                    setSelectedImage(uri); // Set resized image
                },
                'blob' // output type
            );
        } else {
            alert('Please upload a valid image file (JPG or PNG)');
        }
    };

    return (
        <>
            <section id='nav-section'>
                <NavBar />
            </section>

            <section id='crackers-modal' className='container'>
                <button type="button" className="btn btn-success" data-bs-toggle="modal" data-bs-target="#exampleModal" data-bs-whatever="@mdo">Add Crackers</button>

                <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                    <div className="modal-dialog">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h1 className="modal-title fs-5" id="exampleModalLabel">Crackers</h1>
                                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                            </div>
                            <div className="modal-body">
                                <form onSubmit={handleSubmit(handleData)}>
                                    {/* Name Field */}
                                    <div className="mb-3">
                                        <label htmlFor="name" className="col-form-label">Name:</label>
                                        <input type="text" className="form-control" id="name" {...register('name', { required: true })} />
                                        {errors.name && <span className="text-danger">This field is required</span>}
                                    </div>

                                    {/* Price Field */}
                                    <div className="mb-3">
                                        <label htmlFor="price" className="col-form-label">Price:</label>
                                        <input type="number" className="form-control" id="price" {...register('price', { required: true })} />
                                        {errors.price && <span className="text-danger">This field is required</span>}
                                    </div>

                                    {/* Category Dropdown */}
                                    <div className="mb-3">
                                        <label htmlFor="category" className="col-form-label">Category:</label>
                                        <select className="form-control" id="category" {...register('category', { required: true })}>
                                            <option value="">Select Category</option>
                                            <option value="Single Sound Crackers">Single Sound Crackers</option>
                                            <option value="Ground Chakkars">Ground Chakkars</option>
                                            <option value="Fancy Chakkars">Fancy Chakkars</option>
                                            <option value="Flowerpots">Flowerpots</option>
                                            <option value="Fancy Fountains">Fancy Fountains</option>
                                            <option value="Fancy & Novelties">Fancy & Novelties</option>
                                            <option value="Bombs">Bombs</option>
                                            <option value="Loose Crackers">Loose Crackers</option>
                                            <option value="Rockets">Rockets</option>
                                            <option value="Ariel Fancy">Ariel Fancy</option>
                                            <option value="Multiple Color shots">Multiple Color shots</option>
                                            <option value="Sparklers">Sparklers</option>
                                            <option value="Special Sparklers">Special Sparklers</option>
                                            <option value="Twinkling Star">Twinkling Star</option>
                                            <option value="Candle">Candle</option>
                                            <option value="Confetti">Confetti</option>
                                            <option value="Cartoons">Cartoons</option>
                                            <option value="New Items">New Items</option>
                                            <option value="Color Matches">Color Matches</option>
                                            <option value="Deepavali Gun">Deepavali Gun</option>
                                            <option value="Sky Lanterns">Sky Lanterns</option>
                                            <option value="Gift Boxes">Gift Boxes</option>
                                        </select>
                                        {errors.category && <span className="text-danger">This field is required</span>}
                                    </div>

                                    {/* Discount Input */}
                                    <div className="mb-3">
                                        <label htmlFor="discount" className="col-form-label">Discount (%):</label>
                                        <input type="number" className="form-control" id="discount" {...register('discount', { required: true, min: 0, max: 100 })} />
                                        {errors.discount && <span className="text-danger">Please enter a valid discount percentage (0-100)</span>}
                                    </div>

                                    {/* Image Upload */}
                                    <div className="mb-3">
                                        <label htmlFor="image" className="col-form-label">Upload Image:</label>
                                        <input type="file" className="form-control" id="image" accept="image/jpeg, image/png" onChange={handleImageChange} />
                                        {errors.image && <span className="text-danger">Image is required</span>}
                                    </div>

                                    {/* Modal Footer */}
                                    <div className="modal-footer">
                                        <button type="submit" className="btn btn-primary">Add</button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section id='footer-section'>
                <Footer />
            </section>
        </>
    );
}
