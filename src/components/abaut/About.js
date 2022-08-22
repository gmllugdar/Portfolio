import React from 'react'
import './About.css'
import image from '../../media/image-cv.jpg'
const About = () => {
  return (
    <div className='about-container'>
      <div className='about-desc'>
        <h3>Let me tell you something about me</h3>
        <p>I am a full stack developer with experience in web, desktop and mobile application development.  I specialize in JavaScript I have experience working with React and React Native from the front, from the back with Node.js and express, I usually work with relational databases of type SQL, also work with visualBasic and c++. I have been working as a developer for more than 2 years. I love good organization, companionship, respect above all and obviously learning new technologies whenever necessary I put a lot of desire into it!!. Right now I am looking for a position without a special focus since both backend and frontend I like a lot, my point of interest is to continue growing as a professional as well as a person. As extracurricular information I really like music and passive martial arts. </p>
      </div>
      <div className='about-img'>
        <img src={image} alt="img" />
      </div>
    </div>
  )
}

export default About
