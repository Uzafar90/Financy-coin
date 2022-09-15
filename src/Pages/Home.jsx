import React from 'react';
import CoinLists from '../Containers/CoinLists';
import Trending from '../Containers/Trending';

const Home = ({ coins }) => {
	return (
		<div className="bg-main_bg_color font-poppins flex flex-col min-h-screen">
			<Trending coins={coins} />
			<CoinLists coins={coins} />
		</div>
	);
};

export default Home;
