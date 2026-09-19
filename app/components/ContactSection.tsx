"use client";

import { useState, type ChangeEvent, type FormEvent } from "react";
import { ArrowRight, CheckCircle2, Send, ShieldCheck } from "lucide-react";
import { applicationFormSchema } from "@/lib/application.schema";
import { getApiUrl } from "@/lib/api";

type FormStatus = "idle" | "submitting" | "success" | "error";

const emptyForm = {
  name: "",
  phone: "",
  company: "",
};

export default function ContactSection() {
  const [status, setStatus] = useState<FormStatus>("idle");
  const [form, setForm] = useState(emptyForm);
  const [fieldError, setFieldError] = useState<string | null>(null);

  const onChange = (
    event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = event.target;

    setForm((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const onSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setFieldError(null);

    const parsed = applicationFormSchema.safeParse({
      name: form.name,
      phone: form.phone,
      company: form.company,
    });

    if (!parsed.success) {
      setFieldError("Ma'lumotlarni tekshiring");
      return;
    }

    setStatus("submitting");

    try {
      const response = await fetch(`${getApiUrl()}/api/applications`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(parsed.data),
      });

      const payload = (await response.json().catch(() => null)) as
        | { success?: boolean }
        | null;

      if (!response.ok || !payload?.success) {
        setStatus("error");
        return;
      }

      setStatus("success");
      setForm(emptyForm);
    } catch {
      setStatus("error");
    }
  };

  return (
    <section
      id="demo"
      className="relative scroll-mt-24 overflow-hidden border-b border-border bg-canvas"
    >
      <div className="page-wrap section-y relative">
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
          <div className="flex flex-col justify-center">
            <div className="mb-5 inline-flex w-fit items-center gap-2 rounded-full border border-border bg-surface px-3 py-1.5">
              <span className="h-1.5 w-1.5 rounded-full bg-live" />
              <span className="text-xs font-medium text-ink-muted">
                Biz bilan bog&apos;laning
              </span>
            </div>

            <h2 className="max-w-xl text-3xl font-semibold leading-tight tracking-tight text-ink md:text-4xl lg:text-[42px]">
              Demo oling yoki{" "}
              <span className="text-signal">
                to&apos;liq ma&apos;lumot
              </span>{" "}
              oling
            </h2>

            <p className="mt-5 max-w-lg text-base leading-7 text-ink-muted">
              Kompaniyangiz uchun zamonaviy, barqaror va xavfsiz SIP
              call-center tizimini biz bilan xavfsiz tashkil qiling.
            </p>

            <div className="mt-8 space-y-4">
              <div className="flex items-start gap-3">
                <div className="mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-live-faint text-live">
                  <CheckCircle2 className="h-4 w-4" />
                </div>
                <div className="text-sm font-medium text-ink">Individual yechim</div>
              </div>

              <div className="flex items-start gap-3">
                <div className="mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-live-faint text-live">
                  <CheckCircle2 className="h-4 w-4" />
                </div>
                <div className="text-sm font-medium text-ink">Professional integratsiya</div>
              </div>

              <div className="flex items-start gap-3">
                <div className="mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-live-faint text-live">
                  <ShieldCheck className="h-4 w-4" />
                </div>
                <div className="text-sm font-medium text-ink">Uzulishlarsiz aloqa</div>
              </div>
            </div>

            <div className="mt-10 flex items-center gap-2 text-xs text-ink-faint">
              <ArrowRight className="h-3.5 w-3.5 text-signal" />
              <span>Ariza qoldiring — biz siz bilan bog&apos;lanamiz</span>
            </div>
          </div>

          {status === "success" ? (
            <div className="flex min-h-[460px] items-center justify-center rounded-xl2 border border-border bg-surface p-8 shadow-window-frame">
              <div className="max-w-sm text-center">
                <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-live-faint text-live">
                  <CheckCircle2 className="h-8 w-8" />
                </div>

                <h3 className="mt-6 text-xl font-semibold text-ink">
                  Arizangiz muvaffaqiyatli yuborildi
                </h3>

                <p className="mt-3 text-sm leading-6 text-ink-muted">
                  Tez orada siz bilan bog&apos;lanamiz.
                </p>
              </div>
            </div>
          ) : (
            <form
              onSubmit={onSubmit}
              noValidate
              className="relative rounded-xl2 border border-border bg-surface p-6 shadow-window-frame md:p-8"
            >
              <div className="mb-7">
                <div className="flex items-center gap-2">
                  <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-signal-faint text-signal">
                    <Send className="h-4 w-4" />
                  </div>
                  <div>
                    <div className="text-sm font-medium text-ink">Ariza qoldirish</div>
                    <div className="text-xs text-ink-faint">Ma&apos;lumotlarni kiriting</div>
                  </div>
                </div>
              </div>

              <div className="space-y-5">
                <div>
                  <label
                    htmlFor="contact-name"
                    className="mb-2 block text-xs font-medium text-ink-muted"
                  >
                    Ism
                  </label>
                  <input
                    id="contact-name"
                    name="name"
                    required
                    type="text"
                    autoComplete="name"
                    placeholder="Ism kiriting..."
                    value={form.name}
                    onChange={onChange}
                    className="field-input h-12 px-4"
                  />
                </div>

                <div>
                  <label
                    htmlFor="contact-phone"
                    className="mb-2 block text-xs font-medium text-ink-muted"
                  >
                    Telefon raqam
                  </label>
                  <input
                    id="contact-phone"
                    name="phone"
                    required
                    type="tel"
                    autoComplete="tel"
                    placeholder="+998 90 123 45 67"
                    value={form.phone}
                    onChange={onChange}
                    className="field-input h-12 px-4 font-mono placeholder:font-sans"
                  />
                </div>

                <div>
                  <label
                    htmlFor="contact-company"
                    className="mb-2 block text-xs font-medium text-ink-muted"
                  >
                    Tashkilot nomi
                  </label>
                  <input
                    id="contact-company"
                    name="company"
                    required
                    type="text"
                    autoComplete="organization"
                    placeholder="Tashkilot nomini kiriting..."
                    value={form.company}
                    onChange={onChange}
                    className="field-input h-12 px-4"
                  />
                </div>
              </div>

              {fieldError ? (
                <p className="mt-4 rounded-lg border border-danger/20 bg-danger/5 px-3 py-2.5 text-sm text-danger">
                  {fieldError}
                </p>
              ) : null}

              {status === "error" ? (
                <p
                  className="mt-4 rounded-lg border border-danger/20 bg-danger/5 px-3 py-2.5 text-sm text-danger"
                  role="alert"
                >
                  Arizani yuborishda xatolik yuz berdi. Iltimos, qayta
                  urinib ko&apos;ring.
                </p>
              ) : null}

              <button
                type="submit"
                disabled={status === "submitting"}
                className="btn-primary mt-6 h-12 w-full disabled:cursor-not-allowed disabled:opacity-70"
              >
                {status === "submitting" ? "Yuborilmoqda..." : "Ariza qoldirish"}
              </button>

              <p className="mt-4 text-center text-[11px] leading-5 text-ink-faint">
                Ma&apos;lumotlaringiz faqat siz bilan bog&apos;lanish va
                xizmat haqida ma&apos;lumot berish uchun ishlatiladi.
              </p>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
