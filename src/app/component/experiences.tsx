import Image from "next/image";

const experiences = [
    {
        "year": "March 2021 - present",
        "desc": "In PT Pusat Inovasi Nusantara, I work as a Web Developer and Data Engineer. My responsibilities include revamping the company’s profile website, maintaining the learning platform using Moodle, and providing training on data engineering topics.",
        "points": [],
        "position": [
            "Full stack Web dev",
            "Data Engineer",
            "Lead Engineer",
        ]
    },
    {
        "year": "February 2019 — February 2021",
        "desc": "In AZ Solusindo, I work as an AI Engineer. My responsibilities include creating games such as QQ Number and QQ Baccarat.",
        "points": [
            "1. QQ Number: This is a guest number game where players attempt to guess the current round’s outcome. If a player correctly guesses the outcome, they win.",
            "2. QQ Baccarat: In this baccarat game, users can choose to bet on either the banker or the player. If a player places a bet on the banker and the banker’s card value exceeds that of the player, the player wins."
        ],
        "position": [
            "AI Engineer",
            "Full stack Web dev",
        ]
    },
    {
        "year": "October 2017 — August 2018",
        "desc": "In PT Ifabula Digital Kreasi, I work as a Web Developer and Hybrid Mobile Apps Developer. My responsibilities include:",
        "points": [
            "1. E-commerce Website Development: I create and maintain e-commerce websites using AngularJS 5.",
            "2. Illustration System for Insurance Agents: As part of a team, I develop an illustration system specifically tailored for insurance agents using Ionic. The challenge lies in adapting to new coding practices, especially since I predominantly use Angular and Node.js rather than PHP."
        ],
        "position": [
            "Full stack Web dev",
            "Hybrid Mobile Apps Developer",
        ]
    },
]

export default function Experiences(){
    return (
        <div className="flex font-tilt-neon flex-col px-1 py-3 sm:px-8 sm:py-8 container items-center justify-between">
            <p className="text-[30px]">Work Experiences</p>
            <div className="divide-y-2 divide-slate-300 px-8 sm:px-20 text-justify">
                {experiences.map((item, index) => {
                    return (
                        <div key={index+1} className="flex flex-wrap gap-4 items-center justify-center py-4">
                            <p className="text-center md:text-left text-[25px] w-full md:w-1/4">
                                {item.year}
                            </p>
                            <p className="w-full md:w-2/4">
                                {item.desc}
                                <br/>
                                <br/>
                                {item.points.map((itemPoint, pointIndex) => {
                                    return (
                                        <>
                                            {itemPoint}
                                            <br />
                                            <br />
                                        </>
                                    )
                                })}
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