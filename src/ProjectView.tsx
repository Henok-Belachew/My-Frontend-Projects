import { NavLink, Outlet } from "react-router-dom"
import { IoMdArrowBack } from "react-icons/io";
import { IoIosMenu } from "react-icons/io";
import { Projects } from "./Projects";
import { LuGithub } from "react-icons/lu";
import Modal from "./Components/Modal";
import { useState } from "react";
import { useEffect } from "react";
// import { NavLink } from "react-router-dom";



function getIDFromURL(): number | null {
  const url: string = window.location.pathname; // Get the path part of the URL
  const matches: RegExpMatchArray | null = url.match(/\d+$/); // Use regex to match the last sequence of digits

  if (matches && matches.length > 0) {
    const id: number = parseInt(matches[0], 10); // Parse the matched digits as an integer
    return isNaN(id) ? null : id; // Return the number if it's a valid integer, otherwise return null
  }
  
  return null; // Return null if no digits were found
}


function getSourceCodeLink({ id }: { id: number }) { 
 

  const SourceCodeLink: string = Projects.find((project) => project.id === id)?.sourceCodeLink || '';

  
  return (
     SourceCodeLink
  )
}

function ProjectView() {
  const [isModalOpen, setModalOpen] = useState(false);

  const id: number | null = getIDFromURL();
  const SourceCodeLink = getSourceCodeLink({ id: id || 0 });

  function getNumberFromURL(): number | null {
  const url: string = window.location.pathname; // Get the path part of the URL
  const parts: string[] = url.split('/'); // Split the path into parts using '/' as separator
  const lastPart: string = parts[parts.length - 1]; // Get the last part of the path
  const number: number = parseInt(lastPart, 10); // Parse the last part as an integer

  return isNaN(number) ? null : number; // Return the number if it's a valid integer, otherwise return null
}

// Example usage:
const number: number | null = getNumberFromURL();
console.log("Number from URL:", number);



  useEffect(() => {
    window.scrollTo(0, 0);
  })

  return (
    <div className="relative">
      <div className="flex flex-col gap-0 ">
        
        <div className="py-4 px-8 flex items-center justify-between text-dark-blue border-[#dbe5e6] border-b-[1px]">
          
          <NavLink to={"/"} className="flex gap-2 items-center">
            <IoMdArrowBack />
            Back
    
          </NavLink>
          
    
          <span onClick={() => isModalOpen ? setModalOpen(false) : setModalOpen(true)} className="flex font-semibold gap-2 items-center cursor-pointer">
            Projects List
            <IoIosMenu />
          </span>
          
    
    
        </div>

        <Outlet/>
    
        <div className="py-4 px-8 flex items-center justify-center  border-[#dbe5e6] border-t-[1px]">
          
          
          
    
          <button onClick={() => window.open(SourceCodeLink, "_blank")} className="hover:shadow-md  flex justify-center items-center gap-2 w-fit px-4  py-2 rounded-md  border-[#dbe5e6] border-[1px] ">
                <span className="font-medium text-[13px] font-barlow text-dark-blue ">Source Code</span>   <LuGithub color="rgb(10 62 109 )" />
            </button>
          
    
    
        </div>
        
        </div>
      

      
      
      {isModalOpen && <Modal setModalOpen={setModalOpen} modalState={isModalOpen} />}
    </div>
    
  )
}

export default ProjectView
