import Navigation from "../navigation/Navigation"

import blackLogo from "../../resources/img/nav/Logo-black.svg"
import beansLogo from "../../resources/img/header/BeansLogo-black.svg"

import "./footer.scss"

const Footer = () => {
	return (
		<footer className='footer'>
			<div className='container'>
				<div className='row'>
					<div className='col-lg-4 offset-lg-4'>
						<Navigation logo={blackLogo} />
					</div>

					<div className='col-lg-12'>
						<img className='beans-logo' src={beansLogo} alt='beans logo' />
					</div>
				</div>
			</div>
		</footer>
	)
}

export default Footer
