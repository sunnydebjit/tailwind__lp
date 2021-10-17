import Aboutme from './aboutme';
import Buildsection from './buildsection/buildsection';
import Faq from './faq/faq';
import Hero from './hero/hero';
import IphoneStack from './iphone/iphoneStack';

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
			<IphoneStack />
		</>
	);
}

export default Main;
