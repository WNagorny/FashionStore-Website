import React from 'react'
import arrow from '../../assets/icons/arrow.svg'

const ArrivalItem = ({img,title}) => {
	return (
		<>
			<div className='card'>
				<div className='card__img'>
					<img src={img} alt='' />
				</div>

				<div className='card__content'>
					<div className='card_text'>
						<h3>{title}</h3>
						<p>Explore Now!</p>
					</div>
					<div className='card__icon'>
						<a href='#'>
							<img src= {arrow} className='card__arrow'  alt='arrow' />
						</a>
					</div>
				</div>
			</div>
		</>
	)
}

export default ArrivalItem
