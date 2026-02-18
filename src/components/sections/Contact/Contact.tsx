import ContactForm from "./components/ContactForm";
import ContactLinks from "./components/ContactLinks";

const Contact = () => {
  return (
    <section className="relative py-24 px-6 max-w-6xl mx-auto" id="contact">
      <div className="absolute top-50 -left-80 w-[500px] h-[500px] bg-blue-600/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 -right-80 w-[500px] h-[500px] bg-purple-600/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="text-center mb-16">
        <h2 className="text-4xl font-bold text-white mb-2">Hablemos</h2>
        <p className="text-zinc-500 uppercase tracking-widest text-xs font-semibold">
          Contacto / 04
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
        <ContactLinks />
        <ContactForm />
      </div>
    </section>
  );
};

export default Contact;
