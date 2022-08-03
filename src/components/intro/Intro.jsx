import React from 'react'
import bgImgBlue from '../../assets/img/vector1.png'
import bgImgYellow from '../../assets/img/vector2.png'
import myPic from '../../assets/img/myPic.png'
import './intro.css'

function Intro() {
  return (
    <section className='intro'>
      <div className="left-div">
        <div className="info">
        <div className='wellcome-msg'> Hello! I Am </div>
        <div className='my-name'> Surajit Naskar </div>
        <div className="intro-msg">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Distinctio tenetur porro suscipit nulla omnis quam laudantium, reiciendis, uptas natus! Error culpa reiciendis voluptate odio, libero aut.
        </div>
        <div className="btns">
            <button className='btn'>Hire me</button>
            <button className='btn'>Resume</button>
        </div>
        <div className="links">
            <span>Git</span>
            <span>in</span>
        </div>
        </div>
      </div>
      <div className="right-div">
        <div className="photo">
            <img src={bgImgBlue} alt="" />
            <img id='myPic' src={myPic} alt="" />
        </div>
      </div>
    </section>
  )
}

export default Intro
