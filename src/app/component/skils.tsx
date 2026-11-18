"use client";
import Image from "next/image";
import { useState } from "react";
import { BASE_PATH } from "../../../next.config";

const skilsData = [
  { name: "NodeJS", tag: "backend", image: `${BASE_PATH}/nodejs.png` },
  { name: "Laravel", tag: "backend", image: `${BASE_PATH}/laravel.svg` },
  { name: "Python", tag: "backend", image: `${BASE_PATH}/python.svg` },
  { name: "ReactJS", tag: "frontend", image: `${BASE_PATH}/file-type-reactjs.svg` },
  { name: "VueJS", tag: "frontend", image: `${BASE_PATH}/vue-js.svg` },
  { name: "Mysql", tag: "dbms", image: `${BASE_PATH}/mysql-original-wordmark.svg` },
  { name: "PSQL", tag: "dbms", image: `${BASE_PATH}/postgresql-plain-wordmark.svg` },
  { name: "SQL server", tag: "dbms", image: `${BASE_PATH}/sql-database-generic.svg` },
  { name: "Docker", tag: "devops", image: `${BASE_PATH}/docker-original-wordmark.svg` },
  { name: "Haproxy", tag: "devops", image: `${BASE_PATH}/haproxy_logo_icon_171017.png` },
  { name: "Cloudflare", tag: "devops", image: `${BASE_PATH}/cloudflare.svg` },
  { name: "Kotlin", tag: "mobiledev", image: `${BASE_PATH}/kotlin-original.svg` },
  { name: "Java", tag: "mobiledev", image: `${BASE_PATH}/java-original.svg` },
];

const tags = [
  { value: "all", label: "All" },
  { value: "frontend", label: "Frontend" },
  { value: "backend", label: "Backend" },
  { value: "dbms", label: "DBMS" },
  { value: "devops", label: "Devops" },
  { value: "mobiledev", label: "Mobile dev" },
];

export default function Skils() {
  const [tag, setTag] = useState("all");
  const skils = tag === "all" ? skilsData : skilsData.filter((item) => item.tag === tag);

  return (
    <section id="skills" className="py-20 sm:py-24">
      <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
        <div className="md:col-span-4">
          <h2 className="font-mono text-xs uppercase tracking-[0.2em] text-muted">
            02 / Skills
          </h2>
        </div>
        <div className="md:col-span-8 space-y-10">
          <div className="flex flex-wrap gap-x-6 gap-y-3" role="group" aria-label="Filter skills">
            {tags.map((t) => {
              const active = tag === t.value;
              return (
                <button
                  key={t.value}
                  type="button"
                  onClick={() => setTag(t.value)}
                  aria-pressed={active}
                  className={`cursor-pointer border-b pb-1 text-sm transition-colors duration-300 ease-out ${
                    active
                      ? "border-olive text-ink"
                      : "border-transparent text-muted hover:text-ink"
                  }`}
                >
                  {t.label}
                </button>
              );
            })}
          </div>

          <ul
            key={tag}
            className="grid grid-cols-2 sm:grid-cols-3 border-t border-l border-hairline"
          >
            {skils.map((item, index) => (
              <li
                key={item.name}
                style={{ animationDelay: `${index * 40}ms` }}
                className="group flex items-center gap-4 border-r border-b border-hairline p-5 animate-fade-up transition-colors duration-500 ease-out hover:bg-surface"
              >
                <Image
                  alt=""
                  src={item.image}
                  width={32}
                  height={32}
                  className="h-8 w-8 object-contain grayscale opacity-70 transition-all duration-500 ease-out group-hover:grayscale-0 group-hover:opacity-100"
                />
                <span className="text-sm font-medium text-charcoal">{item.name}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
