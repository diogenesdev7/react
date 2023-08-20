import { Link } from 'react-router-dom'

const MenuMobile = () => {
  return (
                <ul className='menu-mobile'>
                    <li><Link to='populares'>Populares</Link></li>
                    <li><Link top='top20'>Top 20</Link></li>
                    <li className='li-categorias'>Categorias</li>
                    <div className="categorias">
                      <li><Link to='acao'>Ação</Link></li>
                      <li><Link to='comedia'>Comédia</Link></li>
                      <li><Link to='drama'>Drama</Link></li>
                      <li><Link to='romance'>Romance</Link></li>
                      <li><Link to='thriller'>Thriller</Link></li>
                    </div>
                </ul>
  )
}

export default MenuMobile