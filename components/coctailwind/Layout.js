import Darkbutton from '../darkbutton';
import Footer from './footer';
import Header from './header';
import StyleElements from './styleElements';

function Layout({ children }) {
	return (
		<div className='dark:bg-trueGray-900 relative transition duration-500 dark:transition dark:duration-500'>
			<>
				<StyleElements>
					<Header />

					{children}
				</StyleElements>
				<Footer />
			</>
		</div>
	);
}

export default Layout;
