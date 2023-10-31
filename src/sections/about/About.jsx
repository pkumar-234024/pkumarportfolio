import './about.css'
import about from '../../assets/about.jpg'
import cv from '../../assets/cv.pdf'
import resume from '../../assets/resume.pdf'
import {HiDownload} from 'react-icons/hi'
import data from './data'
import Cards from '../../component/Cards'

const About = () => {
  return (
      <section id="about" data-aos="fade-in">
        <div className="container about__container">
          <div className="about__left">
            <div className="about__portrait">
              <img src={about} alt="about" />
            </div>
          </div>
          <div className="about__right">
            <h2>About Me</h2>
            <div className="about__cards">
              {data.map(item => (
                <Cards key={item.id} className="about__card">
                  <span className='about__card-icon'>{item.icon}</span>
                  <h5>{item.title}</h5>
                  <small>{item.desc}</small>
                </Cards>
              ))}
            </div>
            <p>
              Building projects, my dedication towards my work and my organization has always been my top priority.
              Being in the web development industry for over 2+ years and worked on over 5+ projects, I'm always motivated to do more.
            </p>
            <p>
              Hi! My name is Praveen Kumar from Ghazipur, India. I'm a full-stack web developer with a bachelors
               degree in Computer Science & Engineering. My top priority is to get your business online the right way,
               giving your industry standard design and all the functionality you need to operate smoothly online. Get in touch today
               and let's get started! Check on my resume below!
            </p>
            <a href={cv} download className='btn primary'>Download CV
            <HiDownload /></a>
            <a href={resume} download className='btn primary'>Download Resume
            <HiDownload /></a>
          </div>
        </div>
      </section>
  )
}

export default About
