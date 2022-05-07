import Navigation from "../navigation/Navigation"

import whiteLogo from "../../resources/img/nav/Logo-white.svg"

import "./header.scss"

const Header = (props) => {
	return (
		<header className={`${props.bgClass} header-products`}>
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
						<h1>{props.header}</h1>
					</div>
				</div>
			</div>
		</header>
	)
}

export default Header
