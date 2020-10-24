import React from 'react';
import { render } from '@testing-library/react';
import App from '../App';
import Counter from '../components/Counter';
import { shallow, mount } from 'enzyme';

describe('<App/>', () => {
  test('renders counter component', () => {
    const wrapper = shallow(<App/>)
    // console.log(wrapper.debug())
    expect(wrapper.containsMatchingElement(<Counter/>)).toEqual(true);
  })
})





