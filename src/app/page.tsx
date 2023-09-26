import SearchLocation from '@/components/search/SearchLocation';

const Home = () => {
	return (
		<main className='max-w-7xl mx-auto'>
			<h1 className='text-3xl'>WeatherWonder</h1>
			<SearchLocation />
		</main>
	);
};

export default Home;
