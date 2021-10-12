import Head from 'next/head';
import Placeholder from '../components/placeholder';
import { useRouter } from 'next/router';
import Main from '../components/coctailwind/main';

export default function Home() {
	const router = useRouter();

	return (
		<>
			<Head>
				<title>Tailwind Landing Page</title>
				<meta name='description' content='copyright Debjit Majumdar' />
				<meta name='viewport' content='width=device-width, initial-scale=1.0' />
				<meta name='keywords' content='tailwind landing page' />
				<link rel='icon' href='/dm-logo.svg' />
			</Head>
			<Main />
			{console.log(router.query.id)}
		</>
	);
}
