import React from 'react';
import Something from '@assets/Something.png';

import Carousel from './Carousel/Carousel';
import classes from './Header.module.css';

const Header = () => {
	return (
		<>
			<div className={classes.header}>
				<img
					id="Logo"
					alt="SOMETING IS EVERYTHING"
					style={{
						display: 'block',
						height: '60px',
						maxWidth: '310px',
						paddingLeft: '2rem',
						justifyContent: 'flex-start',
					}}
					src={Something}
					className="float-left"
				></img>
				<nav className={classes.navbar}>
					<ul className={classes.navbar_list}>
						<li className={classes.navbar_item}>
							<a href="/">HOME</a>
						</li>
						<li className={classes.navbar_item}>
							<a href="/about">ABOUT</a>
						</li>
					</ul>
				</nav>
			</div>
			<Carousel />
		</>
	);
};

export default Header;
