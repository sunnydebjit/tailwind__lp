export default function Placeholder() {
	return (
		<>
			<main className='bg-green-900 min-h-screen flex flex-col justify-around items-center'>
				<div className='bg-green-700 text-green-300 text-lg md:text-2xl mx-5 p-5 shadow-lg hover:shadow-2xl md:text-center rounded-lg border-b-8 border-green-900 hover:border-green-800 hover:bg-green-600 hover:text-green-200 hover:scale-110 transform transition duration-500'>
					<h1 className='font-bold'>Tailwind Next Js App</h1>
					<p className='text-base md:text-lg'>
						Initial starting point for this project. Feel free to edit me.
					</p>
					<p className='inline-block text-xs'>
						Made with <span className=' inline-block animate-bounce'>💝</span>{' '}
						by <span className='font-bold'>Debjit Majumdar</span>
					</p>
				</div>
			</main>
		</>
	);
}
