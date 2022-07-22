import React from 'react';
import { render, screen } from '@testing-library/react';
import About from '../pages/About/About';

describe('about us', () => {
	it('should render link thoriq', () => {
		render(<About />);
		const link = screen.getByLabelText(/Babang Thoriq/i);
		expect(link).toHaveProperty(
			'href',
			'https://www.linkedin.com/in/thoriq-ilhami-zaidan-6ab628224/'
		);
	});
});
