import {fireEvent, render, screen} from '@testing-library/react';
import ViewBadgePage from './ViewBadgePage';

////TESTS TO BE PERFORMED////
/*
*/

test('renders without crashing', () => {
  const {baseElement} = render(<ViewBadgePage/>);
  expect(baseElement).toBeDefined();
});

////////// INTEGRATION TESTS //////////

describe('Testing connection to api', () => {

    it('should load badge info', async () => {
        (async ()=>{
            fetch(`https://gym-king.herokuapp.com/badges/gym/${"gymid"}`,{
                "method":"GET"
            })
            .then(response =>response.json())
            .then(response =>{
                expect(response).toBeDefined()
            })
            .catch(err => {
                expect(err).toBeDefined()
            })
        })
    });
})
  
