import { ShieldCheck, Signal, Users, Volume2, Zap } from "lucide-react";

const reasons = [
  {
    icon: Zap,
    title: "Sozlash uchun muhandis kerak emas",
    description:
      "O'rnatish va SIP trunk sozlash 10 daqiqada, qo'shimcha texnik yordamsiz amalga oshadi.",
  },
  {
    icon: ShieldCheck,
    title: "Operator moslik muammosi chiqmaydi",
    description:
      "Uztelecom, Beeline, Ucell va Humans trunklari oldindan sozlangan, qo'lda sozlash shart emas.",
  },
  {
    icon: Signal,
    title: "Qo'ng'iroqlar uzilib qolmaydi",
    description:
      "Serverlar O'zbekistonda joylashgani uchun ulanish barqaror, kechikish sezilmaydi.",
  },
  {
    icon: Users,
    title: "Liniya band bo'lib qolmaydi",
    description:
      "Bir nechta xodim bir vaqtning o'zida, bir-biriga xalaqit bermay qo'ng'iroq qila oladi.",
  },
  {
    icon: Volume2,
    title: "Ovoz xirillashi yoki kechikish bo'lmaydi",
    description:
      "Mahalliy serverlar orqali past kechikish va aniq ovoz sifati ta'minlanadi.",
  },
];

const partners = [
  {
    name: "Mars IT School",
    note: "Hozirda foydalanmoqda",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRUH86BallZ2fwiI_qki02NZ7XaNxrJDynzd6Y3dvQ_uS1_GxLYnv8yA-M&s=10",
  },
  {
    name: "Cambridge Learning School",
    image:
      "https://avatars.mds.yandex.net/get-altay/14098455/2a0000019361cbcf2688cc9e775282a9fa81/L_height",
  },
  {
    name: "Gigu Fashion Academy",
    image:
      "https://yt3.googleusercontent.com/IqfAZmi7d5Q7GyJ5QOnZfHo6mg63pZ0aQofxys8yf8CW1cv0EYqAWve3cY9zoulnw83Iqf56Vlk=s900-c-k-c0x00ffffff-no-rj",
  },
  {
    name: "Colba o'quv markazi",
    image:
      "https://avatars.mds.yandex.net/get-altay/18134764/2a0000019cfcd7869842a5b9fd9cdca24deb/L_height",
  },
];

export default function TrustSection() {
  return (
    <section id="nega-biz" className="scroll-mt-24 border-b border-border bg-canvas">
      <div className="page-wrap section-y">
        <div className="max-w-xl">
          <h2 className="text-2xl font-semibold tracking-tight text-ink md:text-3xl">
            Nega aynan Callionni tanlashyabdi
          </h2>
        </div>

        <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {reasons.map(({ icon: Icon, title, description }) => (
            <div key={title} className="surface-card p-5">
              <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-signal-faint text-signal">
                <Icon className="h-4 w-4" strokeWidth={2.25} />
              </span>
              <h3 className="mt-4 text-sm font-semibold text-ink">{title}</h3>
              <p className="mt-1.5 text-sm leading-relaxed text-ink-muted">{description}</p>
            </div>
          ))}
        </div>

        <div className="mt-14 border-t border-border pt-10">
          <p className="text-sm text-ink-muted">Bizga ishonishadi</p>

          <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {partners.map((partner) => (
              <div
                key={partner.name}
                className="flex flex-col overflow-hidden rounded-xl2 border border-border bg-surface-2 transition duration-200 hover:border-signal/35 hover:bg-surface-3"
              >
                <div className="relative h-36 w-full overflow-hidden bg-surface">
                  {/* External partner logos; next/image host allowlists would be brittle here. */}
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={partner.image}
                    alt={`${partner.name} logotipi`}
                    className="h-full w-full object-cover"
                  />
                </div>
                <div className="flex flex-1 flex-col items-center px-4 py-5 text-center">
                  <span className="text-sm font-medium tracking-tight text-ink">
                    {partner.name}
                  </span>
                  {partner.note ? (
                    <span className="mt-3 inline-flex items-center gap-2 rounded-full bg-live/10 px-3 py-1 text-xs font-medium text-live">
                      <span className="h-1.5 w-1.5 rounded-full bg-live" />
                      {partner.note}
                    </span>
                  ) : null}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
