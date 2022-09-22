import {Link} from 'react-router-dom';
import pc from '../assets/pc.png'
import '../style/Main.css'


 export const Main = () => {
     return (
       <section id='Main' className="main">
         <div className="info-container">
           <h1>
             I'm<span> Franco </span>Lind
           </h1>
           <p className='info-content'>
             I am a web developer. I prepared myself at the Platzi Academy and I
             have been learning the best technologies to create web applications
             for a long time. I have experience creating web applications both
             on the backend and frontend.
           </p>
           
           <Link to="#" target="_blank" download>
             <button className="download">Download cv</button>
           </Link>
            
           
            
         </div>
         <img src={pc} alt="pc dibujo" />
       </section>
     );
};

