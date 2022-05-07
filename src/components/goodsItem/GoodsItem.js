import { useState, useEffect } from "react"
import { useParams } from "react-router-dom"

import Skeleton from "../skeleton/Skeleton"
import ErrorMessage from "../errorMessage/ErrorMessage"

import logo from "../../resources/img/header/BeansLogo-black.svg"
import prodCard from "../../resources/img/section-about/product-card-big.jpg"

import "./goodsItem.scss"

const GoodsItem = () => {
	const [product, setProduct] = useState({})
	const [loading, setLoading] = useState(true)
	const [error, setError] = useState(false)
	const { goodsId } = useParams()

	useEffect(onLoading, [goodsId])

	function onLoading() {
		setLoading(true)
		setError(false)

		fetch(`/api/coffee/${goodsId}`)
			.then((res) => res.json())
			.then((res) => {
				setLoading(false)
				setProduct(res.coffee)
			})
			.catch(() => setError(true))
	}

	const content = error ? <ErrorMessage /> : loading ? <Skeleton /> : <View product={product} />

	return (
		<section className='about-product'>
			<div className='container'>
				<div className='row'>{content}</div>
			</div>
		</section>
	)
}

const View = ({ product }) => {
	return (
		<>
			<div className='col-lg-4 offset-lg-2'>
				<img className='about-img' src={prodCard} alt='about img' />
			</div>

			<div className='col-lg-4'>
				<div className='row'>
					<div className='col-lg-12'>
						<h2>{product.name}</h2>
						<img className='beans-logo' src={logo} alt='beans logo' />
					</div>
				</div>

				<div className='row'>
					<div className='col-lg-12'>
						<p>
							<span>Country:</span> {product.country}
						</p>
						<p>
							<span>Description:</span> {product.description}
						</p>
						<p>
							<span>Price:</span> <span id='price'>{product.price}</span>
						</p>
					</div>
				</div>
			</div>
		</>
	)
}

export default GoodsItem
