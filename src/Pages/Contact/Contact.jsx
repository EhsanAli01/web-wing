import React from 'react'
import img from '../../assets/contact-bg.png'

const Contact = () => {
  return (
    <section id='contact-box' className='flex f-col justify-center align-center'>
      <main className='contact-main flex f-col align-center'>
        <h1 className='font-h'>Have any Questions?</h1>
        <p className='flex font-xxl'>You can ask any questions from given contacts.</p>
      </main>

      <div className='contact-img flex justify-center align-center'>
        <img src={img} alt="" />
      </div>

      <div className='contact-aside flex f-col justify-center align-center'>
        <div className=''>
          <i className="fa-solid fa-envelope"></i>
          <h1>ehsanali3669@gmail.com</h1>
        </div>
        <div>
          <i className="fa-solid fa-phone"></i>
          <h1>+92 3195618566</h1>
        </div>
        <section className='fb-insta flex'>
          <a href='https://www.facebook.com/' target='_blank' className='flex align-center gap-x reset-a'>
            <i className="fa-brands fa-facebook"></i>
            <h2 className='font-xxl'>Facebook</h2>
          </a>
          <a href='#' target='_blank' className='flex align-center gap-x reset-a'>
            <i className="fa-brands fa-instagram"></i>
            <h2 className='font-xxl'>Instagram</h2>
          </a>
        </section>
      </div>
    </section>
  )
}

export default Contact