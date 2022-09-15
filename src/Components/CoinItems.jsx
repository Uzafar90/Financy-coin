import React from 'react';
import { Link } from 'react-router-dom';
import { Sparklines, SparklinesLine } from 'react-sparklines';
const CoinItems = ({ coin }) => {
	return (
		<tr className="h-14 md:h-20 overflow-hidden shadow-xl">
			<td className="text-main_txt_color text-[14px] md:text-base">
				{coin.market_cap_rank}
			</td>

			<td>
				<Link to={`/coin/${coin.id}`}>
					<div className="flex gap-6 md:gap-3 items-center">
						<img className="w-6 mr-2" src={coin.image} alt={coin.id} />
						<h3 className="table-cell text-main_txt_color font-bold text-[14px] md:text-base hover:opacity-70 duration-100">
							{coin.name}
						</h3>
						<p className=" -ml-4 md:-ml-0 text-[10px] md:text-[10px] text-second_txt_color uppercase">
							{coin.symbol}
						</p>
					</div>
				</Link>
			</td>
			<td className="hidden md:table-cell text-second_txt_color">
				${coin.current_price.toLocaleString()}
			</td>
			<td className="hidden md:table-cell">
				{coin.price_change_percentage_24h > 0 ? (
					<p className="text-pos_txt_color">
						{coin.price_change_percentage_24h.toFixed(2)}%
					</p>
				) : (
					<p className="text-neg_txt_color">
						{coin.price_change_percentage_24h.toFixed(2)}%
					</p>
				)}
			</td>
			<td className=" hidden lg:table-cell text-second_txt_color">
				${coin.total_volume.toLocaleString()}
			</td>
			<td className=" hidden lg:table-cell text-second_txt_color">
				${coin.market_cap.toLocaleString()}
			</td>
			<td className="pl-4 lg:pl-0 pr-4">
				<Sparklines data={coin.sparkline_in_7d.price}>
					<SparklinesLine color="orange" />
				</Sparklines>
			</td>
		</tr>
	);
};

export default CoinItems;
