import pc4 from '../assets/pc4.png';
import axios from 'axios';
import { useState } from 'react';
import '../style/contact.css'

export const Contact = () => {
    const [sent, setsent] = useState (false);
    const [name, setName] = useState ('');
    const [email, setEmail] = useState ('');
    const [message, setMessage] = useState ('');
   
    
    const handlesend = async() => {
      setsent(true)
      try {
        await axios.post('http://localhost:3000/email', {name, email, message })
      } catch (error) {
        console.log(error)
      }
    }
    return (
      <section id='Contact' className="contact">
          <h2>keep in touch</h2>
          <div className="divider"></div>
        <div className="contact-heading">
          
          <img className='contact-img' src={pc4}/>
         

          <div className="container-contact">
            <div className="contact-form">
              <h4>send me a message...</h4>
          </div>
              {!sent ? (
                   <form className="form" onSubmit={handlesend}>
                   <input type="text" value={name} onChange={(e) => setName(e.target.value)}  placeholder="Name" />
                   <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email" />
                   <textarea value={message} onChange={(e) => setMessage(e.target.value)} placeholder="place your message here..."/>
                     <button type="submit" className="btn-submit">
                       send message
                     </button> 
                 </form>
              ):(<h1>Email sent</h1>)}

          </div>
        </div>l,
      </section>
    );
};