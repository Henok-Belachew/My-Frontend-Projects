
import TagGenerator from "./TagGenerator";
import { LuExternalLink,LuGithub } from "react-icons/lu";

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
}


function ProjectCard({projectName, html, css, ts, api, tag, demoLink, sourceCodeLink, img, description}: Props) {
  return (
    <div className= "w-[320px]   bg-white border-[1px] rounded-lg border-[#dbe5e6]">
      
        <div className="overflow-hidden">
            <img src={img} className="transition-transform duration-300 hover:scale-105 w-full" alt="" />
        </div>
      


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
        <button onClick={() => window.open(demoLink, "_blank")} className="hover:shadow-md hover:font-semibold flex justify-center  items-center gap-2 w-full  py-2 rounded-md border-[1px] border-[#dbe5e6]">
            <span className="font- font-barlow ">Demo</span>  <LuExternalLink />
        </button>
        <button onClick={() => window.open(sourceCodeLink, "_blank")} className="hover:shadow-md hover:font-semibold  flex justify-center items-center gap-2 w-full  py-2 rounded-md border-[1px] border-[#dbe5e6]">
            <span className="font- font-barlow ">Source Code</span>   <LuGithub />
        </button>
      </div>



     </div>
        

      
    </div>
  )
}

export default ProjectCard
