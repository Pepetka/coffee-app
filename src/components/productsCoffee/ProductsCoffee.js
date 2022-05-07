import { useEffect, useState } from "react"
import { NavLink } from "react-router-dom"

import Spinner from "../spinner/Spinner"
import ErrorMessage from "../errorMessage/ErrorMessage"

import "../services/server"
import "./productsCoffee.scss"

const ProductsCoffee = () => {
	const [productsData, setProductsData] = useState([])
	const [loading, setLoading] = useState(true)
	const [error, setError] = useState(false)
	const [inputData, setInputData] = useState("")
	const [filterData, setFilterData] = useState("")

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

	function onSearch(value) {
		setInputData(value)
	}

	function onFiltered(element) {
		document.querySelectorAll(".filter button").forEach((item) => {
			if (item !== element) {
				item.classList.remove("activeButton")
			}
		})

		setFilterData(element.textContent)
		element.classList.toggle("activeButton")

		if (!element.classList.contains("activeButton")) {
			setFilterData("")
		}
	}

	function getProductCards() {
		const filteredProductData = productsData.filter(
			(item) =>
				item.name.toLowerCase().includes(inputData.toLowerCase()) &&
				item.country.toLowerCase().includes(filterData.toLowerCase())
		)
		let productCards = []

		for (let j = 0; j < filteredProductData.length; j += 3) {
			productCards.push(
				<div className='row' key={j}>
					<div className='col-lg-2 offset-lg-2' id={filteredProductData[j].id}>
						<NavLink
							to={`/our-coffee/${filteredProductData[j].id}`}
							style={{ textDecoration: "none" }}
						>
							<div className='product-card'>
								<div className='product-card-content'>
									<img src={filteredProductData[j].productImg} alt={filteredProductData[j].name} />
									<p className='product-name'>{filteredProductData[j].name}</p>
									<p className='product-country'>{filteredProductData[j].country}</p>
									<p className='product-price'>{filteredProductData[j].price}</p>
								</div>
							</div>
						</NavLink>
					</div>

					{filteredProductData[j + 1] ? (
						<div className='col-lg-2 offset-lg-1' id={filteredProductData[j + 1].id}>
							<NavLink
								to={`/our-coffee/${filteredProductData[j + 1].id}`}
								style={{ textDecoration: "none" }}
							>
								<div className='product-card'>
									<div className='product-card-content'>
										<img
											src={filteredProductData[j + 1].productImg}
											alt={filteredProductData[j + 1].name}
										/>
										<p className='product-name'>{filteredProductData[j + 1].name}</p>
										<p className='product-country'>{filteredProductData[j + 1].country}</p>
										<p className='product-price'>{filteredProductData[j + 1].price}</p>
									</div>
								</div>
							</NavLink>
						</div>
					) : null}

					{filteredProductData[j + 2] ? (
						<div className='col-lg-2 offset-lg-1' id={filteredProductData[j + 2].id}>
							<NavLink
								to={`/our-coffee/${filteredProductData[j + 2].id}`}
								style={{ textDecoration: "none" }}
							>
								<div className='product-card'>
									<div className='product-card-content'>
										<img
											src={filteredProductData[j + 2].productImg}
											alt={filteredProductData[j + 2].name}
										/>
										<p className='product-name'>{filteredProductData[j + 2].name}</p>
										<p className='product-country'>{filteredProductData[j + 2].country}</p>
										<p className='product-price'>{filteredProductData[j + 2].price}</p>
									</div>
								</div>
							</NavLink>
						</div>
					) : null}
				</div>
			)
		}

		return productCards
	}

	return (
		<>
			<div className='container'>
				<div className='row'>
					<div className='hr-wrapper'>
						<div className='hr'></div>
					</div>
				</div>
			</div>
			<section className='section-products'>
				<div className='container'>
					<div className='search-panel'>
						<div className='row'>
							<div className='col-lg-4 offset-lg-2'>
								<div className='looking-for'>
									<p>Looking for</p>
									<input
										value={inputData}
										type='text'
										placeholder='start typing here...'
										onChange={(e) => onSearch(e.target.value)}
									/>
								</div>
							</div>
							<div className='col-lg-4'>
								<div className='filter'>
									<p>Or filter</p>
									<ul>
										<li>
											<button type='button' onClick={(e) => onFiltered(e.target)}>
												Brazil
											</button>
										</li>
										<li>
											<button type='button' onClick={(e) => onFiltered(e.target)}>
												Kenya
											</button>
										</li>
										<li>
											<button type='button' onClick={(e) => onFiltered(e.target)}>
												Columbia
											</button>
										</li>
									</ul>
								</div>
							</div>
						</div>
					</div>

					{error ? <ErrorMessage /> : loading ? <Spinner /> : getProductCards()}
				</div>
			</section>
		</>
	)
}

export default ProductsCoffee
