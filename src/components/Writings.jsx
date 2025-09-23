
import { NavLink } from "react-router-dom";
import thoughts from "../resources/thoughtsData";

export default function Writings() {
    return(
        <>
            <h4 
            className='mt-[50px] xs:w-[100%] mx-auto text-lg mb-4 text-zinc-900 font-semibold '
            >thoughts</h4>
                { thoughts.map( thought => (
                    <span key={ thought.link } className="flex justify-between  text-[14px] font-light hover:text-zinc-800 w-[100%] mb-2 mx-auto md:mx-0 " >
                        <NavLink to={thought.link} className=" " >{thought.title}</NavLink> 
                        <h6 className="text-right text-[13px]" >{thought.releaseDate}</h6>  
                    </span>
                ))}
            </>
    )
}