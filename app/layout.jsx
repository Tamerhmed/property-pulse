import { Inter } from 'next/font/google';
import Navbar from '@/components/Navbar';
import './globals.css';
import Footer from '@/components/Footer';
import AuthProvider from '@/components/AuthProvider';


const inter = Inter({ subsets: ['latin'] });

export const metadata = {
	title: 'PropertyPulse | Find The Perfect Rental',
	description: 'Find your dream rental property',
	keywords: 'rental, find rentals, find properties',
};

export default function RootLayout({ children }) {
	return (
		<AuthProvider>
			<html lang='en'>
				<body className={inter.className}>
					<Navbar />
					<main>{children}</main>
					<Footer />
				</body>
			</html>
		</AuthProvider>
	);
}
