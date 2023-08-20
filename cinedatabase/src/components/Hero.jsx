import '../styles/Hero.sass'
import { register } from 'swiper/element/bundle'
register()
import { Swiper, SwiperSlide } from 'swiper/react'
import { EffectFade } from 'swiper/modules'
import 'swiper/css/effect-fade'
import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/navigation'
import 'swiper/css/scrollbar'
import batman from '../images/batman.jpg'
import duna from '../images/duna.webp'
import inception from '../images/inception.png'
import godfather from '../images/godfather.webp'

import { useNavigate, Link } from 'react-router-dom'
import { useState } from 'react'



function Hero() {
  const data = [
    {id: 1, image: batman},
    {id: 2, image: duna},
    {id: 3, image: inception},
    {id: 4, image: godfather}
  ]

  const navigate = useNavigate()

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!search) return
    navigate(`/search?q=${search}`)
    setSearch('')
  }

  const [search, setSearch] = useState('')

  return (
    <div className='hero'>

      <Swiper modules={[EffectFade]} effect='fade' slidesPerView={1} autoplay={{delay: 7000}}>
        {data.map((item) => {
          return <SwiperSlide key={item.id}>
            <img src={item.image} alt={`imagem ${item.id}`} className='slide-item' />
            <div className="overlay"></div>
          </SwiperSlide>
        })}
      </Swiper>

      <div className="hero-info">
        <h2>Sua fonte de informações sobre cinema.</h2>
        <h3>Comece já.</h3>
        <form onSubmit={handleSubmit}>
          <input type="text" placeholder='Busque por um filme, diretor ou ator...' value={search} onChange={(e) => setSearch(e.target.value)} />
          <button type="submit">Buscar</button>
        </form>
      </div>

    </div>
  )
}

export default Hero