import React from 'react'
import 'react-responsive-carousel/lib/styles/carousel.min.css'
class Projects extends React.Component {

  render() {
    return (
      <section className="section">
        <div className="hero-body-2">
          <div className="container">
            <p className="title is-1 has-text-centered" id="skills">Skills</p>
            <div className="columns">
              <div className="column image-column is-two-fifths">
                <img className="image"id="skills-picture" src="https://imgur.com/R0lynw1.jpg" />
              </div>
              <div className="column logos">
                <p id="logos"> <br /> <br />
                  <i className="devicon-html5-plain-wordmark icon is-large"/>
                  <i className="devicon-css3-plain-wordmark icon is-large"/>
                  <i className="devicon-javascript-plain icon is-large"/>
                  <i className="devicon-nodejs-plain-wordmark icon is-large"/>
                  <i className="devicon-python-plain-wordmark icon is-large"/>
                  <i className="devicon-react-original-wordmark icon is-large"/>
                  <i className="devicon-express-original-wordmark icon is-large"/>
                  <i className="devicon-mongodb-plain-wordmark icon is-large"/>
                  <i className="devicon-sass-original icon is-large"/>
                  <i className="devicon-webpack-plain-wordmark icon is-large"/>
                  <i className="devicon-postgresql-plain-wordmark icon is-large"/>
                  <i className="devicon-django-line-wordmark icon is-large"/>
                  <i className="devicon-git-plain-wordmark icon is-large"/>
                  <i className="devicon-github-plain-wordmark icon is-large"/>
                  <i className="devicon-heroku-plain-wordmark icon is-large"/>
                  <i className="devicon-mocha-plain icon is-large"/>
                  <i className="devicon-atom-original-wordmark icon is-large"/>
                  <i className="devicon-babel-plain icon is-large"/>
                  <i className="devicon-trello-plain-wordmark icon is-large"/>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    )
  }
}
export default Projects
