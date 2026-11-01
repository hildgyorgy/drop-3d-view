const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["./HDRLoader-iB2FbNUJ.js","./three.module-BkE-sxXa.js"])))=>i.map(i=>d[i]);
import{At as e,Nt as t,X as n,Xt as r,Zt as i,bn as a,ct as o,dt as ee,ft as s,hn as c,ht as te,n as l,pt as u,r as d,yn as ne}from"./three.module-BkE-sxXa.js";import{d as f,f as p,l as re,t as m,u as h}from"./state-B4rgS1dk.js";var ie=document.querySelector(`#startScreen`),ae=document.querySelector(`#showAllButton`),oe=document.querySelector(`#groupMenu`),se=document.querySelector(`#groupMenuButton`),ce=document.querySelector(`#groupList`),le=document.querySelector(`#showAllGroupsButton`),ue=document.querySelector(`#hideAllGroupsButton`),de=document.querySelector(`#openButton`),fe=document.querySelector(`#demoButton`),pe=document.querySelector(`#demo2Button`);document.querySelector(`#openAgain`);var me=document.querySelector(`#fileInput`),he=document.querySelector(`#sidePanel`),ge=document.querySelector(`#panelButton`),_e=document.querySelector(`#perspectiveButton`),ve=document.querySelector(`#axonButton`),ye=document.querySelector(`#orthoButton`),be=document.querySelector(`#orthoMenu`),xe=document.querySelector(`#sectionMenu`),Se=document.querySelector(`#sectionMenuButton`),Ce=document.querySelector(`#sectionButton`),g=document.querySelector(`#sunAngle`),_=document.querySelector(`#sunHeight`),v=document.querySelector(`#shadowToggle`),we=document.querySelector(`#cameraFov`),y=document.querySelector(`#transparency`),b=document.querySelector(`#windowLightsToggle`),x=document.querySelector(`#windowLightsIntensity`),S=document.querySelector(`#photo1Button`),C=document.querySelector(`#lightSection`),w=document.querySelector(`#sectionSlider`),T=document.querySelector(`#sectionFlip`),E=document.querySelector(`#sectionDebug`),D=document.querySelector(`#sectionFill`),O=document.querySelectorAll(`[data-section-color]`),k=document.querySelector(`#sectionDebugStats`),Te=document.querySelector(`#status`),Ee=document.querySelector(`#modelStats`),De=document.querySelector(`#materialList`),Oe=document.querySelector(`#elementTypeList`),ke=document.querySelector(`#retainedControls`);function A(e){let t=Number(e?.transmission);return!!(e?.isMeshPhysicalMaterial&&Number.isFinite(t)&&t>0)}function Ae(e){return A(e)&&e.userData?.archicad?.clearGlassOverride===!0}var je=/(?:glass|glazing|window|crystal|verre|vitre|üveg)/i;function j(e){return!!(e&&Number(e.alphaTest)>0&&(e.map||e.alphaMap)&&!(Number(e.transmission)>0))}function Me(e){return A(e)?(e.opacity=1,e.transparent=!1,e.depthWrite=!0,e.needsUpdate=!0,!0):!1}function Ne(e,t){return!A(e)||!t?!1:(t.transmission=0,t.transparent=!0,t.opacity=.5,t.depthWrite=!1,t.needsUpdate=!0,!0)}function Pe(e,t=30,n=85){let r=Math.max(1,n-t);return .86+.12*Math.min(1,Math.max(0,(Number(e)-t)/r))}function Fe(e){if(!e||A(e))return!1;let t=je.test(e.name||``),n=Number(e.opacity),r=Number(e.transmission),i=Number.isFinite(n)&&n<.999||Number.isFinite(r)&&r>0,a=e.transparent&&e.map&&!t;return(t||i)&&!e.alphaMap&&!(e.alphaTest>0)&&!a}function Ie(e){let t=e?.directionToSun;if(!Array.isArray(t)||t.length!==3||!t.every(Number.isFinite))return null;let n=Math.hypot(...t);if(!Number.isFinite(n)||n<1e-6)return null;let r=t.map(e=>e/n);return r[1]>0?r:null}function Le(e){return{azimuth:(Math.atan2(e[2],e[0])*180/Math.PI+360)%360,height:Math.asin(Math.min(1,Math.max(-1,e[1])))*180/Math.PI}}function Re(e,t,n,r){let i=((e+.5)/n-.5)*Math.PI*2,a=Math.PI/2-(t+.5)/r*Math.PI,o=Math.cos(a);return[Math.cos(i)*o,Math.sin(a),Math.sin(i)*o]}function ze(e){e&&(e.autoUpdate=!1,e.needsUpdate=!0)}d.line={worldUnits:{value:1},linewidth:{value:1},resolution:{value:new ne},dashOffset:{value:0},dashScale:{value:1},dashSize:{value:1},gapSize:{value:1}},l.line={uniforms:c.merge([d.common,d.fog,d.line]),vertexShader:`
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
		`};var M=class extends r{constructor(e){super({type:`LineMaterial`,uniforms:c.clone(l.line.uniforms),vertexShader:l.line.vertexShader,fragmentShader:l.line.fragmentShader,clipping:!0}),this.isLineMaterial=!0,this.setValues(e)}get color(){return this.uniforms.diffuse.value}set color(e){this.uniforms.diffuse.value=e}get worldUnits(){return`WORLD_UNITS`in this.defines}set worldUnits(e){e===!0!==this.worldUnits&&(this.needsUpdate=!0),e===!0?this.defines.WORLD_UNITS=``:delete this.defines.WORLD_UNITS}get linewidth(){return this.uniforms.linewidth.value}set linewidth(e){this.uniforms.linewidth&&(this.uniforms.linewidth.value=e)}get dashed(){return`USE_DASH`in this.defines}set dashed(e){e===!0!==this.dashed&&(this.needsUpdate=!0),e===!0?this.defines.USE_DASH=``:delete this.defines.USE_DASH}get dashScale(){return this.uniforms.dashScale.value}set dashScale(e){this.uniforms.dashScale.value=e}get dashSize(){return this.uniforms.dashSize.value}set dashSize(e){this.uniforms.dashSize.value=e}get dashOffset(){return this.uniforms.dashOffset.value}set dashOffset(e){this.uniforms.dashOffset.value=e}get gapSize(){return this.uniforms.gapSize.value}set gapSize(e){this.uniforms.gapSize.value=e}get opacity(){return this.uniforms.opacity.value}set opacity(e){this.uniforms&&(this.uniforms.opacity.value=e)}get resolution(){return this.uniforms.resolution.value}set resolution(e){this.uniforms.resolution.value.copy(e)}get alphaToCoverage(){return`USE_ALPHA_TO_COVERAGE`in this.defines}set alphaToCoverage(e){this.defines&&(e===!0!==this.alphaToCoverage&&(this.needsUpdate=!0),e===!0?this.defines.USE_ALPHA_TO_COVERAGE=``:delete this.defines.USE_ALPHA_TO_COVERAGE)}},N=new te({color:16250868,roughness:.88,metalness:0,side:2}),P=new WeakMap,F=new Set;function I(e){if(!e?.clone)return N;let t=P.get(e);if(t)return t;let n=e.clone();n.color&&n.color.set(16250868),n.emissive&&n.emissive.set(0),`roughness`in n&&(n.roughness=.88),`metalness`in n&&(n.metalness=0),Ne(e,n),n.emissiveMap=null;let r=n.customProgramCacheKey(),i=n.onBeforeCompile;return n.onBeforeCompile=function(e,t){i.call(this,e,t),e.fragmentShader=e.fragmentShader.replace(`#include <map_fragment>`,`
          #include <map_fragment>
          diffuseColor.rgb = vec3(
            0.9301,
            0.9301,
            0.9110
          );
          `)},n.customProgramCacheKey=()=>`${r}|drop-view-white-alpha-preserving-1`,n.needsUpdate=!0,P.set(e,n),F.add(n),n}function Be(e){return F.has(e)}function Ve(){F.forEach(e=>e.dispose()),F.clear()}var He=new s({color:1118481,wireframe:!0,side:2}),L=new n({color:1118481}),Ue=new s({color:16726832,side:2,depthWrite:!0,depthTest:!0,toneMapped:!1}),We=new n({color:60159,depthTest:!1,depthWrite:!1,toneMapped:!1}),Ge=new M({color:16726832,linewidth:1,worldUnits:!1,vertexColors:!1,dashed:!1,alphaToCoverage:!0,transparent:!1,depthTest:!1,depthWrite:!1});function R(e){return new t({color:e,size:6,sizeAttenuation:!1,depthTest:!1,depthWrite:!1,toneMapped:!1})}var Ke=R(2152811),qe=R(16722731),Je=R(16711892),z=new u({color:16777215,emissive:0,side:2});z.onBeforeCompile=e=>{e.fragmentShader=e.fragmentShader.replace(`#include <map_fragment>`,`#include <map_fragment>
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

        `)},z.customProgramCacheKey=()=>`drop-view-renaissance-1.3`;var B=new Map,V=new Set;function Ye(e){let t=B.get(e);if(t)return t;let n=new u({color:16777215,map:e.map??null,alphaMap:e.alphaMap??null,alphaTest:Number(e.alphaTest)>0?Number(e.alphaTest):.5,opacity:e.opacity??1,side:2});return n.onBeforeCompile=z.onBeforeCompile,n.customProgramCacheKey=()=>`drop-view-renaissance-cutout-1.3`,B.set(e,n),V.add(n),n}function Xe(e){return V.has(e)}function Ze({disposeTextures:e=!1}={}){let t=new Set;for(let n of V)e&&(n.map&&t.add(n.map),n.alphaMap&&t.add(n.alphaMap)),n.dispose();for(let e of t)e.dispose();B.clear(),V.clear()}var H=new s({color:16777215,transparent:!0,opacity:.18,side:2,depthWrite:!1,toneMapped:!1});function U(e){if(!e)return!1;let t=Number(e.opacity),n=Number(e.transmission);return Number.isFinite(t)&&t<.999||Number.isFinite(n)&&n>0}function Qe(e,t,n=null){if(e&&U(e)){if(Me(e)){Number.isFinite(n)&&(e.transmission=n);return}e.transparent=!0,e.opacity=t,e.depthWrite=!1,`roughness`in e&&(e.roughness=.16),`metalness`in e&&(e.metalness=.02),`shininess`in e&&(e.shininess=90),e.needsUpdate=!0}}function $e(e){return Array.isArray(e)?e.map(e=>I(e)):I(e)}function W(e){return Array.isArray(e)?e.map(W):j(e)?Ye(e):U(e)?H:z}function et(e){return(Array.isArray(e)?e:[e]).some(j)}function tt(e){let t=Array.isArray(e)?e:[e];return t.length>0&&t.every(U)}function G(){ze(f.shadow)}G();function nt(){m.ground&&h.remove(m.ground);let t=new e(m.maxModelSize*10,m.maxModelSize*10),n=new i({color:0,opacity:.18});m.ground=new ee(t,n),m.ground.rotation.x=-Math.PI/2,m.ground.position.set(m.modelCenter.x,.001,m.modelCenter.z),m.ground.receiveShadow=!0,h.add(m.ground)}g.addEventListener(`input`,q),_.addEventListener(`input`,q);function K(){let e=o.degToRad(Number(g.value)),t=o.degToRad(Number(_.value)),n=Math.cos(t);return new a(Math.cos(e)*n,Math.sin(t),Math.sin(e)*n)}function q(){if(!m.model)return;let e=K(),t=m.maxModelSize*3;f.position.copy(m.modelCenter).addScaledVector(e,t),f.target.position.copy(m.modelCenter),f.target.updateMatrixWorld(),f.updateMatrixWorld();let n=m.maxModelSize*.9;f.shadow.camera.left=-n,f.shadow.camera.right=n,f.shadow.camera.top=n,f.shadow.camera.bottom=-n,f.shadow.camera.near=m.maxModelSize*.01,f.shadow.camera.far=m.maxModelSize*8,f.shadow.camera.updateProjectionMatrix(),G()}function rt(e){m.exportedSun=e??null,m.hasImportedSun=!1;let t=Ie(e);if(!t||!m.model)return!1;let n=new a(...t).transformDirection(m.model.matrixWorld);if(![n.x,n.y,n.z].every(Number.isFinite)||n.y<=0)return!1;let{azimuth:r,height:i}=Le(n.toArray());return g.value=String(r),_.min=String(Math.min(5,Math.floor(i))),_.max=String(Math.max(85,Math.ceil(i))),_.value=String(i),m.hasImportedSun=!0,q(),!0}v.addEventListener(`change`,()=>{re.shadowMap.enabled=v.checked,f.castShadow=v.checked,m.ground&&(m.ground.visible=v.checked),v.checked&&G(),z.needsUpdate=!0});var it=268435456,at=33554432;function J(e){if(!e||typeof e.name!=`string`||e.name.length>255||!/^[^\\/\x00-\x1f]{1,255}\.hdr$/i.test(e.name)||!(e.bytes instanceof ArrayBuffer)||e.bytes.byteLength>it)throw Error(`Invalid packaged HDRI`);let t=new TextDecoder().decode(e.bytes.slice(0,32768)),n=/\n-Y\s+(\d+)\s+\+X\s+(\d+)\s*\n/.exec(t);if(!/^#\?(RADIANCE|RGBE)\r?\n/.test(t)||!/\nFORMAT=32-bit_rle_rgbe\s*\n/.test(t)||!n)throw Error(`Invalid packaged HDRI header`);let r=Number(n[1]),i=Number(n[2]);if(!Number.isSafeInteger(i)||!Number.isSafeInteger(r)||i<1||r<1||i>16384||r>16384||i*r>at||e.bytes.byteLength<n.index+n[0].length+4)throw Error(`Invalid packaged HDRI dimensions or data`);return e}var Y=null,X=null;function Z(){return{url:X??new URL(`assets/hdri/backdrop.hdr`,document.baseURI).href,embedded:!!Y}}function Q(){return Y?{name:Y.name,bytes:Y.bytes.slice(0)}:null}function ot(e){e&&J(e);let t=e?{name:e.name,bytes:e.bytes.slice(0)}:null,n=t?URL.createObjectURL(new Blob([t.bytes],{type:`image/vnd.radiance`})):null,r=X;Y=t,X=n,r&&URL.revokeObjectURL(r)}async function st(){let e=Z(),t=Q();if(!t){let n=await fetch(e.url);if(!n.ok)throw Error(`HDRI could not be packaged (${n.status})`);t={name:`backdrop.hdr`,bytes:await n.arrayBuffer()}}if(J(t),Z().url!==e.url)throw Error(`The scene environment changed during export`);return t}async function $(e){let t=await crypto.subtle.digest(`SHA-256`,e.bytes);return`sha256:${[...new Uint8Array(t)].map(e=>e.toString(16).padStart(2,`0`)).join(``)}`}async function ct(e,t){if(!e)return;if(J(e),t?.hdriId?.startsWith(`sha256:`)&&await $(e)!==t.hdriId)throw Error(`The packaged HDRI does not match its recorded identity`);let[{HDRLoader:n},{FloatType:r}]=await Promise.all([p(()=>import(`./HDRLoader-iB2FbNUJ.js`),__vite__mapDeps([0,1]),import.meta.url),p(()=>import(`./three.module-BkE-sxXa.js`).then(e=>e.a),[],import.meta.url)]),i=new n().setDataType(r).parse(e.bytes);if(!i?.data?.length||i.data.length!==i.width*i.height*4)throw Error(`The packaged HDRI has incomplete pixel data`)}export{de as $,We as A,ve as B,Be as C,y as Ct,Je as D,Ue as E,Re as F,me as G,pe as H,A as I,se as J,ce as K,Ae as L,N as M,He as N,qe as O,M as P,Ee as Q,Fe as R,U as S,_ as St,z as T,b as Tt,fe as U,we as V,Oe as W,C as X,ue as Y,De as Z,W as _,le as _t,ot as a,ke as at,tt as b,Te as bt,rt as c,E as ct,K as d,T as dt,ye as et,G as f,xe as ft,L as g,ae as gt,Ve as h,v as ht,Q as i,S as it,Ge as j,Ke as k,q as l,k as lt,Ze as m,w as mt,$ as n,ge as nt,ct as o,Ce as ot,Qe as p,Se as pt,oe as q,Z as r,_e as rt,J as s,O as st,st as t,be as tt,nt as u,D as ut,$e as v,he as vt,H as w,x as wt,Xe as x,g as xt,et as y,ie as yt,Pe as z};