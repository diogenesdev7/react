import { register } from 'swiper/element/bundle'
register();
import { Swiper, SwiperSlide } from 'swiper/react'
import { EffectFade } from 'swiper/modules'
import 'swiper/css/effect-fade'
import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/navigation'
import 'swiper/css/scrollbar'
import batman from '../images/batman.jpg'
import duna from '../images/duna.webp'
import godfather from '../images/godfather.webp'
import inception from '../images/inception.png'

import { useState } from 'react'

import '../styles/hero.sass'
import { useNavigate } from 'react-router-dom';

export default function Hero() {

    const data = [
        {id: 1, image: batman},
        {id: 2, image: duna},
        {id: 3, image: inception},
        {id: 4, image: godfather}
      ]


    const [search, setSearch] = useState('')

    const navigate = useNavigate()
    
    const handleSubmit = (e) => {
        e.preventDefault()
        if (!search) return
        navigate(`/search?q=${search}`)
    }
    

    return (
        <section className="hero">
            <Swiper modules={[EffectFade]} effect='fade' slidesPerView={1} autoplay={{delay: 7000}}>
                {data.map((item, index) => {
                    return <SwiperSlide className='swiperslide' key={index}>
                        <img src={item.image} alt={`imagem ${item.id}`} />
                        <div className="overlay"></div>
                    </SwiperSlide>
                })}
            </Swiper>

            <div className="hero-info">
                <h2>Sua fonte de informações sobre cinema.</h2>
                <p>Comece já!</p>
                <form onSubmit={handleSubmit} className='hero-form'>
                    <input type="search" value={search} onChange={(e) => setSearch(e.target.value)} placeholder='Busque por um filme...' />
                    <button type="submit">Buscar</button>
                </form>
            </div>
        </section>
    )
}