import{$ as e,Ln as t,Pt as n,Rn as r,er as i,ft as a,gt as o,ht as s,jt as ee,lr as te,ur as c,xt as l,yt as u}from"./three.core-BB-PrPBP.js";import{d,g as f,h as p,l as m,t as h,u as g}from"./state-r9KntMGo.js";var ne=document.querySelector(`#startScreen`),re=document.querySelector(`#showAllButton`),ie=document.querySelector(`#groupMenu`),ae=document.querySelector(`#groupMenuButton`),oe=document.querySelector(`#groupList`),se=document.querySelector(`#showAllGroupsButton`),ce=document.querySelector(`#hideAllGroupsButton`),le=document.querySelector(`#openButton`),ue=document.querySelector(`#demoButton`),de=document.querySelector(`#demo2Button`),fe=document.querySelector(`#openAgain`),pe=document.querySelector(`#fileInput`),me=document.querySelector(`#sidePanel`),he=document.querySelector(`#panelButton`),ge=document.querySelector(`#perspectiveButton`),_e=document.querySelector(`#axonButton`),_=document.querySelector(`#orthoButton`),v=document.querySelector(`#orthoMenu`),y=document.querySelector(`#sectionMenu`),b=document.querySelector(`#sectionMenuButton`),x=document.querySelector(`#sectionButton`),S=document.querySelector(`#sunAngle`),C=document.querySelector(`#sunHeight`),w=document.querySelector(`#shadowToggle`),T=document.querySelector(`#cameraFov`),E=document.querySelector(`#transparency`),D=document.querySelector(`#windowLightsToggle`),O=document.querySelector(`#windowLightsIntensity`),k=document.querySelector(`#photo1Button`),A=document.querySelector(`#lightSection`),j=document.querySelector(`#sectionSlider`),M=document.querySelector(`#sectionFlip`),N=document.querySelector(`#sectionDebug`),P=document.querySelector(`#sectionFill`),F=document.querySelectorAll(`[data-section-color]`),I=document.querySelector(`#sectionDebugStats`),ve=document.querySelector(`#status`),ye=document.querySelector(`#modelStats`),be=document.querySelector(`#materialList`),xe=document.querySelector(`#elementTypeList`),Se=document.querySelector(`#retainedControls`);function L(e){let t=Number(e?.transmission);return!!(e?.isMeshPhysicalMaterial&&Number.isFinite(t)&&t>0)}function Ce(e){return L(e)&&e.userData?.archicad?.clearGlassOverride===!0}var we=/(?:glass|glazing|window|crystal|verre|vitre|üveg)/i;function R(e){return!!(e&&Number(e.alphaTest)>0&&(e.map||e.alphaMap)&&!(Number(e.transmission)>0))}function Te(e){return L(e)?(e.opacity=1,e.transparent=!1,e.depthWrite=!0,e.needsUpdate=!0,!0):!1}function Ee(e,t){return!L(e)||!t?!1:(t.transmission=0,t.transparent=!0,t.opacity=.5,t.depthWrite=!1,t.needsUpdate=!0,!0)}function De(e,t=30,n=85){let r=Math.max(1,n-t);return .86+.12*Math.min(1,Math.max(0,(Number(e)-t)/r))}function Oe(e){if(!e||L(e))return!1;let t=we.test(e.name||``),n=Number(e.opacity),r=Number(e.transmission),i=Number.isFinite(n)&&n<.999||Number.isFinite(r)&&r>0,a=e.transparent&&e.map&&!t;return(t||i)&&!e.alphaMap&&!(e.alphaTest>0)&&!a}function ke(e){let t=e?.directionToSun;if(!Array.isArray(t)||t.length!==3||!t.every(Number.isFinite))return null;let n=Math.hypot(...t);if(!Number.isFinite(n)||n<1e-6)return null;let r=t.map(e=>e/n);return r[1]>0?r:null}function Ae(e){return{azimuth:(Math.atan2(e[2],e[0])*180/Math.PI+360)%360,height:Math.asin(Math.min(1,Math.max(-1,e[1])))*180/Math.PI}}function je(e,t,n,r){let i=((e+.5)/n-.5)*Math.PI*2,a=Math.PI/2-(t+.5)/r*Math.PI,o=Math.cos(a);return[Math.cos(i)*o,Math.sin(a),Math.sin(i)*o]}f.line={worldUnits:{value:1},linewidth:{value:1},resolution:{value:new te},dashOffset:{value:0},dashScale:{value:1},dashSize:{value:1},gapSize:{value:1}},p.line={uniforms:i.merge([f.common,f.fog,f.line]),vertexShader:`
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
				vec3 tmpFwd = normalize( mix( start.xyz, end.xyz, 0.5 ) );
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
				clip.z = clipPose.z * clip.w;

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

				// Find the closest points on the view ray and the line segment
				vec3 rayEnd = normalize( worldPos.xyz ) * 1e5;
				vec3 lineDir = worldEnd - worldStart;
				vec2 params = closestLineToLine( worldStart, worldEnd, vec3( 0.0, 0.0, 0.0 ), rayEnd );

				vec3 p1 = worldStart + lineDir * params.x;
				vec3 p2 = rayEnd * params.y;
				vec3 delta = p1 - p2;
				float len = length( delta );
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
		`};var z=class extends t{constructor(e){super({type:`LineMaterial`,uniforms:i.clone(p.line.uniforms),vertexShader:p.line.vertexShader,fragmentShader:p.line.fragmentShader,clipping:!0}),this.isLineMaterial=!0,this.setValues(e)}get color(){return this.uniforms.diffuse.value}set color(e){this.uniforms.diffuse.value=e}get worldUnits(){return`WORLD_UNITS`in this.defines}set worldUnits(e){e===!0!==this.worldUnits&&(this.needsUpdate=!0),e===!0?this.defines.WORLD_UNITS=``:delete this.defines.WORLD_UNITS}get linewidth(){return this.uniforms.linewidth.value}set linewidth(e){this.uniforms.linewidth&&(this.uniforms.linewidth.value=e)}get dashed(){return`USE_DASH`in this.defines}set dashed(e){e===!0!==this.dashed&&(this.needsUpdate=!0),e===!0?this.defines.USE_DASH=``:delete this.defines.USE_DASH}get dashScale(){return this.uniforms.dashScale.value}set dashScale(e){this.uniforms.dashScale.value=e}get dashSize(){return this.uniforms.dashSize.value}set dashSize(e){this.uniforms.dashSize.value=e}get dashOffset(){return this.uniforms.dashOffset.value}set dashOffset(e){this.uniforms.dashOffset.value=e}get gapSize(){return this.uniforms.gapSize.value}set gapSize(e){this.uniforms.gapSize.value=e}get opacity(){return this.uniforms.opacity.value}set opacity(e){this.uniforms&&(this.uniforms.opacity.value=e)}get resolution(){return this.uniforms.resolution.value}set resolution(e){this.uniforms.resolution.value.copy(e)}get alphaToCoverage(){return`USE_ALPHA_TO_COVERAGE`in this.defines}set alphaToCoverage(e){this.defines&&(e===!0!==this.alphaToCoverage&&(this.needsUpdate=!0),e===!0?this.defines.USE_ALPHA_TO_COVERAGE=``:delete this.defines.USE_ALPHA_TO_COVERAGE)}},B=new l({color:16250868,roughness:.88,metalness:0,side:2}),V=new WeakMap,H=new Set;function U(e){if(!e?.clone)return B;let t=V.get(e);if(t)return t;let n=e.clone();n.color&&n.color.set(16250868),n.emissive&&n.emissive.set(0),`roughness`in n&&(n.roughness=.88),`metalness`in n&&(n.metalness=0),Ee(e,n),n.emissiveMap=null;let r=n.customProgramCacheKey(),i=n.onBeforeCompile;return n.onBeforeCompile=function(e,t){i.call(this,e,t),e.fragmentShader=e.fragmentShader.replace(`#include <map_fragment>`,`
          #include <map_fragment>
          diffuseColor.rgb = vec3(
            0.9301,
            0.9301,
            0.9110
          );
          `)},n.customProgramCacheKey=()=>`${r}|drop-view-white-alpha-preserving-1`,n.needsUpdate=!0,V.set(e,n),H.add(n),n}function Me(e){return H.has(e)}function Ne(){H.forEach(e=>e.dispose()),H.clear()}var Pe=new o({color:1118481,wireframe:!0,side:2}),Fe=new e({color:1118481}),Ie=new o({color:16726832,side:2,depthWrite:!0,depthTest:!0,toneMapped:!1}),Le=new e({color:60159,depthTest:!1,depthWrite:!1,toneMapped:!1}),Re=new z({color:16726832,linewidth:1,worldUnits:!1,vertexColors:!1,dashed:!1,alphaToCoverage:!0,transparent:!1,depthTest:!1,depthWrite:!1});function W(e){return new n({color:e,size:6,sizeAttenuation:!1,depthTest:!1,depthWrite:!1,toneMapped:!1})}var ze=W(2152811),Be=W(16722731),Ve=W(16711892),G=new u({color:16777215,emissive:0,side:2});G.onBeforeCompile=e=>{e.fragmentShader=e.fragmentShader.replace(`#include <map_fragment>`,`#include <map_fragment>
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

        `)},G.customProgramCacheKey=()=>`drop-view-renaissance-1.3`;var K=new Map,q=new Set;function He(e){let t=K.get(e);if(t)return t;let n=new u({color:16777215,map:e.map??null,alphaMap:e.alphaMap??null,alphaTest:Number(e.alphaTest)>0?Number(e.alphaTest):.5,opacity:e.opacity??1,side:2});return n.onBeforeCompile=G.onBeforeCompile,n.customProgramCacheKey=()=>`drop-view-renaissance-cutout-1.3`,K.set(e,n),q.add(n),n}function Ue(e){return q.has(e)}function We({disposeTextures:e=!1}={}){let t=new Set;for(let n of q)e&&(n.map&&t.add(n.map),n.alphaMap&&t.add(n.alphaMap)),n.dispose();for(let e of t)e.dispose();K.clear(),q.clear()}var J=new o({color:16777215,transparent:!0,opacity:.18,side:2,depthWrite:!1,toneMapped:!1});function Y(e){if(!e)return!1;let t=Number(e.opacity),n=Number(e.transmission);return Number.isFinite(t)&&t<.999||Number.isFinite(n)&&n>0}function X(e,t,n=null){if(e&&Y(e)){if(Te(e)){Number.isFinite(n)&&(e.transmission=n);return}e.transparent=!0,e.opacity=t,e.depthWrite=!1,`roughness`in e&&(e.roughness=.16),`metalness`in e&&(e.metalness=.02),`shininess`in e&&(e.shininess=90),e.needsUpdate=!0}}function Ge(e){return Array.isArray(e)?e.map(e=>U(e)):U(e)}function Z(e){return Array.isArray(e)?e.map(Z):R(e)?He(e):Y(e)?J:G}function Ke(e){return(Array.isArray(e)?e:[e]).some(R)}function qe(e){let t=Array.isArray(e)?e:[e];return t.length>0&&t.every(Y)}function Je(){h.ground&&g.remove(h.ground);let e=new ee(h.maxModelSize*10,h.maxModelSize*10),t=new r({color:0,opacity:.18});h.ground=new s(e,t),h.ground.rotation.x=-Math.PI/2,h.ground.position.set(h.modelCenter.x,.001,h.modelCenter.z),h.ground.receiveShadow=!0,g.add(h.ground)}S.addEventListener(`input`,$),C.addEventListener(`input`,$);function Q(){let e=a.degToRad(Number(S.value)),t=a.degToRad(Number(C.value)),n=Math.cos(t);return new c(Math.cos(e)*n,Math.sin(t),Math.sin(e)*n)}function $(){if(!h.model)return;let e=Q(),t=h.maxModelSize*3;d.position.copy(h.modelCenter).addScaledVector(e,t),d.target.position.copy(h.modelCenter),d.target.updateMatrixWorld(),d.updateMatrixWorld();let n=h.maxModelSize*.9;d.shadow.camera.left=-n,d.shadow.camera.right=n,d.shadow.camera.top=n,d.shadow.camera.bottom=-n,d.shadow.camera.near=h.maxModelSize*.01,d.shadow.camera.far=h.maxModelSize*8,d.shadow.camera.updateProjectionMatrix()}function Ye(e){h.exportedSun=e??null,h.hasImportedSun=!1;let t=ke(e);if(!t||!h.model)return!1;let n=new c(...t).transformDirection(h.model.matrixWorld);if(![n.x,n.y,n.z].every(Number.isFinite)||n.y<=0)return!1;let{azimuth:r,height:i}=Ae(n.toArray());return S.value=String(r),C.min=String(Math.min(5,Math.floor(i))),C.max=String(Math.max(85,Math.ceil(i))),C.value=String(i),h.hasImportedSun=!0,$(),!0}w.addEventListener(`change`,()=>{m.shadowMap.enabled=w.checked,d.castShadow=w.checked,h.ground&&(h.ground.visible=w.checked),G.needsUpdate=!0});export{x as $,Oe as A,ae as B,Re as C,je as D,z as E,ue as F,fe as G,A as H,xe as I,v as J,le as K,pe as L,_e as M,T as N,L as O,de as P,Se as Q,oe as R,Le as S,Pe as T,be as U,ce as V,ye as W,ge as X,he as Y,k as Z,G as _,O as _t,X as a,y as at,Be as b,Fe as c,w as ct,Ke as d,me as dt,F as et,qe as f,ne as ft,J as g,E as gt,Me as h,C as ht,Q as i,M as it,De as j,Ce as k,Z as l,re as lt,Y as m,S as mt,$ as n,I as nt,We as o,b as ot,Ue as p,ve as pt,_ as q,Je as r,P as rt,Ne as s,j as st,Ye as t,N as tt,Ge as u,se as ut,Ie as v,D as vt,B as w,ze as x,Ve as y,ie as z};