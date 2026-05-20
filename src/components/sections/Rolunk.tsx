import { Container } from "../Container";

type Highlight = {
  emoji: string;
  title: string;
  body: string;
};

const highlights: Highlight[] = [
  {
    emoji: "🐾",
    title: "Befogadás",
    body: "Törökbálint, Páty, Biatorbágy és Diósd területéről bekerült kóbor kutyák és macskák kapnak nálunk otthont a kötelező két hetes gyepmesteri tartást követően.",
  },
  {
    emoji: "❤️",
    title: "Gondoskodás",
    body: "Minden állat állatorvosi ellátást, oltást és féregtelenítést kap. Kölyköknek és betegeknek fűtött szoba, macskáinknak külön fűtött helyiség áll rendelkezésre.",
  },
  {
    emoji: "🤝",
    title: "Közösség",
    body: "A menhelyet a Zöldsziget Állatvédő Baráti Kör működteti két főállású munkatárssal és lelkes önkéntesekkel — szinte teljes egészében adományokból.",
  },
];

export function Rolunk() {
  return (
    <section id="rolunk" className="scroll-mt-20 bg-cream-soft py-20 sm:scroll-mt-24 sm:py-28">
      <Container>
        <div className="mx-auto max-w-3xl text-center">
          <span className="text-sm font-semibold tracking-wider text-brand-dark uppercase">
            Rólunk
          </span>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight text-ink sm:text-4xl">
            Egy menedék azoknak, akiknek nincs hova menniük
          </h2>
          <p className="mt-6 text-lg leading-relaxed text-ink-soft">
            A Zöld Sziget Állatmenhely Törökbálint külterületén várja azokat a
            kutyákat és macskákat, akiket a gyepmesteri telepről senki sem vitt
            haza. Náluk kezdődik az új élet: 2–5 fős, fedett és kifutós kennelek,
            fűtött szobák, állandó orvosi figyelem és emberek, akik tényleg
            törődnek velük — amíg meg nem találjuk a végleges családjukat.
          </p>
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
