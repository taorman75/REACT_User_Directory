import React from 'react';
import logo from './logo.svg';
import './App.css';
import SearchForm from "./components/SearchForm"
import EmployeeCard from "./components/EmployeeCard"
import NavBar from './components/NavBar';
// import SearchResults from './components/SearchResults';


function App() {
  return (
    <div className="App">
     <NavBar />
     <SearchForm />
     <EmployeeCard />
   
    </div>
  );
}

export default App;
