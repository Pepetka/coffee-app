import beansLogo from "../../resources/img/header/BeansLogo-black.svg"

import "./mainAbout.scss"

const MainAbout = () => {
	return (
		<section className='section-about'>
			<div className='container'>
				<div className='row'>
					<div className='col-lg-12'>
						<div className='row'>
							<div className='col-lg-12'>
								<h2>About Us</h2>
								<img src={beansLogo} alt='beans logo' />
							</div>
						</div>

						<div className='row'>
							<div className='col-lg-6 offset-lg-3'>
								<p>
									Extremity sweetness difficult behaviour he of. On disposal of as landlord
									horrible. Afraid at highly months do things on at. Situation recommend objection
									do intention so questions. As greatly removed calling pleased improve an. Last ask
									him cold feel met spot shy want. Children me laughing we prospect answered
									followed. At it went is song that held help face.
								</p>
								<p>
									Now residence dashwoods she excellent you. Shade being under his bed her, Much
									read on as draw. Blessing for ignorant exercise any yourself unpacked. Pleasant
									horrible but confined day end marriage. Eagerness furniture set preserved far
									recommend. Did even but nor are most gave hope. Secure active living depend son
									repair day ladies now.
								</p>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	)
}

export default MainAbout
