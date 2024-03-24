import styled from "styled-components"

export const CorporateContainerStyled = styled.section `
    width: 100%;
    display: flex;
    max-width: 1300px;
    flex-direction: row;
    margin: 0 auto;
    gap: 90px;
`

export const CorporateTextContainerStyled = styled.div `
    display: flex;
    flex-direction: column;
    justify-content: center;
    h1 {
        font-size: 2.3rem;
        margin: 10px 0;
        font-family: 'Times New Roman', Times, serif;
        font-weight: bold;
    }

    h1 span {
        color: var(--violet-letter);
        font-size: 5rem;
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


export const CorporateImageContainerStyled = styled.div `
    display: flex;
    img  {
        padding-bottom: 75px;
        padding-top: 75px;
        object-fit: cover;
    }
    @media (max-width: 1000px) {
        display: none;
    }
`;