import ProjectVidComps from './ProjectVidComps';
import ProjectComps from './ProjectComps';

function Projects() {
	return (
		<>
			<section
				id='projects'
				className='md:pt-12 pb-24 bg-gray-50 dark:bg-black text-center md:text-left'>
				<section className='container mx-auto px-10'>
					<h1 className=' mb-10 text-5xl md:text-6xl font-extrabold text-center '>
						<span className='text-gray-900 dark:text-transparent dark:bg-clip-text dark:bg-gradient-to-r dark:from-teal-600 dark:to-teal-400'>
							Selected
						</span>{' '}
						<span className='text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-teal-500'></span>{' '}
						<span className='text-gray-900 dark:text-transparent dark:bg-clip-text dark:bg-gradient-to-r dark:from-teal-500  dark:to-teal-600 '>
							Work
						</span>
					</h1>
					<p className='mb-12 md:pr-10 md:text-3xl leading-loose text-center'>
						In my journey I have been blessed with several challenging projects,
						I would like to show you few of them I’m proud of and show my
						diversity of creativity, with Brand Identity design / Social Media
						Content and Product Visualisation appealing to me the most.
					</p>
					{/* Videos */}
					<div className='md:flex md:space-x-8 space-y-8 md:space-y-0 text-left mb-10'>
						{videoData.map(({ ...item }) => (
							<ProjectVidComps key={item.id} {...item} />
						))}
					</div>
					{/* GRID */}
					<div className='space-y-6 lg:space-y-0 lg:grid gap-10 grid-cols-3'>
						{workData.map(({ ...comps }) => {
							return <ProjectComps key={comps.id} {...comps} />;
						})}
					</div>
				</section>
			</section>
		</>
	);
}

export default Projects;

const videoData = [
	{
		id: 'v01',
		cat: 'Video',
		link: 'https://www.youtube.com/embed/z_6MT2SrS1A',
		desc: `Gigabyte India approached me to collaborate on a video project for
		gamers in Kolkata. I was resposnsible to create a visually appealing promotional video
		on their upcoming launch of the X99 segment of Motherboards.`,
	},
	{
		id: 'v02',
		cat: 'Video',
		link: 'https://www.youtube.com/embed/ejj4Hoz5VG0',
		desc: `I was assigned this project by 23Watts, Delhi
		based PR Agency. I successfully delivered a 20sec promotional video
		for the lodging brand Kasol Enclave for their social media
		pages.`,
	},
];

const workData = [
	{
		id: 'w01',
		brand: 'Bonito Bonita',
		cat: 'Branding',
		badge: 'bg-purple-600',
		link: '/Projects/bonito',
		span: 'col-span-1',
		path: '/projects/bonito/composite-front.png',
		desc: `Gianna Bianchi wanted to set up a premium brand for a 
		wide range of uni-sex cosmetics in Passirano, Italy. Her 
		idea was to deliver a bold and elegant product and be 
		recognised in the global market.`,
	},
	{
		id: 'w02',
		brand: 'Jibhe Jol',
		cat: 'Branding',
		badge: 'bg-purple-600',
		link: '/Projects/jj',
		path: '/projects/jj/JJ_Leather_Cover.jpg',
		desc: `Jibhe Jol a soul food brand that specialises in Mughlai 
		and Bengali cuisine at Bangalore. As a partner of the 
		company it was my responsibilty to put my creative expertise in giving birth to the Brand Identity`,
	},
	{
		id: 'w03',
		brand: 'SOS Children Village',
		cat: 'Social Media',
		badge: 'bg-blue-600',
		link: '/Projects/sos',
		span: 'col-span-1',
		path: '/projects/sos/sos_kinship_base_05.png',
		desc: `SOS Children's Village, a renowned NGO, approached me to design a cover image which invloved image manipulation for their "Kinship Program". This cover was responsible for lead generation on their social media platform`,
	},
	{
		id: 'w04',
		brand: 'TATA TEA',
		cat: 'Social Media',
		badge: 'bg-blue-600',
		link: '/Projects/tata',
		span: 'col-span-1 row-start-2 row-span-2',
		path: '/projects/Tata/tata-tea-cover.jpg',
		desc: `Gutenberg - PR Agency based of Delhi approached me to lend expertise for TATA TEA's brand new collaboration with Amazon Alexa on the "Eight O'Clock" project for their social media promotion `,
	},
	{
		id: 'w05',
		brand: 'HULU 2.0',
		cat: 'Dev',
		badge: 'bg-orange-600',
		link: 'https://hulu-2-dm.vercel.app/',
		span: 'col-span-1',
		path: '/projects/hulu2/hulu2-cover.png',
		desc: `This is a personal implementation of mine for HULU's user page, involving a list of categorically sorted Movies / TV Shows all SSR'ed and dynamically generated with responsiveness from the api of TMDB.`,
	},
	{
		id: 'w06',
		brand: 'WHATSAPP 2.0',
		cat: 'Dev',
		badge: 'bg-orange-600',
		link: '#projects',
		span: 'col-span-1',
		comingsoon: true,
		path: '/projects/whatsapp/whatsapp.jpg',
		desc: `I have always been intrigued by SaaS projects and one of them is messenger platform king "Whatsapp". Being born with an engineering mindset, here I disect Whatsapp and rebuild with Nextjs / Firebase`,
	},
];
