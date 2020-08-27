import React from "react";
import SearchResults from "./SearchResults"
import EmployeeCard from "./EmployeeCard"

function ResultList(props) {
  return (
    <table className="table">
        <thead>
            <tr>
                <th></th>
                <th OnClick = {props.name}>Name</th>
                <th>Email</th>
                <th>Phone</th>
                <th>DOB</th>
                <th>Location</th>
            </tr>
        </thead>
        <tbody className="">
            {props.results.map(result => (
                <tr className="table">
                    <td><img className= "img-responsive" src= {result.picture.medium} alt={result.name} /></td>
                    <td className="align-middle">{result.email}</td>
                    <td className="align-middle">{result.phone}</td>
                    <td className="align-middle">{result.dob.date}</td>
                    <td className="align-middle">{result.location}</td>

                </tr>
            ))}
        </tbody>
    </table>
  );
}

export default ResultList;