import React from 'react';
import { HeaderContainer } from './styles';
import { FiSearch } from 'react-icons/fi';

const Header: React.FC = () => {
    return (
        <HeaderContainer>
            <FiSearch size="40" title="pesquisar" />
            <input type="text" />
            <div id="SliderContainer">
                <h1>vai chegar</h1>
            </div>

        </HeaderContainer>
    );
};

export default Header;