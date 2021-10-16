function Faqcomp({ ques, ans }) {
	return (
		<div className=' border-2 border-gray-500 rounded '>
			<h1 className=' p-3  border-b-2 border-gray-500 text-gray-200 font-bold text-xl'>
				{ques}
			</h1>
			<p className='p-3'>{ans}</p>
		</div>
	);
}

export default Faqcomp;
