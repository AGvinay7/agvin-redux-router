import React from 'react';
import { render, screen } from '@testing-library/react';
import Dashboard from '../Dashboard';
import { Provider } from 'react-redux';
import { store } from '../../../store/store';

const Wrapper: React.FC<any> = ({ children }) => (
    <Provider store={store}>
      {children}
    </Provider>
  );
  
test('renders Dashboard', () => {
  render(<Dashboard />,{
    wrapper: Wrapper,
  });
  const linkElement = screen.getByText('Add project');
  expect(linkElement).toBeInTheDocument();
});
