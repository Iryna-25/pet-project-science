import React from "react";

import { Wrapper } from "../Components/Wrapper/Wrapper.style";

import Header from "../Components/Header/Header";
import Input from "../Components/Input/Input";
import Button from "../Components/Button/Button";
import ButtonGoogle from "../Components/ButtonGoogle/ButtonGoogle";
import Footer from "../Components/Footer/Footer";


const VarifyPage = () => {
    return (
        <Wrapper>
            <Header
                title="Verify Code"
                subtitle="Code is sent to nickname@mail.com"
            />

            <Button
                text="Verify"
            />

            <Footer
               text="Already have an account ? "
               href="/"
               link="Log in"
            />
        </Wrapper>
    )
}

export default VarifyPage;