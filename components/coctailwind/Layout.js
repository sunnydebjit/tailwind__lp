import Darkbutton from '../darkbutton';
import Footer from './footer/footer';
import Header from './header';
import StyleElements from './styleElements';

function Layout({ children }) {
	return (
		<div className='bg-gradient-to-br dark:bg-gradient-to-br from-white dark:from-black to-gray-300 dark:to-gray-900 relative transition duration-500 dark:transition dark:duration-500'>
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
