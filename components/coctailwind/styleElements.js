import Circles from './circles';

function StyleElements({ children }) {
	return (
		<div>
			<Circles />
			<Circles top={64} right={96} visible={'hidden lg:block'} />

			{children}
		</div>
	);
}

export default StyleElements;
