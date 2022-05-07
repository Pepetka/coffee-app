import MainHeader from "../mainHeader/MainHeader"
import MainAbout from "../mainAbout/MainAbout"
import Best from "../best/Best"

const MainPage = () => {
	return (
		<>
			<MainHeader />
			<main>
				<MainAbout />
				<Best />
			</main>
		</>
	)
}

export default MainPage
