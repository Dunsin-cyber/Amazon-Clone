import React from 'react'
import './Home.css'
import Product from './Product'

function Home() {
    return (
        <div className= 'home'>
            <div className = 'home__container'>
                <img className= 'home__image'
                src='https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428G84220_.jpg' 
                alt=''
                />
           
            <div className = 'home__row'>
                < Product id= '23343' title='The best washing machine' price ={288.22}
                image= 'https://m.media-amazon.com/images/I/71K7Q4FpguL._AC_UL480_FMwebp_QL65_.jpg'
                rating ={3} />
                 < Product id= '23323' title='Hisense Best Tv' price ={50435.22}
                image= 'https://images-na.ssl-images-amazon.com/images/I/51I3UjD-Q1L.jpg'
                rating ={3} />


            </div>


            <div className = 'home__row'>
            < Product id= '23743' title='music headset' price ={1000.22}
                image= ' https://m.media-amazon.com/images/I/81PtEw326aL._AC_UY327_FMwebp_QL65_.jpg'
                rating ={3} />
             < Product id= '63343' title='nike fresh star' price ={348.22}
                image= 'https://m.media-amazon.com/images/I/71k+BCcDMJL._AC_UL480_FMwebp_QL65_.jpg'
                rating ={3} />
             < Product id= '23043' title='MSI' price ={2455.22}
                image= 'https://images-na.ssl-images-amazon.com/images/I/41vMYgD92xL.jpg'
                rating ={3} />

            </div>


            <div className = 'home__row'>
            < Product id= '23223' title='i dont' price ={288.22}
                image= 'https://m.media-amazon.com/images/I/61HWqNOxIYL._AC_UL480_FMwebp_QL65_.jpg'
                rating ={3} />
            
            </div>
            </div> 
         </div>
    )
}

export default Home
