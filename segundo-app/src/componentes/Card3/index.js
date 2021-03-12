import React from 'react';
import './style.css';
import Imagem from './excel.jpg';

function Card3(){
    return(
         <div className="card-container3">
             <img src={Imagem} alt="imagem" className="imagem3" />
             <h5>EXCEL BÁSICO</h5>
           <h6><strong>CARGA HORÁRIA:</strong></h6>
           <p>20 horas</p>
           <h6><strong>Valor:</strong></h6>
           <p>Gratuito</p>
         </div>
         
    );
}

export default Card3;