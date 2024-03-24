import { EnterpriseContainerStyled, EnterpriseImageContainerStyled, EnterpriseTextContainerStyled, EnterpriseIconsContainerStyled, EnterpriseIconStyled} from "./EnterpriseStyles"
import { RiMoneyDollarCircleFill } from "react-icons/ri";
import { SiBinance } from "react-icons/si";
import { FaLemon } from "react-icons/fa";
import { GiAbstract042 } from "react-icons/gi";


const Enterprise = () => {
  return (
    <EnterpriseContainerStyled>
        <EnterpriseImageContainerStyled>
            <img src="/Enterprise.png"   /> 
        </EnterpriseImageContainerStyled>
        <EnterpriseTextContainerStyled>
            <p> Empower your business </p>
            <h1><span>Enterprise</span> Blockchain </h1>
            <ul> 
                <li> Learn to optimize </li>
                <li> We guide you at every step </li>
                <li> Easy and accessible </li>
            </ul>
            <EnterpriseIconsContainerStyled> 
              <EnterpriseIconStyled> <RiMoneyDollarCircleFill /> </EnterpriseIconStyled>
              <EnterpriseIconStyled> <SiBinance /> </EnterpriseIconStyled>
              <EnterpriseIconStyled> <FaLemon /> </EnterpriseIconStyled>
              <EnterpriseIconStyled> <GiAbstract042 /> </EnterpriseIconStyled>
            </EnterpriseIconsContainerStyled>
        </EnterpriseTextContainerStyled>



    </EnterpriseContainerStyled>

  )
}

export default Enterprise
