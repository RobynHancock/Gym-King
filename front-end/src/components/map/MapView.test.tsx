import { render } from '@testing-library/react';
import MapView from './MapView'

////TESTS TO BE PERFORMED////
/*

*/

test('renders without crashing', async () => {
    const { baseElement } =await  render(<MapView />);
    expect(baseElement).toBeDefined();
  });

  
