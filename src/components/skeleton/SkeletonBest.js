import React from "react"
import ContentLoader from "react-content-loader"

const SkeletonBest = (props) => (
	<ContentLoader
		speed={3}
		width={220}
		height={240}
		viewBox='0 0 220 240'
		backgroundColor='#9f9f9f'
		foregroundColor='#ecebeb'
		{...props}
	>
		<rect x='35' y='22' rx='0' ry='0' width='151' height='130' />
		<rect x='24' y='166' rx='0' ry='0' width='176' height='21' />
		<rect x='150' y='201' rx='0' ry='0' width='50' height='21' />
	</ContentLoader>
)

export default SkeletonBest
