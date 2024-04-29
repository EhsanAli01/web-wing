import React from 'react'
import ceo from '../../assets/ceo.png'

const About = () => {
  return (
    <section id='aboutBox' className='flex j-spc-between align-center'>

      <div className='flex justify-center align-center f-col'>
        <h1>Web</h1>
        <h1>Wing</h1>
        <p className='font-xl'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iusto reprehenderit tempore voluptas possimus cupiditate dolore, inventore deleniti, incidunt aliquam at adipisci odio atque modi fugiat labore quae amet, vero fuga esse vel molestias minima. Eligendi, at perferendis. Facere, optio officiis.</p>
      </div>

      <section className='divider'></section>

      <div className='flex justify-center align-center f-col'>
        <h1 className='font-h'>This is what best describes us.</h1>
        <div id='ceoCart' className='flex j-spc-between align-center'>
          <div id='ceo-img'>
          <img src={ceo} alt="pic" />
          </div>
          <div>
          <h1>Ehsan Ali</h1>
          <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptatibus quasi doloribus error suscipit ad minima dolores, veritatis velit recusandae. Aliquid!</p>
          </div>
        </div>
        <p className='font-xl'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure, voluptatem quibusdam eligendi voluptatibus alias dolor adipisci ipsum. Necessitatibus iure reprehenderit inventore. Consectetur corporis, tempore quidem doloremque necessitatibus voluptas at, nemo dignissimos placeat ut esse tempora nisi hic optio temporibus voluptates alias. Nemo, amet?</p>
      </div>
    </section>
  )
}

export default About