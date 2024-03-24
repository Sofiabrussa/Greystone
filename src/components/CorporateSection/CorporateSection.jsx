import { CorporateImageContainerStyled, CorporateTextContainerStyled, CorporateContainerStyled } from "./CorporateSectionStyles"


const CorporateSection = () => {
  return (
   <CorporateContainerStyled>
        <CorporateTextContainerStyled>
            <p> Software Systems </p>
            <h1><span>Corporate & </span> Interorganizational </h1>
            <ul> 
                <li> Corporate systems streamline operations, improving efficiency </li>
                <li> Robust corporate systems ensure data integrity </li>
                <li> Provide valuable insights through data analytics </li>
            </ul>
        </CorporateTextContainerStyled>
        <CorporateImageContainerStyled>
            <img src="/Logocorporate.png"/>
        </CorporateImageContainerStyled>
   </CorporateContainerStyled>
  )
}

export default CorporateSection
