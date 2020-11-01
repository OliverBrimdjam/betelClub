import styled from 'styled-components';


import backgroundImage from '../../assets/supermarket.jpg';

export const BackgroundContainer = styled.div`
    display: flex;
    flex-direction: row;
    
    max-width: 1440px;
    height: 100vh;
    margin: auto;
`;

export const LinkBlueButton = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: var(--logoBlue);
    
    width:  115px;
    height: 55px;
    border-radius: 10px;
    margin: 10px 0px 10px 0px;
    border: 0px;
    text-align: center;
    a {
        color: var(--baseColor-white);
        font-family: 'Roboto Slab', sans-serif;
        font-size: 16px;
        text-decoration: none;
        width: 100%;
        padding-top: calc((54px - 16px)/2);
        padding-bottom: calc((54px - 16px)/2);
    }
`;

export const BackgroundImage = styled.div`
    flex: 1;
    background: url(${backgroundImage}) no-repeat center;
    background-size: cover;
`;

export const FormContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    width: 30%;
    min-width: 320px;
    max-width: 500px;
    background-color: var(--baseColor-white);

    img {
        width: 80%;
    }
`;

export const Form = styled.form`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    
    margin: 5px;
    width: 270px;
    

    #buttonPack {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;

        width: 100%;
        margin: 0px 0px 0px 0px;
    }    
`;