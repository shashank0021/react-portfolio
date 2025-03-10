import React from 'react'
import "./App.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faTwitter, faInstagram, faGithub } from '@fortawesome/free-brands-svg-icons';


function Aside(){



  return (
    <>
    <aside className='container-profile'>
        <div className="img">
        <img src='data:image/jpeg;base64,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' />
        </div>
        <div className="profile-info">
        <h2>
            Shashank sharma
        </h2>
        <input  type='text'  value="hello" readOnly/>
        <hr/>
        <ul>

        <li className="icons-info">
            <div className="icon">
            <FontAwesomeIcon icon={faLinkedin} />
            

            </div>
            <div className="info">
                <p>AGE</p>
                <time>29 years old</time>

            </div>

        </li>
        <li className="icons-info">
            <div className="icon">
            <FontAwesomeIcon icon={faLinkedin} />
            

            </div>
            <div className="info">
                <p>LOCATION</p>
                <address>Berlin, Germany</address>

            </div>

        </li>
        <li className="icons-info">
            <div className="icon">
            <FontAwesomeIcon icon={faLinkedin} />
               

            </div>
            <div className="info">
                 <p>PERSONALITY TYPE</p>
                <type>INTJ-T</type>
           

            </div>

        </li>
        </ul>



        </div>


        <div className="social-icons">
           
            <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon icon={faLinkedin} />
            </a>
            <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon icon={faTwitter} />
            </a>
            <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon icon={faInstagram} />
            </a>
            <a href="https://www.github.com" target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon icon={faGithub} />
            </a>
        </div>


    </aside>
    </>
  )
}

export default Aside