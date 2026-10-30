const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["./HDRLoader-iB2FbNUJ.js","./three.module-BkE-sxXa.js"])))=>i.map(i=>d[i]);
import{At as e,Nt as t,X as n,Xt as r,Zt as i,bn as a,ct as o,dt as ee,ft as s,hn as c,ht as te,n as l,pt as u,r as d,yn as f}from"./three.module-BkE-sxXa.js";import{d as p,f as m,l as ne,t as h,u as g}from"./state-UxKuywPJ.js";var re=document.querySelector(`#startScreen`),ie=document.querySelector(`#showAllButton`),ae=document.querySelector(`#groupMenu`),oe=document.querySelector(`#groupMenuButton`),se=document.querySelector(`#groupList`),ce=document.querySelector(`#showAllGroupsButton`),_=document.querySelector(`#hideAllGroupsButton`),le=document.querySelector(`#openButton`),ue=document.querySelector(`#demoButton`),de=document.querySelector(`#demo2Button`),fe=document.querySelector(`#openAgain`),pe=document.querySelector(`#fileInput`),me=document.querySelector(`#sidePanel`),he=document.querySelector(`#panelButton`),ge=document.querySelector(`#perspectiveButton`),_e=document.querySelector(`#axonButton`),ve=document.querySelector(`#orthoButton`),ye=document.querySelector(`#orthoMenu`),be=document.querySelector(`#sectionMenu`),xe=document.querySelector(`#sectionMenuButton`),Se=document.querySelector(`#sectionButton`),v=document.querySelector(`#sunAngle`),y=document.querySelector(`#sunHeight`),b=document.querySelector(`#shadowToggle`),x=document.querySelector(`#cameraFov`),S=document.querySelector(`#transparency`),C=document.querySelector(`#windowLightsToggle`),w=document.querySelector(`#windowLightsIntensity`),T=document.querySelector(`#photo1Button`),E=document.querySelector(`#lightSection`),D=document.querySelector(`#sectionSlider`),O=document.querySelector(`#sectionFlip`),k=document.querySelector(`#sectionDebug`),A=document.querySelector(`#sectionFill`),j=document.querySelectorAll(`[data-section-color]`),Ce=document.querySelector(`#sectionDebugStats`),we=document.querySelector(`#status`),Te=document.querySelector(`#modelStats`),Ee=document.querySelector(`#materialList`),De=document.querySelector(`#elementTypeList`),Oe=document.querySelector(`#retainedControls`);function M(e){let t=Number(e?.transmission);return!!(e?.isMeshPhysicalMaterial&&Number.isFinite(t)&&t>0)}function ke(e){return M(e)&&e.userData?.archicad?.clearGlassOverride===!0}var Ae=/(?:glass|glazing|window|crystal|verre|vitre|üveg)/i;function N(e){return!!(e&&Number(e.alphaTest)>0&&(e.map||e.alphaMap)&&!(Number(e.transmission)>0))}function je(e){return M(e)?(e.opacity=1,e.transparent=!1,e.depthWrite=!0,e.needsUpdate=!0,!0):!1}function Me(e,t){return!M(e)||!t?!1:(t.transmission=0,t.transparent=!0,t.opacity=.5,t.depthWrite=!1,t.needsUpdate=!0,!0)}function Ne(e,t=30,n=85){let r=Math.max(1,n-t);return .86+.12*Math.min(1,Math.max(0,(Number(e)-t)/r))}function Pe(e){if(!e||M(e))return!1;let t=Ae.test(e.name||``),n=Number(e.opacity),r=Number(e.transmission),i=Number.isFinite(n)&&n<.999||Number.isFinite(r)&&r>0,a=e.transparent&&e.map&&!t;return(t||i)&&!e.alphaMap&&!(e.alphaTest>0)&&!a}function Fe(e){let t=e?.directionToSun;if(!Array.isArray(t)||t.length!==3||!t.every(Number.isFinite))return null;let n=Math.hypot(...t);if(!Number.isFinite(n)||n<1e-6)return null;let r=t.map(e=>e/n);return r[1]>0?r:null}function Ie(e){return{azimuth:(Math.atan2(e[2],e[0])*180/Math.PI+360)%360,height:Math.asin(Math.min(1,Math.max(-1,e[1])))*180/Math.PI}}function Le(e,t,n,r){let i=((e+.5)/n-.5)*Math.PI*2,a=Math.PI/2-(t+.5)/r*Math.PI,o=Math.cos(a);return[Math.cos(i)*o,Math.sin(a),Math.sin(i)*o]}d.line={worldUnits:{value:1},linewidth:{value:1},resolution:{value:new f},dashOffset:{value:0},dashScale:{value:1},dashSize:{value:1},gapSize:{value:1}},l.line={uniforms:c.merge([d.common,d.fog,d.line]),vertexShader:`
		#include <common>
		#include <color_pars_vertex>
		#include <fog_pars_vertex>
		#include <logdepthbuf_pars_vertex>
		#include <clipping_planes_pars_vertex>

		uniform float linewidth;
		uniform vec2 resolution;

		attribute vec3 instanceStart;
		attribute vec3 instanceEnd;

		attribute vec3 instanceColorStart;
		attribute vec3 instanceColorEnd;

		#ifdef WORLD_UNITS

			varying vec4 worldPos;
			varying vec3 worldStart;
			varying vec3 worldEnd;

			#ifdef USE_DASH

				varying vec2 vUv;

			#endif

		#else

			varying vec2 vUv;

		#endif

		#ifdef USE_DASH

			uniform float dashScale;
			attribute float instanceDistanceStart;
			attribute float instanceDistanceEnd;
			varying float vLineDistance;

		#endif

		float trimSegmentAlpha( const in vec4 start, const in vec4 end ) {

			// compute the interpolation factor needed to trim the segment so it terminates
			// between the camera plane and the near plane

			// conservative estimate of the near plane
			float a = projectionMatrix[ 2 ][ 2 ]; // 3nd entry in 3th column
			float b = projectionMatrix[ 3 ][ 2 ]; // 3nd entry in 4th column

			// we need different nearEstimate formula for reversed and default depth buffer
			// a is positive with a reversed depth buffer so it can be used for controlling the code flow
			float nearEstimate = ( a > 0.0 ) ? ( - b / ( a + 1.0 ) ) : ( - 0.5 * b / a );

			return ( nearEstimate - start.z ) / ( end.z - start.z );

		}

		void main() {

			#ifdef USE_COLOR

				vColor.xyz = ( position.y < 0.5 ) ? instanceColorStart : instanceColorEnd;

			#endif

			float aspect = resolution.x / resolution.y;

			// camera space
			vec4 start = modelViewMatrix * vec4( instanceStart, 1.0 );
			vec4 end = modelViewMatrix * vec4( instanceEnd, 1.0 );

			#ifdef USE_DASH

				float lineDistanceStart = dashScale * instanceDistanceStart;
				float lineDistanceEnd = dashScale * instanceDistanceEnd;

			#endif

			#ifdef WORLD_UNITS

				worldStart = start.xyz;
				worldEnd = end.xyz;

			#else

				vUv = uv;

			#endif

			// special case for perspective projection, and segments that terminate either in, or behind, the camera plane
			// clearly the gpu firmware has a way of addressing this issue when projecting into ndc space
			// but we need to perform ndc-space calculations in the shader, so we must address this issue directly
			// perhaps there is a more elegant solution -- WestLangley

			bool perspective = ( projectionMatrix[ 2 ][ 3 ] == - 1.0 ); // 4th entry in the 3rd column

			if ( perspective ) {

				if ( start.z < 0.0 && end.z >= 0.0 ) {

					float alpha = trimSegmentAlpha( start, end );
					end.xyz = mix( start.xyz, end.xyz, alpha );

					#ifdef USE_DASH

						lineDistanceEnd = mix( lineDistanceStart, lineDistanceEnd, alpha );

					#endif

				} else if ( end.z < 0.0 && start.z >= 0.0 ) {

					float alpha = trimSegmentAlpha( end, start );
					start.xyz = mix( end.xyz, start.xyz, alpha );

					#ifdef USE_DASH

						lineDistanceStart = mix( lineDistanceEnd, lineDistanceStart, alpha );

					#endif

				}

			}

			#ifdef USE_DASH

				vLineDistance = ( position.y < 0.5 ) ? lineDistanceStart : lineDistanceEnd;
				vUv = uv;

			#endif

			// clip space
			vec4 clipStart = projectionMatrix * start;
			vec4 clipEnd = projectionMatrix * end;

			// ndc space
			vec3 ndcStart = clipStart.xyz / clipStart.w;
			vec3 ndcEnd = clipEnd.xyz / clipEnd.w;

			// direction
			vec2 dir = ndcEnd.xy - ndcStart.xy;

			// account for clip-space aspect ratio
			dir.x *= aspect;
			dir = normalize( dir );

			#ifdef WORLD_UNITS

				vec3 worldDir = normalize( end.xyz - start.xyz );
				vec3 tmpFwd = perspective ? normalize( mix( start.xyz, end.xyz, 0.5 ) ) : vec3( 0.0, 0.0, - 1.0 );
				vec3 worldUp = normalize( cross( worldDir, tmpFwd ) );
				vec3 worldFwd = cross( worldDir, worldUp );
				worldPos = position.y < 0.5 ? start: end;

				// height offset
				float hw = linewidth * 0.5;
				worldPos.xyz += position.x < 0.0 ? hw * worldUp : - hw * worldUp;

				// don't extend the line if we're rendering dashes because we
				// won't be rendering the endcaps
				#ifndef USE_DASH

					// cap extension
					worldPos.xyz += position.y < 0.5 ? - hw * worldDir : hw * worldDir;

					// add width to the box
					worldPos.xyz += worldFwd * hw;

					// endcaps
					if ( position.y > 1.0 || position.y < 0.0 ) {

						worldPos.xyz -= worldFwd * 2.0 * hw;

					}

				#endif

				// project the worldpos
				vec4 clip = projectionMatrix * worldPos;

				// shift the depth of the projected points so the line
				// segments overlap neatly
				vec3 clipPose = ( position.y < 0.5 ) ? ndcStart : ndcEnd;

				// only shift the depth of vertices in front of the camera (#35137)
				if ( clip.w > 0.0 ) clip.z = clipPose.z * clip.w;

			#else

				vec2 offset = vec2( dir.y, - dir.x );
				// undo aspect ratio adjustment
				dir.x /= aspect;
				offset.x /= aspect;

				// sign flip
				if ( position.x < 0.0 ) offset *= - 1.0;

				// endcaps
				if ( position.y < 0.0 ) {

					offset += - dir;

				} else if ( position.y > 1.0 ) {

					offset += dir;

				}

				// adjust for linewidth
				offset *= linewidth;

				// adjust for clip-space to screen-space conversion // maybe resolution should be based on viewport ...
				offset /= resolution.y;

				// select end
				vec4 clip = ( position.y < 0.5 ) ? clipStart : clipEnd;

				// back to clip space
				offset *= clip.w;

				clip.xy += offset;

			#endif

			gl_Position = clip;

			vec4 mvPosition = ( position.y < 0.5 ) ? start : end; // this is an approximation

			#include <logdepthbuf_vertex>
			#include <clipping_planes_vertex>
			#include <fog_vertex>

		}
		`,fragmentShader:`
		uniform vec3 diffuse;
		uniform float opacity;
		uniform float linewidth;

		#ifdef USE_DASH

			uniform float dashOffset;
			uniform float dashSize;
			uniform float gapSize;

		#endif

		varying float vLineDistance;

		#ifdef WORLD_UNITS

			varying vec4 worldPos;
			varying vec3 worldStart;
			varying vec3 worldEnd;

			#ifdef USE_DASH

				varying vec2 vUv;

			#endif

		#else

			varying vec2 vUv;

		#endif

		#include <common>
		#include <color_pars_fragment>
		#include <fog_pars_fragment>
		#include <logdepthbuf_pars_fragment>
		#include <clipping_planes_pars_fragment>

		vec2 closestLineToLine(vec3 p1, vec3 p2, vec3 p3, vec3 p4) {

			float mua;
			float mub;

			vec3 p13 = p1 - p3;
			vec3 p43 = p4 - p3;

			vec3 p21 = p2 - p1;

			float d1343 = dot( p13, p43 );
			float d4321 = dot( p43, p21 );
			float d1321 = dot( p13, p21 );
			float d4343 = dot( p43, p43 );
			float d2121 = dot( p21, p21 );

			float denom = d2121 * d4343 - d4321 * d4321;

			float numer = d1343 * d4321 - d1321 * d4343;

			mua = numer / denom;
			mua = clamp( mua, 0.0, 1.0 );
			mub = ( d1343 + d4321 * ( mua ) ) / d4343;
			mub = clamp( mub, 0.0, 1.0 );

			return vec2( mua, mub );

		}

		void main() {

			float alpha = opacity;
			vec4 diffuseColor = vec4( diffuse, alpha );

			#include <clipping_planes_fragment>

			#ifdef USE_DASH

				if ( vUv.y < - 1.0 || vUv.y > 1.0 ) discard; // discard endcaps

				if ( mod( vLineDistance + dashOffset, dashSize + gapSize ) > dashSize ) discard; // todo - FIX

			#endif

			#ifdef WORLD_UNITS

				float len;

				if ( isOrthographic ) {

					// View rays are parallel to the z axis so the distance reduces to camera-space XY
					vec2 lineDir = worldEnd.xy - worldStart.xy;
					float t = clamp( dot( worldPos.xy - worldStart.xy, lineDir ) / dot( lineDir, lineDir ), 0.0, 1.0 );
					len = length( worldStart.xy + lineDir * t - worldPos.xy );

				} else {

					// Find the closest points on the view ray and the line segment
					vec3 rayEnd = normalize( worldPos.xyz ) * 1e5;
					vec3 lineDir = worldEnd - worldStart;
					vec2 params = closestLineToLine( worldStart, worldEnd, vec3( 0.0, 0.0, 0.0 ), rayEnd );

					vec3 p1 = worldStart + lineDir * params.x;
					vec3 p2 = rayEnd * params.y;
					vec3 delta = p1 - p2;
					len = length( delta );

				}

				float norm = len / linewidth;

				#ifndef USE_DASH

					#ifdef USE_ALPHA_TO_COVERAGE

						float dnorm = fwidth( norm );
						alpha = 1.0 - smoothstep( 0.5 - dnorm, 0.5 + dnorm, norm );

					#else

						if ( norm > 0.5 ) {

							discard;

						}

					#endif

				#endif

			#else

				#ifdef USE_ALPHA_TO_COVERAGE

					// artifacts appear on some hardware if a derivative is taken within a conditional
					float a = vUv.x;
					float b = ( vUv.y > 0.0 ) ? vUv.y - 1.0 : vUv.y + 1.0;
					float len2 = a * a + b * b;
					float dlen = fwidth( len2 );

					if ( abs( vUv.y ) > 1.0 ) {

						alpha = 1.0 - smoothstep( 1.0 - dlen, 1.0 + dlen, len2 );

					}

				#else

					if ( abs( vUv.y ) > 1.0 ) {

						float a = vUv.x;
						float b = ( vUv.y > 0.0 ) ? vUv.y - 1.0 : vUv.y + 1.0;
						float len2 = a * a + b * b;

						if ( len2 > 1.0 ) discard;

					}

				#endif

			#endif

			#include <logdepthbuf_fragment>
			#include <color_fragment>

			gl_FragColor = vec4( diffuseColor.rgb, alpha );

			#include <tonemapping_fragment>
			#include <colorspace_fragment>
			#include <fog_fragment>
			#include <premultiplied_alpha_fragment>

		}
		`};var P=class extends r{constructor(e){super({type:`LineMaterial`,uniforms:c.clone(l.line.uniforms),vertexShader:l.line.vertexShader,fragmentShader:l.line.fragmentShader,clipping:!0}),this.isLineMaterial=!0,this.setValues(e)}get color(){return this.uniforms.diffuse.value}set color(e){this.uniforms.diffuse.value=e}get worldUnits(){return`WORLD_UNITS`in this.defines}set worldUnits(e){e===!0!==this.worldUnits&&(this.needsUpdate=!0),e===!0?this.defines.WORLD_UNITS=``:delete this.defines.WORLD_UNITS}get linewidth(){return this.uniforms.linewidth.value}set linewidth(e){this.uniforms.linewidth&&(this.uniforms.linewidth.value=e)}get dashed(){return`USE_DASH`in this.defines}set dashed(e){e===!0!==this.dashed&&(this.needsUpdate=!0),e===!0?this.defines.USE_DASH=``:delete this.defines.USE_DASH}get dashScale(){return this.uniforms.dashScale.value}set dashScale(e){this.uniforms.dashScale.value=e}get dashSize(){return this.uniforms.dashSize.value}set dashSize(e){this.uniforms.dashSize.value=e}get dashOffset(){return this.uniforms.dashOffset.value}set dashOffset(e){this.uniforms.dashOffset.value=e}get gapSize(){return this.uniforms.gapSize.value}set gapSize(e){this.uniforms.gapSize.value=e}get opacity(){return this.uniforms.opacity.value}set opacity(e){this.uniforms&&(this.uniforms.opacity.value=e)}get resolution(){return this.uniforms.resolution.value}set resolution(e){this.uniforms.resolution.value.copy(e)}get alphaToCoverage(){return`USE_ALPHA_TO_COVERAGE`in this.defines}set alphaToCoverage(e){this.defines&&(e===!0!==this.alphaToCoverage&&(this.needsUpdate=!0),e===!0?this.defines.USE_ALPHA_TO_COVERAGE=``:delete this.defines.USE_ALPHA_TO_COVERAGE)}},F=new te({color:16250868,roughness:.88,metalness:0,side:2}),I=new WeakMap,L=new Set;function R(e){if(!e?.clone)return F;let t=I.get(e);if(t)return t;let n=e.clone();n.color&&n.color.set(16250868),n.emissive&&n.emissive.set(0),`roughness`in n&&(n.roughness=.88),`metalness`in n&&(n.metalness=0),Me(e,n),n.emissiveMap=null;let r=n.customProgramCacheKey(),i=n.onBeforeCompile;return n.onBeforeCompile=function(e,t){i.call(this,e,t),e.fragmentShader=e.fragmentShader.replace(`#include <map_fragment>`,`
          #include <map_fragment>
          diffuseColor.rgb = vec3(
            0.9301,
            0.9301,
            0.9110
          );
          `)},n.customProgramCacheKey=()=>`${r}|drop-view-white-alpha-preserving-1`,n.needsUpdate=!0,I.set(e,n),L.add(n),n}function Re(e){return L.has(e)}function ze(){L.forEach(e=>e.dispose()),L.clear()}var Be=new s({color:1118481,wireframe:!0,side:2}),Ve=new n({color:1118481}),He=new s({color:16726832,side:2,depthWrite:!0,depthTest:!0,toneMapped:!1}),Ue=new n({color:60159,depthTest:!1,depthWrite:!1,toneMapped:!1}),We=new P({color:16726832,linewidth:1,worldUnits:!1,vertexColors:!1,dashed:!1,alphaToCoverage:!0,transparent:!1,depthTest:!1,depthWrite:!1});function z(e){return new t({color:e,size:6,sizeAttenuation:!1,depthTest:!1,depthWrite:!1,toneMapped:!1})}var Ge=z(2152811),Ke=z(16722731),qe=z(16711892),B=new u({color:16777215,emissive:0,side:2});B.onBeforeCompile=e=>{e.fragmentShader=e.fragmentShader.replace(`#include <map_fragment>`,`#include <map_fragment>
 diffuseColor.rgb = vec3(1.0);`),e.fragmentShader=e.fragmentShader.replace(`#include <envmap_fragment>`,`outgoingLight = reflectedLight.directDiffuse;`),e.fragmentShader=e.fragmentShader.replace(`#include <dithering_fragment>`,`

        /*
           Csak két tónus létezhet.

           A direkt napfény + shadow map eredményéből
           készítünk fekete/fehér grafikát.
        */

        float dvLuma =
          dot(
            gl_FragColor.rgb,
            vec3(
              0.2126,
              0.7152,
              0.0722
            )
          );


        /*
           Küszöb.

           Alacsony érték:
           csak az igazi árnyék lesz fekete.

           Magasabb érték:
           grafikusabb, több fekete felület.

           Első próbára 0.24.
        */

        float dvBW =
          step(
            0.24,
            dvLuma
          );


        gl_FragColor =
          vec4(
            vec3(dvBW),
            1.0
          );


        #include <dithering_fragment>

        `)},B.customProgramCacheKey=()=>`drop-view-renaissance-1.3`;var V=new Map,H=new Set;function Je(e){let t=V.get(e);if(t)return t;let n=new u({color:16777215,map:e.map??null,alphaMap:e.alphaMap??null,alphaTest:Number(e.alphaTest)>0?Number(e.alphaTest):.5,opacity:e.opacity??1,side:2});return n.onBeforeCompile=B.onBeforeCompile,n.customProgramCacheKey=()=>`drop-view-renaissance-cutout-1.3`,V.set(e,n),H.add(n),n}function Ye(e){return H.has(e)}function Xe({disposeTextures:e=!1}={}){let t=new Set;for(let n of H)e&&(n.map&&t.add(n.map),n.alphaMap&&t.add(n.alphaMap)),n.dispose();for(let e of t)e.dispose();V.clear(),H.clear()}var U=new s({color:16777215,transparent:!0,opacity:.18,side:2,depthWrite:!1,toneMapped:!1});function W(e){if(!e)return!1;let t=Number(e.opacity),n=Number(e.transmission);return Number.isFinite(t)&&t<.999||Number.isFinite(n)&&n>0}function Ze(e,t,n=null){if(e&&W(e)){if(je(e)){Number.isFinite(n)&&(e.transmission=n);return}e.transparent=!0,e.opacity=t,e.depthWrite=!1,`roughness`in e&&(e.roughness=.16),`metalness`in e&&(e.metalness=.02),`shininess`in e&&(e.shininess=90),e.needsUpdate=!0}}function Qe(e){return Array.isArray(e)?e.map(e=>R(e)):R(e)}function G(e){return Array.isArray(e)?e.map(G):N(e)?Je(e):W(e)?U:B}function $e(e){return(Array.isArray(e)?e:[e]).some(N)}function et(e){let t=Array.isArray(e)?e:[e];return t.length>0&&t.every(W)}function tt(){h.ground&&g.remove(h.ground);let t=new e(h.maxModelSize*10,h.maxModelSize*10),n=new i({color:0,opacity:.18});h.ground=new ee(t,n),h.ground.rotation.x=-Math.PI/2,h.ground.position.set(h.modelCenter.x,.001,h.modelCenter.z),h.ground.receiveShadow=!0,g.add(h.ground)}v.addEventListener(`input`,q),y.addEventListener(`input`,q);function K(){let e=o.degToRad(Number(v.value)),t=o.degToRad(Number(y.value)),n=Math.cos(t);return new a(Math.cos(e)*n,Math.sin(t),Math.sin(e)*n)}function q(){if(!h.model)return;let e=K(),t=h.maxModelSize*3;p.position.copy(h.modelCenter).addScaledVector(e,t),p.target.position.copy(h.modelCenter),p.target.updateMatrixWorld(),p.updateMatrixWorld();let n=h.maxModelSize*.9;p.shadow.camera.left=-n,p.shadow.camera.right=n,p.shadow.camera.top=n,p.shadow.camera.bottom=-n,p.shadow.camera.near=h.maxModelSize*.01,p.shadow.camera.far=h.maxModelSize*8,p.shadow.camera.updateProjectionMatrix()}function nt(e){h.exportedSun=e??null,h.hasImportedSun=!1;let t=Fe(e);if(!t||!h.model)return!1;let n=new a(...t).transformDirection(h.model.matrixWorld);if(![n.x,n.y,n.z].every(Number.isFinite)||n.y<=0)return!1;let{azimuth:r,height:i}=Ie(n.toArray());return v.value=String(r),y.min=String(Math.min(5,Math.floor(i))),y.max=String(Math.max(85,Math.ceil(i))),y.value=String(i),h.hasImportedSun=!0,q(),!0}b.addEventListener(`change`,()=>{ne.shadowMap.enabled=b.checked,p.castShadow=b.checked,h.ground&&(h.ground.visible=b.checked),B.needsUpdate=!0});var rt=268435456,it=33554432;function J(e){if(!e||typeof e.name!=`string`||e.name.length>255||!/^[^\\/\x00-\x1f]{1,255}\.hdr$/i.test(e.name)||!(e.bytes instanceof ArrayBuffer)||e.bytes.byteLength>rt)throw Error(`Invalid packaged HDRI`);let t=new TextDecoder().decode(e.bytes.slice(0,32768)),n=/\n-Y\s+(\d+)\s+\+X\s+(\d+)\s*\n/.exec(t);if(!/^#\?(RADIANCE|RGBE)\r?\n/.test(t)||!/\nFORMAT=32-bit_rle_rgbe\s*\n/.test(t)||!n)throw Error(`Invalid packaged HDRI header`);let r=Number(n[1]),i=Number(n[2]);if(!Number.isSafeInteger(i)||!Number.isSafeInteger(r)||i<1||r<1||i>16384||r>16384||i*r>it||e.bytes.byteLength<n.index+n[0].length+4)throw Error(`Invalid packaged HDRI dimensions or data`);return e}var Y=null,X=null;function Z(){return{url:X??new URL(`assets/hdri/backdrop.hdr`,document.baseURI).href,embedded:!!Y}}function Q(){return Y?{name:Y.name,bytes:Y.bytes.slice(0)}:null}function at(e){e&&J(e);let t=e?{name:e.name,bytes:e.bytes.slice(0)}:null,n=t?URL.createObjectURL(new Blob([t.bytes],{type:`image/vnd.radiance`})):null,r=X;Y=t,X=n,r&&URL.revokeObjectURL(r)}async function ot(){let e=Z(),t=Q();if(!t){let n=await fetch(e.url);if(!n.ok)throw Error(`HDRI could not be packaged (${n.status})`);t={name:`backdrop.hdr`,bytes:await n.arrayBuffer()}}if(J(t),Z().url!==e.url)throw Error(`The scene environment changed during export`);return t}async function $(e){let t=await crypto.subtle.digest(`SHA-256`,e.bytes);return`sha256:${[...new Uint8Array(t)].map(e=>e.toString(16).padStart(2,`0`)).join(``)}`}async function st(e,t){if(!e)return;if(J(e),t?.hdriId?.startsWith(`sha256:`)&&await $(e)!==t.hdriId)throw Error(`The packaged HDRI does not match its recorded identity`);let[{HDRLoader:n},{FloatType:r}]=await Promise.all([m(()=>import(`./HDRLoader-iB2FbNUJ.js`),__vite__mapDeps([0,1]),import.meta.url),m(()=>import(`./three.module-BkE-sxXa.js`).then(e=>e.a),[],import.meta.url)]),i=new n().setDataType(r).parse(e.bytes);if(!i?.data?.length||i.data.length!==i.width*i.height*4)throw Error(`The packaged HDRI has incomplete pixel data`)}export{le as $,We as A,x as B,U as C,S as Ct,Ke as D,qe as E,M as F,se as G,ue as H,ke as I,_ as J,ae as K,Pe as L,Be as M,P as N,Ge as O,Le as P,fe as Q,Ne as R,Re as S,y as St,He as T,C as Tt,De as U,de as V,pe as W,Ee as X,E as Y,Te as Z,Qe as _,ce as _t,at as a,Oe as at,Ye as b,we as bt,nt as c,k as ct,K as d,O as dt,ve as et,Ze as f,be as ft,G as g,ie as gt,Ve as h,b as ht,Q as i,T as it,F as j,Ue as k,q as l,Ce as lt,ze as m,D as mt,$ as n,he as nt,st as o,Se as ot,Xe as p,xe as pt,oe as q,Z as r,ge as rt,J as s,j as st,ot as t,ye as tt,tt as u,A as ut,$e as v,me as vt,B as w,w as wt,W as x,v as xt,et as y,re as yt,_e as z};