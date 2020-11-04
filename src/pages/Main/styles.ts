import styled from 'styled-components';

export const BackgroundContainer = styled.div`
    
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;

    max-width: 1440px;
    height: 100vh;
    margin: auto;

    #leftPanel { 
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: space-around;

        background-color: var(--logoBlue);
        height: 100vh;
        width: 320px;

        img {
            width: 90%;
            margin: 10% 0% 10% 0%;
            
        }

        #sideLinkContainer {
            height: 50vh;
            width: 90%;
            
            border: solid;
        }
    }

    #mainPanel { 
        flex: 1;
        height: 100vh;

        #contentContainer {
            display: flex;
            flex-direction: row;
        }
    }


`;