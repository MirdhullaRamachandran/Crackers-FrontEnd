import React from 'react';
import NavBar from '../../components/NavBar/NavBar';
import Footer from '../../components/NavBar/Footer/Footer';
import axios from 'axios';
import { useForm } from 'react-hook-form';
// Assuming axiosconfig is used to set headers like 'Content-Type' or 'Authorization'
import { axiosconfig } from '../../components/constant';

export default function Admin() {
    const {
        register,
        handleSubmit,
        formState: { errors  },
        reset, // Added reset to clear the form on success
    } = useForm();

    const handleData = (data) => {
        const { name, price } = data;
        
        // Ensure axiosconfig does not include CORS-related headers like 'Access-Control-Allow-Origin'
        axios.post('http://localhost:5000/api/crackers', { name, price }, axiosconfig)
            .then((res) => {
                console.log(res);
                if (res?.data?.status === "POSTED") {
                    console.log('Successfully posted data');
                    alert('Data successfully posted!');
                    reset(); // Clear the form after successful submission
                }
            }).catch((err) => {
                console.error(err);
                alert('Failed to post data!');
            });
    }

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
