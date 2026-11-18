import Hero from "./component/hero";
import Experiences from "./component/experiences";
import Skils from "./component/skils";
import Portofolio from "./component/portofolio";
import Contact from "./component/contact";

export default function Home() {
  return (
    <main className="min-h-screen bg-canvas text-ink">
      <div className="mx-auto max-w-5xl px-6 sm:px-10 divide-y divide-hairline">
        <Hero />
        <Experiences />
        <Skils />
        <Portofolio />
        <Contact />
      </div>
    </main>
  );
}
