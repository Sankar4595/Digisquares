import React, { useRef, useState } from "react";
import { Carousel } from 'antd';
import './index.css';

const SliderPage = ({ children }) => {
    const CarouselRef = useRef(null);
    const next = () => {
        CarouselRef.current.next();
    }

    return <>
        <NextIcon next={next}>
            <Carousel effect="fade" ref={CarouselRef} >
                {children}
            </Carousel>
        </NextIcon>
    </>
};
export default SliderPage;


export const NextIcon = ({ children, next }) => {
    return (
        <div onClick={next}>{children}</div>
    )
}

