import ProjectCard from "./Components/ProjectCard"
import { Projects } from "./Projects"

import { GoGoal } from "react-icons/go";
import { LuCheckCircle, LuListTodo,   } from "react-icons/lu";
import avator from "./assets/images/avator.jpg"
import Footer from "./Components/Footer";




function App() {
  return (
    <div className="flex  flex-col gap-2">
        <div className="my-2 flex flex-col gap-3">
            <div className="flex gap-[8px]  max-[688px]:flex-col  w-fit mx-auto ">

                <div className="flex flex-col text-[#0A3E6D] justify-center gap-1 items-center">
                    <img className="rounded-full w-12" src={avator} alt="" />
                    <h1 className="font-bold flex gap-1 items-center font-barlow text-[20px]">Hi, I'm  Henok Belachew  </h1>
                    <p className="text-[13px]"> Fullstack Developer and UI/UX Designer </p>
                    
                </div>

            </div>

            <div className=" bg-[#e6f0f8] w-full">
                <div className="text-[#0A3E6D] flex items-center justify-center text-center font-barlow font-semibold p-4 text-[18px] max-md:text-[15px]"> Welcome to my frontend playground, where I display a variety of my frontend projects.</div>
                
                <div className="p-4  flex flex-wrap gap-2 items-center justify-center bg-[#0A3E6D] w-[100%] mx-auto text-white">
                    <h1 className=" text-center text-[18px] max-md:text-[15px] flex items-center gap-1 justify-center"> <GoGoal  /> <span className="font-bold">Goal :</span> Building <span>100</span> projects  </h1>

                    <div className="h-[25px] w-[1px] bg-white opacity-50"></div>

                    <h1 className=" text-center text-[18px] max-md:text-[15px]  flex items-center gap-1 justify-center"> <LuCheckCircle /><span className="font-bold">Completed :</span> {Projects.length} project  </h1>

                    <div className="h-[25px] w-[1px] bg-white opacity-50"></div>

                    <h1 className=" text-center text-[18px] max-md:text-[15px]  flex items-center gap-1 justify-center"> <LuListTodo /><span className="font-bold">Left :</span> {100 - Projects.length} project  </h1>
                    
            </div>

            </div>
    
        
        </div>
      

        {/* Project lists */}
      <div className="max-md:grid-cols-2 w-fit mx-auto px-auto max-lg:px-[15px] pb-[100px] grid max-[688px]:grid-cols-1
      grid-cols-3 gap-5 max-[1042px]:grid-cols-2 ">
      {/* <ProjectCard/> */}
      
        {Projects.map((project) => (
          <ProjectCard 
            id={project.id}
            projectName={project.projectName}
            html={project.html}
            css={project.css}
            ts={project.ts}
            api={project.api}
            tag={project.tag}
            demoLink={project.demoLink}
            sourceCodeLink={project.sourceCodeLink}
            img={project.img}
            description={project.description}

          />
        ))}
      </div>

      <Footer/>
      
    
    </div>
  )
}

export default App
