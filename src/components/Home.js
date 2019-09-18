import React from 'react'
import Projects from './Projects.js'


class Home extends React.Component {

  render() {
    return (
      <section className="section">
        <div className="hero-body-inverted">
          <div className="container">
            <div className="columns">
              <div className="column my-picture">
                <img className="picture" src="https://imgur.com/j3Q6Wu0.jpg" />
              </div>
              <div className="column name">
                <div className="title is-1">CAMILA</div>
                <div className="title is-2">BUENAVENTURA MÁRQUEZ</div>
                <div className="subtitle is-2">
                  Business and Web Development
                </div>
              </div>
            </div>
          </div>
        </div>
        <Projects/>
      </section>
    )
  }
}
export default Home
