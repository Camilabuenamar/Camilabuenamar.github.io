import React from 'react'
import 'react-responsive-carousel/lib/styles/carousel.min.css'

class AboutMe extends React.Component {

  render() {
    return (
      <section className="section">
        <div className="hero-body-2">
          <div className="container">
            <p className="title is-1 has-text-centered" id="aboutme">About Me</p>
            <div className="columns">
              <div className="column">
                <p className="subtitle is-5">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                <p className="title is-6">Education</p>
                <p className="content text">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                <p className="title is-6">Experience</p>
                <p className="content text">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
              </div>
              <div className="column image-column has-text-centered">
                <img className="picture" id="camila-picture" src="https://imgur.com/j3Q6Wu0.jpg" />
              </div>
            </div>
          </div>
        </div>
      </section>
    )
  }
}
export default AboutMe
