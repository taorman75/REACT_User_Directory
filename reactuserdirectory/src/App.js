import React from 'react';
import logo from './logo.svg';
import './App.css';
import SearchForm from "./components/SearchForm"
import EmployeeCard from "./components/EmployeeCard"

function App() {
  return (
    <div className="App">
     <SearchForm />
     <EmployeeCard />
    </div>
  );
}

export default App;
