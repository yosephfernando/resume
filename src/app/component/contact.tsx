import Image from "next/image";

export default function Contact(){
    return (
        <div className="flex flex-col p-8 w-full bg-primary items-center justify-between">
            <p className="font-tilt-neon text-[30px]">Contact</p>
            <div className="flex gap-2 items-center cursor-pointer">
                <Image alt="email" width={30} height={30} src="/resume/gmail.png"/>
                <a className="font-tilt-neon text-[20px]" href="mailto:fernandoyoseph6@gmail.com">
                    fernandoyoseph6@gmail.com
                </a>
            </div>
        </div>
    )
}