import React, { useState, useEffect } from 'react';
import classes from './ProductsList.module.css';
import ProductItem from './ProductItem';
import axios from 'axios';
import mockapi from 'src/lib/mockapi';

const ProductList = () => {
	const [products, setProducts] = useState([]);

	useEffect(() => {
		const getProducts = async () => {
			const response = await axios.get(`${mockapi}/products`);
			setProducts(response.data);
		};
		getProducts();
	}, []);

	return (
		<>
			<div className={classes['wrapper']}>
				;
				{products.map((item) => (
					<ProductItem
						key={item.id}
						id={item.id}
						title={item.title}
						body={item.body}
						url={item.url}
						to={item.to}
					/>
				))}
			</div>
		</>
	);
};

export default ProductList;
