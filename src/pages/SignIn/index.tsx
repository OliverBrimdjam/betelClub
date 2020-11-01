import React, { FormEvent, useState } from 'react';
import { BackgroundContainer, FormContainer, Form, BackgroundImage, LinkBlueButton } from './styles';
import YellowButton from '../../components/YellowButton';
import { Link, Redirect } from 'react-router-dom';

import backgroundImage from '../../assets/supermarket.jpg';
import betelClubCompleteLogo from '../../assets/Logo Club FC CL.png';
import BasicInput from '../../components/BasicInput';
import BlueButton from '../../components/BlueButton';
import SignUp from '../SignUp';

function azul(event: FormEvent) {
    event.preventDefault();
    console.log("catamarã");
    // window.location.href = '/SignUp';
    <Redirect to='/SignUp' />
    // return (<Redirect to='/SignUp' />);
}

const SignIn: React.FC = () => {

    return (
        <BackgroundContainer>
            <FormContainer>
                <img src={betelClubCompleteLogo} alt="Betel club logo" />
                <Form>
                    <BasicInput placeHolder="Email" ></BasicInput>
                    <BasicInput placeHolder="Senha" ></BasicInput>
                    <div id="buttonPack">
                        <YellowButton tag="SignIn" action={"fff"} />
                        <LinkBlueButton>
                            <Link to="/SignUp">SignUp</Link>
                        </LinkBlueButton>
                    </div>
                </Form>
            </FormContainer>
            <BackgroundImage />
        </BackgroundContainer >
    );

};

export default SignIn;