import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import StickyAccordion from '../../../../src/components/StickyAccordion';
import { usersMockData } from '../../../mocks/usersMockData';

describe('StickyAccordion Component', () => {

    it('renders without crashing', () => {
        render(<StickyAccordion items={usersMockData} />);
        expect(screen.getByText('User1')).toBeInTheDocument();
    });

    it('expands the correct accordion item on click', () => {
        render(<StickyAccordion items={usersMockData} />);
        fireEvent.click(screen.getByText('User1'));
        expect(screen.getByText('User1').closest('.Mui-expanded')).toBeInTheDocument();
    });

    it('calls onChangeExpanded prop when an accordion is expanded', () => {
        const mockOnChangeExpanded = jest.fn();
        render(<StickyAccordion items={usersMockData} onChangeExpanded={mockOnChangeExpanded} />);
        fireEvent.click(screen.getByText('User1'));
        expect(mockOnChangeExpanded).toHaveBeenCalledWith('User1');
    });

    it('renders custom content when renderContent is provided', () => {
        const mockRenderContent = jest.fn().mockReturnValue(<div>Custom Content</div>);
        render(<StickyAccordion items={usersMockData} renderContent={mockRenderContent} />);
        fireEvent.click(screen.getByText('User1'));
        expect(screen.getAllByText('Custom Content')).toHaveLength;
    });

    it('matches snapshot', () => {
        const { asFragment } = render(<StickyAccordion items={usersMockData} />);
        expect(asFragment()).toMatchSnapshot();
    });
});