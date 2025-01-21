

import SampleScreenWithState from './SampleScreenWithState'; // Adjust the path if necessary
import SampleScreenWithStateDelegate from './SampleScreenWithStateDelegate'; // Adjust the path if necessary

import AddAccountScreen from './AddAccountScreen'; // Adjust the path if necessary
import AddAccountScreenDelegate from './AddAccountScreenDelegate'; // Adjust the path if necessary




const App = () => {


  // Instantiate MyScreenDelegate

  const sampleScreenWithStateDelegate = new SampleScreenWithStateDelegate();
  const addAccountScreenDelegate = new AddAccountScreenDelegate();

  
  return (
    
   
    <div style={appStyles}>
     <AddAccountScreen delegate={addAccountScreenDelegate} />
     
    </div>
  );
};
const appStyles = {
  height: '100vh', // 100% of the viewport height
  width: '100vw',  // 100% of the viewport width
  margin: 0,       // Removes default margin
  padding: 0,      // Removes default padding
};
export default App;
