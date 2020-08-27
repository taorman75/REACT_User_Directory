import React from "react";

function SearchForm(props) {
  return (
    <form className="search">
      <div className="form-group">
        
        <input
          value={props.searchEmployees}
          onChange={props.handleInputChange}
          name="employee"
          list="employees"
          type="text"
          className="form-control"
          placeholder="Type in an employee name"
          id="search"
        />
        
        <button type="submit" onClick={props.handleFormSubmit} className="btn btn-success">
          Search
        </button>
      </div>
    </form>
  );
}

export default SearchForm;