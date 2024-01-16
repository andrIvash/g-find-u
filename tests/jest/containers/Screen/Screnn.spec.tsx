import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Screen from '../../../../src/containers/Screen';

jest.mock('../../../../src/components/Header', () => () => <div data-testid='mock-header'>Header</div>);
jest.mock('../../../../src/components/Footer', () => () => <div data-testid='mock-footer'>Footer</div>);
jest.mock('../../../../src/components/common/SimpleSwitch', () => () => <div data-testid='mock-simple-switch'>SimpleSwitch</div>);

jest.mock('../../../../src/hooks/useLocalStorage', () => ({
  useLocalStorage: jest.fn()
}));

const mockChildren = <div>{'children'}</div>;

describe('Screen Component', () => {
    beforeEach(() => {
        require('../../../../src/hooks/useLocalStorage').useLocalStorage.mockImplementation((key, initialValue) => {
            const [state, setState] = React.useState(initialValue);
            return [state, setState];
        });
    });

    it('renders without crashing', () => {
        render(<Screen>{mockChildren}</Screen>);
        expect(screen.getByTestId('Screen')).toBeInTheDocument();
    });

    it('toggles dark mode', () => {
        const { getByTestId } = render(<Screen>{mockChildren}</Screen>);
        fireEvent.click(getByTestId('mock-simple-switch'));
    });

    it('renders children properly', () => {
        const { getByText } = render(<Screen><div>Test Child</div></Screen>);
        expect(getByText('Test Child')).toBeInTheDocument();
    });

    it('matches snapshot', () => {
        const { asFragment } = render(<Screen>{mockChildren}</Screen>);
        expect(asFragment()).toMatchSnapshot();
    });
});