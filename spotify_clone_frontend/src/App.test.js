import { render, screen } from '@testing-library/react';
import App from './App';

test('renders sidebar Home nav', () => {
  render(<App />);
  expect(screen.getByText(/Home/i)).toBeInTheDocument();
});
