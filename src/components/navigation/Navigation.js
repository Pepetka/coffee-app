import { NavLink } from "react-router-dom"

import "./navigation.scss"

const Navigation = ({ logo }) => {
	return (
		<ul className='navigation'>
			<li>
				<NavLink
					to='/'
					style={({ isActive }) =>
						isActive ? { textDecoration: "underline" } : { textDecoration: "none" }
					}
				>
					<img src={logo} alt='logo' />
				</NavLink>
			</li>
			<li>
				<NavLink
					to='/our-coffee'
					style={({ isActive }) =>
						isActive ? { textDecoration: "underline" } : { textDecoration: "none" }
					}
				>
					Our coffee
				</NavLink>
			</li>
			<li>
				<NavLink
					to='/our-goods'
					style={({ isActive }) =>
						isActive ? { textDecoration: "underline" } : { textDecoration: "none" }
					}
				>
					For your pleasure
				</NavLink>
			</li>
		</ul>
	)
}

export default Navigation
