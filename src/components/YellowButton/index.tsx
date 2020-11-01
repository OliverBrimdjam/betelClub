import React from 'react';
import { Button } from './styles';

interface ButtonBasicProps {
    tag: string;
    action: any;
}

const YellowButton: React.FC<ButtonBasicProps> = (props) => (
    <Button onClick={props.action}>{props.tag}

    </Button>

);

export default YellowButton;