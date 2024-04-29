import React, { useEffect, useState } from 'react'
import './CSS/Signup.css'
import empty_dp from '../assets/no-avatar.jpg'
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import loader from '../assets/loader3.gif'

const Signup = () => {
  const [isloading, setloading] = useState(false);
  const [dp, changedp] = useState(empty_dp);
  const [userdp, changeUserDp] = useState(null);
  const [userName, changeUserName] = useState('');
  const [userEmail, changeUserEmail] = useState('');
  const [userPassword, changeUserPassword] = useState('');
  const [userDescription, changeUserDescription] = useState('');
  const [errHandler, changeError] = useState('');
  const navigate = useNavigate();

  const DpHandler = (e) => {
    changeUserDp(e.target.files[0]);
    changedp(URL.createObjectURL(e.target.files[0]));
  }

  useEffect(() => {
    try {
      const token = localStorage.getItem('token');
      if (token) navigate('/main');
    }
    catch {

    }
  })

  const SubmitHandler = (e) => {
    setloading(true)
    e.preventDefault();
    changeError('');

    if (userdp == null) {
      changeError('You must upload a profile pic.')
      setloading(false);
    }
    else {
      changeError('');
      const data = new FormData();
      data.append('userPic', userdp);
      data.append('userName', userName);
      data.append('userEmail', userEmail);
      data.append('userPassword', userPassword);
      data.append('userDescription', userDescription);

      axios.post('https://backend-phi-red.vercel.app/user/signup', data) 
        .then(result => {
          changeError('')
          setloading(false)
          console.log(result);
          navigate('/login');
        })
        .catch(err => {
          setloading(false)
          console.log(err);
          changeError(err.response.data.message);
        })
    }
  }

  return (
    <>
      <h1 id='header' className='flex justify-center align-center'>Sign Up</h1>
      <form id='signup' onSubmit={SubmitHandler} className='flex align-center f-col'>
        <div id='dpimage' className='flex align-center justify-center'>
          <div id='dp-uploader' className='flex justify-center align-center'>
            <img src={dp} alt="dp" />
          </div>
          <input type="file" accept='image/*' id="userdp" onChange={DpHandler} />
          <label htmlFor="userdp" className='flex justify-center align-center'><i className="fa-solid fa-camera"></i></label>
        </div>
        <input type="text" placeholder='Username' required onChange={(e) => { changeUserName(e.target.value) }} />
        <input type="email" placeholder='Email' required onChange={(e) => { changeUserEmail(e.target.value) }} />
        <input type="password" placeholder='Password' required onChange={(e) => { changeUserPassword(e.target.value) }} />
        <textarea cols="30" rows="6" placeholder='Describe Yourself...' required onChange={(e) => { changeUserDescription(e.target.value) }}></textarea>
        <button type='reset' className='btn btn-bg'>Clear</button>
        <button type='submit' className='btn btn-bg-success'>{isloading ? <img src={loader} width={"19px"} alt=''></img> : <>Sign Up</>}</button>
        <p className='font-xl'>Already have an Account <Link to="/login">Click here</Link></p>
        <span style={{color: 'red'}}>{errHandler}</span>
      </form>
    </>
  )
}

export default Signup