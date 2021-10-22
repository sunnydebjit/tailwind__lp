import React, { useState } from 'react';
import StyleElements from '../styleElements';
import Linkcomp from './linkcomp';
//Toast
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.min.css';

function Footer() {
	const notifySuccess = () =>
		toast.success('📧 Message Sent!', {
			theme: 'dark',
			position: 'top-right',
			autoClose: 5000,
			hideProgressBar: false,
			closeOnClick: true,
			pauseOnHover: true,
			draggable: true,
			progress: undefined,
		});
	const notifyError = () =>
		toast.error('Sorry, your message was not sent', {
			theme: 'dark',
			position: 'top-right',
			autoClose: 5000,
			hideProgressBar: false,
			closeOnClick: true,
			pauseOnHover: true,
			draggable: true,
			progress: undefined,
		});
	async function handleOnSubmit(e) {
		e.preventDefault();
		const formData = {};
		Array.from(e.currentTarget.elements).forEach((field) => {
			if (!field.name) {
				return;
			}
			formData[field.name] = field.value;
		});

		// const sendToAPI = await fetch('api/mail', {
		// 	method: 'post',
		// 	body: JSON.stringify(formData),
		// });

		// const response = await toast.promise(
		// 	fetch('api/mail', {
		// 		method: 'post',
		// 		body: JSON.stringify(formData),
		// 	}),
		// 	{
		// 		pending: 'Sending message',
		// 		success: 'Message is sent 👌',
		// 		error: 'Please try again 🤯',
		// 	}
		// );
		await fetch('api/mail', {
			method: 'post',
			body: JSON.stringify(formData),
		})
			.then((res) => {
				console.log(res);
				if (res.status == 202) {
					notifySuccess();
					console.log(
						`Success, Code: ${res.status} Status Message: ${res.statusText}`
					);
				} else {
					notifyError();
					console.log(
						`Error, Code ${res.status} Status Message: ${res.statusText}`
					);
				}
			})
			.catch((err) => console.log(err));
	}
	return (
		<footer
			id='footer'
			className='overflow-hidden relative pt-24 bg-gradient-to-br dark:from-black from-white dark:to-gray-900 to-gray-300 text-gray-600 dark:text-gray-100'>
			<StyleElements>
				<ToastContainer
					position='top-right'
					autoClose={5000}
					hideProgressBar={false}
					newestOnTop={false}
					closeOnClick
					rtl={false}
					pauseOnFocusLoss
					draggable
					pauseOnHover
				/>
				{/* Blur ELement */}
				{/* <div className=' dark:bg-gray-800 opacity-100 absolute top-0 inset-x-0 h-full blur-3xl'></div> */}
				{/* Blur Ends */}
				<div className='relative container mx-auto px-10'>
					{/* Top Footer */}
					<div className='lg:flex justify-between space-y-12 lg:space-y-0'>
						{/* Newsletter */}
						<div className='flex flex-col justify-center'>
							<h4 className='mb-4 font-bold text-xl sm:text-2xl md:text-3xl  lg:text-5xl text-transparent bg-clip-text bg-gradient-to-tr from-teal-400 to-purple-500'>
								Let's start a conversation
							</h4>
							<form
								method='post'
								className='flex flex-col space-y-2'
								onSubmit={handleOnSubmit}>
								<input
									type='text'
									name='name'
									id='name'
									required
									className='flex-grow p-3 rounded-l outline-none border-2 fill-current opacity-40 focus:opacity-70  border-gray-400 focus:border-purple-500 placeholder-gray-500 dark:placeholder-gray-100'
									placeholder='Enter Your Name'
								/>
								<input
									type='email'
									name='email'
									id='email'
									required
									className='flex-grow p-3 rounded-l outline-none border-2 fill-current opacity-40 focus:opacity-70  border-gray-400 focus:border-purple-500 placeholder-gray-500 dark:placeholder-gray-100'
									placeholder='Enter Your Email'
								/>
								<div className='flex'>
									<input
										type='text'
										name='message'
										id='message'
										required
										className='flex-grow p-3 rounded-l outline-none border-2 fill-current opacity-40 focus:opacity-70 border-r-0 border-gray-400 focus:border-purple-500 placeholder-gray-500 dark:placeholder-gray-100'
										placeholder='Send me a message'
									/>
									<button
										type='submit'
										className='p-3 bg-purple-500 text-purple-100 rounded-r'>
										Connect
									</button>
								</div>
							</form>
						</div>
						{/* Links */}
						<div className='md:flex md:justify-center md:items-center md:space-x-8 text-right space-y-8 md:space-y-0'>
							{linkCompData.map(({ ...item }) => {
								return <Linkcomp key={item.id} {...item} />;
							})}
						</div>
					</div>
					{/* Bottom Footer */}
					<div className='pt-4 my-16 md:flex justify-between border-t border-gray-200 text-gray-600 dark:text-gray-200 text-sm text-center md:text-left space-y-4 md:space-y-0'>
						{/* CopyRight */}
						<div>Copyright &copy; 2021-4055</div>
						{/* Links */}
						<div className='space-x-4'>
							<a href='#'>Discord</a>
							<a href='#'>Twitter</a>
							<a href='#'>Linkedin</a>
						</div>
					</div>
				</div>
				{/* End Label */}
				<div className='relative bg-black mt-28 text-gray-100 p-5'>
					<h3 className='font-base text-center'>
						A <span className='font-bold'>Debjit Majumdar</span> Initiative |
						View this site's LightHouse Score
					</h3>
				</div>
			</StyleElements>
		</footer>
	);
}

export default Footer;

const linkCompData = [
	{
		id: 0,
		section: 'Company',
		links: ['About', 'Blog', 'Career'],
	},
	// {
	// 	id: 1,
	// 	section: 'Product',
	// 	links: ['Pricing', 'Documentation', 'Guides'],
	// },
	{
		id: 2,
		section: 'Legal',
		links: ['Terms', 'Privacy', 'Rules'],
	},
];
