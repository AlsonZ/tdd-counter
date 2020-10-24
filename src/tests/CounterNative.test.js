import React from 'react';
import { render } from '@testing-library/react';
import App from '../App';
import Counter from '../components/Counter';
import { CounterProvider } from '../contexts/CounterContext';

const renderWithProvider = (component, {...options} = {}) => {
  const Wrapper = (props) => {
    return <CounterProvider {...props} />
  }
  return render(component, {wrapper: Wrapper, ...options})
}


describe('Counter testing - Native', () => {
  test('check Title renders - native', () => {
    const { getByText } = renderWithProvider(<Counter />);
    const linkElement = getByText('TDD Counter');
    expect(linkElement).toBeInTheDocument();
  });
})