import React from "react";
import { ButtonGoogleStyle } from "./ButtonGoogle.styled";

const ButtonGoogle = ({text}) => (
    <ButtonGoogleStyle>
        <span>
            <svg width="25" height="25">
                <use href="/"/>
            </svg>
        </span>
        {text}
    </ButtonGoogleStyle>
);
export default ButtonGoogle;