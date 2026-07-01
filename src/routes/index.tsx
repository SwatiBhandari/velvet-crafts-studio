import { createFileRoute } from "@tanstack/react-router";
import heroImg from "@/assets/hero.jpg";
import invitationsImg from "@/assets/service-invitations.jpg";
import welcomeImg from "@/assets/service-welcome.jpg";
import gamesImg from "@/assets/service-games.jpg";
import stationeryImg from "@/assets/service-stationery.jpg";
import signatureImg from "@/assets/signature.jpg";
import logoAsset from "@/assets/velvet-logo.png.asset.json";
import qrAsset from "@/assets/whatsapp-qr.jpg.asset.json";

export const Route = createFileRoute("/")({
  component: Index,
});

const pillars = [
  {
    n: "01",
    title: "Aesthetic Alignment",
    body: "We carefully study your personal style and theme to ensure every asset reflects your exact vision.",
  },
  {
    n: "02",
    title: "Accessible Premium Design",
    body: "We believe high-end luxury should be attainable, delivering top-tier creative work at an approachable value.",
  },
  {
    n: "03",
    title: "Lifelong Digital Keepsakes",
    body: "Our web-hosted designs ensure your milestones live on forever, serving as a digital vault for your memories.",
  },
];

const services = [
  {
    img: invitationsImg,
    title: "Hosted Web Invitations",
    body: "Luxurious, modern digital invitations hosted as a custom website. A beautiful, permanent link to your memories that you can share effortlessly and cherish forever.",
  },
  {
    img: welcomeImg,
    title: "Event Welcome Boards",
    body: "Stunning, high-resolution digital layouts designed to greet your guests and instantly set the aesthetic tone of your venue.",
  },
  {
    img: gamesImg,
    title: "Interactive Event Games",
    body: "Custom-designed layouts for games, icebreakers, and activities to keep your guests engaged and entertained.",
  },
  {
    img: stationeryImg,
    title: "Complete Event Stationery",
    body: "From menus and itineraries to personalized signage — everything you need, meticulously designed and ready for you to print locally.",
  },
];

function Monogram({ className = "", size = 40 }: { className?: string; size?: number }) {
  return (
    <img
      src={logoAsset.url}
      alt="Velvet Crafts Studio"
      width={size}
      height={size}
      className={`rounded-full object-contain ${className}`}
      style={{ width: size, height: size }}
    />
  );
}

function Ornament() {
  return (
    <div className="flex items-center justify-center gap-3 text-accent">
      <span className="hairline w-16" />
      <svg width="10" height="10" viewBox="0 0 10 10" fill="none" aria-hidden>
        <path d="M5 0L6 4L10 5L6 6L5 10L4 6L0 5L4 4L5 0Z" fill="currentColor" />
      </svg>
      <span className="hairline w-16" />
    </div>
  );
}

function Index() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* NAV */}
      <header className="absolute top-0 inset-x-0 z-20">
        <nav className="mx-auto max-w-7xl px-6 py-6 flex items-center justify-between">
          <a href="#top" className="flex items-center gap-2">
            <Monogram />
            <span className="eyebrow hidden sm:inline text-foreground/70">Velvet Crafts</span>
          </a>
          <ul className="hidden md:flex items-center gap-10 text-sm text-foreground/80">
            <li><a href="#about" className="hover:text-accent transition-colors">About</a></li>
            <li><a href="#experience" className="hover:text-accent transition-colors">Experience</a></li>
            <li><a href="#services" className="hover:text-accent transition-colors">Services</a></li>
            <li><a href="#signature" className="hover:text-accent transition-colors">Signature</a></li>
          </ul>
          <a
            href="#contact"
            className="eyebrow hidden md:inline border-b border-accent/60 pb-1 text-foreground hover:text-accent transition-colors"
          >
            Enquire
          </a>
        </nav>
      </header>

      {/* HERO */}
      <section id="top" className="relative min-h-[100svh] w-full overflow-hidden">
        <img
          src={heroImg}
          alt="Wedding guests toasting with champagne around an elegant floral table"
          width={1600}
          height={1200}
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-ivory/40 via-ivory/10 to-ivory/95" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_0%,var(--ivory)_95%)] opacity-60" />

        <div className="relative z-10 mx-auto max-w-7xl px-6 pt-40 pb-24 min-h-[100svh] flex flex-col justify-end">
          <div className="max-w-2xl">
            <div className="mb-8 flex items-center gap-4">
              <img
                src={logoAsset.url}
                alt="Velvet Crafts Studio emblem"
                width={80}
                height={80}
                className="h-20 w-20 rounded-full object-contain shadow-lg"
              />
              <span className="eyebrow text-foreground/70">Digital Atelier · India</span>
            </div>
            <h1 className="font-serif text-[clamp(3rem,10vw,7.5rem)] leading-[0.95] tracking-tight text-foreground">
              Velvet
              <br />
              <span className="italic-accent">Crafts</span> Studio
            </h1>
            <div className="mt-8 max-w-md">
              <p className="text-lg md:text-xl text-foreground/80 leading-relaxed">
                Affordable luxury for your
                <span className="italic-accent"> auspicious </span>
                beginnings.
              </p>
            </div>
            <div className="mt-10 flex flex-wrap items-center gap-6">
              <a
                href="#signature"
                className="inline-flex items-center gap-3 bg-primary text-primary-foreground px-8 py-4 text-sm tracking-[0.25em] uppercase hover:bg-accent transition-colors"
              >
                Explore the Studio
                <span aria-hidden>→</span>
              </a>
              <a href="#contact" className="eyebrow text-foreground/80 hover:text-accent transition-colors">
                Begin an enquiry
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ABOUT */}
      <section id="about" className="py-32 md:py-40 px-6">
        <div className="mx-auto max-w-5xl text-center">
          <p className="eyebrow mb-8">About Us</p>
          <h2 className="font-serif text-4xl md:text-6xl leading-[1.05]">
            Every milestone is an
            <span className="italic-accent"> auspicious </span>
            event —
            <br className="hidden md:block" />
            and deserves to be celebrated beautifully.
          </h2>
          <div className="mt-10 mx-auto max-w-2xl">
            <Ornament />
            <p className="mt-10 text-lg text-muted-foreground leading-relaxed">
              At Velvet Crafts, we craft digital keepsakes and event stationery for the moments that matter most.
              Your happiness and peace of mind sit at the very core of our creative process — every layout, every
              flourish, every hand-tuned detail.
            </p>
          </div>
        </div>
      </section>

      {/* EXPERIENCE / PILLARS */}
      <section id="experience" className="relative py-32 md:py-40 px-6 bg-secondary/60">
        <div className="mx-auto max-w-7xl">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-20">
            <div>
              <p className="eyebrow mb-6">The Studio Ethos</p>
              <h2 className="font-serif text-5xl md:text-7xl leading-[0.95]">
                The <span className="italic-accent">Velvet</span>
                <br />
                Experience.
              </h2>
            </div>
            <p className="md:max-w-sm text-muted-foreground leading-relaxed">
              A three-part philosophy that shapes every commission we take on — from first sketch to final send.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-px bg-border">
            {pillars.map((p) => (
              <article key={p.n} className="bg-secondary/60 p-10 md:p-12 min-h-[22rem] flex flex-col">
                <div className="flex items-baseline justify-between">
                  <span className="italic-accent text-5xl">{p.n}</span>
                  <span className="eyebrow text-foreground/40">Pillar</span>
                </div>
                <h3 className="font-serif text-3xl md:text-4xl mt-10 leading-tight">{p.title}</h3>
                <p className="mt-6 text-muted-foreground leading-relaxed">{p.body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section id="services" className="py-32 md:py-40 px-6">
        <div className="mx-auto max-w-7xl">
          <div className="text-center mb-20">
            <p className="eyebrow mb-6">Our Services</p>
            <h2 className="font-serif text-5xl md:text-7xl leading-[0.95]">
              A complete <span className="italic-accent">suite</span>
              <br />
              for the whole celebration.
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-14 md:gap-20">
            {services.map((s, i) => (
              <article key={s.title} className="group">
                <div className="relative overflow-hidden bg-muted aspect-[4/5]">
                  <img
                    src={s.img}
                    alt={s.title}
                    loading="lazy"
                    width={900}
                    height={1100}
                    className="h-full w-full object-cover transition-transform duration-[1200ms] group-hover:scale-105"
                  />
                  <span className="absolute top-4 left-4 eyebrow bg-ivory/80 backdrop-blur px-3 py-1.5">
                    0{i + 1}
                  </span>
                </div>
                <div className="mt-8 max-w-md">
                  <h3 className="font-serif text-3xl md:text-4xl leading-tight">{s.title}</h3>
                  <p className="mt-4 text-muted-foreground leading-relaxed">{s.body}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* SIGNATURE */}
      <section id="signature" className="relative py-32 md:py-40 px-6 bg-primary text-primary-foreground overflow-hidden">
        <div className="mx-auto max-w-7xl grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <p className="eyebrow mb-6" style={{ color: "var(--color-gold)" }}>
              Our Signature Offering
            </p>
            <h2 className="font-serif text-5xl md:text-7xl leading-[0.95] text-primary-foreground">
              An invitation
              <br />
              <span className="italic-accent">reimagined</span> as an
              <br />
              experience.
            </h2>
            <p className="mt-10 max-w-lg text-primary-foreground/75 leading-relaxed text-lg">
              Why send a standard card when you can share an immersive experience? Our signature web-hosted
              invitations are custom-built websites designed to capture the exact essence of your celebration —
              elegant, highly modern, and completely interactive.
            </p>

            <div className="mt-12 flex flex-wrap items-center gap-8">
              <a
                href="#contact"
                className="inline-flex items-center gap-3 bg-transparent text-primary-foreground px-8 py-4 text-sm tracking-[0.25em] uppercase border transition-colors hover:text-primary hover:bg-ivory"
                style={{ borderColor: "var(--color-gold)" }}
              >
                Explore
                <span aria-hidden>→</span>
              </a>
              <p className="italic-accent text-lg" style={{ color: "var(--color-gold)" }}>
                — a permanent link to your memory.
              </p>
            </div>
          </div>

          <div className="relative">
            <div
              className="absolute -inset-4 -z-0 opacity-40"
              style={{ background: "radial-gradient(closest-side, var(--color-gold), transparent)" }}
            />
            <div className="relative aspect-[7/5] overflow-hidden">
              <img
                src={signatureImg}
                alt="Signature hosted web invitation shown on a smartphone"
                loading="lazy"
                width={1400}
                height={1000}
                className="h-full w-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="py-32 md:py-40 px-6">
        <div className="mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <p className="eyebrow mb-6">Contact Information</p>
            <h2 className="font-serif text-5xl md:text-7xl leading-[0.95]">
              Let's begin your
              <br />
              <span className="italic-accent">auspicious</span> beginning.
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-10 md:gap-6 border-t border-border pt-16">
            <div>
              <p className="eyebrow mb-4">Call</p>
              <a href="tel:+916366961328" className="font-serif text-2xl md:text-3xl hover:text-accent transition-colors">
                +91 63669 61328
              </a>
            </div>
            <div>
              <p className="eyebrow mb-4">Write</p>
              <a
                href="mailto:velvetcraftsstudio@gmail.com"
                className="font-serif text-2xl md:text-3xl hover:text-accent transition-colors break-words"
              >
                velvetcraftsstudio@gmail.com
              </a>
            </div>
            <div className="flex md:justify-end">
              <div className="text-center">
                <p className="eyebrow mb-4">WhatsApp</p>
                <div className="inline-flex flex-col items-center gap-3 p-4 bg-secondary/60 border border-border">
                  <div className="relative h-40 w-40 bg-ivory p-2">
                    <img
                      src={qrAsset.url}
                      alt="WhatsApp QR code for Velvet Crafts Studio"
                      width={320}
                      height={320}
                      loading="lazy"
                      className="h-full w-full object-contain"
                    />
                  </div>
                  <p className="eyebrow text-foreground/60">Scan to chat</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-border py-14 px-6 bg-secondary/40">
        <div className="mx-auto max-w-7xl flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-3">
            <Monogram />
            <div>
              <p className="font-serif text-xl leading-none">Velvet Crafts Studio</p>
              <p className="eyebrow mt-2 text-foreground/60">Digital Event Atelier</p>
            </div>
          </div>
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} Velvet Crafts Studio. Crafted with care.
          </p>
        </div>
      </footer>
    </div>
  );
}
