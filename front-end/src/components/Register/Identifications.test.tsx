import {fireEvent, render, screen} from '@testing-library/react';
import Identifications from './Identifications';

test('renders without crashing', () => {
  const{baseElement} = render(<Identifications handleChange={undefined} next={undefined} history={undefined}/>);
  expect (baseElement).toBeDefined();
});

test('correctly displays labels', async () => {
  const {baseElement} = render(<Identifications handleChange={undefined} next={undefined} history={undefined}/>);
  expect (baseElement).toHaveTextContent("Full Name*");
  expect (baseElement).toHaveTextContent("Username*");
});
