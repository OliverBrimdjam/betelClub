import React from 'react';
import { InputContainer } from './styles';

interface InputBasicProps {
    placeHolder?: string;
}

const BasicInput: React.FC<InputBasicProps> = (props) => (
    <InputContainer>
        <input type="text" placeholder={props.placeHolder} />
    </InputContainer>

);

export default BasicInput;