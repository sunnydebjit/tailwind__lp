import Darkbutton from '../darkbutton';
import Footer from './footer';
import Header from './header';
import StyleElements from './styleElements';

function Layout({ children }) {
	return (
		<div>
			<>
				<StyleElements>
					<Header />
					<Darkbutton />
					{children}
				</StyleElements>
				<Footer />
			</>
		</div>
	);
}

export default Layout;
