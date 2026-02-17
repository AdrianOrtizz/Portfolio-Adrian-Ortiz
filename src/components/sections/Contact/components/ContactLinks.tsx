import { email, githubURL, linkedinURL } from "@/dataAux/contactData";

import { Mail } from "lucide-react";
import { LinkedIn, GitHub } from "@/components/UI/Icons";

import CopyButton from "./CopyButton";

const ContactLinks = () => {
  return (
    <div className="flex flex-col justify-between space-y-8">
      <div>
        <h3 className="text-3xl font-semibold mb-6">
          ¿Tenés un proyecto en mente?
        </h3>
        <p className="text-zinc-400 text-lg leading-relaxed max-w-md">
          Disponible para nuevos desafíos. Si buscás un desarrollador que
          priorice la
          <span className="text-white font-medium">
            {" "}
            performance y la experiencia de usuario
          </span>
          , hablemos.
        </p>
      </div>

      <div className="space-y-4">
        <div className="group p-5 rounded-2xl border border-zinc-800 bg-zinc-900/30 flex items-center justify-between hover:border-zinc-600 transition-all">
          <div className="flex items-center gap-4">
            <div className="p-3 bg-zinc-800 rounded-lg text-blue-400">
              <Mail size={24} />
            </div>
            <div>
              <p className="text-xs text-zinc-500 uppercase">Email</p>
              <p className="text-white font-medium">{email}</p>
            </div>
          </div>
          <CopyButton />
        </div>

        <div className="flex gap-4">
          <a
            href={linkedinURL}
            target="_blank"
            className="flex-1 p-5 rounded-2xl border border-zinc-800 bg-zinc-900/30 flex items-center gap-4 hover:bg-zinc-800/50 transition-all group"
          >
            <LinkedIn className="w-5 h-5" />
            <span className="font-medium text-zinc-300">LinkedIn</span>
          </a>
          <a
            href={githubURL}
            target="_blank"
            className="flex-1 p-5 rounded-2xl border border-zinc-800 bg-zinc-900/30 flex items-center gap-4 hover:bg-zinc-800/50 transition-all group"
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
