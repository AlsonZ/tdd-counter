import React from 'react';
import { render } from '@testing-library/react';
import App from '../App';
import Counter from '../components/Counter';
import { CounterProvider } from '../contexts/CounterContext';
import { configure } from '@testing-library/dom';

configure({testIdAttribute: 'id'});

const renderWithProvider = (component, {...options} = {}) => {
  const Wrapper = (props) => {
    return <CounterProvider {...props} />
  }
  return render(component, {wrapper: Wrapper, ...options})
}

describe('Counter testing - Native', () => {

  let wrapper;

  beforeEach(() => {
    wrapper = renderWithProvider(<Counter/>)
  })

  test('check Title renders - native', () => {
    // const { getByText } = renderWithProvider(<Counter />);
    // const linkElement = getByText('TDD Counter');
    // expect(linkElement).toBeInTheDocument();
    expect(wrapper.getByRole('heading', {name: /TDD Counter/i})).toBeInTheDocument()
  });

  test('check increment and decrement button renders', () => {
    expect(wrapper.getByRole('button', {name: /Increment/i})).toBeInTheDocument()
    expect(wrapper.getByRole('button', {name: /Decrement/i})).toBeInTheDocument()
  });

  test('check inital value of CounterContext', () => {
    expect(wrapper.getByTestId('counter-value')).toHaveTextContent('0')
  })
})