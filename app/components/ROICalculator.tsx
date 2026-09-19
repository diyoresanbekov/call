"use client";

import { Check, Calculator } from "lucide-react";

const plans = [
  {
    name: "Start",
    price: "80 000",
    priceSuffix: "so'm / oy",
    description: "Kichik call-centerlar uchun boshlang'ich tarifimiz. 1ta xodim uchun",
    features: [
      "Call-center xodimlari",
      "Ovozli menyu (IVR)",
      "Suhbatlarni yozib olish",
      "Qo'ng'iroq hisobotlari",
      "Qo'ng'iroqlarni qabul qilish qoidalari",
      "AmoCRM va Bitrix24 bilan integratsiya",
      "1 haftalik sinov muddati",
    ],
  },
  {
    name: "Optima",
    price: "485 000",
    priceSuffix: "so'm / oy",
    description: "O'sib borayotgan call-centerlar uchun optimal yechim. 7ta xodim uchun",
    popular: true,
    features: [
      "Call-center xodimlari",
      "Ovozli menyu (IVR)",
      "Suhbatlarni yozib olish",
      "Qo'ng'iroq hisobotlari",
      "Qo'ng'iroqlarni qabul qilish qoidalari",
      "AmoCRM va Bitrix24 bilan integratsiya",
      "1 haftalik sinov muddati",
    ],
  },
  {
    name: "Profi",
    price: "899 000",
    priceSuffix: "so'm / oy",
    description: "Katta hajmdagi call-centerlar uchun kengaytirilgan tarif. 14ta xodim uchun",
    features: [
      "Call-center xodimlari",
      "Ovozli menyu (IVR)",
      "Suhbatlarni yozib olish",
      "Qo'ng'iroq hisobotlari",
      "Qo'ng'iroqlarni qabul qilish qoidalari",
      "AmoCRM va Bitrix24 bilan integratsiya",
      "1 haftalik sinov muddati",
    ],
  },
];

export default function ROICalculator() {
  return (
    <section
      id="hisoblagich"
      className="scroll-mt-24 border-b border-border bg-surface"
    >
      <div className="page-wrap section-y">
        {/* Header */}
        <div className="max-w-xl">
          <div className="flex items-center gap-2 text-sm font-medium text-signal">
            <Calculator className="h-4 w-4" />
            Tariflar
          </div>

          <h2 className="mt-3 text-2xl font-semibold tracking-tight text-ink md:text-3xl">
            O&apos;zingizga mos tarifni tanlang
          </h2>

          <p className="mt-3 text-ink-muted">
            Call-centeringiz hajmiga qarab mos tarifni tanlang. Barcha tariflarda
            asosiy call-center imkoniyatlari mavjud.
          </p>
        </div>

        {/* Cards */}
        <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-3">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`relative flex flex-col rounded-xl2 border bg-surface p-6 shadow-[0_1px_2px_rgba(24,24,27,0.04)] transition-all ${
                plan.popular
                  ? "border-signal"
                  : "border-border"
              }`}
            >
              {/* Popular badge */}
              {plan.popular && (
                <div className="absolute right-5 top-5 rounded-md bg-signal-faint px-2.5 py-1 text-xs font-medium text-signal">
                  Tavsiya etiladi
                </div>
              )}

              {/* Plan name */}
              <div>
                <h3 className="text-xl font-semibold text-ink">
                  {plan.name}
                </h3>

                <p className="mt-2 min-h-[40px] text-sm leading-relaxed text-ink-muted">
                  {plan.description}
                </p>
              </div>

              {/* Price */}
              <div className="mt-7 border-b border-border pb-6">
                <div className="font-mono text-3xl font-semibold tracking-tight text-ink">
                  {plan.price}
                </div>

                <div className="mt-1 text-sm text-ink-faint">
                  {plan.priceSuffix}
                </div>
              </div>

              {/* Features */}
              <div className="mt-6 flex-1">
                <div className="mb-4 text-sm font-medium text-ink">
                  Tarif tarkibida:
                </div>

                <ul className="space-y-3">
                  {plan.features.map((feature) => (
                    <li
                      key={feature}
                      className="flex items-start gap-2.5 text-sm text-ink-muted"
                    >
                      <Check className="mt-0.5 h-4 w-4 shrink-0 text-live" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Button */}
              <a
                href="#demo"
                className={`mt-8 flex w-full items-center justify-center rounded-lg px-4 py-3 text-sm font-medium transition-colors ${
                  plan.popular
                    ? "bg-signal text-white hover:bg-signal-dim"
                    : "border border-border bg-surface text-ink hover:bg-surface-3"
                }`}
              >
                So&apos;rov qoldirish
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}