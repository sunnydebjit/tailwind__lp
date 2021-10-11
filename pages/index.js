import Head from 'next/head';

import Placeholder from '../components/placeholder';

export default function Home() {
	return (
		<>
			<Head>
				<title>Tailwind Landing Page</title>
				<meta name='description' content='copyright Debjit Majumdar' />
				<meta http-equiv='Content-Type' content='text/html;charset=UTF-8' />
				<meta name='viewport' content='width=device-width, initial-scale=1.0' />
				<meta name='keywords' content='tailwind landing page' />
				<meta http-equiv='X-UA-Compatible' content='IE=7' />
				<link rel='icon' href='/dm-logo.svg' />
			</Head>
			<Placeholder />
		</>
	);
}
