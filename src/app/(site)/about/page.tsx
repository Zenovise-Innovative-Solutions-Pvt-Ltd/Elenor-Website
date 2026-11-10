import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import Breadcrumbs from '@/components/ui/Breadcrumbs';
import CtaSection from '@/components/ui/CtaSection';
import Reveal from '@/components/ui/Reveal';
import SectionHeading from '@/components/ui/SectionHeading';
import ProductCard from '@/components/products/ProductCard';
import { PRODUCTS } from '@/data/products';
import { SITE } from '@/data/site';
import JsonLd from '@/components/ui/JsonLd';
import { graph, webPageJsonLd } from '@/lib/seo';

const title = 'About ÈLENOR — Our Story, Philosophy, Vision & Promise';
const description =
  'ÈLENOR was founded by a hairstylist and salon entrepreneur with 25 years of salon experience to bring professional-inspired hair and skin care into everyday beauty routines.';

export const metadata: Metadata = {
  title: { absolute: title },
  description,
  alternates: { canonical: '/about' },
  openGraph: { url: '/about', title, description },
};

// Plain statements of fact — easy for readers, search and answer engines to quote.
const AT_A_GLANCE = [
  {
    term: 'What ÈLENOR is',
    detail: 'A beauty brand bringing professional-inspired hair and skin care into everyday beauty routines.',
  },
  { term: 'Founded by', detail: 'A professional hairstylist and salon entrepreneur with 25 years of salon experience.' },
  {
    term: 'Product categories',
    detail: 'Shampoos, conditioners, hair serums and hair masks — with skin care and fragrance to follow.',
  },
  { term: 'How to buy', detail: 'ÈLENOR does not sell online or list prices — availability is by enquiry.' },
  { term: 'Contact', detail: `WhatsApp ${SITE.whatsappDisplay}. We reply to messages ${SITE.responseTime}.` },
];

function Quote({ children, cite }: { children: React.ReactNode; cite?: string }) {
  return (
    <Reveal className="container-x mx-auto max-w-3xl text-center">
      <div className="hairline mx-auto" />
      <blockquote className="mt-8 font-serif text-3xl italic leading-snug text-ink md:text-4xl">{children}</blockquote>
      <div className="hairline mx-auto mt-8" />
      {cite && <p className="eyebrow mt-6">— {cite}</p>}
    </Reveal>
  );
}

export default function AboutPage() {
  return (
    <>
      <JsonLd data={graph(webPageJsonLd('AboutPage', '/about', title, description))} />
      {/* Hero */}
      <section className="pb-16 pt-28 sm:pt-32 md:pb-24 md:pt-40" aria-labelledby="page-title">
        <div className="container-x">
          <Breadcrumbs items={[{ label: 'About', href: '/about' }]} />
          <div className="mt-10 grid grid-cols-1 items-center gap-10 md:grid-cols-12 md:gap-16">
            <div className="md:col-span-5">
              <div className="image-hover relative aspect-[4/5] max-w-md overflow-hidden rounded-sm bg-line/40">
                <Image
                  src="/images/studio/marble-tray.webp"
                  alt="Elenor moisturising cream, ampoule and toner arranged on a marble tray with dried branches and soft linen"
                  fill
                  preload
                  fetchPriority="high"
                  sizes="(min-width: 768px) 40vw, 92vw"
                  className="object-cover"
                />
              </div>
            </div>
            <div className="md:col-span-7">
              <SectionHeading
                as="h1"
                id="page-title"
                eyebrow="About ÈLENOR"
                title="Beauty Refined. Care Redefined."
                align="left"
                size="xl"
                lead={
                  <>
                    <p className="font-serif text-2xl italic text-ink">
                      Born from Experience. Created for Transformation.
                    </p>
                    <p className="mt-4">
                      ÈLENOR is more than a beauty brand — it is a vision shaped by years of hands-on salon experience,
                      a deep understanding of hair and skin, and a passion for helping people look and feel their best.
                    </p>
                    <p className="mt-4">
                      Founded by a professional hairstylist and salon entrepreneur with 25 years of salon experience,
                      ÈLENOR was created with a clear purpose: to bring professional-inspired hair and skin care into
                      everyday beauty routines through thoughtfully developed products that combine quality, care, and
                      elegance.
                    </p>
                  </>
                }
              />
            </div>
          </div>
        </div>
      </section>

      <section className="section-y border-y border-line bg-surface" aria-label="Our belief">
        <Quote>“At ÈLENOR, we believe that true beauty begins with care.”</Quote>
      </section>

      {/* Our Story */}
      <section className="section-y" aria-labelledby="story-heading">
        <div className="container-x grid grid-cols-1 items-center gap-10 md:grid-cols-12 md:gap-16">
          <Reveal className="md:order-2 md:col-span-6">
            <div className="image-hover relative aspect-[4/3] overflow-hidden rounded-sm bg-line/40">
              <Image
                src="/images/studio/delivery-hallway.webp"
                alt="Open Elenor delivery box with skincare products in a sunlit hallway, a vase of greenery and a linen-draped armchair"
                fill
                sizes="(min-width: 768px) 50vw, 92vw"
                className="object-cover"
              />
            </div>
          </Reveal>
          <Reveal className="md:order-1 md:col-span-6" delay={100}>
            <SectionHeading
              id="story-heading"
              eyebrow="Our Story"
              title="Behind every beautiful transformation."
              align="left"
              lead={
                <>
                  <p>
                    Behind every beautiful transformation lies an understanding of what hair and skin truly need. Years
                    of working closely with clients have taught our founder that beauty is not just about appearance —
                    it is about healthy-looking hair, well-cared-for skin, confidence, and the experience of feeling
                    your best.
                  </p>
                  <p className="mt-4">This understanding became the inspiration for ÈLENOR.</p>
                  <p className="mt-4">
                    Our vision is to bridge the gap between professional salon care and everyday self-care, creating
                    products that make premium beauty experiences more accessible. From shampoos, conditioners, hair
                    serums, and hair masks to future innovations in skin care and fragrance, every product category
                    reflects our commitment to elevating the way people care for themselves.
                  </p>
                </>
              }
            />
          </Reveal>
        </div>
      </section>

      {/* Our Philosophy */}
      <section className="section-y satin-overlay border-y border-line bg-surface" aria-labelledby="philosophy-heading">
        <div className="container-x grid grid-cols-1 items-center gap-10 md:grid-cols-12 md:gap-16">
          <Reveal className="md:col-span-5">
            <div className="image-hover relative aspect-square max-w-sm overflow-hidden rounded-sm bg-line/40">
              <Image
                src="/images/studio/parfum-plinth.webp"
                alt="Elenor Eau de Parfum bottle with a faceted gold cap on a stone plinth, dried blossoms and silk drape in warm light"
                fill
                sizes="(min-width: 768px) 35vw, 92vw"
                className="object-cover"
              />
            </div>
          </Reveal>
          <Reveal className="md:col-span-7" delay={100}>
            <SectionHeading
              id="philosophy-heading"
              eyebrow="Our Philosophy"
              title="True beauty begins with care."
              align="left"
              lead={
                <>
                  <p>At ÈLENOR, we believe that true beauty begins with care.</p>
                  <p className="mt-4">
                    We are committed to developing beauty solutions with a focus on quality, thoughtful formulation, an
                    elevated user experience, and the evolving needs of modern consumers. We aspire to create products
                    that fit seamlessly into everyday routines while bringing a touch of professional luxury to every
                    moment of self-care.
                  </p>
                </>
              }
            />
          </Reveal>
        </div>
      </section>

      {/* Our Vision & Our Promise */}
      <section className="section-y" aria-label="Our vision and promise">
        <div className="container-x grid grid-cols-1 gap-6 md:grid-cols-2 md:gap-8">
          <Reveal className="tile-hover rounded-xl border border-line bg-ivory/40 p-8 md:p-10">
            <p className="font-serif text-4xl text-mauve/70">01</p>
            <h2 id="vision-heading" className="mt-4 font-serif text-3xl leading-tight text-ink">
              Our Vision
            </h2>
            <p className="mt-4 leading-relaxed text-ink/80">
              To build a trusted, modern beauty brand that brings together professional experience, innovation, and
              elegance — inspiring people to embrace healthier-looking hair, cared-for skin, and confidence in their own
              beauty.
            </p>
          </Reveal>
          <Reveal className="tile-hover rounded-xl border border-line bg-ivory/40 p-8 md:p-10" delay={90}>
            <p className="font-serif text-4xl text-mauve/70">02</p>
            <h2 id="promise-heading" className="mt-4 font-serif text-3xl leading-tight text-ink">
              Our Promise
            </h2>
            <p className="mt-4 leading-relaxed text-ink/80">
              Every detail matters: the care behind a product, the experience it creates, and the confidence it
              inspires.
            </p>
            <p className="mt-4 leading-relaxed text-ink/80">
              ÈLENOR stands for a continuing journey of learning, innovation, and uncompromising dedication to the
              beauty experience.
            </p>
          </Reveal>
        </div>
      </section>

      {/* At a glance */}
      <section className="pb-20 md:pb-28" aria-labelledby="glance-heading">
        <div className="container-x max-w-4xl">
          <Reveal>
            <SectionHeading id="glance-heading" eyebrow="In brief" title="ÈLENOR at a glance." />
          </Reveal>
          <Reveal>
            <dl className="glass-card mt-12 divide-y divide-line rounded-2xl px-6 md:px-10">
              {AT_A_GLANCE.map((f) => (
                <div key={f.term} className="grid grid-cols-1 gap-1 py-5 sm:grid-cols-3 sm:gap-6">
                  <dt className="eyebrow pt-1">{f.term}</dt>
                  <dd className="leading-relaxed text-ink sm:col-span-2">{f.detail}</dd>
                </div>
              ))}
            </dl>
          </Reveal>
        </div>
      </section>

      {/* Offerings */}
      <section className="pb-20 md:pb-28" aria-labelledby="offerings-heading">
        <div className="container-x">
          <Reveal className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
            <SectionHeading id="offerings-heading" eyebrow="The Collection" title="Where to begin." align="left" />
            <Link href="/products" className="btn-secondary shrink-0">
              View all products
            </Link>
          </Reveal>
          <ul className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-3 md:gap-8">
            {PRODUCTS.map((p) => (
              <li key={p.slug}>
                <ProductCard product={p} />
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="pb-20 md:pb-28" aria-label="Closing thought">
        <Quote>ÈLENOR — Where Professional Experience Meets Everyday Luxury.</Quote>
      </section>

      <CtaSection
        eyebrow="Write to us"
        title="A real person reads every message."
        body="Ask about a product, arrange a studio visit by appointment, or simply say hello."
        primary={{ href: '/contact', label: 'Make an enquiry' }}
        secondary={{ href: '/lookbook', label: 'See the Lookbook' }}
      />
    </>
  );
}
