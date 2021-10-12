import 'tailwindcss/tailwind.css';
import '../styles/globals.css';
import Layout from '../components/coctailwind/Layout';
import Framer__onload from '../components/framer__onload';
function MyNewApp({ Component, pageProps }) {
	return (
		<>
			{' '}
			<Framer__onload>
				<Layout>
					<Component {...pageProps} />
				</Layout>
			</Framer__onload>
		</>
	);
}

export default MyNewApp;
