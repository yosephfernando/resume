'use client';
import Image from "next/image";
import { use, useState } from "react";

const skilsData = [
    {
        "name": "NodeJS",
        "tag": "backend",
        "image": "/resume/nodejs.png"
    },
    {
        "name": "Laravel",
        "tag": "backend",
        "image": "/resume/nodejs.png"
    },
    {
        "name": "ReactJS",
        "tag": "frontend",
        "image": "/resume/nodejs.png"
    },
    {
        "name": "VueJS",
        "tag": "frontend",
        "image": "/resume/nodejs.png"
    },
    {
        "name": "Mysql",
        "tag": "dbms",
        "image": "/resume/nodejs.png"
    },
    {
        "name": "PSQL",
        "tag": "dbms",
        "image": "/resume/nodejs.png"
    },
    {
        "name": "SQL server",
        "tag": "dbms",
        "image": "/resume/nodejs.png"
    },
    {
        "name": "Docker",
        "tag": "devops",
        "image": "/resume/nodejs.png"
    },
    {
        "name": "Haproxy",
        "tag": "devops",
        "image": "/resume/nodejs.png"
    },
    {
        "name": "Cloudflare",
        "tag": "devops",
        "image": "/resume/nodejs.png"
    },
    {
        "name": "Kotlin",
        "tag": "mobiledev",
        "image": "/resume/nodejs.png"
    },
    {
        "name": "Java",
        "tag": "mobiledev",
        "image": "/resume/nodejs.png"
    }
]

export default function Skils(){
    const [tag, setTag] = useState("all")
    const [skilsState, setSkilsState] = useState(skilsData)
    const [isAnimating, setIsAnimating] = useState(false);

    const changeTag = (clickedTag: string) => {
        setIsAnimating(true);
        setTag(clickedTag)
        if(clickedTag == "all"){
            setSkilsState(skilsData)
        } else {
            setSkilsState(skilsData.filter(item => {
                return (item.tag === clickedTag)
            }))
        }
        setTimeout(() => setIsAnimating(false), 500);
    }

    return (
        <div className="flex flex-col p-8 w-full items-center justify-between">
            <p className="font-tilt-neon text-[30px]">Skils</p>
            <div className="flex flex-wrap justify-center gap-4 mb-3 font-tilt-neon">
                <div onClick={() => changeTag("all")} className={`px-5 rounded-lg border-2 border-solid border-green-400 ${(tag == "all" ? "text-white bg-green-400":"")} hover:text-white hover:bg-green-400 transition duration-300 ease-in-out transform cursor-pointer`}>
                    All
                </div>
                <div onClick={() => changeTag("frontend")} className={`px-5 rounded-lg border-2 border-solid border-green-400 ${(tag == "frontend" ? "text-white bg-green-400":"")} hover:text-white hover:bg-green-400 transition duration-300 ease-in-out transform cursor-pointer`}>
                    Frontend
                </div>
                <div onClick={() => changeTag("backend")} className={`px-5 rounded-lg border-2 border-solid border-green-400 ${(tag == "backend" ? "text-white bg-green-400":"")} hover:text-white hover:bg-green-400 transition duration-300 ease-in-out transform cursor-pointer`}>
                    Backend
                </div>
                <div onClick={() => changeTag("dbms")} className={`px-5 rounded-lg border-2 border-solid border-green-400 ${(tag == "dbms" ? "text-white bg-green-400":"")} hover:text-white hover:bg-green-400 transition duration-300 ease-in-out transform cursor-pointer`}>
                    DBMS
                </div>
                <div onClick={() => changeTag("devops")} className={`px-5 rounded-lg border-2 border-solid border-green-400 ${(tag == "devops" ? "text-white bg-green-400":"")} hover:text-white cursor-pointer hover:bg-green-400 transition duration-300 ease-in-out transform cursor-pointer`}>
                    Devops
                </div>
                <div onClick={() => changeTag("mobiledev")} className={`px-5 rounded-lg border-2 border-solid border-green-400 ${(tag == "mobiledev" ? "text-white bg-green-400":"")} hover:text-white hover:bg-green-400 cursor-pointer transition duration-300 ease-in-out transform cursor-pointer`}>
                    Mobile dev
                </div>
            </div>
            <div className={`flex flex-wrap gap-3 justify-center ${isAnimating ? 'transition ease-in-out' : ''}`}>
                {skilsState.map((item, index) => {
                    return (
                        <div key={index+1} className={`flex shadow-2xl p-4 rounded-lg items-center hover:scale-[1.05] hover:bg-green-400 hover:text-white transition ease-in-out duration-500 ${isAnimating ? 'animate-fade-in' : ''} gap-3`}>
                            <Image alt="nodeJS" src={item.image} width={120} height={120}  />
                            <div>
                                <p>{item.name}</p>
                            </div>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}