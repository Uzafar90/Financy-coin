import React, { useState } from 'react';
import CoinItems from '../Components/CoinItems';

const CoinLists = ({ coins }) => {
	const [coinSearch, setCoinSearch] = useState('');

	return (
		<div className=" mx-auto w-[92%] md:w-[93%] lg:w-[90%]">
			<div className="flex flex-col gap-3 lg:flex-row justify-between pt-4 pb-6 text-center lg:text-left w-[70%] mx-auto ">
				<div>
					<h1 className="text-2xl lg:text-3xl font-bold text-main_txt_color my-2">
						💰 Cryptocurrency Coins
					</h1>
				</div>
				<form className="search_box_shadow bg-second_bg_color flex justify-center w-full mx-auto lg:mx-0 rounded-full items-center lg:w-60 h-8 lg:h-10">
					<input
						className="text-center lg:text-left lg:text-base font-medium focus:outline-none focus:text-gray-500 bg-second_bg_color"
						onChange={(e) => setCoinSearch(e.target.value)}
						type="text"
						placeholder="Search Coins"
					/>
				</form>
			</div>

			<table className="w-[95%] md:w-[88%] lg:w-[70%] pb-24 mx-auto border-separate border-spacing-y-6 text-center">
				<thead>
					<tr className="text-head_txt_color border-b text-sm md:text-base">
						<th className="px-4">#</th>
						<th className="text-left ">Name</th>
						<th className="hidden md:table-cell">Price</th>
						<th className="hidden md:table-cell">24hr</th>
						<th className="hidden lg:table-cell">24hr Vol.</th>
						<th className="hidden lg:table-cell">Mkt Cap</th>
						<th className="w-32 md:w-52">{'<-'}7d</th>
					</tr>
				</thead>
				<tbody className="bg-second_bg_color">
					{coins
						.filter((value) => {
							if (coinSearch === '') {
								return value;
							} else if (
								value.name.toLowerCase().includes(coinSearch.toLowerCase())
							) {
								return value;
							}
						})
						.map((coin) => (
							<CoinItems key={coin.id} coin={coin} />
						))}
				</tbody>
			</table>
		</div>
	);
};

export default CoinLists;
