import React from "react"
import ContentLoader from "react-content-loader"

const Skeleton = (props) => (
	<ContentLoader
		speed={3}
		width={880}
		height={351}
		viewBox='0 0 880 351'
		backgroundColor='#9f9f9f'
		foregroundColor='#ecebeb'
		{...props}
	>
		<rect x='25' y='0' rx='0' ry='0' width='390' height='351' />
		<rect x='523' y='0' rx='0' ry='0' width='300' height='30' />
		<rect x='573' y='50' rx='0' ry='0' width='200' height='30' />
		<rect x='465' y='120' rx='0' ry='0' width='100' height='21' />
		<rect x='465' y='162' rx='0' ry='0' width='416' height='19' />
		<rect x='465' y='184' rx='0' ry='0' width='416' height='19' />
		<rect x='465' y='206' rx='0' ry='0' width='416' height='19' />
		<rect x='465' y='244' rx='0' ry='0' width='80' height='35' />
	</ContentLoader>
)

export default Skeleton
