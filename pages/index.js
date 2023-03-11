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

export default function Home() {
  return (
    <div>
      <Head>
        <title>Anas - Frontend Developer</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <nav className='nav text-white'>
        <div className='container d-flex justify-content-between'>
          <div>
            Anas
          </div>
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
        </div>
      </nav>

      <main className='hero-section'>
        <div className='container d-flex justify-content-center align-items-center vh-100'>
          <div>
            <h3 className='text-center text-secondary'>Hola 👋🏻 I'm Anas</h3>
            <h1 className="section-title col-12 col-lg-12 mx-auto text-center text-white">
              {/* Frontend Developer  */}
              <span className='gradient-text animated'>Frontend Developer</span> <br/>
              based in Malaysia
            </h1>
          </div>
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
              <h6 className='text-secondary'>A website that I built for people to create beautiful wedding cards that ensure their guests don't miss out on the special event.</h6>
              <h6 className='text-secondary'>11 March 2023</h6>
              <h6 className='text-secondary'>Next.js, Bootstrap, Ant Design</h6>
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
          <h6 className='text-center'>
            Built with Next.js
          </h6>
        </div>
      </footer>
    </div>
  )
}
