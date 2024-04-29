import axios from 'axios'
import React, { useEffect, useState } from 'react'

const Members = () => {
  const [partnerData, changeData] = useState([]);

  useEffect(() => {
    axios.get('https://backend-phi-red.vercel.app/user/partners')
      .then(result => {
        console.log(result.data.message);
        changeData(result.data.message);
      })
      .catch(err => {
        console.log(err);
      })
  }, [])


  return (
    <section id='memberBox' className='flex align-center f-col'>
      <h1 className='font-h'>Our Partners</h1>
      <h3>We are very pleased to work with our well skilled team.</h3>
      {partnerData.map(data => <Partners key={data._id} detail={data} />)}
    </section>
  )
}

const Partners = (props) => {
  return (
    <div className='member-div flex align-center'>
      <div className='partner-image'>
        <img src={props.detail.userDP_url} alt="partener pic" />
      </div>
      <div className='partnerData flex f-col'>
        <h1 className='font-h'>{props.detail.userName}</h1>
        <h2 className='font-xxl'>{props.detail.userEmail}</h2>
        <p className='font-xl'>{props.detail.userDescription}</p>
      </div>
    </div>
  )
}

export default Members