import { HeroContainerStyled, HeroImageContainerStyled, HeroTextContainerStyled } from "./HeroStyles"


const Hero = () => {
  return (
    <HeroContainerStyled>
        <HeroImageContainerStyled>
            <HeroTextContainerStyled>
                <h1><span>We´re the</span> solution</h1>
                <h2> We´ll provide you a positive experience with your system. </h2>
            </HeroTextContainerStyled>
        </HeroImageContainerStyled>
    </HeroContainerStyled>

  )
}

export default Hero
