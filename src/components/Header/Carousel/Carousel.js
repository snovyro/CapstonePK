import React, { useState, useEffect } from 'react';
import Content from './Content';
import carouselImage from './carouselImage';
import Arrows from './Arrows';
import Dots from './Dots';
import './carousel.css';

const len = carouselImage.length - 1;

const Carousel = () => {
	const [activeIndex, setActiveIndex] = useState(0);

	useEffect(() => {
		const interval = setInterval(() => {
			setActiveIndex(activeIndex === len ? 0 : activeIndex + 1);
		}, 5000);
		return () => clearInterval(interval);
	}, [activeIndex]);

	return (
		<div className="slider-container">
			<Content
				activeIndex={activeIndex}
				carouselImage={carouselImage}
			/>
			<Arrows
				prevSlide={() =>
					setActiveIndex(activeIndex < 1 ? len : activeIndex - 1)
				}
				nextSlide={() =>
					setActiveIndex(
						activeIndex === len ? 0 : activeIndex + 1
					)
				}
			/>
			<Dots
				activeIndex={activeIndex}
				carouselImage={carouselImage}
				onClick={(activeIndex) => setActiveIndex(activeIndex)}
			/>
		</div>
	);
};

export default Carousel;
