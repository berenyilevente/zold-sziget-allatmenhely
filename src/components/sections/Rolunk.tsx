import { Container } from '../Container';

type Highlight = {
  emoji: string;
  title: string;
  body: string;
};

const highlights: Highlight[] = [
  {
    emoji: '🐾',
    title: 'Befogadás',
    body: 'Törökbálint, Páty, Biatorbágy és Diósd területéről bekerült kóbor kutyák és macskák kapnak nálunk otthont a kötelező két hetes gyepmesteri tartást követően.',
  },
  {
    emoji: '❤️',
    title: 'Gondoskodás',
    body: 'Minden állat állatorvosi ellátást, oltást és féregtelenítést kap. Kölyköknek és betegeknek fűtött szoba, macskáinknak külön fűtött helyiség áll rendelkezésre.',
  },
  {
    emoji: '🤝',
    title: 'Közösség',
    body: 'A menhelyet a Zöldsziget Állatvédő Baráti Kör működteti két főállású munkatárssal és lelkes önkéntesekkel — szinte teljes egészében adományokból.',
  },
];

export function Rolunk() {
  return (
    <section
      id="rolunk"
      className="scroll-mt-20 bg-cream-soft py-20 sm:scroll-mt-24 sm:py-28"
    >
      <Container>
        <div className="mx-auto max-w-6xl text-center">
          <span className="text-sm font-semibold tracking-wider text-brand-dark uppercase">
            Rólunk
          </span>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight text-ink sm:text-4xl">
            Egy menedék azoknak, akiknek nincs hova menniük
          </h2>
          <div className="mt-10 flex justify-center">
            <blockquote className="max-w-2xl border-l-4 border-brand pl-6 text-left">
              <p className="text-xl leading-relaxed text-ink italic sm:text-2xl">
                „Ha úgy gondolod, hogy nem tudjuk megváltoztatni a világot, ez
                csak azt jelenti, hogy te nem leszel azok egyike, akik ezt
                megteszik…”
              </p>
              <footer className="mt-3 text-sm font-semibold text-ink-soft not-italic">
                — Jacque Fresco
              </footer>
            </blockquote>
          </div>

          <div className="mt-10 rounded-2xl bg-white p-8 text-left shadow-sm ring-1 ring-black/5 transition-shadow hover:shadow-md">
            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-brand/10 text-2xl">
              <span aria-hidden="true">🐾</span>
            </div>
            <h3 className="mt-5 text-xl font-semibold text-ink">
              Miért csináljuk
            </h3>
            <div className="mt-5 space-y-5 text-base leading-relaxed text-ink-soft sm:text-lg">
              <p>
                Egy kutyának nem kell szép ruha, vagy új cipő, nekik ránk van
                szükségük, mert háziállatok, és az ember legjobb barátja. Ha
                volt már kutyád, te is észrevehetted, hogy már a szemedből, a
                testbeszédedből, tudja, hogy jó kedved van, vagy rossz. Nekik
                rád van szükségük, a simogatásodra, hogy beszélj hozzá, hogy
                érezze, hogy valakihez tartozik.
              </p>
              <p>
                A Zöld Sziget Állatmenhely több éves menhelyi tapasztalattal
                működik Törökbálinton.
              </p>
              <p>
                A menhelyen átlagosan kb. 70–120 kutya tengeti napjait, a
                legkisebbektől a legnagyobbakig.
              </p>
              <p>
                Menhelyünkön leginkább keverék kutyusok találhatóak, de nem
                ritka a fajtatiszta kutya sem. A Zöld Szigeten talált és saját
                gazda által leadott kutyus egyaránt megtalálható és a mi célunk
                az, hogy minél kevesebb időt töltsenek a menhelyen és egy olyan
                szerető gazdira találjanak, aki szeretni fogja őt és gondoskodik
                róla, amíg csak él.
              </p>
            </div>
          </div>
        </div>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {highlights.map((h) => (
            <div
              key={h.title}
              className="rounded-2xl bg-white p-8 shadow-sm ring-1 ring-black/5 transition-shadow hover:shadow-md"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-brand/10 text-2xl">
                <span aria-hidden="true">{h.emoji}</span>
              </div>
              <h3 className="mt-5 text-xl font-semibold text-ink">{h.title}</h3>
              <p className="mt-3 text-base leading-relaxed text-ink-soft">
                {h.body}
              </p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
