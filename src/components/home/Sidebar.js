import { Link } from 'react-router-dom'

function Sidebar (){
    return(
        < header>
            <nav>
                <ul className = 'sidebar'>
                   <Link to='/suma' > <li>SUMA</li> </Link>
                   <Link to='/resta' > <li>RESTA</li></Link>
                   <Link to='/division' > <li>DIVISIÓN</li></Link>
                   <Link to='/multiplicacion' > <li>MULTIPLICACIÓN</li></Link>
                </ul>
            </nav>
        </header>
    )
}
export default Sidebar;