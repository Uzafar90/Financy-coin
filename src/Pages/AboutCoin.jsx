import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Sparklines, SparklinesLine } from 'react-sparklines';
import DOMPurify from 'dompurify';
import { useParams } from 'react-router-dom';

const AboutCoin = () => {
	const [coin, setCoin] = useState({});
	const params = useParams();

	const url = `https://api.coingecko.com/api/v3/coins/${params.coinId}?localization=false&sparkline=true`;

	useEffect(() => {
		axios.get(url).then((response) => {
			setCoin(response.data);
			console.log(response.data);
		});
	}, [url]);

	return (
		<div className="pt-10 bg-main_bg_color font-poppins flex flex-col min-h-screen">
			<div className="sm:w-[90%] md:w-[80%] lg:w-[1420px] mx-auto">
				<div className="flex justify-center lg:justify-start ">
					<div className="flex justify-center items-center gap-6">
						<img className="w-20" src={coin.image?.large} alt="" />
						<div>
							<p className="text-xl text-second_txt_color">
								Rank # {coin?.market_cap_rank}
							</p>
							<div className="flex justify-center items-center gap-3">
								<h1 className="text-5xl font-bold text-main_txt_color">
									{coin?.name}
								</h1>
								<p className="text-2xl uppercase text-second_txt_color">
									{coin?.symbol}
								</p>
							</div>
						</div>
					</div>
				</div>
				<div className="pt-20 flex flex-col lg:flex-row lg:justify-between">
					<div className="flex flex-col md:flex-row items-center gap-20 justify-between p-11 md:gap-60 lg:p-10 bg-dark_green md:rounded-2xl large_box_shadow">
						<div className="flex flex-col gap-10 text-left">
							<div>
								<p className="text-base text-center md:text-left text-main_txt_color">
									Market Cap
								</p>
								<p className="text-2xl text-second_txt_color">
									${coin.market_data?.market_cap.usd.toLocaleString()}
								</p>
							</div>
							<div>
								<p className="text-base text-center md:text-left text-main_txt_color">
									Total Volume
								</p>
								<p className="text-2xl text-second_txt_color">
									${coin.market_data?.total_volume.usd.toLocaleString()}
								</p>
							</div>
						</div>
						<div className="flex md:flex-col gap-10 text-right">
							<div>
								<p className="text-base text-main_txt_color">High 24hr</p>
								<p className="text-2xl text-pos_txt_color">
									${coin.market_data?.high_24h.usd.toLocaleString()}
								</p>
							</div>
							<div>
								<p className="text-base text-main_txt_color">Low 24hr</p>
								<p className="text-2xl text-head_txt_color">
									${coin.market_data?.low_24h.usd.toLocaleString()}
								</p>
							</div>
						</div>
					</div>
					<div className="flex pt-20 gap-10 md:gap-20 w-[95%] mx-auto justify-center items-center lg:items-end lg:flex-col lg:pt-0">
						<div className="text-center md:text-right">
							<p className="text-sm md:text-xl text-main_txt_color">
								{coin?.name} Price
							</p>
							<p className="text-2xl md:text-4xl text-second_txt_color">
								${coin.market_data?.current_price.usd.toLocaleString()}
							</p>
						</div>
						<div className="w-[700px] border-orange-400 border-t-0 border-[0.5px]  ">
							<Sparklines data={coin.market_data?.sparkline_7d.price}>
								<SparklinesLine color="orange" />
							</Sparklines>
						</div>
					</div>
				</div>
				<div className="pt-20">
					<div className="bg-dark_gray p-6 md:rounded-2xl large_box_shadow">
						<h1 className="text-2xl lg:py-6 text-center font-bold text-second_txt_color">
							Price Changes
						</h1>

						<div className="grid grid-cols-3 py-20 gap-5  md:flex md:gap-0 justify-around md:py-6">
							<div className="flex flex-col items-center gap-2">
								<p className="text-base md:text-lg font-semibold text-head_txt_color">
									1d
								</p>
								<p className="text-xl md:text-2xl font-semibold">
									{coin.market_data?.price_change_percentage_24h > 0 ? (
										<p className="text-pos_txt_color">
											{coin.market_data?.price_change_percentage_24h.toFixed(2)}
											%
										</p>
									) : (
										<p className="text-neg_txt_color">
											{coin.market_data?.price_change_percentage_24h.toFixed(2)}
											%
										</p>
									)}
								</p>
							</div>
							<div className="flex flex-col items-center gap-2">
								<p className="text-base md:text-lg font-semibold text-head_txt_color">
									7d
								</p>
								<p className="text-xl md:text-2xl font-semibold">
									{coin.market_data?.price_change_percentage_7d > 0 ? (
										<p className="text-pos_txt_color">
											{coin.market_data?.price_change_percentage_7d.toFixed(2)}%
										</p>
									) : (
										<p className="text-neg_txt_color">
											{coin.market_data?.price_change_percentage_7d.toFixed(2)}%
										</p>
									)}
								</p>
							</div>
							<div className="flex flex-col items-center gap-2">
								<p className="text-base md:text-lg font-semibold text-head_txt_color">
									30d
								</p>
								<p className="text-xl md:text-2xl font-semibold">
									{coin.market_data?.price_change_percentage_30d > 0 ? (
										<p className="text-pos_txt_color">
											{coin.market_data?.price_change_percentage_30d.toFixed(2)}
											%
										</p>
									) : (
										<p className="text-neg_txt_color">
											{coin.market_data?.price_change_percentage_30d.toFixed(2)}
											%
										</p>
									)}
								</p>
							</div>
							<div className="flex flex-col items-center gap-2">
								<p className="text-base md:text-lg font-semibold text-head_txt_color">
									6m
								</p>
								<p className="text-xl md:text-2xl font-semibold">
									{coin.market_data?.price_change_percentage_200d > 0 ? (
										<p className="text-pos_txt_color">
											{coin.market_data?.price_change_percentage_200d.toFixed(
												2
											)}
											%
										</p>
									) : (
										<p className="text-neg_txt_color">
											{coin.market_data?.price_change_percentage_200d.toFixed(
												2
											)}
											%
										</p>
									)}
								</p>
							</div>
							<div className="flex flex-col items-center gap-2">
								<p className="text-base md:text-lg font-semibold text-head_txt_color">
									1y
								</p>
								<p className="text-xl md:text-2xl font-semibold">
									{coin.market_data?.price_change_percentage_1y > 0 ? (
										<p className="text-pos_txt_color">
											{coin.market_data?.price_change_percentage_1y.toFixed(2)}%
										</p>
									) : (
										<p className="text-neg_txt_color">
											{coin.market_data?.price_change_percentage_1y.toFixed(2)}%
										</p>
									)}
								</p>
							</div>
						</div>
					</div>
				</div>
				<div className="py-20 p-6 flex flex-col gap-5">
					<div className="flex text-2xl font-bold gap-2 text-main_txt_color">
						<p>About</p>
						<p>{coin?.name}</p>
					</div>
					<p
						className="text-base md:text-lg text-gray-400"
						dangerouslySetInnerHTML={{
							__html: DOMPurify.sanitize(
								coin.description ? coin.description.en : ''
							),
						}}
					></p>
				</div>
			</div>
		</div>
	);
};

export default AboutCoin;
