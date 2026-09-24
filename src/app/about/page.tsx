import Image from "next/image";

import { PublicHeader } from "@/components/layout/PublicHeader";
import { Footer } from "@/components/layout/Footer";
import { IMG } from "@/data/images";

const pillars = [
  {
    title: "Archive",
    body: "Preserve photographs, oral histories, documents, stories, audio, video and other cultural materials for future generations.",
  },
  {
    title: "Language",
    body: "Make Dagbani easier to learn through structured lessons, vocabulary, pronunciation, audio and an accessible digital dictionary.",
  },
  {
    title: "Community",
    body: "Connect learners, researchers, elders, cultural custodians and the global Dagbon community across generations.",
  },
];

const values = [
  {
    title: "Preservation",
    body: "We believe the knowledge of previous generations deserves to be documented and preserved for those yet to come.",
  },
  {
    title: "Authenticity",
    body: "We aim to present Dagbon's history and culture responsibly, with respect for communities, cultural custodians and sources.",
  },
  {
    title: "Accessibility",
    body: "Knowledge about Dagbon should be easier to discover, learn and explore regardless of where someone lives.",
  },
  {
    title: "Education",
    body: "Technology can make cultural and language learning more engaging, practical and accessible.",
  },
  {
    title: "Community",
    body: "The story of Dagbon belongs to its people. Preserving it should therefore be a shared effort.",
  },
  {
    title: "Innovation",
    body: "We use modern technology to create new ways for people to experience, learn and connect with heritage.",
  },
];

const audiences = [
  "Dagbamba and the younger generation",
  "Members of the Dagbon diaspora",
  "Dagbani language learners",
  "Students and educators",
  "Researchers and historians",
  "Visitors and cultural enthusiasts",
];

export default function AboutPage() {
  return (
    <>
      <PublicHeader />

      <main>
        {/* Hero */}
        <section className="border-b border-border bg-cream">
          <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
            <div className="max-w-3xl">
              <p className="text-xs font-medium uppercase tracking-[0.2em] text-gold">
                About Dagbon Archive
              </p>

              <h1 className="mt-3 font-display text-4xl font-semibold leading-tight text-ink sm:text-5xl lg:text-6xl">
                The digital home of Dagbon.
              </h1>

              <p className="mt-6 max-w-2xl text-base leading-8 text-muted sm:text-lg">
                Preserving Dagbon. Teaching Dagbani. Connecting generations.
                Dagbon Archive is a digital cultural and educational platform
                dedicated to documenting, preserving and sharing the history,
                language, traditions and heritage of Dagbon.
              </p>
            </div>

            <div className="relative mt-12 h-[320px] overflow-hidden rounded-2xl sm:h-[420px]">
              <Image
                src={IMG.kingdom}
                alt="Dagbon cultural heritage"
                fill
                priority
                className="object-cover"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent" />

              <div className="absolute bottom-0 left-0 max-w-2xl p-6 sm:p-10">
                <p className="font-display text-2xl font-semibold text-white sm:text-3xl">
                  A living archive for generations to come.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Our Story */}
        <section className="bg-white">
          <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
            <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
              <div>
                <p className="text-xs font-medium uppercase tracking-[0.2em] text-gold">
                  Our Story
                </p>

                <h2 className="mt-3 font-display text-3xl font-semibold text-ink sm:text-4xl">
                  Keeping knowledge alive.
                </h2>
              </div>

              <div className="space-y-5 text-base leading-8 text-muted">
                <p>
                  Dagbon is more than a place. It is a living heritage carried
                  through language, history, traditions, music, festivals, food,
                  stories, places, craftsmanship and the memories of its people.
                </p>

                <p>
                  Much of this knowledge has traditionally been passed from one
                  generation to another through oral tradition, community life
                  and cultural custodians. As the world becomes increasingly
                  digital, there is an opportunity and a responsibility to
                  ensure that this knowledge remains accessible to future
                  generations.
                </p>

                <p>
                  Dagbon Archive was created from this idea: to build a digital
                  space where people can discover the history of Dagbon, explore
                  its culture, learn Dagbani, discover important places and
                  engage with stories and knowledge from the past and present.
                </p>

                <p className="font-medium text-ink">
                  Our goal is not simply to put information about Dagbon on the
                  internet. Our goal is to build a growing digital archive that
                  helps people discover, understand, learn and connect with
                  Dagbon.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Mission & Vision */}
        <section className="bg-cream">
          <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
            <div className="grid gap-6 lg:grid-cols-2">
              {/* Mission */}
              <div className="rounded-2xl border border-border bg-white p-7 sm:p-10">
                <p className="text-xs font-medium uppercase tracking-[0.2em] text-gold">
                  Our Mission
                </p>

                <h2 className="mt-4 font-display text-3xl font-semibold leading-tight text-ink">
                  Preserve. Educate. Connect.
                </h2>

                <p className="mt-5 text-base leading-8 text-muted">
                  To preserve, document and make accessible the history,
                  language, culture and heritage of Dagbon through technology.
                </p>

                <div className="mt-8 space-y-4">
                  {[
                    "Document cultural knowledge and historical materials.",
                    "Promote Dagbani through accessible language-learning resources.",
                    "Help younger generations discover their heritage.",
                    "Connect traditional knowledge with modern technology.",
                    "Support learners, educators and researchers.",
                    "Create a digital home for the global Dagbon community.",
                  ].map((item) => (
                    <div key={item} className="flex gap-3">
                      <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-green" />
                      <p className="text-sm leading-6 text-muted">{item}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Vision */}
              <div className="rounded-2xl bg-forest-dark p-7 text-white sm:p-10">
                <p className="text-xs font-medium uppercase tracking-[0.2em] text-gold">
                  Our Vision
                </p>

                <h2 className="mt-4 font-display text-3xl font-semibold leading-tight sm:text-4xl">
                  A trusted digital home for Dagbon.
                </h2>

                <p className="mt-5 text-base leading-8 text-white/80">
                  We envision a future where Dagbon&apos;s history, language,
                  traditions and knowledge can be discovered and learned by
                  anyone, anywhere.
                </p>

                <blockquote className="mt-8 border-l border-gold pl-5 font-display text-xl leading-8 text-white">
                  &ldquo;Technology becomes a bridge between Dagbon&apos;s past,
                  present and future.&ldquo;
                </blockquote>
              </div>
            </div>
          </div>
        </section>

        {/* What We Do */}
        <section className="bg-white">
          <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
            <div className="max-w-2xl">
              <p className="text-xs font-medium uppercase tracking-[0.2em] text-gold">
                What We Do
              </p>

              <h2 className="mt-3 font-display text-3xl font-semibold text-ink sm:text-4xl">
                One platform. Multiple ways to connect with Dagbon.
              </h2>

              <p className="mt-5 text-base leading-7 text-muted">
                Dagbon Archive brings cultural preservation, education and
                language learning together in one digital environment.
              </p>
            </div>

            <div className="mt-10 grid gap-5 sm:grid-cols-3">
              {pillars.map((item) => (
                <div
                  key={item.title}
                  className="rounded-xl border border-border bg-white p-6 transition-shadow hover:shadow-sm"
                >
                  <h3 className="font-display text-xl font-semibold text-ink">
                    {item.title}
                  </h3>

                  <p className="mt-3 text-sm leading-7 text-muted">
                    {item.body}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* What visitors will find */}
        <section className="bg-cream">
          <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
            <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
              <div>
                <p className="text-xs font-medium uppercase tracking-[0.2em] text-gold">
                  Explore Dagbon
                </p>

                <h2 className="mt-3 font-display text-3xl font-semibold text-ink sm:text-4xl">
                  Discover the culture beyond the classroom.
                </h2>

                <p className="mt-5 text-base leading-8 text-muted">
                  The archive is designed to bring together different forms of
                  knowledge about Dagbon in a way that is easy to explore and
                  understand.
                </p>
              </div>

              <div className="grid grid-cols-2 gap-3">
                {[
                  "History",
                  "People",
                  "Traditions",
                  "Places",
                  "Music & Arts",
                  "Food",
                  "Festivals",
                  "Stories",
                ].map((item) => (
                  <div
                    key={item}
                    className="rounded-lg border border-border bg-white px-4 py-5"
                  >
                    <p className="font-display text-base font-semibold text-ink">
                      {item}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Dagbani */}
        <section className="bg-white">
          <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
            <div className="rounded-2xl border border-border bg-cream p-7 sm:p-10 lg:p-14">
              <p className="text-xs font-medium uppercase tracking-[0.2em] text-gold">
                Learn Dagbani
              </p>

              <h2 className="mt-3 max-w-3xl font-display text-3xl font-semibold text-ink sm:text-4xl">
                Language is one of the strongest bridges to culture.
              </h2>

              <p className="mt-5 max-w-3xl text-base leading-8 text-muted">
                Dagbon Archive aims to make Dagbani learning more accessible
                through structured courses, vocabulary, pronunciation, listening
                exercises, conversations, quizzes and a growing digital
                dictionary.
              </p>

              <p className="mt-5 max-w-3xl text-base leading-8 text-muted">
                Whether you are beginning your first Dagbani lesson or trying to
                reconnect with a language you once spoke, the platform is
                designed to support your learning journey.
              </p>
            </div>
          </div>
        </section>

        {/* Who It's For */}
        <section className="bg-cream">
          <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
            <div className="max-w-2xl">
              <p className="text-xs font-medium uppercase tracking-[0.2em] text-gold">
                Who It Is For
              </p>

              <h2 className="mt-3 font-display text-3xl font-semibold text-ink sm:text-4xl">
                Built for everyone with a connection to Dagbon.
              </h2>
            </div>

            <div className="mt-10 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
              {audiences.map((audience) => (
                <div
                  key={audience}
                  className="rounded-xl border border-border bg-white p-5"
                >
                  <p className="text-sm font-medium text-ink">{audience}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Values */}
        <section className="bg-white">
          <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
            <div className="max-w-2xl">
              <p className="text-xs font-medium uppercase tracking-[0.2em] text-gold">
                Our Values
              </p>

              <h2 className="mt-3 font-display text-3xl font-semibold text-ink sm:text-4xl">
                How we approach cultural preservation.
              </h2>
            </div>

            <div className="mt-10 grid gap-x-8 gap-y-10 sm:grid-cols-2 lg:grid-cols-3">
              {values.map((value) => (
                <div key={value.title}>
                  <h3 className="font-display text-xl font-semibold text-ink">
                    {value.title}
                  </h3>

                  <p className="mt-3 text-sm leading-7 text-muted">
                    {value.body}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Future */}
        <section className="bg-cream">
          <div className="mx-auto max-w-4xl px-4 py-20 text-center sm:px-6 lg:px-8 lg:py-28">
            <p className="text-xs font-medium uppercase tracking-[0.2em] text-gold">
              Looking Ahead
            </p>

            <h2 className="mt-4 font-display text-3xl font-semibold leading-tight text-ink sm:text-4xl lg:text-5xl">
              Preserving what we know. Passing it on.
            </h2>

            <p className="mx-auto mt-6 max-w-2xl text-base leading-8 text-ink">
              Dagbon Archive is being built as a growing platform. As the
              archive develops, we hope to work with communities, cultural
              custodians, researchers, educators and young people to document
              and preserve more of Dagbon&apos;s knowledge.
            </p>

            <p className="mx-auto mt-8 max-w-2xl font-display text-xl leading-8 text-ink">
              The past gives us our roots. The present gives us the
              responsibility. The future gives us the reason.
            </p>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
