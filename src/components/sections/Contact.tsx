import { Container } from '../Container';

const openingHours: ReadonlyArray<readonly [string, string]> = [
  ['Hétfő', '10:00-14:00'],
  ['Kedd', '10:00-14:00'],
  ['Szerda', '10:00-14:00'],
  ['Csütörtök', '10:00-14:00'],
  ['Péntek', '10:00-14:00'],
  ['Szombat', '10:00-14:00'],
  ['Vasárnap', 'Zárva'],
];

export function Contact() {
  return (
    <section
      id="kapcsolat"
      className="scroll-mt-20 bg-cream py-20 sm:scroll-mt-24 sm:py-28"
    >
      <Container>
        <div className="mx-auto max-w-3xl text-center">
          <span className="text-sm font-semibold tracking-wider text-brand-dark uppercase">
            Kapcsolat
          </span>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight text-ink sm:text-4xl">
            Keress minket bátran
          </h2>
          <p className="mt-6 text-lg leading-relaxed text-ink-soft">
            Bármilyen kérdés, örökbefogadási szándék vagy felajánlás esetén
            elérhetők vagyunk — telefonon, e-mailben vagy a Facebook oldalunkon
            keresztül.
          </p>
        </div>

        <div className="mt-14 grid gap-6 lg:grid-cols-2">
          <div className="rounded-3xl bg-white p-8 shadow-sm ring-1 ring-black/5 sm:p-10">
            <h3 className="text-xl font-semibold text-ink">Elérhetőségek</h3>
            <dl className="mt-6 space-y-5">
              <div className="flex items-start gap-4">
                <span
                  aria-hidden="true"
                  className="mt-0.5 hidden h-10 w-10 shrink-0 items-center justify-center rounded-full bg-brand/10 text-lg"
                >
                  📍
                </span>
                <div className="min-w-0 flex-1">
                  <dt className="text-sm font-bold tracking-wide text-ink-soft uppercase">
                    Cím
                  </dt>
                  <dd className="mt-1 text-base text-ink">
                    2045 Törökbálint, Nyereg utca 1.
                    <br />
                    <span className="text-ink-soft">
                      Pest megye (Budapest mellett)
                    </span>
                  </dd>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <span
                  aria-hidden="true"
                  className="mt-0.5 hidden h-10 w-10 sm:flex shrink-0 items-center justify-center rounded-full bg-brand/10 text-lg"
                >
                  📞
                </span>
                <div className="min-w-0 flex-1">
                  <dt className="text-sm font-bold tracking-wide text-ink-soft uppercase">
                    Telefon
                  </dt>
                  <dd className="mt-1 text-base text-ink">
                    <a
                      href="tel:+36706267378"
                      className="hover:text-brand-dark hover:underline"
                    >
                      +36 70 626-7378
                    </a>
                  </dd>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <span
                  aria-hidden="true"
                  className="mt-0.5 hidden h-10 w-10 sm:flex shrink-0 items-center justify-center rounded-full bg-brand/10 text-lg"
                >
                  ✉️
                </span>
                <div className="min-w-0 flex-1">
                  <dt className="text-sm font-bold tracking-wide text-ink-soft uppercase">
                    E-mail
                  </dt>
                  <dd className="mt-1 text-base wrap-break-word text-ink">
                    <a
                      href="mailto:zoldszigetinfo@gmail.com"
                      className="hover:text-brand-dark hover:underline"
                    >
                      zoldszigetinfo@gmail.com
                    </a>
                  </dd>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <span
                  aria-hidden="true"
                  className="mt-0.5 hidden h-10 w-10 sm:flex shrink-0 items-center justify-center rounded-full bg-brand/10 text-lg"
                >
                  💬
                </span>
                <div className="min-w-0 flex-1">
                  <dt className="text-sm font-bold tracking-wide text-ink-soft uppercase">
                    Facebook
                  </dt>
                  <dd className="mt-1 text-base wrap-break-word text-ink">
                    <a
                      href="https://www.facebook.com/zoldszigetallatmenhely"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:text-brand-dark hover:underline"
                    >
                      facebook.com/zoldszigetallatmenhely
                    </a>
                  </dd>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <span
                  aria-hidden="true"
                  className="mt-0.5 hidden h-10 w-10 sm:flex shrink-0 items-center justify-center rounded-full bg-brand/10 text-lg"
                >
                  🕒
                </span>
                <div className="min-w-0 flex-1">
                  <dt className="text-sm font-bold tracking-wide text-ink-soft uppercase">
                    Nyitvatartás
                  </dt>
                  <dd className="mt-1 text-base text-ink">
                    <ul className="space-y-1">
                      {openingHours.map(([day, hours]) => (
                        <li
                          key={day}
                          className="flex items-baseline justify-between gap-4 tabular-nums"
                        >
                          <span>{day}</span>
                          <span
                            className={hours === 'Zárva' ? 'text-ink-soft' : ''}
                          >
                            {hours}
                          </span>
                        </li>
                      ))}
                    </ul>
                    <p className="mt-3 text-sm text-ink-soft">
                      Más időpontban telefonos egyeztetéssel.
                    </p>
                  </dd>
                </div>
              </div>
            </dl>
          </div>

          <div className="overflow-hidden rounded-3xl bg-white shadow-sm ring-1 ring-black/5">
            <div className="aspect-4/3 w-full bg-cream-soft">
              <iframe
                title="Zöld Sziget Állatmenhely térképe"
                src="https://www.openstreetmap.org/export/embed.html?bbox=18.9080%2C47.4220%2C18.9380%2C47.4400&layer=mapnik&marker=47.4310%2C18.9230"
                className="block h-full w-full max-w-full border-0"
                loading="lazy"
              />
            </div>
            <div className="p-6 sm:p-8">
              <h3 className="text-lg font-semibold text-ink">
                Hogyan találsz meg minket
              </h3>
              <p className="mt-3 text-base leading-relaxed text-ink-soft">
                A menhely Törökbálint külterületén található, az Iparos út
                mentén, a budaörsi temető szomszédságában. Autóval és
                tömegközle­ kedéssel egyaránt jól megközelíthető. Érkezés előtt
                érdemes telefonon egyeztetni.
              </p>
              <a
                href="https://www.google.com/maps/search/?api=1&query=Z%C3%B6ld+Sziget+%C3%81llatmenhely+T%C3%B6r%C3%B6kb%C3%A1lint+Nyereg+utca+1"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-5 inline-flex items-center gap-2 text-base font-semibold text-brand-dark hover:underline"
              >
                Útvonalterv Google Maps-en
                <span aria-hidden="true">→</span>
              </a>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
