import React from 'react';
import { render } from '@testing-library/react';
import App from './App';



describe("Counter Testing", () => {
  test('check Title renders - native', () => {
    const { getByText } = render(<App />);
    const linkElement = getByText('TDD Counter');
    expect(linkElement).toBeInTheDocument();
  });

  

})


