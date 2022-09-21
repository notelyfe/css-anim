import React, { useState } from 'react'
import './Home.css'
import pic1 from './images/pic1.jpeg'
import pic2 from './images/pic2.jpeg'
import pic3 from './images/pic3.jpeg'
import { GrFormNext } from "react-icons/gr";

const Home = () => {

  const pic1_anim = () =>{
    setArrow1(true)
    document.getElementById('anim1').style.width = '50%';
    document.getElementById('anim2').style.width = '25%';
    document.getElementById('anim3').style.width = '25%';
  }
  const pic2_anim = () =>{
    setArrow2(true)
    document.getElementById('anim1').style.width = '25%';
    document.getElementById('anim2').style.width = '50%';
    document.getElementById('anim3').style.width = '25%';
  }
  const pic3_anim = () =>{
    setArrow3(true)
    document.getElementById('anim1').style.width = '25%';
    document.getElementById('anim2').style.width = '25%';
    document.getElementById('anim3').style.width = '50%';
  }

  const arrowAnim = () => {
    setArrow1(false)
    setArrow2(false)
    setArrow3(false)
  }
  const [arrow1, setArrow1] = useState(false)
  const [arrow2, setArrow2] = useState(false)
  const [arrow3, setArrow3] = useState(false)

  return (
    <div className='container' style={{ marginTop: '13vh' }}>
      <h3 className='my-2'>Runner's Workout</h3>
      <div className="container rounded" style={{ border: '2px solid grey', height: '50vh' }}>
        <div className="row">

          <div className="col-12 col-md-4 case rounded px-0" id='anim1' onMouseEnter={pic1_anim} onMouseLeave={arrowAnim}>
            <div className="title">
              <h5>STRENGTH</h5>
              <GrFormNext className={`arrow d-${arrow1===true?'block':'none'}`}/>
            </div>
            <img className='pics rounded' src={pic1} alt="" />
          </div>

          <div className="col-12 col-md-4 case rounded px-0" id='anim2' onMouseEnter={pic2_anim} onMouseLeave={arrowAnim}>
            <div className="title">
              <h5>MOBILITY</h5>
              <GrFormNext className={`arrow d-${arrow2===true?'block':'none'}`}/>
            </div>
            <img className='pics rounded' src={pic2} alt="" />
          </div>

          <div className="col-12 col-md-4 case rounded px-0" id='anim3' onMouseEnter={pic3_anim} onMouseLeave={arrowAnim}>
            <div className="title">
              <h5>DRILLS</h5>
              <GrFormNext className={`arrow d-${arrow3===true?'block':'none'}`}/>
            </div>
            <img className='pics rounded' src={pic3} alt="" />
          </div>

        </div>
      </div>
    </div>
  )
}

export default Home
