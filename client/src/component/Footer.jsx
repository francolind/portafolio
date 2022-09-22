import logofl from '../assets/logofl.png'
import { FaInstagram ,FaFacebook,FaLinkedin,FaTwitter } from "react-icons/fa";
import '../style/footer.css'


export const Footer = () => {
    return(
        <footer className="footer">
                <img src={logofl} alt="" />
            <div className="footer-content">
                <h2>Franco Lind</h2>
                <h4>web developer</h4>
            </div>
            <div className="social-network">

                <a href='https://www.instagram.com/franco_lind/' target='blank'><FaInstagram className='i' style={{ color: " #E1306C", fontSize: "50px" }}/></a>
                <a href='https://www.facebook.com/franco.lind' target='blank'><FaFacebook className='i' style={{ color: "#0165E1", fontSize: "50px" }}/></a>
                <a href='https://www.linkedin.com/in/franco-lind-27449a112/' target='blank'><FaLinkedin className='i' style={{ color: "#0A66C2", fontSize: "50px" }}/></a>
                <a href='https://twitter.com/francolind95' target='blank'><FaTwitter className='i' style={{ color: "#1DA1F2", fontSize: "50px" }}/></a>
            </div>
        </footer>
    )
};