import Aboutme from './aboutme';
import Buildsection from './buildsection/buildsection';
import Faq from './faq/faq';
import Hero from './hero';
import Iphone from './iphone/iphone';
import Learn from './learn';
import Overview from './overview';
import Pricing from './pricing/pricing';

function Main() {
	return (
		<>
			<Hero />
			<Overview />
			<Aboutme />
			<Learn />
			<Buildsection />
			<Pricing />
			<Faq />
			<Iphone />
		</>
	);
}

export default Main;
