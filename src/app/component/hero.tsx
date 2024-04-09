import Image from "next/image";

export default function Hero(){
    return (
        <div className="flex flex-col p-4 sm:p-8 bg-cyan-500 w-full items-center justify-center h-1/2">
            <div className="w-[10rem] h-[10rem] bg-cover bg-no-repeat bg-[url('/resume/ysp.jpg')] bg-center rounded-full"></div>
            <p className="font-tilt-neon text-[30px]">Herman Yoseph Fernando</p>
            <p className="font-tilt-neon my-7 text-[24px]">Full stack devloper</p>
            <div className="flex gap-3 justify-center">
                <Image alt="github" src="/resume/github-sign.png" width={30} height={30} />
                <Image alt="github" src="/resume/linkedin.png" width={30} height={30} />
            </div>
        </div>
    )
}