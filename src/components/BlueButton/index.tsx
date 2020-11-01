import React from 'react';
import { Button } from './styles';


interface ButtonBasicProps {
    children?: React.ReactNode;
    props?: any;
    onClick: any;
}

const BlueButton: React.FC<ButtonBasicProps> = ({ onClick, children, ...rest }) => (
    <Button {...rest} onClick={onClick}>
        {children}
    </Button>

);

export default BlueButton;