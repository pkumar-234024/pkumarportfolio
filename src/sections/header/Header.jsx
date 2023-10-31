import './header.css'
import header from '../../assets/header.jpeg'
import data from './data';
import AOS from 'aos';
import 'aos/dist/aos.css'
import { useEffect } from 'react';

const Header = () => {

  useEffect(() => {
    AOS.init({duration: 2000})
  }, [])
  return (
    <header id="header">
      <div className="container header__container">
        <div className='header__profile' data-aos="flip-up">
          <img src={header} alt="Header Potrait" />
        </div>
        <h3 data-aos="fade-up">Praveen Kumar</h3>
        <p data-aos="fade-up">
          Hi! I'm a Software Developer with a panchant for Web Development and UI. I'm a developer who loves to solve real problems with awesome people.
          I discover ways to improve products, organizations and industries through technologies.
        </p>
        <div className="header__cta" >
          <a href="#contact" className='btn primary'>Let's Talk</a>
          <a href="#portfolio" className='btn light'>My Work</a>
        </div>
        <div className="header__socials" data-aos='fade-up'>
          {
            data.map(item => <a key={item.id} href={item.link} target='_blank' rel='noopener noreferrer'>{item.icon} </a>)
          }
        </div>
      </div>
    </header>
  )
}

export default Header