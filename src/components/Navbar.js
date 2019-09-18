import React from 'react'

class Navbar extends React.Component {

  render() {
    return (
      <div className="sidebar-section">
        <a href="#About" className="nav-section subtitle is-4">About</a>
        <a href="#Projects" className="nav-section subtitle is-4">Projects</a>
        <a href="#Projects" className="nav-section subtitle is-4">Skills</a>
        <a href="#Contact" className="nav-section subtitle is-4">Contact</a>
      </div>
    )
  }
}
export default Navbar
