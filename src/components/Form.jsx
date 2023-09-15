import React,{useState} from 'react';
import axios from "axios";
import "../Style/Form.css";
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';

const Form = () => {

    const [name,setName] = useState('');
    const [age, setAge] = useState('');
    const [email, setEmail] = useState('');
    const [number, setNumber] = useState('');
    const [image, setImage] = useState(false);

    const navigate = useNavigate();


    const submitHandler = (e) => {
        e.preventDefault();

        // const  Body = {
        //  name,
        //  page,
        //  email,
        //  age,
        //  first declared object and then pass in url , Body 
        // }



        axios.post('https://63b3f7299f50390584a2c2aa.mockapi.io/crud',{
            // key: value format type here
            e_name:  name, /* employee name = name your state that your store in object*/
            e_age: age,
            e_mail: email,
            e_number: number
            }).then(() => {
                navigate('/');
            })

    }
    // also write this typw
    // name,
    // age,
    // email

    // [  if you post on yourapi then data will be show like below show here; that way to insert your data in Api or givetn api
    //     {
    //         "id": "1",
    //         "e_name": "jemis",
    //         "e_age": "25",
    //         "e_emial": "jemish@gmail.com",

    //     }
    // ]
  return (
    <div className='container-fluid-lg'>
    <div className="row">
    <div className="col-md-4">
    <div className='mb-2 mt-2'>
 
    <Link to="/">
            {/* <button className="btn btn-primary">Employee list</button> */}
                <button data-text="Awesome" className="button">
        <span className="actual-text">&nbsp;show list&nbsp;</span>
        <span className="hover-text" aria-hidden="true">&nbsp;Employee List&nbsp;</span>
             </button>
          </Link>
    </div>
    {/* <div className="bg-primary p-4 text-center">
        <h1>create Data</h1>
    </div> */}
    <br/>
    
  {/* <div className="subscribe">
    <p>SUBSCRIBE</p>
    <input placeholder="Your e-mail" className="subscribe-input" name="email" type="email">
    <br>
    <div className="submit-btn">SUBMIT</div>
  </div> */}

        <form  onSubmit={submitHandler}>
        <div className='subscribe'>

            <div className="form-group ">
        <p>create Data</p>
                {/* <label>Enter Name </label> */}
                <input type="text" placeholder='Name' className='form-contorl subscribe-input' onChange={(e)=> setName(e.target.value)}/>
            </div>
            <br/>
            <div className="form-group">
                {/* <label>Enter Age: </label> */}
                <input type="text" placeholder='Age' className='form-contorl  subscribe-input' onChange={(e)=> setAge(e.target.value)}/>
            </div>
            <br/>
            <div className="form-group">
                {/* <label>Enter Email: </label> */}
                <input type="text" placeholder='Email' className='form-contorl subscribe-input' onChange={(e)=>  setEmail(e.target.value)}/>
            </div>
            <br/>
            <div className="form-group">
                {/* <label>Phone NO: </label> */}
                <input type="number" placeholder='enter your mobile number' className='form-contorl subscribe-input' onChange={(e)=>  setNumber(e.target.value)}/>
            </div>
            <br/>
            <div className="d-grid">
            <input type="submit" value="Submit" className='submit-btn'/>

            </div>
        </div>
        </form>
        {/* {name}
        <br />
        {email}
        <br />
        {age}
        <br />
        {number} */}
    </div>

    </div>
  
    </div>
  )
}

export default Form