import {LinksContainerStyled, NavbarContainerStyle} from "./NavBarStyles"
import  {motion} from "framer-motion"


const NavBar = () => {
  return (
    <NavbarContainerStyle>
        <div>

        </div>
        <LinksContainerStyled>
            <motion.div whileTap={{scale: 0.9 }}>
                <a> Home </a> 
            </motion.div>
            <motion.div whileTap={{scale: 0.9 }}>
                <a> Services </a> 
            </motion.div>
            <motion.div whileTap={{scale: 0.9 }}>
                <a> Proyects </a> 
            </motion.div>
            <motion.div whileTap={{scale: 0.9 }}>
                <a> Contact </a> 
            </motion.div>
        </LinksContainerStyled>
    </NavbarContainerStyle>
  )
}

export default NavBar
