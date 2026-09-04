# Drop & View 1.0.1

## Hogyan indítsd el

ES modulokat böngésző csak `http://` vagy `https://` alól tölt be, `file://`-ból
nem (biztonsági korlátozás) — tehát egy egyszerű helyi szerver kell hozzá.

A mappában, terminálból:

```
python3 -m http.server 8000
```

majd böngészőben: `http://localhost:8000`

(Bármilyen más statikus szerver is jó — VS Code "Live Server" kiegészítője,
`npx serve`, stb.)

## Fájlstruktúra

```
index.html          a HTML váz + importmap (honnan jön a three.js)
css/
  style.css         az összes CSS (start screen, toolbar, side panel, stb.)
js/
  main.js           belépési pont: RESIZE + RENDER LOOP, és összeköti a modulokat

  core/
    dom.js          minden HTML elemre mutató referencia
    scene.js        Scene, Renderer, a két kamera, fények
    controls.js     OrbitControls-gyártó
    state.js        a közös, változó állapot (State objektum)

  model/
    materials.js    megosztott anyagok (fehér, drótváz, renesszánsz, stb.)
    load.js         fájl megnyitás, betöltés, modell előkészítés, eldobás

  section/
    topology.js         a metszet-kitöltéshez szükséges előkészítés
    section-plane.js     a metszősík és a bekapcsolás/kikapcsolás
    section-cap.js        a metszet valódi geometriájának felépítése (a nagy!)

  view/
    camera.js       modell középre igazítás, kamera ráállítás, kameraváltás
    edges.js        élek kirajzolása
    view-modes.js   nézetmódok (eredeti, fehér, hidden line, drótváz, B/W)
    ground-sun.js   talajsík, nap, árnyékok
    focus.js        dupla kattintásos fókuszálás

  ui/
    inspector.js    modell-statisztikák panel
    panel.js        oldalsó panel nyitása/zárása
    status.js       alsó státusz-üzenet + HTML escape segédfüggvény
```

## A közös állapot (State)

A `core/state.js` egyetlen `State` objektumot exportál, ami minden olyan
értéket tartalmaz, ami menet közben változik és amit több fájl is
használ (pl. `State.model`, `State.camera`, `State.sectionPlane`).
Bármelyik fájl importálja:

```js
import { State } from "../core/state.js";
```

és onnantól `State.model`, `State.camera` stb. formában olvassa/írja.
Ez azért egy közös hely, mert az eredeti kódban ugyanazokat az
értékeket nagyon sok különböző funkció módosította — ezt egy helyen
tartani egyszerűbb, mint találgatni, melyik fájl "birtokolja" épp az
adott értéket.

## Ellenőrzés

Minden fájl szintaktikailag helyes (`node --check`), és egy automatikus
kereszt-ellenőrzés megerősítette, hogy minden `import` egy ténylegesen
létező `export`-ra mutat, és minden modulok-közötti hivatkozás
(State, DOM elemek, anyagok, függvények) importálva van ott, ahol
használva van. A modulgráfot valódi Node ES-modul betöltővel is
lefuttattam egészen addig a pontig, ahol a three.js valódi WebGL
kontextust próbál nyitni (ez böngészőn kívül nem lehetséges) — eddig a
pontig minden hiba nélkül lefutott.

Javasolt: nyisd meg böngészőben, tölts be egy FBX/GLB modellt, és
próbáld ki a nézetmódokat, a metszést és a kameraváltást is — így
tényleges vizuális visszaigazolást is kapsz.
