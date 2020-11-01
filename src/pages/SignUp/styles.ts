import styled from 'styled-components';

export const BackgroundContainer = styled.div`
    
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;

    max-width: 1440px;
    height: 100vh;
    margin: auto;

    img { 
        width: 400px;
        height: 300px;
        margin-left: 15%;
    }

`;

export const BackgroundImage = styled.div``;

export const FormContainer = styled.div`
    background-color: lightgreen;

    max-width: 320px;
    min-width: 320px;
`;

export const Form = styled.div``;

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
        width:100%;
        padding-top: calc((54px - 16px)/2);
        padding-bottom: calc((54px - 16px)/2);
    }
`;