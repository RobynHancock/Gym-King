jest.setTimeout(25000)
import { render} from '@testing-library/react';
import Leaderboard from '../Leaderboard/Leaderboard';



//RENDER TESTS
test('renders without crashing', async() => {
    const { baseElement } =await render(<Leaderboard/>);
    expect(baseElement).toBeDefined();
});

///////// INTEGRATION TESTS //////////
describe('Testing connection to api', () => {
    test("API fetch scores",async()=>{
        var scores:any=[]
        var gymid="lttD"

        await fetch(process.env["REACT_APP_GYM_KING_API"]+`/leaderboard/score?gid=${gymid}`,{
            "method":"GET"
        })
        .then(response =>response.json())
        .then(response =>{
            console.log("this is the response")
            console.log(response)
            scores=response
        
        })
        .catch(err => {console.log(err)})
        expect(scores).toBeDefined();
    
    })
})