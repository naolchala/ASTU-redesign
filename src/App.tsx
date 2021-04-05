import React, { FC, useEffect, useState } from "react";
import { MdChevronRight, MdMenu } from "react-icons/md";
import { Route, Switch } from "react-router-dom";
import "./App.scss";
import { Footer } from "./components/Footer";
import { Menu } from "./components/Menu";
import { Home } from "./pages/Home";

const App: FC = () => {
	const [menu, setMenu] = useState(false);
	const [darkHeader, setDarkHeader] = useState(false);

	useEffect(() => {
		window.onscroll = () => {
			let top = window.scrollY;

			if (top > 63) {
				setDarkHeader(true);
			} else {
				setDarkHeader(false);
			}
		};
	});
	return (
		<div className="App">
			<div className={`header ${darkHeader || menu ? "dark" : ""}`}>
				<span className="title">ASTU</span>
				<Menu open={menu} />
				<button className="menu-btn" onClick={() => setMenu(!menu)}>
					<MdMenu />
				</button>
			</div>

			<Switch>
				<Route path="/" exact component={Home}></Route>
			</Switch>
			<Footer />
		</div>
	);
};

export { App };
