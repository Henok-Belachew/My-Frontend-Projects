import Notification from "./Components/Notification"
import img1 from "./assets/images/avatar-mark-webber.webp"
import img2 from "./assets/images/avatar-angela-gray.webp"
import img3 from "./assets/images/avatar-jacob-thompson.webp"
import img4 from "./assets/images/avatar-rizky-hasanuddin.webp"
import img5 from "./assets/images/avatar-kimberly-smith.webp"
import img6 from "./assets/images/avatar-nathan-peterson.webp"
import img7 from "./assets/images/avatar-anna-kim.webp"
import img8 from "./assets/images/image-chess.webp"

function App() {
  return (
    <div className="bg-vlight-blue h-full ">
      
      <div className="container w-[500px] max-sm:w-full max-sm:my-0 max-sm:shadow-none mx-auto my-6 bg-white p-[25px] rounded-lg shadow-xl">

        {/* Header */}

        <div className="header flex justify-between items-center">
            <h1 className="text-[18px] font-bold">
                Notifications
                <span className="p-1 px-2 ml-1 bg-vdark-blue text-white font-semibold rounded-md text-[12px] "> 3 </span>
            </h1>

            <span className="text-[14px] hover:font-semibold cursor-pointer">
                Mark all as read
            </span>
        </div>

        {/* Notifications */}

        <div className="mt-[20px] flex flex-col gap-2">
        <Notification 
            username="Mark Webber"
            text="reacted to your recent post"
            mainText="My first tournament today!"
            message=""
            isNew={true}
            time="1m ago"
            img={img1}
        />

        <Notification 
            username="Angela Gray"
            text="followed you"
            mainText=""
            message=""
            isNew={true}
            time="5m ago"
            img={img2}
        />

        <Notification 
            username="Jacob Thompson"
            mainText="Chess Club"
            text="has joined your group"
            message=""
            isNew={true}
            time="1 day ago"
            img={img3}
        />

        <Notification 
            username="Rizky Hasanuddin"
            mainText=""
            text="sent you a private message."
            message="Hello, thanks for setting up the Chess Club. I've been a member for a few weeks now and I'm already having lots of fun and improving my game."
            isNew={false}
            time="5 days ago"
            img={img4}
        />

        <Notification 
            username="Rizky Hasanuddin"
            mainText=""
            text="Commented on your picture"
            message=""
            isNew={false}
            time="1 week ago"
            img={img5}
            img2={img8}
        />

        <Notification 
            username="Nathan Peterson"
            mainText="5 end-game strategies to increase your win rate"
            text="reacted to your recent post"
            message=""
            isNew={false}
            time="2 weeks ago"
            img={img6}
            img2=""
        />

        <Notification 
            username="Anna Kim"
            mainText="Chess Club"
            text=" left the group"
            message=""
            isNew={false}
            time="2 weeks ago"
            img={img7}
            img2=""
        />




        </div>
        

    
    
       
     </div>
</div>


     

    
    
  )
}

export default App
