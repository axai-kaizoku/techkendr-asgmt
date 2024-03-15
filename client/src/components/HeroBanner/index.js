import CustomBtn from '../CustomBtn';

export default function HeroBanner() {
	return (
		<div className="w-4/5 flex flex-col items-center justify-center gap-20">
			<div>
				<h1 className="text-7xl font-extrabold text-center whitespace-nowrap leading-[80px]">
					CONNECTING DREAMS TO REALITY
					<br />
					<span className="italic font-bold text-cyan-600">YOUR PREMIER</span>
					<br />
					REAL ESTATE MARKETPLACE
				</h1>
				<p className="text-center text-regal-blue text-lg mt-6">
					Where every search ends with a home
				</p>
			</div>
			<div className="flex w-[56%] justify-between items-center">
				<CustomBtn title="Find Your Home" />
				<CustomBtn title="List Your Property" />
			</div>
		</div>
	);
}
