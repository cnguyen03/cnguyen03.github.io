export default function Contacts() {
    return (
      <div className="flex my-4 justify-center space-x-10">
        {/* LinkedIn Icon */}
        <div className="group flex flex-col items-center">
        <a href="https://www.linkedin.com/in/cnguyen-in/" target="_blank" rel="noopener noreferrer">
            <img
                src="/linkedin.svg"
                alt="LinkedIn"
                className="transform transition-transform duration-300 hover:scale-125"
            />
        </a>
        <span className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 font-playfair my-1">
        linkedin
        </span>
        </div>
  
        {/* GitHub Icon */}
        <div className="group flex flex-col items-center">
        <a href="https://github.com/cnguyen03" target="_blank" rel="noopener noreferrer">
          <img
            src="/github.svg"
            alt="Github"
            className="transform transition-transform duration-300 hover:scale-125"
          />
        </a>
        <span className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 font-playfair my-1">
        github
        </span>
        </div>
  
        {/* Email Icon */}
        <div className="group flex flex-col items-center">
            <a href="https://mail.google.com/mail/u/0/?fs=1&to=calvinnguyen03@gmail.com&tf=cm" target="_blank" rel="noopener noreferrer">
          <img
            src="/mail.svg"
            alt="Email"
            className="transform transition-transform duration-300 hover:scale-125"
          />
          </a>
          <span className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 font-playfair my-1">
            email
          </span>
        </div>
      </div>
    );
  }
  