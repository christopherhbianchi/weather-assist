import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

describe('<App />', () => {
  it('should match snapshot', () => {
    const renderedComponent = shallow ( <App /> );
    expect(renderedComponent).toMatchSnapshot();
  });//it
});//describe
