function Macbuttons({ children }) {
	return (
		<div className='p-4 border-b border-gray-700 dark:border-gray-50 font-bold text-lg flex justify-between items-center'>
			{children}
			<div className='flex space-x-2'>
				<div className='w-2 h-2 rounded-full bg-green-600 animate-bounce shadow-lg'></div>
				<div className='w-2 h-2 rounded-full bg-orange-600 animate-bounce shadow-lg'></div>
				<div className='w-2 h-2 rounded-full bg-red-600 animate-bounce shadow-lg'></div>
			</div>
		</div>
	);
}

export default Macbuttons;
