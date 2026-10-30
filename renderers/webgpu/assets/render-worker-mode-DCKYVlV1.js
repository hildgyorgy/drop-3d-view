import{$r as e,$t as t,An as n,C as r,Cn as i,Ct as a,Ei as o,En as s,H as c,Hi as l,Jt as u,Qt as d,Si as f,T as p,Ti as m,W as h,Wi as g,Yt as _,_ as v,_n as y,ai as b,b as x,bi as S,ca as C,ci as w,cr as ee,da as te,dn as ne,dr as re,dt as ie,en as ae,fa as oe,ft as se,gn as ce,ii as le,li as ue,mn as T,oa as E,or as de,pn as fe,pr as pe,rr as me,sa as D,sr as he,ta as ge,ti as _e,tt as ve,ur as ye,w as be,wa as xe,wt as Se,xi as Ce,xr as we,y as Te,yi as Ee}from"./three.module-CJ1FdOJF.js";import{A as De,B as Oe,C as ke,F as Ae,H as je,I as Me,J as O,K as Ne,L as Pe,M as Fe,N as Ie,P as Le,R as Re,V as ze,W as Be,X as k,Y as A,_ as Ve,a as He,b as Ue,d as We,f as Ge,i as Ke,j as qe,l as Je,o as Ye,p as Xe,q as j,r as Ze,s as M,v as N,y as P,z as Qe}from"./raycast-hit-filter-CSMVMfoT.js";import{t as $e}from"./HDRLoader-Cw42oKK8.js";var et=document.querySelector(`#startScreen`),tt=document.querySelector(`#showAllButton`),nt=document.querySelector(`#groupMenu`),rt=document.querySelector(`#groupMenuButton`),it=document.querySelector(`#groupList`),at=document.querySelector(`#showAllGroupsButton`),ot=document.querySelector(`#hideAllGroupsButton`),st=document.querySelector(`#openButton`),ct=document.querySelector(`#demoButton`),lt=document.querySelector(`#demo2Button`),ut=document.querySelector(`#openAgain`),dt=document.querySelector(`#fileInput`),ft=document.querySelector(`#sidePanel`),pt=document.querySelector(`#panelButton`),mt=document.querySelector(`#perspectiveButton`),ht=document.querySelector(`#axonButton`),gt=document.querySelector(`#orthoButton`),_t=document.querySelector(`#orthoMenu`),vt=document.querySelector(`#sectionMenu`),yt=document.querySelector(`#sectionMenuButton`),bt=document.querySelector(`#sectionButton`),xt=document.querySelector(`#sunAngle`),St=document.querySelector(`#sunHeight`),Ct=document.querySelector(`#shadowToggle`),wt=document.querySelector(`#cameraFov`),Tt=document.querySelector(`#transparency`),Et=document.querySelector(`#windowLightsToggle`),Dt=document.querySelector(`#windowLightsIntensity`),Ot=document.querySelector(`#photo1Button`),kt=document.querySelector(`#lightSection`),At=document.querySelector(`#sectionSlider`),jt=document.querySelector(`#sectionFlip`),Mt=document.querySelector(`#sectionDebug`),Nt=document.querySelector(`#sectionFill`),Pt=document.querySelectorAll(`[data-section-color]`),Ft=document.querySelector(`#sectionDebugStats`),It=document.querySelector(`#status`),Lt=document.querySelector(`#modelStats`),Rt=document.querySelector(`#materialList`),zt=document.querySelector(`#elementTypeList`),Bt=document.querySelector(`#retainedControls`),Vt=`enabled`,Ht=`disabled`;function Ut(e){return e?.parser?.json?.asset?.extras?.dropView?.materialWorkbench?.policy===`disabled`?Ht:Vt}function Wt({embedded:e=!1,policy:t=Vt,sourceKind:n=null}={}){if(e)return{visible:!1,canEdit:!1,canSave:!1};let r=t!==Ht;return{visible:!0,canEdit:r,canSave:r&&n===`user`}}function Gt(e){return e==null}k.BRDF_GGX,k.BRDF_Lambert,k.BRDF_Sheen,k.BasicPointShadowFilter,k.BasicShadowFilter,k.Break,k.Const,k.Continue,k.DFGLUT,k.D_GGX,k.D_GGX_Anisotropic,k.Discard,k.EPSILON,k.EnvironmentBRDF,k.F_Schlick,k.Fn,k.HALF_PI,k.INFINITY,k.If,k.LTC_Evaluate,k.LTC_Evaluate_Volume,k.LTC_Uv,k.Loop,k.NodeAccess,k.NodeShaderStage,k.NodeType,k.NodeUpdateType,k.OnAfterObjectUpdate,k.OnAfterRenderPipeline,k.OnBeforeFrameUpdate,k.OnBeforeMaterialUpdate,k.OnBeforeObjectUpdate,k.OnBeforeRenderPipeline,k.OnFrameUpdate,k.OnMaterialUpdate,k.OnObjectUpdate,k.PCFShadowFilter;var Kt=k.PI;k.PI2,k.PointShadowFilter,k.Return,k.Schlick_to_F0,k.ShaderNode,k.Stack,k.Switch,k.TBNViewMatrix,k.TWO_PI,k.VSMShadowFilter,k.V_GGX_SmithCorrelated,k.V_GGX_SmithCorrelated_Anisotropic,k.Var,k.VarIntent,k.abs,k.acesFilmicToneMapping,k.acos,k.acosh,k.add,k.addMethodChaining,k.addNodeElement,k.agxToneMapping,k.all,k.alphaT,k.ambientOcclusion,k.and,k.anisotropy,k.anisotropyB,k.anisotropyT,k.any,k.array,k.asin,k.asinh,k.assign,k.atan,k.atanh,k.atomicAdd,k.atomicAnd,k.atomicFunc,k.atomicLoad,k.atomicMax,k.atomicMin,k.atomicOr,k.atomicStore,k.atomicSub,k.atomicXor,k.attenuationColor,k.attenuationDistance,k.attribute,k.attributeArray,k.backgroundBlurriness,k.backgroundIntensity,k.backgroundRotation,k.batch,k.batchColor,k.batchIndirectIndex,k.bentNormalView,k.billboarding,k.bitAnd,k.bitNot,k.bitOr,k.bitXor,k.bitangentGeometry,k.bitangentLocal,k.bitangentView,k.bitangentViewFrame,k.bitangentWorld,k.bitcast,k.blendBurn,k.blendColor,k.blendDodge,k.blendOverlay,k.blendScreen;var qt=k.bool;k.buffer,k.bufferAttribute,k.builtin,k.builtinAOContext,k.builtinGIContext,k.builtinShadowContext,k.bumpMap,k.bvec2,k.bvec3,k.bvec4,k.bypass,k.cache,k.call,k.cameraFar,k.cameraIndex,k.cameraNear,k.cameraNormalMatrix,k.cameraPosition,k.cameraProjectionMatrix,k.cameraProjectionMatrixInverse,k.cameraViewMatrix,k.cameraViewport,k.cameraWorldMatrix,k.cbrt,k.cdl,k.ceil,k.checker,k.cineonToneMapping,k.clamp,k.clearcoat,k.clearcoatNormalView,k.clearcoatRoughness,k.clipSpace,k.clipping,k.clippingAlpha,k.code,k.color,k.colorSpaceToWorking,k.colorToDirection,k.compute,k.computeKernel,k.computeSkinning,k.context,k.convert,k.convertColorSpace,k.convertToTexture,k.cos,k.cosh,k.countLeadingZeros,k.countOneBits,k.countTrailingZeros,k.cross,k.cubeTexture,k.cubeTextureBase,k.dFdx,k.dFdy,k.dashSize,k.debug,k.decrement,k.decrementBefore,k.defaultBuildStages,k.defaultShaderStages,k.defined,k.degrees,k.deltaTime,k.densityFogFactor,k.depth,k.depthPass,k.determinant,k.difference;var Jt=k.diffuseColor;k.diffuseContribution,k.directPointLight,k.directionToColor,k.directionToFaceDirection,k.dispersion,k.distance,k.div;var Yt=k.dot;k.dot4I8Packed,k.dot4U8Packed,k.drawIndex,k.dynamicBufferAttribute,k.element,k.emissive,k.equal,k.equirectDirection,k.equirectUV,k.exp,k.exp2,k.exponentialHeightFogFactor,k.expression,k.faceDirection,k.faceForward,k.faceforward;var Xt=k.float;k.floatBitsToInt,k.floatBitsToUint,k.floor,k.fog,k.fract,k.frameGroup,k.frameId,k.frontFacing,k.fwidth,k.gain,k.gapSize,k.getConstNodeType,k.getCurrentStack,k.getDistanceAttenuation,k.getGeometryRoughness,k.getNormalFromDepth,k.getParallaxCorrectNormal,k.getRoughness,k.getScreenPosition,k.getScreenPositionFromClip,k.getShIrradianceAt,k.getTextureIndex,k.getViewPosition;var Zt=k.globalId;k.glsl,k.glslFn,k.grayscale,k.greaterThan,k.greaterThanEqual,k.hardwareClipping,k.hash,k.highpModelNormalViewMatrix,k.highpModelViewMatrix,k.hue,k.increment,k.incrementBefore,k.inspect,k.instance,k.instanceColor,k.instanceIndex,k.instancedArray,k.instancedBufferAttribute,k.instancedDynamicBufferAttribute,k.instancedMesh,k.int,k.intBitsToFloat,k.interleavedGradientNoise,k.inverse,k.inverseSqrt,k.inversesqrt,k.invocationLocalIndex,k.invocationSubgroupIndex,k.ior,k.iridescence,k.iridescenceIOR,k.iridescenceThickness,k.isolate,k.ivec2,k.ivec3,k.ivec4,k.js,k.label,k.length,k.lengthSq,k.lessThan,k.lessThanEqual,k.lightPosition,k.lightProjectionUV,k.lightShadowMatrix,k.lightTargetDirection,k.lightTargetPosition,k.lightViewPosition,k.lightingContext,k.lights,k.linearDepth,k.linearToneMapping,k.localId,k.log,k.log2,k.logarithmicDepthToViewZ,k.luminance,k.mat2;var Qt=k.mat3,$t=k.mat4;k.matcapUV,k.materialAO,k.materialAlphaTest,k.materialAnisotropy,k.materialAnisotropyVector,k.materialAttenuationColor,k.materialAttenuationDistance,k.materialClearcoat,k.materialClearcoatNormal,k.materialClearcoatRoughness,k.materialColor,k.materialDispersion,k.materialEmissive,k.materialEnvIntensity,k.materialEnvRotation,k.materialIOR,k.materialIridescence,k.materialIridescenceIOR,k.materialIridescenceThickness,k.materialLightMap,k.materialLineDashOffset,k.materialLineDashSize,k.materialLineGapSize,k.materialLineScale,k.materialLineWidth,k.materialMetalness,k.materialNormal,k.materialOpacity,k.materialPointSize,k.materialReference,k.materialReflectivity,k.materialRefractionRatio,k.materialRetroreflectivity,k.materialRotation,k.materialRoughness,k.materialSheen,k.materialSheenRoughness,k.materialShininess,k.materialSpecular,k.materialSpecularColor,k.materialSpecularIntensity,k.materialSpecularStrength,k.materialThickness,k.materialTransmission,k.max,k.maxMipLevel,k.mediumpModelViewMatrix,k.metalness,k.min,k.mix,k.mixElement,k.mod,k.modelDirection,k.modelNormalMatrix,k.modelPosition,k.modelRadius,k.modelScale,k.modelViewMatrix,k.modelViewPosition,k.modelViewProjection,k.modelWorldMatrix,k.modelWorldMatrixInverse,k.morphReference,k.mrt,k.mul,k.mx_aastep,k.mx_add,k.mx_atan2,k.mx_cell_noise_float,k.mx_cell_noise_vec3,k.mx_contrast,k.mx_divide,k.mx_fractal_noise_float,k.mx_fractal_noise_float_2d,k.mx_fractal_noise_vec2,k.mx_fractal_noise_vec3,k.mx_fractal_noise_vec4,k.mx_frame,k.mx_heighttonormal,k.mx_hsvtorgb,k.mx_ifequal,k.mx_ifgreater,k.mx_ifgreatereq,k.mx_invert,k.mx_modulo,k.mx_multiply,k.mx_noise_float,k.mx_noise_vec3,k.mx_noise_vec4,k.mx_place2d,k.mx_power,k.mx_ramp4,k.mx_ramplr,k.mx_ramptb,k.mx_rgbtohsv,k.mx_rotate2d,k.mx_rotate3d,k.mx_safepower,k.mx_separate,k.mx_smoothstep,k.mx_splitlr,k.mx_splittb,k.mx_srgb_texture_to_lin_rec709,k.mx_subtract,k.mx_timer,k.mx_transform_uv,k.mx_unifiednoise2d,k.mx_unifiednoise3d,k.mx_worley_noise_float,k.mx_worley_noise_float_2d,k.mx_worley_noise_float_3d,k.mx_worley_noise_vec2,k.mx_worley_noise_vec3,k.mx_worley_noise_vec3_style,k.negate,k.negateOnBackSide,k.neutralToneMapping,k.nodeArray,k.nodeImmutable,k.nodeObject,k.nodeObjectIntent,k.nodeObjects,k.nodeProxy,k.nodeProxyConstructor,k.nodeProxyIntent,k.normalFlat,k.normalGeometry,k.normalLocal,k.normalMap,k.normalView,k.normalViewGeometry,k.normalWorld,k.normalWorldGeometry,k.normalize,k.not,k.notEqual,k.numWorkgroups,k.objectDirection,k.objectGroup,k.objectPosition,k.objectRadius,k.objectScale,k.objectViewPosition,k.objectWorldMatrix,k.oneMinus,k.or,k.orthographicDepthToViewZ,k.oscSawtooth,k.oscSine,k.oscSquare,k.oscTriangle,k.output,k.outputStruct,k.overloadingFn,k.overrideNode,k.overrideNodes,k.pack4xI8,k.pack4xI8Clamp,k.pack4xU8,k.pack4xU8Clamp,k.packHalf2x16,k.packNormalToRGB,k.packSnorm2x16,k.packSnorm4x8,k.packUnorm2x16,k.packUnorm4x8,k.parabola,k.parallaxDirection,k.parallaxUV,k.parameter,k.pass,k.passTexture,k.pcurve,k.perspectiveDepthToViewZ,k.pmremTexture,k.pointShadow,k.pointUV,k.pointWidth,k.positionGeometry,k.positionLocal,k.positionPrevious,k.positionView,k.positionViewDirection,k.positionWorld,k.positionWorldDirection,k.posterize,k.pow,k.pow2,k.pow3,k.pow4,k.premultiplyAlpha,k.property,k.quadBroadcast,k.quadSwapDiagonal,k.quadSwapX,k.quadSwapY,k.radians,k.rand,k.range,k.rangeFogFactor,k.reciprocal,k.reference,k.referenceBuffer,k.reflect,k.reflectVector,k.reflectView,k.reflector,k.refract,k.refractVector,k.refractView,k.reinhardToneMapping,k.remap,k.remapClamp,k.renderGroup,k.renderOutput,k.rendererReference,k.replaceDefaultUV,k.retroreflectivity,k.rotate,k.rotateUV,k.roughness,k.round,k.rtt,k.sRGBTransferEOTF,k.sRGBTransferOETF,k.sample;var en=k.sampler;k.samplerComparison,k.saturate,k.saturation,k.screenCoordinate,k.screenDPR,k.screenSize,k.screenUV,k.select,k.setCurrentStack,k.setName,k.shaderStages,k.shadow,k.shadowPositionWorld,k.shapeCircle,k.sharedUniformGroup,k.sheen,k.sheenRoughness,k.shiftLeft,k.shiftRight,k.shininess,k.sign,k.sin,k.sinc,k.sinh,k.skinning,k.smoothstep,k.smoothstepElement,k.specularColor,k.specularColorBlended,k.specularF90,k.spherizeUV,k.split,k.spritesheetUV,k.sqrt,k.stack;var tn=k.step;k.stepElement;var F=k.storage;k.storageBarrier,k.storageElement,k.storageTexture;var nn=k.storageTexture3D;k.struct,k.sub,k.subBuild,k.subgroupAdd,k.subgroupAll,k.subgroupAnd,k.subgroupAny,k.subgroupBallot,k.subgroupBroadcast,k.subgroupBroadcastFirst,k.subgroupElect,k.subgroupExclusiveAdd,k.subgroupExclusiveMul,k.subgroupInclusiveAdd,k.subgroupInclusiveMul,k.subgroupIndex,k.subgroupMax,k.subgroupMin,k.subgroupMul,k.subgroupOr,k.subgroupShuffle,k.subgroupShuffleDown,k.subgroupShuffleUp,k.subgroupShuffleXor,k.subgroupSize,k.subgroupXor,k.tan,k.tangentGeometry,k.tangentLocal,k.tangentView,k.tangentViewFrame,k.tangentWorld,k.tanh;var rn=k.texture,an=k.texture3D;k.texture3DLevel,k.texture3DLoad,k.textureBarrier,k.textureBicubic,k.textureBicubicLevel,k.textureLevel,k.textureLoad,k.textureSize;var on=k.textureStore;k.thickness,k.time;var sn=k.toneMapping;k.toneMappingExposure,k.toonOutlinePass,k.transformDirection,k.transformNormal,k.transformNormalByInverseViewMatrix,k.transformNormalByViewMatrix,k.transformNormalToView,k.transformedClearcoatNormalView,k.transformedNormalView,k.transformedNormalWorld,k.transmission,k.transpose,k.triNoise3D,k.triplanarTexture,k.triplanarTextures,k.trunc;var cn=k.uint;k.uintBitsToFloat;var I=k.uniform,ln=k.uniformArray;k.uniformCubeTexture,k.uniformFlow,k.uniformGroup,k.uniformTexture,k.unpack4xI8,k.unpack4xU8,k.unpackHalf2x16,k.unpackNormal,k.unpackRGBToNormal,k.unpackSnorm2x16,k.unpackSnorm4x8,k.unpackUnorm2x16,k.unpackUnorm4x8,k.unpremultiplyAlpha,k.userData;var un=k.uv;k.uvec2,k.uvec3,k.uvec4;var dn=k.varying;k.varyingProperty,k.vec2;var fn=k.vec3,pn=k.vec4;k.vectorComponents,k.velocity,k.vertexColor,k.vertexIndex,k.vertexStage,k.vibrance,k.viewZToLogarithmicDepth,k.viewZToOrthographicDepth,k.viewZToPerspectiveDepth,k.viewZToReversedOrthographicDepth,k.viewZToReversedPerspectiveDepth,k.viewport,k.viewportCoordinate,k.viewportDepthTexture,k.viewportLinearDepth,k.viewportMipTexture,k.viewportOpaqueMipTexture,k.viewportSafeUV,k.viewportSharedTexture,k.viewportSize,k.viewportTexture,k.viewportUV,k.vogelDiskSample;var mn=k.wgsl,L=k.wgslFn;k.workgroupArray,k.workgroupBarrier,k.workgroupId,k.workingToColorSpace,k.xor;var hn=1.25,gn=65535,_n=2**-24,vn=Symbol(`SKIP_GENERATION`),yn={strategy:0,maxDepth:40,targetLeafSize:10,useSharedArrayBuffer:!1,setBoundingBox:!0,onProgress:null,indirect:!1,verbose:!0,range:null,[vn]:!1};function R(e,t,n){return n.min.x=t[e],n.min.y=t[e+1],n.min.z=t[e+2],n.max.x=t[e+3],n.max.y=t[e+4],n.max.z=t[e+5],n}function bn(e){let t=-1,n=-1/0;for(let r=0;r<3;r++){let i=e[r+3]-e[r];i>n&&(n=i,t=r)}return t}function xn(e,t){t.set(e)}function Sn(e,t,n){let r,i;for(let a=0;a<3;a++){let o=a+3;r=e[a],i=t[a],n[a]=r<i?r:i,r=e[o],i=t[o],n[o]=r>i?r:i}}function Cn(e,t,n){for(let r=0;r<3;r++){let i=t[e+2*r],a=t[e+2*r+1],o=i-a,s=i+a;o<n[r]&&(n[r]=o),s>n[r+3]&&(n[r+3]=s)}}function wn(e){let t=e[3]-e[0],n=e[4]-e[1],r=e[5]-e[2];return 2*(t*n+n*r+r*t)}function z(e,t){return t[e+15]===gn}function B(e,t){return t[e+6]}function V(e,t){return t[e+14]}function H(e){return e+8}function U(e,t){return e+t[e+6]*8}function Tn(e,t){return t[e+7]}function W(e){return e}function En(e,t,n,r,i){let a=1/0,o=1/0,s=1/0,c=-1/0,l=-1/0,u=-1/0,d=1/0,f=1/0,p=1/0,m=-1/0,h=-1/0,g=-1/0,_=e.offset||0;for(let r=(t-_)*6,i=(t+n-_)*6;r<i;r+=6){let t=e[r+0],n=e[r+1],i=t-n,_=t+n;i<a&&(a=i),_>c&&(c=_),t<d&&(d=t),t>m&&(m=t);let v=e[r+2],y=e[r+3],b=v-y,x=v+y;b<o&&(o=b),x>l&&(l=x),v<f&&(f=v),v>h&&(h=v);let S=e[r+4],C=e[r+5],w=S-C,ee=S+C;w<s&&(s=w),ee>u&&(u=ee),S<p&&(p=S),S>g&&(g=S)}r[0]=a,r[1]=o,r[2]=s,r[3]=c,r[4]=l,r[5]=u,i[0]=d,i[1]=f,i[2]=p,i[3]=m,i[4]=h,i[5]=g}var Dn=32,On=(e,t)=>e.candidate-t.candidate,kn=Array(Dn).fill().map(()=>({count:0,bounds:new Float32Array(6),rightCacheBounds:new Float32Array(6),leftCacheBounds:new Float32Array(6),candidate:0})),An=new Float32Array(6);function jn(e,t,n,r,i,a){let o=-1,s=0;if(a===0)o=bn(t),o!==-1&&(s=(t[o]+t[o+3])/2);else if(a===1)o=bn(e),o!==-1&&(s=Mn(n,r,i,o));else if(a===2){let a=wn(e),c=hn*i,l=n.offset||0,u=(r-l)*6,d=(r+i-l)*6;for(let e=0;e<3;e++){let r=t[e],l=(t[e+3]-r)/Dn;if(i<Dn/4){let t=[...kn];t.length=i;let r=0;for(let i=u;i<d;i+=6,r++){let a=t[r];a.candidate=n[i+2*e],a.count=0;let{bounds:o,leftCacheBounds:s,rightCacheBounds:c}=a;for(let e=0;e<3;e++)c[e]=1/0,c[e+3]=-1/0,s[e]=1/0,s[e+3]=-1/0,o[e]=1/0,o[e+3]=-1/0;Cn(i,n,o)}t.sort(On);let l=i;for(let e=0;e<l;e++){let n=t[e];for(;e+1<l&&t[e+1].candidate===n.candidate;)t.splice(e+1,1),l--}for(let r=u;r<d;r+=6){let i=n[r+2*e];for(let e=0;e<l;e++){let a=t[e];i>=a.candidate?Cn(r,n,a.rightCacheBounds):(Cn(r,n,a.leftCacheBounds),a.count++)}}for(let n=0;n<l;n++){let r=t[n],l=r.count,u=i-r.count,d=r.leftCacheBounds,f=r.rightCacheBounds,p=0;l!==0&&(p=wn(d)/a);let m=0;u!==0&&(m=wn(f)/a);let h=1+hn*(p*l+m*u);h<c&&(o=e,c=h,s=r.candidate)}}else{for(let e=0;e<Dn;e++){let t=kn[e];t.count=0,t.candidate=r+l+e*l;let n=t.bounds;for(let e=0;e<3;e++)n[e]=1/0,n[e+3]=-1/0}for(let t=u;t<d;t+=6){let i=~~((n[t+2*e]-r)/l);i>=Dn&&(i=31);let a=kn[i];a.count++,Cn(t,n,a.bounds)}let t=kn[31];xn(t.bounds,t.rightCacheBounds);for(let e=30;e>=0;e--){let t=kn[e],n=kn[e+1];Sn(t.bounds,n.rightCacheBounds,t.rightCacheBounds)}let f=0;for(let t=0;t<31;t++){let n=kn[t],r=n.count,l=n.bounds,u=kn[t+1].rightCacheBounds;r!==0&&(f===0?xn(l,An):Sn(l,An,An)),f+=r;let d=0,p=0;f!==0&&(d=wn(An)/a);let m=i-f;m!==0&&(p=wn(u)/a);let h=1+hn*(d*f+p*m);h<c&&(o=e,c=h,s=n.candidate)}}}}else console.warn(`BVH: Invalid build strategy value ${a} used.`);return{axis:o,pos:s}}function Mn(e,t,n,r){let i=0,a=e.offset;for(let o=t,s=t+n;o<s;o++)i+=e[(o-a)*6+r*2];return i/n}var Nn=class{constructor(){this.boundingData=new Float32Array(6)}};function Pn(e,t,n,r,i,a){let o=r,s=r+i-1,c=a.pos,l=a.axis*2,u=n.offset||0;for(;;){for(;o<=s&&n[(o-u)*6+l]<c;)o++;for(;o<=s&&n[(s-u)*6+l]>=c;)s--;if(o<s){for(let n=0;n<t;n++){let r=e[o*t+n];e[o*t+n]=e[s*t+n],e[s*t+n]=r}for(let e=0;e<6;e++){let t=o-u,r=s-u,i=n[t*6+e];n[t*6+e]=n[r*6+e],n[r*6+e]=i}o++,s--}else return o}}var Fn,In,Ln,Rn,zn=2**32;function Bn(e){return`count`in e?1:1+Bn(e.left)+Bn(e.right)}function Vn(e,t,n){return Fn=new Float32Array(n),In=new Uint32Array(n),Ln=new Uint16Array(n),Rn=new Uint8Array(n),Hn(e,t)}function Hn(e,t){let n=e/4,r=e/2,i=`count`in t,a=t.boundingData;for(let e=0;e<6;e++)Fn[n+e]=a[e];if(i)return t.buffer?(Rn.set(new Uint8Array(t.buffer),e),e+t.buffer.byteLength):(In[n+6]=t.offset,Ln[r+14]=t.count,Ln[r+15]=gn,e+32);{let{left:r,right:i,splitAxis:a}=t,o=Hn(e+32,r),s=e/32,c=o/32-s;if(c>zn)throw Error(`MeshBVH: Cannot store relative child node offset greater than 32 bits.`);return In[n+6]=c,In[n+7]=a,Hn(o,i)}}function Un(e,t,n,r,i,a){let{maxDepth:o,verbose:s,targetLeafSize:c,_strictLeafSize:l=1/0,strategy:u,onProgress:d}=i,f=e.primitiveBuffer,p=e.primitiveBufferStride,m=new Float32Array(6),h=!1,g=new Nn;return En(t,n,r,g.boundingData,m),v(g,n,r,m),g;function _(e){d&&d((e-a.offset)/a.count)}function v(e,n,r,i=null,a=0){!h&&a>=o&&(h=!0,s&&console.warn(`BVH: Max depth of ${o} reached when generating BVH. Consider increasing maxDepth.`));let d=r>l;if(r<=c&&!d||a>=o)return _(n+r),e.offset=n,e.count=r,e;let g=jn(e.boundingData,i,t,n,r,u),y=g.axis===-1?-1:Pn(f,p,t,n,r,g);if(g.axis===-1||y===n||y===n+r){if(!d)return _(n+r),e.offset=n,e.count=r,e;g.axis=Math.max(0,bn(e.boundingData)),y=n+Math.max(1,Math.floor(r/2))}e.splitAxis=g.axis;let b=new Nn,x=n,S=y-n;e.left=b,En(t,x,S,b.boundingData,m),v(b,x,S,m,a+1);let C=new Nn,w=y,ee=r-S;return e.right=C,En(t,w,ee,C.boundingData,m),v(C,w,ee,m,a+1),e}}function Wn(e,t){let n=t.useSharedArrayBuffer?SharedArrayBuffer:ArrayBuffer,r=e.getRootRanges(t.range),i=r[0],a=r[r.length-1],o={offset:i.offset,count:a.offset+a.count-i.offset},s=new Float32Array(6*o.count);s.offset=o.offset,e.computePrimitiveBounds(o.offset,o.count,s),e._roots=r.map(r=>{let i=Un(e,s,r.offset,r.count,t,o),a=Bn(i),c=new n(32*a);return Vn(0,i,c),c})}var Gn=class{constructor(e){this._getNewPrimitive=e,this._primitives=[]}getPrimitive(){let e=this._primitives;return e.length===0?this._getNewPrimitive():e.pop()}releasePrimitive(e){this._primitives.push(e)}},G=new class{constructor(){this.float32Array=null,this.uint16Array=null,this.uint32Array=null;let e=[],t=null;this.setBuffer=n=>{t&&e.push(t),t=n,this.float32Array=new Float32Array(n),this.uint16Array=new Uint16Array(n),this.uint32Array=new Uint32Array(n)},this.clearBuffer=()=>{t=null,this.float32Array=null,this.uint16Array=null,this.uint32Array=null,e.length!==0&&this.setBuffer(e.pop())}}},Kn,qn,Jn=[],Yn=new Gn(()=>new v);function Xn(e,t,n,r,i,a){Kn=Yn.getPrimitive(),qn=Yn.getPrimitive(),Jn.push(Kn,qn),G.setBuffer(e._roots[t]);let o=Zn(0,e.geometry,n,r,i,a);G.clearBuffer(),Yn.releasePrimitive(Kn),Yn.releasePrimitive(qn),Jn.pop(),Jn.pop();let s=Jn.length;return s>0&&(qn=Jn[s-1],Kn=Jn[s-2]),o}function Zn(e,t,n,r,i=null,a=0,o=0){let{float32Array:s,uint16Array:c,uint32Array:l}=G,u=e*2;if(z(u,c)){let t=B(e,l),n=V(u,c);return R(W(e),s,Kn),r(t,n,!1,o,a+e/8,Kn)}{let u=H(e),d=U(e,l),f=u,p=d,m,h,g,_;if(i&&(g=Kn,_=qn,R(W(f),s,g),R(W(p),s,_),m=i(g),h=i(_),h<m)){f=d,p=u;let e=m;m=h,h=e,g=_}g||(g=Kn,R(W(f),s,g));let v=z(f*2,c),y=n(g,v,m,o+1,a+f/8),b;if(y===2){let e=w(f);b=r(e,ee(f)-e,!0,o+1,a+f/8,g)}else b=y&&Zn(f,t,n,r,i,a,o+1);if(b)return!0;_=qn,R(W(p),s,_);let x=z(p*2,c),S=n(_,x,h,o+1,a+p/8),C;if(S===2){let e=w(p);C=r(e,ee(p)-e,!0,o+1,a+p/8,_)}else C=S&&Zn(p,t,n,r,i,a,o+1);return!!C;function w(e){let{uint16Array:t,uint32Array:n}=G,r=e*2;for(;!z(r,t);)e=H(e),r=e*2;return B(e,n)}function ee(e){let{uint16Array:t,uint32Array:n}=G,r=e*2;for(;!z(r,t);)e=U(e,n),r=e*2;return B(e,n)+V(r,t)}}}var Qn=new G.constructor,$n=new G.constructor,er=new Gn(()=>new v),tr=new v,nr=new v,rr=new v,ir=new v,ar=!1;function or(e,t,n,r){if(ar)throw Error(`MeshBVH: Recursive calls to bvhcast not supported.`);ar=!0;let i=e._roots,a=t._roots,o,s=0,c=0,l=new T().copy(n).invert();for(let e=0,t=i.length;e<t;e++){Qn.setBuffer(i[e]),c=0;let t=er.getPrimitive();R(W(0),Qn.float32Array,t),t.applyMatrix4(l);for(let e=0,i=a.length;e<i&&($n.setBuffer(a[e]),o=sr(0,0,n,l,r,s,c,0,0,t),$n.clearBuffer(),c+=a[e].byteLength/32,!o);e++);if(er.releasePrimitive(t),Qn.clearBuffer(),s+=i[e].byteLength/32,o)break}return ar=!1,o}function sr(e,t,n,r,i,a=0,o=0,s=0,c=0,l=null,u=!1){let d,f;u?(d=$n,f=Qn):(d=Qn,f=$n);let p=d.float32Array,m=d.uint32Array,h=d.uint16Array,g=f.float32Array,_=f.uint32Array,v=f.uint16Array,y=e*2,b=t*2,x=z(y,h),S=z(b,v),C=!1;if(S&&x)C=u?i(B(t,_),V(t*2,v),B(e,m),V(e*2,h),c,o+t/8,s,a+e/8):i(B(e,m),V(e*2,h),B(t,_),V(t*2,v),s,a+e/8,c,o+t/8);else if(S){let l=er.getPrimitive();R(W(t),g,l),l.applyMatrix4(n);let d=H(e),f=U(e,m);R(W(d),p,tr),R(W(f),p,nr);let h=l.intersectsBox(tr),_=l.intersectsBox(nr);C=h&&sr(t,d,r,n,i,o,a,c,s+1,l,!u)||_&&sr(t,f,r,n,i,o,a,c,s+1,l,!u),er.releasePrimitive(l)}else{let d=H(t),f=U(t,_);R(W(d),g,rr),R(W(f),g,ir);let h=l.intersectsBox(rr),v=l.intersectsBox(ir);if(h&&v)C=sr(e,d,n,r,i,a,o,s,c+1,l,u)||sr(e,f,n,r,i,a,o,s,c+1,l,u);else if(h){if(x)C=sr(e,d,n,r,i,a,o,s,c+1,l,u);else{let t=er.getPrimitive();t.copy(rr).applyMatrix4(n);let l=H(e),f=U(e,m);R(W(l),p,tr),R(W(f),p,nr);let h=t.intersectsBox(tr),g=t.intersectsBox(nr);C=h&&sr(d,l,r,n,i,o,a,c,s+1,t,!u)||g&&sr(d,f,r,n,i,o,a,c,s+1,t,!u),er.releasePrimitive(t)}}else if(v){if(x)C=sr(e,f,n,r,i,a,o,s,c+1,l,u);else{let t=er.getPrimitive();t.copy(ir).applyMatrix4(n);let l=H(e),d=U(e,m);R(W(l),p,tr),R(W(d),p,nr);let h=t.intersectsBox(tr),g=t.intersectsBox(nr);C=h&&sr(f,l,r,n,i,o,a,c,s+1,t,!u)||g&&sr(f,d,r,n,i,o,a,c,s+1,t,!u),er.releasePrimitive(t)}}}return C}var cr=new class{constructor(){let e=null,t=null,n=null,r=!1;this.root=null,this.buffer=null,this.uint32Array=null,this.uint16Array=null,this.setBVH=(i,a)=>{if(r)throw Error(`BVHTraversalHelper: cannot call setBVH during an active traversal.`);this.root=a,this.buffer=e=i._roots[a],this.uint16Array=n=new Uint16Array(e),this.uint32Array=t=new Uint32Array(e)},this.reset=()=>{this.root=null,this.buffer=e=null,this.uint16Array=n=null,this.uint32Array=t=null},this.getRangeStart=e=>{let r=e*2;for(;!z(r,n);)e=H(e),r=e*2;return B(e,t)},this.getRangeEnd=e=>{let r=e*2;for(;!z(r,n);)e=U(e,t),r=e*2;return B(e,t)+V(r,n)};let i=(e,r,a)=>{let o=z(r*2,n);if(!e(a,o,r)&&!o){let n=H(r),o=U(r,t);i(e,n,a+1),i(e,o,a+1)}};this.traverseBuffer=e=>{if(r)throw Error(`BVHTraversalHelper: cannot start a traversal during an active traversal.`);r=!0;try{i(e,0,0)}finally{r=!1}},this.traverse=r=>{this.traverseBuffer((i,a,o)=>{if(a){let s=o*2,c=t[o+6],l=n[s+14];return r(i,a,new Float32Array(e,o*4,6),c,l)}{let n=Tn(o,t);return r(i,a,new Float32Array(e,o*4,6),n)}})}}},lr=new v,ur=new Float32Array(6),dr=class{constructor(){this._roots=null,this.primitiveBuffer=null,this.primitiveBufferStride=null}init(e){e={...yn,...e},`maxLeafSize`in e&&(console.warn(`BVH: "maxLeafSize" option has been deprecated. Use "targetLeafSize", instead.`),e={...e,targetLeafSize:e.maxLeafSize}),Wn(this,e)}getRootRanges(){throw Error(`BVH: getRootRanges() not implemented`)}writePrimitiveBounds(){throw Error(`BVH: writePrimitiveBounds() not implemented`)}writePrimitiveRangeBounds(e,t,n,r){let i=1/0,a=1/0,o=1/0,s=-1/0,c=-1/0,l=-1/0;for(let n=e,r=e+t;n<r;n++){this.writePrimitiveBounds(n,ur,0);let[e,t,r,u,d,f]=ur;e<i&&(i=e),u>s&&(s=u),t<a&&(a=t),d>c&&(c=d),r<o&&(o=r),f>l&&(l=f)}return n[r+0]=i,n[r+1]=a,n[r+2]=o,n[r+3]=s,n[r+4]=c,n[r+5]=l,n}computePrimitiveBounds(e,t,n){let r=n.offset||0;for(let i=e,a=e+t;i<a;i++){this.writePrimitiveBounds(i,ur,0);let[e,t,a,o,s,c]=ur,l=(e+o)/2,u=(t+s)/2,d=(a+c)/2,f=(o-e)/2,p=(s-t)/2,m=(c-a)/2,h=(i-r)*6;n[h+0]=l,n[h+1]=f+(Math.abs(l)+f)*_n,n[h+2]=u,n[h+3]=p+(Math.abs(u)+p)*_n,n[h+4]=d,n[h+5]=m+(Math.abs(d)+m)*_n}return n}shiftPrimitiveOffsets(e){let t=this._indirectBuffer;if(t)for(let n=0,r=t.length;n<r;n++)t[n]+=e;else{let t=this._roots;for(let n=0;n<t.length;n++){let r=t[n],i=new Uint32Array(r),a=new Uint16Array(r),o=r.byteLength/32;for(let t=0;t<o;t++){let n=8*t;z(2*n,a)&&(i[n+6]+=e)}}}}traverse(e,t=0){cr.setBVH(this,t),cr.traverse(e),cr.reset()}refit(){let e=this._roots;for(let t=0,n=e.length;t<n;t++){let n=e[t],r=new Uint32Array(n),i=new Uint16Array(n),a=new Float32Array(n),o=n.byteLength/32;for(let e=o-1;e>=0;e--){let t=e*8,n=t*2;if(z(n,i)){let e=B(t,r),o=V(n,i);this.writePrimitiveRangeBounds(e,o,ur,0),a.set(ur,t)}else{let e=H(t),n=U(t,r);for(let r=0;r<3;r++){let i=a[e+r],o=a[e+r+3],s=a[n+r],c=a[n+r+3];a[t+r]=i<s?i:s,a[t+r+3]=o>c?o:c}}}}}getBoundingBox(e){return e.makeEmpty(),this._roots.forEach(t=>{R(0,new Float32Array(t),lr),e.union(lr)}),e}shapecast(e){let{boundsTraverseOrder:t,intersectsBounds:n,intersectsRange:r,intersectsPrimitive:i,scratchPrimitive:a,iterate:o}=e;if(r&&i){let e=r;r=(t,n,r,s,c)=>e(t,n,r,s,c)?!0:o(t,n,this,i,r,s,a)}else r||=i?(e,t,n,r)=>o(e,t,this,i,n,r,a):(e,t,n)=>n;let s=!1,c=0,l=this._roots;for(let e=0,i=l.length;e<i;e++){let i=l[e];if(s=Xn(this,e,n,r,t,c),s)break;c+=i.byteLength/32}return s}bvhcast(e,t,n){let{intersectsRanges:r}=n;return or(this,e,t,r)}};function fr(){return typeof SharedArrayBuffer<`u`}function pr(e){return e.index?e.index.count:e.attributes.position.count}function mr(e){return pr(e)/3}function hr(e,t=ArrayBuffer){return e>65535?new Uint32Array(new t(4*e)):new Uint16Array(new t(2*e))}function gr(e,t){if(!e.index){let n=e.attributes.position.count,r=hr(n,t.useSharedArrayBuffer?SharedArrayBuffer:ArrayBuffer);e.setIndex(new Te(r,1));for(let e=0;e<n;e++)r[e]=e}}function _r(e,t,n){let r=pr(e)/n,i=t||e.drawRange,a=i.start/n,o=(i.start+i.count)/n,s=Math.max(0,a),c=Math.min(r,o)-s;return{offset:Math.floor(s),count:Math.floor(c)}}function vr(e,t){return e.groups.map(e=>({offset:e.start/t,count:e.count/t}))}function yr(e,t,n){let r=_r(e,t,n),i=vr(e,n);if(!i.length)return[r];let a=[],o=r.offset,s=r.offset+r.count,c=pr(e)/n,l=[];for(let e of i){let{offset:t,count:n}=e,r=t,i=t+(isFinite(n)?n:c-t);r<s&&i>o&&(l.push({pos:Math.max(o,r),isStart:!0}),l.push({pos:Math.min(s,i),isStart:!1}))}l.sort((e,t)=>e.pos===t.pos?e.type===`end`?-1:1:e.pos-t.pos);let u=0,d=null;for(let e of l){let t=e.pos;u!==0&&t!==d&&a.push({offset:d,count:t-d}),u+=e.isStart?1:-1,d=t}return a}function br(e,t){let n=e[e.length-1],r=n.offset+n.count>2**16,i=e.reduce((e,t)=>e+t.count,0),a=r?4:2,o=t?new SharedArrayBuffer(i*a):new ArrayBuffer(i*a),s=r?new Uint32Array(o):new Uint16Array(o),c=0;for(let t=0;t<e.length;t++){let{offset:n,count:r}=e[t];for(let e=0;e<r;e++)s[c+e]=n+e;c+=r}return s}var xr=class extends dr{get indirect(){return!!this._indirectBuffer}get primitiveStride(){return null}get primitiveBufferStride(){return this.indirect?1:this.primitiveStride}set primitiveBufferStride(e){}get primitiveBuffer(){return this.indirect?this._indirectBuffer:this.geometry.index.array}set primitiveBuffer(e){}constructor(e,t={}){if(!e.isBufferGeometry)throw Error(`BVH: Only BufferGeometries are supported.`);if(e.index&&e.index.isInterleavedBufferAttribute)throw Error(`BVH: InterleavedBufferAttribute is not supported for the index attribute.`);if(t.useSharedArrayBuffer&&!fr())throw Error(`BVH: SharedArrayBuffer is not available.`);super(),this.geometry=e,this.resolvePrimitiveIndex=t.indirect?e=>this._indirectBuffer[e]:e=>e,this.primitiveBuffer=null,this.primitiveBufferStride=null,this._indirectBuffer=null,t={...yn,...t},t[vn]||this.init(t)}init(e){let{geometry:t,primitiveStride:n}=this;if(e.indirect){let r=br(yr(t,e.range,n),e.useSharedArrayBuffer);this._indirectBuffer=r}else gr(t,e);super.init(e),!t.boundingBox&&e.setBoundingBox&&(t.boundingBox=this.getBoundingBox(new v))}getRootRanges(e){return this.indirect?[{offset:0,count:this._indirectBuffer.length}]:yr(this.geometry,e,this.primitiveStride)}raycastObject3D(){throw Error(`BVH: raycastObject3D() not implemented`)}},Sr=class{constructor(){this.min=1/0,this.max=-1/0}setFromPointsField(e,t){let n=1/0,r=-1/0;for(let i=0,a=e.length;i<a;i++){let a=e[i][t];n=a<n?a:n,r=a>r?a:r}this.min=n,this.max=r}setFromPoints(e,t){let n=1/0,r=-1/0;for(let i=0,a=t.length;i<a;i++){let a=t[i],o=e.dot(a);n=o<n?o:n,r=o>r?o:r}this.min=n,this.max=r}isSeparated(e){return this.min>e.max||e.min>this.max}};Sr.prototype.setFromBox=(function(){let e=new D;return function(t,n){let r=n.min,i=n.max,a=1/0,o=-1/0;for(let n=0;n<=1;n++)for(let s=0;s<=1;s++)for(let c=0;c<=1;c++){e.x=r.x*n+i.x*(1-n),e.y=r.y*s+i.y*(1-s),e.z=r.z*c+i.z*(1-c);let l=t.dot(e);a=Math.min(l,a),o=Math.max(l,o)}this.min=a,this.max=o}})();var Cr=(function(){let e=new D,t=new D,n=new D;return function(r,i,a){let o=r.start,s=e,c=i.start,l=t;n.subVectors(o,c),e.subVectors(r.end,r.start),t.subVectors(i.end,i.start);let u=n.dot(l),d=l.dot(s),f=l.dot(l),p=n.dot(s),m=s.dot(s)*f-d*d,h,g;h=m===0?0:(u*d-p*f)/m,g=(u+h*d)/f,a.x=h,a.y=g}})(),wr=(function(){let e=new E,t=new D,n=new D;return function(r,i,a,o){Cr(r,i,e);let s=e.x,c=e.y;if(s>=0&&s<=1&&c>=0&&c<=1){r.at(s,a),i.at(c,o);return}if(s>=0&&s<=1){c<0?i.at(0,o):i.at(1,o),r.closestPointToPoint(o,!0,a);return}if(c>=0&&c<=1){s<0?r.at(0,a):r.at(1,a),i.closestPointToPoint(a,!0,o);return}{let e;e=s<0?r.start:r.end;let l;l=c<0?i.start:i.end;let u=t,d=n;if(r.closestPointToPoint(l,!0,t),i.closestPointToPoint(e,!0,n),u.distanceToSquared(l)<=d.distanceToSquared(e)){a.copy(u),o.copy(l);return}a.copy(e),o.copy(d);return}}})(),Tr=(function(){let e=new D,t=new D,n=new he,r=new u;return function(i,a){let{radius:o,center:s}=i,{a:c,b:l,c:u}=a;if(r.start=c,r.end=l,r.closestPointToPoint(s,!0,e).distanceTo(s)<=o||(r.start=c,r.end=u,r.closestPointToPoint(s,!0,e).distanceTo(s)<=o)||(r.start=l,r.end=u,r.closestPointToPoint(s,!0,e).distanceTo(s)<=o))return!0;let d=a.getPlane(n);if(Math.abs(d.distanceToPoint(s))<=o){let e=d.projectPoint(s,t);if(a.containsPoint(e))return!0}return!1}})(),Er=[`x`,`y`,`z`],Dr=1e-15,Or=Dr*Dr;function kr(e){return Math.abs(e)<Dr}var Ar=class extends g{constructor(...e){super(...e),this.isExtendedTriangle=!0,this.satAxes=[,,,,].fill().map(()=>new D),this.satBounds=[,,,,].fill().map(()=>new Sr),this.points=[this.a,this.b,this.c],this.plane=new he,this.isDegenerateIntoSegment=!1,this.isDegenerateIntoPoint=!1,this.degenerateSegment=new u,this.needsUpdate=!0}intersectsSphere(e){return Tr(e,this)}update(){let e=this.a,t=this.b,n=this.c,r=this.points,i=this.satAxes,a=this.satBounds,o=i[0],s=a[0];this.getNormal(o),s.setFromPoints(o,r);let c=i[1],l=a[1];c.subVectors(e,t),l.setFromPoints(c,r);let u=i[2],d=a[2];u.subVectors(t,n),d.setFromPoints(u,r);let f=i[3],p=a[3];f.subVectors(n,e),p.setFromPoints(f,r);let m=c.length(),h=u.length(),g=f.length();this.isDegenerateIntoPoint=!1,this.isDegenerateIntoSegment=!1,m<Dr?h<Dr||g<Dr?this.isDegenerateIntoPoint=!0:(this.isDegenerateIntoSegment=!0,this.degenerateSegment.start.copy(e),this.degenerateSegment.end.copy(n)):h<Dr?g<Dr?this.isDegenerateIntoPoint=!0:(this.isDegenerateIntoSegment=!0,this.degenerateSegment.start.copy(t),this.degenerateSegment.end.copy(e)):g<Dr&&(this.isDegenerateIntoSegment=!0,this.degenerateSegment.start.copy(n),this.degenerateSegment.end.copy(t)),this.plane.setFromNormalAndCoplanarPoint(o,e),this.needsUpdate=!1}};Ar.prototype.closestPointToSegment=(function(){let e=new D,t=new D,n=new u;return function(r,i=null,a=null){let{start:o,end:s}=r,c=this.points,l,u=1/0;for(let o=0;o<3;o++){let s=(o+1)%3;n.start.copy(c[o]),n.end.copy(c[s]),wr(n,r,e,t),l=e.distanceToSquared(t),l<u&&(u=l,i&&i.copy(e),a&&a.copy(t))}return this.closestPointToPoint(o,e),l=o.distanceToSquared(e),l<u&&(u=l,i&&i.copy(e),a&&a.copy(o)),this.closestPointToPoint(s,e),l=s.distanceToSquared(e),l<u&&(u=l,i&&i.copy(e),a&&a.copy(s)),Math.sqrt(u)}})(),Ar.prototype.intersectsTriangle=(function(){let e=new Ar,t=new Sr,n=new Sr,r=new D,i=new D,a=new D,o=new D,s=new u,c=new u,l=new D,d=new E,f=new E;function p(e,i,a,s){let c=r;!e.isDegenerateIntoPoint&&!e.isDegenerateIntoSegment?c.copy(e.plane.normal):c.copy(i.plane.normal);let l=e.satBounds,u=e.satAxes;for(let r=1;r<4;r++){let a=l[r],s=u[r];if(t.setFromPoints(s,i.points),a.isSeparated(t)||(o.copy(c).cross(s),t.setFromPoints(o,e.points),n.setFromPoints(o,i.points),t.isSeparated(n)))return!1}let d=i.satBounds,f=i.satAxes;for(let r=1;r<4;r++){let a=d[r],s=f[r];if(t.setFromPoints(s,e.points),a.isSeparated(t)||(o.crossVectors(c,s),t.setFromPoints(o,e.points),n.setFromPoints(o,i.points),t.isSeparated(n)))return!1}return a&&(s||console.warn(`ExtendedTriangle.intersectsTriangle: Triangles are coplanar which does not support an output edge. Setting edge to 0, 0, 0.`),a.start.set(0,0,0),a.end.set(0,0,0)),!0}function m(e,t,n,r,i,a,o,s,c,l,u){let d=o/(o-s);l.x=r+(i-r)*d,u.start.subVectors(t,e).multiplyScalar(d).add(e),d=o/(o-c),l.y=r+(a-r)*d,u.end.subVectors(n,e).multiplyScalar(d).add(e)}function h(e,t,n,r,i,a,o,s,c,l,u){if(i>0)m(e.c,e.a,e.b,r,t,n,c,o,s,l,u);else if(a>0)m(e.b,e.a,e.c,n,t,r,s,o,c,l,u);else if(s*c>0||o!=0)m(e.a,e.b,e.c,t,n,r,o,s,c,l,u);else if(s!=0)m(e.b,e.a,e.c,n,t,r,s,o,c,l,u);else if(c!=0)m(e.c,e.a,e.b,r,t,n,c,o,s,l,u);else return!0;return!1}function g(e,t,n,i){let a=t.degenerateSegment,o=e.plane.distanceToPoint(a.start),s=e.plane.distanceToPoint(a.end);return kr(o)?kr(s)?p(e,t,n,i):(n&&(n.start.copy(a.start),n.end.copy(a.start)),e.containsPoint(a.start)):kr(s)?(n&&(n.start.copy(a.end),n.end.copy(a.end)),e.containsPoint(a.end)):e.plane.intersectLine(a,r)!=null&&(n&&(n.start.copy(r),n.end.copy(r)),e.containsPoint(r))}function _(e,t,n){let r=t.a;return kr(e.plane.distanceToPoint(r))&&e.containsPoint(r)?(n&&(n.start.copy(r),n.end.copy(r)),!0):!1}function v(e,t,n){let i=e.degenerateSegment,a=t.a;return i.closestPointToPoint(a,!0,r),a.distanceToSquared(r)<Or&&(n&&(n.start.copy(a),n.end.copy(a)),!0)}function y(e,t,n,o){if(e.isDegenerateIntoSegment){if(t.isDegenerateIntoSegment){let o=e.degenerateSegment,s=t.degenerateSegment,c=i,l=a;o.delta(c),s.delta(l);let u=r.subVectors(s.start,o.start),d=c.x*l.y-c.y*l.x;if(kr(d))return!1;let f=(u.x*l.y-u.y*l.x)/d,p=-(c.x*u.y-c.y*u.x)/d;return f<0||f>1||p<0||p>1?!1:kr(o.start.z+c.z*f-(s.start.z+l.z*p))?(n&&(n.start.copy(o.start).addScaledVector(c,f),n.end.copy(o.start).addScaledVector(c,f)),!0):!1}return t.isDegenerateIntoPoint?v(e,t,n):g(t,e,n,o)}if(e.isDegenerateIntoPoint)return t.isDegenerateIntoPoint?t.a.distanceToSquared(e.a)<Or&&(n&&(n.start.copy(e.a),n.end.copy(e.a)),!0):t.isDegenerateIntoSegment?v(t,e,n):_(t,e,n);if(t.isDegenerateIntoPoint)return _(e,t,n);if(t.isDegenerateIntoSegment)return g(e,t,n,o)}return function(t,n=null,r=!1){this.needsUpdate&&this.update(),t.isExtendedTriangle?t.needsUpdate&&t.update():(e.copy(t),e.update(),t=e);let o=y(this,t,n,r);if(o!==void 0)return o;let u=this.plane,m=t.plane,g=m.distanceToPoint(this.a),_=m.distanceToPoint(this.b),v=m.distanceToPoint(this.c);kr(g)&&(g=0),kr(_)&&(_=0),kr(v)&&(v=0);let b=g*_,x=g*v;if(b>0&&x>0)return!1;let S=u.distanceToPoint(t.a),C=u.distanceToPoint(t.b),w=u.distanceToPoint(t.c);kr(S)&&(S=0),kr(C)&&(C=0),kr(w)&&(w=0);let ee=S*C,te=S*w;if(ee>0&&te>0)return!1;i.copy(u.normal),a.copy(m.normal);let ne=i.cross(a),re=0,ie=Math.abs(ne.x),ae=Math.abs(ne.y);ae>ie&&(ie=ae,re=1),Math.abs(ne.z)>ie&&(re=2);let oe=Er[re],se=this.a[oe],ce=this.b[oe],le=this.c[oe],ue=t.a[oe],T=t.b[oe],E=t.c[oe];if(h(this,se,ce,le,b,x,g,_,v,d,s)||h(t,ue,T,E,ee,te,S,C,w,f,c))return p(this,t,n,r);if(d.y<d.x){let e=d.y;d.y=d.x,d.x=e,l.copy(s.start),s.start.copy(s.end),s.end.copy(l)}if(f.y<f.x){let e=f.y;f.y=f.x,f.x=e,l.copy(c.start),c.start.copy(c.end),c.end.copy(l)}return d.y<f.x||f.y<d.x?!1:(n&&(f.x>d.x?n.start.copy(c.start):n.start.copy(s.start),f.y<d.y?n.end.copy(c.end):n.end.copy(s.end)),!0)}})(),Ar.prototype.distanceToPoint=(function(){let e=new D;return function(t){return this.closestPointToPoint(t,e),t.distanceTo(e)}})(),Ar.prototype.distanceToTriangle=(function(){let e=new D,t=new D,n=[`a`,`b`,`c`],r=new u,i=new u;return function(a,o=null,s=null){let c=o||s?r:null;if(this.intersectsTriangle(a,c,!0))return(o||s)&&(o&&c.getCenter(o),s&&c.getCenter(s)),0;let l=1/0;for(let t=0;t<3;t++){let r,i=n[t],c=a[i];this.closestPointToPoint(c,e),r=c.distanceToSquared(e),r<l&&(l=r,o&&o.copy(e),s&&s.copy(c));let u=this[i];a.closestPointToPoint(u,e),r=u.distanceToSquared(e),r<l&&(l=r,o&&o.copy(u),s&&s.copy(e))}for(let c=0;c<3;c++){let u=n[c],d=n[(c+1)%3];r.set(this[u],this[d]);for(let c=0;c<3;c++){let u=n[c],d=n[(c+1)%3];i.set(a[u],a[d]),wr(r,i,e,t);let f=e.distanceToSquared(t);f<l&&(l=f,o&&o.copy(e),s&&s.copy(t))}}return Math.sqrt(l)}})();var jr=class{constructor(e,t,n){this.isOrientedBox=!0,this.min=new D,this.max=new D,this.matrix=new T,this.invMatrix=new T,this.points=Array(8).fill().map(()=>new D),this.satAxes=[,,,].fill().map(()=>new D),this.satBounds=[,,,].fill().map(()=>new Sr),this.alignedSatBounds=[,,,].fill().map(()=>new Sr),this.needsUpdate=!1,e&&this.min.copy(e),t&&this.max.copy(t),n&&this.matrix.copy(n)}set(e,t,n){this.min.copy(e),this.max.copy(t),this.matrix.copy(n),this.needsUpdate=!0}copy(e){this.min.copy(e.min),this.max.copy(e.max),this.matrix.copy(e.matrix),this.needsUpdate=!0}};jr.prototype.update=(function(){return function(){let e=this.matrix,t=this.min,n=this.max,r=this.points;for(let i=0;i<=1;i++)for(let a=0;a<=1;a++)for(let o=0;o<=1;o++){let s=r[1*i|2*a|4*o];s.x=i?n.x:t.x,s.y=a?n.y:t.y,s.z=o?n.z:t.z,s.applyMatrix4(e)}let i=this.satBounds,a=this.satAxes,o=r[0];for(let e=0;e<3;e++){let t=a[e],n=i[e],s=r[1<<e];t.subVectors(o,s),n.setFromPoints(t,r)}let s=this.alignedSatBounds;s[0].setFromPointsField(r,`x`),s[1].setFromPointsField(r,`y`),s[2].setFromPointsField(r,`z`),this.invMatrix.copy(this.matrix).invert(),this.needsUpdate=!1}})(),jr.prototype.intersectsBox=(function(){let e=new Sr;return function(t){this.needsUpdate&&this.update();let n=t.min,r=t.max,i=this.satBounds,a=this.satAxes,o=this.alignedSatBounds;if(e.min=n.x,e.max=r.x,o[0].isSeparated(e)||(e.min=n.y,e.max=r.y,o[1].isSeparated(e))||(e.min=n.z,e.max=r.z,o[2].isSeparated(e)))return!1;for(let n=0;n<3;n++){let r=a[n],o=i[n];if(e.setFromBox(r,t),o.isSeparated(e))return!1}return!0}})(),jr.prototype.intersectsTriangle=(function(){let e=new Ar,t=[,,,],n=new Sr,r=new Sr,i=new D;return function(a){this.needsUpdate&&this.update(),a.isExtendedTriangle?a.needsUpdate&&a.update():(e.copy(a),e.update(),a=e);let o=this.satBounds,s=this.satAxes;t[0]=a.a,t[1]=a.b,t[2]=a.c;for(let e=0;e<3;e++){let r=o[e],i=s[e];if(n.setFromPoints(i,t),r.isSeparated(n))return!1}let c=a.satBounds,l=a.satAxes,u=this.points;for(let e=0;e<3;e++){let t=c[e],r=l[e];if(n.setFromPoints(r,u),t.isSeparated(n))return!1}for(let e=0;e<3;e++){let a=s[e];for(let e=0;e<4;e++){let o=l[e];if(i.crossVectors(a,o),n.setFromPoints(i,t),r.setFromPoints(i,u),n.isSeparated(r))return!1}}return!0}})(),jr.prototype.closestPointToPoint=(function(){return function(e,t){return this.needsUpdate&&this.update(),t.copy(e).applyMatrix4(this.invMatrix).clamp(this.min,this.max).applyMatrix4(this.matrix),t}})(),jr.prototype.distanceToPoint=(function(){let e=new D;return function(t){return this.closestPointToPoint(t,e),t.distanceTo(e)}})(),jr.prototype.distanceToBox=(function(){let e=[`x`,`y`,`z`],t=Array(12).fill().map(()=>new u),n=Array(12).fill().map(()=>new u),r=new D,i=new D;return function(a,o=0,s=null,c=null){if(this.needsUpdate&&this.update(),this.intersectsBox(a))return(s||c)&&(a.getCenter(i),this.closestPointToPoint(i,r),a.closestPointToPoint(r,i),s&&s.copy(r),c&&c.copy(i)),0;let l=o*o,u=a.min,d=a.max,f=this.points,p=1/0;for(let e=0;e<8;e++){let t=f[e];i.copy(t).clamp(u,d);let n=t.distanceToSquared(i);if(n<p&&(p=n,s&&s.copy(t),c&&c.copy(i),n<l))return Math.sqrt(n)}let m=0;for(let r=0;r<3;r++)for(let i=0;i<=1;i++)for(let a=0;a<=1;a++){let o=(r+1)%3,s=(r+2)%3,c=i<<o|a<<s,l=1<<r|i<<o|a<<s,p=f[c],h=f[l];t[m].set(p,h);let g=e[r],_=e[o],v=e[s],y=n[m],b=y.start,x=y.end;b[g]=u[g],b[_]=i?u[_]:d[_],b[v]=a?u[v]:d[_],x[g]=d[g],x[_]=i?u[_]:d[_],x[v]=a?u[v]:d[_],m++}for(let e=0;e<=1;e++)for(let t=0;t<=1;t++)for(let n=0;n<=1;n++){i.x=e?d.x:u.x,i.y=t?d.y:u.y,i.z=n?d.z:u.z,this.closestPointToPoint(i,r);let a=i.distanceToSquared(r);if(a<p&&(p=a,s&&s.copy(r),c&&c.copy(i),a<l))return Math.sqrt(a)}for(let e=0;e<12;e++){let a=t[e];for(let e=0;e<12;e++){let t=n[e];wr(a,t,r,i);let o=r.distanceToSquared(i);if(o<p&&(p=o,s&&s.copy(r),c&&c.copy(i),o<l))return Math.sqrt(o)}}return Math.sqrt(p)}})();var Mr=new class extends Gn{constructor(){super(()=>new Ar)}},Nr=new D,Pr=new D;function Fr(e,t,n={},r=0,i=1/0){let a=r*r,o=i*i,s=1/0,c=null;if(e.shapecast({boundsTraverseOrder:e=>(Nr.copy(t).clamp(e.min,e.max),Nr.distanceToSquared(t)),intersectsBounds:(e,t,n)=>n<s&&n<o,intersectsTriangle:(e,n)=>{e.closestPointToPoint(t,Nr);let r=t.distanceToSquared(Nr);return r<s&&(Pr.copy(Nr),s=r,c=n),r<a}}),s===1/0)return null;let l=Math.sqrt(s);return n.point?n.point.copy(Pr):n.point=Pr.clone(),n.distance=l,n.faceIndex=c,n}var Ir=!0,Lr=new D,Rr=new D,zr=new D,Br=new E,Vr=new E,Hr=new E,Ur=new D,Wr=new D,Gr=new D,Kr=new D;function qr(e,t,n,r,i,a,o,s){let c;if(c=a===1?e.intersectTriangle(r,n,t,!0,i):e.intersectTriangle(t,n,r,a!==2,i),c===null)return null;let l=e.origin.distanceTo(i);return l<o||l>s?null:{distance:l,point:i.clone()}}function Jr(e,t,n,r,i,a,o,s,c,l,u){Lr.fromBufferAttribute(t,a),Rr.fromBufferAttribute(t,o),zr.fromBufferAttribute(t,s);let d=qr(e,Lr,Rr,zr,Kr,c,l,u);if(d){if(r){Br.fromBufferAttribute(r,a),Vr.fromBufferAttribute(r,o),Hr.fromBufferAttribute(r,s),d.uv=new E;let e=g.getInterpolation(Kr,Lr,Rr,zr,Br,Vr,Hr,d.uv);Ir||(d.uv=e)}if(i){Br.fromBufferAttribute(i,a),Vr.fromBufferAttribute(i,o),Hr.fromBufferAttribute(i,s),d.uv1=new E;let e=g.getInterpolation(Kr,Lr,Rr,zr,Br,Vr,Hr,d.uv1);Ir||(d.uv1=e)}if(n){Ur.fromBufferAttribute(n,a),Wr.fromBufferAttribute(n,o),Gr.fromBufferAttribute(n,s),d.normal=new D;let t=g.getInterpolation(Kr,Lr,Rr,zr,Ur,Wr,Gr,d.normal);d.normal.dot(e.direction)>0&&d.normal.multiplyScalar(-1),Ir||(d.normal=t)}let t={a,b:o,c:s,normal:new D,materialIndex:0};if(g.getNormal(Lr,Rr,zr,t.normal),d.face=t,d.faceIndex=a,Ir){let e=new D;g.getBarycoord(Kr,Lr,Rr,zr,e),d.barycoord=e}}return d}function Yr(e){return e&&e.isMaterial?e.side:e}function Xr(e,t,n,r,i,a,o){let s=r*3,c=s+0,l=s+1,u=s+2,{index:d,groups:f}=e;e.index&&(c=d.getX(c),l=d.getX(l),u=d.getX(u));let{position:p,normal:m,uv:h,uv1:g}=e.attributes;if(Array.isArray(t)){let e=r*3;for(let s=0,d=f.length;s<d;s++){let{start:d,count:_,materialIndex:v}=f[s];if(e>=d&&e<d+_){let e=Yr(t[v]),s=Jr(n,p,m,h,g,c,l,u,e,a,o);if(s){if(s.faceIndex=r,s.face.materialIndex=v,i)i.push(s);else return s}}}}else{let e=Yr(t),s=Jr(n,p,m,h,g,c,l,u,e,a,o);if(s){if(s.faceIndex=r,s.face.materialIndex=0,i)i.push(s);else return s}}return null}function K(e,t,n,r){let i=e.a,a=e.b,o=e.c,s=t,c=t+1,l=t+2;n&&(s=n.getX(s),c=n.getX(c),l=n.getX(l)),i.x=r.getX(s),i.y=r.getY(s),i.z=r.getZ(s),a.x=r.getX(c),a.y=r.getY(c),a.z=r.getZ(c),o.x=r.getX(l),o.y=r.getY(l),o.z=r.getZ(l)}function Zr(e,t,n,r,i,a,o,s){let{geometry:c,_indirectBuffer:l}=e;for(let e=r,l=r+i;e<l;e++)Xr(c,t,n,e,a,o,s)}function Qr(e,t,n,r,i,a,o){let{geometry:s,_indirectBuffer:c}=e,l=1/0,u=null;for(let e=r,c=r+i;e<c;e++){let r;r=Xr(s,t,n,e,null,a,o),r&&r.distance<l&&(u=r,l=r.distance)}return u}function $r(e,t,n,r,i,a,o){let{geometry:s}=n,{index:c}=s,l=s.attributes.position;for(let n=e,s=t+e;n<s;n++){let e;if(e=n,K(o,e*3,c,l),o.needsUpdate=!0,r(o,e,i,a))return!0}return!1}function ei(e,t=null){t&&Array.isArray(t)&&(t=new Set(t));let n=e.geometry,r=n.index?n.index.array:null,i=n.attributes.position,a,o,s,c,l=0,u=e._roots;for(let e=0,t=u.length;e<t;e++)a=u[e],o=new Uint32Array(a),s=new Uint16Array(a),c=new Float32Array(a),d(0,l),l+=a.byteLength;function d(e,n,a=!1){let l=e*2;if(z(l,s)){let t=B(e,o),n=V(l,s),a=1/0,u=1/0,d=1/0,f=-1/0,p=-1/0,m=-1/0;for(let e=3*t,o=3*(t+n);e<o;e++){let t=r[e],n=i.getX(t),o=i.getY(t),s=i.getZ(t);n<a&&(a=n),n>f&&(f=n),o<u&&(u=o),o>p&&(p=o),s<d&&(d=s),s>m&&(m=s)}return c[e+0]!==a||c[e+1]!==u||c[e+2]!==d||c[e+3]!==f||c[e+4]!==p||c[e+5]!==m?(c[e+0]=a,c[e+1]=u,c[e+2]=d,c[e+3]=f,c[e+4]=p,c[e+5]=m,!0):!1}{let r=H(e),i=U(e,o),s=a,l=!1,u=!1;if(t){if(!s){let e=r/8+n/32,a=i/8+n/32;l=t.has(e),u=t.has(a),s=!l&&!u}}else l=!0,u=!0;let f=s||l,p=s||u,m=!1;f&&(m=d(r,n,s));let h=!1;p&&(h=d(i,n,s));let g=m||h;if(g)for(let t=0;t<3;t++){let n=r+t,a=i+t,o=c[n],s=c[n+3],l=c[a],u=c[a+3];c[e+t]=o<l?o:l,c[e+t+3]=s>u?s:u}return g}}}function ti(e,t,n,r,i){let a,o,s,c,l,u,d=1/n.direction.x,f=1/n.direction.y,p=1/n.direction.z,m=n.origin.x,h=n.origin.y,g=n.origin.z,_=t[e],v=t[e+3],y=t[e+1],b=t[e+3+1],x=t[e+2],S=t[e+3+2];return d>=0?(a=(_-m)*d,o=(v-m)*d):(a=(v-m)*d,o=(_-m)*d),f>=0?(s=(y-h)*f,c=(b-h)*f):(s=(b-h)*f,c=(y-h)*f),a>c||s>o||((s>a||isNaN(a))&&(a=s),(c<o||isNaN(o))&&(o=c),p>=0?(l=(x-g)*p,u=(S-g)*p):(l=(S-g)*p,u=(x-g)*p),a>u||l>o)?!1:((l>a||a!==a)&&(a=l),(u<o||o!==o)&&(o=u),a<=i&&o>=r)}function ni(e,t,n,r,i,a,o,s){let{geometry:c,_indirectBuffer:l}=e;for(let e=r,u=r+i;e<u;e++)Xr(c,t,n,l?l[e]:e,a,o,s)}function ri(e,t,n,r,i,a,o){let{geometry:s,_indirectBuffer:c}=e,l=1/0,u=null;for(let e=r,d=r+i;e<d;e++){let r;r=Xr(s,t,n,c?c[e]:e,null,a,o),r&&r.distance<l&&(u=r,l=r.distance)}return u}function ii(e,t,n,r,i,a,o){let{geometry:s}=n,{index:c}=s,l=s.attributes.position;for(let s=e,u=t+e;s<u;s++){let e;if(e=n.resolveTriangleIndex(s),K(o,e*3,c,l),o.needsUpdate=!0,r(o,e,i,a))return!0}return!1}function ai(e,t,n,r,i,a,o){G.setBuffer(e._roots[t]),oi(0,e,n,r,i,a,o),G.clearBuffer()}function oi(e,t,n,r,i,a,o){let{float32Array:s,uint16Array:c,uint32Array:l}=G,u=e*2;if(z(u,c))Zr(t,n,r,B(e,l),V(u,c),i,a,o);else{let c=H(e);ti(c,s,r,a,o)&&oi(c,t,n,r,i,a,o);let u=U(e,l);ti(u,s,r,a,o)&&oi(u,t,n,r,i,a,o)}}var si=[`x`,`y`,`z`];function ci(e,t,n,r,i,a){G.setBuffer(e._roots[t]);let o=li(0,e,n,r,i,a);return G.clearBuffer(),o}function li(e,t,n,r,i,a){let{float32Array:o,uint16Array:s,uint32Array:c}=G,l=e*2;if(z(l,s))return Qr(t,n,r,B(e,c),V(l,s),i,a);{let s=Tn(e,c),l=si[s],u=r.direction[l]>=0,d,f;u?(d=H(e),f=U(e,c)):(d=U(e,c),f=H(e));let p=ti(d,o,r,i,a)?li(d,t,n,r,i,a):null;if(p){let e=p.point[l];if(u?e<=o[f+s]:e>=o[f+s+3])return p}let m=ti(f,o,r,i,a)?li(f,t,n,r,i,a):null;return p&&m?p.distance<=m.distance?p:m:p||m||null}}var ui=new v,di=new Ar,fi=new Ar,pi=new T,mi=new jr,hi=new jr;function gi(e,t,n,r){G.setBuffer(e._roots[t]);let i=_i(0,e,n,r);return G.clearBuffer(),i}function _i(e,t,n,r,i=null){let{float32Array:a,uint16Array:o,uint32Array:s}=G,c=e*2;if(i===null&&(n.boundingBox||n.computeBoundingBox(),mi.set(n.boundingBox.min,n.boundingBox.max,r),i=mi),z(c,o)){let i=t.geometry,l=i.index,u=i.attributes.position,d=n.index,f=n.attributes.position,p=B(e,s),m=V(c,o);if(pi.copy(r).invert(),n.boundsTree)return R(W(e),a,hi),hi.matrix.copy(pi),hi.needsUpdate=!0,n.boundsTree.shapecast({intersectsBounds:e=>hi.intersectsBox(e),intersectsTriangle:e=>{e.a.applyMatrix4(r),e.b.applyMatrix4(r),e.c.applyMatrix4(r),e.needsUpdate=!0;for(let t=p*3,n=(m+p)*3;t<n;t+=3)if(K(fi,t,l,u),fi.needsUpdate=!0,e.intersectsTriangle(fi))return!0;return!1}});{let e=mr(n);for(let t=p*3,n=(m+p)*3;t<n;t+=3){K(di,t,l,u),di.a.applyMatrix4(pi),di.b.applyMatrix4(pi),di.c.applyMatrix4(pi),di.needsUpdate=!0;for(let t=0,n=e*3;t<n;t+=3)if(K(fi,t,d,f),fi.needsUpdate=!0,di.intersectsTriangle(fi))return!0}}}else{let o=H(e),c=U(e,s);return R(W(o),a,ui),!!(i.intersectsBox(ui)&&_i(o,t,n,r,i)||(R(W(c),a,ui),i.intersectsBox(ui)&&_i(c,t,n,r,i)))}}var vi=new T,yi=new jr,bi=new jr,xi=new D,Si=new D,Ci=new D,wi=new D;function Ti(e,t,n,r={},i={},a=0,o=1/0){t.boundingBox||t.computeBoundingBox(),yi.set(t.boundingBox.min,t.boundingBox.max,n),yi.needsUpdate=!0;let s=e.geometry,c=s.attributes.position,l=s.index,u=t.attributes.position,d=t.index,f=Mr.getPrimitive(),p=Mr.getPrimitive(),m=xi,h=Si,g=null,_=null;i&&(g=Ci,_=wi);let v=1/0,y=null,b=null;return vi.copy(n).invert(),bi.matrix.copy(vi),e.shapecast({boundsTraverseOrder:e=>yi.distanceToBox(e),intersectsBounds:(e,t,n)=>n<v&&n<o&&(t&&(bi.min.copy(e.min),bi.max.copy(e.max),bi.needsUpdate=!0),!0),intersectsRange:(e,r)=>{if(t.boundsTree)return t.boundsTree.shapecast({boundsTraverseOrder:e=>bi.distanceToBox(e),intersectsBounds:(e,t,n)=>n<v&&n<o,intersectsRange:(t,i)=>{for(let o=t,s=t+i;o<s;o++){K(p,3*o,d,u),p.a.applyMatrix4(n),p.b.applyMatrix4(n),p.c.applyMatrix4(n),p.needsUpdate=!0;for(let t=e,n=e+r;t<n;t++){K(f,3*t,l,c),f.needsUpdate=!0;let e=f.distanceToTriangle(p,m,g);if(e<v&&(h.copy(m),_&&_.copy(g),v=e,y=t,b=o),e<a)return!0}}}});{let i=mr(t);for(let t=0,o=i;t<o;t++){K(p,3*t,d,u),p.a.applyMatrix4(n),p.b.applyMatrix4(n),p.c.applyMatrix4(n),p.needsUpdate=!0;for(let n=e,i=e+r;n<i;n++){K(f,3*n,l,c),f.needsUpdate=!0;let e=f.distanceToTriangle(p,m,g);if(e<v&&(h.copy(m),_&&_.copy(g),v=e,y=n,b=t),e<a)return!0}}}}}),Mr.releasePrimitive(f),Mr.releasePrimitive(p),v===1/0?null:(r.point?r.point.copy(h):r.point=h.clone(),r.distance=v,r.faceIndex=y,i&&(i.point?i.point.copy(_):i.point=_.clone(),i.point.applyMatrix4(vi),h.applyMatrix4(vi),i.distance=h.sub(i.point).length(),i.faceIndex=b),r)}function Ei(e,t=null){t&&Array.isArray(t)&&(t=new Set(t));let n=e.geometry,r=n.index?n.index.array:null,i=n.attributes.position,a,o,s,c,l=0,u=e._roots;for(let e=0,t=u.length;e<t;e++)a=u[e],o=new Uint32Array(a),s=new Uint16Array(a),c=new Float32Array(a),d(0,l),l+=a.byteLength;function d(n,a,l=!1){let u=n*2;if(z(u,s)){let t=B(n,o),a=V(u,s),l=1/0,d=1/0,f=1/0,p=-1/0,m=-1/0,h=-1/0;for(let n=t,o=t+a;n<o;n++){let t=3*e.resolveTriangleIndex(n);for(let e=0;e<3;e++){let n=t+e;n=r?r[n]:n;let a=i.getX(n),o=i.getY(n),s=i.getZ(n);a<l&&(l=a),a>p&&(p=a),o<d&&(d=o),o>m&&(m=o),s<f&&(f=s),s>h&&(h=s)}}return c[n+0]!==l||c[n+1]!==d||c[n+2]!==f||c[n+3]!==p||c[n+4]!==m||c[n+5]!==h?(c[n+0]=l,c[n+1]=d,c[n+2]=f,c[n+3]=p,c[n+4]=m,c[n+5]=h,!0):!1}{let e=H(n),r=U(n,o),i=l,s=!1,u=!1;if(t){if(!i){let n=e/8+a/32,o=r/8+a/32;s=t.has(n),u=t.has(o),i=!s&&!u}}else s=!0,u=!0;let f=i||s,p=i||u,m=!1;f&&(m=d(e,a,i));let h=!1;p&&(h=d(r,a,i));let g=m||h;if(g)for(let t=0;t<3;t++){let i=e+t,a=r+t,o=c[i],s=c[i+3],l=c[a],u=c[a+3];c[n+t]=o<l?o:l,c[n+t+3]=s>u?s:u}return g}}}function Di(e,t,n,r,i,a,o){G.setBuffer(e._roots[t]),Oi(0,e,n,r,i,a,o),G.clearBuffer()}function Oi(e,t,n,r,i,a,o){let{float32Array:s,uint16Array:c,uint32Array:l}=G,u=e*2;if(z(u,c))ni(t,n,r,B(e,l),V(u,c),i,a,o);else{let c=H(e);ti(c,s,r,a,o)&&Oi(c,t,n,r,i,a,o);let u=U(e,l);ti(u,s,r,a,o)&&Oi(u,t,n,r,i,a,o)}}var ki=[`x`,`y`,`z`];function Ai(e,t,n,r,i,a){G.setBuffer(e._roots[t]);let o=ji(0,e,n,r,i,a);return G.clearBuffer(),o}function ji(e,t,n,r,i,a){let{float32Array:o,uint16Array:s,uint32Array:c}=G,l=e*2;if(z(l,s))return ri(t,n,r,B(e,c),V(l,s),i,a);{let s=Tn(e,c),l=ki[s],u=r.direction[l]>=0,d,f;u?(d=H(e),f=U(e,c)):(d=U(e,c),f=H(e));let p=ti(d,o,r,i,a)?ji(d,t,n,r,i,a):null;if(p){let e=p.point[l];if(u?e<=o[f+s]:e>=o[f+s+3])return p}let m=ti(f,o,r,i,a)?ji(f,t,n,r,i,a):null;return p&&m?p.distance<=m.distance?p:m:p||m||null}}var Mi=new v,Ni=new Ar,Pi=new Ar,Fi=new T,Ii=new jr,Li=new jr;function Ri(e,t,n,r){G.setBuffer(e._roots[t]);let i=zi(0,e,n,r);return G.clearBuffer(),i}function zi(e,t,n,r,i=null){let{float32Array:a,uint16Array:o,uint32Array:s}=G,c=e*2;if(i===null&&(n.boundingBox||n.computeBoundingBox(),Ii.set(n.boundingBox.min,n.boundingBox.max,r),i=Ii),z(c,o)){let i=t.geometry,l=i.index,u=i.attributes.position,d=n.index,f=n.attributes.position,p=B(e,s),m=V(c,o);if(Fi.copy(r).invert(),n.boundsTree)return R(W(e),a,Li),Li.matrix.copy(Fi),Li.needsUpdate=!0,n.boundsTree.shapecast({intersectsBounds:e=>Li.intersectsBox(e),intersectsTriangle:e=>{e.a.applyMatrix4(r),e.b.applyMatrix4(r),e.c.applyMatrix4(r),e.needsUpdate=!0;for(let n=p,r=m+p;n<r;n++)if(K(Pi,3*t.resolveTriangleIndex(n),l,u),Pi.needsUpdate=!0,e.intersectsTriangle(Pi))return!0;return!1}});{let e=mr(n);for(let n=p,r=m+p;n<r;n++){K(Ni,3*t.resolveTriangleIndex(n),l,u),Ni.a.applyMatrix4(Fi),Ni.b.applyMatrix4(Fi),Ni.c.applyMatrix4(Fi),Ni.needsUpdate=!0;for(let t=0,n=e*3;t<n;t+=3)if(K(Pi,t,d,f),Pi.needsUpdate=!0,Ni.intersectsTriangle(Pi))return!0}}}else{let o=H(e),c=U(e,s);return R(W(o),a,Mi),!!(i.intersectsBox(Mi)&&zi(o,t,n,r,i)||(R(W(c),a,Mi),i.intersectsBox(Mi)&&zi(c,t,n,r,i)))}}var Bi=new T,Vi=new jr,Hi=new jr,Ui=new D,Wi=new D,Gi=new D,Ki=new D;function qi(e,t,n,r={},i={},a=0,o=1/0){t.boundingBox||t.computeBoundingBox(),Vi.set(t.boundingBox.min,t.boundingBox.max,n),Vi.needsUpdate=!0;let s=e.geometry,c=s.attributes.position,l=s.index,u=t.attributes.position,d=t.index,f=Mr.getPrimitive(),p=Mr.getPrimitive(),m=Ui,h=Wi,g=null,_=null;i&&(g=Gi,_=Ki);let v=1/0,y=null,b=null;return Bi.copy(n).invert(),Hi.matrix.copy(Bi),e.shapecast({boundsTraverseOrder:e=>Vi.distanceToBox(e),intersectsBounds:(e,t,n)=>n<v&&n<o&&(t&&(Hi.min.copy(e.min),Hi.max.copy(e.max),Hi.needsUpdate=!0),!0),intersectsRange:(r,i)=>{if(t.boundsTree){let s=t.boundsTree;return s.shapecast({boundsTraverseOrder:e=>Hi.distanceToBox(e),intersectsBounds:(e,t,n)=>n<v&&n<o,intersectsRange:(t,o)=>{for(let x=t,S=t+o;x<S;x++){let t=s.resolveTriangleIndex(x);K(p,3*t,d,u),p.a.applyMatrix4(n),p.b.applyMatrix4(n),p.c.applyMatrix4(n),p.needsUpdate=!0;for(let t=r,n=r+i;t<n;t++){let n=e.resolveTriangleIndex(t);K(f,3*n,l,c),f.needsUpdate=!0;let r=f.distanceToTriangle(p,m,g);if(r<v&&(h.copy(m),_&&_.copy(g),v=r,y=t,b=x),r<a)return!0}}}})}{let o=mr(t);for(let t=0,s=o;t<s;t++){K(p,3*t,d,u),p.a.applyMatrix4(n),p.b.applyMatrix4(n),p.c.applyMatrix4(n),p.needsUpdate=!0;for(let n=r,o=r+i;n<o;n++){let r=e.resolveTriangleIndex(n);K(f,3*r,l,c),f.needsUpdate=!0;let i=f.distanceToTriangle(p,m,g);if(i<v&&(h.copy(m),_&&_.copy(g),v=i,y=n,b=t),i<a)return!0}}}}}),Mr.releasePrimitive(f),Mr.releasePrimitive(p),v===1/0?null:(r.point?r.point.copy(h):r.point=h.clone(),r.distance=v,r.faceIndex=y,i&&(i.point?i.point.copy(_):i.point=_.clone(),i.point.applyMatrix4(Bi),h.applyMatrix4(Bi),i.distance=h.sub(i.point).length(),i.faceIndex=b),r)}function Ji(e,t,n){return e===null?null:(e.point.applyMatrix4(t.matrixWorld),e.distance=e.point.distanceTo(n.ray.origin),e.object=t,e)}var Yi=new jr,Xi=new _e,Zi=new D,Qi=new T,$i=new D,ea=[`getX`,`getY`,`getZ`],ta=class e extends xr{static serialize(e,t={}){t={cloneBuffers:!0,...t};let n=e.geometry,r=e._roots,i=e._indirectBuffer,a=n.getIndex(),o={version:1,roots:null,index:null,indirectBuffer:null};return t.cloneBuffers?(o.roots=r.map(e=>e.slice()),o.index=a?a.array.slice():null,o.indirectBuffer=i?i.slice():null):(o.roots=r,o.index=a?a.array:null,o.indirectBuffer=i),o}static deserialize(t,n,r={}){r={setIndex:!0,indirect:!!t.indirectBuffer,...r};let{index:i,roots:a,indirectBuffer:o}=t;t.version||(console.warn(`MeshBVH.deserialize: Serialization format has been changed and will be fixed up. It is recommended to regenerate any stored serialized data.`),c(a));let s=new e(n,{...r,[vn]:!0});if(s._roots=a,s._indirectBuffer=o||null,r.setIndex){let e=n.getIndex();if(e===null){let e=new Te(t.index,1,!1);n.setIndex(e)}else e.array!==i&&(e.array.set(i),e.needsUpdate=!0)}return s;function c(e){for(let t=0;t<e.length;t++){let n=e[t],r=new Uint32Array(n),i=new Uint16Array(n);for(let e=0,t=n.byteLength/32;e<t;e++){let t=8*e;z(2*t,i)||(r[t+6]=r[t+6]/8-e)}}}}get primitiveStride(){return 3}get resolveTriangleIndex(){return this.resolvePrimitiveIndex}constructor(e,t={}){t.maxLeafTris&&(console.warn(`MeshBVH: "maxLeafTris" option has been deprecated. Use "targetLeafSize", instead.`),t={...t,targetLeafSize:t.maxLeafTris}),super(e,t)}shiftTriangleOffsets(e){return super.shiftPrimitiveOffsets(e)}writePrimitiveBounds(e,t,n){let r=this.geometry,i=this._indirectBuffer,a=r.attributes.position,o=r.index?r.index.array:null,s=(i?i[e]:e)*3,c=s+0,l=s+1,u=s+2;o&&(c=o[c],l=o[l],u=o[u]);for(let e=0;e<3;e++){let r=a[ea[e]](c),i=a[ea[e]](l),o=a[ea[e]](u),s=r;i<s&&(s=i),o<s&&(s=o);let d=r;i>d&&(d=i),o>d&&(d=o),t[n+e]=s,t[n+e+3]=d}return t}computePrimitiveBounds(e,t,n){let r=this.geometry,i=this._indirectBuffer,a=r.attributes.position,o=r.index?r.index.array:null,s=a.normalized;if(e<0||t+e-n.offset>n.length/6)throw Error(`MeshBVH: compute triangle bounds range is invalid.`);let c=a.array,l=a.offset||0,u=3;a.isInterleavedBufferAttribute&&(u=a.data.stride);let d=[`getX`,`getY`,`getZ`],f=n.offset;for(let r=e,p=e+t;r<p;r++){let e=(i?i[r]:r)*3,t=(r-f)*6,p=e+0,m=e+1,h=e+2;o&&(p=o[p],m=o[m],h=o[h]),s||(p=p*u+l,m=m*u+l,h=h*u+l);for(let e=0;e<3;e++){let r,i,o;s?(r=a[d[e]](p),i=a[d[e]](m),o=a[d[e]](h)):(r=c[p+e],i=c[m+e],o=c[h+e]);let l=r;i<l&&(l=i),o<l&&(l=o);let u=r;i>u&&(u=i),o>u&&(u=o);let f=(u-l)/2,g=e*2;n[t+g+0]=l+f,n[t+g+1]=f+(Math.abs(l)+f)*_n}}return n}raycastObject3D(e,t,n=[]){let{material:r}=e;if(r===void 0)return;Qi.copy(e.matrixWorld).invert(),Xi.copy(t.ray).applyMatrix4(Qi),$i.setFromMatrixScale(e.matrixWorld),Zi.copy(Xi.direction).multiply($i);let i=Zi.length(),a=t.near/i,o=t.far/i;if(t.firstHitOnly===!0){let i=this.raycastFirst(Xi,r,a,o);i=Ji(i,e,t),i&&n.push(i)}else{let i=this.raycast(Xi,r,a,o);for(let r=0,a=i.length;r<a;r++){let a=Ji(i[r],e,t);a&&n.push(a)}}return n}refit(e=null){return(this.indirect?Ei:ei)(this,e)}raycast(e,t=0,n=0,r=1/0){let i=this._roots,a=[],o=this.indirect?Di:ai;for(let s=0,c=i.length;s<c;s++)o(this,s,t,e,a,n,r);return a}raycastFirst(e,t=0,n=0,r=1/0){let i=this._roots,a=null,o=this.indirect?Ai:ci;for(let s=0,c=i.length;s<c;s++){let i=o(this,s,t,e,n,r);i!=null&&(a==null||i.distance<a.distance)&&(a=i)}return a}intersectsGeometry(e,t){let n=!1,r=this._roots,i=this.indirect?Ri:gi;for(let a=0,o=r.length;a<o&&(n=i(this,a,e,t),!n);a++);return n}shapecast(e){let t=Mr.getPrimitive(),n=super.shapecast({...e,intersectsPrimitive:e.intersectsTriangle,scratchPrimitive:t,iterate:this.indirect?ii:$r});return Mr.releasePrimitive(t),n}bvhcast(t,n,r){let{intersectsRanges:i,intersectsTriangles:a}=r,o=Mr.getPrimitive(),s=this.geometry.index,c=this.geometry.attributes.position,l=this.indirect?e=>{let t=this.resolveTriangleIndex(e);K(o,t*3,s,c)}:e=>{K(o,e*3,s,c)},u=Mr.getPrimitive(),d=t.geometry.index,f=t.geometry.attributes.position,p=t.indirect?e=>{let n=t.resolveTriangleIndex(e);K(u,n*3,d,f)}:e=>{K(u,e*3,d,f)};if(a){if(!(t instanceof e))throw Error(`MeshBVH: "intersectsTriangles" callback can only be used with another MeshBVH.`);let r=(e,t,r,i,s,c,d,f)=>{for(let m=r,h=r+i;m<h;m++){p(m),u.a.applyMatrix4(n),u.b.applyMatrix4(n),u.c.applyMatrix4(n),u.needsUpdate=!0;for(let n=e,r=e+t;n<r;n++)if(l(n),o.needsUpdate=!0,a(o,u,n,m,s,c,d,f))return!0}return!1};if(i){let e=i;i=function(t,n,i,a,o,s,c,l){return e(t,n,i,a,o,s,c,l)?!0:r(t,n,i,a,o,s,c,l)}}else i=r}return super.bvhcast(t,n,{intersectsRanges:i})}intersectsBox(e,t){return Yi.set(e.min,e.max,t),Yi.needsUpdate=!0,this.shapecast({intersectsBounds:e=>Yi.intersectsBox(e),intersectsTriangle:e=>Yi.intersectsTriangle(e)})}intersectsSphere(e){return this.shapecast({intersectsBounds:t=>e.intersectsBox(t),intersectsTriangle:t=>t.intersectsSphere(e)})}closestPointToGeometry(e,t,n={},r={},i=0,a=1/0){return(this.indirect?qi:Ti)(this,e,t,n,r,i,a)}closestPointToPoint(e,t={},n=0,r=1/0){return Fr(this,e,t,n,r)}},na=new D,ra=new D,ia=new D,aa=new _e,oa=new T,sa=new D,ca=new D,la=[`x`,`y`,`z`],ua=!0,da=new E,fa=new E,pa=new E,ma=new D,ha=new D,ga=new D,_a=class extends xr{get primitiveStride(){return 3}constructor(e,t={}){if(!e.isMesh)throw Error(`SkinnedMeshBVH: First argument must be a Mesh.`);super(e.geometry,{...t,[vn]:!0}),this.mesh=e,t[vn]||this.init(t)}writePrimitiveBounds(e,t,n){let{mesh:r,geometry:i}=this,a=this._indirectBuffer,o=i.index?i.index.array:null,s=(a?a[e]:e)*3,c=s+0,l=s+1,u=s+2;o&&(c=o[c],l=o[l],u=o[u]),r.getVertexPosition(c,na),r.getVertexPosition(l,ra),r.getVertexPosition(u,ia);for(let e=0;e<3;e++){let r=la[e],i=na[r],a=ra[r],o=ia[r],s=i;a<s&&(s=a),o<s&&(s=o);let c=i;a>c&&(c=a),o>c&&(c=o),t[n+e]=s,t[n+e+3]=c}return t}shapecast(e){let t=new Ar;return super.shapecast({...e,intersectsPrimitive:e.intersectsTriangle,scratchPrimitive:t,iterate:va})}raycastObject3D(e,t,n=[]){let{material:r}=e;if(r===void 0)return;let{matrixWorld:i}=e,{firstHitOnly:a}=t;oa.copy(i).invert(),aa.copy(t.ray).applyMatrix4(oa);let o=null,s=1/0;return this.shapecast({boundsTraverseOrder:e=>e.distanceToPoint(aa.origin),intersectsBounds:e=>{if(a){if(!aa.intersectBox(e,ca))return 0;let n;return e.containsPoint(aa.origin)?n=0:(ca.applyMatrix4(i),n=t.ray.origin.distanceTo(ca)),+(n<s)}return+!!aa.intersectsBox(e)},intersectsTriangle:(c,l)=>{let u=null;if(u=r.side===0?aa.intersectTriangle(c.a,c.b,c.c,!0,sa):r.side===1?aa.intersectTriangle(c.c,c.b,c.a,!0,sa):aa.intersectTriangle(c.a,c.b,c.c,!1,sa),!u)return;u=u.clone().applyMatrix4(i);let d=t.ray.origin.distanceTo(u);if(d>=t.near&&d<=t.far){if(a&&d>=s)return;let{geometry:t}=this,{index:r}=t,i=this.resolvePrimitiveIndex(l),f=i*3,p=f+0,m=f+1,h=f+2;r&&(p=r.array[p],m=r.array[m],h=r.array[h]);let _={distance:d,point:u.clone(),object:e,uv:null,uv1:null,normal:null,face:{a:p,b:m,c:h,normal:g.getNormal(c.a,c.b,c.c,new D),materialIndex:0},faceIndex:i};if(ua){let e=new D;g.getBarycoord(sa,c.a,c.b,c.c,e),_.barycoord=e}let v=t.attributes.uv,y=t.attributes.uv1,b=t.attributes.normal;if(v){da.fromBufferAttribute(v,p),fa.fromBufferAttribute(v,m),pa.fromBufferAttribute(v,h),_.uv=new E;let e=g.getInterpolation(sa,c.a,c.b,c.c,da,fa,pa,_.uv);ua||(_.uv=e)}if(y){da.fromBufferAttribute(y,p),fa.fromBufferAttribute(y,m),pa.fromBufferAttribute(y,h),_.uv1=new E;let e=g.getInterpolation(sa,c.a,c.b,c.c,da,fa,pa,_.uv1);ua||(_.uv1=e)}if(b){ma.fromBufferAttribute(b,p),ha.fromBufferAttribute(b,m),ga.fromBufferAttribute(b,h),_.normal=new D;let e=g.getInterpolation(sa,c.a,c.b,c.c,ma,ha,ga,_.normal);_.normal.dot(aa.direction)>0&&_.normal.multiplyScalar(-1),ua||(_.normal=e)}s=_.distance,o=_,a||n.push(_)}}}),a&&o&&n.push(o),n}};function va(e,t,n,r,i,a,o){let{mesh:s,geometry:c}=n,l=c.index?c.index.array:null;for(let c=e,u=t+e;c<u;c++){let e=n.resolvePrimitiveIndex(c),t=3*e+0,u=3*e+1,d=3*e+2;if(l&&(t=l[t],u=l[u],d=l[d]),s.getVertexPosition(t,o.a),s.getVertexPosition(u,o.b),s.getVertexPosition(d,o.c),o.needsUpdate=!0,r(o,c,i,a))return!0}return!1}var ya=new A({min:`array<f32, 3>`,max:`array<f32, 3>`},`BVHBoundingBox`);ya.getLength=()=>6;var ba=new A({bounds:`BVHBoundingBox`,rightChildOrTriangleOffset:`uint`,splitAxisOrTriangleCount:`uint`},`BVHNode`);ba.getLength=()=>ya.getLength()+2;var xa=new A({matrixWorld:`mat4x4f`,inverseMatrixWorld:`mat4x4f`,visible:`uint`,_alignment0:`uint`,_alignment1:`uint`,_alignment2:`uint`},`TransformStruct`),q=new A({origin:`vec3f`,direction:`vec3f`,maxDist:`float`},`Ray`),Sa=new A({indices:`vec4u`,normal:`vec3f`,didHit:`bool`,barycoord:`vec3f`,objectIndex:`uint`,side:`float`,dist:`float`},`IntersectionResult`),Ca=new A({faceIndices:`vec4u`,closestPoint:`vec3f`,found:`bool`,barycoord:`vec3f`,objectIndex:`uint`,faceNormal:`vec3f`,side:`float`,distanceSq:`float`},`PointQueryResult`),wa=mn(`

	const BVH_STACK_DEPTH = 60u;
	const INFINITY = 1e20;
	const TRI_INTERSECT_EPSILON = 1e-5;

`),Ta=mn(`
	struct IntersectionResult {
		indices: vec4u,
		normal: vec3f,
		didHit: bool,
		barycoord: vec3f,
		side: f32,
		dist: f32,
	};
`);L(`

	fn getVertexAttribute(
		barycoord: vec3f,
		indices: vec3u,
		attributeBuffer: ptr<storage, array<vec3f>, read>
	) -> vec3f {

		let n0 = attributeBuffer[ indices.x ];
		let n1 = attributeBuffer[ indices.y ];
		let n2 = attributeBuffer[ indices.z ];
		return barycoord.x * n0 + barycoord.y * n1 + barycoord.z * n2;

	}

`);var Ea=L(`

	fn intersectsBounds(
		ray: Ray,
		bounds: BVHBoundingBox,
		dist: ptr<function, f32>
	) -> bool {

		let boundsMin = vec3( bounds.min[0], bounds.min[1], bounds.min[2] );
		let boundsMax = vec3( bounds.max[0], bounds.max[1], bounds.max[2] );

		let invDir = 1.0 / ray.direction;
		let tMinPlane = ( boundsMin - ray.origin ) * invDir;
		let tMaxPlane = ( boundsMax - ray.origin ) * invDir;

		let tMinHit = vec3f(
			min( tMinPlane.x, tMaxPlane.x ),
			min( tMinPlane.y, tMaxPlane.y ),
			min( tMinPlane.z, tMaxPlane.z )
		);

		let tMaxHit = vec3f(
			max( tMinPlane.x, tMaxPlane.x ),
			max( tMinPlane.y, tMaxPlane.y ),
			max( tMinPlane.z, tMaxPlane.z )
		);

		let t0 = max( max( tMinHit.x, tMinHit.y ), tMinHit.z );
		let t1 = min( min( tMaxHit.x, tMaxHit.y ), tMaxHit.z );

		( *dist ) = max( t0, 0.0 );

		return t1 >= ( *dist );

	}

`,[q,ya]),Da=L(`

	fn intersectsTriangle( ray: Ray, a: vec3f, b: vec3f, c: vec3f ) -> IntersectionResult {

		var result: IntersectionResult;
		result.didHit = false;

		let edge1 = b - a;
		let edge2 = c - a;
		let n = cross( edge1, edge2 );

		let det = - dot( ray.direction, n );

		if ( abs( det ) < TRI_INTERSECT_EPSILON ) {

			return result;

		}

		let invdet = 1.0 / det;

		let AO = ray.origin - a;
		let DAO = cross( AO, ray.direction );

		let u = dot( edge2, DAO ) * invdet;
		let v = -dot( edge1, DAO ) * invdet;
		let t = dot( AO, n ) * invdet;

		let w = 1.0 - u - v;

		if ( u < - TRI_INTERSECT_EPSILON || v < - TRI_INTERSECT_EPSILON || w < - TRI_INTERSECT_EPSILON || t < TRI_INTERSECT_EPSILON ) {

			return result;

		}

		result.didHit = true;
		result.barycoord = vec3f( w, u, v );
		result.dist = t;
		result.side = sign( det );
		result.normal = result.side * normalize( n );

		return result;

	}

`,[q,Ta,wa]);L(`

	fn bvhIntersectFirstHit(
		bvh_index: ptr<storage, array<vec3u>, read>,
		bvh_position: ptr<storage, array<vec3f>, read>,
		bvh: ptr<storage, array<BVHNode>,read>,
		ray: Ray,
	) -> IntersectionResult {

		var pointer = 0;
		var stack: array<u32, BVH_STACK_DEPTH>;
		stack[ 0 ] = 0u;

		var bestHit: IntersectionResult;

		bestHit.didHit = false;
		bestHit.dist = INFINITY;

		loop {

			if ( pointer < 0 || pointer >= i32( BVH_STACK_DEPTH ) ) {

				break;

			}

			let currNodeIndex = stack[ pointer ];
			let node = bvh[ currNodeIndex ];

			pointer = pointer - 1;

			var boundsHitDistance: f32 = 0.0;

			if ( ! intersectsBounds( ray, node.bounds, &boundsHitDistance ) || boundsHitDistance > bestHit.dist ) {

				continue;

			}

			let boundsInfox = node.splitAxisOrTriangleCount;
			let boundsInfoy = node.rightChildOrTriangleOffset;

			let isLeaf = ( boundsInfox & 0xffff0000u ) != 0u;

			if ( isLeaf ) {

				let count = boundsInfox & 0x0000ffffu;
				let offset = boundsInfoy;

				let localHit = intersectTriangles(
					bvh_position, bvh_index, offset,
					count, ray
				);

				if ( localHit.didHit && localHit.dist < bestHit.dist ) {

					bestHit = localHit;

				}

			} else {

				let leftIndex = currNodeIndex + 1u;
				let splitAxis = boundsInfox & 0x0000ffffu;
				let rightIndex = currNodeIndex + boundsInfoy;

				let leftToRight = ray.direction[splitAxis] >= 0.0;
				let c1 = select( rightIndex, leftIndex, leftToRight );
				let c2 = select( leftIndex, rightIndex, leftToRight );

				pointer = pointer + 1;
				stack[ pointer ] = c2;

				pointer = pointer + 1;
				stack[ pointer ] = c1;

			}

		}

		return bestHit;

	}

`,[L(`

	fn intersectTriangles(
		bvh_position: ptr<storage, array<vec3f>, read>,
		bvh_index: ptr<storage, array<vec3u>, read>,
		offset: u32,
		count: u32,
		ray: Ray
	) -> IntersectionResult {

		var closestResult: IntersectionResult;

		closestResult.didHit = false;
		closestResult.dist = INFINITY;

		for ( var i = offset; i < offset + count; i = i + 1u ) {

			let indices = bvh_index[ i ];
			let a = bvh_position[ indices.x ];
			let b = bvh_position[ indices.y ];
			let c = bvh_position[ indices.z ];

			var triResult = intersectsTriangle( ray, a, b, c );

			if ( triResult.didHit && triResult.dist < closestResult.dist ) {

				closestResult = triResult;
				closestResult.indices = vec4u( indices.xyz, i );

			}

		}

		return closestResult;

	}

`,[Da,q,Ta,wa]),Ea,q,ba,Ta,wa]);var Oa=class extends je{static get type(){return`ProxyCallNode`}constructor(e,t){super(),this.proxyNode=e,this.params=t}setup(){return this.proxyNode.proxyNode.call(...this.params)}},ka=class{get isNode(){return!0}get proxyNode(){let{proxyObject:e,proxyProperty:t}=this,n=t.split(`.`),r=e;for(let e=0,t=n.length;e<t;e++)r=r?.[n[e]];return r&&`functionNode`in r?r.functionNode:r??null}constructor(e,t=null){return this.proxyObject=t,this.proxyProperty=e,new Proxy(this,{get(e,t){if(t in e)return Reflect.get(e,t);{let n=e.proxyNode;if(!n)return;let r=Reflect.get(n,t);return typeof r==`function`?r.bind(n):r}},set(e,t,n){if(t in e)return Reflect.set(e,t,n);throw Error(`NodeProxy: Cannot set members of proxied nodes.`)}})}},J=(...e)=>new ka(...e),Y=(...e)=>{let t=new ka(...e);return k.nodeProxyConstructor((...e)=>new Oa(t,e),t)},Aa=class extends ka{get proxyNode(){return super.proxyNode||this.fallbackNode}constructor(e,t){super(e,null),Object.defineProperty(this,"fallbackNode",{value:t})}setup(e){return this.proxyObject=e.getContext(),this.proxyNode.setup(e)}},ja=(...e)=>{let t=new Aa(...e);return k.nodeProxyConstructor((...e)=>new Oa(t,e),t)},Ma=new C,Na=new C;function Pa(e,t){let n=e?e.array:null,r=new Uint32Array(t.length*3);for(let e=0,i=t.length;e<i;e++){let i=3*e,a=3*t[e];for(let e=0;e<3;e++)r[i+e]=n?n[a+e]:a+e}return r}function Fa(e,t,n,r){let i=new Uint32Array(r),a=new Float32Array(r);e._roots.forEach(e=>{let r=new Uint16Array(e),o=new Uint32Array(e);for(let s=0,c=e.byteLength/32;s<c;s++){let c=s*8,l=c*2,u=n*8,d=new Float32Array(e,s*32,6);if(s===0)for(let e=0;e<3;e++){let t=d[e+0],n=d[e+3];t>n?(a[u+e+0]=1,a[u+e+3]=-1):(a[u+e+0]=t,a[u+e+3]=n)}else a.set(d,u);if(t===null){n++;continue}if(z(l,r)){let e=o[c+6],{transformSlot:n,nodeOffset:a}=r[l+14]===0?{transformSlot:0,nodeOffset:0}:t[e];if(n>16777215)throw Error(`packBVHBufferUtils: transform slot ${n} exceeds the 24-bit TLAS leaf limit.`);i[u+6]=a,i[u+7]=4278190080|n&16777215}else i[u+6]=o[c+6],i[u+7]=o[c+7];n++}})}function Ia(e,t){return La(new Uint16Array(e),new Uint32Array(e),t)}function La(e,t,n){if(z(n*8*2,e))return 1;let r=t[n*8+6];return r+La(e,t,n+r)}function Ra(e,t=0){let n=new Uint16Array(e),r=new Uint32Array(e),i=0;return a(t*8,1),i;function a(e,t){let o=e;if(z(e*2,n))i=Math.max(t,i);else{let e=U(o,r);a(H(o),t+1),a(e,t+1)}}}function za(e,t,n,r,i,a){let o=new Uint16Array(a),s=new Uint32Array(a),c=new Float32Array(a),l=new Uint16Array(e),u=new Uint32Array(e);for(let a=0;a<n;a++){let n=t+a,d=n*8,f=d*2,p=i*8,m=p*2,h=new Float32Array(e,n*32,6);if(a===0)for(let e=0;e<3;e++){let t=h[e+0],n=h[e+3];t>n?(c[p+e+0]=1,c[p+e+3]=-1):(c[p+e+0]=t,c[p+e+3]=n)}else c.set(h,p);z(f,l)?(s[p+6]=u[d+6]+r,o[m+14]=l[f+14],o[m+15]=gn):(s[p+6]=u[d+6],s[p+7]=u[d+7]),i++}}function Ba(e,t,n,r,i){let{geometry:a}=e,{start:o,count:s,vertexStart:c}=t;if(e.indirect){let t=Pa(a.index,e._indirectBuffer);for(let e=0;e<t.length;e++)i[e+r]=t[e]-c+n}else if(a.index)for(let e=0;e<s;e++)i[e+r]=a.index.getX(e+o)-c+n;else for(let e=0;e<s;e++)i[e+r]=e+o+n}function Va(e,t,n,r,i,a){let{geometry:o,mesh:s=null}=e,{vertexStart:c,vertexCount:l}=t,u=new Float32Array(r),d=i.getLength();i.membersLayout.forEach(({name:e},t)=>{let r=o.attributes[e];a.getDefaultAttributeValue(e,Ma);for(let i=0;i<l;i++){if(r){switch(Na.fromBufferAttribute(r,i+c),r.itemSize){case 1:Na.y=Ma.y,Na.z=Ma.z,Na.w=Ma.w;break;case 2:Na.z=Ma.z,Na.w=Ma.w;break;case 3:Na.w=Ma.w}s&&(e===`position`||e===`normal`||e===`tangent`)&&s.applyBoneTransform(i+c,Na)}else Na.copy(Ma);Na.toArray(u,(n+i)*d+t*4)}})}var Ha=class extends je{constructor(e){super(),this.literal=e}build(){return this.literal}},Ua=class extends je{constructor(e,t=`property`){super(),this.node=e,this.output=t}build(e){return this.node.build(e,this.output)}};function Wa(e){return e.isNode?new Ua(e):null}function Ga(e){let t=[];for(let n of e)if(Array.isArray(n))for(let e of n){let n=Wa(e);n&&t.push(n)}return t}function Ka(e,t){return e.map(e=>(e&&!e.isNode&&e instanceof Function&&(e=e(t)),e&&e.isNode?(e.setup(t),e.isWGSLTagCodeNode?new Ua(e,`inline`):new Ua(e)):e))}function qa(e,t,n){let r=``;for(let i=0,a=e.length;i<a;i++)if(r+=e[i],i<t.length){let e=t[i];Array.isArray(e)||(r+=typeof e==`string`||typeof e==`number`?String(e):e.build(n))}return r}var Ja=class extends Re{static get type(){return`WGSLTagFnNode`}constructor(e,t,n=`wgsl`){super(``,Ga(t),n),this.isWGSLTagFnNode=!0,this.tokens=e,this.args=t}setup(e){super.setup(e),this._normalizedArgs=Ka(this.args,e)}getNodeFunction(e){let{tokens:t,_normalizedArgs:n}=this,r=e.getDataFromNode(this),i=r.nodeFunction;if(i===void 0){let a=``;for(let r=0,i=t.length;r<i;r++)if(a+=t[r],r<n.length){let t=n[r];Array.isArray(t)||(typeof t==`string`||typeof t==`number`?a+=String(t):t.isStructLayoutNode?a+=t.getNodeType(e):t.isStruct?a+=t.layout.getNodeType(e):a+=`_arg`+r)}a=a.replace(/\/\/.*[\n\r]/g,``),i=e.parser.parseFunction(a),r.nodeFunction=i}return i}generate(e,t){let n=super.generate(e,t),{_normalizedArgs:r}=this,i=qa(this.tokens,r,e),{type:a}=this.getNodeFunction(e),o=e.getCodeFromNode(this,a);return o.code=i.replace(/\/\/.+[\n\r]/g,``).replace(/->\s*void/,``).trim(),n}},Ya=class extends Pe{static get type(){return`WGSLTagCodeNode`}constructor(e,t,n=`wgsl`){super(``,Ga(t),n),this.isWGSLTagCodeNode=!0,this.tokens=e,this.args=t}setup(e){super.setup(e),this._normalizedArgs=Ka(this.args,e)}build(e,t){return t===`inline`?qa(this.tokens,this._normalizedArgs,e):super.build(e,t)}generate(e){super.generate(e);let t=e.getCodeFromNode(this,this.getNodeType(e));return t.code=qa(this.tokens,this._normalizedArgs,e),t.code}},Xa=e=>k.nodeProxyConstructor((...t)=>{if(t.length===1&&t[0]&&typeof t[0]==`object`&&!t[0].isNode){let e=t[0];for(let t in e)typeof e[t]==`string`&&(e[t]=new Ha(e[t]))}return e.call(...t)},e),X=(e,...t)=>Xa(new Ja(e,t)),Za=(e,...t)=>new Ya(e,t),Qa=cn(60);function $a(e,t){let{name:n=`bvh_shapecast_fn_${Math.random().toString(36).substring(2,7)}`,shapeStruct:r,resultStruct:i=null,prefixFn:a=null,boundsOrderFn:o=null,intersectsBoundsFn:s,intersectRangeFn:c,transformShapeFn:l=null,transformResultFn:u=null,resetShapeFn:d=null}=t,{nodes:f,transforms:p}=e.storage,m=``;a&&(m=Za`${a}();`);let h=``;u&&(h=Za`${u}( result, objectIndex );`);let g=``;l&&(g=Za`${l}( &localShape, objectIndex );`);let _=``;d&&(_=Za`${d}( objectIndex );`);let v=``;o&&(v=Za`
			let leftToRight = ${o}( localShape, splitAxis, node );
			c1 = select( rightIndex, leftIndex, leftToRight );
			c2 = select( leftIndex, rightIndex, leftToRight );
		`);let y=i?Za`result: ptr<function, ${i}>`:``,b=i?`result`:``,x=X`
		// fn
		fn ${n}( shape: ${r}, ${y} ) -> bool {

			${m}

			var didHit = false;

			var isTLAS = true;
			var pointer: i32 = 0;
			var stack: array<u32, ${Qa}>;
			stack[ 0 ] = 0u;

			var blasDidHit: bool = false;
			var objectIndex: u32 = 0;
			var localShape: ${r} = shape;

			// the stack depth the current cluster's BLAS drains back down to once it is complete
			var tlasReset: i32 = 0;

			loop {

				// The cluster's BLAS has drained back to its TLAS leaf. Finalize the cluster that
				// was just traversed and resume the TLAS.
				if ( ! isTLAS && tlasReset == pointer ) {

					if ( blasDidHit ) {

						blasDidHit = false;
						didHit = true;
						${h}

					}

					${_}

					objectIndex = 0;
					isTLAS = true;
					localShape = shape;

				}

				// check if we've finished all nodes on the stack (or overrun the stack)
				if ( pointer < 0 || pointer >= i32( ${Qa} ) ) {

					break;

				}

				let nodeIndex = stack[ pointer ];
				let node = ${f}[ nodeIndex ];
				pointer = pointer - 1;

				// skip the node if we don't intersect the bounds
				if ( ${s}( localShape, node.bounds, ${b} ) == 0u ) {

					continue;

				}

				let infoX = node.splitAxisOrTriangleCount;
				let infoY = node.rightChildOrTriangleOffset;
				let isLeaf = ( infoX & 0xffff0000u ) != 0u;

				if ( isLeaf ) {

					if ( isTLAS ) {

						// the leaf encodes the placement / transform slot in the low 24 bits of infoX
						// and the cluster subtree's absolute node offset in infoY, which is pushed
						// directly as the BLAS entry node. Each TLAS leaf references one cluster.
						objectIndex = infoX & 0x00ffffffu;

						let transform = ${p}[ objectIndex ];
						if ( transform.visible != 0u ) {

							tlasReset = pointer;
							isTLAS = false;
							blasDidHit = false;

							// Transform shape into object local space
							localShape = shape;
							${g}

							pointer = pointer + 1;
							stack[ pointer ] = infoY;

						}

					} else {

						let count = infoX & 0x0000ffffu;
						let offset = infoY;
						blasDidHit = ${c}( localShape, offset, count, ${b} ) || blasDidHit;

					}

				} else {

					let leftIndex = nodeIndex + 1u;
					let splitAxis = infoX & 0x0000ffffu;
					let rightIndex = nodeIndex + infoY;

					var c1 = rightIndex;
					var c2 = leftIndex;
					${v}

					pointer = pointer + 1;
					stack[ pointer ] = c2;

					pointer = pointer + 1;
					stack[ pointer ] = c1;

				}

			}

			return didHit;

		}
	`;return x.outputType=i,x.functionName=n,x}var eo=X`
	// fn
	fn closestPointToTriangle(
		p: vec3f,
		v0: vec3f,
		v1: vec3f,
		v2: vec3f
	) -> vec3f {

		let v10 = v1 - v0;
		let v21 = v2 - v1;
		let v02 = v0 - v2;
		let p0 = p - v0;
		let p1 = p - v1;
		let p2 = p - v2;

		let nor = cross( v10, v02 );
		let q = cross( nor, p0 );
		let d = 1.0 / dot( nor, nor );
		var u = d * dot( q, v02 );
		var v = d * dot( q, v10 );
		var w = 1.0 - u - v;

		if ( u < 0.0 ) {

			w = clamp( dot( p2, v02 ) / dot( v02, v02 ), 0.0, 1.0 );
			u = 0.0;
			v = 1.0 - w;

		} else if ( v < 0.0 ) {

			u = clamp( dot( p0, v10 ) / dot( v10, v10 ), 0.0, 1.0 );
			v = 0.0;
			w = 1.0 - u;

		} else if ( w < 0.0 ) {

			v = clamp( dot( p1, v21 ) / dot( v21, v21 ), 0.0, 1.0 );
			w = 0.0;
			u = 1.0 - v;

		}

		return vec3f( w, u, v );

	}
`,to=X`
	// fn
	fn intersectRayTriangle( ray: ${q}, a: vec3f, b: vec3f, c: vec3f, threshold: f32 ) -> ${Sa} {

		const DET_EPSILON = 1e-15;

		var result: ${Sa};
		result.didHit = false;

		let edge1 = b - a;
		let edge2 = c - a;
		let n = cross( edge1, edge2 );

		let det = - dot( ray.direction, n );
		if ( abs( det ) < DET_EPSILON ) {

			return result;

		}

		let invdet = 1.0 / det;

		let AO = ray.origin - a;
		let DAO = cross( AO, ray.direction );

		let u = dot( edge2, DAO ) * invdet;
		if ( u < 0.0 || u > 1.0 ) {

			return result;

		}

		let v = - dot( edge1, DAO ) * invdet;
		if ( v < 0.0 || u + v > 1.0 ) {

			return result;

		}

		let t = dot( AO, n ) * invdet;
		let w = 1.0 - u - v;
		if ( t < threshold ) {

			return result;

		}

		result.didHit = true;
		result.barycoord = vec3f( w, u, v );
		result.dist = t;
		result.side = sign( det );
		result.normal = result.side * normalize( n );

		return result;

	}
`,no=X`
	// fn
	fn ndcToCameraRay( ndc: vec2f, inverseModelViewProjection: mat4x4f ) -> ${q} {

		var homogeneous = vec4f();
		var ray: ${q};

		homogeneous = inverseModelViewProjection * vec4f( ndc, 0.0, 1.0 );
		ray.origin = homogeneous.xyz / homogeneous.w;

		homogeneous = inverseModelViewProjection * vec4f( ndc, 1.0, 1.0 );
		let toFarPlane = ( homogeneous.xyz / homogeneous.w ) - ray.origin;
		ray.maxDist = length( toFarPlane );
		ray.direction = toFarPlane / ray.maxDist;

		return ray;

	}
`;function ro(e){let{index:t,attributes:n,transforms:r}=e.storage,i=Xt(1).toVar(`bvh_rayScalar_${Math.random().toString(36).substring(2,7)}`);return e.getShapecastFn({name:`bvh_RaycastFirstHit`,shapeStruct:q,resultStruct:Sa,boundsOrderFn:X`
			fn getBoundsOrder( ray: ${q}, splitAxis: u32, node: ${ba} ) -> bool {

				return ray.direction[ splitAxis ] >= 0.0;

			}
		`,intersectsBoundsFn:X`
			fn rayIntersectsBounds( ray: ${q}, bounds: ${ya}, result: ptr<function, ${Sa}> ) -> u32 {

				let boundsMin = vec3( bounds.min[0], bounds.min[1], bounds.min[2] );
				let boundsMax = vec3( bounds.max[0], bounds.max[1], bounds.max[2] );

				let invDir = 1.0 / ray.direction;
				let tMinPlane = ( boundsMin - ray.origin ) * invDir;
				let tMaxPlane = ( boundsMax - ray.origin ) * invDir;

				let tMinHit = vec3f(
					min( tMinPlane.x, tMaxPlane.x ),
					min( tMinPlane.y, tMaxPlane.y ),
					min( tMinPlane.z, tMaxPlane.z )
				);

				let tMaxHit = vec3f(
					max( tMinPlane.x, tMaxPlane.x ),
					max( tMinPlane.y, tMaxPlane.y ),
					max( tMinPlane.z, tMaxPlane.z )
				);

				let t0 = max( max( tMinHit.x, tMinHit.y ), tMinHit.z );
				let t1 = min( min( tMaxHit.x, tMaxHit.y ), tMaxHit.z );

				let dist = max( t0, 0.0 );
				if ( t1 < dist ) {

					return 0u;

				} else if ( ray.maxDist > 0.0 && dist * ${i} >= ray.maxDist ) {

					return 0u;

				} else if ( result.didHit && dist * ${i} >= result.dist ) {

					return 0u;

				} else {

					return 1u;

				}

			}

		`,intersectRangeFn:X`
			fn intersectRange( ray: ${q}, offset: u32, count: u32, result: ptr<function, ${Sa}> ) -> bool {

				var didHit = false;
				for ( var ti = offset; ti < offset + count; ti = ti + 1u ) {

					let i0 = ${t}[ ti * 3u ];
					let i1 = ${t}[ ti * 3u + 1u ];
					let i2 = ${t}[ ti * 3u + 2u ];

					let a = ${n}[ i0 ].position.xyz;
					let b = ${n}[ i1 ].position.xyz;
					let c = ${n}[ i2 ].position.xyz;

					var triResult = ${to}( ray, a, b, c, 0.0 );
					triResult.dist *= ${i};
					if ( triResult.didHit && ( ray.maxDist <= 0.0 || triResult.dist < ray.maxDist ) && ( ! result.didHit || triResult.dist < result.dist ) ) {

						result.didHit = true;
						result.dist = triResult.dist;
						result.normal = triResult.normal;
						result.side = triResult.side;
						result.barycoord = triResult.barycoord;
						result.indices = vec4u( i0, i1, i2, ti );

						didHit = true;

					}

				}

				return didHit;

			}
		`,transformShapeFn:X`
			fn transformRay( ray: ptr<function, ${q}>, objectIndex: u32 ) -> void {

				let toLocal = ${r}[ objectIndex ].inverseMatrixWorld;
				ray.origin = ( toLocal * vec4f( ray.origin, 1.0 ) ).xyz;
				ray.direction = ( toLocal * vec4f( ray.direction, 0.0 ) ).xyz;

				let len = length( ray.direction );
				ray.direction /= len;
				${i} = 1.0 / len;

			}
		`,transformResultFn:X`
			fn transformResult( hit: ptr<function, ${Sa}>, objectIndex: u32 ) -> void {

				let toLocal = ${r}[ objectIndex ].inverseMatrixWorld;
				hit.normal = normalize( ( transpose( toLocal ) * vec4f( hit.normal, 0.0 ) ).xyz );
				hit.objectIndex = objectIndex;

			}
		`,resetShapeFn:X`
			fn resetRayScalar( objectIndex: u32 ) -> void {

				${i} = 1.0;

			}
		`})}function io(e){let{storage:t,structs:n}=e,r=n.attributes.membersLayout.map(({name:e})=>`result.${e} = a0.${e} * barycoord.x + a1.${e} * barycoord.y + a2.${e} * barycoord.z;`).join(`
`);return X`
		// fn
		fn bvh_sampleTrianglePoint( barycoord: vec3f, indices: vec3u ) -> ${n.attributes} {

			var result: ${n.attributes};
			var a0 = ${t.attributes}[ indices.x ];
			var a1 = ${t.attributes}[ indices.y ];
			var a2 = ${t.attributes}[ indices.z ];
			${r}
			return result;

		}
	`}function ao(e){let{index:t,attributes:n,transforms:r}=e.storage,i=$t().toVar(`bvh_toWorldMat`);return e.getShapecastFn({name:`bvh_ClosestPointToPoint`,shapeStruct:`vec3f`,resultStruct:Ca,boundsOrderFn:X`
			fn cppBoundsOrder( shape: vec3f, splitAxis: u32, node: ${ba} ) -> bool {

				let toWorld = ${i};

				// get center
				let bMin = vec3f( node.bounds.min[ 0 ], node.bounds.min[ 1 ], node.bounds.min[ 2 ] );
				let bMax = vec3f( node.bounds.max[ 0 ], node.bounds.max[ 1 ], node.bounds.max[ 2 ] );
				let center = bMin * 0.5 + bMax * 0.5;

				// determine the order in world space
				let worldCenter = ( toWorld * vec4f( center, 1.0 ) ).xyz;
				let worldAxis = normalize( toWorld[ splitAxis ].xyz );
				return dot( shape - worldCenter, worldAxis ) <= 0.0;

			}
		`,intersectsBoundsFn:X`
			fn cppIntersectsBounds( shape: vec3f, bounds: ${ya}, result: ptr<function, ${Ca}> ) -> u32 {

				// return 1u;
				// we need to check this no matter what if the result has not been found yet
				if ( ! result.found ) {

					return 1u;

				}

				let toWorld = ${i};

				// transform to world space
				let bMin = vec3f( bounds.min[ 0 ], bounds.min[ 1 ], bounds.min[ 2 ] );
				let bMax = vec3f( bounds.max[ 0 ], bounds.max[ 1 ], bounds.max[ 2 ] );
				let center = ( bMin + bMax ) * 0.5;
				let halfExtent = ( bMax - bMin ) * 0.5;
				let worldCenter = ( toWorld * vec4f( center, 1.0 ) ).xyz;
				let worldHalfExtent =
					abs( toWorld[ 0 ].xyz ) * halfExtent.x +
				    abs( toWorld[ 1 ].xyz ) * halfExtent.y +
				    abs( toWorld[ 2 ].xyz ) * halfExtent.z;
				let worldMin = worldCenter - worldHalfExtent;
				let worldMax = worldCenter + worldHalfExtent;

				// intersect if the distance to the bounds is not bigger than the already found
				let d = shape - clamp( shape, worldMin, worldMax );
				return select( 0u, 1u, dot( d, d ) < result.distanceSq );

			}
		`,intersectRangeFn:X`
			fn cppIntersectsRange( shape: vec3f, offset: u32, count: u32, result: ptr<function, ${Ca}> ) -> bool {

				var didHit = false;
				let toWorld = ${i};

				for ( var i = offset; i < offset + count; i ++ ) {

					// transform the triangle to world space
					let i0 = ${t}[ i * 3u + 0u ];
					let i1 = ${t}[ i * 3u + 1u ];
					let i2 = ${t}[ i * 3u + 2u ];
					let a = ( toWorld * vec4f( ${n}[ i0 ].position.xyz, 1.0 ) ).xyz;
					let b = ( toWorld * vec4f( ${n}[ i1 ].position.xyz, 1.0 ) ).xyz;
					let c = ( toWorld * vec4f( ${n}[ i2 ].position.xyz, 1.0 ) ).xyz;

					let barycoord = ${eo}( shape, a, b, c );
					let closestPoint = barycoord.x * a + barycoord.y * b + barycoord.z * c;
					let delta = shape - closestPoint;
					let distSq = dot( delta, delta );

					// copy the content over
					if ( ! result.found || distSq < result.distanceSq ) {

						let normal = normalize( cross( a - b, b - c ) );

						result.closestPoint = closestPoint;
						result.barycoord = barycoord;
						result.distanceSq = distSq;
						result.faceNormal = normal;
						result.side = sign( dot( normal, delta ) );
						result.faceIndices = vec4u( i0, i1, i2, i );
						result.found = true;
						didHit = true;

					}

				}

				return didHit;

			}
		`,resetShapeFn:X`
				fn cppResetShape( objectIndex: u32 ) -> void {

					// node bounds are transformed by "toWorld" during the bounds tests. Only the
					// object-local BLAS bounds need the object's world matrix - the top-level bounds
					// are already in world space - so restore identity before top-level traversal resumes.
					${i} = mat4x4f(
						1.0, 0.0, 0.0, 0.0,
						0.0, 1.0, 0.0, 0.0,
						0.0, 0.0, 1.0, 0.0,
						0.0, 0.0, 0.0, 1.0
					);

				}
			`,transformShapeFn:X`
			fn cppTransformShape( shape: ptr<function, vec3f>, objectIndex: u32 ) -> void {

				${i} = ${r}[ objectIndex ].matrixWorld;

			}
		`,transformResultFn:X`
			fn cppTransformResult( result: ptr<function, ${Ca}>, objectIndex: u32 ) -> void {

				result.objectIndex = objectIndex;

			}
		`})}var oo=24,so=(1<<oo)-1,co=7,lo=127,uo=new T,fo=new v,po=new T,mo=class extends dr{constructor(e,t){super(),t={getBVH:(e,t)=>{throw Error(`ClusteredBVH: getBVH callback must be provided `)},shouldCluster:e=>e.isSkinnedMesh||e.isInstancedMesh||e.isBatchedMesh,primitiveLimit:64,matrixWorld:Array.isArray(e)?new T:e.matrixWorld,includeInstances:!0,_strictLeafSize:1,...t};let n=Array.from(go(e)),r=Math.ceil(Math.log2(n.length)),i=(1<<r)-1;this.objects=n,this.getBVH=t.getBVH,this.shouldCluster=t.shouldCluster,this.includeInstances=t.includeInstances,this.primitiveLimit=t.primitiveLimit,this.matrixWorld=t.matrixWorld,this.bvhMap=new WeakMap,this.idBits=r,this.idMask=i,this.primitiveBufferStride=2,this.init(t)}init(e){let t=0,{objects:n,bvhMap:r,matrixWorld:i}=this;uo.copy(i).invert(),n.forEach(e=>{let n=[];for(let r=0,i=this._getInstanceCount(e);r<i;r++){let i=this.getBVH(e,r);n.push(i),i&&(t+=this.shouldCluster(e)?i._roots.length:this._countRelevantLeafNodes(i))}r.set(e,n)}),this.primitiveBuffer=new Uint32Array(t*2),this._fillPrimitiveBuffer(this.primitiveBuffer),super.init(e)}getRootRanges(){return[{offset:0,count:this.primitiveBuffer.length/this.primitiveBufferStride}]}refit(...e){uo.copy(this.matrixWorld).invert(),super.refit(...e)}writePrimitiveBounds(e,t,n){let{primitiveBuffer:r,bvhMap:i,objects:a}=this,o=r[2*e+0],s=r[2*e+1],c=a[this.getObjectId(o)],l=this.getInstanceId(o),u=i.get(c)[l],d=this.getBVHRootIndex(s),f=this.getBVHNodeIndex(s);c.isInstancedMesh||c.isBatchedMesh?(c.getMatrixAt(l,po),po.premultiply(c.matrixWorld)):po.copy(c.matrixWorld),po.premultiply(uo),R(f,new Float32Array(u._roots[d]),fo),fo.applyMatrix4(po);let{min:p,max:m}=fo;t[n+0]=p.x,t[n+1]=p.y,t[n+2]=p.z,t[n+3]=m.x,t[n+4]=m.y,t[n+5]=m.z}getInstanceId(e){let{idMask:t,idBits:n}=this;return(e&~t)>>>n}getObjectId(e){let{idMask:t}=this;return e&t}getBVHRootIndex(e){return e>>>oo}getBVHNodeIndex(e){return(e&so)*8}_getInstanceCount(e){let{includeInstances:t}=this;return e.isInstancedMesh&&t?e.count:e.isBatchedMesh&&t?e.instanceCount:1}_fillPrimitiveBuffer(e){let{objects:t,bvhMap:n,idBits:r,primitiveLimit:i}=this,a=0,o=(t,n,i,o)=>{if(o>so)throw Error(`ClusteredBVH: cluster node index ${o} exceeds the ${oo}-bit packing limit and cannot be represented.`);if(i>lo)throw Error(`ClusteredBVH: bvh root index ${i} exceeds the ${co}-bit packing limit and cannot be represented.`);e[2*a+0]=t<<r|n,e[2*a+1]=i<<oo|o&so,a++};t.forEach((e,t)=>{n.get(e).forEach((n,r)=>{if(n){if(this.shouldCluster(e))for(let e=0,i=n._roots.length;e<i;e++)o(r,t,e,0);else ho(n,i,(e,n)=>{o(r,t,e,n/8)})}})})}_countRelevantLeafNodes(e){let{primitiveLimit:t}=this,n=0;return ho(e,t,(e,r,i,a)=>{n++,a&&i>=t&&console.warn(`ClusteredBVH: a leaf node with ${i} primitives exceeds the cluster primitive limit of ${t} and cannot be subdivided further.`)}),n}};function ho(e,t,n){let r=e._roots.length;for(let i=0;i<r;i++)cr.setBVH(e,i),cr.traverseBuffer((e,r,a)=>{let o=cr.getRangeStart(a),s=cr.getRangeEnd(a)-o;return s<t||r?(n(i,a,s,r),!0):!1});cr.reset()}function go(e,t=new Set){return Array.isArray(e)?e.forEach(e=>go(e,t)):e.traverse(e=>{e.isMesh&&t.add(e)}),t}var _o=new T,vo=new T,yo={start:0,count:0,vertexStart:0,vertexCount:0};function bo(e){let t=e;for(;t;){if(t.visible===!1)return!1;t=t.parent}return!0}function xo(e){return e._roots.reduce((e,t)=>e+t.byteLength,0)}function So(e,t){return`${e}_${t}`}var Co=class{constructor(e,t={}){let{attributes:n={position:`vec4f`},autogenerateBvh:r=!0}=t;Array.isArray(e)||(e=[e]),e=e.map(e=>{if(e.isObject3D)return e;if(e.isBufferGeometry)return new ce(e);if(e instanceof xr){let t=new ce;return t.geometry.boundsTree=e,t}}),this._bvhCache=new Map,this.autogenerateBvh=r,this.attributes=n,this.objects=e,this.bvh=null,this.storage=new wo,this.structs=new wo({transform:xa}),this.fns=new wo({raycastFirstHit:ro(this),closestPointToPoint:ao(this),sampleTrianglePoint:null},Y)}getRootObject(){let{objects:e}=this;if(e.isObject3D)return e;Array.isArray(e)||(e=[e]),e=e.map(e=>{if(e.isObject3D)return e;if(e.isBufferGeometry)return new ce(e);if(e instanceof xr){let t=new ce;return t.geometry.boundsTree=e,t}});let t=new a;return t.children=e,t}getShapecastFn(e){return $a(this,e)}update(){let e=this.getRootObject(),t=0;e.traverse(e=>{e.isMesh&&t++}),this.bvh=new mo(e,{strategy:2,getBVH:(e,t)=>this.getBVH(e,t,yo),primitiveLimit:t<3?1/0:64}),this.dispose();let{attributes:n,structs:r,bvh:i}=this,a=[],o=[],s=new Map,c=xo(i),l=0,u=0,d=[],f=0,p=this._getTransformMap(i),{primitiveBuffer:m,primitiveBufferStride:h}=i;for(let e=0,t=m.length;e<t;e+=h){let t=m[e],n=m[e+1],r=i.objects[i.getObjectId(t)],h=i.getInstanceId(t),g={start:0,count:0,vertexStart:0,vertexCount:0},_=this.getBVH(r,h,g);if(!_)throw Error(`BVHComputeData: BVH not found.`);let v=a.find(e=>e.bvh===_);v||(v={index:a.length,bvh:_,range:g,geometryOffset:0},l+=v.range.count,u+=v.range.vertexCount,a.push(v));let y=i.getBVHRootIndex(n),b=i.getBVHNodeIndex(n)/8,x=`${v.index}_${y}_${b}`,S=s.get(x);if(S===void 0){let e=Ia(_._roots[y],b);S={data:v,root:y,node:b,size:e,base:0},s.set(x,S),o.push(S),c+=e*32,f=Math.max(f,Ra(_._roots[y],b))}d.push({transformSlot:p.get(So(t,y)).slot,subtree:S})}if(Ra(i._roots[0])+f-1>Qa.value)throw Error(`BVHComputeData: BVH depth overruns the compute stack depth.`);let g=Math.max(p.size,2);l=Math.max(l,2),u=Math.max(u,2);let _=new A(n,`bvh_GeometryStruct`),v=0,y=0,b=new Uint32Array(l),x=new ArrayBuffer(u*_.getLength()*4),S=new ArrayBuffer(c);a.forEach(e=>{e.geometryOffset=y/3,e.bvh.indirect||(e.geometryOffset-=e.range.start/3),Ba(e.bvh,e.range,v,y,b),Va(e.bvh,e.range,v,x,_,this),y+=e.range.count,v+=e.range.vertexCount});let C=xo(i)/32;o.forEach(e=>{e.base=C,za(e.data.bvh._roots[e.root],e.node,e.size,e.data.geometryOffset,C,S),C+=e.size}),d.forEach(e=>e.nodeOffset=e.subtree.base),Fa(i,d,0,S);let w=new ArrayBuffer(r.transform.getLength()*g*4),ee=F(new j(new Uint32Array(S),1),ba).toReadOnly().setName(`bvh_nodes`),te=F(new j(new Uint32Array(w),1),r.transform).toReadOnly().setName(`bvh_transforms`),ne=F(new j(b,1),`uint`).toReadOnly().setName(`bvh_index`),re=F(new j(new Uint32Array(x),_.getLength()),_).toReadOnly().setName(`bvh_attributes`);this.storage.transforms=te,this.storage.nodes=ee,this.storage.index=ne,this.storage.attributes=re,this.structs.attributes=_,vo.copy(i.matrixWorld).invert(),p.forEach(e=>{this.writeTransformData(e,vo,e.slot,w)}),this.fns.sampleTrianglePoint=io(this),this._bvhCache.clear()}updateTransforms(){let{bvh:e,storage:t}=this;e.refit();let n=t.nodes.proxyNode.value;Fa(e,null,0,n.array.buffer),n.needsUpdate=!0;let r=t.transforms.proxyNode.value,i=r.array.buffer;vo.copy(e.matrixWorld).invert(),this._getTransformMap(e).forEach(e=>{this.writeTransformData(e,vo,e.slot,i)}),r.needsUpdate=!0}writeTransformData(e,t,n,r){let{structs:i}=this,a=new Float32Array(r),o=new Uint32Array(r),{object:s,instanceId:c}=e;s.isInstancedMesh||s.isBatchedMesh?(s.getMatrixAt(c,_o),_o.premultiply(s.matrixWorld)):_o.copy(s.matrixWorld),_o.premultiply(t),_o.toArray(a,n*i.transform.getLength()),_o.invert(),_o.toArray(a,n*i.transform.getLength()+16);let l=bo(s);s.isBatchedMesh&&(l&&=s.getVisibleAt(c)),o[n*i.transform.getLength()+32]=+!!l}getBVH(e,t,n){let{autogenerateBvh:r,_bvhCache:i}=this,a=null;if(e.boundsTree||e.isSkinnedMesh){let t=e.geometry;if(n.count=t.index?t.index.count:t.attributes.position.count,n.vertexCount=t.attributes.position.count,a=e.boundsTree||null,a===null&&r){let t=e.uuid;a=i.get(t)||new _a(e),i.set(t,a)}}else if(e.isBatchedMesh){let o=e.getGeometryIdAt(t),s=e.getGeometryRangeAt(o);if(Object.assign(n,s),a=e.boundsTrees[o]||null,a===null&&r){let t=`batched_${e.geometry.uuid}_${s.start}_${s.count}`;a=i.get(t)||new ta(e.geometry,{range:{...n}}),i.set(t,a)}}else{let t=e.geometry;if(n.count=t.index?t.index.count:t.attributes.position.count,n.vertexCount=t.attributes.position.count,a=e.geometry.boundsTree||null,a===null&&r){let e=t.uuid;a=i.get(e)||new ta(t),i.set(e,a)}}return a}getDefaultAttributeValue(e,t){switch(e){case`position`:case`color`:t.set(1,1,1,1);break;default:t.set(0,0,0,0)}return t}dispose(){let{storage:e}=this;for(let t in e)e[t].value?.dispose()}_getTransformMap(e){let{primitiveBuffer:t,primitiveBufferStride:n}=e,r=new Map;for(let i=0,a=t.length;i<a;i+=n){let n=t[i],a=e.getBVHRootIndex(t[i+1]),o=So(n,a);if(r.has(o))continue;let s=r.size,c=e.objects[e.getObjectId(n)],l=e.getInstanceId(n);r.set(o,{object:c,instanceId:l,compositeId:n,root:a,slot:s})}return r}},wo=class{constructor(e={},t=J){let n={};return new Proxy({...e},{get(e,r){return n[r]||(n[r]=t(r,e)),n[r]},set(e,t,n){return e[t]=n,!0}})}},To=new me(-1,1,1,-1,0,1),Eo=new class extends x{constructor(){super(),this.setAttribute(`position`,new ie([-1,3,0,-1,-1,0,3,-1,0],3)),this.setAttribute(`uv`,new ie([0,2,0,0,2,0],2))}},Do=class{constructor(e){this._mesh=new ce(Eo,e)}dispose(){this._mesh.geometry.dispose()}render(e){e.render(this._mesh,To)}get material(){return this._mesh.material}set material(e){this._mesh.material=e}},Oo=L(`
	fn sampleTexel( tex: texture_2d<f32>, coord: vec2f ) -> vec4f {

		// Manual bilinear filtering using textureLoad to support filterable float32 textures
		// on all devices
		let size = vec2f( textureDimensions( tex, 0 ) );

		// the path tracer stores its color rows top down
		let pxCoord = vec2f( coord.x, 1.0 - coord.y ) * size - 0.5;
		let px = vec2i( floor( pxCoord ) );
		let fr = fract( pxCoord );

		// get the four sibling samples
		let s00 = textureLoad( tex, clamp( px,                 vec2i( 0 ), vec2i( size ) - 1 ), 0 );
		let s10 = textureLoad( tex, clamp( px + vec2i( 1, 0 ), vec2i( 0 ), vec2i( size ) - 1 ), 0 );
		let s01 = textureLoad( tex, clamp( px + vec2i( 0, 1 ), vec2i( 0 ), vec2i( size ) - 1 ), 0 );
		let s11 = textureLoad( tex, clamp( px + vec2i( 1, 1 ), vec2i( 0 ), vec2i( size ) - 1 ), 0 );

		// interpolate on the x axis
		let y0 = mix( s00, s10, fr.x );
		let y1 = mix( s01, s11, fr.x );

		// then y
		return mix( y0, y1, fr.y );

	}
`),ko=class extends Oe{get texture(){return this._texNode.value}set texture(e){this._texNode.value=e}get fromTexture(){return this._fromTexNode.value}set fromTexture(e){this._fromTexNode.value=e}get toneMapping(){return this._toneMapping.toneMapping}set toneMapping(e){this._toneMapping.setToneMapping(e)}get transition(){return this._transitionUniform.value}set transition(e){this._transitionUniform.value=e}get exposure(){return this._toneMapping.exposureNode.value}set exposure(e){this._toneMapping.exposureNode.value=e}constructor(e){super();let t=rn(new O);this._texNode=t;let n=rn(new O);this._fromTexNode=n;let r=dn(un()),i=I(1);this._transitionUniform=i;let a=sn(0,1,X`
			fn fade( uv: vec2f ) -> vec4f {

				if ( ${i} <= 0.0 ) {

					return ${Oo}( ${n}, uv );

				} else if ( ${i} >= 1.0 ) {

					return ${Oo}( ${t}, uv );

				} else {

					let col0 = ${Oo}( ${n}, uv );
					let col1 = ${Oo}( ${t}, uv );
					return mix( col0, col1, ${i} );

				}

			}
		`(r));this._toneMapping=a,this.transparent=!0,this.colorNode=pn(a.rgb,a.a),this.setValues(e)}},Ao=X`
	fn debugHeatColor( t: f32 ) -> vec3f {

		let r = clamp( 1.5 - abs( 4.0 * t - 3.0 ), 0.0, 1.0 );
		let g = clamp( 1.5 - abs( 4.0 * t - 2.0 ), 0.0, 1.0 );
		let b = clamp( 1.5 - abs( 4.0 * t - 1.0 ), 0.0, 1.0 );
		return vec3f( r, g, b );

	}
`,jo=new A({tlasCount:`uint`,blasCount:`uint`,didHit:`bool`,dist:`float`},`DebugBoundsResult`);function Mo(e){let{transforms:t,index:n,attributes:r,materials:i}=e.storage,a=I(new T),o=I(new T),s=I(1),c=I(1),l=I(0),u=I(64),d=cn(0).toVar(`bvh_debugBoundsLevel`),f=Xt(1).toVar(`bvh_debugRayScalar`),p=Xt(0).toVar(`bvh_debugMaterialSide`),m=X`
		fn debugGetBoundsOrder( ray: ${q}, splitAxis: u32, node: ${ba} ) -> bool {

			return ray.direction[ splitAxis ] >= 0.0;

		}
	`,h=X`
		fn debugIntersectsBounds( ray: ${q}, bounds: ${ya}, result: ptr<function, ${jo}> ) -> u32 {

			let boundsMin = vec3( bounds.min[ 0 ], bounds.min[ 1 ], bounds.min[ 2 ] );
			let boundsMax = vec3( bounds.max[ 0 ], bounds.max[ 1 ], bounds.max[ 2 ] );

			let invDir = 1.0 / ray.direction;
			let tMinPlane = ( boundsMin - ray.origin ) * invDir;
			let tMaxPlane = ( boundsMax - ray.origin ) * invDir;

			let tMinHit = min( tMinPlane, tMaxPlane );
			let tMaxHit = max( tMinPlane, tMaxPlane );

			let t0 = max( max( tMinHit.x, tMinHit.y ), tMinHit.z );
			let t1 = min( min( tMaxHit.x, tMaxHit.y ), tMaxHit.z );

			let dist = max( t0, 0.0 );
			if ( t1 < dist ) {

				return 0u;

			} else if ( result.didHit && dist * ${f} >= result.dist ) {

				return 0u;

			}

			if ( ${d} == 1u ) {

				result.blasCount = result.blasCount + 1u;

			} else {

				result.tlasCount = result.tlasCount + 1u;

			}

			return 1u;

		}
	`,g=X`
		fn debugIntersectRange( ray: ${q}, offset: u32, count: u32, result: ptr<function, ${jo}> ) -> bool {

			var didHit = false;
			if ( ${l} > 0.5 ) {

				for ( var ti = offset; ti < offset + count; ti = ti + 1u ) {

					let i0 = ${n}[ ti * 3u ];
					let i1 = ${n}[ ti * 3u + 1u ];
					let i2 = ${n}[ ti * 3u + 2u ];

					let a = ${r}[ i0 ].position.xyz;
					let b = ${r}[ i1 ].position.xyz;
					let c = ${r}[ i2 ].position.xyz;

					var triResult = ${Da}( ray, a, b, c );
					triResult.dist *= ${f};
					if ( triResult.didHit && ( ! result.didHit || triResult.dist < result.dist ) ) {

						// cull faces that don't match the material side
						if ( ${p} != 0.0 && triResult.side != ${p} ) {

							continue;

						}

						result.didHit = true;
						result.dist = triResult.dist;
						didHit = true;

					}

				}

			}

			return didHit;

		}
	`,_=X`
		fn debugTransformRay( ray: ptr<function, ${q}>, objectIndex: u32 ) -> void {

			let object = ${t}[ objectIndex ];
			let toLocal = object.inverseMatrixWorld;
			ray.origin = ( toLocal * vec4f( ray.origin, 1.0 ) ).xyz;
			ray.direction = ( toLocal * vec4f( ray.direction, 0.0 ) ).xyz;

			let len = length( ray.direction );
			ray.direction = ray.direction / len;
			${f} = 1.0 / len;

			${p} = ${i}[ object.materialIndex ].side;
			${d} = 1u;

		}
	`,v=X`
		fn debugResetLevel( objectIndex: u32 ) -> void {

			${f} = 1.0;
			${d} = 0u;

		}
	`,y=X`
		fn debugBounds( vUv: vec2f ) -> vec4f {

			let ndc = vUv * 2.0 - vec2f( 1.0 );
			var ray = ${no}( ndc, ${a} * ${o} );
			ray.direction = normalize( ray.direction );

			// count the boxes the ray crosses, pruning those behind the nearest hit surface
			var result: ${jo};
			${e.getShapecastFn({name:`debugBoundsCount`,shapeStruct:q,resultStruct:jo,boundsOrderFn:m,intersectsBoundsFn:h,intersectRangeFn:g,transformShapeFn:_,resetShapeFn:v})}( ray, &result );

			let tlas = select( 0u, result.tlasCount, ${s} > 0.5 );
			let blas = select( 0u, result.blasCount, ${c} > 0.5 );
			let count = tlas + blas;

			let t = clamp( f32( count ) / max( ${u}, 1.0 ), 0.0, 1.0 );

			return vec4f( ${Ao}( t ), 1.0 );

		}
	`;return y.uniforms={cameraToModelMatrix:a,inverseProjectionMatrix:o,displayTLAS:s,displayBLAS:c,stopAtSurface:l,saturationCount:u},y}var No=class{get computeNode(){return this.kernel.computeNode}get workgroupSize(){return this.kernel.workgroupSize}set needsUpdate(e){this.setWorkgroupSize(...this.workgroupSize)}constructor(e,t={}){let{workgroupSize:n=[64],context:r={}}=t;this._fn=e,this.kernel=null,this.context=r,this.setWorkgroupSize(...n)}defineUniformAccessors(e){for(let t in e){if(t in this)throw Error(`ComputeNode: Uniform name ${t} is already defined.`);`value`in e[t]&&Object.defineProperty(this,t,{get(){return e[t].value},set(n){e[t].value=n}})}}setWorkgroupSize(e=64,t=1,n=1){let r=this._fn.context(this.context);return r.parameters=this._fn.parameters,this.kernel?.dispose(),this.kernel=r.computeKernel([e,t,n]),this}dispose(){this.kernel?.dispose(),this.kernel=null}getDispatchSize(e=1,t=1,n=1,r=[]){let[i,a,o]=this.workgroupSize;return r.length=3,r[0]=Math.ceil(e/i),r[1]=Math.ceil(t/a),r[2]=Math.ceil(n/o),r}},Po=cn(65536),Fo=Xt(1/16777216),Io=mn(`

	const SOBOL_DIRECTIONS_1 = array<u32, 32>(
		0x80000000u, 0xc0000000u, 0xa0000000u, 0xf0000000u,
		0x88000000u, 0xcc000000u, 0xaa000000u, 0xff000000u,
		0x80800000u, 0xc0c00000u, 0xa0a00000u, 0xf0f00000u,
		0x88880000u, 0xcccc0000u, 0xaaaa0000u, 0xffff0000u,
		0x80008000u, 0xc000c000u, 0xa000a000u, 0xf000f000u,
		0x88008800u, 0xcc00cc00u, 0xaa00aa00u, 0xff00ff00u,
		0x80808080u, 0xc0c0c0c0u, 0xa0a0a0a0u, 0xf0f0f0f0u,
		0x88888888u, 0xccccccccu, 0xaaaaaaaau, 0xffffffffu
	);

	const SOBOL_DIRECTIONS_2 = array<u32, 32>(
		0x80000000u, 0xc0000000u, 0x60000000u, 0x90000000u,
		0xe8000000u, 0x5c000000u, 0x8e000000u, 0xc5000000u,
		0x68800000u, 0x9cc00000u, 0xee600000u, 0x55900000u,
		0x80680000u, 0xc09c0000u, 0x60ee0000u, 0x90550000u,
		0xe8808000u, 0x5cc0c000u, 0x8e606000u, 0xc5909000u,
		0x6868e800u, 0x9c9c5c00u, 0xeeee8e00u, 0x5555c500u,
		0x8000e880u, 0xc0005cc0u, 0x60008e60u, 0x9000c590u,
		0xe8006868u, 0x5c009c9cu, 0x8e00eeeeu, 0xc5005555u
	);

	const SOBOL_DIRECTIONS_3 = array<u32, 32>(
		0x80000000u, 0xc0000000u, 0x20000000u, 0x50000000u,
		0xf8000000u, 0x74000000u, 0xa2000000u, 0x93000000u,
		0xd8800000u, 0x25400000u, 0x59e00000u, 0xe6d00000u,
		0x78080000u, 0xb40c0000u, 0x82020000u, 0xc3050000u,
		0x208f8000u, 0x51474000u, 0xfbea2000u, 0x75d93000u,
		0xa0858800u, 0x914e5400u, 0xdbe79e00u, 0x25db6d00u,
		0x58800080u, 0xe54000c0u, 0x79e00020u, 0xb6d00050u,
		0x800800f8u, 0xc00c0074u, 0x200200a2u, 0x50050093u
	);

	const SOBOL_DIRECTIONS_4 = array<u32, 32>(
		0x80000000u, 0x40000000u, 0x20000000u, 0xb0000000u,
		0xf8000000u, 0xdc000000u, 0x7a000000u, 0x9d000000u,
		0x5a800000u, 0x2fc00000u, 0xa1600000u, 0xf0b00000u,
		0xda880000u, 0x6fc40000u, 0x81620000u, 0x40bb0000u,
		0x22878000u, 0xb3c9c000u, 0xfb65a000u, 0xddb2d000u,
		0x78022800u, 0x9c0b3c00u, 0x5a0fb600u, 0x2d0ddb00u,
		0xa2878080u, 0xf3c9c040u, 0xdb65a020u, 0x6db2d0b0u,
		0x800228f8u, 0x400b3cdcu, 0x200fb67au, 0xb00ddb9du
	);

`),Lo=cn(0).toVar(`sobolPixelIndex`),Ro=cn(0).toVar(`sobolPathIndex`),zo=cn(0).toVar(`sobolBounceIndex`),Bo=L(`
	fn getMaskedSobol( index: u32, directions: array<u32, 32> ) -> u32 {

		var X = 0u;
		for ( var bit = 0u; bit < 32u; bit ++ ) {

			let mask = ( index >> bit ) & 1u;
			X ^= mask * directions[ bit ];

		}
		return X;

	}
`),Vo=(e=1)=>{if(e<=0)return;let t=e>1?`vec${e}u`:`u32`,n=L(`
		fn sobolReverseBits_${t}( in: ${t} ) -> ${t} {

			var x = in;
			x = ( ( ( x & ${t}( 0xaaaaaaaau ) ) >> ${t}( 1 ) ) | ( ( x & ${t}( 0x55555555u ) ) << ${t}( 1 ) ) );
			x = ( ( ( x & ${t}( 0xccccccccu ) ) >> ${t}( 2 ) ) | ( ( x & ${t}( 0x33333333u ) ) << ${t}( 2 ) ) );
			x = ( ( ( x & ${t}( 0xf0f0f0f0u ) ) >> ${t}( 4 ) ) | ( ( x & ${t}( 0x0f0f0f0fu ) ) << ${t}( 4 ) ) );
			x = ( ( ( x & ${t}( 0xff00ff00u ) ) >> ${t}( 8 ) ) | ( ( x & ${t}( 0x00ff00ffu ) ) << ${t}( 8 ) ) );
			return ( ( x >> ${t}( 16 ) ) | ( x << ${t}( 16 ) ) );

		}
	`),r=L(`
		fn sobolHashCombine_${t}( seed: u32, v: ${t} ) -> ${t} {

			return ${t}( seed ) ^ ( v + ${t}( ( seed << 6 ) + ( seed >> 2 ) ) );

		}
	`),i=L(`
		fn sobolLaineKarrasPermutation_${t}( in: ${t}, seed: ${t} ) -> ${t} {

			var x = in;
			x += seed;
			x ^= x * 0x6c50b47cu;
			x ^= x * 0xb82f1e52u;
			x ^= x * 0xc7afe638u;
			x ^= x * 0x8d22f6e6u;
			return x;

		}
	`);return{reverseBits:n,hashCombine:r,lkPermutation:i,scramble:X`
		fn nestedUniformScrambleBase2_${t}( x: ${t}, seed: ${t} ) -> ${t} {

			var res = ${i}( x, seed );
			res = ${n}( res );
			return res;

		}
	`}},Ho=Array.from({length:5},(e,t)=>Vo(t)),Uo=X`
  	${[Io]}
	fn generateSobolPoint( id: u32 ) -> vec4f {

		var index = id;
		if ( index >= ${Po} ) {

			index = index % ${Po};
			// return vec4( 0.0 );

		}

		// NOTE: this sobol "direction" is also available but we can't write out 5 components
		// uint x = index & 0x00ffffffu;
		let x = ${Ho[1].reverseBits}( ${Bo}( index, SOBOL_DIRECTIONS_1 ) ) & 0x00ffffffu;
		let y = ${Ho[1].reverseBits}( ${Bo}( index, SOBOL_DIRECTIONS_2 ) ) & 0x00ffffffu;
		let z = ${Ho[1].reverseBits}( ${Bo}( index, SOBOL_DIRECTIONS_3 ) ) & 0x00ffffffu;
		let w = ${Ho[1].reverseBits}( ${Bo}( index, SOBOL_DIRECTIONS_4 ) ) & 0x00ffffffu;

		return vec4( f32( x ), f32( y ), f32( z ), f32( w ) ) * ${Fo};

	}
`,Wo=L(`
	fn sobolHash( in: u32 ) -> u32 {

		var x = in;
		// finalizer from murmurhash3
		x ^= x >> 16;
		x *= 0x85ebca6bu;
		x ^= x >> 13;
		x *= 0xc2b2ae35u;
		x ^= x >> 16;
		return x;

	}
`),Go=X`
	fn sobolGetSeed( effect: u32 ) -> u32 {

		return ${Wo}(
			${Ho[1].hashCombine}(
				${Ho[1].hashCombine}(
					${Wo}( ${zo} ),
					${Lo}
				),
				effect
			)
		);

	}
`,Ko=(e=1,t=Uo)=>{if(e<=0)return;let n=e>1?`vec${e}u`:`u32`,r=e>1?`vec${e}f`:`f32`,i=`.r`,a=`1u`;return e===2?(i=`.rg`,a=`vec2( 1u, 2u )`):e===3?(i=`.rgb`,a=`vec3( 1u, 2u, 3u )`):e===4&&(i=``,a=`vec4( 1u, 2u, 3u, 4u )`),X`
		fn sobol${e}( effect: u32 ) -> ${r} {

			let seed = ${Go}( effect );
			let index = ${Ro};

			let shuffle_seed = ${Ho[1].hashCombine}( seed, 0u );
			let shuffled_index = ${Ho[1].scramble}( ${Ho[1].reverseBits}( index ), shuffle_seed );
			let sobol_pt = ${t}( shuffled_index )${i};
			var result = ${n}( sobol_pt * 16777216.0 );

			let seed2 = ${Ho[e].hashCombine}( seed, ${a} );
			result = ${Ho[e].scramble}( result, seed2 );

			return ${Fo} * ${r}( result >> ${n}( 8 ) );

		}
	`},qo=Ko(1),Jo=Ko(2),Yo=Ko(3),Xo=Ko(4),Zo=X`
	fn sobolInit( pixel: vec2u, pathIndex: u32, bounceIndex: u32 ) -> void {

		${Lo} = ( pixel.x << 16 ) | pixel.y;
		${Ro} = pathIndex;
		${zo} = bounceIndex;

	}
`,Qo=X`
	fn sobolNextBounce() -> void {

		${zo}++;

	}
`,$o=ja(`random.rngInit`,Zo),es=ja(`random.rngNextBounce`,Qo),ts=ja(`random.rand1`,qo),ns=ja(`random.rand2`,Jo),rs=ja(`random.rand3`,Yo);ja(`random.rand4`,Xo);var Z=mn(`

	const PI: f32 = 3.141592653589793;
	const EPSILON: f32 = 1e-5;
	const MIN_ROUGHNESS: f32 = 1e-3;
	const MIN_INCIDENT_COS: f32 = 1e-3;

`),is=new A({color:`vec3f`,isTransmissive:`bool`,direction:`vec3f`,pdf:`float`},`ScatterRecord`),as=new A({reflectance:`vec3f`,transmittance:`vec3f`,reflectProbability:`float`},`TransmissionFresnel`),os=new A({color:`vec3`,map:`int`,metalness:`float`,metalnessMap:`int`,roughness:`float`,roughnessMap:`int`,ior:`float`,transmission:`float`,transmissionMap:`int`,emissiveIntensity:`float`,emissive:`vec3`,emissiveMap:`int`,normalMap:`int`,normalScale:`vec2`,clearcoat:`float`,clearcoatMap:`int`,clearcoatNormalMap:`int`,clearcoatNormalScale:`vec2`,clearcoatRoughness:`float`,clearcoatRoughnessMap:`int`,iridescenceMap:`int`,iridescenceThicknessMap:`int`,iridescence:`float`,iridescenceIor:`float`,iridescenceThicknessMinimum:`float`,iridescenceThicknessMaximum:`float`,diffuseRoughness:`float`,dispersion:`float`,specularColor:`vec3`,specularColorMap:`int`,specularIntensity:`float`,specularIntensityMap:`int`,thinWall:`int`,attenuationColor:`vec3`,attenuationDistance:`float`,alphaMap:`int`,castShadow:`int`,opacity:`float`,alphaTest:`float`,side:`float`,matte:`int`,sheen:`float`,sheenColor:`vec3`,sheenColorMap:`int`,sheenRoughness:`float`,sheenRoughnessMap:`int`,vertexColors:`int`,flatShading:`int`,transparent:`int`,fogVolume:`int`,anisotropy:`float`,anisotropyRotation:`float`,anisotropyMap:`int`,mapTransform:`mat3`,metalnessMapTransform:`mat3`,roughnessMapTransform:`mat3`,transmissionMapTransform:`mat3`,emissiveMapTransform:`mat3`,normalMapTransform:`mat3`,clearcoatMapTransform:`mat3`,clearcoatNormalMapTransform:`mat3`,clearcoatRoughnessMapTransform:`mat3`,sheenColorMapTransform:`mat3`,sheenRoughnessMapTransform:`mat3`,iridescenceMapTransform:`mat3`,iridescenceThicknessMapTransform:`mat3`,specularColorMapTransform:`mat3`,specularIntensityMapTransform:`mat3`,alphaMapTransform:`mat3`,anisotropyMapTransform:`mat3`},`Material`),ss=new A({volumeParticle:`bool`,faceNormal:`vec3f`,frontFace:`bool`,normal:`vec3f`,normalBasis:`mat3x3f`,normalInvBasis:`mat3x3f`,eta:`f32`,f0:`f32`,roughness:`f32`,diffuseRoughness:`f32`,metalness:`f32`,anisotropy:`f32`,color:`vec3f`,emission:`vec3f`,opacity:`f32`,ior:`f32`,transmission:`f32`,thinWall:`bool`,attenuationColor:`vec3f`,attenuationDistance:` f32`,clearcoatNormal:`vec3f`,clearcoatBasis:`mat3x3f`,clearcoatInvBasis:`mat3x3f`,clearcoat:`f32`,clearcoatRoughness:`f32`,sheen:`f32`,sheenColor:`vec3f`,sheenRoughness:`f32`,iridescence:`f32`,iridescenceIor:`f32`,iridescenceThickness:`f32`,specularColor:`vec3f`,specularIntensity:`f32`},`SurfaceRecord`);new A({rotation:`mat3x3f`,intensity:`float`,blur:`float`,totalSum:`float`},`EnvironmentInfo`);var cs=new A({color:`vec3f`,direction:`vec3f`,pdf:`float`},`EnvironmentSample`),ls=new A({position:`vec3f`,lightType:`int`,color:`vec3f`,intensity:`float`,u:`vec3f`,visibleToCameraRays:`int`,v:`vec3f`,area:`float`,radius:`float`,decay:`float`,distance:`float`,coneCos:`float`,penumbraCos:`float`,iesProfile:`int`},`Light`),us=new A({dist:`float`,direction:`vec3f`,pdf:`float`,emission:`vec3f`,lightType:`int`},`LightRecord`),ds=new A({diffuse:`float`,specular:`float`,transmission:`float`,clearcoat:`float`},`LobeWeights`),fs=new A({V:`vec3f`,L:`vec3f`,H:`vec3f`,VdotH:`float`},`BxDFContext`),ps=L(`

	fn inverse(m: mat3x3f) -> mat3x3f {
		var adj: mat3x3f;
		adj[0][0] =   (m[1][1] * m[2][2] - m[2][1] * m[1][2]);
		adj[1][0] = - (m[1][0] * m[2][2] - m[2][0] * m[1][2]);
		adj[2][0] =   (m[1][0] * m[2][1] - m[2][0] * m[1][1]);
		adj[0][1] = - (m[0][1] * m[2][2] - m[2][1] * m[0][2]);
		adj[1][1] =   (m[0][0] * m[2][2] - m[2][0] * m[0][2]);
		adj[2][1] = - (m[0][0] * m[2][1] - m[2][0] * m[0][1]);
		adj[0][2] =   (m[0][1] * m[1][2] - m[1][1] * m[0][2]);
		adj[1][2] = - (m[0][0] * m[1][2] - m[1][0] * m[0][2]);
		adj[2][2] =   (m[0][0] * m[1][1] - m[1][0] * m[0][1]);

		let det = ( m[0][0] * (m[1][1] * m[2][2] - m[1][2] * m[2][1])
			- m[0][1] * (m[1][0] * m[2][2] - m[1][2] * m[2][0])
			+ m[0][2] * (m[1][0] * m[2][1] - m[1][1] * m[2][0]));

		return adj * ( 1.0 / det );
	}

`),ms=L(`

	fn getBasisFromNormal( normal: vec3f ) -> mat3x3f {

		var other: vec3f;
		if ( abs( normal.x ) > 0.5 ) {

			other = vec3f( 0.0, 1.0, 0.0 );

		} else {

			other = vec3f( 1.0, 0.0, 0.0 );

		}

		let ortho = normalize( cross( normal, other ) );
		let ortho2 = normalize( cross( normal, ortho ) );
		return mat3x3f( ortho2, ortho, normal );

	}

`),hs=L(`

	fn iorToF0( ior: f32 ) -> f32 {
		return pow( ( 1 - ior ) / ( 1 + ior ), 2 );
	}

`),gs=L(`

	fn iorToF0General( transmittedIor: f32, incidentIor: f32 ) -> f32 {

		return pow( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ), 2 );

	}

`),_s=L(`

	fn iorToF0GeneralVec( transmittedIor: vec3f, incidentIor: vec3f ) -> vec3f {

		let v = ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor );
		return v * v;

	}

`),vs=L(`

	fn fresnel0ToIor( f0: vec3f ) -> vec3f {

		let sqrtF0 = sqrt( f0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );

	}

`),ys=L(`

	fn schlickFresnel( cosine: f32, f0: f32 ) -> f32 {

		return f0 + ( 1.0 - f0 ) * pow( 1.0 - cosine, 5.0 );

	}

`),bs=L(`

	fn schlickFresnelVec( cosine: f32, f0: vec3f, f90: vec3f ) -> vec3f {

		return f0 + ( f90 - f0 ) * pow( 1.0 - cosine, 5.0 );

	}

`),xs=L(`

	fn totalInternalReflection( cosTheta: f32, eta: f32 ) -> bool {

		let sinTheta = sqrt( 1.0 - cosTheta * cosTheta );
		return eta * sinTheta > 1.0;

	}

`),Ss=L(`

	fn totalInternalReflectionVec( cosTheta: f32, eta: vec3f ) -> vec3<bool> {

		let sinTheta = sqrt( 1.0 - cosTheta * cosTheta );
		return eta * sinTheta > vec3f( 1.0 );

	}

`);L(`

	fn evaluateFresnel( cosine: f32, eta: f32, f0: vec3f, f90: vec3f ) -> vec3f {

		if ( totalInternalReflection( cosine, eta ) ) {

			return f90;

		}

		return f0 + ( f90 - f0 ) * pow( 1.0 - cosine, 5.0 );
	}

`,[xs]);var Cs=L(`

	fn dielectricFresnel( cosThetaI: f32, eta: f32 ) -> f32 {

		// https://schuttejoe.github.io/post/disneybsdf/
		let ni = eta;
		let nt = 1.0;

		// Check for total internal reflection
		let sinThetaISq = 1.0 - cosThetaI * cosThetaI;
		let sinThetaTSq = eta * eta * sinThetaISq;
		if ( sinThetaTSq >= 1.0 ) {

			return 1.0;

		}

		let sinThetaT = sqrt( sinThetaTSq );
		let cosThetaT = sqrt( max( 0.0, 1.0 - sinThetaT * sinThetaT ) );
		let rParallel = ( ( nt * cosThetaI ) - ( ni * cosThetaT ) ) / ( ( nt * cosThetaI ) + ( ni * cosThetaT ) );
		let rPerpendicular = ( ( ni * cosThetaI ) - ( nt * cosThetaT ) ) / ( ( ni * cosThetaI ) + ( nt * cosThetaT ) );
		return ( rParallel * rParallel + rPerpendicular * rPerpendicular ) / 2.0;

	}

`),ws=L(`

	fn disneyFresnel( wo: vec3f, wi: vec3f, wh: vec3f, f0: f32, eta: f32, metalness: f32 ) -> f32 {

		let dotHV = dot( wo, wh );
		if ( totalInternalReflection( dotHV, eta ) ) {

			return 1.0;

		}

		let dotHL = dot( wi, wh );
		let dielectricF = dielectricFresnel( abs( dotHV ), eta );
		let metallicF = schlickFresnel( dotHL, f0 );

		return mix( dielectricF, metallicF, metalness );

	}

`,[xs,Cs,ys]),Ts=L(`

	fn isTerminatingScatter( scatterRec: ScatterRecord ) -> bool {

		return scatterRec.pdf <= 0;

	}

`,[is]),Q=L(`

	fn clampPathContribution( contribution: vec3f, pathDepth: u32, clampDirect: f32, clampIndirect: f32 ) -> vec3f {

		let limit = select( clampIndirect, clampDirect, pathDepth <= 1u ) * 3.0;
		if ( limit <= 0.0 ) {

			return contribution;

		}

		let strength = dot( abs( contribution ), vec3f( 1.0 ) );
		if ( strength > limit ) {

			return contribution * ( limit / strength );

		}

		return contribution;

	}

`),Es=L(`

	fn applyWrap( v: f32, wrapMode: i32 ) -> f32 {

		var res = v;
		if ( wrapMode == 1 ) {

			// ClampToEdge
			res = clamp( res, 0.0, 1.0 );

		} else if ( wrapMode == 2 ) {

			// MirroredRepeat
			res = 1.0 - abs( 2.0 * fract( res * 0.5 ) - 1.0 );

		} else {

			// Repeat
			res = fract( res );

		}

		return res;

	}

`),Ds=L(`

	fn offsetRayOrigin( point: vec3f, direction: vec3f, geometricNormal: vec3f ) -> vec3f {

		let normal = normalize( select( -geometricNormal, geometricNormal, dot( direction, geometricNormal ) >= 0.0 ) );
		let intScale = 256.0;
		let integerOffset = vec3i( intScale * normal );
		let pointBits = bitcast<vec3i>( point );
		let signedOffset = select( integerOffset, -integerOffset, point < vec3f( 0.0 ) );
		let offsetPoint = bitcast<vec3f>( pointBits + signedOffset );
		let origin = 1.0 / 32.0;
		let floatScale = 1.0 / 65536.0;
		return select( offsetPoint, point + floatScale * normal, abs( point ) < vec3f( origin ) );

	}

`),Os=L(`

	fn wrapTexelIndex( i: i32, size: i32, wrapMode: i32 ) -> i32 {

		if ( wrapMode == 0 ) {

			// Repeat wraps to the opposite edge
			return ( ( i % size ) + size ) % size;

		}

		// ClampToEdge and MirroredRepeat both fold back onto the edge texel
		return clamp( i, 0, size - 1 );

	}

`),ks=(e,t,n=`sampleTexel`)=>X`

	fn ${n}( uv: vec2f, packed: i32, lod: f32 ) -> vec4f {

		let texIndex = packed & 0x7FFFFF;
		let wrapS    = ( packed >> 26 ) & 0x3;
		let wrapT    = ( packed >> 28 ) & 0x3;
		let nearest  = ( packed >> 30 ) & 0x1;

		// look up the texture's rect and page within the atlas. three wraps a
		// uniformArray in a struct ( textureInfoStruct ) with a "value" array member.
		let info   = ${e}[ u32( texIndex ) ];
		let offset = vec2f( vec2u( info.x & 0xFFFFu, info.x >> 16u ) );
		let size   = vec2f( vec2u( info.y & 0xFFFFu, info.y >> 16u ) );
		let page   = i32( info.z & 0xFFFFu );

		// wrap is applied on the logical uv first, then remapped into the tile
		let wrappedUv = vec2f(
			${Es}( uv.x, wrapS ),
			${Es}( uv.y, wrapT ),
		);

		if ( nearest == 1 ) {

			let tileTexel = clamp( vec2i( wrappedUv * size ), vec2i( 0 ), vec2i( size ) - vec2i( 1 ) );
			return textureLoad( ${t}, vec2i( offset ) + tileTexel, page, 0 );

		} else {

			// The tile's neighbors in the atlas are unrelated textures, so hardware
			// filtering cannot supply the taps that fall outside it. Filter here instead
			// and resolve each tap through the wrap mode.
			let texelPos = wrappedUv * size - vec2f( 0.5 );
			let basePos = floor( texelPos );
			let base = vec2i( basePos );
			let f = texelPos - basePos;

			let intSize = vec2i( size );
			let x0 = ${Os}( base.x,     intSize.x, wrapS );
			let x1 = ${Os}( base.x + 1, intSize.x, wrapS );
			let y0 = ${Os}( base.y,     intSize.y, wrapT );
			let y1 = ${Os}( base.y + 1, intSize.y, wrapT );

			let tile = vec2i( offset );
			let c00 = textureLoad( ${t}, tile + vec2i( x0, y0 ), page, 0 );
			let c10 = textureLoad( ${t}, tile + vec2i( x1, y0 ), page, 0 );
			let c01 = textureLoad( ${t}, tile + vec2i( x0, y1 ), page, 0 );
			let c11 = textureLoad( ${t}, tile + vec2i( x1, y1 ), page, 0 );

			return mix(
				mix( c00, c10, f.x ),
				mix( c01, c11, f.x ),
				f.y,
			);

		}

	}
`,As=L(`

	fn diffuseDirection( wo: vec3f, uv: vec2f ) -> vec3f {

		var lightDirection = sampleSphere( uv );
		lightDirection.z += 1.0;
		lightDirection = normalize( lightDirection );

		return lightDirection;

	}

`,[L(`

	fn sampleSphere( uv: vec2f ) -> vec3f {

		let u = ( uv.x - 0.5 ) * 2.0;
		let t = uv.y * PI * 2.0;
		let f = sqrt( 1.0 - u * u );

		return vec3f( f * cos( t ), f * sin( t ), u );

	}

`,[Z])]),js=L(`

	fn getLobeWeights( wo: vec3f, wi: vec3f, woClearcoat: vec3f, wh: vec3f, clearcoatIor: f32, surf: SurfaceRecord ) -> LobeWeights {

		var weights: LobeWeights;
		var remaining = 1.0;

		let clearcoatF0 = iorToF0( clearcoatIor );
		let clearcoatFresnel = schlickFresnel( saturate( woClearcoat.z ), clearcoatF0 );
		weights.clearcoat = surf.clearcoat * clearcoatFresnel;
		remaining -= weights.clearcoat;

		// this specular lobe only handles the opaque portion of the specular
		let fEstimate = disneyFresnel( wo, wi, wh, surf.f0, surf.eta, surf.metalness );
		weights.specular = remaining * ( surf.metalness + ( 1.0 - surf.metalness ) * ( 1.0 - surf.transmission ) * fEstimate );
		remaining -= weights.specular;

		// the transmission lobe covers both the reflected and refracted halves of the transmissive portion
		weights.transmission = remaining * surf.transmission;
		remaining -= weights.transmission;

		weights.diffuse = remaining;

		return weights;

	}

`,[ws,ys,hs,ds,Z]),Ms=L(`

	fn equirectDirectionToUv(direction: vec3f) -> vec2f {

		// from Spherical.setFromCartesianCoords
		var uv = vec2f( atan2( direction.z, direction.x ), acos( direction.y ) );
		uv /= vec2f( 2.0 * PI, PI );

		// apply adjustments to get values in range [0, 1] and y right side up
		uv.x += 0.5;
		uv.y = 1.0 - uv.y;
		return uv;

	}

`),Ns=L(`

	fn sampleHemisphere( n: vec3f, uv: vec2f ) -> vec3f {

		// https://www.rorydriscoll.com/2009/01/07/better-sampling/
		// https://graphics.pixar.com/library/OrthonormalB/paper.pdf
		let sign = select( sign( n.z ), 1.0, n.z == 0.0 );
		let a = - 1.0 / ( sign + n.z );
		let b = n.x * n.y * a;
		let b1 = vec3( 1.0 + sign * n.x * n.x * a, sign * b, - sign * n.x );
		let b2 = vec3( b, sign + n.y * n.y * a, - n.y );

		let r = sqrt( uv.x );
		let theta = 2.0 * PI * uv.y;
		let x = r * cos( theta );
		let y = r * sin( theta );
		return x * b1 + y * b2 + sqrt( 1.0 - uv.x ) * n;

	}

`,[Z]),Ps=L(`

	fn misHeuristic( a: f32, b: f32 ) -> f32 {

		let aa = a * a;
		let bb = b * b;
		return aa / ( aa + bb );

	}

`),Fs=L(`

	fn luminance( color: vec3f ) -> f32 {

		return dot( color, vec3f( 0.2126, 0.7152, 0.0722 ) );

	}

`),Is=L(`

	fn equirectUvToDirection( uvIn: vec2f ) -> vec3f {

		// undo the adjustments applied in equirectDirectionToUv
		var uv = uvIn;
		uv.x -= 0.5;
		uv.y = 1.0 - uv.y;

		let theta = uv.x * 2.0 * PI;
		let phi = uv.y * PI;
		let sinPhi = sin( phi );

		return vec3f( sinPhi * cos( theta ), cos( phi ), sinPhi * sin( theta ) );

	}

`,[Z]);L(`

	fn equirectDirectionPdf( direction: vec3f ) -> f32 {

		let uv = equirectDirectionToUv( direction );
		let theta = uv.y * PI;
		let sinTheta = sin( theta );
		if ( sinTheta == 0.0 ) {

			return 0.0;

		}

		return 1.0 / ( 2.0 * PI * PI * sinTheta );

	}

`,[Z,Ms]);var Ls=L(`

	fn weightedAlphaBlend( prevColor: vec4f, newColor: vec4f, weight: f32 ) -> vec4f {

		let invWeight = 1.0 - weight;
		let totalAlpha = prevColor.a * invWeight + newColor.a * weight;
		var blendedColor = vec4f( 0 );
		if ( totalAlpha != 0.0 ) {

			let prevContrib = prevColor.rgb * invWeight * prevColor.a / totalAlpha;
			let resContrib = newColor.rgb * weight * newColor.a / totalAlpha;
			blendedColor = vec4f( prevContrib + resContrib, totalAlpha );

		}

		return blendedColor;

	}

`),Rs=1e30,zs=1e-5,Bs=L(`

	fn isMISWeightLight( lightType: i32 ) -> bool {

		return lightType == 5 || lightType == 1 || lightType == 0;

	}

`),Vs=L(`

	fn getSpotAttenuation( coneCosine: f32, penumbraCosine: f32, angleCosine: f32 ) -> f32 {

		return smoothstep( coneCosine, penumbraCosine, angleCosine );

	}

`),Hs=L(`

	fn getDistanceAttenuation( lightDistance: f32, cutoffDistance: f32, decayExponent: f32 ) -> f32 {

		// based upon Frostbite 3 Moving to Physically-based Rendering
		// https://seblagarde.files.wordpress.com/2015/07/course_notes_moving_frostbite_to_pbr_v32.pdf
		var distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), EPSILON );
		if ( cutoffDistance > 0.0 ) {

			let window = clamp( 1.0 - pow( lightDistance / cutoffDistance, 4.0 ), 0.0, 1.0 );
			distanceFalloff *= window * window;

		}

		return distanceFalloff;

	}

`,[Z]),Us=L(`

	fn intersectsRectangle( center: vec3f, normal: vec3f, u: vec3f, v: vec3f, rayOrigin: vec3f, rayDirection: vec3f ) -> f32 {

		let t = dot( center - rayOrigin, normal ) / dot( rayDirection, normal );
		if ( t > EPSILON ) {

			let p = rayOrigin + rayDirection * t;
			let vi = p - center;

			let a1 = dot( u, vi );
			if ( abs( a1 ) <= 0.5 ) {

				let a2 = dot( v, vi );
				if ( abs( a2 ) <= 0.5 ) {

					return t;

				}

			}

		}

		return - 1.0;

	}

`,[Z]),Ws=L(`

	fn intersectsCircle( position: vec3f, normal: vec3f, u: vec3f, v: vec3f, rayOrigin: vec3f, rayDirection: vec3f ) -> f32 {

		let t = dot( position - rayOrigin, normal ) / dot( rayDirection, normal );
		if ( t > EPSILON ) {

			let hit = rayOrigin + rayDirection * t;
			let vi = hit - position;

			let a1 = dot( u, vi );
			let a2 = dot( v, vi );
			if ( length( vec2f( a1, a2 ) ) <= 0.5 ) {

				return t;

			}

		}

		return - 1.0;

	}

`,[Z]),Gs=L(`

	fn randomAreaLightSample( light: Light, rayOrigin: vec3f, ruv: vec2f ) -> LightRecord {

		var randomPos = vec3f( 0.0 );
		if ( light.lightType == 0 ) {

			randomPos = light.position + light.u * ( ruv.x - 0.5 ) + light.v * ( ruv.y - 0.5 );

		} else if ( light.lightType == 1 ) {

			let r = 0.5 * sqrt( ruv.x );
			let theta = ruv.y * 2.0 * PI;
			randomPos = light.position + light.u * ( r * cos( theta ) ) + light.v * ( r * sin( theta ) );

		}

		let toLight = randomPos - rayOrigin;
		let lightDistSq = dot( toLight, toLight );
		let dist = sqrt( lightDistSq );
		let direction = toLight / dist;
		let lightNormal = normalize( cross( light.u, light.v ) );

		var lightRec: LightRecord;
		lightRec.lightType = light.lightType;
		lightRec.emission = light.color * light.intensity;
		lightRec.dist = dist;
		lightRec.direction = direction;

		// points behind or edge-on to the light receive no contribution
		let cosTheta = dot( direction, lightNormal );
		if ( cosTheta <= 0.0 ) {

			lightRec.pdf = 0.0;

		} else {

			lightRec.pdf = lightDistSq / ( light.area * cosTheta );

		}

		return lightRec;

	}

`,[ls,us,Z]),Ks=L(`

	fn randomSpotLightSample( light: Light, rayOrigin: vec3f, ruv: vec2f ) -> LightRecord {

		let radius = light.radius * sqrt( ruv.x );
		let theta = ruv.y * 2.0 * PI;
		let x = radius * cos( theta );
		let y = radius * sin( theta );

		let u = light.u;
		let v = light.v;
		let normal = normalize( cross( u, v ) );

		let angle = acos( light.coneCos );
		let angleTan = tan( angle );
		let startDistance = light.radius / max( angleTan, EPSILON );

		let randomPos = light.position - normal * startDistance + u * x + v * y;
		let toLight = randomPos - rayOrigin;
		let lightDistSq = dot( toLight, toLight );
		let dist = sqrt( lightDistSq );

		let direction = toLight / max( dist, EPSILON );
		let distanceAttenuation = getDistanceAttenuation( dist, light.distance, light.decay );

		var lightRec: LightRecord;
		lightRec.lightType = light.lightType;
		lightRec.dist = dist;
		lightRec.direction = direction;
		lightRec.emission = light.color * light.intensity * distanceAttenuation;
		lightRec.pdf = 1.0;

		return lightRec;

	}

`,[ls,us,Z,Hs]),qs=L(`

	fn getSpotLightNearest( light: Light, position: vec3f ) -> vec2f {

		let normal = normalize( cross( light.u, light.v ) );
		let startDistance = light.radius / max( tan( acos( light.coneCos ) ), EPSILON );
		let discCenter = light.position - normal * startDistance;

		let toPosition = position - discCenter;
		let along = dot( toPosition, - normal );
		let across = max( length( toPosition + normal * along ) - light.radius, 0.0 );
		let dist = length( vec2f( along, across ) );
		return vec2f( along / max( dist, EPSILON ), dist );

	}

`,[ls,Z]),Js=L(`

	fn ggxDirection( incidentDir: vec3f, alpha: vec2f, uv: vec2f ) -> vec3f {

		// Implementation from reference [1]
		// stretch view
		let V = normalize( vec3f( alpha * incidentDir.xy, incidentDir.z ) );

		// orthonormal basis
		var T1: vec3f;
		if ( V.z < 0.9999 ) {

			T1 = normalize( cross( V, vec3( 0.0, 0.0, 1.0 ) ) );

		} else {

			T1 = vec3( 1.0, 0.0, 0.0 );

		}

		let T2 = cross( T1, V );

		// sample point with polar coordinates (r, phi)
		let a = 1.0 / ( 1.0 + V.z );
		let r = sqrt( uv.x );
		var phi: f32;
		if ( uv.y < a ) {

			phi = uv.y / a * PI;

		} else {

			phi = PI + ( uv.y - a ) / ( 1.0 - a ) * PI;

		}

		let P1 = r * cos( phi );
		var P2 = r * sin( phi );
		if ( uv.y >= a ) {

			P2 *= V.z;

		}

		// compute normal
		var N = P1 * T1 + P2 * T2 + V * sqrt( max( 0.0, 1.0 - P1 * P1 - P2 * P2 ) );

		// unstretch
		N = normalize( vec3( alpha * N.xy, max( 0.0, N.z ) ) );

		return N;

	}

`,[Z]),Ys=L(`

	fn ggxShadowMaskG1( V: vec3f, alpha: vec2f ) -> f32 {

		// TODO: this could be collapsed to a simpler form as an optimization
		return 1.0 / ( 1.0 + ggxLambda( V, alpha ) );

	}

`,[L(`

	fn ggxLambda( V: vec3f, alpha: vec2f ) -> f32 {

		let alphaT = alpha.x;
		let alphaB = alpha.y;

		// abs v.z to support transmitted rays
		let NdotV = max( abs( V.z ), MIN_INCIDENT_COS );
		let cos2 = NdotV * NdotV;
		let t = ( alphaT * alphaT * V.x * V.x + alphaB * alphaB * V.y * V.y ) / cos2;
		let numerator = - 1.0 + sqrt( 1.0 + t );
		return numerator / 2.0;

	}

`,[Z])]),Xs=L(`

	fn ggxSmithVisibility( V: vec3f, L: vec3f, alpha: vec2f ) -> f32 {

		let alphaT = alpha.x;
		let alphaB = alpha.y;

		let NdotV = max( V.z, MIN_INCIDENT_COS );
		let NdotL = max( L.z, MIN_INCIDENT_COS );

		let TdotV = V.x;
		let TdotL = L.x;

		let BdotV = V.y;
		let BdotL = L.y;

		let GGXV = NdotL * length( vec3f( alphaT * TdotV, alphaB * BdotV, NdotV ) );
		let GGXL = NdotV * length( vec3f( alphaT * TdotL, alphaB * BdotL, NdotL ) );

		return 0.5 / ( GGXV + GGXL );

	}

`,[Z]),Zs=L(`

	fn ggxDistribution( H: vec3f, alpha: vec2f ) -> f32 {

		let alphaT = alpha.x;
		let alphaB = alpha.y;

		let NdotH = H.z;
		let TdotH = H.x;
		let BdotH = H.y;

		let a2 = alphaT * alphaB;
		let v = vec3f( alphaB * TdotH, alphaT * BdotH, a2 * NdotH );
		let v2 = dot( v, v );
		let w2 = a2 / v2;

		return a2 * w2 * w2 / PI;

	}

`,[Z]),Qs=L(`

	fn ggxReflectionAdjustedPDF( V: vec3f, H: vec3f, alpha: vec2f ) -> f32 {

		let NdotV = max( V.z, MIN_INCIDENT_COS );
		let D = ggxDistribution( H, alpha );
		let G1 = ggxShadowMaskG1( V, alpha );

		return D * G1 / ( 4 * NdotV );

	}
`,[Zs,Ys]),$s=L(`

	fn ggxRefractionAdjustedPDF( V: vec3f, L: vec3f, H: vec3f, alpha: vec2f, eta: f32 ) -> f32 {

		let NdotV = max( V.z, MIN_INCIDENT_COS );
		let HdotV = dot( V, H );
		let HdotL = dot( L, H );
		let D = ggxDistribution( H, alpha );
		let G1 = ggxShadowMaskG1( V, alpha );

		let denom = eta * HdotV + HdotL;
		return D * G1 * abs( HdotV ) * abs( HdotL ) / ( NdotV * denom * denom );

	}
`,[Zs,Ys]),ec=X`

	fn ensureValidReflectionNormal( n: vec3f, ng: vec3f, i: vec3f ) -> vec3f {

		// reflected ray
		let R = 2.0 * dot( n, i ) * n - i;

		let Iz = dot( i, ng );

		// reflection rays may always be at least as shallow as the incoming ray
		let threshold = min( 0.9 * Iz, 0.01 );
		if ( dot( ng, R ) >= threshold ) {

			return n;

		}

		// Form coordinate system with Ng as the Z axis and N inside the X-Z-plane.
   		// The X axis is found by normalizing the component of N that's orthogonal to Ng.
   		// The Y axis isn't actually needed.
		let orthoN = n - dot( n, ng ) * ng;
		let orthoLen = length( orthoN );
		let X = select( n, orthoN / orthoLen, orthoLen != 0.0 );

		// Calculate N.z and N.x in the local coordinate system.
		//
		// The goal of this computation is to find a N' that is rotated towards Ng just enough
   		// to lift R' above the threshold (here called t), therefore dot(R', Ng) = t.
		//
		// See the Blender implementation for a full description of the solution.
		let Ix = dot( i, X );

		let a = Ix * Ix + Iz * Iz;
		let b = 2.0 * ( a + Iz * threshold );
		let c = ( threshold + Iz ) * ( threshold + Iz );

		// only one root is valid; the sign of Ix selects it
		var Nz2: f32;
		if ( Ix < 0.0 ) {

			Nz2 = 0.25 * ( b + sqrt( max( b * b - 4.0 * a * c, 0.0 ) ) ) / a;

		} else {

			Nz2 = 0.25 * ( b - sqrt( max( b * b - 4.0 * a * c, 0.0 ) ) ) / a;

		}

		let Nx = sqrt( max( 1.0 - Nz2, 0.0 ) );
		let Nz = sqrt( max( Nz2, 0.0 ) );

		return Nx * X + Nz * ng;

	}

`,tc=X`

	fn ensureValidViewNormal( n: vec3f, ng: vec3f, view: vec3f ) -> vec3f {

		// ensure the view is at least slightly above the surface normal hemisphere
		const MIN_VIEW_COS = 1e-6;

		// if we're positive already then early out
		let c = dot( n, view );
		if ( c > MIN_VIEW_COS ) {

			return n;

		}

		// perpendicular vector to normal and view
		var perp = n - c * view;
		let perpLen = length( perp );

		// if we reach here that means that he view is nearly the opposite direction and
		// we can't derive plan to rotate on towards the view, so just use the geometry
		// normal. This could likely only really happen with a severe normal map application.
		if ( perpLen <= 1e-6 ) {

			return ng;

		}

		perp = perp / perpLen;

		// rotate the normal to be at larger than the above threshold - pythagorean
		// theorem for generating normal with threshold*view component
		return MIN_VIEW_COS * view + sqrt( 1.0 - MIN_VIEW_COS * MIN_VIEW_COS ) * perp;

	}

`,nc=3402823466e29,rc=(e,t,n)=>L(`

	fn getSurfaceRecord(
		material: Material,
		vertexData: bvh_GeometryStruct,
		side: f32,
		faceNormal: vec3f,
		view: vec3f,
		blurRoughness: f32,
	) -> SurfaceRecord {

		// "faceNormal" is provided on the hit side so flip it back to the geometric side
		var normal = faceNormal * side;
		if ( material.flatShading == 0 ) {

			normal = normalize( vertexData.normal.xyz );

		}

		var baseNormal = normal;
		if ( material.normalMap != -1 ) {

			// some provided tangents can be malformed (0, 0, 0) causing the normal to be degenerate
			// resulting in NaNs and slow path tracing.
			if ( length( vertexData.tangent.xyz ) > 0.0 && vertexData.tangent.w != 0.0 ) {

				// TODO: consider re-orthonormalizing against the normal here since attribute
				// interpolation could result in drift.
				let tangent = normalize( vertexData.tangent.xyz );
				let bitangent = normalize( cross( baseNormal, tangent ) * vertexData.tangent.w );
				let vTBN = mat3x3f( tangent, bitangent, baseNormal );

				let uvPrime = material.normalMapTransform * vec3( getUvFromChannel( vertexData, material.normalMap ), 1.0 );
				var texNormal = sampleTexel( uvPrime.xy, material.normalMap, 0 ).xyz;
				texNormal = texNormal * 2.0 - 1.0;
				texNormal = texNormal * vec3f( material.normalScale, 1.0 );
				normal = normalize( vTBN * texNormal );

			}

		}

		normal *= side;

		normal = ensureValidViewNormal( normal, faceNormal, view );

		normal = ensureValidReflectionNormal( normal, faceNormal, view );

		var albedo = vec4( material.color, material.opacity );
		if ( material.vertexColors == 1 ) {

			albedo *= getColor( vertexData );

		}

		if ( material.map != -1 ) {

			let uvPrime = material.mapTransform * vec3f( getUvFromChannel( vertexData, material.map ), 1 );
			albedo *= sampleTexel( uvPrime.xy, material.map, 0 );

		}

		if ( material.alphaMap != -1 ) {

			let uvPrime = material.alphaMapTransform * vec3f( getUvFromChannel( vertexData, material.alphaMap ), 1 );
			albedo.a *= sampleTexel( uvPrime.xy, material.alphaMap, 0 ).g;

		}

		var roughness = material.roughness;
		if ( material.roughnessMap != -1 ) {

			let uvPrime = material.roughnessMapTransform * vec3f( getUvFromChannel( vertexData, material.roughnessMap ), 1 );
			let texColor = sampleTexel( uvPrime.xy, material.roughnessMap, 0 );
			roughness *= texColor.g;

		}

		var metalness = material.metalness;
		if ( material.metalnessMap != -1 ) {

			let uvPrime = material.metalnessMapTransform * vec3f( getUvFromChannel( vertexData, material.metalnessMap ), 1 );
			let texColor = sampleTexel( uvPrime.xy, material.metalnessMap, 0 );
			metalness *= texColor.b;

		}

		var emission = material.emissiveIntensity * material.emissive;
		if ( material.emissiveMap != -1 ) {

			let uvPrime = material.emissiveMapTransform * vec3f( getUvFromChannel( vertexData, material.emissiveMap ), 1 );
			let texColor = sampleTexel( uvPrime.xy, material.emissiveMap, 0 );
			emission *= texColor.rgb;

		}

		var transmission = material.transmission;
		if ( material.transmissionMap != -1 ) {

			let uvPrime = material.transmissionMapTransform * vec3f( getUvFromChannel( vertexData, material.transmissionMap ), 1 );
			let texColor = sampleTexel( uvPrime.xy, material.transmissionMap, 0 );
			transmission *= texColor.r;

		}

		var clearcoat = material.clearcoat;
		if ( material.clearcoatMap != -1 ) {

			let uvPrime = material.clearcoatMapTransform * vec3f( getUvFromChannel( vertexData, material.clearcoatMap ), 1 );
			let texColor = sampleTexel( uvPrime.xy, material.clearcoatMap, 0 );
			clearcoat *= texColor.r;

		}

		var clearcoatRoughness = material.clearcoatRoughness;
		if ( material.clearcoatRoughnessMap != -1 ) {

			let uvPrime = material.clearcoatRoughnessMapTransform * vec3f( getUvFromChannel( vertexData, material.clearcoatRoughnessMap ), 1 );
			let texColor = sampleTexel( uvPrime.xy, material.clearcoatRoughnessMap, 0 );
			clearcoatRoughness *= texColor.g;

		}

		var clearcoatNormal = baseNormal;
		if ( material.clearcoatNormalMap != -1 ) {

			// some provided tangents can be malformed (0, 0, 0) causing the normal to be degenerate
			// resulting in NaNs and slow path tracing.
			if ( length( vertexData.tangent.xyz ) > 0.0 && vertexData.tangent.w != 0.0 ) {

				// TODO: consider re-orthonormalizing against the normal here since attribute
				// interpolation could result in drift.
				let tangent = normalize( vertexData.tangent.xyz );
				let bitangent = normalize( cross( baseNormal, tangent ) * vertexData.tangent.w );
				let vTBN = mat3x3f( tangent, bitangent, baseNormal );

				let uvPrime = material.clearcoatNormalMapTransform * vec3( getUvFromChannel( vertexData, material.clearcoatNormalMap ), 1.0 );
				var texNormal = sampleTexel( uvPrime.xy, material.clearcoatNormalMap, 0 ).xyz;
				texNormal = texNormal * 2.0 - 1.0;
				texNormal = texNormal * vec3f( material.clearcoatNormalScale, 1.0 );
				clearcoatNormal = normalize( vTBN * texNormal );

			}

		}

		clearcoatNormal *= side;

		clearcoatNormal = ensureValidViewNormal( clearcoatNormal, faceNormal, view );

		clearcoatNormal = ensureValidReflectionNormal( clearcoatNormal, faceNormal, view );

		var sheenColor = material.sheenColor;
		if ( material.sheenColorMap != -1 ) {

			let uvPrime = material.sheenColorMapTransform * vec3f( getUvFromChannel( vertexData, material.sheenColorMap ), 1 );
			let texColor = sampleTexel( uvPrime.xy, material.sheenColorMap, 0 );
			sheenColor *= texColor.rgb;

		}

		var sheenRoughness = material.sheenRoughness;
		if ( material.sheenRoughnessMap != -1 ) {

			let uvPrime = material.sheenRoughnessMapTransform * vec3f( getUvFromChannel( vertexData, material.sheenRoughnessMap ), 1 );
			let texColor = sampleTexel( uvPrime.xy, material.sheenRoughnessMap, 0 );
			sheenRoughness *= texColor.r;

		}

		var iridescence = material.iridescence;
		if ( material.iridescenceMap != -1 ) {

			let uvPrime = material.iridescenceMapTransform * vec3f( getUvFromChannel( vertexData, material.iridescenceMap ), 1 );
			let texColor = sampleTexel( uvPrime.xy, material.iridescenceMap, 0 );
			iridescence *= texColor.r;

		}

		var iridescenceThickness = material.iridescenceThicknessMaximum;
		if ( material.iridescenceThicknessMap != -1 ) {

			let uvPrime = material.iridescenceThicknessMapTransform * vec3f( getUvFromChannel( vertexData, material.iridescenceThicknessMap ), 1 );
			let texColor = sampleTexel( uvPrime.xy, material.iridescenceThicknessMap, 0 );

			iridescenceThickness = mix(
				material.iridescenceThicknessMinimum,
				material.iridescenceThicknessMaximum,
				texColor.g,
			);

		}

		var specularColor = material.specularColor;
		if ( material.specularColorMap != -1 ) {

			let uvPrime = material.specularColorMapTransform * vec3f( getUvFromChannel( vertexData, material.specularColorMap ), 1 );
			let texColor = sampleTexel( uvPrime.xy, material.specularColorMap, 0 );
			specularColor *= texColor.rgb;

		}

		var specularIntensity = material.specularIntensity;
		if ( material.specularIntensityMap != -1 ) {

			let uvPrime = material.specularIntensityMapTransform * vec3f( getUvFromChannel( vertexData, material.specularIntensityMap ), 1 );
			let texColor = sampleTexel( uvPrime.xy, material.specularIntensityMap, 0 );
			specularIntensity *= texColor.a;

		}

		// extract the anisotropy magnitude vector in tangent space
		var anisotropyDirVec = material.anisotropy * vec2f( cos( material.anisotropyRotation ), sin( material.anisotropyRotation ) );
		if ( material.anisotropyMap != -1 ) {

			let uvPrime = material.anisotropyMapTransform * vec3f( getUvFromChannel( vertexData, material.anisotropyMap ), 1.0 );
			let aniTex = sampleTexel( uvPrime.xy, material.anisotropyMap, 0 );

			// map rg encode the direction ([-1,1]), b the strength; rotate + scale by the material anisotropy.
			let mapDir = aniTex.rg * 2.0 - vec2f( 1.0 );
			let mapStr = aniTex.b;
			let mapLen = length( mapDir );
			if ( mapLen > EPSILON ) {

				anisotropyDirVec = mat2x2f(
					anisotropyDirVec.x, anisotropyDirVec.y,
					- anisotropyDirVec.y, anisotropyDirVec.x
				) * mapStr * mapDir / mapLen;

			}

		}

		// adjust the surface basis to be oriented along the anisotropic vector
		let anisotropyStrength = length( anisotropyDirVec );
		var surfaceBasis = getBasisFromNormal( normal );
		if ( anisotropyStrength > 0.0 && length( vertexData.tangent.xyz ) > 0.0 && vertexData.tangent.w != 0.0 ) {

			let anisotropyDir = anisotropyDirVec / anisotropyStrength;

			// re-orthonormalize the tangent against the shading normal so the frame stays orthonormal -
			// normal map adjustments will cause the normal and tangent to become non-orthonormal.
			let tangent = normalize( vertexData.tangent.xyz - normal * dot( normal, vertexData.tangent.xyz ) );
			let bitangent = cross( normal, tangent ) * vertexData.tangent.w;

			surfaceBasis = mat3x3f(
				tangent * anisotropyDir.x + bitangent * anisotropyDir.y,
				bitangent * anisotropyDir.x - tangent * anisotropyDir.y,
				normal
			);

		}

		var surf: SurfaceRecord;

		surf.volumeParticle = false;
		surf.faceNormal = faceNormal;
		surf.normal = normal;

		surf.metalness = metalness;
		surf.diffuseRoughness = material.diffuseRoughness;
		surf.color = albedo.rgb;
		surf.emission = emission;

		surf.opacity = select( 1.0, albedo.a, material.transparent != 0 );

		surf.ior = material.ior;
		surf.transmission = transmission;
		surf.thinWall = material.thinWall == 1;
		surf.attenuationColor = material.attenuationColor;
		surf.attenuationDistance = material.attenuationDistance;

		surf.clearcoatNormal = clearcoatNormal;
		surf.clearcoat = clearcoat;

		surf.iridescence = iridescence;
		surf.iridescenceIor = material.iridescenceIor;
		surf.iridescenceThickness = iridescenceThickness;

		surf.specularColor = specularColor;
		surf.specularIntensity = specularIntensity;

		surf.sheen = material.sheen;
		surf.sheenColor = sheenColor;

		let minRoughness = max( MIN_ROUGHNESS, blurRoughness );
		surf.roughness = clamp( roughness, minRoughness, 1.0 );
		surf.clearcoatRoughness = clamp( clearcoatRoughness, minRoughness, 1.0 );
		surf.sheenRoughness = clamp( sheenRoughness, minRoughness, 1.0 );
		surf.anisotropy = anisotropyStrength;

		// frontFace is used to determine transmissive properties and PDF. If no transmission is used
		// then we can just always assume this is a front face.
		surf.frontFace = side == 1.0 || transmission == 0.0;
		if ( material.thinWall == 1 || surf.frontFace ) {

			surf.eta = 1.0 / material.ior;

		} else {

			surf.eta = material.ior;

		}
		surf.f0 = iorToF0( surf.eta );

		// get the normal frames
		surf.normalBasis = surfaceBasis;
		surf.normalInvBasis = inverse( surf.normalBasis );

		surf.clearcoatBasis = getBasisFromNormal( surf.clearcoatNormal );
		surf.clearcoatInvBasis = inverse( surf.clearcoatBasis );

		return surf;
	}

`,[ps,hs,ms,e,t,n,ss,Z,ec,tc]);L(`

	fn diffuseBrdf( NdotV: f32, NdotL: f32, VdotH: f32, surf: SurfaceRecord ) -> vec3f {

		// https://blog.selfshadow.com/publications/s2015-shading-course/burley/s2015_pbs_disney_bsdf_notes.pdf
		// See equation (4)

		let fl = schlickFresnel( NdotL, 0.0 );
		let fv = schlickFresnel( NdotV, 0.0 );

		let alpha = surf.roughness * surf.roughness;
		let bias = mix( 0.0, 0.5, alpha ) - 1;
		let energyFactor = mix( 1.0, 1.0 / 1.51, alpha );

		let rr = 2.0 * alpha * VdotH * VdotH;
		let retro = rr * ( fl + fv + fl * fv * ( rr + 2.0 * bias ) );
		let fresnel = ( 1.0 + bias * fl ) * ( 1.0f + bias * fv );

		// TODO: subsurface approx?

		return energyFactor * ( surf.color / PI ) * ( retro + fresnel );

	}

`,[Z,ys,ss]),L(`

	fn lambertBrdf( NdotV: f32, NdotL: f32, VdotH: f32, surf: SurfaceRecord ) -> vec3f {

		return surf.color / PI;

	}

`,[Z,ss]);var ic=L(`

	fn specularBrdf( V: vec3f, L: vec3f, H: vec3f, alpha: vec2f ) -> vec3f {

		let alphaT = alpha.x;
		let alphaB = alpha.y;

		let Vis = ggxSmithVisibility( V, L, alpha );
		let D = ggxDistribution( H, alpha );

		return vec3f( D * Vis );

	}

`,[Xs,Zs]),ac=L(`

	fn isMatchedIor( eta: f32 ) -> bool {

		return abs( eta - 1.0 ) < EPSILON;

	}

`,[Z]),oc=L(`

	fn specularBtdf( V: vec3f, L: vec3f, H: vec3f, alpha: vec2f, eta: f32 ) -> vec3f {

		let NdotV = V.z;
		let NdotL = L.z;
		let HdotV = dot( V, H );
		let HdotL = dot( L, H );

		// Heaviside function for G term
		if ( NdotV * HdotV < 0.0 || NdotL * HdotL < 0.0 || HdotV * HdotL > 0.0 ) {

			return vec3f( 0.0 );

		}

		let G1_i = ggxShadowMaskG1( V, alpha );
		let G1_o = ggxShadowMaskG1( L, alpha );

		// separable G2 product, no height correlation
		let denom = eta * HdotV + HdotL;
		let Vis = G1_i * G1_o * abs( HdotV ) * abs( HdotL ) /
			( abs( NdotV ) * abs( NdotL ) * denom * denom );

		let F = dielectricFresnel( abs( HdotV ), eta );

		let D = ggxDistribution( H, alpha );

		return vec3f( ( 1 - F ) * D * Vis );

	}

`,[Ys,Zs,Cs]),sc=L(`

	fn thinWallTransmissionRoughness( alpha: f32, eta: f32 ) -> f32 {

		let t = 3.4 * ( eta - 1.0 ) * ( eta - 0.5 ) * ( eta - 0.5 ) / ( eta * eta * eta );
		return saturate( alpha * sqrt( max( t, 0.0 ) ) );

	}

`),cc=L(`

	fn transmissionAttenuation( dist: f32, attColor: vec3f, attDist: f32 ) -> vec3f {

		return pow( attColor, vec3f( dist / attDist ) );

	}

`),lc=X`

	fn applyDispersion( surf: ptr<function, ${ss}>, dispersion: f32, wavelength: f32 ) -> void {

		surf.ior = ${L(`

	fn dispersionIor( ior: f32, dispersion: f32, wavelength: f32 ) -> f32 {

		let nd = max( ior, 1.0 );
		let scale = ( nd - 1.0 ) * max( dispersion, 0.0 ) / 20.0;
		let lambda = clamp( wavelength, 360.0, 830.0 );
		return max( nd + scale * ( 523655.0 / ( lambda * lambda ) - 1.5168 ), 1.0 );

	}

`)}( surf.ior, dispersion, wavelength );
		surf.eta = select( surf.ior, 1.0 / surf.ior, surf.thinWall || surf.frontFace );
		surf.f0 = ${hs}( surf.eta );

	}

`,uc=L(`

	fn dispersionColorWeight( wavelength: f32 ) -> vec3f {

		let lambda = clamp( wavelength, 360.0, 830.0 );

		let x1 = ( lambda - 442.0 ) * select( 0.0374, 0.0624, lambda < 442.0 );
		let x2 = ( lambda - 599.8 ) * select( 0.0323, 0.0264, lambda < 599.8 );
		let x3 = ( lambda - 501.1 ) * select( 0.0382, 0.0490, lambda < 501.1 );
		let x = 0.362 * exp( - 0.5 * x1 * x1 ) + 1.056 * exp( - 0.5 * x2 * x2 ) - 0.065 * exp( - 0.5 * x3 * x3 );

		let y1 = ( lambda - 568.8 ) * select( 0.0247, 0.0213, lambda < 568.8 );
		let y2 = ( lambda - 530.9 ) * select( 0.0322, 0.0613, lambda < 530.9 );
		let y = 0.821 * exp( - 0.5 * y1 * y1 ) + 0.286 * exp( - 0.5 * y2 * y2 );

		let z1 = ( lambda - 437.0 ) * select( 0.0278, 0.0845, lambda < 437.0 );
		let z2 = ( lambda - 459.0 ) * select( 0.0725, 0.0385, lambda < 459.0 );
		let z = 1.217 * exp( - 0.5 * z1 * z1 ) + 0.681 * exp( - 0.5 * z2 * z2 );

		let linearRgb = max( vec3f(
			3.2404542 * x - 1.5371385 * y - 0.4985314 * z,
			- 0.9692660 * x + 1.8760108 * y + 0.0415560 * z,
			0.0556434 * x - 0.2040259 * y + 1.0572252 * z,
		), vec3f( 0.0 ) );

		return linearRgb * vec3f( 2.6699448, 4.0708066, 4.2980494 );

	}

`),dc=L(`

	fn fresnelMix( VdotH: f32, f0Color: vec3f, ior: f32, eta: f32, weight: f32, base: vec3f, layer: vec3f ) -> vec3f {

		var f0 = iorToF0( ior ) * f0Color;
		f0 = min( f0, vec3f( 1.0 ) );

		// reflect all light on total internal reflection, matching the WebGL evaluateFresnel function
		var fr = vec3f( 1.0 );
		if ( ! totalInternalReflection( abs( VdotH ), eta ) ) {

			fr = schlickFresnelVec( abs( VdotH ), f0, vec3f( 1.0 ) );

		}

		let maxFr = max( max( fr.r, fr.g ), fr.b );

		return ( 1.0 - weight * maxFr ) * base + weight * fr * layer;

	}

`,[bs,hs,xs]),fc=Qt(3.2404542,-.969266,.0556434,-1.5371385,1.8760108,-.2040259,-.4985314,.041556,1.0572252),pc=L(`

	fn iridescentFresnel(
		cosTheta1: f32, baseF0: vec3f, iridescenceIor: f32,
		outsideIor: f32, iridescenceThickness: f32,
	) -> vec3f {

		let sinTheta2Sq = pow( outsideIor / iridescenceIor, 2.0 ) * ( 1.0 - pow( cosTheta1, 2.0 ) );
		let cosTheta2Sq = 1.0 - sinTheta2Sq;

		// Handle total internal reflection
		if ( cosTheta2Sq < 0.0 ) {

			return vec3( 1.0 );

		}

		let cosTheta2 = sqrt( cosTheta2Sq );

		// First interface: air -> iridescent thin film
		let R0 = iorToF0General( iridescenceIor, outsideIor );
		let R12 = schlickFresnel( cosTheta1, R0 );
		let R21 = R12;
		let T121 = 1.0 - R12;
		let phi12 = select( 0.0, PI, iridescenceIor < outsideIor );
		let phi21 = PI - phi12;

		// Second interface: iridescent thin film -> base material
		let baseIor = fresnel0ToIor( clamp( baseF0, vec3( 0.0 ), vec3( 0.9999 ) ) ); // guard against 1.0
		let R1 = iorToF0GeneralVec( baseIor, vec3( iridescenceIor ) );
		var R23 = schlickFresnelVec( cosTheta2, R1, vec3( 1.0 ) );

		// Handle total internal reflection at the film -> base interface
		// NOTE: Added separately from the original implementation. Is this correct?
		R23 = select( R23, vec3( 1.0 ), totalInternalReflectionVec( cosTheta2, vec3( iridescenceIor ) / baseIor ) );
		let phi23 = select( vec3( 0.0 ), vec3( PI ), baseIor < vec3( iridescenceIor ) );

		// Phase shift
		let OPD = 2.0 * iridescenceIor * iridescenceThickness * cosTheta2;
		let phi = vec3( phi21 ) + phi23;

		// Analytical integration
		// Compound terms
		let R123 = clamp( R12 * R23, vec3( 1e-5 ), vec3( 0.9999 ) );
		let r123 = sqrt( R123 );
		let Rs = T121 * T121 * R23 / ( vec3( 1.0 ) - R123 );

		// Reflectance term for m = 0 (DC term amplitude)
		let C0 = R12 + Rs;
		var I = C0;

		// Reflectance term for m > 0 (pairs of diracs)
		var Cm = Rs - T121;
		for (var m = 1; m <= 2; m += 1) {

			Cm *= r123;
			let Sm = 2.0 * evalSensitivity( f32( m ) * OPD, f32( m ) * phi );
			I += Cm * Sm;

		}

		return max( I, vec3(0.0) );

	}

`,[gs,_s,ys,vs,X`

	fn evalSensitivity( OPD: f32, shift: vec3f ) -> vec3f {

		let phase = 2.0 * ${Math.PI} * OPD * 1.0e-9;
		const val = vec3(5.4856e-13, 4.4201e-13, 5.2481e-13);
		const pos = vec3(1.6810e+06, 1.7953e+06, 2.2084e+06);
		const _var = vec3(4.3278e+09, 9.3046e+09, 6.6121e+09);

		var xyz = val * sqrt(2.0 * ${Math.PI} * _var) * cos(pos * phase + shift) * exp(-phase * phase * _var);
		xyz.x += 9.7470e-14 * sqrt(2.0 * ${Math.PI} * 4.5282e+09) * cos(2.2399e+06 * phase + shift.x) * exp(-4.5282e+09 * phase * phase);
		xyz /= 1.0685e-7;

		let rgb = ${fc} * xyz;
		return rgb;

	}

`,Ss]),mc=(e=pc)=>X`

	fn transmissionFresnel( cosTheta: f32, surf: ${ss} ) -> ${as} {

		var result: ${as};
		let cosine = saturate( abs( cosTheta ) );
		let matchedIor = ${ac}( surf.eta );
		let airIncident = surf.thinWall || surf.frontFace;
		let dielectricFresnel = ${Cs}( cosine, surf.eta );

		// Keep matched media transparent unless a real thin-film layer is present. This avoids
		// introducing the non-physical Schlick F90 reflection produced by KHR_materials_specular
		// when the substrate itself has no IOR boundary.
		var reflectance = vec3f( 0.0 );
		if ( ! matchedIor ) {

			let specularF0 = min( surf.f0 * surf.specularColor, vec3f( 1.0 ) );
			let dielectricReflectance = select(
				vec3f( dielectricFresnel ),
				${bs}( cosine, specularF0, vec3f( 1.0 ) ),
				airIncident,
			);
			reflectance = surf.specularIntensity * dielectricReflectance;

		}

		reflectance = clamp( reflectance, vec3f( 0.0 ), vec3f( 1.0 ) );
		var transmittance = vec3f( 1.0 ) - reflectance;

		if ( surf.iridescence > 0.0 ) {

			// The media on either side of the film are air outside and the volume interior as
			// the base. Swap them on interior hits so film-interface TIR remains possible.
			let outsideIor = select( surf.ior, 1.0, airIncident );
			let filmBaseIor = select( 1.0, surf.ior, airIncident );
			let filmReflectance = clamp( ${e}(
				cosine,
				vec3f( ${hs}( filmBaseIor ) ),
				surf.iridescenceIor,
				outsideIor,
				surf.iridescenceThickness,
			), vec3f( 0.0 ), vec3f( 1.0 ) );

			reflectance = mix( reflectance, filmReflectance, surf.iridescence );
			transmittance = mix( transmittance, vec3f( 1.0 ) - filmReflectance, surf.iridescence );

		}

		result.reflectance = reflectance;
		result.transmittance = transmittance;

		// Include the base-color tint in the transmission energy, as Cycles does when it
		// computes the glass reflection probability from its two tinted coefficients.
		let reflectEnergy = dot( reflectance, vec3f( 1.0 / 3.0 ) );
		let transmitEnergy = dot( transmittance * surf.color, vec3f( 1.0 / 3.0 ) );
		let totalEnergy = reflectEnergy + transmitEnergy;
		result.reflectProbability = select( 0.0, reflectEnergy / max( totalEnergy, EPSILON ), totalEnergy > EPSILON );

		return result;

	}

`,hc=L(`

	fn conductorFresnel( VdotH: f32, f0: vec3f, specular: vec3f ) -> vec3f {

		return specular * schlickFresnelVec( abs( VdotH ), f0, vec3f( 1 ) );

	}

`,[bs]),gc=L(`

	fn fresnelCoat( VdotNc: f32, ior: f32, base: vec3f, layer: vec3f, weight: f32 ) -> vec3f {

		let f0 = iorToF0( ior );
		let F = schlickFresnel( abs( VdotNc ), f0 );

		return mix( base, layer, weight * F );

	}

`,[hs,ys]),_c=e=>X`

	fn albedo(
		eta: f32,
		includeFresnel: bool,
		includeRefraction: bool,
		globalId: vec3u,
		layer: u32,
	) -> void {

		// The matched-IOR limit is a unit-energy delta transmission event, so it cannot
		// be integrated with the rough BTDF below.
		if ( includeRefraction && ${ac}( eta ) ) {

			textureStore( ${e}, vec3( globalId.xy, layer ), vec4( 1.0 ) );
			return;

		}

		// sample the brdf directions in a grid pattern
		const GRID_SIZE = 64u;

		// TODO: this sampling means that energy at 0.0 & 1.0 roughness (and 0 and 90deg cos) are never
		// written to the texture due to the half texel inset, resulting in small, though possibly noticeable,
		// error in common cases.
		let dimensions = textureDimensions( ${e} ).xy;
		let uv = ( vec2f( globalId.xy ) + vec2f( 0.5 ) ) / vec2f( dimensions );

		let cosThetaO = uv.x;
		let roughness = uv.y;
		let alpha = roughness * roughness;

		let wo = vec3( sqrt( 1 - cosThetaO * cosThetaO ), 0 , cosThetaO );

		let f0 = ${hs}( eta );

		var result = 0.0;
		for ( var x = 0u; x < GRID_SIZE; x++ ) {

			for ( var y = 0u; y < GRID_SIZE; y++ ) {

				// calculate the half vector to sample
				let gridPoint = vec2f( vec2u( x, y ) ) + vec2f( 0.5 );
				let sampleUv = gridPoint / f32( GRID_SIZE );
				let wh = ${Js}( wo, vec2( alpha ), sampleUv );

				var f = 1.0;
				if ( includeFresnel ) {

					// use the exact dielectric fresnel so the table agrees with the fresnel used
					// for lobe sampling
					f = ${Cs}( dot( wo, wh ), eta );

				}

				// air-incident reflection is evaluated with schlick in bsdfEval - only the
				// volume-incident ( TIR ) glass reflection uses the exact fresnel
				var reflectionF = f;
				if ( eta < 1.0 ) {

					reflectionF = ${ys}( dot( wo, wh ), f0 );

				}

				// reflection lobe - samples landing below the surface are lost
				let wi = - reflect( wo, wh );
				let reflectionPdf = ${Qs}( wo, wh, vec2f( alpha ) );
				if ( wi.z > 0.0 && reflectionPdf != 0.0 ) {

					let specular = ${ic}( wo, wi, wh, vec2f( alpha ) );
					result += reflectionF * specular.x * wi.z / reflectionPdf;

				}

				// refraction lobe - the btdf carries its own ( 1 - F ) fresnel weight, and
				// samples landing back above the surface are lost
				if ( includeRefraction ) {

					let wiRefract = refract( - wo, wh, eta );
					if ( wiRefract.z < 0.0 ) {

						let transmission = ${oc}( wo, wiRefract, wh, vec2f( alpha ), eta );
						let pdf = ${$s}( wo, wiRefract, wh, vec2f( alpha ), eta );
						if ( pdf != 0.0 ) {

							result += transmission.x * abs( wiRefract.z ) / pdf;

						}

					}

				}

			}

		}

		result /= f32( GRID_SIZE * GRID_SIZE );

		textureStore( ${e}, vec3( globalId.xy, layer ), vec4( result ) );

	}

`;function vc(e,t=Math.random){for(let n=e.length-1;n>0;n--){let r=~~((t()-1e-6)*n),i=e[n];e[n]=e[r],e[r]=i}}function yc(e,t){e.fill(0);for(let n=0;n<t;n++)e[n]=1}var bc=class{constructor(e){this.count=0,this.size=-1,this.sigma=-1,this.radius=-1,this.lookupTable=null,this.score=null,this.binaryPattern=null,this.resize(e),this.setSigma(1.5)}findVoid(){let{score:e,binaryPattern:t}=this,n=1/0,r=-1;for(let i=0,a=t.length;i<a;i++){if(t[i]!==0)continue;let a=e[i];a<n&&(n=a,r=i)}return r}findCluster(){let{score:e,binaryPattern:t}=this,n=-1/0,r=-1;for(let i=0,a=t.length;i<a;i++){if(t[i]!==1)continue;let a=e[i];a>n&&(n=a,r=i)}return r}setSigma(e){if(e===this.sigma)return;let t=~~(Math.sqrt(20*e**2)+1),n=2*t+1,r=new Float32Array(n*n),i=e*e;for(let e=-t;e<=t;e++)for(let a=-t;a<=t;a++){let o=(t+a)*n+e+t,s=e*e+a*a;r[o]=Math.E**(-s/(2*i))}this.lookupTable=r,this.sigma=e,this.radius=t}resize(e){this.size!==e&&(this.size=e,this.score=new Float32Array(e*e),this.binaryPattern=new Uint8Array(e*e))}invert(){let{binaryPattern:e,score:t,size:n}=this;t.fill(0);for(let t=0,r=e.length;t<r;t++)if(e[t]===0){let r=~~(t/n),i=t-r*n;this.updateScore(i,r,1),e[t]=1}else e[t]=0}updateScore(e,t,n){let{size:r,score:i,lookupTable:a}=this,o=this.radius,s=2*o+1;for(let c=-o;c<=o;c++)for(let l=-o;l<=o;l++){let u=a[(o+l)*s+c+o],d=e+c;d=d<0?r+d:d%r;let f=t+l;f=f<0?r+f:f%r;let p=f*r+d;i[p]+=n*u}}addPointIndex(e){this.binaryPattern[e]=1;let t=this.size,n=~~(e/t),r=e-n*t;this.updateScore(r,n,1),this.count++}removePointIndex(e){this.binaryPattern[e]=0;let t=this.size,n=~~(e/t),r=e-n*t;this.updateScore(r,n,-1),this.count--}copy(e){this.resize(e.size),this.score.set(e.score),this.binaryPattern.set(e.binaryPattern),this.setSigma(e.sigma),this.count=e.count}},xc=class{constructor(){this.random=Math.random,this.sigma=1.5,this.size=64,this.majorityPointsRatio=.1,this.samples=new bc(1),this.savedSamples=new bc(1)}generate(){let{samples:e,savedSamples:t,sigma:n,majorityPointsRatio:r,size:i}=this;e.resize(i),e.setSigma(n);let a=Math.floor(i*i*r),o=e.binaryPattern;yc(o,a),vc(o,this.random);for(let t=0,n=o.length;t<n;t++)o[t]===1&&e.addPointIndex(t);for(;;){let t=e.findCluster();e.removePointIndex(t);let n=e.findVoid();if(t===n){e.addPointIndex(t);break}e.addPointIndex(n)}let s=new Uint32Array(i*i);t.copy(e);let c;for(c=e.count-1;c>=0;){let t=e.findCluster();e.removePointIndex(t),s[t]=c,c--}let l=i*i;for(c=t.count;c<l/2;){let e=t.findVoid();t.addPointIndex(e),s[e]=c,c++}for(t.invert();c<l;){let e=t.findCluster();t.removePointIndex(e),s[e]=c,c++}return{data:s,maxValue:l}}};function Sc(e){return e>=3?4:e}function Cc(t){switch(t){case 1:return le;case 2:return e;default:return we}}var wc=class extends c{constructor(e=64,t=1){super(new Float32Array(4),1,1,we,se),this.minFilter=n,this.magFilter=n,this.size=e,this.channels=t,this.update()}update(){let e=this.channels,t=this.size,n=new xc;n.channels=e,n.size=t;let r=Sc(e),i=Cc(r);(this.image.width!==t||i!==this.format)&&(this.image.width=t,this.image.height=t,this.image.data=new Float32Array(t**2*r),this.format=i,this.dispose());let a=this.image.data;for(let t=0,i=e;t<i;t++){let e=n.generate(),i=e.data,o=e.maxValue;for(let e=0,n=i.length;e<n;e++){let n=i[e]/o;a[e*r+t]=n}}this.needsUpdate=!0}},Tc=xe({rand1:()=>Pc,rand2:()=>Nc,rand3:()=>Mc,rand4:()=>jc,rngInit:()=>kc,rngNextBounce:()=>Ac}),Ec=64,Dc=rn(new wc(Ec,1)),Oc=pn(0).toVar(`blueDitherSeed`),kc=X`
	fn blueDitherInitialize( pixel: vec2u, pathIndex: u32, bounceIndex: u32 ) -> void {

		let coord = vec2i( pixel % vec2u( ${Ec}u ) );
		${Oc} = textureLoad( ${Dc}, coord, 0 );
		${Zo}( vec2u( 0 ), pathIndex, bounceIndex );

	}
`,Ac=X`
	fn blueDitherNextBounce() -> void {

		${Qo}();

	}
`,jc=X`
	fn blueDitherRand4( effect: u32 ) -> vec4f {

		// Get the scrambled sobol stratified sample
		let stratifiedSample = ${Xo}( effect );

		// offset it by the blue noise seed and dimension rotation
		return fract( stratifiedSample + ${Oc}.r );

	}
`,Mc=X`
	fn blueDitherRand3( effect: u32 ) -> vec3f {

		return ${jc}( effect ).xyz;

	}
`,Nc=X`
	fn blueDitherRand2( effect: u32 ) -> vec2f {

		return ${jc}( effect ).xy;

	}
`,Pc=X`
	fn blueDitherRand1( effect: u32 ) -> f32 {

		return ${jc}( effect ).x;

	}
`,Fc=2147483648,Ic=1073741824,Lc=1073741823,Rc=class extends No{constructor(){let e={bvhData:{value:null},material:{value:null},envInfo:{value:null},lightsInfo:{value:null},prevOutputTarget:on(new O(1,1)).toReadOnly(),outputTarget:on(new O(1,1)).toWriteOnly(),sampleCountTarget:on(new O(1,1)).toReadWrite(),offset:I(new E),tileSize:I(new E),seed:I(0),maxBounces:I(5),maxTransparentBounces:I(5,`uint`),misEnabled:I(1,`uint`),maxSamples:I(0,`uint`),filterGlossy:I(1),clampDirect:I(0),clampIndirect:I(10),backgroundInfo:{value:null},transmissiveBackground:I(1),textures:rn(new c),textureSampler:en(new c),globalId:Zt},t=J(`bvhData.value.fns.raycastFirstHit.outputType`,e),n=Y(`bvhData.value.fns.raycastFirstHit`,e),r=Y(`bvhData.value.fns.raycastShadow`,e),i=Y(`bvhData.value.fns.sampleTrianglePoint`,e),a=Y(`bvhData.value.fns.getSurfaceRecord`,e),o=Y(`bvhData.value.fns.getCameraRay`,e),s=Y(`material.value.bsdfSample`,e),l=Y(`material.value.bsdfEvalPdf`,e),u=J(`envInfo.value.totalSumNode`,e),d=J(`envInfo.value.intensityNode`,e),f=J(`envInfo.value.sampleColor`,e),p=J(`envInfo.value.sampleDir`,e),m=J(`envInfo.value.getDirPdf`,e),h=J(`envInfo.value.getWeight`,e),g=J(`backgroundInfo.value.sampleColor`,e),_=J(`lightsInfo.value.countNode`,e),v=Y(`lightsInfo.value.randomLightSample`,e),y=Y(`lightsInfo.value.intersectLightAtIndex`,e),b=Y(`lightsInfo.value.getLightWeight`,e),x=Y(`lightsInfo.value.getLightsWeight`,e),S=Y(`lightsInfo.value.selectLight`,e),C=Y(`lightsInfo.value.isLightVisibleToCamera`,e),w=X`

			fn compute(

				// indices and target
				globalId: vec3u,

				// tiles
				offset: vec2u,
				tileSize: vec2u,

				// settings
				seed: u32,
				maxBounces: u32,
				maxTransparentBounces: u32,
				misEnabled: u32,
				maxSamples: u32,
				filterGlossy: f32,
				clampDirect: f32,
				clampIndirect: f32,

				transmissiveBackground: u32,

			) -> void {

				let transforms = &${J(`bvhData.value.storage.transforms`,e)};
				let materials = &${J(`bvhData.value.storage.materials`,e)};

				// make sure we don't bleed over the edge of our tile
				if ( globalId.x >= tileSize.x || globalId.y >= tileSize.y ) {

					return;

				}

				// to screen coordinates
				let indexUV = offset + globalId.xy;
				let targetDimensions = textureDimensions( ${e.outputTarget} );
				if ( indexUV.x >= targetDimensions.x || indexUV.y >= targetDimensions.y ) {

					return;

				}

				// skip the pixel once it has hit the sample limit
				let sampleCount = textureLoad( ${e.sampleCountTarget}, indexUV ).r;
				if ( maxSamples != 0u && sampleCount >= maxSamples ) {

					return;

				}

				let uv = vec2f( indexUV ) / vec2f( targetDimensions );
				${$o}( indexUV.xy, seed, 0 );

				// scene ray
				let jitteredUv = uv + ${ns}( ${0} ) / vec2f( targetDimensions );
				var ray: ${q};
				if ( ! ${o}( jitteredUv, vec2f( targetDimensions ), &ray ) ) {

					return;

				}

				ray.direction = normalize( ray.direction );

				var resultColor = vec4f( 0, 0, 0, 1 );
				var throughputColor = vec3f( 1.0 );
				var bsdfPdf = 0.0;
				var isFullyTransmissive = true;
				var minPdf = 1.0;
				var transparentBounce = 0u;
				// A negative value marks a sampled wavelength whose RGB reconstruction weight has not been applied yet.
				var dispersionWavelength = - mix( ${360}.0, ${830}.0, ${ts}( ${7} ) );

				// one-sample NEE chooses between the analytic lights and the environment
				let envActive = ${u} > 0.0 && ${d} > 0.0;
				let lightsCount = ${_};
				var envWeight = 0.0;
				if ( envActive ) {

					envWeight = ${h}();

				}

				// added last, since a camera ray miss overwrites the pixel with the background
				var lightHits = vec3f( 0.0 );
				var cameraHitLight = false;

				for ( var bounce = 0u; bounce < maxBounces; bounce ++ ) {

					var hitResult: ${t};
					let didHit = ${n}( ray, &hitResult );
					let surfaceDist = select( ${Rs}, hitResult.dist, didHit );

					// NEE's total weight at the vertex this ray left, for MIS. Camera rays have none
					let isMISWeighted = misEnabled != 0u && bounce > 0u;
					var lightTotalWeight = 0.0;
					if ( isMISWeighted ) {

						lightTotalWeight = ${x}( ray.origin ) + envWeight;

					}

					// forward hits on area lights. Camera rays only see visibleToCameraRays lights, at full weight
					for ( var li = 0u; li < lightsCount; li ++ ) {

						if ( bounce == 0u && ! ${C}( li ) ) {

							continue;

						}

						var lightRec: ${us};
						if ( ${y}( ray.origin, ray.direction, li, &lightRec ) && lightRec.dist < surfaceDist ) {

							var misWeight = 1.0;
							if ( isMISWeighted ) {

								let selectionPdf = ${b}( li, ray.origin ) / lightTotalWeight;
								misWeight = ${Ps}( bsdfPdf, lightRec.pdf * selectionPdf );

							}

							lightHits += ${Q}( lightRec.emission * throughputColor * misWeight, bounce, clampDirect, clampIndirect );
							cameraHitLight = cameraHitLight || bounce == 0u;

						}

					}

					if ( didHit ) {

						let objectInfo = transforms[ hitResult.objectIndex ];
						var materialInfo = ( *materials )[ objectInfo.materialIndex ];

						// a matte surface hit by the camera ray renders as a fully transparent
						if ( materialInfo.matte != 0 && bounce == 0u ) {

							resultColor = vec4f( 0.0 );
							break;

						}

						// apply per-object colors
						materialInfo.color *= objectInfo.color.rgb;
						materialInfo.opacity *= objectInfo.color.a;

						let view = - ray.direction;
						var vertexData = ${i}( hitResult.barycoord, hitResult.indices.xyz );
						vertexData.normal = normalize( transpose( objectInfo.inverseMatrixWorld ) * vertexData.normal );
						vertexData.tangent = vec4f( ( objectInfo.matrixWorld * vec4f( vertexData.tangent.xyz, 0.0 ) ).xyz, vertexData.tangent.w );
						vertexData.position = objectInfo.matrixWorld * vertexData.position;

						// blur glossy surfaces after low-probability bounces to suppress fireflies,
						// from the Cycles "filter glossy" approach in integrator/surface_shader.h
						// The smallest pdf seen along the path for the glossy filter is tracked below
						let blurRoughness = sqrt( clamp( 1.0 - filterGlossy * minPdf, 0.0, 1.0 ) ) * 0.5;

						var surface = ${a}( materialInfo, vertexData, hitResult.side, hitResult.normal, view, blurRoughness );

						// Stochastically pass through partially transparent surfaces by restarting
						// the ray at the hit point, advancing the rng but not the bounce count.
						if ( ${ts}( ${50} ) > surface.opacity ) {

							// stop once the transparent bounces run out
							if ( transparentBounce >= maxTransparentBounces ) {

								break;

							}

							ray.origin = ${Ds}( vertexData.position.xyz, ray.direction, hitResult.normal );
							${es}();
							transparentBounce ++;
							bounce --;
							continue;

						}

						let isDispersive = materialInfo.dispersion > 0.0 && surface.ior > 1.0 && surface.transmission > 0.0 && ! surface.thinWall;
						if ( isDispersive ) {

							let wavelength = abs( dispersionWavelength );
							${lc}( &surface, materialInfo.dispersion, wavelength );
							if ( dispersionWavelength < 0.0 ) {

								dispersionWavelength = wavelength;
								throughputColor *= ${uc}( wavelength );

							}

						}

						// attenuate the light transmitted through the volume when exiting a backface
						if ( hitResult.side < 0.0 && materialInfo.transmission > 0.0 ) {

							throughputColor *= ${cc}( hitResult.dist, materialInfo.attenuationColor, materialInfo.attenuationDistance );

						}

						// emission, clamped at the depth of the segment that found it, as in Cycles
						let emission = ${Q}( throughputColor * surface.emission, bounce, clampDirect, clampIndirect );
						resultColor += vec4f( emission, 0.0 );

						// next event estimation: choose one light or the environment by its estimated
						// contribution
						if ( misEnabled != 0u ) {

							let ruv = ${rs}( ${5} );
							var selectionPdf = 0.0;
							let lightIndex = ${S}( vertexData.position.xyz, envWeight, ruv.x, &selectionPdf );
							if ( selectionPdf > 0.0 ) {

								var lightRec: ${us};
								if ( envActive && lightIndex == lightsCount ) {

									// the environment, sampled from its CDF, as a light of kind ENVIRONMENT
									let envSample = ${p}( ruv.yz );
									lightRec.direction = envSample.direction;
									lightRec.emission = envSample.color;
									lightRec.pdf = envSample.pdf;
									lightRec.dist = ${Rs};
									lightRec.lightType = ${5};

								} else {

									lightRec = ${v}( lightIndex, vertexData.position.xyz, ruv.yz );

								}

								if ( lightRec.pdf > 0.0 ) {

									let evalRec = ${l}( view, lightRec.direction, surface );
									if ( evalRec.pdf > 0.0 ) {

										var shadowRay: ${q};
										shadowRay.origin = ${Ds}( vertexData.position.xyz, lightRec.direction, hitResult.normal );
										shadowRay.direction = lightRec.direction;
										shadowRay.maxDist = lightRec.dist * ( 1.0 - ${zs} );

										// opaque occlusion up to the light distance. A shadow-specific any hit
										// traversal could support tinted shadows from transmissive and partially
										// opaque objects
										var shadowHit: ${t};
										let occluded = ${r}( shadowRay, &shadowHit );
										if ( ! occluded ) {

											let lightPdf = lightRec.pdf * selectionPdf;

											// env + area lights are also bsdf-sampled, so MIS-weight them - punctual lights take full weight,
											// or when a bsdf ray could never reach the light
											let isMISWeighted = ${Bs}( lightRec.lightType ) && ! shadowHit.forwardBlocked;
											let misWeight = select( 1.0, ${Ps}( lightPdf, evalRec.pdf ), isMISWeighted );
											let directLight = throughputColor * lightRec.emission * evalRec.color * misWeight / lightPdf;
											let contribution = ${Q}( directLight, bounce + 1u, clampDirect, clampIndirect );
											resultColor += vec4f( contribution, 0.0 );

										}

									}

								}

							}

						}

						let scatterRec = ${s}( view, surface );
						if ( ${Ts}( scatterRec ) ) {

							break;

						}

						isFullyTransmissive = isFullyTransmissive && scatterRec.isTransmissive;

						// track the smallest pdf seen along the path for the glossy filter
						minPdf = min( minPdf, scatterRec.pdf );

						// russian roulette early out:
						// Matches Cycles path_state_continuation_probability in integrator/path_state.h
						if ( bounce >= 3u ) {

							let rrThroughput = throughputColor * scatterRec.color / scatterRec.pdf;
							let rrProb = saturate( sqrt( max( max( rrThroughput.r, rrThroughput.g ), rrThroughput.b ) ) );
							if ( rrProb <= 0.0 || ${ts}( ${6} ) > rrProb ) {

								break;

							}

							throughputColor /= rrProb;

						}

						throughputColor *= scatterRec.color;
						throughputColor /= scatterRec.pdf;
						bsdfPdf = scatterRec.pdf;

						// exit if our throughput is 0.0
						if ( all( throughputColor == vec3f( 0.0 ) ) ) {

							break;

						}

						ray.origin = ${Ds}( vertexData.position.xyz, scatterRec.direction, hitResult.normal );
						ray.direction = scatterRec.direction;
						ray.maxDist = 0.0;

					} else {

						if ( bounce > 0u && ! isFullyTransmissive ) {

							var misWeight = 1.0;
							if ( isMISWeighted && envActive ) {

								// match the env pdf scaling used by the NEE selection so the two estimators balance
								let envPdf = ${m}( ray.direction ) * envWeight / lightTotalWeight;
								misWeight = ${Ps}( bsdfPdf, envPdf );

							}

							let environment = ${f}( ray.direction ).rgb * throughputColor * misWeight;
							let contribution = ${Q}( environment, bounce, clampDirect, clampIndirect );
							resultColor += vec4f( contribution, 0.0 );

						} else {

							// hit the background
							// support multiple transparent background blending techniques
							let rng = ${ns}( ${1} );
							let bg = ${g}( ray.direction, rng );
							if ( bounce == 0u ) {

								// sample the background directly if this is the primary ray
								let background = ${Q}( bg.a * bg.rgb, bounce, clampDirect, clampIndirect );
								resultColor = vec4f( background, bg.a );

							} else {

								// transmissive ray handling
								let env = ${f}( ray.direction );
								let avg = saturate( dot( throughputColor, vec3f( 1.0 / 3.0 ) ) );
								let transparency = ( 1.0 - bg.a ) * avg;
								var envMisWeight = 1.0;
								if ( misEnabled != 0u && ${u} > 0.0 ) {

									let envPdf = ${m}( ray.direction );
									envMisWeight = ${Ps}( bsdfPdf, envPdf );

								}

								if ( transmissiveBackground == ${0}u ) {

									// display the env map through transmissive surfaces
									let background = ${Q}( env.rgb * throughputColor * envMisWeight, bounce, clampDirect, clampIndirect );
									resultColor = vec4f(
										resultColor.rgb + background,
										1.0,
									);

								} else if ( transmissiveBackground == ${2}u ) {

									// fade the background by the throughput color average
									let background = ${Q}( bg.a * bg.rgb * throughputColor * envMisWeight, bounce, clampDirect, clampIndirect );
									resultColor = vec4f(
										resultColor.rgb + background,
										1.0 - transparency,
									);

								} else {

									// fade the background by the throughput color average, mixing in env lighting
									var light = mix( env.rgb, bg.rgb, bg.a ) * envMisWeight;
									let background = ${Q}( light * throughputColor, bounce, clampDirect, clampIndirect );
									resultColor = vec4f(
										resultColor.rgb + background,
										1.0 - transparency,
									);

								}

							}

						}

						break;

					}

					${es}();

				}

				// visible lights are opaque against a transparent background
				resultColor += vec4f( lightHits, 0.0 );
				if ( cameraHitLight ) {

					resultColor.a = 1.0;

				}

				let nextSampleCount = sampleCount + 1;
				// store the color rows top down to match a rasterized render target
				let colorIndex = vec2u( indexUV.x, targetDimensions.y - 1u - indexUV.y );

				let prevColor = textureLoad( ${e.prevOutputTarget}, colorIndex );
				let blendedColor = ${Ls}( prevColor, resultColor, 1.0 / f32( nextSampleCount ) );
				textureStore( ${e.sampleCountTarget}, indexUV, vec4( nextSampleCount ) );
				textureStore( ${e.outputTarget}, colorIndex, blendedColor );

			}`;super(w(e)),this.defineUniformAccessors(e)}};function zc(e){let t=new Uint16Array(e.length);for(let n=0,r=e.length;n<r;++n)t[n]=h.toHalfFloat(e[n]);return t}function Bc(e,t,n=0,r=e.length){let i=n,a=n+r-1;for(;i<a;){let n=i+a>>1;e[n]<t?i=n+1:a=n}return i-n}function Vc(e,t,n){return .2126*e+.7152*t+.0722*n}function Hc(e,t=Se){let n=e.clone();n.source=new o({...n.image});let{width:r,height:i,data:a}=n.image,s=a;if(n.type!==t){s=t===1016?new Uint16Array(a.length):new Float32Array(a.length);let e;e=a instanceof Int8Array||a instanceof Int16Array||a instanceof Int32Array?2**(8*a.BYTES_PER_ELEMENT-1)-1:2**(8*a.BYTES_PER_ELEMENT)-1;for(let r=0,i=a.length;r<i;r++){let i=a[r];n.type===1016&&(i=h.fromHalfFloat(a[r])),n.type!==1015&&n.type!==1016&&(i/=e),t===1016&&(s[r]=h.toHalfFloat(i))}n.image.data=s,n.type=t}if(n.flipY){let e=s;s=s.slice();for(let t=0;t<i;t++)for(let n=0;n<r;n++){let a=i-t-1,o=4*(t*r+n),c=4*(a*r+n);s[c+0]=e[o+0],s[c+1]=e[o+1],s[c+2]=e[o+2],s[c+3]=e[o+3]}n.flipY=!1,n.image.data=s}return n}var Uc=class{constructor(){let e=new c(zc(new Float32Array([0,0,0,0])),1,1);e.type=Se,e.format=we,e.minFilter=t,e.magFilter=t,e.wrapS=ue,e.wrapT=ue,e.generateMipmaps=!1,e.needsUpdate=!0;let n=new c(zc(new Float32Array([0,1])),1,2);n.type=Se,n.format=le,n.minFilter=t,n.magFilter=t,n.generateMipmaps=!1,n.needsUpdate=!0;let r=new c(zc(new Float32Array([0,0,1,1])),2,2);r.type=Se,r.format=le,r.minFilter=t,r.magFilter=t,r.generateMipmaps=!1,r.needsUpdate=!0,this.map=e,this.marginalWeights=n,this.conditionalWeights=r,this.totalSum=0}getPixelWeight(e,t,n){return Vc(e,t,n)}dispose(){this.marginalWeights.dispose(),this.conditionalWeights.dispose(),this.map.dispose()}updateFrom(e){let t=Hc(e);t.wrapS=ue,t.wrapT=r;let{width:n,height:i,data:a}=t.image,o=new Float32Array(n*i),s=new Float32Array(n*i),c=new Float32Array(i),l=new Float32Array(i),u=0,d=0;for(let e=0;e<i;e++){let t=0;for(let r=0;r<n;r++){let c=e*n+r,l=h.fromHalfFloat(a[4*c+0]),d=h.fromHalfFloat(a[4*c+1]),f=h.fromHalfFloat(a[4*c+2]),p=this.getPixelWeight(l,d,f,e,i);t+=p,u+=p,o[c]=p,s[c]=t}if(t!==0)for(let r=e*n,i=e*n+n;r<i;r++)o[r]/=t,s[r]/=t;d+=t,c[e]=t,l[e]=d}if(d!==0)for(let e=0,t=c.length;e<t;e++)c[e]/=d,l[e]/=d;let f=new Uint16Array(i),p=new Uint16Array(n*i);for(let e=0;e<i;e++){let t=Bc(l,(e+1)/i);f[e]=h.toHalfFloat((t+.5)/i)}for(let e=0;e<i;e++)for(let t=0;t<n;t++){let r=e*n+t,i=Bc(s,(t+1)/n,e*n,n);p[r]=h.toHalfFloat((i+.5)/n)}this.dispose();let{marginalWeights:m,conditionalWeights:g}=this;m.image={width:i,height:1,data:f},m.needsUpdate=!0,g.image={width:n,height:i,data:p},g.needsUpdate=!0,this.totalSum=u,this.map=t}},Wc=L(`

	fn equirectLuminancePdf( luminance: f32, totalWeight: f32, resolution: vec2u ) -> f32 {

		return f32( resolution.x * resolution.y ) * luminance / ( 2.0 * PI * PI * totalWeight );

	}

`,[Z]),Gc=class extends Uc{constructor(){super(),this.mapNode=rn(this.map),this.mapSampler=en(this.mapNode),this.marginalNode=rn(this.marginalWeights),this.marginalSampler=en(this.marginalNode),this.conditionalNode=rn(this.conditionalWeights),this.conditionalSampler=en(this.conditionalNode),this.rotationNode=I(new fe),this.intensityNode=I(1),this.totalSumNode=I(this.totalSum),this._initFns()}getPixelWeight(e,t,n,r,i){let a=Math.PI*(r+.5)/i;return super.getPixelWeight(e,t,n)*Math.sin(a)}updateFrom(e){super.updateFrom(e);let{mapNode:t,marginalNode:n,conditionalNode:r,totalSumNode:i}=this;t.value=this.map,n.value=this.marginalWeights,r.value=this.conditionalWeights,i.value=this.totalSum}_initFns(){let{mapNode:e,mapSampler:t,marginalNode:n,marginalSampler:r,conditionalNode:i,conditionalSampler:a,totalSumNode:o,rotationNode:s,intensityNode:c}=this;this.sampleColor=X`
			fn sampleEnv( direction: vec3f ) -> vec4f {

				let sampleDir = ${s} * direction;
				let mapUv = ${Ms}( sampleDir );
				let col = textureSampleLevel( ${e}, ${t}, mapUv, 0 );

				return vec4f( ${c} * col.rgb, col.a );

			}
		`,this.sampleDir=X`
			fn sampleEnvDir( r: vec2f ) -> ${cs} {

				var result: ${cs};

				// walk the CDF: marginal picks the row (v), conditional picks the column (u)
				let v = textureSampleLevel( ${n}, ${r}, vec2f( r.x, 0.0 ), 0 ).x;
				let u = textureSampleLevel( ${i}, ${a}, vec2f( r.y, v ), 0 ).x;
				let uv = vec2f( u, v );
				let totalSum = ${o};

				let direction = ${Is}( uv );
				let color = textureSampleLevel( ${e}, ${t}, uv, 0 ).rgb;

				result.direction = transpose( ${s} ) * direction;
				result.color = color * ${c};

				if ( totalSum != 0.0 ) {

					let lum = ${Fs}( color );
					let resolution = textureDimensions( ${e} );
					result.pdf = ${Wc}( lum, totalSum, resolution );

				} else {

					result.pdf = 0.0;

				}

				return result;

			}
		`,this.getWeight=X`
			fn getEnvWeight() -> f32 {

				let resolution = textureDimensions( ${e} );
				return ${c} * ${Kt} * ${Kt} * ${o} / ( 2.0 * f32( resolution.x * resolution.y ) );

			}
		`,this.getDirPdf=X`
			fn getEnvDirPdf( direction: vec3f ) -> f32 {

				if ( ${o} == 0.0 ) {

					return 0.0;

				}

				let rotatedDir = ${s} * direction;
				let mapUv = ${Ms}( rotatedDir );
				let color = textureSampleLevel( ${e}, ${t}, mapUv, 0 ).rgb;
				let lum = ${Fs}( color );
				let resolution = textureDimensions( ${e} );

				return ${Wc}( lum, ${o}, resolution );

			}
		`}},Kc=class{get map(){return this.mapNode.value}set map(e){this.mapNode.value=e}get blur(){return this.blurNode.value}set blur(e){this.blurNode.value=e}get rotation(){return this.rotationNode.value}get intensity(){return this.intensityNode.value}set intensity(e){this.intensityNode.value=e}constructor(){let e=new c(new Uint8Array([0,0,0,255]),1,1,we);e.minFilter=t,e.magFilter=t,e.wrapS=ue,e.wrapT=ue,e.generateMipmaps=!1,e.needsUpdate=!0,this.mapNode=rn(e),this.mapSampler=en(this.mapNode),this.blurNode=I(0),this.rotationNode=I(new T),this.intensityNode=I(1),this._initFns()}dispose(){this.map.dispose()}_initFns(){let{mapNode:e,mapSampler:t,blurNode:n,rotationNode:r,intensityNode:i}=this;this.sampleColor=X`
			fn sampleBackground( direction: vec3f, uv: vec2f ) -> vec4f {

				let rotatedDir = ( ${r} * vec4f( direction, 0.0 ) ).xyz;
				let offsetDir = ${Ns}( rotatedDir, uv ) * 0.5 * ${n};
				let sampleDir = normalize( rotatedDir + offsetDir );

				let mapUv = ${Ms}( sampleDir );
				let col = textureSampleLevel( ${e}, ${t}, mapUv, 0 );

				return vec4f( ${i} * col.rgb, col.a );

			}
		`}},qc=4096,Jc=new be,Yc=new fe;function Xc(e){return`${e.source.uuid}:${e.source.version}`}function Zc(e,t,n,r){if(e[t].x+n>r)return-1;let i=n,a=0,o=t;for(;i>0;){if(o>=e.length)return-1;a=Math.max(a,e[o].y),i-=e[o].width,o++}return a}function Qc(e,t,n,r){let i=t+r,a=[],o=!1;for(let s=0;s<e.length;s++){let c=e[s],l=c.x+c.width;l<=t?a.push(c):c.x>=i?(o||=(a.push({x:t,y:n,width:r}),!0),a.push(c)):(o||=(a.push({x:t,y:n,width:r}),!0),l>i&&a.push({x:i,y:c.y,width:l-i}))}o||a.push({x:t,y:n,width:r}),e.length=0;for(let t=0;t<a.length;t++){let n=a[t],r=e[e.length-1];r&&r.y===n.y&&r.x+r.width===n.x?r.width+=n.width:e.push(n)}}function $c(e,t,n,r,i){let a=1/0,o=0,s=-1;for(let c=0;c<e.length;c++){let l=Zc(e,c,t,r);l>=0&&l+n<=i&&l<a&&(a=l,o=e[c].x,s=c)}return s===-1?null:(Qc(e,o,a+n,t),{x:o,y:a})}var el=class{get width(){return this.renderTarget.width}get height(){return this.renderTarget.height}get pageCount(){return this.renderTarget.depth}get texture(){return this.renderTarget.texture}constructor(e={}){this.renderTarget=new w(1,1,{depthBuffer:!1,depth:1,...e}),this.texture.isArrayTexture=!0,this.textureInfo=[new C],this.hashes=[],this.placements=[],this.quadMesh=new Be(new y),this.quadMesh.material.blending=0}setTextures(e,t){let n=t.map((e,t)=>t);if(n.sort((e,n)=>t[e].source.uuid<t[n].source.uuid?-1:1),t=n.map(e=>t[e]),this._hashesMatch(t)){this._buildCallerTextureInfo(n);return}let r=t.reduce((e,t)=>Math.max(e,t.width,t.height),1);r=Math.min(qc,r);let i=r,a=r,{renderTarget:o}=this,{placements:s,pageCount:c}=this._packTextures(t,i,a);o.setSize(i,a,c),this.texture.isArrayTexture=!0,this._renderTextures(e,t,s),this.placements=s;let l=Array(t.length);for(let e=0,n=t.length;e<n;e++){let n=Xc(t[e]);l[e]=n}this.hashes=l,this._buildCallerTextureInfo(n)}_buildCallerTextureInfo(e){let t=Array(e.length);for(let n=0,r=e.length;n<r;n++)t[e[n]]=this.placements[n];this._buildTextureInfo(t)}dispose(){this.renderTarget.dispose(),this.quadMesh.material.dispose()}_hashesMatch(e){let t=this.hashes;if(t.length!==e.length)return!1;for(let n=0,r=e.length;n<r;n++)if(t[n]!==Xc(e[n]))return!1;return!0}_packTextures(e,t,n){let r=[];for(let i=0,a=e.length;i<a;i++){let a=e[i];r.push({index:i,w:Math.min(a.width,t),h:Math.min(a.height,n)})}let i=r.sort((e,t)=>t.h-e.h),a=Array(e.length),o=[];for(let e=0,r=i.length;e<r;e++){let r=i[e],s=null,c=-1;for(let e=0;e<o.length;e++)if(s=$c(o[e],r.w,r.h,t,n),s){c=e;break}if(!s){let e=[{x:0,y:0,width:t}];s=$c(e,r.w,r.h,t,n),o.push(e),c=o.length-1}a[r.index]={x:s.x,y:s.y,w:r.w,h:r.h,page:c}}return{placements:a,pageCount:Math.max(o.length,1)}}_buildTextureInfo(e){let t=this.textureInfo;t.length=0;for(let n=0,r=e.length;n<r;n++){let{x:r,y:i,w:a,h:o,page:s}=e[n],c=new C;c.x=r&65535|(i&65535)<<16,c.y=a&65535|(o&65535)<<16,c.z=s&65535,c.w=0,t.push(c)}t.length===0&&t.push(new C(0,0,0,0))}_renderTextures(e,t,n){let{quadMesh:r,renderTarget:i,width:a,height:o}=this,s=e.getRenderTarget(),c=e.toneMapping,l=e.autoClear,u=e.getScissorTest(),d=e.getClearAlpha();e.getClearColor(Jc),e.toneMapping=0,e.autoClear=!1,e.setScissorTest(!0),e.setClearColor(0,0);for(let t=0,n=i.depth;t<n;t++)i.viewport.set(0,0,a,o),i.scissor.set(0,0,a,o),e.setRenderTarget(i,t),e.clear();for(let a=0,o=t.length;a<o;a++){let{x:o,y:s,w:c,h:l,page:u}=n[a],d=t[a];if(i.viewport.set(o,s,c,l),i.scissor.set(o,s,c,l),e.setRenderTarget(i,u),d.isRenderTargetTexture){let t=d.matrixAutoUpdate;Yc.copy(d.matrix),d.matrix.identity(),d.matrixAutoUpdate=!1,r.material.map=d,r.render(e),d.matrixAutoUpdate=t,d.matrix.copy(Yc)}else{let t=d.clone();t.matrixAutoUpdate=!1,t.matrix.identity(),r.material.map=t,r.render(e),t.dispose()}}i.viewport.set(0,0,a,o),i.scissor.set(0,0,a,o),r.material.map=null,e.setClearColor(Jc,d),e.setScissorTest(u),e.autoClear=l,e.setRenderTarget(s),e.toneMapping=c}};function tl(e){let t=0;if(e.byteLength!==0){let n=new Uint8Array(e);for(let r=0;r<e.byteLength;r++){let e=n[r];t=(t<<5)-t+e,t|=0}}return t}var nl=6,rl=11,il=0,al=1,ol=2,sl=3,cl=4,ll=new D,ul=new D,dl=new T,fl=new pe,pl=new D,ml=new D,hl=new D(0,1,0),gl=class{constructor(){let e=new c(new Float32Array(4),1,1);e.format=we,e.type=se,e.wrapS=r,e.wrapT=r,e.generateMipmaps=!1,e.minFilter=n,e.magFilter=n,this.tex=e,this.count=0}updateFrom(e,t=[]){let n=this.tex,r=Math.max(e.length*nl,1),i=Math.ceil(Math.sqrt(r));n.image.width!==i&&(n.dispose(),n.image.data=new Float32Array(i*i*4),n.image.width=i,n.image.height=i);let a=n.image.data;for(let n=0,r=e.length;n<r;n++){let r=e[n],i=n*nl*4,o=0;for(let e=0;e<24;e++)a[i+e]=0;r.getWorldPosition(ul),a[i+o++]=ul.x,a[i+o++]=ul.y,a[i+o++]=ul.z;let s=il;if(r.isRectAreaLight&&r.isCircular?s=al:r.isSpotLight?s=ol:r.isDirectionalLight||r.isSunLight?s=sl:r.isPointLight&&(s=cl),a[i+o++]=s,a[i+o++]=r.color.r,a[i+o++]=r.color.g,a[i+o++]=r.color.b,a[i+o++]=r.intensity,r.getWorldQuaternion(fl),r.isRectAreaLight)ll.set(r.width,0,0).applyQuaternion(fl),a[i+o++]=ll.x,a[i+o++]=ll.y,a[i+o++]=ll.z,o++,ul.set(0,r.height,0).applyQuaternion(fl),a[i+o++]=ul.x,a[i+o++]=ul.y,a[i+o++]=ul.z,a[i+o++]=ll.cross(ul).length()*(r.isCircular?Math.PI/4:1);else if(r.isSpotLight){let e=r.radius||0;pl.setFromMatrixPosition(r.matrixWorld),ml.setFromMatrixPosition(r.target.matrixWorld),dl.lookAt(pl,ml,hl),fl.setFromRotationMatrix(dl),ll.set(1,0,0).applyQuaternion(fl),a[i+o++]=ll.x,a[i+o++]=ll.y,a[i+o++]=ll.z,o++,ul.set(0,1,0).applyQuaternion(fl),a[i+o++]=ul.x,a[i+o++]=ul.y,a[i+o++]=ul.z,a[i+o++]=Math.PI*e*e,a[i+o++]=e,a[i+o++]=r.decay,a[i+o++]=r.distance,a[i+o++]=Math.cos(r.angle),a[i+o++]=Math.cos(r.angle*(1-r.penumbra)),a[i+o++]=r.iesMap?t.indexOf(r.iesMap):-1}else if(r.isPointLight){let e=ll.setFromMatrixPosition(r.matrixWorld);a[i+o++]=e.x,a[i+o++]=e.y,a[i+o++]=e.z,o++,o+=4,o+=1,a[i+o++]=r.decay,a[i+o++]=r.distance}else if(r.isDirectionalLight){let e=ll.setFromMatrixPosition(r.matrixWorld),t=ul.setFromMatrixPosition(r.target.matrixWorld);ml.subVectors(e,t).normalize(),a[i+o++]=ml.x,a[i+o++]=ml.y,a[i+o++]=ml.z}else r.isSunLight&&(ml.setFromMatrixPosition(r.matrixWorld).normalize(),a[i+o++]=ml.x,a[i+o++]=ml.y,a[i+o++]=ml.z);a[i+rl]=+!!r.visibleToCameraRays}this.count=e.length;let o=tl(a.buffer);return this.hash!==o&&(this.hash=o,n.needsUpdate=!0,!0)}},_l=class extends gl{constructor(){super(),this.countNode=I(this.count,`uint`),this.buffer=new j(new Float32Array(2*ls.getLength()),ls.getLength()),this.bufferNode=F(this.buffer,ls).toReadOnly().setName(`lights`),this.iesAtlas=new el({type:Se}),this.iesProfilesNode=rn(this.iesAtlas.texture),this.iesInfoNode=ln(this.iesAtlas.textureInfo,`uvec4`),this._initFns()}updateFrom(e,t){let n=Array.from(new Set(t.map(e=>e.iesMap).filter(e=>e))),r=super.updateFrom(t,n);this.iesAtlas.setTextures(e,n),this.iesProfilesNode.value=this.iesAtlas.texture;let i=ls.getLength(),a=this.count,o=Math.max(a,2);this.buffer.array.length!==o*i&&(this.buffer.dispose(),this.buffer=new j(new Float32Array(o*i),i),this.bufferNode.value=this.buffer);let s=this.tex.image.data;this.buffer.array.set(s.subarray(0,a*i));let c=new Int32Array(this.buffer.array.buffer);for(let e=0;e<a;e++){let t=e*i;c[t+3]=Math.round(s[t+3]),c[t+11]=Math.round(s[t+11]),c[t+21]=Math.round(s[t+21])}return this.buffer.needsUpdate=!0,this.countNode.value=this.count,r}_initFns(){let{bufferNode:e,countNode:t,iesProfilesNode:n,iesInfoNode:r}=this,i=ks(r,n,`sampleIesTexel`);this.isLightVisibleToCamera=X`
			fn isLightVisibleToCamera( index: u32 ) -> bool {

				return ${e}[ index ].visibleToCameraRays != 0;

			}
		`,this.getLightWeight=X`
			fn getLightWeight( index: u32, position: vec3f ) -> f32 {

				let light = ${e}[ index ];
				let power = ${Fs}( light.color * light.intensity );
				if ( light.lightType == ${2} ) {

					// the most any point on the spot's disc lights the position. Ies profiles are not
					// evaluated here
					let nearest = ${qs}( light, position );
					var attenuation = 1.0;
					if ( light.iesProfile < 0 ) {

						attenuation = ${Vs}( light.coneCos, light.penumbraCos, nearest.x );

					}

					return power * attenuation * ${Hs}( nearest.y, light.distance, light.decay );

				} else if ( light.lightType == ${4} ) {

					// the point light's world position is packed into the u slot
					let dist = length( light.u - position );
					return power * ${Hs}( dist, light.distance, light.decay );

				} else if ( light.lightType == ${3} ) {

					return power;

				} else {

					let toLight = light.position - position;
					let distSq = dot( toLight, toLight );
					if ( distSq == 0.0 ) {

						return 0.0;

					}

					// area lights only emit from their front face, and the distance is held above the size
					// of the light so positions on or near it do not dominate
					let normal = normalize( cross( light.u, light.v ) );
					let cosTheta = dot( toLight, normal ) * inverseSqrt( distSq );
					return power * light.area * max( cosTheta, 0.0 ) / max( distSq, light.area );

				}

			}
		`,this.getLightsWeight=X`
			fn getLightsWeight( position: vec3f ) -> f32 {

				var total = 0.0;
				for ( var i = 0u; i < ${t}; i ++ ) {

					total += ${this.getLightWeight}( i, position );

				}

				return total;

			}
		`,this.selectLight=X`
			fn selectLight( position: vec3f, envWeight: f32, r: f32, selectionPdf: ptr<function, f32> ) -> u32 {

				let count = ${t};
				let totalWeight = ${this.getLightsWeight}( position ) + envWeight;
				if ( totalWeight <= 0.0 ) {

					*selectionPdf = 0.0;
					return 0u;

				}

				let targetWeight = r * totalWeight;
				var accumulated = 0.0;
				var lastWeighted = 0u;
				var index = count;
				for ( var i = 0u; i < count; i ++ ) {

					let lightWeight = ${this.getLightWeight}( i, position );
					accumulated += lightWeight;
					if ( lightWeight > 0.0 ) {

						lastWeighted = i;

					}

					if ( targetWeight < accumulated ) {

						index = i;
						break;

					}

				}

				// rounding can carry the target past the last light when there is no environment
				if ( index == count && envWeight <= 0.0 ) {

					index = lastWeighted;

				}

				var weight = envWeight;
				if ( index < count ) {

					weight = ${this.getLightWeight}( index, position );

				}

				*selectionPdf = weight / totalWeight;
				return index;

			}
		`,this.randomLightSample=X`
			fn randomLightSample( lightIndex: u32, rayOrigin: vec3f, ruv: vec2f ) -> ${us} {

				let light = ${e}[ lightIndex ];

				var result: ${us};
				if ( light.lightType == ${2} ) {

					result = ${Ks}( light, rayOrigin, ruv );

					let spotNormal = normalize( cross( light.u, light.v ) );
					let cosTheta = dot( result.direction, spotNormal );
					var spotAttenuation: f32;
					if ( light.iesProfile >= 0 ) {

						// half a texel of the profile's tile in the atlas
						let profileInfo = ${r}[ u32( light.iesProfile ) ];
						let texelInset = 0.5 / vec2f( vec2u( profileInfo.y & 0xFFFFu, profileInfo.y >> 16u ) );

						// tilt spans [ 0, 180 ]deg inset to the texel centers, twist covers [ 0, 359 ]deg and wraps
						let tiltAngle = mix( texelInset.x, 1.0 - texelInset.x, acos( cosTheta ) / PI );
						let twistAngle = ( atan2( dot( result.direction, light.v ), dot( result.direction, light.u ) ) + PI ) / ( 2.0 * PI ) + texelInset.y;
						let packedProfile = ( 1 << 26 ) | light.iesProfile;
						spotAttenuation = ${i}( vec2f( tiltAngle, twistAngle ), packedProfile, 0.0 ).r;

					} else {

						spotAttenuation = ${Vs}( light.coneCos, light.penumbraCos, cosTheta );

					}

					result.emission *= spotAttenuation;

				} else if ( light.lightType == ${4} ) {

					// the point light's world position is packed into the u slot
					let lightRay = light.u - rayOrigin;
					let lightDist = length( lightRay );
					let cutoffDistance = light.distance;
					var distanceFalloff = 1.0 / max( pow( lightDist, light.decay ), 0.01 );
					if ( cutoffDistance > 0.0 ) {

						let window = clamp( 1.0 - pow( lightDist / cutoffDistance, 4.0 ), 0.0, 1.0 );
						distanceFalloff *= window * window;

					}

					result.direction = normalize( lightRay );
					result.dist = lightDist;
					result.pdf = 1.0;
					result.emission = light.color * light.intensity * distanceFalloff;
					result.lightType = light.lightType;

				} else if ( light.lightType == ${3} ) {

					// the directional light's direction is packed into the u slot
					result.dist = ${Rs};
					result.direction = light.u;
					result.pdf = 1.0;
					result.emission = light.color * light.intensity;
					result.lightType = light.lightType;

				} else {

					result = ${Gs}( light, rayOrigin, ruv );

				}

				return result;

			}
		`,this.intersectLightAtIndex=X`
			fn intersectLightAtIndex( rayOrigin: vec3f, rayDirection: vec3f, index: u32, lightRec: ptr<function, ${us}> ) -> bool {

				let light = ${e}[ index ];

				var u = light.u;
				var v = light.v;
				let normal = normalize( cross( u, v ) );

				// only front-facing area lights can be hit
				if ( dot( normal, rayDirection ) > 0.0 ) {

					u *= 1.0 / dot( u, u );
					v *= 1.0 / dot( v, v );

					var dist = - 1.0;
					if ( light.lightType == ${0} ) {

						dist = ${Us}( light.position, normal, u, v, rayOrigin, rayDirection );

					} else if ( light.lightType == ${1} ) {

						dist = ${Ws}( light.position, normal, u, v, rayOrigin, rayDirection );

					}

					if ( dist > 0.0 ) {

						let cosTheta = dot( rayDirection, normal );
						lightRec.dist = dist;
						lightRec.pdf = ( dist * dist ) / ( light.area * cosTheta );
						lightRec.emission = light.color * light.intensity;
						lightRec.direction = rayDirection;
						lightRec.lightType = light.lightType;
						return true;

					}

				}

				return false;

			}
		`}dispose(){this.tex.dispose(),this.buffer.dispose(),this.iesAtlas.dispose()}},vl=class extends No{constructor(){let e={globalId:Zt,outputTarget:on(new O(1,1)).toWriteOnly()},t=X`
			fn compute( globalId: vec3u ) -> void {

				textureStore( ${e.outputTarget}, globalId.xy, vec4( 0, 0, 0, 1 ) );

			}
		`;super(t(e)),this.defineUniformAccessors({target:e.outputTarget})}},yl=class{constructor(e){this.renderer=e,this.maxBounces=15,this.frameBudget=25e4,this.maxTransparentBounces=15,this.lowResMode=!1,this.maxSamples=0,this._renderTask=null,this.outputTarget=new O(1,1),this.outputTarget.format=we,this.outputTarget.type=se,this.outputTarget.colorSpace=p.workingColorSpace,this.outputTarget.name=`Output #0`,this.outputTarget.generateMipmaps=!1,this.prevOutputTarget=new O(1,1),this.prevOutputTarget.format=we,this.prevOutputTarget.type=se,this.prevOutputTarget.colorSpace=p.workingColorSpace,this.prevOutputTarget.name=`Output #1`,this.prevOutputTarget.generateMipmaps=!1,this.sampleCountTarget=new O(1,1),this.sampleCountTarget.format=b,this.sampleCountTarget.type=ge,this.sampleCountTarget.name=`Sample Count`,this.sampleCountTarget.generateMipmaps=!1,this.sampleCountClearKernel=new vl().setWorkgroupSize(8,8,1),this.outputTargetClearKernel=new vl().setWorkgroupSize(8,8,1)}setRandom(e){}setBVHData(e){}setTextures(e){}setMaterial(e){}setFilterGlossy(e){}setClamping(e,t){}setEnvironment(e,t,n){}setLights(e){}setBackground(e,t,n,r){}rebuild(){this._renderTask=null}setSize(e,t){e=Math.ceil(e),t=Math.ceil(t);let{width:n,height:r}=this.outputTarget;return n===e&&r===t?!1:(this.outputTarget.dispose(),this.prevOutputTarget.dispose(),this.sampleCountTarget.dispose(),this.outputTarget=this.outputTarget.clone(),this.prevOutputTarget=this.outputTarget.clone(),this.sampleCountTarget=this.sampleCountTarget.clone(),this.outputTarget.setSize(e,t),this.prevOutputTarget.setSize(e,t),this.sampleCountTarget.setSize(e,t),this.reset(),!0)}getSize(e){let{width:t,height:n}=this.outputTarget;return e.x=t,e.y=n,e}update(){let{renderer:e}=this;e.initialized&&(this._renderTask||=this.createRenderTask(),this._renderTask.next())}*createRenderTask(){}async getSampleCountsAsync(){return{min:0,max:0,avg:0}}resetSeed(){}reset(){let{renderer:e,outputTargetClearKernel:t,sampleCountClearKernel:n,outputTarget:r,prevOutputTarget:i,sampleCountTarget:a}=this;if(!e.initialized)return;let{width:o,height:s}=r,c=t.getDispatchSize(o,s);t.target=r,e.compute(t.kernel,c),t.target=i,e.compute(t.kernel,c),n.target=a,e.compute(n.kernel,c),this._renderTask=null}dispose(){this.outputTarget.dispose(),this.prevOutputTarget.dispose(),this.sampleCountTarget.dispose(),this.sampleCountClearKernel.dispose(),this.outputTargetClearKernel.dispose(),this._renderTask=null}},bl=new E,xl=class extends yl{constructor(e){super(e),this.envInfo=new Gc,this._completedSamples=0,this._tileProgress=0,this.kernel=new Rc().setWorkgroupSize(8,8,1),this.kernel.envInfo=this.envInfo,this.backgroundInfo=new Kc,this.kernel.backgroundInfo=this.backgroundInfo,this.lightsInfo=new _l,this.kernel.lightsInfo=this.lightsInfo}resetSeed(){this.kernel.seed=0}reset(){super.reset(),this._completedSamples=0,this._tileProgress=0}async getSampleCountsAsync(){if(this.lowResMode)return{min:0,max:0,avg:0};let e=this._completedSamples,t=this._tileProgress;return{min:t===1?e+1:e,max:e+1,avg:e+t}}setBVHData(e){this.kernel.bvhData=e,this.rebuild()}rebuild(){super.rebuild(),this.kernel.needsUpdate=!0,this.reset()}setRandom(e){this.kernel.context.random=e,this.kernel.needsUpdate=!0,this.reset()}setMaterial(e){this.kernel.material=e.getData(),this.kernel.needsUpdate=!0,this.reset()}setFilterGlossy(e){this.kernel.filterGlossy=e===0?nc:1/e,this.reset()}setClamping(e,t){this.kernel.clampDirect=e,this.kernel.clampIndirect=t,this.reset()}setEnvironment(e){this.envInfo.updateFrom(e)}setLights(e){this.lightsInfo.updateFrom(this.renderer,e),this.reset()}setMultipleImportanceSampling(e){this.kernel.misEnabled=+!!e,this.reset()}setEnvironmentParams(e,t){let{envInfo:n}=this,r=new T().makeRotationFromEuler(t).invert();n.rotationNode.value.setFromMatrix4(r),n.intensityNode.value=e}setBackground(e){let{backgroundInfo:t}=this;t.dispose(),t.map=e}setBackgroundParams(e,t,n){let{backgroundInfo:r}=this,i=new T().makeRotationFromEuler(t).invert();r.rotationNode.value.copy(i),r.intensity=e,r.blur=n}setTransmissiveBackground(e){this.kernel.transmissiveBackground=e,this.reset()}*createRenderTask(){let{renderer:e,kernel:t,maxBounces:n,maxTransparentBounces:r,outputTarget:i,sampleCountTarget:a,lowResMode:o}=this,s=new E;t.outputTarget=i,t.sampleCountTarget=a,t.maxBounces=n,t.maxTransparentBounces=r;let c=0;for(;;){if(t.maxSamples=this.maxSamples,this.maxSamples!==0&&c>=this.maxSamples){yield;continue}this.getSize(bl);let n=Math.max(1,Math.ceil(bl.x*bl.y/this.frameBudget));s.x=Math.ceil(Math.sqrt(n)),s.y=Math.ceil(n/s.x);let r=this.lowResMode?1:s.x*s.y,i=0,a=t.tileSize;o?this.getSize(a):this.getSize(a).divide(s).ceil();let l=t.getDispatchSize(a.x,a.y);t.seed+=1,e.copyTextureToTexture(this.outputTarget,this.prevOutputTarget),[this.outputTarget,this.prevOutputTarget]=[this.prevOutputTarget,this.outputTarget],t.prevOutputTarget=this.prevOutputTarget,t.outputTarget=this.outputTarget;for(let n=0;n<s.x;n++)for(let o=0;o<s.y;o++)t.offset.set(n,o).multiply(a),e.compute(t.kernel,l),i=Math.min(i+1,r),this._completedSamples=c,this._tileProgress=i/r,yield;c++}}dispose(){super.dispose(),this.envInfo.dispose(),this.lightsInfo.dispose(),this.kernel.dispose()}},Sl=class extends A{constructor(e,t,n=[]){super(e,t),this.dependencies=n}setup(e){for(let t of this.dependencies)t.build(e);super.setup(e)}},Cl=new A({throughputColor:`vec3f`,currentBounce:`uint`,resultColor:`vec4f`,emission:`vec3f`,scatterPdf:`float`,scatterColor:`vec3f`,minPdf:`float`,origin:`vec3f`,isFullyTransmissive:`uint`,direction:`vec3f`,side:`float`,normal:`vec3f`,objectIndex:`int`,barycoord:`vec3f`,pixelIndex:`uint`,indices:`vec3u`,seed:`uint`,lightDirection:`vec3f`,lightPdf:`float`,lightEmission:`vec3f`,lightDist:`float`,lightBsdf:`vec3f`,lightBsdfPdf:`float`,rayIntersectionIndex:`int`,shadowRayIntersectionIndex:`int`,lightType:`int`,dist:`float`,alphaDepth:`uint`,maxDist:`float`,dispersionWavelength:`float`},`RayData`),wl=new A({origin:`vec3f`,pixelIndex:`uint`,direction:`vec3f`,currentBounce:`uint`,seed:`uint`,alphaDepth:`uint`,maxDist:`float`,_alignment0:`uint`},`TraceQueuedRay`),Tl=new A({barycoord:`vec3f`,objectIndex:`int`,position:`vec3f`,dist:`float`,normal:`vec3f`,side:`float`,indices:`vec3u`,forwardBlocked:`uint`},`TraceResult`),El=new Sl({length:`uint`,elements:`array<${wl.name}>`},`RayQueue`,[wl]);El.getLength=()=>4;var Dl=new Sl({length:{type:`uint`,atomic:!0},elements:`array<${wl.name}>`},`RayQueue`,[wl]);Dl.getLength=()=>4;var Ol=new Sl({current:{type:`uint`,atomic:!0},elementCount:{type:`uint`,atomic:!0},elements:`array<atomic<u32>>`},`PixelQueue`);Ol.getLength=()=>2;var kl=new Sl({current:`uint`,elementCount:`uint`,elements:`array<u32>`},`PixelQueue`);kl.getLength=()=>2;var Al=class extends No{constructor(){let e={rayDataStorage:F(new j(1,1),Cl),pixelQueue:F(new j(1,1),kl),targetDimensions:I(new E),frameBudget:I(0,`uint`),globalId:Zt},t=X`
			fn compute( targetDimensions: vec2u, frameBudget: u32, globalId: vec3u ) -> void {

				let rayDataStorage = &${e.rayDataStorage};
				let pixelQueue = &${e.pixelQueue};

				if ( globalId.x >= targetDimensions.x || globalId.y >= targetDimensions.y ) {

					return;

				}

				let rayCount = min( frameBudget, arrayLength( rayDataStorage ) );
				let pixelCount = targetDimensions.x * targetDimensions.y;
				if ( globalId.x == 0u && globalId.y == 0u ) {

					pixelQueue.current = 0u;
					pixelQueue.elementCount = select( 0u, pixelCount - rayCount, pixelCount >= rayCount );

				}

				let pixelHash = ( globalId.x << 16 ) | globalId.y;
				let pixelIndex = globalId.x + globalId.y * targetDimensions.x;
				if ( pixelIndex < rayCount ) {

					rayDataStorage[ pixelIndex ].pixelIndex = pixelHash;
					rayDataStorage[ pixelIndex ].resultColor = vec4f( 0.0 );
					rayDataStorage[ pixelIndex ].throughputColor = vec3f( 0.0 );
					rayDataStorage[ pixelIndex ].objectIndex = - 1;
					rayDataStorage[ pixelIndex ].alphaDepth = 0u;
					rayDataStorage[ pixelIndex ].rayIntersectionIndex = - 1;
					rayDataStorage[ pixelIndex ].shadowRayIntersectionIndex = - 1;

				} else {

					pixelQueue.elements[ pixelIndex - rayCount ] = pixelHash;

				}

			}
		`;super(t(e)),this.defineUniformAccessors(e)}},jl=class extends No{constructor(){let e={envInfo:{value:null},backgroundInfo:{value:null},lightsInfo:{value:null},prevOutputTarget:on(new O(1,1)).toReadOnly(),outputTarget:on(new O(1,1)).toWriteOnly(),sampleCountTarget:on(new O(1,1)).toReadWrite(),misEnabled:I(1,`uint`),rayCount:I(0,`uint`),maxBounces:I(5,`uint`),clampDirect:I(0),clampIndirect:I(10),transmissiveBackground:I(1),rayDataStorage:F(new j(1,1),Cl),rayIntersectionsStorage:F(new j(1,1),Tl),shadowRayIntersectionsStorage:F(new j(1,1),Tl),globalId:Zt},t=J(`envInfo.value.totalSumNode`,e),n=J(`envInfo.value.intensityNode`,e),r=J(`envInfo.value.sampleColor`,e),i=J(`envInfo.value.sampleDir`,e),a=J(`envInfo.value.getDirPdf`,e),o=J(`envInfo.value.getWeight`,e),s=J(`backgroundInfo.value.sampleColor`,e),c=J(`lightsInfo.value.countNode`,e),l=Y(`lightsInfo.value.randomLightSample`,e),u=Y(`lightsInfo.value.intersectLightAtIndex`,e),d=Y(`lightsInfo.value.getLightWeight`,e),f=Y(`lightsInfo.value.getLightsWeight`,e),p=Y(`lightsInfo.value.selectLight`,e),m=Y(`lightsInfo.value.isLightVisibleToCamera`,e),h=X`

			fn compute(
				// settings
				misEnabled: u32,
				rayCount: u32,
				maxBounces: u32,
				clampDirect: f32,
				clampIndirect: f32,
				transmissiveBackground: u32,

				globalId: vec3u
			) -> void {

				let rayDataStorage = &${e.rayDataStorage};
				let rayIntersectionsStorage = &${e.rayIntersectionsStorage};
				let shadowRayIntersectionsStorage = &${e.shadowRayIntersectionsStorage};

				// bound by "rayCount" rather than the pool length. See MaterialKernel
				let index = globalId.x;
				if ( index >= rayCount ) {

					return;

				}

				// skip slots that have never spawned a ray
				let input = ( *rayDataStorage )[ index ];
				if ( input.rayIntersectionIndex < 0 ) {

					return;

				}

				let indexUV = vec2u( input.pixelIndex >> 16, input.pixelIndex & 0xFFFF );
				${$o}( indexUV, input.seed, input.currentBounce + input.alphaDepth );

				// one-sample NEE chooses between the analytic lights and the environment, matched with
				// the megakernel
				let envActive = ${t} > 0.0 && ${n} > 0.0;
				let lightsCount = ${c};
				var envWeight = 0.0;
				if ( envActive ) {

					envWeight = ${o}();

				}

				var resultColor = input.resultColor;
				var throughputColor = input.throughputColor;

				// added last, since a camera ray miss overwrites the pixel with the background
				var lightHits = vec3f( 0.0 );
				var cameraHitLight = false;

				// resolve the previous surface's NEE shadow ray (pre-scatter throughput). The index
				// is negative when no shadow ray was enqueued last frame
				if ( input.shadowRayIntersectionIndex >= 0 && input.lightPdf > 0.0 ) {

					let shadowHit = ( *shadowRayIntersectionsStorage )[ u32( input.shadowRayIntersectionIndex ) ];
					let occluded = shadowHit.objectIndex >= 0;
					if ( ! occluded ) {

						// env + area lights are also bsdf-sampled, so MIS-weight them; punctual take full weight,
						// or when a bsdf ray could never reach the light
						let isMISWeighted = ${Bs}( input.lightType ) && shadowHit.forwardBlocked == 0u;
						let misWeight = select( 1.0, ${Ps}( input.lightPdf, input.lightBsdfPdf ), isMISWeighted );
						let directLight = throughputColor * input.lightEmission * input.lightBsdf * misWeight / input.lightPdf;
						let contribution = ${Q}( directLight, input.currentBounce, clampDirect, clampIndirect );
						resultColor += vec4f( contribution, 0.0 );

					}

				}

				// emission gathered at the previous surface (pre-scatter throughput). Found light clamps
				// at the depth of the segment that found it, as in Cycles, so one less than the current
				let emission = ${Q}( throughputColor * input.emission, max( input.currentBounce, 1u ) - 1u, clampDirect, clampIndirect );
				resultColor += vec4f( emission, 0.0 );

				// reconstruct the scatter record staged by MaterialKernel
				var scatterRec: ${is};
				scatterRec.color = input.scatterColor;
				scatterRec.pdf = input.scatterPdf;

				// the bounce limit, russian roulette, and terminating scatter checks all ran in
				// MaterialKernel, which stages a zeroed pdf and skips the bounce trace when they fire
				var isTerminated = all( throughputColor == vec3f( 0.0 ) ) || input.currentBounce >= maxBounces || ${Ts}( scatterRec );

				if ( ! isTerminated ) {

					// apply the scatter across the traced segment
					throughputColor *= scatterRec.color / scatterRec.pdf;

					let hitResult = ( *rayIntersectionsStorage )[ u32( input.rayIntersectionIndex ) ];
					let didHit = hitResult.objectIndex >= 0;
					let surfaceDist = select( ${Rs}, hitResult.dist, didHit );

					// NEE's total weight at the vertex this segment left, for MIS. Camera segments have none
					let isMISWeighted = misEnabled != 0u && input.currentBounce > 0u;
					var lightTotalWeight = 0.0;
					if ( isMISWeighted ) {

						lightTotalWeight = ${f}( input.origin ) + envWeight;

					}

					// forward hits on area lights. Camera rays only see visibleToCameraRays lights, at full weight
					for ( var li = 0u; li < lightsCount; li ++ ) {

						if ( input.currentBounce == 0u && ! ${m}( li ) ) {

							continue;

						}

						var lightRec: ${us};
						if ( ${u}( input.origin, input.direction, li, &lightRec ) && lightRec.dist < surfaceDist ) {

							var misWeight = 1.0;
							if ( isMISWeighted ) {

								let selectionPdf = ${d}( li, input.origin ) / lightTotalWeight;
								misWeight = ${Ps}( input.scatterPdf, lightRec.pdf * selectionPdf );

							}

							lightHits += ${Q}( lightRec.emission * throughputColor * misWeight, input.currentBounce, clampDirect, clampIndirect );
							cameraHitLight = cameraHitLight || input.currentBounce == 0u;

						}

					}

					if ( didHit ) {

						// stage the hit for MaterialKernel
						rayDataStorage[ index ].barycoord = hitResult.barycoord;
						rayDataStorage[ index ].normal = hitResult.normal;
						rayDataStorage[ index ].side = hitResult.side;
						rayDataStorage[ index ].indices = hitResult.indices;
						rayDataStorage[ index ].objectIndex = hitResult.objectIndex;
						rayDataStorage[ index ].dist = hitResult.dist;

						// next event estimation: choose one light or the environment by its estimated
						// contribution. MaterialKernel evaluates the bsdf and enqueues the shadow ray.
						var lightPdf = 0.0;
						if ( misEnabled != 0u ) {

							let ruv = ${rs}( ${5} );
							var selectionPdf = 0.0;
							let lightIndex = ${p}( hitResult.position, envWeight, ruv.x, &selectionPdf );
							if ( selectionPdf > 0.0 ) {

								var lightRec: ${us};
								if ( envActive && lightIndex == lightsCount ) {

									// the environment, sampled from its CDF, as a light of kind ENVIRONMENT
									let envSample = ${i}( ruv.yz );
									lightRec.direction = envSample.direction;
									lightRec.emission = envSample.color;
									lightRec.pdf = envSample.pdf;
									lightRec.dist = ${Rs};
									lightRec.lightType = ${5};

								} else {

									lightRec = ${l}( lightIndex, hitResult.position, ruv.yz );

								}

								lightPdf = lightRec.pdf * selectionPdf;
								rayDataStorage[ index ].lightDirection = lightRec.direction;
								rayDataStorage[ index ].lightEmission = lightRec.emission;
								rayDataStorage[ index ].lightDist = lightRec.dist;
								rayDataStorage[ index ].lightType = lightRec.lightType;

							}

						}

						rayDataStorage[ index ].lightPdf = lightPdf;

					} else {

						// the segment escaped the scene: gather the environment for opaque paths, or
						// the background for camera segments and fully transmissive paths
						if ( input.currentBounce > 0u && input.isFullyTransmissive == 0u ) {

							var misWeight = 1.0;
							if ( isMISWeighted && envActive ) {

								// match the env pdf scaling used by the NEE selection so the two estimators balance
								let envPdf = ${a}( input.direction ) * envWeight / lightTotalWeight;
								misWeight = ${Ps}( input.scatterPdf, envPdf );

							}

							let environment = ${r}( input.direction ).rgb * throughputColor * misWeight;
							let contribution = ${Q}( environment, input.currentBounce, clampDirect, clampIndirect );
							resultColor += vec4f( contribution, 0.0 );

						} else {

							// hit the background
							// support multiple transparent background blending techniques
							let rng = ${ns}( ${1} );
							let bg = ${s}( input.direction, rng );
							if ( input.currentBounce == 0u ) {

								// sample the background directly if this is the primary ray
								let background = ${Q}( bg.a * bg.rgb, input.currentBounce, clampDirect, clampIndirect );
								resultColor = vec4f( background, bg.a );

							} else {

								// transmissive ray handling
								let env = ${r}( input.direction );
								let avg = saturate( dot( throughputColor, vec3f( 1.0 / 3.0 ) ) );
								let transparency = ( 1.0 - bg.a ) * avg;

								var misWeight = 1.0;
								if ( misEnabled != 0u && envActive ) {

									let envPdf = ${a}( input.direction );
									misWeight = ${Ps}( input.scatterPdf, envPdf );

								}

								if ( transmissiveBackground == ${0}u ) {

									// display the env map through transmissive surfaces
									let background = ${Q}( env.rgb * throughputColor * misWeight, input.currentBounce, clampDirect, clampIndirect );
									resultColor = vec4f(
										resultColor.rgb + background,
										1.0,
									);

								} else if ( transmissiveBackground == ${2}u ) {

									// fade the background by the throughput color average
									let background = ${Q}( bg.a * bg.rgb * throughputColor * misWeight, input.currentBounce, clampDirect, clampIndirect );
									resultColor = vec4f(
										resultColor.rgb + background,
										1.0 - transparency,
									);

								} else {

									// fade the background by the throughput color average, mixing in env lighting
									var light = mix( env.rgb, bg.rgb, bg.a ) * misWeight;
									let background = ${Q}( light * throughputColor, input.currentBounce, clampDirect, clampIndirect );
									resultColor = vec4f(
										resultColor.rgb + background,
										1.0 - transparency,
									);

								}

							}

						}

						isTerminated = true;

					}

				}

				// visible lights are opaque against a transparent background
				resultColor += vec4f( lightHits, 0.0 );
				if ( cameraHitLight ) {

					resultColor.a = 1.0;

				}

				// the color rows are stored top down to match a rasterized render target
				let colorIndex = vec2u( indexUV.x, textureDimensions( ${e.outputTarget} ).y - 1u - indexUV.y );
				let storedSamples = textureLoad( ${e.sampleCountTarget}, indexUV ).r & ${Lc}u;

				if ( isTerminated ) {

					// blend the finished sample into the output and free the slot for a new camera ray
					let sampleCount = storedSamples + 1;
					let prevColor = textureLoad( ${e.prevOutputTarget}, colorIndex );
					let blendedColor = ${Ls}( prevColor, resultColor, 1.0 / f32( sampleCount ) );
					textureStore( ${e.sampleCountTarget}, indexUV, vec4( ${Ic}u | sampleCount ) );
					textureStore( ${e.outputTarget}, colorIndex, blendedColor );

					rayDataStorage[ index ].objectIndex = - 1;

				} else {

					// show the path so far, which the first sample overwrites
					if ( storedSamples == 0u ) {

						textureStore( ${e.outputTarget}, colorIndex, resultColor );

					}

					rayDataStorage[ index ].resultColor = resultColor;
					rayDataStorage[ index ].throughputColor = throughputColor;

				}

			}
		`;super(h(e)),this.defineUniformAccessors(e)}},Ml=class extends No{constructor(){let e={bvhData:{value:null},material:{value:null},seed:I(0,`uint`),targetDimensions:I(new E),maxSamples:I(0,`uint`),rayCount:I(0,`uint`),filterGlossy:I(1),maxTransparentBounces:I(5,`uint`),maxBounces:I(5,`uint`),sampleCountTarget:on(new O(1,1)).toReadWrite(),rayDataStorage:F(new j(1,1),Cl),rayQueue:F(new j(1,1),Dl),shadowRayQueue:F(new j(1,1),Dl),pixelQueue:F(new j(1,1),Ol),globalId:Zt},t=Y(`bvhData.value.fns.getCameraRay`,e),n=Y(`bvhData.value.fns.sampleTrianglePoint`,e),r=Y(`bvhData.value.fns.getSurfaceRecord`,e),i=Y(`material.value.bsdfSample`,e),a=Y(`material.value.bsdfEvalPdf`,e),o=X`

			fn compute(
				seed: u32,
				targetDimensions: vec2u,
				maxSamples: u32,
				rayCount: u32,
				filterGlossy: f32,
				maxTransparentBounces: u32,
				maxBounces: u32,

				globalId: vec3u
			) -> void {

				let rayDataStorage = &${e.rayDataStorage};
				let rayQueue = &${e.rayQueue};
				let shadowRayQueue = &${e.shadowRayQueue};
				let pixelQueue = &${e.pixelQueue};

				let materials = &${J(`bvhData.value.storage.materials`,e)};
				let transforms = &${J(`bvhData.value.storage.transforms`,e)};

				// bound by "rayCount" rather than the pool length. The dispatch rounds up to the
				// workgroup size and those extra slots hold a zeroed pixel index
				let index = globalId.x;
				if ( index >= rayCount ) {

					return;

				}

				let input = ( *rayDataStorage )[ index ];
				if ( input.objectIndex < 0 ) {

					// the slot's path has terminated: recycle the pixel through the overflow queue and
					// generate a fresh camera ray
					var pixelIndex = input.pixelIndex;
					let elementCount = atomicLoad( &pixelQueue.elementCount );
					if ( elementCount > 0u ) {

						// TODO: If we've pulled off a pixel that's already finished we currently just
						// write a no-op ray, wasting a frame. It may be better to iterate over a few
						// points in the queue to see if we can find one we can use.
						let queueIndex = atomicAdd( &pixelQueue.current, 1u ) % elementCount;
						pixelIndex = atomicExchange( &pixelQueue.elements[ queueIndex ], pixelIndex );

					}

					let indexUV = vec2u( pixelIndex >> 16, pixelIndex & 0xFFFF );

					// skip the pixel if it has hit the sample limit
					let combinedField = textureLoad( ${e.sampleCountTarget}, indexUV ).r;
					let samples = ( ${Lc}u & combinedField );
					let isComplete = maxSamples != 0u && samples >= maxSamples;

					if ( isComplete ) {

						rayDataStorage[ index ].pixelIndex = pixelIndex;
						rayDataStorage[ index ].rayIntersectionIndex = - 1;
						rayDataStorage[ index ].shadowRayIntersectionIndex = - 1;
						return;

					}

					${$o}( indexUV, seed + samples, 0 );

					let uv = vec2f( indexUV ) / vec2f( targetDimensions );
					let jitteredUv = uv + ${ns}( ${0} ) / vec2f( targetDimensions );
					var ray: ${q};
					if ( ! ${t}( jitteredUv, vec2f( targetDimensions ), &ray ) ) {

						// the camera declined the pixel, so leave the slot dormant for this round
						// TODO: same as above - this work is a bit wasteful and leaves slots empty for
						// a frame. Is it possible to quickly skip rays outside the mask or are finished?
						rayDataStorage[ index ].pixelIndex = pixelIndex;
						rayDataStorage[ index ].rayIntersectionIndex = - 1;
						rayDataStorage[ index ].shadowRayIntersectionIndex = - 1;
						return;

					}

					ray.direction = normalize( ray.direction );

					let rayIndex = atomicAdd( &rayQueue.length, 1u );
					rayQueue.elements[ rayIndex ].origin = ray.origin;
					rayQueue.elements[ rayIndex ].direction = ray.direction;
					rayQueue.elements[ rayIndex ].pixelIndex = pixelIndex;
					rayQueue.elements[ rayIndex ].currentBounce = 0u;
					rayQueue.elements[ rayIndex ].seed = seed + samples;
					rayQueue.elements[ rayIndex ].alphaDepth = 0u;
					rayQueue.elements[ rayIndex ].maxDist = ray.maxDist;

					rayDataStorage[ index ].origin = ray.origin;
					rayDataStorage[ index ].direction = ray.direction;
					rayDataStorage[ index ].pixelIndex = pixelIndex;
					rayDataStorage[ index ].seed = seed + samples;
					rayDataStorage[ index ].currentBounce = 0u;
					rayDataStorage[ index ].throughputColor = vec3f( 1.0 );
					rayDataStorage[ index ].resultColor = vec4f( 0.0, 0.0, 0.0, 1.0 );
					rayDataStorage[ index ].scatterColor = vec3f( 1.0 );
					rayDataStorage[ index ].scatterPdf = 1.0;
					rayDataStorage[ index ].minPdf = 1.0;
					rayDataStorage[ index ].isFullyTransmissive = 1u;
					rayDataStorage[ index ].emission = vec3f( 0.0 );
					rayDataStorage[ index ].lightPdf = 0.0;
					rayDataStorage[ index ].alphaDepth = 0u;
					rayDataStorage[ index ].maxDist = ray.maxDist;
					rayDataStorage[ index ].rayIntersectionIndex = i32( rayIndex );
					rayDataStorage[ index ].shadowRayIntersectionIndex = - 1;
					rayDataStorage[ index ].dispersionWavelength = - mix( ${360}.0, ${830}.0, ${ts}( ${7} ) );

					// write the active params & dispatched flag
					textureStore( ${e.sampleCountTarget}, indexUV, vec4( ${Fc}u | ${Ic}u | samples ) );

				} else {

					// evaluate the surface staged by LogicKernel
					let indexUV = vec2u( input.pixelIndex >> 16, input.pixelIndex & 0xFFFF );
					${$o}( indexUV, input.seed, input.currentBounce + input.alphaDepth );

					let objectInfo = transforms[ u32( input.objectIndex ) ];
					var materialInfo = ( *materials )[ objectInfo.materialIndex ];

					// a matte surface hit by the camera ray renders as a fully transparent
					let isMatte = materialInfo.matte != 0 && input.currentBounce == 0u;
					if ( isMatte ) {

						rayDataStorage[ index ].resultColor = vec4f( 0.0 );
						rayDataStorage[ index ].throughputColor = vec3f( 0.0 );
						rayDataStorage[ index ].emission = vec3f( 0.0 );
						rayDataStorage[ index ].lightPdf = 0.0;
						rayDataStorage[ index ].shadowRayIntersectionIndex = - 1;
						return;

					}

					// apply per-object colors
					materialInfo.color *= objectInfo.color.rgb;
					materialInfo.opacity *= objectInfo.color.a;

					var vertexData = ${n}( input.barycoord, input.indices );
					vertexData.normal = normalize( transpose( objectInfo.inverseMatrixWorld ) * vertexData.normal );
					vertexData.tangent = vec4f( ( objectInfo.matrixWorld * vec4f( vertexData.tangent.xyz, 0.0 ) ).xyz, vertexData.tangent.w );
					vertexData.position = objectInfo.matrixWorld * vertexData.position;

					let view = - input.direction;

					// blur glossy surfaces after low-probability bounces to suppress fireflies,
					// from the Cycles "filter glossy" approach in integrator/surface_shader.h
					let blurRoughness = sqrt( clamp( 1.0 - filterGlossy * input.minPdf, 0.0, 1.0 ) ) * 0.5;

					var surface = ${r}( materialInfo, vertexData, input.side, input.normal, view, blurRoughness );

					// Stochastically pass through partially transparent surfaces by re-enqueueing
					// the ray at the hit point, advancing the alpha depth but not the bounce count.
					let passesThrough = ${ts}( ${50} ) > surface.opacity;
					if ( passesThrough ) {

						// out of transparent bounces, so stop rather than shading a surface that
						// should be invisible. A zeroed throughput terminates in LogicKernel.
						if ( input.alphaDepth >= maxTransparentBounces ) {

							rayDataStorage[ index ].throughputColor = vec3f( 0.0 );
							rayDataStorage[ index ].emission = vec3f( 0.0 );
							rayDataStorage[ index ].lightPdf = 0.0;
							rayDataStorage[ index ].shadowRayIntersectionIndex = - 1;
							return;

						}

						let alphaIndex = atomicAdd( &rayQueue.length, 1u );
						rayQueue.elements[ alphaIndex ].origin = ${Ds}( vertexData.position.xyz, input.direction, input.normal );
						rayQueue.elements[ alphaIndex ].direction = input.direction;
						rayQueue.elements[ alphaIndex ].pixelIndex = input.pixelIndex;
						rayQueue.elements[ alphaIndex ].currentBounce = input.currentBounce;
						rayQueue.elements[ alphaIndex ].seed = input.seed;
						rayQueue.elements[ alphaIndex ].alphaDepth = input.alphaDepth + 1u;
						// the origin advanced to the hit point, so the remaining budget shrinks by the
						// distance already traced
						rayQueue.elements[ alphaIndex ].maxDist = max( input.maxDist - input.dist, 0.0 );

						// the surface is skipped, so no scatter or emission is staged for LogicKernel.
						// "pdf" is left alone so the previous scatter still weights the forward MIS,
						// and "bsdf" matches it so applying the scatter leaves the throughput as is.
						rayDataStorage[ index ].alphaDepth = input.alphaDepth + 1u;
						rayDataStorage[ index ].emission = vec3f( 0.0 );
						rayDataStorage[ index ].scatterColor = vec3f( input.scatterPdf );
						rayDataStorage[ index ].lightPdf = 0.0;
						rayDataStorage[ index ].origin = rayQueue.elements[ alphaIndex ].origin;
						rayDataStorage[ index ].rayIntersectionIndex = i32( alphaIndex );
						rayDataStorage[ index ].shadowRayIntersectionIndex = - 1;
						return;

					}

					// apply the hero wavelength to dispersive surfaces, folding the spectral weight
					// into the throughput at the path's first dispersive interaction
					var throughputColor = input.throughputColor;
					let isDispersive = materialInfo.dispersion > 0.0 && surface.ior > 1.0 && surface.transmission > 0.0 && ! surface.thinWall;
					if ( isDispersive ) {

						let wavelength = abs( input.dispersionWavelength );
						${lc}( &surface, materialInfo.dispersion, wavelength );
						if ( input.dispersionWavelength < 0.0 ) {

							rayDataStorage[ index ].dispersionWavelength = wavelength;
							throughputColor *= ${uc}( wavelength );
							rayDataStorage[ index ].throughputColor = throughputColor;

						}

					}

					// attenuate the light transmitted through the volume when exiting a backface so
					// the surface's emission and NEE resolve against the attenuated throughput
					if ( input.side < 0.0 && materialInfo.transmission > 0.0 ) {

						throughputColor *= ${cc}( input.dist, materialInfo.attenuationColor, materialInfo.attenuationDistance );
						rayDataStorage[ index ].throughputColor = throughputColor;

					}

					// sample the next bounce direction and stage the scatter state for LogicKernel
					var scatterRec = ${i}( view, surface );
					let newBounce = input.currentBounce + 1u;

					// decide termination now so finished paths skip the bounce trace entirely - a
					// zeroed pdf reads as a terminating scatter in LogicKernel, which still resolves
					// the surface's emission and NEE before freeing the slot
					var isTerminated = newBounce >= maxBounces || all( scatterRec.color == vec3f( 0.0 ) ) || ${Ts}( scatterRec );

					// russian roulette early out:
					// Matches Cycles path_state_continuation_probability in integrator/path_state.h
					if ( ! isTerminated && newBounce >= 3u ) {

						let rrThroughput = throughputColor * scatterRec.color / scatterRec.pdf;
						let rrProb = saturate( sqrt( max( max( rrThroughput.r, rrThroughput.g ), rrThroughput.b ) ) );
						isTerminated = rrProb <= 0.0 || ${ts}( ${6} ) > rrProb;
						if ( ! isTerminated ) {

							// fold the survival boost into the scatter color so LogicKernel's
							// throughput update applies it without a separate division
							scatterRec.color /= rrProb;

						}

					}

					// Write the ray storage content here since things like the emissive value is read
					// in the logic kernel on the subsequent frame.
					rayDataStorage[ index ].scatterColor = scatterRec.color;
					rayDataStorage[ index ].scatterPdf = select( scatterRec.pdf, 0.0, isTerminated );
					rayDataStorage[ index ].minPdf = min( input.minPdf, scatterRec.pdf );
					rayDataStorage[ index ].isFullyTransmissive = input.isFullyTransmissive & select( 0u, 1u, scatterRec.isTransmissive );
					rayDataStorage[ index ].emission = surface.emission;
					rayDataStorage[ index ].currentBounce = newBounce;

					// the NEE shadow ray below still resolves the surface's direct light, so only
					// the bounce segment is skipped for finished paths
					if ( ! isTerminated ) {

						let rayIndex = atomicAdd( &rayQueue.length, 1u );
						rayQueue.elements[ rayIndex ].origin = ${Ds}( vertexData.position.xyz, scatterRec.direction, input.normal );
						rayQueue.elements[ rayIndex ].direction = scatterRec.direction;
						rayQueue.elements[ rayIndex ].pixelIndex = input.pixelIndex;
						rayQueue.elements[ rayIndex ].currentBounce = newBounce;
						rayQueue.elements[ rayIndex ].seed = input.seed;
						rayQueue.elements[ rayIndex ].alphaDepth = input.alphaDepth;
						rayQueue.elements[ rayIndex ].maxDist = 0.0;
						rayDataStorage[ index ].rayIntersectionIndex = i32( rayIndex );

						rayDataStorage[ index ].origin = rayQueue.elements[ rayIndex ].origin;
						rayDataStorage[ index ].direction = scatterRec.direction;

					}

					// evaluate the bsdf toward the light LogicKernel selected and enqueue the shadow ray.
					// the light pdf will be 0 if NEE is disabled.
					var lightPdf = input.lightPdf;
					if ( lightPdf > 0.0 ) {

						let evalRec = ${a}( view, input.lightDirection, surface );
						if ( evalRec.pdf > 0.0 ) {

							rayDataStorage[ index ].lightBsdf = evalRec.color;
							rayDataStorage[ index ].lightBsdfPdf = evalRec.pdf;

							let shadowIndex = atomicAdd( &shadowRayQueue.length, 1u );
							shadowRayQueue.elements[ shadowIndex ].origin = ${Ds}( vertexData.position.xyz, input.lightDirection, input.normal );
							shadowRayQueue.elements[ shadowIndex ].direction = input.lightDirection;
							shadowRayQueue.elements[ shadowIndex ].pixelIndex = input.pixelIndex;
							shadowRayQueue.elements[ shadowIndex ].currentBounce = input.currentBounce;
							shadowRayQueue.elements[ shadowIndex ].seed = input.seed;
							shadowRayQueue.elements[ shadowIndex ].alphaDepth = input.alphaDepth;
							shadowRayQueue.elements[ shadowIndex ].maxDist = input.lightDist * ( 1.0 - ${zs} );
							rayDataStorage[ index ].shadowRayIntersectionIndex = i32( shadowIndex );

						} else {

							lightPdf = 0.0;

						}

					}

					if ( lightPdf <= 0.0 ) {

						rayDataStorage[ index ].lightPdf = 0.0;
						rayDataStorage[ index ].shadowRayIntersectionIndex = - 1;

					}

				}

			}
		`;super(o(e)),this.defineUniformAccessors(e)}},Nl=class extends No{constructor(){let e={bvhData:{value:null},rayQueue:F(new j(1,1),El),rayIntersectionsStorage:F(new j(1,1),Tl),globalId:Zt},t=J(`bvhData.value.fns.raycastFirstHit.outputType`,e),n=J(`bvhData.value.fns.raycastFirstHit`,e),r=X`

			fn compute( globalId: vec3u ) -> void {

				let rayQueue = &${e.rayQueue};
				let rayIntersectionsStorage = &${e.rayIntersectionsStorage};

				let index = globalId.x;
				if ( index >= rayQueue.length ) {

					return;

				}

				let queuedRay = ( *rayQueue ).elements[ index ];
				let indexUV = vec2u( queuedRay.pixelIndex >> 16, queuedRay.pixelIndex & 0xFFFF );
				${$o}( indexUV, queuedRay.seed, queuedRay.currentBounce + queuedRay.alphaDepth );

				let ray = Ray( queuedRay.origin, queuedRay.direction, queuedRay.maxDist );
				var hitResult: ${t};
				if ( ${n}( ray, &hitResult ) ) {

					rayIntersectionsStorage[ index ].barycoord = hitResult.barycoord;
					rayIntersectionsStorage[ index ].objectIndex = i32( hitResult.objectIndex );
					rayIntersectionsStorage[ index ].position = ray.origin + ray.direction * hitResult.dist;
					rayIntersectionsStorage[ index ].dist = hitResult.dist;
					rayIntersectionsStorage[ index ].normal = hitResult.normal.xyz;
					rayIntersectionsStorage[ index ].side = hitResult.side;
					rayIntersectionsStorage[ index ].indices = hitResult.indices.xyz;

				} else {

					rayIntersectionsStorage[ index ].objectIndex = - 1;

				}

			}
		`;super(r(e)),this.defineUniformAccessors(e)}},Pl=class extends No{constructor(){let e={bvhData:{value:null},shadowRayQueue:F(new j(1,1),El),shadowRayIntersectionsStorage:F(new j(1,1),Tl),globalId:Zt},t=J(`bvhData.value.fns.raycastFirstHit.outputType`,e),n=J(`bvhData.value.fns.raycastShadow`,e),r=X`

			fn compute( globalId: vec3u ) -> void {

				let shadowRayQueue = &${e.shadowRayQueue};
				let shadowRayIntersectionsStorage = &${e.shadowRayIntersectionsStorage};

				let index = globalId.x;
				if ( index >= shadowRayQueue.length ) {

					return;

				}

				let queuedRay = ( *shadowRayQueue ).elements[ index ];
				let indexUV = vec2u( queuedRay.pixelIndex >> 16, queuedRay.pixelIndex & 0xFFFF );
				${$o}( indexUV, queuedRay.seed, queuedRay.currentBounce + queuedRay.alphaDepth );

				let ray = Ray( queuedRay.origin, queuedRay.direction, queuedRay.maxDist );
				var hitResult: ${t};
				if ( ${n}( ray, &hitResult ) ) {

					shadowRayIntersectionsStorage[ index ].objectIndex = i32( hitResult.objectIndex );
					shadowRayIntersectionsStorage[ index ].dist = hitResult.dist;

				} else {

					shadowRayIntersectionsStorage[ index ].objectIndex = - 1;

				}

				shadowRayIntersectionsStorage[ index ].forwardBlocked = u32( hitResult.forwardBlocked );

			}
		`;super(r(e)),this.defineUniformAccessors(e)}},Fl=class extends No{constructor(e=Dl,t=64){let n={queue:F(new j(1,1),e),outputDispatch:F(new Qe(3,1),`u32`).setName(`outputDispatch`)},r=X`
			fn compute() -> void {

				let queue = &${n.queue};
				let outputDispatch = &${n.outputDispatch};

				let queueLength = atomicLoad( &queue.length );
				outputDispatch[ 0 ] = ( queueLength + ${t-1}u ) / ${t}u;
				outputDispatch[ 1 ] = 1u;
				outputDispatch[ 2 ] = 1u;

			}
		`;super(r(n)),this.defineUniformAccessors(n)}},Il=class extends No{constructor(){let e={rayDataStorage:F(new j(1,1),Cl),pixelQueue:F(new j(1,1),Ol),start:I(0,`uint`),end:I(0,`uint`),addingSlots:I(0,`uint`),globalId:Zt},t=X`
			fn compute( start: u32, end: u32, addingSlots: u32, globalId: vec3u ) -> void {

				let rayDataStorage = &${e.rayDataStorage};
				let pixelQueue = &${e.pixelQueue};

				let index = start + globalId.x;
				if ( index >= end ) {

					return;

				}

				if ( addingSlots == 0u ) {

					// slots being removed hand their pixel back before the pool is discarded
					let queueIndex = atomicAdd( &pixelQueue.elementCount, 1u );
					atomicStore( &pixelQueue.elements[ queueIndex ], rayDataStorage[ index ].pixelIndex );

				} else {

					// the pool never exceeds the pixel count, so the queue holds enough for every new slot
					let previousCount = atomicSub( &pixelQueue.elementCount, 1u );
					rayDataStorage[ index ].pixelIndex = atomicLoad( &pixelQueue.elements[ previousCount - 1u ] );
					rayDataStorage[ index ].resultColor = vec4f( 0.0 );
					rayDataStorage[ index ].throughputColor = vec3f( 0.0 );
					rayDataStorage[ index ].objectIndex = - 1;
					rayDataStorage[ index ].alphaDepth = 0u;
					rayDataStorage[ index ].rayIntersectionIndex = - 1;
					rayDataStorage[ index ].shadowRayIntersectionIndex = - 1;

				}

			}
		`;super(t(e)),this.defineUniformAccessors(e)}},Ll=class extends No{constructor(e={}){let{type:t=`u32`}=e,n={globalId:Zt,outputTarget:F(new Qe(1,1),t)},r=X`
			fn compute( globalId: vec3u ) -> void {

				${n.outputTarget}[ globalId.x ] = 0;

			}
		`;super(r(n)),this.defineUniformAccessors({target:n.outputTarget})}},Rl=class extends No{constructor(e){let t={source:F(new j(1,1),e).toReadOnly(),target:F(new j(1,1),e),count:I(0,`uint`),globalId:Zt},n=X`
			fn compute( count: u32, globalId: vec3u ) -> void {

				let index = globalId.x;
				if ( index >= count ) {

					return;

				}

				${t.target}[ index ] = ${t.source}[ index ];

			}
		`;super(n(t)),this.defineUniformAccessors(t)}},zl=4294967296,Bl=new A({minSamples:{type:`uint`,atomic:!0},maxSamples:{type:`uint`,atomic:!0},totalLo:{type:`uint`,atomic:!0},totalHi:{type:`uint`,atomic:!0},pixelCount:{type:`uint`,atomic:!0}},`SampleCounters`),Vl=class extends No{constructor(){let e={counters:F(new j(1,1),Bl)},t=X`
			fn compute() -> void {

				atomicStore( &${e.counters}.minSamples, 0xFFFFFFFFu );
				atomicStore( &${e.counters}.maxSamples, 0u );
				atomicStore( &${e.counters}.totalLo, 0u );
				atomicStore( &${e.counters}.totalHi, 0u );
				atomicStore( &${e.counters}.pixelCount, 0u );

			}
		`;super(t(e)),this.defineUniformAccessors(e)}},Hl=class extends No{constructor(){let e={globalId:Zt,counters:F(new j(1,1),Bl),sampleCountTarget:on(new O(1,1)).toReadOnly()},t=X`
			fn compute( globalId: vec3u ) -> void {

				let targetDimensions = textureDimensions( ${e.sampleCountTarget} );
				if ( globalId.x >= targetDimensions.x || globalId.y >= targetDimensions.y ) {

					return;

				}

				// pixels without a camera ray aren't part of the image, so skip rather than count zero
				let combinedField = textureLoad( ${e.sampleCountTarget}, globalId.xy ).r;
				if ( ( combinedField & ${Ic}u ) == 0u ) {

					return;

				}

				let samples = combinedField & ${Lc}u;

				atomicMin( &${e.counters}.minSamples, samples );
				atomicMax( &${e.counters}.maxSamples, samples );
				atomicAdd( &${e.counters}.pixelCount, 1u );

				// the sum overflowed if it came out smaller than the value already there, so carry
				// the wrap into "totalHi"
				let previousTotal = atomicAdd( &${e.counters}.totalLo, samples );
				if ( previousTotal + samples < previousTotal ) {

					atomicAdd( &${e.counters}.totalHi, 1u );

				}

			}
		`;super(t(e)),this.defineUniformAccessors(e)}},Ul=Math.floor(134217728/(Cl.getLength()*4)),Wl=5,Gl=class extends yl{constructor(e){super(e),this.seed=0,this.envInfo=new Gc,this.backgroundInfo=new Kc,this.lightsInfo=new _l,this.rayCount=0,this.rayDataStorage=null,this.rayQueue=null,this.shadowRayQueue=null,this.rayIntersectionsStorage=null,this.shadowRayIntersectionsStorage=null,this.pixelQueue=null,this.sampleCountersStorage=new j(new Uint32Array(5),5),this.sampleCountersStorage.name=`Sample Counters`,this._samplesPromise=null,this.populatePixelIndicesKernel=new Al().setWorkgroupSize(8,8,1),this.logicKernel=new jl().setWorkgroupSize(64,1,1),this.materialKernel=new Ml().setWorkgroupSize(64,1,1),this.traceRayKernel=new Nl().setWorkgroupSize(64,1,1),this.traceShadowRayKernel=new Pl().setWorkgroupSize(64,1,1),this.rayDispatchConverter=new Fl().setWorkgroupSize(1,1,1),this.shadowDispatchConverter=new Fl().setWorkgroupSize(1,1,1),this.primeSampleCountersKernel=new Vl().setWorkgroupSize(1,1,1),this.tallySampleCountsKernel=new Hl().setWorkgroupSize(8,8,1),this.resetSlotsKernel=new Il().setWorkgroupSize(64,1,1),this.copyRayDataKernel=new Rl(Cl).setWorkgroupSize(64,1,1),this.logicKernel.envInfo=this.envInfo,this.logicKernel.backgroundInfo=this.backgroundInfo,this.logicKernel.lightsInfo=this.lightsInfo,this.zeroDispatchKernel=new Ll().setWorkgroupSize(1,1,1),this.volumeKernel=null}resetSeed(){this.seed=0}reset(){super.reset(),this._samplesPromise=null}setBVHData(e){this.materialKernel.bvhData=e,this.materialKernel.needsUpdate=!0,this.traceRayKernel.bvhData=e,this.traceRayKernel.needsUpdate=!0,this.traceShadowRayKernel.bvhData=e,this.traceShadowRayKernel.needsUpdate=!0,this.reset()}rebuild(){super.rebuild(),this.materialKernel.needsUpdate=!0,this.reset()}setRandom(e){this.logicKernel.context.random=e,this.logicKernel.needsUpdate=!0,this.materialKernel.context.random=e,this.materialKernel.needsUpdate=!0,this.traceRayKernel.context.random=e,this.traceRayKernel.needsUpdate=!0,this.traceShadowRayKernel.context.random=e,this.traceShadowRayKernel.needsUpdate=!0,this.reset()}setMaterial(e){this.materialKernel.material=e.getData(),this.materialKernel.needsUpdate=!0,this.reset()}setFilterGlossy(e){this.materialKernel.filterGlossy=e===0?nc:1/e,this.reset()}setClamping(e,t){this.logicKernel.clampDirect=e,this.logicKernel.clampIndirect=t,this.reset()}setTransmissiveBackground(e){this.logicKernel.transmissiveBackground=e,this.reset()}setEnvironment(e){this.envInfo.updateFrom(e)}setLights(e){this.lightsInfo.updateFrom(this.renderer,e),this.reset()}setEnvironmentParams(e,t){let{envInfo:n}=this,r=new T().makeRotationFromEuler(t).invert();n.rotationNode.value.setFromMatrix4(r),n.intensityNode.value=e}setMultipleImportanceSampling(e){this.logicKernel.misEnabled=+!!e,this.reset()}setBackground(e){let{backgroundInfo:t}=this;t.dispose(),t.map=e}setBackgroundParams(e,t,n){let{backgroundInfo:r}=this,i=new T().makeRotationFromEuler(t).invert();r.rotationNode.value.copy(i),r.intensity=e,r.blur=n}dispose(){super.dispose(),this.envInfo.dispose(),this.lightsInfo.dispose(),this.rayDataStorage?.dispose(),this.rayQueue?.dispose(),this.shadowRayQueue?.dispose(),this.rayIntersectionsStorage?.dispose(),this.shadowRayIntersectionsStorage?.dispose(),this.sampleCountersStorage.dispose(),this.pixelQueue?.dispose(),this.rayDispatchConverter.outputDispatch.dispose(),this.shadowDispatchConverter.outputDispatch.dispose(),this.populatePixelIndicesKernel.dispose(),this.logicKernel.dispose(),this.materialKernel.dispose(),this.traceRayKernel.dispose(),this.traceShadowRayKernel.dispose(),this.rayDispatchConverter.dispose(),this.shadowDispatchConverter.dispose(),this.primeSampleCountersKernel.dispose(),this.tallySampleCountsKernel.dispose(),this.resetSlotsKernel.dispose(),this.copyRayDataKernel.dispose(),this.zeroDispatchKernel.dispose()}_updatePixelQueue(e,t){let n=Ol.getLength()+Math.max(e*t,1);(!this.pixelQueue||this.pixelQueue.array.length<n)&&(this.pixelQueue?.dispose(),this.pixelQueue=new j(new Float32Array(n),n),this.pixelQueue.name=`Pixel Queue`,this.materialKernel.pixelQueue=this.pixelQueue,this.materialKernel.needsUpdate=!0,this.populatePixelIndicesKernel.pixelQueue=this.pixelQueue,this.populatePixelIndicesKernel.needsUpdate=!0,this.resetSlotsKernel.pixelQueue=this.pixelQueue,this.resetSlotsKernel.needsUpdate=!0)}_resizePool(e){let{renderer:t,resetSlotsKernel:n,copyRayDataKernel:r}=this,i=this.rayCount;n.pixelQueue=this.pixelQueue,e<i&&(n.rayDataStorage=this.rayDataStorage,n.start=e,n.end=i,n.addingSlots=!1,t.compute(n.kernel,n.getDispatchSize(i-e,1,1)));let a=new j(e,Cl.getLength());a.name=`Ray Data`;let o=El.getLength()+e*wl.getLength(),s=new j(new Float32Array(o),o);s.name=`Ray Queue`;let c=new j(new Float32Array(o),o);c.name=`Shadow Ray Queue`;let l=new j(e,Tl.getLength());l.name=`Ray Intersections`;let u=new j(e,Tl.getLength());u.name=`Shadow Ray Intersections`;let d=Math.min(e,i);d>0&&(r.source=this.rayDataStorage,r.target=a,r.count=d,t.compute(r.kernel,r.getDispatchSize(d,1,1))),this.rayDataStorage?.dispose(),this.rayQueue?.dispose(),this.shadowRayQueue?.dispose(),this.rayIntersectionsStorage?.dispose(),this.shadowRayIntersectionsStorage?.dispose(),this.rayDataStorage=a,this.rayQueue=s,this.shadowRayQueue=c,this.rayIntersectionsStorage=l,this.shadowRayIntersectionsStorage=u,this.rayCount=e,this.logicKernel.needsUpdate=!0,this.materialKernel.needsUpdate=!0,this.traceRayKernel.needsUpdate=!0,this.traceShadowRayKernel.needsUpdate=!0,this.populatePixelIndicesKernel.needsUpdate=!0,this.resetSlotsKernel.needsUpdate=!0,e>i&&(n.rayDataStorage=a,n.start=i,n.end=e,n.addingSlots=!0,t.compute(n.kernel,n.getDispatchSize(e-i,1,1)))}_getRequestedSlotCount(e){return Math.min(Ul,e,Math.max(1,Math.floor(this.frameBudget)))}_applyBudget(e){let t=this._getRequestedSlotCount(e);t!==this.rayCount&&this._resizePool(t)}*createRenderTask(){let{renderer:e,maxTransparentBounces:t,logicKernel:n,materialKernel:r,traceRayKernel:i,traceShadowRayKernel:a,rayDispatchConverter:o,shadowDispatchConverter:s,zeroDispatchKernel:c,populatePixelIndicesKernel:l}=this,u=new E;this.getSize(u),this._updatePixelQueue(u.x,u.y);let d=u.x*u.y;for(this._applyBudget(d),c.target=this.rayQueue,e.compute(c.kernel,[1]),c.target=this.shadowRayQueue,e.compute(c.kernel,[1]),l.rayDataStorage=this.rayDataStorage,l.pixelQueue=this.pixelQueue,l.frameBudget=this.rayCount,l.targetDimensions.copy(u),e.compute(l.kernel,l.getDispatchSize(u.x,u.y,1)),this.seed++;;){let l=this.lowResMode?Math.min(this.maxBounces,Wl):1;for(let f=0;f<l;f++){e.copyTextureToTexture(this.outputTarget,this.prevOutputTarget),[this.outputTarget,this.prevOutputTarget]=[this.prevOutputTarget,this.outputTarget],n.prevOutputTarget=this.prevOutputTarget,n.outputTarget=this.outputTarget,n.sampleCountTarget=this.sampleCountTarget,n.rayDataStorage=this.rayDataStorage,n.rayIntersectionsStorage=this.rayIntersectionsStorage,n.shadowRayIntersectionsStorage=this.shadowRayIntersectionsStorage,n.maxBounces=this.maxBounces,n.rayCount=this.rayCount,e.compute(n.kernel,n.getDispatchSize(this.rayCount,1,1)),this._applyBudget(d);let{rayDataStorage:l,rayQueue:f,shadowRayQueue:p,rayIntersectionsStorage:m,shadowRayIntersectionsStorage:h,rayCount:g}=this;c.target=f,e.compute(c.kernel,[1]),c.target=p,e.compute(c.kernel,[1]),r.rayDataStorage=l,r.rayQueue=f,r.shadowRayQueue=p,r.pixelQueue=this.pixelQueue,r.sampleCountTarget=this.sampleCountTarget,r.seed=this.seed,r.maxSamples=this.maxSamples,r.rayCount=g,r.maxTransparentBounces=t,r.maxBounces=this.maxBounces,r.targetDimensions.copy(u),e.compute(r.kernel,r.getDispatchSize(g,1,1)),o.queue=f,e.compute(o.kernel,[1,1,1]),i.rayQueue=f,i.rayIntersectionsStorage=m,e.compute(i.kernel,o.outputDispatch),s.queue=p,e.compute(s.kernel,[1,1,1]),a.shadowRayQueue=p,a.shadowRayIntersectionsStorage=h,e.compute(a.kernel,s.outputDispatch)}yield}}getSampleCountsAsync(){if(this._samplesPromise===null){let e=this._measureSampleCounts().finally(()=>{this._samplesPromise===e&&(this._samplesPromise=null)});this._samplesPromise=e}return this._samplesPromise}async _measureSampleCounts(){let{renderer:e,sampleCountTarget:t,sampleCountersStorage:n,primeSampleCountersKernel:r,tallySampleCountsKernel:i}=this;if(!e.initialized||this.lowResMode)return{min:0,max:0,avg:0};r.counters=n,e.compute(r.kernel,[1,1,1]),i.counters=n,i.sampleCountTarget=t,e.compute(i.kernel,i.getDispatchSize(t.width,t.height));let a=await e.getArrayBufferAsync(n),o=new Uint32Array(a),s=o[4];if(s===0)return{min:0,max:0,avg:0};let c=o[3]*zl+o[2];return{min:o[0],max:o[1],avg:c/s}}},Kl=`

	// TODO: possibly this should be renamed something related to material or path tracing logic

	#ifndef RAY_OFFSET
	#define RAY_OFFSET 1e-4
	#endif

	// adjust the hit point by the surface normal by a factor of some offset and the
	// maximum component-wise value of the current point to accommodate floating point
	// error as values increase.
	vec3 stepRayOrigin( vec3 rayOrigin, vec3 rayDirection, vec3 offset, float dist ) {

		vec3 point = rayOrigin + rayDirection * dist;
		vec3 absPoint = abs( point );
		float maxPoint = max( absPoint.x, max( absPoint.y, absPoint.z ) );
		return point + offset * ( maxPoint + 1.0 ) * RAY_OFFSET;

	}

	// https://github.com/KhronosGroup/glTF/blob/main/extensions/2.0/Khronos/KHR_materials_volume/README.md#attenuation
	vec3 transmissionAttenuation( float dist, vec3 attColor, float attDist ) {

		vec3 ot = - log( attColor ) / attDist;
		return exp( - ot * dist );

	}

	vec3 getHalfVector( vec3 wi, vec3 wo, float eta ) {

		// get the half vector - assuming if the light incident vector is on the other side
		// of the that it's transmissive.
		vec3 h;
		if ( wi.z > 0.0 ) {

			h = normalize( wi + wo );

		} else {

			// Scale by the ior ratio to retrieve the appropriate half vector
			// From Section 2.2 on computing the transmission half vector:
			// https://blog.selfshadow.com/publications/s2015-shading-course/burley/s2015_pbs_disney_bsdf_notes.pdf
			h = normalize( wi + wo * eta );

		}

		h *= sign( h.z );
		return h;

	}

	vec3 getHalfVector( vec3 a, vec3 b ) {

		return normalize( a + b );

	}

	// The discrepancy between interpolated surface normal and geometry normal can cause issues when a ray
	// is cast that is on the top side of the geometry normal plane but below the surface normal plane. If
	// we find a ray like that we ignore it to avoid artifacts.
	// This function returns if the direction is on the same side of both planes.
	bool isDirectionValid( vec3 direction, vec3 surfaceNormal, vec3 geometryNormal ) {

		bool aboveSurfaceNormal = dot( direction, surfaceNormal ) > 0.0;
		bool aboveGeometryNormal = dot( direction, geometryNormal ) > 0.0;
		return aboveSurfaceNormal == aboveGeometryNormal;

	}

	// ray sampling x and z are swapped to align with expected background view
	vec2 equirectDirectionToUv( vec3 direction ) {

		// from Spherical.setFromCartesianCoords
		vec2 uv = vec2( atan( direction.z, direction.x ), acos( direction.y ) );
		uv /= vec2( 2.0 * PI, PI );

		// apply adjustments to get values in range [0, 1] and y right side up
		uv.x += 0.5;
		uv.y = 1.0 - uv.y;
		return uv;

	}

	vec3 equirectUvToDirection( vec2 uv ) {

		// undo above adjustments
		uv.x -= 0.5;
		uv.y = 1.0 - uv.y;

		// from Vector3.setFromSphericalCoords
		float theta = uv.x * 2.0 * PI;
		float phi = uv.y * PI;

		float sinPhi = sin( phi );

		return vec3( sinPhi * cos( theta ), cos( phi ), sinPhi * sin( theta ) );

	}

	// power heuristic for multiple importance sampling
	float misHeuristic( float a, float b ) {

		float aa = a * a;
		float bb = b * b;
		return aa / ( aa + bb );

	}

	// tentFilter from Peter Shirley's 'Realistic Ray Tracing (2nd Edition)' book, pg. 60
	// erichlof/THREE.js-PathTracing-Renderer/
	float tentFilter( float x ) {

		return x < 0.5 ? sqrt( 2.0 * x ) - 1.0 : 1.0 - sqrt( 2.0 - ( 2.0 * x ) );

	}
`,ql=class extends S{constructor(){super({uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:`
				varying vec2 vUv;
				void main() {

					vUv = uv;
					gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

				}`,fragmentShader:`
				#define ENVMAP_TYPE_CUBE_UV

				uniform samplerCube envMap;
				uniform float flipEnvMap;
				varying vec2 vUv;

				#include <common>
				#include <cube_uv_reflection_fragment>

				${Kl}

				void main() {

					vec3 rayDirection = equirectUvToDirection( vUv );
					rayDirection.x *= flipEnvMap;
					gl_FragColor = textureCube( envMap, rayDirection );

				}`}),this.depthWrite=!1,this.depthTest=!1}},Jl=class{constructor(e){this._renderer=e,this._quad=new Do(new ql)}generate(e,n=null,r=null){if(!e.isCubeTexture)throw Error(`CubeToEquirectMaterial: Source can only be cube textures.`);let i=e.images[0],a=this._renderer,o=this._quad;n===null&&(n=4*i.height),r===null&&(r=2*i.height);let s=new te(n,r,{type:se,colorSpace:i.colorSpace}),l=i.height,u=Math.log2(l)-2,d=1/l,f=1/(3*Math.max(2**u,112));o.material.defines.CUBEUV_MAX_MIP=`${u}.0`,o.material.defines.CUBEUV_TEXEL_WIDTH=f,o.material.defines.CUBEUV_TEXEL_HEIGHT=d,o.material.uniforms.envMap.value=e,o.material.uniforms.flipEnvMap.value=e.isRenderTargetTexture?1:-1,o.material.needsUpdate=!0;let p=a.getRenderTarget(),m=a.autoClear;a.autoClear=!0,a.setRenderTarget(s),o.render(a),a.setRenderTarget(p),a.autoClear=m;let g=new Uint16Array(n*r*4),_=new Float32Array(n*r*4);a.readRenderTargetPixels(s,0,0,n,r,_),s.dispose();for(let e=0,t=_.length;e<t;e++)g[e]=h.toHalfFloat(_[e]);let v=new c(g,n,r,we,Se);return v.minFilter=ae,v.magFilter=t,v.wrapS=ue,v.wrapT=ue,v.mapping=303,v.needsUpdate=!0,v}dispose(){this._quad.dispose()}};function Yl(e,t){return e.uuid<t.uuid?1:e.uuid>t.uuid?-1:0}function Xl(e){return`${e.source.uuid}:${e.colorSpace}`}function Zl(e){let t=[];return e.traverseVisible(e=>{(e.isRectAreaLight||e.isSpotLight||e.isPointLight||e.isDirectionalLight||e.isSunLight)&&t.push(e)}),t.sort(Yl)}var Ql=new C,$l=new A({matrixWorld:`mat4x4f`,inverseMatrixWorld:`mat4x4f`,visible:`uint`,materialIndex:`uint`,visibleToShadowRays:`uint`,_alignment0:`uint`,color:`vec4f`},`TransformStruct`),eu=new A({indices:`vec4u`,normal:`vec3f`,didHit:`bool`,barycoord:`vec3f`,objectIndex:`uint`,side:`float`,dist:`float`,forwardBlocked:`bool`},`PathTracerIntersectionResult`),tu=class extends Co{constructor(e,t={}){super(e,{attributes:{position:`vec4f`,normal:`vec4f`,tangent:`vec4f`,color:`vec4f`,uv:`vec4f`},...t}),this.structs.transform=$l,this.structs.material=os,this.storage.materials=null,this.materialsMap=new Map,this.materials=[],this.bvhMap=new Map,this.textureAtlas=new el}updateUvAttributesFromScene(){let{attributes:e}=this,t=new Set([`color`]);for(let n=0;n<8;n++){let r=n===0?`uv`:`uv`+n;delete e[r],t.add(r)}this.getRootObject().traverse(n=>{if(n.geometry)for(let r in n.geometry.attributes)t.has(r)&&(e[r]=`vec4f`)})}updateUvSampleFunction(){let{structs:e,fns:t}=this,n=[],r=null;e.attributes.membersLayout.forEach(({name:e})=>{if(/^uv/.test(e)){let t=e===`uv`?0:Number(e.replace(/^uv/,``));n.push(`
					case ${t}u: {

						return vertexData.${e}.xy;

					}
				`),r===null&&(r=`vertexData.${e}.xy`)}}),t.getUvFromChannel=X`
			fn getUvFromChannel( vertexData: ${e.attributes}, packed: i32 ) -> vec2f {

				// the uv channel is packed into bits 23-25 of the "*Map" descriptor
				let channel = u32( ( packed >> 23 ) & 0x7 );
				switch ( channel ) {

					${n.join(`
`)}
					default: {

						return ${r??`vec2f( 0.0 )`};

					}

				}

			}
		`}updateColorSampleFn(){let{structs:e,fns:t}=this;t.getColor=e.attributes.membersLayout.find(({name:e})=>e===`color`)?X`
				fn getColor( vertexData: ${e.attributes} ) -> vec4f {

					return vertexData.color;

				}
			`:X`
				fn getColor( vertexData: ${e.attributes} ) -> vec4f {

					return vec4f( 1.0 );

				}
			`}useTransparencyRaycastFn(){let{textureAtlas:e,storage:t,fns:n}=this,r=e.texture,i=ks(ln(e.textureInfo,`uvec4`),rn(r));n.getSurfaceRecord=rc(i,n.getUvFromChannel,n.getColor);let a=cn().toVar(`bvh_materialIndex`),o=Xt(1).toVar(`bvh_rayScalar`),s=Xt(1).toVar(`bvh_baseOpacity`),c=qt(!1).toVar(`bvh_isShadowRay`),l=qt(!1).toVar(`bvh_skipShadowObject`),u={shapeStruct:q,resultStruct:eu,boundsOrderFn:X`
				fn getBoundsOrder( ray: ${q}, splitAxis: u32, node: ${ba} ) -> bool {

					return ray.direction[ splitAxis ] >= 0.0;

				}
			`,intersectsBoundsFn:X`
				fn rayIntersectsBounds( ray: ${q}, bounds: ${ya}, result: ptr<function, ${eu}> ) -> u32 {

					// early-out if our object is completely transparent
					if ( ${s} == 0.0 ) {

						return 0u;

					}

					let boundsMin = vec3( bounds.min[0], bounds.min[1], bounds.min[2] );
					let boundsMax = vec3( bounds.max[0], bounds.max[1], bounds.max[2] );

					let invDir = 1.0 / ray.direction;
					let tMinPlane = ( boundsMin - ray.origin ) * invDir;
					let tMaxPlane = ( boundsMax - ray.origin ) * invDir;

					let tMinHit = min( tMinPlane, tMaxPlane );
					let tMaxHit = max( tMinPlane, tMaxPlane );

					let t0 = max( max( tMinHit.x, tMinHit.y ), tMinHit.z );
					let t1 = min( min( tMaxHit.x, tMaxHit.y ), tMaxHit.z );

					let dist = max( t0, 0.0 );
					if ( t1 < dist ) {

						return 0u;

					} else if ( ray.maxDist > 0.0 && dist * ${o} >= ray.maxDist ) {

						return 0u;

					} else if ( result.didHit && dist * ${o} >= result.dist ) {

						return 0u;

					} else {

						return 1u;

					}

				}

			`,intersectRangeFn:X`
				fn intersectRange( ray: ${q}, offset: u32, count: u32, result: ptr<function, ${eu}> ) -> bool {

					var didHit = false;
					for ( var ti = offset; ti < offset + count; ti = ti + 1u ) {

						let i0 = ${t.index}[ ti * 3u ];
						let i1 = ${t.index}[ ti * 3u + 1u ];
						let i2 = ${t.index}[ ti * 3u + 2u ];

						let a = ${t.attributes}[ i0 ].position.xyz;
						let b = ${t.attributes}[ i1 ].position.xyz;
						let c = ${t.attributes}[ i2 ].position.xyz;

						var triResult = ${to}( ray, a, b, c, 0.0 );
						triResult.dist *= ${o};
						if ( triResult.didHit && ( ray.maxDist <= 0.0 || triResult.dist < ray.maxDist ) && ( ! result.didHit || triResult.dist < result.dist ) ) {

							let material = ${t.materials}[ ${a} ];

							// TODO: if material is a transmissive volume we may need to assume double-sidedness
							// shadow rays hit both sides
							if ( ! ${c} && material.side != 0 && triResult.side != material.side ) {

								continue;

							}

							if ( material.transparent != 0 || material.alphaTest > 0.0 ) {

								var opacity = ${s};

								// add support for vertex color opacity
								if ( material.vertexColors == 1 ) {

									let barycoord = triResult.barycoord;
									let a = ${n.getColor}( ${t.attributes}[ i0 ] );
									let b = ${n.getColor}( ${t.attributes}[ i1 ] );
									let c = ${n.getColor}( ${t.attributes}[ i2 ] );
									let col = barycoord.x * a + barycoord.y * b + barycoord.z * c;

									opacity *= col.a;

								}

								// account for alpha component of albedo map
								if ( material.map != - 1 ) {

									let barycoord = triResult.barycoord;
									let a = ${n.getUvFromChannel}( ${t.attributes}[ i0 ], material.map );
									let b = ${n.getUvFromChannel}( ${t.attributes}[ i1 ], material.map );
									let c = ${n.getUvFromChannel}( ${t.attributes}[ i2 ], material.map );
									let uv = barycoord.x * a + barycoord.y * b + barycoord.z * c;
									let uvPrime = material.mapTransform * vec3f( uv, 1 );

									opacity *= ${i}( uvPrime.xy, material.map, 0 ).a;

								}

								// account for green component of alpha map
								if ( material.alphaMap != - 1 ) {

									let barycoord = triResult.barycoord;
									let a = ${n.getUvFromChannel}( ${t.attributes}[ i0 ], material.alphaMap );
									let b = ${n.getUvFromChannel}( ${t.attributes}[ i1 ], material.alphaMap );
									let c = ${n.getUvFromChannel}( ${t.attributes}[ i2 ], material.alphaMap );
									let uv = barycoord.x * a + barycoord.y * b + barycoord.z * c;
									let uvPrime = material.alphaMapTransform * vec3f( uv, 1 );

									opacity *= ${i}( uvPrime.xy, material.alphaMap, 0 ).g;

								}

								// Opacity is resolved at surface processing but skip full transparent hits here.
								if ( material.transparent != 0 && opacity <= 0.0 ) {

									continue;

								}

								if ( opacity < material.alphaTest ) {

									continue;

								}

							}

							// shadow rays pass the objects not visible to them, but a bsdf ray would hit this face
							if ( ${l} ) {

								if ( material.side == 0 || triResult.side == material.side ) {

									result.forwardBlocked = true;

								}

								continue;

							}

							result.didHit = true;
							result.dist = triResult.dist;
							result.normal = triResult.normal;
							result.side = triResult.side;
							result.barycoord = triResult.barycoord;
							result.indices = vec4u( i0, i1, i2, ti );

							didHit = true;

						}

					}

					return didHit;

				}
			`,transformShapeFn:X`
				fn transformRay( ray: ptr<function, ${q}>, objectIndex: u32 ) -> void {

					let toLocal = ${t.transforms}[ objectIndex ].inverseMatrixWorld;
					ray.origin = ( toLocal * vec4f( ray.origin, 1.0 ) ).xyz;
					ray.direction = ( toLocal * vec4f( ray.direction, 0.0 ) ).xyz;

					let len = length( ray.direction );
					ray.direction /= len;
					${o} = 1.0 / len;

					let object = ${t.transforms}[ objectIndex ];
					${a} = object.materialIndex;

					let material = ${t.materials}[ object.materialIndex ];
					if ( material.transparent == 1 ) {

						${s} = material.opacity * object.color.a;

					} else {

						${s} = 1.0;

					}

					${l} = ${c} && object.visibleToShadowRays == 0u;

				}
			`,transformResultFn:X`
				fn transformResult( hit: ptr<function, ${eu}>, objectIndex: u32 ) -> void {

					let toLocal = ${t.transforms}[ objectIndex ].inverseMatrixWorld;
					hit.normal = normalize( ( transpose( toLocal ) * vec4f( hit.normal, 0.0 ) ).xyz );
					hit.objectIndex = objectIndex;

				}
			`,resetShapeFn:X`
				fn resetRayScalar( objectIndex: u32 ) -> void {

					${o} = 1.0;
					${s} = 1.0;

				}
			`};n.raycastFirstHit=this.getShapecastFn({...u,name:`raycastFirstHit`,prefixFn:X`
				fn initFirstHitCull() -> void {

					${c} = false;

				}
			`}),n.raycastShadow=this.getShapecastFn({...u,name:`raycastShadow`,prefixFn:X`
				fn initShadowCull() -> void {

					${c} = true;

				}
			`})}update(){let{structs:e}=this,t=new j(new Uint8Array,e.material.getLength());this.storage.materials=F(t,e.material).toReadOnly().setName(`bvh_materials`),this.updateUvAttributesFromScene(),this.updateMaterialsMap(),super.update(),this.updateUvSampleFunction(),this.updateColorSampleFn(),this.updateMaterials(),this.bvhMap.clear(),this.useTransparencyRaycastFn()}updateMaterialsMap(){let{materials:e,materialsMap:t}=this;t.clear(),e.length=0,this.getRootObject().traverse(e=>{e.material&&(Array.isArray(e.material)?e.material.forEach(e=>e&&n(e)):n(e.material))}),e.sort((e,t)=>e.uuid<t.uuid?1:-1).forEach((e,n)=>{t.set(e,n)});function n(n){t.has(n)||(e.push(n),t.set(n,-1))}}updateMaterials(){this.updateMaterialsMap();let{materials:e,storage:t,structs:n,bvh:r}=this,{materialData:i,textures:a}=this.writeMaterialsBuffer(e),o=t.materials.proxyNode,s=t.transforms.proxyNode,c=i.length/n.material.getLength();o.value.count<c&&(o.value.dispose(),o.value=new j(i,n.material.getLength())),o.value.array.set(i),o.value.needsUpdate=!0,this._getTransformMap(r).forEach(e=>{this.writeMaterialData(e,e.slot,s.value.array.buffer)}),s.value.needsUpdate=!0,this.textures=a}writeMaterialsBuffer(e){function t(e){switch(e){case ue:return 0;case r:return 1;case s:return 2;default:return 0}}function n(e,n){if(n in e&&e[n]){let r=e[n],i=Xl(r);c.has(i)||(c.set(i,c.size),l.push(r));let a=c.get(i),o=r.channel&7,s=t(r.wrapS),u=t(r.wrapT);return(r.magFilter===1003)<<30|u<<28|s<<26|o<<23|a&8388607}return-1}function i(e,t,n){return t in e?e[t]:n}function a(e,t,n,r){let i=e[t]&&e[t].isTexture?e[t]:null;if(i){i.matrixAutoUpdate&&i.updateMatrix();let e=i.matrix.elements;for(let t=0;t<3;t++)n[r+4*t+0]=e[3*t+0],n[r+4*t+1]=e[3*t+1],n[r+4*t+2]=e[3*t+2],n[r+4*t+3]=0}return 12}let o=0,c=new Map,l=[],u=Math.max(e.length,2),d=new Float32Array(u*this.structs.material.getLength()),f=new Int32Array(d.buffer);for(let t=0,r=e.length;t<r;t++){let r=e[t];d[o++]=r.color.r,d[o++]=r.color.g,d[o++]=r.color.b,f[o++]=n(r,`map`),d[o++]=i(r,`metalness`,0),f[o++]=n(r,`metalnessMap`),d[o++]=i(r,`roughness`,0),f[o++]=n(r,`roughnessMap`),d[o++]=i(r,`ior`,1.5),d[o++]=i(r,`transmission`,0),f[o++]=n(r,`transmissionMap`),d[o++]=i(r,`emissiveIntensity`,0),`emissive`in r?(d[o++]=r.emissive.r,d[o++]=r.emissive.g,d[o++]=r.emissive.b):(d[o++]=0,d[o++]=0,d[o++]=0),f[o++]=n(r,`emissiveMap`),f[o++]=n(r,`normalMap`),o++,`normalScale`in r?(d[o++]=r.normalScale.x,d[o++]=r.normalScale.y):(d[o++]=1,d[o++]=1),d[o++]=i(r,`clearcoat`,0),f[o++]=n(r,`clearcoatMap`),f[o++]=n(r,`clearcoatNormalMap`),o++,`clearcoatNormalScale`in r?(d[o++]=r.clearcoatNormalScale.x,d[o++]=r.clearcoatNormalScale.y):(d[o++]=1,d[o++]=1),d[o++]=i(r,`clearcoatRoughness`,0),f[o++]=n(r,`clearcoatRoughnessMap`),f[o++]=n(r,`iridescenceMap`),f[o++]=n(r,`iridescenceThicknessMap`),d[o++]=i(r,`iridescence`,0),d[o++]=i(r,`iridescenceIOR`,1.3);let s=i(r,`iridescenceThicknessRange`,[100,400]);d[o++]=s[0],d[o++]=s[1],d[o++]=i(r,`diffuseRoughness`,0),d[o++]=i(r,`dispersion`,0),`specularColor`in r?(d[o++]=r.specularColor.r,d[o++]=r.specularColor.g,d[o++]=r.specularColor.b):(d[o++]=1,d[o++]=1,d[o++]=1),f[o++]=n(r,`specularColorMap`),d[o++]=i(r,`specularIntensity`,1),f[o++]=n(r,`specularIntensityMap`);let c=i(r,`thickness`,0)===0&&i(r,`attenuationDistance`,1/0)===1/0;if(f[o++]=Number(c),o++,`attenuationColor`in r?(d[o++]=r.attenuationColor.r,d[o++]=r.attenuationColor.g,d[o++]=r.attenuationColor.b):(d[o++]=1,d[o++]=1,d[o++]=1),d[o++]=i(r,`attenuationDistance`,1/0),f[o++]=n(r,`alphaMap`),f[o++]=Number(i(r,`castShadow`,!0)),d[o++]=r.opacity,d[o++]=r.alphaTest,!c&&r.transmission>0)d[o++]=0;else switch(r.side){case 0:d[o++]=1;break;case 1:d[o++]=-1;break;case 2:d[o++]=0}f[o++]=Number(i(r,`matte`,!1)),d[o++]=i(r,`sheen`,0),o++,`sheenColor`in r?(d[o++]=r.sheenColor.r,d[o++]=r.sheenColor.g,d[o++]=r.sheenColor.b):(d[o++]=0,d[o++]=0,d[o++]=0),f[o++]=n(r,`sheenColorMap`),d[o++]=i(r,`sheenRoughness`,0),f[o++]=n(r,`sheenRoughnessMap`),f[o++]=Number(r.vertexColors),f[o++]=Number(r.flatShading),f[o++]=Number(r.transparent),f[o++]=0,d[o++]=i(r,`anisotropy`,0),d[o++]=i(r,`anisotropyRotation`,0),f[o++]=n(r,`anisotropyMap`),o++,o++,o++,o+=a(r,`map`,d,o),o+=a(r,`metalnessMap`,d,o),o+=a(r,`roughnessMap`,d,o),o+=a(r,`transmissionMap`,d,o),o+=a(r,`emissiveMap`,d,o),o+=a(r,`normalMap`,d,o),o+=a(r,`clearcoatMap`,d,o),o+=a(r,`clearcoatNormalMap`,d,o),o+=a(r,`clearcoatRoughnessMap`,d,o),o+=a(r,`sheenColorMap`,d,o),o+=a(r,`sheenRoughnessMap`,d,o),o+=a(r,`iridescenceMap`,d,o),o+=a(r,`iridescenceThicknessMap`,d,o),o+=a(r,`specularColorMap`,d,o),o+=a(r,`specularIntensityMap`,d,o),o+=a(r,`alphaMap`,d,o),o+=a(r,`anisotropyMap`,d,o)}return{materialData:f,textures:l}}writeMaterialData(e,t,n){let{materialsMap:r}=this,{object:i,instanceId:a,root:o}=e,s=i.material;if(Array.isArray(s)){let{materialIndex:e}=i.geometry.groups[o];s=s[e]}let c=new Uint32Array(n),l=r.has(s)?r.get(s):-1;l===-1&&(c[t*$l.getLength()+32]=0),c[t*$l.getLength()+33]=l,i.isInstancedMesh&&i.instanceColor?(i.getColorAt(a,Ql),Ql.w=1):i.isBatchedMesh&&i._colorsTexture?i.getColorAt(a,Ql):Ql.setScalar(1);let u=new Float32Array(n);Ql.toArray(u,t*$l.getLength()+36)}writeTransformData(e,t,n,r){super.writeTransformData(e,t,n,r),this.writeMaterialData(e,n,r);let i=new Uint32Array(r);i[n*this.structs.transform.getLength()+34]=e.object.visibleToShadowRays===!1?0:1}getBVH(e,t,n){let{bvhMap:r}=this,i=super.getBVH(e,t,n);if(r.has(i)){let e=r.get(i);if(Object.assign(n,e.range),i!==e.bvh&&i instanceof _a){let t=i.mesh,n=e.bvh.mesh;n.matrixWorld.copy(t.matrixWorld).decompose(n.position,n.quaternion,n.scale),i.refit(),i.getBoundingBox(n.boundingBox),i.geometry.computeBoundingBox()}return e.bvh}if(i.indirect){let e=new x;e.attributes=i.geometry.attributes;let t;if(i.geometry.index)t=i.geometry.index.array.slice(n.start,n.count+n.start);else{let{start:e,count:r}=n;t=new Uint32Array(r);for(let r=0,i=n.count;r<i;r++)t[r]=e+r}e.index=new Te(t,1),n.start=0;let a;if(i instanceof _a){let t=i.mesh,n=new m(e);n.copy(t),n.matrixWorld.copy(t.matrixWorld).decompose(n.position,n.quaternion,n.scale),a=new _a(n,{strategy:2,targetLeafSize:5})}else a=new ta(e,{strategy:2,targetLeafSize:5});return r.set(i,{bvh:a,range:{...n}}),a}return i}dispose(){let{storage:e}=this;for(let t in e)e[t].value?.dispose()}},nu=class extends Oe{set texture(e){this._texNode.value=e}set layer(e){this._layerUniform.value=e}constructor(){super(),this.blending=0,this._texNode=rn(new c),this._layerUniform=I(0),this.colorNode=L(`
			fn atlasDebug( tex: texture_2d_array<f32>, coord: vec2f, layer: f32 ) -> vec4f {

				// flip y so texel origin shows at the top-left
				let dims = vec2f( textureDimensions( tex, 0 ).xy );
				let texel = vec2i( vec2f( coord.x, 1.0 - coord.y ) * dims );
				return textureLoad( tex, texel, i32( layer ), 0 );

			}
		`)(this._texNode,dn(un()),this._layerUniform)}},ru=class extends Oe{set texture(e){this._texNode.value=e}set minCount(e){this._minUniform.value=e}set maxCount(e){this._maxUniform.value=e}constructor(){super(),this.blending=0,this._texNode=rn(new O(1,1)),this._minUniform=I(0),this._maxUniform=I(1);let e=X`
			fn sampleDensity( tex: texture_2d<u32>, coord: vec2f, minCount: f32, maxCount: f32 ) -> vec4f {

				let dims = vec2f( textureDimensions( tex, 0 ) );
				let texel = vec2i( coord * dims );

				// the high bits hold the ray state flags rather than part of the count
				let samples = textureLoad( tex, texel, 0 ).r & ${Lc}u;

				// stretched across the recorded range rather than from zero, otherwise a converged
				// image with counts bunched near the max reads as uniformly hot
				let range = max( maxCount - minCount, 1.0 );
				let t = clamp( ( f32( samples ) - minCount ) / range, 0.0, 1.0 );

				return vec4f( ${Ao}( t ), 1.0 );

			}
		`;this.colorNode=e(this._texNode,dn(un()),this._minUniform,this._maxUniform)}};function iu(e,t){if(!e.index){let t=e.attributes.position.count,n=Array(t);for(let e=0;e<t;e++)n[e]=e;e.setIndex(n)}if(!e.attributes.normal&&t&&t.includes(`normal`)&&e.computeVertexNormals(),!e.attributes.uv&&t&&t.includes(`uv`)){let t=e.attributes.position.count;e.setAttribute(`uv`,new Te(new Float32Array(t*2),2,!1))}if(!e.attributes.uv2&&t&&t.includes(`uv2`)){let t=e.attributes.position.count;e.setAttribute(`uv2`,new Te(new Float32Array(t*2),2,!1))}if(!e.attributes.tangent&&t&&t.includes(`tangent`)){if(e.attributes.uv&&e.attributes.normal)e.computeTangents();else{let t=e.attributes.position.count;e.setAttribute(`tangent`,new Te(new Float32Array(t*4),4,!1))}}if(!e.attributes.color&&t&&t.includes(`color`)){let t=e.attributes.position.count,n=new Float32Array(t*4);n.fill(1),e.setAttribute(`color`,new Te(n,4))}}var au=class{init(){}getBsdfNode(){return X`

			fn bsdfSample( worldWo: vec3f, surf: SurfaceRecord ) -> ScatterRecord {

				var record: ScatterRecord;

				let wo = normalize( surf.normalInvBasis * worldWo );
				let wi = ${As}( wo, ${ns}( ${3} ) );
				record.color = surf.color * max( wi.z, 0.0 );
				record.pdf = max( wi.z, 0.0 ) / PI;
				record.direction = normalize( surf.normalBasis * wi );

				return record;

			}

		`}getBsdfEvalPdfNode(){return X`

			fn bsdfEvalPdf( worldWo: vec3f, worldWi: vec3f, surf: SurfaceRecord ) -> ScatterRecord {

				var record: ScatterRecord;
				record.direction = worldWi;

				let wo = normalize( surf.normalInvBasis * worldWo );
				let wi = normalize( surf.normalInvBasis * worldWi );
				record.color = surf.color * max( wi.z, 0.0 );
				record.pdf = max( wi.z, 0.0 ) / PI;

				return record;

			}

		`}getData(){return{bsdfSample:this.getBsdfNode(),bsdfEvalPdf:this.getBsdfEvalPdfNode()}}},ou=L(`

	fn eonDirectionalAlbedo( mu: f32, roughness: f32, A: f32 ) -> f32 {

		let muComp = 1.0 - mu;
		let gOverPi = muComp * (
			0.0571085289 + muComp * (
				0.491881867 + muComp * (
					- 0.332181442 + muComp * 0.0714429953
				)
			)
		);
		return A * ( 1.0 + roughness * gOverPi );

	}

`),su=L(`

	fn fonSingleScatter( NdotV: f32, NdotL: f32, VdotH: f32, roughness: f32, A: f32, rho: vec3f ) -> vec3f {

		let VdotL = 2.0 * VdotH * VdotH - 1.0;
		let s = VdotL - NdotV * NdotL;
		let sOverT = select( s, s / max( NdotV, NdotL ), s > 0.0 );

		return ( rho / PI ) * A * ( 1.0 + roughness * sOverT );

	}

`,[Z]);L(`

	fn fonBrdf( NdotV: f32, NdotL: f32, VdotH: f32, surf: SurfaceRecord ) -> vec3f {

		let roughness = surf.diffuseRoughness;
		if ( roughness < 1e-5 ) {

			return surf.color / PI;

		}

		let rho = saturate( surf.color );
		let A = 1.0 / ( 1.0 + ( 0.5 - 2.0 / ( 3.0 * PI ) ) * roughness );

		return fonSingleScatter( NdotV, NdotL, VdotH, roughness, A, rho );

	}

`,[Z,ss,su]);var cu=L(`

	fn eonBrdf( NdotV: f32, NdotL: f32, VdotH: f32, surf: SurfaceRecord ) -> vec3f {

		let roughness = surf.diffuseRoughness;
		if ( roughness < 1e-5 ) {

			return surf.color / PI;

		}

		let rho = saturate( surf.color );
		let A = 1.0 / ( 1.0 + ( 0.5 - 2.0 / ( 3.0 * PI ) ) * roughness );
		let singleScatter = fonSingleScatter( NdotV, NdotL, VdotH, roughness, A, rho );

		let averageDirectionalAlbedo = A * ( 1.0 + ( 2.0 / 3.0 - 28.0 / ( 15.0 * PI ) ) * roughness );
		let directionalAlbedoV = eonDirectionalAlbedo( NdotV, roughness, A );
		let directionalAlbedoL = eonDirectionalAlbedo( NdotL, roughness, A );

		let rhoMultiScatter = rho * rho * averageDirectionalAlbedo /
			max( vec3f( 1e-7 ), vec3f( 1.0 ) - rho * ( 1.0 - averageDirectionalAlbedo ) );
		let multiScatter = ( rhoMultiScatter / PI ) *
			max( 1e-7, 1.0 - directionalAlbedoV ) *
			max( 1e-7, 1.0 - directionalAlbedoL ) /
			max( 1e-7, 1.0 - averageDirectionalAlbedo );

		return singleScatter + multiScatter;

	}

`,[Z,ss,ou,su]),lu=L(`

	fn eonLtcCoeffs( mu: f32, roughness: f32 ) -> vec4f {

		let a = 1.0 + roughness * (
			0.303392 + ( - 0.518982 + 0.111709 * mu ) * mu +
			( - 0.276266 + 0.335918 * mu ) * roughness
		);
		let b = roughness * (
			- 1.16407 + 1.15859 * mu + ( 0.150815 - 0.150105 * mu ) * roughness
		) / ( mu * mu * mu - 1.43545 );
		let c = 1.0 + roughness * ( 0.20013 + ( - 0.506373 + 0.261777 * mu ) * mu );
		let d = roughness * (
			0.540852 + ( - 1.01625 + 0.475392 * mu ) * mu
		) / ( - 1.0743 + ( 0.0725628 + mu ) * mu );

		return vec4f( a, b, c, d );

	}

`),uu=L(`

	fn eonLtcBasis( wo: vec3f ) -> mat3x3f {

		let lenSqr = dot( wo.xy, wo.xy );
		let invLen = inverseSqrt( max( lenSqr, 1e-7 ) );
		let x = select(
			vec3f( 1.0, 0.0, 0.0 ),
			vec3f( wo.x, wo.y, 0.0 ) * invLen,
			lenSqr > 0.0,
		);
		let y = vec3f( - x.y, x.x, 0.0 );

		return mat3x3f( x, y, vec3f( 0.0, 0.0, 1.0 ) );

	}

`),du=L(`

	fn eonCltcPdf( wo: vec3f, wi: vec3f, roughness: f32 ) -> f32 {

		let toLtc = transpose( eonLtcBasis( wo ) );
		let wiLtc = toLtc * wi;
		let coeffs = eonLtcCoeffs( saturate( wo.z ), roughness );
		let a = coeffs.x;
		let b = coeffs.y;
		let c = coeffs.z;
		let d = coeffs.w;
		let detM = c * ( a - b * d );
		let wh = vec3f(
			c * ( wiLtc.x - b * wiLtc.z ),
			( a - b * d ) * wiLtc.y,
			- c * ( d * wiLtc.x - a * wiLtc.z ),
		);
		let lenSqr = max( dot( wh, wh ), 1e-7 );
		let vz = inverseSqrt( d * d + 1.0 );
		let s = 0.5 * ( 1.0 + vz );
		let jacobian = detM * detM / ( lenSqr * lenSqr );

		return jacobian * max( wh.z, 0.0 ) / ( PI * s );

	}

`,[Z,lu,uu]),fu=L(`

	fn eonCltcDirection( wo: vec3f, roughness: f32, uv: vec2f ) -> vec3f {

		let coeffs = eonLtcCoeffs( saturate( wo.z ), roughness );
		let a = coeffs.x;
		let b = coeffs.y;
		let c = coeffs.z;
		let d = coeffs.w;
		let radius = sqrt( uv.x );
		let phi = 2.0 * PI * uv.y;
		let y = radius * sin( phi );
		let vz = inverseSqrt( d * d + 1.0 );
		let s = 0.5 * ( 1.0 + vz );
		let x = - mix( sqrt( max( 1.0 - y * y, 0.0 ) ), radius * cos( phi ), s );
		let wh = vec3f( x, y, sqrt( max( 1.0 - x * x - y * y, 0.0 ) ) );
		let wiUnnormalized = vec3f(
			a * wh.x + b * wh.z,
			c * wh.y,
			d * wh.x + wh.z,
		);
		let wi = normalize( eonLtcBasis( wo ) * wiUnnormalized );

		return wi;

	}

`,[Z,lu,uu]),pu=L(`

	fn eonUniformHemisphereSample( uv: vec2f ) -> vec3f {

		let sinTheta = sqrt( max( 1.0 - uv.x * uv.x, 0.0 ) );
		let phi = 2.0 * PI * uv.y;
		return vec3f( sinTheta * cos( phi ), sinTheta * sin( phi ), uv.x );

	}

`,[Z]),mu=L(`

	fn eonUniformProbability( wo: vec3f, roughness: f32 ) -> f32 {

		let mu = saturate( wo.z );
		return clamp( pow( roughness, 0.1 ), 0.0, 1.0 ) * (
			0.162925 + ( - 0.372058 + ( 0.538233 - 0.290822 * mu ) * mu ) * mu
		);

	}

`),hu=L(`

	fn eonDirection( wo: vec3f, roughness: f32, uv: vec2f ) -> vec3f {

		let uniformProbability = eonUniformProbability( wo, roughness );
		if ( uv.x <= uniformProbability && uniformProbability > 0.0 ) {

			return eonUniformHemisphereSample( vec2f( uv.x / uniformProbability, uv.y ) );

		}

		let cltcProbability = 1.0 - uniformProbability;
		let cltcUv = vec2f(
			( uv.x - uniformProbability ) / max( cltcProbability, 1e-7 ),
			uv.y,
		);
		return eonCltcDirection( wo, roughness, cltcUv );

	}

`,[fu,pu,mu]),gu=L(`

	fn eonPdf( wo: vec3f, wi: vec3f, roughness: f32 ) -> f32 {

		// The EON proposal is defined over the positive hemisphere.
		if ( wo.z <= 0.0 || wi.z <= 0.0 ) {

			return 0.0;

		}

		let uniformProbability = eonUniformProbability( wo, roughness );
		let cltcProbability = 1.0 - uniformProbability;
		let uniformPdf = 1.0 / ( 2.0 * PI );

		return uniformProbability * uniformPdf +
			cltcProbability * eonCltcPdf( wo, wi, roughness );

	}

`,[Z,du,mu]),_u=X`

	fn velvetD( cosThetaH: f32, roughness: f32 ) -> f32 {

		var alpha = max( roughness, 0.07 );
		alpha = alpha * alpha;

		let invAlpha = 1.0 / alpha;
		let sqrCosThetaH = cosThetaH * cosThetaH;
		let sinThetaH = max( 1.0 - sqrCosThetaH, 0.001 );

		return ( 2.0 + invAlpha ) * pow( sinThetaH, 0.5 * invAlpha ) / ( 2.0 * PI );

	}

`,vu=X`

	fn velvetParamsInterpolate( i: i32, oneMinusAlphaSquared: f32 ) -> f32 {

		let p0 = array<f32, 5>( 25.3245, 3.32435, 0.16801, - 1.27393, - 4.85967 );
		let p1 = array<f32, 5>( 21.5473, 3.82987, 0.19823, - 1.97760, - 4.32054 );

		return mix( p1[ i ], p0[ i ], oneMinusAlphaSquared );

	}

`,yu=X`

	fn velvetL( x: f32, alpha: f32 ) -> f32 {

		let oneMinusAlpha = 1.0 - alpha;
		let oneMinusAlphaSquared = oneMinusAlpha * oneMinusAlpha;

		let a = ${vu}( 0, oneMinusAlphaSquared );
		let b = ${vu}( 1, oneMinusAlphaSquared );
		let c = ${vu}( 2, oneMinusAlphaSquared );
		let d = ${vu}( 3, oneMinusAlphaSquared );
		let e = ${vu}( 4, oneMinusAlphaSquared );

		return a / ( 1.0 + b * pow( abs( x ), c ) ) + d * x + e;

	}

`,bu=X`

	fn velvetLambda( cosTheta: f32, alpha: f32 ) -> f32 {

		if ( abs( cosTheta ) < 0.5 ) {

			return exp( ${yu}( cosTheta, alpha ) );

		} else {

			return exp( 2.0 * ${yu}( 0.5, alpha ) - ${yu}( 1.0 - cosTheta, alpha ) );

		}

	}

`,xu=X`

	fn velvetG( cosThetaO: f32, cosThetaI: f32, roughness: f32 ) -> f32 {

		var alpha = max( roughness, 0.07 );
		alpha = alpha * alpha;

		return 1.0 / ( 1.0 + ${bu}( cosThetaO, alpha ) + ${bu}( cosThetaI, alpha ) );

	}

`,Su=X`

	fn directionalAlbedoSheen( cosThetaIn: f32, alpha: f32 ) -> f32 {

		let cosTheta = saturate( cosThetaIn );
		let c = 1.0 - cosTheta;
		let c3 = c * c * c;

		return 0.65584461 * c3 + 1.0 / ( 4.16526551 + exp( -7.97291361 * sqrt( alpha ) + 6.33516894 ) );

	}

`,Cu=X`

	fn sheenAlbedoScaling( wo: vec3f, wi: vec3f, surf: ${ss} ) -> f32 {

		var alpha = max( surf.sheenRoughness, 0.07 );
		alpha = alpha * alpha;

		let maxSheenColor = max( max( surf.sheenColor.r, surf.sheenColor.g ), surf.sheenColor.b );

		let eWo = ${Su}( clamp( wo.z, 0.001, 1.0 ), alpha );
		let eWi = ${Su}( clamp( wi.z, 0.001, 1.0 ), alpha );

		return min( 1.0 - maxSheenColor * eWo, 1.0 - maxSheenColor * eWi );

	}

`,wu=X`

	fn sheenColor( wo: vec3f, wi: vec3f, wh: vec3f, surf: ${ss} ) -> vec3f {

		let cosThetaO = clamp( wo.z, 0.001, 1.0 );
		let cosThetaI = clamp( wi.z, 0.001, 1.0 );
		let cosThetaH = wh.z;

		let D = ${_u}( cosThetaH, surf.sheenRoughness );
		let G = ${xu}( cosThetaO, cosThetaI, surf.sheenRoughness );

		// See equation (1) in http://www.aconty.com/pdf/s2017_pbs_imageworks_sheen.pdf
		var color = surf.sheenColor;
		color *= D * G / ( 4.0 * abs( cosThetaO * cosThetaI ) );

		return color;

	}

`,Tu=32,Eu=16,Du=class extends Ne{constructor(){super(Tu,Tu,31),this.type=Se,this.format=we,this.minFilter=t,this.magFilter=t,this.dielectricLayerCount=10,this.transmissiveLayerCount=10,this.minIoR=1,this.maxIoR=2.5,this.sampleConductorFn=Y(`_sampleConductorFn`,this),this.sampleDielectricFn=Y(`_sampleDielectricFn`,this),this.sampleTransmissiveFn=Y(`_sampleTransmissiveFn`,this)}generate(e){let{dielectricLayerCount:t,transmissiveLayerCount:n,minIoR:r,maxIoR:i}=this,a={outputTarget:nn(this).toWriteOnly(),globalId:Zt,eta:I(1),layer:I(0,`uint`),includeFresnel:I(0),includeRefraction:I(0)},o=[Tu/Eu,Tu/Eu,1],s=new No(_c(a.outputTarget)(a),{workgroupSize:[Eu,Eu,1]});a.layer.value=0,a.eta.value=1,a.includeFresnel.value=0,a.includeRefraction.value=0,e.compute(s.kernel,o);for(let n=0;n<t;n++)a.layer.value++,a.eta.value=1/ne.mapLinear(n,0,t-1,r,i),a.includeFresnel.value=1,e.compute(s.kernel,o);a.includeFresnel.value=1,a.includeRefraction.value=1;for(let c=0;c<n;c++){let l=ne.mapLinear(c,0,n-1,r,i);a.layer.value=1+t+c,a.eta.value=1/l,e.compute(s.kernel,o),a.layer.value=1+t+n+c,a.eta.value=l,e.compute(s.kernel,o)}s.dispose();let c=X`
			fn mapLinearClamped( v: f32, a0: f32, a1: f32, b0: f32, b1: f32 ) -> f32 {

				let mapped = saturate( ( v - a0 ) / ( a1 - a0 ) );
				return mix( b0, b1, mapped );

			}
		`,l=an(this).setName(`turquinTexture`),u=en(this).setName(`turquinSampler`),d=1/(1+t+2*n);this._sampleConductorFn=X`
			fn sampleConductor( cosTheta0: f32, roughness: f32 ) -> f32 {

				let layer = 0.5;
				let uvw = vec3f( cosTheta0, roughness, layer * ${d} );
				return textureSampleLevel( ${l}, ${u}, uvw, 0 ).r;

			}
		`,this._sampleDielectricFn=X`
			fn sampleDielectric( cosTheta0: f32, roughness: f32, ior: f32 ) -> f32 {

				let blockStart = 1.0;
				let layer = ${c}(
					ior,
					f32( ${r} ), f32( ${i} ),
					0.5, f32( ${t} ) - 0.5,
				) + blockStart;

				let uvw = vec3f( cosTheta0, roughness, layer * ${d} );
				return textureSampleLevel( ${l}, ${u}, uvw, 0 ).r;

			}
		`;let f=1+t,p=1+t+n;this._sampleTransmissiveFn=X`
			fn sampleTransmissive( cosTheta0: f32, roughness: f32, ior: f32, entering: bool ) -> f32 {

				let blockStart = select(
					f32( ${p} ),
					f32( ${f} ),
					entering
				);
				let layer = ${c}(
					ior,
					f32( ${r} ), f32( ${i} ),
					0.5, f32( ${n} ) - 0.5,
				) + blockStart;

				let uvw = vec3f( cosTheta0, roughness, layer * ${d} );
				return textureSampleLevel( ${l}, ${u}, uvw, 0 ).r;

			}
		`}},Ou=Xt(1.5),ku=Xt(1e6),Au=class extends au{constructor(e={}){super();let{specularBrdf:t=ic,specularBtdf:n=oc,diffuseBrdf:r=cu,fresnelMix:i=dc,conductorFresnel:a=hc,fresnelCoat:o=gc,iridescentFresnel:s=pc}=e;this.turquinTexture=new Du,this.specularBrdf=t,this.specularBtdf=n,this.diffuseBrdf=r,this.fresnelMix=i,this.conductorFresnel=a,this.fresnelCoat=o,this.iridescentFresnel=s,this.transmissionFresnel=mc(s)}init(e){this.turquinTexture.generate(e)}getBsdfNode(){this._bsdfEvalFunc=X`

			// The material is organized as one scoped block per lobe in cascade order - clearcoat,
			// sheen, transmission, specular, diffuse - each accumulating into a shared result and
			// guarding its own hemisphere.
			// TODO: energy only cascades downward through front faces, so the layers are always traversed
			// outside-in and cannot reflect energy back into the glass from below.
			fn bsdfEval( ctx: ${fs}, surf: ${ss} ) -> vec3f {

				let NdotV = ctx.V.z;
				let NdotL = ctx.L.z;

				// Each lobe contributes into "result" within its own scope, evaluated in cascade.
				// "attenuation" carries the fraction of energy each layer passes through to
				// the layers beneath it. Every lobe guards its own hemisphere.
				var result = vec3f( 0.0 );
				var attenuation = vec3f( 1.0 );

				// clearcoat
				if ( NdotL > 0.0 && surf.clearcoat > 0.0 ) {

					// the clearcoat evaluates in its own frame
					let toClearcoatMat = surf.clearcoatInvBasis * surf.normalBasis;
					let Vc = normalize( toClearcoatMat * ctx.V );
					let Lc = normalize( toClearcoatMat * ctx.L );
					let Hc = normalize( toClearcoatMat * ctx.H );
					let NdotVc = Vc.z;

					let clearcoatAlpha = surf.clearcoatRoughness * surf.clearcoatRoughness;

					// reuse the same pattern for energy conservation used in the dielectric layer
					let clearcoatEnergySS = max( ${this.turquinTexture.sampleConductorFn}( NdotVc, surf.clearcoatRoughness ), 1e-5 );
					let clearcoatBoost = 1.0 + ${hs}( 1.5 ) * ( 1.0 - clearcoatEnergySS ) / clearcoatEnergySS;

					let clearcoatSpecular = ${this.specularBrdf}( Vc, Lc, Hc, vec2( clearcoatAlpha ) ) * clearcoatBoost;
					let clearcoatFresnel = ${ys}( abs( dot( Vc, Hc ) ), ${hs}( 1.5 ) );

					// retrieve specular energy reflected by this layer
					let clearcoatFresnelEnergySS = ${this.turquinTexture.sampleDielectricFn}( NdotVc, surf.clearcoatRoughness, 1.5 ) * clearcoatBoost;

					result += surf.clearcoat * clearcoatFresnel * clearcoatSpecular;
					attenuation *= 1.0 - surf.clearcoat * clearcoatFresnelEnergySS;

				}

				// sheen
				if ( NdotL > 0.0 && surf.sheen > 0.0 ) {

					result += attenuation * surf.sheen * ${wu}( ctx.V, ctx.L, ctx.H, surf );
					attenuation *= mix( 1.0, ${Cu}( ctx.V, ctx.L, surf ), surf.sheen );

				}

				// transmission
				// handles specular reflection and transmission
				if ( surf.transmission > 0.0 ) {

					let matchedIor = ${ac}( surf.eta );

					// anisotropic roughness along tangent, bitangent
					let alphaB = surf.roughness * surf.roughness;
					let alphaT = mix( alphaB, 1.0, surf.anisotropy * surf.anisotropy );
					let alpha = vec2( alphaT, alphaB );

					// multiscatter compensation
					var glassBoost = 0.0;
					if ( matchedIor ) {

						glassBoost = 1.0;

					} else if ( surf.thinWall ) {

						// thin wall halves are reflection-shaped so each is compensated with the conductor albedo at its own roughness.
						glassBoost = 1.0 / max( ${this.turquinTexture.sampleConductorFn}( NdotV, surf.roughness ), 1e-5 );

					} else {

						// volumetric bsdf is scaled by its total reflected + refracted energy
						glassBoost = 1.0 / max( ${this.turquinTexture.sampleTransmissiveFn}( NdotV, surf.roughness, surf.ior, surf.frontFace ), 1e-5 );

					}

					let fresnelCosine = select( ctx.VdotH, NdotV, surf.thinWall );
					let fresnel = ${this.transmissionFresnel}( fresnelCosine, surf );

					if ( NdotL < 0.0 ) {

						var refraction = vec3f( 0.0 );
						if ( surf.thinWall && ! matchedIor ) {

							// evaluate the flipped reflection, compensated at the remapped roughness
							let wiMirror = vec3f( ctx.L.xy, - ctx.L.z );
							let thinWallAlpha = vec2f( ${sc}( alphaB, surf.ior ) );
							let thinWallEnergySS = max( ${this.turquinTexture.sampleConductorFn}( NdotV, sqrt( thinWallAlpha.x ) ), 1e-5 );
							refraction = fresnel.transmittance * ${this.specularBrdf}( ctx.V, wiMirror, ctx.H, thinWallAlpha ) / thinWallEnergySS;

						} else if ( ! matchedIor ) {

							// The default BTDF contains the plain dielectric Fresnel complement. Replace it
							// with the colored thin-film-aware coefficient shared by sampling and the PDF.
							let dielectricTransmittance = 1.0 - ${Cs}( abs( ctx.VdotH ), surf.eta );
							if ( dielectricTransmittance > EPSILON ) {

								refraction = ${this.specularBtdf}( ctx.V, ctx.L, ctx.H, alpha, surf.eta ) *
									fresnel.transmittance / dielectricTransmittance * glassBoost;

							}

						}

						// the refracted half is not attenuated by the layers above
						result += ( 1.0 - surf.metalness ) * surf.transmission * refraction * surf.color;

					} else {

						// the raw single scatter lobe scaled by the glass compensation boost rather
						// than the opaque dielectric boost
						let specular = ${this.specularBrdf}( ctx.V, ctx.L, ctx.H, alpha );
						let dielectricSpecular = specular * glassBoost;

						let reflection = dielectricSpecular * fresnel.reflectance;

						result += attenuation * ( 1.0 - surf.metalness ) * surf.transmission * reflection;

					}

				}

				// specular
				// metallic + dielectric + iridescence
				if ( NdotL > 0.0 ) {

					// anisotropic roughness along tangent, bitangent
					let alphaB = surf.roughness * surf.roughness;
					let alphaT = mix( alphaB, 1.0, surf.anisotropy * surf.anisotropy );
					let alpha = vec2( alphaT, alphaB );

					// Sample the single scatter energy for specular at the given roughness
					let energySS = max( ${this.turquinTexture.sampleConductorFn}( NdotV, surf.roughness ), 1e-5 );
					let specular = ${this.specularBrdf}( ctx.V, ctx.L, ctx.H, alpha );

					// metallic with the multiscatter comp
					let metallicBoost = 1.0 + surf.color * ( 1.0 - energySS ) / energySS;
					let metallicSpecular = specular * metallicBoost;
					var metallicReflectance = ${this.conductorFresnel}( ctx.VdotH, surf.color, vec3f( 1.0 ) );

					// dielectric with the multiscatter comp
					let dielectricBoost = 1.0 + surf.f0 * ( 1.0 - energySS ) / energySS;
					let dielectricSpecular = specular * dielectricBoost;

					// KHR_materials_specular: fold the specular color and intensity into the dielectric f0.
					// Schlick is used on both hit sides, matching Cycles - the opaque specular carries no
					// TIR so the energy removed from the base always matches the energy paid back
					let dielectricF0 = min( surf.f0 * surf.specularColor, vec3f( 1.0 ) );
					let dielectricFr = ${bs}( ctx.VdotH, dielectricF0, vec3f( 1.0 ) );
					var dielectricReflectance = surf.specularIntensity * dielectricFr;

					// iridescence
					var filmFresnelMax = 0.0;
					if ( surf.iridescence > 0.0 ) {

						// the media on either side of the film - air outside and the volume interior
						// as the base on front faces, swapped on back faces so TIR can take effect
						let outsideIor = select( surf.ior, 1.0, surf.frontFace );
						let filmBaseIor = select( 1.0, surf.ior, surf.frontFace );

						let metallicFilmFresnel = ${this.iridescentFresnel}( ctx.VdotH, surf.color, surf.iridescenceIor, outsideIor, surf.iridescenceThickness );
						metallicReflectance = mix( metallicReflectance, metallicFilmFresnel, surf.iridescence );

						let dielectricFilmFresnel = ${this.iridescentFresnel}( ctx.VdotH, vec3f( ${hs}( filmBaseIor ) ), surf.iridescenceIor, outsideIor, surf.iridescenceThickness );
						dielectricReflectance = mix( dielectricReflectance, dielectricFilmFresnel, surf.iridescence );
						filmFresnelMax = max( max( dielectricFilmFresnel.r, dielectricFilmFresnel.g ), dielectricFilmFresnel.b );

					}

					let metallic = metallicSpecular * metallicReflectance;
					let dielectric = dielectricSpecular * dielectricReflectance;

					// the energy the specular interface takes from the layers below
					let fresnelEnergySS = ${this.turquinTexture.sampleDielectricFn}( NdotV, surf.roughness, surf.ior ) * dielectricBoost;

					result += attenuation * mix( ( 1.0 - surf.transmission ) * dielectric, metallic, surf.metalness );
					attenuation *= ( 1.0 - surf.metalness ) * mix( 1.0 - fresnelEnergySS, 1.0 - filmFresnelMax, surf.iridescence );

				}

				// diffuse
				if ( NdotL > 0.0 ) {

					// the dielectric base mixes diffuse with transmission - the transmissive half
					// is carried by the glass lobe above
					let diffuseVdotH = sqrt( saturate( 0.5 * ( 1.0 + dot( ctx.V, ctx.L ) ) ) );
					let reflection = ${this.diffuseBrdf}( NdotV, NdotL, diffuseVdotH, surf );
					let diffuse = ( 1.0 - surf.transmission ) * reflection;

					result += attenuation * diffuse;

				}

				return result;

			}

		`;let e=this.getBsdfEvalPdfNode();return X`

			fn bsdfSample( worldWo: vec3f, surf: ${ss} ) -> ${is} {

				var result: ${is};
				result.color = vec3f( 0.0 );
				result.isTransmissive = false;
				result.direction = vec3f( 0.0 );
				result.pdf = 0.0;

				let wo = normalize( surf.normalInvBasis * worldWo );
				let woClearcoat = normalize( surf.clearcoatInvBasis * worldWo );

				// TODO: mirror bsdfEval's layer structure - the glass layer should own both its
				// reflection and refraction halves
				// lobe selection weights and cumulative bounds in cascade order:
				// clearcoat, specular, transmission, diffuse
				let weights = ${js}( wo, wo, woClearcoat, vec3( 0, 0, 1 ), ${Ou}, surf );
				let cdfClearcoat = weights.clearcoat;
				let cdfSpecular = cdfClearcoat + weights.specular;
				let cdfTransmission = cdfSpecular + weights.transmission;
				let cdfTotal = cdfTransmission + weights.diffuse;

				// random samples for lobes
				let lobeSample = ${ts}( ${2} ) * cdfTotal;
				let directionUV = ${ns}( ${3} );

				// output
				var wi: vec3f;
				var wh: vec3f;

				// TODO: see if we can clean up these flags so they're not necessary
				var isTransmissionLobe = false;
				var isDeltaTransmission = false;
				var deltaTransmittance = vec3f( 1.0 );
				var deltaProbability = 1.0;
				var isDead = false;

				if ( lobeSample <= cdfClearcoat ) {

					// clearcoat
					let clearcoatAlpha = surf.clearcoatRoughness * surf.clearcoatRoughness;
					let whCoat = ${Js}( woClearcoat, vec2( clearcoatAlpha ), directionUV );
					let wiCoat = - normalize( reflect( woClearcoat, whCoat ) );

					wi = normalize( surf.normalInvBasis * surf.clearcoatBasis * wiCoat );
					wh = normalize( surf.normalInvBasis * surf.clearcoatBasis * whCoat );

					// reflected rays must leave above the geometry surface - flip rays that land
					// below it due to the shading normal. Rays below the shading hemisphere are
					// left as is since their loss is refunded by the energy compensation tables
					let faceNormal = normalize( surf.normalInvBasis * surf.faceNormal );
					let geomDotDir = dot( wi, faceNormal );
					if ( wi.z > 0.0 && geomDotDir < 0.0 ) {

						wi = normalize( wi - 2.0 * geomDotDir * faceNormal );

					}

				} else if ( lobeSample <= cdfSpecular ) {

					// specular
					// anisotropic roughness along tangent, bitangent
					let alphaB = surf.roughness * surf.roughness;
					let alphaT = mix( alphaB, 1.0, surf.anisotropy * surf.anisotropy );
					let alpha = vec2( alphaT, alphaB );

					wh = ${Js}( wo, alpha, directionUV );
					wi = - normalize( reflect( wo, wh ) );

					// reflected rays must leave above the geometry surface - flip rays that land
					// below it due to the shading normal. Rays below the shading hemisphere are
					// left as is since their loss is refunded by the energy compensation tables
					let faceNormal = normalize( surf.normalInvBasis * surf.faceNormal );
					let geomDotDir = dot( wi, faceNormal );
					if ( wi.z > 0.0 && geomDotDir < 0.0 ) {

						wi = normalize( wi - 2.0 * geomDotDir * faceNormal );

					}

				} else if ( lobeSample <= cdfTransmission ) {

					// transmission
					isTransmissionLobe = true;

					// anisotropic roughness along tangent, bitangent
					let alphaB = surf.roughness * surf.roughness;
					let alphaT = mix( alphaB, 1.0, surf.anisotropy * surf.anisotropy );
					let alpha = vec2( alphaT, alphaB );

					// sample the half vector first and select reflection or refraction by the
					// facet fresnel, matching Cycles - total internal reflection drives the
					// fresnel to 1 so TIR facets always reflect with a matching pdf
					wh = ${Js}( wo, alpha, directionUV );

					let fresnelCosine = select( dot( wo, wh ), wo.z, surf.thinWall );
					let fresnel = ${this.transmissionFresnel}( fresnelCosine, surf );

					let fresnelSample = ( lobeSample - cdfSpecular ) / ( cdfTransmission - cdfSpecular );
					let doReflect = fresnelSample < fresnel.reflectProbability;
					if ( doReflect ) {

						wi = - normalize( reflect( wo, wh ) );

					} else if ( ${ac}( surf.eta ) ) {

						// With no IOR boundary, rough transmission collapses to straight-through
						// delta transmission independent of the sampled microfacet.
						wi = - wo;
						wh = vec3f( 0.0, 0.0, 1.0 );
						isDeltaTransmission = true;
						deltaTransmittance = fresnel.transmittance;
						deltaProbability = 1.0 - fresnel.reflectProbability;

					} else if ( surf.thinWall ) {

						// model the double refraction as a single reflection flipped through the
						// surface at the remapped thin wall roughness
						let thinWallAlpha = vec2f( ${sc}( alphaB, surf.ior ) );
						wh = ${Js}( wo, thinWallAlpha, directionUV );
						wi = - normalize( reflect( wo, wh ) );
						wi = vec3f( wi.xy, - wi.z );

					} else {

						wi = refract( - wo, wh, surf.eta );

					}

					// the facet choice must agree with the resulting hemisphere - reflection above,
					// transmission below. Mismatched samples are dropped since their loss is
					// refunded by the energy compensation tables
					isDead = doReflect != ( wi.z > 0.0 );

				} else if ( lobeSample <= cdfTotal ) {

					// diffuse
					// all diffuse BRDF variants share the EON sampling proposal
					wi = ${hu}( wo, surf.diffuseRoughness, directionUV );
					wh = normalize( wi + wo );

					// reflected rays must leave above the geometry surface - flip rays that land
					// below it due to the shading normal. Rays below the shading hemisphere are
					// left as is since their loss is refunded by the energy compensation tables
					let faceNormal = normalize( surf.normalInvBasis * surf.faceNormal );
					let geomDotDir = dot( wi, faceNormal );
					if ( wi.z > 0.0 && geomDotDir < 0.0 ) {

						wi = normalize( wi - 2.0 * geomDotDir * faceNormal );

					}

				}

				let worldWi = normalize( surf.normalBasis * wi );
				if ( isDeltaTransmission ) {

					// Cycles represents a singular event with a large matching BSDF and PDF. Their
					// ratio preserves throughput while forward MIS correctly gives the event full weight.
					result.color = ( 1.0 - surf.metalness ) * surf.transmission * surf.color *
						deltaTransmittance * ${ku};
					result.direction = worldWi;
					result.pdf = weights.transmission * deltaProbability * ${ku};
					result.isTransmissive = dot( worldWi, surf.faceNormal ) < 0.0;

				} else {

					// evaluate the shared eval / pdf function for the sampled direction so the sample
					// and light-sampling paths can never disagree on color or pdf
					result = ${e}( worldWo, worldWi, surf );

				}

				// mismatched glass facets and reflection lobe samples that land below the
				// hemisphere carry no energy - their loss is refunded by the compensation tables
				let invalid = isDead || ( ! isTransmissionLobe && wi.z <= 0.0 );
				result.color *= select( 1.0, 0.0, invalid );

				return result;

			}

		`}getBsdfEvalPdfNode(){if(this._bsdfEvalPdfNode)return this._bsdfEvalPdfNode;this._bsdfEvalFunc||this.getBsdfNode();let e=this._bsdfEvalFunc;return this._bsdfEvalPdfNode=X`

			fn bsdfEvalPdf( worldWo: vec3f, worldWi: vec3f, surf: ${ss} ) -> ${is} {

				var result: ${is};
				result.color = vec3f( 0.0 );
				result.isTransmissive = false;
				result.direction = worldWi;
				result.pdf = 0.0;

				let wo = normalize( surf.normalInvBasis * worldWo );
				let wi = normalize( surf.normalInvBasis * worldWi );
				let woClearcoat = normalize( surf.clearcoatInvBasis * worldWo );

				let isTransmission = wi.z < 0.0;
				if ( isTransmission && ${ac}( surf.eta ) ) {

					// Delta transmission has no finite solid-angle BSDF or PDF. It is handled
					// explicitly by bsdfSample, matching PBRT-v4's eta == 1 path.
					return result;

				}

				// reconstruct the half vector bsdfSample would have used for this direction -
				// reflections use the standard half vector while refractions use the generalized
				// form scaled by the ior ratio, oriented into the upper hemisphere
				var wh: vec3f;
				if ( ! isTransmission ) {

					wh = normalize( wo + wi );

				} else if ( surf.thinWall ) {

					// thin wall transmission is modeled as a reflection flipped through the surface
					wh = normalize( wo + vec3f( wi.xy, - wi.z ) );

				} else {

					wh = normalize( wi + wo * surf.eta );
					wh *= sign( wh.z );

				}

				let weights = ${js}( wo, wo, woClearcoat, vec3( 0, 0, 1 ), ${Ou}, surf );

				// TODO: mirror bsdfEval's layer structure - the glass layer should own both its
				// reflection and refraction halves
				// pdf mixture - every lobe that can produce the direction contributes its share,
				// in the same cascade order and with the same terms as bsdfSample

				// clearcoat
				if ( weights.clearcoat > 0.0 ) {

					// the clearcoat lobe evaluates in its own frame
					let toClearcoatMat = surf.clearcoatInvBasis * surf.normalBasis;
					let wiClearcoat = normalize( toClearcoatMat * wi );
					if ( wiClearcoat.z > 0.0 ) {

						let whClearcoat = normalize( toClearcoatMat * wh );
						let clearcoatAlpha = surf.clearcoatRoughness * surf.clearcoatRoughness;
						result.pdf += weights.clearcoat * ${Qs}( woClearcoat, whClearcoat, vec2( clearcoatAlpha ) );

					}

				}

				// specular
				if ( weights.specular > 0.0 && wi.z > 0.0 ) {

					// anisotropic roughness along tangent, bitangent
					let alphaB = surf.roughness * surf.roughness;
					let alphaT = mix( alphaB, 1.0, surf.anisotropy * surf.anisotropy );
					let alpha = vec2( alphaT, alphaB );

					result.pdf += weights.specular * ${Qs}( wo, wh, alpha );

				}

				// transmission
				if ( weights.transmission > 0.0 ) {

					// anisotropic roughness along tangent, bitangent
					let alphaB = surf.roughness * surf.roughness;
					let alphaT = mix( alphaB, 1.0, surf.anisotropy * surf.anisotropy );
					let alpha = vec2( alphaT, alphaB );

					// the glass lobe selects reflection or refraction by the facet fresnel so
					// each side carries the corresponding share of the transmission pdf
					let fresnelCosine = select( dot( wo, wh ), wo.z, surf.thinWall );
					let fresnel = ${this.transmissionFresnel}( fresnelCosine, surf );

					if ( wi.z > 0.0 ) {

						result.pdf += weights.transmission * fresnel.reflectProbability * ${Qs}( wo, wh, alpha );

					} else if ( surf.thinWall ) {

						// the flipped reflection shares the reflection pdf at the remapped roughness
						let thinWallAlpha = vec2f( ${sc}( alphaB, surf.ior ) );
						result.pdf += weights.transmission * ( 1.0 - fresnel.reflectProbability ) * ${Qs}( wo, wh, thinWallAlpha );

					} else {

						result.pdf += weights.transmission * ( 1.0 - fresnel.reflectProbability ) * ${$s}( wo, wi, wh, alpha, surf.eta );

					}

				}

				// diffuse
				if ( weights.diffuse > 0.0 ) {

					result.pdf += weights.diffuse * ${gu}( wo, wi, surf.diffuseRoughness );

				}

				//

				// construct the scatter context
				var ctx: ${fs};
				ctx.V = wo;
				ctx.L = wi;
				ctx.H = wh;
				ctx.VdotH = saturate( dot( wo, wh ) );

				// evaluate the bsdf for the direction
				result.color = ${e}( ctx, surf ) * abs( wi.z );

				// a direction crossing below the surface enters or leaves the volume
				result.isTransmissive = isTransmission && dot( worldWi, surf.faceNormal ) < 0.0;

				return result;

			}

		`,this._bsdfEvalPdfNode}},ju=new E,Mu=new be,Nu=class{constructor(e,n){this.key=n,this.renderer=e,this.texture=null,this.hash=null;let r=new c(new Uint8Array([255,255,255,255]),1,1);r.minFilter=t,r.magFilter=t,this.colorTex=r}dispose(){this.colorTex.dispose(),this.texture?.dispose()}setFromScene(e){let{renderer:t,key:n,colorTex:r}=this,i=e[n],a=``;if(i)i.isColor?(r.image.data[0]=i.r*255,r.image.data[1]=i.g*255,r.image.data[2]=i.b*255,r.image.data[3]=255,i=r,a=r.image.data.join(),r.needsUpdate=a!==this.hash):i.isCubeTexture?(a=null,i=new Jl(t).generate(i)):(i=i.clone(),a=i.uuid+`_`+i.version);else{let e=t.getClearAlpha();t.getClearColor(Mu),r.image.data[0]=Mu.r*255,r.image.data[1]=Mu.g*255,r.image.data[2]=Mu.b*255,r.image.data[3]=e*255,i=r,a=r.image.data.join(),r.needsUpdate=a!==this.hash}if(a===null)return this.texture?.dispose(),this.texture=i,this.hash=null,!0;{let e=a!==this.hash;return e&&(this.texture?.dispose(),this.texture=i,this.hash=a),e}}},Pu=class{get maxBounces(){return this._pathTracer.maxBounces}set maxBounces(e){this._pathTracer.maxBounces=e,this.reset()}get frameBudget(){return this._pathTracer.frameBudget}set frameBudget(e){this._pathTracer.frameBudget=e}get maxTransparentBounces(){return this._pathTracer.maxTransparentBounces}set maxTransparentBounces(e){this._pathTracer.maxTransparentBounces=e,this.reset()}get maxSamples(){return this._pathTracer.maxSamples}set maxSamples(e){this._pathTracer.maxSamples=e,this._denoiser?.reset()}async getSampleCountsAsync(){let e=this._pathTracer,t=this._lastSampleCounts,n=await e.getSampleCountsAsync();t.min=n.min,t.max=n.max,t.avg=n.avg;let r=this.getRenderTime()/1e3;return t.samplesPerSecond=r>0?t.avg/r:0,{...t}}get transmissiveBackground(){return this._transmissiveBackground}set transmissiveBackground(e){this._transmissiveBackground!==e&&(this._transmissiveBackground=e,this._pathTracer.setTransmissiveBackground(e))}get filterGlossyFactor(){return this._filterGlossyFactor}set filterGlossyFactor(e){this._filterGlossyFactor!==e&&(this._filterGlossyFactor=e,this._pathTracer.setFilterGlossy(e))}get multipleImportanceSampling(){return this._multipleImportanceSampling}set multipleImportanceSampling(e){this._multipleImportanceSampling!==e&&this.setMultipleImportanceSampling(e)}get clampDirect(){return this._clampDirect}set clampDirect(e){e=Math.max(0,e),this._clampDirect!==e&&(this._clampDirect=e,this._pathTracer.setClamping(e,this._clampIndirect))}get clampIndirect(){return this._clampIndirect}set clampIndirect(e){e=Math.max(0,e),this._clampIndirect!==e&&(this._clampIndirect=e,this._pathTracer.setClamping(this._clampDirect,e))}get target(){return this._pathTracer.outputTarget??null}get fadeState(){return this._fadeState}get lowResTarget(){return this._lowResTarget}get lowResMode(){return this._pathTracer.lowResMode}get textureAtlas(){return this._bvhData.textureAtlas}useMegakernel(e){let t=this._pathTracer.maxSamples;this._pathTracer.dispose(),this._pathTracer=e?new xl(this._renderer):new Gl(this._renderer),this._pathTracer.maxSamples=t,this._pathTracer.setBVHData(this._bvhData),this._pathTracer.setMaterial(this.material),this._pathTracer.setRandom(this.random),this._pathTracer.setMultipleImportanceSampling(this.multipleImportanceSampling),this._pathTracer.setTransmissiveBackground(this._transmissiveBackground),this._pathTracer.setFilterGlossy(this._filterGlossyFactor),this._pathTracer.setClamping(this._clampDirect,this._clampIndirect),this.setCamera(this.camera),this._pathTracer.setEnvironment(this._environmentCache.texture),this._pathTracer.setBackground(this._backgroundCache.texture),this.updateEnvironment(),this.updateLights()}constructor(e){this._renderer=e,this._timer=new l,this._environmentCache=new Nu(e,`environment`),this._backgroundCache=new Nu(e,`background`),this._resetTime=-1,this._fadeState=0,this._lastSampleCounts={min:0,max:0,avg:0,samplesPerSecond:0},this._size=new E,this._blitQuad=new Do(new ko),this._lowResTarget=new O(1,1),this._lowResTarget.type=se,this._lowResTarget.generateMipmaps=!1,this._pathTracer=new Gl(e),this._denoiser=null,this._upscaler=null,this.minSamples=1,this.renderDelay=500,this.fadeDuration=500,this.dynamicLowRes=!0,this.lowResScale=.1,this.renderScale=1,this.synchronizeRenderSize=!0,this.generateMissingAttributes=!0,this.commonAttributes=[`normal`,`tangent`],this.stableNoise=!0,this.pause=!1,this.filterGlossyFactor=1,this._clampDirect=0,this._clampIndirect=10,this.multipleImportanceSampling=!0,this.transmissiveBackground=1,this.random=Tc,this.material=new Au,this._invViewProjectionMatrix=I(new T),this._cameraRayFnHandle=null,this.setMaterial(this.material),this.setRandom(this.random),this.setScene(new Ee,new de)}setMultipleImportanceSampling(e){this._multipleImportanceSampling=e,this._pathTracer.setMultipleImportanceSampling(e),this.reset()}setDenoiser(e){this._denoiser?.reset(),this._denoiser=e,e&&(e.init(this._renderer),e.setScene(this.scene,this.camera))}setUpscaler(e){this._upscaler=e,e&&e.init(this._renderer)}setScene(e,t){e.updateMatrixWorld(!0),t.updateMatrixWorld(),e.traverse(e=>{this.generateMissingAttributes&&e.geometry?.isBufferGeometry&&iu(e.geometry,this.commonAttributes),e.isSkinnedMesh?(e.boundsTree?e.boundsTree.refit():e.boundsTree=new _a(e,{strategy:2,targetLeafSize:5,indirect:!0}),e.boundingBox===null&&(e.boundingBox=new v),e.boundsTree.getBoundingBox(e.boundingBox)):e.isMesh&&(e.geometry.boundsTree||(e.geometry.boundsTree=new ta(e.geometry,{strategy:2,targetLeafSize:5})))});let n=new tu(e);n.update(),n.textureAtlas.setTextures(this._renderer,n.textures),this._bvhData&&(this._bvhData.dispose(),this._bvhData.textureAtlas.dispose()),this.scene=e,this._bvhData=n,this._pathTracer.setBVHData(n),this.setCamera(t),this.updateEnvironment(),this.updateLights(),this._denoiser?.setScene(e,t)}getMaterial(){return this.material}setMaterial(e){this.material=e,this._pathTracer.setMaterial(e),this.reset()}setRandom(e){this.random=e,this._pathTracer.setRandom(e),this.reset()}setCamera(e){if(this.camera=e,e.getCameraRayFn)this._cameraRayFnHandle=e.getCameraRayFn();else{let t=this._invViewProjectionMatrix;this._cameraRayFnHandle={update:()=>(e.coordinateSystem=oe,e.updateMatrixWorld(),(e.isOrthographicCamera||e.isPerspectiveCamera)&&e.updateProjectionMatrix(),t.value.multiplyMatrices(e.matrixWorld,e.projectionMatrixInverse),!1),fn:X`
					fn getCameraRay( uv: vec2f, resolution: vec2f, ray: ptr<function, ${q}> ) -> bool {

						let ndc = uv * 2.0 - vec2f( 1.0 );
						*ray = ${no}( ndc, ${t} );
						return true;

					}
				`}}this._bvhData.fns.getCameraRay=this._cameraRayFnHandle.fn,this._cameraRayFnHandle.update(),this._pathTracer.rebuild(),this.reset()}updateMaterials(){let{_bvhData:e,_renderer:t}=this;e.updateMaterials(),e.textureAtlas.setTextures(t,e.textures),this.reset()}updateTransforms(){this.scene.updateMatrixWorld(!0),this._bvhData.updateTransforms(),this.reset()}updateCamera(){let{_cameraRayFnHandle:e,_pathTracer:t}=this;e.update()&&t.rebuild(),this.reset()}updateEnvironment(){let{_pathTracer:e,scene:t,_environmentCache:n,_backgroundCache:r}=this;n.setFromScene(t)&&e.setEnvironment(n.texture),r.setFromScene(t)&&e.setBackground(r.texture),e.setEnvironmentParams(t.environmentIntensity,t.environmentRotation),e.setBackgroundParams(t.backgroundIntensity,t.backgroundRotation,t.backgroundBlurriness),this.reset()}updateLights(){let{_pathTracer:e,scene:t}=this,n=Zl(t);e.setLights(n),this.reset()}setSize(e,t){(this._size.x!==e||this._size.y!==t)&&(this._size.set(e,t),this.reset())}reset(){this._pathTracer.reset(),this._denoiser?.reset(),this._resetTime=-1,this._fadeState=0,this._timer.update(),this._lastSampleCounts={min:0,max:0,avg:0,samplesPerSecond:0},this.stableNoise&&this._pathTracer.resetSeed()}renderSample(){let e=this._renderer,t=this._size,n=this._blitQuad,r=this._pathTracer,i=this._lowResTarget,a=this._timer,{renderDelay:o,dynamicLowRes:s,synchronizeRenderSize:c,renderScale:l,lowResScale:u,minSamples:d,maxSamples:f}=this;if(a.update(),!this._renderer._initialized)return;this.material.initialized||(this.material.init(e),this.material.initialized=!0);let p=1e3*a.getDelta(),m=this._resetTime===-1;m&&(this._resetTime=0,p=0),this._resetTime+=p;let h=e.getRenderTarget(),g=e.autoClear;if(c){e.getDrawingBufferSize(ju);let t=Math.floor(l*ju.x),n=Math.floor(l*ju.y);this.setSize(t,n)}let{width:_,height:v}=t,y=this._resetTime<o||m&&s&&d!==0;y&&(_=Math.ceil(u*_),v=Math.ceil(u*v)),r.getSize(ju),(ju.x!==_||ju.y!==v)&&(!y&&s&&(i.setSize(Math.ceil(u*_),Math.ceil(u*v)),e.copyTextureToTexture(r.outputTarget,i)),r.setSize(_,v)),!this.pause&&(!y||y&&s)&&(r.lowResMode=y,r.update());let b=this._denoiser,x=this._upscaler,S=!!b&&!b.complete&&!b.running&&f>0;y||((this._fadeState<1&&d>0||S)&&this.getSampleCountsAsync(),this._lastSampleCounts.min>=d&&(this._fadeState+=p/this.fadeDuration,this._fadeState=Math.min(1,this._fadeState)||1));let C=y&&s?1:this._fadeState,w=r.outputTarget;b&&!y&&(S&&this._lastSampleCounts.min>=f&&b.update(r.outputTarget),w=b.texture??w),x&&!y&&(w=x.upscale(w,this.camera),e.setRenderTarget(h)),e.autoClear=s?!0:C===1,n.material.transition=s?C:1,n.material.opacity=s?1:C,n.material.fromTexture=i,n.material.texture=w,n.render(e),e.autoClear=g,e.setRenderTarget(h)}renderDebugBounds(e={}){let{displayTLAS:t=!0,displayBLAS:n=!0,stopAtSurface:r=!1,saturationCount:i=64}=e,a=this._renderer,o=this.camera;if(!a._initialized)return;o.updateMatrixWorld(),(this._debugBoundsQuad===void 0||this._debugBoundsData!==this._bvhData)&&this._buildDebugBoundsQuad();let s=this._debugBoundsUniforms;s.cameraToModelMatrix.value.copy(o.matrixWorld),s.inverseProjectionMatrix.value.copy(o.projectionMatrixInverse),s.displayTLAS.value=+!!t,s.displayBLAS.value=+!!n,s.stopAtSurface.value=+!!r,s.saturationCount.value=i;let c=a.getRenderTarget(),l=a.autoClear,u=a.toneMapping;a.setRenderTarget(null),a.autoClear=!0,a.toneMapping=0,this._debugBoundsQuad.render(a),a.setRenderTarget(c),a.autoClear=l,a.toneMapping=u}_buildDebugBoundsQuad(){let e=this._bvhData,t=Mo(e),n=new Oe;n.colorNode=t(dn(un())),this._debugBoundsQuad===void 0?this._debugBoundsQuad=new Do(n):(this._debugBoundsQuad.material.dispose(),this._debugBoundsQuad.material=n),this._debugBoundsUniforms=t.uniforms,this._debugBoundsData=e}renderTextureAtlas(e=0){let t=this._renderer;this._atlasDebugQuad||=new Do(new nu);let n=this._atlasDebugQuad;n.material.texture=this.textureAtlas.texture,n.material.layer=e,t.setRenderTarget(null),n.render(t)}renderSampleDensity(){let e=this._renderer;if(!e._initialized)return;this.getSampleCountsAsync(),this._sampleDensityQuad||=new Do(new ru);let t=e.toneMapping;e.toneMapping=0;let n=this._sampleDensityQuad;n.material.texture=this._pathTracer.sampleCountTarget,n.material.minCount=this._lastSampleCounts.min,n.material.maxCount=this._lastSampleCounts.max,e.setRenderTarget(null),n.render(e),e.toneMapping=t}dispose(){this._pathTracer.dispose(),this._denoiser?.dispose(),this._upscaler?.dispose(),this._bvhData.dispose(),this._bvhData.textureAtlas.dispose(),this._environmentCache.dispose(),this._backgroundCache.dispose(),this._lowResTarget.dispose(),this._blitQuad.dispose(),this._blitQuad.material.dispose(),this._atlasDebugQuad?.dispose(),this._atlasDebugQuad?.material.dispose(),this._sampleDensityQuad?.dispose(),this._sampleDensityQuad?.material.dispose(),this._debugBoundsQuad!==void 0&&(this._debugBoundsQuad.dispose(),this._debugBoundsQuad.material.dispose())}getRenderTime(){return this._resetTime}};function Fu(e){let t=Number(e?.transmission);return!!(e?.isMeshPhysicalMaterial&&Number.isFinite(t)&&t>0)}function Iu(e){return!!(e&&Number(e.alphaTest)>0&&(e.map||e.alphaMap)&&!(Number(e.transmission)>0))}function Lu(e){return Fu(e)?(e.opacity=1,e.transparent=!1,e.depthWrite=!0,e.needsUpdate=!0,!0):!1}function Ru(e,t){return!Fu(e)||!t?!1:(t.transmission=0,t.transparent=!0,t.opacity=.5,t.depthWrite=!1,t.needsUpdate=!0,!0)}function zu(e,t=30,n=85){let r=Math.max(1,n-t);return .86+.12*Math.min(1,Math.max(0,(Number(e)-t)/r))}var Bu=.9,Vu=new i({color:16777215,roughness:.88,metalness:0,side:2});Vu.color.multiplyScalar(Bu);var Hu=new y({color:1118481,wireframe:!0,side:2}),Uu=new _({color:1118481}),Wu=new y({color:16726832,side:2,depthWrite:!0,depthTest:!0,toneMapped:!1}),Gu=new _({color:60159,depthTest:!1,depthWrite:!1,toneMapped:!1}),Ku=new _({color:16726832,depthTest:!1,depthWrite:!1,toneMapped:!1}),qu=new re({color:2152811,size:6,sizeAttenuation:!1,depthTest:!1}),Ju=new re({color:16722731,size:6,sizeAttenuation:!1,depthTest:!1}),Yu=new re({color:16711892,size:6,sizeAttenuation:!1,depthTest:!1}),Xu=new WeakMap,Zu=new Set;function Qu(e){if(!e?.clone)return Vu;let t=Xu.get(e);if(t)return t.color?.set(16777215).multiplyScalar(Bu),t;let n=e.clone();return n.color?.set(16777215).multiplyScalar(Bu),n.emissive?.set(0),`roughness`in n&&(n.roughness=.88),`metalness`in n&&(n.metalness=0),Iu(e)||(n.map=null),n.emissiveMap=null,Ru(e,n),n.needsUpdate=!0,Xu.set(e,n),Zu.add(n),n}function $u(e){return Zu.has(e)}function ed(){Zu.forEach(e=>e.dispose()),Zu.clear()}function td(e){return Array.isArray(e)?e.map(Qu):Qu(e)}function nd(e,t){Bu=e,Vu.color.set(16777215).multiplyScalar(e),t?.traverse(t=>{if(!t.isMesh)return;let n=Array.isArray(t.material)?t.material:[t.material];for(let t of n)t?.color?.set(16777215).multiplyScalar(e)})}var rd=new class extends ze{setupDiffuseColor(e){super.setupDiffuseColor(e),Jt.rgb.assign(fn(1))}setupOutput(e,t){let n=tn(.1,Yt(t.rgb,fn(.2126,.7152,.0722)));return super.setupOutput(e,pn(fn(n).mul(8),t.a))}}({color:16777215,side:2,toneMapped:!1}),id=new y({color:16777215,transparent:!0,opacity:.18,side:2,depthWrite:!1,toneMapped:!1}),ad=new Map,od=new Set;function sd(e){if(ad.has(e))return ad.get(e);let t=rd.clone();return t.map=e.map??null,t.alphaMap=e.alphaMap??null,t.alphaTest=Number(e.alphaTest)>0?Number(e.alphaTest):.5,t.opacity=e.opacity??1,t.needsUpdate=!0,ad.set(e,t),od.add(t),t}function cd(e){return od.has(e)}function ld(){for(let e of od)e.dispose();ad.clear(),od.clear()}function ud(e){return e?Number.isFinite(Number(e.opacity))&&Number(e.opacity)<.999||Number.isFinite(Number(e.transmission))&&Number(e.transmission)>0:!1}function dd(e){let t=Array.isArray(e)?e:[e];return t.length>0&&t.every(ud)}function fd(e){return(Array.isArray(e)?e:[e]).some(Iu)}function pd(e){return Array.isArray(e)?e.map(pd):Iu(e)?sd(e):ud(e)?id:rd}function md(e,t,n=null){if(ud(e)){if(Lu(e)){Number.isFinite(n)&&(e.transmission=n);return}e.transparent=!0,e.opacity=t,e.depthWrite=!1,`roughness`in e&&(e.roughness=.16),`metalness`in e&&(e.metalness=.02),e.needsUpdate=!0}}var hd=.65;function gd(){M.ground&&N.remove(M.ground);let e=new ee(M.maxModelSize*10,M.maxModelSize*10),t=new Ce({color:0,opacity:hd});M.ground=new ce(e,t),M.ground.rotation.x=-Math.PI/2,M.ground.position.set(M.modelCenter.x,.001,M.modelCenter.z),M.ground.receiveShadow=!0,N.add(M.ground)}xt.addEventListener(`input`,vd),St.addEventListener(`input`,vd);function _d(){let e=ne.degToRad(Number(xt.value)),t=ne.degToRad(Number(St.value)),n=Math.cos(t);return new D(Math.cos(e)*n,Math.sin(t),Math.sin(e)*n)}function vd(){if(!M.model)return;let e=_d(),t=M.maxModelSize*3;P.position.copy(M.modelCenter).addScaledVector(e,t),P.target.position.copy(M.modelCenter),P.target.updateMatrixWorld(),P.updateMatrixWorld();let n=M.maxModelSize*.9;P.shadow.camera.left=-n,P.shadow.camera.right=n,P.shadow.camera.top=n,P.shadow.camera.bottom=-n,P.shadow.camera.near=M.maxModelSize*.01,P.shadow.camera.far=M.maxModelSize*8,P.shadow.camera.updateProjectionMatrix(),Ue(e)}function yd(e){M.exportedSun=e??null,M.hasImportedSun=!1;let t=qe(e);if(!t||!M.model)return!1;let n=new D(...t).transformDirection(M.model.matrixWorld);if(![n.x,n.y,n.z].every(Number.isFinite)||n.y<=0)return!1;let{azimuth:r,height:i}=Fe(n.toArray());return xt.value=String(r),St.min=String(Math.min(5,Math.floor(i))),St.max=String(Math.max(85,Math.ceil(i))),St.value=String(i),M.hasImportedSun=!0,vd(),!0}Ct.addEventListener(`change`,()=>{P.shadow.intensity=+!!Ct.checked,M.ground&&(M.ground.visible=Ct.checked),rd.needsUpdate=!0});var bd=document.querySelector(`#startMessage`),xd=document.querySelector(`#startMessageText`),Sd=xd.textContent;function Cd(){xd.textContent=Sd,bd.classList.remove(`error`)}function wd(e){xd.textContent=e,bd.classList.add(`error`),et.classList.remove(`hidden`)}function Td(){xd.textContent=`OPENING MODEL…`,bd.classList.remove(`error`),et.classList.remove(`hidden`)}function Ed(e){It&&(It.textContent=e,It.style.opacity=`1`,clearTimeout(Ed.timeout),Ed.timeout=setTimeout(()=>{It.style.opacity=`.38`},5e3))}function Dd(e){let t=document.createElement(`div`);return t.textContent=e,t.innerHTML}var Od=null,kd=getComputedStyle(document.documentElement).getPropertyValue(`--bg`).trim()||`#efefed`,Ad=new be(kd),$=null,jd=null,Md=null,Nd=null,Pd=null,Fd=1,Id=null,Ld=!1,Rd=!1,zd=!1,Bd=0,Vd=0,Hd=!1,Ud=null,Wd=0,Gd=new Map,Kd=()=>[...document.querySelectorAll(`[data-navigation-mode], [data-view]`),mt,ht,gt,wt,tt].filter(Boolean);function qd(){Ot.textContent=M.pathTracerActive?Rd?`RESUME`:`PAUSE`:`PATH TRACER`,Ot.classList.toggle(`active`,M.pathTracerActive),Ot.setAttribute(`aria-pressed`,String(M.pathTracerActive))}function Jd(e){e&&M.navigationMode===`fly`&&document.querySelector(`[data-navigation-mode="orbit"]`)?.click(),M.pathTracerActive=e,M.controls.enabled=!e&&M.navigationMode!==`fly`;for(let t of Kd())e?(Gd.set(t,t.disabled),t.disabled=!0):t.disabled=Gd.get(t)??!1;e||Gd.clear()}function Yd(e){let{data:t,width:n,height:r}=e.image??{};if(!(t instanceof Float32Array)||!n||!r)return null;let i=0,a=-1/0,o=Math.floor(t.length/(n*r));for(let e=0;e<n*r;e++){let n=e*o,r=.2126*t[n]+.7152*t[n+1]+.0722*t[n+2];r>a&&(a=r,i=e)}return new D(...De(i%n,Math.floor(i/n),n,r)).normalize()}async function Xd(){let e=ke();if(jd&&Od===e.url)return jd;let t=await new $e().setDataType(se).loadAsync(e.url);if(ke().url!==e.url)throw t.dispose(),Error(`The scene environment changed while loading`);Md=Yd(t);let n=t.image?.data;if(n instanceof Float32Array){for(let e=0;e<n.length;e++)n[e]=Math.min(65504,Math.max(-65504,n[e]));t.needsUpdate=!0}return t.mapping=303,jd?.dispose(),jd=t,Od=e.url,t}function Zd(){Md&&(N.environmentRotation.setFromQuaternion(new pe().setFromUnitVectors(Md,_d())),$?.updateEnvironment())}function Qd(){let e=We();N.environment=e??Pd,N.environmentIntensity=e?.2:Fd,e?Ue(_d()):Id?N.environmentRotation.copy(Id):N.environmentRotation.set(0,0,0),Pd=null,Id=null,Nd&&=(N.background=Nd,null),Ge.visible=!0,P.visible=!0,M.ground&&Ud&&(M.ground.material.dispose(),M.ground.material=Ud,Ud=null)}async function $d(){if(M.pathTracerActive||!M.model||M.sectionEnabled)return;M.currentMode!==`original`&&document.querySelector(`[data-mode="original"]`)?.click(),Ld=!0,Rd=!1;let e=++Wd;Jd(!0),Ot.setAttribute(`aria-busy`,`true`),qd(),Ed(`PATH TRACER · loading HDRI…`),Pd=N.environment,Fd=N.environmentIntensity,Id=N.environmentRotation.clone();try{let t=await Xd();if(e!==Wd||!M.model)return;N.environment=t,N.environmentIntensity=1,Zd(),Ge.visible=!1,P.visible=!1,Nd=N.background.clone(),N.background=Ad,M.ground&&(Ud=M.ground.material,M.ground.material=new i({color:Ad,roughness:.94,metalness:0,side:2}));let n=new Pu(Ve);if(n.maxBounces=6,n.maxTransparentBounces=10,n.filterGlossyFactor=.35,n.multipleImportanceSampling=!0,n.renderDelay=90,n.minSamples=1,n.lowResScale=.25,n.renderScale=1,Ed(`PATH TRACER · preparing scene…`),await new Promise(e=>requestAnimationFrame(e)),e!==Wd){n.dispose();return}n.setScene(N,M.camera),$=n,Bd=0,zd=!1,Ed(`PATH TRACER · refining image…`)}catch(t){if(e!==Wd)return;console.error(`WebGPU path tracer failed`,t),ef({restoreStatus:!1}),Ed(`PATH TRACER COULD NOT START: ${t.message}`)}finally{e===Wd&&(Ld=!1,Ot.removeAttribute(`aria-busy`))}}Ot?.addEventListener(`click`,()=>{M.pathTracerActive?$&&!Ld&&(Rd=!Rd,$.pause=Rd,qd(),Ed(Rd?`PATH TRACER · paused at ${Math.floor(Bd)} samples`:`PATH TRACER · refining image…`)):$d()});function ef({restoreStatus:e=!0}={}){(M.pathTracerActive||$)&&(++Wd,$?.dispose(),$=null,Ld=!1,Rd=!1,Bd=0,Ot.removeAttribute(`aria-busy`),Qd(),Jd(!1),qd(),rf(),e&&Ed(`WebGPU preview`))}function tf(){$&&(zd=!0,Rd=!1,$.pause=!1,qd())}function nf(){$&&($.updateLights(),Rd=!1,$.pause=!1,qd())}function rf(){Ot&&(Ot.disabled=!M.model||M.sectionEnabled||!navigator.gpu,Ot.title=M.sectionEnabled?`Turn off SECTION before using PATH TRACER`:`Progressive WebGPU path tracing`)}async function af(){throw Error(`Render Station requires WebGL`)}async function of(){throw Error(`Render Station requires WebGL`)}function sf(e){M.pathTracerActive&&$&&(Rd=e,$.pause=e,qd())}function cf(){$?.updateCamera()}function lf(){return M.pathTracerActive?{preparing:Ld,compiling:!1,paused:Rd,samples:Bd}:null}function uf(){if(!M.pathTracerActive)return!1;if(!$||Ld)return!0;zd&&($.setScene(N,M.camera),zd=!1,Bd=0),Rd||$.renderSample();let e=performance.now();if(!Hd&&e-Vd>1200){Vd=e,Hd=!0;let t=$;t.getSampleCountsAsync().then(e=>{$===t&&(Bd=e.avg)}).catch(e=>console.warn(`Sample count unavailable`,e)).finally(()=>{Hd=!1})}return!0}xt?.addEventListener(`input`,()=>{$&&Zd()}),St?.addEventListener(`input`,()=>{$&&Zd()}),Tt?.addEventListener(`input`,()=>{$&&queueMicrotask(()=>$?.updateMaterials())}),rf(),qd();function df(e,t){e&&e.traverse(e=>{e.isMesh&&t(e)})}function ff(){M.edgeGroup&&N.remove(M.edgeGroup),M.edgeGroup=new a,M.model.updateMatrixWorld(!0),df(M.model,e=>{let t=new ve(e.geometry,25),n=new d(t,Uu);n.renderOrder=11e3,n.matrixAutoUpdate=!1,n.matrix.copy(e.matrixWorld);let r=e;for(;r.parent&&r.parent!==M.model;)r=r.parent;n.userData.modelGroup=r,M.edgeGroup.add(n)}),N.add(M.edgeGroup),M.edgeGroup.visible=!1}function pf(){M.edgeGroup?.children.forEach(e=>{e.visible=e.userData.modelGroup?.visible!==!1})}function mf(e){let t=0;for(let n=e.length-1,r=0;r<e.length;n=r++){let i=e[n],a=e[r];t+=i.x*a.y-a.x*i.y}return t*.5}function hf(e,t){let n=!1;for(let r=0,i=t.length-1;r<t.length;i=r++){let a=t[r],o=t[i];a.y>e.y!=o.y>e.y&&e.x<(o.x-a.x)*(e.y-a.y)/(o.y-a.y)+a.x&&(n=!n)}return n}function gf(e){return typeof e.clone==`function`?e.clone():{x:e.x,y:e.y}}function _f(e,t){return`${Math.min(e,t)}:${Math.max(e,t)}`}function vf(e,t){return`${e}>${t}`}function yf({points:e,pointComponentIds:t,edges:n,tolerance:r,includeDiagnostics:i=!1}){let a=Array.from({length:e.length},()=>new Set);for(let[e,t]of n.values())a[e].add(t),a[t].add(e);let o=[],s=0,c=0,l=0;if(i){o=a.map(e=>e.size),s=o.filter(e=>e===1).length,c=o.filter(e=>e>2).length;let e=new Set;for(let t=0;t<a.length;t++)if(o[t]!==2)for(let n of a[t]){let r=_f(t,n);if(e.has(r))continue;l++;let i=t,s=n;for(e.add(r);o[s]===2;){let t=[...a[s]].find(e=>e!==i);if(t===void 0)break;let n=_f(s,t);if(e.has(n))break;e.add(n),i=s,s=t}}}let u=a.map((t,n)=>{let r=e[n];return[...t].sort((t,n)=>{let i=e[t],a=e[n];return Math.atan2(i.y-r.y,i.x-r.x)-Math.atan2(a.y-r.y,a.x-r.x)})}),d=new Set,f=[];for(let[i,a]of n.values())for(let[o,s]of[[i,a],[a,i]]){let i=vf(o,s);if(d.has(i))continue;let a=[],c=o,l=s,p=!1,m=n.size*2+10;for(let e=0;e<m;e++){d.add(vf(c,l)),a.push(c);let e=u[l];if(!e||e.length===0)break;let t=e.indexOf(c);if(t<0)break;let n=e[(t-1+e.length)%e.length];if(c=l,l=n,c===o&&l===s){p=!0;break}}if(!p)continue;let h=a.map(t=>gf(e[t]));if(h.length<3)continue;let g=[];for(let e=0;e<h.length;e++){let t=h[(e-1+h.length)%h.length],n=h[e],i=h[(e+1)%h.length],a=n.x-t.x,o=n.y-t.y,s=i.x-n.x,c=a*(i.y-n.y)-o*s;Math.abs(c)>r*r&&g.push(n)}g.length<3||mf(g)>r*r*4&&f.push({points:g,componentId:t[a[0]]})}return{loops:f,neighbours:a,degrees:o,degree1Count:s,branchCount:c,openChainCount:l}}function bf(e){return{x:e.x,y:e.y,z:e.z}}function xf(e,t,n){return{x:e.x+(t.x-e.x)*n,y:e.y+(t.y-e.y)*n,z:e.z+(t.z-e.z)*n}}function Sf(e,t){let n=e.x-t.x,r=e.y-t.y,i=e.z-t.z;return n*n+r*r+i*i}function Cf(e,t,n,r,i){let a=[],o=[e,t,n];for(let e=0;e<3;e++){let t=o[e],n=o[(e+1)%3],s=r.distanceToPoint(t),c=r.distanceToPoint(n),l=Math.abs(s)<=i,u=Math.abs(c)<=i;if(l&&u)continue;let d=null;l?d=bf(t):u?d=bf(n):s*c<0&&(d=xf(t,n,s/(s-c))),d&&(a.some(e=>Sf(e,d)<=i*i)||a.push(d))}if(a.length<2)return null;let s=0,c=1,l=-1;for(let e=0;e<a.length;e++)for(let t=e+1;t<a.length;t++){let n=Sf(a[e],a[t]);n>l&&(l=n,s=e,c=t)}return[a[s],a[c]]}function wf({model:e,sectionPlane:t,triangleComponents:n,planeOrigin:r,axisU:i,axisV:a,tolerance:o,collectGraph:s=!0,includeDiagnostics:c=!1}){let l=new Map,u=[],d=[],f=new Map,p=[],m=new Set,h=new Set;function g(e,t,n){return`${n}|${Math.round(e/o)},${Math.round(t/o)}`}function _(e,t){let n=e.clone().sub(r),s=n.dot(i),c=n.dot(a),f=g(s,c,t);if(l.has(f))return l.get(f);let p=u.length;return u.push(new E(Math.round(s/o)*o,Math.round(c/o)*o)),d.push(t),l.set(f,p),p}function v(e,t,n,r){if(p.push(e.x,e.y,e.z,t.x,t.y,t.z),c&&(m.add(n),h.add(r)),!s)return;let i=_(e,r),a=_(t,r);if(i===a)return;let o=Math.min(i,a),l=Math.max(i,a),u=`${o}:${l}`;f.has(u)||f.set(u,[o,l])}let y=new D,b=new D,x=new D,S=new D,C=new D;return df(e,r=>{if(!Ke(r,e)||!r.geometry?.attributes?.position)return;let i=r.geometry;i.boundingBox||i.computeBoundingBox();let a=r.matrixWorld.clone().invert(),s=t.clone().applyMatrix4(a);if(i.boundingBox&&!s.intersectsBox(i.boundingBox))return;let c=i.attributes.position,l=i.index,u=o/Math.max(r.matrixWorld.getMaxScaleOnAxis(),1e-9),d=Math.floor(l?l.count/3:c.count/3),f=n.get(r);for(let e=0;e<d;e++){let t=l?l.getX(e*3):e*3,n=l?l.getX(e*3+1):e*3+1,i=l?l.getX(e*3+2):e*3+2;y.fromBufferAttribute(c,t),b.fromBufferAttribute(c,n),x.fromBufferAttribute(c,i);let a=Cf(y,b,x,s,u);a&&(S.set(a[0].x,a[0].y,a[0].z).applyMatrix4(r.matrixWorld),C.set(a[1].x,a[1].y,a[1].z).applyMatrix4(r.matrixWorld),S.distanceToSquared(C)>o*o&&v(S,C,r,f?.[e]??-1))}}),{points:u,pointComponentIds:d,edges:f,rawSegmentPositions:p,intersectedMeshes:m,intersectedComponents:h}}function Tf(e,t){let n=e.map(e=>({loop:e.points,componentId:e.componentId,sample:t(e.points),area:Math.abs(mf(e.points)),depth:0,parent:-1}));for(let e=0;e<n.length;e++){let t=0,r=-1,i=1/0;for(let a=0;a<n.length;a++)e!==a&&n[a].componentId===n[e].componentId&&(n[a].area<=n[e].area||hf(n[e].sample,n[a].loop)&&(t++,n[a].area<i&&(r=a,i=n[a].area)));n[e].depth=t,n[e].parent=r}return n}function Ef(e){let t=f.triangulateShape(e,[]);if(t.length){let n=t[0];return new E((e[n[0]].x+e[n[1]].x+e[n[2]].x)/3,(e[n[0]].y+e[n[1]].y+e[n[2]].y)/3)}return e[0].clone()}function Df({loops:e,planeOrigin:t,axisU:n,axisV:r}){let i=Tf(e,Ef),a=[];function o(e){return t.clone().addScaledVector(n,e.x).addScaledVector(r,e.y)}for(let e=0;e<i.length;e++){let t=i[e];if(t.depth%2!=0)continue;let n=t.loop.map(e=>e.clone());f.isClockWise(n)||n.reverse();let r=[];for(let n=0;n<i.length;n++){let a=i[n];if(a.componentId!==t.componentId||a.depth!==t.depth+1||a.parent!==e)continue;let o=a.loop.map(e=>e.clone());f.isClockWise(o)&&o.reverse(),r.push(o)}let s=f.triangulateShape(n,r),c=n.concat(...r);for(let e of s)for(let t of e){let e=o(c[t]);a.push(e.x,e.y,e.z)}}return a}function Of(e){e?.traverse(e=>e.geometry?.dispose())}function kf({fillEnabled:e,fillPositions:t,rawSegmentPositions:n,debugEnabled:r,points:i,degrees:o,planeOrigin:s,axisU:c,axisV:l}){let u=new a;if(e&&t.length){let e=new x;e.setAttribute(`position`,new ie(t,3));let n=new ce(e,Wu);n.renderOrder=10500,n.raycast=()=>{},u.add(n)}if(!e&&n.length){let e=new x;e.setAttribute(`position`,new ie(n,3));let t=new d(e,Ku);t.renderOrder=10505,t.raycast=()=>{},u.add(t)}if(!r)return u;let f=new x;f.setAttribute(`position`,new ie(n,3));let p=new d(f,Gu);p.renderOrder=10510,p.raycast=()=>{},u.add(p);let m=[[],[],[]];i.forEach((e,t)=>{let n=o[t]===1?1:o[t]>2?2:0,r=s.clone().addScaledVector(c,e.x).addScaledVector(l,e.y);m[n].push(r.x,r.y,r.z)});let h=[qu,Ju,Yu];return m.forEach((e,t)=>{if(!e.length)return;let n=new x;n.setAttribute(`position`,new ie(e,3));let r=new ye(n,h[t]);r.renderOrder=10520,r.raycast=()=>{},u.add(r)}),u}function Af(){if(M.sectionTriangleComponents=new WeakMap,M.sectionTopologyComponentCount=0,M.sectionTopologyReady=!1,!M.model)return;M.model.updateMatrixWorld(!0);let e=Math.max(M.maxModelSize*1e-5,1e-6),t=[],n=0;df(M.model,e=>{if(!e.geometry?.attributes?.position)return;let r=e.geometry,i=r.attributes.position,a=r.index?Math.floor(r.index.count/3):Math.floor(i.count/3),o=new Int32Array(a);M.sectionTriangleComponents.set(e,o),t.push({mesh:e,geometry:r,start:n,triangleCount:a,components:o}),n+=a});let r=new Int32Array(n),i=new Uint8Array(n);for(let e=0;e<n;e++)r[e]=e;function a(e){let t=e;for(;r[t]!==t;)t=r[t];for(;r[e]!==e;){let n=r[e];r[e]=t,e=n}return t}function o(e,t){let n=a(e),o=a(t);if(n!==o){if(i[n]<i[o]){let e=n;n=o,o=e}r[o]=n,i[n]===i[o]&&i[n]++}}let s=new Map,c=new Map,l=new Map,u=0,d=new D;function f(t,n,r){d.fromBufferAttribute(t,n).applyMatrix4(r);let i=Math.round(d.x/e)+`,`+Math.round(d.y/e)+`,`+Math.round(d.z/e);if(s.has(i))return s.get(i);let a=u++;return s.set(i,a),a}function p(e,t,n){if(e===t)return;let r=Math.min(e,t),i=Math.max(e,t),a=r+`:`+i;c.has(a)?o(n,c.get(a)):c.set(a,n)}function m(e,t,n){let r=e.uuid+`:`+t;l.has(r)?o(n,l.get(r)):l.set(r,n)}for(let e of t){let t=e.geometry,n=t.attributes.position,r=t.index;for(let t=0;t<e.triangleCount;t++){let i=r?r.getX(t*3):t*3,a=r?r.getX(t*3+1):t*3+1,o=r?r.getX(t*3+2):t*3+2,s=f(n,i,e.mesh.matrixWorld),c=f(n,a,e.mesh.matrixWorld),l=f(n,o,e.mesh.matrixWorld),u=e.start+t;p(s,c,u),p(c,l,u),p(l,s,u),m(e.mesh,s,u),m(e.mesh,c,u),m(e.mesh,l,u)}}let h=new Map;for(let e of t)for(let t=0;t<e.triangleCount;t++){let n=a(e.start+t);h.has(n)||h.set(n,M.sectionTopologyComponentCount++),e.components[t]=h.get(n)}M.sectionTopologyReady=!0}function jf(){M.sectionCapFrame===null&&(M.sectionCapFrame=requestAnimationFrame(()=>{M.sectionCapFrame=null,Nf()}))}function Mf(){Ft.textContent=``,M.sectionCapGroup&&(N.remove(M.sectionCapGroup),Of(M.sectionCapGroup),M.sectionCapGroup=null)}function Nf(){if(Mf(),!M.sectionEnabled||!M.model||!M.modelBounds)return;M.model.updateMatrixWorld(!0);let e=Math.max(M.maxModelSize*1e-5,1e-6),t=M.sectionPlane.coplanarPoint(new D),n=M.sectionPlane.normal.clone().normalize(),r=Math.abs(n.y)<.9?new D(0,1,0):new D(1,0,0),i=new D().crossVectors(r,n).normalize(),a=new D().crossVectors(n,i).normalize(),o=Mt.checked,s=Nt.checked||o;s&&!M.sectionTopologyReady&&Af();let{points:c,pointComponentIds:l,edges:u,rawSegmentPositions:d,intersectedMeshes:f,intersectedComponents:p}=wf({model:M.model,sectionPlane:M.sectionPlane,triangleComponents:M.sectionTriangleComponents,planeOrigin:t,axisU:i,axisV:a,tolerance:e,collectGraph:s,includeDiagnostics:o}),m=[],h=[],g=0,_=0,v=0;s&&({loops:m,degrees:h,degree1Count:g,branchCount:_,openChainCount:v}=yf({points:c,pointComponentIds:l,edges:u,tolerance:e,includeDiagnostics:o}));let y=Nt.checked?Df({loops:m,planeOrigin:t,axisU:i,axisV:a}):[];M.sectionCapGroup=kf({fillEnabled:Nt.checked,fillPositions:y,rawSegmentPositions:d,debugEnabled:o,points:c,degrees:h,planeOrigin:t,axisU:i,axisV:a}),o&&(Ft.textContent=[`intersected meshes  ${f.size}`,`surface components  ${M.sectionTopologyComponentCount}`,`cut components      ${p.size}`,`raw segments        ${d.length/6}`,`graph edges         ${u.size}`,`graph nodes         ${c.length}`,`closed loops        ${m.length}`,`cap triangles       ${y.length/9}`,`open chains         ${v}`,`degree-1 nodes      ${g}`,`degree >2 nodes     ${_}`].join(`
`)),N.add(M.sectionCapGroup)}var Pf=[];function Ff(){pf(),M.sectionEnabled&&jf(),tf()}function If(e,t,n){Ye(e,t),n&&(n.checked=t)}function Lf(e){Pf.forEach(t=>If(t,e,t.checkbox)),Ff()}function Rf(){it.replaceChildren(),Pf.forEach(e=>{let t=document.createElement(`label`);t.className=`group-filter-item`;let n=document.createElement(`input`);n.type=`checkbox`,n.checked=e.visible,n.setAttribute(`aria-label`,e.displayLabel),n.addEventListener(`change`,()=>{If(e,n.checked,n),Ff()});let r=document.createElement(`span`);r.textContent=e.displayLabel,r.title=e.displayLabel,e.checkbox=n,t.append(n,r),it.appendChild(t)})}function zf(e){Pf=Ze(e),Rf(),rt.hidden=Pf.length===0}function Bf(){Pf=[],it.replaceChildren(),nt.hidden=!0,rt.hidden=!0,rt.setAttribute(`aria-expanded`,`false`)}function Vf(){Pf.forEach(e=>Ye(e,e.visible)),pf()}function Hf(){return Pf.map(e=>({sessionKey:e.sessionKey,visible:e.visible}))}function Uf(e){let t=He(Pf,e);return Pf.forEach(e=>{e.checkbox&&(e.checkbox.checked=e.visible)}),t&&Ff(),t}at.addEventListener(`click`,()=>Lf(!0)),ot.addEventListener(`click`,()=>Lf(!1));var Wf=new Me;Wf.clipShadows=!0,N.add(Wf),bt.addEventListener(`click`,()=>{ef(),M.sectionEnabled=!M.sectionEnabled,bt.classList.toggle(`active`,M.sectionEnabled),bt.setAttribute(`aria-pressed`,String(M.sectionEnabled)),M.sectionEnabled?Gf():Kf(),rf()}),document.querySelectorAll(`[data-axis]`).forEach(e=>{e.addEventListener(`click`,()=>{M.sectionAxis=e.dataset.axis,e.before(jt),document.querySelectorAll(`[data-axis]`).forEach(t=>{t.classList.toggle(`active`,t===e),t.setAttribute(`aria-pressed`,String(t===e))}),Gf()})}),At.addEventListener(`input`,Gf),jt.addEventListener(`click`,()=>{let e=jt.getAttribute(`aria-pressed`)!==`true`;jt.setAttribute(`aria-pressed`,String(e)),Gf()}),Mt.addEventListener(`change`,()=>{jf()}),Nt.addEventListener(`change`,()=>{jf()}),Pt.forEach(e=>{e.addEventListener(`click`,()=>{let t=e.dataset.sectionColor;Wu.color.set(t),Ku.color.set(t),Wu.needsUpdate=!0,Ku.needsUpdate=!0,Pt.forEach(t=>{t.classList.toggle(`active`,t===e),t.setAttribute(`aria-pressed`,String(t===e))}),jf()})});function Gf(){if(!M.modelBounds)return;let e=Number(At.value)/1e3,t,n,r=new D;M.sectionAxis===`x`&&(t=M.modelBounds.min.x,n=M.modelBounds.max.x,r.set(-1,0,0)),M.sectionAxis===`y`&&(t=M.modelBounds.min.y,n=M.modelBounds.max.y,r.set(0,-1,0)),M.sectionAxis===`z`&&(t=M.modelBounds.min.z,n=M.modelBounds.max.z,r.set(0,0,-1)),jt.getAttribute(`aria-pressed`)===`true`&&r.multiplyScalar(-1);let i=ne.lerp(t,n,e),a=new D;M.sectionAxis===`x`&&(a.x=i),M.sectionAxis===`y`&&(a.y=i),M.sectionAxis===`z`&&(a.z=i),M.sectionPlane.setFromNormalAndCoplanarPoint(r,a),Kf()}function Kf(){if(M.model){Wf.enabled=M.sectionEnabled,Wf.clippingPlanes=M.sectionEnabled?[M.sectionPlane]:[];for(let e of[M.model,M.edgeGroup])e&&(M.sectionEnabled&&e.parent!==Wf?Wf.attach(e):!M.sectionEnabled&&e.parent===Wf&&N.attach(e));jf()}}var qf=null,Jf=document.querySelector(`#blackBackButton`),Yf=Je,Xf=12630964,Zf=8947848,Qf=.005,$f=.02,ep=null,tp=Ie.whiteSurface,np=Ie.whiteGlassTransparency;function rp(){if(!ep||M.pathTracerActive)return;let e=ep;Ve.toneMappingExposure=e.exposure,Ve.domElement.style.filter=e.brightness===1&&e.contrast===1&&e.saturation===1?`none`:`brightness(${e.brightness}) contrast(${e.contrast}) saturate(${e.saturation})`,P.intensity=e.sunStrength,Xe.set(15724525).multiplyScalar(e.backdrop),ap();let t=M.currentMode===`white`||M.currentMode===`hidden`;Ge.intensity=M.currentMode===`renaissance`?0:t?e.skyFill:Je,Ge.groundColor.set(t?Xf:Zf),t&&Ge.groundColor.multiplyScalar(e.groundBounce),e.whiteSurface!==tp&&(nd(e.whiteSurface,t?M.model:null),tp=e.whiteSurface),t&&e.whiteGlassTransparency!==np&&(ip(),np=e.whiteGlassTransparency),id.opacity=1-e.bwGlassTransparency/100}function ip(e=null){let t=[`original`,`white`,`hidden`].includes(M.currentMode);if(!M.model||!t)return;e?.isTrusted&&[`white`,`hidden`].includes(M.currentMode)&&ep&&Ae(`whiteGlassTransparency`,Number(Tt.value));let n=1-Number(Tt.value)/100,r=ep&&[`white`,`hidden`].includes(M.currentMode)?1-ep.whiteGlassTransparency/100:n,i=e?.type===`input`?zu(Tt.value,Number(Tt.min),Number(Tt.max)):null;M.originalMaterials.forEach(e=>{let t=Array.isArray(e)?e:[e],a=M.currentMode===`original`?[]:td(e),o=Array.isArray(a)?a:[a];t.forEach(e=>{ud(e)&&md(e,n,i)}),o.forEach(e=>{ud(e)&&md(e,r,i)})}),ep&&[`white`,`hidden`].includes(M.currentMode)&&(np=ep.whiteGlassTransparency)}Tt?.addEventListener(`input`,ip);function ap(){let e=!!M.model&&M.currentMode===`renaissance`&&Jf.getAttribute(`aria-pressed`)===`true`;e?N.background.set(0):N.background.copy(Xe),document.documentElement.classList.toggle(`black-back-active`,e)}Jf.addEventListener(`click`,()=>{let e=Jf.getAttribute(`aria-pressed`)!==`true`;Jf.setAttribute(`aria-pressed`,String(e)),Jf.classList.toggle(`active`,e),ap()}),document.querySelectorAll(`[data-mode]`).forEach(e=>{e.addEventListener(`click`,()=>{op(e.dataset.mode)})});function op(e){ef(),M.currentMode=e,Jf.hidden=e!==`renaissance`,Jf.disabled=!M.model,ap();let t=e===`wireframe`,n=[`original`,`white`,`hidden`].includes(e);Tt&&(Tt.disabled=!n),t&&qf===null&&(qf=Ct.checked,Ct.checked=!1,Ct.dispatchEvent(new Event(`change`))),!t&&qf!==null&&(Ct.checked=qf,Ct.dispatchEvent(new Event(`change`)),qf=null),[xt,St,Ct].forEach(e=>{e.disabled=t}),kt?.classList.toggle(`disabled`,t),document.querySelectorAll(`[data-mode]`).forEach(t=>{t.classList.toggle(`active`,t.dataset.mode===e),t.setAttribute(`aria-pressed`,String(t.dataset.mode===e))}),M.model&&(M.edgeGroup.visible=!1,P.shadow.normalBias=e===`white`||e===`hidden`?Qf:$f,Ge.groundColor.set(e===`white`||e===`hidden`?Xf:Zf),e===`renaissance`?(Ge.intensity=0,M.ground&&(M.ground.material.opacity=1)):(Ge.intensity=e===`white`||e===`hidden`?Yf:Je,M.ground&&(M.ground.material.opacity=hd)),df(M.model,t=>{let n=M.originalMaterials.get(t.uuid);switch(e){case`original`:t.material=n,t.castShadow=!dd(n),t.visible=!0;break;case`white`:t.material=td(n),t.castShadow=!dd(n),t.visible=!0;break;case`hidden`:t.material=td(n),t.castShadow=!dd(n),t.visible=!0,M.edgeGroup.visible=!0;break;case`wireframe`:t.material=Hu,t.castShadow=!0,t.visible=!0;break;case`renaissance`:{let e=M.originalMaterials.get(t.uuid);t.material=pd(e),t.castShadow=!dd(e)||fd(e),t.visible=!0;break}}}),ip(),Vf(),Kf(),rp())}ep=Le(e=>{ep=e,rp()});function sp(e,t){Array.isArray(t)?t.forEach(t=>sp(e,t)):t&&e.add(t)}function cp(e){let t=new Set([...e].filter(e=>e?.isTexture)),n=new Set;for(let e of t){let t=e.image;t&&typeof t.close==`function`&&n.add(t)}t.forEach(e=>e.dispose()),n.forEach(e=>e.close())}function lp({textures:e=[],materials:t=[],geometries:n=[]}={}){cp(e);let r=new Set;t.forEach(e=>sp(r,e)),r.forEach(e=>e.dispose()),new Set(n).forEach(e=>e?.dispose())}function up(e,{materials:t=[],geometries:n=[],excludedMaterials:r=[],excludeMaterial:i=()=>!1}={}){let a=new Set,o=new Set,s=new Set,c=new Set(r),l=e=>c.has(e)||i(e);e?.traverse(e=>{e.geometry&&a.add(e.geometry),sp(o,e.material)}),n.forEach(e=>{e&&a.add(e)}),t.forEach(e=>sp(o,e));for(let e of o)if(!l(e))for(let t of Object.values(e))t?.isTexture&&s.add(t);cp(s),o.forEach(e=>{l(e)||e.dispose()}),a.forEach(e=>e.dispose())}function dp(e){up(e)}var fp=window.parent!==window&&new URLSearchParams(location.search).get(`rendererDebug`)===`1`&&new URLSearchParams(location.search).get(`renderWorker`)===`1`;export{nt as $,yd as A,Wu as B,rf as C,Et as Ct,Ed as D,Cd as E,Uu as F,Ut as G,Vu as H,cd as I,wt as J,Gt as K,$u as L,gd as M,ld as N,wd as O,ed as P,dt as Q,id as R,af as S,Dt as St,Dd as T,Hu as U,Ku as V,Wt as W,ct as X,lt as Y,zt as Z,ef as _,ft as _t,cp as a,gt as at,uf as b,St as bt,Gf as c,mt as ct,Hf as d,jt as dt,rt as et,Uf as f,vt as ft,of as g,tt as gt,df as h,Ct as ht,lp as i,st as it,vd as j,Td as k,zf as l,Bt as lt,ff as m,At as mt,dp as n,Lt as nt,op as o,_t as ot,Mf as p,yt as pt,ht as q,up as r,ut as rt,Kf as s,pt as st,fp as t,Rt as tt,Bf as u,bt as ut,lf as v,et as vt,nf as w,cf as x,Tt as xt,sf as y,xt as yt,rd as z};