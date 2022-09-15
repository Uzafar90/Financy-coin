import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './Components/Navbar';
import Footer from './Components/Footer';
import Home from './Pages/Home';
import AboutCoin from './Pages/AboutCoin';
import { useState } from 'react';
import { useEffect } from 'react';
import axios from 'axios';
import PageScroll from './Components/PageScroll';

function App() {
	const [coins, setCoins] = useState([]);

	const url =
		'https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=true';

	useEffect(() => {
		axios.get(url).then((response) => {
			setCoins(response.data);
			// console.log(response.data);
		});
	}, [url]);

	return (
		<>
			<Router>
				<PageScroll />
				<Navbar />
				<Routes>
					<Route path="/" element={<Home coins={coins} />} />
					<Route path="/coin/:coinId" element={<AboutCoin />}>
						<Route path=":coinId" />
					</Route>
				</Routes>
				<Footer />
			</Router>
		</>
	);
}

export default App;
