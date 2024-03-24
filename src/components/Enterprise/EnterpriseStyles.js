import styled from "styled-components"

export const EnterpriseContainerStyled = styled.section `
    width: 100%;
    display: flex;
    max-width: 1300px;
    margin: 0 auto;
    gap: 90px;

`

export const EnterpriseImageContainerStyled = styled.div `
    img  {
        width: 100%;
        padding-bottom: 75px;
        padding-top: 75px;
        object-fit: cover;
    }
    @media (max-width: 1000px) {
        display: none;
    }
`;

export const EnterpriseTextContainerStyled = styled.div `
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    h1 {
        font-size: 4.5rem;
        margin: 10px 0;
        font-family: 'Times New Roman', Times, serif;
        font-weight: bold;
    }

    h1 span {
        color: var(--violet-letter);
    }

    p {
        font-size: 1.2rem;
        font-weight: normal;
        font-family: 'Times New Roman', Times, serif;
        margin-bottom: 0;
    }

    ul {
        list-style-type: circle;
        padding-left: 20px;
        font-family: 'Times New Roman', Times, serif;
        font-size: 1.2rem;
        
    }

    li::before {
      content: "●"; /* Usa un carácter de círculo sólido (puedes ajustar esto) */
      color: white;
      margin-right: 0.5em;
    }

`;

export const EnterpriseIconsContainerStyled = styled.div `
    display: flex;
    justify-content: space-around;
    align-items: center;
    gap: 10px;
    flex-wrap: wrap;
    margin-left: 30px;
    margin-top: 15px;
`

export const EnterpriseIconStyled = styled.div `
    width: 70px;
    height: 100%;
    font-size: 2.5rem;
    color: var(--violet-letter);
    margin: 10px;

`
