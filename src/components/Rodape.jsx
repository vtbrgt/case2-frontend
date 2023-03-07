import Container from 'react-bootstrap/Container';
import './Rodape.css'
import insta from '../assets/insta.png'
import zap from '../assets/zap.png'
import face from '../assets/face.png'
import logo from '../assets/RATATOUILLE_logo.png'
import { Link } from "react-router-dom"

function Rodape() {
    return (
        <footer className='rodape2 ' >
        
         <div  className='rodape'> 
             
              <img className='logo-rodape' src={logo}/>
              
            <ul>
                <h3>Menu</h3>
                <li><Link to={'/menu'}>Pratos Principais</Link></li>
                <li> <Link to={'/menu'}>Entradas</Link></li>
               <li > <Link to={'/menu'}>Sobremesas</Link></li>
            </ul>

            <ul>
                <h3>Nossos contatos</h3>
                <li>
                    <p>(21)98081-4028</p>
                </li>
                
                <li>
                    <p>ratatouille2023@gmail.com</p>
                </li>

                <li>
                  <h3>Brasil</h3>
               </li>
 
            </ul>

               
           <ul>
               <h3>Rede Socias</h3>
              <div className='redes-socias'>  
               <img src={insta}/>
               <img src={zap}/>
               <img src={face}/>
               </div> 


           </ul>
         
         </div>
        </footer>
    );
}

export default Rodape


