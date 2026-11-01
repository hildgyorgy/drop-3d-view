# Drop & View – fejlesztői átadó

Állapot: **2026-11-01**. Publikus appverzió: **2.0** (`package.json`: `2.0.0`). A kód és a tesztek az elsődleges források; a felhasználói működés részletei a [README](README.md)-ben vannak. Ez az átadó a következő gépen/fejlesztői chatben történő folytatáshoz készült.

## Csomagbélyegkép

A SAVE PACKAGE opcionális `thumbnail` mezőt ment a v1 manifestbe: JPEG MIME,
pixelméret és base64 képadat, legfeljebb 640 pixel hosszabbik oldal és 256 KiB.
A képarány megmarad, a GLB/HDRI erőforrástábla változatlan. A natív Drop & View
Render ezt mutatja a feladat mellett; a régi csomagok továbbra is megnyithatók.
A WebGL path tracer meglévő képe új sample és teljes méretű PNG-kódolás nélkül
is másolható bélyegképnek; egyébként a normál viewport képe kerül mentésre.

## Three.js r187 frissítés – elkészült, Safari-vizuális kontroll még kell

**A Three.js r186 → r187 frissítés 2026-10-30-án megtörtént.** A kiadást és a migrációs útmutatót ellenőriztük:

- [r187 kiadás](https://github.com/mrdoob/three.js/releases/tag/r187)
- [186 → 187 migráció](https://github.com/mrdoob/three.js/wiki/Migration-Guide#186--187)

A nekünk fontos változások:

- A PMREM CubeUV-atlasz helyett cube render targetekre épül; `CubeUVReflectionMapping` megszűnt. A javított PMREM miatt az anyagok megjelenése kissé változhat. Ellenőrizni kell a normál HDRI-előnézetet és a Workbench gömbjét is.
- Változik a TSL implicit típuskonverziója, és a struct storage bufferek mindig tömbként kezelendők. Ez a WebGPU path tracer függőségét is érintheti.
- A `WebGLRenderer.setViewport()` / `setScissor()` render target mellett már nem skáláz pixelaránnyal. A path tracer részlet-renderelése és a Retina/fix exportfelbontás külön ellenőrizendő.
- Erőforrás-felszabadítási javítások, többek között explicit storage-buffer disposal, valamint belső `WeakRef` / `FinalizationRegistry` használat. **Ezekből nem következik automatikusan a Mini memóriaproblémájának megoldása.**

Az npm-es `three-gpu-pathtracer` 0.0.27 WebGPU útvonala r187 alatt a storage-buffer változás miatt hibás compute pipeline-t készített. A tracer szerzőjének célzott, még kiadatlan r187-javítását egzakt commitra pineltük (`45919f326dded43b136f9fb08eb1de47878e4ad6`, upstream `webgpu/three-r187` ág), mellette a megkövetelt `three-mesh-bvh` 0.9.17 fut. Mozgó GitHub branch nincs használatban; a lockfile tarball-integritást is rögzít.

Az r187-átállás ellenőrzésekor a teljes akkori tesztkészlet sikeres volt, mindkét publikus renderer felépült, és a DEMO 1/2 WebGL-, WebGPU- és path-tracer próbái is működtek. A tiszta WebGPU-próbán a mintaszám nőtt, kép épült és nem volt konzolhiba. A cache-jelölés `three-r187-3`, a render producer revíziója `webgl-photo-3`, a Draco CDN pinje r187. A publikus AUTO továbbra is WebGL.

**Még szükséges valódi Safari-vizuális kontroll:** LACQUERED, üveg, HDRI/PMREM, Workbench-gömb, textúraátvétel, backend-handoff és fix/Retina felbontású csomag-visszanyitás. A `photo-clearcoat.js` illeszkedési tesztje sikeres, de GPU-képet nem igazol.

## Gépváltási pillanatkép

- A 2026-11-01-i kódfelülvizsgálati javítások alapcommitja **`4d50333` – menu**, az első javításcsomag commitja pedig **`c299e57` – Harden render package import and cleanup**.
- Előző fontos commitok: `dcdd17d` – render; `4ba3830` – Update PROJECT_HANDOFF.md; `17701f5` – render popup refine; `d712a1e` – render station bugfix.
- **135/135 teszt sikeres** a 2026-11-01-i kódfelülvizsgálat javításai után. A `.dvrender` kódoló/dekódoló változatlan v1 erőforrás-szerkezet mellett már nem készít szükségtelen teljes csomagméretű másolatot; az ablakra dobott `.dvrender` közvetlenül megnyílik, az opcionális manifest-bélyegkép pedig a natív renderapp előnézetét szolgálja. A nap árnyéktérképe mindkét backendben igény szerint frissül: kamera- vagy tétlen képkockák nem számolják újra, de nap-, modell-, csoport-, elem- és metszetváltozáskor érvénytelenítjük. A preview és az in-app path tracer backendenként közös, egyszer dekódolt HDRI CPU-adatot használ; a csomagvalidáció half-float ideiglenes dekódolással működik. A publikus renderer buildet forrásváltozás után mindig újra kell készíteni. A nagy chunkokra vonatkozó buildfigyelmeztetés nem buildhiba.
- A felülvizsgálati kód-, teszt-, dokumentáció- és generált renderer-változásokat együtt kell commitolni/pusholni; a másik gépen pull szükséges. A jelen körben nem indítottunk GitHub Pages-publikálást.
- A használt helyi tesztszervereket leállítottuk. A korábbi gép `/tmp`, Downloads, Desktop és Codex-runtime útvonalai nem hordozható tesztfüggőségek.

Rögzített függőségek a `webgpu-lab/package.json`-ban:

| Függőség | Jelenlegi verzió |
| --- | --- |
| `three` | `0.187.0` |
| `three-gpu-pathtracer` | `0.0.27` + upstream r187 commit `45919f3` |
| `three-mesh-bvh` | `0.9.17` |
| Vite | `8.2.2` |

## Aktuális termékdöntések és UI

- A Drop & View építészek ügyfeleinek szánt, egyszerű, helyben futó GLB-nézegető. Nem modellhosting szolgáltatás. Egyetlen közös app/UI van, két rendererrel.
- A normál publikus **AUTO WebGL-t választ**. A WebGPU kézzel a `?rendererDebug=1` infópaneljén választható összehasonlításhoz. A WebGPU path tracer nincs a WebGL vizuális referenciájával egyenértékűnek nyilvánítva.
- A **MATERIAL WORKBENCH és FILE a normál standalone nézetben elérhető**, nem debug-only funkciók. Embedben nem töltődnek be a szerkesztőeszközök.
- A Workbench és FILE közös mérete: asztali szélesség **342 px**, magasság `min(600px, reszponzív magasságkeret)`. Kis ablakban automatikusan kisebbek és görgethetők. Nem modálisak; nincs viewert kitakaró háttérréteg.
- A felhasználó a szűkszavú, nyugodt UI-t kedveli. A rutin magyarázó/sikerfeliratokat eltávolítottuk; az owner/policy figyelmeztetés, hibák és érdemi kompatibilitási jelzések maradjanak. A bezárás X, az akciók keret nélküli piros szövegek.
- A Workbench gombsora **APPLY / UNDO / RESET**. Nincs SAVE AS; a GLB-mentés a **FILE → EXPORT → SAVE GLB** helyen van.
- A FILE panel két füle sorrendben **IMPORT / EXPORT**. IMPORT alatt egy GLB vagy egy `.dvrender` nyitható meg. EXPORT alatt SAVE GLB és SAVE PACKAGE található; utóbbinál IMAGE pixelméret, SAMPLES és BOUNCES 6 · GLASS 10.
- Az IMAGE kijelzés a tényleges rendercanvas fizikai pixelméretét mutatja, és resize esetén azonnal frissül. Retina alatt ez eltérhet a CSS-ablakmérettől. Pontosan ez a méret kerül a csomagba. Importált fix renderkeret esetén annak méretét mutatja.
- A felhasználó bevált munkamódszere az ablak átméretezésével egyszerre komponálni és felbontást választani. A hétköznapi képekhez az aktuális app-ablak tartalma megfelelő; az 5K path tracer render éjszakára is maradhat.

## Material Workbench: eredeti textúrák és előnézet

- Felületre kattintva a kiválasztott glTF-anyag összes előfordulása együtt szerkeszthető. SURFACE, POLISHED METAL, LACQUERED, illetve exporterrel kijelölt clear glass esetén GLASS mód van.
- A gömb valódi Three.js előnézet, a viewerrel egyező WebGL/WebGPU backenddel. Egérrel és billentyűnyilakkal forgatható, csak változáskor renderel. Nagy, középre rendezett gömb a teljes szélességű drop box fölött; a dobozban a fájllista balra igazított.
- A kiválasztott **eredeti GLB-textúrákat is átveszi**: base color, metallic/roughness (belső `arm` slot), normal, occlusion, emissive. A gömbön megjelennek, módosíthatók/cserélhetők; **CLEAR MAPS + APPLY** törli őket a modellből. UNDO/RESET visszaállíthatja az eredeti anyagot.
- A beágyazott JPEG/PNG eredeti bájtjai megmaradnak. Más dekódolt képek lehetőség szerint PNG-vé alakulnak. A forrás-textúrák saját UV-csatornája, külön transzformációja, wrappingje/filterezése, metallic faktora és normal/AO erőssége megőrződik.
- **Fontos:** az átvett textúrák méretezése az eredeti UV-illesztést változtatja a semleges 2.0 beállításhoz képest; ez nem a forrás UV-k tényleges méteres méretének kimérése. Az új, CLEAR MAPS után bedobott csomagok a korábbi világkoordinátás méteres vetítést használják.
- Új méteres textúráknál külön `TEXCOORD_1` készül, az eredeti UV/geometry bájtjai megmaradnak. Már foglalt második UV-készlet esetén a vetítés elutasított. Közös mesh eltérő világkoordinátás vetítése nem menthető egyetlen közös UV-készletbe; ezt célzott hiba jelzi. A WebGL tracer ideiglenesen átköti a méteres UV-kat.
- Saját GLB explicit `asset.extras.dropView.materialWorkbench.policy = "disabled"` nélkül szerkeszthető/menthető. Tiltott modellnél a menüpont marad, de az ownerhez irányító figyelmeztetés jelenik meg. A demó szerkeszthető, de nem menthető GLB-ként. Az eredeti fájlt soha nem írjuk felül.
- Ellenőrizve: valódi kattintásos textúraátvétel, gömb, APPLY, CLEAR MAPS, UNDO; a böngészőből mentett GLB-ben az eredeti textúrabájtok, UV-k, geometria és textúra-transzformáció megmaradtak. A felhasználó is sikeresnek visszajelezte a saját modelljén.
- Részletek: [MATERIAL-WORKBENCH](webgpu-lab/MATERIAL-WORKBENCH.md).

## Rendercsomag, HDRI és Export

- A `.dvrender` az **aktuális anyagozott GLB + nézet/kamera + világítás + csoportláthatóság + pixelméret + sample/bounce cél + aktív Radiance HDRI bájtjai** együttese. Az eredeti GLB és a Workbench-editek külön története nincs benne. Nem a korábban kiszámolt samples folytatása: render mindig nulláról indul.
- Az appba alapból csomagolt HDRI-t a beolvasott csomag saját HDRI-je felülírja az adott modellhez. Normál új GLB-re váltás visszaállítja az app alap környezetét. Újraexport és backend-handoff az aktív környezetet megőrzi. Előnézet és path tracer ugyanazt az aktív forrást használja.
- A HDRI érvényességének/azonosságának ellenőrzése a látható modell lecserélése előtt történik. A csomagban appverzió, renderer-revízió, HDRI SHA-256 azonosító is van. Régebbi, HDRI nélküli csomag az app saját környezetével nyílik meg, kompatibilitási jelzéssel.
- A renderer programkódja nem utazik a csomagban. Producer-eltérés figyelmeztet, de a render engedélyezett. Aktuális renderer-revízió `webgl-photo-3`; képképzési változáskor frissítendő. Az alap HDRI azonosítóját fájlcsere esetén módosítani kell; teszt is ellenőrzi.
- Alap exportcél **500 samples**, rögzített **6 bounces / 10 transmissive bounces**. A fogadó viewer vagy a Drop & View Render a csomagban mentett értéket használja.
- SECTION mellett exporttiltás marad érdemi figyelmeztetéssel. A v1 csomag legfeljebb két erőforrása az aktuális GLB és az opcionális HDRI; a maximális csomagméret 2 GB.
- OPEN .DVRENDER az egyetlen kiválasztott csomagot a látható viewerben állítja helyre, majd bezárja a FILE panelt. Nem indít automatikusan path tracert.
- A SAVE IMAGE / PNG-mentés az éppen felhalmozott tracer képet kezeli, kezelőszervek nélkül; nincs külön, a viewert kitakaró renderelő réteg.

## Böngészős render station – kivezetve

- A rejtett iframe-es többcsomagos render queue, IndexedDB-tárolás, worker-protokoll és automatikus PNG-letöltés kikerült a termékből és a kódbázisból.
- A webes PATH TRACER megmarad interaktív, gombnyomásos előnézetnek és képkészítésnek. A `.dvrender` final render célja a külön natív Drop & View Render alkalmazás.

## WebGPU path tracer: ellenőrzött tudás

A felhasználó egy Gemini-választ kért ellenőrizni. A WebGPU-ág merge-je valódi, de az üvegen átjutó közvetlen árnyéksugarak általános megoldása nem következik belőle.

- A hivatalos changelog szerint a WebGPUPathTracer **0.0.25-ben, 2026-09-28-án** jelent meg, a 0.0.27 2026-10-08-i. Az app ennek egzakt upstream r187-kompatibilitási commitját (`45919f3`) használja, amíg ugyanez kiadott verzióban meg nem jelenik.
- A kamerából induló sugár transzmissziója/fénytörése és a felületről a fény felé indított NEE shadow ray kezelése külön feladat. A megvizsgált `PathTracerMegaKernel.js` a közvetlen fényhez bináris occlusion-t vizsgál; a kód a színezett áttetsző árnyékokat lehetséges továbbfejlesztésként említi. MNEE/kausztika a roadmap Future részében van. Ebből nem következik, hogy semmilyen fény nem jut át üvegen, de az általános „ablakon átjövő direkt napfény megoldva” állítás nem igazolt.
- Compute shader használata nem jelenti a hardveres RT/RTX-egységek közvetlen használatát; itt a BVH-bejárást/metszést shaderkód végzi.
- Források: [tracer changelog](https://github.com/gkjohnson/three-gpu-pathtracer/blob/main/CHANGELOG.md), [shader](https://github.com/gkjohnson/three-gpu-pathtracer/blob/main/src/webgpu/compute/PathTracerMegaKernel.js), [roadmap #777](https://github.com/gkjohnson/three-gpu-pathtracer/issues/777). Friss állításnál az aktuális forrást újra ellenőrizzük, ne általános Three.js/WebGPU hírből következtessünk kész tracerfunkcióra.

## Tervezett headless final render és figyelendő natív Metal-alternatíva

- A kijelölt final-render megoldás a külön **Drop & View Render**: a Drop & View marad a Blender-ismeretet nem igénylő szerkesztő/komponáló felület, a natív macOS-app pedig a `.dvrender` csomagot a háttérben futó Cyclesnek adja át Metal GPU-val. A webes path tracer gyors, integrált előnézet marad; a Cycles mellette, nem helyette készít nagy felbontású finalt. Támogatott alap a stabil Blender 5.2.3 LTS; a béta Blender-verziók nem részei a támogatott útnak.
- A terjeszthető kliens **nem localhost-szerver és nem böngésző-extension**. A natív SwiftUI macOS-app elkészült saját drag-and-drop ablakkal, Cycles sample/progress kijelzéssel, Cancel és Show in Finder funkcióval, Blender-felderítéssel és renderbeállításokkal. A felhasználó nem lát Terminalt vagy Pythont; a Blender saját beépített Pythonja futtatja az app bundle `bpy` adapterét. Aláírás, notarizálás és kiadási csomagolás még hátravan.
- A Blender-adapter és a Swift kliens közti kommunikáció eleve platformfüggetlen JSON-soros protokoll legyen (`stage`, `sample`, `total`, `remaining`, `output`, strukturált hiba). A renderlogika közös marad; később egy vékony natív C#/WinUI Windows-kliens épül rá. A GPU-választást általánosítani kell: NVIDIA RTX → OptiX, régebbi NVIDIA → CUDA, AMD → HIP, Intel Arc → oneAPI, Apple Silicon → Metal, végül CPU fallback. Így a két platform csak a natív GUI-ban, Blender-felderítésben, fájltársításban és telepítő/aláírási folyamatban tér el.
- A korábbi `tools/cycles/` prototípus külön projektbe költözött: [Drop & View Render](https://github.com/hildgyorgy/drop-view-render). A jelenlegi változat natív SwiftUI macOS-app, amely GLB vagy `.dvrender` fájlokat fogad, Blender UI nélkül indítja a Cycles/Metal renderelést, saját jobfelületet, minőségbeállításokat, Cancelt és Show in Finder funkciót ad. A Blender-adapter a külön repó `DropViewRender/Resources/render_glb.py` fájlja; nincs Terminal-, AppleScript- vagy külön Python-runtime a felhasználói munkafolyamatban.
- A `.dvrender` v1 szándékosan lapos és nem lossless projektarchívum: pontosan egy, az aktuális Workbench-anyagokat már tartalmazó GLB a 0. erőforrás, mellette opcionálisan az aktív HDRI. Nincs original GLB, külön Workbench-handoff vagy második resolved GLB; a kamera, láthatóság és renderbeállítás a manifestben marad. Ugyanaz a `patchGlbMaterials` út állítja elő az aktuális GLB-t, mint a bevált SAVE GLB funkció. A korábbi kísérleti v1 csomagokat sem a viewer, sem a Cycles bridge nem támogatja; újra kell exportálni őket. A döntés tudatos: a forrás GLB Archicadből újra előállítható, a mentett scene pedig a pillanatnyi anyagozott állapotból folytatható.
- `.dvrender` esetén a bridge korlátozott méretekkel és erőforrásszámmal, streamelve bontja ki a GLB/HDRI erőforrást, majd visszaállítja a viewer aktuális perspektív vagy ortografikus kameráját, modellközpontosítását, felső szintű csoportláthatóságát, pixelméretét, sample/bounce célját és a csomagolt HDRI-t. A HDRI legfényesebb nappontját a mentett `sunAngle`/`sunHeight` irányhoz forgatja, külön Sun lámpa nélkül, így nem keletkezik kettős nap. Egy valódi GLB+HDRI tartalmú 37 MB-os tesztcsomag 320 × 180 / 4 samples beállítással 2,18 s alatt készült el. A generált csomag kódolási és Cycles-folyamata igazolt; következő vizuális kontrollként egy közvetlenül a böngészőből mentett, tényleges Workbench-edites csomagot kell összehasonlítani a webes nézettel.
- Jövőbeni natív alternatívaként figyelendő: [dariopagliaricci/Metal-PathTracer-arm64](https://github.com/dariopagliaricci/Metal-PathTracer-arm64). MIT licencű C++/Objective-C++/Metal renderer, GLB/PBR betöltéssel, headless CLI-val, HDRI/MIS-szel és PNG/EXR kimenettel. A `v3.0.0` aktuális nyilvános checkoutja helyben felépült, és a `demo_house.glb` fájlból 58 mesht, 322 570 háromszöget és 6 textúrát beolvasott; a tényleges render azonban a jelenlegi Metal compilerrel shaderfordítási hibán (`thread Ray currentRay`) megállt. A publikus CI csak buildet és `--help` smoke-ot futtat, GPU-rendert nem.
- A natív tracer jelenleg nem közvetlen `.dvrender`-fogadó: saját `.scene` wrapper kell hozzá. A glTF importerben transmission/volume/IOR van, de `KHR_materials_clearcoat` nincs, ezért a Drop & View LACQUERED anyaga külön fejlesztést igényelne; az ortografikus kamerautat és a Drop & View-napot is ki kellene egészíteni. M1 Maxon dedikált hardveres RT helyett a renderer software BVH Metal útja használható. Emiatt most nem váltja ki a Cycles tervet, de később érdemes ugyanazzal a resolved GLB-vel sebesség-, memória- és képminőségtesztet futtatni, majd csak mért eredmény alapján újraértékelni.

## Megőrzendő korábbi döntések és regressziók

- Mindkét motor DEMO 1 (`demo/demo_house.glb`) és DEMO 2 (`demo/demo_house_2.glb`) fájlja közös. Az új exporter már nem készít kettős anyagozást. Régi `KHR_materials_variants` GLB-nél a normál nézet az alapanyagot használja, a debug a `Maxon / Redshift PBR` változatot, ha van. Ez nézethez, nem backendhez kötött kompatibilitás.
- A normál WebGL/WebGPU előnézet finom, 0.2-es HDRI-környezetet használ látható HDRI-háttér nélkül; a nap a fő fény, a környezet fényes pontja a napirányhoz igazodik. Az iPhone fekete előnézetére bevezetett **±65504 half-float clamp** maradjon. Normál nézetben a modell megvárja az előkészített környezetet, letöltési hibánál direkt világítás marad. A háttérworker kihagyja ezt az előnézeti előkészítést.
- A WebGL B/W shader csak `reflectedLight.directDiffuse` alapján küszöböl, hogy a HDRI ne tüntesse el az önárnyékokat. Alpha-cutout anyagokra is érvényes; az üveg külön anyag.
- Safari **LACQUERED** regresszió: a `js/view/photo-clearcoat.js` stabil koszinuszos GGX/Smith alakra cseréli a tracer eredeti `acos`/`tan` értékelését. A lakkréteg megmarad, nincs clearcoat-kikapcsolás. Natív Safari alatt korábban fekete lett a DEMO 1 betonkerete/járdája, javítva világos maradt. A `photo-clearcoat.test.js` a pinned függőség belsejéhez illeszkedést ellenőrzi, a GPU-képet nem. Frissítéskor külön Safari-vizuális teszt kell.
- A PATH TRACER alatt a kamera szándékosan zárolt; ORIGINAL-ban kell komponálni. A WINDOW LIGHTS exporterrel jelölt ablakfényekre épül, alapból ki; a régi emisszív GLASS LIGHT kísérlet rejtett/ki marad.
- MEASUREMENTS: két modellfelületre húzható végpont, egyenes világkoordinátás távolság méterben, adaptív SVG-osztások. Nincs él/csúcs-snap vagy GLB-mentés. Kamera damping húzás közben szünetel; raycast kizárja a rejtett/levágott felületeket. Új modell/backend-váltás/reload törli, embedben rejtett. Mobilon külön próba továbbra is indokolt.

## Kódtérkép

| Hely | Szerep |
| --- | --- |
| `index.html`, `css/style.css`, `js/main.js` | Közös UI, FILE panel, képméret-kijelzés és snapshot import/export. |
| `js/core/renderer-bootstrap.js` | Backend-választás és renderer-indítás. |
| `js/ui/material-workbench.js`, `js/ui/workbench-source-maps.js` | Anyagszerkesztés, eredeti GLB-textúraátvétel, UV/transzformációk és mentés. |
| `js/ui/workbench-sphere-preview.js`, `js/ui/workbench-preview-renderer.js`, `webgpu-lab/full-workbench-preview-renderer.js` | Forgatható, backendnek megfelelő gömb. |
| `js/model/glb-material-patch.js` | Eredeti GLB patch-elése, textúrák, UV-k és anyagrekordok mentése. |
| `js/ui/file-panel.js`, `js/view/render-frame.js` | IMPORT/EXPORT panel, GLB és egy `.dvrender` megnyitása, rögzített pixelméret/képarány. |
| `js/core/render-snapshot.js`, `render-job.js`, `render-environment.js`, `environment-source.js`, `render-compatibility.js` | Csomagformátum, célok, HDRI, producer/kompatibilitás. A rövidített nevek mind a `js/core/` alatt vannak. |
| `tools/cycles/README.md` | Kompatibilitási hivatkozás a külön [Drop & View Render](https://github.com/hildgyorgy/drop-view-render) projektre. |
| `js/view/photo1.js`, `webgpu-lab/full-photo.js`, `js/view/photo-clearcoat.js` | Két eltérő tracer adapter és Safari clearcoat-javítás. |
| `js/view/webgl-environment.js`, `webgpu-lab/full-scene.js` | Normál előnézet HDRI-je/PMREM-je; r187 szempontjából érintett. |
| `js/core/backend-handoff.js`, `session-runtime.js` | Backend-váltáskor egyszer használatos IndexedDB-handoff. |
| `webgpu-lab/full-*.js`, `vite*.config.js`, `build-unified.mjs` | Adapterek és build; nincs külön publikus lab-app. |
| `renderers/webgl/`, `renderers/webgpu/` | Generált publikus bundle-ök: kézzel ne szerkesszük. |
| `embed/drop-view-embed.js`, `js/core/embed-bridge.js` | Beágyazható nézőke, a modell a fogadó tárhelyén marad. |

## Fejlesztés és ellenőrzés másik gépen

1. `git status -sb`, szükség szerint pull; a felhasználó módosításait őrizzük meg.
2. Node.js és pnpm helyi telepítése; `pnpm --dir webgpu-lab install` a lockfile alapján. Az előző gépen a `node` nem volt a shell PATH-ban; ne a gépspecifikus Codex-runtime abszolút útvonalát másoljuk át megoldásként.
3. Helyi szerver a repó gyökeréből: `python3 -m http.server 8000`. Normál `http://127.0.0.1:8000/`; debug `http://127.0.0.1:8000/?rendererDebug=1`. Meglévő szervert ne állítsunk le találomra.
4. `node --test` / `npm test`; `pnpm --dir webgpu-lab build:public` vagy `node webgpu-lab/build-unified.mjs --public`; végül `git diff --check`. A build mindkét `renderers/` csomagot frissíti; új hash-fájlokat és régi fájlok törlését együtt kell commitolni. Jelenlegi belépő/cache-jelölés: `three-r187-3` (`index.html`, worker URL).
5. Automatikus teszt nem helyettesíti a WebGL/WebGPU/Safari képi próbát. Az átadó frissítése dokumentációs módosítás, emiatt új renderer build nem készült.

Publikus oldal: <https://hildgyorgy.github.io/drop-3d-view/>. A repó saját licencű, külső összetevők licencei a README-ben. A support oldal **külön `app-support` repó**, `drop-view/index.html`; a fő viewer commitja nem viszi át. A korábbi 2.0/Workbench támogatási leírás létezik, az új Export/sor/mérőszalag támogatási oldalon történő teljes bemutatását ebben a körben nem ellenőriztük/frissítettük.

## Következő chat indítása

„Olvasd el a `PROJECT_HANDOFF.md` és `README.md` fájlt, ellenőrizd a `git status -sb` eredményét. A Three.js r187 frissítés elkészült; a valódi Safari LACQUERED/üveg/Workbench kontroll még szükséges. A böngészős render queue kivezetve; a final render külön projektje a Drop & View Render.”

Az átadó tájékozódási pont; a felhasználó frissebb döntéseit, méréseit és a tényleges kódot nem írja felül.
