"use client";

import { useState, useEffect, useRef } from "react";

export default function SmartForm() {
  const ref = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [form, setForm] = useState({
    nome: "",
    pessoas: "",
    dia: "",
    periodo: "",
    observacao: "",
  });

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true);
      },
      { threshold: 0.2 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const message = `Olá! Gostaria de reservar uma mesa:
- Nome: ${form.nome}
- Pessoas: ${form.pessoas}
- Dia: ${form.dia}
- Período: ${form.periodo}${form.observacao ? `\n- Observação: ${form.observacao}` : ""}`;

    const encoded = encodeURIComponent(message);
    window.open(`https://wa.me/5519988887777?text=${encoded}`, "_blank");
  };

  const inputClasses =
    "w-full rounded-lg border border-primary/20 bg-white px-4 py-3 text-sm text-text placeholder:text-text-light/50 focus:border-accent focus:outline-none focus:ring-2 focus:ring-accent/20 transition-all";

  return (
    <section className="bg-bg py-24" id="reserva">
      <div
        ref={ref}
        className={`mx-auto max-w-2xl px-4 sm:px-6 lg:px-8 transition-all duration-700 ${
          isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
        }`}
      >
        <div className="text-center">
          <span className="inline-block rounded-full bg-accent/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-accent-dark">
            Exclusivo Plano Cresca
          </span>
          <h2 className="mt-4 font-heading text-3xl font-bold text-text sm:text-4xl">
            Reserve sua mesa em segundos
          </h2>
          <p className="mt-3 text-text-light">
            Preencha o formulário e envie direto pelo WhatsApp
          </p>
        </div>

        <form
          onSubmit={handleSubmit}
          className="mt-10 rounded-2xl border border-primary/10 bg-white p-8 shadow-lg"
        >
          <div className="space-y-5">
            {/* Nome */}
            <div>
              <label
                htmlFor="nome"
                className="mb-1.5 block text-sm font-medium text-text"
              >
                Seu nome
              </label>
              <input
                id="nome"
                type="text"
                required
                placeholder="Como podemos te chamar?"
                className={inputClasses}
                value={form.nome}
                onChange={(e) => setForm({ ...form, nome: e.target.value })}
              />
            </div>

            {/* Pessoas + Dia */}
            <div className="grid gap-5 sm:grid-cols-2">
              <div>
                <label
                  htmlFor="pessoas"
                  className="mb-1.5 block text-sm font-medium text-text"
                >
                  Quantas pessoas?
                </label>
                <select
                  id="pessoas"
                  required
                  className={inputClasses}
                  value={form.pessoas}
                  onChange={(e) =>
                    setForm({ ...form, pessoas: e.target.value })
                  }
                >
                  <option value="">Selecione</option>
                  <option value="1-2">1-2 pessoas</option>
                  <option value="3-4">3-4 pessoas</option>
                  <option value="5-6">5-6 pessoas</option>
                  <option value="7+">7 ou mais</option>
                </select>
              </div>
              <div>
                <label
                  htmlFor="dia"
                  className="mb-1.5 block text-sm font-medium text-text"
                >
                  Qual dia?
                </label>
                <select
                  id="dia"
                  required
                  className={inputClasses}
                  value={form.dia}
                  onChange={(e) => setForm({ ...form, dia: e.target.value })}
                >
                  <option value="">Selecione</option>
                  <option value="Segunda-feira">Segunda-feira</option>
                  <option value="Terça-feira">Terça-feira</option>
                  <option value="Quarta-feira">Quarta-feira</option>
                  <option value="Quinta-feira">Quinta-feira</option>
                  <option value="Sexta-feira">Sexta-feira</option>
                  <option value="Sábado">Sábado</option>
                  <option value="Domingo">Domingo</option>
                </select>
              </div>
            </div>

            {/* Período */}
            <div>
              <label className="mb-1.5 block text-sm font-medium text-text">
                Almoço ou jantar?
              </label>
              <div className="flex gap-4">
                <label className="flex cursor-pointer items-center gap-2">
                  <input
                    type="radio"
                    name="periodo"
                    value="Almoço"
                    required
                    className="h-4 w-4 accent-accent"
                    checked={form.periodo === "Almoço"}
                    onChange={(e) =>
                      setForm({ ...form, periodo: e.target.value })
                    }
                  />
                  <span className="text-sm text-text">Almoço</span>
                </label>
                <label className="flex cursor-pointer items-center gap-2">
                  <input
                    type="radio"
                    name="periodo"
                    value="Jantar"
                    className="h-4 w-4 accent-accent"
                    checked={form.periodo === "Jantar"}
                    onChange={(e) =>
                      setForm({ ...form, periodo: e.target.value })
                    }
                  />
                  <span className="text-sm text-text">Jantar</span>
                </label>
              </div>
            </div>

            {/* Observação */}
            <div>
              <label
                htmlFor="observacao"
                className="mb-1.5 block text-sm font-medium text-text"
              >
                Alguma observação?{" "}
                <span className="text-text-light">(opcional)</span>
              </label>
              <textarea
                id="observacao"
                rows={3}
                placeholder="Ex: aniversário, vegano, cadeirante..."
                className={inputClasses + " resize-none"}
                value={form.observacao}
                onChange={(e) =>
                  setForm({ ...form, observacao: e.target.value })
                }
              />
            </div>
          </div>

          <button
            type="submit"
            className="mt-8 flex w-full items-center justify-center gap-2 rounded-full bg-[#25D366] px-8 py-4 font-semibold text-white transition-all hover:bg-[#20BD5A] hover:shadow-lg"
          >
            <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.981.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
            </svg>
            Enviar reserva pelo WhatsApp
          </button>
        </form>
      </div>
    </section>
  );
}
