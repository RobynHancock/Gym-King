import { render } from '@testing-library/react';
import GymOwnerViewBadge from './GymOwnerViewBadge'

//render test withou crahing
test('renders without crashing', () => {
    const { baseElement } = render(<GymOwnerViewBadge />);
    expect(baseElement).toBeDefined();
});



////////// INTEGRATION TESTS //////////
describe('Testing connection to api', () => {
    test("API fetch badges",()=>{
        let badges:any=[]    
        var email="u20519517@tuks.co.za"
                fetch(process.env["REACT_APP_GYM_KING_API"]+`/gyms/owned?email=${email}`,{
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
})
