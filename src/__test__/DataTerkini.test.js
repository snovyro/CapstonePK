import React from 'react';
import { render, screen } from '@testing-library/react';
import DataTerkini from '../components/DataTerkini/DataTerkini';

describe('heading', () => {
	it('should render h3 on DataTerkini', () => {
		render(<DataTerkini />);
		const heading = screen.getByLabelText(/Heading Data/i);
		expect(heading).toBeInTheDocument();
	});
});
