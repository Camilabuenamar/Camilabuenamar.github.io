import React from 'react'
import 'react-responsive-carousel/lib/styles/carousel.min.css'
class Projects extends React.Component {

  render() {
    return (
      <section className="section">
        <div className="hero-body-1">
          <div className="container">
            <p className="title is-1 has-text-centered" id="contact">Get in touch</p>
            <div className="column is-three-quarters" id="contact-me">
              <br /> <br />
              <h3 className=" title is-4 has-text-centered">Email Address</h3>
              <div className="buttons is-centered">
                <a href="mailto:camila.buenamar@gmail.com" className="link-to-contact button is-dark" rel="noopener noreferrer">Camila.buenamar@gmail.com</a>
              </div>
              <h3 className="title is-4 has-text-centered">Github</h3>
              <div className="buttons is-centered">
                <a href="https://github.com/Camilabuenamar" className="link-to-contact button is-dark is-centered" rel="noopener noreferrer" target="_blank">Camilabuenamar</a>
              </div>
              <h3 className="title is-4 has-text-centered">LinkedIn</h3>
              <div className="buttons is-centered">
                <a href="https://www.linkedin.com/in/camilabuenamar/" className="link-to-contact button is-dark is-centered" rel="noopener noreferrer" target="_blank">Camila Buenaventura Marquez</a>
              </div>
            </div>
          </div>
        </div>
      </section>
    )
  }
}
export default Projects
