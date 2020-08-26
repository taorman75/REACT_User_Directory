import React, { Component } from "react";

import API from "../utils/api";
import ResultList from "./ResultList";

class SearchResultContainer extends Component {
  state = {
    users: [{}],
    order: "descend",
    filteredUsers: [{}]
  };

  headings = [
      { name: "Image", width: "10%"},
      { name: "Name", width: "10%"},
      { name: "Phone", width: "20%"},
      { name: "Email", width: "20%"},
      { name: "DOB", width: "10%"},
      { name: "location", width: "10%"}
  ]

  handleSort = heading => {
      if (this.state.order === "descend") {
          this.setState({
              order: "ascend"
          })
      } else {
          this.setState({
              order: "descend"
          })
      }

      const compare = (a, b) => {
          if (this.state.order === "ascend") {
              if (a[heading] === undefined) {
                  return 1;
              } else if (b[heading] === undefined) {
                  return -1;
              }

              else if (heading === "name") {
                  return a[heading].first.localeCompare(b[heading].first);
              } else {
                  return a[heading] - b[heading];
              }
          } else {
              if (a[heading] === undefined) {
                  return 1
              } else if (b[heading] === undefined) {
                  return -1
              } else if (heading === "name") {
                  return b[heading].first.localeCompare(a[heading].first)
              } else {
                  return b[heading] - a[heading]
              }
          }

      } const sortedUsers = this.state.filteredUsers.sort(compare);
      this.setState({filteredUsers: sortedUsers});
  }
  
  handleSearchChange = event => {
      console.log(event.target.value);
      const filter = event.target.value;
      const filteredList = this.state.users.filter(item => {
          let values = Object.values(item)
          .join("")
          .toLowerCase();
        return values.indexOf(filter.toLowerCase()) !== -1;
      });
      this.setState({ filteredUsers: filteredList });
  }


  componentDidMount() {
    API.getUsers().then(results => {
        this.setState({
            users: results.data.results,
            filteredUsers: results.data.results
        })
    })
  }

  searchEmployees = query => {
    API.search(query)
    console.log(res)
    
      .then(res => this.setState({ result: res.data }))
      .catch(err => console.log(err));
  };

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

  render() {
    return (
     <ResultList
        headings = {this.headings}
        users={this.state.filteredUsers}
        handleSort={this.handleSort}
     />
    );
  }
}

export default SearchResultContainer;