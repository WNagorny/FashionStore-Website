import React from 'react';
import './brands.css'

import hm from '../../assets/brands/HM.png'
import obey from '../../assets/brands/Obey.png'
import shopify from '../../assets/brands/Shopify.png'
import lacoste from '../../assets/brands/Lacoste.png'
import levis from '../../assets/brands/Levis.png'
import amazon from '../../assets/brands/Amazon.png'

const Brands = () => {
   return ( <>
      <section className="brands">
         <div className="container">
            <ul className="brands__list">
               <li><a href='#'><img src={hm} alt="logo of HM store" /></a></li>
               <li><a href='#'><img src={obey} alt="logo of  Oeby store" /></a></li>
               <li><a href='#'><img src={shopify} alt="logo of  Shopify store" /></a></li>
               <li><a href='#'><img src={lacoste} alt="logo of  Lacoste store" /></a></li>
               <li><a href='#'><img src={levis} alt="logo of  Levis store" /></a></li>
               <li><a href='#'><img src={amazon} alt="logo of  Amazon store" /></a></li>
            </ul>
         </div>
      </section>
   </> );
}
 
export default Brands;