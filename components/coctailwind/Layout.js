import Darkbutton from './header/darkbutton';
import Footer from './footer/footer';
import Header from './header/header';
import StyleElements from './styleElements';

function Layout({ children }) {
	return (
		<div className='bg-gradient-to-br dark:bg-gradient-to-br from-white dark:from-black to-gray-300 dark:to-gray-900 relative transition duration-500 dark:transition dark:duration-500'>
			<>
				<StyleElements>
					<Header />
					{/* Blur ELement */}
					{/* <div className=' dark:bg-gray-800 opacity-100 absolute top-0 inset-x-0 h-full '></div> */}
					{/* Blur Ends */}
					{children}
				</StyleElements>
				<Footer />
			</>
		</div>
	);
}

export default Layout;
