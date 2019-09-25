import React from 'react'
import 'react-responsive-carousel/lib/styles/carousel.min.css'

const projectOne = {
  'image': 'https://imgur.com/gLngRsr.jpg',
  'name': 'Project 1',
  'description': 'A vanilla JavaScript grid base game inspired in frogger to encourage little girls to study stem careers. <br /> Tech: HTML5, CSS3 and JavaScript. <br /> Time: 1 week (solo project)',
  'github': 'https://github.com/Camilabuenamar/project-01',
  'link': 'http://camilabuenamar.com/project-01/'
}
const projectTwo = {
  'image': 'https://imgur.com/RpKrF55.jpg',
  'name': 'El Camello',
  'description': 'An APP to find jobs and networking events using public APIs. <br /> Tech: HTML5, CSS, Bulma, JavaScript, React, Webpack, Axios, Babel and Lodash. <br /> Time: 2 days (pair project)',
  'github': 'https://github.com/Camilabuenamar/project-02',
  'link': 'http://camilabuenamar.com/project-02/'
}
const projectThree = {
  'image': 'https://imgur.com/Yhdv2hk.jpg',
  'name': 'Burgerrator',
  'description': 'A MERN stack App to find and rate the best burgers. <br /> Tech: HTML5, CSS, Bulma, JavaScript, React, Node.js, Express, MongoDB & Mongoose. <br /> Time: 1 week (group of four)',
  'github': 'https://github.com/Camilabuenamar/project-03',
  'link': 'http://camilabuenamar.com/project-03/'
}
const projectFour = {
  'image': 'https://imgur.com/P4PKrQu.jpg',
  'name': 'ADA',
  'description': 'A Hiring App for women developers in gender responsible companies. <br /> Tech: HTML5, CSS, Python, Django, Bulma, JavaScript & React. <br /> Time: 1 week (solo project)',
  'github': 'https://github.com/Camilabuenamar/project-04',
  'link': 'http://camilabuenamar.com/project-04/'
}

class Projects extends React.Component {

  constructor() {
    super()

    this.state = {
      project: projectOne
    },
    this.changeProject = this.changeProject.bind(this)
  }

  changeProject(e){
    const projectOne = {
      'image': 'https://imgur.com/gLngRsr.jpg',
      'name': 'Project 1',
      'description': 'A vanilla JavaScript grid base game inspired in frogger to encourage little girls to study stem careers. <br /> Tech: HTML5, CSS3 and JavaScript. <br /> Time: 1 week (solo project)',
      'github': 'https://github.com/Camilabuenamar/project-01',
      'link': 'http://camilabuenamar.com/project-01/'
    }
    const projectTwo = {
      'image': 'https://imgur.com/RpKrF55.jpg',
      'name': 'El Camello',
      'description': 'An APP to find jobs and networking events using public APIs. <br /> Tech: HTML5, CSS, Bulma, JavaScript, React, Webpack, Axios, Babel and Lodash. <br /> Time: 2 days (pair project)',
      'github': 'https://github.com/Camilabuenamar/project-02',
      'link': 'http://camilabuenamar.com/project-02/'
    }
    const projectThree = {
      'image': 'https://imgur.com/Yhdv2hk.jpg',
      'name': 'Burgerrator',
      'description': 'A MERN stack App to find and rate the best burgers. <br /> Tech: HTML5, CSS, Bulma, JavaScript, React, Node.js, Express, MongoDB & Mongoose. <br /> Time: 1 week (group of four)',
      'github': 'https://github.com/Camilabuenamar/project-03',
      'link': 'http://camilabuenamar.com/project-03/'
    }
    const projectFour = {
      'image': 'https://imgur.com/P4PKrQu.jpg',
      'name': 'ADA',
      'description': 'A Hiring App for women developers in gender responsible companies. <br /> Tech: HTML5, CSS, Python, Django, Bulma, JavaScript & React. <br /> Time: 1 week (solo project)',
      'github': 'https://github.com/Camilabuenamar/project-04',
      'link': 'http://camilabuenamar.com/project-04/'
    }
    const showProject = e.target.value
    this.setState({ project: showProject})
    console.log(this.state.project.name)
  }

  render() {
    return (
      <section className="section">
        <div className="hero-body-1">
          <div className="container">
            <p className="title is-1 has-text-centered" id="projects">Projects</p>
            <div className="columns" id="project-columns">
              <div className="column screenshot">
                <img src={this.state.project.image} alt={this.state.project.name}/>
              </div>
              <div className="column detail">
                <p className="title is-3">{this.state.project.name}</p>
                <p className="subtitle is-4">{this.state.project.description}</p>
                <p className="sub is-5">{this.state.project.github}</p>
                <p className="sub is-5">{this.state.project.link}</p>
              </div>
            </div>
            <div className="buttons is-centered">
              <button className="button" value="projectOne" onClick={this.changeProject}>1</button>
              <button className="button" value="projectTwo" onClick={this.changeProject}>2</button>
              <button className="button" value="projectThree" onClick={this.changeProject}>3</button>
              <button className="button" value="projectFour" onClick={this.changeProject}>4</button>
            </div>
          </div>
        </div>
      </section>
    )
  }
}
export default Projects
