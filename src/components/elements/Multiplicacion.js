import { Link } from 'react-router-dom'
import React, { Component } from "react";

class Multiplicacion extends Component {

   multiplicar =function  (){
        let numeroA = Number (document.getElementById('numbreAM').value)
        let numeroB = Number (document.getElementById('numbreBM').value)
        let resultado = numeroA * numeroB
       return document.getElementById('resultadoM').innerHTML = `<input value = ${resultado} />`
         } 
    render(){
        return(
            <>
<form className='operacion'>
      <input className='input1' id ='numbreAM' type="number"/><br/>
      <i class="fas fa-times"></i><br/>
      <input className='input2' id ='numbreBM' type="number"/><br/>
      <i class="fas fa-equals"></i><br/>
      <label className='input4' id= 'resultadoM' ></label><br/>
      < button className = 'input5' type = 'reset'> BORRAR </button> 
      <p className='input3' onClick = {this.multiplicar} >PROCESAR</p>
      </form>
      <article className ='homeBack'>
      <i class="fas fa-home"><Link to ='/' className = 'volverHome' > < h2>VOLVER A HOME</h2></Link></i>
      </article>
      </>
        )
    }
}

export default Multiplicacion;