import { Link } from 'react-router-dom'
import React, { Component } from "react";

class Resta extends Component {

   restar =function  (){
        let numeroA = Number (document.getElementById('numbreAR').value)
        let numeroB = Number (document.getElementById('numbreBR').value)
        let resultado = numeroA - numeroB
       return document.getElementById('resultadoR').innerHTML = `<input value = ${resultado} />`
         } 
    render(){
        return(
          <>
<form className='operacion'>
      <input className='input1'  id ='numbreAR' type="number"/><br/>
      <i class="fas fa-minus"></i><br/>
      <input className='input2'  id ='numbreBR' type="number"/><br/>
      <i class="fas fa-equals"></i><br/>
      <label className='input4' id= 'resultadoR' ></label><br/>
      <p className='input3' onClick = {this.restar} >PROCESAR</p>
      </form>
      <article className ='homeBack'>
      <i class="fas fa-home"><Link to ='/' className = 'volverHome' > < h2>VOLVER A HOME</h2></Link></i>
      </article>
      </>
        )
    }
}

export default Resta;