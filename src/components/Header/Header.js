import React, { PureComponent } from 'react';
import { Link } from "react-router";

import TopBar from '../TopBar/TopBar';
import me from "../../assets/me.jpg";

import './style.css';

class Header extends PureComponent {
	render() {
		return (<header className="header">
			<TopBar />

			<div className="banner">
				<div className="banner-title">
					<h1 className="banner-title-big">
						Yuliya Ovchinnikova
					</h1>
					<p className="banner-title-small">
						Full-Stack JavaScript Developer
					</p>
				</div>
				{/*<div className="banner-photo">*/}
				{/*	<img*/}
				{/*		src={me}*/}
				{/*		align="left"*/}
				{/*		alt="Yuliya Ovchinnikova"*/}
				{/*	/>*/}
				{/*</div>*/}
			</div>
		</header>);
	}
}

export default Header;
