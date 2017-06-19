import React from 'react';
import ReactDOM from 'react-dom';

//Step 1: Make the component
const App = () => {
    return <div>Hi!</div>;
}
//Step 2: Show it on the page(in DOM)

ReactDOM.render(<App />, document.querySelector('.container'));

