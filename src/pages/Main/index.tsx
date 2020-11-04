import React from 'react';
import SideLink from '../../components/SideLinks';
import { Link } from 'react-router-dom';
import Header from '../../components/Header';
import Cart from '../../components/Cart';
import Graphs from '../../components/Graphs';

import { BackgroundContainer } from './styles';
import mainLogo from '../../assets/LogoCompFWhite.png'

const Main = () => {

    return (
        <BackgroundContainer>
            <div id="leftPanel">
                <img src={mainLogo} alt="atacadão betel" />
                <div id="sideLinkContainer">
                    <SideLink>
                        <Link to="/">Carrinho de compras</Link>
                    </SideLink>
                    <SideLink>
                        <Link to="/">Categorias</Link>
                    </SideLink>
                    <SideLink>
                        <Link to="/">Entrega</Link>
                    </SideLink>

                </div>
            </div>
            <div id="mainPanel">
                <Header />
                <div id="contentContainer">
                    <Cart />
                    <Graphs />
                </div>
            </div>
        </BackgroundContainer>
    );
};

export default Main;