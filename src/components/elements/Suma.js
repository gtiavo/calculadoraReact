import { Link } from 'react-router-dom'
import React, { Component } from "react";

class Suma extends Component {

   sumar =function  (){
        let numeroA = Number (document.getElementById('numbreAS').value)
        let numeroB = Number (document.getElementById('numbreBS').value)
        let resultado = numeroA + numeroB
       return document.getElementById('resultadoS').innerHTML = `<input value = ${resultado} />`
         } 
    render(){
        return(
            <>
    <form className='operacion'>
      <input className='input1'  id ='numbreAS' type="number"/><br/>
      <i class="fas fa-plus"></i><br/>
      <input className='input2'  id ='numbreBS' type="number"/><br/>
      <i class="fas fa-equals"></i><br/>
      <label className='input4' id= 'resultadoS' ></label><br/>
      <p className='input3' onClick = {this.sumar} >PROCESAR</p>
      </form>
      <article className ='homeBack'>
      <i class="fas fa-home"><Link to ='/' className = 'volverHome' > < h2>VOLVER A HOME</h2></Link></i>
      </article>
      </>
        )
    }
}

export default Suma;