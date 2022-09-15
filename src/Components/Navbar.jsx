import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../Assets/Logo.png';

const Navbar = () => {
	return (
		<div className="bg-nav_foot_color h-auto py-3 lg:py-6">
			<Link to={'/'}>
				<div className="w-[90%] mx-auto">
					<img className="w-40 md:w-[200px]" src={logo} alt="" />
				</div>
			</Link>
		</div>
	);
};

export default Navbar;
