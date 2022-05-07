import { Outlet } from "react-router-dom"

import Header from "../header/Header"

const CoffeePage = () => {
	return (
		<div>
			<Header bgClass={"header-coffee"} header={"Our Coffee"} />
			<Outlet />
		</div>
	)
}

export default CoffeePage
