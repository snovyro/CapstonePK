import React from 'react';
import { NavLink } from 'react-router-dom';

import classes from './ProductItem.module.css';

const ProductItem = ({ title, url, to, body }) => {
	return (
		<div className={classes['card-container']}>
			<div className={classes['image-container']}>
				<img src={url} alt={url} />
			</div>
			<div className={classes['card-title']}>
				<h3>{title}</h3>
			</div>
			<div className={classes['card-body']}>
				<p>{body}</p>
				<NavLink
					activeClassName=""
					className={classes['button-body']}
					to={to}
				>
					<button className="bg-someting-green hover:bg-someting-dark-green text-white font-bold py-2 mt-8 px-6 rounded my-4">
						Selengkapnya
					</button>
				</NavLink>
			</div>
		</div>
	);
};

export default ProductItem;
