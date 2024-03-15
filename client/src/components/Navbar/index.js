export default function Navbar() {
	return (
		<header className="bg-white w-full">
			<nav className="flex flex-row max-sm:flex-col max-sm:px-8 px-14 py-12 justify-between ">
				<div className="text-4xl font-light items-center flex italic">
					<span className="font-extrabold not-italic">XYZ </span>
					&nbsp;INDUSTRIES
				</div>

				<ul className="rounded-full flex bg-regal-blue items-center justify-between text-nav-li text-[16px] leading-[18px] font-normal w-2/5 max-sm:w-full max-sm:text-sm max-sm:flex-wrap max-sm:py-4 max-sm:px-3 max-sm:my-4 px-6">
					<li>Home</li>
					<li>About Us</li>
					<li>Property</li>
					<li>Services</li>
					<li>Contact</li>
				</ul>

				<div className="flex gap-6 items-center">
					<button className="text-xl leading-5 text-regal-blue p-4 border border-regal-blue bg-white rounded-full">
						Sign Up
					</button>
					<button className="text-xl leading-5  text-white p-4 border border-regal-blue bg-btn-blue rounded-full">
						Sign In
					</button>
				</div>
			</nav>
		</header>
	);
}
