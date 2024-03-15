import HeroBanner from './components/HeroBanner';
import Layout from './components/Layout';

function App() {
	return (
		<Layout className="text-center text-4xl font-light">
			<div className="w-full flex items-center my-4 justify-center">
				<HeroBanner />
			</div>
		</Layout>
	);
}

export default App;
