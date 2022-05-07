import { useEffect, useState } from "react"
import { NavLink } from "react-router-dom"

import SkeletonBest from "../skeleton/SkeletonBest"
import ErrorMessage from "../errorMessage/ErrorMessage"

import productCard1 from "../../resources/img/section-about/product-card-1.png"
import productCard2 from "../../resources/img/section-about/product-card-2.png"
import productCard3 from "../../resources/img/section-about/product-card-3.png"

import "./best.scss"

const Best = () => {
	const [productsData, setProductsData] = useState(["", "", ""])
	const [loading, setLoading] = useState(true)
	const [error, setError] = useState(false)

	useEffect(onLoading, [])

	function onLoading() {
		setLoading(true)
		setError(false)

		fetch("/api/coffee/")
			.then((res) => res.json())
			.then((res) => {
				setLoading(false)
				setProductsData(res.coffees)
			})
			.catch(() => setError(true))
	}

	let contentCards = []

	for (let i = 0; i < 3; i++) {
		const productCard = [productCard1, productCard2, productCard3]

		contentCards.push(
			<NavLink to={`/our-coffee/${productsData[i].id}`} style={{ textDecoration: "none" }}>
				<div className='best-product-card'>
					<div className='best-product-card-content'>
						<img src={productCard[i]} alt='' />
						<p className='best-product-name'>{productsData[i].name}</p>
						<p className='best-product-price'>{productsData[i].price}</p>
					</div>
				</div>
			</NavLink>
		)
	}

	contentCards = contentCards.map((item, i) => {
		return error ? <ErrorMessage /> : loading ? <SkeletonBestComponenet /> : item
	})

	return (
		<section className='section-best'>
			<div className='container'>
				<div className='row'>
					<div className='col-lg-12'>
						<h2>Our best</h2>
					</div>
				</div>

				<div className='row'>
					<div className='col-lg-2 offset-lg-2'>{contentCards[0]}</div>
					<div className='col-lg-2 offset-lg-1'>{contentCards[1]}</div>
					<div className='col-lg-2 offset-lg-1'>{contentCards[2]}</div>
				</div>
			</div>
		</section>
	)
}

const SkeletonBestComponenet = () => {
	return (
		<div className='best-product-card'>
			<SkeletonBest />
		</div>
	)
}

export default Best
