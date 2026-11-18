const experiences = [
  {
    year: "March 2021 - March 2025",
    desc: "In PT Pusat Inovasi Nusantara, I work as a Web Developer and Data Engineer. My responsibilities include revamping the company’s profile website, maintaining the learning platform using Moodle, and providing training on data engineering topics.",
    points: [],
    position: ["Full stack Web dev", "Data Engineer", "Lead Engineer"],
  },
  {
    year: "February 2019 — February 2021",
    desc: "In AZ Solusindo, I work as an AI Engineer. My responsibilities include creating games such as QQ Number and QQ Baccarat.",
    points: [
      "1. QQ Number: This is a guest number game where players attempt to guess the current round’s outcome. If a player correctly guesses the outcome, they win.",
      "2. QQ Baccarat: In this baccarat game, users can choose to bet on either the banker or the player. If a player places a bet on the banker and the banker’s card value exceeds that of the player, the player wins.",
    ],
    position: ["AI Engineer", "Full stack Web dev"],
  },
  {
    year: "October 2017 — August 2018",
    desc: "In PT Ifabula Digital Kreasi, I work as a Web Developer and Hybrid Mobile Apps Developer. My responsibilities include:",
    points: [
      "1. E-commerce Website Development: I create and maintain e-commerce websites using AngularJS 5.",
      "2. Illustration System for Insurance Agents: As part of a team, I develop an illustration system specifically tailored for insurance agents using Ionic. The challenge lies in adapting to new coding practices, especially since I predominantly use Angular and Node.js rather than PHP.",
    ],
    position: ["Full stack Web dev", "Hybrid Mobile Apps Developer"],
  },
];

export default function Experiences() {
  return (
    <section id="experience" className="py-20 sm:py-24">
      <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
        <div className="md:col-span-4">
          <h2 className="font-mono text-xs uppercase tracking-[0.2em] text-muted md:sticky md:top-10">
            01 / Experience
          </h2>
        </div>
        <div className="md:col-span-8 space-y-10">
          {experiences.map((item) => (
            <article
              key={item.year}
              className="exp-content border-b border-hairline pb-10 last:border-none last:pb-0"
            >
              <p className="font-mono text-xs uppercase tracking-[0.15em] text-olive">
                {item.year}
              </p>
              <p className="mt-4 text-[15px]">{item.desc}</p>
              {item.points.length > 0 && (
                <ul className="mt-4 space-y-3 text-[15px]">
                  {item.points.map((point) => (
                    <li key={point}>{point}</li>
                  ))}
                </ul>
              )}
              <div className="mt-6 flex flex-wrap items-center gap-2">
                <span className="sr-only">Positions:</span>
                {item.position.map((pos) => (
                  <span
                    key={pos}
                    className="rounded-full border border-hairline bg-surface px-3 py-1 text-xs font-medium text-charcoal"
                  >
                    {pos}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
