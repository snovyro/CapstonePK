import React from 'react';
import { Link } from 'react-router-dom';

const GiziItem = ({ title, description, urlToImage, id }) => {
	return (
		<div className="max-w-xs bg-white rounded-lg border border-gray-200 shadow-md hover:scale-105 transition duration-150 ease-out hover:ease-in">
			<Link to={`/gizi/${id}`}>
				<div>
					<img
						className="rounded-t-lg h-48 w-full object-cover"
						src={urlToImage}
						alt={urlToImage}
					/>
				</div>
				<div className="p-5 flex flex-wrap">
					<h5 className="mb-2 text-2xl font-bold tracking-tight  dark:text-gray-600">
						{title}
					</h5>

					<p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
						{description.length > 150
							? `${description.substring(0, 150)}...`
							: description}
					</p>
				</div>
			</Link>
		</div>
	);
};
export default GiziItem;
