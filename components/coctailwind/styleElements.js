import Circles from './circles';

function StyleElements({ children }) {
	return (
		<div>
			<Circles position={'top-2 left-2'} />
			<Circles
				position={'top-0 right-0 hidden md:block lg:block'}
				margin={'mr-48'}
				translateX={'-translate-x-24 md:-translate-x-36 lg:-translate-x-44'}
				translateY={'translate-y-80 md:translate-y-64 lg:translate-y-64'}
			/>

			{children}
		</div>
	);
}

export default StyleElements;
