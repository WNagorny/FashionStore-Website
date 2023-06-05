import './navigation.css'

function Navigation () {
   return(
      <>
         <nav className='navigation'>
            <ul className='navigation__list'>
               <li><a href="#">CATALOGUE</a></li>
               <li><a href="#">FASHION</a></li>
               <li><a href="#">FAVOURITE</a></li>
               <li><a href="#">LIFESTYLE</a></li>
               <li><a href="#" className='navigation__list-sign'>SIGN UP</a></li>
            </ul>
         </nav>      
      </>
   )
}

export default Navigation
