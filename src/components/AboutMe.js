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
              <div className="column is-three-fifths">
                <p className="content text">I am a business graduate who started a women’s empowerment organization in LATAM (Latin America) and this allowed me to further develop my skills in thought leadership. This experience immersed me in women’s representation in technology and the technology itself. I have inspired young women to study within the STEM fields and have challenged myself to study software engineering in the UK. This allowed me to understand the technologies used in tech companies from the operations to the business. Today, my dream is to grow a tech company with my business and tech knowledge and to continue encouraging more women to pursue a career in tech.</p>
                <div className="education-info">
                  <div className="title is-6" id="no-bottom-margin">Education:</div>
                  <div className="subtitle is-6" id="education">
                  ・Summer 2019 <span className="has-text-weight-semibold">Software Engineering Immersive</span> General Assembly, London, United Kingdom. <br />
                  ・2013 - 2018 <span className="has-text-weight-semibold">Bachelor of Business Administration</span> Universidad de los Andes, Bogota, Colombia.<br />
                  ・Fall 2017 <span className="has-text-weight-semibold">University Innovation Fellows Program</span> Hasso Plattner Institute of Design at Stanford University, California, USA.

                  </div>
                </div>
                <div className="experience-info">
                  <div className="title is-6" id="no-bottom-margin">Experience:</div>
                  <div className="subtitle is-6" id="experience">
                  ・August 2018 <span className="has-text-weight-semibold">Speaker and Facilitator</span> Loop: Innovation week of Montevideo, Montevideo, Uruguay.<br />
                  ・Summer 2018 <span className="has-text-weight-semibold">Start-up scouting Intern</span> Rockstart Accelerator, Bogota, Colombia.<br />
                  ・2016-2018 <span className="has-text-weight-semibold">Co-founder and President</span> Uniandes Women in Business, Bogota, Colombia.<br />
                  ・2016, 2017 <span className="has-text-weight-semibold">Harvard Undergraduate Women in Business Campus Ambassador Leader</span> Harvard University, Boston, Massachusetts, USA.<br />
                  ・Summer 2017 <span className="has-text-weight-semibold">Women in Technology International Programs Coordinator</span> Foundation Women for Colombia, Bogota, Colombia.<br />
                  ・2016-2017 <span className="has-text-weight-semibold">Teacher Assistant</span> Universidad de los Andes, Bogotá, Colombia.<br />
                  ・2015-2016 <span className="has-text-weight-semibold">Sub manager</span> Buenaventura Import Customs Broker, Bogota, Colombia.<br />
                  ・2013-2014 <span className="has-text-weight-semibold">Human Resources Coordinator</span> Buenaventura Import Customs Broker, Bogota, Colombia.<br />
                  </div>
                </div>
              </div>
              <div className="column image-column has-text-centered is-two-fifths">
                <img className="picture" id="camila-picture" src="https://imgur.com/j3Q6Wu0.jpg" />
                <div><a className="button is-white is-inverted is-outlined" href="../downloaders/cv.pdf" download>CV</a></div>
              </div>
            </div>
          </div>
        </div>
      </section>
    )
  }
}
export default AboutMe
