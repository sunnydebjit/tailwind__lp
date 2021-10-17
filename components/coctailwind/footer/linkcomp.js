function Linkcomp({ section, links }) {
	return (
		<div className='space-y-2 text-center lg:text-right'>
			<p className='mb-3 font-bold  text-gray-400 dark:text-gray-100 uppercase tracking-widest'>
				{section}
			</p>
			{links.map((link, index) => (
				<a
					key={`link__${index + 2}`}
					href='#'
					className='block text-gray-800 dark:text-gray-200 hover:underline '>
					{link}
				</a>
			))}
		</div>
	);
}

export default Linkcomp;
