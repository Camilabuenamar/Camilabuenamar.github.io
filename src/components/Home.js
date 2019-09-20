import React from 'react'
import Projects from './Projects.js'
import AboutMe from './AboutMe.js'
import Skills from './Skills.js'
import Contact from './Contact.js'


class Home extends React.Component {

  render() {
    return (
      <section className="section">
        <div className="hero-body-1">
          <div className="container">
            <div className="columns">
              <div className="column my-picture">
                <img className="picture" src="https://imgur.com/j3Q6Wu0.jpg" />
              </div>
              <div className="column name">
                <p className="title is-1" id="camila">CAMILA</p>
                <p className="title is-2">BUENAVENTURA MÁRQUEZ</p>
                <p className="subtitle is-2">
                  Business and Web Development
                </p>
              </div>
            </div>
          </div>
        </div>
        <AboutMe/>
        <Projects/>
        <Skills/>
        <Contact/>
      </section>
    )
  }
}
export default Home
