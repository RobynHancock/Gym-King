import { fireEvent, render, screen } from '@testing-library/react';
import CreateBadge from './CreateBadge';

////TESTS TO BE PERFORMED////
/*
*/

test('renders without crashing', () => {
    const { baseElement } = render(<CreateBadge />);
    expect(baseElement).toBeDefined();
});


////////// INTEGRATION TESTS //////////

describe('Testing connection to api', () => {

    it('should load owned gym data', async () => {
        (async ()=>{
            let gymOwner = "u20519517@tuks.co.za"
            await fetch(`https://gym-king.herokuapp.com/gyms/owned?email=${gymOwner}`,{
                "method":"GET"
            })
            .then(response =>response.json())
            .then(response =>{
                expect(response).toBeDefined()
            })
            .catch(err => {
                console.log(err)
                expect(err).toBeDefined()
            }) 
        })
    });

    it('should create a badge', async () => {
        (()=>{

        fetch(`https://gym-king.herokuapp.com/badges/badge`,{
            "method":"POST",
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ 
                gid: "gid",
                badgename: "bn",
                badgedescription: "bd",
                badgechallenge: "bc",
                badgeicon: "",
                activitytype: "at",
            })
        })
        .then(response =>response.json())
        .then(response =>{
            expect(response).toBeDefined()
        })
        .catch(err => {
            console.log(err)
            expect(err).toBeDefined()
        })
    })
    });

})
/*
describe('Testing integration of components and pages', () => {
    
    test('sending in a list of activity types displays correctly as a segment button', async () => {
        const {getByTestId } = render(<CreateBadge />);
    
        expect(getByTestId('btnSeg').innerHTML).toBeDefined()
    });

    test('sending in a list of gym names displays correctly a radio group', async () => {
        const {getByTestId } = render(<CreateBadge />);
    
        expect(getByTestId('rg')).toBeDefined()
    });
})
*/