
import TagGenerator from "./TagGenerator";
import { LuExternalLink,LuGithub } from "react-icons/lu";
import { NavLink } from "react-router-dom";

interface Props {
    projectName: string;
    html: boolean;
    css: boolean;
    ts: boolean;
    api: boolean;
    tag: string;
    demoLink: string;
    sourceCodeLink: string;
    img: string;
    description: string;
    id: number
}


function ProjectCard({projectName, html, css, ts, api, tag, demoLink, sourceCodeLink, img, description, id}: Props) {
  return (
    <div className= "w-[320px]   bg-white border-[1px] rounded-lg border-[#dbe5e6]">
      
        <NavLink to={`/projects/${id}`} className="overflow-hidden">
            <img src={img} className="transition-transform duration-300 hover:scale-105 w-full" alt="" />
        </NavLink>
      


    {/* Other Contents */}
     <div className="p-4 flex flex-col gap-2">

     <h1 className="font-barlow text-[24px] font-semibold">{projectName}</h1>

        {/* LABELS */}
      <div className="flex justify-between items-center">
            <span className="flex gap-2 font-bold text-[18px]">
                {html && <span className="text-sky-blue">HTML</span>}
                { css && <span className="text-royal-blue">CSS</span> }
                {  ts && <span className="text-pink">TS</span>  }
                { api && <span className="text-lime-green">API</span> }
            </span>

            <TagGenerator tag={tag} />

            

      </div>

      <p className="font-Heebo text-[14px] text-on-surface-light">
        {description}
      </p>

      {/* Buttons */}

      <div className="flex gap-4 items-center mt-4">
      <NavLink className="hover:shadow-md hover:font-semibold flex justify-center  items-center gap-2 w-full bg-dark-blue  py-2 rounded-md border-[1px] border-dark-blue" to={`/projects/${id}`} >
        
            <span className="font-semibold font-barlow text-white ">Demo </span>  <LuExternalLink color="white" />
        
        </NavLink>
        <button onClick={() => window.open(sourceCodeLink, "_blank")} className="hover:shadow-md  flex justify-center items-center gap-2 w-full  py-2 rounded-md border-[1px] border-dark-blue bg-[#dbe5e6]">
            <span className="font-medium font-barlow text-dark-blue ">Source Code</span>   <LuGithub color="rgb(10 62 109 )" />
        </button>
      </div>



     </div>
        

      
    </div>
  )
}

export default ProjectCard
