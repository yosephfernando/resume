import Image from "next/image";

const experiences = [
    {
        "year": "March 2021 - March 2025",
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
        <div className="flex font-tilt-neon flex-col py-3 sm:px-8 sm:py-8 items-center justify-between">
            <p className="text-[30px]">Work Experiences</p>
            <div className="px-8 sm:px-20 text-justify">
                {experiences.map((item, index) => {
                    return (
                        <div key={index+1} className="flex flex-col gap-4 items-center justify-center py-4">
                            <div className="exp-content w-full max-w-4xl bg-secondary shadow-md rounded-lg p-6">
                                <p className="text-[20px] font-bold ">
                                    {item.year}
                                </p>
                                <p className="mt-2">
                                    {item.desc}
                                </p>
                                {item.points.length > 0 && (
                                    <ul className="list-none list-inside mt-4 ">
                                        {item.points.map((itemPoint, pointIndex) => (
                                            <li key={pointIndex}>{itemPoint}</li>
                                        ))}
                                    </ul>
                                )}
                                <div className="mt-4">
                                    <p className="font-semibold">Positions:</p>
                                    <div className="flex flex-wrap gap-2 mt-2">
                                        {item.position.map((pos, indexPos) => (
                                            <span key={indexPos+1} className="rounded-full bg-green-300 dark:bg-green-400 px-3 py-1 text-sm text-gray-800">
                                                {pos}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}