import { Badge } from "@/components/ui/badge";
import { ArrowDown, ShoppingBag, Sparkles } from "lucide-react";
import { AnimatePresence, type Variants, motion } from "motion/react";
import { SiInstagram, SiTiktok } from "react-icons/si";
import { useGetBrand } from "./hooks/useQueries";

const COLLECTIONS = [
  {
    id: 1,
    name: "Drop 1",
    subtitle: "The Orchard Edit",
    emoji: "🍑",
    bg: "from-[oklch(0.88_0.10_52)] to-[oklch(0.82_0.14_45)]",
  },
  {
    id: 2,
    name: "Drop 2",
    subtitle: "Blossom Season",
    emoji: "🌸",
    bg: "from-[oklch(0.90_0.08_60)] to-[oklch(0.84_0.12_50)]",
  },
  {
    id: 3,
    name: "Drop 3",
    subtitle: "Sweet Summer",
    emoji: "☀️",
    bg: "from-[oklch(0.92_0.09_70)] to-[oklch(0.86_0.12_55)]",
  },
];

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 32 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: i * 0.1, ease: "easeOut" },
  }),
};

const stagger: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.12,
    },
  },
};

export default function App() {
  const { data: brand, isLoading } = useGetBrand();

  const tagline = brand?.tagline ?? "Fresh fits. Peachy vibes.";
  const about =
    brand?.about ??
    "We're a new clothing brand just getting started. Big things are coming!";

  return (
    <div className="min-h-screen bg-background font-body overflow-x-hidden">
      {/* ─── Sticky Header ─── */}
      <header className="sticky top-0 z-50 backdrop-blur-md bg-background/80 border-b border-border/50">
        <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
          {/* Logo + Brand Name */}
          <a
            href="#home"
            className="flex items-center gap-3 group"
            data-ocid="nav.home.link"
            aria-label="Peachy Brand home"
          >
            <div className="relative w-10 h-10 shrink-0">
              <img
                src="/assets/generated/peachy-logo-transparent.dim_400x400.png"
                alt="Peachy Brand logo"
                className="w-full h-full object-contain drop-shadow-sm transition-transform group-hover:scale-110 duration-300"
              />
            </div>
            <span className="font-display text-xl font-semibold text-foreground tracking-tight">
              Peachy Brand
            </span>
          </a>

          {/* Nav links */}
          <nav
            className="hidden sm:flex items-center gap-1"
            aria-label="Main navigation"
          >
            <a
              href="#home"
              className="px-4 py-2 rounded-full text-sm font-medium text-foreground/70 hover:text-foreground hover:bg-secondary transition-all duration-200"
              data-ocid="nav.home.link"
            >
              Home
            </a>
            <a
              href="#collections"
              className="px-4 py-2 rounded-full text-sm font-medium text-foreground/70 hover:text-foreground hover:bg-secondary transition-all duration-200"
              data-ocid="nav.collections.link"
            >
              Collections
            </a>
            <a
              href="#about"
              className="px-4 py-2 rounded-full text-sm font-medium text-foreground/70 hover:text-foreground hover:bg-secondary transition-all duration-200"
              data-ocid="nav.about.link"
            >
              About
            </a>
          </nav>
        </div>
      </header>

      <main>
        {/* ─── Hero Section ─── */}
        <section
          id="home"
          className="relative min-h-[90vh] hero-gradient flex flex-col items-center justify-center px-6 py-20 overflow-hidden"
        >
          {/* Decorative peach orbs */}
          <div
            className="absolute top-12 right-8 w-32 h-32 peach-orb opacity-40 animate-float"
            aria-hidden="true"
          />
          <div
            className="absolute bottom-16 left-6 w-20 h-20 peach-orb opacity-30 animate-float-delayed"
            aria-hidden="true"
          />
          <div
            className="absolute top-1/3 left-4 w-12 h-12 peach-orb opacity-20 animate-float"
            style={{ animationDelay: "1s" }}
            aria-hidden="true"
          />

          {/* Big decorative background text */}
          <div
            className="absolute inset-0 flex items-center justify-center pointer-events-none overflow-hidden"
            aria-hidden="true"
          >
            <span
              className="font-display text-[18vw] font-black text-primary/8 tracking-tight select-none whitespace-nowrap"
              style={{ lineHeight: 1 }}
            >
              PEACHY
            </span>
          </div>

          {/* Content */}
          <motion.div
            className="relative z-10 text-center max-w-3xl"
            variants={stagger}
            initial="hidden"
            animate="visible"
          >
            {/* Badge */}
            <motion.div
              variants={fadeUp}
              custom={0}
              className="mb-6 flex justify-center"
            >
              <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/15 text-primary font-medium text-sm border border-primary/25">
                <Sparkles size={14} aria-hidden="true" />
                Now Live
              </span>
            </motion.div>

            {/* Logo */}
            <motion.div
              variants={fadeUp}
              custom={1}
              className="flex justify-center mb-6"
            >
              <div className="relative w-28 h-28 sm:w-36 sm:h-36">
                <img
                  src="/assets/generated/peachy-logo-transparent.dim_400x400.png"
                  alt="Peachy Brand"
                  className="w-full h-full object-contain drop-shadow-peach animate-float"
                />
              </div>
            </motion.div>

            {/* Brand Name */}
            <motion.h1
              variants={fadeUp}
              custom={2}
              className="font-display text-6xl sm:text-7xl md:text-8xl font-black text-foreground tracking-tight leading-none mb-4"
            >
              Peachy
              <br />
              <span className="text-primary">Brand</span>
            </motion.h1>

            {/* Tagline */}
            <AnimatePresence>
              {!isLoading && (
                <motion.p
                  variants={fadeUp}
                  custom={3}
                  initial="hidden"
                  animate="visible"
                  className="text-xl sm:text-2xl text-muted-foreground font-medium mt-4 mb-8"
                >
                  {tagline}
                </motion.p>
              )}
            </AnimatePresence>

            {/* CTA Button */}
            <motion.div
              variants={fadeUp}
              custom={4}
              className="flex flex-col sm:flex-row gap-3 justify-center items-center"
            >
              <button
                type="button"
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-primary text-primary-foreground font-semibold text-base shadow-peach hover:shadow-peach-lg hover:scale-105 active:scale-95 transition-all duration-200 cursor-default"
                data-ocid="hero.primary_button"
                tabIndex={0}
                aria-label="Shop coming soon"
              >
                <ShoppingBag size={18} aria-hidden="true" />
                Shop Now
              </button>
              <a
                href="#collections"
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full border-2 border-primary/30 text-primary font-semibold text-base hover:bg-primary/10 hover:border-primary/50 transition-all duration-200"
                data-ocid="hero.collections.link"
              >
                <ArrowDown size={16} aria-hidden="true" />
                See Collections
              </a>
            </motion.div>

            {/* Fun fruit emoji row */}
            <motion.div
              variants={fadeUp}
              custom={5}
              className="mt-10 flex items-center justify-center gap-4 text-3xl select-none"
              aria-hidden="true"
            >
              {["🍑", "🌸", "🍊", "✨", "🌺"].map((em, i) => (
                <span
                  key={em}
                  className="hover:scale-125 transition-transform duration-200 cursor-default inline-block"
                  style={{ animationDelay: `${i * 0.2}s` }}
                >
                  {em}
                </span>
              ))}
            </motion.div>
          </motion.div>
        </section>

        {/* ─── Collections Section ─── */}
        <section id="collections" className="collections-gradient py-24 px-6">
          <div className="max-w-6xl mx-auto">
            {/* Section Header */}
            <motion.div
              className="text-center mb-14"
              variants={stagger}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-80px" }}
            >
              <motion.p
                variants={fadeUp}
                custom={0}
                className="text-sm font-semibold text-primary uppercase tracking-widest mb-3"
              >
                Shop Now
              </motion.p>
              <motion.h2
                variants={fadeUp}
                custom={1}
                className="font-display text-5xl sm:text-6xl font-black text-foreground tracking-tight"
              >
                Collections
              </motion.h2>
              <motion.p
                variants={fadeUp}
                custom={2}
                className="mt-4 text-lg text-muted-foreground max-w-md mx-auto"
              >
                Fresh drops are here. Something peachy is waiting for you 🍑
              </motion.p>
            </motion.div>

            {/* Collection Cards */}
            <motion.div
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
              variants={stagger}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-80px" }}
            >
              {COLLECTIONS.map((col, idx) => (
                <motion.article
                  key={col.id}
                  variants={fadeUp}
                  custom={idx}
                  className="group relative bg-card rounded-3xl overflow-hidden shadow-soft hover:shadow-soft-lg hover:-translate-y-1 transition-all duration-300 cursor-default"
                  data-ocid={`collections.item.${col.id}`}
                >
                  {/* Card image area */}
                  <div
                    className={`relative h-60 bg-gradient-to-br ${col.bg} flex items-center justify-center overflow-hidden`}
                  >
                    {/* Decorative orb behind emoji */}
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="w-32 h-32 peach-orb opacity-30 group-hover:opacity-50 transition-opacity duration-300" />
                    </div>
                    <span
                      className="relative text-7xl animate-float select-none"
                      style={{ animationDelay: `${idx * 0.5}s` }}
                    >
                      {col.emoji}
                    </span>
                    {/* Coming Soon badge */}
                    <div className="absolute top-4 right-4">
                      <Badge
                        className="bg-white/70 text-foreground backdrop-blur-sm font-semibold text-xs border-0"
                        data-ocid={`collections.item.${col.id}`}
                      >
                        New Drop
                      </Badge>
                    </div>
                  </div>

                  {/* Card body */}
                  <div className="p-5">
                    <p className="text-xs font-semibold text-primary uppercase tracking-widest mb-1">
                      {col.name}
                    </p>
                    <h3 className="font-display text-xl font-bold text-foreground">
                      {col.subtitle}
                    </h3>
                    <p className="mt-2 text-sm text-muted-foreground">
                      Available now — grab your peachy fit! ✨
                    </p>
                  </div>
                </motion.article>
              ))}
            </motion.div>
          </div>
        </section>

        {/* ─── About Section ─── */}
        <section
          id="about"
          className="relative py-24 px-6 overflow-hidden bg-background"
        >
          {/* Decorative background text */}
          <div
            className="absolute inset-0 flex items-center justify-center pointer-events-none overflow-hidden"
            aria-hidden="true"
          >
            <span
              className="font-display text-[22vw] font-black text-primary/5 tracking-tight select-none whitespace-nowrap"
              style={{ lineHeight: 1 }}
            >
              STORY
            </span>
          </div>

          <div className="relative z-10 max-w-4xl mx-auto">
            <motion.div
              className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center"
              variants={stagger}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-80px" }}
            >
              {/* Left: visual */}
              <motion.div
                variants={fadeUp}
                custom={0}
                className="flex justify-center md:justify-start"
              >
                <div className="relative">
                  {/* Decorative circles */}
                  <div className="absolute -inset-6 rounded-full border-2 border-dashed border-primary/20 animate-spin-slow" />
                  <div
                    className="absolute -inset-12 rounded-full border border-primary/10 animate-spin-slow"
                    style={{
                      animationDirection: "reverse",
                      animationDuration: "30s",
                    }}
                  />
                  <div className="relative w-52 h-52 rounded-full bg-gradient-to-br from-[oklch(0.90_0.09_55)] to-[oklch(0.80_0.16_45)] flex items-center justify-center shadow-peach-lg">
                    <img
                      src="/assets/generated/peachy-logo-transparent.dim_400x400.png"
                      alt="Peachy Brand logo"
                      className="w-36 h-36 object-contain drop-shadow-sm"
                    />
                  </div>
                </div>
              </motion.div>

              {/* Right: text */}
              <div>
                <motion.p
                  variants={fadeUp}
                  custom={0}
                  className="text-sm font-semibold text-primary uppercase tracking-widest mb-3"
                >
                  Our Story
                </motion.p>
                <motion.h2
                  variants={fadeUp}
                  custom={1}
                  className="font-display text-4xl sm:text-5xl font-black text-foreground tracking-tight mb-6"
                >
                  Fresh start,
                  <br />
                  <span className="text-primary">big dreams.</span>
                </motion.h2>
                <AnimatePresence>
                  {!isLoading && (
                    <motion.p
                      variants={fadeUp}
                      custom={2}
                      initial="hidden"
                      animate="visible"
                      className="text-lg text-muted-foreground leading-relaxed"
                      data-ocid="about.section"
                    >
                      {about}
                    </motion.p>
                  )}
                </AnimatePresence>
                <motion.div
                  variants={fadeUp}
                  custom={3}
                  className="mt-6 flex flex-wrap gap-3"
                >
                  {["🍑 Fruity Vibes", "✨ Fresh Fits", "💫 Big Dreams"].map(
                    (tag) => (
                      <span
                        key={tag}
                        className="px-4 py-2 rounded-full bg-secondary text-secondary-foreground text-sm font-medium border border-border/50"
                      >
                        {tag}
                      </span>
                    ),
                  )}
                </motion.div>
              </div>
            </motion.div>
          </div>
        </section>
      </main>

      {/* ─── Footer ─── */}
      <footer className="bg-foreground text-background py-14 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-10 pb-10 border-b border-background/10">
            {/* Brand */}
            <div className="col-span-1 sm:col-span-1">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-full bg-background/10 flex items-center justify-center overflow-hidden">
                  <img
                    src="/assets/generated/peachy-logo-transparent.dim_400x400.png"
                    alt="Peachy Brand"
                    className="w-8 h-8 object-contain"
                  />
                </div>
                <span className="font-display text-lg font-bold text-background">
                  Peachy Brand
                </span>
              </div>
              <p className="text-background/60 text-sm leading-relaxed">
                {tagline}
              </p>
            </div>

            {/* Links */}
            <div>
              <p className="font-semibold text-background text-sm mb-4 uppercase tracking-widest">
                Navigate
              </p>
              <ul className="space-y-2">
                <li>
                  <a
                    href="#home"
                    className="text-background/60 hover:text-background text-sm transition-colors"
                    data-ocid="footer.home.link"
                  >
                    Home
                  </a>
                </li>
                <li>
                  <a
                    href="#collections"
                    className="text-background/60 hover:text-background text-sm transition-colors"
                    data-ocid="footer.collections.link"
                  >
                    Collections
                  </a>
                </li>
                <li>
                  <a
                    href="#about"
                    className="text-background/60 hover:text-background text-sm transition-colors"
                    data-ocid="footer.about.link"
                  >
                    About
                  </a>
                </li>
              </ul>
            </div>

            {/* Social */}
            <div>
              <p className="font-semibold text-background text-sm mb-4 uppercase tracking-widest">
                Follow Along
              </p>
              <div className="flex gap-3">
                <a
                  href="https://www.instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-background/10 hover:bg-background/20 flex items-center justify-center transition-all duration-200 hover:scale-110"
                  aria-label="Follow on Instagram"
                  data-ocid="footer.instagram.link"
                >
                  <SiInstagram size={18} className="text-background/80" />
                </a>
                <a
                  href="https://www.tiktok.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-background/10 hover:bg-background/20 flex items-center justify-center transition-all duration-200 hover:scale-110"
                  aria-label="Follow on TikTok"
                  data-ocid="footer.tiktok.link"
                >
                  <SiTiktok size={18} className="text-background/80" />
                </a>
              </div>
              <p className="mt-4 text-background/40 text-xs">Follow us 🍑</p>
            </div>
          </div>

          {/* Bottom bar */}
          <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-background/40 text-xs">
            <span>
              © {new Date().getFullYear()} Peachy Brand. All rights reserved.
            </span>
            <a
              href={`https://caffeine.ai?utm_source=caffeine-footer&utm_medium=referral&utm_content=${encodeURIComponent(window.location.hostname)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-background/70 transition-colors"
            >
              Built with ❤️ using caffeine.ai
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
