import CustomBtn from '../CustomBtn';
import './styles.css';
export default function BottomBanner() {
	return (
		<div className="relative w-full my-10 mt-14">
			<img
				src="/og-banner-back.png"
				alt="btm"
				className="w-full"
			/>
			<div className=" absolute inset-0 z-10  flex flex-col  items-center">
				<h2 className="font-extrabold text-7xl z-2 py-10 text-regal-blue text-center">
					YOUR <span className="italic font-semibold">TRUSTED</span> PARTNER IN
					<br />
					THE FUTURE
					<span className="italic font-semibold">OF HOUSING</span>
				</h2>
				<p className="font-normal text-xl text-center pb-10">
					Our partnerships with governments and local banks ensure that our
					housing prices are
					<br /> affordable enough for our target market.
				</p>
				<CustomBtn title="Join Our Community Today" />
			</div>
		</div>
	);
}
