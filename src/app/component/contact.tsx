import Image from "next/image";

export default function Contact(){
    return (
        <div className="flex flex-col p-8 w-full bg-cyan-500 items-center justify-between">
            <p className="font-tilt-neon text-[30px]">Contact</p>
            <div className="flex gap-2 items-center cursor-pointer">
                <Image alt="email" width={30} height={30} src="/resume/gmail.png"/>
                <p className="font-tilt-neon text-[20px]">fernandoyoseph6@gmail.com</p>
            </div>
        </div>
    )
}