import { FooterContainerStyled, LinksContainerStyled, TextContainerFooter } from "./FooterStyles"


const Footer = () => {
  return (
    <FooterContainerStyled>
        <TextContainerFooter>
            <img src="/LogoFooter.png" /> 
        </TextContainerFooter>
        <LinksContainerStyled>
            <a href="#"> Términos de Uso </a>
            <p> Hecho con ❤️ por <span> Sofia Brussa </span> </p>
        </LinksContainerStyled>
    </FooterContainerStyled>
  )
}

export default Footer
