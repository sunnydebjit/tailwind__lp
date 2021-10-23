import Projects from './Projects/Projects';
import Buildsection from './buildsection/buildsection';
import Faq from './faq/faq';
import Hero from './hero/hero';
import IphoneStack from './iphone/iphoneStack';
import Learn from './learn';
import Overview from './overview/overview';
import Pricing from './pricing/pricing';

function Main() {
	return (
		<>
			<Hero />
			<Projects />
			<Overview />
			<Buildsection />
			<Learn />

			<Pricing />
			{/* <Faq /> */}
			{/* <IphoneStack /> */}
		</>
	);
}

export default Main;
