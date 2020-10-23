import React from 'react';
import { render } from '@testing-library/react';
import App from './App';
import Counter from './components/Counter';
import { shallow, mount } from 'enzyme';




describe("Counter Testing", () => {

  let wrapper;
  beforeEach(() => {
    // shallow does not load nested components
    // wrapper = shallow(<Counter/>);
    
    // mount loads all nested components 
    wrapper = mount(<App/>);
  })

  test('check Title renders - native', () => {
    const { getByText } = render(<App />);
    const linkElement = getByText('TDD Counter');
    expect(linkElement).toBeInTheDocument();
  });

  test('check Title renders - enzyme', () => {
    // const wrapper = shallow(<App/>)
    // console.log(wrapper.debug());
    expect(wrapper.find('h2').text()).toContain('TDD Counter');
    
  });

  test('check increment button renders - enzyme', () => {
    // const wrapper = shallow(<App/>)
    expect(wrapper.find('#increment-btn').text()).toBe('Increment');
  });

  test('check initial value of state', () => {
    expect(wrapper.find('#counter-value').text()).toBe("0");
  });

  test('check click event of increment button leading to state change', () => {
    wrapper.find('#increment-btn').simulate('click');
    expect(wrapper.find('#counter-value').text()).toBe('1')
  });

  test('check decrement button renders - enzyme', () => {
    expect(wrapper.find('#decrement-btn').text()).toBe('Decrement');
  });

  test('check click event of decrement button leading to state change', () => {
    wrapper.find('#increment-btn').simulate('click');
    expect(wrapper.find('#counter-value').text()).toBe('1')
    wrapper.find('#decrement-btn').simulate('click');
    expect(wrapper.find('#counter-value').text()).toBe('0')
  });

});


