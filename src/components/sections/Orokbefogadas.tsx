import { Container } from '../Container';

export function Orokbefogadas() {
  return (
    <section
      id="orokbefogadas"
      className="scroll-mt-20 bg-cream py-20 sm:scroll-mt-24 sm:py-28"
    >
      <Container>
        <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
          <div>
            <span className="text-sm font-semibold tracking-wider text-brand-dark uppercase">
              Örökbefogadás
            </span>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight text-ink sm:text-4xl">
              Gyere el, és találkozz a leendő társaddal
            </h2>
            <p className="mt-6 text-lg leading-relaxed text-ink-soft">
              Nyitvatartási időben bárki meglátogathat minket — sétáltathatsz
              egyet a kutyusainkkal, vagy beülhetsz a macskaszobába egy közös
              ismerkedésre. Mindenkinek igyekszünk azt a társat ajánlani, aki
              tényleg passzol az életviteléhez.
            </p>
            <p className="mt-4 text-lg leading-relaxed text-ink-soft">
              Kutyák és macskák egyaránt várják új gazdájukat. Az
              örökbefogadásról a helyszínen tudtok többet megbeszélni — vagy
              hívd a kollégákat előtte telefonon.
            </p>

            <div className="mt-10 flex flex-col items-stretch gap-3 sm:flex-row sm:items-center">
              <a
                href="tel:+36706267378"
                className="inline-flex h-12 w-full items-center justify-center gap-2 rounded-full bg-accent px-7 text-base font-semibold text-white shadow-sm transition-all hover:bg-accent-dark hover:shadow-md sm:w-auto"
              >
                <span aria-hidden="true">📞</span>
                Hívj minket
              </a>
              <a
                href="#kapcsolat"
                className="inline-flex h-12 w-full items-center justify-center rounded-full border-2 border-brand bg-white px-7 text-base font-semibold text-brand-dark transition-colors hover:bg-brand hover:text-white sm:w-auto"
              >
                Útvonal és cím
              </a>
            </div>
          </div>

          <div className="rounded-3xl bg-white p-8 shadow-sm ring-1 ring-black/5 sm:p-10">
            <h3 className="text-xl font-semibold text-ink">
              Látogatási információ
            </h3>
            <dl className="mt-6 space-y-5">
              <div className="flex items-start gap-4">
                <span
                  aria-hidden="true"
                  className="mt-0.5 flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-brand/10 text-lg"
                >
                  🕒
                </span>
                <div>
                  <dt className="text-sm font-semibold tracking-wide text-ink-soft uppercase">
                    Nyitvatartás
                  </dt>
                  <dd className="mt-1 text-lg text-ink">
                    Minden nap, kivéve vasárnap
                    <br />
                    <span className="font-semibold">12:00 – 16:00</span>
                  </dd>
                  <dd className="mt-1 text-sm text-ink-soft">
                    Más időpontban telefonos egyeztetéssel.
                  </dd>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <span
                  aria-hidden="true"
                  className="mt-0.5 flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-brand/10 text-lg"
                >
                  📍
                </span>
                <div>
                  <dt className="text-sm font-semibold tracking-wide text-ink-soft uppercase">
                    Cím
                  </dt>
                  <dd className="mt-1 text-lg text-ink">
                    2045 Törökbálint,
                    <br />
                    Nyereg utca 1.
                  </dd>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <span
                  aria-hidden="true"
                  className="mt-0.5 flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-brand/10 text-lg"
                >
                  📞
                </span>
                <div>
                  <dt className="text-sm font-semibold tracking-wide text-ink-soft uppercase">
                    Telefon
                  </dt>
                  <dd className="mt-1 text-lg text-ink">
                    <a
                      href="tel:+36706267378"
                      className="hover:text-brand-dark hover:underline"
                    >
                      +36 70 626-7378
                    </a>
                  </dd>
                </div>
              </div>
            </dl>
          </div>
        </div>
      </Container>
    </section>
  );
}
