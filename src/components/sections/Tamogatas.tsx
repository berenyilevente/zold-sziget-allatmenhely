import { Container } from "../Container";

export function Tamogatas() {
  return (
    <section id="tamogatas" className="scroll-mt-20 bg-cream-soft py-20 sm:scroll-mt-24 sm:py-28">
      <Container>
        <div className="mx-auto max-w-3xl text-center">
          <span className="text-sm font-semibold tracking-wider text-brand-dark uppercase">
            Támogatás
          </span>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight text-ink sm:text-4xl">
            Így tudsz segíteni nekünk
          </h2>
          <p className="mt-6 text-lg leading-relaxed text-ink-soft">
            A menhely működése szinte teljes egészében adományokból valósul meg.
            Minden forint, takaró és önkéntes óra számít — köszönjük, hogy
            mellénk állsz.
          </p>
        </div>

        <div className="mt-14 grid gap-6 sm:grid-cols-2">
          <div className="rounded-2xl bg-white p-8 shadow-sm ring-1 ring-black/5 transition-shadow hover:shadow-md">
            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-accent/15 text-2xl">
              <span aria-hidden="true">📄</span>
            </div>
            <h3 className="mt-5 text-xl font-semibold text-ink">
              SZJA 1% felajánlás
            </h3>
            <p className="mt-3 text-base leading-relaxed text-ink-soft">
              Add nekünk adód 1%-át — minket a Zöldsziget Állatvédő Baráti Kör
              képvisel.
            </p>
            <div className="mt-5 rounded-xl bg-cream-soft p-4">
              <p className="text-xs font-semibold tracking-wide text-ink-soft uppercase">
                Adószám
              </p>
              <p className="mt-1 font-mono text-xl font-semibold text-ink select-all">
                18145869-1-13
              </p>
            </div>
          </div>

          <div className="rounded-2xl bg-white p-8 shadow-sm ring-1 ring-black/5 transition-shadow hover:shadow-md">
            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-brand/15 text-2xl">
              <span aria-hidden="true">🏦</span>
            </div>
            <h3 className="mt-5 text-xl font-semibold text-ink">
              Banki átutalás
            </h3>
            <p className="mt-3 text-base leading-relaxed text-ink-soft">
              Egyszeri vagy rendszeres adományt is fogadunk a Baráti Kör
              számlájára.
            </p>
            <div className="mt-5 rounded-xl bg-cream-soft p-4">
              <p className="text-xs font-semibold tracking-wide text-ink-soft uppercase">
                Bankszámlaszám · B3 TAKARÉK Szövetkezet
              </p>
              <p className="mt-1 font-mono text-xl font-semibold text-ink select-all">
                64800097-19909206
              </p>
            </div>
          </div>

          <div className="rounded-2xl bg-white p-8 shadow-sm ring-1 ring-black/5 transition-shadow hover:shadow-md">
            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-brand/15 text-2xl">
              <span aria-hidden="true">🎁</span>
            </div>
            <h3 className="mt-5 text-xl font-semibold text-ink">
              Tárgyi adomány
            </h3>
            <p className="mt-3 text-base leading-relaxed text-ink-soft">
              A leghasznosabb tételek, amikre folyamatosan szükségünk van:
            </p>
            <ul className="mt-4 space-y-2 text-base text-ink">
              <li className="flex items-start gap-2">
                <span className="mt-1 text-brand" aria-hidden="true">
                  ✓
                </span>
                Száraz kutyatáp
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-1 text-brand" aria-hidden="true">
                  ✓
                </span>
                Takarók, plédek, törölközők
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-1 text-brand" aria-hidden="true">
                  ✓
                </span>
                Pórázok és nyakörvek
              </li>
            </ul>
          </div>

          <div className="rounded-2xl bg-white p-8 shadow-sm ring-1 ring-black/5 transition-shadow hover:shadow-md">
            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-accent/15 text-2xl">
              <span aria-hidden="true">🤲</span>
            </div>
            <h3 className="mt-5 text-xl font-semibold text-ink">
              Önkéntesség
            </h3>
            <p className="mt-3 text-base leading-relaxed text-ink-soft">
              Gyere ki kutyát sétáltatni, segíteni a takarításban, vagy oszd meg
              a posztjainkat a közösségi médiában. Minden óra, minden megosztás
              egy esély valakinek.
            </p>
            <a
              href="https://www.facebook.com/zoldszigetallatmenhely"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-5 inline-flex items-center gap-2 text-base font-semibold text-brand-dark hover:underline"
            >
              Kövess minket a Facebookon
              <span aria-hidden="true">→</span>
            </a>
          </div>
        </div>
      </Container>
    </section>
  );
}
