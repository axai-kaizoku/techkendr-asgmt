import { FaArrowRightLong } from 'react-icons/fa6';
import { FaYoutube } from 'react-icons/fa';
import { FaTwitter } from 'react-icons/fa';
import { FaInstagram } from 'react-icons/fa';
import { FaFacebook } from 'react-icons/fa';
import axios from 'axios';

export default function Footer() {
	const handleSubmit = async (e) => {
		e.preventDefault();
		try {
			const email = e.target[0].value;
			const res = await axios.post(process.env.SERVER_URL, {
				email: email,
			});
			if (res && res.data.success) {
				//toast

				e.target[0].value = '';
			} else {
				//toast
			}
		} catch (error) {
			console.log(error);
			//toast
		}
	};
	return (
		<footer className="h-fit flex justify-center items-center bg-regal-blue w-full text-white">
			<div className="w-[88%] flex-col  flex  my-8 ">
				<div className="flex justify-between max-sm:flex-col mt-14 mb-8">
					<div className="flex w-2/6 max-sm:w-full flex-col">
						<div className="text-4xl font-light items-center flex italic">
							<span className="font-extrabold not-italic">XYZ </span>
							&nbsp;INDUSTRIES
						</div>
						<p className="w-full text-sm my-4">
							XYZ Industries: Where real estate dreams
							<br />
							meet seamless transactions, transforming
							<br />
							aspirations into achievements.
						</p>
						<button className="rounded-full w-[168px] items-center justify-evenly px-2 py-4 my-6 flex border border-white">
							EXPLORE
							<FaArrowRightLong />
						</button>
					</div>
					<div className="flex gap-16 max-sm:flex-col">
						{/* footer links */}

						<div className="flex flex-col">
							<h5 className="font-semibold text-xl mb-4">Quick Links</h5>
							<ul className="flex text-sm flex-col gap-2">
								<li>About Us</li>
								<li>Blog</li>
								<li>Testimonials</li>
								<li>Terms and Conditions</li>
								<li>Privacy Policy</li>
								<li>Site Map</li>
							</ul>
						</div>
						{/* footer links */}

						{/* footer links */}
						<div className="flex flex-col">
							<h5 className="font-semibold text-xl mb-4">Customer Support</h5>
							<ul className="flex text-sm flex-col gap-2">
								<li>Feedback</li>
								<li>Report a Problem</li>
								<li>Request a Call Back</li>
							</ul>
						</div>
						{/* footer links */}
						{/* Subscribe mail */}
						<div className="flex flex-col">
							<h5 className="font-semibold text-xl mb-4">Subscribe Us</h5>
							<form
								className="flex flex-col"
								onSubmit={handleSubmit}>
								<p className="text-sm">Subscribe for our weekly newsletter</p>

								<input
									type="email"
									className="w-[300px] h-[42px] rounded-lg px-4 py-2 my-3 focus:outline-none text-gray-500"
									placeholder="Email Id"
								/>
								<button
									type="submit"
									className="w-[300px] h-[42px] rounded-lg bg-btn-blue focus:outline-none">
									Subscribe
								</button>
							</form>
						</div>
						{/* Subscribe mail */}
					</div>
				</div>
				<div className="flex flex-col my-6">
					{/* straight line */}

					<div className="w-full border border-nav-li my-6"></div>

					{/* Social Media */}
					<div className="flex justify-between items-center">
						<div className="flex gap-4 text-base text-nav-li">
							<FaYoutube className="cursor-pointer" />
							<FaTwitter className="cursor-pointer" />
							<FaInstagram className="cursor-pointer" />
							<FaFacebook className="cursor-pointer" />
						</div>
						<div className="flex gap-4 text-sm text-nav-li">
							<p>Terms | Privacy</p>
							<p>&copy;2024 XYZ</p>
						</div>
					</div>
				</div>
			</div>
		</footer>
	);
}