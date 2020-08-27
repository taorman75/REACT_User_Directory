import React, { Component } from "react";
//import React from "react";
import searchEmployees from "../utils/api"



function EmployeeCard (props) {
    
        return (
            <>
            <h1> Employees</h1>
            <tr>
                <th scope="row"><img alt= {props.firstName} src= {props.picture} /></th>
                <td className= "col-md-3">{props.firstName} {props.lastName}</td>
                <td className="col-md-3">{props.phone}</td>
                <td className="col-md-3">{props.email}</td>
                <td className="col-md-3">{props.dob}</td>  
            </tr>
            </>
        );
    
    }





export default EmployeeCard;