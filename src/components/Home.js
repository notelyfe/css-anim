import React, { useState } from 'react'
import './Home.css'
import pic1 from './images/pic1.jpeg'
import pic2 from './images/pic2.jpeg'
import pic3 from './images/pic3.jpeg'
import { GrFormNext } from "react-icons/gr";

const Home = () => {

  const anim = () =>{
    setMouseIn(true)
  }
  const noAnim = () =>{
    setMouseIn(false)
  }
  const [mouseIn, setMouseIn] = useState(false)

  return (
    <div className='container' style={{ marginTop: '13vh' }}>
      <h3 className='my-2'>Runner's Workout</h3>
      <div className="container rounded" style={{ border: '2px solid grey', height: '50vh' }}>
        <div className="row">

          <div className={`col-${mouseIn===true?'6':'4'} case rounded px-0`} onMouseEnter={anim} onMouseLeave={noAnim}>
            <div className="title">
              <h5>STRENGTH</h5>
              <GrFormNext className={`arrow d-${mouseIn===true?'block':'none'}`} />
            </div>
            <img className='pics rounded' src={pic1} alt="" />
          </div>

          <div className={`col-${mouseIn===true?'6':'4'} case rounded px-0`} onMouseEnter={anim} onMouseLeave={noAnim}>
            <div className="title">
              <h5>MOBILITY</h5>
              <GrFormNext className={`arrow d-${mouseIn===true?'block':'none'}`} />
            </div>
            <img className='pics rounded' src={pic2} alt="" />
          </div>

          <div className={`col-${mouseIn===true?'6':'4'} case rounded px-0`} onMouseEnter={anim} onMouseLeave={noAnim}>
            <div className="title">
              <h5>DRILLS</h5>
              <GrFormNext className={`arrow d-${mouseIn===true?'block':'none'}`} />
            </div>
            <img className='pics rounded' src={pic3} alt="" />
          </div>

        </div>
      </div>
    </div>
  )
}

export default Home
