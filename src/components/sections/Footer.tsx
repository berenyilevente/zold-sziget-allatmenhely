import Image from 'next/image';
import { Container } from '../Container';

export function Footer() {
  return (
    <footer className="bg-brand-dark py-14 text-cream">
      <Container>
        <div className="grid gap-10 sm:grid-cols-3">
          <div>
            <div className="flex items-center gap-2">
              <Image
                src="/zold_sziget_logo.png"
                alt="Zöld Sziget Állatmenhely logó"
                width={220}
                height={64}
                unoptimized
                className="h-24 w-auto"
              />
              <p className="font-bold text-white">Zöld Sziget Állatmenhely</p>
            </div>
            <p className="mt-4 text-sm leading-relaxed text-cream/80">
              Otthont adunk a Törökbálint, Páty, Biatorbágy és Diósd területéről
              bekerült kóbor kutyáknak és macskáknak.
            </p>
          </div>

          <div>
            <h3 className="text-sm font-semibold tracking-wider text-white uppercase">
              Gyors linkek
            </h3>
            <ul className="mt-4 space-y-2 text-sm text-cream/80">
              <li>
                <a href="#rolunk" className="hover:text-white">
                  Rólunk
                </a>
              </li>
              <li>
                <a href="#orokbefogadas" className="hover:text-white">
                  Örökbefogadás
                </a>
              </li>
              <li>
                <a href="#tamogatas" className="hover:text-white">
                  Támogatás
                </a>
              </li>
              <li>
                <a href="#kapcsolat" className="hover:text-white">
                  Kapcsolat
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold tracking-wider text-white uppercase">
              Elérhetőség
            </h3>
            <address className="mt-4 space-y-2 text-sm text-cream/80 not-italic">
              <p>2045 Törökbálint, Nyereg utca 1.</p>
              <p>
                <a href="tel:+36706267378" className="hover:text-white">
                  +36 70 626-7378
                </a>
              </p>
              <p>
                <a
                  href="mailto:zoldszigetinfo@gmail.com"
                  className="hover:text-white"
                >
                  zoldszigetinfo@gmail.com
                </a>
              </p>
              <p>
                <a
                  href="https://www.facebook.com/zoldszigetallatmenhely"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white"
                >
                  Facebook
                </a>
              </p>
            </address>
          </div>
        </div>

        <div className="mt-12 border-t border-white/15 pt-6 text-center text-xs text-cream/70">
          © 2026 Zöld Sziget Állatmenhely — Minden jog fenntartva.
        </div>
      </Container>
    </footer>
  );
}
