import './NavBar.css'

import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

const NavBar = () => {
  return (
    <nav className='navbar'>
        <a>Home</a>
        <a>Celulares</a>
        <a>Consolas</a>
        <a>Televisiones</a>
        <a><ShoppingCartIcon/></a>
    </nav>
  )
}

export default NavBar