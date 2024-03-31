import { FaLinkedinIn } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";

function Footer() {
  return (
    <div className="bg-dark-blue justify-center py-4 w-full flex gap-4 text-white">
        
          <FaLinkedinIn  className="cursor-pointer " size={20} onClick={() => window.open("https://www.linkedin.com/in/henok-belachew/", "_blank")}  />
          <h1>- Let's connect! -</h1>
          <FaGithub className="cursor-pointer " size={20} onClick={() => window.open("https://github.com/Henok-Belachew", "_blank")} />

    
      </div>
  )
}

export default Footer
