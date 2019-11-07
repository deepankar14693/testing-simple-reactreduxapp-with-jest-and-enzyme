import React from 'react';
import Header from './components/header';
import './App.scss';
import Headline from './components/headline';

const tempArray = [{
  fName: 'Deepankar',
  lName: 'Ranswal',
  age: 26,
  onlineStatus: true
}]

function App() {
  return (
    <div className="App">
      <Header />
      <section className="main">
        <Headline header={'Posts'} desc={'Click the button to render post'} tempArray={tempArray} />
      </section>
    </div>
  );
}

export default App;
