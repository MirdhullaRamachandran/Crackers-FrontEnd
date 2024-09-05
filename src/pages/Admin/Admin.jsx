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

    const handleData = (data) => {
        const { name, price, category } = data;

        if (selectedImage) {
            uploadData(name, price, category, selectedImage);
        } else {
            alert('Please select an image before submitting.');
        }
    };

    const uploadData = (name, price, category, image) => {
        const formData = new FormData();
        formData.append('name', name);
        formData.append('price', price);
        formData.append('category', category);
        formData.append('image', image);

        axios.post('http://localhost:5000/api/crackers', formData, {
            headers: {
                'Content-Type': 'multipart/form-data',
            },
        })
            .then((res) => {
                console.log(res);
                if (res?.status === 201) {
                    alert('Image and data uploaded successfully!');
                    reset();
                    setSelectedImage(null);
                }
            }).catch((err) => {
                console.error(err);
                alert('Failed to upload data and image!');
            });
    };

    const handleImageChange = (event) => {
        const file = event.target.files[0];
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
                    setSelectedImage(uri);
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
                <button type="button" className="btn btn-success" data-bs-toggle="modal" data-bs-target="#exampleModal" data-bs-whatever="@mdo">Add crackers</button>

                <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                    <div className="modal-dialog">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h1 className="modal-title fs-5" id="exampleModalLabel">Crackers</h1>
                                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                            </div>
                            <div className="modal-body">
                                <form onSubmit={handleSubmit(handleData)}>
                                    <div className="mb-3">
                                        <label htmlFor="name" className="col-form-label">Name:</label>
                                        <input type="text" className="form-control" id="name" {...register('name', { required: true })} />
                                        {errors.name && <span className="text-danger">This field is required</span>}
                                    </div>

                                    <div className="mb-3">
                                        <label htmlFor="price" className="col-form-label">Price:</label>
                                        <input type="number" className="form-control" id="price" {...register('price', { required: true })} />
                                        {errors.price && <span className="text-danger">This field is required</span>}
                                    </div>

                                    <div className="mb-3">
                                        <label htmlFor="category" className="col-form-label">Category:</label>
                                        <select className="form-control" id="category" {...register('category', { required: true })}>
                                            <option value="">Select Category</option>
                                            <option value="Single Sound Crackers">Sound Crackers</option>
                                            <option value="Ground Crackers">Ground Crackers</option>
                                            <option value="Bombs">Bombs</option>
                                            <option value="Flowerpots">Flowerpots</option>
                                            <option value="Fancy Fountains">Fancy Fountains</option>
                                            <option value="Twinkling Star">Twinkling Star</option>
                                            <option value="Multiple Color shots">Multiple Color shots</option>
                                            <option value="Others">Others</option>
                                            <option value="Gift Boxes">Gift Boxes</option>



                                        </select>
                                        {errors.category && <span className="text-danger">This field is required</span>}
                                    </div>

                                    <div className="mb-3">
                                        <label htmlFor="image" className="col-form-label">Upload Image:</label>
                                        <input type="file" className="form-control" id="image" accept="image/jpeg, image/png" onChange={handleImageChange} />
                                        {errors.image && <span className="text-danger">Image is required</span>}
                                    </div>

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
