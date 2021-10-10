import Head from 'next/head';
import Placeholder from '../components/placeholder';

export default function Home() {
	return (
		<>
			<Head>
				<title>Tailwind Landing Page</title>
				<meta name='description' content='copyright Debjit Majumdar' />
				<link rel='icon' href='/dm-logo.svg' />
			</Head>
			<Placeholder />
		</>
	);
}
