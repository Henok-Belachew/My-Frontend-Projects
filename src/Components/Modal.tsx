
import { Projects } from "../Projects";
import { IoMdClose } from "react-icons/io";
import { NavLink } from "react-router-dom";
// import { useHistory } from 'react-router-dom';
// import useHis



function Modal({ setModalOpen }: any) {
    

    // useNavigation
    // const history = useNavigation();
  return (
    <div className="">


            {/* Background Shadow */}
            <div onClick={() => setModalOpen(false)}  className="bg-black opacity-25 w-full absolute top-0 right-0 h-full z-10"> </div>

            {/* Side Modal  */}
        
         <div className="right-0  bg-white w-[300px] max-[600px]:w-[70%] fixed top-0  h-full z-20 ">
            {/* className={`side-modal bg-white w-[300px] fixed top-0  h-full z-20 ${isVisible ? 'visible' : ''}`} */}


            {/* Header */}
            <div className='py-4 px-8 flex justify-between text-dark-blue items-center border-[#dbe5e6] border-b-[1px]'>
                <h1 className='font-semibold'>Projects List</h1>
                <span className='cursor-pointer' onClick={() => setModalOpen(false)}> <IoMdClose size={20}  /> </span> 
            </div>

            {/* Projects List */}

            <div className="py-2 px-8 mt-2 flex-col flex gap-2">
                    {Projects.map((project) => (
                        <NavLink key={project.id} to={`/projects/${project.id}`} onClick={() => setModalOpen(false)} className="flex gap-2 items-center cursor-pointer text-dark-blue hover:font-medium "  >
                            <span>
                        {project.id}
                    </span>
                    <h1>
                        {project.projectName}
                    </h1>


                        </NavLink>
                    ))}



            </div>
         
       

        

      </div>

      

      

    </div>
  )
}

export default Modal
