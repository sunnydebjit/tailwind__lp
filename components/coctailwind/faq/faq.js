import Faqcomp from './faqcomp';

function Faq() {
	return (
		<section className='bg-gray-800 py-32 text-gray-400'>
			<div className='container mx-auto px-6 lg:px-0'>
				<h2 className='mb-12 text-3xl text-center font-bold'>
					Frequently Asked Questions
				</h2>
				{/* Grid */}
				<div className='grid grid-cols-1 lg:grid-cols-2 gap-8'>
					{faqData.map((item) => {
						return <Faqcomp key={item.id} {...item} />;
					})}
				</div>
			</div>
		</section>
	);
}

export default Faq;

const faqData = [
	{
		id: 1,
		ques: 'Do I need to know CSS?',
		ans: `This course is aimed at people that have some CSS knowledge and want to learn Tailwind. I do talk through CSS concepts and why we're using certain classes all throughout the course so you don't need to be a CSS expert.`,
	},
	{
		id: 2,
		ques: 'Is there course support?',
		ans: `You can email me directly at any time and we also have a Discord communitywhere you gain exclusive channel access.`,
	},
	{
		id: 3,
		ques: 'Can I use the code in my own projects?',
		ans: `Definitely! All of the code in this course is yours to use in your sites, apps, projects, whatever.`,
	},
	{
		id: 4,
		ques: `What if I don't like it?`,
		ans: `I offer a lifetime refund policy. If you ever feel like you didn't gain value from this course, then you can request a refund from your course dashboard (totally automated process, no questions asked).`,
	},
	{
		id: 5,
		ques: 'How do I login and view the course?',
		ans: `You can login at learn.better.dev. Use the login button in the top right.`,
	},
	{
		id: 6,
		ques: 'Is there a student discount?',
		ans: `Yup! 50% off! Email me at chris@better.dev with your student id and I'll send you a discount code.`,
	},
	{
		id: 7,
		ques: 'Is there purchase parity for my country?',
		ans: `Yup! Email me at chris@better.dev and I'll send you a purchase power parity code.`,
	},
	{
		id: 8,
		ques: 'Is there an affiliate program?',
		ans: `Yup! You get 50% of every sale that you bring in. You can sign up for a course and turn on affiliate mode from your dashboard at learn.better.dev. Or you can email me at chris@better.dev.`,
	},
];
