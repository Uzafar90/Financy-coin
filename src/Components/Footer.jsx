import React from 'react';
import logo from '../Assets/Logo.png';
import twitlogo from '../Assets/twitterIcon.png';
import gitlogo from '../Assets/githubIcon.png';
import linklogo from '../Assets/linkedinIcon.png';
import { Link } from 'react-router-dom';

const Footer = () => {
	return (
		<div className="bg-second_bg_color py-6 px-10 lg:px-32">
			<div className="flex flex-col gap-10 md:flex-row justify-between items-center">
				<Link to={'/'}>
					<div className="flex flex-col ">
						<img className="w-40" src={logo} alt="" />
					</div>
				</Link>
				<div className="flex flex-col gap-2">
					<div className="flex justify-around">
						<a
							href="https://twitter.com/iamutba"
							target="_blank"
							rel="noopener noreferrer"
						>
							<img
								src={twitlogo}
								alt=""
								className="w-8 hover:opacity-60 transition-all duration-200"
							/>
						</a>
						<a
							href="https://github.com/Uzafar90"
							target="_blank"
							rel="noopener noreferrer"
						>
							<img
								src={gitlogo}
								alt=""
								className="w-8 hover:opacity-60 transition-all duration-200"
							/>
						</a>
						<a
							href="https://www.linkedin.com/in/utba-zafar-397268161/"
							target="_blank"
							rel="noopener noreferrer"
						>
							<img
								src={linklogo}
								alt=""
								className="w-8 hover:opacity-60 transition-all duration-200"
							/>
						</a>
					</div>
					<div>
						<p className="text-second_txt_color">
							Design & Developed by Utba Zafar
						</p>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Footer;
