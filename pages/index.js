import FeatherIcon from 'feather-icons-react/build/FeatherIcon'
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import KadDigitalPreview from '../public/kad-digital-preview.png';
import ProfilePicture from '../public/profile.jpeg';

import Angular from '../public/angular.png';
import ReactJS from '../public/react.png';
import NextJS from '../public/next.png';
import Javascript from '../public/javascript.png';
import HTML from '../public/html.png';
import Bootstrap from '../public/bootstrap.png';
import CSS from '../public/css.png';
import SCSS from '../public/scss.png';
import { useState } from 'react';

export default function Home() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
      <Head>
        <title>Anas - Frontend Developer</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <nav className='nav text-white'>
        <div className='container d-flex justify-content-between'>
          <Link href="/" className='d-flex flex-row logo'>
            <FeatherIcon icon="code" />
            <div className='ms-2'>Anas</div>
          </Link>
          <div>
            <div className="menu d-flex flex-row">
              <a href='#portfolio' className="menu-item ms-5">Portfolio</a>
              <a href='#about' className="menu-item ms-5">About Me</a>
              <a href='#stack' className="menu-item ms-5">My Stack</a>
              <a href='mailto:muhammadanasbinadam@gmail.com' className="menu-item ms-5 btn-talk">
                Let's Talk
                <FeatherIcon icon="arrow-right" className="icon" />
              </a>
            </div>
          </div>
          <button className='btn menu-btn' onClick={() => setIsOpen(!isOpen)}>
            <FeatherIcon icon="menu" color="white" size={30} />
          </button>
          <div
            className={isOpen ? 'side-menu side-menu-open p-3 shadow-sm':'side-menu p-3 shadow-sm'}
          >
            <button className='btn close-btn' onClick={() => setIsOpen(!isOpen)}>
              <FeatherIcon icon="x" size={30} />
            </button>
            <div className='min-vh-100 d-flex justify-content-center align-items-center'>
              <div className="d-flex flex-column">
                <a href="#portfolio" className="menu-mobile" onClick={() =>setIsOpen(!isOpen)}>Portfolio</a>
                <a href="#about" className="menu-mobile" onClick={() =>setIsOpen(!isOpen)}>About Me</a>
                <a href="#stack" className="menu-mobile" onClick={() =>setIsOpen(!isOpen)}>My Stack</a>
                <a href='mailto:muhammadanasbinadam@gmail.com' className="menu-mobile btn-talk" onClick={() =>setIsOpen(!isOpen)}>
                  Let's Talk
                  <FeatherIcon icon="arrow-right" className="icon" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </nav>

      <main className='hero-section'>
        <div className='container d-flex justify-content-center align-items-center vh-100'
          style={{ position: 'relative' }}
        >
          <div>
            <h3 className='text-center text-secondary'>Hola 👋🏻 I'm Anas</h3>
            <h1 className="section-title col-12 col-lg-12 mx-auto text-center text-white">
              <span className='gradient-text animated'>Frontend Developer</span> <br/>
              based in Malaysia
            </h1>
          </div>
          <a href='#portfolio' className='btn-scroll'>
            <FeatherIcon icon="arrow-down" className="icon" />
          </a>
          <div className='social-section d-flex flex-column'>
            <Link
              href="https://github.com/anas283"
              target="_blank"
            >
              <FeatherIcon icon="github" className="icon mt-3" />
            </Link>
            <Link
              href="https://www.linkedin.com/in/anas283/"
              target="_blank"
            >
              <FeatherIcon icon="linkedin" className="icon mt-3" />
            </Link>
            <Link
              href="https://twitter.com/whoishodor"
              target="_blank"
            >
              <FeatherIcon icon="twitter" className="icon mt-3" />
            </Link>
          </div>
        </div>
      </main>

      <section id='portfolio' className='portfolio-section container py-5'>
        <h1 className='section-title'>
          Latest project
        </h1>

        <div className="row mt-5">
          <div className='col-12 col-lg-6'>
            <div className='card shadow-sm border-0 image-box'>
              <Link 
                href="https://www.kad-digital.com/"  
                target="_blank"
              >
                <Image 
                  src={KadDigitalPreview}
                  alt="kad-digital-preview"
                />
              </Link>
            </div>
          </div>
          <div className='col-12 col-lg-6 d-flex align-items-center'>
            <div className='py-3 col-12 col-lg-11 mx-auto'>
              <h3>Kad Digital</h3>
              <h6 className='date text-secondary'>11 March 2023</h6>
              <div>
                <span class="badge rounded-pill bg-light me-2 mb-2">Next.js</span>
                <span class="badge rounded-pill bg-light me-2 mb-2">Node.js</span>
                <span class="badge rounded-pill bg-light me-2 mb-2">MySQL</span>
                <span class="badge rounded-pill bg-light me-2 mb-2">Bootstrap</span>
                <span class="badge rounded-pill bg-light me-2 mb-2">Ant Design</span>
              </div>
              <h6 className='text-secondary mt-2'>A website that I built for people to create beautiful wedding cards that ensure their guests don't miss out on the special event.</h6>
              <Link 
                href="https://www.kad-digital.com/"  
                target="_blank"
                className='btn btn-dark px-5 mt-3'
              >
                Visit
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section id='about' className='about-section'>
        <div className='container py-5'>
          
          <div className='row'>
            <div className="col-12 col-lg-6 d-flex align-items-center">
              <div>
                <h1 className='section-title'>
                  About Me
                </h1>
                <h6 className='summary mt-4'>
                  Hi there! I'm a frontend developer with a passion for creating 
                  beautiful and functional user interfaces. I love the challenge 
                  of taking complex problems and turning them into intuitive and 
                  engaging experiences.
                  <br />
                  <br />
                  I have a strong eye for design and a deep appreciation for aesthetics. 
                  I believe that a great user interface should not only be functional, 
                  but also visually appealing and easy to use.
                </h6>
                <a 
                  href="/Resume-Muhammad-Anas.pdf"
                  target="_blank"
                  className='btn btn-link px-0 mt-3 text-dark'
                >
                  See my resume
                  <FeatherIcon icon="external-link" size={20} className="ms-2 mb-1" />
                </a>
              </div>
            </div>
            <div className="col-12 col-lg-6">
              <Image
                className='profile-img'
                src={ProfilePicture}
                alt="anas"
              />
            </div>
          </div>
        </div>
      </section>

      <section id='stack' className='stack-section container py-5'>
        <h1 className='section-title text-center'>
          My Stack
        </h1>
        <div className='mt-5 row'>
          <div className="col-3 col-lg my-3">
            <Image className='logo' src={Angular} />
          </div>
          <div className="col-3 col-lg my-3">
            <Image className='logo' src={ReactJS} />
          </div>
          <div className="col-3 col-lg my-3">
            <Image className='logo' src={NextJS} />
          </div>
          <div className="col-3 col-lg my-3">
            <Image className='logo' src={Javascript} />
          </div>
          <div className="col-3 col-lg my-3">
            <Image className='logo' src={HTML} />
          </div>
          <div className="col-3 col-lg my-3">
            <Image className='logo' src={Bootstrap} />
          </div>
          <div className="col-3 col-lg my-3">
            <Image className='logo' src={CSS} />
          </div>
          <div className="col-3 col-lg my-3">
            <Image className='logo' src={SCSS} />
          </div>
        </div>
      </section>

      <footer>
        <div className='container py-5'>
          <h1>Contact me</h1>
          <a href="mailto:muhammadanasbinadam@gmail.com" className='email'>
            <h1>
              <span className='text-underline'>muhammadanasbinadam@gmail.com</span> 
              <FeatherIcon icon="arrow-right" className="ms-2" size={30}  />
            </h1>
          </a>
          <div className='row mt-5'>
            <div className='order-2 order-md-1 col-12 col-lg-8 author'>
              Muhammad Anas | 2023
            </div>
            <div className='order-1 order-md-2 col-12 col-lg-4'>
              <div className='d-flex justify-content-between'>
                <Link
                  href="https://github.com/anas283"
                  target="_blank"
                  className='link'
                >
                  GitHub
                </Link>
                <Link
                  href="https://www.linkedin.com/in/anas283/"
                  target="_blank"
                  className='link'
                >
                  LinkedIn
                </Link>
                <Link
                  href="https://twitter.com/whoishodor"
                  target="_blank"
                  className='link'
                >
                  Twitter
                </Link>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
