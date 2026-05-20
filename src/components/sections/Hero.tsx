import Image from 'next/image';
import { Container } from '../Container';

function PawPrint({ className = '' }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 64 64"
      fill="currentColor"
      aria-hidden="true"
      className={className}
    >
      <ellipse cx="20" cy="20" rx="6" ry="8" />
      <ellipse cx="44" cy="20" rx="6" ry="8" />
      <ellipse cx="10" cy="34" rx="5" ry="7" />
      <ellipse cx="54" cy="34" rx="5" ry="7" />
      <path d="M32 28c-8 0-14 7-14 14 0 6 5 10 14 10s14-4 14-10c0-7-6-14-14-14z" />
    </svg>
  );
}

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-cream pt-12 pb-16 sm:pt-20 sm:pb-24">
      <Container>
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <div className="text-center lg:text-left">
            <span className="inline-flex items-center gap-2 rounded-full bg-brand/10 px-4 py-1.5 text-sm font-medium text-brand-dark">
              <span aria-hidden="true">🐾</span>
              Zöld Sziget Állatmenhely · Törökbálint
            </span>
            <h1 className="mt-6 text-3xl font-semibold tracking-tight text-ink sm:text-5xl lg:text-6xl">
              Adj esélyt egy <span className="text-brand">új életnek!</span>
            </h1>
            <p className="mx-auto mt-6 max-w-xl text-base leading-relaxed text-ink-soft sm:text-lg lg:mx-0">
              Otthont, gondoskodást és szeretetet biztosítunk a Törökbálint és
              környékéről bekerült kóbor kutyáknak és macskáknak. Fogadj örökbe
              egy új társat, vagy támogasd a munkánkat — minden segítség életet
              ment.
            </p>
            <div className="mt-10 flex flex-col items-stretch gap-3 sm:flex-row sm:items-center sm:justify-center lg:justify-start">
              <a
                href="#orokbefogadas"
                className="inline-flex h-12 w-full items-center justify-center rounded-full bg-accent px-7 text-base font-semibold text-white shadow-sm transition-all hover:bg-accent-dark hover:shadow-md sm:w-auto"
              >
                Örökbefogadás
              </a>
              <a
                href="#tamogatas"
                className="inline-flex h-12 w-full items-center justify-center rounded-full border-2 border-brand bg-white/60 px-7 text-base font-semibold text-brand-dark transition-colors hover:bg-brand hover:text-white sm:w-auto"
              >
                Támogatás
              </a>
            </div>
          </div>

          <div className="relative mx-auto aspect-square w-full max-w-xs sm:max-w-sm lg:max-w-md">
            <div className="absolute inset-0 rounded-[2.5rem] bg-linear-to-br from-brand-light via-brand to-brand-dark shadow-xl" />
            <div className="absolute inset-4 rounded-4xl bg-cream/30 ring-1 ring-white/30 backdrop-blur-sm" />
            <PawPrint className="absolute top-6 left-6 h-10 w-10 -rotate-12 text-white/30 sm:h-14 sm:w-14 lg:h-16 lg:w-16" />
            <PawPrint className="absolute top-8 right-6 h-12 w-12 rotate-6 text-white/30 sm:h-16 sm:w-16 lg:h-20 lg:w-20" />
            <PawPrint className="absolute bottom-6 left-8 h-12 w-12 rotate-12 text-white/30 sm:h-16 sm:w-16 lg:h-20 lg:w-20" />
            <PawPrint className="absolute right-6 bottom-8 h-10 w-10 -rotate-6 text-white/30 sm:h-14 sm:w-14 lg:h-16 lg:w-16" />
            <div className="absolute inset-0 flex items-center justify-center p-10 sm:p-12">
              <Image
                src="/zold_sziget_logo.png"
                alt="Zöld Sziget Állatmenhely logó"
                width={480}
                height={480}
                priority
                unoptimized
                className="h-auto w-full max-w-56 object-contain drop-shadow-lg sm:max-w-xs lg:max-w-sm"
              />
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
