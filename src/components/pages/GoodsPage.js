import { Outlet } from "react-router-dom"

import Header from "../header/Header"

const GoodsPage = () => {
	return (
		<div>
			<Header bgClass={"header-goods"} header={"For your pleasure"} />
			<Outlet />
		</div>
	)
}

export default GoodsPage
