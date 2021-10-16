import Cards from './cards';
import { CodeIcon } from '@heroicons/react/solid';

function Buildsection() {
	return (
		<section className='pt-0 pb-24 bg-gray-300 dark:bg-gray-900'>
			<div className='container mx-auto px-6 md:px-0 space-y-5 md:space-y-0'>
				<div className='mb-14 text-center '>
					<h2 className='mb-4 text-5xl md:text-6xl text-gray-800 dark:text-gray-50 font-semibold'>
						Technologies at work
					</h2>
					<p className='text-lg md:text-2xl text-gray-700 dark:text-gray-100'>
						My expertise lies with updated technologies on demand
					</p>
				</div>
				<div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-3 gap-4'>
					{buildData.map(({ ...props }) => (
						<div key={props.id}>
							<Cards {...props} />
						</div>
					))}
				</div>
			</div>
		</section>
	);
}

export default Buildsection;

const buildData = [
	{
		id: '01',
		icon: (
			<svg
				xmlns='http://www.w3.org/2000/svg'
				className='h-6 w-6'
				fill='none'
				viewBox='0 0 24 24'
				stroke='currentColor'>
				<path
					strokeLinecap='round'
					strokeLinejoin='round'
					strokeWidth={2}
					d='M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4'
				/>
			</svg>
		),
		borderColor: 'border-red-500',
		bgColor: 'bg-red-500',
		name: 'Buttons',
	},
	{
		id: '02',
		icon: (
			<svg
				xmlns='http://www.w3.org/2000/svg'
				className='h-6 w-6'
				fill='none'
				viewBox='0 0 24 24'
				stroke='currentColor'>
				<path
					strokeLinecap='round'
					strokeLinejoin='round'
					strokeWidth={2}
					d='M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4'
				/>
			</svg>
		),
		borderColor: 'border-orange-500',
		bgColor: 'bg-orange-500',
		name: 'Cards',
	},
	{
		id: '03',
		icon: (
			<svg
				xmlns='http://www.w3.org/2000/svg'
				className='h-6 w-6'
				fill='none'
				viewBox='0 0 24 24'
				stroke='currentColor'>
				<path
					strokeLinecap='round'
					strokeLinejoin='round'
					strokeWidth={2}
					d='M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4'
				/>
			</svg>
		),
		borderColor: 'border-yellow-500',
		bgColor: 'bg-yellow-500',
		name: 'Forms',
	},
	{
		id: '04',
		icon: (
			<svg
				xmlns='http://www.w3.org/2000/svg'
				className='h-6 w-6'
				fill='none'
				viewBox='0 0 24 24'
				stroke='currentColor'>
				<path
					strokeLinecap='round'
					strokeLinejoin='round'
					strokeWidth={2}
					d='M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4'
				/>
			</svg>
		),
		borderColor: 'border-lime-500',
		bgColor: 'bg-lime-500',
		name: 'Header',
	},
	{
		id: '05',
		icon: (
			<svg
				xmlns='http://www.w3.org/2000/svg'
				className='h-6 w-6'
				fill='none'
				viewBox='0 0 24 24'
				stroke='currentColor'>
				<path
					strokeLinecap='round'
					strokeLinejoin='round'
					strokeWidth={2}
					d='M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4'
				/>
			</svg>
		),
		borderColor: 'border-green-500',
		bgColor: 'bg-green-500',
		name: 'Navigation',
	},
	{
		id: '06',
		icon: (
			<svg
				xmlns='http://www.w3.org/2000/svg'
				className='h-6 w-6'
				fill='none'
				viewBox='0 0 24 24'
				stroke='currentColor'>
				<path
					strokeLinecap='round'
					strokeLinejoin='round'
					strokeWidth={2}
					d='M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4'
				/>
			</svg>
		),
		borderColor: 'border-emerald-500',
		bgColor: 'bg-emerald-500',
		name: 'Hero',
	},
	{
		id: '07',
		icon: (
			<svg
				xmlns='http://www.w3.org/2000/svg'
				className='h-6 w-6'
				fill='none'
				viewBox='0 0 24 24'
				stroke='currentColor'>
				<path
					strokeLinecap='round'
					strokeLinejoin='round'
					strokeWidth={2}
					d='M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4'
				/>
			</svg>
		),
		borderColor: 'border-cyan-500',
		bgColor: 'bg-cyan-500',
		name: 'Grids',
	},
	{
		id: '08',
		icon: (
			<svg
				xmlns='http://www.w3.org/2000/svg'
				className='h-6 w-6'
				fill='none'
				viewBox='0 0 24 24'
				stroke='currentColor'>
				<path
					strokeLinecap='round'
					strokeLinejoin='round'
					strokeWidth={2}
					d='M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4'
				/>
			</svg>
		),
		borderColor: 'border-sky-500',
		bgColor: 'bg-sky-500',
		name: 'NewsLetter',
	},
	{
		id: '09',
		icon: (
			<svg
				xmlns='http://www.w3.org/2000/svg'
				className='h-6 w-6'
				fill='none'
				viewBox='0 0 24 24'
				stroke='currentColor'>
				<path
					strokeLinecap='round'
					strokeLinejoin='round'
					strokeWidth={2}
					d='M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4'
				/>
			</svg>
		),
		borderColor: 'border-blue-500',
		bgColor: 'bg-blue-500',
		name: 'Pricing',
	},
	{
		id: '10',
		icon: (
			<svg
				xmlns='http://www.w3.org/2000/svg'
				className='h-6 w-6'
				fill='none'
				viewBox='0 0 24 24'
				stroke='currentColor'>
				<path
					strokeLinecap='round'
					strokeLinejoin='round'
					strokeWidth={2}
					d='M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4'
				/>
			</svg>
		),
		borderColor: 'border-indigo-500',
		bgColor: 'bg-indigo-500',
		name: 'FAQ',
	},
	{
		id: '11',
		icon: (
			<svg
				xmlns='http://www.w3.org/2000/svg'
				className='h-6 w-6'
				fill='none'
				viewBox='0 0 24 24'
				stroke='currentColor'>
				<path
					strokeLinecap='round'
					strokeLinejoin='round'
					strokeWidth={2}
					d='M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4'
				/>
			</svg>
		),
		borderColor: 'border-violet-500',
		bgColor: 'bg-violet-500',
		name: 'ParcelJs',
	},
	{
		id: '12',
		icon: (
			<svg
				xmlns='http://www.w3.org/2000/svg'
				className='h-6 w-6'
				fill='none'
				viewBox='0 0 24 24'
				stroke='currentColor'>
				<path
					strokeLinecap='round'
					strokeLinejoin='round'
					strokeWidth={2}
					d='M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4'
				/>
			</svg>
		),
		borderColor: 'border-rose-500',
		bgColor: 'bg-rose-500',
		name: 'Responsive',
	},
];
