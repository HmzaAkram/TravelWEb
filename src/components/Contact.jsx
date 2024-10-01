import React from 'react';
import './Contact.module.css';
import img10 from '../../public/Desenation/TheHofburg.jpg';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { motion } from 'framer-motion';

const Contact = () => {
    const formik = useFormik({
        initialValues: {
            name: '',
            email: '',
            subject: '',
            message: '',
        },
        validationSchema: Yup.object({
            name: Yup.string()
                .min(2, 'Name must be at least 2 characters long')
                .required('Name is required'),
            email: Yup.string()
                .email('Invalid email address')
                .required('Email is required'),
            subject: Yup.string()
                .min(3, 'Subject must be at least 3 characters long')
                .required('Subject is required'),
            message: Yup.string()
                .min(10, 'Message must be at least 10 characters long')
                .required('Message is required'),
        }),
        onSubmit: (values, { resetForm }) => {
            console.log(values);
            alert("Form submitted successfully!");
            resetForm();
        },
    });

    const errorVariant = {
        initial: { opacity: 0, y: -10 },
        animate: { opacity: 1, y: 0 },
    };

    return (
        <div>
            {/* Breadcrumb Area */}
            <div className="breadcrumb-area">
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <nav aria-label="breadcrumb">
                                <ol className="breadcrumb">
                                    <li className="breadcrumb-item">
                                        <a href='/'><i className="fa fa-home"></i> Home</a>
                                    </li>
                                    <li className="breadcrumb-item active" aria-current="page">
                                        Checkout
                                    </li>
                                </ol>
                            </nav>
                        </div>
                    </div>
                </div>
            </div>

            {/* Contact Area Info */}
            <div className="contact-area-info section-padding-0-100">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-12 col-md-6">
                            <div className="contact--thumbnail">
                                <img src={img10} className="img-fluid" alt="" />
                            </div>
                        </div>
                        <div className="col-12 col-md-6">
                            <div className="section-heading">
                                <h2>CONTACT US</h2>
                                <p>We are improving our services to serve you better.</p>
                            </div>
                            <div className="contact-information">
                                <p><strong>Address:</strong> Shah Faisal Colony Flyover, Faisal Cantonment, Karachi</p>
                                <p><strong>Phone:</strong> (021) 34580415</p>
                                <p><strong>Hours:</strong> 9 to 9 (Mon - Sat)</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Contact Form Area */}
            <section className="contact-area">
                <div className="container">
                    <div className="row align-items-start">
                        <div className="col-12 col-lg-6">
                            <div className="section-heading">
                                <h2>GET IN TOUCH</h2>
                                <p>Send us a message, we will call back later</p>
                            </div>
                            <div className="contact-form-area mb-100">
                                <form onSubmit={formik.handleSubmit}>
                                    <div className="row">
                                        <div className="col-12 col-md-6">
                                            <div className="form-group">
                                                <input
                                                    type="text"
                                                    className={`form-control ${formik.errors.name && formik.touched.name ? 'is-invalid' : ''}`}
                                                    id="contact-name"
                                                    placeholder="Your Name"
                                                    {...formik.getFieldProps('name')}
                                                />
                                                {formik.touched.name && formik.errors.name ? (
                                                    <motion.div
                                                        className="text-danger"
                                                        variants={errorVariant}
                                                        initial="initial"
                                                        animate="animate"
                                                    >
                                                        {formik.errors.name}
                                                    </motion.div>
                                                ) : null}
                                            </div>
                                        </div>

                                        <div className="col-12 col-md-6">
                                            <div className="form-group">
                                                <input
                                                    type="email"
                                                    className={`form-control ${formik.errors.email && formik.touched.email ? 'is-invalid' : ''}`}
                                                    id="contact-email"
                                                    placeholder="Your Email"
                                                    {...formik.getFieldProps('email')}
                                                />
                                                {formik.touched.email && formik.errors.email ? (
                                                    <motion.div
                                                        className="text-danger"
                                                        variants={errorVariant}
                                                        initial="initial"
                                                        animate="animate"
                                                    >
                                                        {formik.errors.email}
                                                    </motion.div>
                                                ) : null}
                                            </div>
                                        </div>

                                        <div className="col-12">
                                            <div className="form-group">
                                                <input
                                                    type="text"
                                                    className={`form-control ${formik.errors.subject && formik.touched.subject ? 'is-invalid' : ''}`}
                                                    id="contact-subject"
                                                    placeholder="Subject"
                                                    {...formik.getFieldProps('subject')}
                                                />
                                                {formik.touched.subject && formik.errors.subject ? (
                                                    <motion.div
                                                        className="text-danger"
                                                        variants={errorVariant}
                                                        initial="initial"
                                                        animate="animate"
                                                    >
                                                        {formik.errors.subject}
                                                    </motion.div>
                                                ) : null}
                                            </div>
                                        </div>

                                        <div className="col-12">
                                            <div className="form-group">
                                                <textarea
                                                    className={`form-control ${formik.errors.message && formik.touched.message ? 'is-invalid' : ''}`}
                                                    name="message"
                                                    id="message"
                                                    cols="30"
                                                    rows="10"
                                                    placeholder="Message"
                                                    {...formik.getFieldProps('message')}
                                                ></textarea>
                                                {formik.touched.message && formik.errors.message ? (
                                                    <motion.div
                                                        className="text-danger"
                                                        variants={errorVariant}
                                                        initial="initial"
                                                        animate="animate"
                                                    >
                                                        {formik.errors.message}
                                                    </motion.div>
                                                ) : null}
                                            </div>
                                        </div>

                                        <div className="col-12">
                                            <button type="submit" className="btn alazea-btn mt-15">
                                                Send Message
                                            </button>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                        <div className="col-12 col-lg-6">
                            <div className="map-area mb-100">
                                <iframe
                                    src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d14477.256537922056!2d67.1518249!3d24.8872643!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3eb339999415e0c3%3A0x36742eee0fd9c291!2sAptech%20Metro%20Star%20Gate!5e0!3m2!1sen!2s!4v1724573185736!5m2!1sen!2s"
                                    width="100%" // Make it responsive
                                    height="450"
                                    style={{ border: 0 }}
                                    allowFullScreen=""
                                    loading="lazy"
                                    referrerPolicy="no-referrer-when-downgrade"
                                    title="Google Map"
                                ></iframe>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Contact;