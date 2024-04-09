import Image from "next/image";

const experiences = [
    {
        "year": "2020 - current",
        "desc": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Praesentium quos nostrum possimus sint, eum laboriosam. Beatae necessitatibus ratione ducimus natus nisi doloribus maxime aperiam, minima praesentium laborum deserunt. Iure, magnam!",
        "position": [
            "Full stack dev",
            "Lead Engineer",
        ]
    },
    {
        "year": "2017 - 2019",
        "desc": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Praesentium quos nostrum possimus sint, eum laboriosam. Beatae necessitatibus ratione ducimus natus nisi doloribus maxime aperiam, minima praesentium laborum deserunt. Iure, magnam!",
        "position": [
            "Full stack dev",
            "Lead front end dev",
        ]
    },
    {
        "year": "2017 - 2019",
        "desc": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Praesentium quos nostrum possimus sint, eum laboriosam. Beatae necessitatibus ratione ducimus natus nisi doloribus maxime aperiam, minima praesentium laborum deserunt. Iure, magnam!",
        "position": [
            "Full stack dev",
            "Lead front end dev",
        ]
    },
]

export default function Experiences(){
    return (
        <div className="flex font-tilt-neon flex-col px-1 py-3 sm:px-8 sm:py-8 w-full items-center justify-between">
            <p className="text-[30px]">Work Experiences</p>
            <div className="divide-y-2 divide-slate-300 px-8 sm:px-20 text-justify">
                {experiences.map((item, index) => {
                    return (
                        <div key={index+1} className="flex flex-wrap gap-4 items-center justify-center py-4">
                            <p className="text-[30px] w-full md:w-1/4">
                                {item.year}
                            </p>
                            <p className="w-full md:w-2/4">
                                {item.desc}
                                <br/>
                                <br/>
                                Positions:
                                <br/>
                                <br/>
                                {item.position.map((pos, indexPos) => {
                                    return (
                                        <span key={indexPos+1} className="rounded-full bg-green-300 p-2 mr-2">{pos}</span>
                                    )
                                })}
                            </p>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}