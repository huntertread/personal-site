import React, { useState } from 'react'
import MediaQuery from 'react-responsive'
import HamburgerNav from './HamburgerNav/HamburgerNav'
import './header.css'

const Header = () => {

  const [view, setView] = useState('home')

  if (view === 'home') {
    return (
      <div>
        <MediaQuery minDeviceWidth={420}>
          <nav role="banner navigation" aria-label="Main Navigation" className="header-home">
            <a href="#home-section" alt="go to home" className="selected" onClick={() => setView('home')}>Home</a>
            <a href="#about-section" alt="go to about" onClick={() => setView('about')}>About</a>
            <a href="#project-section" alt="go to projects" onClick={() => setView('projects')}>Projects</a>
            <a href="#contact-section" alt="go to contact" onClick={() => setView('contact')}>Contact</a>
          </nav>
        </MediaQuery>
        <MediaQuery maxDeviceWidth={420}>
          <HamburgerNav view={view} setView={setView}/>
        </MediaQuery>
      </div>
    )
  } else if (view === 'about') {
    return (
      <div>
        <MediaQuery minDeviceWidth={420}>
          <nav role="banner navigation" aria-label="Main Navigation" className="header-about">
            <a href="#home-section" alt="go to home" onClick={() => setView('home')}>Home</a>
            <a href="#about-section" alt="go to about" className="selected" onClick={() => setView('about')}>About</a>
            <a href="#project-section" alt="go to projects" onClick={() => setView('projects')}>Projects</a>
            <a href="#contact-section" alt="go to contact" onClick={() => setView('contact')}>Contact</a>
          </nav>
        </MediaQuery>
        <MediaQuery maxDeviceWidth={420}>
          <HamburgerNav view={view} setView={setView}/>
        </MediaQuery>
      </div>
    )
  } else if (view === 'projects') {
    return (
      <div>
        <MediaQuery minDeviceWidth={420}>
          <nav role="banner navigation" aria-label="Main Navigation" className="header-projects">
            <a href="#home-section" alt="go to home" onClick={() => setView('home')}>Home</a>
            <a href="#about-section" alt="go to about" onClick={() => setView('about')}>About</a>
            <a href="#project-section" alt="go to projects" className="selected" onClick={() => setView('projects')}>Projects</a>
            <a href="#contact-section" alt="go to contact" onClick={() => setView('contact')}>Contact</a>
          </nav>
        </MediaQuery>
        <MediaQuery maxDeviceWidth={420}>
          <HamburgerNav view={view} setView={setView}/>
        </MediaQuery>
      </div>
    )
  } else if (view === 'contact') {
    return (
      <div>
        <MediaQuery minDeviceWidth={420}>
          <nav role="banner navigation" aria-label="Main Navigation" className="header-contact">
            <a href="#home-section" alt="go to home" onClick={() => setView('home')}>Home</a>
            <a href="#about-section" alt="go to about" onClick={() => setView('about')}>About</a>
            <a href="#project-section" alt="go to projects" onClick={() => setView('projects')}>Projects</a>
            <a href="#contact-section" alt="go to contact" className="selected" onClick={() => setView('contact')}>Contact</a>
          </nav>
        </MediaQuery>
        <MediaQuery maxDeviceWidth={420}>
          <HamburgerNav view={view} setView={setView}/>
        </MediaQuery>
      </div>
    )
  }
}

export default Header