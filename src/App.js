import React from 'react';
import Header from './components/header';
import './App.scss';
import Headline from './components/headline'

function App() {
  return (
    <div className="App">
      <Header />
      <section className="main">
        <Headline header={'Posts'} desc={'Click the button to render post'} />
      </section>
    </div>
  );
}

export default App;
