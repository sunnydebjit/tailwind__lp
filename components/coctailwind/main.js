import Hero from './hero';

function Main() {
	return (
		<>
			<Hero />
			<main className='  min-h-screen p-20 flex items-center justify-center'>
				<h1 className='text-teal-900 font-bold text-2xl dark:text-teal-100'>
					I am the main page
				</h1>
			</main>
		</>
	);
}

export default Main;
