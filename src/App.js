import './App.css';
import React from 'react';
import Header from './components/Header';
import Main from './components/Main';
import Footer from './components/Footer';
import beasrArray from './components/Hornesdata.json';


class App extends React.Component {
  render() {
    return (
      <div>
        <Header />
        <Main beasrArray={beasrArray} />
        <Footer />
      </div>
    );
  }
}
export default App;
