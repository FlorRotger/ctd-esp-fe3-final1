import React, {useContext} from 'react'
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import "../stylesheet/Footer.css"
import {DarkThemeContext} from '../context/DarkThemeContext';

const Footer = () => {
  const { isModoOscuro, setIsModoOscuro } = useContext(DarkThemeContext);



  return (
    <footer className={isModoOscuro ? "dark" : "app"}>
            <img src="./images/DH.png" alt='DH-logo'/>

            <div>
                <FacebookIcon className="iconos" alt="logo Faceboock"  />
                <InstagramIcon className="iconos" alt="logo Instagram"  />
                <LinkedInIcon className="iconos" alt="linkedln" />
                <WhatsAppIcon className="iconos" alt="logo WhatsApp"  />
            </div>

        </footer>
   
  )
}

export default Footer
