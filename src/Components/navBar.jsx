import CardWid from '../Components/cardWidget'
import './navBar.css'
import {NavLink, Link} from 'react-router-dom'


const NavBar = () => {
  return (
      <nav>
        <div className='navContainer'>
          <Link to='/' className='linkLogo'>
            <h3 className='tituloNav'>Mecanica Nitro</h3>
          </Link>
          <NavLink to={`/categoria/lavadero`} className={({isActive}) => isActive ? 'ActiveOption' : 'Option'}><button className='btnNav'>Lavadero</button></NavLink>
          <NavLink to={`/categoria/Mecanica`} className={({isActive}) => isActive ? 'ActiveOption' : 'Option'}><button className='btnNav'>Mecanica</button></NavLink>
          <CardWid className="Card"/>
        </div>
      </nav>
  )
}
  
export default NavBar