import { Link } from 'react-router-dom'

const MenuDesktop = () => {
  return (
                <ul className='menu-desktop'>
                    <li><Link to='categorias'>Categorias</Link>
                        <ul>
                        <li><Link to='acao'>Ação</Link></li>
                    <li><Link to='comedia'>Comédia</Link></li>
                    <li><Link to='drama'>Drama</Link></li>
                    <li><Link to='romance'>Romance</Link></li>
                    <li><Link to='thriller'>Thriller</Link></li>
                        </ul>
                    </li>
                    <li><Link to='populares'>Populares</Link></li>
                    <li><Link to='top20'>Top 20</Link></li>
                </ul>
  )
}

export default MenuDesktop