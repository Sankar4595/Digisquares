import React from "react";
import { Carousel } from 'antd';
import BasePage from "./Base";
import './index.css';
import BounceLoader from "react-spinners/BounceLoader";


const SliderPage = ({ children }) => {
    const onChange = (currentSlide) => {
        console.log(currentSlide);
    };
    return <BasePage>
        <Carousel afterChange={onChange}>
            {children}

        </Carousel>
    </BasePage >
};
export default SliderPage;