import { Link } from 'react-router-dom'

const MenuMobile = ({ menu }) => {
  return (
    <ul className={`menu-mobile ${menu ? 'active' : ''}`}>
        <li><Link to=''>Populares</Link></li>
        <li><Link to=''>Top 20</Link></li>
        <li><Link to=''>Ação</Link></li>
        <li><Link to=''>Comédia</Link></li>
        <li><Link to=''>Drama</Link></li>
        <li><Link to=''>Thriller</Link></li>
        <li><Link to=''>Romance</Link></li>
    </ul>
  )
}

export default MenuMobile