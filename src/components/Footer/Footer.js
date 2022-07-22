import React from 'react';
import Something from '@assets/Something.png';
import './footer.css';

const Footer = () => {
	return (
		<footer className="footer">
			<div className="footer-address">
				<h1 className="footer-text">
					Ayo Peduli Kesehatan Anak <br /> Mulai Dari Sekarang !
				</h1>
				<h2>Contact</h2>

				<address>
					<a
						className="footer-btn"
						href="mailto:selvia@gmail.com"
					>
						Email Us
					</a>
				</address>

				<div className="footer-nav">
					<img className="footer-logo" alt="" src={Something} />
				</div>
			</div>
			<div className="legal">
				<p>&copy; 2022 Someting. All rights reserved.</p>

				<div className="legal-links">
					<span>
						Made with <span className="heart">♥</span>{' '}
						remotely from Anywhere - FE-HE1
					</span>
				</div>
			</div>
		</footer>
	);
};

export default Footer;
