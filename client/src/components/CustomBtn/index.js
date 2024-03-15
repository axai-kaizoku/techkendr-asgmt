import { FaArrowRightLong } from 'react-icons/fa6';

export default function CustomBtn({ title }) {
	return (
		<button className="p-5 text-xl leading-[22px] font-normal flex flex-row justify-between  m-2 rounded-full bg-btn-blue text-white items-center gap-6">
			{title}
			<FaArrowRightLong className="mt-1 text-base" />
		</button>
	);
}
