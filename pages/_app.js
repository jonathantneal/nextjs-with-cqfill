import '../style.css'
import { cqfill } from 'cqfill'

function MyApp({ Component, pageProps }) {
	cqfill()

	return <Component {...pageProps} />
}

export default MyApp
