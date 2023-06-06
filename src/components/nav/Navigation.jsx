import './navigation.css'

function Navigation () {
   return(
      <>
         <nav className='navigation'>
            <ul className='navigation__list'>
               <li><a href="#catalog">CATALOGUE</a></li>
               <li><a href="#fashion">FASHION</a></li>
               <li><a href="#favourite">FAVOURITE</a></li>
               <li><a href="#style">LIFESTYLE</a></li>
               <li><a href="#" className='navigation__list-sign'>SIGN UP</a></li>
            </ul>
         </nav>      
      </>
   )
}

export default Navigation
