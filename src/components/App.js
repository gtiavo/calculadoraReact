import { Routes, Route, Link } from 'react-router-dom'
import Sidebar from "./home/Sidebar";
import Home from "./home/Home";
import Suma from './elements/Suma';
import Resta from './elements/Resta';
import Division from './elements/Division';
import Multiplicacion from './elements/Multiplicacion';
import Footer from './home/Footer'
import NotFound from './elements/NotFound';
import '../App.css'

function App (){
     
  return (
    <div className="App">
      < Sidebar />
      < main className = 'main'>
        < Routes >
        < Route path = '/' element = { < Home />} />
        < Route path = '/suma' element ={< Suma />} />
        < Route path = '/resta' element = {< Resta />} />
        < Route path = '/division' element = {< Division />} />
        < Route path = '/multiplicacion' element = {< Multiplicacion />} />
        < Route path = '*' element = {< NotFound />} />
       </Routes>
    
      </ main>
      < Footer />
    </div>
  );
  
}

export default App;
