import Cards from './cards';
import { CodeIcon } from '@heroicons/react/solid';
import { FaReact } from 'react-icons/fa';
import { DiReact } from 'react-icons/di';
import {
	SiHtml5,
	SiSass,
	SiJavascript,
	SiReact,
	SiTailwindcss,
	SiNextdotjs,
	SiFigma,
	SiAdobeillustrator,
	SiBlender,
	SiAdobephotoshop,
	SiAdobepremierepro,
	SiAdobeaftereffects,
} from 'react-icons/si';
import { HiCode } from 'react-icons/hi';
import { MdOutlineDesignServices } from 'react-icons/md';

function Buildsection() {
	return (
		<section id='tech' className='pt-0 pb-24 bg-gray-50 dark:bg-black'>
			<div className='container mx-auto px-10 space-y-5 md:space-y-0'>
				<div className='mb-14 text-center '>
					<h2 className='mb-4 text-4xl md:text-5xl lg:text-6xl text-gray-800 dark:text-gray-50 font-semibold'>
						Technologies I Work With
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
		icon: <SiHtml5 className='w-8 h-8' />,
		borderColor: 'border-red-500',
		bgColor: 'bg-red-500',
		name: 'Html 5',
		category: <HiCode className='h-full w-auto' />,
	},
	{
		id: '02',
		icon: <SiSass className='w-8 h-8' />,
		borderColor: 'border-orange-500',
		bgColor: 'bg-orange-500',
		name: 'Scss',
		category: <HiCode className='h-full w-auto' />,
	},
	{
		id: '03',
		icon: <SiJavascript className='w-8 h-8' />,
		borderColor: 'border-yellow-500',
		bgColor: 'bg-yellow-500',
		name: 'Javascript',
		category: <HiCode className='h-full w-auto' />,
	},
	{
		id: '04',
		icon: <SiReact className='w-8 h-8' />,
		borderColor: 'border-lime-500',
		bgColor: 'bg-lime-500',
		name: 'React',
		category: <HiCode className='h-full w-auto' />,
	},
	{
		id: '05',
		icon: <SiTailwindcss className='w-8 h-8' />,
		borderColor: 'border-green-500',
		bgColor: 'bg-green-500',
		name: 'Tailwind',
		category: <HiCode className='h-full w-auto' />,
	},
	{
		id: '06',
		icon: <SiNextdotjs className='w-8 h-8' />,
		borderColor: 'border-emerald-500',
		bgColor: 'bg-emerald-500',
		name: 'Next JS',
		category: <HiCode className='h-full w-auto' />,
	},
	{
		id: '07',
		icon: <SiFigma className='w-8 h-8' />,
		borderColor: 'border-cyan-500',
		bgColor: 'bg-cyan-500',
		name: 'Figma',
		category: <MdOutlineDesignServices className='h-full w-auto' />,
	},
	{
		id: '08',
		icon: <SiBlender className='w-8 h-8' />,
		borderColor: 'border-sky-500',
		bgColor: 'bg-sky-500',
		name: 'Blender',
		category: <MdOutlineDesignServices className='h-full w-auto' />,
	},
	{
		id: '09',
		icon: <SiAdobeillustrator className='w-8 h-8' />,
		borderColor: 'border-blue-500',
		bgColor: 'bg-blue-500',
		name: 'Illustrator',
		category: <MdOutlineDesignServices className='h-full w-auto' />,
	},
	{
		id: '10',
		icon: <SiAdobephotoshop className='w-8 h-8' />,
		borderColor: 'border-indigo-500',
		bgColor: 'bg-indigo-500',
		name: 'Photoshop',
		category: <MdOutlineDesignServices className='h-full w-auto' />,
	},
	{
		id: '11',
		icon: <SiAdobepremierepro className='w-8 h-8' />,
		borderColor: 'border-violet-500',
		bgColor: 'bg-violet-500',
		name: 'Premier Pro',
		category: <MdOutlineDesignServices className='h-full w-auto' />,
	},
	{
		id: '12',
		icon: <SiAdobeaftereffects className='w-8 h-8' />,
		borderColor: 'border-rose-500',
		bgColor: 'bg-rose-500',
		name: 'After Effects',
		category: <MdOutlineDesignServices className='h-full w-auto' />,
	},
];
