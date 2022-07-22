import React from 'react';
import ProductList from '@components/Content/Products/ProductsList';
import DataTerkini from '@components/DataTerkini/DataTerkini';

const Home = () => {
	return (
		<div>
			<main>
				<ProductList />
				<DataTerkini />
			</main>
		</div>
	);
};

export default Home;
