import React, { FormEvent } from 'react';
import { BackgroundContainer, FormContainer, Form, LinkBlueButton } from './styles';
import YellowButton from '../../components/YellowButton';
import { Redirect, Link } from 'react-router-dom';

import betelCarrinhoSo from '../../assets/B so.png';
import betelClubCompleteLogo from '../../assets/Logo Club FC CL.png';
import BasicInput from '../../components/BasicInput';
import BlueButton from '../../components/BlueButton';




const SignUp: React.FC = () => (
    <BackgroundContainer>
        <img src={betelCarrinhoSo} alt="carrinho de compras" />
        <img src={betelClubCompleteLogo} alt="Betel club logo" />
        <FormContainer>
            <Form>
                <BasicInput placeHolder="Nome" ></BasicInput>
                <BasicInput placeHolder="Email" ></BasicInput>
                <BasicInput placeHolder="Senha" ></BasicInput>
                <BasicInput placeHolder="Confirme sua senha" ></BasicInput>
                <div id="buttonPack">
                    <YellowButton tag="SignIn" action={"fff"} />
                    <LinkBlueButton>
                        <Link to="/SignUp">SignUp</Link>
                    </LinkBlueButton>
                </div>
            </Form>
        </FormContainer>
    </BackgroundContainer>
);

export default SignUp;