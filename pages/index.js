import FeatherIcon from 'feather-icons-react/build/FeatherIcon'
import Head from 'next/head';

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
              <div className="menu-item ms-5">Portfolio</div>
              <div className="menu-item ms-5">About Me</div>
              <div className="menu-item ms-5">My Stacks</div>
              <div className="menu-item ms-5 btn-talk">
                Let's Talk
                <FeatherIcon icon="arrow-right" className="icon" />
              </div>
            </div>
          </div>
        </div>
      </nav>

      <main className='hero-section'>
        <div className='container d-flex justify-content-center align-items-center vh-100'>
          <div>
            <h3 className='text-center text-secondary'>Hola 👋🏻 I'm Anas</h3>
            <h1 className="col-12 col-lg-12 mx-auto text-center text-white">
              {/* Frontend Developer  */}
              <span className='gradient-text animated'>Frontend Developer</span> <br/>
              based in Malaysia
            </h1>
          </div>
        </div>
        <div className='btn-scroll'>
          <FeatherIcon icon="arrow-down" className="icon" />
        </div>
        <div className='social-section d-flex flex-column'>
          <FeatherIcon icon="github" className="icon mt-3" />
          <FeatherIcon icon="linkedin" className="icon mt-3" />
          <FeatherIcon icon="twitter" className="icon mt-3" />
        </div>
      </main>

      {/* <footer>
        <p>
          Built with ☕️
        </p>
      </footer> */}
    </div>
  )
}
