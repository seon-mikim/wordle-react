import Header from "./Header"
import Keyboard from "./Keyboard"
import Wordboard from "./Wordboard"
import * as S from './style'


function Layout() {
	return (
		<S.Layout>
			<Header />
			<Wordboard />
			<Keyboard />
		</S.Layout>
	)
}

export default Layout