import { useState, useEffect } from 'react';
import './banner.css';

const Banner = () => {
    const [currentSlide, setCurrentSlide] = useState(0);

    const slides = [
        {
          id:  0,
          image: '/slide-in-main-img/banner/newBanner01.jpg',
          imagem: '/slide-in-main-img/banner/newBanner01-m.jpg',
          caption: 'Motorhome',
          sub: "Carryboy Motorhome, Another Option for Unlimited Travel Seekers.",
          link: "/buildcamper",
        },
        {
          id:  3,
          image: '/slide-in-main-img/banner/newBanner04.jpg',
          imagem: '/slide-in-main-img/banner/newBanner04-m.jpg',
          caption: 'Side Grow Lighting',
          sub: "Say goodbye to seasonal limitations! Our energy-efficient LED lighting ensures your plants receive the perfect amount of light all year long.",
          link: "/buildcamper",
        },
        {
          id:  1,
          image: '/slide-in-main-img/banner/newBanner03.jpg',
          imagem: '/slide-in-main-img/banner/newBanner03-m.jpg',
          caption: 'Smart System',
          sub: "This smart system enhances the convenience and comfort of living in the Carryboy Motorhome",
          link: "#smart",
        },
        {
          id:  2,
          image: '/slide-in-main-img/banner/newBanner02.jpg',
          imagem: '/slide-in-main-img/banner/newBanner02-m.jpg',
          caption: 'Interior',
          sub: "Luxurious interior with amenities complete convenience",
          link: "#interior2",
        },
        {
          id:  4,
          image: '/slide-in-main-img/banner/newBanner05.jpg',
          imagem: '/slide-in-main-img/banner/newBanner05-m.jpg',
          caption: 'Slide-in',
          sub: "A compact camper that can be mounted onto the bed of a pickup truck.",
          link: "/buildcamper",
        },
      ];

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentSlide((prevSlide) =>
                prevSlide === slides.length - 1 ? 0 : prevSlide + 1
            );
        }, 10000); // Change slide every 3 seconds

        return () => clearInterval(interval);
    }, [slides.length]);

    const bannerOnClick = () => {
        setCurrentSlide((prevSlide) =>
            prevSlide === slides.length - 1 ? 0 : prevSlide + 1
        );
    }

    return (
        <div className="bannerslide">
            <div className="slider-container">
                {slides.map((slide, index) => (
                    <div
                        key={index}
                        onClick={() => bannerOnClick()}
                        className={
                            index === currentSlide
                                ? 'slide active'
                                : index === currentSlide - 1 ||
                                    (currentSlide === 0 && index === slides.length - 1)
                                    ? 'slide prev'
                                    : 'slide'
                        }
                    >
                        <img src={window.screen.width > 1100 ? slide.image : slide.imagem} alt={slide.caption} />
                        <div className={
                            slide.id == 1 || slide.id == 3
                                ? 'caption caption-white'
                                : 'caption caption-black'
                        }>
                            <h2>{slide.caption}</h2>
                            <h3>{slide.sub}</h3>
                            <div className="caption-bt" onClick={() => {
                                location.href = slide.link
                            }}>See more</div>

                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Banner;
