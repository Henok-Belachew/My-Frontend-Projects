
interface NotificationProps {
    username: string;
    time: string;
    text: string;
    mainText: string;
    message?: string;
    isNew: boolean;
    img?: string;
    img2?: string;
}

function Notification({username, time, text, mainText, message, isNew, img, img2}: NotificationProps) {
  return (
    
      <div className={isNew ? "p-[15px] flex hover:bg-light-blue1 gap-4 bg-vlight-blue rounded-md" : !message ? "p-[15px] flex gap-4 hover:bg-light-blue1 rounded-md" : "p-[15px] flex gap-4 rounded-md"}>
                {/* <img className="w-[40px] self-start" src="./assets/images/avatar-mark-webber.webp" alt=""> */}
                <img className="w-[40px] self-start" src={img} alt="" />

                <div className="texts flex flex-wrap flex-col">
                    <span className="text-[13px] text-dgray-blue gap-1 items-center">
                        <b className="font-bold cursor-pointer text-black">{username} </b>
                        {text} 
                        
                        {
                            mainText && <b className="hover:text-vdark-blue  cursor-pointer">  {mainText} </b> 
                        }
                        
                        
                        
                        { isNew && <b className="inline-block ml-1 w-[6px] h-[6px] bg-red-500 rounded-full"></b>}
                        

                    </span>
                    <span className="text-[12px] text-dgray-blue"> {time} </span>
                    
                    {
                        message && <p className="text-[13px] cursor-pointer hover:border-0 hover:bg-light-blue1 p-[10px] border-[1px] rounded-md border-light-blue2 text-dgray-blue ">
                        {message}
                    </p>
                    }
                    
                    
                </div>


                {img2 && <img className="w-[40px] ml-auto cursor-pointer self-center" src={img2} alt=""></img> } 
            </div>
    
  )
}

export default Notification
