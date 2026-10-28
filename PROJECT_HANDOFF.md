# Drop & View – fejlesztői átadó

Állapot: 2026-10-28. Aktuális publikus verzió: **2.0** (`package.json`: `2.0.0`). Ez a dokumentum az új fejlesztői chat kiindulópontja; a tényleges kód és a tesztek az elsődleges források. A felhasználói működést a [README](README.md) írja le.

## Gépváltási pillanatkép

- A kör elején a `main` working tree tiszta volt, a helyi ág a helyben ismert `origin/main` állapotával egyezett. Kiinduló commit: **`49a9f48` – offscreen Render Station**. A Render Station közösen egyeztetett javításai és ez az átadó még commitolatlanok; gépváltás előtt commit és push szükséges.
- Legutóbbi ellenőrzés: **114/114 automatikus teszt sikeres**, mindkét publikus renderer buildje sikeres. A build ismert figyelmeztetései: `three-mesh-bvh` névütközés és nagy chunkok; nem buildhibák.
- Böngészőben ellenőrzött: SECTION be/ki kapcsolása tiltja/engedélyezi az exportot és a magyarázatot; valódi DEMO 1 csomag exportálható. Eltérő appverzióval jelölt tesztcsomagból 256 × 144-es, 1 mintás PNG készült és letölthető volt, a kompatibilitási figyelmeztetés a kész eredménynél is megmaradt.
- A popupba áthelyezett export és beállítások böngészőben ellenőrzöttek: az infópanelen csak a belépő maradt, 173-as TARGET SAMPLES bekerült az exportált csomagba, az export státusza a popupban látszik. A csomagválasztás és a háttérrender az új elrendezésben is sikeres.
- Az export alap mintaszáma 500; a régi, rendercél nélküli csomagok fallbackje is 500. A csomagban explicit mentett cél megmarad. A kiválasztás/drop már csak kijelöl: OPEN PACKAGE IN VIEWER vagy RENDER PACKAGE gombbal kell folytatni. Az OPEN a látható modellt cseréli, helyreállítja az anyagokat, nézetet és renderkeretet/célt, majd bezárja a popupot; automatikus path tracing nincs. A RENDER külön iframe-ben dolgozik, megtartva a látható modellt. Futó háttérrender vagy import közben nincs új kiválasztás/import/indítás.
- Az új OPEN működés böngészőben ellenőrzött: kamera/napállás/csoportok/felbontás/mintacél változatlan újraexportnál; módosított anyagú, 512 × 512-es csomagból napirány- és vetületváltás után is helyes új csomag készült. A kézzel indított path tracer a csomag 1 mintás céljánál megállt. A külön RENDER 256 × 144-es tesztje is elkészült. A pozicionált importvászon a DOM-ban a viewer UI elé kerül, hogy ne takarja el az adaptív kontrasztú vezérlőket; az ortho frustum a renderkeret képarányát követi vetületváltáskor is.
- A Render Station review döntései megvalósultak: közös 1024-es limitek, SECTION-exporttiltás, producer-kompatibilitási jelzések. A render továbbra is 0 mintáról indul. További termékdöntés nincs kijelölve.
- A fejlesztéshez használt helyi HTTP-szervert leállítottuk. A másik gépen Node.js, pnpm és a függőségek helyi telepítése szükséges; a korábbi gép runtime- és Desktop-útvonalaira ne építsünk.

## Termék és döntések

- Új debug-only WebGL funkció az **EXPORT RENDER SNAPSHOT** és a **RENDER STATION**. A `.dvrender` csomag az eredeti GLB-t, Workbench-editjeit és képeit, a nézetállapotot, képméretet és rendercélt viszi át. Választható a látható viewerbe megnyitás továbbszerkesztéshez vagy külön offscreen iframe-ben 0 mintáról PNG-renderelés. Nem hálózati jobküldés és nem korábbi samples folytatása. Csak a háttérrender tartja meg a viewer aktuális modelljét.
- Egyeztetett korlátok: mindkét irányban 1024 erőforrás (a GLB-vel együtt) és 1024 anyagedit, továbbra is 2 GB maximum. SECTION mellett az export tiltott, a Render Station ablakban magyarázattal. Az infópanelen csak a RENDER STATION belépő van; a popup CREATE A RENDER PACKAGE blokkja tartalmazza az exportot és a csomag TARGET SAMPLES beállítását, a rögzített BOUNCES 6 / GLASS 10 jelzéssel. Ezek nem állítják a látható viewer path tracerét. A csomag appverziót, renderer-revíziót és HDRI SHA-256 azonosítót tartalmaz; eltéréskor tartós figyelmeztetés van, a render engedélyezett. Régi, producer-metaadat nélküli csomag továbbra is betölthető, ellenőrizetlen kompatibilitási jelzéssel.
- A `js/core/render-compatibility.js` HDRI-azonosítóját a `backdrop.hdr` cseréjekor frissíteni kell (teszt ellenőrzi a tényleges fájlt). Ha az appverzió változatlan, de a képképzés módosul, a `rendererRevision` értékét emeljük. A renderelő program és a HDRI bájtjai nem részei a csomagnak.

- A Drop & View építészek ügyfeleinek szánt, egyszerű **GLB-nézegető**. Nem mérnöki modellező vagy felhős modellhosting szolgáltatás. A saját fájlt a böngésző helyben dolgozza fel.
- Egyetlen app és UI van. A publikus `AUTO` jelenleg **WebGL-t** választ, mert ez a kipróbált vizuális és működési referencia. A WebGPU kézzel a `?rendererDebug=1` nézet infóablakában választható összehasonlításhoz. Ne váltsuk át a publikus alapértelmezést pusztán azért, mert egy WebGPU-funkció már elindul.
- Mindkét motor ugyanazt a **DEMO 1** (`demo/demo_house.glb`) és **DEMO 2** (`demo/demo_house_2.glb`) fájlt használja. Az új exporter már nem készít kettős anyagozást, és a jelenlegi demók nem tartalmaznak `KHR_materials_variants` adatot. A viewer a régebbi, korábban kettős anyaggal exportált GLB-ket továbbra is be tudja olvasni: a publikus nézet az alapanyagot tartja meg, a debug nézet pedig a `Maxon / Redshift PBR` változatot aktiválja, ha van. Ez a kompatibilitási választás a **publikus/debug nézethez**, nem a rendererhez kötött.
- A normál WebGL és WebGPU nézet finom, `0.2` erősségű HDRI környezeti fényt és tükröződést használ, látható HDRI-háttér nélkül. A nap marad a fő fény; a HDRI fényes pontja az exportált/vezérelt napirányhoz igazodik. Az iPhone-os fekete előnézetet a WebGL-ben is bevezetett ±65504-es half-float korlátozás megoldotta (2026-10-27, felhasználó ellenőrizte). A HDRI induláskor párhuzamosan töltődik, a modell első megjelenítése megvárja a környezetet; a WebGL a PMREM-et is előre elkészíti. Letöltési hiba esetén a modell direkt világítással nyílik meg. A CONTROLS → HDRI LIGHT összehasonlító kapcsoló csak WebGL debug módban látható, alapból bekapcsolt. A két path tracer saját HDRI-beállítással működik.
- A `WINDOW LIGHTS` az exporter által megjelölt téglalap alakú ablakfényekre épül; alapból kikapcsolt. A régi, üvegeket emisszívvé tevő `GLASS LIGHT` kísérlet rejtett és kikapcsolt marad.
- A WebGL path tracer jelenleg referencia. A WebGPU path tracer minőségét, különösen az üvegen átmenő fény és árnyék esetét, továbbra is azonos modellel és nézettel kell összehasonlítani; nincs késznek nyilvánítva.
- A WebGL B/W anyag a végső tónust kizárólag a `reflectedLight.directDiffuse` értékből készíti. A Three.js Lambert anyaga már a scene HDRI-jét is fogadja; ennek derítése a bináris küszöb fölé emelné az önárnyékokat. A közös B/W shader a tömör és az alpha-cutout anyagokra is alkalmazza ezt, az üveg külön anyag marad.
- A WebGL path tracer LACQUERED/clearcoat számításához a `js/view/photo-clearcoat.js` numerikusan stabil GGX/Smith alakot telepít. Safari alatt a függőség eredeti `acos`/`tan` alapú clearcoat-értékelése fekete felületet adott; a javítás megőrzi a lakkréteget és a mentett anyagadatokat. A pinned renderer belső materialjához fér hozzá, ezért függőségfrissítéskor a kompatibilitási teszt és a Safari-vizuális próba kötelező.
- A kamera a PATH TRACER alatt szándékosan zárolt. A nézetet ORIGINAL módban kell beállítani, majd a PATH TRACER-t bekapcsolva hagyni konvergálni; ezt ne oldjuk fel pusztán dokumentációs eltérés miatt.
- Az 1.5 volt a stabilizált viewer mérföldkő; a 2.0 a publikus MATERIAL WORKBENCH kiadása. A Workbench az önálló viewer infópaneljéből érhető el, embedben nem töltődik be. A demók szerkeszthetők, de nem menthetők; saját fájl csak explicit `disabled` exporter-policy hiányában szerkeszthető és menthető.

## Kódtérkép

| Hely | Szerep |
| --- | --- |
| `index.html`, `js/core/renderer-bootstrap.js` | Közös UI, debug renderer-választó, belépés a csomagolt motorokba. |
| `js/main.js`, `js/core/`, `js/model/`, `js/view/`, `js/section/`, `js/ui/` | Közös app-logika: GLB, kamera, csoportok, metszet, anyagok, vezérlés. |
| `webgpu-lab/full-*.js`, `webgpu-lab/vite*.config.js` | WebGPU adapterek és a két motor buildje. A `webgpu-lab` név történeti; nincs külön publikus lab-app. |
| `renderers/webgl/`, `renderers/webgpu/` | Generált, azonos originről kiszolgált publikus JS-csomagok. Kézzel ne szerkesszük. |
| `js/core/backend-handoff.js`, `js/core/session-runtime.js` | Motorváltáskor a fájl bájtjainak, nézetnek és workbench-állapotnak a mentése/visszaállítása. A váltás oldal-újratöltés és egyszer használatos IndexedDB-átadás. |
| `js/view/photo1.js`, `webgpu-lab/full-photo.js` | A két eltérő path tracer adapter. |
| `js/ui/measurements.js`, `js/ui/measurement-scale.js` | Infópanelről kapcsolható kísérleti 3D mérőszalag: felületre húzható két pont, SVG-vetítés és adaptív méterbeosztás. Csak standalone, nincs él-/csúcs-snap vagy GLB-mentés; új modell/rendererváltás törli. |
| `embed/drop-view-embed.js`, `js/core/embed-bridge.js` | Más weboldalba ágyazható nézőke; a GLB a fogadó oldal tárhelyén marad. |

## Anyagok és publikus workbench

Az önálló viewer infópaneljéből kapcsolható **MATERIAL WORKBENCH** egy GLB kiválasztott glTF-anyagának minden előfordulását együtt szerkeszti. SURFACE, POLISHED METAL, LACQUERED és csak exporterrel kijelölt clear glass esetén GLASS mód van. JPEG/PNG szín-, roughness-, OpenGL normal- és ARM-térképeket fogad; a feltöltött textúrák mérete méterben állítható. APPLY előnézet, UNDO az utolsó műveletet vonja vissza, RESET csak a kiválasztott anyagot állítja helyre, SAVE AS új GLB-fájlt tölt le. Az eredeti GLB soha nem módosul. A demókban csak előnézet van, embedben a Workbench nem töltődik be. Az exporter `asset.extras.dropView.materialWorkbench.policy = "disabled"` jelzése letiltja a szerkesztést; hiányzó vagy ismeretlen policy a régi és külső GLB-k kompatibilitása miatt engedélyezett. Tiltott fájlnál a menüpont látható marad, de a szerkesztő helyett az editable verzió tulajdonostól való kérését jelzi.

Az infópanel a mockup szerinti SUPPORT, Experimental features és Design credits blokkokat használja. A Workbench és a Measurements sora valódi kétállapotú kapcsoló: aktív állapotban piros pötty, ismét kattintva kikapcsol. A kapcsolás nem zárja be az infópanelt; az `i` vagy mellékattintás bezárja. A Workbench keskeny, kompakt panel, fejlécében EXIT; demónál közvetlenül a cím alatt állandó preview-only felirat. A kezdeti kijelölési szöveg `CLICK A SURFACE`.

Az új textúrákhoz a workbench `TEXCOORD_1` UV-kat ment, az eredeti `TEXCOORD_0` megmarad. Íves felületeken a dobozos leképezés varratot adhat; a már foglalt `TEXCOORD_1` esetén a művelet elutasított. Több node által használt közös mesh azonos világkoordinátás UV-projekcióját a mentés deduplikálja; eltérő projekciót az APPLY célzott hibával elutasít, mert a glTF-mesh csak egy közös UV-készletet tárolhat. A WebGL path tracernek külön, ideiglenes UV-átkötése van. Részletek: [MATERIAL-WORKBENCH](webgpu-lab/MATERIAL-WORKBENCH.md) és [MATERIAL-VARIANTS](webgpu-lab/MATERIAL-VARIANTS.md). A korábbi 1K PBR-demókísérlet receptje archív: [PBR-EXPERIMENT](webgpu-lab/PBR-EXPERIMENT.md).

## Mérőszalag – az első változat határai

- Az infópanel **MEASUREMENTS** kapcsolója egyetlen, két fekete fogópöttyből álló mérőszalagot mutat. A végpontokat a látható modellfelületekre húzva a két világkoordináta közötti egyenes 3D-távolságot írja ki méterben, két tizedessel. A pontosság a GLB léptékétől és a kézi pontelhelyezéstől függ; jelenleg nincs él-/csúcs-snap.
- A piros SVG-vonalzó valódi térbeli osztásokat vetít a képre, adaptív sűrűséggel. A pontok orbit/zoom/projekcióváltás közben a modellen maradnak. A fogópötty húzása idejére a kameravezérlés és a damping-frissítés szünetel; az eredeti vezérlési állapot visszaállításánál a PATH TRACER és FLY zárolását tiszteletben tartja.
- Üres tér fölött az utolsó érvényes pont marad meg. A raycast a rejtett csoportokat és a metszettel levágott részeket kizárja. Ha a már lerakott pont csoportját elrejtjük vagy metszettel levágjuk, a mérőszalag elrejtőzik és visszaállítási útmutatást mutat.
- Ki-/bekapcsolás megőrzi a pontokat. Új modell, oldalfrissítés vagy rendererváltás törli őket. A mérés nem része a GLB-mentésnek vagy a renderer-handoffnak. Embedben a modul nem töltődik be, a kapcsoló rejtett.
- Élőben mindkét demón ellenőriztük a pontok húzását és a kijelzést; az első demón a kameraforgatás és a ki-/bekapcsolás is ellenőrzött. Az érintéses használathoz pointer capture és nagyobb láthatatlan fogóterület készült, de külön mobil/eszközteszt még indokolt.

## Safari LACQUERED regresszió – ellenőrzési támpont

A hiba a felhasználó szerint mindkét demón kizárólag LACQUERED anyagnál, WebGL PATH TRACER-ben jelentkezett. Natív Safariban a DEMO 1 betonanyagát LACQUERED-re állítva a fehér keret és járda fekete lett; a javított shaderrel világos maradt. Másik tesztböngészőben az eredeti shader sem reprodukálta a feketedést. A javítás nem az UV-átkötést módosítja és nem kapcsolja ki a clearcoatot, hanem a clearcoat GGX/Smith kiértékelését stabilabb koszinuszos alakra cseréli.

A `87f6416` commit 2026-10-25-én a path tracert a `894bf9b8…` fejlesztői commitról a kiadott `0.0.27` verzióra váltotta. Ez lehetséges regressziós határ, de a régi és új függőség azonos Safari-próbája nem történt meg, ezért ne állítsuk bizonyított eredetnek. A `photo-clearcoat.test.js` a csomagolt függőség shaderéhez való illeszkedést és a többi BSDF-ág megőrzését ellenőrzi; a Safari GPU-s megjelenését automatikusan nem teszteli.

## Kapcsolódó, külön repó

Az app-support oldal a **külön `app-support` repó** `drop-view/index.html` fájlja; a fő viewer repó commitja ezt nem viszi át. Utolsó ellenőrzéskor ez a repó is tiszta volt (`66bebf8`). A 2.0/Workbench tájékoztató korábban frissült; a mérőszalag támogatási oldalon történő bemutatása ebben a körben nem készült el. A felhasználói mockupok és az exporter két policy-fixture-je a korábbi gép Desktopján voltak, nem verziózott tesztassetek.

## Fejlesztés és ellenőrzés

1. `git status -sb` – induláskor nézzük meg az ágat és a helyi módosításokat; a felhasználó commitjait és munkáját őrizzük meg.
2. `python3 -m http.server 8000` a repó gyökerében – helyi nézet. A debug összehasonlításhoz `http://127.0.0.1:8000/?rendererDebug=1&model=demo/demo_house_2.glb`.
3. Forrásmódosítás után `pnpm --dir webgpu-lab install`, majd `pnpm --dir webgpu-lab build:public`. A build **mindkét** generált `renderers/` csomagot frissíti; az új hash-nevű fájlokat és a régiek törlését együtt kell commitolni. Az `index.html` csomag URL-jének `?v=` értékét módosítsuk, ha a belépő `main.js` gyorsítótárát érvényteleníteni kell.
4. `npm test` vagy `node --test`, majd `git diff --check`. A böngészőben külön ellenőrizzük a WebGL és WebGPU normál nézetet, a PATH TRACER-t, a motorváltást betöltött modell és anyagszerkesztés mellett, valamint a SAVE NEW GLB-t. Az automatikus tesztek nem helyettesítik a képi összehasonlítást.

Rögzített csomagverziók a `webgpu-lab/package.json`-ban: Three.js `0.186.0`, `three-gpu-pathtracer` `0.0.27`, `three-mesh-bvh` `0.9.15`, Vite `8.2.2`. A Draco-dekóder szükség esetén CDN-ről töltődik be. A publikus oldal: <https://hildgyorgy.github.io/drop-3d-view/>. A repó kódja saját licencű; a külső összetevők licenceit a README sorolja fel.

## Következő chat kezdete

Javasolt első kérés: „Olvasd el a `PROJECT_HANDOFF.md` és `README.md` fájlt, nézd meg a `git status -sb` eredményét, majd a jelenlegi kódból ellenőrizd az adott feladathoz tartozó részeket.” Az átadó tájékozódási pont, nem írja felül a kódot, a felhasználó új döntéseit vagy a frissebb méréseket.
