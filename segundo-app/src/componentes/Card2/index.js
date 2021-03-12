import React from 'react';
import './style.css';
import Imagem from './img.jpg';

function Card2(){
    return(
         <div className="card-container2">
         <img src={Imagem} alt="imagem" className="imagem2" />
         <h5>COMANDOS ELÉTRICOS</h5>
           <h6><strong>CARGA HORÁRIA:</strong></h6>
           <p>120 horas</p>
           <h6><strong>Valor:</strong></h6>
           <p>Gratuito</p> 
         </div>
         
    );
}

export default Card2;