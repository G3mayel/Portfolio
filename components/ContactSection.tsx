import { FadeUp } from "./FadeUp";

export function ContactSection() {
  return (
    <section
      id="contact"
      className="w-full bg-brand-orange mt-auto flex flex-col items-center justify-center text-brand-cream pt-8 md:pt-12 pb-6 md:pb-8 px-6 md:px-12 min-h-[350px] md:min-h-[400px]"
    >
      <div className="flex flex-col items-center justify-center w-full mb-8">
        <FadeUp className="w-full flex flex-col items-center">
          <h2 className="text-[3rem] sm:text-[4rem] md:text-[6rem] lg:text-[7rem] font-medium tracking-[-0.05em] text-center mb-6 leading-[1.1] sm:leading-none whitespace-pre-wrap">
            Let’s
            <br className="sm:hidden" /> Collaborate
          </h2>

          <div className="w-[85%] md:w-[70%] h-px bg-brand-cream/30 mb-8"></div>

          <div className="flex flex-col sm:flex-row gap-3 sm:gap-6 justify-center w-full px-2 sm:px-0">
            <a
              href="mailto:gemayel.rakadiansyah@gmail.com"
              className="w-full sm:w-auto px-4 sm:px-6 py-3 border border-brand-cream text-[11px] sm:text-xs font-light hover:bg-brand-cream hover:text-brand-orange transition-colors duration-300 text-center truncate"
            >
              gemayel.rakadiansyah@gmail.com
            </a>
            <a
              href="https://wa.me/6283130131310"
              className="w-full sm:w-auto px-4 sm:px-6 py-3 border border-brand-cream text-[11px] sm:text-xs font-light hover:bg-brand-cream hover:text-brand-orange transition-colors duration-300 text-center truncate"
            >
              +62 0831 3013 1310
            </a>
          </div>
        </FadeUp>
      </div>

      <FadeUp
        delay={0.2}
        className="w-full mt-auto pt-10 md:pt-16 flex flex-col md:flex-row justify-between items-center md:items-end gap-3 md:gap-0 text-[11px] md:text-sm tracking-[0.05em] font-light"
      >
        <div className="order-2 md:order-1 mt-4 md:mt-0 opacity-70 md:opacity-100">
          abdadraka © 2026
        </div>

        <div className="flex flex-col md:flex-row items-center gap-2 md:gap-6 order-1 md:order-2">
          <span className="opacity-60 hidden md:inline-block">Socials</span>
          <div className="flex gap-4 md:gap-6">
            <a href="https://www.instagram.com/9emayel?igsh=d2gwajJyazRkNjNn" className="hover:opacity-70 transition-opacity">
              Instagram
            </a>
            <a href="https://www.facebook.com/share/1E8gug3hFe/" className="hover:opacity-70 transition-opacity">
              Facebook
            </a>
            <a href="https://www.linkedin.com/in/gemayel-abdad-rakadiansyah-32552a412?utm_source=share_via&utm_content=profile&utm_medium=member_android" className="hover:opacity-70 transition-opacity">
              LinkedIn
            </a>
          </div>
        </div>
      </FadeUp>
    </section>
  );
}
