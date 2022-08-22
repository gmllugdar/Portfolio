import React from "react";
import './Slider.css'
const slidesInfo = [

    {
        src: `https://www.cinconoticias.com/wp-content/uploads/Generos-de-videojuegos.jpg`,
        alt: 'SPA-VideoGames',
        desc: 'SPA-VideoGames',
        link: ""
    },
    {
        src: `https://th.bing.com/th/id/OIP.FMzaawjOc_LWjRCrrS9QWAHaHa?pid=ImgDet&rs=1`,
        alt: 'AppMobile-Fixy',
        desc: 'AppMobile-Fixy',
        link: 'https://m.youtube.com/watch?v=d-B3lyRKnjE&t=95s'
    },
    {
        src: `https://i.pinimg.com/736x/2e/cb/ef/2ecbefc837f892979e9737466d41fede--mapy-sveta-world-flags.jpg`,
        alt: 'SPA-Countries',
        desc: 'SPA-Countries',
        link: 'https://github.com/gmllugdar/countries-ll'
    },
    {
        src: `https://static.onecms.io/wp-content/uploads/sites/21/2021/04/22/Earth-Day-Makeup.png`,
        alt: 'Ecommerce-Cosmetics',
        desc: 'Ecommerce-Cosmetics',
        link: 'https://pg-final2.vercel.app/'
    },

]
function redirect(direcction) {
    window.location.href = direcction
}


const slides = slidesInfo.map(slide =>

(<div className="slide-contain" >

    <img className="img" src={slide.src} alt={slide.alt} />

    <div className="slide-desc" >
        <button className="btn" onClick={() => { redirect(slide.link) }}  >{slide.desc}</button>
    </div>
</div>
)
)

export default slides
