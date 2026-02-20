import type { Metadata } from "next";
import ContactForm from "../../components/ContactForm";
import EventsSection from "../../components/EventsSection";
import { hours } from "../../data/hours";

export const metadata: Metadata = {
  title: "Contato e Reservas — Sabor da Villa | Campinas",
  description:
    "Reserve sua mesa no Sabor da Villa. Rua das Palmeiras, 245 — Centro, Campinas. Aceitamos eventos para até 30 pessoas.",
};

export default function ContatoPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-primary pt-32 pb-16">
        <div className="mx-auto max-w-4xl px-4 text-center sm:px-6">
          <h1 className="font-heading text-4xl font-bold text-white sm:text-5xl">
            Contato e Reservas
          </h1>
          <p className="mt-4 text-lg text-white/70">
            Estamos sempre prontos para receber você
          </p>
        </div>
      </section>

      <section className="bg-bg py-16">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-2 lg:items-start">
            {/* Info de contato + Horários + Mapa */}
            <div className="space-y-8">
              {/* Contatos */}
              <div className="rounded-2xl border border-primary/10 bg-white p-8 shadow-sm">
                <h2 className="font-heading text-xl font-semibold text-primary">
                  Informações de contato
                </h2>
                <ul className="mt-6 space-y-4">
                  <li className="flex items-center gap-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#25D366]/10">
                      <svg
                        className="h-5 w-5 text-[#25D366]"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
                      </svg>
                    </div>
                    <div>
                      <p className="text-sm font-medium text-text">WhatsApp</p>
                      <a
                        href="https://wa.me/5519988887777"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-sm text-accent-dark hover:underline"
                      >
                        (19) 98888-7777
                      </a>
                    </div>
                  </li>
                  <li className="flex items-center gap-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10">
                      <svg
                        className="h-5 w-5 text-primary"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        strokeWidth={2}
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                        />
                      </svg>
                    </div>
                    <div>
                      <p className="text-sm font-medium text-text">Telefone</p>
                      <p className="text-sm text-text-light">(19) 3255-0000</p>
                    </div>
                  </li>
                  <li className="flex items-center gap-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10">
                      <svg
                        className="h-5 w-5 text-primary"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        strokeWidth={2}
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                        />
                      </svg>
                    </div>
                    <div>
                      <p className="text-sm font-medium text-text">Email</p>
                      <a
                        href="mailto:contato@sabordavilla.campinas.com.br"
                        className="text-sm text-accent-dark hover:underline"
                      >
                        contato@sabordavilla.campinas.com.br
                      </a>
                    </div>
                  </li>
                  <li className="flex items-center gap-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10">
                      <svg
                        className="h-5 w-5 text-primary"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
                      </svg>
                    </div>
                    <div>
                      <p className="text-sm font-medium text-text">Instagram</p>
                      <a
                        href="https://instagram.com/sabordavilla.campinas"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-sm text-accent-dark hover:underline"
                      >
                        @sabordavilla.campinas
                      </a>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary/10">
                      <svg
                        className="h-5 w-5 text-primary"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        strokeWidth={2}
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                        />
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                        />
                      </svg>
                    </div>
                    <div>
                      <p className="text-sm font-medium text-text">Endereço</p>
                      <p className="text-sm text-text-light">
                        Rua das Palmeiras, 245 — Centro, Campinas/SP
                      </p>
                    </div>
                  </li>
                </ul>
              </div>

              {/* Horários */}
              <div className="rounded-2xl border border-primary/10 bg-white p-8 shadow-sm">
                <h2 className="font-heading text-xl font-semibold text-primary">
                  Horários de Funcionamento
                </h2>
                <div className="mt-6 overflow-hidden rounded-lg">
                  <table className="w-full">
                    <thead>
                      <tr className="bg-primary/5">
                        <th className="px-4 py-3 text-left text-sm font-semibold text-primary">
                          Dia
                        </th>
                        <th className="px-4 py-3 text-left text-sm font-semibold text-primary">
                          Almoço
                        </th>
                        <th className="px-4 py-3 text-left text-sm font-semibold text-primary">
                          Jantar
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      {hours.map((h, i) => (
                        <tr
                          key={h.dia}
                          className={
                            i % 2 === 0 ? "bg-white" : "bg-primary/[0.02]"
                          }
                        >
                          <td className="px-4 py-3 text-sm font-medium text-text">
                            {h.dia}
                          </td>
                          <td className="px-4 py-3 text-sm text-text-light">
                            {h.almoco}
                          </td>
                          <td className="px-4 py-3 text-sm text-text-light">
                            <span
                              className={
                                h.jantar === "Fechado"
                                  ? "text-red-500/80"
                                  : ""
                              }
                            >
                              {h.jantar}
                            </span>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
                <p className="mt-4 text-xs text-text-light">
                  * Horários sujeitos a alteração em feriados. Consulte-nos pelo
                  WhatsApp.
                </p>
              </div>

              {/* Avaliação Google */}
              <div className="rounded-2xl border border-primary/10 bg-white p-8 shadow-sm">
                <div className="flex items-start gap-4">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-accent/10">
                    <svg className="h-6 w-6 text-accent-dark" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-heading text-lg font-semibold text-text">
                      Gostou da experiência?
                    </h3>
                    <p className="mt-1 text-sm leading-relaxed text-text-light">
                      Sua avaliação nos ajuda a melhorar e a alcançar mais pessoas que amam boa comida.
                    </p>
                  </div>
                </div>
                <a
                  href="https://search.google.com/local/writereview?placeid=PLACEHOLDER_ID"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-6 flex w-full items-center justify-center gap-2 rounded-full border-2 border-accent bg-accent/5 px-6 py-3.5 text-sm font-semibold text-accent-dark transition-all hover:bg-accent hover:text-primary"
                >
                  <svg className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92a5.06 5.06 0 01-2.2 3.32v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.1z" />
                    <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
                    <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" />
                    <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" />
                  </svg>
                  Avaliar no Google
                </a>
              </div>
            </div>

            {/* Formulário + Mapa */}
            <div className="space-y-8">
              <ContactForm />

              {/* Mapa */}
              <div className="overflow-hidden rounded-2xl border border-primary/10 bg-white shadow-sm">
                <iframe
                  title="Localização Sabor da Villa"
                  src="https://maps.google.com/maps?q=-22.9064,-47.0616&z=16&output=embed"
                  className="h-[21rem] w-full"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
                <div className="p-4">
                  <p className="text-sm font-medium text-text">
                    Rua das Palmeiras, 245 — Centro, Campinas/SP
                  </p>
                  <p className="mt-1 text-xs text-text-light">
                    Próximo à Praça Carlos Gomes — Estacionamento conveniado ao
                    lado
                  </p>
                  <div className="mt-3 flex gap-3">
                    <a
                      href="https://www.google.com/maps/dir/?api=1&destination=-22.9064,-47.0616"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 rounded-full border border-primary/15 px-4 py-2 text-xs font-medium text-primary transition-all hover:bg-primary hover:text-white"
                    >
                      <svg className="h-4 w-4" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M14.41 4.59l-1-1C13.03 3.21 12.52 3 12 3s-1.03.21-1.41.59l-1 1C9.21 4.97 9 5.48 9 6v2.59l-5.29 5.29a1 1 0 000 1.41l5.29 5.3V23a1 1 0 001 1h4a1 1 0 001-1v-2.41l5.29-5.3a1 1 0 000-1.41L15 8.59V6c0-.52-.21-1.03-.59-1.41zM12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z" />
                      </svg>
                      Abrir no Google Maps
                    </a>
                    <a
                      href="https://waze.com/ul?ll=-22.9064,-47.0616&navigate=yes"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 rounded-full border border-primary/15 px-4 py-2 text-xs font-medium text-primary transition-all hover:bg-primary hover:text-white"
                    >
                      <svg className="h-4 w-4" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M20.54 6.63c.69 1.34 1.07 2.82 1.07 4.37 0 3.12-1.62 5.87-4.08 7.45a5.23 5.23 0 01-1.14 3.07c-.72.84-1.63 1.31-2.58 1.45-.17.02-.34.03-.51.03-.89 0-1.76-.35-2.46-1.01a3.74 3.74 0 01-.51-.58 10.77 10.77 0 01-1.33.08c-5.8 0-9-4.59-9-9.49C0 6.21 4.35 1 9 1c2.13 0 4.16.88 5.64 2.38L13.2 4.82A6.7 6.7 0 009 3C5.45 3 2 7.12 2 12c0 3.83 2.29 7.49 7 7.49.4 0 .78-.03 1.15-.08a3.58 3.58 0 01-.15-1.01c0-1.21.6-2.3 1.56-3.03A7.49 7.49 0 013.99 11c0-4.06 3.36-7.35 7.5-7.35 1.82 0 3.48.64 4.78 1.7l1.44-1.44A9.6 9.6 0 0011.49 1.65c-.81 0-1.6.1-2.35.29C5.01 2.98 2 6.87 2 11c0 1.19.22 2.34.64 3.41.14-.97.54-1.86 1.16-2.6A5.49 5.49 0 016 11c0-3 2.47-5.35 5.5-5.35 1.48 0 2.82.58 3.81 1.52l1.44-1.44C15.55 4.59 13.88 3.65 12 3.24" />
                        <circle cx="8.5" cy="11" r="1.5" />
                        <circle cx="14.5" cy="11" r="1.5" />
                        <path d="M8.5 15.5s1.5 2 3.5 2 3.5-2 3.5-2" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                      </svg>
                      Abrir no Waze
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <EventsSection />
    </>
  );
}
