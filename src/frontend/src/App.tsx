import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Toaster } from "@/components/ui/sonner";
import { ArrowDown, ChevronDown, ShoppingBag, Sparkles } from "lucide-react";
import { AnimatePresence, type Variants, motion } from "motion/react";
import { useState } from "react";
import { SiApple, SiGoogle, SiGoogleplay } from "react-icons/si";
import { toast } from "sonner";
import { useGetBrand } from "./hooks/useQueries";

const CLOTHES = [
  {
    id: 1,
    drop: 1,
    name: "Peachy Tee",
    description: "Soft oversized tee with a peach embroidery. So cozy!",
    image: "/assets/generated/model-tshirt.dim_600x800.jpg",
    badge: "Drop 1",
    price: "$28",
  },
  {
    id: 2,
    drop: 1,
    name: "Orchard Sundress",
    description:
      "Light floral sundress with blossom print. Perfect for summer.",
    image: "/assets/generated/model-dress.dim_600x800.jpg",
    badge: "Drop 1",
    price: "$45",
  },
  {
    id: 3,
    drop: 2,
    name: "Blossom Hoodie",
    description: "Cozy peach hoodie for those chill days. Super warm!",
    image: "/assets/generated/model-hoodie.dim_600x800.jpg",
    badge: "Drop 2",
    price: "$52",
  },
  {
    id: 4,
    drop: 2,
    name: "Wide-Leg Pants",
    description: "Flowy wide-leg pants in soft blossom pink. Very comfy!",
    image: "/assets/generated/model-pants.dim_600x800.jpg",
    badge: "Drop 2",
    price: "$48",
  },
  {
    id: 5,
    drop: 3,
    name: "Summer Crop Top",
    description: "Peach crop top with a butterfly detail. Fresh summer look!",
    image: "/assets/generated/model-croptop.dim_600x800.jpg",
    badge: "Drop 3",
    price: "$32",
  },
  {
    id: 6,
    drop: 3,
    name: "Peachy Shorts",
    description: "Sun-embroidered shorts in soft yellow peach. Love them!",
    image: "/assets/generated/model-shorts.dim_600x800.jpg",
    badge: "Drop 3",
    price: "$30",
  },
];

const KIDS = [
  {
    id: 1,
    name: "Mini Peachy Tee",
    description: "A tiny peach tee for the littlest fans. Super soft and cute!",
    image: "/assets/generated/model-kids-tshirt.dim_600x800.jpg",
    badge: "Kids",
    price: "$22",
  },
  {
    id: 2,
    name: "Kids Hoodie",
    description: "Cozy peachy hoodie to keep little ones warm and stylish.",
    image: "/assets/generated/model-kids-hoodie.dim_600x800.jpg",
    badge: "Kids",
    price: "$38",
  },
  {
    id: 3,
    name: "Blossom Kids Dress",
    description: "A flowy peach sundress for the sweetest summer days.",
    image: "/assets/generated/model-kids-dress.dim_600x800.jpg",
    badge: "Kids",
    price: "$35",
  },
];

const TEENS = [
  {
    id: 1,
    name: "Teen Peachy Tee",
    description: "Oversized peach graphic tee, perfect for a casual cool look.",
    image: "/assets/generated/model-teen-tshirt.dim_600x800.jpg",
    badge: "Teens",
    price: "$30",
  },
  {
    id: 2,
    name: "Teen Crop Hoodie Set",
    description: "Trendy crop hoodie and wide-leg sweatpants in soft peach.",
    image: "/assets/generated/model-teen-hoodie.dim_600x800.jpg",
    badge: "Teens",
    price: "$58",
  },
  {
    id: 3,
    name: "Peachy Mini Skirt",
    description: "Flowy peach floral mini skirt for the cutest summer fits.",
    image: "/assets/generated/model-teen-skirt.dim_600x800.jpg",
    badge: "Teens",
    price: "$36",
  },
];

const BELT_BAGS = [
  {
    id: 1,
    name: "Peachy Belt Bag",
    description:
      "A cute peach belt bag with a gold buckle. Perfect for on-the-go!",
    image: "/assets/generated/belt-bag-peach.dim_600x600.jpg",
    badge: "Accessory",
    price: "$42",
  },
  {
    id: 2,
    name: "Blossom Belt Bag",
    description: "Soft pink belt bag with blossom embroidery and gold zipper.",
    image: "/assets/generated/belt-bag-pink.dim_600x600.jpg",
    badge: "Accessory",
    price: "$42",
  },
];

const SKINCARE = [
  {
    id: 1,
    name: "Peachy Glow Moisturizer",
    description:
      "A rich, peachy cream that locks in moisture all day. Soft, glowing skin guaranteed!",
    image: "/assets/generated/skincare-moisturizer.dim_600x600.jpg",
    badge: "Skincare",
    price: "$24",
  },
  {
    id: 2,
    name: "Blossom Serum",
    description:
      "A lightweight peach blossom serum that brightens and hydrates for a fresh, dewy look.",
    image: "/assets/generated/skincare-serum.dim_600x600.jpg",
    badge: "Skincare",
    price: "$32",
  },
  {
    id: 3,
    name: "Peachy Lip Balm",
    description:
      "A peachy-pink tinted lip balm that keeps your lips soft, plump, and kissably sweet!",
    image: "/assets/generated/skincare-lipbalm.dim_600x600.jpg",
    badge: "Skincare",
    price: "$12",
  },
];

const MAKEUP = [
  {
    id: 1,
    name: "Peachy Kiss Lipstick",
    description:
      "A creamy peachy-pink lipstick that gives your lips a gorgeous, juicy look. Long-lasting and so pretty!",
    image: "/assets/generated/makeup-lipstick.dim_600x600.jpg",
    badge: "Makeup",
    price: "$18",
  },
  {
    id: 2,
    name: "Blossom Blush",
    description:
      "A soft peach blush that gives your cheeks a natural, glowy finish. Totally adorable!",
    image: "/assets/generated/makeup-blush.dim_600x600.jpg",
    badge: "Makeup",
    price: "$22",
  },
  {
    id: 3,
    name: "Peachy Glow Eyeshadow Palette",
    description:
      "A dreamy palette of warm peach, gold, and coral shades. Create any look from cute to glam!",
    image: "/assets/generated/makeup-eyeshadow.dim_600x600.jpg",
    badge: "Makeup",
    price: "$35",
  },
];

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

function handleItemClick(name: string) {
  toast("More details coming soon! 🍑", {
    description: `${name} will have full details when we launch. Can't wait!`,
    duration: 4000,
  });
}

export default function App() {
  const { data: brand, isLoading } = useGetBrand();
  const [expandedDrop, setExpandedDrop] = useState<number | null>(null);

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
              href="#kids"
              className="px-4 py-2 rounded-full text-sm font-medium text-foreground/70 hover:text-foreground hover:bg-secondary transition-all duration-200"
              data-ocid="nav.kids.link"
            >
              Kids
            </a>
            <a
              href="#teens"
              className="px-4 py-2 rounded-full text-sm font-medium text-foreground/70 hover:text-foreground hover:bg-secondary transition-all duration-200"
              data-ocid="nav.teens.link"
            >
              Teens
            </a>
            <a
              href="#skincare"
              className="px-4 py-2 rounded-full text-sm font-medium text-foreground/70 hover:text-foreground hover:bg-secondary transition-all duration-200"
              data-ocid="nav.skincare.link"
            >
              Skincare
            </a>
            <a
              href="#makeup"
              className="px-4 py-2 rounded-full text-sm font-medium text-foreground/70 hover:text-foreground hover:bg-secondary transition-all duration-200"
              data-ocid="nav.makeup.link"
            >
              Makeup
            </a>
            <a
              href="#beltbags"
              className="px-4 py-2 rounded-full text-sm font-medium text-foreground/70 hover:text-foreground hover:bg-secondary transition-all duration-200"
              data-ocid="nav.beltbags.link"
            >
              Belt Bags
            </a>
            <a
              href="#about"
              className="px-4 py-2 rounded-full text-sm font-medium text-foreground/70 hover:text-foreground hover:bg-secondary transition-all duration-200"
              data-ocid="nav.about.link"
            >
              About
            </a>
            <a
              href="#getapp"
              className="px-4 py-2 rounded-full text-sm font-medium bg-primary/10 text-primary hover:bg-primary/20 hover:text-primary transition-all duration-200 font-semibold"
              data-ocid="nav.getapp.link"
            >
              📱 Get App
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
          {/* Animated gradient shimmer overlay */}
          <div
            className="absolute inset-0 pointer-events-none hero-shimmer"
            aria-hidden="true"
          />

          {/* Decorative peach orbs – more and bigger */}
          <div
            className="absolute top-12 right-8 w-44 h-44 peach-orb opacity-40 animate-float"
            aria-hidden="true"
          />
          <div
            className="absolute bottom-16 left-6 w-28 h-28 peach-orb opacity-30 animate-float-delayed"
            aria-hidden="true"
          />
          <div
            className="absolute top-1/3 left-4 w-16 h-16 peach-orb opacity-20 animate-float"
            style={{ animationDelay: "1s" }}
            aria-hidden="true"
          />
          <div
            className="absolute bottom-1/3 right-12 w-20 h-20 peach-orb opacity-25 animate-float-delayed"
            style={{ animationDelay: "0.5s" }}
            aria-hidden="true"
          />
          <div
            className="absolute top-8 left-1/4 w-10 h-10 peach-orb opacity-20 animate-float"
            style={{ animationDelay: "1.8s" }}
            aria-hidden="true"
          />
          <div
            className="absolute bottom-8 right-1/4 w-14 h-14 peach-orb opacity-25 animate-float-delayed"
            style={{ animationDelay: "2.2s" }}
            aria-hidden="true"
          />
          <div
            className="absolute top-2/3 left-1/3 w-8 h-8 peach-orb opacity-15 animate-float"
            style={{ animationDelay: "3s" }}
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

            {/* Logo – bigger with pulsing ring */}
            <motion.div
              variants={fadeUp}
              custom={1}
              className="flex justify-center mb-6"
            >
              <div className="relative w-40 h-40 sm:w-52 sm:h-52">
                {/* Pulsing ring animation */}
                <div className="absolute inset-0 rounded-full border-2 border-primary/30 animate-ping-slow" />
                <div
                  className="absolute -inset-3 rounded-full border border-primary/15 animate-ping-slow"
                  style={{ animationDelay: "0.5s" }}
                />
                <img
                  src="/assets/generated/peachy-logo-transparent.dim_400x400.png"
                  alt="Peachy Brand"
                  className="w-full h-full object-contain drop-shadow-peach animate-float relative z-10"
                />
              </div>
            </motion.div>

            {/* Brand Name – larger */}
            <motion.h1
              variants={fadeUp}
              custom={2}
              className="font-display text-7xl sm:text-8xl md:text-9xl font-black text-foreground tracking-tight leading-none mb-4"
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
              <a
                href="#collections"
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-primary text-primary-foreground font-semibold text-base shadow-peach hover:shadow-peach-lg hover:scale-105 active:scale-95 transition-all duration-200"
                data-ocid="hero.primary_button"
                aria-label="Shop Now"
              >
                <ShoppingBag size={18} aria-hidden="true" />
                Shop Now
              </a>
              <a
                href="#collections"
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full border-2 border-primary/30 text-primary font-semibold text-base hover:bg-primary/10 hover:border-primary/50 transition-all duration-200"
                data-ocid="hero.collections.link"
              >
                <ArrowDown size={16} aria-hidden="true" />
                See Collections
              </a>
            </motion.div>

            {/* Fun fruit emoji row – bigger */}
            <motion.div
              variants={fadeUp}
              custom={5}
              className="mt-10 flex items-center justify-center gap-4 text-4xl select-none"
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
        <section id="collections" className="collections-gradient py-32 px-6">
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
                className="font-display text-6xl sm:text-7xl font-black text-foreground tracking-tight"
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
              className="flex flex-col gap-6"
              variants={stagger}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-80px" }}
            >
              {COLLECTIONS.map((col, idx) => {
                const dropClothes = CLOTHES.filter((c) => c.drop === col.id);
                const isOpen = expandedDrop === col.id;
                return (
                  <motion.div
                    key={col.id}
                    variants={fadeUp}
                    custom={idx}
                    className="bg-card rounded-3xl overflow-hidden shadow-soft"
                    data-ocid={`collections.item.${col.id}`}
                  >
                    {/* ── Card header (always visible, clickable) ── */}
                    <button
                      type="button"
                      className="group w-full text-left focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
                      aria-expanded={isOpen}
                      onClick={() => setExpandedDrop(isOpen ? null : col.id)}
                      data-ocid={`collections.toggle.${col.id}`}
                    >
                      <div className="flex flex-col sm:flex-row">
                        {/* Image / emoji area */}
                        <div
                          className={`relative h-48 sm:w-52 sm:h-auto shrink-0 bg-gradient-to-br ${col.bg} flex items-center justify-center overflow-hidden`}
                        >
                          <div className="absolute inset-0 flex items-center justify-center">
                            <div className="w-28 h-28 peach-orb opacity-30 group-hover:opacity-50 transition-opacity duration-300" />
                          </div>
                          <span
                            className="relative text-6xl animate-float select-none"
                            style={{ animationDelay: `${idx * 0.5}s` }}
                          >
                            {col.emoji}
                          </span>
                          <div className="absolute top-3 right-3">
                            <Badge className="bg-white/70 text-foreground backdrop-blur-sm font-semibold text-xs border-0">
                              New Drop
                            </Badge>
                          </div>
                        </div>

                        {/* Text area */}
                        <div className="flex-1 p-5 flex flex-col justify-center">
                          <p className="text-xs font-semibold text-primary uppercase tracking-widest mb-1">
                            {col.name}
                          </p>
                          <h3 className="font-display text-2xl font-bold text-foreground">
                            {col.subtitle}
                          </h3>
                          <p className="mt-2 text-sm text-muted-foreground">
                            {dropClothes.length} peachy pieces —{" "}
                            {isOpen ? "tap to hide" : "tap to see the clothes!"}{" "}
                            ✨
                          </p>
                          <div className="mt-4 flex items-center gap-3">
                            <span
                              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-primary text-primary-foreground font-semibold text-sm shadow-sm group-hover:opacity-90 transition-opacity"
                              data-ocid={`collections.primary_button.${col.id}`}
                            >
                              <ShoppingBag size={15} aria-hidden="true" />
                              {isOpen ? "Hide Clothes" : "View Clothes"}
                            </span>
                            <motion.span
                              animate={{ rotate: isOpen ? 180 : 0 }}
                              transition={{ duration: 0.3 }}
                              className="w-9 h-9 rounded-full bg-secondary flex items-center justify-center shrink-0"
                              aria-hidden="true"
                            >
                              <ChevronDown size={18} className="text-primary" />
                            </motion.span>
                          </div>
                        </div>
                      </div>
                    </button>

                    {/* ── Expandable clothes panel ── */}
                    <AnimatePresence initial={false}>
                      {isOpen && (
                        <motion.div
                          key="clothes-panel"
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.4, ease: "easeInOut" }}
                          className="overflow-hidden"
                          data-ocid={`collections.panel.${col.id}`}
                        >
                          <div className="px-5 pb-6 pt-2 border-t border-border/40">
                            <p className="text-xs font-semibold text-primary uppercase tracking-widest mb-4 mt-2">
                              {col.name} Pieces
                            </p>
                            <motion.div
                              className="grid grid-cols-2 gap-4"
                              variants={stagger}
                              initial="hidden"
                              animate="visible"
                            >
                              {dropClothes.map((item, i) => (
                                <motion.article
                                  key={item.id}
                                  variants={fadeUp}
                                  custom={i}
                                  className="group bg-background rounded-2xl overflow-hidden shadow-soft hover:shadow-soft-lg hover:-translate-y-0.5 transition-all duration-300"
                                  data-ocid={`collections.item.${col.id}`}
                                >
                                  <div className="relative aspect-[3/4] bg-secondary/30 overflow-hidden">
                                    <img
                                      src={item.image}
                                      alt={item.name}
                                      className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-300"
                                    />
                                    <div className="absolute top-2 right-2">
                                      <Badge className="bg-primary text-primary-foreground font-semibold text-xs border-0 shadow-sm">
                                        {item.badge}
                                      </Badge>
                                    </div>
                                  </div>
                                  <div className="p-3">
                                    <h4 className="font-display text-sm font-bold text-foreground leading-tight">
                                      {item.name}
                                    </h4>
                                    <p className="mt-1 text-xs text-muted-foreground leading-snug line-clamp-2">
                                      {item.description}
                                    </p>
                                    <p className="mt-2 text-sm font-bold text-primary tracking-tight">
                                      {item.price}
                                    </p>
                                    <Button
                                      onClick={() => handleItemClick(item.name)}
                                      className="mt-2 w-full rounded-full bg-primary text-primary-foreground hover:opacity-90 font-semibold text-xs py-1.5 h-auto"
                                      data-ocid={`collections.primary_button.${col.id}`}
                                    >
                                      <ShoppingBag
                                        size={11}
                                        className="mr-1"
                                        aria-hidden="true"
                                      />
                                      Shop Now
                                    </Button>
                                  </div>
                                </motion.article>
                              ))}
                            </motion.div>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </motion.div>
                );
              })}
            </motion.div>

            {/* ─── Our Clothes ─── */}
            <div data-ocid="clothes.section" className="mt-20">
              {/* Sub-header */}
              <motion.div
                className="text-center mb-12"
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
                  The Wardrobe
                </motion.p>
                <motion.h2
                  variants={fadeUp}
                  custom={1}
                  className="font-display text-6xl sm:text-7xl font-black text-foreground tracking-tight"
                >
                  Our Clothes
                </motion.h2>
                <motion.p
                  variants={fadeUp}
                  custom={2}
                  className="mt-4 text-lg text-muted-foreground max-w-md mx-auto"
                >
                  6 pieces. All peachy. All yours. 🍑
                </motion.p>
              </motion.div>

              {/* Clothes Grid */}
              <motion.div
                className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-3 gap-5"
                variants={stagger}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-80px" }}
              >
                {CLOTHES.map((item, idx) => (
                  <motion.article
                    key={item.id}
                    variants={fadeUp}
                    custom={idx}
                    className="group bg-card rounded-3xl overflow-hidden shadow-soft hover:shadow-peach-lg hover:-translate-y-1 transition-all duration-300"
                    data-ocid={`clothes.item.${item.id}`}
                  >
                    {/* Image area */}
                    <div className="relative aspect-[3/4] bg-secondary/30 overflow-hidden">
                      <img
                        src={item.image}
                        alt={item.name}
                        className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-300"
                      />
                      {/* Drop badge */}
                      <div className="absolute top-3 right-3">
                        <Badge className="bg-primary text-primary-foreground font-semibold text-xs border-0 shadow-sm">
                          {item.badge}
                        </Badge>
                      </div>
                    </div>

                    {/* Card body */}
                    <div className="p-4">
                      <h3 className="font-display text-base sm:text-lg font-bold text-foreground leading-tight">
                        {item.name}
                      </h3>
                      <p className="mt-1 text-xs sm:text-sm text-muted-foreground leading-snug line-clamp-2">
                        {item.description}
                      </p>
                      <p className="mt-2 text-base font-bold text-primary tracking-tight">
                        {item.price}
                      </p>
                      <Button
                        onClick={() => handleItemClick(item.name)}
                        className="mt-3 w-full rounded-full bg-primary text-primary-foreground hover:opacity-90 font-semibold text-xs sm:text-sm"
                        data-ocid={`clothes.primary_button.${item.id}`}
                      >
                        <ShoppingBag
                          size={13}
                          className="mr-1.5"
                          aria-hidden="true"
                        />
                        Shop Now
                      </Button>
                    </div>
                  </motion.article>
                ))}
              </motion.div>
            </div>

            {/* ─── Kids Section ─── */}
            <div id="kids" data-ocid="kids.section" className="mt-20">
              <motion.div
                className="text-center mb-12"
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
                  Little Ones
                </motion.p>
                <motion.h2
                  variants={fadeUp}
                  custom={1}
                  className="font-display text-6xl sm:text-7xl font-black text-foreground tracking-tight"
                >
                  Kids 🧒
                </motion.h2>
                <motion.p
                  variants={fadeUp}
                  custom={2}
                  className="mt-4 text-lg text-muted-foreground max-w-md mx-auto"
                >
                  Peachy fits for the little ones too! 🍑
                </motion.p>
              </motion.div>

              <motion.div
                className="grid grid-cols-2 sm:grid-cols-3 gap-5"
                variants={stagger}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-80px" }}
              >
                {KIDS.map((item, idx) => (
                  <motion.article
                    key={item.id}
                    variants={fadeUp}
                    custom={idx}
                    className="group bg-card rounded-3xl overflow-hidden shadow-soft hover:shadow-peach-lg hover:-translate-y-1 transition-all duration-300"
                    data-ocid={`kids.item.${item.id}`}
                  >
                    <div className="relative aspect-[3/4] bg-secondary/30 overflow-hidden">
                      <img
                        src={item.image}
                        alt={item.name}
                        className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-300"
                      />
                      <div className="absolute top-3 right-3">
                        <Badge className="bg-primary text-primary-foreground font-semibold text-xs border-0 shadow-sm">
                          {item.badge}
                        </Badge>
                      </div>
                    </div>
                    <div className="p-4">
                      <h3 className="font-display text-base sm:text-lg font-bold text-foreground leading-tight">
                        {item.name}
                      </h3>
                      <p className="mt-1 text-xs sm:text-sm text-muted-foreground leading-snug line-clamp-2">
                        {item.description}
                      </p>
                      <p className="mt-2 text-base font-bold text-primary tracking-tight">
                        {item.price}
                      </p>
                      <Button
                        onClick={() => handleItemClick(item.name)}
                        className="mt-3 w-full rounded-full bg-primary text-primary-foreground hover:opacity-90 font-semibold text-xs sm:text-sm"
                        data-ocid={`kids.primary_button.${item.id}`}
                      >
                        <ShoppingBag
                          size={13}
                          className="mr-1.5"
                          aria-hidden="true"
                        />
                        Shop Now
                      </Button>
                    </div>
                  </motion.article>
                ))}
              </motion.div>
            </div>

            {/* ─── Teens Section ─── */}
            <div id="teens" data-ocid="teens.section" className="mt-20">
              <motion.div
                className="text-center mb-12"
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
                  Teen Vibes
                </motion.p>
                <motion.h2
                  variants={fadeUp}
                  custom={1}
                  className="font-display text-6xl sm:text-7xl font-black text-foreground tracking-tight"
                >
                  Teens 🧡
                </motion.h2>
                <motion.p
                  variants={fadeUp}
                  custom={2}
                  className="mt-4 text-lg text-muted-foreground max-w-md mx-auto"
                >
                  Trendy peachy fits made for teens! ✨
                </motion.p>
              </motion.div>

              <motion.div
                className="grid grid-cols-2 sm:grid-cols-3 gap-5"
                variants={stagger}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-80px" }}
              >
                {TEENS.map((item, idx) => (
                  <motion.article
                    key={item.id}
                    variants={fadeUp}
                    custom={idx}
                    className="group bg-card rounded-3xl overflow-hidden shadow-soft hover:shadow-peach-lg hover:-translate-y-1 transition-all duration-300"
                    data-ocid={`teens.item.${item.id}`}
                  >
                    <div className="relative aspect-[3/4] bg-secondary/30 overflow-hidden">
                      <img
                        src={item.image}
                        alt={item.name}
                        className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-300"
                      />
                      <div className="absolute top-3 right-3">
                        <Badge className="bg-primary text-primary-foreground font-semibold text-xs border-0 shadow-sm">
                          {item.badge}
                        </Badge>
                      </div>
                    </div>
                    <div className="p-4">
                      <h3 className="font-display text-base sm:text-lg font-bold text-foreground leading-tight">
                        {item.name}
                      </h3>
                      <p className="mt-1 text-xs sm:text-sm text-muted-foreground leading-snug line-clamp-2">
                        {item.description}
                      </p>
                      <p className="mt-2 text-base font-bold text-primary tracking-tight">
                        {item.price}
                      </p>
                      <Button
                        onClick={() => handleItemClick(item.name)}
                        className="mt-3 w-full rounded-full bg-primary text-primary-foreground hover:opacity-90 font-semibold text-xs sm:text-sm"
                        data-ocid={`teens.primary_button.${item.id}`}
                      >
                        <ShoppingBag
                          size={13}
                          className="mr-1.5"
                          aria-hidden="true"
                        />
                        Shop Now
                      </Button>
                    </div>
                  </motion.article>
                ))}
              </motion.div>
            </div>

            {/* ─── Skincare Section ─── */}
            <div id="skincare" data-ocid="skincare.section" className="mt-20">
              <motion.div
                className="text-center mb-12"
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
                  Beauty Essentials
                </motion.p>
                <motion.h2
                  variants={fadeUp}
                  custom={1}
                  className="font-display text-6xl sm:text-7xl font-black text-foreground tracking-tight"
                >
                  Skincare 🌸
                </motion.h2>
                <motion.p
                  variants={fadeUp}
                  custom={2}
                  className="mt-4 text-lg text-muted-foreground max-w-md mx-auto"
                >
                  Glow up with peachy skincare made just for you! ✨
                </motion.p>
              </motion.div>

              <motion.div
                className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-3xl mx-auto"
                variants={stagger}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-80px" }}
              >
                {SKINCARE.map((item, idx) => (
                  <motion.article
                    key={item.id}
                    variants={fadeUp}
                    custom={idx}
                    className="group bg-card rounded-3xl overflow-hidden shadow-soft hover:shadow-peach-lg hover:-translate-y-1 transition-all duration-300"
                    data-ocid={`skincare.item.${item.id}`}
                  >
                    <div className="relative aspect-square bg-secondary/30 overflow-hidden">
                      <img
                        src={item.image}
                        alt={item.name}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                      <div className="absolute top-3 right-3">
                        <Badge className="bg-primary text-primary-foreground font-semibold text-xs border-0 shadow-sm">
                          {item.badge}
                        </Badge>
                      </div>
                    </div>
                    <div className="p-4">
                      <h3 className="font-display text-base sm:text-lg font-bold text-foreground leading-tight">
                        {item.name}
                      </h3>
                      <p className="mt-1 text-xs sm:text-sm text-muted-foreground leading-snug line-clamp-2">
                        {item.description}
                      </p>
                      <p className="mt-2 text-base font-bold text-primary tracking-tight">
                        {item.price}
                      </p>
                      <Button
                        onClick={() => handleItemClick(item.name)}
                        className="mt-3 w-full rounded-full bg-primary text-primary-foreground hover:opacity-90 font-semibold text-xs sm:text-sm"
                        data-ocid={`skincare.primary_button.${item.id}`}
                      >
                        <ShoppingBag
                          size={13}
                          className="mr-1.5"
                          aria-hidden="true"
                        />
                        Shop Now
                      </Button>
                    </div>
                  </motion.article>
                ))}
              </motion.div>
            </div>

            {/* ─── Makeup Section ─── */}
            <div id="makeup" data-ocid="makeup.section" className="mt-20">
              <motion.div
                className="text-center mb-12"
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
                  Beauty Glam
                </motion.p>
                <motion.h2
                  variants={fadeUp}
                  custom={1}
                  className="font-display text-6xl sm:text-7xl font-black text-foreground tracking-tight"
                >
                  Makeup 💄
                </motion.h2>
                <motion.p
                  variants={fadeUp}
                  custom={2}
                  className="mt-4 text-lg text-muted-foreground max-w-md mx-auto"
                >
                  Peachy glam looks for every occasion! ✨
                </motion.p>
              </motion.div>

              <motion.div
                className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-3xl mx-auto"
                variants={stagger}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-80px" }}
              >
                {MAKEUP.map((item, idx) => (
                  <motion.article
                    key={item.id}
                    variants={fadeUp}
                    custom={idx}
                    className="group bg-card rounded-3xl overflow-hidden shadow-soft hover:shadow-peach-lg hover:-translate-y-1 transition-all duration-300"
                    data-ocid={`makeup.item.${item.id}`}
                  >
                    <div className="relative aspect-square bg-secondary/30 overflow-hidden">
                      <img
                        src={item.image}
                        alt={item.name}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                      <div className="absolute top-3 right-3">
                        <Badge className="bg-primary text-primary-foreground font-semibold text-xs border-0 shadow-sm">
                          {item.badge}
                        </Badge>
                      </div>
                    </div>
                    <div className="p-4">
                      <h3 className="font-display text-base sm:text-lg font-bold text-foreground leading-tight">
                        {item.name}
                      </h3>
                      <p className="mt-1 text-xs sm:text-sm text-muted-foreground leading-snug line-clamp-2">
                        {item.description}
                      </p>
                      <p className="mt-2 text-base font-bold text-primary tracking-tight">
                        {item.price}
                      </p>
                      <Button
                        onClick={() => handleItemClick(item.name)}
                        className="mt-3 w-full rounded-full bg-primary text-primary-foreground hover:opacity-90 font-semibold text-xs sm:text-sm"
                        data-ocid={`makeup.primary_button.${item.id}`}
                      >
                        <ShoppingBag
                          size={13}
                          className="mr-1.5"
                          aria-hidden="true"
                        />
                        Shop Now
                      </Button>
                    </div>
                  </motion.article>
                ))}
              </motion.div>
            </div>

            {/* ─── Belt Bags Section ─── */}
            <div id="beltbags" data-ocid="beltbags.section" className="mt-20">
              <motion.div
                className="text-center mb-12"
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
                  Accessories
                </motion.p>
                <motion.h2
                  variants={fadeUp}
                  custom={1}
                  className="font-display text-6xl sm:text-7xl font-black text-foreground tracking-tight"
                >
                  Belt Bags 👜
                </motion.h2>
                <motion.p
                  variants={fadeUp}
                  custom={2}
                  className="mt-4 text-lg text-muted-foreground max-w-md mx-auto"
                >
                  Cute peachy belt bags for wherever you go! ✨
                </motion.p>
              </motion.div>

              <motion.div
                className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-2xl mx-auto"
                variants={stagger}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-80px" }}
              >
                {BELT_BAGS.map((item, idx) => (
                  <motion.article
                    key={item.id}
                    variants={fadeUp}
                    custom={idx}
                    className="group bg-card rounded-3xl overflow-hidden shadow-soft hover:shadow-peach-lg hover:-translate-y-1 transition-all duration-300"
                    data-ocid={`beltbags.item.${item.id}`}
                  >
                    <div className="relative aspect-square bg-secondary/30 overflow-hidden">
                      <img
                        src={item.image}
                        alt={item.name}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                      <div className="absolute top-3 right-3">
                        <Badge className="bg-primary text-primary-foreground font-semibold text-xs border-0 shadow-sm">
                          {item.badge}
                        </Badge>
                      </div>
                    </div>
                    <div className="p-4">
                      <h3 className="font-display text-base sm:text-lg font-bold text-foreground leading-tight">
                        {item.name}
                      </h3>
                      <p className="mt-1 text-xs sm:text-sm text-muted-foreground leading-snug line-clamp-2">
                        {item.description}
                      </p>
                      <p className="mt-2 text-base font-bold text-primary tracking-tight">
                        {item.price}
                      </p>
                      <Button
                        onClick={() => handleItemClick(item.name)}
                        className="mt-3 w-full rounded-full bg-primary text-primary-foreground hover:opacity-90 font-semibold text-xs sm:text-sm"
                        data-ocid={`beltbags.primary_button.${item.id}`}
                      >
                        <ShoppingBag
                          size={13}
                          className="mr-1.5"
                          aria-hidden="true"
                        />
                        Shop Now
                      </Button>
                    </div>
                  </motion.article>
                ))}
              </motion.div>
            </div>
          </div>
        </section>

        {/* ─── About Section ─── */}
        <section
          id="about"
          className="relative py-32 px-6 overflow-hidden bg-background"
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
        {/* ─── App Download Section ─── */}
        <section
          id="getapp"
          data-ocid="appdownload.section"
          className="relative py-32 px-6 overflow-hidden hero-gradient"
        >
          {/* Background orbs */}
          <div
            className="absolute top-8 right-16 w-40 h-40 peach-orb opacity-30 animate-float"
            aria-hidden="true"
          />
          <div
            className="absolute bottom-8 left-10 w-24 h-24 peach-orb opacity-25 animate-float-delayed"
            aria-hidden="true"
          />
          <div
            className="absolute top-1/2 right-4 w-12 h-12 peach-orb opacity-15 animate-float"
            style={{ animationDelay: "1.5s" }}
            aria-hidden="true"
          />
          <div
            className="absolute -top-10 left-1/3 w-56 h-56 peach-orb opacity-10 animate-float-delayed"
            style={{ animationDelay: "0.8s" }}
            aria-hidden="true"
          />

          <div className="relative z-10 max-w-5xl mx-auto">
            <motion.div
              className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center"
              variants={stagger}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-80px" }}
            >
              {/* Left: text & buttons */}
              <div>
                <motion.p
                  variants={fadeUp}
                  custom={0}
                  className="text-sm font-semibold text-primary uppercase tracking-widest mb-4"
                >
                  Coming Soon
                </motion.p>
                <motion.h2
                  variants={fadeUp}
                  custom={1}
                  className="font-display text-7xl sm:text-8xl font-black text-foreground tracking-tight leading-none mb-5"
                >
                  Get the
                  <br />
                  <span className="text-primary">App</span>
                </motion.h2>
                <motion.p
                  variants={fadeUp}
                  custom={2}
                  className="text-lg sm:text-xl text-muted-foreground leading-relaxed mb-8 max-w-md"
                >
                  Shop Peachy Brand anywhere, anytime. Your fits, in your
                  pocket. 🍑
                </motion.p>

                {/* Download Buttons */}
                <motion.div
                  variants={fadeUp}
                  custom={3}
                  className="flex flex-col sm:flex-row gap-4"
                >
                  {/* Apple App Store */}
                  <a
                    href="https://apps.apple.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    data-ocid="appdownload.appstore.button"
                    className="group flex items-center gap-3 px-6 py-3 rounded-2xl bg-foreground text-background font-medium hover:scale-105 active:scale-95 transition-all duration-200 hover:opacity-90 shadow-lg"
                    aria-label="Download on the App Store"
                  >
                    <SiApple
                      size={28}
                      className="shrink-0"
                      aria-hidden="true"
                    />
                    <div className="text-left">
                      <p className="text-xs text-background/60 leading-none mb-0.5">
                        Download on the
                      </p>
                      <p className="text-lg font-bold leading-none">
                        App Store
                      </p>
                    </div>
                  </a>

                  {/* Google Play */}
                  <a
                    href="https://play.google.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    data-ocid="appdownload.googleplay.button"
                    className="group flex items-center gap-3 px-6 py-3 rounded-2xl bg-foreground text-background font-medium hover:scale-105 active:scale-95 transition-all duration-200 hover:opacity-90 shadow-lg"
                    aria-label="Get it on Google Play"
                  >
                    <SiGoogleplay
                      size={26}
                      className="shrink-0"
                      aria-hidden="true"
                    />
                    <div className="text-left">
                      <p className="text-xs text-background/60 leading-none mb-0.5">
                        Get it on
                      </p>
                      <p className="text-lg font-bold leading-none">
                        Google Play
                      </p>
                    </div>
                  </a>
                </motion.div>
              </div>

              {/* Right: decorative phone illustration */}
              <motion.div
                variants={fadeUp}
                custom={2}
                className="flex justify-center md:justify-end"
              >
                <div className="relative">
                  {/* Outer glow ring */}
                  <div className="absolute inset-0 -m-6 rounded-[3.5rem] bg-primary/10 blur-xl" />
                  {/* Phone shape */}
                  <div className="relative w-52 h-96 bg-foreground rounded-[3rem] shadow-2xl flex flex-col items-center justify-center overflow-hidden border-4 border-foreground/80">
                    {/* Screen */}
                    <div className="absolute inset-2 rounded-[2.5rem] bg-gradient-to-b from-[oklch(0.92_0.10_50)] to-[oklch(0.82_0.16_45)] overflow-hidden">
                      {/* Status bar notch */}
                      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-20 h-5 bg-foreground rounded-b-2xl" />
                      {/* App content preview */}
                      <div className="absolute inset-0 flex flex-col items-center justify-center gap-3 pt-6">
                        <img
                          src="/assets/generated/peachy-logo-transparent.dim_400x400.png"
                          alt="Peachy app icon"
                          className="w-16 h-16 object-contain drop-shadow-peach animate-float"
                        />
                        <p className="font-display text-foreground text-lg font-black tracking-tight">
                          Peachy
                        </p>
                        <p className="font-display text-foreground/70 text-xs font-medium">
                          Fresh fits. Peachy vibes.
                        </p>
                        <div className="mt-2 px-5 py-1.5 rounded-full bg-foreground text-background text-xs font-bold">
                          Open App
                        </div>
                        {/* Mini product thumbnails */}
                        <div className="flex gap-2 mt-3">
                          {[
                            {
                              src: "/assets/generated/model-tshirt.dim_600x800.jpg",
                              label: "tshirt",
                            },
                            {
                              src: "/assets/generated/model-dress.dim_600x800.jpg",
                              label: "dress",
                            },
                            {
                              src: "/assets/generated/model-hoodie.dim_600x800.jpg",
                              label: "hoodie",
                            },
                          ].map((item) => (
                            <div
                              key={item.label}
                              className="w-10 h-12 rounded-xl overflow-hidden shadow-sm border border-white/20"
                            >
                              <img
                                src={item.src}
                                alt=""
                                className="w-full h-full object-cover object-top"
                              />
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                    {/* Home indicator */}
                    <div className="absolute bottom-3 w-16 h-1 rounded-full bg-background/30" />
                  </div>

                  {/* Floating emoji badges */}
                  <div
                    className="absolute -top-4 -right-4 w-12 h-12 rounded-2xl bg-white shadow-lg flex items-center justify-center text-2xl animate-float"
                    style={{ animationDelay: "0.3s" }}
                  >
                    🍑
                  </div>
                  <div
                    className="absolute -bottom-4 -left-4 w-12 h-12 rounded-2xl bg-white shadow-lg flex items-center justify-center text-2xl animate-float-delayed"
                    style={{ animationDelay: "0.9s" }}
                  >
                    ✨
                  </div>
                  <div
                    className="absolute top-1/3 -right-6 w-10 h-10 rounded-xl bg-white shadow-md flex items-center justify-center text-lg animate-float"
                    style={{ animationDelay: "1.4s" }}
                  >
                    📱
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </section>
      </main>

      {/* ─── Toast Notifications ─── */}
      <Toaster position="bottom-center" richColors />

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
                    href="#kids"
                    className="text-background/60 hover:text-background text-sm transition-colors"
                    data-ocid="footer.kids.link"
                  >
                    Kids
                  </a>
                </li>
                <li>
                  <a
                    href="#teens"
                    className="text-background/60 hover:text-background text-sm transition-colors"
                    data-ocid="footer.teens.link"
                  >
                    Teens
                  </a>
                </li>
                <li>
                  <a
                    href="#skincare"
                    className="text-background/60 hover:text-background text-sm transition-colors"
                    data-ocid="footer.skincare.link"
                  >
                    Skincare
                  </a>
                </li>
                <li>
                  <a
                    href="#beltbags"
                    className="text-background/60 hover:text-background text-sm transition-colors"
                    data-ocid="footer.beltbags.link"
                  >
                    Belt Bags
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
                Find Us
              </p>
              <div className="flex gap-3">
                <a
                  href="https://www.google.com/search?q=Peachy+Brand"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-background/10 hover:bg-background/20 flex items-center justify-center transition-all duration-200 hover:scale-110"
                  aria-label="Find us on Google"
                  data-ocid="footer.google.link"
                >
                  <SiGoogle size={18} className="text-background/80" />
                </a>
              </div>
              <p className="mt-4 text-background/40 text-xs">
                Search us on Google 🍑
              </p>
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
