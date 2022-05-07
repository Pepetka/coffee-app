import react from "react"
import ErrorMessage from "../errorMessage/ErrorMessage"

class ErrorBoundary extends react.Component {
	state = {
		error: false,
	}

	componentDidCatch(error, errorInf) {
		console.log(errorInf)

		this.setState({
			error: true,
		})
	}

	render() {
		if (this.state.error) {
			return <ErrorMessage />
		}

		return this.props.children
	}
}

export default ErrorBoundary
