import React from 'react'
import ArrivalItem from './AriivalItem'
import './arrivals.css'
import img1 from '../../assets/categories/cat-01.jpg'
import img2 from '../../assets/categories/cat-02.jpg'
import img3 from '../../assets/categories/cat-03.jpg'


const Arrivals = () => {
	return (
		<>
			<section className='arrivals' id="catalog">
				<div className='container'>
					<div className='arrivals__header'>
						<h2 className='title-2'>New Arrivals</h2>
					</div>
					<div className='arrivals__cards'>

						<ArrivalItem img ={img1} title="Hoodies & Sweetshirt"/>
						<ArrivalItem img ={img2} title="Coats & Parkas"/>
						<ArrivalItem img ={img3} title="Tees & T-Shirt"/>

					</div>
				</div>
			</section>
		</>
	)
}

export default Arrivals
