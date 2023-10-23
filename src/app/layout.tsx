import CodeBracketIcon from '@/components/icons/CodeBracketIcon';
import SpanStyled from '@/components/icons/SpanStyled';
import type { Metadata } from 'next';
import { Roboto } from 'next/font/google';
import Image from 'next/image';
import Link from 'next/link';
import logex from '../../public/wwlogo.png';
import './globals.css';

const roboto = Roboto({ weight: '400', subsets: ['latin'] });

export const metadata: Metadata = {
	title: 'Weather Wonder',
	description: 'Realtime Weather app'
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
	return (
		<html lang='en'>
			<body className={roboto.className}>
				<header className='max-w-7xl mx-auto flex justify-between items-center px-4 py-8'>
					<div>
						<Link href='/' tabIndex={1} title='Home'>
							<Image src={logex} alt='WeatherWonder' width={100} priority />
						</Link>
					</div>
					<div className='flex items-center gap-4'>
						<a href=''>
							<SpanStyled icon={CodeBracketIcon} iconStyle='h-6' />
						</a>
					</div>
				</header>
				{children}
			</body>
		</html>
	);
}
