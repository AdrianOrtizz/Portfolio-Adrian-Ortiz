"use client";

import FormField from "./FormField";
import ErrorMessage from "./MessageError";
import { motion, AnimatePresence } from "framer-motion";
import { Send, CheckCircle2, AlertCircle, Loader2 } from "lucide-react";
import { useContact } from "@/hooks/useContact";

const ContactForm = () => {
  const { register, handleSubmit, errors, onSubmitEmail, isSending, status } =
    useContact();

  return (
    <div className="relative group">
      <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl blur opacity-10 group-hover:opacity-20 transition duration-1000"></div>

      <form
        onSubmit={handleSubmit(onSubmitEmail)}
        className="relative bg-zinc-900/70 backdrop-blur-xl p-8 rounded-2xl border border-zinc-800 space-y-5"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          <FormField
            label="Nombre"
            name="user_name"
            placeholder="Tu nombre"
            register={register}
            error={errors.user_name?.message}
          />
          <FormField
            label="Email"
            name="user_email"
            type="email"
            placeholder="email@ejemplo.com"
            register={register}
            error={errors.user_email?.message}
          />
        </div>

        <div className="space-y-2">
          <label className="text-sm font-medium text-zinc-400 ml-1">
            Mensaje
          </label>
          <textarea
            {...register("message")}
            rows={5}
            placeholder="¿En qué puedo ayudarte?"
            className={`w-full bg-zinc-950/50 border ${
              errors.message ? "border-red-500/50" : "border-zinc-800"
            } rounded-xl p-4 text-white focus:outline-none focus:ring-2 focus:ring-blue-500/40 transition-all placeholder:text-zinc-700 resize-none`}
          />
          <ErrorMessage message={errors.message?.message} />
        </div>

        <button
          type="submit"
          disabled={isSending || status === "success"}
          className={`w-full py-4 rounded-xl flex items-center justify-center gap-3 font-bold transition-all active:scale-[0.98] ${
            status === "success"
              ? "bg-green-600 text-white shadow-[0_0_20px_rgba(22,163,74,0.4)]"
              : "bg-white text-black hover:bg-zinc-200 disabled:opacity-50"
          }`}
        >
          {isSending ? (
            <Loader2 className="animate-spin" size={20} />
          ) : status === "success" ? (
            <CheckCircle2 size={20} />
          ) : (
            <Send size={18} />
          )}

          <span>
            {isSending
              ? "Enviando..."
              : status === "success"
                ? "¡Mensaje Enviado!"
                : "Enviar Mensaje"}
          </span>
        </button>

        <AnimatePresence>
          {status === "error" && (
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-red-400 text-sm text-center flex items-center justify-center gap-2"
            >
              <AlertCircle size={16} /> Error de conexión. Reintenta.
            </motion.p>
          )}
        </AnimatePresence>
      </form>
    </div>
  );
};

export default ContactForm;
