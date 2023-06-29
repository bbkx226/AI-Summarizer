import { logo } from "../assets";

const Hero = () => {
  return (
    <header className='w-full flex justify-center items-center flex-col'>
      <nav className='flex justify-between items-center w-full mb-10 pt-3'>
        <img src={logo} alt='sumz_logo' className='w-28 object-contain' />

        <button
          type='button'
          onClick={() =>
            window.open("https://github.com/TidbitsJS/Summize", "_blank")
          }
          className='black_btn'
        >
          GitHub
        </button>
      </nav>

      <h1 className='head_text'>
        Summarize Articles with <br className='max-md:hidden' />
        <span className='orange_gradient '>BrandonGPT</span>
      </h1>
      <h2 className='desc'>
        Discover BrandonGPT - Articles Summarizer, a free and open-source tool 
        designed to simplify your reading experience. This innovative article 
        summarizer efficiently condenses lengthy articles into easily understandable 
        and concise summaries
      </h2>
    </header>
  );
};

export default Hero;