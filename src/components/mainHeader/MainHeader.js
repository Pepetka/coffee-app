import { NavLink } from "react-router-dom"

import Navigation from "../navigation/Navigation"

import whiteLogo from "../../resources/img/nav/Logo-white.svg"
import beansLogo from "../../resources/img/header/BeansLogo-white.svg"

import "./mainHeader.scss"

const MainHeader = () => {
	return (
		<header className='header'>
			<div className='container'>
				<nav>
					<div className='row'>
						<div className='col-lg-4'>
							<Navigation logo={whiteLogo} />
						</div>
					</div>
				</nav>

				<div className='row'>
					<div className='col-lg-12'>
						<h1>Everything You Love About Coffee</h1>
						<img className='beans-logo' src={beansLogo} alt='beans logo' />
					</div>
				</div>

				<div className='row'>
					<div className='col-lg-12'>
						<p>We makes every day full of energy and taste</p>
						<p>Want to try our beans?</p>
					</div>
				</div>

				<div className='row'>
					<div className='col-lg-12'>
						<NavLink to='/our-coffee'>
							<button type='button' className='more-btn'>
								More
							</button>
						</NavLink>
					</div>
				</div>
			</div>
		</header>
	)
}

export default MainHeader
