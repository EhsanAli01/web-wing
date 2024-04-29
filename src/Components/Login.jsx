import React, { useEffect, useState } from 'react'
import './CSS/Login.css'
import { Link, redirect, useNavigate } from 'react-router-dom';
import axios from 'axios';
import loader from '../assets/loader3.gif'

const Login = () => {
  const [isloading, setloading] = useState(false);
  const [userEmail, changeUserEmail] = useState('');
  const [userPassword, changeUserPassword] = useState('');
  const [errHandler, changeError] = useState('');
  const navigate = useNavigate();


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

    errMessage.innerHTML = '';
    const data = new FormData()
    data.append('userEmail', userEmail);
    data.append('userPassword', userPassword);

    axios.post('https://backend-phi-red.vercel.app/user/login', data)
      .then(result => {
        setloading(false)
        console.log(result);
        localStorage.setItem('token', result.data.token);
        localStorage.setItem('userDp_url', result.data.data.userDP_url);
        localStorage.setItem('userName', result.data.data.userName);
        localStorage.setItem('userType', result.data.data.userType);
        localStorage.setItem('userDescription', result.data.data.userDescription);
        localStorage.setItem('userEmail', result.data.data.userEmail);
        localStorage.setItem('userId', result.data.data._id);
        navigate('/main');
      })
      .catch(err => {
        setloading(false)
        console.log(err);
        changeError(err.response.data.message);
      })

  }

  return (
    <>
      <section id='login' className='flex align-center'>
        <form id='login-form' onSubmit={SubmitHandler} className='flex align-center justify-center f-col'>
          <h1 id='log-head' className='font-h'>Login</h1>
          <input type="email" placeholder='Email' required onChange={(e) => { changeUserEmail(e.target.value) }} />
          <input type="password" placeholder='Password' required onChange={(e) => { changeUserPassword(e.target.value) }} />
          <button type='reset' className='btn btn-bg'>Clear</button>
          <button type='submit' className='btn btn-bg-success'>{isloading ? <img src={loader} width={"19px"} alt=''></img> : <>Login</>}</button>
          <p className='font-xl'>Have no Account <Link to="/signup">Click here</Link></p>
          <div id='errMessage'></div>
          <span style={{color: 'red'}}>{errHandler}</span>
        </form>
      </section>
    </>
  )
}

export default Login