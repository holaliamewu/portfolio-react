import React from "react";

export default function Experiences() {
    return(
        <div className=" mr-auto text-sm mt-[50px] leading-[1.8] md:leading-[2] space-y-4 ">
            <h1 className="text-zinc-800 font-bold" >experience</h1>
            <div className="flex flex-col gap-2" >
            <span className="" >
                <span className="flex gap-1" >
                    <h3 className="text-zinc-800 font-semibold" >isupreme labs</h3>
                    <h5 className="text-zinc-400" >march, 2025 -- now</h5>
                </span>
                <p className="" >building some groundbreaking marketing idea with an amazing team...</p>
            </span>
            <span className="" >
                <span className="flex gap-1" >
                    <h3 className="text-zinc-800 font-semibold" >rancard</h3>
                    <h5 className="text-zinc-400" >august, 2024 -- dec, 2024</h5>
                </span>
                <p className="" >collaborated with senior engineers to work on  products such as <a href='https://unify.rancard.com' target='_blank' className="border-b border-b-zinc-300 border-b-2" >unify</a> and <a href='https://diem.rancard.com' target='_blank' className="border-b border-b-zinc-300 border-b-2" >diem</a>.
                    </p>
            </span>
            </div>
        </div>
    )
}