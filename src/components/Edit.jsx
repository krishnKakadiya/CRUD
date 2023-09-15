import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import "./../Style/Form.css";

const Edit = () => {
  const [id, setId] = useState(0);
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [email, setEmail] = useState("");
  const [number, setNumber] = useState(0);

  const navigate = useNavigate();

  useEffect(() => {
    setId(localStorage.getItem("id"));
    setName(localStorage.getItem("name"));
    setAge(localStorage.getItem("age"));
    setEmail(localStorage.getItem("mail"));
    setNumber(localStorage.getItem("number"));
  }, []);

  const handleUpdate = (e) => {
    e.preventDefault();

    axios.put(`https://63b3f7299f50390584a2c2aa.mockapi.io/crud/${id}`, {
        e_name: name,
        e_age: age,
        e_mail: email,
        e_number: number,
      })
      .then(() => {
        navigate("/");
      })
      .catch((error) => {
        console.log(error);
      });
    console.log("func runnig");
    console.log(id, name, age, email, number);
  };

  return (
    <div>
      <div className="row">
        <div className="col-md-4">
          <div className="mb-2 mt-2">
            <Link to="/">
              <button className="btn btn-primary">Employee list</button>
            </Link>
          </div>
          {/* <div className="bg-primary p-4 text-center">
            <h1>Update Data</h1>
          </div> */}
          <br />
          <form onSubmit={handleUpdate}>
          <div className="subscribe">

            <div className="form-group">
            <p>Update Data</p>
              {/* <label>Enter Name </label> */}
              <input
                type="text"
                placeholder="Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="form-contorl"
              />
            </div>
            <br />
            <div className="form-group">
              {/* <label>Enter Age: </label> */}
              <input
                type="text"
                placeholder="Age"
                className="form-contorl"
                value={age}
                onChange={(e) => setAge(e.target.value)}
              />
            </div>
            <br />
            <div className="form-group">
              {/* <label>Enter Email: </label> */}
              <input
                type="text"
                placeholder="Email"
                className="form-contorl"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <br />
            <div className="form-group">
              {/* <label>Phone number: </label> */}
              <input
                type="number"
                placeholder="enter your new phonw no:"
                className="form-contorl"
                value={number}
                onChange={(e) => setNumber(e.target.value)}
                
              />
            </div>
            <br />
            <div className="d-grid">
              <input type="submit" value="Update" className="submit-btn" />
            </div>
          </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Edit;
// import React, { useState, useEffect } from "react";
// import axios from "axios";
// import { Link, useNavigate } from "react-router-dom";
// import "./../Style/Form.css";

// const Edit = () => {
//   const [id, setId] = useState(0);
//   const [name, setName] = useState("");
//   const [age, setAge] = useState("");
//   const [email, setEmail] = useState("");
//   const [number, setNumber] = useState(0);

//   const navigate = useNavigate();

//   useEffect(() => {
//     setId(localStorage.getItem("id"));
//     setName(localStorage.getItem("name"));
//     setAge(localStorage.getItem("age"));
//     setEmail(localStorage.getItem("mail"));
//     setNumber(localStorage.getItem("number"));
//   }, []);

//   const handleUpdate = (e) => {
//     e.preventDefault();

//     axios
//       .put(`https://63b3f7299f50390584a2c2aa.mockapi.io/crud/${id}`, {
//         e_name: name,
//         e_age: age,
//         e_mail: email,
//         e_number: number,
//       })
//       .then(() => {
//         navigate("/");
//       })
//       .catch((error) => {
//         console.log(error);
//       });
//     console.log("func runnig");
//     console.log(id, name, age, email, number);
//   };

//   return (
//     <div>
//       <div className="row">
//         <div className="col-md-4">
//           <div className="mb-2 mt-2">
//             <Link to="/">
//               <button className="btn btn-primary">Employee list</button>
//             </Link>
//           </div>
//           <div className="bg-primary p-4 text-center">
//             <h1>Update Data</h1>
//           </div>
//           <br />
          
//           <form onSubmit={handleUpdate}>
//             <div className="form-group">
//               <label>Enter Name </label>
//               <input
//                 type="text"
//                 placeholder="Name"
//                 value={name}
//                 onChange={(e) => setName(e.target.value)}
//                 className="form-contorl"
//               />
//             </div>
//             <br />
//             <div className="form-group">
//               <label>Enter Age: </label>
//               <input
//                 type="text"
//                 placeholder="Age"
//                 className="form-contorl"
//                 value={age}
//                 onChange={(e) => setAge(e.target.value)}
//               />
//             </div>
//             <br />
//             <div className="form-group">
//               <label>Enter Email: </label>
//               <input
//                 type="text"
//                 placeholder="Email"
//                 className="form-contorl"
//                 value={email}
//                 onChange={(e) => setEmail(e.target.value)}
//               />
//             </div>
//             <br />
//             <div className="form-group">
//               <label>Phone number: </label>
//               <input
//                 type="number"
//                 placeholder="enter your new phonw no:"
//                 className="form-contorl"
//                 value={number}
//                 onChange={(e) => setNumber(e.target.value)}
//               />
//             </div>
//             <br />
//             <div className="d-grid">
//               <input type="submit" value="Update" className="btn btn-color" />
//             </div>
//           </form>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Edit;
