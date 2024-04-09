import Hero from "./component/hero";
import Experiences from "./component/experiences";
import Skils from "./component/skils";
import Contact from "./component/contact";
import Portofolio from "./component/portofolio";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <Hero />
      <Experiences />
      <Skils />
      <Portofolio />
      <Contact />
    </main>
  );
}
