const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["./HDRLoader-BbMXu_Tb.js","./three.core-3rjURqFY.js"])))=>i.map(i=>d[i]);
import{t as e}from"./HDRLoader-BbMXu_Tb.js";import{Ft as t,Mt as n,N as r,Rn as i,St as a,_t as o,bt as s,dr as c,et as l,gt as ee,pt as u,tr as d,ur as te,zn as ne}from"./three.core-3rjURqFY.js";import{_ as f,d as p,f as m,g as h,p as re,t as g,u as ie}from"./state-DQpJDfao.js";var ae=document.querySelector(`#startScreen`),oe=document.querySelector(`#showAllButton`),se=document.querySelector(`#groupMenu`),ce=document.querySelector(`#groupMenuButton`),le=document.querySelector(`#groupList`),ue=document.querySelector(`#showAllGroupsButton`),de=document.querySelector(`#hideAllGroupsButton`),fe=document.querySelector(`#openButton`),pe=document.querySelector(`#demoButton`),me=document.querySelector(`#demo2Button`);document.querySelector(`#openAgain`);var he=document.querySelector(`#fileInput`),ge=document.querySelector(`#sidePanel`),_e=document.querySelector(`#panelButton`),ve=document.querySelector(`#perspectiveButton`),ye=document.querySelector(`#axonButton`),be=document.querySelector(`#orthoButton`),xe=document.querySelector(`#orthoMenu`),Se=document.querySelector(`#sectionMenu`),Ce=document.querySelector(`#sectionMenuButton`),we=document.querySelector(`#sectionButton`),_=document.querySelector(`#sunAngle`),v=document.querySelector(`#sunHeight`),y=document.querySelector(`#shadowToggle`),Te=document.querySelector(`#cameraFov`),b=document.querySelector(`#transparency`),x=document.querySelector(`#windowLightsToggle`),S=document.querySelector(`#windowLightsIntensity`),C=document.querySelector(`#photo1Button`),w=document.querySelector(`#lightSection`),T=document.querySelector(`#sectionSlider`),E=document.querySelector(`#sectionFlip`),D=document.querySelector(`#sectionDebug`),O=document.querySelector(`#sectionFill`),Ee=document.querySelectorAll(`[data-section-color]`),De=document.querySelector(`#sectionDebugStats`),Oe=document.querySelector(`#status`),ke=document.querySelector(`#modelStats`),Ae=document.querySelector(`#materialList`),je=document.querySelector(`#elementTypeList`),Me=document.querySelector(`#retainedControls`);function k(e){let t=Number(e?.transmission);return!!(e?.isMeshPhysicalMaterial&&Number.isFinite(t)&&t>0)}function Ne(e){return k(e)&&e.userData?.archicad?.clearGlassOverride===!0}var Pe=/(?:glass|glazing|window|crystal|verre|vitre|üveg)/i;function A(e){return!!(e&&Number(e.alphaTest)>0&&(e.map||e.alphaMap)&&!(Number(e.transmission)>0))}function Fe(e){return k(e)?(e.opacity=1,e.transparent=!1,e.depthWrite=!0,e.needsUpdate=!0,!0):!1}function Ie(e,t){return!k(e)||!t?!1:(t.transmission=0,t.transparent=!0,t.opacity=.5,t.depthWrite=!1,t.needsUpdate=!0,!0)}function Le(e,t=30,n=85){let r=Math.max(1,n-t);return .86+.12*Math.min(1,Math.max(0,(Number(e)-t)/r))}function Re(e){if(!e||k(e))return!1;let t=Pe.test(e.name||``),n=Number(e.opacity),r=Number(e.transmission),i=Number.isFinite(n)&&n<.999||Number.isFinite(r)&&r>0,a=e.transparent&&e.map&&!t;return(t||i)&&!e.alphaMap&&!(e.alphaTest>0)&&!a}function ze(e){e&&(e.autoUpdate=!1,e.needsUpdate=!0)}f.line={worldUnits:{value:1},linewidth:{value:1},resolution:{value:new te},dashOffset:{value:0},dashScale:{value:1},dashSize:{value:1},gapSize:{value:1}},h.line={uniforms:d.merge([f.common,f.fog,f.line]),vertexShader:`
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
		`};var j=class extends i{constructor(e){super({type:`LineMaterial`,uniforms:d.clone(h.line.uniforms),vertexShader:h.line.vertexShader,fragmentShader:h.line.fragmentShader,clipping:!0}),this.isLineMaterial=!0,this.setValues(e)}get color(){return this.uniforms.diffuse.value}set color(e){this.uniforms.diffuse.value=e}get worldUnits(){return`WORLD_UNITS`in this.defines}set worldUnits(e){e===!0!==this.worldUnits&&(this.needsUpdate=!0),e===!0?this.defines.WORLD_UNITS=``:delete this.defines.WORLD_UNITS}get linewidth(){return this.uniforms.linewidth.value}set linewidth(e){this.uniforms.linewidth&&(this.uniforms.linewidth.value=e)}get dashed(){return`USE_DASH`in this.defines}set dashed(e){e===!0!==this.dashed&&(this.needsUpdate=!0),e===!0?this.defines.USE_DASH=``:delete this.defines.USE_DASH}get dashScale(){return this.uniforms.dashScale.value}set dashScale(e){this.uniforms.dashScale.value=e}get dashSize(){return this.uniforms.dashSize.value}set dashSize(e){this.uniforms.dashSize.value=e}get dashOffset(){return this.uniforms.dashOffset.value}set dashOffset(e){this.uniforms.dashOffset.value=e}get gapSize(){return this.uniforms.gapSize.value}set gapSize(e){this.uniforms.gapSize.value=e}get opacity(){return this.uniforms.opacity.value}set opacity(e){this.uniforms&&(this.uniforms.opacity.value=e)}get resolution(){return this.uniforms.resolution.value}set resolution(e){this.uniforms.resolution.value.copy(e)}get alphaToCoverage(){return`USE_ALPHA_TO_COVERAGE`in this.defines}set alphaToCoverage(e){this.defines&&(e===!0!==this.alphaToCoverage&&(this.needsUpdate=!0),e===!0?this.defines.USE_ALPHA_TO_COVERAGE=``:delete this.defines.USE_ALPHA_TO_COVERAGE)}},M=new a({color:16250868,roughness:.88,metalness:0,side:2}),N=new WeakMap,P=new Set;function F(e){if(!e?.clone)return M;let t=N.get(e);if(t)return t;let n=e.clone();n.color&&n.color.set(16250868),n.emissive&&n.emissive.set(0),`roughness`in n&&(n.roughness=.88),`metalness`in n&&(n.metalness=0),Ie(e,n),n.emissiveMap=null;let r=n.customProgramCacheKey(),i=n.onBeforeCompile;return n.onBeforeCompile=function(e,t){i.call(this,e,t),e.fragmentShader=e.fragmentShader.replace(`#include <map_fragment>`,`
          #include <map_fragment>
          diffuseColor.rgb = vec3(
            0.9301,
            0.9301,
            0.9110
          );
          `)},n.customProgramCacheKey=()=>`${r}|drop-view-white-alpha-preserving-1`,n.needsUpdate=!0,N.set(e,n),P.add(n),n}function Be(e){return P.has(e)}function Ve(){P.forEach(e=>e.dispose()),P.clear()}var He=new o({color:1118481,wireframe:!0,side:2}),Ue=new l({color:1118481}),We=new o({color:16726832,side:2,depthWrite:!0,depthTest:!0,toneMapped:!1}),I=new l({color:60159,depthTest:!1,depthWrite:!1,toneMapped:!1}),Ge=new j({color:16726832,linewidth:1,worldUnits:!1,vertexColors:!1,dashed:!1,alphaToCoverage:!0,transparent:!1,depthTest:!1,depthWrite:!1});function L(e){return new t({color:e,size:6,sizeAttenuation:!1,depthTest:!1,depthWrite:!1,toneMapped:!1})}var Ke=L(2152811),qe=L(16722731),Je=L(16711892),R=new s({color:16777215,emissive:0,side:2});R.onBeforeCompile=e=>{e.fragmentShader=e.fragmentShader.replace(`#include <map_fragment>`,`#include <map_fragment>
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

        `)},R.customProgramCacheKey=()=>`drop-view-renaissance-1.3`;var z=new Map,B=new Set;function Ye(e){let t=z.get(e);if(t)return t;let n=new s({color:16777215,map:e.map??null,alphaMap:e.alphaMap??null,alphaTest:Number(e.alphaTest)>0?Number(e.alphaTest):.5,opacity:e.opacity??1,side:2});return n.onBeforeCompile=R.onBeforeCompile,n.customProgramCacheKey=()=>`drop-view-renaissance-cutout-1.3`,z.set(e,n),B.add(n),n}function Xe(e){return B.has(e)}function Ze({disposeTextures:e=!1}={}){let t=new Set;for(let n of B)e&&(n.map&&t.add(n.map),n.alphaMap&&t.add(n.alphaMap)),n.dispose();for(let e of t)e.dispose();z.clear(),B.clear()}var V=new o({color:16777215,transparent:!0,opacity:.18,side:2,depthWrite:!1,toneMapped:!1});function H(e){if(!e)return!1;let t=Number(e.opacity),n=Number(e.transmission);return Number.isFinite(t)&&t<.999||Number.isFinite(n)&&n>0}function Qe(e,t,n=null){if(e&&H(e)){if(Fe(e)){Number.isFinite(n)&&(e.transmission=n);return}e.transparent=!0,e.opacity=t,e.depthWrite=!1,`roughness`in e&&(e.roughness=.16),`metalness`in e&&(e.metalness=.02),`shininess`in e&&(e.shininess=90),e.needsUpdate=!0}}function $e(e){return Array.isArray(e)?e.map(e=>F(e)):F(e)}function U(e){return Array.isArray(e)?e.map(U):A(e)?Ye(e):H(e)?V:R}function et(e){return(Array.isArray(e)?e:[e]).some(A)}function tt(e){let t=Array.isArray(e)?e:[e];return t.length>0&&t.every(H)}function nt(e){let t=e?.directionToSun;if(!Array.isArray(t)||t.length!==3||!t.every(Number.isFinite))return null;let n=Math.hypot(...t);if(!Number.isFinite(n)||n<1e-6)return null;let r=t.map(e=>e/n);return r[1]>0?r:null}function rt(e){return{azimuth:(Math.atan2(e[2],e[0])*180/Math.PI+360)%360,height:Math.asin(Math.min(1,Math.max(-1,e[1])))*180/Math.PI}}function it(e,t,n,r){let i=((e+.5)/n-.5)*Math.PI*2,a=Math.PI/2-(t+.5)/r*Math.PI,o=Math.cos(a);return[Math.cos(i)*o,Math.sin(a),Math.sin(i)*o]}function W(){ze(m.shadow)}W();function at(){g.ground&&p.remove(g.ground);let e=new n(g.maxModelSize*10,g.maxModelSize*10),t=new ne({color:0,opacity:.18});g.ground=new ee(e,t),g.ground.rotation.x=-Math.PI/2,g.ground.position.set(g.modelCenter.x,.001,g.modelCenter.z),g.ground.receiveShadow=!0,p.add(g.ground)}_.addEventListener(`input`,K),v.addEventListener(`input`,K);function G(){let e=u.degToRad(Number(_.value)),t=u.degToRad(Number(v.value)),n=Math.cos(t);return new c(Math.cos(e)*n,Math.sin(t),Math.sin(e)*n)}function K(){if(!g.model)return;let e=G(),t=g.maxModelSize*3;m.position.copy(g.modelCenter).addScaledVector(e,t),m.target.position.copy(g.modelCenter),m.target.updateMatrixWorld(),m.updateMatrixWorld();let n=g.maxModelSize*.9;m.shadow.camera.left=-n,m.shadow.camera.right=n,m.shadow.camera.top=n,m.shadow.camera.bottom=-n,m.shadow.camera.near=g.maxModelSize*.01,m.shadow.camera.far=g.maxModelSize*8,m.shadow.camera.updateProjectionMatrix(),W()}function ot(e){g.exportedSun=e??null,g.hasImportedSun=!1;let t=nt(e);if(!t||!g.model)return!1;let n=new c(...t).transformDirection(g.model.matrixWorld);if(![n.x,n.y,n.z].every(Number.isFinite)||n.y<=0)return!1;let{azimuth:r,height:i}=rt(n.toArray());return _.value=String(r),v.min=String(Math.min(5,Math.floor(i))),v.max=String(Math.max(85,Math.ceil(i))),v.value=String(i),g.hasImportedSun=!0,K(),!0}y.addEventListener(`change`,()=>{ie.shadowMap.enabled=y.checked,m.castShadow=y.checked,g.ground&&(g.ground.visible=y.checked),y.checked&&W(),R.needsUpdate=!0});var st=268435456,ct=33554432;function q(e){if(!e||typeof e.name!=`string`||e.name.length>255||!/^[^\\/\x00-\x1f]{1,255}\.hdr$/i.test(e.name)||!(e.bytes instanceof ArrayBuffer)||e.bytes.byteLength>st)throw Error(`Invalid packaged HDRI`);let t=new TextDecoder().decode(e.bytes.slice(0,32768)),n=/\n-Y\s+(\d+)\s+\+X\s+(\d+)\s*\n/.exec(t);if(!/^#\?(RADIANCE|RGBE)\r?\n/.test(t)||!/\nFORMAT=32-bit_rle_rgbe\s*\n/.test(t)||!n)throw Error(`Invalid packaged HDRI header`);let r=Number(n[1]),i=Number(n[2]);if(!Number.isSafeInteger(i)||!Number.isSafeInteger(r)||i<1||r<1||i>16384||r>16384||i*r>ct||e.bytes.byteLength<n.index+n[0].length+4)throw Error(`Invalid packaged HDRI dimensions or data`);return e}var J=null,Y=null;function X(){return{url:Y??new URL(`assets/hdri/backdrop.hdr`,document.baseURI).href,embedded:!!J}}function Z(){return J?{name:J.name,bytes:J.bytes.slice(0)}:null}function lt(e){e&&q(e);let t=e?{name:e.name,bytes:e.bytes.slice(0)}:null,n=t?URL.createObjectURL(new Blob([t.bytes],{type:`image/vnd.radiance`})):null,r=Y;J=t,Y=n,r&&URL.revokeObjectURL(r)}async function ut(){let e=X(),t=Z();if(!t){let n=await fetch(e.url);if(!n.ok)throw Error(`HDRI could not be packaged (${n.status})`);t={name:`backdrop.hdr`,bytes:await n.arrayBuffer()}}if(q(t),X().url!==e.url)throw Error(`The scene environment changed during export`);return t}async function Q(e){let t=await crypto.subtle.digest(`SHA-256`,e.bytes);return`sha256:${[...new Uint8Array(t)].map(e=>e.toString(16).padStart(2,`0`)).join(``)}`}async function dt(e,t){if(!e)return;if(q(e),t?.hdriId?.startsWith(`sha256:`)&&await Q(e)!==t.hdriId)throw Error(`The packaged HDRI does not match its recorded identity`);let{HDRLoader:n}=await re(async()=>{let{HDRLoader:e}=await import(`./HDRLoader-BbMXu_Tb.js`).then(e=>e.n);return{HDRLoader:e}},__vite__mapDeps([0,1]),import.meta.url),r=new n().createDataTexture(e.bytes);try{let{data:e,width:t,height:n}=r.image??{};if(!e?.length||e.length!==t*n*4)throw Error(`The packaged HDRI has incomplete pixel data`)}finally{r.dispose()}}var $=null;function ft(e){let{data:t,width:n,height:r}=e.image??{},i=null;if(t instanceof Float32Array&&n&&r){let e=0,a=-1/0,o=Math.floor(t.length/(n*r));for(let i=0;i<n*r;i+=1){let n=i*o,r=.2126*t[n]+.7152*t[n+1]+.0722*t[n+2];r>a&&(a=r,e=i)}i=new c(...it(e%n,Math.floor(e/n),n,r)).normalize();for(let e=0;e<t.length;e+=1)t[e]=Math.min(65504,Math.max(-65504,t[e]))}return e.mapping=303,e.needsUpdate=!0,{texture:e,sunDirection:i}}function pt(e){let t=e.texture.clone();return t.needsUpdate=!0,{texture:t,sunDirection:e.sunDirection?.clone()??null}}async function mt(t=X()){if(!$||$.url!==t.url){$?.texture?.dispose();let n={url:t.url,texture:null,sunDirection:null,promise:null};$=n,n.promise=new e().setDataType(r).loadAsync(t.url).then(e=>{if($!==n||X().url!==n.url)throw e.dispose(),Error(`The scene environment changed while loading`);let t=ft(e);return n.texture=t.texture,n.sunDirection=t.sunDirection,n}).catch(e=>{throw $===n&&($=null),e})}let n=$,i=await n.promise;if($!==n||X().url!==n.url)throw Error(`The scene environment changed while loading`);return pt(i)}export{fe as $,Ke as A,ye as B,H as C,b as Ct,We as D,R as E,j as F,he as G,me as H,k as I,ce as J,le as K,Ne as L,Ge as M,M as N,Je as O,He as P,ke as Q,Re as R,Xe as S,v as St,V as T,x as Tt,pe as U,Te as V,je as W,w as X,de as Y,Ae as Z,Ue as _,ue as _t,Z as a,Me as at,et as b,Oe as bt,q as c,D as ct,at as d,E as dt,be as et,G as f,Se as ft,Ve as g,oe as gt,Ze as h,y as ht,X as i,C as it,I as j,qe as k,ot as l,De as lt,Qe as m,T as mt,ut as n,_e as nt,lt as o,we as ot,W as p,Ce as pt,se as q,Q as r,ve as rt,dt as s,Ee as st,mt as t,xe as tt,K as u,O as ut,U as v,ge as vt,Be as w,S as wt,tt as x,_ as xt,$e as y,ae as yt,Le as z};