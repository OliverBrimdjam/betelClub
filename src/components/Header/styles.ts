import styled from 'styled-components';

export const HeaderContainer = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-around;

    width: 100%;
    height: 15%;
    background-color: var(--baseColor-white);

    input {
        border-style: solid;
        border-width: 0 0 3px 0;
        font-size: 1.5rem;
    }

    #SliderContainer {
        width: 50%;
        background-color: gray;

        border-radius: 0.75rem;;
    }

`;