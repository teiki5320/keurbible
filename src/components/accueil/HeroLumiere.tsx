"use client";

import { useEffect, useRef } from "react";

/**
 * Haut de l'accueil : orbe de lumière (croix au centre) entouré d'un nuage de points qui change de forme tout seul
 * toutes les 7 secondes : sphère, carte de l'Afrique, croix (l'orbe est logé dans le croisement).
 * Les points fuient la souris ; l'orbe s'incline vers elle. Dessin en Canvas 2D, sans bibliothèque.
 * Le texte (titre, boutons) arrive par children : il reste dans le HTML statique.
 */

const AFRIQUE: Array<[number, number]> = [
  [-5.9, 35.8], [-1.9, 35.1], [3.0, 36.8], [9.8, 37.3], [11.1, 36.9], [10.2, 34.3], [11.5, 33.1], [15.2, 32.3], [19.0, 30.3], [20.1, 32.1],
  [23.0, 32.6], [25.1, 31.6], [29.9, 31.2], [32.3, 31.3], [32.5, 29.9], [33.6, 27.2], [35.5, 23.9], [37.2, 19.6], [38.6, 18.0], [39.5, 15.6],
  [41.2, 13.9], [42.7, 13.0], [43.2, 11.6], [44.9, 10.4], [47.5, 11.1], [51.3, 11.8], [51.0, 10.4], [49.8, 7.5], [47.8, 4.5], [45.3, 2.0],
  [42.5, -0.4], [40.9, -2.3], [39.7, -4.1], [39.3, -6.8], [39.7, -10.0], [40.5, -10.5], [40.6, -14.5], [39.0, -17.0], [34.9, -19.8], [35.5, -22.0],
  [35.5, -24.0], [32.6, -25.9], [31.0, -29.9], [28.0, -32.7], [25.6, -34.0], [20.0, -34.8], [18.4, -34.0], [17.9, -31.5], [15.2, -26.7], [14.5, -22.9],
  [11.8, -17.3], [13.4, -12.6], [13.2, -8.8], [12.3, -6.0], [11.9, -4.8], [8.7, -0.7], [9.4, 0.4], [9.8, 3.0], [9.7, 4.0], [8.5, 4.5],
  [6.0, 4.3], [3.4, 6.4], [-0.2, 5.5], [-2.1, 4.7], [-4.0, 5.3], [-7.7, 4.4], [-10.8, 6.3], [-13.2, 8.5], [-13.7, 9.5], [-15.6, 11.9],
  [-17.5, 14.7], [-16.0, 18.1], [-17.0, 20.8], [-16.0, 23.7], [-14.5, 26.1], [-12.9, 27.9], [-9.6, 30.4], [-9.8, 31.5], [-7.6, 33.6], [-6.8, 34.0],
];
const MADAGASCAR: Array<[number, number]> = [
  [49.3, -12.0], [50.5, -15.5], [49.4, -17.8], [47.1, -24.9], [45.2, -25.6], [43.7, -22.5], [43.3, -21.5], [44.4, -16.2], [47.2, -15.0], [48.0, -13.5],
];

const rnd = (a: number, b: number) => a + Math.random() * (b - a);
const lisse = (x: number) => x * x * (3 - 2 * x);

function dedans(poly: Array<[number, number]>, x: number, y: number) {
  let c = false;
  for (let i = 0, j = poly.length - 1; i < poly.length; j = i++) {
    const [xi, yi] = poly[i], [xj, yj] = poly[j];
    if (yi > y !== yj > y && x < ((xj - xi) * (y - yi)) / (yj - yi) + xi) c = !c;
  }
  return c;
}

/** Point de la carte de l'Afrique (70 % dans le continent, 30 % sur le contour), en unités de l'orbe (rayon 1). */
function pointAfrique(): [number, number] {
  const S = 3.5 / 72.1;
  const proj = (lon: number, lat: number): [number, number] => [(lon - 16.9) * S, (lat - 1.25) * S];
  if (Math.random() < 0.3) {
    const poly = Math.random() < 0.93 ? AFRIQUE : MADAGASCAR;
    const k = Math.floor(Math.random() * poly.length);
    const [a, b] = [poly[k], poly[(k + 1) % poly.length]];
    const t = Math.random();
    return proj(a[0] + (b[0] - a[0]) * t, a[1] + (b[1] - a[1]) * t);
  }
  for (let n = 0; n < 500; n++) {
    const lon = -18 + Math.random() * 70, lat = -35 + Math.random() * 73;
    if (dedans(AFRIQUE, lon, lat) || dedans(MADAGASCAR, lon, lat)) return proj(lon, lat);
  }
  return [0, 0];
}

export function HeroLumiere({ children }: { children: React.ReactNode }) {
  const section = useRef<HTMLElement>(null);
  const toile = useRef<HTMLCanvasElement>(null);
  const scene = useRef<HTMLDivElement>(null);
  const inclinaison = useRef<HTMLDivElement>(null);
  const coeur = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const sec = section.current, cv = toile.current, st = scene.current, tilt = inclinaison.current, core = coeur.current;
    const ctx = cv?.getContext("2d");
    if (!sec || !cv || !st || !tilt || !core || !ctx) return;
    const lent = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    // Trois formes : 0 sphère, 1 Afrique (recentrée sur son centre de masse), 2 croix aux bras épais.
    const N = window.innerWidth < 700 ? 1800 : 3400;
    const T = [new Float32Array(N * 3), new Float32Array(N * 3), new Float32Array(N * 3)];
    const R = new Float32Array(N), C = new Uint8Array(N);
    for (let i = 0; i < N; i++) {
      R[i] = Math.random();
      let dx = rnd(-1, 1), dy = rnd(-1, 1), dz = rnd(-1, 1);
      const dl = Math.hypot(dx, dy, dz) || 1;
      dx /= dl; dy /= dl; dz /= dl;
      const rr = (1.32 + 0.16 * Math.sin(dx * 5) * Math.cos(dy * 4) + 0.08 * Math.sin(dz * 9)) * (Math.random() < 0.85 ? 1 : 1 + Math.random() * 0.5);
      T[0].set([dx * rr, dy * rr, dz * rr], i * 3);
      const [ax, ay] = pointAfrique();
      T[1].set([ax, ay, rnd(-0.06, 0.06)], i * 3);
      if (Math.random() < 0.55) T[2].set([rnd(-0.5, 0.5), rnd(-2.7, 1.7), rnd(-0.25, 0.25)], i * 3);
      else T[2].set([rnd(-1.75, 1.75), rnd(-0.5, 0.5), rnd(-0.25, 0.25)], i * 3);
      C[i] = R[i] > 0.94 ? 3 : Math.random() < 0.2 ? 2 : Math.random() < 0.5 ? 0 : 1;
    }
    let mx = 0, my = 0;
    for (let i = 0; i < N; i++) { mx += T[1][i * 3]; my += T[1][i * 3 + 1]; }
    mx /= N; my /= N;
    for (let i = 0; i < N; i++) { T[1][i * 3] -= mx; T[1][i * 3 + 1] -= my; }

    const F = new Float32Array(N * 3);
    for (let i = 0; i < N * 3; i++) F[i] = T[0][i] * 3.2;
    let vers = 0, p = 0, eclat = 0.6, rot = 0, sx = 0, sy = 0;
    let sourisX = -9999, sourisY = -9999;

    // Fondu d'une forme à l'autre : chaque point part de sa position actuelle, avec un léger décalage.
    const avance = (i: number) => lisse(Math.min(1, Math.max(0, (p * 1.35 - R[i] * 0.35) / 0.65)));
    const changer = () => {
      const cible = T[vers];
      for (let i = 0; i < N; i++) {
        const k = avance(i);
        for (let j = 0; j < 3; j++) F[i * 3 + j] += (cible[i * 3 + j] - F[i * 3 + j]) * k;
      }
      vers = (vers + 1) % 3;
      p = 0;
      eclat = Math.max(eclat, 0.28);
    };
    const minuteur = window.setInterval(changer, 7000);

    // Petites images de points lumineux (cœur blanc), une par couleur : feu, or, bleu, blanc.
    const sprites = [[255, 90, 38], [255, 209, 115], [120, 185, 255], [255, 244, 230]].map((c) => {
      const s = document.createElement("canvas");
      s.width = s.height = 32;
      const g = s.getContext("2d")!;
      const gr = g.createRadialGradient(16, 16, 0, 16, 16, 16);
      gr.addColorStop(0, "rgba(255,255,255,1)");
      gr.addColorStop(0.14, `rgba(${c},1)`);
      gr.addColorStop(0.42, `rgba(${c},0.5)`);
      gr.addColorStop(1, `rgba(${c},0)`);
      g.fillStyle = gr;
      g.fillRect(0, 0, 32, 32);
      return s;
    });

    const bouge = (e: PointerEvent) => {
      sourisX = e.clientX; sourisY = e.clientY;
      const r = st.getBoundingClientRect();
      const ox = Math.max(-0.6, Math.min(0.6, (e.clientX - r.left) / r.width - 0.5));
      const oy = Math.max(-0.6, Math.min(0.6, (e.clientY - r.top) / r.height - 0.5));
      tilt.style.transform = `rotateY(${(ox * 18).toFixed(1)}deg) rotateX(${(-oy * 18).toFixed(1)}deg) translate(${(ox * 10).toFixed(1)}px,${(oy * 10).toFixed(1)}px)`;
    };
    const sort = () => { sourisX = sourisY = -9999; tilt.style.transform = ""; };
    sec.addEventListener("pointermove", bouge);
    sec.addEventListener("pointerleave", sort);

    let raf = 0, avant = performance.now();
    const boucle = (now: number) => {
      raf = requestAnimationFrame(boucle);
      const dt = Math.min(0.05, (now - avant) / 1000) * (lent ? 0.3 : 1);
      avant = now;
      const t = (now / 1000) * (lent ? 0.3 : 1);
      const dpr = Math.min(2, window.devicePixelRatio || 1);
      const W = cv.clientWidth, H = cv.clientHeight;
      if (!W || !H) return;
      if (cv.width !== Math.round(W * dpr) || cv.height !== Math.round(H * dpr)) { cv.width = Math.round(W * dpr); cv.height = Math.round(H * dpr); }
      ctx.setTransform(1, 0, 0, 1, 0, 0);
      ctx.clearRect(0, 0, cv.width, cv.height);
      ctx.globalCompositeOperation = "lighter";

      // Le nuage suit le centre réel de l'orbe (flottement et inclinaison compris).
      const cr = cv.getBoundingClientRect(), sr = st.getBoundingClientRect(), or = core.getBoundingClientRect();
      const cx = or.left - cr.left + or.width / 2, cy = or.top - cr.top + or.height / 2;
      const U = sr.width * 0.37;
      p = Math.min(1, p + dt * 0.55);
      eclat += (0 - eclat) * 0.035;
      const fixe = vers !== 0;
      if (fixe) rot += (Math.round(rot / (Math.PI * 2)) * Math.PI * 2 - rot) * 0.05;
      else rot += dt * 0.22;
      const tx = sourisX > -9000 ? (sourisX - cr.left - cx) / W : 0, ty = sourisY > -9000 ? (sourisY - cr.top - cy) / H : 0;
      sx += (tx - sx) * 0.06; sy += (ty - sy) * 0.06;
      const ry = rot + sx * (fixe ? 0.5 : 1.2), rx = sy * (fixe ? 0.4 : 0.9) + (fixe ? 0 : 0.18);
      const cY = Math.cos(ry), sY = Math.sin(ry), cX = Math.cos(rx), sX = Math.sin(rx);
      const px0 = sourisX - cr.left, py0 = sourisY - cr.top;
      const cible = T[vers], D = 6.5;
      for (let i = 0; i < N; i++) {
        const r = R[i], k = avance(i);
        let x = F[i * 3] + (cible[i * 3] - F[i * 3]) * k, y = F[i * 3 + 1] + (cible[i * 3 + 1] - F[i * 3 + 1]) * k, z = F[i * 3 + 2] + (cible[i * 3 + 2] - F[i * 3 + 2]) * k;
        x += 0.03 * Math.sin(t * 1.4 + r * 6.283 + y * 3);
        y += 0.03 * Math.sin(t * 1.3 + r * 6.283 + z * 3);
        z += 0.03 * Math.sin(t * 1.2 + r * 6.283 + x * 3);
        const L = Math.hypot(x, y, z) || 1, e = eclat * (0.6 + r * 3.5);
        x += (x / L) * e; y += (y / L) * e; z += (z / L) * e;
        const x1 = x * cY + z * sY, z1 = -x * sY + z * cY, y1 = y * cX - z1 * sX, z2 = y * sX + z1 * cX;
        const sc = D / (D - z2);
        let px = cx + x1 * U * sc, py = cy - y1 * U * sc;
        const ddx = px - px0, ddy = py - py0, dd = Math.hypot(ddx, ddy);
        if (dd < 140 && dd > 0.1) { const f = 1 - dd / 140; px += (ddx / dd) * f * f * 70; py += (ddy / dd) * f * f * 70; }
        const prof = Math.min(1, Math.max(0, (z2 + 1.8) / 3.6));
        const taille = (3 + r * 5.6) * sc * dpr;
        const scint = 0.7 + 0.3 * Math.sin(t * 2.6 + r * 40);
        const al = Math.min(1, (0.5 + 0.5 * r) * (0.5 + 0.5 * prof) * scint * 1.15);
        const c = C[i] < 2 ? (y > 0.3 ? 1 : C[i]) : C[i];
        ctx.globalAlpha = al;
        ctx.drawImage(sprites[c], px * dpr - taille / 2, py * dpr - taille / 2, taille, taille);
        if (r > 0.86) {
          const h = taille * 3.4;
          ctx.globalAlpha = al * 0.28;
          ctx.drawImage(sprites[c], px * dpr - h / 2, py * dpr - h / 2, h, h);
        }
      }
      ctx.globalAlpha = 1;
      ctx.globalCompositeOperation = "source-over";
    };
    raf = requestAnimationFrame(boucle);

    return () => {
      cancelAnimationFrame(raf);
      window.clearInterval(minuteur);
      sec.removeEventListener("pointermove", bouge);
      sec.removeEventListener("pointerleave", sort);
    };
  }, []);

  return (
    <section
      ref={section}
      className="relative overflow-hidden bg-paper bg-[radial-gradient(50%_60%_at_74%_46%,rgba(240,120,40,0.16),rgba(5,3,2,0)_70%)] lg:min-h-[680px]"
    >
      <canvas ref={toile} aria-hidden className="pointer-events-none absolute inset-0 z-[2] size-full" />
      <div className="container-page relative z-[1] flex flex-wrap items-center gap-12 pt-12 pb-16 sm:pt-16 lg:pb-20">
        <div className="min-w-0 flex-[1_1_460px]">{children}</div>
        <div className="flex flex-[0_1_420px] justify-center">
          <div ref={scene} className="orb-stage" role="img" aria-label="Une sphère de lumière qui flotte, avec une croix lumineuse en son centre">
            <div className="orb-reflet" />
            <div className="orb-float">
              <div ref={inclinaison} className="orb-tilt">
                <div className="orb-aura" />
                <div className="orb-rays" />
                <div ref={coeur} className="orb-core">
                  <div className="orb-swirl" />
                  <div className="orb-swirl orb-swirl2" />
                  <div className="orb-swirl orb-swirl3" />
                  <div className="orb-cross" />
                </div>
                <div className="orb-glass" />
                <div className="orb-rim" />
                <div className="orb-orbit">
                  <span className="orb-spark" />
                  <span className="orb-spark orb-spark-b" />
                </div>
                <div className="orb-orbit orb-orbit2">
                  <span className="orb-spark" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
