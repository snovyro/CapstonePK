import axios from 'axios';
import React, { useEffect, useState } from 'react';
import mockapi from '../../lib/mockapi';
import { useParams } from 'react-router-dom';
import ErrorModal from '@components/UI/ErrorModal';
import LoadingSpinner from '@components/UI/LoadingSpinner';

export const TemplateDetailGizi = () => {
	const params = useParams();
	const [isLoading, setIsLoading] = useState(false);
	const [errorMsg, setErrorMsg] = useState(null);

	const [templates, setTemplateDetailGizi] = useState(null);
	useEffect(() => {
		setIsLoading(true);
		const getTemplateDetailGizi = async () => {
			try {
				const response = await axios.get(
					`${mockapi}/gizi/${params.id}`
				);
				setIsLoading(false);
				setTemplateDetailGizi(response.data);
			} catch (error) {
				setErrorMsg(error.message);
			}
		};
		getTemplateDetailGizi();
	}, []);

	const handleCloseModal = () => {
		setErrorMsg(false);
	};

	return (
		<div>
			<div>
				{errorMsg && (
					<ErrorModal onClose={handleCloseModal}>
						{errorMsg}
					</ErrorModal>
				)}
			</div>
			{isLoading && (
				<div className="centered">
					<LoadingSpinner />
				</div>
			)}
			<div className="flex flex-wrap pt-4 pb-8">
				{templates && (
					<div className="px-40">
						<h3 className="py-8">{templates.title}</h3>
						<img
							className="w-full max-h-96 object-cover rounded-lg"
							src={templates.urlToImage}
							alt=""
						/>
						<p
							style={{ whiteSpace: 'pre-line' }}
							className="text-justify py-8"
						>
							{templates.description}
						</p>
					</div>
				)}
			</div>
		</div>
	);
};
