import { ThemeProvider } from 'next-themes';
import 'tailwindcss/tailwind.css';
import '../styles/globals.css';
import Layout from '../components/coctailwind/Layout';
import Framer__onload from '../components/framer__onload';
function MyNewApp({ Component, pageProps }) {
	return (
		<>
			<ThemeProvider enableSystem={true} attribute='class'>
				{/* <Framer__onload> */}
				<Layout>
					<Component {...pageProps} />
				</Layout>
				{/* </Framer__onload> */}
			</ThemeProvider>
		</>
	);
}

export default MyNewApp;
