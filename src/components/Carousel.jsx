import React, { useState }  from 'react';
import { BsArrowLeftCircleFill, BsArrowRightCircleFill} from 'react-icons/bs'
import "./Carousel.css";

export const Carousel = ({ data }) => { 
    const [slide, setSlide] = useState(0);

    const nextSlide = () => { 
        setSlide(slide === data.length - 1 ? 0 : slide + 1)
    }

    const prevSlide = () => { 
        setSlide(slide === 0 ? data.length-1 : slide - 1)
    }

    return (
        <div className='carousel'>
            <BsArrowLeftCircleFill onClick={ prevSlide } className="arrow arrow-left" />
            {data.map((image, index) => {
                return (
                    <img src={image.src} alt={image.alt} key={index} className={slide===index ? 'slide' : 'slide slide-hidden'}/>
                )
            })}
            <BsArrowRightCircleFill onClick={ nextSlide } className="arrow arrow-right"/>
            <span className='indicators'>
                {data.map((_, index) => { 
                    return (
                        <button key={index} onClick={() => { setSlide(index)}} className={slide===index ? 'indicator' : 'indicator indicator-hidden'}></button>
                    )
                })}
            </span>
        </div>
    )
}