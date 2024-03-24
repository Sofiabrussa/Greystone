import styled from "styled-components"


export const HeroContainerStyled = styled.section `
    width: 100%;
    height: 80vh;
    margin: 0 auto;
    display: flex;
    justify-content: space-around;
    align-items: center;
    h1  {
        margin-bottom: 2rem;
    }
`

export const HeroImageContainerStyled = styled.div `
    width: 100%;
    height: 100%;
    background-image: url("fondo.jpg");
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    opacity: 1;
`;

export const HeroTextContainerStyled = styled.div `
    width: auto;
    display: flex;
    flex-direction: column;
    justify-content: center;
    text-align: center;
    margin-top: 100px;
    h1 span {
        color: var(--violet-letter);
        display: block;
        margin-top: 10px;
        font-weight: bold;
    }
    h1  {
        font-size: 5rem;
        margin: 5px 0;
        font-weight: bold;
        text-align: center;
        font-family: 'Times New Roman', Times, serif;
    }
    h2  {
        font-size: 1.5rem;
        margin: 10px auto;
        align-items: center;
        width: 25%;
        font-weight: normal;
        font-family: 'Times New Roman', Times, serif;
    }
`;