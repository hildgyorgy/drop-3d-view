# Drop & View – fejlesztői átadó

Állapot: 2026-10-26. Aktuális publikus verzió: **2.0**. Ez a dokumentum az új fejlesztői chat kiindulópontja; a tényleges kód és a tesztek az elsődleges források. A felhasználói működést a [README](README.md) írja le.

## Termék és döntések

- A Drop & View építészek ügyfeleinek szánt, egyszerű **GLB-nézegető**. Nem mérnöki modellező vagy felhős modellhosting szolgáltatás. A saját fájlt a böngésző helyben dolgozza fel.
- Egyetlen app és UI van. A publikus `AUTO` jelenleg **WebGL-t** választ, mert ez a kipróbált vizuális és működési referencia. A WebGPU kézzel a `?rendererDebug=1` nézet infóablakában választható összehasonlításhoz. Ne váltsuk át a publikus alapértelmezést pusztán azért, mert egy WebGPU-funkció már elindul.
- Mindkét motor ugyanazt a **DEMO 1** (`demo/demo_house.glb`) és **DEMO 2** (`demo/demo_house_2.glb`) fájlt használja. Az új exporter már nem készít kettős anyagozást, és a jelenlegi demók nem tartalmaznak `KHR_materials_variants` adatot. A viewer a régebbi, korábban kettős anyaggal exportált GLB-ket továbbra is be tudja olvasni: a publikus nézet az alapanyagot tartja meg, a debug nézet pedig a `Maxon / Redshift PBR` változatot aktiválja, ha van. Ez a kompatibilitási választás a **publikus/debug nézethez**, nem a rendererhez kötött.
- A normál WebGL és WebGPU nézet finom, `0.2` erősségű HDRI környezeti fényt és tükröződést használ, látható HDRI-háttér nélkül. **Ideiglenes iOS hibakeresés (2026-10-27): WebGL-ben a HDRI alapból kikapcsolt, a CONTROLS → HDRI LIGHT kapcsolóval tölthető be és kapcsolható vissza. Újratöltéskor ismét kikapcsolt; a HDRI feldolgozása változatlan.** A nap marad a fő fény; a HDRI fényes pontja az exportált/vezérelt napirányhoz igazodik. A két path tracer saját HDRI-beállítással működik.
- A `WINDOW LIGHTS` az exporter által megjelölt téglalap alakú ablakfényekre épül; alapból kikapcsolt. A régi, üvegeket emisszívvé tevő `GLASS LIGHT` kísérlet rejtett és kikapcsolt marad.
- A WebGL path tracer jelenleg referencia. A WebGPU path tracer minőségét, különösen az üvegen átmenő fény és árnyék esetét, továbbra is azonos modellel és nézettel kell összehasonlítani; nincs késznek nyilvánítva.
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

Az önálló viewer infópaneljéből nyitható **MATERIAL WORKBENCH** egy GLB kiválasztott glTF-anyagának minden előfordulását együtt szerkeszti. SURFACE, POLISHED METAL, LACQUERED és csak exporterrel kijelölt clear glass esetén GLASS mód van. JPEG/PNG szín-, roughness-, OpenGL normal- és ARM-térképeket fogad; a feltöltött textúrák mérete méterben állítható. APPLY előnézet, UNDO az utolsó műveletet vonja vissza, RESET MATERIAL csak a kiválasztott anyagot állítja helyre, SAVE NEW GLB új fájlt tölt le. Az eredeti GLB soha nem módosul. A demókban csak előnézet van, embedben a Workbench nem töltődik be. Az exporter `asset.extras.dropView.materialWorkbench.policy = "disabled"` jelzése letiltja a szerkesztést; hiányzó vagy ismeretlen policy a régi és külső GLB-k kompatibilitása miatt engedélyezett.

Az új textúrákhoz a workbench `TEXCOORD_1` UV-kat ment, az eredeti `TEXCOORD_0` megmarad. Íves felületeken a dobozos leképezés varratot adhat; a már foglalt `TEXCOORD_1` esetén a művelet elutasított. Több node által használt közös mesh azonos világkoordinátás UV-projekcióját a mentés deduplikálja; eltérő projekciót az APPLY célzott hibával elutasít, mert a glTF-mesh csak egy közös UV-készletet tárolhat. A WebGL path tracernek külön, ideiglenes UV-átkötése van. Részletek: [MATERIAL-WORKBENCH](webgpu-lab/MATERIAL-WORKBENCH.md) és [MATERIAL-VARIANTS](webgpu-lab/MATERIAL-VARIANTS.md). A korábbi 1K PBR-demókísérlet receptje archív: [PBR-EXPERIMENT](webgpu-lab/PBR-EXPERIMENT.md).

## Fejlesztés és ellenőrzés

1. `git status -sb` – induláskor nézzük meg az ágat és a helyi módosításokat; a felhasználó commitjait és munkáját őrizzük meg.
2. `python3 -m http.server 8000` a repó gyökerében – helyi nézet. A debug összehasonlításhoz `http://127.0.0.1:8000/?rendererDebug=1&model=demo/demo_house_2.glb`.
3. Forrásmódosítás után `pnpm --dir webgpu-lab install`, majd `pnpm --dir webgpu-lab build:public`. A build **mindkét** generált `renderers/` csomagot frissíti; az új hash-nevű fájlokat és a régiek törlését együtt kell commitolni. Az `index.html` csomag URL-jének `?v=` értékét módosítsuk, ha a belépő `main.js` gyorsítótárát érvényteleníteni kell.
4. `npm test` vagy `node --test`, majd `git diff --check`. A böngészőben külön ellenőrizzük a WebGL és WebGPU normál nézetet, a PATH TRACER-t, a motorváltást betöltött modell és anyagszerkesztés mellett, valamint a SAVE NEW GLB-t. Az automatikus tesztek nem helyettesítik a képi összehasonlítást.

Rögzített csomagverziók a `webgpu-lab/package.json`-ban: Three.js `0.186.0`, `three-gpu-pathtracer` `0.0.27`, `three-mesh-bvh` `0.9.15`, Vite `8.2.2`. A Draco-dekóder szükség esetén CDN-ről töltődik be. A publikus oldal: <https://hildgyorgy.github.io/drop-3d-view/>. A repó kódja saját licencű; a külső összetevők licenceit a README sorolja fel.

## Következő chat kezdete

Javasolt első kérés: „Olvasd el a `PROJECT_HANDOFF.md` és `README.md` fájlt, nézd meg a `git status -sb` eredményét, majd a jelenlegi kódból ellenőrizd az adott feladathoz tartozó részeket.” Az átadó tájékozódási pont, nem írja felül a kódot, a felhasználó új döntéseit vagy a frissebb méréseket.
