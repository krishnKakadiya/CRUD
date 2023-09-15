import React, { useState, useEffect } from "react";
import "../Style/Read.css";

import axios from "axios";

import { Link } from "react-router-dom";

const Read = () => {
  const [apiData, setApiData] = useState([]);

  const getData = () => {
    axios
      .get("https://63b3f7299f50390584a2c2aa.mockapi.io/crud")
      .then((response) => {
        console.log(response.data);
        // here is response is object and in data is property in our data is keep define two state to stor data in variable lie here setApiData variable stor in
        setApiData(response.data);
      });
  };

  useEffect(() => {
    getData();
  }, []);

  const handleDelete = (id) =>{
    

    axios.delete(`https://63b3f7299f50390584a2c2aa.mockapi.io/crud/${id}`)
    .then(()=>{
        getData();
    })

  }

  const setDataStorage = (id, name, age, mail, number)=>{

    localStorage.setItem('id', id);
    localStorage.setItem('name', name);
    localStorage.setItem('age', age);
    localStorage.setItem('mail', mail);
    localStorage.setItem('number', number);
  }

  return (
    <div className="row">
      <div className="col-md-12">
      <div className="mb-2 mt-2">
      <Link to='/create'>
        {/* <button className="btn btn-primary">
            Add new employee
        </button> */}
        <button className="emp"> 
        <span className="box">
        Add new employee  
    </span> 
     </button>
      </Link>
                    
      </div>

        <table className="maru table table-bordered table-striped table-dark table-hover">
          <thead>
            <tr>
              <th scope="col">ID</th>
              <th scope="col">Name</th>
              <th scope="col">Age</th>
              <th scope="col">Email</th>
              <th scope="col">Phone number</th>
              <th scope="col">Edit</th>
              <th scope="col">Delete</th>
            </tr>
          </thead>
          <tbody>
            {apiData.map((tableData) => {
              return (
                <tr key={tableData.id}>
                  <th>{tableData.id}</th>
                  <td>{tableData.e_name}</td>
                  <td>{tableData.e_age}</td>
                  <td>{tableData.e_mail}</td>
                  <td>{tableData.e_number}</td>
                  <td> 
                  <Link to='/update'>

                  <button className="btn btn-primary"
                  onClick={()=> setDataStorage(tableData.id, tableData.e_name, tableData.e_age, tableData.e_mail, tableData.e_number)}
                  >Edit  </button>
                
                  </Link>
                  </td>
                  <td> <button className="btn btn-danger"
                   onClick={() => 
                   {
                    if (window.confirm('are you sure delete this data?')){
                    handleDelete(tableData.id)}

                    }
                   }
                   
                   >Delete</button></td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Read;
