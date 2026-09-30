
import Link from "next/link";
import {
  ArrowRight,
  Compass,
  CreditCard,
  Menu,
  Plane,
  MapPin,
} from "lucide-react";

export default function Home() {
  return (
    <main className="min-h-screen bg-white text-slate-900">

      {/* HEADER */}
      <header className="relative z-20 flex items-center justify-between px-5 py-5 md:px-12">
        <Link
          href="/"
          className="text-2xl font-bold tracking-tight text-teal-950"
        >
          RoamWise<span className="text-teal-600">.</span>
        </Link>

        <button
          type="button"
          aria-label="Open navigation menu"
          className="rounded-full p-2 text-teal-950 transition hover:bg-slate-100"
        >
          <Menu size={26} />
        </button>
      </header>

      {/* HERO SECTION */}
      <section className="relative flex min-h-[680px] flex-col justify-end overflow-hidden bg-[url('/images/santorini.jpg')] bg-cover bg-center px-6 pb-10 pt-24 md:min-h-[760px] md:px-12 md:pb-16">

        {/* GRADIENT OVERLAY */}
        <div className="absolute inset-0 bg-linear-to-t from-black/85 via-black/35 to-transparent" />

        {/* HERO CONTENT */}
        <div className="relative z-10 max-w-2xl">

          <span className="mb-4 inline-flex items-center gap-2 rounded-full border border-white/30 bg-white/15 px-4 py-2 text-xs font-medium tracking-wide text-white backdrop-blur-sm">
            <Compass size={15} />
            YOUR JOURNEY STARTS HERE
          </span>

          <h1 className="max-w-xl text-5xl leading-[1.08] font-bold tracking-tight text-white md:text-7xl">
            Stress free
            <br />
            travel<span className="text-teal-300">.</span>
          </h1>

          <p className="mt-5 max-w-md text-base leading-7 text-white/90 md:text-lg">
            Discover destinations tailored to your travel style, budget,
            and rewards. Your next unforgettable trip starts here.
          </p>

          <Link
            href="/signup"
            className="mt-8 inline-flex items-center justify-center gap-3 rounded-2xl bg-teal-800 px-7 py-4 text-base font-semibold text-white shadow-lg transition hover:bg-teal-700"
          >
            Find My Next Trip
            <ArrowRight size={19} />
          </Link>

          {/* FEATURE HIGHLIGHTS */}
          <div className="mt-12 grid grid-cols-3 gap-3 border-t border-white/30 pt-7 text-white">

            <div className="flex flex-col items-center gap-3 text-center">
              <Compass size={25} strokeWidth={1.7} />
              <span className="text-xs leading-4 md:text-sm">
                Personalized destinations
              </span>
            </div>

            <div className="flex flex-col items-center gap-3 text-center">
              <CreditCard size={25} strokeWidth={1.7} />
              <span className="text-xs leading-4 md:text-sm">
                Maximize your rewards
              </span>
            </div>

            <div className="flex flex-col items-center gap-3 text-center">
              <Plane size={25} strokeWidth={1.7} />
              <span className="text-xs leading-4 md:text-sm">
                Better flight deals
              </span>
            </div>

          </div>
        </div>
      </section>

      {/* DESTINATION PREVIEW */}
      <section className="px-6 py-16 md:px-12 md:py-24">

        <div className="mx-auto max-w-6xl">

          <div className="mb-8 flex items-end justify-between gap-4">
            <div>
              <p className="mb-2 text-xs font-semibold uppercase tracking-[0.2em] text-teal-700">
                Explore the possibilities
              </p>

              <h2 className="text-3xl font-bold tracking-tight text-teal-950 md:text-4xl">
                Somewhere new awaits.
              </h2>

              <p className="mt-3 max-w-md text-sm leading-6 text-slate-500">
                A world of destinations, thoughtfully matched to you.
              </p>
            </div>
          </div>

          <div className="grid gap-5 md:grid-cols-3">

            {/* DESTINATION 1 */}
            <div className="group relative h-72 overflow-hidden rounded-3xl bg-[url('/images/rome.jpg')]  bg-cover bg-center">
              <div className="absolute inset-0 bg-linear-to-t from-black/75 via-transparent to-transparent" />

              <div className="absolute bottom-5 left-5 text-white">
                <div className="mb-2 flex items-center gap-1 text-xs text-white/80">
                  <MapPin size={13} />
                  Italy
                </div>
                <h3 className="text-2xl font-semibold">Rome</h3>
              </div>
            </div>

            {/* DESTINATION 2 */}
            <div className="group relative h-72 overflow-hidden rounded-3xl bg-[url('/images/bali.jpg')]  bg-cover bg-center">
              <div className="absolute inset-0 bg-linear-to-t from-black/75 via-transparent to-transparent" />

              <div className="absolute bottom-5 left-5 text-white">
                <div className="mb-2 flex items-center gap-1 text-xs text-white/80">
                  <MapPin size={13} />
                  Indonesia
                </div>
                <h3 className="text-2xl font-semibold">Bali</h3>
              </div>
            </div>

            {/* DESTINATION 3 */}
            <div className="group relative h-72 overflow-hidden rounded-3xl bg-[url('/images/tokyo.jpg')] bg-cover bg-center">
              <div className="absolute inset-0 bg-linear-to-t from-black/75 via-transparent to-transparent" />

              <div className="absolute bottom-5 left-5 text-white">
                <div className="mb-2 flex items-center gap-1 text-xs text-white/80">
                  <MapPin size={13} />
                  Japan
                </div>
                <h3 className="text-2xl font-semibold">Tokyo</h3>
              </div>
            </div>

          </div>

          <div className="mt-10 text-center">
            <Link
              href="/signup"
              className="inline-flex items-center gap-2 font-semibold text-teal-800 transition hover:text-teal-600"
            >
              Discover your next destination
              <ArrowRight size={18} />
            </Link>
          </div>

        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-slate-100 px-6 py-8 md:px-12">
        <div className="mx-auto flex max-w-6xl flex-col gap-3 text-center md:flex-row md:items-center md:justify-between md:text-left">
          <span className="text-lg font-bold text-teal-950">
            RoamWise<span className="text-teal-600">.</span>
          </span>

          <p className="text-xs text-slate-400">
            Discover more. Travel smarter.
          </p>
        </div>
      </footer>

    </main>
  );
}

