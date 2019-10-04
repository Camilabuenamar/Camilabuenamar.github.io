import React from 'react'
import 'react-responsive-carousel/lib/styles/carousel.min.css'

const projectOne = {
  'image': 'https://imgur.com/gLngRsr.jpg',
  'name': 'Wonder Women',
  'description': 'A vanilla JavaScript grid base game inspired in frogger to encourage little girls to study stem careers.',
  'tech': ['HTML5', 'CSS3', 'JavaScript'],
  'time': '1 week (solo project)',
  'github': 'https://github.com/Camilabuenamar/project-01',
  'link': 'http://camilabuenamar.com/project-01/'
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
    let project = projectOne
    switch (e.target.value) {
      case 'projectOne':
        project = {
          'image': 'https://imgur.com/gLngRsr.jpg',
          'name': 'Wonder Women',
          'description': 'A vanilla JavaScript grid base game inspired in frogger to encourage little girls to study stem careers.',
          'tech': ['HTML5', 'CSS3', 'JavaScript'],
          'time': '1 week (solo project)',
          'github': 'https://github.com/Camilabuenamar/project-01',
          'link': 'http://camilabuenamar.com/project-01/'
        }
        this.setState({ project: project })
        break
      case 'projectTwo':
        project = {
          'image': 'https://imgur.com/RpKrF55.jpg',
          'name': 'El Camello',
          'description': 'An APP to find jobs and networking events using public APIs.',
          'tech': ['HTML5', 'CSS', 'Bulma', 'JavaScript', 'React', 'Webpack', 'Axios', 'Babel', 'Lodash'],
          'time': '2 days (pair project)',
          'github': 'https://github.com/Camilabuenamar/project-02',
          'link': 'http://camilabuenamar.com/project-02/'
        }
        this.setState({ project: project })
        break
      case 'projectThree':
        project = {
          'image': 'https://imgur.com/Yhdv2hk.jpg',
          'name': 'Burgerrator',
          'description': 'A MERN stack App to find and rate the best burgers.',
          'tech': ['HTML5', 'CSS', 'Bulma', 'JavaScript', 'React', 'Node.js', 'Express', 'MongoDB', 'Mongoose'],
          'time': '1 week (group of four)',
          'github': 'https://github.com/Camilabuenamar/project-03',
          'link': 'https://burgerrator.herokuapp.com'
        }
        this.setState({ project: project })
        break
      case 'projectFour':
        project = {
          'image': 'https://imgur.com/P4PKrQu.jpg',
          'name': 'ADA',
          'description': 'A Hiring App for women developers in gender responsible companies.',
          'tech': ['HTML5', 'CSS', 'Python', 'Django', 'Bulma', 'JavaScript', 'React'],
          'time': '1 week (solo project)',
          'github': 'https://github.com/Camilabuenamar/project-04',
          'link': 'https://ada-women30.herokuapp.com/#/offers'
        }
        this.setState({ project: project })
        break
    }
  }

  render() {
    return (
      <section className="section">
        <div className="hero-body-1">
          <div className="container">
            <p className="title is-1 has-text-centered" id="projects">Projects</p>
            <div className="columns is-3" id="project-columns">
              <div className="column screenshot is-two-fifths">
                <img src={this.state.project.image} alt={this.state.project.name} className="image-screenshot"/>
              </div>
              <div className="column detail is-two-fifths">
                <p className="title is-3">{this.state.project.name.toUpperCase()}</p>
                <p className="subtitle is-4">{this.state.project.description.toUpperCase()}</p>
                <p className="subtitle is-4"><span className="has-text-weight-semibold">Tools: </span> <br /> {this.state.project.tech.map(tech => <div className="tag is-medium" key={tech}> {tech} </div>)} </p>
                <p className="subtitle is-4">{this.state.project.time}</p>
                <p className="">
                  <a  href={this.state.project.github} className="icon is-small" rel="noopener noreferrer" target="_blank"><img src="https://imgur.com/ObMW98D.png" alt="GithubLogo"/></a>         .
                  <a  href={this.state.project.link} className="icon is-small" rel="noopener noreferrer" target="_blank"><img src="https://imgur.com/LoY2chP.png" alt="LinkedLogo"/></a>
                </p>
              </div>
            </div>
            <div className="buttons is-centered">
              <button className="button is-rounded is-white is-inverted is-outlined is-small" value="projectOne" onClick={this.changeProject}></button>
              <button className="button is-rounded is-white is-inverted is-outlined is-small" value="projectTwo" onClick={this.changeProject}></button>
              <button className="button is-rounded is-white is-inverted is-outlined is-small" value="projectThree" onClick={this.changeProject}></button>
              <button className="button is-rounded is-white is-inverted is-outlined is-small" value="projectFour" onClick={this.changeProject}></button>
            </div>
          </div>
        </div>
      </section>
    )
  }
}
export default Projects
