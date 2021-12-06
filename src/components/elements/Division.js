import { Link } from 'react-router-dom'
import React, { Component } from "react";

class Division extends Component {

   dividir =function  (){
        let numeroA = Number (document.getElementById('numbreAD').value)
        let numeroB = Number (document.getElementById('numbreBD').value)
        let resultado = numeroA / numeroB
       return document.getElementById('resultadoD').innerHTML = `<input value = ${resultado} />`
         } 
    render(){
        return(
            <>
<form className='operacion'>
      <input className='input1' id ='numbreAD' type="number"/><br/>
      <i class="fas fa-divide"></i><br/>
      <input className='input2' id ='numbreBD' type="number"/><br/>
      <i class="fas fa-equals"></i><br/>
      <label className='input4' id= 'resultadoD' ></label><br/>
      < button className = 'input5' type = 'reset'> BORRAR </button> 
      <p className='input3' onClick = {this.dividir} >PROCESAR</p>
      </form>
      <article className ='homeBack'>
      <i class="fas fa-home"><Link to ='/' className = 'volverHome' > < h2>VOLVER A HOME</h2></Link></i>
      </article>
      </>
        )
    }
}

export default Division;