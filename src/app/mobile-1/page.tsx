import Header from './_components/header';
import InfoCard from './_components/info-card';
import Tabs from './_components/tabs';
import Carousel from './_components/carousel';
import SavingType from './_components/saving-type';
import Footer from './_components/footer';

export default function () {
	return (
		<div className="min-h-svh relative overflow-x-hidden dark bg-[#161616] flex  h-full w-full">
			<div className="max-w-sm mx-auto text-white bg-[#050505]  w-full">
				<div className="px-3">
					<Header />
					<InfoCard />
					<Tabs />
					<Carousel />
					<SavingType />
				</div>
				<Footer />
			</div>
		</div>
	);
}
