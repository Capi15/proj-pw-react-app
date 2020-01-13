/**
 * Module dependencies.
 */

import "bootstrap/dist/css/bootstrap.css";
import React from "react";
import ReactDOM from "react-dom";
import CryptoList from "./Components/CryptoList";
import CryptoDetail from "./Components/CryptoDetail";
import rp from "request-promise";

/**
 * App.
 */

class App extends React.Component {
	/**
	 * State.
	 */

	state = {
		data: [],
		coin: {},
		coinName: ""
	};

	getCoin(id) {
		rp({
			method: "GET",
			uri: "https://api.coingecko.com/api/v3/simple/price",
			qs: {
				ids: id,
				vs_currencies: "eur,eth,btc"
			},
			json: true
		}).then(response => {
			this.setState({ coin: response[id], coinName: id });
		});
	}

	/**
	 * componentDidMount.
	 */

	componentDidMount() {
		rp({
			method: "GET",
			uri: "https://api.coingecko.com/api/v3/coins/list",
			json: true
		}).then(response => {
			this.setState({ data: response.slice(0, 3) });
		});
	}
	render() {
		return (
			<div className={"container"}>
				<div className={"row row-cols-12"}>
					<div className={"col-8"}>
						<CryptoList
							getCoin={id => this.getCoin(id)}
							coins={this.state.data}
						/>
					</div>
					<div className={"col-4"}>
						<CryptoDetail
							eur={this.state.coin.eur}
							eth={this.state.coin.eth}
							btc={this.state.coin.btc}
							name={this.state.coinName}
						/>
					</div>
				</div>
			</div>
		);
	}
}

export default App;
