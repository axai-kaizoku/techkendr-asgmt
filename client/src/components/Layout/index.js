import Footer from '../Footer';
import Navbar from '../Navbar';

export default function Layout({ children }) {
	return (
		<>
			<Navbar />
			<main className="bg-white min-h-screen">{children}</main>
			<Footer />
		</>
	);
}
