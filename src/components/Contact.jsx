import { ArrowUpRight } from "lucide-react";
import React from "react";
import contactData from "../resources/contactData";

export default function Contact() {
    return(
        <div className=" mr-auto text-sm mt-[50px] mb-[25px] leading-[1.8] md:leading-[2] space-y-4 ">
            <h1 className="text-zinc-800 font-bold" >get in touch</h1>
            <ul className="flex gap-2" >
               { contactData.map( ( contact ) => (
                   <a key={contact.name} href={contact.url} target="_blank" ><li className="flex items-center justify-center px-2 py-1 border-b border-b-zinc-50 hover:border-b-zinc-200 gap-1 " >{contact.name}<ArrowUpRight size='14'/></li></a>
               ))}
               </ul>
        </div>
    )
}