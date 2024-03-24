import styled from "styled-components";

export const FooterContainerStyled = styled.footer `
    display: flex;
    width: 100%;
    flex-direction: row;
    justify-content: center;
    gap: 50px;
    padding: 7rem 0 2rem 0;
    background-color: #252525;
    p span {
        font-weight: 800;
    }
`

export const TextContainerFooter = styled.div `
    display: flex;
    justify-content: center;
    align-items: flex-start;
    h1  {
        font-size: 3rem;
        margin: 10px 0;
        color: grey;
    }
`

export const LinksContainerStyled = styled.div `
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    a {
        padding: 0 2rem;
    }
    @media (max-width: 768px) {
        flex-direction: column;
        a {
            padding: 1rem 0;
        
    }}
`;