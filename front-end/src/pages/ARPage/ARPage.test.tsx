jest.setTimeout(25000)
import { render } from '@testing-library/react';
import ARPage from './ARPage';


test('renders without crashing', async() => {
    const { baseElement } =await render(<ARPage />);
    expect(baseElement).toBeDefined();
});

////////// INTEGRATION TESTS //////////
/*
describe('Integration Tests', () => {
    
    test('rendering AddGymLocation', async () => {
        const {getByTestId } = render(<ARPage />);
        // make sure the accept reject cards are displayed 
        expect(getByTestId("a").innerHTML).toBeDefined()
    
    });
})*/