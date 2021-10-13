import { useState, useEffect } from 'react';
import { SunIcon, MoonIcon } from '@heroicons/react/solid';
import { useTheme } from 'next-themes';

function Darkbutton() {
	const [mounted, setMounted] = useState(false);

	useEffect(() => {
		setMounted(true);
	}, []);
	const { systemTheme, theme, setTheme } = useTheme();
	const renderThemeChanger = () => {
		const currentTheme = theme === 'system' ? systemTheme : theme;
		if (!mounted) return <></>;
		if (currentTheme === 'dark') {
			return (
				<SunIcon
					className='w-6 h-6 flex-shrink-0 text-gray-50'
					role='button'
					onClick={() => setTheme('light')}
				/>
			);
		} else {
			return (
				<MoonIcon
					className='w-6 h-6 flex-shrink-0 text-gray-50'
					role='button'
					onClick={() => setTheme('dark')}
				/>
			);
		}
	};

	return (
		<div className=' flex items-center p-1 bg-gray-900 hover:bg-gray-700 rounded-full border-4 hover:border-purple-300 border-purple-400 transition duration-500 dark:border-purple-300'>
			{renderThemeChanger()}
		</div>
	);
}

export default Darkbutton;
