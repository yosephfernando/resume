import Image from "next/image";
import { BASE_PATH } from "../../../next.config";

export default function Contact() {
  return (
    <section id="contact" className="py-20 sm:py-24">
      <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
        <div className="md:col-span-4">
          <h2 className="font-mono text-xs uppercase tracking-[0.2em] text-muted">
            04 / Contact
          </h2>
        </div>
        <div className="md:col-span-8 space-y-6">
          <a
            href="mailto:fernandoyoseph6@gmail.com"
            className="group inline-flex items-center gap-3 text-2xl sm:text-3xl font-semibold tracking-tight text-ink transition-colors duration-300 hover:text-olive break-all"
          >
            <Image
              alt=""
              width={24}
              height={24}
              src={`${BASE_PATH}/gmail.png`}
              className="opacity-80 transition-opacity duration-300 group-hover:opacity-100"
            />
            <span className="border-b border-hairline pb-1 transition-colors duration-300 group-hover:border-olive">
              fernandoyoseph6@gmail.com
            </span>
          </a>
        </div>
      </div>
    </section>
  );
}
