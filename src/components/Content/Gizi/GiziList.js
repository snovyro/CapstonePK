import React, { useEffect, useState } from 'react';
import axios from 'axios';
import GiziItem from './GiziItem';
import mockapi from 'src/lib/mockapi';
import classes from './GiziList.module.css';
import LoadingSpinner from '@components/UI/LoadingSpinner';
import ErrorModal from '@components/UI/ErrorModal';

const GiziList = () => {
	const [isLoading, setIsLoading] = useState(false);
	const [errorMsg, setErrorMsg] = useState(null);
	const [articles, setArticles] = useState([]);

	useEffect(() => {
		setIsLoading(true);
		const getArticles = async () => {
			try {
				const response = await axios.get(`${mockapi}/gizi`);
				setArticles(response.data);
				setIsLoading(false);
			} catch (error) {
				setErrorMsg(error.message);
			}
		};
		getArticles();
	}, []);

	const handleCloseModal = () => {
		setErrorMsg(false);
	};

	return (
		<div>
			{errorMsg && (
				<div>
					<ErrorModal onClose={handleCloseModal}>
						{errorMsg}
					</ErrorModal>
				</div>
			)}
			<div className={classes['font-title']}>
				<h1>Informasi Gizi</h1>
				<hr />
				<div className={classes['wrapper']}>
					{isLoading && (
						<div className="centered">
							<LoadingSpinner />
						</div>
					)}
					{articles.map((data) => (
						<GiziItem
							key={data.id}
							id={data.id}
							title={data.title}
							description={data.description}
							url={data.url}
							urlToImage={data.urlToImage}
						/>
					))}
				</div>
			</div>
		</div>
	);
};

export default GiziList;
