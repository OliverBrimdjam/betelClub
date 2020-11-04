import React from 'react';
import { Link } from 'react-router-dom';
import { SideLinkSt } from './styles';

const SideLink: React.FC = (props, { children }) => {
    return (
        <SideLinkSt>
            {children}
        </SideLinkSt>
    );
}

export default SideLink;