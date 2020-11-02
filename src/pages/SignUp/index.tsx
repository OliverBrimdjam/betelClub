import React, { FormEvent } from 'react';
import { BackgroundContainer, FormContainer, Form, LinkOrangeButton, LinkBlueButton, MainLogoContainer } from './styles';
import YellowButton from '../../components/YellowButton';
import { Redirect, Link } from 'react-router-dom';
import backLogo from '../../assets/Bsograd.png';

import BasicInput from '../../components/BasicInput';
import BlueButton from '../../components/BlueButton';

const azul = () => { };

const SignUp: React.FC = () => (
    <BackgroundContainer>
        <img src={backLogo} alt="carrinho de compras" id="backLogo" />
        <div id="generalPackage">
            <MainLogoContainer />
            <FormContainer>
                <Form>
                    <BasicInput placeHolder="Nome" ></BasicInput>
                    <BasicInput placeHolder="Email" ></BasicInput>
                    <BasicInput placeHolder="Senha" ></BasicInput>
                    <BasicInput placeHolder="Confirme sua senha" ></BasicInput>
                    <div id="buttonPack">
                        <LinkBlueButton>
                            <Link to="/">Voltar</Link>
                        </LinkBlueButton>
                        <LinkOrangeButton>
                            <Link to="/">Cadastrar</Link>
                        </LinkOrangeButton>

                    </div>
                </Form>
            </FormContainer>
        </div>
    </BackgroundContainer>
);

export default SignUp;