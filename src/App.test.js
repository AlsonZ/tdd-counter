import React from 'react';
import { render } from '@testing-library/react';
import App from './App';
import { configure,  shallow } from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
 
configure({ adapter: new Adapter() });



describe("Counter Testing", () => {
  test('check Title renders - native', () => {
    const { getByText } = render(<App />);
    const linkElement = getByText('TDD Counter');
    expect(linkElement).toBeInTheDocument();
  });

  test('check Title renders - enzyme', () => {
    const wrapper = shallow(<App/>)
    // console.log(wrapper.debug());
    expect(wrapper.find('h2').text()).toContain('TDD Counter')
    
  });

  test('check increment button renders - enzyme', () => {
    const wrapper = shallow(<App/>)
    expect(wrapper.find('#increment-btn').text()).toBe('Increment')
    
  });

})


