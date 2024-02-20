import React from 'react';
import ReactDOM from 'react-dom';
import NrcComponent from './components/NrcComponent'; // Assuming NrcComponent.js is in the same directory

const App = () => {
  return (
    <div>
      <h1>My App</h1>
      <NrcComponent />
    </div>
  );
};
export default App;

ReactDOM.render(<App />, document.getElementById('root'));
