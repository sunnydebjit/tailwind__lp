import Darkbutton from './header/darkbutton';
import Footer from './footer/footer';
import Header from './header/header';
import StyleElements from './styleElements';

function Layout({ children }) {
	return (
		<div className='bg-gray-50 dark:bg-black relative'>
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
