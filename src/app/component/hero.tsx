import Image from "next/image";
import { BASE_PATH } from "../../../next.config";

const links = [
  { label: "GitHub", href: "https://github.com/yosephfernando", icon: "github-sign.png" },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/yoseph-fernando-b392b0b0", icon: "linkedin.png" },
];

export default function Hero() {
  return (
    <section className="py-20 sm:py-28 animate-fade-up">
      <div className="grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-8 items-center">
        <div className="md:col-span-8 space-y-6">
          <p className="font-mono text-xs uppercase tracking-[0.2em] text-olive">
            Full Stack Developer
          </p>
          <h1 className="text-4xl sm:text-5xl font-semibold tracking-tight text-ink leading-[1.1]">
            Herman Yoseph Fernando
          </h1>
          <p className="max-w-xl text-base sm:text-lg text-muted leading-relaxed">
            Building resilient backend architectures, cloud infrastructure, and
            clean web applications.
          </p>

          <div className="pt-2 flex items-center gap-5">
            {links.map((link, i) => (
              <div key={link.label} className="flex items-center gap-5">
                {i > 0 && <span className="text-hairline" aria-hidden="true">/</span>}
                <a
                  href={link.href}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 text-sm font-medium text-ink hover:text-olive transition-colors duration-300"
                >
                  <Image
                    alt=""
                    className="opacity-80"
                    height={18}
                    width={18}
                    src={`${BASE_PATH}/${link.icon}`}
                  />
                  <span>{link.label}</span>
                </a>
              </div>
            ))}
          </div>
        </div>

        <div className="md:col-span-4 flex md:justify-end">
          <div
            role="img"
            aria-label="Herman Yoseph Fernando"
            className="w-40 h-40 sm:w-48 sm:h-48 rounded-2xl bg-surface bg-cover bg-center border border-hairline grayscale-[15%] hover:grayscale-0 transition-all duration-500"
            style={{ backgroundImage: `url('${BASE_PATH}/ysp.jpg')` }}
          />
        </div>
      </div>
    </section>
  );
}
