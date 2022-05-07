import ErrorMessage from "../errorMessage/ErrorMessage"

const Page404 = () => {
	return (
		<div
			style={{
				display: "flex",
				flexDirection: "column",
				alignItems: "center",
				justifyContent: "center",
			}}
		>
			<h2>404 - Page not found...</h2>
			<ErrorMessage />
		</div>
	)
}

export default Page404
