import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Swiper, SwiperSlide } from 'swiper/react';

const Trending = () => {
	const [trending, setTrending] = useState([]);

	const url = 'https://api.coingecko.com/api/v3/search/trending';

	useEffect(() => {
		axios.get(url).then((response) => {
			setTrending(response.data.coins);
			console.log(response.data.coins);
		});
	}, []);
	return (
		<div className="py-10 mx-auto w-[95%] md:w-[93%] lg:w-[90%] lg:flex-row text-center lg:text-left ">
			<div className="w-[95%] md:w-[85%] lg:w-[70%] mx-auto">
				<h1 className="text-2xl lg:text-3xl font-bold text-main_txt_color my-8">
					🔥 Trending Coins
				</h1>
				<div className="flex flex-wrap justify-center gap-3">
					{trending.map((coin, index) => (
						<div
							key={index}
							className="flex justify-center items-center shadow-2xl cursor-pointer w-[20rem] h-14 hover:scale-105 ease-in-out duration-300 rounded-full bg-second_bg_color"
						>
							<div className="flex gap-2 items-center">
								<img
									className="w-6 rounded-full"
									src={coin.item.small}
									alt="/"
								/>

								<p className="font-semibold-s text-[14px] md:text-base text-main_txt_color">
									{coin.item.name}
								</p>
								<p className="text-[8px] text-second_txt_color">
									{coin.item.symbol}
								</p>
							</div>
						</div>
					))}
				</div>
			</div>
		</div>
	);
};

export default Trending;
