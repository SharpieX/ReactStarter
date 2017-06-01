/**
 * Created by sharpie on 31/05/17.
 */
// Create a new Component this component should produce some HTML

import React from 'react';
import ReactDOM from 'react-dom';
const API_KEY = AIzaSyCFC9RGWeFl5vpud-FHUZlVqoWhdYrDsB4;
const App = () => {
    return <div> Hi! </div>;
}

// Take this component generated HTML and put it in DOM
ReactDOM.render(<App />, document.querySelector('.container'));
