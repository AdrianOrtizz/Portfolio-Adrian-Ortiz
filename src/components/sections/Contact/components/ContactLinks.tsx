import { email, githubURL, linkedinURL } from "@/dataAux/contactData";

import { FileText, Mail } from "lucide-react";
import { LinkedIn, GitHub } from "@/components/UI/Icons";

import CopyButton from "./CopyButton";

const ContactLinks = () => {
  return (
    <div className="flex flex-col justify-between space-y-8 h-full">
      <div className="text-center md:text-left">
        <h3 className="text-2xl md:text-3xl font-semibold mb-4 md:mb-6">
          ¿Tenés un proyecto en mente?
        </h3>
        <p className="text-zinc-400 text-base md:text-lg leading-relaxed max-w-md mx-auto md:mx-0">
          Disponible para nuevos desafíos. Si buscás un desarrollador que
          priorice la
          <span className="text-white font-medium">
            {" "}
            performance y la experiencia de usuario
          </span>
          , hablemos.
        </p>
      </div>

      <a
        href="/Adrian_Ortiz_FULL_STACK_DEVELOPER_CV.pdf"
        download="Adrian_Ortiz_FULL_STACK_DEVELOPER_CV.pdf"
      >
        <button className="w-full p-4 md:p-5 rounded-2xl border border-zinc-800 bg-zinc-900/30 flex items-center justify-center gap-4 hover:bg-zinc-800/50 transition-all">
          <FileText size={18} className="text-primary" />
          <span className="font-semibold text-sm md:text-base">
            Descargar CV
          </span>
        </button>
      </a>

      <div className="space-y-4">
        <div className="group p-4 md:p-5 rounded-2xl border border-zinc-800 bg-zinc-900/30 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <div className="p-2.5 md:p-3 bg-zinc-800 rounded-lg text-blue-400 shrink-0">
              <Mail size={24} />
            </div>
            <div className="overflow-hidden">
              <p className="text-xs text-zinc-500 uppercase">Email</p>
              <p className="text-white font-medium text-sm md:text-base truncate">
                {email}
              </p>
            </div>
          </div>
          <CopyButton />
        </div>

        <div className="flex flex-row gap-4">
          <a
            href={linkedinURL}
            target="_blank"
            className="flex-1 p-4 md:p-5 rounded-2xl border border-zinc-800 bg-zinc-900/30 flex items-center justify-center md:justify-start gap-4"
          >
            <LinkedIn className="w-5 h-5" />
            <span className="font-medium text-zinc-300">LinkedIn</span>
          </a>
          <a
            href={githubURL}
            target="_blank"
            className="flex-1 p-4 md:p-5 rounded-2xl border border-zinc-800 bg-zinc-900/30 flex items-center justify-center md:justify-start gap-4"
          >
            <GitHub className="w-7 h-7" />
            <span className="font-medium text-zinc-300">GitHub</span>
          </a>
        </div>
      </div>
    </div>
  );
};

export default ContactLinks;
