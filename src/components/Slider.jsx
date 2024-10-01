import React from 'react';
import video1 from "../../public/assets/videos/video1.mp4"; // Background video
import './Hero.css'; // Assuming you have a CSS file for custom styles

const Hero = () => {
    return (
        <div className="hero-container">
            {/* Background Video */}
            <video
                src={video1}
                autoPlay
                loop
                muted
                className="hero-video"
            />
            {/* Heading */}
            <h1 className="hero-heading" style={{textAlign: 'center'}}>
                Explore unforgettable journeys tailored to your dreams. From luxurious accommodations to thrilling adventures, we ensure every moment is extraordinary. Let us guide you in crafting the perfect getaway. Your adventure awaits!
            </h1>
        </div>
    );
};

export default Hero;
