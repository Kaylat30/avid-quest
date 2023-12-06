import { useState, useEffect } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import {IoChevronForward,IoChevronBack} from "react-icons/io5";

import crane from '../imgs/crane.jpg'; 
import elephant from '../imgs/elephant.webp'; 
import gorilla from '../imgs/gorila.jpg'; 
import lion from '../imgs/lion.jpg'; 
import tourist from '../imgs/tourist.jpg'; 
import tiger from "../imgs/tiger.png" ;
import giraffe from '../imgs/giraffe.jpg'; 
import buffalo from "../imgs/buffalo.jpg" ;
import rhino from "../imgs/rhino.jpg" ;
import mburo from '../imgs/mburo.jpg'; 
import kidepo from '../imgs/kidepo.jpg'; 
import murchison from "../imgs/murchison.jpg" ;
import queen from "../imgs/queen.jpg" ;

export default function Home() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const slides = [
    {
      image: elephant,
      heading: 'Travel & Adventures',
      paragraph: 'Where Would You Like To Go',
    },
    {
      image: crane,
      heading: 'Traveling',
      paragraph: 'Uganda the Pearl of Africa',
    },
    {
      image: gorilla,
      heading: 'Traveling',
      paragraph: 'Explore Uganda Gorillas',
    },
    {
      image: lion,
      heading: 'Traveling',
      paragraph: 'Your journey begins here',
    },
    {
      image: tourist,
      heading: 'Traveling',
      paragraph: 'Your journey begins here',
    },
  ];

  const showSlide = (index) => {
    setCurrentSlide(index);
  };

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

  const renderSlideIndicators = () => {
    return (
      <div className="slide-indicators">
        {slides.map((_, index) => (
          <span
            key={index}
            className={`dot ${index === currentSlide ? 'dotactive' : ''}`}
            onClick={() => showSlide(index)}
          ></span>
        ))}
      </div>
    );
  };

  const parentDivStyle = {
    backgroundImage: `url(${rhino})`, 
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
  };

  const images = [
    { id: 1, src: elephant },
    { id: 2, src: tourist },
    { id: 3, src: buffalo },
    { id: 4, src: lion },
    { id: 5, src: gorilla },
    { id: 6, src: giraffe },
    { id: 7, src: mburo },
    { id: 8, src: crane },
    { id: 9, src: kidepo },
    { id: 10, src: murchison },

  ];
  
  const settings = {
    dots: true,
    infinite: true,
    speed: 2000, // Change image every 2 seconds
    slidesToShow: 5, // Display 5 images for laptop view
    slidesToScroll: 1,
    autoplay: true,
    responsive: [
      {
        breakpoint: 976, // Tablet view
        settings: {
          slidesToShow: 3, // Display 3 images for tablet view
        },
      },
      {
        breakpoint: 768, // Tablet view
        settings: {
          slidesToShow: 2, // Display 3 images for tablet view
        },
      },
      {
        breakpoint: 480, // Mobile view
        settings: {
          slidesToShow: 1, // Display 1 image for mobile view
        },
      },
    ],
  };

  return (
    <>
    {/* first slider section */}
    <div>
      <div className="slideshow-container">       
          <img className="slideshow-image" src={currentSlideData.image} alt={`Image ${currentSlide + 1}`} />
          <div className="slideshow-text">
            <div className="slideshow-heading font-smooch text-brightRed text-4xl sm:text-6xl">{currentSlideData.heading}</div>
            <div className="slideshow-paragraph text-4xl font-bold">{currentSlideData.paragraph}</div>
          </div>       
        <button className="slideshow-button prev rounded-full  hover:bg-black " onClick={prevSlide}>
        <IoChevronBack className='w-8 h-8'/>
        </button>
        <button className="slideshow-button next rounded-full hover:bg-black" onClick={nextSlide}>
        <IoChevronForward className='w-8 h-8'/>
        </button>
      </div>
      {renderSlideIndicators()}
    </div>

    {/* Destination section */}
    <section>
      <div className='flex flex-col items-center'>
      <div className='text-brightRed font-smooch text-4xl'>Destination Lists</div>
      <div className='text-3xl font-bold font-indie-flower'>Go Exotic Places</div>
      </div>
    
    {/* first three images */}
      <div className="flex flex-wrap justify-center lg:space-x-8 md:space-x-4 ">
        
        <div className="relative w-full lg:w-64 lg:h-64 lg:my-2 md:mb-3 md:w-52 md:h-64 sm:h-auto sm:w-9/12 sm:mb-3 xsm:mb-3 xsm:h-auto xsm:w-80">
          <img
            src={murchison}
            alt="Your Image"
            className="w-full h-full rounded-lg zoom-image "
          />

          <div className="absolute left-0 bottom-0 p-4 text-white ">
            <p className="text-brightRed font-smooch text-2xl">Adventure</p>
            <p className="text-xl">MURCHISON FALLS</p>
          </div>

          <button className="absolute top-0 right-0 m-4 px-4 py-2 bg-brightRed text-white hover:bg-brightRedLight rounded-full">
            0 Tour
          </button>
        </div>

        
        <div className="relative w-full lg:w-2/6 lg:h-64 lg:my-2 md:mb-3 md:w-72 md:h-64 sm:h-auto sm:w-9/12 sm:mb-3 xsm:mb-3 xsm:h-auto xsm:w-80">
          <img
            src={queen}
            alt="Your Image"
            className="w-full h-full rounded-lg zoom-image"
          />

          <div className="absolute left-0 bottom-0 p-4 text-white ">
            <p className="text-2xl text-brightRed font-smooch">Wildlife</p>
            <p className="text-xl">QUEEN ELIZABETH PARK</p>
          </div>

          <button className="absolute top-0 right-0 m-4 px-4 py-2 bg-brightRed text-white hover:bg-brightRedLight rounded-full">
            0 Tour
          </button>
        </div>

        
        <div className="relative w-full lg:w-64 lg:h-64 lg:my-2 md:mb-3 md:w-52 md:h-64 sm:h-auto sm:w-9/12 sm:mb-3 xsm:mb-3 xsm:h-auto xsm:w-80">
          <img
            src={kidepo}
            alt="Your Image"
            className="w-full h-full rounded-lg zoom-image"
          />

          <div className="absolute left-0 bottom-0 p-4 text-white ">
            <p className="text-2xl text-brightRed font-smooch">Wildlife</p>
            <p className="text-xl">KIDEPO VALLEY</p>
          </div>

          <button className="absolute top-0 right-0 m-4 px-4 py-2 bg-brightRed text-white hover:bg-brightRedLight rounded-full">
            0 Tour
          </button>
        </div>
      </div>
    {/* slider section */}
      <div className='rounded-x'>
        <div className="slideshow-container flex items-center lg:w-2/6 lg:h-72 lg:my-2 md:mb-3 md:w-96 md:h-72 sm:h-auto sm:w-9/12 sm:mb-3 xsm:mb-3 xsm:h-auto xsm:w-80">
        <img className="slideshow-image" src={currentSlideData.image} alt={`Image ${currentSlide + 1}`} />
          <div className="slideshow-text">
            <div className="slideshow-heading font-smooch text-brightRed text-4xl">{currentSlideData.heading}</div>
            <div className="slideshow-paragraph">{currentSlideData.paragraph}</div>
          </div>
          <button className="slideshow-button prev rounded-full opacity-0 hover:opacity-100" onClick={prevSlide}>
          <IoChevronBack className='w-8 h-8'/>
          </button>
          <button className="slideshow-button next rounded-full opacity-0 hover:opacity-100" onClick={nextSlide}>
          <IoChevronForward className='w-8 h-8'/>
          </button>
        </div>
       
      </div>
    {/* last two images */}
    <div className="flex flex-wrap justify-center lg:space-x-8 md:space-x-4 "> 

        <div className="relative w-full lg:w-2/5 lg:h-64 lg:my-2 md:mb-3 md:w-2/5 md:h-64 sm:h-auto sm:w-9/12 sm:mb-3 xsm:mb-3 xsm:h-auto xsm:w-80">
          <img
            src={mburo}
            alt="Your Image"
            className="w-full h-full rounded-lg zoom-image"
          />

          <div className="absolute left-0 bottom-0 p-4 text-white  ">
            <p className="text-2xl text-brightRed font-smooch">Wildlife</p>
            <p className="text-xl">LAKE MBURO</p>
          </div>

          <button className="absolute top-0 right-0 m-4 px-4 py-2 bg-brightRed text-white hover:bg-brightRedLight rounded-full">
            0 Tour
          </button>
        </div>

        <div className="relative w-full lg:w-2/5 lg:h-64 lg:my-2 md:mb-3 md:w-2/5 md:h-64 sm:h-auto sm:w-9/12 sm:mb-3 xsm:mb-3 xsm:h-auto xsm:w-80">
          <img
            src={gorilla}
            alt="Your Image"
            className="w-full h-full rounded-lg zoom-image"
          />

          <div className="absolute left-0 bottom-0 p-4 text-white">
            <p className="text-2xl text-brightRed font-smooch">Adventure</p>
            <p className="text-xl">KIBALE FOREST</p>
          </div>

          <button className="absolute top-0 right-0 m-4 px-4 py-2 bg-brightRed text-white hover:bg-brightRedLight rounded-full">
            0 Tour
          </button>
        </div>
  
      </div>
    </section>
    {/* get to know us section */}
    <section >
        
        <div className="container flex flex-col md:flex-row items-center px-6 mx-auto mt-10 space-y-0 md:space-y-0 ">
            
            <div className="w-5/6 ">
                <img className='w-5/6 h-80 zoom-image' src={tiger} alt=""/>
             </div>

            <div className="flex flex-col mb-32 space-y-5    md:w-1/2">
                <h4 className='font-smooch text-brightRed text-4xl'>Get to know us</h4>
                <h1 className="max-w-md text-2xl font-bold font-indie-flower text-center md:text-5xl md:text-left">
                   Plan your Trip with Viva Quest Safaris 
                </h1>
                <p className="max-w-sm text-center text-darkGrayisBlue md:text-left">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Libero magnam quas fugiat nam sint itaque ipsam dolorum aut, repellendus sapiente nobis eaque vitae quibusdam temporibus dicta minus accusamus porro reiciendis esse! Impedit adipisci at sapiente iure eum nihil doloremque voluptatibus nemo. Quibusdam nihil omnis optio!
                </p>
                <div className="flex justify-center md:justify-start">
                    <a href="#" 
                    className="p-3 px-6 pt-2 text-white bg-brightRed rounded-full baseline hover:bg-brightRedLight " >
                    BOOK WITH US NOW</a>
                </div>
            </div>
             
        </div> 
    </section> 
    {/* Gallery section */}
    <div className='mt-3 mb-3 h-96 justify-center' style={parentDivStyle}>
    <Slider {...settings}>
        {images.map((image) => (
          <div key={image.id} className='mt-14'>
            <div className="relative md:w-64 md:h-64 xsm:w-full xsm:h-72  justice group cursor-pointer">
              <img
                src={image.src}
                alt="Your Image"
                className="w-full h-full rounded-lg group-hover:opacity-75 transition-opacity duration-300"
              />
              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="text-white text-center">
                  <p className="text-3xl text-brightRed font-smooch">Wildlife</p>
                  <p className="text-sm">Discovery Islands</p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  </>
  );
}




