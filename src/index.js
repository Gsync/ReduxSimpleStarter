import React from 'react';
import ReactDOM from 'react-dom';
import SearchBar from './components/search_bar';

const API_KEY = 'AIzaSyDa6IX9K5lsxoI2JcRvK5_VxWB6FdvPMec';

//Step 1: Make the component
const App = () => {
    return (
        <div>
            <SearchBar />
        </div>
    );
}
//Step 2: Show it on the page(in DOM)

ReactDOM.render(<App />, document.querySelector('.container'));

