import React, { Component } from "react";
import EmployeeCard from "./EmployeeCard"
import API from "../utils/api";
import ResultList from "./ResultList";

export default class SearchResults extends Component {


  componentDidMount() {
    API.searchEmployees().then(res => {
        console.log(res)
        this.setState({
          result: res.data.results.map((e, i) => ({
            picture: e.picture.medium,
            firstName: e.name.first,
            lastName: e.name.last,
            phone: e.phone,
            email: e.email,
            dog: e.dob.date,
            key: i
          }))  
        })
    })
    .catch(err => console.log(err));
  }

  // searchEmployees = query => {
  //   API.search(query)
  //   console.log(res)
    
  //     .then(res => this.setState({ result: res.data }))
  //     .catch(err => console.log(err));
  // };

  handleInputChange = event => {
    const value = event.target.value;
    const name = event.target.name;
    this.setState({
      [name]: value
    });
  };

  
  handleFormSubmit = event => {
    event.preventDefault();
    this.searchEmployees(this.state.search);
  };

 }

// export default SearchResultContainer;