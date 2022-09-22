import logofl1 from '../assets/logofl1.png'
import '../style/Header.css'
import { FaBars,FaTimes } from "react-icons/fa";
import {useState} from 'react'


export const Header = () => {
           
     const [click , setClick] = useState(false)

     const handleClick = ()=> {
        setClick(!click)
     }

   return(
    <header>
        <nav>
            <div className="navbar">
                <img  className='logo' src={logofl1} alt="" />
                
                <ul className={click ? 'menu active' : 'menu'}>
                <li><a className='active text-Link' href='/' onClick={handleClick}>Home</a></li>
                <li><a className='text-Link' href='#Skills'onClick={handleClick}>Skills</a></li>
                <li><a className='text-Link' href='#Portfolio'onClick={handleClick}>Portfolio</a></li>
                <li><a className='text-Link' href='#Contact'onClick={handleClick}>Contact</a></li>
                </ul>
                <div className='toggle-menu' onClick={handleClick}> 
                    { click ? (<FaTimes size={50} style={{color:"#ccc"}}/>)
                    : (<FaBars size={50} style={{color:"#ccc"}}/> ) 
                    }                     
                </div>
            </div>
           
        </nav>
        
    
    </header>
   )
};

