import { Suspense, lazy } from "react"
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom"
import { SwitchTransition, CSSTransition } from "react-transition-group"

import Footer from "../footer/Footer"
import Spinner from "../spinner/Spinner"
import AboutCoffee from "../aboutCoffee/AboutCoffee"
import ProductsCoffee from "../productsCoffee/ProductsCoffee"
import AboutGoods from "../aboutGoods/AboutGoods"
import ProductsGoods from "../productsGoods/ProductsGoods"

import "bootstrap/dist/css/bootstrap.css"
import "../../style/style.scss"

const MainPage = lazy(() => import("../pages/MainPage"))
const CoffeePage = lazy(() => import("../pages/CoffeePage"))
const GoodsPage = lazy(() => import("../pages/GoodsPage"))
const Page404 = lazy(() => import("../pages/404"))
const CoffeeItemPage = lazy(() => import("../pages/CoffeeItemPage"))
const GoodsItemPage = lazy(() => import("../pages/GoodsItemPage"))

const App = () => {
	return (
		<Suspense fallback={<Spinner />}>
			<Router>
				<div className='app'>
					<AnimatedApp />
					<Footer />
				</div>
			</Router>
		</Suspense>
	)
}

const AnimatedApp = () => {
	const location = useLocation()

	return (
		<SwitchTransition mode='out-in'>
			<CSSTransition timeout={1000} classNames='animationApp' key={location.pathname} unmountOnExit>
				<Routes location={location}>
					<Route path='/' element={<MainPage />} />
					<Route path='/our-coffee' element={<CoffeePage />}>
						<Route
							path=''
							element={
								<>
									<AboutCoffee />
									<ProductsCoffee />
								</>
							}
						/>
						<Route path=':coffeeId' element={<CoffeeItemPage />} />
					</Route>
					<Route path='/our-goods' element={<GoodsPage />}>
						<Route
							path=''
							element={
								<>
									<AboutGoods />
									<ProductsGoods />
								</>
							}
						/>
						<Route path=':goodsId' element={<GoodsItemPage />} />
					</Route>
					<Route path='*' element={<Page404 />} />
				</Routes>
			</CSSTransition>
		</SwitchTransition>
	)
}

export default App
