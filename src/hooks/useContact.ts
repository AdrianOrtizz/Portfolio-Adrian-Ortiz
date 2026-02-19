"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { contactSchema, type ContactFormData } from "./schema";
import { useState } from "react";
import emailjs from "@emailjs/browser";
import { email } from "@/dataAux/contactData";

export const useContact = () => {
  // Logica de copiado de email
  const [copied, setCopied] = useState(false);
  const handleCopy = async () => {
    await navigator.clipboard.writeText(email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  // Logica de envio de email
  const [isSending, setIsSending] = useState(false);
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle");

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
    mode: "onTouched",
  });

  const onSubmitEmail = async (data: ContactFormData) => {
    setIsSending(true);
    try {
      await emailjs.send(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!,
        data as any,
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!,
      );
      setStatus("success");
      reset();
      setTimeout(() => setStatus("idle"), 4000);
    } catch (error) {
      setStatus("error");
    } finally {
      setIsSending(false);
    }
  };

  return {
    register,
    handleSubmit,
    errors,
    onSubmitEmail,
    isSending,
    status,
    copied,
    handleCopy,
  };
};
