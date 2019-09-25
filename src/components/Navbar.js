import React from 'react'

class Navbar extends React.Component {

  render() {
    return (
      <div className="sidebar-section">
        <a href="#aboutme" className="nav-section subtitle is-4 has-text-weight-light">About</a>
        <a href="#projects" className="nav-section subtitle is-4 has-text-weight-light">Projects</a>
        <a href="#skills" className="nav-section subtitle is-4 has-text-weight-light">Skills</a>
        <a href="#contact" className="nav-section subtitle is-4 has-text-weight-light">Contact</a>
      </div>
    )
  }
}
export default Navbar
