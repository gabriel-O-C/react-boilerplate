import App from '../App.jsx';
import { render, screen } from '@testing-library/react';


  it('Should render the app page', () => {
    render(<App />)
    const app = screen.getByText('react boilerplate')
    expect(app).toBeInTheDocument();
  })
