import ProjectCard from "./Components/ProjectCard"
import { Projects } from "./Projects"

function App() {
  return (
    <div className="flex  flex-col gap-4">
        <div className="h-[100px]">
        <h1 className="font-bold text-center mt-4 text-[24px]"> {"My Frontend Projects".toUpperCase()}</h1>
        </div>
      

        {/* Project lists */}
      <div className="max-md:grid-cols-2 max-w-full mx-auto px-auto max-lg:px-[15px] pb-[100px] grid max-[688px]:grid-cols-1
      grid-cols-3 gap-5 max-[1042px]:grid-cols-2 ">
      {/* <ProjectCard/> */}
      
        {Projects.map((project) => (
          <ProjectCard 
          
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

    </div>
  )
}

export default App
