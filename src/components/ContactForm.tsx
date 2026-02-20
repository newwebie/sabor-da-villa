"use client";

import { useState } from "react";

export default function ContactForm() {
  const [submitted, setSubmitted] = useState(false);

  const inputClasses =
    "w-full rounded-lg border border-primary/20 bg-white px-4 py-3 text-sm text-text placeholder:text-text-light/50 focus:border-accent focus:outline-none focus:ring-2 focus:ring-accent/20 transition-all";

  if (submitted) {
    return (
      <div className="rounded-2xl border border-primary/10 bg-white p-8 text-center shadow-lg">
        <svg className="mx-auto h-12 w-12 text-[#25D366]" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
        <h3 className="mt-4 font-heading text-xl font-semibold text-primary">
          Mensagem enviada!
        </h3>
        <p className="mt-2 text-sm text-text-light">
          Obrigado pelo contato. Retornaremos em breve.
        </p>
      </div>
    );
  }

  return (
    <form
      action="https://formspree.io/f/placeholder"
      method="POST"
      onSubmit={(e) => {
        e.preventDefault();
        setSubmitted(true);
      }}
      className="rounded-2xl border border-primary/10 bg-white p-8 shadow-lg"
    >
      <h3 className="font-heading text-xl font-semibold text-primary">
        Envie uma mensagem
      </h3>
      <div className="mt-6 space-y-5">
        <div className="grid gap-5 sm:grid-cols-2">
          <div>
            <label
              htmlFor="contact-name"
              className="mb-1.5 block text-sm font-medium text-text"
            >
              Nome
            </label>
            <input
              id="contact-name"
              name="name"
              type="text"
              required
              placeholder="Seu nome"
              className={inputClasses}
            />
          </div>
          <div>
            <label
              htmlFor="contact-email"
              className="mb-1.5 block text-sm font-medium text-text"
            >
              Email
            </label>
            <input
              id="contact-email"
              name="email"
              type="email"
              required
              placeholder="seu@email.com"
              className={inputClasses}
            />
          </div>
        </div>

        <div className="grid gap-5 sm:grid-cols-2">
          <div>
            <label
              htmlFor="contact-phone"
              className="mb-1.5 block text-sm font-medium text-text"
            >
              Telefone
            </label>
            <input
              id="contact-phone"
              name="phone"
              type="tel"
              placeholder="(19) 99999-0000"
              className={inputClasses}
            />
          </div>
          <div>
            <label
              htmlFor="contact-subject"
              className="mb-1.5 block text-sm font-medium text-text"
            >
              Assunto
            </label>
            <select
              id="contact-subject"
              name="subject"
              required
              className={inputClasses}
            >
              <option value="">Selecione</option>
              <option value="Reserva">Reserva</option>
              <option value="Evento">Evento</option>
              <option value="Feedback">Feedback</option>
              <option value="Outro">Outro</option>
            </select>
          </div>
        </div>

        <div>
          <label
            htmlFor="contact-message"
            className="mb-1.5 block text-sm font-medium text-text"
          >
            Mensagem
          </label>
          <textarea
            id="contact-message"
            name="message"
            rows={4}
            required
            placeholder="Como podemos ajudar?"
            className={inputClasses + " resize-none"}
          />
        </div>
      </div>

      <button
        type="submit"
        className="mt-6 w-full rounded-full bg-primary px-8 py-3.5 font-semibold text-white transition-all hover:bg-primary-light hover:shadow-lg"
      >
        Enviar mensagem
      </button>
    </form>
  );
}
