"use client";

import ContactForm from "./components/ContactForm";
import ContactLinks from "./components/ContactLinks";
import { useLanguage } from "@/hooks/useLanguage";

const Contact = () => {
  const { t } = useLanguage();

  return (
    <section className="relative py-24 px-4 max-w-6xl mx-auto" id="contact">
      <div className="absolute top-50 -left-40 md:-left-80 w-[400px] md:w-[500px] h-[400px] md:h-[500px] bg-blue-600/5 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-0 -right-40 md:-right-80 w-[400px] md:w-[500px] h-[400px] md:h-[500px] bg-purple-600/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="text-center mb-12 md:mb-16">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-2">
          {t.sections.contactTitle}
        </h2>
        <p className="text-zinc-500 uppercase tracking-widest text-[10px] md:text-xs font-semibold">
          {t.sections.contactLabel}
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
        <ContactLinks />
        <ContactForm />
      </div>
    </section>
  );
};

export default Contact;
