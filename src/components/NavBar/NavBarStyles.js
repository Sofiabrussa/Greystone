import styled from "styled-components"

export const NavbarContainerStyle = styled.header `
    height: 100px;
    background-color: var(--grey-bg);
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1rem 4rem;
    img {
        width: 50%;
        height: auto;
    }
`;

export const LinksContainerStyled = styled.div `
    color: white;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 40px;
    a  {
        padding: 1rem 2rem;
        border-radius: 1rem;
        display: flex;
        justify-content: center;
        gap: 10px;
        font-weight: bold;
        font-size: 1.2rem;
        cursor: pointer;
    }

    a:hover  {
        color: var(--violet-letter);
    } 
`;

export const LinkContainerStyled = styled.div `
    font-size: 1.2rem;
    align-items: center;
    color: white;
`
