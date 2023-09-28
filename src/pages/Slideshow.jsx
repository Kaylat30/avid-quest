import { useState, useEffect } from 'react';

import crane from '../imgs/crane.jpg'; 
import elephant from '../imgs/elephant.webp'; 
import gorilla from '../imgs/gorila.jpg'; 
import lion from '../imgs/lion.jpg'; 
import tourist from '../imgs/tourist.jpg'; 
    

export default function Slideshow() {
    const slides = [
        {
        image: elephant,
        heading: 'Heading 1',
        paragraph: 'Paragraph 1 Text goes here.',
        },
        {
        image: crane,
        heading: 'Heading 2',
        paragraph: 'Paragraph 2 Text goes here.',
        },
        {
        image: gorilla,
        heading: 'Heading 3',
        paragraph: 'Paragraph 3 Text goes here.',
        },
        {
        image: lion,
        heading: 'Heading 4',
        paragraph: 'Paragraph 4 Text goes here.',
        },
        {
        image: tourist,
        heading: 'Heading 5',
        paragraph: 'Paragraph 5 Text goes here.',
        },
    ];
    const [currentSlide, setCurrentSlide] = useState(0);
    
    const nextSlide = () => {
        setCurrentSlide((prevIndex) => (prevIndex === slides.length - 1 ? 0 : prevIndex + 1));
    };
    
    const prevSlide = () => {
        setCurrentSlide((prevIndex) => (prevIndex === 0 ? slides.length - 1 : prevIndex - 1));
    };
    
    useEffect(() => {
        const interval = setInterval(() => {
        nextSlide();
        }, 2000);
    
        return () => {
        clearInterval(interval);
        };
    }, []);
    
    const currentSlideData = slides[currentSlide];
    
    return (
        <div>
        <div className="slideshow-container">
            <div className="slideshow-item">
            <img
                className="slideshow-image"
                src={currentSlideData.image}
                alt={`Image ${currentSlide + 1}`}
            />
            <div className="slideshow-text">
                <div className="slideshow-heading">{currentSlideData.heading}</div>
                <div className="slideshow-paragraph">{currentSlideData.paragraph}</div>
            </div>
            </div>
        </div>
        <button className="slideshow-button prev" onClick={prevSlide}>
            Previous
        </button>
        <button className="slideshow-button next" onClick={nextSlide}>
            Next
        </button>
        </div>
    );
}