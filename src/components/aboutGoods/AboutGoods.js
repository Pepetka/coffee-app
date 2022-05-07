import aboutImg from "../../resources/img/section-about/MaskGroup2.png"
import BeansLogo from "../../resources/img/header/BeansLogo-black.svg"

import "./aboutGoods.scss"

const AboutGoods = () => {
	return (
		<section className='section-about'>
			<div className='container'>
				<div className='row'>
					<div className='col-lg-4 offset-lg-2'>
						<img className='about-img' src={aboutImg} alt='about' />
					</div>

					<div className='col-lg-4'>
						<div className='row'>
							<div className='col-lg-12'>
								<h2>About our goods</h2>
								<img className='beans-logo' src={BeansLogo} alt='beans logo' />
							</div>
						</div>

						<div className='row'>
							<div className='col-lg-12'>
								<p>
									Extremity sweetness difficult behaviour he of. On disposal of as landlord
									horrible.
								</p>
								<p>
									Afraid at highly months do things on at. Situation recommend objection do
									intention so questions.
								</p>
								<p>
									As greatly removed calling pleased improve an. Last ask him cold feel met spot shy
									want. Children me laughing we prospect answered followed. At it went is song that
									held help face.
								</p>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	)
}

export default AboutGoods
