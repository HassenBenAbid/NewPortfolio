//This class will allow us to create a project element where we will have the title, description, video and the date.
export default function Project({ title, period, videoLink, techUsed = [], description, gitLink, clickSound })
{
    return <div className="text-communicator-white pl-4 font-SpaceMono">

            <li className="list-disc font-extrabold text-[3.5em] p-1 text-communicator-red" >
                {title}
            </li>
            <div className="border-communicator-red border-l-[6px] ml-[10px] pl-9 ">
                <h2 className="text-[2.3em] font-semibold" >{period}</h2>
                <div className="mt-8 aspect-video w-3/4">
                    <iframe className="rounded-lg w-full h-full p-2" src={videoLink}></iframe>

                    <div className=" py-6 flex justify-center ">
                    {techUsed.map((value, index) => {
                        return <span key = { index } className =" bg-communicator-red text-communicator-white text-3xl font-bold mr-3 px-2.5 py-1 rounded">{value}</span>
                    })}
                </div>
                </div>
                
                {/* If the project has a git link then we show a button that leads to it. */}
                { gitLink != null ? <div className ='button w-64 h-14 my-5 ml-[10px] bg-green-600 rounded-full cursor-pointer select-none
                                                     active:translate-y-2  active:[box-shadow:0_0px_0_0_#1cc538,0_0px_0_0_#1cc53841]
                                                     transition-all duration-150 [box-shadow:0_8px_0_0_#1cc538,0_13px_0_0_#1cc53841]'>

		                                    <a href = { gitLink } target = "_blank" className ='flex flex-col justify-center items-center h-full text-white font-bold text-4xl ' 
                                               onClick = { () => clickSound() } >Check Github</a>
                                            
	                                </div> : null }

                <div className="text-[2.3em] font-semibold">{description.map((value, index) => {
                    return <div key = { index }> {value} <br /> </div> 
                })}</div>

            </div>


    </div>
}