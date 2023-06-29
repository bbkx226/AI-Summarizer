import { logo } from "../assets";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee } from '@fortawesome/free-solid-svg-icons'

const Hero = () => {
  return (
    <header className='w-full flex justify-center items-center flex-col'>
      <nav className='flex justify-between items-center w-full mb-10 pt-3'>
        <a href="https://www.bbkx.live/" target="_blank"><img src={logo} alt='BrandonGPT' className='w-36 object-contain' /></a>

        <button
          type='button'
          onClick={() =>
            window.open("https://github.com/bbkx226", "_blank")
          }
          className='black_btn'
        >
          GitHub <FontAwesomeIcon icon={faCoffee} />
        </button>
      </nav>

      <h1 className='head_text'>
        AI Summarizer with <br className='max-md:hidden' />
        <span className='purple_gradient '>BrandonGPT</span>
      </h1>
      <h2 className='desc'>
        Introducing BrandonGPT - Article Summarizer: Simplify your reading. Get concise summaries of lengthy articles for free.</h2>
    </header>
  );
};

export default Hero;