import React from 'react';
import './style.css';
import Imagem from './img.jpg';


function Card(){
    return(
         <div className="card-container">
        <img src={Imagem} alt="imagem" className="imagem1" />
           <h5>ECONOMIA CIRCULAR</h5>
           <h6><strong>CARGA HORÁRIA:</strong></h6>
           <p>20 horas</p>
           <h6><strong>Valor:</strong></h6>
           <p>Gratuito</p>
         </div>
         
    );
}

export default Card;