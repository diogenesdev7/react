import { Link } from 'react-router-dom'

const MenuDesktop = () => {
  return (
    <ul className='menu-desktop'>
        <li><Link to='/populares'>Populares</Link></li>
        <li><Link to='/topvinte'>Top 20</Link></li>
        <li>
            <p className='link-categorias'>Categorias</p>
            <ul>
                <li><Link to='acao'>Ação</Link></li>
                <li><Link to='comedia'>Comédia</Link></li>
                <li><Link to='drama'>Drama</Link></li>
                <li><Link to='thriller'>Thriller</Link></li>
                <li><Link to='romance'>Romance</Link></li>
            </ul>
        </li>
    </ul>
  )
}

export default MenuDesktop