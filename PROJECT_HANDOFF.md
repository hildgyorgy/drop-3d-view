# Drop & View – fejlesztői átadó

Állapot: **2026-10-30**. Publikus appverzió: **2.0** (`package.json`: `2.0.0`). A kód és a tesztek az elsődleges források; a felhasználói működés részletei a [README](README.md)-ben vannak. Ez az átadó a következő gépen/fejlesztői chatben történő folytatáshoz készült.

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

Ellenőrizve: 135/135 teszt, mindkét publikus renderer buildje, DEMO 1 WebGL előnézet/path tracer, DEMO 2 WebGL előnézet, WebGPU előnézet és DEMO 2 WebGPU path tracer. A tiszta WebGPU-próbán a mintaszám nőtt, kép épült és nem volt konzolhiba. A cache-jelölés `three-r187-3`, a render producer revíziója `webgl-photo-3`, a Draco CDN pinje r187. A publikus AUTO továbbra is WebGL.

**Még szükséges valódi Safari-vizuális kontroll:** LACQUERED, üveg, HDRI/PMREM, Workbench-gömb, textúraátvétel, backend-handoff, fix/Retina felbontású csomagrender és a render queue teljes UI-folyamata. A `photo-clearcoat.js` illeszkedési tesztje sikeres, de GPU-képet nem igazol.

## Gépváltási pillanatkép

- A dokumentum frissítése előtt a working tree **tiszta** volt: `main...origin/main`, helyben ismert eltérés nélkül. Ez nem új hálózati fetch/push vagy élő GitHub Pages-ellenőrzés eredménye.
- A frissítés alapcommitja: **`4ba3830` – Update PROJECT_HANDOFF.md**. Az r187 módosításai e sor írásakor még nincsenek commitolva.
- Előző fontos commitok: `d712a1e` – render station bugfix; `7672935` – texture import from glb; `2a5a5e2` – export popup; `042619a` – redesign popups.
- **134/134 teszt sikeres**, a gépváltási átadó írásakor újra futtatva. A legutóbbi kódmódosítás után mindkét publikus renderer buildje is sikeres volt. A nagy chunkokra vonatkozó buildfigyelmeztetés nem buildhiba.
- Csak ez az átadó lesz új helyi módosítás. Gépváltás előtt ezt is commitolni/pusholni kell; a másik gépen pull szükséges. A jelen körben nem indítottunk új publikálást.
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
- A **MATERIAL WORKBENCH és EXPORT a normál standalone nézetben elérhető**, nem debug-only funkciók. Embedben nem töltődnek be a szerkesztőeszközök.
- A Workbench és Export közös mérete: asztali szélesség **342 px**, magasság `min(600px, reszponzív magasságkeret)`. Kis ablakban automatikusan kisebbek és görgethetők. Nem modálisak; nincs viewert kitakaró háttérréteg.
- A felhasználó a szűkszavú, nyugodt UI-t kedveli. A rutin magyarázó/sikerfeliratokat eltávolítottuk; az owner/policy figyelmeztetés, hibák és érdemi kompatibilitási jelzések maradjanak. A bezárás X, az akciók keret nélküli piros szövegek.
- A Workbench gombsora **APPLY / UNDO / RESET**. Nincs SAVE AS; a GLB-mentés az **EXPORT → EXPORT → SAVE GLB** helyre került.
- Az Export két füle **EXPORT / RENDER**. Az EXPORT fülön SAVE GLB és SAVE PACKAGE, utóbbinál IMAGE pixelméret, SAMPLES és BOUNCES 6 · GLASS 10.
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
- A renderer programkódja nem utazik a csomagban. Producer-eltérés figyelmeztet, de a render engedélyezett. Aktuális renderer-revízió `webgl-photo-1`; képképzési változáskor frissítendő. Az alap HDRI azonosítóját fájlcsere esetén módosítani kell; teszt is ellenőrzi.
- Alap exportcél **500 samples**, rögzített **6 bounces / 10 transmissive bounces**. A fogadó gép a csomagban mentett értéket használja. Régi, cél/felbontás nélküli csomag háttérrender-fallbackje 500 samples és 1920 × 1080.
- SECTION mellett exporttiltás marad érdemi figyelmeztetéssel. A v1 csomag legfeljebb két erőforrása az aktuális GLB és az opcionális HDRI; a maximális csomagméret 2 GB.
- OPEN IN VIEWER a kiválasztott csomagot a látható viewerben állítja helyre, majd az Export fület készíti elő és bezárja a popupot. Nem indít automatikusan path tracert.
- A SAVE IMAGE / PNG-mentés az éppen felhalmozott tracer képet kezeli, kezelőszervek nélkül; nincs külön, a viewert kitakaró renderelő réteg.

## Többcsomagos renderelési sor – elkészült

- **EXPORT → RENDER → PACKAGES**: több `.dvrender` egyszerre választható/bedobható. A balra igazított lista **a szaggatott dobozon belül** jelenik meg, nem alatta. Soronként név, állapot, PNG-link, újrafuttatás ↻, fel/le nyíl és eltávolítás ×.
- **START QUEUE** indítja a várakozó csomagokat sorrendben, egyszerre egy rejtett WebGL-renderer iframe-ben. A látható modell érintetlen marad. Futás közben is hozzáadhatók csomagok; az aktív munka nem mozgatható/törölhető.
- PAUSE/RESUME szünetelteti a munkát és a sor előrelépését; SKIP a következőre lép; CANCEL leállítja a sort, a hátralévők várakoznak. Hibás csomag FAILED jelzést kap, a következő elindul. Az iframe/GPU-erőforrások két munka között felszabadulnak.
- Kész képnél automatikus PNG-letöltést **indít**, a csomag nevéből és felbontás/sample adatokból képzett fájlnévvel. **Ez nem bizonyítja a letöltés sikerét:** a böngésző engedélyezi vagy blokkolja. A tesztböngésző az első automatikus letöltést átengedte, a másodikat nem. A kész sor saját PNG-linkje kézzel működött. A PNG READY felirat kész képet jelent, nem igazolt Downloads-mentést.
- A csomagok és a kész PNG Blobok az adott böngésző/origin **IndexedDB** tárolójában maradnak (`dropview-render-queue`, v1, `jobs`). Újratöltéskor visszatér a lista és a kész képek. A félbeszakadt/paused munka QUEUED lesz, **nulláról**, új START QUEUE után folytatható. Tárolóhiba esetén figyelmeztet és az aktuális tab memóriájában megmarad az állapot; a tartósság ilyenkor nem garantált. Törlés/site-data takarítás eltávolítja a tárolt feladatot/képet.
- A popup bezárása vagy fülváltás nem állítja le a sort. A böngésző tabja maradjon nyitva és a gép ébren; ez továbbra sem szerveroldali/hálózati renderküldés.
- Böngészős próba: két érvényes csomag eltérő sample-céllal végigfutott; köztük hibás csomag nem blokkolta a sort. Mindkét PNG érvényes 320 × 180 képként ellenőrizve. Reload után a képek megmaradtak, a paused 74/2000-es próba újra QUEUED lett. Átrendezés/eltávolítás is ellenőrizve; a görgetősáv elől a sorvégi vezérlők külön helyet kaptak.

## Mac mini: 5K render és memória – még nyitott vizsgálat

- A rendergép egy **8 GB RAM-os, headless Mac mini**, Jump Desktoppal használva. Safari egy **új, 43,7 MB-os, 5120 × 2880-as** csomagnál kb. 2 sample után újratöltötte/összeomlásjelzéssel helyettesítette az oldalt. Ez Safari-folyamat esemény volt, nem az app saját hibája. A csomag betölthető és a render elindul.
- Erőforrás-csökkentő javítás elkészült (`d712a1e`): legfeljebb 512 × 512-es GPU-dispatch részletek (5K-nál 10 × 6 = 60 a régi 2 × 2 helyett); rejtett workerben nincs élő canvas-megjelenítés, low-res/fade előnézet, raster shadow map, preview HDRI/PMREM, MSAA/stencil és gömb-preview munka. A felbontás/sample/bounce nem csökkent. PNG-capture idejére visszakapcsol a célkép canvasra rajzolása.
- **Ez még nem memória-korlátos képrészletenkénti render:** a tracer teljes méretű lebegőpontos pufferei továbbra is megvannak. Három RGBA32F puffer 5120 × 2880-nál kb. **708 MB**, további GPU/mélységi/model/textúra/CPU memória nélkül. A kisebb dispatch önmagában ezt nem oldja meg.
- Helyi próba: valódi 5120 × 2880 PNG, 4 samples, 6/10 bounce sikeres. Ez **nem** a Mini 500 mintás stabilitásának igazolása.
- A felhasználó először a javítással is tapasztalt újratöltést; egy következő futást megfigyelés alatt hagyott. Utolsó visszajelzés: **25/500-nál tartott**. Nincs még visszajelzés a végső sikerről vagy újabb hibáról; ne állítsuk megoldottnak.
- Activity Monitor pillanatkép: weboldal-folyamat **2,84 GB**, Safari Graphics and Media kb. **353 MB**, teljes használt memória **6,90 GB**, tömörített **2,21 GB**, swap **2,43 GB**, **sárga** memóriaterhelés. Mellette BIMcloud/Teamwork, Node és Roon is futott. Ez erősíti a memórianyomás gyanúját, de nem bizonyítja a Safari kilépési okát; nincs crash log.
- Javasolt, még nem visszaigazolt kontroll: ugyanaz 2560 × 1440-en, negyedakkora képpufferrel. Tartós 5K-megoldás lehet valóban kis GPU-pufferekkel, képrészletenként renderelni és összerakni a végeredményt; **ez még nincs implementálva**.
- A felhasználó későbbi terve inkább az otthoni MacBookról csomagot készíteni, az irodai Mac Studión renderelni. Az éjszakai futási idő elfogadható. Az r187 frissítés elkészült; a Safari-vizuális kontroll és a Mini végső 5K-eredménye nyitott.

## WebGPU path tracer: ellenőrzött tudás

A felhasználó egy Gemini-választ kért ellenőrizni. A WebGPU-ág merge-je valódi, de az üvegen átjutó közvetlen árnyéksugarak általános megoldása nem következik belőle.

- A hivatalos changelog szerint a WebGPUPathTracer **0.0.25-ben, 2026-09-28-án** jelent meg, a 0.0.27 2026-10-08-i. Az app ennek egzakt upstream r187-kompatibilitási commitját (`45919f3`) használja, amíg ugyanez kiadott verzióban meg nem jelenik.
- A kamerából induló sugár transzmissziója/fénytörése és a felületről a fény felé indított NEE shadow ray kezelése külön feladat. A megvizsgált `PathTracerMegaKernel.js` a közvetlen fényhez bináris occlusion-t vizsgál; a kód a színezett áttetsző árnyékokat lehetséges továbbfejlesztésként említi. MNEE/kausztika a roadmap Future részében van. Ebből nem következik, hogy semmilyen fény nem jut át üvegen, de az általános „ablakon átjövő direkt napfény megoldva” állítás nem igazolt.
- Compute shader használata nem jelenti a hardveres RT/RTX-egységek közvetlen használatát; itt a BVH-bejárást/metszést shaderkód végzi.
- Források: [tracer changelog](https://github.com/gkjohnson/three-gpu-pathtracer/blob/main/CHANGELOG.md), [shader](https://github.com/gkjohnson/three-gpu-pathtracer/blob/main/src/webgpu/compute/PathTracerMegaKernel.js), [roadmap #777](https://github.com/gkjohnson/three-gpu-pathtracer/issues/777). Friss állításnál az aktuális forrást újra ellenőrizzük, ne általános Three.js/WebGPU hírből következtessünk kész tracerfunkcióra.

## Tervezett headless final render és figyelendő natív Metal-alternatíva

- A kijelölt final-render irány egy **rádobós, headless Blender/Cycles segéd**: a Drop & View marad a Blender-ismeretet nem igénylő szerkesztő/komponáló felület, a `.dvrender` csomagot egy külön macOS-es indító adja át a háttérben futó Cyclesnek, Metal GPU-val. A webes path tracer megmarad gyors, integrált előnézetnek; a Cycles mellette, nem helyette készít nagy felbontású PNG/EXR finalt. Célnak a stabil Blender 5.2.3 LTS lett kiválasztva; a 5.3 Beta most nem része a támogatott útnak.
- A terjeszthető kliens végleges iránya **nem localhost-szerver és nem böngésző-extension**. Elsőként natív SwiftUI macOS-app készül saját drag-and-drop ablakkal, valódi Cycles sample/progress kijelzéssel, Cancel és Show in Finder funkcióval, `.dvrender` fájltársítással, Blender-felderítéssel, Developer ID aláírással és notarizálással. A felhasználó nem lát Terminalt vagy Pythont; a Blender saját beépített Pythonja futtat egy vékony, az app bundle-be tett `bpy` adaptert, külön Python-runtime nélkül.
- A Blender-adapter és a Swift kliens közti kommunikáció eleve platformfüggetlen JSON-soros protokoll legyen (`stage`, `sample`, `total`, `remaining`, `output`, strukturált hiba). A renderlogika közös marad; később egy vékony natív C#/WinUI Windows-kliens épül rá. A GPU-választást általánosítani kell: NVIDIA RTX → OptiX, régebbi NVIDIA → CUDA, AMD → HIP, Intel Arc → oneAPI, Apple Silicon → Metal, végül CPU fallback. Így a két platform csak a natív GUI-ban, Blender-felderítésben, fájltársításban és telepítő/aláírási folyamatban tér el.
- A Cycles bridge elkészült a `tools/cycles/` alatt: a valódi macOS-dropletként fordított `Drop & View Cycles.app` fogad egy vagy több rádobott GLB-t vagy `.dvrender` csomagot, dupla kattintáskor pedig natív többfájlos választót nyit. Az app a naplóhoz Terminalt nyit, majd a `Render with Cycles.command` indítón át futtatja a `render_glb.py` fájlt; Blender UI nélkül importál, Cycles/Metalra áll, denoise-ol és PNG-t ír a bemenet mellé. A Terminal előkészítés közben mozgó aktivitássávot és eltelt időt, render közben pedig Blender-statisztikából származó valódi sample-százalékot és hátralévőidő-becslést mutat; siker után a Finder kijelöli a képet. Sima GLB-nél exporter-metaadat esetén az `asset.extras.dropView.initialView` kameráját és napirányát használja, különben automatikusan keretez. A valódi `demo_house.glb` próbán felismerte az **Apple M1 Max 32-core Metal GPU-t**, a GLB-import kb. 0,67 s volt; az első shaderes futás kb. 1:53, utána a 640 × 360 / 16 samples ellenőrzőkép teljes renderideje kb. 2,6 s. A kép érvényes, az épület, textúrák, üveg, vegetáció és exporter-kamera megjelent.
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
| `index.html`, `css/style.css`, `js/main.js` | Közös UI, Export, képméret-kijelzés, snapshot import/export, worker boot. |
| `js/core/renderer-bootstrap.js`, `js/core/render-worker-mode.js` | Backend-választás és elkülönített WebGL-renderworker mód. |
| `js/ui/material-workbench.js`, `js/ui/workbench-source-maps.js` | Anyagszerkesztés, eredeti GLB-textúraátvétel, UV/transzformációk és mentés. |
| `js/ui/workbench-sphere-preview.js`, `js/ui/workbench-preview-renderer.js`, `webgpu-lab/full-workbench-preview-renderer.js` | Forgatható, backendnek megfelelő gömb. |
| `js/model/glb-material-patch.js` | Eredeti GLB patch-elése, textúrák, UV-k és anyagrekordok mentése. |
| `js/ui/render-station.js`, `js/ui/render-queue.js`, `js/ui/render-queue-store.js` | Export RENDER fül, sor/vezérlés, automatikus letöltés, IndexedDB-megőrzés. |
| `js/view/render-worker.js`, `js/view/render-worker-settings.js`, `js/view/render-frame.js` | Worker-protokoll, takarékosabb GPU-ütemezés, rögzített pixelméret/képarány. |
| `js/core/render-snapshot.js`, `render-job.js`, `render-environment.js`, `environment-source.js`, `render-compatibility.js` | Csomagformátum, célok, HDRI, producer/kompatibilitás. A rövidített nevek mind a `js/core/` alatt vannak. |
| `tools/cycles/` | Rádobós macOS headless Blender/Cycles bridge GLB és `.dvrender` bemenettel. |
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

„Olvasd el a `PROJECT_HANDOFF.md` és `README.md` fájlt, ellenőrizd a `git status -sb` eredményét. A Three.js r187 frissítés elkészült; a valódi Safari LACQUERED/üveg/Workbench/render queue vizuális kontroll még szükséges. A Mini 5K/500 samples próbájának végső eredménye továbbra sem ismert.”

Az átadó tájékozódási pont; a felhasználó frissebb döntéseit, méréseit és a tényleges kódot nem írja felül.
