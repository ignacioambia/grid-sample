import React from 'react';
import Grid from './components/grid'
import './App.css';

function App(props) {
  return (
    <div className="App">
        How many elements should there be ? 
        <input type="number" placeholder="number here" ></input>
        <Grid numberOfBoxes={props.numberOfBoxes}></Grid>
    </div>
  );
}

App.defaultProps = {
  numberOfBoxes : 100
}

export default App;
