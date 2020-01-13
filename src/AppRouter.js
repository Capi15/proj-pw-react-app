import React from "react";
import { Switch, Route, BrowserRouter as Router } from "react-router-dom";
import { HomePage } from "./views/index";
import { LoginPage } from "./views/login";
import { RegisterPage } from "./views/createAccount";
import { WalletPage } from "./views/wallet";
import { NavBar } from "./partials/navbar";

export function AppRouter() {
	return (
		<Router>
			<NavBar />
			<div className="mt-5">
				<Switch>
					<Route exact={true} path="/" component={HomeScreen}></Route>
					<Route
						path="/login"
						component={requiresGuest(LoginScreen)}
					/>
					<Route
						path="/register"
						component={requiresGuest(RegisterScreen)}
					/>
					<Route
						path="/wallet"
						component={requiresAuth(WalletScreen)}
					/>
					<Route path="*">
						<p>not found</p>
					</Route>
				</Switch>
			</div>
		</Router>
	);
}
