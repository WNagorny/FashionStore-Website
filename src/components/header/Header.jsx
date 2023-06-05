import './header.css'
import logo from '../../assets/icons/logo.svg'
import Navigation from '../nav/Navigation';

function Header() {
	return (
		<>
			<header className='header'>
				<div className='container'>
					<div className='header__row'>
						<div className='header__logo'>
							<img src={logo} alt='logo' />
							<span>Fashion</span>
						</div>
						<Navigation/>
					</div>
				</div>
			</header>
		</>
	)
}

export default Header
