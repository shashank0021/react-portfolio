import React from 'react'
import react from './assets/react.png'
import './App.css'

function Right() {





  return (
  <>
  <section className='right'>


    <div className="about-me">
    <h1>About Me</h1>
    <span></span>
    </div>

    <div className="name">
      <p>
      Hello there! 👋 My name is Oktay and I'm from Berlin, Germany. As a Full-Stack software developer, I specialize in creating visually appealing websites, apps and mobile games. My passion for graphic design isn't just a hobby, it's a key ingredient in every project I work on.
      </p>
    </div>

    <div className="primary-focus">
      <h2>Primary Focus</h2>
      <div className="cards">
      <div className="card">
        <h2>
        Web Design & Development
        </h2>
        <p>Creating attractive, easy-to-use websites that work well for businesses and individuals online.</p>
      </div>
      <div className="card">
        <h2>
          Full-Stack Solutions
        </h2>
        <p>Developing scalable web applications using JavaScript Frameworks, SQL Databases, PHP and Python.</p>
      </div>
      <div className="card">
        <h2>
        Mobile Apps & Games
        </h2>
        <p>Creating and developing engaging mobile apps and games for iOS and Android devices.</p>
      </div>
      <div className="card">
        <h2>
        Marketing & SEO
        </h2>
        <p>Using SEO and marketing strategies to boost online visibility and promote products or services.</p>
      </div>
      </div>
    </div>

    <div className="creativity primary-focus">
    <h2>Exploring Creativity</h2>
      <div className="cards">
      <div className="card">
        <h2>Visual Storytelling</h2>
        <p>Taking and editing photos or videos that tell engaging stories, bringing concepts and ideas to life visually.</p>
      </div>
      <div className="card">
        <h2>Digital Content Creation</h2>
        <p>Creating digital elements, such as 3D models, graphics, animations, videos and AI-generated content.</p>
      </div>
      </div>

    </div>

    {/* <div className="development-skill">
      <img src={react} alt="" />
      <img src={ts} alt="" />
      <img src={js} alt="" />
      <img src={css} alt="" />
      <img src={html} alt="" />
      <img src={bootstrap} alt="" />
      <img src={github} alt="" />
    </div> */}


  </section>
  </>
  )
}


export default Right