import React from "react";
import Image from "../../Images/Image.jpg";
import ArrowLeft from "../../Images/svg/Arrow-left.svg";
import ArrowRight from "../../Images/svg/Arrow-right.svg";
import Images from "../Slider/Images.style";

const Slider = () => (
    <div>
        <img src={Image} />
        <img src={ArrowLeft} />
        <img src={ArrowRight} /> 
    </div>
);

export default Slider;

