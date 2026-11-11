import{$n as e,Bt as t,C as n,Cr as r,Ct as i,Dr as a,Et as o,Fn as s,Ft as c,Gr as l,Gt as u,H as d,Hn as f,Ht as p,Jt as m,Kt as h,L as g,M as _,Mr as v,Mt as y,Nr as b,Or as x,P as S,Pt as C,Qn as w,R as T,Rn as ee,Tt as te,U as ne,Ut as re,Vn as ie,Vt as ae,Zn as oe,c as se,d as ce,dt as E,er as le,ft as ue,gr as de,h as fe,hr as pe,kr as me,m as he,mr as ge,ot as _e,p as ve,pr as ye,rr as be,st as xe,tn as Se,u as Ce,ut as we,w as Te,wt as D,xt as Ee,zn as De}from"./HDRLoader-BW6j_MKB.js";import{$ as O,B as Oe,C as ke,Ct as Ae,D as je,F as Me,H as Ne,I as Pe,J as Fe,K as Ie,L as Le,P as Re,Q as k,R as ze,S as Be,St as Ve,U as He,W as Ue,Y as We,Z as Ge,_t as A,a as Ke,at as qe,b as j,bt as Je,ct as Ye,d as Xe,dt as Ze,et as Qe,f as $e,ft as et,gt as tt,ht as nt,i as rt,it,l as at,lt as ot,mt as st,nt as ct,o as lt,ot as ut,p as dt,pt as ft,q as pt,r as mt,rt as ht,s as M,st as gt,tt as _t,ut as N,v as vt,vt as yt,w as bt,wt as P,x as xt,xt as St,y as F,yt as Ct,z as wt}from"./raycast-hit-filter-0osDC4il.js";var Tt=document.querySelector(`#startScreen`),Et=document.querySelector(`#showAllButton`),Dt=document.querySelector(`#groupMenu`),Ot=document.querySelector(`#groupMenuButton`),kt=document.querySelector(`#groupList`),At=document.querySelector(`#showAllGroupsButton`),jt=document.querySelector(`#hideAllGroupsButton`),Mt=document.querySelector(`#openButton`),Nt=document.querySelector(`#demoButton`),Pt=document.querySelector(`#demo2Button`);document.querySelector(`#openAgain`);var Ft=document.querySelector(`#fileInput`),It=document.querySelector(`#sidePanel`),Lt=document.querySelector(`#panelButton`),Rt=document.querySelector(`#perspectiveButton`),zt=document.querySelector(`#axonButton`),Bt=document.querySelector(`#orthoButton`),Vt=document.querySelector(`#orthoMenu`),Ht=document.querySelector(`#sectionMenu`),Ut=document.querySelector(`#sectionMenuButton`),Wt=document.querySelector(`#sectionButton`),Gt=document.querySelector(`#sunAngle`),Kt=document.querySelector(`#sunHeight`),qt=document.querySelector(`#shadowToggle`),Jt=document.querySelector(`#cameraFov`),Yt=document.querySelector(`#transparency`),Xt=document.querySelector(`#windowLightsToggle`),Zt=document.querySelector(`#windowLightsIntensity`),Qt=document.querySelector(`#photo1Button`),$t=document.querySelector(`#lightSection`),en=document.querySelector(`#sectionSlider`),tn=document.querySelector(`#sectionFlip`),nn=document.querySelector(`#sectionDebug`),rn=document.querySelector(`#sectionFill`),an=document.querySelectorAll(`[data-section-color]`),on=document.querySelector(`#sectionDebugStats`),sn=document.querySelector(`#status`),cn=document.querySelector(`#modelStats`),ln=document.querySelector(`#materialList`),un=document.querySelector(`#elementTypeList`),dn=document.querySelector(`#retainedControls`),fn=`enabled`,pn=`disabled`;function mn(e){return e?.parser?.json?.asset?.extras?.dropView?.materialWorkbench?.policy===`disabled`?pn:fn}function hn({embedded:e=!1,policy:t=fn,sourceKind:n=null}={}){if(e)return{visible:!1,canEdit:!1,canSave:!1};let r=t!==pn;return{visible:!0,canEdit:r,canSave:r&&n===`user`}}function gn(e){return e==null}var _n=1.25,vn=65535,yn=2**-24,bn=Symbol(`SKIP_GENERATION`),xn={strategy:0,maxDepth:40,targetLeafSize:10,useSharedArrayBuffer:!1,setBoundingBox:!0,onProgress:null,indirect:!1,verbose:!0,range:null,[bn]:!1};function I(e,t,n){return n.min.x=t[e],n.min.y=t[e+1],n.min.z=t[e+2],n.max.x=t[e+3],n.max.y=t[e+4],n.max.z=t[e+5],n}function Sn(e){let t=-1,n=-1/0;for(let r=0;r<3;r++){let i=e[r+3]-e[r];i>n&&(n=i,t=r)}return t}function Cn(e,t,n){for(let r=0;r<3;r++){let i=t[e+2*r],a=t[e+2*r+1],o=i-a,s=i+a;o<n[r]&&(n[r]=o),s>n[r+3]&&(n[r+3]=s)}}function wn(e){let t=e[3]-e[0],n=e[4]-e[1],r=e[5]-e[2];return 2*(t*n+n*r+r*t)}function L(e,t){return t[e+15]===vn}function R(e,t){return t[e+6]}function z(e,t){return t[e+14]}function B(e){return e+8}function V(e,t){return e+t[e+6]*8}function Tn(e,t){return t[e+7]}function H(e){return e}function En(e,t,n,r,i){let a=1/0,o=1/0,s=1/0,c=-1/0,l=-1/0,u=-1/0,d=1/0,f=1/0,p=1/0,m=-1/0,h=-1/0,g=-1/0,_=e.offset||0;for(let r=(t-_)*6,i=(t+n-_)*6;r<i;r+=6){let t=e[r+0],n=e[r+1],i=t-n,_=t+n;i<a&&(a=i),_>c&&(c=_),t<d&&(d=t),t>m&&(m=t);let v=e[r+2],y=e[r+3],b=v-y,x=v+y;b<o&&(o=b),x>l&&(l=x),v<f&&(f=v),v>h&&(h=v);let S=e[r+4],C=e[r+5],w=S-C,T=S+C;w<s&&(s=w),T>u&&(u=T),S<p&&(p=S),S>g&&(g=S)}r[0]=a,r[1]=o,r[2]=s,r[3]=c,r[4]=l,r[5]=u,i[0]=d,i[1]=f,i[2]=p,i[3]=m,i[4]=h,i[5]=g}var Dn=8,On=8,kn=new Int32Array(Dn),An=new Float32Array(48),jn=new Float32Array(48),Mn=new Float32Array(6),Nn=new Float32Array(6),Pn=new Int32Array(On),Fn=new Float32Array(48);function In(e,t,n,r){for(let i=0;i<3;i++){let a=t[e+2*i],o=t[e+2*i+1],s=a-o,c=a+o;s<n[r+i]&&(n[r+i]=s),c>n[r+i+3]&&(n[r+i+3]=c)}}function Ln(e,t){let n=e[t+3]-e[t],r=e[t+4]-e[t+1],i=e[t+5]-e[t+2];return 2*(n*r+r*i+i*n)}function Rn(e,t,n,r,i,a){let o=-1,s=0;if(a===0)o=Sn(t),o!==-1&&(s=(t[o]+t[o+3])/2);else if(a===1)o=Sn(e),o!==-1&&(s=zn(n,r,i,o));else if(a===2){let a=wn(e),c=_n*i,l=n.offset||0,u=(r-l)*6,d=(r+i-l)*6;for(let e=0;e<3;e++){let r=t[e],l=(t[e+3]-r)/Dn;if(i<On){for(let t=0;t<i;t++){let r=u+t*6,i=n[r+2*e],a=t;for(;a>0&&n[Pn[a-1]+2*e]>i;)Pn[a]=Pn[a-1],a--;Pn[a]=r}for(let e=0;e<3;e++)Mn[e]=1/0,Mn[e+3]=-1/0,Nn[e]=1/0,Nn[e+3]=-1/0;for(let e=i-1;e>=0;e--)Cn(Pn[e],n,Nn),Fn.set(Nn,e*6);for(let t=0;t<i-1;t++){Cn(Pn[t],n,Mn);let r=n[Pn[t+1]+2*e];if(n[Pn[t]+2*e]===r)continue;let l=t+1,u=i-l,d=wn(Mn)/a,f=Ln(Fn,l*6)/a,p=1+_n*(d*l+f*u);p<c&&(o=e,c=p,s=r)}}else{for(let e=0;e<Dn;e++){kn[e]=0;for(let t=0;t<3;t++)An[e*6+t]=1/0,An[e*6+t+3]=-1/0}for(let t=u;t<d;t+=6){let i=~~((n[t+2*e]-r)/l);i>=Dn&&(i=7),kn[i]++,In(t,n,An,i*6)}for(let e=0;e<6;e++)jn[42+e]=An[42+e];for(let e=6;e>=0;e--){let t=e*6,n=t+6;for(let e=0;e<3;e++)jn[t+e]=Math.min(An[t+e],jn[n+e]),jn[t+e+3]=Math.max(An[t+e+3],jn[n+e+3])}let t=0;for(let n=0;n<7;n++){let u=n*6,d=kn[n];if(d!==0)for(let e=0;e<3;e++)t===0?(Mn[e]=An[u+e],Mn[e+3]=An[u+e+3]):(Mn[e]=Math.min(Mn[e],An[u+e]),Mn[e+3]=Math.max(Mn[e+3],An[u+e+3]));t+=d;let f=0,p=0;t!==0&&(f=wn(Mn)/a);let m=i-t;m!==0&&(p=Ln(jn,u+6)/a);let h=1+_n*(f*t+p*m);h<c&&(o=e,c=h,s=r+l+n*l)}}}}else console.warn(`BVH: Invalid build strategy value ${a} used.`);return{axis:o,pos:s}}function zn(e,t,n,r){let i=0,a=e.offset;for(let o=t,s=t+n;o<s;o++)i+=e[(o-a)*6+r*2];return i/n}function Bn(e,t,n,r,i,a){let o=r,s=r+i-1,c=a.pos,l=a.axis*2,u=n.offset||0;for(;;){for(;o<=s&&n[(o-u)*6+l]<c;)o++;for(;o<=s&&n[(s-u)*6+l]>=c;)s--;if(o<s){for(let n=0;n<t;n++){let r=e[o*t+n];e[o*t+n]=e[s*t+n],e[s*t+n]=r}for(let e=0;e<6;e++){let t=o-u,r=s-u,i=n[t*6+e];n[t*6+e]=n[r*6+e],n[r*6+e]=i}o++,s--}else return o}}var Vn=2**32,Hn=new Float32Array(6),Un=new Float32Array(6);function Wn(e,t,n,r,i,a){let{maxDepth:o,verbose:s,targetLeafSize:c,_strictLeafSize:l=1/0,strategy:u,onProgress:d,useSharedArrayBuffer:f=!1}=i,p=e.primitiveBuffer,m=e.primitiveBufferStride,h=new(f?SharedArrayBuffer:ArrayBuffer)(32*Math.max(1,2*Math.ceil(r)-1)),g=new Float32Array(h),_=new Uint32Array(h),v=new Uint16Array(h),y=0,b=!1;return En(t,n,r,Hn,Un),C(n,r,0),h.slice(0,y*32);function x(e){d&&d((e-a.offset)/a.count)}function S(e,t,n){let r=e*2;_[e+6]=t,v[r+14]=n,v[r+15]=vn,x(t+n)}function C(e,n,r){let i=y++,a=i*8;g.set(Hn,a),!b&&r>=o&&(b=!0,s&&console.warn(`BVH: Max depth of ${o} reached when generating BVH. Consider increasing maxDepth.`));let d=n>l;if(n<=c&&!d||r>=o){S(a,e,n);return}let f=Rn(Hn,Un,t,e,n,u),h=f.axis===-1?-1:Bn(p,m,t,e,n,f);if(f.axis===-1||h===e||h===e+n){if(!d){S(a,e,n);return}f.axis=Math.max(0,Sn(Hn)),h=e+Math.max(1,Math.floor(n/2))}_[a+7]=f.axis;let v=h-e;En(t,e,v,Hn,Un),C(e,v,r+1);let x=y-i;if(x>Vn)throw Error(`MeshBVH: Cannot store relative child node offset greater than 32 bits.`);_[a+6]=x;let w=n-v;En(t,h,w,Hn,Un),C(h,w,r+1)}}function Gn(e,t){let n=e.getRootRanges(t.range),r=n[0],i=n[n.length-1],a={offset:r.offset,count:i.offset+i.count-r.offset},o=new Float32Array(6*a.count);o.offset=a.offset,e.computePrimitiveBounds(a.offset,a.count,o),e._roots=n.map(n=>Wn(e,o,n.offset,n.count,t,a))}var Kn=class{constructor(e){this._getNewPrimitive=e,this._primitives=[]}getPrimitive(){let e=this._primitives;return e.length===0?this._getNewPrimitive():e.pop()}releasePrimitive(e){this._primitives.push(e)}},U=new class{constructor(){this.float32Array=null,this.uint16Array=null,this.uint32Array=null;let e=[],t=null;this.setBuffer=n=>{t&&e.push(t),t=n,this.float32Array=new Float32Array(n),this.uint16Array=new Uint16Array(n),this.uint32Array=new Uint32Array(n)},this.clearBuffer=()=>{t=null,this.float32Array=null,this.uint16Array=null,this.uint32Array=null,e.length!==0&&this.setBuffer(e.pop())}}},qn,Jn,Yn=[],Xn=new Kn(()=>new se);function Zn(e,t,n,r,i,a){qn=Xn.getPrimitive(),Jn=Xn.getPrimitive(),Yn.push(qn,Jn),U.setBuffer(e._roots[t]);let o=Qn(0,e.geometry,n,r,i,a);U.clearBuffer(),Xn.releasePrimitive(qn),Xn.releasePrimitive(Jn),Yn.pop(),Yn.pop();let s=Yn.length;return s>0&&(Jn=Yn[s-1],qn=Yn[s-2]),o}function Qn(e,t,n,r,i=null,a=0,o=0){let{float32Array:s,uint16Array:c,uint32Array:l}=U,u=e*2;if(L(u,c)){let t=R(e,l),n=z(u,c);return I(H(e),s,qn),r(t,n,!1,o,a+e/8,qn)}{let u=B(e),d=V(e,l),f=u,p=d,m,h,g,_;if(i&&(g=qn,_=Jn,I(H(f),s,g),I(H(p),s,_),m=i(g),h=i(_),h<m)){f=d,p=u;let e=m;m=h,h=e,g=_}g||(g=qn,I(H(f),s,g));let v=L(f*2,c),y=n(g,v,m,o+1,a+f/8),b;if(y===2){let e=w(f);b=r(e,T(f)-e,!0,o+1,a+f/8,g)}else b=y&&Qn(f,t,n,r,i,a,o+1);if(b)return!0;_=Jn,I(H(p),s,_);let x=L(p*2,c),S=n(_,x,h,o+1,a+p/8),C;if(S===2){let e=w(p);C=r(e,T(p)-e,!0,o+1,a+p/8,_)}else C=S&&Qn(p,t,n,r,i,a,o+1);return!!C;function w(e){let{uint16Array:t,uint32Array:n}=U,r=e*2;for(;!L(r,t);)e=B(e),r=e*2;return R(e,n)}function T(e){let{uint16Array:t,uint32Array:n}=U,r=e*2;for(;!L(r,t);)e=V(e,n),r=e*2;return R(e,n)+z(r,t)}}}var $n=new U.constructor,er=new U.constructor,tr=new Kn(()=>new se),nr=new se,rr=new se,ir=new se,ar=new se,or=!1;function sr(e,t,n,r){if(or)throw Error(`MeshBVH: Recursive calls to bvhcast not supported.`);or=!0;let i=e._roots,a=t._roots,o,s=0,c=0,l=new D().copy(n).invert();for(let e=0,t=i.length;e<t;e++){$n.setBuffer(i[e]),c=0;let t=tr.getPrimitive();I(H(0),$n.float32Array,t),t.applyMatrix4(l);for(let e=0,i=a.length;e<i&&(er.setBuffer(a[e]),o=cr(0,0,n,l,r,s,c,0,0,t),er.clearBuffer(),c+=a[e].byteLength/32,!o);e++);if(tr.releasePrimitive(t),$n.clearBuffer(),s+=i[e].byteLength/32,o)break}return or=!1,o}function cr(e,t,n,r,i,a=0,o=0,s=0,c=0,l=null,u=!1){let d,f;u?(d=er,f=$n):(d=$n,f=er);let p=d.float32Array,m=d.uint32Array,h=d.uint16Array,g=f.float32Array,_=f.uint32Array,v=f.uint16Array,y=e*2,b=t*2,x=L(y,h),S=L(b,v),C=!1;if(S&&x)C=u?i(R(t,_),z(t*2,v),R(e,m),z(e*2,h),c,o+t/8,s,a+e/8):i(R(e,m),z(e*2,h),R(t,_),z(t*2,v),s,a+e/8,c,o+t/8);else if(S){let l=tr.getPrimitive();I(H(t),g,l),l.applyMatrix4(n);let d=B(e),f=V(e,m);I(H(d),p,nr),I(H(f),p,rr);let h=l.intersectsBox(nr),_=l.intersectsBox(rr);C=h&&cr(t,d,r,n,i,o,a,c,s+1,l,!u)||_&&cr(t,f,r,n,i,o,a,c,s+1,l,!u),tr.releasePrimitive(l)}else{let d=B(t),f=V(t,_);I(H(d),g,ir),I(H(f),g,ar);let h=l.intersectsBox(ir),v=l.intersectsBox(ar);if(h&&v)C=cr(e,d,n,r,i,a,o,s,c+1,l,u)||cr(e,f,n,r,i,a,o,s,c+1,l,u);else if(h){if(x)C=cr(e,d,n,r,i,a,o,s,c+1,l,u);else{let t=tr.getPrimitive();t.copy(ir).applyMatrix4(n);let l=B(e),f=V(e,m);I(H(l),p,nr),I(H(f),p,rr);let h=t.intersectsBox(nr),g=t.intersectsBox(rr);C=h&&cr(d,l,r,n,i,o,a,c,s+1,t,!u)||g&&cr(d,f,r,n,i,o,a,c,s+1,t,!u),tr.releasePrimitive(t)}}else if(v){if(x)C=cr(e,f,n,r,i,a,o,s,c+1,l,u);else{let t=tr.getPrimitive();t.copy(ar).applyMatrix4(n);let l=B(e),d=V(e,m);I(H(l),p,nr),I(H(d),p,rr);let h=t.intersectsBox(nr),g=t.intersectsBox(rr);C=h&&cr(f,l,r,n,i,o,a,c,s+1,t,!u)||g&&cr(f,d,r,n,i,o,a,c,s+1,t,!u),tr.releasePrimitive(t)}}}return C}var lr=new class{constructor(){let e=null,t=null,n=null,r=!1;this.root=null,this.buffer=null,this.uint32Array=null,this.uint16Array=null,this.setBVH=(i,a)=>{if(r)throw Error(`BVHTraversalHelper: cannot call setBVH during an active traversal.`);this.root=a,this.buffer=e=i._roots[a],this.uint16Array=n=new Uint16Array(e),this.uint32Array=t=new Uint32Array(e)},this.reset=()=>{this.root=null,this.buffer=e=null,this.uint16Array=n=null,this.uint32Array=t=null},this.getRangeStart=e=>{let r=e*2;for(;!L(r,n);)e=B(e),r=e*2;return R(e,t)},this.getRangeEnd=e=>{let r=e*2;for(;!L(r,n);)e=V(e,t),r=e*2;return R(e,t)+z(r,n)};let i=(e,r,a)=>{let o=L(r*2,n);if(!e(a,o,r)&&!o){let n=B(r),o=V(r,t);i(e,n,a+1),i(e,o,a+1)}};this.traverseBuffer=e=>{if(r)throw Error(`BVHTraversalHelper: cannot start a traversal during an active traversal.`);r=!0;try{i(e,0,0)}finally{r=!1}},this.traverse=r=>{this.traverseBuffer((i,a,o)=>{if(a){let s=o*2,c=t[o+6],l=n[s+14];return r(i,a,new Float32Array(e,o*4,6),c,l)}{let n=Tn(o,t);return r(i,a,new Float32Array(e,o*4,6),n)}})}}},ur=new se,dr=new Float32Array(6),fr=class{constructor(){this._roots=null,this.primitiveBuffer=null,this.primitiveBufferStride=null}init(e){e={...xn,...e},`maxLeafSize`in e&&(console.warn(`BVH: "maxLeafSize" option has been deprecated. Use "targetLeafSize", instead.`),e={...e,targetLeafSize:e.maxLeafSize}),Gn(this,e)}getRootRanges(){throw Error(`BVH: getRootRanges() not implemented`)}writePrimitiveBounds(){throw Error(`BVH: writePrimitiveBounds() not implemented`)}writePrimitiveRangeBounds(e,t,n,r){let i=1/0,a=1/0,o=1/0,s=-1/0,c=-1/0,l=-1/0;for(let n=e,r=e+t;n<r;n++){this.writePrimitiveBounds(n,dr,0);let[e,t,r,u,d,f]=dr;e<i&&(i=e),u>s&&(s=u),t<a&&(a=t),d>c&&(c=d),r<o&&(o=r),f>l&&(l=f)}return n[r+0]=i,n[r+1]=a,n[r+2]=o,n[r+3]=s,n[r+4]=c,n[r+5]=l,n}computePrimitiveBounds(e,t,n){let r=n.offset||0;for(let i=e,a=e+t;i<a;i++){this.writePrimitiveBounds(i,dr,0);let[e,t,a,o,s,c]=dr,l=(e+o)/2,u=(t+s)/2,d=(a+c)/2,f=(o-e)/2,p=(s-t)/2,m=(c-a)/2,h=(i-r)*6;n[h+0]=l,n[h+1]=f+(Math.abs(l)+f)*yn,n[h+2]=u,n[h+3]=p+(Math.abs(u)+p)*yn,n[h+4]=d,n[h+5]=m+(Math.abs(d)+m)*yn}return n}shiftPrimitiveOffsets(e){let t=this._indirectBuffer;if(t)for(let n=0,r=t.length;n<r;n++)t[n]+=e;else{let t=this._roots;for(let n=0;n<t.length;n++){let r=t[n],i=new Uint32Array(r),a=new Uint16Array(r),o=r.byteLength/32;for(let t=0;t<o;t++){let n=8*t;L(2*n,a)&&(i[n+6]+=e)}}}}traverse(e,t=0){lr.setBVH(this,t),lr.traverse(e),lr.reset()}refit(){let e=this._roots;for(let t=0,n=e.length;t<n;t++){let n=e[t],r=new Uint32Array(n),i=new Uint16Array(n),a=new Float32Array(n),o=n.byteLength/32;for(let e=o-1;e>=0;e--){let t=e*8,n=t*2;if(L(n,i)){let e=R(t,r),o=z(n,i);this.writePrimitiveRangeBounds(e,o,dr,0),a.set(dr,t)}else{let e=B(t),n=V(t,r);for(let r=0;r<3;r++){let i=a[e+r],o=a[e+r+3],s=a[n+r],c=a[n+r+3];a[t+r]=i<s?i:s,a[t+r+3]=o>c?o:c}}}}}getBoundingBox(e){return e.makeEmpty(),this._roots.forEach(t=>{I(0,new Float32Array(t),ur),e.union(ur)}),e}shapecast(e){let{boundsTraverseOrder:t,intersectsBounds:n,intersectsRange:r,intersectsPrimitive:i,scratchPrimitive:a,iterate:o}=e;if(r&&i){let e=r;r=(t,n,r,s,c)=>e(t,n,r,s,c)?!0:o(t,n,this,i,r,s,a)}else r||=i?(e,t,n,r)=>o(e,t,this,i,n,r,a):(e,t,n)=>n;let s=!1,c=0,l=this._roots;for(let e=0,i=l.length;e<i;e++){let i=l[e];if(s=Zn(this,e,n,r,t,c),s)break;c+=i.byteLength/32}return s}bvhcast(e,t,n){let{intersectsRanges:r}=n;return sr(this,e,t,r)}};function pr(){return typeof SharedArrayBuffer<`u`}function mr(e){return e.index?e.index.count:e.attributes.position.count}function hr(e){return mr(e)/3}function gr(e,t=ArrayBuffer){return e>65535?new Uint32Array(new t(4*e)):new Uint16Array(new t(2*e))}function _r(e,t){if(!e.index){let n=e.attributes.position.count,r=gr(n,t.useSharedArrayBuffer?SharedArrayBuffer:ArrayBuffer);e.setIndex(new Ce(r,1));for(let e=0;e<n;e++)r[e]=e}}function vr(e,t,n){let r=mr(e)/n,i=t||e.drawRange,a=i.start/n,o=(i.start+i.count)/n,s=Math.max(0,a),c=Math.min(r,o)-s;return{offset:Math.floor(s),count:Math.floor(c)}}function yr(e,t){return e.groups.map(e=>({offset:e.start/t,count:e.count/t}))}function br(e,t,n){let r=vr(e,t,n),i=yr(e,n);if(!i.length)return[r];let a=[],o=r.offset,s=r.offset+r.count,c=mr(e)/n,l=[];for(let e of i){let{offset:t,count:n}=e,r=t,i=t+(isFinite(n)?n:c-t);r<s&&i>o&&(l.push({pos:Math.max(o,r),isStart:!0}),l.push({pos:Math.min(s,i),isStart:!1}))}l.sort((e,t)=>e.pos===t.pos?e.type===`end`?-1:1:e.pos-t.pos);let u=0,d=null;for(let e of l){let t=e.pos;u!==0&&t!==d&&a.push({offset:d,count:t-d}),u+=e.isStart?1:-1,d=t}return a}function xr(e,t){let n=e[e.length-1],r=n.offset+n.count>2**16,i=e.reduce((e,t)=>e+t.count,0),a=r?4:2,o=t?new SharedArrayBuffer(i*a):new ArrayBuffer(i*a),s=r?new Uint32Array(o):new Uint16Array(o),c=0;for(let t=0;t<e.length;t++){let{offset:n,count:r}=e[t];for(let e=0;e<r;e++)s[c+e]=n+e;c+=r}return s}var Sr=class extends fr{get indirect(){return!!this._indirectBuffer}get primitiveStride(){return null}get primitiveBufferStride(){return this.indirect?1:this.primitiveStride}set primitiveBufferStride(e){}get primitiveBuffer(){return this.indirect?this._indirectBuffer:this.geometry.index.array}set primitiveBuffer(e){}constructor(e,t={}){if(!e.isBufferGeometry)throw Error(`BVH: Only BufferGeometries are supported.`);if(e.index&&e.index.isInterleavedBufferAttribute)throw Error(`BVH: InterleavedBufferAttribute is not supported for the index attribute.`);if(t.useSharedArrayBuffer&&!pr())throw Error(`BVH: SharedArrayBuffer is not available.`);super(),this.geometry=e,this.resolvePrimitiveIndex=t.indirect?e=>this._indirectBuffer[e]:e=>e,this.primitiveBuffer=null,this.primitiveBufferStride=null,this._indirectBuffer=null,t={...xn,...t},t[bn]||this.init(t)}init(e){let{geometry:t,primitiveStride:n}=this;if(e.indirect){let r=xr(br(t,e.range,n),e.useSharedArrayBuffer);this._indirectBuffer=r}else _r(t,e);super.init(e),!t.boundingBox&&e.setBoundingBox&&(t.boundingBox=this.getBoundingBox(new se))}getRootRanges(e){return this.indirect?[{offset:0,count:this._indirectBuffer.length}]:br(this.geometry,e,this.primitiveStride)}raycastObject3D(){throw Error(`BVH: raycastObject3D() not implemented`)}},Cr=class{constructor(){this.min=1/0,this.max=-1/0}setFromPointsField(e,t){let n=1/0,r=-1/0;for(let i=0,a=e.length;i<a;i++){let a=e[i][t];n=a<n?a:n,r=a>r?a:r}this.min=n,this.max=r}setFromPoints(e,t){let n=1/0,r=-1/0;for(let i=0,a=t.length;i<a;i++){let a=t[i],o=e.dot(a);n=o<n?o:n,r=o>r?o:r}this.min=n,this.max=r}isSeparated(e){return this.min>e.max||e.min>this.max}};Cr.prototype.setFromBox=(function(){let e=new x;return function(t,n){let r=n.min,i=n.max,a=1/0,o=-1/0;for(let n=0;n<=1;n++)for(let s=0;s<=1;s++)for(let c=0;c<=1;c++){e.x=r.x*n+i.x*(1-n),e.y=r.y*s+i.y*(1-s),e.z=r.z*c+i.z*(1-c);let l=t.dot(e);a=Math.min(l,a),o=Math.max(l,o)}this.min=a,this.max=o}})();var wr=(function(){let e=new x,t=new x,n=new x;return function(r,i,a){let o=r.start,s=e,c=i.start,l=t;n.subVectors(o,c),e.subVectors(r.end,r.start),t.subVectors(i.end,i.start);let u=n.dot(l),d=l.dot(s),f=l.dot(l),p=n.dot(s),m=s.dot(s)*f-d*d,h,g;h=m===0?0:(u*d-p*f)/m,g=(u+h*d)/f,a.x=h,a.y=g}})(),Tr=(function(){let e=new a,t=new x,n=new x;return function(r,i,a,o){wr(r,i,e);let s=e.x,c=e.y;if(s>=0&&s<=1&&c>=0&&c<=1){r.at(s,a),i.at(c,o);return}if(s>=0&&s<=1){c<0?i.at(0,o):i.at(1,o),r.closestPointToPoint(o,!0,a);return}if(c>=0&&c<=1){s<0?r.at(0,a):r.at(1,a),i.closestPointToPoint(a,!0,o);return}{let e;e=s<0?r.start:r.end;let l;l=c<0?i.start:i.end;let u=t,d=n;if(r.closestPointToPoint(l,!0,t),i.closestPointToPoint(e,!0,n),u.distanceToSquared(l)<=d.distanceToSquared(e)){a.copy(u),o.copy(l);return}a.copy(e),o.copy(d);return}}})(),Er=(function(){let e=new x,t=new x,n=new p,r=new _e;return function(i,a){let{radius:o,center:s}=i,{a:c,b:l,c:u}=a;if(r.start=c,r.end=l,r.closestPointToPoint(s,!0,e).distanceTo(s)<=o||(r.start=c,r.end=u,r.closestPointToPoint(s,!0,e).distanceTo(s)<=o)||(r.start=l,r.end=u,r.closestPointToPoint(s,!0,e).distanceTo(s)<=o))return!0;let d=a.getPlane(n);if(Math.abs(d.distanceToPoint(s))<=o){let e=d.projectPoint(s,t);if(a.containsPoint(e))return!0}return!1}})(),Dr=[`x`,`y`,`z`],Or=1e-15,kr=Or*Or;function Ar(e){return Math.abs(e)<Or}var jr=class extends de{constructor(...e){super(...e),this.isExtendedTriangle=!0,this.satAxes=[,,,,].fill().map(()=>new x),this.satBounds=[,,,,].fill().map(()=>new Cr),this.points=[this.a,this.b,this.c],this.plane=new p,this.isDegenerateIntoSegment=!1,this.isDegenerateIntoPoint=!1,this.degenerateSegment=new _e,this.needsUpdate=!0}intersectsSphere(e){return Er(e,this)}update(){let e=this.a,t=this.b,n=this.c,r=this.points,i=this.satAxes,a=this.satBounds,o=i[0],s=a[0];this.getNormal(o),s.setFromPoints(o,r);let c=i[1],l=a[1];c.subVectors(e,t),l.setFromPoints(c,r);let u=i[2],d=a[2];u.subVectors(t,n),d.setFromPoints(u,r);let f=i[3],p=a[3];f.subVectors(n,e),p.setFromPoints(f,r);let m=c.length(),h=u.length(),g=f.length();this.isDegenerateIntoPoint=!1,this.isDegenerateIntoSegment=!1,m<Or?h<Or||g<Or?this.isDegenerateIntoPoint=!0:(this.isDegenerateIntoSegment=!0,this.degenerateSegment.start.copy(e),this.degenerateSegment.end.copy(n)):h<Or?g<Or?this.isDegenerateIntoPoint=!0:(this.isDegenerateIntoSegment=!0,this.degenerateSegment.start.copy(t),this.degenerateSegment.end.copy(e)):g<Or&&(this.isDegenerateIntoSegment=!0,this.degenerateSegment.start.copy(n),this.degenerateSegment.end.copy(t)),this.plane.setFromNormalAndCoplanarPoint(o,e),this.needsUpdate=!1}};jr.prototype.closestPointToSegment=(function(){let e=new x,t=new x,n=new _e;return function(r,i=null,a=null){this.needsUpdate&&this.update();let{start:o,end:s}=r,c=this.points,l,u=1/0;if(this.plane.distanceToPoint(o)*this.plane.distanceToPoint(s)<0&&this.plane.intersectLine(r,e)!==null&&this.containsPoint(e))return i&&i.copy(e),a&&a.copy(e),0;for(let o=0;o<3;o++){let s=(o+1)%3;n.start.copy(c[o]),n.end.copy(c[s]),Tr(n,r,e,t),l=e.distanceToSquared(t),l<u&&(u=l,i&&i.copy(e),a&&a.copy(t))}return this.closestPointToPoint(o,e),l=o.distanceToSquared(e),l<u&&(u=l,i&&i.copy(e),a&&a.copy(o)),this.closestPointToPoint(s,e),l=s.distanceToSquared(e),l<u&&(u=l,i&&i.copy(e),a&&a.copy(s)),Math.sqrt(u)}})(),jr.prototype.intersectsTriangle=(function(){let e=new jr,t=new Cr,n=new Cr,r=new x,i=new x,o=new x,s=new x,c=new _e,l=new _e,u=new x,d=new a,f=new a;function p(e,i,a,o){let c=r;!e.isDegenerateIntoPoint&&!e.isDegenerateIntoSegment?c.copy(e.plane.normal):c.copy(i.plane.normal);let l=e.satBounds,u=e.satAxes;for(let r=1;r<4;r++){let a=l[r],o=u[r];if(t.setFromPoints(o,i.points),a.isSeparated(t)||(s.copy(c).cross(o),t.setFromPoints(s,e.points),n.setFromPoints(s,i.points),t.isSeparated(n)))return!1}let d=i.satBounds,f=i.satAxes;for(let r=1;r<4;r++){let a=d[r],o=f[r];if(t.setFromPoints(o,e.points),a.isSeparated(t)||(s.crossVectors(c,o),t.setFromPoints(s,e.points),n.setFromPoints(s,i.points),t.isSeparated(n)))return!1}return a&&(o||console.warn(`ExtendedTriangle.intersectsTriangle: Triangles are coplanar which does not support an output edge. Setting edge to 0, 0, 0.`),a.start.set(0,0,0),a.end.set(0,0,0)),!0}function m(e,t,n,r,i,a,o,s,c,l,u){let d=o/(o-s);l.x=r+(i-r)*d,u.start.subVectors(t,e).multiplyScalar(d).add(e),d=o/(o-c),l.y=r+(a-r)*d,u.end.subVectors(n,e).multiplyScalar(d).add(e)}function h(e,t,n,r,i,a,o,s,c,l,u){if(i>0)m(e.c,e.a,e.b,r,t,n,c,o,s,l,u);else if(a>0)m(e.b,e.a,e.c,n,t,r,s,o,c,l,u);else if(s*c>0||o!=0)m(e.a,e.b,e.c,t,n,r,o,s,c,l,u);else if(s!=0)m(e.b,e.a,e.c,n,t,r,s,o,c,l,u);else if(c!=0)m(e.c,e.a,e.b,r,t,n,c,o,s,l,u);else return!0;return!1}function g(e,t,n,i){let a=t.degenerateSegment,o=e.plane.distanceToPoint(a.start),s=e.plane.distanceToPoint(a.end);return Ar(o)?Ar(s)?p(e,t,n,i):(n&&(n.start.copy(a.start),n.end.copy(a.start)),e.containsPoint(a.start)):Ar(s)?(n&&(n.start.copy(a.end),n.end.copy(a.end)),e.containsPoint(a.end)):e.plane.intersectLine(a,r)!=null&&(n&&(n.start.copy(r),n.end.copy(r)),e.containsPoint(r))}function _(e,t,n){let r=t.a;return Ar(e.plane.distanceToPoint(r))&&e.containsPoint(r)?(n&&(n.start.copy(r),n.end.copy(r)),!0):!1}function v(e,t,n){let i=e.degenerateSegment,a=t.a;return i.closestPointToPoint(a,!0,r),a.distanceToSquared(r)<kr&&(n&&(n.start.copy(a),n.end.copy(a)),!0)}function y(e,t,n,a){if(e.isDegenerateIntoSegment){if(t.isDegenerateIntoSegment){let a=e.degenerateSegment,s=t.degenerateSegment,c=i,l=o;a.delta(c),s.delta(l);let u=r.subVectors(s.start,a.start),d=c.x*l.y-c.y*l.x;if(Ar(d))return!1;let f=(u.x*l.y-u.y*l.x)/d,p=-(c.x*u.y-c.y*u.x)/d;return f<0||f>1||p<0||p>1?!1:Ar(a.start.z+c.z*f-(s.start.z+l.z*p))?(n&&(n.start.copy(a.start).addScaledVector(c,f),n.end.copy(a.start).addScaledVector(c,f)),!0):!1}return t.isDegenerateIntoPoint?v(e,t,n):g(t,e,n,a)}if(e.isDegenerateIntoPoint)return t.isDegenerateIntoPoint?t.a.distanceToSquared(e.a)<kr&&(n&&(n.start.copy(e.a),n.end.copy(e.a)),!0):t.isDegenerateIntoSegment?v(t,e,n):_(t,e,n);if(t.isDegenerateIntoPoint)return _(e,t,n);if(t.isDegenerateIntoSegment)return g(e,t,n,a)}return function(t,n=null,r=!1){this.needsUpdate&&this.update(),t.isExtendedTriangle?t.needsUpdate&&t.update():(e.copy(t),e.update(),t=e);let a=y(this,t,n,r);if(a!==void 0)return a;let s=this.plane,m=t.plane,g=m.distanceToPoint(this.a),_=m.distanceToPoint(this.b),v=m.distanceToPoint(this.c);Ar(g)&&(g=0),Ar(_)&&(_=0),Ar(v)&&(v=0);let b=g*_,x=g*v;if(b>0&&x>0)return!1;let S=s.distanceToPoint(t.a),C=s.distanceToPoint(t.b),w=s.distanceToPoint(t.c);Ar(S)&&(S=0),Ar(C)&&(C=0),Ar(w)&&(w=0);let T=S*C,ee=S*w;if(T>0&&ee>0)return!1;i.copy(s.normal),o.copy(m.normal);let te=i.cross(o),ne=0,re=Math.abs(te.x),ie=Math.abs(te.y);ie>re&&(re=ie,ne=1),Math.abs(te.z)>re&&(ne=2);let ae=Dr[ne],oe=this.a[ae],se=this.b[ae],ce=this.c[ae],E=t.a[ae],le=t.b[ae],ue=t.c[ae];if(h(this,oe,se,ce,b,x,g,_,v,d,c)||h(t,E,le,ue,T,ee,S,C,w,f,l))return p(this,t,n,r);if(d.y<d.x){let e=d.y;d.y=d.x,d.x=e,u.copy(c.start),c.start.copy(c.end),c.end.copy(u)}if(f.y<f.x){let e=f.y;f.y=f.x,f.x=e,u.copy(l.start),l.start.copy(l.end),l.end.copy(u)}return d.y<f.x||f.y<d.x?!1:(n&&(f.x>d.x?n.start.copy(l.start):n.start.copy(c.start),f.y<d.y?n.end.copy(l.end):n.end.copy(c.end)),!0)}})(),jr.prototype.distanceToPoint=(function(){let e=new x;return function(t){return this.closestPointToPoint(t,e),t.distanceTo(e)}})(),jr.prototype.distanceToTriangle=(function(){let e=new x,t=new x,n=[`a`,`b`,`c`],r=new _e,i=new _e;return function(a,o=null,s=null){let c=o||s?r:null;if(this.intersectsTriangle(a,c,!0))return(o||s)&&(o&&c.getCenter(o),s&&c.getCenter(s)),0;let l=1/0;for(let t=0;t<3;t++){let r,i=n[t],c=a[i];this.closestPointToPoint(c,e),r=c.distanceToSquared(e),r<l&&(l=r,o&&o.copy(e),s&&s.copy(c));let u=this[i];a.closestPointToPoint(u,e),r=u.distanceToSquared(e),r<l&&(l=r,o&&o.copy(u),s&&s.copy(e))}for(let c=0;c<3;c++){let u=n[c],d=n[(c+1)%3];r.set(this[u],this[d]);for(let c=0;c<3;c++){let u=n[c],d=n[(c+1)%3];i.set(a[u],a[d]),Tr(r,i,e,t);let f=e.distanceToSquared(t);f<l&&(l=f,o&&o.copy(e),s&&s.copy(t))}}return Math.sqrt(l)}})();var W=class{constructor(e,t,n){this.isOrientedBox=!0,this.min=new x,this.max=new x,this.matrix=new D,this.invMatrix=new D,this.points=Array(8).fill().map(()=>new x),this.satAxes=[,,,].fill().map(()=>new x),this.satBounds=[,,,].fill().map(()=>new Cr),this.alignedSatBounds=[,,,].fill().map(()=>new Cr),this.needsUpdate=!1,e&&this.min.copy(e),t&&this.max.copy(t),n&&this.matrix.copy(n)}set(e,t,n){this.min.copy(e),this.max.copy(t),this.matrix.copy(n),this.needsUpdate=!0}copy(e){this.min.copy(e.min),this.max.copy(e.max),this.matrix.copy(e.matrix),this.needsUpdate=!0}};W.prototype.update=(function(){return function(){let e=this.matrix,t=this.min,n=this.max,r=this.points;for(let i=0;i<=1;i++)for(let a=0;a<=1;a++)for(let o=0;o<=1;o++){let s=r[1*i|2*a|4*o];s.x=i?n.x:t.x,s.y=a?n.y:t.y,s.z=o?n.z:t.z,s.applyMatrix4(e)}let i=this.satBounds,a=this.satAxes,o=r[0];for(let e=0;e<3;e++){let t=a[e],n=i[e],s=r[1<<e];t.subVectors(o,s),n.setFromPoints(t,r)}let s=this.alignedSatBounds;s[0].setFromPointsField(r,`x`),s[1].setFromPointsField(r,`y`),s[2].setFromPointsField(r,`z`),this.invMatrix.copy(this.matrix).invert(),this.needsUpdate=!1}})(),W.prototype.intersectsBox=(function(){let e=new Cr;return function(t){this.needsUpdate&&this.update();let n=t.min,r=t.max,i=this.satBounds,a=this.satAxes,o=this.alignedSatBounds;if(e.min=n.x,e.max=r.x,o[0].isSeparated(e)||(e.min=n.y,e.max=r.y,o[1].isSeparated(e))||(e.min=n.z,e.max=r.z,o[2].isSeparated(e)))return!1;for(let n=0;n<3;n++){let r=a[n],o=i[n];if(e.setFromBox(r,t),o.isSeparated(e))return!1}return!0}})(),W.prototype.intersectsTriangle=(function(){let e=new jr,t=[,,,],n=new Cr,r=new Cr,i=new x;return function(a){this.needsUpdate&&this.update(),a.isExtendedTriangle?a.needsUpdate&&a.update():(e.copy(a),e.update(),a=e);let o=this.satBounds,s=this.satAxes;t[0]=a.a,t[1]=a.b,t[2]=a.c;for(let e=0;e<3;e++){let r=o[e],i=s[e];if(n.setFromPoints(i,t),r.isSeparated(n))return!1}let c=a.satBounds,l=a.satAxes,u=this.points;for(let e=0;e<3;e++){let t=c[e],r=l[e];if(n.setFromPoints(r,u),t.isSeparated(n))return!1}for(let e=0;e<3;e++){let a=s[e];for(let e=0;e<4;e++){let o=l[e];if(i.crossVectors(a,o),n.setFromPoints(i,t),r.setFromPoints(i,u),n.isSeparated(r))return!1}}return!0}})(),W.prototype.closestPointToPoint=(function(){return function(e,t){return this.needsUpdate&&this.update(),t.copy(e).applyMatrix4(this.invMatrix).clamp(this.min,this.max).applyMatrix4(this.matrix),t}})(),W.prototype.distanceToPoint=(function(){let e=new x;return function(t){return this.closestPointToPoint(t,e),t.distanceTo(e)}})(),W.prototype.distanceToBox=(function(){let e=[`x`,`y`,`z`],t=Array(12).fill().map(()=>new _e),n=Array(12).fill().map(()=>new _e),r=new x,i=new x;return function(a,o=0,s=null,c=null){if(this.needsUpdate&&this.update(),this.intersectsBox(a))return(s||c)&&(a.getCenter(i),this.closestPointToPoint(i,r),a.closestPointToPoint(r,i),s&&s.copy(r),c&&c.copy(i)),0;let l=o*o,u=a.min,d=a.max,f=this.points,p=1/0;for(let e=0;e<8;e++){let t=f[e];i.copy(t).clamp(u,d);let n=t.distanceToSquared(i);if(n<p&&(p=n,s&&s.copy(t),c&&c.copy(i),n<l))return Math.sqrt(n)}let m=0;for(let r=0;r<3;r++)for(let i=0;i<=1;i++)for(let a=0;a<=1;a++){let o=(r+1)%3,s=(r+2)%3,c=i<<o|a<<s,l=1<<r|i<<o|a<<s,p=f[c],h=f[l];t[m].set(p,h);let g=e[r],_=e[o],v=e[s],y=n[m],b=y.start,x=y.end;b[g]=u[g],b[_]=i?u[_]:d[_],b[v]=a?u[v]:d[v],x[g]=d[g],x[_]=i?u[_]:d[_],x[v]=a?u[v]:d[v],m++}for(let e=0;e<=1;e++)for(let t=0;t<=1;t++)for(let n=0;n<=1;n++){i.x=e?d.x:u.x,i.y=t?d.y:u.y,i.z=n?d.z:u.z,this.closestPointToPoint(i,r);let a=i.distanceToSquared(r);if(a<p&&(p=a,s&&s.copy(r),c&&c.copy(i),a<l))return Math.sqrt(a)}for(let e=0;e<12;e++){let a=t[e];for(let e=0;e<12;e++){let t=n[e];Tr(a,t,r,i);let o=r.distanceToSquared(i);if(o<p&&(p=o,s&&s.copy(r),c&&c.copy(i),o<l))return Math.sqrt(o)}}return Math.sqrt(p)}})();var Mr=new class extends Kn{constructor(){super(()=>new jr)}},Nr=new x,Pr=new x;function Fr(e,t,n={},r=0,i=1/0){let a=r*r,o=i*i,s=1/0,c=null;if(e.shapecast({boundsTraverseOrder:e=>(Nr.copy(t).clamp(e.min,e.max),Nr.distanceToSquared(t)),intersectsBounds:(e,t,n)=>n<s&&n<o,intersectsTriangle:(e,n)=>{e.closestPointToPoint(t,Nr);let r=t.distanceToSquared(Nr);return r<s&&(Pr.copy(Nr),s=r,c=n),r<a}}),s===1/0)return null;let l=Math.sqrt(s);return n.point?n.point.copy(Pr):n.point=Pr.clone(),n.distance=l,n.faceIndex=c,n}var Ir=!0,Lr=new x,Rr=new x,zr=new x,Br=new a,Vr=new a,Hr=new a,Ur=new x,Wr=new x,Gr=new x,Kr=new x;function qr(e,t,n,r,i,a,o,s){let c;if(c=a===1?e.intersectTriangle(r,n,t,!0,i):e.intersectTriangle(t,n,r,a!==2,i),c===null)return null;let l=e.origin.distanceTo(i);return l<o||l>s?null:{distance:l,point:i.clone()}}function Jr(e,t,n,r,i,o,s,c,l,u,d){Lr.fromBufferAttribute(t,o),Rr.fromBufferAttribute(t,s),zr.fromBufferAttribute(t,c);let f=qr(e,Lr,Rr,zr,Kr,l,u,d);if(f){if(r){Br.fromBufferAttribute(r,o),Vr.fromBufferAttribute(r,s),Hr.fromBufferAttribute(r,c),f.uv=new a;let e=de.getInterpolation(Kr,Lr,Rr,zr,Br,Vr,Hr,f.uv);Ir||(f.uv=e)}if(i){Br.fromBufferAttribute(i,o),Vr.fromBufferAttribute(i,s),Hr.fromBufferAttribute(i,c),f.uv1=new a;let e=de.getInterpolation(Kr,Lr,Rr,zr,Br,Vr,Hr,f.uv1);Ir||(f.uv1=e)}if(n){Ur.fromBufferAttribute(n,o),Wr.fromBufferAttribute(n,s),Gr.fromBufferAttribute(n,c),f.normal=new x;let t=de.getInterpolation(Kr,Lr,Rr,zr,Ur,Wr,Gr,f.normal);f.normal.dot(e.direction)>0&&f.normal.multiplyScalar(-1),Ir||(f.normal=t)}let t={a:o,b:s,c,normal:new x,materialIndex:0};if(de.getNormal(Lr,Rr,zr,t.normal),f.face=t,f.faceIndex=o,Ir){let e=new x;de.getBarycoord(Kr,Lr,Rr,zr,e),f.barycoord=e}}return f}function Yr(e){return e&&e.isMaterial?e.side:e}function Xr(e,t,n,r,i,a,o){let s=r*3,c=s+0,l=s+1,u=s+2,{index:d,groups:f}=e;e.index&&(c=d.getX(c),l=d.getX(l),u=d.getX(u));let{position:p,normal:m,uv:h,uv1:g}=e.attributes;if(Array.isArray(t)){let e=r*3;for(let s=0,d=f.length;s<d;s++){let{start:d,count:_,materialIndex:v}=f[s];if(e>=d&&e<d+_){let e=Yr(t[v]),s=Jr(n,p,m,h,g,c,l,u,e,a,o);if(s){if(s.faceIndex=r,s.face.materialIndex=v,i)i.push(s);else return s}}}}else{let e=Yr(t),s=Jr(n,p,m,h,g,c,l,u,e,a,o);if(s){if(s.faceIndex=r,s.face.materialIndex=0,i)i.push(s);else return s}}return null}function G(e,t,n,r){let i=e.a,a=e.b,o=e.c,s=t,c=t+1,l=t+2;n&&(s=n.getX(s),c=n.getX(c),l=n.getX(l)),i.x=r.getX(s),i.y=r.getY(s),i.z=r.getZ(s),a.x=r.getX(c),a.y=r.getY(c),a.z=r.getZ(c),o.x=r.getX(l),o.y=r.getY(l),o.z=r.getZ(l)}function Zr(e,t,n,r,i,a,o,s){let{geometry:c,_indirectBuffer:l}=e;for(let e=r,l=r+i;e<l;e++)Xr(c,t,n,e,a,o,s)}function Qr(e,t,n,r,i,a,o){let{geometry:s,_indirectBuffer:c}=e,l=1/0,u=null;for(let e=r,c=r+i;e<c;e++){let r;r=Xr(s,t,n,e,null,a,o),r&&r.distance<l&&(u=r,l=r.distance)}return u}function $r(e,t,n,r,i,a,o){let{geometry:s}=n,{index:c}=s,l=s.attributes.position;for(let n=e,s=t+e;n<s;n++){let e;if(e=n,G(o,e*3,c,l),o.needsUpdate=!0,r(o,e,i,a))return!0}return!1}function ei(e,t=null){t&&Array.isArray(t)&&(t=new Set(t));let n=e.geometry,r=n.index?n.index.array:null,i=n.attributes.position,a,o,s,c,l=0,u=e._roots;for(let e=0,t=u.length;e<t;e++)a=u[e],o=new Uint32Array(a),s=new Uint16Array(a),c=new Float32Array(a),d(0,l),l+=a.byteLength;function d(e,n,a=!1){let l=e*2;if(L(l,s)){let t=R(e,o),n=z(l,s),a=1/0,u=1/0,d=1/0,f=-1/0,p=-1/0,m=-1/0;for(let e=3*t,o=3*(t+n);e<o;e++){let t=r[e],n=i.getX(t),o=i.getY(t),s=i.getZ(t);n<a&&(a=n),n>f&&(f=n),o<u&&(u=o),o>p&&(p=o),s<d&&(d=s),s>m&&(m=s)}return c[e+0]!==a||c[e+1]!==u||c[e+2]!==d||c[e+3]!==f||c[e+4]!==p||c[e+5]!==m?(c[e+0]=a,c[e+1]=u,c[e+2]=d,c[e+3]=f,c[e+4]=p,c[e+5]=m,!0):!1}{let r=B(e),i=V(e,o),s=a,l=!1,u=!1;if(t){if(!s){let e=r/8+n/32,a=i/8+n/32;l=t.has(e),u=t.has(a),s=!l&&!u}}else l=!0,u=!0;let f=s||l,p=s||u,m=!1;f&&(m=d(r,n,s));let h=!1;p&&(h=d(i,n,s));let g=m||h;if(g)for(let t=0;t<3;t++){let n=r+t,a=i+t,o=c[n],s=c[n+3],l=c[a],u=c[a+3];c[e+t]=o<l?o:l,c[e+t+3]=s>u?s:u}return g}}}function ti(e,t,n,r,i){let a,o,s,c,l,u,d=1/n.direction.x,f=1/n.direction.y,p=1/n.direction.z,m=n.origin.x,h=n.origin.y,g=n.origin.z,_=t[e],v=t[e+3],y=t[e+1],b=t[e+3+1],x=t[e+2],S=t[e+3+2];return d>=0?(a=(_-m)*d,o=(v-m)*d):(a=(v-m)*d,o=(_-m)*d),f>=0?(s=(y-h)*f,c=(b-h)*f):(s=(b-h)*f,c=(y-h)*f),a>c||s>o||((s>a||isNaN(a))&&(a=s),(c<o||isNaN(o))&&(o=c),p>=0?(l=(x-g)*p,u=(S-g)*p):(l=(S-g)*p,u=(x-g)*p),a>u||l>o)?!1:((l>a||a!==a)&&(a=l),(u<o||o!==o)&&(o=u),a<=i&&o>=r)}function ni(e,t,n,r,i,a,o,s){let{geometry:c,_indirectBuffer:l}=e;for(let e=r,u=r+i;e<u;e++)Xr(c,t,n,l?l[e]:e,a,o,s)}function ri(e,t,n,r,i,a,o){let{geometry:s,_indirectBuffer:c}=e,l=1/0,u=null;for(let e=r,d=r+i;e<d;e++){let r;r=Xr(s,t,n,c?c[e]:e,null,a,o),r&&r.distance<l&&(u=r,l=r.distance)}return u}function ii(e,t,n,r,i,a,o){let{geometry:s}=n,{index:c}=s,l=s.attributes.position;for(let s=e,u=t+e;s<u;s++){let e;if(e=n.resolveTriangleIndex(s),G(o,e*3,c,l),o.needsUpdate=!0,r(o,e,i,a))return!0}return!1}function ai(e,t,n,r,i,a,o){U.setBuffer(e._roots[t]),ti(0,U.float32Array,r,a,o)&&oi(0,e,n,r,i,a,o),U.clearBuffer()}function oi(e,t,n,r,i,a,o){let{float32Array:s,uint16Array:c,uint32Array:l}=U,u=e*2;if(L(u,c))Zr(t,n,r,R(e,l),z(u,c),i,a,o);else{let c=B(e);ti(c,s,r,a,o)&&oi(c,t,n,r,i,a,o);let u=V(e,l);ti(u,s,r,a,o)&&oi(u,t,n,r,i,a,o)}}var si=[`x`,`y`,`z`];function ci(e,t,n,r,i,a){U.setBuffer(e._roots[t]);let o=null;return ti(0,U.float32Array,r,i,a)&&(o=li(0,e,n,r,i,a)),U.clearBuffer(),o}function li(e,t,n,r,i,a){let{float32Array:o,uint16Array:s,uint32Array:c}=U,l=e*2;if(L(l,s))return Qr(t,n,r,R(e,c),z(l,s),i,a);{let s=Tn(e,c),l=si[s],u=r.direction[l]>=0,d,f;u?(d=B(e),f=V(e,c)):(d=V(e,c),f=B(e));let p=ti(d,o,r,i,a)?li(d,t,n,r,i,a):null;if(p){let e=p.point[l];if(u?e<=o[f+s]:e>=o[f+s+3])return p}let m=ti(f,o,r,i,a)?li(f,t,n,r,i,a):null;return p&&m?p.distance<=m.distance?p:m:p||m||null}}var ui=new se,di=new jr,fi=new jr,pi=new D,mi=new W,hi=new W;function gi(e,t,n,r){U.setBuffer(e._roots[t]);let i=_i(0,e,n,r);return U.clearBuffer(),i}function _i(e,t,n,r,i=null){let{float32Array:a,uint16Array:o,uint32Array:s}=U,c=e*2;if(i===null&&(n.boundingBox||n.computeBoundingBox(),mi.set(n.boundingBox.min,n.boundingBox.max,r),i=mi),L(c,o)){let i=t.geometry,l=i.index,u=i.attributes.position,d=n.index,f=n.attributes.position,p=R(e,s),m=z(c,o);if(pi.copy(r).invert(),n.boundsTree)return I(H(e),a,hi),hi.matrix.copy(pi),hi.needsUpdate=!0,n.boundsTree.shapecast({intersectsBounds:e=>hi.intersectsBox(e),intersectsTriangle:e=>{e.a.applyMatrix4(r),e.b.applyMatrix4(r),e.c.applyMatrix4(r),e.needsUpdate=!0;for(let t=p*3,n=(m+p)*3;t<n;t+=3)if(G(fi,t,l,u),fi.needsUpdate=!0,e.intersectsTriangle(fi))return!0;return!1}});{let e=hr(n);for(let t=p*3,n=(m+p)*3;t<n;t+=3){G(di,t,l,u),di.a.applyMatrix4(pi),di.b.applyMatrix4(pi),di.c.applyMatrix4(pi),di.needsUpdate=!0;for(let t=0,n=e*3;t<n;t+=3)if(G(fi,t,d,f),fi.needsUpdate=!0,di.intersectsTriangle(fi))return!0}}}else{let o=B(e),c=V(e,s);return I(H(o),a,ui),!!(i.intersectsBox(ui)&&_i(o,t,n,r,i)||(I(H(c),a,ui),i.intersectsBox(ui)&&_i(c,t,n,r,i)))}}var vi=new D,yi=new W,bi=new W,xi=new x,Si=new x,Ci=new x,wi=new x;function Ti(e,t,n,r={},i={},a=0,o=1/0){t.boundingBox||t.computeBoundingBox(),yi.set(t.boundingBox.min,t.boundingBox.max,n),yi.needsUpdate=!0;let s=e.geometry,c=s.attributes.position,l=s.index,u=t.attributes.position,d=t.index,f=Mr.getPrimitive(),p=Mr.getPrimitive(),m=xi,h=Si,g=null,_=null;i&&(g=Ci,_=wi);let v=1/0,y=null,b=null;return vi.copy(n).invert(),bi.matrix.copy(vi),e.shapecast({boundsTraverseOrder:e=>yi.distanceToBox(e),intersectsBounds:(e,t,n)=>n<v&&n<o&&(t&&(bi.min.copy(e.min),bi.max.copy(e.max),bi.needsUpdate=!0),!0),intersectsRange:(e,r)=>{if(t.boundsTree)return t.boundsTree.shapecast({boundsTraverseOrder:e=>bi.distanceToBox(e),intersectsBounds:(e,t,n)=>n<v&&n<o,intersectsRange:(t,i)=>{for(let o=t,s=t+i;o<s;o++){G(p,3*o,d,u),p.a.applyMatrix4(n),p.b.applyMatrix4(n),p.c.applyMatrix4(n),p.needsUpdate=!0;for(let t=e,n=e+r;t<n;t++){G(f,3*t,l,c),f.needsUpdate=!0;let e=f.distanceToTriangle(p,m,g);if(e<v&&(h.copy(m),_&&_.copy(g),v=e,y=t,b=o),e<a)return!0}}}});{let i=hr(t);for(let t=0,o=i;t<o;t++){G(p,3*t,d,u),p.a.applyMatrix4(n),p.b.applyMatrix4(n),p.c.applyMatrix4(n),p.needsUpdate=!0;for(let n=e,i=e+r;n<i;n++){G(f,3*n,l,c),f.needsUpdate=!0;let e=f.distanceToTriangle(p,m,g);if(e<v&&(h.copy(m),_&&_.copy(g),v=e,y=n,b=t),e<a)return!0}}}}}),Mr.releasePrimitive(f),Mr.releasePrimitive(p),v===1/0?null:(r.point?r.point.copy(h):r.point=h.clone(),r.distance=v,r.faceIndex=y,i&&(i.point?i.point.copy(_):i.point=_.clone(),i.point.applyMatrix4(vi),h.applyMatrix4(vi),i.distance=h.sub(i.point).length(),i.faceIndex=b),r)}function Ei(e,t=null){t&&Array.isArray(t)&&(t=new Set(t));let n=e.geometry,r=n.index?n.index.array:null,i=n.attributes.position,a,o,s,c,l=0,u=e._roots;for(let e=0,t=u.length;e<t;e++)a=u[e],o=new Uint32Array(a),s=new Uint16Array(a),c=new Float32Array(a),d(0,l),l+=a.byteLength;function d(n,a,l=!1){let u=n*2;if(L(u,s)){let t=R(n,o),a=z(u,s),l=1/0,d=1/0,f=1/0,p=-1/0,m=-1/0,h=-1/0;for(let n=t,o=t+a;n<o;n++){let t=3*e.resolveTriangleIndex(n);for(let e=0;e<3;e++){let n=t+e;n=r?r[n]:n;let a=i.getX(n),o=i.getY(n),s=i.getZ(n);a<l&&(l=a),a>p&&(p=a),o<d&&(d=o),o>m&&(m=o),s<f&&(f=s),s>h&&(h=s)}}return c[n+0]!==l||c[n+1]!==d||c[n+2]!==f||c[n+3]!==p||c[n+4]!==m||c[n+5]!==h?(c[n+0]=l,c[n+1]=d,c[n+2]=f,c[n+3]=p,c[n+4]=m,c[n+5]=h,!0):!1}{let e=B(n),r=V(n,o),i=l,s=!1,u=!1;if(t){if(!i){let n=e/8+a/32,o=r/8+a/32;s=t.has(n),u=t.has(o),i=!s&&!u}}else s=!0,u=!0;let f=i||s,p=i||u,m=!1;f&&(m=d(e,a,i));let h=!1;p&&(h=d(r,a,i));let g=m||h;if(g)for(let t=0;t<3;t++){let i=e+t,a=r+t,o=c[i],s=c[i+3],l=c[a],u=c[a+3];c[n+t]=o<l?o:l,c[n+t+3]=s>u?s:u}return g}}}function Di(e,t,n,r,i,a,o){U.setBuffer(e._roots[t]),ti(0,U.float32Array,r,a,o)&&Oi(0,e,n,r,i,a,o),U.clearBuffer()}function Oi(e,t,n,r,i,a,o){let{float32Array:s,uint16Array:c,uint32Array:l}=U,u=e*2;if(L(u,c))ni(t,n,r,R(e,l),z(u,c),i,a,o);else{let c=B(e);ti(c,s,r,a,o)&&Oi(c,t,n,r,i,a,o);let u=V(e,l);ti(u,s,r,a,o)&&Oi(u,t,n,r,i,a,o)}}var ki=[`x`,`y`,`z`];function Ai(e,t,n,r,i,a){U.setBuffer(e._roots[t]);let o=null;return ti(0,U.float32Array,r,i,a)&&(o=ji(0,e,n,r,i,a)),U.clearBuffer(),o}function ji(e,t,n,r,i,a){let{float32Array:o,uint16Array:s,uint32Array:c}=U,l=e*2;if(L(l,s))return ri(t,n,r,R(e,c),z(l,s),i,a);{let s=Tn(e,c),l=ki[s],u=r.direction[l]>=0,d,f;u?(d=B(e),f=V(e,c)):(d=V(e,c),f=B(e));let p=ti(d,o,r,i,a)?ji(d,t,n,r,i,a):null;if(p){let e=p.point[l];if(u?e<=o[f+s]:e>=o[f+s+3])return p}let m=ti(f,o,r,i,a)?ji(f,t,n,r,i,a):null;return p&&m?p.distance<=m.distance?p:m:p||m||null}}var Mi=new se,Ni=new jr,Pi=new jr,Fi=new D,Ii=new W,Li=new W;function Ri(e,t,n,r){U.setBuffer(e._roots[t]);let i=zi(0,e,n,r);return U.clearBuffer(),i}function zi(e,t,n,r,i=null){let{float32Array:a,uint16Array:o,uint32Array:s}=U,c=e*2;if(i===null&&(n.boundingBox||n.computeBoundingBox(),Ii.set(n.boundingBox.min,n.boundingBox.max,r),i=Ii),L(c,o)){let i=t.geometry,l=i.index,u=i.attributes.position,d=n.index,f=n.attributes.position,p=R(e,s),m=z(c,o);if(Fi.copy(r).invert(),n.boundsTree)return I(H(e),a,Li),Li.matrix.copy(Fi),Li.needsUpdate=!0,n.boundsTree.shapecast({intersectsBounds:e=>Li.intersectsBox(e),intersectsTriangle:e=>{e.a.applyMatrix4(r),e.b.applyMatrix4(r),e.c.applyMatrix4(r),e.needsUpdate=!0;for(let n=p,r=m+p;n<r;n++)if(G(Pi,3*t.resolveTriangleIndex(n),l,u),Pi.needsUpdate=!0,e.intersectsTriangle(Pi))return!0;return!1}});{let e=hr(n);for(let n=p,r=m+p;n<r;n++){G(Ni,3*t.resolveTriangleIndex(n),l,u),Ni.a.applyMatrix4(Fi),Ni.b.applyMatrix4(Fi),Ni.c.applyMatrix4(Fi),Ni.needsUpdate=!0;for(let t=0,n=e*3;t<n;t+=3)if(G(Pi,t,d,f),Pi.needsUpdate=!0,Ni.intersectsTriangle(Pi))return!0}}}else{let o=B(e),c=V(e,s);return I(H(o),a,Mi),!!(i.intersectsBox(Mi)&&zi(o,t,n,r,i)||(I(H(c),a,Mi),i.intersectsBox(Mi)&&zi(c,t,n,r,i)))}}var Bi=new D,Vi=new W,Hi=new W,Ui=new x,Wi=new x,Gi=new x,Ki=new x;function qi(e,t,n,r={},i={},a=0,o=1/0){t.boundingBox||t.computeBoundingBox(),Vi.set(t.boundingBox.min,t.boundingBox.max,n),Vi.needsUpdate=!0;let s=e.geometry,c=s.attributes.position,l=s.index,u=t.attributes.position,d=t.index,f=Mr.getPrimitive(),p=Mr.getPrimitive(),m=Ui,h=Wi,g=null,_=null;i&&(g=Gi,_=Ki);let v=1/0,y=null,b=null;return Bi.copy(n).invert(),Hi.matrix.copy(Bi),e.shapecast({boundsTraverseOrder:e=>Vi.distanceToBox(e),intersectsBounds:(e,t,n)=>n<v&&n<o&&(t&&(Hi.min.copy(e.min),Hi.max.copy(e.max),Hi.needsUpdate=!0),!0),intersectsRange:(r,i)=>{if(t.boundsTree){let s=t.boundsTree;return s.shapecast({boundsTraverseOrder:e=>Hi.distanceToBox(e),intersectsBounds:(e,t,n)=>n<v&&n<o,intersectsRange:(t,o)=>{for(let x=t,S=t+o;x<S;x++){let t=s.resolveTriangleIndex(x);G(p,3*t,d,u),p.a.applyMatrix4(n),p.b.applyMatrix4(n),p.c.applyMatrix4(n),p.needsUpdate=!0;for(let t=r,n=r+i;t<n;t++){let n=e.resolveTriangleIndex(t);G(f,3*n,l,c),f.needsUpdate=!0;let r=f.distanceToTriangle(p,m,g);if(r<v&&(h.copy(m),_&&_.copy(g),v=r,y=t,b=x),r<a)return!0}}}})}{let o=hr(t);for(let t=0,s=o;t<s;t++){G(p,3*t,d,u),p.a.applyMatrix4(n),p.b.applyMatrix4(n),p.c.applyMatrix4(n),p.needsUpdate=!0;for(let n=r,o=r+i;n<o;n++){let r=e.resolveTriangleIndex(n);G(f,3*r,l,c),f.needsUpdate=!0;let i=f.distanceToTriangle(p,m,g);if(i<v&&(h.copy(m),_&&_.copy(g),v=i,y=n,b=t),i<a)return!0}}}}}),Mr.releasePrimitive(f),Mr.releasePrimitive(p),v===1/0?null:(r.point?r.point.copy(h):r.point=h.clone(),r.distance=v,r.faceIndex=y,i&&(i.point?i.point.copy(_):i.point=_.clone(),i.point.applyMatrix4(Bi),h.applyMatrix4(Bi),i.distance=h.sub(i.point).length(),i.faceIndex=b),r)}function Ji(e,t,n){return e===null?null:(e.point.applyMatrix4(t.matrixWorld),e.distance=e.point.distanceTo(n.ray.origin),e.object=t,e)}var Yi=new W,Xi=new s,Zi=new x,Qi=new D,$i=new x,ea=[`getX`,`getY`,`getZ`],ta=class e extends Sr{static serialize(e,t={}){t={cloneBuffers:!0,...t};let n=e.geometry,r=e._roots,i=e._indirectBuffer,a=n.getIndex(),o={version:1,roots:null,index:null,indirectBuffer:null};return t.cloneBuffers?(o.roots=r.map(e=>e.slice()),o.index=a?a.array.slice():null,o.indirectBuffer=i?i.slice():null):(o.roots=r,o.index=a?a.array:null,o.indirectBuffer=i),o}static deserialize(t,n,r={}){r={setIndex:!0,indirect:!!t.indirectBuffer,...r};let{index:i,roots:a,indirectBuffer:o}=t;t.version||(console.warn(`MeshBVH.deserialize: Serialization format has been changed and will be fixed up. It is recommended to regenerate any stored serialized data.`),c(a));let s=new e(n,{...r,[bn]:!0});if(s._roots=a,s._indirectBuffer=o||null,r.setIndex){let e=n.getIndex();if(e===null){let e=new Ce(t.index,1,!1);n.setIndex(e)}else e.array!==i&&(e.array.set(i),e.needsUpdate=!0)}return s;function c(e){for(let t=0;t<e.length;t++){let n=e[t],r=new Uint32Array(n),i=new Uint16Array(n);for(let e=0,t=n.byteLength/32;e<t;e++){let t=8*e;L(2*t,i)||(r[t+6]=r[t+6]/8-e)}}}}get primitiveStride(){return 3}get resolveTriangleIndex(){return this.resolvePrimitiveIndex}constructor(e,t={}){t.maxLeafTris&&(console.warn(`MeshBVH: "maxLeafTris" option has been deprecated. Use "targetLeafSize", instead.`),t={...t,targetLeafSize:t.maxLeafTris}),super(e,t)}shiftTriangleOffsets(e){return super.shiftPrimitiveOffsets(e)}writePrimitiveBounds(e,t,n){let r=this.geometry,i=this._indirectBuffer,a=r.attributes.position,o=r.index?r.index.array:null,s=(i?i[e]:e)*3,c=s+0,l=s+1,u=s+2;o&&(c=o[c],l=o[l],u=o[u]);for(let e=0;e<3;e++){let r=a[ea[e]](c),i=a[ea[e]](l),o=a[ea[e]](u),s=r;i<s&&(s=i),o<s&&(s=o);let d=r;i>d&&(d=i),o>d&&(d=o),t[n+e]=s,t[n+e+3]=d}return t}computePrimitiveBounds(e,t,n){let r=this.geometry,i=this._indirectBuffer,a=r.attributes.position,o=r.index?r.index.array:null,s=a.normalized;if(e<0||t+e-n.offset>n.length/6)throw Error(`MeshBVH: compute triangle bounds range is invalid.`);let c=a.array,l=a.offset||0,u=3;a.isInterleavedBufferAttribute&&(u=a.data.stride);let d=[`getX`,`getY`,`getZ`],f=n.offset;for(let r=e,p=e+t;r<p;r++){let e=(i?i[r]:r)*3,t=(r-f)*6,p=e+0,m=e+1,h=e+2;o&&(p=o[p],m=o[m],h=o[h]),s||(p=p*u+l,m=m*u+l,h=h*u+l);for(let e=0;e<3;e++){let r,i,o;s?(r=a[d[e]](p),i=a[d[e]](m),o=a[d[e]](h)):(r=c[p+e],i=c[m+e],o=c[h+e]);let l=r;i<l&&(l=i),o<l&&(l=o);let u=r;i>u&&(u=i),o>u&&(u=o);let f=(u-l)/2,g=e*2;n[t+g+0]=l+f,n[t+g+1]=f+(Math.abs(l)+f)*yn}}return n}raycastObject3D(e,t,n=[]){let{material:r}=e;if(r===void 0)return;Qi.copy(e.matrixWorld).invert(),Xi.copy(t.ray).applyMatrix4(Qi),$i.setFromMatrixScale(e.matrixWorld),Zi.copy(Xi.direction).multiply($i);let i=Zi.length(),a=t.near/i,o=t.far/i;if(t.firstHitOnly===!0){let i=this.raycastFirst(Xi,r,a,o);i=Ji(i,e,t),i&&n.push(i)}else{let i=this.raycast(Xi,r,a,o);for(let r=0,a=i.length;r<a;r++){let a=Ji(i[r],e,t);a&&n.push(a)}}return n}refit(e=null){return(this.indirect?Ei:ei)(this,e)}raycast(e,t=0,n=0,r=1/0){let i=this._roots,a=[],o=this.indirect?Di:ai;for(let s=0,c=i.length;s<c;s++)o(this,s,t,e,a,n,r);return a}raycastFirst(e,t=0,n=0,r=1/0){let i=this._roots,a=null,o=this.indirect?Ai:ci;for(let s=0,c=i.length;s<c;s++){let i=o(this,s,t,e,n,r);i!=null&&(a==null||i.distance<a.distance)&&(a=i)}return a}intersectsGeometry(e,t){let n=!1,r=this._roots,i=this.indirect?Ri:gi;for(let a=0,o=r.length;a<o&&(n=i(this,a,e,t),!n);a++);return n}shapecast(e){let t=Mr.getPrimitive(),n=super.shapecast({...e,intersectsPrimitive:e.intersectsTriangle,scratchPrimitive:t,iterate:this.indirect?ii:$r});return Mr.releasePrimitive(t),n}bvhcast(t,n,r){let{intersectsRanges:i,intersectsTriangles:a}=r,o=Mr.getPrimitive(),s=this.geometry.index,c=this.geometry.attributes.position,l=this.indirect?e=>{let t=this.resolveTriangleIndex(e);G(o,t*3,s,c)}:e=>{G(o,e*3,s,c)},u=Mr.getPrimitive(),d=t.geometry.index,f=t.geometry.attributes.position,p=t.indirect?e=>{let n=t.resolveTriangleIndex(e);G(u,n*3,d,f)}:e=>{G(u,e*3,d,f)};if(a){if(!(t instanceof e))throw Error(`MeshBVH: "intersectsTriangles" callback can only be used with another MeshBVH.`);let r=(e,t,r,i,s,c,d,f)=>{for(let m=r,h=r+i;m<h;m++){p(m),u.a.applyMatrix4(n),u.b.applyMatrix4(n),u.c.applyMatrix4(n),u.needsUpdate=!0;for(let n=e,r=e+t;n<r;n++)if(l(n),o.needsUpdate=!0,a(o,u,n,m,s,c,d,f))return!0}return!1};if(i){let e=i;i=function(t,n,i,a,o,s,c,l){return e(t,n,i,a,o,s,c,l)?!0:r(t,n,i,a,o,s,c,l)}}else i=r}return super.bvhcast(t,n,{intersectsRanges:i})}intersectsBox(e,t){return Yi.set(e.min,e.max,t),Yi.needsUpdate=!0,this.shapecast({intersectsBounds:e=>Yi.intersectsBox(e),intersectsTriangle:e=>Yi.intersectsTriangle(e)})}intersectsSphere(e){return this.shapecast({intersectsBounds:t=>e.intersectsBox(t),intersectsTriangle:t=>t.intersectsSphere(e)})}closestPointToGeometry(e,t,n={},r={},i=0,a=1/0){return(this.indirect?qi:Ti)(this,e,t,n,r,i,a)}closestPointToPoint(e,t={},n=0,r=1/0){return Fr(this,e,t,n,r)}},na=new x,ra=new x,ia=new x,aa=new s,oa=new D,sa=new x,ca=new x,la=[`x`,`y`,`z`],ua=!0,da=new a,fa=new a,pa=new a,ma=new x,ha=new x,ga=new x,_a=class extends Sr{get primitiveStride(){return 3}constructor(e,t={}){if(!e.isMesh)throw Error(`SkinnedMeshBVH: First argument must be a Mesh.`);super(e.geometry,{...t,[bn]:!0}),this.mesh=e,t[bn]||this.init(t)}writePrimitiveBounds(e,t,n){let{mesh:r,geometry:i}=this,a=this._indirectBuffer,o=i.index?i.index.array:null,s=(a?a[e]:e)*3,c=s+0,l=s+1,u=s+2;o&&(c=o[c],l=o[l],u=o[u]),r.getVertexPosition(c,na),r.getVertexPosition(l,ra),r.getVertexPosition(u,ia);for(let e=0;e<3;e++){let r=la[e],i=na[r],a=ra[r],o=ia[r],s=i;a<s&&(s=a),o<s&&(s=o);let c=i;a>c&&(c=a),o>c&&(c=o),t[n+e]=s,t[n+e+3]=c}return t}shapecast(e){let t=new jr;return super.shapecast({...e,intersectsPrimitive:e.intersectsTriangle,scratchPrimitive:t,iterate:va})}raycastObject3D(e,t,n=[]){let{material:r}=e;if(r===void 0)return;let{matrixWorld:i}=e,{firstHitOnly:o}=t;oa.copy(i).invert(),aa.copy(t.ray).applyMatrix4(oa);let s=null,c=1/0;return this.shapecast({boundsTraverseOrder:e=>e.distanceToPoint(aa.origin),intersectsBounds:e=>{if(o){if(!aa.intersectBox(e,ca))return 0;let n;return e.containsPoint(aa.origin)?n=0:(ca.applyMatrix4(i),n=t.ray.origin.distanceTo(ca)),+(n<c)}return+!!aa.intersectsBox(e)},intersectsTriangle:(l,u)=>{let d=null;if(d=r.side===0?aa.intersectTriangle(l.a,l.b,l.c,!0,sa):r.side===1?aa.intersectTriangle(l.c,l.b,l.a,!0,sa):aa.intersectTriangle(l.a,l.b,l.c,!1,sa),!d)return;d=d.clone().applyMatrix4(i);let f=t.ray.origin.distanceTo(d);if(f>=t.near&&f<=t.far){if(o&&f>=c)return;let{geometry:t}=this,{index:r}=t,i=this.resolvePrimitiveIndex(u),p=i*3,m=p+0,h=p+1,g=p+2;r&&(m=r.array[m],h=r.array[h],g=r.array[g]);let _={distance:f,point:d.clone(),object:e,uv:null,uv1:null,normal:null,face:{a:m,b:h,c:g,normal:de.getNormal(l.a,l.b,l.c,new x),materialIndex:0},faceIndex:i};if(ua){let e=new x;de.getBarycoord(sa,l.a,l.b,l.c,e),_.barycoord=e}let v=t.attributes.uv,y=t.attributes.uv1,b=t.attributes.normal;if(v){da.fromBufferAttribute(v,m),fa.fromBufferAttribute(v,h),pa.fromBufferAttribute(v,g),_.uv=new a;let e=de.getInterpolation(sa,l.a,l.b,l.c,da,fa,pa,_.uv);ua||(_.uv=e)}if(y){da.fromBufferAttribute(y,m),fa.fromBufferAttribute(y,h),pa.fromBufferAttribute(y,g),_.uv1=new a;let e=de.getInterpolation(sa,l.a,l.b,l.c,da,fa,pa,_.uv1);ua||(_.uv1=e)}if(b){ma.fromBufferAttribute(b,m),ha.fromBufferAttribute(b,h),ga.fromBufferAttribute(b,g),_.normal=new x;let e=de.getInterpolation(sa,l.a,l.b,l.c,ma,ha,ga,_.normal);_.normal.dot(aa.direction)>0&&_.normal.multiplyScalar(-1),ua||(_.normal=e)}c=_.distance,s=_,o||n.push(_)}}}),o&&s&&n.push(s),n}};function va(e,t,n,r,i,a,o){let{mesh:s,geometry:c}=n,l=c.index?c.index.array:null;for(let c=e,u=t+e;c<u;c++){let e=n.resolvePrimitiveIndex(c),t=3*e+0,u=3*e+1,d=3*e+2;if(l&&(t=l[t],u=l[u],d=l[d]),s.getVertexPosition(t,o.a),s.getVertexPosition(u,o.b),s.getVertexPosition(d,o.c),o.needsUpdate=!0,r(o,c,i,a))return!0}return!1}var ya=new O({min:`array<f32, 3>`,max:`array<f32, 3>`},`BVHBoundingBox`);ya.getLength=()=>6;var ba=new O({leftBounds:`BVHBoundingBox`,rightBounds:`BVHBoundingBox`,rightChildOrTriangleOffset:`uint`,splitAxisOrTriangleCount:`uint`,_alignment0:`uint`,_alignment1:`uint`},`BVHNode`);ba.getLength=()=>2*ya.getLength()+4;var xa=new O({matrixWorld:`mat4x4f`,inverseMatrixWorld:`mat4x4f`,visible:`uint`,_alignment0:`uint`,_alignment1:`uint`,_alignment2:`uint`},`TransformStruct`),K=new O({origin:`vec3f`,direction:`vec3f`,maxDist:`float`},`Ray`),Sa=new O({indices:`vec4u`,normal:`vec3f`,didHit:`bool`,barycoord:`vec3f`,objectIndex:`uint`,side:`float`,dist:`float`},`IntersectionResult`),Ca=new O({faceIndices:`vec4u`,closestPoint:`vec3f`,found:`bool`,barycoord:`vec3f`,objectIndex:`uint`,faceNormal:`vec3f`,side:`float`,distanceSq:`float`},`PointQueryResult`),wa=Ae(`

	const BVH_STACK_DEPTH = 60u;
	const INFINITY = 1e20;
	const TRI_INTERSECT_EPSILON = 1e-5;

`),Ta=Ae(`
	struct IntersectionResult {
		indices: vec4u,
		normal: vec3f,
		didHit: bool,
		barycoord: vec3f,
		side: f32,
		dist: f32,
	};
`);P(`

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

`);var Ea=P(`

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

`,[K,ya]),Da=P(`

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

`,[K,Ta,wa]),Oa=P(`

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

`,[Da,K,Ta,wa]);P(`

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

`,[Oa,Ea,K,ba,Ta,wa]);var ka=class extends Fe{static get type(){return`ProxyCallNode`}constructor(e,t){super(),this.proxyNode=e,this.params=t}setup(){return this.proxyNode.proxyNode.call(...this.params)}},Aa=class{get isNode(){return!0}get proxyNode(){let{proxyObject:e,proxyProperty:t}=this,n=t.split(`.`),r=e;for(let e=0,t=n.length;e<t;e++)r=r?.[n[e]];return r&&`functionNode`in r?r.functionNode:r??null}constructor(e,t=null){return this.proxyObject=t,this.proxyProperty=e,new Proxy(this,{get(e,t){if(t in e)return Reflect.get(e,t);{let n=e.proxyNode;if(!n)return;let r=Reflect.get(n,t);return typeof r==`function`?r.bind(n):r}},set(e,t,n){if(t in e)return Reflect.set(e,t,n);throw Error(`NodeProxy: Cannot set members of proxied nodes.`)}})}},q=(...e)=>new Aa(...e),J=(...e)=>{let t=new Aa(...e);return Qe.nodeProxyConstructor((...e)=>new ka(t,e),t)},ja=class extends Aa{get proxyNode(){return super.proxyNode||this.fallbackNode}constructor(e,t){super(e,null),Object.defineProperty(this,"fallbackNode",{value:t})}setup(e){return this.proxyObject=e.getContext(),this.proxyNode.setup(e)}},Ma=(...e)=>new ja(...e),Na=(...e)=>{let t=new ja(...e);return Qe.nodeProxyConstructor((...e)=>new ka(t,e),t)},Pa=new me,Fa=new me;function Ia(e,t,n,r){let i=t*8;for(let t=0;t<3;t++){let a=e[i+t],o=e[i+t+3];a>o?(n[r+t]=1,n[r+t+3]=-1):(n[r+t]=a,n[r+t+3]=o)}}function La(e,t,n,r,i){let a=n*8;Ia(e,n+1,r,i),Ia(e,n+t[a+6],r,i+6)}function Ra(e,t){let n=e?e.array:null,r=new Uint32Array(t.length*3);for(let e=0,i=t.length;e<i;e++){let i=3*e,a=3*t[e];for(let e=0;e<3;e++)r[i+e]=n?n[a+e]:a+e}return r}function za(e,t,n,r){let i=new Uint32Array(r),a=new Float32Array(r);e._roots.forEach(e=>{let r=new Uint16Array(e),o=new Uint32Array(e),s=new Float32Array(e);for(let c=0,l=e.byteLength/32;c<l;c++){let e=c*8,l=e*2,u=n*16,d=L(l,r);if(d||La(s,o,c,a,u),t===null){n++;continue}if(d){let n=o[e+6],{transformSlot:a,nodeOffset:s}=r[l+14]===0?{transformSlot:0,nodeOffset:0}:t[n];if(a>16777215)throw Error(`packBVHBufferUtils: transform slot ${a} exceeds the 24-bit TLAS leaf limit.`);i[u+12]=s,i[u+13]=4278190080|a&16777215}else i[u+12]=o[e+6],i[u+13]=o[e+7];n++}})}function Ba(e,t){return Va(new Uint16Array(e),new Uint32Array(e),t)}function Va(e,t,n){if(L(n*8*2,e))return 1;let r=t[n*8+6];return r+Va(e,t,n+r)}function Ha(e,t=0){let n=new Uint16Array(e),r=new Uint32Array(e),i=0;return a(t*8,1),i;function a(e,t){let o=e;if(L(e*2,n))i=Math.max(t,i);else{let e=V(o,r);a(B(o),t+1),a(e,t+1)}}}function Ua(e,t,n,r,i,a){let o=new Uint16Array(a),s=new Uint32Array(a),c=new Float32Array(a),l=new Uint16Array(e),u=new Uint32Array(e),d=new Float32Array(e);for(let e=0;e<n;e++){let n=t+e,a=n*8,f=a*2,p=i*16,m=p*2;L(f,l)?(s[p+12]=u[a+6]+r,o[m+26]=l[f+14],o[m+27]=vn):(La(d,u,n,c,p),s[p+12]=u[a+6],s[p+13]=u[a+7]),i++}}function Wa(e,t,n,r,i){let{geometry:a}=e,{start:o,count:s,vertexStart:c}=t;if(e.indirect){let t=Ra(a.index,e._indirectBuffer);for(let e=0;e<t.length;e++)i[e+r]=t[e]-c+n}else if(a.index)for(let e=0;e<s;e++)i[e+r]=a.index.getX(e+o)-c+n;else for(let e=0;e<s;e++)i[e+r]=e+o+n}function Ga(e,t,n,r,i,a){let{geometry:o,mesh:s=null}=e,{vertexStart:c,vertexCount:l}=t,u=new Float32Array(r),d=i.getLength();i.membersLayout.forEach(({name:e},t)=>{let r=o.attributes[e];a.getDefaultAttributeValue(e,Pa);for(let i=0;i<l;i++){if(r){switch(Fa.fromBufferAttribute(r,i+c),r.itemSize){case 1:Fa.y=Pa.y,Fa.z=Pa.z,Fa.w=Pa.w;break;case 2:Fa.z=Pa.z,Fa.w=Pa.w;break;case 3:Fa.w=Pa.w}s&&(e===`position`||e===`normal`||e===`tangent`)&&s.applyBoneTransform(i+c,Fa)}else Fa.copy(Pa);Fa.toArray(u,(n+i)*d+t*4)}})}var Ka=class extends Fe{constructor(e){super(),this.literal=e}build(){return this.literal}},qa=class extends Fe{constructor(e,t=`property`){super(),this.node=e,this.output=t}build(e){return this.node.build(e,this.output)}};function Ja(e){return e.isNode?new qa(e):null}function Ya(e){let t=[];for(let n of e)if(Array.isArray(n))for(let e of n){let n=Ja(e);n&&t.push(n)}return t}function Xa(e,t){return e.map(e=>(e&&!e.isNode&&e instanceof Function&&(e=e(t)),e&&e.isNode?(e.setup(t),e.isWGSLTagCodeNode?new qa(e,`inline`):new qa(e)):e))}function Za(e,t,n){let r=``;for(let i=0,a=e.length;i<a;i++)if(r+=e[i],i<t.length){let e=t[i];Array.isArray(e)||(r+=typeof e==`string`||typeof e==`number`?String(e):e.build(n))}return r}var Qa=class extends pt{static get type(){return`WGSLTagFnNode`}constructor(e,t,n=`wgsl`){super(``,Ya(t),n),this.isWGSLTagFnNode=!0,this.tokens=e,this.args=t}setup(e){super.setup(e),this._normalizedArgs=Xa(this.args,e)}getNodeFunction(e){let{tokens:t,_normalizedArgs:n}=this,r=e.getDataFromNode(this),i=r.nodeFunction;if(i===void 0){let a=``;for(let r=0,i=t.length;r<i;r++)if(a+=t[r],r<n.length){let t=n[r];Array.isArray(t)||(typeof t==`string`||typeof t==`number`?a+=String(t):t.isStructLayoutNode?a+=t.getNodeType(e):t.isStruct?a+=t.layout.getNodeType(e):a+=`_arg`+r)}a=a.replace(/\/\/.*[\n\r]/g,``),i=e.parser.parseFunction(a),r.nodeFunction=i}return i}generate(e,t){let n=super.generate(e,t),{_normalizedArgs:r}=this,i=Za(this.tokens,r,e),{type:a}=this.getNodeFunction(e),o=e.getCodeFromNode(this,a);return o.code=i.replace(/\/\/.+[\n\r]/g,``).replace(/->\s*void/,``).trim(),n}},$a=class extends Ie{static get type(){return`WGSLTagCodeNode`}constructor(e,t,n=`wgsl`){super(``,Ya(t),n),this.isWGSLTagCodeNode=!0,this.tokens=e,this.args=t}setup(e){super.setup(e),this._normalizedArgs=Xa(this.args,e)}build(e,t){return t===`inline`?Za(this.tokens,this._normalizedArgs,e):super.build(e,t)}generate(e){super.generate(e);let t=e.getCodeFromNode(this,this.getNodeType(e));return t.code=Za(this.tokens,this._normalizedArgs,e),t.code}},eo=e=>Qe.nodeProxyConstructor((...t)=>{if(t.length===1&&t[0]&&typeof t[0]==`object`&&!t[0].isNode){let e=t[0];for(let t in e)typeof e[t]==`string`&&(e[t]=new Ka(e[t]))}return e.call(...t)},e),Y=(e,...t)=>eo(new Qa(e,t)),to=(e,...t)=>new $a(e,t),no=tt(60);function ro(e,t){let{name:n=`bvh_shapecast_fn_${Math.random().toString(36).substring(2,7)}`,shapeStruct:r,resultStruct:i=null,prefixFn:a=null,boundsOrderFn:o=null,intersectsBoundsFn:s,intersectRangeFn:c,transformShapeFn:l=null,transformResultFn:u=null,resetShapeFn:d=null}=t,{nodes:f,transforms:p}=e.storage,m=``;a&&(m=to`${a}();`);let h=``;u&&(h=to`${u}( result, objectIndex );`);let g=``;l&&(g=to`${l}( &localShape, objectIndex );`);let _=``;d&&(_=to`${d}( objectIndex );`);let v=``;o&&(v=to`
			let leftToRight = ${o}( localShape, splitAxis, node );
			c1 = select( rightIndex, leftIndex, leftToRight );
			c2 = select( leftIndex, rightIndex, leftToRight );
			hit1 = select( hitRight, hitLeft, leftToRight );
			hit2 = select( hitLeft, hitRight, leftToRight );
		`);let y=i?to`result: ptr<function, ${i}>`:``,b=i?`result`:``,x=Y`
		// fn
		fn ${n}( shape: ${r}, ${y} ) -> bool {

			${m}

			var didHit = false;

			var isTLAS = true;
			var pointer: i32 = 0;
			var stack: array<u32, ${no}>;
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
				if ( pointer < 0 || pointer >= i32( ${no} ) ) {

					break;

				}

				// a node's bounds were tested by its parent, so the popped node is always entered
				let nodeIndex = stack[ pointer ];
				let node = ${f}[ nodeIndex ];
				pointer = pointer - 1;

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

					// test both children here, pushing the farther one first so the nearer is popped next
					let leftIndex = nodeIndex + 1u;
					let splitAxis = infoX & 0x0000ffffu;
					let rightIndex = nodeIndex + infoY;
					let hitLeft = ${s}( localShape, node.leftBounds, ${b} ) != 0u;
					let hitRight = ${s}( localShape, node.rightBounds, ${b} ) != 0u;

					var c1 = rightIndex;
					var c2 = leftIndex;
					var hit1 = hitRight;
					var hit2 = hitLeft;
					${v}

					if ( hit2 ) {

						pointer = pointer + 1;
						stack[ pointer ] = c2;

					}

					if ( hit1 ) {

						pointer = pointer + 1;
						stack[ pointer ] = c1;

					}

				}

			}

			return didHit;

		}
	`;return x.outputType=i,x.functionName=n,x}var io=Y`
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
`,ao=Y`
	// fn
	fn intersectRayTriangle( ray: ${K}, a: vec3f, b: vec3f, c: vec3f, threshold: f32 ) -> ${Sa} {

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
`,oo=Y`
	// fn
	fn ndcToCameraRay( ndc: vec2f, inverseModelViewProjection: mat4x4f ) -> ${K} {

		var homogeneous = vec4f();
		var ray: ${K};

		homogeneous = inverseModelViewProjection * vec4f( ndc, 0.0, 1.0 );
		ray.origin = homogeneous.xyz / homogeneous.w;

		homogeneous = inverseModelViewProjection * vec4f( ndc, 1.0, 1.0 );
		let toFarPlane = ( homogeneous.xyz / homogeneous.w ) - ray.origin;
		ray.maxDist = length( toFarPlane );
		ray.direction = toFarPlane / ray.maxDist;

		return ray;

	}
`;function so(e){let{index:t,attributes:n,transforms:r}=e.storage,i=it(1).toVar(`bvh_rayScalar_${Math.random().toString(36).substring(2,7)}`);return e.getShapecastFn({name:`bvh_RaycastFirstHit`,shapeStruct:K,resultStruct:Sa,boundsOrderFn:Y`
			fn getBoundsOrder( ray: ${K}, splitAxis: u32, node: ${ba} ) -> bool {

				return ray.direction[ splitAxis ] >= 0.0;

			}
		`,intersectsBoundsFn:Y`
			fn rayIntersectsBounds( ray: ${K}, bounds: ${ya}, result: ptr<function, ${Sa}> ) -> u32 {

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

		`,intersectRangeFn:Y`
			fn intersectRange( ray: ${K}, offset: u32, count: u32, result: ptr<function, ${Sa}> ) -> bool {

				var didHit = false;
				for ( var ti = offset; ti < offset + count; ti = ti + 1u ) {

					let i0 = ${t}[ ti * 3u ];
					let i1 = ${t}[ ti * 3u + 1u ];
					let i2 = ${t}[ ti * 3u + 2u ];

					let a = ${n}[ i0 ].position.xyz;
					let b = ${n}[ i1 ].position.xyz;
					let c = ${n}[ i2 ].position.xyz;

					var triResult = ${ao}( ray, a, b, c, 0.0 );
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
		`,transformShapeFn:Y`
			fn transformRay( ray: ptr<function, ${K}>, objectIndex: u32 ) -> void {

				let toLocal = ${r}[ objectIndex ].inverseMatrixWorld;
				ray.origin = ( toLocal * vec4f( ray.origin, 1.0 ) ).xyz;
				ray.direction = ( toLocal * vec4f( ray.direction, 0.0 ) ).xyz;

				let len = length( ray.direction );
				ray.direction /= len;
				${i} = 1.0 / len;

			}
		`,transformResultFn:Y`
			fn transformResult( hit: ptr<function, ${Sa}>, objectIndex: u32 ) -> void {

				let toLocal = ${r}[ objectIndex ].inverseMatrixWorld;
				hit.normal = normalize( ( transpose( toLocal ) * vec4f( hit.normal, 0.0 ) ).xyz );
				hit.objectIndex = objectIndex;

			}
		`,resetShapeFn:Y`
			fn resetRayScalar( objectIndex: u32 ) -> void {

				${i} = 1.0;

			}
		`})}function co(e){let{storage:t,structs:n}=e,r=n.attributes.membersLayout.map(({name:e})=>`result.${e} = a0.${e} * barycoord.x + a1.${e} * barycoord.y + a2.${e} * barycoord.z;`).join(`
`);return Y`
		// fn
		fn bvh_sampleTrianglePoint( barycoord: vec3f, indices: vec3u ) -> ${n.attributes} {

			var result: ${n.attributes};
			var a0 = ${t.attributes}[ indices.x ];
			var a1 = ${t.attributes}[ indices.y ];
			var a2 = ${t.attributes}[ indices.z ];
			${r}
			return result;

		}
	`}function lo(e){let{index:t,attributes:n,transforms:r}=e.storage,i=gt().toVar(`bvh_toWorldMat`);return e.getShapecastFn({name:`bvh_ClosestPointToPoint`,shapeStruct:`vec3f`,resultStruct:Ca,boundsOrderFn:Y`
			fn cppBoundsOrder( shape: vec3f, splitAxis: u32, node: ${ba} ) -> bool {

				let toWorld = ${i};
				let absX = abs( toWorld[ 0 ].xyz );
				let absY = abs( toWorld[ 1 ].xyz );
				let absZ = abs( toWorld[ 2 ].xyz );

				// squared distance from the point to each child's bounds in world space
				let lMin = vec3f( node.leftBounds.min[ 0 ], node.leftBounds.min[ 1 ], node.leftBounds.min[ 2 ] );
				let lMax = vec3f( node.leftBounds.max[ 0 ], node.leftBounds.max[ 1 ], node.leftBounds.max[ 2 ] );
				let lHalf = ( lMax - lMin ) * 0.5;
				let lCenter = ( toWorld * vec4f( ( lMin + lMax ) * 0.5, 1.0 ) ).xyz;
				let lExtent = absX * lHalf.x + absY * lHalf.y + absZ * lHalf.z;
				let lDelta = shape - clamp( shape, lCenter - lExtent, lCenter + lExtent );

				let rMin = vec3f( node.rightBounds.min[ 0 ], node.rightBounds.min[ 1 ], node.rightBounds.min[ 2 ] );
				let rMax = vec3f( node.rightBounds.max[ 0 ], node.rightBounds.max[ 1 ], node.rightBounds.max[ 2 ] );
				let rHalf = ( rMax - rMin ) * 0.5;
				let rCenter = ( toWorld * vec4f( ( rMin + rMax ) * 0.5, 1.0 ) ).xyz;
				let rExtent = absX * rHalf.x + absY * rHalf.y + absZ * rHalf.z;
				let rDelta = shape - clamp( shape, rCenter - rExtent, rCenter + rExtent );

				// the nearer child is traversed first
				return dot( lDelta, lDelta ) <= dot( rDelta, rDelta );

			}
		`,intersectsBoundsFn:Y`
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
		`,intersectRangeFn:Y`
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

					let barycoord = ${io}( shape, a, b, c );
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
		`,resetShapeFn:Y`
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
			`,transformShapeFn:Y`
			fn cppTransformShape( shape: ptr<function, vec3f>, objectIndex: u32 ) -> void {

				${i} = ${r}[ objectIndex ].matrixWorld;

			}
		`,transformResultFn:Y`
			fn cppTransformResult( result: ptr<function, ${Ca}>, objectIndex: u32 ) -> void {

				result.objectIndex = objectIndex;

			}
		`})}var uo=24,fo=(1<<uo)-1,po=7,mo=127,ho=new D,go=new se,_o=new D,vo=class extends fr{constructor(e,t){super(),t={getBVH:(e,t)=>{throw Error(`ClusteredBVH: getBVH callback must be provided `)},shouldCluster:e=>e.isSkinnedMesh||e.isInstancedMesh||e.isBatchedMesh,primitiveLimit:64,matrixWorld:Array.isArray(e)?new D:e.matrixWorld,includeInstances:!0,_strictLeafSize:1,...t};let n=Array.from(bo(e)),r=Math.ceil(Math.log2(n.length)),i=(1<<r)-1;this.objects=n,this.getBVH=t.getBVH,this.shouldCluster=t.shouldCluster,this.includeInstances=t.includeInstances,this.primitiveLimit=t.primitiveLimit,this.matrixWorld=t.matrixWorld,this.bvhMap=new WeakMap,this.idBits=r,this.idMask=i,this.primitiveBufferStride=2,this.init(t)}init(e){let t=0,{objects:n,bvhMap:r,matrixWorld:i}=this;ho.copy(i).invert(),n.forEach(e=>{let n=[];for(let r=0,i=this._getInstanceCount(e);r<i;r++){let i=this.getBVH(e,r);n.push(i),i&&(t+=this.shouldCluster(e)?i._roots.length:this._countRelevantLeafNodes(i))}r.set(e,n)}),this.primitiveBuffer=new Uint32Array(t*2),this._fillPrimitiveBuffer(this.primitiveBuffer),super.init(e)}getRootRanges(){return[{offset:0,count:this.primitiveBuffer.length/this.primitiveBufferStride}]}refit(...e){ho.copy(this.matrixWorld).invert(),super.refit(...e)}writePrimitiveBounds(e,t,n){let{primitiveBuffer:r,bvhMap:i,objects:a}=this,o=r[2*e+0],s=r[2*e+1],c=a[this.getObjectId(o)],l=this.getInstanceId(o),u=i.get(c)[l],d=this.getBVHRootIndex(s),f=this.getBVHNodeIndex(s);c.isInstancedMesh||c.isBatchedMesh?(c.getMatrixAt(l,_o),_o.premultiply(c.matrixWorld)):_o.copy(c.matrixWorld),_o.premultiply(ho),I(f,new Float32Array(u._roots[d]),go),go.applyMatrix4(_o);let{min:p,max:m}=go;t[n+0]=p.x,t[n+1]=p.y,t[n+2]=p.z,t[n+3]=m.x,t[n+4]=m.y,t[n+5]=m.z}getInstanceId(e){let{idMask:t,idBits:n}=this;return(e&~t)>>>n}getObjectId(e){let{idMask:t}=this;return e&t}getBVHRootIndex(e){return e>>>uo}getBVHNodeIndex(e){return(e&fo)*8}_getInstanceCount(e){let{includeInstances:t}=this;return e.isInstancedMesh&&t?e.count:e.isBatchedMesh&&t?e.instanceCount:1}_fillPrimitiveBuffer(e){let{objects:t,bvhMap:n,idBits:r,primitiveLimit:i}=this,a=0,o=(t,n,i,o)=>{if(o>fo)throw Error(`ClusteredBVH: cluster node index ${o} exceeds the ${uo}-bit packing limit and cannot be represented.`);if(i>mo)throw Error(`ClusteredBVH: bvh root index ${i} exceeds the ${po}-bit packing limit and cannot be represented.`);e[2*a+0]=t<<r|n,e[2*a+1]=i<<uo|o&fo,a++};t.forEach((e,t)=>{n.get(e).forEach((n,r)=>{if(n){if(this.shouldCluster(e))for(let e=0,i=n._roots.length;e<i;e++)o(r,t,e,0);else yo(n,i,(e,n)=>{o(r,t,e,n/8)})}})})}_countRelevantLeafNodes(e){let{primitiveLimit:t}=this,n=0;return yo(e,t,(e,r,i,a)=>{n++,a&&i>=t&&console.warn(`ClusteredBVH: a leaf node with ${i} primitives exceeds the cluster primitive limit of ${t} and cannot be subdivided further.`)}),n}};function yo(e,t,n){let r=e._roots.length;for(let i=0;i<r;i++)lr.setBVH(e,i),lr.traverseBuffer((e,r,a)=>{let o=lr.getRangeStart(a),s=lr.getRangeEnd(a)-o;return s<t||r?(n(i,a,s,r),!0):!1});lr.reset()}function bo(e,t=new Set){return Array.isArray(e)?e.forEach(e=>bo(e,t)):e.traverse(e=>{e.isMesh&&t.add(e)}),t}var xo=new D,So=new D,Co={start:0,count:0,vertexStart:0,vertexCount:0};function wo(e){let t=e;for(;t;){if(t.visible===!1)return!1;t=t.parent}return!0}function To(e){return e._roots.reduce((e,t)=>e+t.byteLength/32,0)}function Eo(e,t){return`${e}_${t}`}var Do=class{constructor(e,t={}){let{attributes:n={position:`vec4f`},autogenerateBvh:r=!0}=t;Array.isArray(e)||(e=[e]),e=e.map(e=>{if(e.isObject3D)return e;if(e.isBufferGeometry)return new te(e);if(e instanceof Sr){let t=new te;return t.geometry.boundsTree=e,t}}),this._bvhCache=new Map,this.autogenerateBvh=r,this.attributes=n,this.objects=e,this.bvh=null,this.storage=new Oo,this.structs=new Oo({transform:xa}),this.fns=new Oo({raycastFirstHit:so(this),closestPointToPoint:lo(this),sampleTrianglePoint:null},J)}getRootObject(){let{objects:e}=this;if(e.isObject3D)return e;Array.isArray(e)||(e=[e]),e=e.map(e=>{if(e.isObject3D)return e;if(e.isBufferGeometry)return new te(e);if(e instanceof Sr){let t=new te;return t.geometry.boundsTree=e,t}});let t=new d;return t.children=e,t}getShapecastFn(e){return ro(this,e)}update(){let e=this.getRootObject(),t=0;e.traverse(e=>{e.isMesh&&t++}),this.bvh=new vo(e,{strategy:2,getBVH:(e,t)=>this._getBVHSync(e,t,Co),primitiveLimit:t<3?1/0:64}),this.dispose();let{attributes:n,structs:r,bvh:i}=this,a=[],o=[],s=new Map,c=To(i)*64,l=0,u=0,d=[],f=0,p=this._getTransformMap(i),{primitiveBuffer:m,primitiveBufferStride:h}=i;for(let e=0,t=m.length;e<t;e+=h){let t=m[e],n=m[e+1],r=i.objects[i.getObjectId(t)],h=i.getInstanceId(t),g={start:0,count:0,vertexStart:0,vertexCount:0},_=this._getBVHSync(r,h,g);if(!_)throw Error(`BVHComputeData: BVH not found.`);let v=a.find(e=>e.bvh===_);v||(v={index:a.length,bvh:_,range:g,geometryOffset:0},l+=v.range.count,u+=v.range.vertexCount,a.push(v));let y=i.getBVHRootIndex(n),b=i.getBVHNodeIndex(n)/8,x=`${v.index}_${y}_${b}`,S=s.get(x);if(S===void 0){let e=Ba(_._roots[y],b);S={data:v,root:y,node:b,size:e,base:0},s.set(x,S),o.push(S),c+=e*64,f=Math.max(f,Ha(_._roots[y],b))}d.push({transformSlot:p.get(Eo(t,y)).slot,subtree:S})}if(Ha(i._roots[0])+f-1>no.value)throw Error(`BVHComputeData: BVH depth overruns the compute stack depth.`);let g=Math.max(p.size,2);l=Math.max(l,2),u=Math.max(u,2);let _=new O(n,`bvh_GeometryStruct`),v=0,y=0,b=new Uint32Array(l),x=new ArrayBuffer(u*_.getLength()*4),S=new ArrayBuffer(c);a.forEach(e=>{e.geometryOffset=y/3,e.bvh.indirect||(e.geometryOffset-=e.range.start/3),Wa(e.bvh,e.range,v,y,b),Ga(e.bvh,e.range,v,x,_,this),y+=e.range.count,v+=e.range.vertexCount});let C=To(i);o.forEach(e=>{e.base=C,Ua(e.data.bvh._roots[e.root],e.node,e.size,e.data.geometryOffset,C,S),C+=e.size}),d.forEach(e=>e.nodeOffset=e.subtree.base),za(i,d,0,S);let w=new ArrayBuffer(r.transform.getLength()*g*4),T=N(new k(new Uint32Array(S),1),ba).toReadOnly().setName(`bvh_nodes`),ee=new k(new Uint32Array(w),1),te=N(ee,r.transform).toReadOnly().setName(`bvh_transforms`),ne=N(new k(b,1),`uint`).toReadOnly().setName(`bvh_index`),re=N(new k(new Uint32Array(x),_.getLength()),_).toReadOnly().setName(`bvh_attributes`);this.storage.transforms=te,this.storage.nodes=T,this.storage.index=ne,this.storage.attributes=re,this.structs.attributes=_,So.copy(i.matrixWorld).invert(),p.forEach(e=>{this.writeTransformData(e,So,e.slot,w)}),this.fns.sampleTrianglePoint=co(this),this._bvhCache.clear()}async updateAsync(){let e=[];this.getRootObject().traverse(t=>{if(!t.isMesh)return;let n=1;t.isInstancedMesh?n=t.count:t.isBatchedMesh&&(n=t.instanceCount);for(let r=0;r<n;r++)e.push(this.getBVH(t,r,Co))}),await Promise.all(e),this.update()}updateTransforms(){let{bvh:e,storage:t}=this;e.refit();let n=t.nodes.proxyNode.value;za(e,null,0,n.array.buffer),n.needsUpdate=!0;let r=t.transforms.proxyNode.value,i=r.array.buffer;So.copy(e.matrixWorld).invert(),this._getTransformMap(e).forEach(e=>{this.writeTransformData(e,So,e.slot,i)}),r.needsUpdate=!0}writeTransformData(e,t,n,r){let{structs:i}=this,a=new Float32Array(r),o=new Uint32Array(r),{object:s,instanceId:c}=e;s.isInstancedMesh||s.isBatchedMesh?(s.getMatrixAt(c,xo),xo.premultiply(s.matrixWorld)):xo.copy(s.matrixWorld),xo.premultiply(t),xo.toArray(a,n*i.transform.getLength()),xo.invert(),xo.toArray(a,n*i.transform.getLength()+16);let l=wo(s);s.isBatchedMesh&&(l&&=s.getVisibleAt(c)),o[n*i.transform.getLength()+32]=+!!l}getBVH(e,t,n){let{autogenerateBvh:r,_bvhCache:i}=this,a=null;if(e.boundsTree||e.isSkinnedMesh){let t=e.geometry;if(n.count=t.index?t.index.count:t.attributes.position.count,n.vertexCount=t.attributes.position.count,a=e.boundsTree||null,a===null&&r){let t=e.uuid;a=i.get(t)||new _a(e),i.set(t,a)}}else if(e.isBatchedMesh){let o=e.getGeometryIdAt(t),s=e.getGeometryRangeAt(o);if(Object.assign(n,s),a=e.boundsTrees[o]||null,a===null&&r){let t=`batched_${e.geometry.uuid}_${s.start}_${s.count}`;a=i.get(t)||new ta(e.geometry,{range:{...n}}),i.set(t,a)}}else{let t=e.geometry;if(n.count=t.index?t.index.count:t.attributes.position.count,n.vertexCount=t.attributes.position.count,a=e.geometry.boundsTree||null,a===null&&r){let e=t.uuid;a=i.get(e)||new ta(t),i.set(e,a)}}return a}getDefaultAttributeValue(e,t){switch(e){case`position`:case`color`:t.set(1,1,1,1);break;default:t.set(0,0,0,0)}return t}dispose(){let{storage:e}=this;for(let t in e)e[t].value?.dispose()}_getBVHSync(e,t,n){let r=this.getBVH(e,t,n);if(r instanceof Promise)throw Error(`BVHComputeData: "getBVH" returned a promise. Use "updateAsync" instead.`);return r}_getTransformMap(e){let{primitiveBuffer:t,primitiveBufferStride:n}=e,r=new Map;for(let i=0,a=t.length;i<a;i+=n){let n=t[i],a=e.getBVHRootIndex(t[i+1]),o=Eo(n,a);if(r.has(o))continue;let s=r.size,c=e.objects[e.getObjectId(n)],l=e.getInstanceId(n);r.set(o,{object:c,instanceId:l,compositeId:n,root:a,slot:s})}return r}},Oo=class{constructor(e={},t=q){let n={};return new Proxy({...e},{get(e,r){return n[r]||(n[r]=t(r,e)),n[r]},set(e,t,n){return e[t]=n,!0}})}},ko=new t(-1,1,1,-1,0,1),Ao=new class extends ce{constructor(){super(),this.setAttribute(`position`,new g([-1,3,0,-1,-1,0,3,-1,0],3)),this.setAttribute(`uv`,new g([0,2,0,0,2,0],2))}},jo=class{constructor(e){this._mesh=new te(Ao,e)}dispose(){this._mesh.geometry.dispose()}render(e){e.render(this._mesh,ko)}get material(){return this._mesh.material}set material(e){this._mesh.material=e}},Mo=P(`
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
`),No=class extends wt{get texture(){return this._texNode.value}set texture(e){this._texNode.value=e}get fromTexture(){return this._fromTexNode.value}set fromTexture(e){this._fromTexNode.value=e}get toneMapping(){return this._toneMapping.toneMapping}set toneMapping(e){this._toneMapping.setToneMapping(e)}get transition(){return this._transitionUniform.value}set transition(e){this._transitionUniform.value=e}get exposure(){return this._toneMapping.exposureNode.value}set exposure(e){this._toneMapping.exposureNode.value=e}constructor(e){super();let t=et(new Ue);this._texNode=t;let n=et(new Ue);this._fromTexNode=n;let r=Je(Ct()),i=A(1);this._transitionUniform=i;let a=Y`
			fn fade( uv: vec2f ) -> vec4f {

				if ( ${i} <= 0.0 ) {

					return ${Mo}( ${n}, uv );

				} else if ( ${i} >= 1.0 ) {

					return ${Mo}( ${t}, uv );

				} else {

					let col0 = ${Mo}( ${n}, uv );
					let col1 = ${Mo}( ${t}, uv );
					return mix( col0, col1, ${i} );

				}

			}
		`,o=nt(0,1,a(r));this._toneMapping=o,this.transparent=!0,this.colorNode=Ve(o.rgb,o.a),this.setValues(e)}},Po=Y`
	fn debugHeatColor( t: f32 ) -> vec3f {

		let r = clamp( 1.5 - abs( 4.0 * t - 3.0 ), 0.0, 1.0 );
		let g = clamp( 1.5 - abs( 4.0 * t - 2.0 ), 0.0, 1.0 );
		let b = clamp( 1.5 - abs( 4.0 * t - 1.0 ), 0.0, 1.0 );
		return vec3f( r, g, b );

	}
`,Fo=new O({tlasCount:`uint`,blasCount:`uint`,didHit:`bool`,dist:`float`},`DebugBoundsResult`);function Io(e){let{transforms:t,index:n,attributes:r,materials:i}=e.storage,a=A(new D),o=A(new D),s=A(1),c=A(1),l=A(0),u=A(64),d=tt(0).toVar(`bvh_debugBoundsLevel`),f=it(1).toVar(`bvh_debugRayScalar`),p=it(0).toVar(`bvh_debugMaterialSide`),m=Y`
		fn debugGetBoundsOrder( ray: ${K}, splitAxis: u32, node: ${ba} ) -> bool {

			return ray.direction[ splitAxis ] >= 0.0;

		}
	`,h=Y`
		fn debugIntersectsBounds( ray: ${K}, bounds: ${ya}, result: ptr<function, ${Fo}> ) -> u32 {

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
	`,g=Y`
		fn debugIntersectRange( ray: ${K}, offset: u32, count: u32, result: ptr<function, ${Fo}> ) -> bool {

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
	`,_=Y`
		fn debugTransformRay( ray: ptr<function, ${K}>, objectIndex: u32 ) -> void {

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
	`,v=Y`
		fn debugResetLevel( objectIndex: u32 ) -> void {

			${f} = 1.0;
			${d} = 0u;

		}
	`,y=Y`
		fn debugBounds( vUv: vec2f ) -> vec4f {

			let ndc = vUv * 2.0 - vec2f( 1.0 );
			var ray = ${oo}( ndc, ${a} * ${o} );
			ray.direction = normalize( ray.direction );

			// count the boxes the ray crosses, pruning those behind the nearest hit surface
			var result: ${Fo};
			${e.getShapecastFn({name:`debugBoundsCount`,shapeStruct:K,resultStruct:Fo,boundsOrderFn:m,intersectsBoundsFn:h,intersectRangeFn:g,transformShapeFn:_,resetShapeFn:v})}( ray, &result );

			let tlas = select( 0u, result.tlasCount, ${s} > 0.5 );
			let blas = select( 0u, result.blasCount, ${c} > 0.5 );
			let count = tlas + blas;

			let t = clamp( f32( count ) / max( ${u}, 1.0 ), 0.0, 1.0 );

			return vec4f( ${Po}( t ), 1.0 );

		}
	`;return y.uniforms={cameraToModelMatrix:a,inverseProjectionMatrix:o,displayTLAS:s,displayBLAS:c,stopAtSurface:l,saturationCount:u},y}var X=class{get computeNode(){return this.kernel.computeNode}get workgroupSize(){return this.kernel.workgroupSize}set needsUpdate(e){this.setWorkgroupSize(...this.workgroupSize)}constructor(e,t={}){let{workgroupSize:n=[64],context:r={}}=t;this._fn=e,this.kernel=null,this.context=r,this.setWorkgroupSize(...n)}defineUniformAccessors(e){for(let t in e){if(t in this)throw Error(`ComputeNode: Uniform name ${t} is already defined.`);let n=e[t];n.isStorageBufferNode&&!n.name&&n.setName(`kernel_${t}`),`value`in n&&Object.defineProperty(this,t,{get(){return e[t].value},set(n){e[t].value=n}})}}setWorkgroupSize(e=64,t=1,n=1){let r=this._fn.context(this.context);return r.parameters=this._fn.parameters,this.kernel?.dispose(),this.kernel=r.computeKernel([e,t,n]),this}dispose(){this.kernel?.dispose(),this.kernel=null}getDispatchSize(e=1,t=1,n=1,r=[]){let[i,a,o]=this.workgroupSize;return r.length=3,r[0]=Math.ceil(e/i),r[1]=Math.ceil(t/a),r[2]=Math.ceil(n/o),r}},Z=Ae(`

	const PI: f32 = 3.141592653589793;
	const EPSILON: f32 = 1e-5;
	const MIN_ROUGHNESS: f32 = 1e-3;
	const MIN_INCIDENT_COS: f32 = 1e-3;

`),Lo=new O({color:`vec3f`,isTransmissive:`bool`,direction:`vec3f`,pdf:`float`},`ScatterRecord`),Ro=new O({reflectance:`vec3f`,transmittance:`vec3f`,reflectProbability:`float`},`TransmissionFresnel`),zo=new O({color:`vec3`,map:`int`,metalness:`float`,metalnessMap:`int`,roughness:`float`,roughnessMap:`int`,ior:`float`,transmission:`float`,transmissionMap:`int`,emissiveIntensity:`float`,emissive:`vec3`,emissiveMap:`int`,normalMap:`int`,normalScale:`vec2`,clearcoat:`float`,clearcoatMap:`int`,clearcoatNormalMap:`int`,clearcoatNormalScale:`vec2`,clearcoatRoughness:`float`,clearcoatRoughnessMap:`int`,iridescenceMap:`int`,iridescenceThicknessMap:`int`,iridescence:`float`,iridescenceIor:`float`,iridescenceThicknessMinimum:`float`,iridescenceThicknessMaximum:`float`,diffuseRoughness:`float`,dispersion:`float`,specularColor:`vec3`,specularColorMap:`int`,specularIntensity:`float`,specularIntensityMap:`int`,thinWall:`int`,attenuationColor:`vec3`,attenuationDistance:`float`,alphaMap:`int`,castShadow:`int`,opacity:`float`,alphaTest:`float`,side:`float`,matte:`int`,sheen:`float`,sheenColor:`vec3`,sheenColorMap:`int`,sheenRoughness:`float`,sheenRoughnessMap:`int`,vertexColors:`int`,flatShading:`int`,transparent:`int`,fogVolume:`int`,anisotropy:`float`,anisotropyRotation:`float`,anisotropyMap:`int`,mapTransform:`mat3`,metalnessMapTransform:`mat3`,roughnessMapTransform:`mat3`,transmissionMapTransform:`mat3`,emissiveMapTransform:`mat3`,normalMapTransform:`mat3`,clearcoatMapTransform:`mat3`,clearcoatNormalMapTransform:`mat3`,clearcoatRoughnessMapTransform:`mat3`,sheenColorMapTransform:`mat3`,sheenRoughnessMapTransform:`mat3`,iridescenceMapTransform:`mat3`,iridescenceThicknessMapTransform:`mat3`,specularColorMapTransform:`mat3`,specularIntensityMapTransform:`mat3`,alphaMapTransform:`mat3`,anisotropyMapTransform:`mat3`,multiscatterColor:`vec3`,scatterStrength:`float`,scatterAnisotropy:`float`},`Material`),Bo=new O({volumeParticle:`bool`,faceNormal:`vec3f`,frontFace:`bool`,normal:`vec3f`,normalBasis:`mat3x3f`,normalInvBasis:`mat3x3f`,eta:`f32`,f0:`f32`,roughness:`f32`,diffuseRoughness:`f32`,metalness:`f32`,anisotropy:`f32`,color:`vec3f`,emission:`vec3f`,opacity:`f32`,ior:`f32`,transmission:`f32`,thinWall:`bool`,attenuationColor:`vec3f`,attenuationDistance:` f32`,clearcoatNormal:`vec3f`,clearcoatBasis:`mat3x3f`,clearcoatInvBasis:`mat3x3f`,clearcoat:`f32`,clearcoatRoughness:`f32`,sheen:`f32`,sheenColor:`vec3f`,sheenRoughness:`f32`,iridescence:`f32`,iridescenceIor:`f32`,iridescenceThickness:`f32`,specularColor:`vec3f`,specularIntensity:`f32`},`SurfaceRecord`);new O({rotation:`mat3x3f`,intensity:`float`,blur:`float`,totalSum:`float`},`EnvironmentInfo`);var Vo=new O({color:`vec3f`,direction:`vec3f`,pdf:`float`},`EnvironmentSample`),Ho=new O({position:`vec3f`,lightType:`int`,color:`vec3f`,intensity:`float`,u:`vec3f`,visibleToCameraRays:`int`,v:`vec3f`,area:`float`,radius:`float`,decay:`float`,distance:`float`,coneCos:`float`,penumbraCos:`float`,iesProfile:`int`},`Light`),Uo=new O({dist:`float`,direction:`vec3f`,pdf:`float`,emission:`vec3f`,lightType:`int`},`LightRecord`),Wo=new O({diffuse:`float`,specular:`float`,transmission:`float`,clearcoat:`float`},`LobeWeights`),Go=new O({V:`vec3f`,L:`vec3f`,H:`vec3f`,VdotH:`float`},`BxDFContext`),Ko=Y`

	fn isAuxSurface( surface: ${Bo}, scatterRec: ${Lo} ) -> bool {

		let isMirror = surface.roughness <= ${.02} && surface.metalness >= ${.98};
		return ! scatterRec.isTransmissive && ! isMirror;

	}

`,qo=Y`

	fn unpackAuxAlbedo( packed: vec3u ) -> vec3f {

		return vec3f( unpack2x16float( packed.x ), unpack2x16float( packed.y ).x );

	}

`,Jo=Y`

	fn unpackAuxNormal( packed: vec3u ) -> vec3f {

		return vec3f( unpack2x16float( packed.z ), unpack2x16float( packed.y ).y );

	}

`,Yo=Y`

	fn blendAux( packed: vec3u, albedo: vec3f, normal: vec3f, weight: f32 ) -> vec3u {

		let meanAlbedo = mix( ${qo}( packed ), albedo, weight );
		let meanNormal = mix( ${Jo}( packed ), normal * 0.5 + 0.5, weight );
		return vec3u(
			pack2x16float( meanAlbedo.rg ),
			pack2x16float( vec2f( meanAlbedo.b, meanNormal.z ) ),
			pack2x16float( meanNormal.xy ),
		);

	}

`;function Xo(e=``){let t=new Ue(1,1);return t.format=Se,t.type=T,t.colorSpace=fe.workingColorSpace,t.name=e,t.generateMipmaps=!1,t}function Zo(e=``){let t=new Ue(1,1);return t.format=De,t.type=r,t.name=e,t.generateMipmaps=!1,t}function Qo(e=``){let t=new He(1,1,3);return t.format=De,t.type=r,t.name=e,t.generateMipmaps=!1,t}var $o=l({rand1:()=>ps,rand2:()=>ms,rand3:()=>hs,rand4:()=>gs,rngInit:()=>_s,rngNextBounce:()=>vs}),es=tt(65536),ts=it(1/16777216),ns=Ae(`

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

`),rs=tt(0).toVar(`sobolPixelIndex`),is=tt(0).toVar(`sobolPathIndex`),as=tt(0).toVar(`sobolBounceIndex`),os=P(`
	fn getMaskedSobol( index: u32, directions: array<u32, 32> ) -> u32 {

		var X = 0u;
		for ( var bit = 0u; bit < 32u; bit ++ ) {

			let mask = ( index >> bit ) & 1u;
			X ^= mask * directions[ bit ];

		}
		return X;

	}
`),ss=(e=1)=>{if(e<=0)return;let t=e>1?`vec${e}u`:`u32`,n=P(`
		fn sobolReverseBits_${t}( in: ${t} ) -> ${t} {

			var x = in;
			x = ( ( ( x & ${t}( 0xaaaaaaaau ) ) >> ${t}( 1 ) ) | ( ( x & ${t}( 0x55555555u ) ) << ${t}( 1 ) ) );
			x = ( ( ( x & ${t}( 0xccccccccu ) ) >> ${t}( 2 ) ) | ( ( x & ${t}( 0x33333333u ) ) << ${t}( 2 ) ) );
			x = ( ( ( x & ${t}( 0xf0f0f0f0u ) ) >> ${t}( 4 ) ) | ( ( x & ${t}( 0x0f0f0f0fu ) ) << ${t}( 4 ) ) );
			x = ( ( ( x & ${t}( 0xff00ff00u ) ) >> ${t}( 8 ) ) | ( ( x & ${t}( 0x00ff00ffu ) ) << ${t}( 8 ) ) );
			return ( ( x >> ${t}( 16 ) ) | ( x << ${t}( 16 ) ) );

		}
	`),r=P(`
		fn sobolHashCombine_${t}( seed: u32, v: ${t} ) -> ${t} {

			return ${t}( seed ) ^ ( v + ${t}( ( seed << 6 ) + ( seed >> 2 ) ) );

		}
	`),i=P(`
		fn sobolLaineKarrasPermutation_${t}( in: ${t}, seed: ${t} ) -> ${t} {

			var x = in;
			x += seed;
			x ^= x * 0x6c50b47cu;
			x ^= x * 0xb82f1e52u;
			x ^= x * 0xc7afe638u;
			x ^= x * 0x8d22f6e6u;
			return x;

		}
	`);return{reverseBits:n,hashCombine:r,lkPermutation:i,scramble:Y`
		fn nestedUniformScrambleBase2_${t}( x: ${t}, seed: ${t} ) -> ${t} {

			var res = ${i}( x, seed );
			res = ${n}( res );
			return res;

		}
	`}},cs=Array.from({length:5},(e,t)=>ss(t)),ls=Y`
  	${[ns]}
	fn generateSobolPoint( id: u32 ) -> vec4f {

		var index = id;
		if ( index >= ${es} ) {

			index = index % ${es};
			// return vec4( 0.0 );

		}

		// NOTE: this sobol "direction" is also available but we can't write out 5 components
		// uint x = index & 0x00ffffffu;
		let x = ${cs[1].reverseBits}( ${os}( index, SOBOL_DIRECTIONS_1 ) ) & 0x00ffffffu;
		let y = ${cs[1].reverseBits}( ${os}( index, SOBOL_DIRECTIONS_2 ) ) & 0x00ffffffu;
		let z = ${cs[1].reverseBits}( ${os}( index, SOBOL_DIRECTIONS_3 ) ) & 0x00ffffffu;
		let w = ${cs[1].reverseBits}( ${os}( index, SOBOL_DIRECTIONS_4 ) ) & 0x00ffffffu;

		return vec4( f32( x ), f32( y ), f32( z ), f32( w ) ) * ${ts};

	}
`,us=P(`
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
`),ds=Y`
	fn sobolGetSeed( effect: u32 ) -> u32 {

		return ${us}(
			${cs[1].hashCombine}(
				${cs[1].hashCombine}(
					${us}( ${as} ),
					${rs}
				),
				effect
			)
		);

	}
`,fs=(e=1,t=ls)=>{if(e<=0)return;let n=e>1?`vec${e}u`:`u32`,r=e>1?`vec${e}f`:`f32`,i=`.r`,a=`1u`;return e===2?(i=`.rg`,a=`vec2( 1u, 2u )`):e===3?(i=`.rgb`,a=`vec3( 1u, 2u, 3u )`):e===4&&(i=``,a=`vec4( 1u, 2u, 3u, 4u )`),Y`
		fn sobol${e}( effect: u32 ) -> ${r} {

			let seed = ${ds}( effect );
			let index = ${is};

			let shuffle_seed = ${cs[1].hashCombine}( seed, 0u );
			let shuffled_index = ${cs[1].scramble}( ${cs[1].reverseBits}( index ), shuffle_seed );
			let sobol_pt = ${t}( shuffled_index )${i};
			var result = ${n}( sobol_pt * 16777216.0 );

			let seed2 = ${cs[e].hashCombine}( seed, ${a} );
			result = ${cs[e].scramble}( result, seed2 );

			return ${ts} * ${r}( result >> ${n}( 8 ) );

		}
	`},ps=fs(1),ms=fs(2),hs=fs(3),gs=fs(4),_s=Y`
	fn sobolInit( pixel: vec2u, pathIndex: u32, bounceIndex: u32 ) -> void {

		${rs} = ( pixel.x << 16 ) | pixel.y;
		${is} = pathIndex;
		${as} = bounceIndex;

	}
`,vs=Y`
	fn sobolNextBounce() -> void {

		${as}++;

	}
`,ys=Na(`random.rngInit`,_s),bs=Na(`random.rngNextBounce`,vs),xs=Na(`random.rand1`,ps),Ss=Na(`random.rand2`,ms),Cs=Na(`random.rand3`,hs);Na(`random.rand4`,gs);var ws=P(`

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

`),Ts=P(`

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

`),Es=P(`

	fn iorToF0( ior: f32 ) -> f32 {
		return pow( ( 1 - ior ) / ( 1 + ior ), 2 );
	}

`),Ds=P(`

	fn iorToF0General( transmittedIor: f32, incidentIor: f32 ) -> f32 {

		return pow( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ), 2 );

	}

`),Os=P(`

	fn iorToF0GeneralVec( transmittedIor: vec3f, incidentIor: vec3f ) -> vec3f {

		let v = ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor );
		return v * v;

	}

`),ks=P(`

	fn fresnel0ToIor( f0: vec3f ) -> vec3f {

		let sqrtF0 = sqrt( f0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );

	}

`),As=P(`

	fn schlickFresnel( cosine: f32, f0: f32 ) -> f32 {

		return f0 + ( 1.0 - f0 ) * pow( 1.0 - cosine, 5.0 );

	}

`),js=P(`

	fn schlickFresnelVec( cosine: f32, f0: vec3f, f90: vec3f ) -> vec3f {

		return f0 + ( f90 - f0 ) * pow( 1.0 - cosine, 5.0 );

	}

`),Ms=P(`

	fn totalInternalReflection( cosTheta: f32, eta: f32 ) -> bool {

		let sinTheta = sqrt( 1.0 - cosTheta * cosTheta );
		return eta * sinTheta > 1.0;

	}

`),Ns=P(`

	fn totalInternalReflectionVec( cosTheta: f32, eta: vec3f ) -> vec3<bool> {

		let sinTheta = sqrt( 1.0 - cosTheta * cosTheta );
		return eta * sinTheta > vec3f( 1.0 );

	}

`);P(`

	fn evaluateFresnel( cosine: f32, eta: f32, f0: vec3f, f90: vec3f ) -> vec3f {

		if ( totalInternalReflection( cosine, eta ) ) {

			return f90;

		}

		return f0 + ( f90 - f0 ) * pow( 1.0 - cosine, 5.0 );
	}

`,[Ms]);var Ps=P(`

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

`),Fs=P(`

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

`,[Ms,Ps,As]),Is=P(`

	fn isTerminatingScatter( scatterRec: ScatterRecord ) -> bool {

		return scatterRec.pdf <= 0;

	}

`,[Lo]),Q=P(`

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

`),Ls=P(`

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

`),Rs=P(`

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

`),zs=P(`

	fn wrapTexelIndex( i: i32, size: i32, wrapMode: i32 ) -> i32 {

		if ( wrapMode == 0 ) {

			// Repeat wraps to the opposite edge
			return ( ( i % size ) + size ) % size;

		}

		// ClampToEdge and MirroredRepeat both fold back onto the edge texel
		return clamp( i, 0, size - 1 );

	}

`),Bs=(e,t,n=`sampleTexel`)=>Y`

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
			${Ls}( uv.x, wrapS ),
			${Ls}( uv.y, wrapT ),
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
			let x0 = ${zs}( base.x,     intSize.x, wrapS );
			let x1 = ${zs}( base.x + 1, intSize.x, wrapS );
			let y0 = ${zs}( base.y,     intSize.y, wrapT );
			let y1 = ${zs}( base.y + 1, intSize.y, wrapT );

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
`,Vs=P(`

	fn sampleSphere( uv: vec2f ) -> vec3f {

		let u = ( uv.x - 0.5 ) * 2.0;
		let t = uv.y * PI * 2.0;
		let f = sqrt( 1.0 - u * u );

		return vec3f( f * cos( t ), f * sin( t ), u );

	}

`,[Z]),Hs=P(`

	fn diffuseDirection( wo: vec3f, uv: vec2f ) -> vec3f {

		var lightDirection = sampleSphere( uv );
		lightDirection.z += 1.0;
		lightDirection = normalize( lightDirection );

		return lightDirection;

	}

`,[Vs]),Us=P(`

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

`,[Fs,As,Es,Wo,Z]),Ws=P(`

	fn equirectDirectionToUv(direction: vec3f) -> vec2f {

		// from Spherical.setFromCartesianCoords
		var uv = vec2f( atan2( direction.z, direction.x ), acos( direction.y ) );
		uv /= vec2f( 2.0 * PI, PI );

		// apply adjustments to get values in range [0, 1] and y right side up
		uv.x += 0.5;
		uv.y = 1.0 - uv.y;
		return uv;

	}

`),Gs=P(`

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

`,[Z]),Ks=P(`

	fn sampleHenyeyGreenstein( d: vec3f, g: f32, uv: vec2f ) -> vec3f {

		var cosTheta = 1.0 - 2.0 * uv.x;
		if ( abs( g ) > 0.001 ) {

			let sqrTerm = ( 1.0 - g * g ) / ( 1.0 - g + 2.0 * g * uv.x );
			cosTheta = clamp( ( 1.0 + g * g - sqrTerm * sqrTerm ) / ( 2.0 * g ), - 1.0, 1.0 );

		}

		// orthonormal basis around "d", from https://graphics.pixar.com/library/OrthonormalB/paper.pdf
		let sign = select( sign( d.z ), 1.0, d.z == 0.0 );
		let a = - 1.0 / ( sign + d.z );
		let b = d.x * d.y * a;
		let b1 = vec3( 1.0 + sign * d.x * d.x * a, sign * b, - sign * d.x );
		let b2 = vec3( b, sign + d.y * d.y * a, - d.y );

		let sinTheta = sqrt( max( 0.0, 1.0 - cosTheta * cosTheta ) );
		let phi = 2.0 * PI * uv.y;
		return normalize( sinTheta * cos( phi ) * b1 + sinTheta * sin( phi ) * b2 + cosTheta * d );

	}

`,[Z]),qs=P(`

	fn misHeuristic( a: f32, b: f32 ) -> f32 {

		// computed as a ratio so squaring large pdfs can't overflow to Inf / Inf
		if ( a >= b ) {

			let r = b / a;
			return 1.0 / ( 1.0 + r * r );

		}

		let r = a / b;
		return r * r / ( 1.0 + r * r );

	}

`),Js=P(`

	fn luminance( color: vec3f ) -> f32 {

		return dot( color, vec3f( 0.2126, 0.7152, 0.0722 ) );

	}

`),Ys=P(`

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

`,[Z]);P(`

	fn equirectDirectionPdf( direction: vec3f ) -> f32 {

		let uv = equirectDirectionToUv( direction );
		let theta = uv.y * PI;
		let sinTheta = sin( theta );
		if ( sinTheta == 0.0 ) {

			return 0.0;

		}

		return 1.0 / ( 2.0 * PI * PI * sinTheta );

	}

`,[Z,Ws]);var Xs=P(`

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

`),Zs=1e30,Qs=1e-5,$s=P(`

	fn isMISWeightLight( lightType: i32 ) -> bool {

		return lightType == 5 || lightType == 1 || lightType == 0;

	}

`),ec=P(`

	fn getSpotAttenuation( coneCosine: f32, penumbraCosine: f32, angleCosine: f32 ) -> f32 {

		return smoothstep( coneCosine, penumbraCosine, angleCosine );

	}

`),tc=P(`

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

`,[Z]),nc=P(`

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

`,[Z]),rc=P(`

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

`,[Z]),ic=P(`

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

`,[Ho,Uo,Z]),ac=P(`

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

`,[Ho,Uo,Z,tc]),oc=P(`

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

`,[Ho,Z]),sc=1e-6,cc=1e-6,lc=.999,uc=new O({inside:`bool`,object:`uint`,extinction:`vec3f`,albedo:`vec3f`,anisotropy:`float`},`Medium`),dc=new O({extinction:`vec3f`,object:`uint`,albedo:`vec3f`,anisotropy:`float`,inside:`uint`},`MediumState`),fc=Y`

	fn storeMedium( medium: ${uc} ) -> ${dc} {

		var state: ${dc};
		state.extinction = medium.extinction;
		state.object = medium.object;
		state.albedo = medium.albedo;
		state.anisotropy = medium.anisotropy;
		state.inside = select( 0u, 1u, medium.inside );
		return state;

	}

`,pc=Y`

	fn loadMedium( state: ${dc} ) -> ${uc} {

		var medium: ${uc};
		medium.inside = state.inside != 0u;
		medium.object = state.object;
		medium.extinction = state.extinction;
		medium.albedo = state.albedo;
		medium.anisotropy = state.anisotropy;
		return medium;

	}

`,mc=Y`

	fn enterMedium( material: ${zo}, object: u32 ) -> ${uc} {

		let anisotropy = clamp( material.scatterAnisotropy, - ${lc}, ${lc} );

		var medium: ${uc};
		medium.extinction = - log( max( material.attenuationColor, vec3f( ${sc} ) ) ) / material.attenuationDistance;
		medium.albedo = ${Y`

	fn singleScatterAlbedo( multiscatterAlbedo: vec3f, anisotropy: f32 ) -> vec3f {

		let a = multiscatterAlbedo;
		let s = clamp( 4.09712 + 4.20863 * a - sqrt( 9.59217 + 41.6808 * a + 17.7126 * a * a ), vec3f( 0.0 ), vec3f( 1.0 ) );
		let s2 = select( s * s, vec3f( 1.0 ), a <= vec3f( 0.0 ) );
		return ( 1.0 - s2 ) / ( 1.0 - anisotropy * s2 );

	}

`}( material.multiscatterColor * material.scatterStrength, anisotropy );
		medium.inside = any( medium.albedo > vec3f( 0.0 ) ) && any( medium.extinction > vec3f( 0.0 ) );
		medium.object = object;
		medium.anisotropy = anisotropy;
		return medium;

	}

`,hc=Y`

	fn mediumChannelPdf( throughput: vec3f, albedo: vec3f ) -> vec3f {

		let weights = abs( throughput * albedo );
		let weightSum = weights.r + weights.g + weights.b;
		if ( weightSum > 0.0 ) {

			return weights / weightSum;

		}

		return vec3f( 1.0 / 3.0 );

	}

`,gc=Y`

	fn sampleMediumDistance( medium: ${uc}, channelPdf: vec3f, u: vec2f ) -> f32 {

		var channel = 2u;
		if ( u.x < channelPdf.r ) {

			channel = 0u;

		} else if ( u.x < channelPdf.r + channelPdf.g ) {

			channel = 1u;

		}

		// a channel with no extinction never scatters, and WGSL doesn't guarantee an infinite quotient
		let extinction = medium.extinction[ channel ];
		if ( extinction <= 0.0 ) {

			return ${Zs};

		}

		return - log( 1.0 - u.y ) / extinction;

	}

`,_c=Y`

	fn mediumDistancePdf( medium: ${uc}, dist: f32, scattered: bool ) -> vec3f {

		let transmittance = exp( - medium.extinction * dist );
		return select( transmittance, medium.extinction * transmittance, scattered );

	}

`,vc=P(`

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

`,[Z]),yc=P(`

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

`,[Z]),bc=P(`

	fn ggxShadowMaskG1( V: vec3f, alpha: vec2f ) -> f32 {

		// TODO: this could be collapsed to a simpler form as an optimization
		return 1.0 / ( 1.0 + ggxLambda( V, alpha ) );

	}

`,[yc]),xc=P(`

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

`,[Z]),Sc=P(`

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

`,[Z]),Cc=P(`

	fn ggxReflectionAdjustedPDF( V: vec3f, H: vec3f, alpha: vec2f ) -> f32 {

		let NdotV = max( V.z, MIN_INCIDENT_COS );
		let D = ggxDistribution( H, alpha );
		let G1 = ggxShadowMaskG1( V, alpha );

		return D * G1 / ( 4 * NdotV );

	}
`,[Sc,bc]),wc=P(`

	fn ggxRefractionAdjustedPDF( V: vec3f, L: vec3f, H: vec3f, alpha: vec2f, eta: f32 ) -> f32 {

		let NdotV = max( V.z, MIN_INCIDENT_COS );
		let HdotV = dot( V, H );
		let HdotL = dot( L, H );
		let D = ggxDistribution( H, alpha );
		let G1 = ggxShadowMaskG1( V, alpha );

		let denom = eta * HdotV + HdotL;
		return D * G1 * abs( HdotV ) * abs( HdotL ) / ( NdotV * denom * denom );

	}
`,[Sc,bc]),Tc=Y`

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

`,Ec=Y`

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

`,Dc=3402823466e29,Oc=(e,t,n)=>P(`

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

`,[ws,Es,Ts,e,t,n,Bo,Z,Tc,Ec]);P(`

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

`,[Z,As,Bo]),P(`

	fn lambertBrdf( NdotV: f32, NdotL: f32, VdotH: f32, surf: SurfaceRecord ) -> vec3f {

		return surf.color / PI;

	}

`,[Z,Bo]);var kc=P(`

	fn specularBrdf( V: vec3f, L: vec3f, H: vec3f, alpha: vec2f ) -> vec3f {

		let alphaT = alpha.x;
		let alphaB = alpha.y;

		let Vis = ggxSmithVisibility( V, L, alpha );
		let D = ggxDistribution( H, alpha );

		return vec3f( D * Vis );

	}

`,[xc,Sc]),Ac=P(`

	fn isMatchedIor( eta: f32 ) -> bool {

		return abs( eta - 1.0 ) < EPSILON;

	}

`,[Z]),jc=P(`

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

`,[bc,Sc,Ps]),Mc=P(`

	fn thinWallTransmissionRoughness( alpha: f32, eta: f32 ) -> f32 {

		let t = 3.4 * ( eta - 1.0 ) * ( eta - 0.5 ) * ( eta - 0.5 ) / ( eta * eta * eta );
		return saturate( alpha * sqrt( max( t, 0.0 ) ) );

	}

`),Nc=P(`

	fn transmissionAttenuation( dist: f32, attColor: vec3f, attDist: f32 ) -> vec3f {

		return pow( attColor, vec3f( dist / attDist ) );

	}

`),Pc=Y`

	fn applyDispersion( surf: ptr<function, ${Bo}>, dispersion: f32, wavelength: f32 ) -> void {

		surf.ior = ${P(`

	fn dispersionIor( ior: f32, dispersion: f32, wavelength: f32 ) -> f32 {

		let nd = max( ior, 1.0 );
		let scale = ( nd - 1.0 ) * max( dispersion, 0.0 ) / 20.0;
		let lambda = clamp( wavelength, 360.0, 830.0 );
		return max( nd + scale * ( 523655.0 / ( lambda * lambda ) - 1.5168 ), 1.0 );

	}

`)}( surf.ior, dispersion, wavelength );
		surf.eta = select( surf.ior, 1.0 / surf.ior, surf.thinWall || surf.frontFace );
		surf.f0 = ${Es}( surf.eta );

	}

`,Fc=P(`

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

`),Ic=P(`

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

`,[js,Es,Ms]),Lc=ut(3.2404542,-.969266,.0556434,-1.5371385,1.8760108,-.2040259,-.4985314,.041556,1.0572252),Rc=Y`

	fn evalSensitivity( OPD: f32, shift: vec3f ) -> vec3f {

		let phase = 2.0 * ${Math.PI} * OPD * 1.0e-9;
		const val = vec3(5.4856e-13, 4.4201e-13, 5.2481e-13);
		const pos = vec3(1.6810e+06, 1.7953e+06, 2.2084e+06);
		const _var = vec3(4.3278e+09, 9.3046e+09, 6.6121e+09);

		var xyz = val * sqrt(2.0 * ${Math.PI} * _var) * cos(pos * phase + shift) * exp(-phase * phase * _var);
		xyz.x += 9.7470e-14 * sqrt(2.0 * ${Math.PI} * 4.5282e+09) * cos(2.2399e+06 * phase + shift.x) * exp(-4.5282e+09 * phase * phase);
		xyz /= 1.0685e-7;

		let rgb = ${Lc} * xyz;
		return rgb;

	}

`,zc=P(`

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

`,[Ds,Os,As,ks,Rc,Ns]),Bc=(e=zc)=>Y`

	fn transmissionFresnel( cosTheta: f32, surf: ${Bo} ) -> ${Ro} {

		var result: ${Ro};
		let cosine = saturate( abs( cosTheta ) );
		let matchedIor = ${Ac}( surf.eta );
		let airIncident = surf.thinWall || surf.frontFace;
		let dielectricFresnel = ${Ps}( cosine, surf.eta );

		// Keep matched media transparent unless a real thin-film layer is present. This avoids
		// introducing the non-physical Schlick F90 reflection produced by KHR_materials_specular
		// when the substrate itself has no IOR boundary.
		var reflectance = vec3f( 0.0 );
		if ( ! matchedIor ) {

			let specularF0 = min( surf.f0 * surf.specularColor, vec3f( 1.0 ) );
			let dielectricReflectance = select(
				vec3f( dielectricFresnel ),
				${js}( cosine, specularF0, vec3f( 1.0 ) ),
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
				vec3f( ${Es}( filmBaseIor ) ),
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
		let transmissionTint = select( sqrt( surf.color ), surf.color, surf.thinWall );
		let transmitEnergy = dot( transmittance * transmissionTint, vec3f( 1.0 / 3.0 ) );
		let totalEnergy = reflectEnergy + transmitEnergy;
		result.reflectProbability = select( 0.0, reflectEnergy / max( totalEnergy, EPSILON ), totalEnergy > EPSILON );

		return result;

	}

`,Vc=P(`

	fn conductorFresnel( VdotH: f32, f0: vec3f, specular: vec3f ) -> vec3f {

		return specular * schlickFresnelVec( abs( VdotH ), f0, vec3f( 1 ) );

	}

`,[js]),Hc=P(`

	fn fresnelCoat( VdotNc: f32, ior: f32, base: vec3f, layer: vec3f, weight: f32 ) -> vec3f {

		let f0 = iorToF0( ior );
		let F = schlickFresnel( abs( VdotNc ), f0 );

		return mix( base, layer, weight * F );

	}

`,[Es,As]),Uc=e=>Y`

	fn albedo(
		eta: f32,
		includeFresnel: bool,
		includeRefraction: bool,
		globalId: vec3u,
		layer: u32,
	) -> void {

		// The matched-IOR limit is a unit-energy delta transmission event, so it cannot
		// be integrated with the rough BTDF below.
		if ( includeRefraction && ${Ac}( eta ) ) {

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

		let f0 = ${Es}( eta );

		var result = 0.0;
		for ( var x = 0u; x < GRID_SIZE; x++ ) {

			for ( var y = 0u; y < GRID_SIZE; y++ ) {

				// calculate the half vector to sample
				let gridPoint = vec2f( vec2u( x, y ) ) + vec2f( 0.5 );
				let sampleUv = gridPoint / f32( GRID_SIZE );
				let wh = ${vc}( wo, vec2( alpha ), sampleUv );

				var f = 1.0;
				if ( includeFresnel ) {

					// use the exact dielectric fresnel so the table agrees with the fresnel used
					// for lobe sampling
					f = ${Ps}( dot( wo, wh ), eta );

				}

				// air-incident reflection is evaluated with schlick in bsdfEval - only the
				// volume-incident ( TIR ) glass reflection uses the exact fresnel
				var reflectionF = f;
				if ( eta < 1.0 ) {

					reflectionF = ${As}( dot( wo, wh ), f0 );

				}

				// reflection lobe - samples landing below the surface are lost
				let wi = - reflect( wo, wh );
				let reflectionPdf = ${Cc}( wo, wh, vec2f( alpha ) );
				if ( wi.z > 0.0 && reflectionPdf != 0.0 ) {

					let specular = ${kc}( wo, wi, wh, vec2f( alpha ) );
					result += reflectionF * specular.x * wi.z / reflectionPdf;

				}

				// refraction lobe - the btdf carries its own ( 1 - F ) fresnel weight, and
				// samples landing back above the surface are lost
				if ( includeRefraction ) {

					let wiRefract = refract( - wo, wh, eta );
					if ( wiRefract.z < 0.0 ) {

						let transmission = ${jc}( wo, wiRefract, wh, vec2f( alpha ), eta );
						let pdf = ${wc}( wo, wiRefract, wh, vec2f( alpha ), eta );
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

`,Wc=$o,Gc=2147483648,Kc=1073741824,qc=1073741823,Jc=class extends X{constructor(){let e={material:{value:null},envInfo:{value:null},lightsInfo:{value:null},prevOutputTarget:st(Xo()).toReadOnly(),outputTarget:st(Xo()).toWriteOnly(),sampleCountTarget:st(Zo()).toReadWrite(),offset:A(new a),tileSize:A(new a),seed:A(0),maxBounces:A(5),maxTransparentBounces:A(5,`uint`),maxSubsurfaceBounces:A(256,`uint`),misEnabled:A(1,`uint`),maxSamples:A(0,`uint`),filterGlossy:A(1),clampDirect:A(0),clampIndirect:A(10),backgroundInfo:{value:null},transmissiveBackground:A(1),accumulateAux:A(0,`uint`),auxTarget:st(Qo()).toReadWrite(),textures:et(new n),textureSampler:Ye(new n),globalId:qe},t=Ma(`bvhData.fns.raycastFirstHit.outputType`),r=Na(`bvhData.fns.raycastFirstHit`),i=Na(`bvhData.fns.raycastShadow`),o=Na(`bvhData.fns.sampleTrianglePoint`),s=Na(`bvhData.fns.getSurfaceRecord`),c=Na(`bvhData.fns.getCameraRay`),l=J(`material.value.bsdfSample`,e),u=J(`material.value.bsdfEvalPdf`,e),d=Ma(`bvhData.storage.materials`),f=Ma(`bvhData.storage.transforms`),p=q(`envInfo.value.totalSumNode`,e),m=q(`envInfo.value.intensityNode`,e),h=q(`envInfo.value.sampleColor`,e),g=q(`envInfo.value.sampleDir`,e),_=q(`envInfo.value.getDirPdf`,e),v=q(`envInfo.value.getWeight`,e),y=q(`backgroundInfo.value.sampleColor`,e),b=q(`lightsInfo.value.countNode`,e),x=J(`lightsInfo.value.randomLightSample`,e),S=J(`lightsInfo.value.intersectLightAtIndex`,e),C=J(`lightsInfo.value.getLightWeight`,e),w=J(`lightsInfo.value.getLightsWeight`,e),T=J(`lightsInfo.value.selectLight`,e),ee=J(`lightsInfo.value.isLightVisibleToCamera`,e),te=Y`

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
				maxSubsurfaceBounces: u32,
				misEnabled: u32,
				maxSamples: u32,
				filterGlossy: f32,
				clampDirect: f32,
				clampIndirect: f32,

				transmissiveBackground: u32,
				accumulateAux: u32,

			) -> void {

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
				${ys}( indexUV.xy, seed, 0 );

				// scene ray
				let jitteredUv = uv + ${Ss}( ${0} ) / vec2f( targetDimensions );
				var ray: ${K};
				if ( ! ${c}( jitteredUv, vec2f( targetDimensions ), &ray ) ) {

					// a declined pixel never takes a sample, so with a cap it counts as finished
					if ( maxSamples != 0u ) {

						textureStore( ${e.sampleCountTarget}, indexUV, vec4( maxSamples ) );

					}

					return;

				}

				ray.direction = normalize( ray.direction );

				var resultColor = vec4f( 0, 0, 0, 1 );
				var throughputColor = vec3f( 1.0 );
				var bsdfPdf = 0.0;

				// Alpha pass throughs only move where the BVH traversal starts, "rayStart" along the ray, so the
				// ray keeps the origin it scattered from, which its MIS weights are measured from
				var rayStart = 0.0;
				var traceOrigin = ray.origin;
				var isFullyTransmissive = true;
				var minPdf = 1.0;
				var transparentBounce = 0u;

				// the scattering volume the path is in. Media don't nest
				var medium: ${uc};
				var subsurfaceBounces = 0u;

				// no light is sampled at a scatter event, so whatever the next segment reaches takes full weight
				var mediumScattered = false;

				// A negative value marks a sampled wavelength whose RGB reconstruction weight has not been applied yet.
				var dispersionWavelength = - mix( ${360}.0, ${830}.0, ${xs}( ${7} ) );

				// one-sample NEE chooses between the analytic lights and the environment
				let envActive = ${p} > 0.0 && ${m} > 0.0;
				let lightsCount = ${b};
				var envWeight = 0.0;
				if ( envActive ) {

					envWeight = ${v}();

				}

				// added last, since a camera ray miss overwrites the pixel with the background
				var lightHits = vec3f( 0.0 );
				var cameraHitLight = false;

				// The first surface the path scatters off fills the denoiser's auxiliary images. Until one is found
				// the last mirror or transmission hit stands in, for paths that reach the environment. The albedo
				// is tinted by the throughput of the surfaces looked past to reach it
				var auxFound = false;
				var auxAlbedo = vec3f( 0.0 );
				var auxNormal = vec3f( 0.0 );

				for ( var bounce = 0u; bounce < maxBounces; bounce ++ ) {

					// Inside a medium, sample a scatter event before the next surface and only trace up to it
					var channelPdf = vec3f( 0.0 );
					var scatterDist = 0.0;
					var traceRay = ray;
					traceRay.origin = traceOrigin;
					if ( medium.inside ) {

						channelPdf = ${hc}( throughputColor, medium.albedo );
						scatterDist = ${gc}( medium, channelPdf, ${Ss}( ${8} ) );
						traceRay.maxDist = select( scatterDist, min( ray.maxDist, scatterDist ), ray.maxDist > 0.0 );

					}

					var hitResult: ${t};
					let didHit = ${r}( traceRay, &hitResult );
					let surfaceDist = select( ${Zs}, hitResult.dist, didHit );

					let segmentInMedium = medium.inside;
					if ( medium.inside ) {

						let scattered = scatterDist < surfaceDist;
						let segmentDist = select( surfaceDist, scatterDist, scattered );
						let transmittance = exp( - medium.extinction * segmentDist );
						let distancePdf = dot( channelPdf, ${_c}( medium, segmentDist, scattered ) );
						if ( distancePdf <= 0.0 ) {

							break;

						}

						if ( ! scattered ) {

							// reaching the surface, weighted by the probability of no scatter event before it
							throughputColor *= transmittance / distancePdf;

						} else {

							throughputColor *= medium.albedo * medium.extinction * transmittance / distancePdf;
							ray.origin = traceOrigin + ray.direction * scatterDist;
							traceOrigin = ray.origin;
							rayStart = 0.0;
							ray.direction = ${Ks}( ray.direction, medium.anisotropy, ${Ss}( ${9} ) );
							ray.maxDist = 0.0;
							mediumScattered = true;
							isFullyTransmissive = false;

							// subsurface bounces are capped separately from bounces
							subsurfaceBounces ++;
							let maxThroughput = max( max( throughputColor.r, throughputColor.g ), throughputColor.b );
							if ( subsurfaceBounces >= maxSubsurfaceBounces || maxThroughput < ${cc} ) {

								break;

							}

							${bs}();
							bounce --;
							continue;

						}

					}

					// NEE's total weight at the vertex this ray left, for MIS. Camera rays have none, and
					// neither do scatter events in a medium
					let isMISWeighted = misEnabled != 0u && bounce > 0u && ! mediumScattered;
					var lightTotalWeight = 0.0;
					if ( isMISWeighted ) {

						lightTotalWeight = ${w}( ray.origin ) + envWeight;

					}

					// forward hits on area lights along the traced segment. Camera rays only see visibleToCameraRays
					// lights, at full weight
					for ( var li = 0u; li < lightsCount; li ++ ) {

						if ( bounce == 0u && ! ${ee}( li ) ) {

							continue;

						}

						var lightRec: ${Uo};
						if ( ${S}( ray.origin, ray.direction, li, &lightRec ) && lightRec.dist > rayStart && lightRec.dist < rayStart + surfaceDist ) {

							var misWeight = 1.0;
							if ( isMISWeighted ) {

								let selectionPdf = ${C}( li, ray.origin ) / lightTotalWeight;
								misWeight = ${qs}( bsdfPdf, lightRec.pdf * selectionPdf );

							}

							lightHits += ${Q}( lightRec.emission * throughputColor * misWeight, bounce, clampDirect, clampIndirect );
							cameraHitLight = cameraHitLight || bounce == 0u;

						}

					}

					if ( didHit ) {

						// whole structs are read from the buffer, not a pointer alias, which Safari fails to compile
						let objectInfo = ${f}[ hitResult.objectIndex ];
						var materialInfo = ${d}[ objectInfo.materialIndex ];

						// a matte surface hit by the camera ray renders as a fully transparent
						if ( materialInfo.matte != 0 && bounce == 0u ) {

							resultColor = vec4f( 0.0 );
							break;

						}

						// apply per-object colors
						materialInfo.color *= objectInfo.color.rgb;
						materialInfo.opacity *= objectInfo.color.a;

						let view = - ray.direction;
						var vertexData = ${o}( hitResult.barycoord, hitResult.indices.xyz );
						vertexData.normal = normalize( transpose( objectInfo.inverseMatrixWorld ) * vertexData.normal );
						vertexData.tangent = vec4f( ( objectInfo.matrixWorld * vec4f( vertexData.tangent.xyz, 0.0 ) ).xyz, vertexData.tangent.w );
						vertexData.position = objectInfo.matrixWorld * vertexData.position;

						// blur glossy surfaces after low-probability bounces to suppress fireflies,
						// from the Cycles "filter glossy" approach in integrator/surface_shader.h
						// The smallest pdf seen along the path for the glossy filter is tracked below
						let blurRoughness = sqrt( clamp( 1.0 - filterGlossy * minPdf, 0.0, 1.0 ) ) * 0.5;

						var surface = ${s}( materialInfo, vertexData, hitResult.side, hitResult.normal, view, blurRoughness );

						// Stochastically pass through partially transparent surfaces by restarting
						// the traversal at the hit point, advancing the rng but not the bounce count.
						if ( ${xs}( ${50} ) > surface.opacity ) {

							// stop once the transparent bounces run out
							if ( transparentBounce >= maxTransparentBounces ) {

								break;

							}

							traceOrigin = ${Rs}( vertexData.position.xyz, ray.direction, hitResult.normal );
							rayStart += hitResult.dist;
							${bs}();
							transparentBounce ++;
							bounce --;
							continue;

						}

						let isDispersive = materialInfo.dispersion > 0.0 && surface.ior > 1.0 && surface.transmission > 0.0 && ! surface.thinWall;
						if ( isDispersive ) {

							let wavelength = abs( dispersionWavelength );
							${Pc}( &surface, materialInfo.dispersion, wavelength );
							if ( dispersionWavelength < 0.0 ) {

								dispersionWavelength = wavelength;
								throughputColor *= ${Fc}( wavelength );

							}

						}

						// attenuate the light transmitted through the volume when exiting a backface. A scattering
						// medium has already applied its transmittance above
						if ( hitResult.side < 0.0 && materialInfo.transmission > 0.0 && ! segmentInMedium ) {

							throughputColor *= ${Nc}( hitResult.dist, materialInfo.attenuationColor, materialInfo.attenuationDistance );

						}

						// emission, clamped at the depth of the segment that found it, as in Cycles
						let emission = ${Q}( throughputColor * surface.emission, bounce, clampDirect, clampIndirect );
						resultColor += vec4f( emission, 0.0 );

						// next event estimation: choose one light or the environment by its estimated
						// contribution
						if ( misEnabled != 0u ) {

							let ruv = ${Cs}( ${5} );
							var selectionPdf = 0.0;
							let lightIndex = ${T}( vertexData.position.xyz, envWeight, ruv.x, &selectionPdf );
							if ( selectionPdf > 0.0 ) {

								var lightRec: ${Uo};
								if ( envActive && lightIndex == lightsCount ) {

									// the environment, sampled from its CDF, as a light of kind ENVIRONMENT
									let envSample = ${g}( ruv.yz );
									lightRec.direction = envSample.direction;
									lightRec.emission = envSample.color;
									lightRec.pdf = envSample.pdf;
									lightRec.dist = ${Zs};
									lightRec.lightType = ${5};

								} else {

									lightRec = ${x}( lightIndex, vertexData.position.xyz, ruv.yz );

								}

								if ( lightRec.pdf > 0.0 ) {

									let evalRec = ${u}( view, lightRec.direction, surface );
									if ( evalRec.pdf > 0.0 ) {

										var shadowRay: ${K};
										shadowRay.origin = ${Rs}( vertexData.position.xyz, lightRec.direction, hitResult.normal );
										shadowRay.direction = lightRec.direction;
										shadowRay.maxDist = lightRec.dist * ( 1.0 - ${Qs} );

										// opaque occlusion up to the light distance, attenuated by the partially
										// transparent surfaces passed
										var shadowHit: ${t};
										let occluded = ${i}( shadowRay, &shadowHit );
										if ( ! occluded ) {

											let lightPdf = lightRec.pdf * selectionPdf;

											// env + area lights are also found by bsdf rays, so MIS-weight them. Punctual lights, and lights
											// past the bounce limit, take full weight. Bsdf rays stopped by faces the shadow ray skipped can't
											// find the light, so their share of the weight moves to the light sample
											let isMISWeighted = ${$s}( lightRec.lightType ) && bounce + 1u < maxBounces;
											let misWeight = select( 1.0, mix( ${qs}( lightPdf, evalRec.pdf ), 1.0, shadowHit.skippedOcclusion ), isMISWeighted );
											let directLight = throughputColor * lightRec.emission * evalRec.color * misWeight * ( 1.0 - shadowHit.occlusion ) / lightPdf;
											let contribution = ${Q}( directLight, bounce + 1u, clampDirect, clampIndirect );
											resultColor += vec4f( contribution, 0.0 );

										}

									}

								}

							}

						}

						let scatterRec = ${l}( view, surface );

						if ( ! auxFound ) {

							auxFound = ${Ko}( surface, scatterRec );
							auxAlbedo = saturate( throughputColor * surface.color );
							auxNormal = surface.normal;

						}

						if ( ${Is}( scatterRec ) ) {

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
							if ( rrProb <= 0.0 || ${xs}( ${6} ) > rrProb ) {

								break;

							}

							throughputColor /= rrProb;

						}

						throughputColor *= scatterRec.color;
						throughputColor /= scatterRec.pdf;
						bsdfPdf = scatterRec.pdf;
						mediumScattered = false;

						// As in "KHR_materials_scatter", the medium's surface bsdf is its boundary: the walk ends when
						// light refracts out through it, and continues inside when it reflects back
						if ( segmentInMedium && hitResult.objectIndex == medium.object && hitResult.side < 0.0 && scatterRec.isTransmissive ) {

							medium.inside = false;

						}

						// refracting into a front face of a scattering material starts a random walk inside it
						if ( scatterRec.isTransmissive && ! surface.thinWall && hitResult.side > 0.0 ) {

							let entered = ${mc}( materialInfo, hitResult.objectIndex );

							if ( entered.inside ) {

								medium = entered;

							}

						}

						// exit if our throughput is 0.0
						if ( all( throughputColor == vec3f( 0.0 ) ) ) {

							break;

						}

						ray.origin = ${Rs}( vertexData.position.xyz, scatterRec.direction, hitResult.normal );
						ray.direction = scatterRec.direction;
						ray.maxDist = 0.0;
						traceOrigin = ray.origin;
						rayStart = 0.0;

					} else {

						if ( bounce > 0u && ! isFullyTransmissive ) {

							var misWeight = 1.0;
							if ( isMISWeighted && envActive ) {

								// match the env pdf scaling used by the NEE selection so the two estimators balance
								let envPdf = ${_}( ray.direction ) * envWeight / lightTotalWeight;
								misWeight = ${qs}( bsdfPdf, envPdf );

							}

							let environment = ${h}( ray.direction ).rgb * throughputColor * misWeight;
							let contribution = ${Q}( environment, bounce, clampDirect, clampIndirect );
							resultColor += vec4f( contribution, 0.0 );

						} else {

							// hit the background
							// support multiple transparent background blending techniques
							let rng = ${Ss}( ${1} );
							let bg = ${y}( ray.direction, rng );
							if ( bounce == 0u ) {

								// sample the background directly if this is the primary ray
								let background = ${Q}( bg.a * bg.rgb, bounce, clampDirect, clampIndirect );
								resultColor = vec4f( background, bg.a );

							} else {

								// transmissive ray handling
								let env = ${h}( ray.direction );
								let avg = saturate( dot( throughputColor, vec3f( 1.0 / 3.0 ) ) );
								let transparency = ( 1.0 - bg.a ) * avg;
								var envMisWeight = 1.0;
								if ( misEnabled != 0u && ${p} > 0.0 ) {

									let envPdf = ${_}( ray.direction );
									envMisWeight = ${qs}( bsdfPdf, envPdf );

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

					${bs}();

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
				let blendedColor = ${Xs}( prevColor, resultColor, 1.0 / f32( nextSampleCount ) );
				textureStore( ${e.sampleCountTarget}, indexUV, vec4( nextSampleCount ) );
				textureStore( ${e.outputTarget}, colorIndex, blendedColor );

				// the auxiliary images are blended the same way, in the same row order
				if ( accumulateAux != 0u ) {

					var auxPacked: vec3u;
					for ( var layer = 0u; layer < ${3}u; layer ++ ) {

						auxPacked[ layer ] = textureLoad( ${e.auxTarget}, colorIndex, layer ).r;

					}

					auxPacked = ${Yo}( auxPacked, auxAlbedo, auxNormal, 1.0 / f32( nextSampleCount ) );
					for ( var layer = 0u; layer < ${3}u; layer ++ ) {

						textureStore( ${e.auxTarget}, colorIndex, layer, vec4u( auxPacked[ layer ] ) );

					}

				}

			}`;super(te(e)),this.defineUniformAccessors(e)}};function Yc(e){let t=new Uint16Array(e.length);for(let n=0,r=e.length;n<r;++n)t[n]=Te.toHalfFloat(e[n]);return t}function Xc(e,t,n=0,r=e.length){let i=n,a=n+r-1;for(;i<a;){let n=i+a>>1;e[n]<t?i=n+1:a=n}return i-n}function Zc(e,t,n){return .2126*e+.7152*t+.0722*n}function Qc(e,t=ne){let n=e.clone();n.source=new ye({...n.image});let{width:r,height:i,data:a}=n.image,o=a;if(n.type!==t){o=t===1016?new Uint16Array(a.length):new Float32Array(a.length);let e;e=a instanceof Int8Array||a instanceof Int16Array||a instanceof Int32Array?2**(8*a.BYTES_PER_ELEMENT-1)-1:2**(8*a.BYTES_PER_ELEMENT)-1;for(let r=0,i=a.length;r<i;r++){let i=a[r];n.type===1016&&(i=Te.fromHalfFloat(a[r])),n.type!==1015&&n.type!==1016&&(i/=e),t===1016&&(o[r]=Te.toHalfFloat(i))}n.image.data=o,n.type=t}if(n.flipY){let e=o;o=o.slice();for(let t=0;t<i;t++)for(let n=0;n<r;n++){let a=i-t-1,s=4*(t*r+n),c=4*(a*r+n);o[c+0]=e[s+0],o[c+1]=e[s+1],o[c+2]=e[s+2],o[c+3]=e[s+3]}n.flipY=!1,n.image.data=o}return n}var $c=class{constructor(){let e=new n(Yc(new Float32Array([0,0,0,0])),1,1);e.type=ne,e.format=Se,e.minFilter=E,e.magFilter=E,e.wrapS=f,e.wrapT=f,e.generateMipmaps=!1,e.needsUpdate=!0;let t=new n(Yc(new Float32Array([0,1])),1,2);t.type=ne,t.format=ee,t.minFilter=E,t.magFilter=E,t.generateMipmaps=!1,t.needsUpdate=!0;let r=new n(Yc(new Float32Array([0,0,1,1])),2,2);r.type=ne,r.format=ee,r.minFilter=E,r.magFilter=E,r.generateMipmaps=!1,r.needsUpdate=!0,this.map=e,this.marginalWeights=t,this.conditionalWeights=r,this.totalSum=0}getPixelWeight(e,t,n){return Zc(e,t,n)}dispose(){this.marginalWeights.dispose(),this.conditionalWeights.dispose(),this.map.dispose()}updateFrom(e){let t=Qc(e);t.wrapS=f,t.wrapT=ve;let{width:n,height:r,data:i}=t.image,a=new Float32Array(n*r),o=new Float32Array(n*r),s=new Float32Array(r),c=new Float32Array(r),l=0,u=0;for(let e=0;e<r;e++){let t=0;for(let s=0;s<n;s++){let c=e*n+s,u=Te.fromHalfFloat(i[4*c+0]),d=Te.fromHalfFloat(i[4*c+1]),f=Te.fromHalfFloat(i[4*c+2]),p=this.getPixelWeight(u,d,f,e,r);t+=p,l+=p,a[c]=p,o[c]=t}if(t!==0)for(let r=e*n,i=e*n+n;r<i;r++)a[r]/=t,o[r]/=t;u+=t,s[e]=t,c[e]=u}if(u!==0)for(let e=0,t=s.length;e<t;e++)s[e]/=u,c[e]/=u;let d=new Uint16Array(r),p=new Uint16Array(n*r);for(let e=0;e<r;e++){let t=Xc(c,(e+1)/r);d[e]=Te.toHalfFloat((t+.5)/r)}for(let e=0;e<r;e++)for(let t=0;t<n;t++){let r=e*n+t,i=Xc(o,(t+1)/n,e*n,n);p[r]=Te.toHalfFloat((i+.5)/n)}this.dispose();let{marginalWeights:m,conditionalWeights:h}=this;m.image={width:r,height:1,data:d},m.needsUpdate=!0,h.image={width:n,height:r,data:p},h.needsUpdate=!0,this.totalSum=l,this.map=t,this.cdfMarginal=c,this.cdfConditional=o}},el=class extends $c{constructor(){super(),this.mapNode=et(this.map),this.mapSampler=Ye(this.mapNode),this.cdfNode=N(new k(new Float32Array([0,1,0,1]),1),`float`).toReadOnly(),this.rotationNode=A(new i),this.intensityNode=A(1),this.totalSumNode=A(this.totalSum),this._initFns()}getPixelWeight(e,t,n,r,i){let a=Math.PI*(r+.5)/i;return super.getPixelWeight(e,t,n)*Math.sin(a)}updateFrom(e){super.updateFrom(e);let{mapNode:t,cdfNode:n,totalSumNode:r}=this;t.value=this.map,r.value=this.totalSum;let{width:i,height:a}=this.map.image,{cdfMarginal:o,cdfConditional:s}=this,c=new Float32Array(a+1+a*(i+1));c.set(o,1);for(let e=0;e<a;e++)c.set(s.subarray(e*i,e*i+i),a+1+e*(i+1)+1);n.value=new k(c,1)}dispose(){super.dispose(),this.cdfNode.value.dispose()}_initFns(){let{mapNode:e,mapSampler:t,cdfNode:n,totalSumNode:r,rotationNode:i,intensityNode:a}=this,o=Y`
			fn searchEnvCdf( r: f32, offset: u32, count: u32, fraction: ptr<function, f32> ) -> u32 {

				var lower = 0u;
				var upper = count - 1u;
				while ( lower < upper ) {

					let mid = ( lower + upper ) >> 1u;
					if ( ${n}[ offset + mid + 1u ] <= r ) {

						lower = mid + 1u;

					} else {

						upper = mid;

					}

				}

				let start = ${n}[ offset + lower ];
				let end = ${n}[ offset + lower + 1u ];
				*fraction = select( 0.5, saturate( ( r - start ) / ( end - start ) ), end > start );
				return lower;

			}
		`,s=Y`
			fn getEnvTexelPdf( texel: vec2u, v: f32 ) -> f32 {

				let resolution = textureDimensions( ${e} );
				let rowOffset = resolution.y + 1u + texel.y * ( resolution.x + 1u );
				let rowPdf = ${n}[ texel.y + 1u ] - ${n}[ texel.y ];
				let pixelPdf = ${n}[ rowOffset + texel.x + 1u ] - ${n}[ rowOffset + texel.x ];

				// the equirect projection stretches each pixel by 1 / sin( theta ) over the sphere
				let sinTheta = sin( ${We} * v );
				return select( 0.0, rowPdf * pixelPdf * f32( resolution.x * resolution.y ) / ( 2.0 * ${We} * ${We} * sinTheta ), sinTheta > 0.0 );

			}
		`;this.sampleColor=Y`
			fn sampleEnv( direction: vec3f ) -> vec4f {

				let sampleDir = ${i} * direction;
				let mapUv = ${Ws}( sampleDir );
				let col = textureSampleLevel( ${e}, ${t}, mapUv, 0 );

				return vec4f( ${a} * col.rgb, col.a );

			}
		`,this.sampleDir=Y`
			fn sampleEnvDir( r: vec2f ) -> ${Vo} {

				var result: ${Vo};

				// search the CDFs: marginal picks the row (v), conditional picks the column (u), and the
				// fractions place the sample within the pixel
				let resolution = textureDimensions( ${e} );
				var rowFraction = 0.0;
				var columnFraction = 0.0;
				let row = ${o}( r.x, 0u, resolution.y, &rowFraction );
				let column = ${o}( r.y, resolution.y + 1u + row * ( resolution.x + 1u ), resolution.x, &columnFraction );
				let texel = vec2u( column, row );
				let uv = ( vec2f( texel ) + vec2f( columnFraction, rowFraction ) ) / vec2f( resolution );

				let direction = ${Ys}( uv );
				let color = textureSampleLevel( ${e}, ${t}, uv, 0 ).rgb;

				result.direction = transpose( ${i} ) * direction;
				result.color = color * ${a};
				result.pdf = ${s}( texel, uv.y );

				return result;

			}
		`,this.getWeight=Y`
			fn getEnvWeight() -> f32 {

				let resolution = textureDimensions( ${e} );
				return ${a} * ${We} * ${We} * ${r} / ( 2.0 * f32( resolution.x * resolution.y ) );

			}
		`,this.getDirPdf=Y`
			fn getEnvDirPdf( direction: vec3f ) -> f32 {

				if ( ${r} == 0.0 ) {

					return 0.0;

				}

				let rotatedDir = ${i} * direction;
				let mapUv = ${Ws}( rotatedDir );
				let resolution = textureDimensions( ${e} );
				let texel = min( vec2u( mapUv * vec2f( resolution ) ), resolution - 1u );

				return ${s}( texel, mapUv.y );

			}
		`}},tl=class{get map(){return this.mapNode.value}set map(e){this.mapNode.value=e}get blur(){return this.blurNode.value}set blur(e){this.blurNode.value=e}get rotation(){return this.rotationNode.value}get intensity(){return this.intensityNode.value}set intensity(e){this.intensityNode.value=e}constructor(){let e=new n(new Uint8Array([0,0,0,255]),1,1,Se);e.minFilter=E,e.magFilter=E,e.wrapS=f,e.wrapT=f,e.generateMipmaps=!1,e.needsUpdate=!0,this.mapNode=et(e),this.mapSampler=Ye(this.mapNode),this.blurNode=A(0),this.rotationNode=A(new D),this.intensityNode=A(1),this._initFns()}dispose(){this.map.dispose()}_initFns(){let{mapNode:e,mapSampler:t,blurNode:n,rotationNode:r,intensityNode:i}=this;this.sampleColor=Y`
			fn sampleBackground( direction: vec3f, uv: vec2f ) -> vec4f {

				let rotatedDir = ( ${r} * vec4f( direction, 0.0 ) ).xyz;
				let offsetDir = ${Gs}( rotatedDir, uv ) * 0.5 * ${n};
				let sampleDir = normalize( rotatedDir + offsetDir );

				let mapUv = ${Ws}( sampleDir );
				let col = textureSampleLevel( ${e}, ${t}, mapUv, 0 );

				return vec4f( ${i} * col.rgb, col.a );

			}
		`}},nl=new he,rl=new i;function il(e){return`${e.source.uuid}:${e.source.version}`}function al(e,t,n,r){if(e[t].x+n>r)return-1;let i=n,a=0,o=t;for(;i>0;){if(o>=e.length)return-1;a=Math.max(a,e[o].y),i-=e[o].width,o++}return a}function ol(e,t,n,r){let i=t+r,a=[],o=!1;for(let s=0;s<e.length;s++){let c=e[s],l=c.x+c.width;l<=t?a.push(c):c.x>=i?(o||=(a.push({x:t,y:n,width:r}),!0),a.push(c)):(o||=(a.push({x:t,y:n,width:r}),!0),l>i&&a.push({x:i,y:c.y,width:l-i}))}o||a.push({x:t,y:n,width:r}),e.length=0;for(let t=0;t<a.length;t++){let n=a[t],r=e[e.length-1];r&&r.y===n.y&&r.x+r.width===n.x?r.width+=n.width:e.push(n)}}function sl(e,t,n,r,i){let a=1/0,o=0,s=-1;for(let c=0;c<e.length;c++){let l=al(e,c,t,r);l>=0&&l+n<=i&&l<a&&(a=l,o=e[c].x,s=c)}return s===-1?null:(ol(e,o,a+n,t),{x:o,y:a})}var cl=class{get width(){return this.renderTarget.width}get height(){return this.renderTarget.height}get pageCount(){return this.renderTarget.depth}get texture(){return this.renderTarget.texture}constructor(e={}){this.renderTarget=new ie(1,1,{depthBuffer:!1,depth:1,...e}),this.texture.isArrayTexture=!0,this.textureInfo=[new me],this.hashes=[],this.placements=[],this.quadMesh=new Ge(new o),this.quadMesh.material.blending=0}setTextures(e,t){let n=t.map((e,t)=>t);if(n.sort((e,n)=>t[e].source.uuid<t[n].source.uuid?-1:1),t=n.map(e=>t[e]),this._hashesMatch(t)){this._buildCallerTextureInfo(n);return}let r=t.reduce((e,t)=>Math.max(e,t.width,t.height),1);r=Math.min(e.backend.device.limits.maxTextureDimension2D,r);let i=r,a=r,{renderTarget:o}=this,{placements:s,pageCount:c}=this._packTextures(t,i,a);o.setSize(i,a,c),this.texture.isArrayTexture=!0,this._renderTextures(e,t,s),this.placements=s;let l=Array(t.length);for(let e=0,n=t.length;e<n;e++){let n=il(t[e]);l[e]=n}this.hashes=l,this._buildCallerTextureInfo(n)}_buildCallerTextureInfo(e){let t=Array(e.length);for(let n=0,r=e.length;n<r;n++)t[e[n]]=this.placements[n];this._buildTextureInfo(t)}dispose(){this.renderTarget.dispose(),this.quadMesh.material.dispose()}_hashesMatch(e){let t=this.hashes;if(t.length!==e.length)return!1;for(let n=0,r=e.length;n<r;n++)if(t[n]!==il(e[n]))return!1;return!0}_packTextures(e,t,n){let r=[];for(let i=0,a=e.length;i<a;i++){let a=e[i];r.push({index:i,w:Math.min(a.width,t),h:Math.min(a.height,n)})}let i=r.sort((e,t)=>t.h-e.h),a=Array(e.length),o=[];for(let e=0,r=i.length;e<r;e++){let r=i[e],s=null,c=-1;for(let e=0;e<o.length;e++)if(s=sl(o[e],r.w,r.h,t,n),s){c=e;break}if(!s){let e=[{x:0,y:0,width:t}];s=sl(e,r.w,r.h,t,n),o.push(e),c=o.length-1}a[r.index]={x:s.x,y:s.y,w:r.w,h:r.h,page:c}}return{placements:a,pageCount:Math.max(o.length,1)}}_buildTextureInfo(e){let t=this.textureInfo;t.length=0;for(let n=0,r=e.length;n<r;n++){let{x:r,y:i,w:a,h:o,page:s}=e[n],c=new me;c.x=r&65535|(i&65535)<<16,c.y=a&65535|(o&65535)<<16,c.z=s&65535,c.w=0,t.push(c)}t.length===0&&t.push(new me(0,0,0,0))}_renderTextures(e,t,n){let{quadMesh:r,renderTarget:i,width:a,height:o}=this,s=e.getRenderTarget(),c=e.toneMapping,l=e.autoClear,u=e.getScissorTest(),d=e.getClearAlpha();e.getClearColor(nl),e.toneMapping=0,e.autoClear=!1,e.setScissorTest(!0),e.setClearColor(0,0);for(let t=0,n=i.depth;t<n;t++)i.viewport.set(0,0,a,o),i.scissor.set(0,0,a,o),e.setRenderTarget(i,t),e.clear();for(let a=0,o=t.length;a<o;a++){let{x:o,y:s,w:c,h:l,page:u}=n[a],d=t[a];if(i.viewport.set(o,s,c,l),i.scissor.set(o,s,c,l),e.setRenderTarget(i,u),d.isRenderTargetTexture){let t=d.matrixAutoUpdate;rl.copy(d.matrix),d.matrix.identity(),d.matrixAutoUpdate=!1,r.material.map=d,r.render(e),d.matrixAutoUpdate=t,d.matrix.copy(rl)}else{let t=d.clone();t.matrixAutoUpdate=!1,t.matrix.identity(),r.material.map=t,r.render(e),t.dispose()}}i.viewport.set(0,0,a,o),i.scissor.set(0,0,a,o),r.material.map=null,e.setClearColor(nl,d),e.setScissorTest(u),e.autoClear=l,e.setRenderTarget(s),e.toneMapping=c}};function ll(e){let t=0;if(e.byteLength!==0){let n=new Uint8Array(e);for(let r=0;r<e.byteLength;r++){let e=n[r];t=(t<<5)-t+e,t|=0}}return t}var ul=6,dl=11,fl=0,pl=1,ml=2,hl=3,gl=4,_l=new x,vl=new x,yl=new D,bl=new m,xl=new x,Sl=new x,Cl=new x(0,1,0),wl=class{constructor(){let e=new n(new Float32Array(4),1,1);e.format=Se,e.type=T,e.wrapS=ve,e.wrapT=ve,e.generateMipmaps=!1,e.minFilter=c,e.magFilter=c,this.tex=e,this.count=0}updateFrom(e,t=[]){let n=this.tex,r=Math.max(e.length*ul,1),i=Math.ceil(Math.sqrt(r));n.image.width!==i&&(n.dispose(),n.image.data=new Float32Array(i*i*4),n.image.width=i,n.image.height=i);let a=n.image.data;for(let n=0,r=e.length;n<r;n++){let r=e[n],i=n*ul*4,o=0;for(let e=0;e<24;e++)a[i+e]=0;r.getWorldPosition(vl),a[i+o++]=vl.x,a[i+o++]=vl.y,a[i+o++]=vl.z;let s=fl;if(r.isRectAreaLight&&r.isCircular?s=pl:r.isSpotLight?s=ml:r.isDirectionalLight||r.isSunLight?s=hl:r.isPointLight&&(s=gl),a[i+o++]=s,a[i+o++]=r.color.r,a[i+o++]=r.color.g,a[i+o++]=r.color.b,a[i+o++]=r.intensity,r.getWorldQuaternion(bl),r.isRectAreaLight)_l.set(r.width,0,0).applyQuaternion(bl),a[i+o++]=_l.x,a[i+o++]=_l.y,a[i+o++]=_l.z,o++,vl.set(0,r.height,0).applyQuaternion(bl),a[i+o++]=vl.x,a[i+o++]=vl.y,a[i+o++]=vl.z,a[i+o++]=_l.cross(vl).length()*(r.isCircular?Math.PI/4:1);else if(r.isSpotLight){let e=r.radius||0;xl.setFromMatrixPosition(r.matrixWorld),Sl.setFromMatrixPosition(r.target.matrixWorld),yl.lookAt(xl,Sl,Cl),bl.setFromRotationMatrix(yl),_l.set(1,0,0).applyQuaternion(bl),a[i+o++]=_l.x,a[i+o++]=_l.y,a[i+o++]=_l.z,o++,vl.set(0,1,0).applyQuaternion(bl),a[i+o++]=vl.x,a[i+o++]=vl.y,a[i+o++]=vl.z,a[i+o++]=Math.PI*e*e,a[i+o++]=e,a[i+o++]=r.decay,a[i+o++]=r.distance,a[i+o++]=Math.cos(r.angle),a[i+o++]=Math.cos(r.angle*(1-r.penumbra)),a[i+o++]=r.iesMap?t.indexOf(r.iesMap):-1}else if(r.isPointLight){let e=_l.setFromMatrixPosition(r.matrixWorld);a[i+o++]=e.x,a[i+o++]=e.y,a[i+o++]=e.z,o++,o+=4,o+=1,a[i+o++]=r.decay,a[i+o++]=r.distance}else if(r.isDirectionalLight){let e=_l.setFromMatrixPosition(r.matrixWorld),t=vl.setFromMatrixPosition(r.target.matrixWorld);Sl.subVectors(e,t).normalize(),a[i+o++]=Sl.x,a[i+o++]=Sl.y,a[i+o++]=Sl.z}else r.isSunLight&&(Sl.setFromMatrixPosition(r.matrixWorld).normalize(),a[i+o++]=Sl.x,a[i+o++]=Sl.y,a[i+o++]=Sl.z);a[i+dl]=+!!r.visibleToCameraRays}this.count=e.length;let o=ll(a.buffer);return this.hash!==o&&(this.hash=o,n.needsUpdate=!0,!0)}},Tl=class extends wl{constructor(){super(),this.countNode=A(this.count,`uint`),this.buffer=new k(new Float32Array(2*Ho.getLength()),Ho.getLength()),this.bufferNode=N(this.buffer,Ho).toReadOnly().setName(`lights`),this.iesAtlas=new cl({type:ne}),this.iesProfilesNode=et(this.iesAtlas.texture),this.iesInfoNode=yt(this.iesAtlas.textureInfo,`uvec4`).setName(`iesInfo`),this._initFns()}updateFrom(e,t){let n=Array.from(new Set(t.map(e=>e.iesMap).filter(e=>e))),r=super.updateFrom(t,n);this.iesAtlas.setTextures(e,n),this.iesProfilesNode.value=this.iesAtlas.texture;let i=Ho.getLength(),a=this.count,o=Math.max(a,2);this.buffer.array.length!==o*i&&(this.buffer.dispose(),this.buffer=new k(new Float32Array(o*i),i),this.bufferNode.value=this.buffer);let s=this.tex.image.data;this.buffer.array.set(s.subarray(0,a*i));let c=new Int32Array(this.buffer.array.buffer);for(let e=0;e<a;e++){let t=e*i;c[t+3]=Math.round(s[t+3]),c[t+11]=Math.round(s[t+11]),c[t+21]=Math.round(s[t+21])}return this.buffer.needsUpdate=!0,this.countNode.value=this.count,r}_initFns(){let{bufferNode:e,countNode:t,iesProfilesNode:n,iesInfoNode:r}=this,i=Bs(r,n,`sampleIesTexel`);this.isLightVisibleToCamera=Y`
			fn isLightVisibleToCamera( index: u32 ) -> bool {

				return ${e}[ index ].visibleToCameraRays != 0;

			}
		`,this.getLightWeight=Y`
			fn getLightWeight( index: u32, position: vec3f ) -> f32 {

				let light = ${e}[ index ];
				let power = ${Js}( light.color * light.intensity );
				if ( light.lightType == ${2} ) {

					// the most any point on the spot's disc lights the position. Ies profiles are not
					// evaluated here
					let nearest = ${oc}( light, position );
					var attenuation = 1.0;
					if ( light.iesProfile < 0 ) {

						attenuation = ${ec}( light.coneCos, light.penumbraCos, nearest.x );

					}

					return power * attenuation * ${tc}( nearest.y, light.distance, light.decay );

				} else if ( light.lightType == ${4} ) {

					// the point light's world position is packed into the u slot
					let dist = length( light.u - position );
					return power * ${tc}( dist, light.distance, light.decay );

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
		`,this.getLightsWeight=Y`
			fn getLightsWeight( position: vec3f ) -> f32 {

				var total = 0.0;
				for ( var i = 0u; i < ${t}; i ++ ) {

					total += ${this.getLightWeight}( i, position );

				}

				return total;

			}
		`,this.selectLight=Y`
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
		`,this.randomLightSample=Y`
			fn randomLightSample( lightIndex: u32, rayOrigin: vec3f, ruv: vec2f ) -> ${Uo} {

				let light = ${e}[ lightIndex ];

				var result: ${Uo};
				if ( light.lightType == ${2} ) {

					result = ${ac}( light, rayOrigin, ruv );

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

						spotAttenuation = ${ec}( light.coneCos, light.penumbraCos, cosTheta );

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
					result.dist = ${Zs};
					result.direction = light.u;
					result.pdf = 1.0;
					result.emission = light.color * light.intensity;
					result.lightType = light.lightType;

				} else {

					result = ${ic}( light, rayOrigin, ruv );

				}

				return result;

			}
		`,this.intersectLightAtIndex=Y`
			fn intersectLightAtIndex( rayOrigin: vec3f, rayDirection: vec3f, index: u32, lightRec: ptr<function, ${Uo}> ) -> bool {

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

						dist = ${nc}( light.position, normal, u, v, rayOrigin, rayDirection );

					} else if ( light.lightType == ${1} ) {

						dist = ${rc}( light.position, normal, u, v, rayOrigin, rayDirection );

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
		`}dispose(){this.tex.dispose(),this.buffer.dispose(),this.iesAtlas.dispose()}},El=class extends X{constructor(){let e={globalId:qe,outputTarget:st(new Ue(1,1)).toWriteOnly()},t=Y`
			fn compute( globalId: vec3u ) -> void {

				textureStore( ${e.outputTarget}, ${()=>e.outputTarget.value.isArrayTexture?`globalId.xy, globalId.z`:`globalId.xy`}, vec4( 0, 0, 0, 1 ) );

			}
		`;super(t(e)),this.defineUniformAccessors({target:e.outputTarget})}},Dl=0,Ol=1,kl=class{constructor(e){this.renderer=e,this.maxBounces=15,this.frameBudget=25e4,this.maxTransparentBounces=15,this.maxSubsurfaceBounces=256,this.lowResMode=!1,this.maxSamples=0,this.asyncCompile=!1,this.compiling=!1,this.timing={count:0,frameTime:0,frameBudget:0},this._renderTask=null,this._compileState=new WeakMap,this._timestampUIDs=null,this._timingFrame=!1,this.outputTarget=Xo(`Output #0`),this.prevOutputTarget=Xo(`Output #1`),this.sampleCountTarget=Zo(`Sample Count`),this.sampleCountClearKernel=new El().setWorkgroupSize(8,8,1),this.outputTargetClearKernel=new El().setWorkgroupSize(8,8,1),this.auxTargetClearKernel=new El().setWorkgroupSize(8,8,1),this.auxTarget=null,this._auxPlaceholder=Qo()}setAccumulateAux(e){if(!!this.auxTarget!==e){if(this.auxTarget?.dispose(),this.auxTarget=null,e){let{width:e,height:t}=this.outputTarget;this.auxTarget=Qo(`Auxiliary Images`),this.auxTarget.setSize(e,t,3)}this.reset()}}setRandom(e){}setBVHData(e){}setTextures(e){}setMaterial(e){}setFilterGlossy(e){}setClamping(e,t){}setEnvironment(e,t,n){}setLights(e){}setBackground(e,t,n,r){}*compileKernels(e){let{renderer:t,_compileState:n}=this;if(!this.asyncCompile||!t.compileComputeAsync)return;let r=e.map(e=>e.kernel),i=r.filter(e=>!n.has(e));for(i.length>0&&(this.compiling=!0,yield,i.forEach(e=>n.set(e,Dl)),t.compileComputeAsync(i).catch(()=>{}).finally(()=>{i.forEach(e=>n.set(e,Ol))}));r.some(e=>n.get(e)!==Ol);)this.compiling=!0,yield;this.compiling=!1}rebuild(){this._renderTask=null}setSize(e,t){e=Math.ceil(e),t=Math.ceil(t);let{width:n,height:r}=this.outputTarget;return n===e&&r===t?!1:(this.outputTarget.dispose(),this.prevOutputTarget.dispose(),this.sampleCountTarget.dispose(),this.outputTarget=this.outputTarget.clone(),this.prevOutputTarget=this.outputTarget.clone(),this.sampleCountTarget=this.sampleCountTarget.clone(),this.outputTarget.setSize(e,t),this.prevOutputTarget.setSize(e,t),this.sampleCountTarget.setSize(e,t),this.auxTarget?.setSize(e,t,3),this.reset(),!0)}getSize(e){let{width:t,height:n}=this.outputTarget;return e.x=t,e.y=n,e}getPreviewPixelBudget(){return this.frameBudget}update(){let{renderer:e}=this;if(!e.initialized)return;this._renderTask||=this.createRenderTask();let t=e.backend.trackTimestamp&&!this._timingFrame;this._timestampUIDs=t?[]:null,this._renderTask.next(),t&&this._timestampUIDs.length>0&&this._measureFrameTime(this._timestampUIDs),this._timestampUIDs=null}dispatch(e,t){let{renderer:n}=this;n.compute(e.kernel,t),this._timestampUIDs?.push(n.backend.getTimestampUID(e.kernel))}async _measureFrameTime(e){let{renderer:t,timing:n,frameBudget:r}=this,{backend:i}=t;this._timingFrame=!0,await t.resolveTimestampsAsync(pe.COMPUTE),this._timingFrame=!1,e.every(e=>i.hasTimestampQuery(e))&&(n.frameTime=e.reduce((e,t)=>e+i.getTimestamp(t),0),n.frameBudget=r,n.count++)}*createRenderTask(){}async getSampleCountsAsync(){return{min:0,max:0,avg:0}}resetSeed(){}reset(){let{renderer:e,outputTargetClearKernel:t,sampleCountClearKernel:n,outputTarget:r,prevOutputTarget:i,sampleCountTarget:a}=this;if(!e.initialized)return;let{width:o,height:s}=r,c=t.getDispatchSize(o,s);if(t.target=r,e.compute(t.kernel,c),t.target=i,e.compute(t.kernel,c),n.target=a,e.compute(n.kernel,c),this.auxTarget){let{auxTargetClearKernel:t}=this;t.target=this.auxTarget,e.compute(t.kernel,t.getDispatchSize(o,s,3))}this._renderTask=null}dispose(){this.outputTarget.dispose(),this.prevOutputTarget.dispose(),this.sampleCountTarget.dispose(),this.sampleCountClearKernel.dispose(),this.outputTargetClearKernel.dispose(),this.auxTargetClearKernel.dispose(),this.auxTarget?.dispose(),this._auxPlaceholder.dispose(),this._renderTask=null}},Al=new a,jl=class extends kl{constructor(e){super(e),this.envInfo=new el,this._completedSamples=0,this._tileProgress=0,this.kernel=new Jc().setWorkgroupSize(8,8,1),this.kernel.envInfo=this.envInfo,this.backgroundInfo=new tl,this.kernel.backgroundInfo=this.backgroundInfo,this.lightsInfo=new Tl,this.kernel.lightsInfo=this.lightsInfo}resetSeed(){this.kernel.seed=0}reset(){super.reset(),this._completedSamples=0,this._tileProgress=0}async getSampleCountsAsync(){if(this.lowResMode)return{min:0,max:0,avg:0};let e=this._completedSamples,t=this._tileProgress;return{min:t===1?e+1:e,max:e+1,avg:e+t}}setBVHData(e){this.kernel.context.bvhData=e,this.rebuild()}rebuild(){super.rebuild(),this.kernel.needsUpdate=!0,this.reset()}setRandom(e){this.kernel.context.random=e,this.kernel.needsUpdate=!0,this.reset()}setMaterial(e){this.kernel.material=e.getData(),this.kernel.needsUpdate=!0,this.reset()}setFilterGlossy(e){this.kernel.filterGlossy=e===0?Dc:1/e,this.reset()}setClamping(e,t){this.kernel.clampDirect=e,this.kernel.clampIndirect=t,this.reset()}setEnvironment(e){this.envInfo.updateFrom(e)}setLights(e){this.lightsInfo.updateFrom(this.renderer,e),this.reset()}setMultipleImportanceSampling(e){this.kernel.misEnabled=+!!e,this.reset()}setEnvironmentParams(e,t){let{envInfo:n}=this,r=new D().makeRotationFromEuler(t).invert();n.rotationNode.value.setFromMatrix4(r),n.intensityNode.value=e}setBackground(e){let{backgroundInfo:t}=this;t.dispose(),t.map=e}setBackgroundParams(e,t,n){let{backgroundInfo:r}=this,i=new D().makeRotationFromEuler(t).invert();r.rotationNode.value.copy(i),r.intensity=e,r.blur=n}setTransmissiveBackground(e){this.kernel.transmissiveBackground=e,this.reset()}*createRenderTask(){let{renderer:e,kernel:t,maxBounces:n,maxTransparentBounces:r,maxSubsurfaceBounces:i,outputTarget:o,sampleCountTarget:s,lowResMode:c}=this,l=new a;t.outputTarget=o,t.sampleCountTarget=s,t.maxBounces=n,t.maxTransparentBounces=r,t.maxSubsurfaceBounces=i,yield*this.compileKernels([t]);let u=0;for(;;){if(t.maxSamples=this.maxSamples,t.auxTarget=this.auxTarget??this._auxPlaceholder,t.accumulateAux=+!!this.auxTarget,this.maxSamples!==0&&u>=this.maxSamples){yield;continue}this.getSize(Al);let n=c?1:Math.max(1,Math.ceil(Al.x*Al.y/this.frameBudget));l.x=Math.ceil(Math.sqrt(n)),l.y=Math.ceil(n/l.x);let r=this.lowResMode?1:l.x*l.y,i=0,a=t.tileSize;c?this.getSize(a):this.getSize(a).divide(l).ceil();let o=t.getDispatchSize(a.x,a.y);t.seed+=1,e.copyTextureToTexture(this.outputTarget,this.prevOutputTarget),[this.outputTarget,this.prevOutputTarget]=[this.prevOutputTarget,this.outputTarget],t.prevOutputTarget=this.prevOutputTarget,t.outputTarget=this.outputTarget;for(let e=0;e<l.x;e++)for(let n=0;n<l.y;n++)t.offset.set(e,n).multiply(a),this.dispatch(t,o),i=Math.min(i+1,r),this._completedSamples=u,this._tileProgress=i/r,yield;u++}}dispose(){super.dispose(),this.envInfo.dispose(),this.lightsInfo.dispose(),this.kernel.dispose()}},Ml=class extends O{constructor(e,t,n=[]){super(e,t),this.dependencies=n}setup(e){for(let t of this.dependencies)t.build(e);super.setup(e)}},Nl={throughputColor:`vec3f`,currentBounce:`uint`,resultColor:`vec4f`,emission:`vec3f`,scatterPdf:`float`,scatterColor:`vec3f`,minPdf:`float`,origin:`vec3f`,isFullyTransmissive:`uint`,direction:`vec3f`,side:`float`,normal:`vec3f`,objectIndex:`int`,barycoord:`vec3f`,pixelIndex:`uint`,indices:`vec3u`,seed:`uint`,lightDirection:`vec3f`,lightPdf:`float`,lightEmission:`vec3f`,lightDist:`float`,lightBsdf:`vec3f`,lightBsdfPdf:`float`,rayIntersectionIndex:`int`,shadowRayIntersectionIndex:`int`,lightType:`int`,dist:`float`,alphaDepth:`uint`,rayStart:`float`,maxDist:`float`,dispersionWavelength:`float`,auxAlbedo:`uint`,auxNormal:`uint`,subsurfaceBounces:`uint`,walkPending:`uint`,mediumScattered:`uint`},Pl=new Ml({...Nl,medium:dc.name},`RayData`,[dc]),Fl=new O(Nl).getLength();Pl.getLength=()=>Fl+dc.getLength();var Il=new O({origin:`vec3f`,pixelIndex:`uint`,direction:`vec3f`,rngIndex:`uint`,seed:`uint`,maxDist:`float`,_alignment0:`uint`,_alignment1:`uint`},`TraceQueuedRay`),Ll=new O({barycoord:`vec3f`,objectIndex:`int`,position:`vec3f`,dist:`float`,normal:`vec3f`,side:`float`,indices:`vec3u`},`TraceResult`),Rl=new O({objectIndex:`int`,skippedOcclusion:`float`,occlusion:`float`},`ShadowTraceResult`),zl=class extends X{constructor(){let e={rayDataStorage:N(new k(1,1),Pl),pixelQueue:N(new k(1,1),`uint`),targetDimensions:A(new a),frameBudget:A(0,`uint`),globalId:qe},t=Y`
			fn compute( targetDimensions: vec2u, frameBudget: u32, globalId: vec3u ) -> void {

				let rayDataStorage = &${e.rayDataStorage};
				let pixelQueue = &${e.pixelQueue};

				if ( globalId.x >= targetDimensions.x || globalId.y >= targetDimensions.y ) {

					return;

				}

				let rayCount = min( frameBudget, arrayLength( rayDataStorage ) );
				let pixelCount = targetDimensions.x * targetDimensions.y;
				if ( globalId.x == 0u && globalId.y == 0u ) {

					pixelQueue[ ${0}u ] = 0u;
					pixelQueue[ ${1}u ] = select( 0u, pixelCount - rayCount, pixelCount >= rayCount );

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

					pixelQueue[ ${2}u + pixelIndex - rayCount ] = pixelHash;

				}

			}
		`;super(t(e)),this.defineUniformAccessors(e)}},Bl=class extends X{constructor(){let e={envInfo:{value:null},backgroundInfo:{value:null},lightsInfo:{value:null},prevOutputTarget:st(Xo()).toReadOnly(),outputTarget:st(Xo()).toWriteOnly(),sampleCountTarget:st(Zo()).toReadWrite(),auxTarget:st(Qo()).toReadWrite(),misEnabled:A(1,`uint`),rayCount:A(0,`uint`),maxBounces:A(5,`uint`),clampDirect:A(0),clampIndirect:A(10),transmissiveBackground:A(1),accumulateAux:A(0,`uint`),rayDataStorage:N(new k(1,1),Pl),rayIntersectionsStorage:N(new k(1,1),Ll),shadowRayIntersectionsStorage:N(new k(1,1),Rl),globalId:qe},t=q(`envInfo.value.totalSumNode`,e),n=q(`envInfo.value.intensityNode`,e),r=q(`envInfo.value.sampleColor`,e),i=q(`envInfo.value.sampleDir`,e),a=q(`envInfo.value.getDirPdf`,e),o=q(`envInfo.value.getWeight`,e),s=q(`backgroundInfo.value.sampleColor`,e),c=q(`lightsInfo.value.countNode`,e),l=J(`lightsInfo.value.randomLightSample`,e),u=J(`lightsInfo.value.intersectLightAtIndex`,e),d=J(`lightsInfo.value.getLightWeight`,e),f=J(`lightsInfo.value.getLightsWeight`,e),p=J(`lightsInfo.value.selectLight`,e),m=J(`lightsInfo.value.isLightVisibleToCamera`,e),h=Y`

			fn compute(
				// settings
				misEnabled: u32,
				rayCount: u32,
				maxBounces: u32,
				clampDirect: f32,
				clampIndirect: f32,
				transmissiveBackground: u32,
				accumulateAux: u32,

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
				// whole structs are read from the buffer, not the pointer alias, which Safari fails to compile
				let input = ${e.rayDataStorage}[ index ];
				if ( input.rayIntersectionIndex < 0 ) {

					return;

				}

				let indexUV = vec2u( input.pixelIndex >> 16, input.pixelIndex & 0xFFFF );
				${ys}( indexUV, input.seed, input.currentBounce + input.alphaDepth + input.subsurfaceBounces );

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

					let shadowHit = ${e.shadowRayIntersectionsStorage}[ u32( input.shadowRayIntersectionIndex ) ];
					let occluded = shadowHit.objectIndex >= 0;
					if ( ! occluded ) {

						// env + area lights are also found by bsdf rays, so MIS-weight them. Punctual lights, and lights
						// past the bounce limit, take full weight. Bsdf rays stopped by faces the shadow ray skipped can't
						// find the light, so their share of the weight moves to the light sample
						let isMISWeighted = ${$s}( input.lightType ) && input.currentBounce < maxBounces;
						let misWeight = select( 1.0, mix( ${qs}( input.lightPdf, input.lightBsdfPdf ), 1.0, shadowHit.skippedOcclusion ), isMISWeighted );
						let directLight = throughputColor * input.lightEmission * input.lightBsdf * misWeight * ( 1.0 - shadowHit.occlusion ) / input.lightPdf;
						let contribution = ${Q}( directLight, input.currentBounce, clampDirect, clampIndirect );
						resultColor += vec4f( contribution, 0.0 );

					}

				}

				// emission gathered at the previous surface (pre-scatter throughput). Found light clamps
				// at the depth of the segment that found it, as in Cycles, so one less than the current
				let emission = ${Q}( throughputColor * input.emission, max( input.currentBounce, 1u ) - 1u, clampDirect, clampIndirect );
				resultColor += vec4f( emission, 0.0 );

				// reconstruct the scatter record staged by MaterialKernel
				var scatterRec: ${Lo};
				scatterRec.color = input.scatterColor;
				scatterRec.pdf = input.scatterPdf;

				// the bounce limit, russian roulette, and terminating scatter checks all ran in
				// MaterialKernel, which stages a zeroed pdf and skips the bounce trace when they fire
				var isTerminated = all( throughputColor == vec3f( 0.0 ) ) || input.currentBounce >= maxBounces || ${Is}( scatterRec );

				// apply the scatter across the traced segment, including the weight of a medium walk
				if ( ! isTerminated ) {

					throughputColor *= scatterRec.color / scatterRec.pdf;

				}

				let isWalking = ! isTerminated && input.walkPending != 0u;
				if ( isWalking ) {

					// the walk hasn't reached a surface yet, so there's no hit to stage. Clear what was
					// resolved and let MediumKernel accumulate the walk's weight
					rayDataStorage[ index ].emission = vec3f( 0.0 );
					rayDataStorage[ index ].lightPdf = 0.0;
					rayDataStorage[ index ].shadowRayIntersectionIndex = - 1;
					rayDataStorage[ index ].scatterColor = vec3f( 1.0 );
					rayDataStorage[ index ].scatterPdf = 1.0;

				} else if ( ! isTerminated ) {

					let hitResult = ${e.rayIntersectionsStorage}[ u32( input.rayIntersectionIndex ) ];
					let didHit = hitResult.objectIndex >= 0;
					let surfaceDist = select( ${Zs}, hitResult.dist, didHit );

					// NEE's total weight at the vertex this segment left, for MIS. Camera segments have none,
					// and neither do scatter events in a medium
					let isMISWeighted = misEnabled != 0u && input.currentBounce > 0u && input.mediumScattered == 0u;
					var lightTotalWeight = 0.0;
					if ( isMISWeighted ) {

						lightTotalWeight = ${f}( input.origin ) + envWeight;

					}

					// forward hits on area lights along the traced segment, which starts "rayStart" along the ray.
					// Camera rays only see visibleToCameraRays lights, at full weight
					for ( var li = 0u; li < lightsCount; li ++ ) {

						if ( input.currentBounce == 0u && ! ${m}( li ) ) {

							continue;

						}

						var lightRec: ${Uo};
						if ( ${u}( input.origin, input.direction, li, &lightRec ) && lightRec.dist > input.rayStart && lightRec.dist < input.rayStart + surfaceDist ) {

							var misWeight = 1.0;
							if ( isMISWeighted ) {

								let selectionPdf = ${d}( li, input.origin ) / lightTotalWeight;
								misWeight = ${qs}( input.scatterPdf, lightRec.pdf * selectionPdf );

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

							let ruv = ${Cs}( ${5} );
							var selectionPdf = 0.0;
							let lightIndex = ${p}( hitResult.position, envWeight, ruv.x, &selectionPdf );
							if ( selectionPdf > 0.0 ) {

								var lightRec: ${Uo};
								if ( envActive && lightIndex == lightsCount ) {

									// the environment, sampled from its CDF, as a light of kind ENVIRONMENT
									let envSample = ${i}( ruv.yz );
									lightRec.direction = envSample.direction;
									lightRec.emission = envSample.color;
									lightRec.pdf = envSample.pdf;
									lightRec.dist = ${Zs};
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
								misWeight = ${qs}( input.scatterPdf, envPdf );

							}

							let environment = ${r}( input.direction ).rgb * throughputColor * misWeight;
							let contribution = ${Q}( environment, input.currentBounce, clampDirect, clampIndirect );
							resultColor += vec4f( contribution, 0.0 );

						} else {

							// hit the background
							// support multiple transparent background blending techniques
							let rng = ${Ss}( ${1} );
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
									misWeight = ${qs}( input.scatterPdf, envPdf );

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
				let storedSamples = textureLoad( ${e.sampleCountTarget}, indexUV ).r & ${qc}u;

				if ( isTerminated ) {

					// blend the finished sample into the output and free the slot for a new camera ray
					let sampleCount = storedSamples + 1;
					let prevColor = textureLoad( ${e.prevOutputTarget}, colorIndex );
					let blendedColor = ${Xs}( prevColor, resultColor, 1.0 / f32( sampleCount ) );
					textureStore( ${e.sampleCountTarget}, indexUV, vec4( ${Kc}u | sampleCount ) );
					textureStore( ${e.outputTarget}, colorIndex, blendedColor );

					// the auxiliary images are blended the same way, in the same row order
					if ( accumulateAux != 0u ) {

						var auxPacked: vec3u;
						for ( var layer = 0u; layer < ${3}u; layer ++ ) {

							auxPacked[ layer ] = textureLoad( ${e.auxTarget}, colorIndex, layer ).r;

						}

						let albedo = unpack4x8unorm( input.auxAlbedo ).rgb;
						let normal = unpack4x8snorm( input.auxNormal ).xyz;
						auxPacked = ${Yo}( auxPacked, albedo, normal, 1.0 / f32( sampleCount ) );
						for ( var layer = 0u; layer < ${3}u; layer ++ ) {

							textureStore( ${e.auxTarget}, colorIndex, layer, vec4u( auxPacked[ layer ] ) );

						}

					}

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
		`;super(h(e)),this.defineUniformAccessors(e)}},Vl=class extends X{constructor(){let e={material:{value:null},seed:A(0,`uint`),targetDimensions:A(new a),maxSamples:A(0,`uint`),rayCount:A(0,`uint`),filterGlossy:A(1),maxTransparentBounces:A(5,`uint`),maxBounces:A(5,`uint`),sampleCountTarget:st(Zo()).toReadWrite(),rayDataStorage:N(new k(1,1),Pl),rayQueue:N(new k(1,1),Il),shadowRayQueue:N(new k(1,1),Il),queueCounters:N(new k(1,1),`uint`).toAtomic(),pixelQueue:N(new k(1,1),`uint`).toAtomic(),globalId:qe},t=Na(`bvhData.fns.getCameraRay`),n=Na(`bvhData.fns.sampleTrianglePoint`),r=Na(`bvhData.fns.getSurfaceRecord`),i=J(`material.value.bsdfSample`,e),o=J(`material.value.bsdfEvalPdf`,e),s=Ma(`bvhData.storage.materials`),c=Ma(`bvhData.storage.transforms`),l=Y`

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
				let queueCounters = &${e.queueCounters};
				let pixelQueue = &${e.pixelQueue};

				// bound by "rayCount" rather than the pool length. The dispatch rounds up to the
				// workgroup size and those extra slots hold a zeroed pixel index
				let index = globalId.x;
				if ( index >= rayCount ) {

					return;

				}

				// whole structs are read from the buffer, not the pointer alias, which Safari fails to compile
				let input = ${e.rayDataStorage}[ index ];
				if ( input.objectIndex < 0 ) {

					// the slot's path has terminated: recycle the pixel through the overflow queue and
					// generate a fresh camera ray
					var pixelIndex = input.pixelIndex;
					let elementCount = atomicLoad( &pixelQueue[ ${1}u ] );
					if ( elementCount > 0u ) {

						// TODO: If we've pulled off a pixel that's already finished we currently just
						// write a no-op ray, wasting a frame. It may be better to iterate over a few
						// points in the queue to see if we can find one we can use.
						let queueIndex = atomicAdd( &pixelQueue[ ${0}u ], 1u ) % elementCount;
						pixelIndex = atomicExchange( &pixelQueue[ ${2}u + queueIndex ], pixelIndex );

					}

					let indexUV = vec2u( pixelIndex >> 16, pixelIndex & 0xFFFF );

					// skip the pixel if it has hit the sample limit
					let combinedField = textureLoad( ${e.sampleCountTarget}, indexUV ).r;
					let samples = ( ${qc}u & combinedField );
					let isComplete = maxSamples != 0u && samples >= maxSamples;

					if ( isComplete ) {

						rayDataStorage[ index ].pixelIndex = pixelIndex;
						rayDataStorage[ index ].rayIntersectionIndex = - 1;
						rayDataStorage[ index ].shadowRayIntersectionIndex = - 1;
						return;

					}

					${ys}( indexUV, seed + samples, 0 );

					let uv = vec2f( indexUV ) / vec2f( targetDimensions );
					let jitteredUv = uv + ${Ss}( ${0} ) / vec2f( targetDimensions );
					var ray: ${K};
					if ( ! ${t}( jitteredUv, vec2f( targetDimensions ), &ray ) ) {

						// the camera declined the pixel, so leave the slot dormant for this round. With a
						// sample cap the pixel counts as finished, since it will never take a sample
						// TODO: same as above - this work is a bit wasteful and leaves slots empty for
						// a frame. Is it possible to quickly skip rays outside the mask or are finished?
						if ( maxSamples != 0u ) {

							textureStore( ${e.sampleCountTarget}, indexUV, vec4( ( combinedField & ~${qc}u ) | maxSamples ) );

						}

						rayDataStorage[ index ].pixelIndex = pixelIndex;
						rayDataStorage[ index ].rayIntersectionIndex = - 1;
						rayDataStorage[ index ].shadowRayIntersectionIndex = - 1;
						return;

					}

					ray.direction = normalize( ray.direction );

					let rayIndex = atomicAdd( &queueCounters[ ${0}u ], 1u );
					rayQueue[ rayIndex ].origin = ray.origin;
					rayQueue[ rayIndex ].direction = ray.direction;
					rayQueue[ rayIndex ].pixelIndex = pixelIndex;
					rayQueue[ rayIndex ].rngIndex = 0u;
					rayQueue[ rayIndex ].seed = seed + samples;
					rayQueue[ rayIndex ].maxDist = ray.maxDist;

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
					rayDataStorage[ index ].rayStart = 0.0;
					rayDataStorage[ index ].maxDist = ray.maxDist;
					rayDataStorage[ index ].rayIntersectionIndex = i32( rayIndex );
					rayDataStorage[ index ].shadowRayIntersectionIndex = - 1;
					rayDataStorage[ index ].dispersionWavelength = - mix( ${360}.0, ${830}.0, ${xs}( ${7} ) );
					rayDataStorage[ index ].auxAlbedo = 0u;
					rayDataStorage[ index ].auxNormal = 0u;
					rayDataStorage[ index ].subsurfaceBounces = 0u;
					rayDataStorage[ index ].walkPending = 0u;
					rayDataStorage[ index ].mediumScattered = 0u;
					rayDataStorage[ index ].medium.inside = 0u;

					// write the active params & dispatched flag
					textureStore( ${e.sampleCountTarget}, indexUV, vec4( ${Gc}u | ${Kc}u | samples ) );

				} else if ( input.walkPending == 0u ) {

					// evaluate the surface staged by LogicKernel. Paths still walking a medium have none
					let indexUV = vec2u( input.pixelIndex >> 16, input.pixelIndex & 0xFFFF );
					${ys}( indexUV, input.seed, input.currentBounce + input.alphaDepth + input.subsurfaceBounces );

					// the medium the path is in, which the bsdf sample may enter or exit
					var medium = ${pc}( input.medium );
					let segmentInMedium = medium.inside;

					let objectInfo = ${c}[ u32( input.objectIndex ) ];
					var materialInfo = ${s}[ objectInfo.materialIndex ];

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
					let passesThrough = ${xs}( ${50} ) > surface.opacity;
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

						let alphaOrigin = ${Rs}( vertexData.position.xyz, input.direction, input.normal );
						if ( segmentInMedium ) {

							// inside a medium, MediumKernel walks on past the surface, from the surface
							rayDataStorage[ index ].walkPending = 1u;
							rayDataStorage[ index ].origin = alphaOrigin;
							rayDataStorage[ index ].rayStart = 0.0;

						} else {

							let alphaIndex = atomicAdd( &queueCounters[ ${0}u ], 1u );
							rayQueue[ alphaIndex ].origin = alphaOrigin;
							rayQueue[ alphaIndex ].direction = input.direction;
							rayQueue[ alphaIndex ].pixelIndex = input.pixelIndex;
							rayQueue[ alphaIndex ].rngIndex = input.currentBounce + input.alphaDepth + 1u + input.subsurfaceBounces;
							rayQueue[ alphaIndex ].seed = input.seed;
							// the origin advanced to the hit point, so the remaining budget shrinks by the
							// distance already traced
							rayQueue[ alphaIndex ].maxDist = max( input.maxDist - input.dist, 0.0 );
							rayDataStorage[ index ].rayIntersectionIndex = i32( alphaIndex );

							// the ray keeps its origin, and only the queued traversal starts past the surface
							rayDataStorage[ index ].rayStart = input.rayStart + input.dist;

						}

						// the surface is skipped, so no scatter or emission is staged for LogicKernel.
						// "pdf" is left alone so the previous scatter still weights the forward MIS,
						// and "bsdf" matches it so applying the scatter leaves the throughput as is.
						rayDataStorage[ index ].alphaDepth = input.alphaDepth + 1u;
						rayDataStorage[ index ].emission = vec3f( 0.0 );
						rayDataStorage[ index ].scatterColor = vec3f( input.scatterPdf );
						rayDataStorage[ index ].lightPdf = 0.0;
						rayDataStorage[ index ].shadowRayIntersectionIndex = - 1;
						return;

					}

					// apply the hero wavelength to dispersive surfaces, folding the spectral weight
					// into the throughput at the path's first dispersive interaction
					var throughputColor = input.throughputColor;
					let isDispersive = materialInfo.dispersion > 0.0 && surface.ior > 1.0 && surface.transmission > 0.0 && ! surface.thinWall;
					if ( isDispersive ) {

						let wavelength = abs( input.dispersionWavelength );
						${Pc}( &surface, materialInfo.dispersion, wavelength );
						if ( input.dispersionWavelength < 0.0 ) {

							rayDataStorage[ index ].dispersionWavelength = wavelength;
							throughputColor *= ${Fc}( wavelength );
							rayDataStorage[ index ].throughputColor = throughputColor;

						}

					}

					// attenuate the light transmitted through the volume when exiting a backface so
					// the surface's emission and NEE resolve against the attenuated throughput. MediumKernel
					// already applied a scattering medium's transmittance
					if ( input.side < 0.0 && materialInfo.transmission > 0.0 && ! segmentInMedium ) {

						throughputColor *= ${Nc}( input.dist, materialInfo.attenuationColor, materialInfo.attenuationDistance );
						rayDataStorage[ index ].throughputColor = throughputColor;

					}

					// sample the next bounce direction and stage the scatter state for LogicKernel
					var scatterRec = ${i}( view, surface );
					let newBounce = input.currentBounce + 1u;

					// The first surface the path scatters off fills the denoiser's auxiliary images. Until one is
					// found the last mirror or transmission hit stands in, for paths that reach the environment.
					// The albedo is tinted by the throughput of the surfaces looked past to reach it. The packed
					// albedo's alpha marks the surface found
					let auxFound = unpack4x8unorm( input.auxAlbedo ).a != 0.0;
					if ( ! auxFound ) {

						let isAuxSurface = ${Ko}( surface, scatterRec );
						let auxAlbedo = saturate( throughputColor * surface.color );
						rayDataStorage[ index ].auxAlbedo = pack4x8unorm( vec4f( auxAlbedo, select( 0.0, 1.0, isAuxSurface ) ) );
						rayDataStorage[ index ].auxNormal = pack4x8snorm( vec4f( surface.normal, 0.0 ) );

					}

					// decide termination now so finished paths skip the bounce trace entirely - a
					// zeroed pdf reads as a terminating scatter in LogicKernel, which still resolves
					// the surface's emission and NEE before freeing the slot
					var isTerminated = newBounce >= maxBounces || all( scatterRec.color == vec3f( 0.0 ) ) || ${Is}( scatterRec );

					// russian roulette early out:
					// Matches Cycles path_state_continuation_probability in integrator/path_state.h
					if ( ! isTerminated && newBounce >= 3u ) {

						let rrThroughput = throughputColor * scatterRec.color / scatterRec.pdf;
						let rrProb = saturate( sqrt( max( max( rrThroughput.r, rrThroughput.g ), rrThroughput.b ) ) );
						isTerminated = rrProb <= 0.0 || ${xs}( ${6} ) > rrProb;
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
					rayDataStorage[ index ].mediumScattered = 0u;

					// As in "KHR_materials_scatter", the surface bsdf is the medium's boundary: refracting out
					// ends the walk, reflecting continues it
					if ( segmentInMedium && u32( input.objectIndex ) == medium.object && input.side < 0.0 && scatterRec.isTransmissive ) {

						medium.inside = false;

					}

					// refracting into a front face of a scattering material starts a random walk inside it
					if ( scatterRec.isTransmissive && ! surface.thinWall && input.side > 0.0 ) {

						let entered = ${mc}( materialInfo, u32( input.objectIndex ) );
						if ( entered.inside ) {

							medium = entered;

						}

					}

					// keep the medium the path left or entered
					if ( segmentInMedium || medium.inside ) {

						// a whole struct is written to the buffer, not through the pointer alias, which Safari fails to compile
						${e.rayDataStorage}[ index ].medium = ${fc}( medium );

					}

					// the NEE shadow ray below still resolves the surface's direct light, so only
					// the bounce segment is skipped for finished paths. Inside a medium, MediumKernel walks it
					if ( ! isTerminated && medium.inside ) {

						rayDataStorage[ index ].walkPending = 1u;
						rayDataStorage[ index ].origin = ${Rs}( vertexData.position.xyz, scatterRec.direction, input.normal );
						rayDataStorage[ index ].direction = scatterRec.direction;
						rayDataStorage[ index ].rayStart = 0.0;

					} else if ( ! isTerminated ) {

						let rayIndex = atomicAdd( &queueCounters[ ${0}u ], 1u );
						rayQueue[ rayIndex ].origin = ${Rs}( vertexData.position.xyz, scatterRec.direction, input.normal );
						rayQueue[ rayIndex ].direction = scatterRec.direction;
						rayQueue[ rayIndex ].pixelIndex = input.pixelIndex;
						rayQueue[ rayIndex ].rngIndex = newBounce + input.alphaDepth + input.subsurfaceBounces;
						rayQueue[ rayIndex ].seed = input.seed;
						rayQueue[ rayIndex ].maxDist = 0.0;
						rayDataStorage[ index ].rayIntersectionIndex = i32( rayIndex );

						rayDataStorage[ index ].origin = rayQueue[ rayIndex ].origin;
						rayDataStorage[ index ].direction = scatterRec.direction;
						rayDataStorage[ index ].rayStart = 0.0;

					}

					// evaluate the bsdf toward the light LogicKernel selected and enqueue the shadow ray.
					// the light pdf will be 0 if NEE is disabled.
					var lightPdf = input.lightPdf;
					if ( lightPdf > 0.0 ) {

						let evalRec = ${o}( view, input.lightDirection, surface );
						if ( evalRec.pdf > 0.0 ) {

							rayDataStorage[ index ].lightBsdf = evalRec.color;
							rayDataStorage[ index ].lightBsdfPdf = evalRec.pdf;

							let shadowIndex = atomicAdd( &queueCounters[ ${1}u ], 1u );
							shadowRayQueue[ shadowIndex ].origin = ${Rs}( vertexData.position.xyz, input.lightDirection, input.normal );
							shadowRayQueue[ shadowIndex ].direction = input.lightDirection;
							shadowRayQueue[ shadowIndex ].pixelIndex = input.pixelIndex;
							shadowRayQueue[ shadowIndex ].rngIndex = input.currentBounce + input.alphaDepth + input.subsurfaceBounces;
							shadowRayQueue[ shadowIndex ].seed = input.seed;
							shadowRayQueue[ shadowIndex ].maxDist = input.lightDist * ( 1.0 - ${Qs} );
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
		`;super(l(e)),this.defineUniformAccessors(e)}},Hl=class extends X{constructor(){let e={rayQueue:N(new k(1,1),Il),queueCounters:N(new k(1,1),`uint`),rayIntersectionsStorage:N(new k(1,1),Ll),globalId:qe},t=Ma(`bvhData.fns.raycastFirstHit.outputType`),n=Ma(`bvhData.fns.raycastFirstHit`),r=Y`

			fn compute( globalId: vec3u ) -> void {

				let rayQueue = &${e.rayQueue};
				let queueCounters = &${e.queueCounters};
				let rayIntersectionsStorage = &${e.rayIntersectionsStorage};

				let index = globalId.x;
				if ( index >= queueCounters[ ${0}u ] ) {

					return;

				}

				// whole structs are read from the buffer, not the pointer alias, which Safari fails to compile
				let queuedRay = ${e.rayQueue}[ index ];
				let indexUV = vec2u( queuedRay.pixelIndex >> 16, queuedRay.pixelIndex & 0xFFFF );
				${ys}( indexUV, queuedRay.seed, queuedRay.rngIndex );

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
		`;super(r(e)),this.defineUniformAccessors(e)}},Ul=class extends X{constructor(){let e={shadowRayQueue:N(new k(1,1),Il),queueCounters:N(new k(1,1),`uint`),shadowRayIntersectionsStorage:N(new k(1,1),Rl),globalId:qe},t=Ma(`bvhData.fns.raycastFirstHit.outputType`),n=Ma(`bvhData.fns.raycastShadow`),r=Y`

			fn compute( globalId: vec3u ) -> void {

				let shadowRayQueue = &${e.shadowRayQueue};
				let queueCounters = &${e.queueCounters};
				let shadowRayIntersectionsStorage = &${e.shadowRayIntersectionsStorage};

				let index = globalId.x;
				if ( index >= queueCounters[ ${1}u ] ) {

					return;

				}

				// whole structs are read from the buffer, not the pointer alias, which Safari fails to compile
				let queuedRay = ${e.shadowRayQueue}[ index ];
				let indexUV = vec2u( queuedRay.pixelIndex >> 16, queuedRay.pixelIndex & 0xFFFF );
				${ys}( indexUV, queuedRay.seed, queuedRay.rngIndex );

				let ray = Ray( queuedRay.origin, queuedRay.direction, queuedRay.maxDist );
				var hitResult: ${t};
				let occluded = ${n}( ray, &hitResult );
				shadowRayIntersectionsStorage[ index ].objectIndex = select( - 1, i32( hitResult.objectIndex ), occluded );
				shadowRayIntersectionsStorage[ index ].skippedOcclusion = hitResult.skippedOcclusion;
				shadowRayIntersectionsStorage[ index ].occlusion = hitResult.occlusion;

			}
		`;super(r(e)),this.defineUniformAccessors(e)}},Wl=class extends X{constructor(){let e={maxSubsurfaceBounces:A(256,`uint`),stepsPerPass:A(16,`uint`),rayCount:A(0,`uint`),rayDataStorage:N(new k(1,1),Pl),mediumQueue:N(new k(1,1),`uint`),rayIntersectionsStorage:N(new k(1,1),Ll),globalId:qe},t=Ma(`bvhData.fns.raycastFirstHit.outputType`),n=Ma(`bvhData.fns.raycastFirstHit`),r=Y`

			fn compute( maxSubsurfaceBounces: u32, stepsPerPass: u32, rayCount: u32, globalId: vec3u ) -> void {

				let rayDataStorage = &${e.rayDataStorage};
				let mediumQueue = &${e.mediumQueue};
				let rayIntersectionsStorage = &${e.rayIntersectionsStorage};

				if ( globalId.x >= mediumQueue[ ${0}u ] ) {

					return;

				}

				let index = mediumQueue[ ${1}u + globalId.x ];
				// whole structs are read from the buffer, not the pointer alias, which Safari fails to compile
				let input = ${e.rayDataStorage}[ index ];
				let medium = ${pc}( input.medium );

				let indexUV = vec2u( input.pixelIndex >> 16, input.pixelIndex & 0xFFFF );
				${ys}( indexUV, input.seed, input.currentBounce + input.alphaDepth + input.subsurfaceBounces );

				var ray = Ray( input.origin, input.direction, 0.0 );
				var weight = input.scatterColor;
				var subsurfaceBounces = input.subsurfaceBounces;
				var hasScattered = false;
				var isFinished = false;
				var isTerminated = false;

				for ( var i = 0u; i < stepsPerPass; i ++ ) {

					// only trace up to the sampled scatter event
					let channelPdf = ${hc}( input.throughputColor * weight, medium.albedo );
					let scatterDist = ${gc}( medium, channelPdf, ${Ss}( ${8} ) );
					ray.maxDist = scatterDist;

					var hitResult: ${t};
					let didHit = ${n}( ray, &hitResult );
					let surfaceDist = select( ${Zs}, hitResult.dist, didHit );

					let scattered = scatterDist < surfaceDist;
					let segmentDist = select( surfaceDist, scatterDist, scattered );
					let transmittance = exp( - medium.extinction * segmentDist );
					let distancePdf = dot( channelPdf, ${_c}( medium, segmentDist, scattered ) );
					if ( distancePdf <= 0.0 ) {

						isTerminated = true;
						break;

					}

					if ( ! scattered ) {

						// reaching the surface, weighted by the chance of not scattering before it
						weight *= transmittance / distancePdf;

						// The hit fills the ray results from the back, by the walk's medium queue position, while the
						// traced rays fill them from the front. A path slot walking a medium queued no ray this round,
						// so the two ranges never exceed the slot count or overlap
						let resultIndex = rayCount - 1u - globalId.x;
						rayIntersectionsStorage[ resultIndex ].barycoord = hitResult.barycoord;
						// a walk that leaves without hitting anything is a miss, as in the trace kernel
						rayIntersectionsStorage[ resultIndex ].objectIndex = select( - 1, i32( hitResult.objectIndex ), didHit );
						rayIntersectionsStorage[ resultIndex ].position = ray.origin + ray.direction * hitResult.dist;
						rayIntersectionsStorage[ resultIndex ].dist = hitResult.dist;
						rayIntersectionsStorage[ resultIndex ].normal = hitResult.normal.xyz;
						rayIntersectionsStorage[ resultIndex ].side = hitResult.side;
						rayIntersectionsStorage[ resultIndex ].indices = hitResult.indices.xyz;
						rayDataStorage[ index ].rayIntersectionIndex = i32( resultIndex );

						isFinished = true;
						break;

					}

					weight *= medium.albedo * medium.extinction * transmittance / distancePdf;
					ray.origin += ray.direction * scatterDist;
					ray.direction = ${Ks}( ray.direction, medium.anisotropy, ${Ss}( ${9} ) );
					hasScattered = true;

					// capped separately from bounces, and ends once the throughput is negligible
					subsurfaceBounces ++;
					let throughput = input.throughputColor * weight / input.scatterPdf;
					if ( subsurfaceBounces >= maxSubsurfaceBounces || max( max( throughput.r, throughput.g ), throughput.b ) < ${cc} ) {

						isTerminated = true;
						break;

					}

					${bs}();

				}

				// a zeroed pdf terminates the path in LogicKernel
				rayDataStorage[ index ].scatterColor = weight;
				rayDataStorage[ index ].scatterPdf = select( input.scatterPdf, 0.0, isTerminated );
				rayDataStorage[ index ].origin = ray.origin;
				rayDataStorage[ index ].direction = ray.direction;
				rayDataStorage[ index ].subsurfaceBounces = subsurfaceBounces;
				rayDataStorage[ index ].walkPending = select( 1u, 0u, isFinished || isTerminated );
				if ( hasScattered ) {

					rayDataStorage[ index ].mediumScattered = 1u;
					rayDataStorage[ index ].isFullyTransmissive = 0u;

				}

			}
		`;super(r(e)),this.defineUniformAccessors(e)}},Gl=class extends X{constructor(){let e={rayCount:A(0,`uint`),rayDataStorage:N(new k(1,1),Pl).toReadOnly(),mediumQueue:N(new k(1,1),`uint`).toAtomic(),globalId:qe},t=Y`

			fn compute( rayCount: u32, globalId: vec3u ) -> void {

				let rayDataStorage = &${e.rayDataStorage};
				let mediumQueue = &${e.mediumQueue};

				let index = globalId.x;
				if ( index >= rayCount ) {

					return;

				}

				if ( rayDataStorage[ index ].walkPending != 0u && rayDataStorage[ index ].objectIndex >= 0 ) {

					let queueIndex = atomicAdd( &mediumQueue[ ${0}u ], 1u );
					atomicStore( &mediumQueue[ ${1}u + queueIndex ], index );

				}

			}
		`;super(t(e)),this.defineUniformAccessors(e)}},Kl=class extends X{constructor(e=0,t=64){let n={queueCounters:N(new k(1,1),`uint`).toAtomic(),outputDispatch:N(new ze(3,1),`u32`).setName(`outputDispatch`)},r=Y`
			fn compute() -> void {

				let queueCounters = &${n.queueCounters};
				let outputDispatch = &${n.outputDispatch};

				let queueLength = atomicLoad( &queueCounters[ ${e}u ] );
				outputDispatch[ 0 ] = ( queueLength + ${t-1}u ) / ${t}u;
				outputDispatch[ 1 ] = 1u;
				outputDispatch[ 2 ] = 1u;

			}
		`;super(r(n)),this.defineUniformAccessors(n)}},ql=class extends X{constructor(){let e={rayDataStorage:N(new k(1,1),Pl),pixelQueue:N(new k(1,1),`uint`).toAtomic(),start:A(0,`uint`),end:A(0,`uint`),addingSlots:A(0,`uint`),globalId:qe},t=Y`
			fn compute( start: u32, end: u32, addingSlots: u32, globalId: vec3u ) -> void {

				let rayDataStorage = &${e.rayDataStorage};
				let pixelQueue = &${e.pixelQueue};

				let index = start + globalId.x;
				if ( index >= end ) {

					return;

				}

				if ( addingSlots == 0u ) {

					// slots being removed hand their pixel back before the pool is discarded
					let queueIndex = atomicAdd( &pixelQueue[ ${1}u ], 1u );
					atomicStore( &pixelQueue[ ${2}u + queueIndex ], rayDataStorage[ index ].pixelIndex );

				} else {

					// the pool never exceeds the pixel count, so the queue holds enough for every new slot
					let previousCount = atomicSub( &pixelQueue[ ${1}u ], 1u );
					rayDataStorage[ index ].pixelIndex = atomicLoad( &pixelQueue[ ${2}u + previousCount - 1u ] );
					rayDataStorage[ index ].resultColor = vec4f( 0.0 );
					rayDataStorage[ index ].throughputColor = vec3f( 0.0 );
					rayDataStorage[ index ].objectIndex = - 1;
					rayDataStorage[ index ].alphaDepth = 0u;
					rayDataStorage[ index ].rayIntersectionIndex = - 1;
					rayDataStorage[ index ].shadowRayIntersectionIndex = - 1;

				}

			}
		`;super(t(e)),this.defineUniformAccessors(e)}},Jl=class extends X{constructor(e={}){let{type:t=`u32`}=e,n={globalId:qe,outputTarget:N(new ze(1,1),t)},r=Y`
			fn compute( globalId: vec3u ) -> void {

				${n.outputTarget}[ globalId.x ] = 0;

			}
		`;super(r(n)),this.defineUniformAccessors({target:n.outputTarget})}},Yl=class extends X{constructor(e){let t={source:N(new k(1,1),e).toReadOnly(),target:N(new k(1,1),e),count:A(0,`uint`),globalId:qe},n=Y`
			fn compute( count: u32, globalId: vec3u ) -> void {

				let index = globalId.x;
				if ( index >= count ) {

					return;

				}

				${t.target}[ index ] = ${t.source}[ index ];

			}
		`;super(n(t)),this.defineUniformAccessors(t)}},Xl=4294967296,Zl=new O({minSamples:{type:`uint`,atomic:!0},maxSamples:{type:`uint`,atomic:!0},totalLo:{type:`uint`,atomic:!0},totalHi:{type:`uint`,atomic:!0},pixelCount:{type:`uint`,atomic:!0}},`SampleCounters`),Ql=class extends X{constructor(){let e={counters:N(new k(1,1),Zl)},t=Y`
			fn compute() -> void {

				atomicStore( &${e.counters}[ 0 ].minSamples, 0xFFFFFFFFu );
				atomicStore( &${e.counters}[ 0 ].maxSamples, 0u );
				atomicStore( &${e.counters}[ 0 ].totalLo, 0u );
				atomicStore( &${e.counters}[ 0 ].totalHi, 0u );
				atomicStore( &${e.counters}[ 0 ].pixelCount, 0u );

			}
		`;super(t(e)),this.defineUniformAccessors(e)}},$l=class extends X{constructor(){let e={globalId:qe,counters:N(new k(1,1),Zl),sampleCountTarget:st(new Ue(1,1)).toReadOnly()},t=Y`
			fn compute( globalId: vec3u ) -> void {

				let targetDimensions = textureDimensions( ${e.sampleCountTarget} );
				if ( globalId.x >= targetDimensions.x || globalId.y >= targetDimensions.y ) {

					return;

				}

				// pixels without a camera ray aren't part of the image, so skip rather than count zero
				let combinedField = textureLoad( ${e.sampleCountTarget}, globalId.xy ).r;
				if ( ( combinedField & ${Kc}u ) == 0u ) {

					return;

				}

				let samples = combinedField & ${qc}u;

				atomicMin( &${e.counters}[ 0 ].minSamples, samples );
				atomicMax( &${e.counters}[ 0 ].maxSamples, samples );
				atomicAdd( &${e.counters}[ 0 ].pixelCount, 1u );

				// the sum overflowed if it came out smaller than the value already there, so carry
				// the wrap into "totalHi"
				let previousTotal = atomicAdd( &${e.counters}[ 0 ].totalLo, samples );
				if ( previousTotal + samples < previousTotal ) {

					atomicAdd( &${e.counters}[ 0 ].totalHi, 1u );

				}

			}
		`;super(t(e)),this.defineUniformAccessors(e)}},eu=Math.floor(134217728/(Pl.getLength()*4)),tu=5,nu=class extends kl{constructor(e){super(e),this.seed=0,this.mediumStepsPerPass=16,this.envInfo=new el,this.backgroundInfo=new tl,this.lightsInfo=new Tl,this.rayCount=0,this.rayDataStorage=null,this.rayQueue=null,this.shadowRayQueue=null,this.queueCounters=new k(new Uint32Array(2),1),this.queueCounters.name=`Queue Counters`,this.rayIntersectionsStorage=null,this.shadowRayIntersectionsStorage=null,this.mediumQueue=null,this.pixelQueue=null,this.sampleCountersStorage=new k(new Uint32Array(5),5),this.sampleCountersStorage.name=`Sample Counters`,this._samplesPromise=null,this.populatePixelIndicesKernel=new zl().setWorkgroupSize(8,8,1),this.logicKernel=new Bl().setWorkgroupSize(64,1,1),this.materialKernel=new Vl().setWorkgroupSize(64,1,1),this.traceRayKernel=new Hl().setWorkgroupSize(64,1,1),this.traceShadowRayKernel=new Ul().setWorkgroupSize(64,1,1),this.mediumKernel=new Wl().setWorkgroupSize(64,1,1),this.queueMediumWalksKernel=new Gl().setWorkgroupSize(64,1,1),this.rayDispatchConverter=new Kl(0).setWorkgroupSize(1,1,1),this.shadowDispatchConverter=new Kl(1).setWorkgroupSize(1,1,1),this.mediumDispatchConverter=new Kl(0).setWorkgroupSize(1,1,1),this.primeSampleCountersKernel=new Ql().setWorkgroupSize(1,1,1),this.tallySampleCountsKernel=new $l().setWorkgroupSize(8,8,1),this.resetSlotsKernel=new ql().setWorkgroupSize(64,1,1),this.copyRayDataKernel=new Yl(Pl).setWorkgroupSize(64,1,1),this.logicKernel.envInfo=this.envInfo,this.logicKernel.backgroundInfo=this.backgroundInfo,this.logicKernel.lightsInfo=this.lightsInfo,this.zeroDispatchKernel=new Jl().setWorkgroupSize(1,1,1)}resetSeed(){this.seed=0}reset(){super.reset(),this._samplesPromise=null}setBVHData(e){this.materialKernel.context.bvhData=e,this.materialKernel.needsUpdate=!0,this.traceRayKernel.context.bvhData=e,this.traceRayKernel.needsUpdate=!0,this.traceShadowRayKernel.context.bvhData=e,this.traceShadowRayKernel.needsUpdate=!0,this.mediumKernel.context.bvhData=e,this.mediumKernel.needsUpdate=!0,this.reset()}rebuild(){super.rebuild(),this.materialKernel.needsUpdate=!0,this.reset()}setRandom(e){this.logicKernel.context.random=e,this.logicKernel.needsUpdate=!0,this.materialKernel.context.random=e,this.materialKernel.needsUpdate=!0,this.traceRayKernel.context.random=e,this.traceRayKernel.needsUpdate=!0,this.traceShadowRayKernel.context.random=e,this.traceShadowRayKernel.needsUpdate=!0,this.mediumKernel.context.random=e,this.mediumKernel.needsUpdate=!0,this.reset()}setMaterial(e){this.materialKernel.material=e.getData(),this.materialKernel.needsUpdate=!0,this.reset()}setFilterGlossy(e){this.materialKernel.filterGlossy=e===0?Dc:1/e,this.reset()}setClamping(e,t){this.logicKernel.clampDirect=e,this.logicKernel.clampIndirect=t,this.reset()}setTransmissiveBackground(e){this.logicKernel.transmissiveBackground=e,this.reset()}setEnvironment(e){this.envInfo.updateFrom(e)}setLights(e){this.lightsInfo.updateFrom(this.renderer,e),this.reset()}setEnvironmentParams(e,t){let{envInfo:n}=this,r=new D().makeRotationFromEuler(t).invert();n.rotationNode.value.setFromMatrix4(r),n.intensityNode.value=e}setMultipleImportanceSampling(e){this.logicKernel.misEnabled=+!!e,this.reset()}setBackground(e){let{backgroundInfo:t}=this;t.dispose(),t.map=e}setBackgroundParams(e,t,n){let{backgroundInfo:r}=this,i=new D().makeRotationFromEuler(t).invert();r.rotationNode.value.copy(i),r.intensity=e,r.blur=n}dispose(){super.dispose(),this.envInfo.dispose(),this.lightsInfo.dispose(),this.rayDataStorage?.dispose(),this.rayQueue?.dispose(),this.shadowRayQueue?.dispose(),this.queueCounters.dispose(),this.rayIntersectionsStorage?.dispose(),this.shadowRayIntersectionsStorage?.dispose(),this.mediumQueue?.dispose(),this.sampleCountersStorage.dispose(),this.pixelQueue?.dispose(),this.rayDispatchConverter.outputDispatch.dispose(),this.shadowDispatchConverter.outputDispatch.dispose(),this.mediumDispatchConverter.outputDispatch.dispose(),this.populatePixelIndicesKernel.dispose(),this.logicKernel.dispose(),this.materialKernel.dispose(),this.traceRayKernel.dispose(),this.traceShadowRayKernel.dispose(),this.mediumKernel.dispose(),this.queueMediumWalksKernel.dispose(),this.rayDispatchConverter.dispose(),this.shadowDispatchConverter.dispose(),this.mediumDispatchConverter.dispose(),this.primeSampleCountersKernel.dispose(),this.tallySampleCountsKernel.dispose(),this.resetSlotsKernel.dispose(),this.copyRayDataKernel.dispose(),this.zeroDispatchKernel.dispose()}_updatePixelQueue(e,t){let n=2+Math.max(e*t,1);(!this.pixelQueue||this.pixelQueue.array.length<n)&&(this.pixelQueue?.dispose(),this.pixelQueue=new k(new Float32Array(n),n),this.pixelQueue.name=`Pixel Queue`,this.materialKernel.pixelQueue=this.pixelQueue,this.populatePixelIndicesKernel.pixelQueue=this.pixelQueue,this.resetSlotsKernel.pixelQueue=this.pixelQueue)}_resizePool(e,t){let{resetSlotsKernel:n,copyRayDataKernel:r}=this,i=this.rayCount,a=Math.min(i,t),o=Math.min(e,t);n.pixelQueue=this.pixelQueue,o<a&&(n.rayDataStorage=this.rayDataStorage,n.start=o,n.end=a,n.addingSlots=!1,this.dispatch(n,n.getDispatchSize(a-o,1,1)));let s=new k(e,Pl.getLength());s.name=`Ray Data`;let c=new k(e,Il.getLength());c.name=`Ray Queue`;let l=new k(e,Il.getLength());l.name=`Shadow Ray Queue`;let u=new k(e,Ll.getLength());u.name=`Ray Intersections`;let d=new k(e,Rl.getLength());d.name=`Shadow Ray Intersections`;let f=1+e,p=new k(new Uint32Array(f),f);p.name=`Medium Queue`;let m=Math.min(e,i);m>0&&(r.source=this.rayDataStorage,r.target=s,r.count=m,this.dispatch(r,r.getDispatchSize(m,1,1))),this.rayDataStorage?.dispose(),this.rayQueue?.dispose(),this.shadowRayQueue?.dispose(),this.rayIntersectionsStorage?.dispose(),this.shadowRayIntersectionsStorage?.dispose(),this.mediumQueue?.dispose(),this.rayDataStorage=s,this.rayQueue=c,this.shadowRayQueue=l,this.rayIntersectionsStorage=u,this.shadowRayIntersectionsStorage=d,this.mediumQueue=p,this.rayCount=e,o>a&&(n.rayDataStorage=s,n.start=a,n.end=o,n.addingSlots=!0,this.dispatch(n,n.getDispatchSize(o-a,1,1)))}_getRequestedSlotCount(){return Math.min(eu,Math.max(1,Math.floor(this.frameBudget)))}_getPreviewIterations(){return Math.max(1,Math.min(this.maxBounces,tu))}getPreviewPixelBudget(){return Math.min(this.frameBudget/this._getPreviewIterations(),eu)}_applyBudget(e){let t=this._getRequestedSlotCount();t!==this.rayCount&&this._resizePool(t,e)}*createRenderTask(){let{renderer:e,maxTransparentBounces:t,logicKernel:n,materialKernel:r,traceRayKernel:i,traceShadowRayKernel:o,mediumKernel:s,queueMediumWalksKernel:c,rayDispatchConverter:l,shadowDispatchConverter:u,mediumDispatchConverter:d,zeroDispatchKernel:f,populatePixelIndicesKernel:p}=this,m=new a;this.getSize(m),this._updatePixelQueue(m.x,m.y);let h=m.x*m.y;for(this._applyBudget(h),yield*this.compileKernels([n,r,i,o,s,c,l,u,d,f,p]),f.target=this.queueCounters,this.dispatch(f,[2]),p.rayDataStorage=this.rayDataStorage,p.pixelQueue=this.pixelQueue,p.frameBudget=Math.min(this.rayCount,h),p.targetDimensions.copy(m),this.dispatch(p,p.getDispatchSize(m.x,m.y,1)),this.seed++;;){let a=Math.min(this._getRequestedSlotCount(),h),p=this.lowResMode?this._getPreviewIterations():1,g=Math.max(p,Math.round(this.frameBudget/a));for(let a=0;a<g;a++){e.copyTextureToTexture(this.outputTarget,this.prevOutputTarget),[this.outputTarget,this.prevOutputTarget]=[this.prevOutputTarget,this.outputTarget],n.prevOutputTarget=this.prevOutputTarget,n.outputTarget=this.outputTarget,n.sampleCountTarget=this.sampleCountTarget,n.auxTarget=this.auxTarget??this._auxPlaceholder,n.accumulateAux=+!!this.auxTarget,n.rayDataStorage=this.rayDataStorage,n.rayIntersectionsStorage=this.rayIntersectionsStorage,n.shadowRayIntersectionsStorage=this.shadowRayIntersectionsStorage,n.maxBounces=this.maxBounces,n.rayCount=Math.min(this.rayCount,h),this.dispatch(n,n.getDispatchSize(n.rayCount,1,1)),this._applyBudget(h);let{rayDataStorage:a,rayQueue:p,shadowRayQueue:g,queueCounters:_,rayIntersectionsStorage:v,shadowRayIntersectionsStorage:y,mediumQueue:b}=this,x=Math.min(this.rayCount,h);f.target=_,this.dispatch(f,[2]),f.target=b,this.dispatch(f,[1]),r.rayDataStorage=a,r.rayQueue=p,r.shadowRayQueue=g,r.queueCounters=_,r.pixelQueue=this.pixelQueue,r.sampleCountTarget=this.sampleCountTarget,r.seed=this.seed,r.maxSamples=this.maxSamples,r.rayCount=x,r.maxTransparentBounces=t,r.maxBounces=this.maxBounces,r.targetDimensions.copy(m),this.dispatch(r,r.getDispatchSize(x,1,1)),l.queueCounters=_,this.dispatch(l,[1,1,1]),i.rayQueue=p,i.queueCounters=_,i.rayIntersectionsStorage=v,this.dispatch(i,l.outputDispatch),u.queueCounters=_,this.dispatch(u,[1,1,1]),o.shadowRayQueue=g,o.queueCounters=_,o.shadowRayIntersectionsStorage=y,this.dispatch(o,u.outputDispatch),c.rayDataStorage=a,c.mediumQueue=b,c.rayCount=x,this.dispatch(c,c.getDispatchSize(x,1,1)),d.queueCounters=b,this.dispatch(d,[1,1,1]),s.rayDataStorage=a,s.mediumQueue=b,s.rayIntersectionsStorage=v,s.rayCount=x,s.maxSubsurfaceBounces=this.maxSubsurfaceBounces,s.stepsPerPass=this.mediumStepsPerPass,this.dispatch(s,d.outputDispatch)}yield}}getSampleCountsAsync(){if(this._samplesPromise===null){let e=this._measureSampleCounts().finally(()=>{this._samplesPromise===e&&(this._samplesPromise=null)});this._samplesPromise=e}return this._samplesPromise}async _measureSampleCounts(){let{renderer:e,sampleCountTarget:t,sampleCountersStorage:n,primeSampleCountersKernel:r,tallySampleCountsKernel:i}=this;if(!e.initialized||this.lowResMode)return{min:0,max:0,avg:0};r.counters=n,e.compute(r.kernel,[1,1,1]),i.counters=n,i.sampleCountTarget=t,e.compute(i.kernel,i.getDispatchSize(t.width,t.height));let a=await e.getArrayBufferAsync(n),o=new Uint32Array(a),s=o[4];if(s===0)return{min:0,max:0,avg:0};let c=o[3]*Xl+o[2];return{min:o[0],max:o[1],avg:c/s}}},ru=`

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
`,iu=class extends w{constructor(){super({uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:`
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

				${ru}

				void main() {

					vec3 rayDirection = equirectUvToDirection( vUv );
					rayDirection.x *= flipEnvMap;
					gl_FragColor = textureCube( envMap, rayDirection );

				}`}),this.depthWrite=!1,this.depthTest=!1}},au=class{constructor(e){this._renderer=e,this._quad=new jo(new iu)}generate(e,t=null,r=null){if(!e.isCubeTexture)throw Error(`CubeToEquirectMaterial: Source can only be cube textures.`);let i=e.images[0],a=this._renderer,o=this._quad;t===null&&(t=4*i.height),r===null&&(r=2*i.height);let s=new v(t,r,{type:T,colorSpace:i.colorSpace}),c=i.height,l=Math.log2(c)-2,u=1/c,d=1/(3*Math.max(2**l,112));o.material.defines.CUBEUV_MAX_MIP=`${l}.0`,o.material.defines.CUBEUV_TEXEL_WIDTH=d,o.material.defines.CUBEUV_TEXEL_HEIGHT=u,o.material.uniforms.envMap.value=e,o.material.uniforms.flipEnvMap.value=e.isRenderTargetTexture?1:-1,o.material.needsUpdate=!0;let p=a.getRenderTarget(),m=a.autoClear;a.autoClear=!0,a.setRenderTarget(s),o.render(a),a.setRenderTarget(p),a.autoClear=m;let h=new Uint16Array(t*r*4),g=new Float32Array(t*r*4);a.readRenderTargetPixels(s,0,0,t,r,g),s.dispose();for(let e=0,t=g.length;e<t;e++)h[e]=Te.toHalfFloat(g[e]);let _=new n(h,t,r,Se,ne);return _.minFilter=ue,_.magFilter=E,_.wrapS=f,_.wrapT=f,_.mapping=303,_.needsUpdate=!0,_}dispose(){this._quad.dispose()}};function ou(e,t){return e.uuid<t.uuid?1:e.uuid>t.uuid?-1:0}function su(e){return`${e.source.uuid}:${e.colorSpace}`}function cu(e){let t=[];return e.traverseVisible(e=>{(e.isRectAreaLight||e.isSpotLight||e.isPointLight||e.isDirectionalLight||e.isSunLight)&&t.push(e)}),t.sort(ou)}var lu=new me,uu=new O({matrixWorld:`mat4x4f`,inverseMatrixWorld:`mat4x4f`,visible:`uint`,materialIndex:`uint`,visibleToShadowRays:`uint`,_alignment0:`uint`,color:`vec4f`},`TransformStruct`),du=new O({indices:`vec4u`,normal:`vec3f`,didHit:`bool`,barycoord:`vec3f`,objectIndex:`uint`,side:`float`,dist:`float`,skippedOcclusion:`float`,occlusion:`float`},`PathTracerIntersectionResult`),fu=class extends Do{constructor(e,t={}){super(e,{attributes:{position:`vec4f`,normal:`vec4f`,tangent:`vec4f`,color:`vec4f`,uv:`vec4f`},...t}),this.structs.transform=uu,this.structs.material=zo,this.storage.materials=null,this.materialsMap=new Map,this.materials=[],this.bvhMap=new Map,this.textureAtlas=new cl}updateUvAttributesFromScene(){let{attributes:e}=this,t=new Set([`color`]);for(let n=0;n<8;n++){let r=n===0?`uv`:`uv`+n;delete e[r],t.add(r)}this.getRootObject().traverse(n=>{if(n.geometry)for(let r in n.geometry.attributes)t.has(r)&&(e[r]=`vec4f`)})}updateUvSampleFunction(){let{structs:e,fns:t}=this,n=[],r=null;e.attributes.membersLayout.forEach(({name:e})=>{if(/^uv/.test(e)){let t=e===`uv`?0:Number(e.replace(/^uv/,``));n.push(`
					case ${t}u: {

						return vertexData.${e}.xy;

					}
				`),r===null&&(r=`vertexData.${e}.xy`)}}),t.getUvFromChannel=Y`
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
		`}updateColorSampleFn(){let{structs:e,fns:t}=this;t.getColor=e.attributes.membersLayout.find(({name:e})=>e===`color`)?Y`
				fn getColor( vertexData: ${e.attributes} ) -> vec4f {

					return vertexData.color;

				}
			`:Y`
				fn getColor( vertexData: ${e.attributes} ) -> vec4f {

					return vec4f( 1.0 );

				}
			`}useTransparencyRaycastFn(){let{textureAtlas:e,storage:t,fns:n}=this,r=e.texture,i=Bs(yt(e.textureInfo,`uvec4`).setName(`bvh_textureInfo`),et(r));n.getSurfaceRecord=Oc(i,n.getUvFromChannel,n.getColor);let a=tt().toVar(`bvh_materialIndex`),o=it(1).toVar(`bvh_rayScalar`),s=it(1).toVar(`bvh_baseOpacity`),c=_t(!1).toVar(`bvh_isShadowRay`),l=_t(!1).toVar(`bvh_skipShadowObject`),u={shapeStruct:K,resultStruct:du,boundsOrderFn:Y`
				fn getBoundsOrder( ray: ${K}, splitAxis: u32, node: ${ba} ) -> bool {

					return ray.direction[ splitAxis ] >= 0.0;

				}
			`,intersectsBoundsFn:Y`
				fn rayIntersectsBounds( ray: ${K}, bounds: ${ya}, result: ptr<function, ${du}> ) -> u32 {

					// early-out if our object is completely transparent, or a shadow ray is already occluded
					if ( ${s} == 0.0 || ( ${c} && result.didHit ) ) {

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

			`,intersectRangeFn:Y`
				fn intersectRange( ray: ${K}, offset: u32, count: u32, result: ptr<function, ${du}> ) -> bool {

					var didHit = false;
					for ( var ti = offset; ti < offset + count; ti = ti + 1u ) {

						let i0 = ${t.index}[ ti * 3u ];
						let i1 = ${t.index}[ ti * 3u + 1u ];
						let i2 = ${t.index}[ ti * 3u + 2u ];

						let a = ${t.attributes}[ i0 ].position.xyz;
						let b = ${t.attributes}[ i1 ].position.xyz;
						let c = ${t.attributes}[ i2 ].position.xyz;

						var triResult = ${ao}( ray, a, b, c, 0.0 );
						triResult.dist *= ${o};
						if ( triResult.didHit && ( ray.maxDist <= 0.0 || triResult.dist < ray.maxDist ) && ( ! result.didHit || triResult.dist < result.dist ) ) {

							let material = ${t.materials}[ ${a} ];

							// TODO: if material is a transmissive volume we may need to assume double-sidedness
							// shadow rays hit both sides
							if ( ! ${c} && material.side != 0 && triResult.side != material.side ) {

								continue;

							}

							var opacity = ${s};
							if ( material.transparent != 0 || material.alphaTest > 0.0 ) {

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

							// shadow rays skip the objects not visible to them. Record the share of bsdf rays this face
							// would stop: all of them if it's opaque, its opacity if it's partially transparent
							if ( ${l} ) {

								if ( material.side == 0 || triResult.side == material.side ) {

									result.skippedOcclusion += ( 1.0 - result.skippedOcclusion ) * select( 1.0, opacity, material.transparent != 0 );

								}

								continue;

							}

							// shadow rays pass partially transparent surfaces, each blocking its opacity's share of the
							// light still getting through, just as bsdf rays pass them by chance
							if ( ${c} && material.transparent != 0 && opacity < 1.0 ) {

								result.occlusion += ( 1.0 - result.occlusion ) * opacity;
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
			`,transformShapeFn:Y`
				fn transformRay( ray: ptr<function, ${K}>, objectIndex: u32 ) -> void {

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
			`,transformResultFn:Y`
				fn transformResult( hit: ptr<function, ${du}>, objectIndex: u32 ) -> void {

					let toLocal = ${t.transforms}[ objectIndex ].inverseMatrixWorld;
					hit.normal = normalize( ( transpose( toLocal ) * vec4f( hit.normal, 0.0 ) ).xyz );
					hit.objectIndex = objectIndex;

				}
			`,resetShapeFn:Y`
				fn resetRayScalar( objectIndex: u32 ) -> void {

					${o} = 1.0;
					${s} = 1.0;

				}
			`};n.raycastFirstHit=this.getShapecastFn({...u,name:`raycastFirstHit`,prefixFn:Y`
				fn initFirstHitCull() -> void {

					${c} = false;

				}
			`}),n.raycastShadow=this.getShapecastFn({...u,name:`raycastShadow`,prefixFn:Y`
				fn initShadowCull() -> void {

					${c} = true;

				}
			`})}update(){let{structs:e}=this,t=new k(new Uint8Array,e.material.getLength());this.storage.materials=N(t,e.material).toReadOnly().setName(`bvh_materials`),this.updateUvAttributesFromScene(),this.updateMaterialsMap(),super.update(),this.updateUvSampleFunction(),this.updateColorSampleFn(),this.updateMaterials(),this.bvhMap.clear(),this.useTransparencyRaycastFn()}updateMaterialsMap(){let{materials:e,materialsMap:t}=this;t.clear(),e.length=0,this.getRootObject().traverse(e=>{e.material&&(Array.isArray(e.material)?e.material.forEach(e=>e&&n(e)):n(e.material))}),e.sort((e,t)=>e.uuid<t.uuid?1:-1).forEach((e,n)=>{t.set(e,n)});function n(n){t.has(n)||(e.push(n),t.set(n,-1))}}updateMaterials(){this.updateMaterialsMap();let{materials:e,storage:t,structs:n,bvh:r}=this,{materialData:i,textures:a}=this.writeMaterialsBuffer(e),o=t.materials.proxyNode,s=t.transforms.proxyNode,c=i.length/n.material.getLength();o.value.count<c&&(o.value.dispose(),o.value=new k(i,n.material.getLength())),o.value.array.set(i),o.value.needsUpdate=!0,this._getTransformMap(r).forEach(e=>{this.writeMaterialData(e,e.slot,s.value.array.buffer)}),s.value.needsUpdate=!0,this.textures=a}writeMaterialsBuffer(e){function t(e){switch(e){case f:return 0;case ve:return 1;case C:return 2;default:return 0}}function n(e,n){if(n in e&&e[n]){let r=e[n],i=su(r);o.has(i)||(o.set(i,o.size),s.push(r));let a=o.get(i),c=r.channel&7,l=t(r.wrapS),u=t(r.wrapT);return(r.magFilter===1003)<<30|u<<28|l<<26|c<<23|a&8388607}return-1}function r(e,t,n){return t in e?e[t]:n}function i(e,t,n,r){let i=e[t]&&e[t].isTexture?e[t]:null;if(i){i.matrixAutoUpdate&&i.updateMatrix();let e=i.matrix.elements;for(let t=0;t<3;t++)n[r+4*t+0]=e[3*t+0],n[r+4*t+1]=e[3*t+1],n[r+4*t+2]=e[3*t+2],n[r+4*t+3]=0}return 12}let a=0,o=new Map,s=[],c=Math.max(e.length,2),l=new Float32Array(c*this.structs.material.getLength()),u=new Int32Array(l.buffer);for(let t=0,o=e.length;t<o;t++){let o=e[t];l[a++]=o.color.r,l[a++]=o.color.g,l[a++]=o.color.b,u[a++]=n(o,`map`),l[a++]=r(o,`metalness`,0),u[a++]=n(o,`metalnessMap`),l[a++]=r(o,`roughness`,0),u[a++]=n(o,`roughnessMap`),l[a++]=r(o,`ior`,1.5),l[a++]=r(o,`transmission`,0),u[a++]=n(o,`transmissionMap`),l[a++]=r(o,`emissiveIntensity`,0),`emissive`in o?(l[a++]=o.emissive.r,l[a++]=o.emissive.g,l[a++]=o.emissive.b):(l[a++]=0,l[a++]=0,l[a++]=0),u[a++]=n(o,`emissiveMap`),u[a++]=n(o,`normalMap`),a++,`normalScale`in o?(l[a++]=o.normalScale.x,l[a++]=o.normalScale.y):(l[a++]=1,l[a++]=1),l[a++]=r(o,`clearcoat`,0),u[a++]=n(o,`clearcoatMap`),u[a++]=n(o,`clearcoatNormalMap`),a++,`clearcoatNormalScale`in o?(l[a++]=o.clearcoatNormalScale.x,l[a++]=o.clearcoatNormalScale.y):(l[a++]=1,l[a++]=1),l[a++]=r(o,`clearcoatRoughness`,0),u[a++]=n(o,`clearcoatRoughnessMap`),u[a++]=n(o,`iridescenceMap`),u[a++]=n(o,`iridescenceThicknessMap`),l[a++]=r(o,`iridescence`,0),l[a++]=r(o,`iridescenceIOR`,1.3),l[a++]=r(o,`iridescenceThicknessMinimum`,100),l[a++]=r(o,`iridescenceThicknessMaximum`,400),l[a++]=r(o,`diffuseRoughness`,0),l[a++]=r(o,`dispersion`,0),`specularColor`in o?(l[a++]=o.specularColor.r,l[a++]=o.specularColor.g,l[a++]=o.specularColor.b):(l[a++]=1,l[a++]=1,l[a++]=1),u[a++]=n(o,`specularColorMap`),l[a++]=r(o,`specularIntensity`,1),u[a++]=n(o,`specularIntensityMap`);let s=r(o,`thickness`,0)===0&&r(o,`attenuationDistance`,1/0)===1/0;if(u[a++]=Number(s),a++,`attenuationColor`in o?(l[a++]=o.attenuationColor.r,l[a++]=o.attenuationColor.g,l[a++]=o.attenuationColor.b):(l[a++]=1,l[a++]=1,l[a++]=1),l[a++]=r(o,`attenuationDistance`,1/0),u[a++]=n(o,`alphaMap`),u[a++]=Number(r(o,`castShadow`,!0)),l[a++]=o.opacity,l[a++]=o.alphaTest,!s&&o.transmission>0)l[a++]=0;else switch(o.side){case 0:l[a++]=1;break;case 1:l[a++]=-1;break;case 2:l[a++]=0}u[a++]=Number(r(o,`matte`,!1)),l[a++]=r(o,`sheen`,0),a++,`sheenColor`in o?(l[a++]=o.sheenColor.r,l[a++]=o.sheenColor.g,l[a++]=o.sheenColor.b):(l[a++]=0,l[a++]=0,l[a++]=0),u[a++]=n(o,`sheenColorMap`),l[a++]=r(o,`sheenRoughness`,0),u[a++]=n(o,`sheenRoughnessMap`),u[a++]=Number(o.vertexColors),u[a++]=Number(o.flatShading),u[a++]=Number(o.transparent),u[a++]=0,l[a++]=r(o,`anisotropy`,0),l[a++]=r(o,`anisotropyRotation`,0),u[a++]=n(o,`anisotropyMap`),a++,a++,a++,a+=i(o,`map`,l,a),a+=i(o,`metalnessMap`,l,a),a+=i(o,`roughnessMap`,l,a),a+=i(o,`transmissionMap`,l,a),a+=i(o,`emissiveMap`,l,a),a+=i(o,`normalMap`,l,a),a+=i(o,`clearcoatMap`,l,a),a+=i(o,`clearcoatNormalMap`,l,a),a+=i(o,`clearcoatRoughnessMap`,l,a),a+=i(o,`sheenColorMap`,l,a),a+=i(o,`sheenRoughnessMap`,l,a),a+=i(o,`iridescenceMap`,l,a),a+=i(o,`iridescenceThicknessMap`,l,a),a+=i(o,`specularColorMap`,l,a),a+=i(o,`specularIntensityMap`,l,a),a+=i(o,`alphaMap`,l,a),a+=i(o,`anisotropyMap`,l,a);let c=r(o,`multiscatterColor`,null);l[a++]=c?c.r:1,l[a++]=c?c.g:1,l[a++]=c?c.b:1,l[a++]=r(o,`scatterStrength`,0),l[a++]=r(o,`scatterAnisotropy`,0),a+=3}return{materialData:u,textures:s}}writeMaterialData(e,t,n){let{materialsMap:r}=this,{object:i,instanceId:a,root:o}=e,s=i.material;if(Array.isArray(s)){let{materialIndex:e}=i.geometry.groups[o];s=s[e]}let c=new Uint32Array(n),l=r.has(s)?r.get(s):-1;l===-1&&(c[t*uu.getLength()+32]=0),c[t*uu.getLength()+33]=l,i.isInstancedMesh&&i.instanceColor?(i.getColorAt(a,lu),lu.w=1):i.isBatchedMesh&&i._colorsTexture?i.getColorAt(a,lu):lu.setScalar(1);let u=new Float32Array(n);lu.toArray(u,t*uu.getLength()+36)}writeTransformData(e,t,n,r){super.writeTransformData(e,t,n,r),this.writeMaterialData(e,n,r);let i=new Uint32Array(r);i[n*this.structs.transform.getLength()+34]=e.object.visibleToShadowRays===!1?0:1}getBVH(e,t,n){let{bvhMap:r}=this,i=super.getBVH(e,t,n);if(r.has(i)){let e=r.get(i);if(Object.assign(n,e.range),i!==e.bvh&&i instanceof _a){let t=i.mesh,n=e.bvh.mesh;n.matrixWorld.copy(t.matrixWorld).decompose(n.position,n.quaternion,n.scale),i.refit(),i.getBoundingBox(n.boundingBox),i.geometry.computeBoundingBox()}return e.bvh}if(i.indirect){let e=new ce;e.attributes=i.geometry.attributes;let t;if(i.geometry.index)t=i.geometry.index.array.slice(n.start,n.count+n.start);else{let{start:e,count:r}=n;t=new Uint32Array(r);for(let r=0,i=n.count;r<i;r++)t[r]=e+r}e.index=new Ce(t,1),n.start=0;let a;if(i instanceof _a){let t=i.mesh,n=new be(e);n.copy(t),n.matrixWorld.copy(t.matrixWorld).decompose(n.position,n.quaternion,n.scale),a=new _a(n,{strategy:2,targetLeafSize:5})}else a=new ta(e,{strategy:2,targetLeafSize:5});return r.set(i,{bvh:a,range:{...n}}),a}return i}dispose(){let{storage:e}=this;for(let t in e)e[t].value?.dispose()}},pu=class extends wt{set texture(e){this._texNode.value=e}set layer(e){this._layerUniform.value=e}constructor(){super(),this.blending=0,this._texNode=et(new n),this._layerUniform=A(0),this.colorNode=P(`
			fn atlasDebug( tex: texture_2d_array<f32>, coord: vec2f, layer: f32 ) -> vec4f {

				// flip y so texel origin shows at the top-left
				let dims = vec2f( textureDimensions( tex, 0 ).xy );
				let texel = vec2i( vec2f( coord.x, 1.0 - coord.y ) * dims );
				return textureLoad( tex, texel, i32( layer ), 0 );

			}
		`)(this._texNode,Je(Ct()),this._layerUniform)}},mu=class extends wt{set texture(e){this._texNode.value=e}set minCount(e){this._minUniform.value=e}set maxCount(e){this._maxUniform.value=e}constructor(){super(),this.blending=0,this._texNode=et(new Ue(1,1)),this._minUniform=A(0),this._maxUniform=A(1);let e=Y`
			fn sampleDensity( tex: texture_2d<u32>, coord: vec2f, minCount: f32, maxCount: f32 ) -> vec4f {

				let dims = vec2f( textureDimensions( tex, 0 ) );
				let texel = vec2i( coord * dims );

				// the high bits hold the ray state flags rather than part of the count
				let samples = textureLoad( tex, texel, 0 ).r & ${qc}u;

				// stretched across the recorded range rather than from zero, otherwise a converged
				// image with counts bunched near the max reads as uniformly hot
				let range = max( maxCount - minCount, 1.0 );
				let t = clamp( ( f32( samples ) - minCount ) / range, 0.0, 1.0 );

				return vec4f( ${Po}( t ), 1.0 );

			}
		`;this.colorNode=e(this._texNode,Je(Ct()),this._minUniform,this._maxUniform)}},hu=class extends wt{set texture(e){this._texNode.value=e}set showNormal(e){this._showNormalUniform.value=+!!e}constructor(){super(),this.blending=0,this._texNode=et(Qo()),this._showNormalUniform=A(0,`uint`);let e=Y`
			fn auxDebug( tex: texture_2d_array<u32>, coord: vec2f, showNormal: u32 ) -> vec4f {

				// the rows are stored top down, so the quad's bottom up uv is flipped
				let texel = vec2u( vec2f( coord.x, 1.0 - coord.y ) * vec2f( textureDimensions( tex, 0 ) ) );
				var packed: vec3u;
				for ( var layer = 0u; layer < ${3}u; layer ++ ) {

					packed[ layer ] = textureLoad( tex, texel, layer, 0 ).r;

				}

				let albedo = ${qo}( packed );
				let normal = ${Jo}( packed );
				return vec4f( select( albedo, normal, showNormal == 1u ), 1.0 );

			}
		`;this.colorNode=e(this._texNode,Je(Ct()),this._showNormalUniform)}};function gu(e,t){if(!e.index){let t=e.attributes.position.count,n=Array(t);for(let e=0;e<t;e++)n[e]=e;e.setIndex(n)}if(!e.attributes.normal&&t&&t.includes(`normal`)&&e.computeVertexNormals(),!e.attributes.uv&&t&&t.includes(`uv`)){let t=e.attributes.position.count;e.setAttribute(`uv`,new Ce(new Float32Array(t*2),2,!1))}if(!e.attributes.uv2&&t&&t.includes(`uv2`)){let t=e.attributes.position.count;e.setAttribute(`uv2`,new Ce(new Float32Array(t*2),2,!1))}if(!e.attributes.tangent&&t&&t.includes(`tangent`)){if(e.attributes.uv&&e.attributes.normal)e.computeTangents();else{let t=e.attributes.position.count;e.setAttribute(`tangent`,new Ce(new Float32Array(t*4),4,!1))}}if(!e.attributes.color&&t&&t.includes(`color`)){let t=e.attributes.position.count,n=new Float32Array(t*4);n.fill(1),e.setAttribute(`color`,new Ce(n,4))}}var _u=class{init(){}getBsdfNode(){return Y`

			fn bsdfSample( worldWo: vec3f, surf: SurfaceRecord ) -> ScatterRecord {

				var record: ScatterRecord;

				let wo = normalize( surf.normalInvBasis * worldWo );
				let wi = ${Hs}( wo, ${Ss}( ${3} ) );
				record.color = surf.color * max( wi.z, 0.0 );
				record.pdf = max( wi.z, 0.0 ) / PI;
				record.direction = normalize( surf.normalBasis * wi );

				return record;

			}

		`}getBsdfEvalPdfNode(){return Y`

			fn bsdfEvalPdf( worldWo: vec3f, worldWi: vec3f, surf: SurfaceRecord ) -> ScatterRecord {

				var record: ScatterRecord;
				record.direction = worldWi;

				let wo = normalize( surf.normalInvBasis * worldWo );
				let wi = normalize( surf.normalInvBasis * worldWi );
				record.color = surf.color * max( wi.z, 0.0 );
				record.pdf = max( wi.z, 0.0 ) / PI;

				return record;

			}

		`}getData(){return{bsdfSample:this.getBsdfNode(),bsdfEvalPdf:this.getBsdfEvalPdfNode()}}},vu=P(`

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

`),yu=P(`

	fn fonSingleScatter( NdotV: f32, NdotL: f32, VdotH: f32, roughness: f32, A: f32, rho: vec3f ) -> vec3f {

		let VdotL = 2.0 * VdotH * VdotH - 1.0;
		let s = VdotL - NdotV * NdotL;
		let sOverT = select( s, s / max( NdotV, NdotL ), s > 0.0 );

		return ( rho / PI ) * A * ( 1.0 + roughness * sOverT );

	}

`,[Z]);P(`

	fn fonBrdf( NdotV: f32, NdotL: f32, VdotH: f32, surf: SurfaceRecord ) -> vec3f {

		let roughness = surf.diffuseRoughness;
		if ( roughness < 1e-5 ) {

			return surf.color / PI;

		}

		let rho = saturate( surf.color );
		let A = 1.0 / ( 1.0 + ( 0.5 - 2.0 / ( 3.0 * PI ) ) * roughness );

		return fonSingleScatter( NdotV, NdotL, VdotH, roughness, A, rho );

	}

`,[Z,Bo,yu]);var bu=P(`

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

`,[Z,Bo,vu,yu]),xu=P(`

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

`),Su=P(`

	fn eonLtcBasis( wo: vec3f ) -> mat3x3f {

		let lenSqr = dot( wo.xy, wo.xy );
		let invLen = inverseSqrt( lenSqr );
		let x = select(
			vec3f( 1.0, 0.0, 0.0 ),
			vec3f( wo.x, wo.y, 0.0 ) * invLen,
			lenSqr > 0.0,
		);
		let y = vec3f( - x.y, x.x, 0.0 );

		return mat3x3f( x, y, vec3f( 0.0, 0.0, 1.0 ) );

	}

`),Cu=P(`

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

`,[Z,xu,Su]),wu=P(`

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

`,[Z,xu,Su]),Tu=P(`

	fn eonUniformHemisphereSample( uv: vec2f ) -> vec3f {

		let sinTheta = sqrt( max( 1.0 - uv.x * uv.x, 0.0 ) );
		let phi = 2.0 * PI * uv.y;
		return vec3f( sinTheta * cos( phi ), sinTheta * sin( phi ), uv.x );

	}

`,[Z]),Eu=P(`

	fn eonUniformProbability( wo: vec3f, roughness: f32 ) -> f32 {

		let mu = saturate( wo.z );
		return clamp( pow( roughness, 0.1 ), 0.0, 1.0 ) * (
			0.162925 + ( - 0.372058 + ( 0.538233 - 0.290822 * mu ) * mu ) * mu
		);

	}

`),Du=P(`

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

`,[wu,Tu,Eu]),Ou=P(`

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

`,[Z,Cu,Eu]),ku=Y`

	fn velvetD( cosThetaH: f32, roughness: f32 ) -> f32 {

		var alpha = max( roughness, 0.07 );
		alpha = alpha * alpha;

		let invAlpha = 1.0 / alpha;
		let sqrCosThetaH = cosThetaH * cosThetaH;
		let sinThetaH = max( 1.0 - sqrCosThetaH, 0.001 );

		return ( 2.0 + invAlpha ) * pow( sinThetaH, 0.5 * invAlpha ) / ( 2.0 * PI );

	}

`,Au=Y`

	fn velvetParamsInterpolate( i: i32, oneMinusAlphaSquared: f32 ) -> f32 {

		let p0 = array<f32, 5>( 25.3245, 3.32435, 0.16801, - 1.27393, - 4.85967 );
		let p1 = array<f32, 5>( 21.5473, 3.82987, 0.19823, - 1.97760, - 4.32054 );

		return mix( p1[ i ], p0[ i ], oneMinusAlphaSquared );

	}

`,ju=Y`

	fn velvetL( x: f32, alpha: f32 ) -> f32 {

		let oneMinusAlpha = 1.0 - alpha;
		let oneMinusAlphaSquared = oneMinusAlpha * oneMinusAlpha;

		let a = ${Au}( 0, oneMinusAlphaSquared );
		let b = ${Au}( 1, oneMinusAlphaSquared );
		let c = ${Au}( 2, oneMinusAlphaSquared );
		let d = ${Au}( 3, oneMinusAlphaSquared );
		let e = ${Au}( 4, oneMinusAlphaSquared );

		return a / ( 1.0 + b * pow( abs( x ), c ) ) + d * x + e;

	}

`,Mu=Y`

	fn velvetLambda( cosTheta: f32, alpha: f32 ) -> f32 {

		if ( abs( cosTheta ) < 0.5 ) {

			return exp( ${ju}( cosTheta, alpha ) );

		} else {

			return exp( 2.0 * ${ju}( 0.5, alpha ) - ${ju}( 1.0 - cosTheta, alpha ) );

		}

	}

`,Nu=Y`

	fn velvetG( cosThetaO: f32, cosThetaI: f32, roughness: f32 ) -> f32 {

		var alpha = max( roughness, 0.07 );
		alpha = alpha * alpha;

		return 1.0 / ( 1.0 + ${Mu}( cosThetaO, alpha ) + ${Mu}( cosThetaI, alpha ) );

	}

`,Pu=Y`

	fn directionalAlbedoSheen( cosThetaIn: f32, alpha: f32 ) -> f32 {

		let cosTheta = saturate( cosThetaIn );
		let c = 1.0 - cosTheta;
		let c3 = c * c * c;

		return 0.65584461 * c3 + 1.0 / ( 4.16526551 + exp( -7.97291361 * sqrt( alpha ) + 6.33516894 ) );

	}

`,Fu=Y`

	fn sheenAlbedoScaling( wo: vec3f, wi: vec3f, surf: ${Bo} ) -> f32 {

		var alpha = max( surf.sheenRoughness, 0.07 );
		alpha = alpha * alpha;

		let maxSheenColor = max( max( surf.sheenColor.r, surf.sheenColor.g ), surf.sheenColor.b );

		let eWo = ${Pu}( clamp( wo.z, 0.001, 1.0 ), alpha );
		let eWi = ${Pu}( clamp( wi.z, 0.001, 1.0 ), alpha );

		return min( 1.0 - maxSheenColor * eWo, 1.0 - maxSheenColor * eWi );

	}

`,Iu=Y`

	fn sheenColor( wo: vec3f, wi: vec3f, wh: vec3f, surf: ${Bo} ) -> vec3f {

		let cosThetaO = clamp( wo.z, 0.001, 1.0 );
		let cosThetaI = clamp( wi.z, 0.001, 1.0 );
		let cosThetaH = wh.z;

		let D = ${ku}( cosThetaH, surf.sheenRoughness );
		let G = ${Nu}( cosThetaO, cosThetaI, surf.sheenRoughness );

		// See equation (1) in http://www.aconty.com/pdf/s2017_pbs_imageworks_sheen.pdf
		var color = surf.sheenColor;
		color *= D * G / ( 4.0 * abs( cosThetaO * cosThetaI ) );

		return color;

	}

`,Lu=32,Ru=16,zu=class extends Ne{constructor(){super(Lu,Lu,31),this.type=ne,this.format=Se,this.minFilter=E,this.magFilter=E,this.dielectricLayerCount=10,this.transmissiveLayerCount=10,this.minIoR=1,this.maxIoR=2.5,this.sampleConductorFn=J(`_sampleConductorFn`,this),this.sampleDielectricFn=J(`_sampleDielectricFn`,this),this.sampleTransmissiveFn=J(`_sampleTransmissiveFn`,this)}generate(e){let{dielectricLayerCount:t,transmissiveLayerCount:n,minIoR:r,maxIoR:i}=this,a={outputTarget:Ze(this).toWriteOnly(),globalId:qe,eta:A(1),layer:A(0,`uint`),includeFresnel:A(0),includeRefraction:A(0)},o=[Lu/Ru,Lu/Ru,1],s=new X(Uc(a.outputTarget)(a),{workgroupSize:[Ru,Ru,1]});a.layer.value=0,a.eta.value=1,a.includeFresnel.value=0,a.includeRefraction.value=0,e.compute(s.kernel,o);for(let n=0;n<t;n++)a.layer.value++,a.eta.value=1/Ee.mapLinear(n,0,t-1,r,i),a.includeFresnel.value=1,e.compute(s.kernel,o);a.includeFresnel.value=1,a.includeRefraction.value=1;for(let c=0;c<n;c++){let l=Ee.mapLinear(c,0,n-1,r,i);a.layer.value=1+t+c,a.eta.value=1/l,e.compute(s.kernel,o),a.layer.value=1+t+n+c,a.eta.value=l,e.compute(s.kernel,o)}s.dispose();let c=Y`
			fn mapLinearClamped( v: f32, a0: f32, a1: f32, b0: f32, b1: f32 ) -> f32 {

				let mapped = saturate( ( v - a0 ) / ( a1 - a0 ) );
				return mix( b0, b1, mapped );

			}
		`,l=ft(this).setName(`turquinTexture`),u=Ye(this).setName(`turquinSampler`),d=1/(1+t+2*n);this._sampleConductorFn=Y`
			fn sampleConductor( cosTheta0: f32, roughness: f32 ) -> f32 {

				let layer = 0.5;
				let uvw = vec3f( cosTheta0, roughness, layer * ${d} );
				return textureSampleLevel( ${l}, ${u}, uvw, 0 ).r;

			}
		`,this._sampleDielectricFn=Y`
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
		`;let f=1+t,p=1+t+n;this._sampleTransmissiveFn=Y`
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
		`}},Bu=it(1.5),Vu=it(1e6),Hu=class extends _u{constructor(e={}){super();let{specularBrdf:t=kc,specularBtdf:n=jc,diffuseBrdf:r=bu,fresnelMix:i=Ic,conductorFresnel:a=Vc,fresnelCoat:o=Hc,iridescentFresnel:s=zc}=e;this.turquinTexture=new zu,this.specularBrdf=t,this.specularBtdf=n,this.diffuseBrdf=r,this.fresnelMix=i,this.conductorFresnel=a,this.fresnelCoat=o,this.iridescentFresnel=s,this.transmissionFresnel=Bc(s)}init(e){this.turquinTexture.generate(e)}getBsdfNode(){this._bsdfEvalFunc=Y`

			// The material is organized as one scoped block per lobe in cascade order - clearcoat,
			// sheen, transmission, specular, diffuse - each accumulating into a shared result and
			// guarding its own hemisphere.
			// TODO: energy only cascades downward through front faces, so the layers are always traversed
			// outside-in and cannot reflect energy back into the glass from below.
			fn bsdfEval( ctx: ${Go}, surf: ${Bo} ) -> vec3f {

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
					let clearcoatBoost = 1.0 + ${Es}( 1.5 ) * ( 1.0 - clearcoatEnergySS ) / clearcoatEnergySS;

					let clearcoatSpecular = ${this.specularBrdf}( Vc, Lc, Hc, vec2( clearcoatAlpha ) ) * clearcoatBoost;
					let clearcoatFresnel = ${As}( abs( dot( Vc, Hc ) ), ${Es}( 1.5 ) );

					// retrieve specular energy reflected by this layer
					let clearcoatFresnelEnergySS = ${this.turquinTexture.sampleDielectricFn}( NdotVc, surf.clearcoatRoughness, 1.5 ) * clearcoatBoost;

					result += surf.clearcoat * clearcoatFresnel * clearcoatSpecular;
					attenuation *= 1.0 - surf.clearcoat * clearcoatFresnelEnergySS;

				}

				// sheen
				if ( NdotL > 0.0 && surf.sheen > 0.0 ) {

					result += attenuation * surf.sheen * ${Iu}( ctx.V, ctx.L, ctx.H, surf );
					attenuation *= mix( 1.0, ${Fu}( ctx.V, ctx.L, surf ), surf.sheen );

				}

				// transmission
				// handles specular reflection and transmission
				if ( surf.transmission > 0.0 ) {

					let matchedIor = ${Ac}( surf.eta );

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
							let thinWallAlpha = vec2f( ${Mc}( alphaB, surf.ior ) );
							let thinWallEnergySS = max( ${this.turquinTexture.sampleConductorFn}( NdotV, sqrt( thinWallAlpha.x ) ), 1e-5 );
							refraction = fresnel.transmittance * ${this.specularBrdf}( ctx.V, wiMirror, ctx.H, thinWallAlpha ) / thinWallEnergySS;

						} else if ( ! matchedIor ) {

							// The default BTDF contains the plain dielectric Fresnel complement. Replace it
							// with the colored thin-film-aware coefficient shared by sampling and the PDF.
							let dielectricTransmittance = 1.0 - ${Ps}( abs( ctx.VdotH ), surf.eta );
							if ( dielectricTransmittance > EPSILON ) {

								refraction = ${this.specularBtdf}( ctx.V, ctx.L, ctx.H, alpha, surf.eta ) *
									fresnel.transmittance / dielectricTransmittance * glassBoost;

							}

						}

						// the refracted half is not attenuated by the layers above. A volume is entered and exited,
						// so each crossing takes the square root of the color, as in Cycles
						let transmissionTint = select( sqrt( surf.color ), surf.color, surf.thinWall );
						result += ( 1.0 - surf.metalness ) * surf.transmission * refraction * transmissionTint;

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
					let dielectricFr = ${js}( ctx.VdotH, dielectricF0, vec3f( 1.0 ) );
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

						let dielectricFilmFresnel = ${this.iridescentFresnel}( ctx.VdotH, vec3f( ${Es}( filmBaseIor ) ), surf.iridescenceIor, outsideIor, surf.iridescenceThickness );
						dielectricReflectance = mix( dielectricReflectance, dielectricFilmFresnel, surf.iridescence );
						filmFresnelMax = max( max( dielectricFilmFresnel.r, dielectricFilmFresnel.g ), dielectricFilmFresnel.b );

					}

					let metallic = metallicSpecular * metallicReflectance;
					let dielectric = dielectricSpecular * dielectricReflectance;

					// The energy the specular interface takes from the layers below, at the lobe's specular color
					// and intensity. The table holds the albedo at the ior's f0, and the Schlick albedo is linear
					// in f0, so the tinted albedo slides from it toward the conductor albedo at f0 = 1
					let iorEnergySS = ${this.turquinTexture.sampleDielectricFn}( NdotV, surf.roughness, surf.ior );
					let tintedEnergySS = iorEnergySS + ( dielectricF0 - surf.f0 ) * ( energySS - iorEnergySS ) / ( 1.0 - surf.f0 );
					let fresnelEnergySS = surf.specularIntensity * tintedEnergySS * dielectricBoost;

					result += attenuation * mix( ( 1.0 - surf.transmission ) * dielectric, metallic, surf.metalness );
					attenuation *= ( 1.0 - surf.metalness ) * mix( 1.0 - fresnelEnergySS, vec3f( 1.0 - filmFresnelMax ), surf.iridescence );

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

		`;let e=this.getBsdfEvalPdfNode();return Y`

			fn bsdfSample( worldWo: vec3f, surf: ${Bo} ) -> ${Lo} {

				var result: ${Lo};
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
				let weights = ${Us}( wo, wo, woClearcoat, vec3( 0, 0, 1 ), ${Bu}, surf );
				let cdfClearcoat = weights.clearcoat;
				let cdfSpecular = cdfClearcoat + weights.specular;
				let cdfTransmission = cdfSpecular + weights.transmission;
				let cdfTotal = cdfTransmission + weights.diffuse;

				// random samples for lobes
				let lobeSample = ${xs}( ${2} ) * cdfTotal;
				let directionUV = ${Ss}( ${3} );

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
					let whCoat = ${vc}( woClearcoat, vec2( clearcoatAlpha ), directionUV );
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

					wh = ${vc}( wo, alpha, directionUV );
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
					wh = ${vc}( wo, alpha, directionUV );

					let fresnelCosine = select( dot( wo, wh ), wo.z, surf.thinWall );
					let fresnel = ${this.transmissionFresnel}( fresnelCosine, surf );

					let fresnelSample = ( lobeSample - cdfSpecular ) / ( cdfTransmission - cdfSpecular );
					let doReflect = fresnelSample < fresnel.reflectProbability;
					if ( doReflect ) {

						wi = - normalize( reflect( wo, wh ) );

					} else if ( ${Ac}( surf.eta ) ) {

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
						let thinWallAlpha = vec2f( ${Mc}( alphaB, surf.ior ) );
						wh = ${vc}( wo, thinWallAlpha, directionUV );
						wi = - normalize( reflect( wo, wh ) );
						wi = vec3f( wi.xy, - wi.z );

					} else {

						wi = refract( - wo, wh, surf.eta );

						// "refract" returns zero on total internal reflection, so reflect instead and let "isDead" drop it
						if ( dot( wi, wi ) == 0.0 ) {

							wi = - normalize( reflect( wo, wh ) );

						}

					}

					// the facet choice must agree with the resulting hemisphere - reflection above,
					// transmission below. Mismatched samples are dropped since their loss is
					// refunded by the energy compensation tables
					isDead = doReflect != ( wi.z > 0.0 );

				} else if ( lobeSample <= cdfTotal ) {

					// diffuse
					// all diffuse BRDF variants share the EON sampling proposal
					wi = ${Du}( wo, surf.diffuseRoughness, directionUV );
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
					let transmissionTint = select( sqrt( surf.color ), surf.color, surf.thinWall );
					result.color = ( 1.0 - surf.metalness ) * surf.transmission * transmissionTint *
						deltaTransmittance * ${Vu};
					result.direction = worldWi;
					result.pdf = weights.transmission * deltaProbability * ${Vu};
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

		`}getBsdfEvalPdfNode(){if(this._bsdfEvalPdfNode)return this._bsdfEvalPdfNode;this._bsdfEvalFunc||this.getBsdfNode();let e=this._bsdfEvalFunc;return this._bsdfEvalPdfNode=Y`

			fn bsdfEvalPdf( worldWo: vec3f, worldWi: vec3f, surf: ${Bo} ) -> ${Lo} {

				var result: ${Lo};
				result.color = vec3f( 0.0 );
				result.isTransmissive = false;
				result.direction = worldWi;
				result.pdf = 0.0;

				let wo = normalize( surf.normalInvBasis * worldWo );
				let wi = normalize( surf.normalInvBasis * worldWi );
				let woClearcoat = normalize( surf.clearcoatInvBasis * worldWo );

				let isTransmission = wi.z < 0.0;
				if ( isTransmission && ${Ac}( surf.eta ) ) {

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

				let weights = ${Us}( wo, wo, woClearcoat, vec3( 0, 0, 1 ), ${Bu}, surf );

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
						result.pdf += weights.clearcoat * ${Cc}( woClearcoat, whClearcoat, vec2( clearcoatAlpha ) );

					}

				}

				// specular
				if ( weights.specular > 0.0 && wi.z > 0.0 ) {

					// anisotropic roughness along tangent, bitangent
					let alphaB = surf.roughness * surf.roughness;
					let alphaT = mix( alphaB, 1.0, surf.anisotropy * surf.anisotropy );
					let alpha = vec2( alphaT, alphaB );

					result.pdf += weights.specular * ${Cc}( wo, wh, alpha );

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

						result.pdf += weights.transmission * fresnel.reflectProbability * ${Cc}( wo, wh, alpha );

					} else if ( surf.thinWall ) {

						// the flipped reflection shares the reflection pdf at the remapped roughness
						let thinWallAlpha = vec2f( ${Mc}( alphaB, surf.ior ) );
						result.pdf += weights.transmission * ( 1.0 - fresnel.reflectProbability ) * ${Cc}( wo, wh, thinWallAlpha );

					} else {

						result.pdf += weights.transmission * ( 1.0 - fresnel.reflectProbability ) * ${wc}( wo, wi, wh, alpha, surf.eta );

					}

				}

				// diffuse
				if ( weights.diffuse > 0.0 ) {

					result.pdf += weights.diffuse * ${Ou}( wo, wi, surf.diffuseRoughness );

				}

				//

				// construct the scatter context
				var ctx: ${Go};
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

		`,this._bsdfEvalPdfNode}},Uu=new a,Wu=new he,Gu=250,Ku=16,qu=1.15,Ju=2,Yu=4096,Xu={strategy:2,targetLeafSize:5},Zu=4,Qu=0,$u=1,ed=2;async function td(e,t,n){let r=e=>typeof SharedArrayBuffer<`u`&&e.buffer instanceof SharedArrayBuffer?e:e.slice(),{position:i}=t.attributes,{index:a}=t,o=i.array,s=a?a.array:null;i.array=r(o),a&&(a.array=r(s));let c=await e.generate(t,n);return i.array=o,a&&(s.set(a.array),a.array=s,a.needsUpdate=!0),c}var nd=class{constructor(e,t){this.key=t,this.renderer=e,this.texture=null,this.hash=null;let r=new n(new Uint8Array([255,255,255,255]),1,1);r.minFilter=E,r.magFilter=E,this.colorTex=r}dispose(){this.colorTex.dispose(),this.texture?.dispose()}setFromScene(e){let{renderer:t,key:n,colorTex:r}=this,i=e[n],a=``;if(i)i.isColor?(r.image.data[0]=i.r*255,r.image.data[1]=i.g*255,r.image.data[2]=i.b*255,r.image.data[3]=255,i=r,a=r.image.data.join(),r.needsUpdate=a!==this.hash):i.isCubeTexture?(a=null,i=new au(t).generate(i)):(a=i.uuid+`_`+i.version,a!==this.hash&&(i=i.clone(),i.minFilter=E,i.magFilter=E));else{let e=t.getClearAlpha();t.getClearColor(Wu),r.image.data[0]=Wu.r*255,r.image.data[1]=Wu.g*255,r.image.data[2]=Wu.b*255,r.image.data[3]=e*255,i=r,a=r.image.data.join(),r.needsUpdate=a!==this.hash}if(a===null)return this.texture?.dispose(),this.texture=i,this.hash=null,!0;{let e=a!==this.hash;return e&&(this.texture?.dispose(),this.texture=i,this.hash=a),e}}},rd=class extends S{get maxBounces(){return this._pathTracer.maxBounces}set maxBounces(e){this._pathTracer.maxBounces=e,this.reset()}get frameBudget(){return this._pathTracer.frameBudget}set frameBudget(e){this._pathTracer.frameBudget=e}get frameTime(){return this._pathTracer.timing.frameTime}get maxTransparentBounces(){return this._pathTracer.maxTransparentBounces}set maxTransparentBounces(e){this._pathTracer.maxTransparentBounces=e,this.reset()}get maxSubsurfaceBounces(){return this._pathTracer.maxSubsurfaceBounces}set maxSubsurfaceBounces(e){this._pathTracer.maxSubsurfaceBounces=e,this.reset()}get maxSamples(){return this._pathTracer.maxSamples}set maxSamples(e){this._pathTracer.maxSamples=e,this._denoiser?.reset()}get complete(){let e=this.maxSamples,t=this._denoiser;return e>0&&this._lastSampleCounts.min>=e&&(!t||t.complete)}async getSampleCountsAsync(){let e=this._pathTracer,t=this._lastSampleCounts,n=await e.getSampleCountsAsync();t.min=n.min,t.max=n.max,t.avg=n.avg;let r=this.getRenderTime()/1e3;return t.samplesPerSecond=r>0?t.avg/r:0,{...t}}get transmissiveBackground(){return this._transmissiveBackground}set transmissiveBackground(e){this._transmissiveBackground!==e&&(this._transmissiveBackground=e,this._pathTracer.setTransmissiveBackground(e))}get filterGlossyFactor(){return this._filterGlossyFactor}set filterGlossyFactor(e){this._filterGlossyFactor!==e&&(this._filterGlossyFactor=e,this._pathTracer.setFilterGlossy(e))}get multipleImportanceSampling(){return this._multipleImportanceSampling}set multipleImportanceSampling(e){this._multipleImportanceSampling!==e&&this.setMultipleImportanceSampling(e)}get clampDirect(){return this._clampDirect}set clampDirect(e){e=Math.max(0,e),this._clampDirect!==e&&(this._clampDirect=e,this._pathTracer.setClamping(e,this._clampIndirect))}get clampIndirect(){return this._clampIndirect}set clampIndirect(e){e=Math.max(0,e),this._clampIndirect!==e&&(this._clampIndirect=e,this._pathTracer.setClamping(this._clampDirect,e))}get target(){return this._pathTracer.outputTarget??null}get fadeState(){return this._fadeState}get lowResTarget(){return this._lowResTarget}get lowResMode(){return this._pathTracer.lowResMode}get compiling(){return this._pathTracer.compiling}get textureAtlas(){return this._bvhData.textureAtlas}useMegakernel(e){let t=this._pathTracer.maxSamples;this._pathTracer.dispose(),this._pathTracer=e?new jl(this._renderer):new nu(this._renderer),this._pathTracer.maxSamples=t,this._timingCount=0,this._pathTracer.setBVHData(this._bvhData),this._pathTracer.setMaterial(this.material),this._pathTracer.setRandom(this.random),this._pathTracer.setMultipleImportanceSampling(this.multipleImportanceSampling),this._pathTracer.setTransmissiveBackground(this._transmissiveBackground),this._pathTracer.setFilterGlossy(this._filterGlossyFactor),this._pathTracer.setClamping(this._clampDirect,this._clampIndirect),this._pathTracer.setAccumulateAux(!!(this._denoiser&&this._denoiser.useAuxiliaryBuffers)),this.setCamera(this.camera),this._pathTracer.setEnvironment(this._environmentCache.texture),this._pathTracer.setBackground(this._backgroundCache.texture),this.updateEnvironment(),this.updateLights()}constructor(e){super(),this._renderer=e,this._timer=new ge,this._environmentCache=new nd(e,`environment`),this._backgroundCache=new nd(e,`background`),this._resetTime=-1,this._fadeState=0,this._lastSampleCounts={min:0,max:0,avg:0,samplesPerSecond:0},this._size=new a,this._blitQuad=new jo(new No),this._timingCount=0,this._frameTimeTotal=0,this._frameTimeCount=0,this._warnedTimestamps=!1,this._fullFrameBudget=null,this._lowResTarget=new Ue(1,1),this._lowResTarget.type=T,this._lowResTarget.generateMipmaps=!1,this._pathTracer=new nu(e),this._denoiser=null,this._upscaler=null,this._onDenoiserProgress=e=>this.dispatchEvent({type:`progress`,stage:`denoising`,progress:e.progress}),this._stage=ed,this._sceneRequest=0,this._pendingBVHs=new WeakMap,this.minSamples=1,this.renderDelay=16,this.fadeDuration=250,this.dynamicLowRes=!0,this.lowResScale=.1,this.adaptiveDynamicRes=!0,this.adaptiveFrameBudget=!0,this.targetFrameTime=16,this.renderScale=1,this.synchronizeRenderSize=!0,this.renderToCanvas=!0,this.asyncCompile=!1,this.generateMissingAttributes=!0,this.commonAttributes=[`normal`,`tangent`],this.stableNoise=!0,this.pause=!1,this.filterGlossyFactor=1,this._clampDirect=0,this._clampIndirect=10,this.multipleImportanceSampling=!0,this.transmissiveBackground=1,this.random=Wc,this.material=new Hu,this._invViewProjectionMatrix=A(new D),this._cameraRayFnHandle=null,this._BVHWorker=null,this._lastCompleteCheck=0,this._wasComplete=!1,this.setMaterial(this.material),this.setRandom(this.random),this.setScene(new oe,new ae)}setMultipleImportanceSampling(e){this._multipleImportanceSampling=e,this._pathTracer.setMultipleImportanceSampling(e),this.reset()}setDenoiser(e){this._denoiser?.reset(),this._denoiser?.removeEventListener(`progress`,this._onDenoiserProgress),this._denoiser=e,e&&(e.init(this._renderer),e.addEventListener(`progress`,this._onDenoiserProgress)),this._pathTracer.setAccumulateAux(!!(e&&e.useAuxiliaryBuffers)),this.reset()}setUpscaler(e){this._upscaler=e,e&&e.init(this._renderer)}setScene(e,t){e.updateMatrixWorld(!0),t.updateMatrixWorld(),e.traverse(e=>{this.generateMissingAttributes&&e.geometry?.isBufferGeometry&&gu(e.geometry,this.commonAttributes),e.isSkinnedMesh?(e.boundsTree?e.boundsTree.refit():e.boundsTree=new _a(e,{strategy:2,targetLeafSize:5,indirect:!0}),e.boundingBox===null&&(e.boundingBox=new se),e.boundsTree.getBoundingBox(e.boundingBox)):e.isMesh&&(e.geometry.boundsTree||(e.geometry.boundsTree=new ta(e.geometry,Xu)))});let n=new fu(e);n.update(),n.textureAtlas.setTextures(this._renderer,n.textures),this._bvhData&&(this._bvhData.dispose(),this._bvhData.textureAtlas.dispose()),this.scene=e,this._bvhData=n,this._pathTracer.setBVHData(n),this.setCamera(t),this.updateEnvironment(),this.updateLights()}setBVHWorker(e){this._BVHWorker=e}async setSceneAsync(e,t){let n=this._BVHWorker;if(!n)throw Error(`WebGPUPathTracer: "setBVHWorker" must be called before "setSceneAsync" can be called.`);this._sceneRequest++;let r=this._sceneRequest,i=this._pendingBVHs,a=new Set,o=new Set;e.traverse(e=>{if(e.isMesh&&!e.isSkinnedMesh&&!e.geometry.boundsTree){let{geometry:t}=e;if(t.attributes.position.isInterleavedBufferAttribute||t.index&&t.index.isInterleavedBufferAttribute)return;i.has(t)?o.add(i.get(t)):a.add(t)}});let s=Array.from(a),c=e=>(e.index?e.index.count:e.attributes.position.count)/3,l=s.reduce((e,t)=>e+c(t),0),u=0,d=[];for(let e=0,t=Math.min(Zu,s.length);e<t;e++)d.push(new n);this._setStage(Qu),this._denoiser?.reset();try{await Promise.all([...o,...d.map(async e=>{for(;s.length>0;){let t=s.shift(),n=c(t),a=0,o=e=>{u+=(e-a)*n,a=e,r===this._sceneRequest&&this.dispatchEvent({type:`progress`,stage:`building`,progress:u/l})},d=td(e,t,{...Xu,onProgress:o});i.set(t,d);try{t.boundsTree=await d,o(1)}finally{i.delete(t)}}})])}finally{d.forEach(e=>e.dispose()),r===this._sceneRequest&&this._setStage($u)}r===this._sceneRequest&&this.setScene(e,t)}getMaterial(){return this.material}setMaterial(e){this.material=e,this._pathTracer.setMaterial(e),this.reset()}setRandom(e){this.random=e,this._pathTracer.setRandom(e),this.reset()}setCamera(e){if(this.camera=e,e.getCameraRayFn)this._cameraRayFnHandle=e.getCameraRayFn();else{let t=this._invViewProjectionMatrix;this._cameraRayFnHandle={update:()=>(e.coordinateSystem=b,e.updateMatrixWorld(),(e.isOrthographicCamera||e.isPerspectiveCamera)&&e.updateProjectionMatrix(),t.value.multiplyMatrices(e.matrixWorld,e.projectionMatrixInverse),!1),fn:Y`
					fn getCameraRay( uv: vec2f, resolution: vec2f, ray: ptr<function, ${K}> ) -> bool {

						let ndc = uv * 2.0 - vec2f( 1.0 );
						*ray = ${oo}( ndc, ${t} );
						return true;

					}
				`}}this._bvhData.fns.getCameraRay=this._cameraRayFnHandle.fn,this._cameraRayFnHandle.update(),this._pathTracer.rebuild(),this.reset()}updateMaterials(){let{_bvhData:e,_renderer:t}=this;e.updateMaterials(),e.textureAtlas.setTextures(t,e.textures),this.reset()}updateTransforms(){this.scene.updateMatrixWorld(!0),this._bvhData.updateTransforms(),this.reset()}updateCamera(){let{_cameraRayFnHandle:e,_pathTracer:t}=this;e.update()&&t.rebuild(),this.reset()}updateEnvironment(){let{_pathTracer:e,scene:t,_environmentCache:n,_backgroundCache:r}=this;n.setFromScene(t)&&e.setEnvironment(n.texture),r.setFromScene(t)&&e.setBackground(r.texture),e.setEnvironmentParams(t.environmentIntensity,t.environmentRotation),e.setBackgroundParams(t.backgroundIntensity,t.backgroundRotation,t.backgroundBlurriness),this.reset()}updateLights(){let{_pathTracer:e,scene:t}=this,n=cu(t);e.setLights(n),this.reset()}setSize(e,t){(this._size.x!==e||this._size.y!==t)&&(this._size.set(e,t),this.reset())}reset(){this._pathTracer.reset(),this._denoiser?.reset(),this._resetTime=-1,this._fadeState=0,this._timer.update(),this._lastSampleCounts={min:0,max:0,avg:0,samplesPerSecond:0},this._lastCompleteCheck=0,this._wasComplete=!1,this.stableNoise&&this._pathTracer.resetSeed(),this._fullFrameBudget!==null&&(this.frameBudget=this._fullFrameBudget,this._fullFrameBudget=null)}_setStage(e){this._stage!==e&&(this._stage=e,e===Qu?this.dispatchEvent({type:`progress`,stage:`building`,progress:0}):e===$u?this.dispatchEvent({type:`progress`,stage:`compiling`,progress:null}):this._dispatchRenderProgress({min:0,max:0,avg:0,samplesPerSecond:0}))}_measureSamples(){let e=this._lastSampleCounts;this.getSampleCountsAsync().then(t=>{if(e===this._lastSampleCounts&&this._stage===ed){let{maxSamples:e}=this;this._fullFrameBudget===null&&e>0&&t.max>=e&&(this._fullFrameBudget=this.frameBudget),this._dispatchRenderProgress(t)}})}_dispatchRenderProgress(e){let{maxSamples:t}=this,n=t>0?Math.min(e.avg/t,1):null;this.dispatchEvent({type:`progress`,stage:`rendering`,progress:n,samples:e})}_readTiming(){let{timing:e}=this._pathTracer,{trackTimestamp:t}=this._renderer.backend;if(this.adaptiveFrameBudget&&!t&&!this._warnedTimestamps&&(console.warn(`WebGPUPathTracer: "adaptiveFrameBudget" needs timestamp queries. Create the renderer with "trackTimestamp: true" on a device that supports them.`),this._warnedTimestamps=!0),e.count===this._timingCount)return;this._timingCount=e.count;let{frameBudget:n}=e;if(!this.adaptiveFrameBudget||n!==this.frameBudget){this._frameTimeTotal=0,this._frameTimeCount=0;return}if(this._frameTimeTotal+=e.frameTime,this._frameTimeCount++,this._frameTimeCount<Ku)return;let{targetFrameTime:r}=this,i=this._frameTimeTotal/this._frameTimeCount;this._frameTimeTotal=0,this._frameTimeCount=0;let a=i/r;if(a<qu&&a>1/qu)return;let o=n*r/i,s=Ee.clamp(o,n/Ju,n*Ju);this.frameBudget=Math.max(Math.round(s),Yu)}renderSample(){let e=this._renderer,t=this._size,n=this._blitQuad,r=this._pathTracer,i=this._lowResTarget,a=this._timer,{renderDelay:o,dynamicLowRes:s,synchronizeRenderSize:c,renderScale:l,adaptiveDynamicRes:u,minSamples:d,maxSamples:f}=this;if(a.update(),!this._renderer._initialized)return;this.material.initialized||(this.material.init(e),this.material.initialized=!0);let p=1e3*a.getDelta(),m=this._resetTime===-1;m&&(this._resetTime=0,p=0),this._resetTime+=p;let h=e.getRenderTarget(),g=e.autoClear;if(c){e.getDrawingBufferSize(Uu);let t=Math.floor(l*Uu.x),n=Math.floor(l*Uu.y);this.setSize(t,n)}let{width:_,height:v}=t,y=this._resetTime<o||m&&s&&d!==0;if(y){let e=Math.min(Math.sqrt(r.getPreviewPixelBudget()/(_*v)),1);u&&(this.lowResScale=e);let t=Math.min(this.lowResScale,e);_=Math.max(1,Math.floor(t*_)),v=Math.max(1,Math.floor(t*v))}r.getSize(Uu),!y&&r.lowResMode&&s&&(i.setSize(Uu.x,Uu.y),e.copyTextureToTexture(r.outputTarget,i)),(Uu.x!==_||Uu.y!==v)&&r.setSize(_,v);let b=f>0&&this._lastSampleCounts.min>=f;if(!this.pause&&!b&&this._stage>Qu&&(!y||y&&s)&&(r.lowResMode=y,r.asyncCompile=this.asyncCompile,r.update(),this._readTiming(),this._setStage(r.compiling?$u:ed)),this._stage<ed){this._resetTime=-1;return}let x=this._denoiser,S=this._upscaler,C=!!x&&!x.complete&&!x.running&&f>0;y||(!b&&this._fadeState<1&&d>0?this._measureSamples():!b&&this._resetTime-this._lastCompleteCheck>=Gu&&(this._lastCompleteCheck=this._resetTime,this._measureSamples()),this._lastSampleCounts.avg>=d&&(this._fadeState+=p/this.fadeDuration,this._fadeState=Math.min(1,this._fadeState)||1));let w=y&&s?1:this._fadeState,T=r.outputTarget;x&&!y&&(C&&this._lastSampleCounts.min>=f&&x.update(r.outputTarget,r.auxTarget),T=x.texture??T),this.renderToCanvas&&(S&&!y&&(T=S.upscale(T,this.camera),e.setRenderTarget(h)),e.autoClear=s?!0:w===1,n.material.transition=s?w:1,n.material.opacity=s?1:w,n.material.fromTexture=i,n.material.texture=T,n.render(e)),e.autoClear=g,e.setRenderTarget(h);let ee=this.complete;ee&&!this._wasComplete&&this.dispatchEvent({type:`complete`}),this._wasComplete=ee}renderDebugBounds(e={}){let{displayTLAS:t=!0,displayBLAS:n=!0,stopAtSurface:r=!1,saturationCount:i=64}=e,a=this._renderer,o=this.camera;if(!a._initialized)return;o.updateMatrixWorld(),(this._debugBoundsQuad===void 0||this._debugBoundsData!==this._bvhData)&&this._buildDebugBoundsQuad();let s=this._debugBoundsUniforms;s.cameraToModelMatrix.value.copy(o.matrixWorld),s.inverseProjectionMatrix.value.copy(o.projectionMatrixInverse),s.displayTLAS.value=+!!t,s.displayBLAS.value=+!!n,s.stopAtSurface.value=+!!r,s.saturationCount.value=i;let c=a.getRenderTarget(),l=a.autoClear,u=a.toneMapping;a.setRenderTarget(null),a.autoClear=!0,a.toneMapping=0,this._debugBoundsQuad.render(a),a.setRenderTarget(c),a.autoClear=l,a.toneMapping=u}_buildDebugBoundsQuad(){let e=this._bvhData,t=Io(e),n=new wt;n.colorNode=t(Je(Ct())),this._debugBoundsQuad===void 0?this._debugBoundsQuad=new jo(n):(this._debugBoundsQuad.material.dispose(),this._debugBoundsQuad.material=n),this._debugBoundsUniforms=t.uniforms,this._debugBoundsData=e}renderTextureAtlas(e=0){let t=this._renderer;this._atlasDebugQuad||=new jo(new pu);let n=this._atlasDebugQuad;n.material.texture=this.textureAtlas.texture,n.material.layer=e,t.setRenderTarget(null),n.render(t)}renderSampleDensity(){let e=this._renderer;if(!e._initialized)return;this.getSampleCountsAsync(),this._sampleDensityQuad||=new jo(new mu);let t=e.toneMapping;e.toneMapping=0;let n=this._sampleDensityQuad;n.material.texture=this._pathTracer.sampleCountTarget,n.material.minCount=this._lastSampleCounts.min,n.material.maxCount=this._lastSampleCounts.max,e.setRenderTarget(null),n.render(e),e.toneMapping=t}renderAuxBuffer(e=`albedo`){let t=this._renderer,n=this._pathTracer;if(!t._initialized||!n.auxTarget)return;this._auxDebugQuad||=new jo(new hu);let r=t.toneMapping;t.toneMapping=0;let i=this._auxDebugQuad;i.material.texture=n.auxTarget,i.material.showNormal=e===`normal`,t.setRenderTarget(null),i.render(t),t.toneMapping=r}dispose(){this._pathTracer.dispose(),this._denoiser?.dispose(),this._upscaler?.dispose(),this._bvhData.dispose(),this._bvhData.textureAtlas.dispose(),this._environmentCache.dispose(),this._backgroundCache.dispose(),this._lowResTarget.dispose(),this._blitQuad.dispose(),this._blitQuad.material.dispose(),this._atlasDebugQuad?.dispose(),this._atlasDebugQuad?.material.dispose(),this._sampleDensityQuad?.dispose(),this._sampleDensityQuad?.material.dispose(),this._auxDebugQuad?.dispose(),this._auxDebugQuad?.material.dispose(),this._debugBoundsQuad!==void 0&&(this._debugBoundsQuad.dispose(),this._debugBoundsQuad.material.dispose())}getRenderTime(){return this._resetTime}};function id(e){e&&(e.autoUpdate=!1,e.needsUpdate=!0)}function ad(e){let t=Number(e?.transmission);return!!(e?.isMeshPhysicalMaterial&&Number.isFinite(t)&&t>0)}function od(e){return!!(e&&Number(e.alphaTest)>0&&(e.map||e.alphaMap)&&!(Number(e.transmission)>0))}function sd(e){return ad(e)?(e.opacity=1,e.transparent=!1,e.depthWrite=!0,e.needsUpdate=!0,!0):!1}function cd(e,t){return!ad(e)||!t?!1:(t.transmission=0,t.transparent=!0,t.opacity=.5,t.depthWrite=!1,t.needsUpdate=!0,!0)}function ld(e,t=30,n=85){let r=Math.max(1,n-t);return .86+.12*Math.min(1,Math.max(0,(Number(e)-t)/r))}var ud=.9,dd=new y({color:16777215,roughness:.88,metalness:0,side:2});dd.color.multiplyScalar(ud);var fd=new o({color:1118481,wireframe:!0,side:2}),pd=new xe({color:1118481}),md=new o({color:16726832,side:2,depthWrite:!0,depthTest:!0,toneMapped:!1}),hd=new xe({color:60159,depthTest:!1,depthWrite:!1,toneMapped:!1}),gd=new xe({color:16726832,depthTest:!1,depthWrite:!1,toneMapped:!1}),_d=new h({color:2152811,size:6,sizeAttenuation:!1,depthTest:!1}),vd=new h({color:16722731,size:6,sizeAttenuation:!1,depthTest:!1}),yd=new h({color:16711892,size:6,sizeAttenuation:!1,depthTest:!1}),bd=new WeakMap,xd=new Set;function Sd(e){if(!e?.clone)return dd;let t=bd.get(e);if(t)return t.color?.set(16777215).multiplyScalar(ud),t;let n=e.clone();return n.color?.set(16777215).multiplyScalar(ud),n.emissive?.set(0),`roughness`in n&&(n.roughness=.88),`metalness`in n&&(n.metalness=0),od(e)||(n.map=null),n.emissiveMap=null,cd(e,n),n.needsUpdate=!0,bd.set(e,n),xd.add(n),n}function Cd(e){return xd.has(e)}function wd(){xd.forEach(e=>e.dispose()),xd.clear()}function Td(e){return Array.isArray(e)?e.map(Sd):Sd(e)}function Ed(e,t){ud=e,dd.color.set(16777215).multiplyScalar(e),t?.traverse(t=>{if(!t.isMesh)return;let n=Array.isArray(t.material)?t.material:[t.material];for(let t of n)t?.color?.set(16777215).multiplyScalar(e)})}var Dd=new class extends Oe{setupDiffuseColor(e){super.setupDiffuseColor(e),ct.rgb.assign(St(1))}setupOutput(e,t){let n=ht(t.rgb,St(.2126,.7152,.0722)),r=ot(.1,n);return super.setupOutput(e,Ve(St(r).mul(8),t.a))}}({color:16777215,side:2,toneMapped:!1}),Od=new o({color:16777215,transparent:!0,opacity:.18,side:2,depthWrite:!1,toneMapped:!1}),kd=new Map,Ad=new Set;function jd(e){if(kd.has(e))return kd.get(e);let t=Dd.clone();return t.map=e.map??null,t.alphaMap=e.alphaMap??null,t.alphaTest=Number(e.alphaTest)>0?Number(e.alphaTest):.5,t.opacity=e.opacity??1,t.needsUpdate=!0,kd.set(e,t),Ad.add(t),t}function Md(e){return Ad.has(e)}function Nd(){for(let e of Ad)e.dispose();kd.clear(),Ad.clear()}function Pd(e){return e?Number.isFinite(Number(e.opacity))&&Number(e.opacity)<.999||Number.isFinite(Number(e.transmission))&&Number(e.transmission)>0:!1}function Fd(e){let t=Array.isArray(e)?e:[e];return t.length>0&&t.every(Pd)}function Id(e){return(Array.isArray(e)?e:[e]).some(od)}function Ld(e){return Array.isArray(e)?e.map(Ld):od(e)?jd(e):Pd(e)?Od:Dd}function Rd(e,t,n=null){if(Pd(e)){if(sd(e)){Number.isFinite(n)&&(e.transmission=n);return}e.transparent=!0,e.opacity=t,e.depthWrite=!1,`roughness`in e&&(e.roughness=.16),`metalness`in e&&(e.metalness=.02),e.needsUpdate=!0}}var zd=.65;function Bd(){id(j.shadow)}Bd();function Vd(){M.ground&&F.remove(M.ground);let t=new re(M.maxModelSize*10,M.maxModelSize*10),n=new e({color:0,opacity:zd});M.ground=new te(t,n),M.ground.rotation.x=-Math.PI/2,M.ground.position.set(M.modelCenter.x,.001,M.modelCenter.z),M.ground.receiveShadow=!0,F.add(M.ground)}Gt.addEventListener(`input`,Ud),Kt.addEventListener(`input`,Ud);function Hd(){let e=Ee.degToRad(Number(Gt.value)),t=Ee.degToRad(Number(Kt.value)),n=Math.cos(t);return new x(Math.cos(e)*n,Math.sin(t),Math.sin(e)*n)}function Ud(){if(!M.model)return;let e=Hd(),t=M.maxModelSize*3;j.position.copy(M.modelCenter).addScaledVector(e,t),j.target.position.copy(M.modelCenter),j.target.updateMatrixWorld(),j.updateMatrixWorld();let n=M.maxModelSize*.9;j.shadow.camera.left=-n,j.shadow.camera.right=n,j.shadow.camera.top=n,j.shadow.camera.bottom=-n,j.shadow.camera.near=M.maxModelSize*.01,j.shadow.camera.far=M.maxModelSize*8,j.shadow.camera.updateProjectionMatrix(),Bd(),xt(e)}function Wd(e){M.exportedSun=e??null,M.hasImportedSun=!1;let t=ke(e);if(!t||!M.model)return!1;let n=new x(...t).transformDirection(M.model.matrixWorld);if(![n.x,n.y,n.z].every(Number.isFinite)||n.y<=0)return!1;let{azimuth:r,height:i}=bt(n.toArray());return Gt.value=String(r),Kt.min=String(Math.min(5,Math.floor(i))),Kt.max=String(Math.max(85,Math.ceil(i))),Kt.value=String(i),M.hasImportedSun=!0,Ud(),!0}qt.addEventListener(`change`,()=>{j.shadow.intensity=+!!qt.checked,M.ground&&(M.ground.visible=qt.checked),qt.checked&&Bd(),Dd.needsUpdate=!0});var Gd=document.querySelector(`#startMessage`),Kd=document.querySelector(`#startMessageText`),qd=Kd.textContent;function Jd(){Kd.textContent=qd,Gd.classList.remove(`error`)}function Yd(e){Kd.textContent=e,Gd.classList.add(`error`),Tt.classList.remove(`hidden`)}function Xd(){Kd.textContent=`OPENING MODEL…`,Gd.classList.remove(`error`),Tt.classList.remove(`hidden`)}function Zd(e){sn&&(sn.textContent=e,sn.style.opacity=`1`,clearTimeout(Zd.timeout),Zd.timeout=setTimeout(()=>{sn.style.opacity=`.38`},5e3))}function Qd(e){let t=document.createElement(`div`);return t.textContent=e,t.innerHTML}var $d=null,ef=getComputedStyle(document.documentElement).getPropertyValue(`--bg`).trim()||`#efefed`,tf=new he(ef),$=null,nf=null,rf=null,af=null,of=null,sf=1,cf=null,lf=!1,uf=!1,df=!1,ff=0,pf=0,mf=!1,hf=null,gf=0,_f=new Map,vf=()=>[...document.querySelectorAll(`[data-navigation-mode], [data-view]`),Rt,zt,Bt,Jt,Et].filter(Boolean);function yf(){Qt.textContent=M.pathTracerActive?uf?`RESUME`:`PAUSE`:`PATH TRACER`,Qt.classList.toggle(`active`,M.pathTracerActive),Qt.setAttribute(`aria-pressed`,String(M.pathTracerActive))}function bf(e){e&&M.navigationMode===`fly`&&document.querySelector(`[data-navigation-mode="orbit"]`)?.click(),M.pathTracerActive=e,M.controls.enabled=!e&&M.navigationMode!==`fly`;for(let t of vf())e?(_f.set(t,t.disabled),t.disabled=!0):t.disabled=_f.get(t)??!1;e||_f.clear()}async function xf(){let e=je();if(nf&&$d===e.url)return nf;let{texture:t,sunDirection:n}=await Be(e);return rf=n,nf?.dispose(),nf=t,$d=e.url,t}function Sf(){rf&&(F.environmentRotation.setFromQuaternion(new m().setFromUnitVectors(rf,Hd())),$?.updateEnvironment())}function Cf(){let e=Xe();F.environment=e??of,F.environmentIntensity=e?.2:sf,e?xt(Hd()):cf?F.environmentRotation.copy(cf):F.environmentRotation.set(0,0,0),of=null,cf=null,af&&=(F.background=af,null),$e.visible=!0,j.visible=!0,M.ground&&hf&&(M.ground.material.dispose(),M.ground.material=hf,hf=null)}async function wf(){if(M.pathTracerActive||!M.model||M.sectionEnabled)return;M.currentMode!==`original`&&document.querySelector(`[data-mode="original"]`)?.click(),lf=!0,uf=!1;let e=++gf;bf(!0),Qt.setAttribute(`aria-busy`,`true`),yf(),Zd(`PATH TRACER · loading HDRI…`),of=F.environment,sf=F.environmentIntensity,cf=F.environmentRotation.clone();try{let t=await xf();if(e!==gf||!M.model)return;F.environment=t,F.environmentIntensity=1,Sf(),$e.visible=!1,j.visible=!1,af=F.background.clone(),F.background=tf,M.ground&&(hf=M.ground.material,M.ground.material=new y({color:tf,roughness:.94,metalness:0,side:2}));let n=new rd(vt);if(n.maxBounces=6,n.maxTransparentBounces=10,n.filterGlossyFactor=.35,n.multipleImportanceSampling=!0,n.renderDelay=90,n.minSamples=1,n.lowResScale=.25,n.renderScale=1,Zd(`PATH TRACER · preparing scene…`),await new Promise(e=>requestAnimationFrame(e)),e!==gf){n.dispose();return}n.setScene(F,M.camera),$=n,ff=0,df=!1,Zd(`PATH TRACER · refining image…`)}catch(t){if(e!==gf)return;console.error(`WebGPU path tracer failed`,t),Tf({restoreStatus:!1}),Zd(`PATH TRACER COULD NOT START: ${t.message}`)}finally{e===gf&&(lf=!1,Qt.removeAttribute(`aria-busy`))}}Qt?.addEventListener(`click`,()=>{M.pathTracerActive?$&&!lf&&(uf=!uf,$.pause=uf,yf(),Zd(uf?`PATH TRACER · paused at ${Math.floor(ff)} samples`:`PATH TRACER · refining image…`)):wf()});function Tf({restoreStatus:e=!0}={}){(M.pathTracerActive||$)&&(++gf,$?.dispose(),$=null,lf=!1,uf=!1,ff=0,Qt.removeAttribute(`aria-busy`),Cf(),bf(!1),yf(),Of(),e&&Zd(`WebGPU preview`))}function Ef(){$&&(df=!0,uf=!1,$.pause=!1,yf())}function Df(){$&&($.updateLights(),uf=!1,$.pause=!1,yf())}function Of(){Qt&&(Qt.disabled=!M.model||M.sectionEnabled||!navigator.gpu,Qt.title=M.sectionEnabled?`Turn off SECTION before using PATH TRACER`:`Progressive WebGPU path tracing`)}async function kf(){throw Error(`Render Station requires WebGL`)}function Af(){$?.updateCamera()}function jf(){return M.pathTracerActive?{preparing:lf,compiling:!1,paused:uf,samples:ff}:null}function Mf(){if(!M.pathTracerActive)return!1;if(!$||lf)return!0;df&&($.setScene(F,M.camera),df=!1,ff=0),uf||$.renderSample();let e=performance.now();if(!mf&&e-pf>1200){pf=e,mf=!0;let t=$;t.getSampleCountsAsync().then(e=>{$===t&&(ff=e.avg)}).catch(e=>console.warn(`Sample count unavailable`,e)).finally(()=>{mf=!1})}return!0}Gt?.addEventListener(`input`,()=>{$&&Sf()}),Kt?.addEventListener(`input`,()=>{$&&Sf()}),Yt?.addEventListener(`input`,()=>{$&&queueMicrotask(()=>$?.updateMaterials())}),Of(),yf();function Nf(e,t){e&&e.traverse(e=>{e.isMesh&&t(e)})}function Pf(){M.edgeGroup&&F.remove(M.edgeGroup),M.edgeGroup=new d,M.model.updateMatrixWorld(!0),Nf(M.model,e=>{let t=new _(e.geometry,25),n=new we(t,pd);n.renderOrder=11e3,n.matrixAutoUpdate=!1,n.matrix.copy(e.matrixWorld);let r=e;for(;r.parent&&r.parent!==M.model;)r=r.parent;n.userData.modelGroup=r,M.edgeGroup.add(n)}),F.add(M.edgeGroup),M.edgeGroup.visible=!1}function Ff(){M.edgeGroup?.children.forEach(e=>{e.visible=e.userData.modelGroup?.visible!==!1})}function If(e){let t=0;for(let n=e.length-1,r=0;r<e.length;n=r++){let i=e[n],a=e[r];t+=i.x*a.y-a.x*i.y}return t*.5}function Lf(e,t){let n=!1;for(let r=0,i=t.length-1;r<t.length;i=r++){let a=t[r],o=t[i];a.y>e.y!=o.y>e.y&&e.x<(o.x-a.x)*(e.y-a.y)/(o.y-a.y)+a.x&&(n=!n)}return n}function Rf(e){return typeof e.clone==`function`?e.clone():{x:e.x,y:e.y}}function zf(e,t){return`${Math.min(e,t)}:${Math.max(e,t)}`}function Bf(e,t){return`${e}>${t}`}function Vf({points:e,pointComponentIds:t,edges:n,tolerance:r,includeDiagnostics:i=!1}){let a=Array.from({length:e.length},()=>new Set);for(let[e,t]of n.values())a[e].add(t),a[t].add(e);let o=[],s=0,c=0,l=0;if(i){o=a.map(e=>e.size),s=o.filter(e=>e===1).length,c=o.filter(e=>e>2).length;let e=new Set;for(let t=0;t<a.length;t++)if(o[t]!==2)for(let n of a[t]){let r=zf(t,n);if(e.has(r))continue;l++;let i=t,s=n;for(e.add(r);o[s]===2;){let t=[...a[s]].find(e=>e!==i);if(t===void 0)break;let n=zf(s,t);if(e.has(n))break;e.add(n),i=s,s=t}}}let u=a.map((t,n)=>{let r=e[n];return[...t].sort((t,n)=>{let i=e[t],a=e[n];return Math.atan2(i.y-r.y,i.x-r.x)-Math.atan2(a.y-r.y,a.x-r.x)})}),d=new Set,f=[];for(let[i,a]of n.values())for(let[o,s]of[[i,a],[a,i]]){let i=Bf(o,s);if(d.has(i))continue;let a=[],c=o,l=s,p=!1,m=n.size*2+10;for(let e=0;e<m;e++){d.add(Bf(c,l)),a.push(c);let e=u[l];if(!e||e.length===0)break;let t=e.indexOf(c);if(t<0)break;let n=e[(t-1+e.length)%e.length];if(c=l,l=n,c===o&&l===s){p=!0;break}}if(!p)continue;let h=a.map(t=>Rf(e[t]));if(h.length<3)continue;let g=[];for(let e=0;e<h.length;e++){let t=h[(e-1+h.length)%h.length],n=h[e],i=h[(e+1)%h.length],a=n.x-t.x,o=n.y-t.y,s=i.x-n.x,c=a*(i.y-n.y)-o*s;Math.abs(c)>r*r&&g.push(n)}g.length<3||If(g)>r*r*4&&f.push({points:g,componentId:t[a[0]]})}return{loops:f,neighbours:a,degrees:o,degree1Count:s,branchCount:c,openChainCount:l}}function Hf(e){return{x:e.x,y:e.y,z:e.z}}function Uf(e,t,n){return{x:e.x+(t.x-e.x)*n,y:e.y+(t.y-e.y)*n,z:e.z+(t.z-e.z)*n}}function Wf(e,t){let n=e.x-t.x,r=e.y-t.y,i=e.z-t.z;return n*n+r*r+i*i}function Gf(e,t,n,r,i){let a=[],o=[e,t,n];for(let e=0;e<3;e++){let t=o[e],n=o[(e+1)%3],s=r.distanceToPoint(t),c=r.distanceToPoint(n),l=Math.abs(s)<=i,u=Math.abs(c)<=i;if(l&&u)continue;let d=null;l?d=Hf(t):u?d=Hf(n):s*c<0&&(d=Uf(t,n,s/(s-c))),d&&(a.some(e=>Wf(e,d)<=i*i)||a.push(d))}if(a.length<2)return null;let s=0,c=1,l=-1;for(let e=0;e<a.length;e++)for(let t=e+1;t<a.length;t++){let n=Wf(a[e],a[t]);n>l&&(l=n,s=e,c=t)}return[a[s],a[c]]}function Kf({model:e,sectionPlane:t,triangleComponents:n,planeOrigin:r,axisU:i,axisV:o,tolerance:s,collectGraph:c=!0,includeDiagnostics:l=!1}){let u=new Map,d=[],f=[],p=new Map,m=[],h=new Set,g=new Set;function _(e,t,n){return`${n}|${Math.round(e/s)},${Math.round(t/s)}`}function v(e,t){let n=e.clone().sub(r),c=n.dot(i),l=n.dot(o),p=_(c,l,t);if(u.has(p))return u.get(p);let m=d.length;return d.push(new a(Math.round(c/s)*s,Math.round(l/s)*s)),f.push(t),u.set(p,m),m}function y(e,t,n,r){if(m.push(e.x,e.y,e.z,t.x,t.y,t.z),l&&(h.add(n),g.add(r)),!c)return;let i=v(e,r),a=v(t,r);if(i===a)return;let o=Math.min(i,a),s=Math.max(i,a),u=`${o}:${s}`;p.has(u)||p.set(u,[o,s])}let b=new x,S=new x,C=new x,w=new x,T=new x;return Nf(e,r=>{if(!rt(r,e)||!r.geometry?.attributes?.position)return;let i=r.geometry;i.boundingBox||i.computeBoundingBox();let a=r.matrixWorld.clone().invert(),o=t.clone().applyMatrix4(a);if(i.boundingBox&&!o.intersectsBox(i.boundingBox))return;let c=i.attributes.position,l=i.index,u=s/Math.max(r.matrixWorld.getMaxScaleOnAxis(),1e-9),d=Math.floor(l?l.count/3:c.count/3),f=n.get(r);for(let e=0;e<d;e++){let t=l?l.getX(e*3):e*3,n=l?l.getX(e*3+1):e*3+1,i=l?l.getX(e*3+2):e*3+2;b.fromBufferAttribute(c,t),S.fromBufferAttribute(c,n),C.fromBufferAttribute(c,i);let a=Gf(b,S,C,o,u);a&&(w.set(a[0].x,a[0].y,a[0].z).applyMatrix4(r.matrixWorld),T.set(a[1].x,a[1].y,a[1].z).applyMatrix4(r.matrixWorld),w.distanceToSquared(T)>s*s&&y(w,T,r,f?.[e]??-1))}}),{points:d,pointComponentIds:f,edges:p,rawSegmentPositions:m,intersectedMeshes:h,intersectedComponents:g}}function qf(e,t){let n=e.map(e=>({loop:e.points,componentId:e.componentId,sample:t(e.points),area:Math.abs(If(e.points)),depth:0,parent:-1}));for(let e=0;e<n.length;e++){let t=0,r=-1,i=1/0;for(let a=0;a<n.length;a++)e!==a&&n[a].componentId===n[e].componentId&&(n[a].area<=n[e].area||Lf(n[e].sample,n[a].loop)&&(t++,n[a].area<i&&(r=a,i=n[a].area)));n[e].depth=t,n[e].parent=r}return n}function Jf(e){let t=le.triangulateShape(e,[]);if(t.length){let n=t[0];return new a((e[n[0]].x+e[n[1]].x+e[n[2]].x)/3,(e[n[0]].y+e[n[1]].y+e[n[2]].y)/3)}return e[0].clone()}function Yf({loops:e,planeOrigin:t,axisU:n,axisV:r}){let i=qf(e,Jf),a=[];function o(e){return t.clone().addScaledVector(n,e.x).addScaledVector(r,e.y)}for(let e=0;e<i.length;e++){let t=i[e];if(t.depth%2!=0)continue;let n=t.loop.map(e=>e.clone());le.isClockWise(n)||n.reverse();let r=[];for(let n=0;n<i.length;n++){let a=i[n];if(a.componentId!==t.componentId||a.depth!==t.depth+1||a.parent!==e)continue;let o=a.loop.map(e=>e.clone());le.isClockWise(o)&&o.reverse(),r.push(o)}let s=le.triangulateShape(n,r),c=n.concat(...r);for(let e of s)for(let t of e){let e=o(c[t]);a.push(e.x,e.y,e.z)}}return a}function Xf(e){e?.traverse(e=>e.geometry?.dispose())}function Zf({fillEnabled:e,fillPositions:t,rawSegmentPositions:n,debugEnabled:r,points:i,degrees:a,planeOrigin:o,axisU:s,axisV:c}){let l=new d;if(e&&t.length){let e=new ce;e.setAttribute(`position`,new g(t,3));let n=new te(e,md);n.renderOrder=10500,n.raycast=()=>{},l.add(n)}if(!e&&n.length){let e=new ce;e.setAttribute(`position`,new g(n,3));let t=new we(e,gd);t.renderOrder=10505,t.raycast=()=>{},l.add(t)}if(!r)return l;let f=new ce;f.setAttribute(`position`,new g(n,3));let p=new we(f,hd);p.renderOrder=10510,p.raycast=()=>{},l.add(p);let m=[[],[],[]];i.forEach((e,t)=>{let n=a[t]===1?1:a[t]>2?2:0,r=o.clone().addScaledVector(s,e.x).addScaledVector(c,e.y);m[n].push(r.x,r.y,r.z)});let h=[_d,vd,yd];return m.forEach((e,t)=>{if(!e.length)return;let n=new ce;n.setAttribute(`position`,new g(e,3));let r=new u(n,h[t]);r.renderOrder=10520,r.raycast=()=>{},l.add(r)}),l}function Qf(){if(M.sectionTriangleComponents=new WeakMap,M.sectionTopologyComponentCount=0,M.sectionTopologyReady=!1,!M.model)return;M.model.updateMatrixWorld(!0);let e=Math.max(M.maxModelSize*1e-5,1e-6),t=[],n=0;Nf(M.model,e=>{if(!e.geometry?.attributes?.position)return;let r=e.geometry,i=r.attributes.position,a=r.index?Math.floor(r.index.count/3):Math.floor(i.count/3),o=new Int32Array(a);M.sectionTriangleComponents.set(e,o),t.push({mesh:e,geometry:r,start:n,triangleCount:a,components:o}),n+=a});let r=new Int32Array(n),i=new Uint8Array(n);for(let e=0;e<n;e++)r[e]=e;function a(e){let t=e;for(;r[t]!==t;)t=r[t];for(;r[e]!==e;){let n=r[e];r[e]=t,e=n}return t}function o(e,t){let n=a(e),o=a(t);if(n!==o){if(i[n]<i[o]){let e=n;n=o,o=e}r[o]=n,i[n]===i[o]&&i[n]++}}let s=new Map,c=new Map,l=new Map,u=0,d=new x;function f(t,n,r){d.fromBufferAttribute(t,n).applyMatrix4(r);let i=Math.round(d.x/e)+`,`+Math.round(d.y/e)+`,`+Math.round(d.z/e);if(s.has(i))return s.get(i);let a=u++;return s.set(i,a),a}function p(e,t,n){if(e===t)return;let r=Math.min(e,t),i=Math.max(e,t),a=r+`:`+i;c.has(a)?o(n,c.get(a)):c.set(a,n)}function m(e,t,n){let r=e.uuid+`:`+t;l.has(r)?o(n,l.get(r)):l.set(r,n)}for(let e of t){let t=e.geometry,n=t.attributes.position,r=t.index;for(let t=0;t<e.triangleCount;t++){let i=r?r.getX(t*3):t*3,a=r?r.getX(t*3+1):t*3+1,o=r?r.getX(t*3+2):t*3+2,s=f(n,i,e.mesh.matrixWorld),c=f(n,a,e.mesh.matrixWorld),l=f(n,o,e.mesh.matrixWorld),u=e.start+t;p(s,c,u),p(c,l,u),p(l,s,u),m(e.mesh,s,u),m(e.mesh,c,u),m(e.mesh,l,u)}}let h=new Map;for(let e of t)for(let t=0;t<e.triangleCount;t++){let n=a(e.start+t);h.has(n)||h.set(n,M.sectionTopologyComponentCount++),e.components[t]=h.get(n)}M.sectionTopologyReady=!0}function $f(){M.sectionCapFrame===null&&(M.sectionCapFrame=requestAnimationFrame(()=>{M.sectionCapFrame=null,tp()}))}function ep(){on.textContent=``,M.sectionCapGroup&&(F.remove(M.sectionCapGroup),Xf(M.sectionCapGroup),M.sectionCapGroup=null)}function tp(){if(ep(),!M.sectionEnabled||!M.model||!M.modelBounds)return;M.model.updateMatrixWorld(!0);let e=Math.max(M.maxModelSize*1e-5,1e-6),t=M.sectionPlane.coplanarPoint(new x),n=M.sectionPlane.normal.clone().normalize(),r=Math.abs(n.y)<.9?new x(0,1,0):new x(1,0,0),i=new x().crossVectors(r,n).normalize(),a=new x().crossVectors(n,i).normalize(),o=nn.checked,s=rn.checked||o;s&&!M.sectionTopologyReady&&Qf();let{points:c,pointComponentIds:l,edges:u,rawSegmentPositions:d,intersectedMeshes:f,intersectedComponents:p}=Kf({model:M.model,sectionPlane:M.sectionPlane,triangleComponents:M.sectionTriangleComponents,planeOrigin:t,axisU:i,axisV:a,tolerance:e,collectGraph:s,includeDiagnostics:o}),m=[],h=[],g=0,_=0,v=0;s&&({loops:m,degrees:h,degree1Count:g,branchCount:_,openChainCount:v}=Vf({points:c,pointComponentIds:l,edges:u,tolerance:e,includeDiagnostics:o}));let y=rn.checked?Yf({loops:m,planeOrigin:t,axisU:i,axisV:a}):[];M.sectionCapGroup=Zf({fillEnabled:rn.checked,fillPositions:y,rawSegmentPositions:d,debugEnabled:o,points:c,degrees:h,planeOrigin:t,axisU:i,axisV:a}),o&&(on.textContent=[`intersected meshes  ${f.size}`,`surface components  ${M.sectionTopologyComponentCount}`,`cut components      ${p.size}`,`raw segments        ${d.length/6}`,`graph edges         ${u.size}`,`graph nodes         ${c.length}`,`closed loops        ${m.length}`,`cap triangles       ${y.length/9}`,`open chains         ${v}`,`degree-1 nodes      ${g}`,`degree >2 nodes     ${_}`].join(`
`)),F.add(M.sectionCapGroup)}var np=[];function rp(){Ff(),M.sectionEnabled&&$f(),Bd(),Ef()}function ip(e,t,n){lt(e,t),n&&(n.checked=t)}function ap(e){np.forEach(t=>ip(t,e,t.checkbox)),rp()}function op(){kt.replaceChildren(),np.forEach(e=>{let t=document.createElement(`label`);t.className=`group-filter-item`;let n=document.createElement(`input`);n.type=`checkbox`,n.checked=e.visible,n.setAttribute(`aria-label`,e.displayLabel),n.addEventListener(`change`,()=>{ip(e,n.checked,n),rp()});let r=document.createElement(`span`);r.textContent=e.displayLabel,r.title=e.displayLabel,e.checkbox=n,t.append(n,r),kt.appendChild(t)})}function sp(e){np=mt(e),op(),Ot.hidden=np.length===0}function cp(){np=[],kt.replaceChildren(),Dt.hidden=!0,Ot.hidden=!0,Ot.setAttribute(`aria-expanded`,`false`)}function lp(){np.forEach(e=>lt(e,e.visible)),Ff(),Bd()}function up(){return np.map(e=>({sessionKey:e.sessionKey,visible:e.visible}))}function dp(e){let t=Ke(np,e);return np.forEach(e=>{e.checkbox&&(e.checkbox.checked=e.visible)}),t&&rp(),t}At.addEventListener(`click`,()=>ap(!0)),jt.addEventListener(`click`,()=>ap(!1));var fp=new Le;fp.clipShadows=!0,F.add(fp),Wt.addEventListener(`click`,()=>{Tf(),M.sectionEnabled=!M.sectionEnabled,Wt.classList.toggle(`active`,M.sectionEnabled),Wt.setAttribute(`aria-pressed`,String(M.sectionEnabled)),M.sectionEnabled?pp():mp(),Of()}),document.querySelectorAll(`[data-axis]`).forEach(e=>{e.addEventListener(`click`,()=>{M.sectionAxis=e.dataset.axis,e.before(tn),document.querySelectorAll(`[data-axis]`).forEach(t=>{t.classList.toggle(`active`,t===e),t.setAttribute(`aria-pressed`,String(t===e))}),pp()})}),en.addEventListener(`input`,pp),tn.addEventListener(`click`,()=>{let e=tn.getAttribute(`aria-pressed`)!==`true`;tn.setAttribute(`aria-pressed`,String(e)),pp()}),nn.addEventListener(`change`,()=>{$f()}),rn.addEventListener(`change`,()=>{$f()}),an.forEach(e=>{e.addEventListener(`click`,()=>{let t=e.dataset.sectionColor;md.color.set(t),gd.color.set(t),md.needsUpdate=!0,gd.needsUpdate=!0,an.forEach(t=>{t.classList.toggle(`active`,t===e),t.setAttribute(`aria-pressed`,String(t===e))}),$f()})});function pp(){if(!M.modelBounds)return;let e=Number(en.value)/1e3,t,n,r=new x;M.sectionAxis===`x`&&(t=M.modelBounds.min.x,n=M.modelBounds.max.x,r.set(-1,0,0)),M.sectionAxis===`y`&&(t=M.modelBounds.min.y,n=M.modelBounds.max.y,r.set(0,-1,0)),M.sectionAxis===`z`&&(t=M.modelBounds.min.z,n=M.modelBounds.max.z,r.set(0,0,-1)),tn.getAttribute(`aria-pressed`)===`true`&&r.multiplyScalar(-1);let i=Ee.lerp(t,n,e),a=new x;M.sectionAxis===`x`&&(a.x=i),M.sectionAxis===`y`&&(a.y=i),M.sectionAxis===`z`&&(a.z=i),M.sectionPlane.setFromNormalAndCoplanarPoint(r,a),mp()}function mp(){if(M.model){fp.enabled=M.sectionEnabled,fp.clippingPlanes=M.sectionEnabled?[M.sectionPlane]:[];for(let e of[M.model,M.edgeGroup])e&&(M.sectionEnabled&&e.parent!==fp?fp.attach(e):!M.sectionEnabled&&e.parent===fp&&F.attach(e));$f()}}var hp=null,gp=document.querySelector(`#blackBackButton`),_p=at,vp=12630964,yp=8947848,bp=.005,xp=.02,Sp=null,Cp=Re.whiteSurface,wp=Re.whiteGlassTransparency;function Tp(){if(!Sp||M.pathTracerActive)return;let e=Sp;vt.toneMappingExposure=e.exposure,vt.domElement.style.filter=e.brightness===1&&e.contrast===1&&e.saturation===1?`none`:`brightness(${e.brightness}) contrast(${e.contrast}) saturate(${e.saturation})`,j.intensity=e.sunStrength,dt.set(15724525).multiplyScalar(e.backdrop),Dp();let t=M.currentMode===`white`||M.currentMode===`hidden`;$e.intensity=M.currentMode===`renaissance`?0:t?e.skyFill:at,$e.groundColor.set(t?vp:yp),t&&$e.groundColor.multiplyScalar(e.groundBounce),e.whiteSurface!==Cp&&(Ed(e.whiteSurface,t?M.model:null),Cp=e.whiteSurface),t&&e.whiteGlassTransparency!==wp&&(Ep(),wp=e.whiteGlassTransparency),Od.opacity=1-e.bwGlassTransparency/100}function Ep(e=null){let t=[`original`,`white`,`hidden`].includes(M.currentMode);if(!M.model||!t)return;e?.isTrusted&&[`white`,`hidden`].includes(M.currentMode)&&Sp&&Pe(`whiteGlassTransparency`,Number(Yt.value));let n=1-Number(Yt.value)/100,r=Sp&&[`white`,`hidden`].includes(M.currentMode)?1-Sp.whiteGlassTransparency/100:n,i=e?.type===`input`?ld(Yt.value,Number(Yt.min),Number(Yt.max)):null;M.originalMaterials.forEach(e=>{let t=Array.isArray(e)?e:[e],a=M.currentMode===`original`?[]:Td(e),o=Array.isArray(a)?a:[a];t.forEach(e=>{Pd(e)&&Rd(e,n,i)}),o.forEach(e=>{Pd(e)&&Rd(e,r,i)})}),Sp&&[`white`,`hidden`].includes(M.currentMode)&&(wp=Sp.whiteGlassTransparency)}Yt?.addEventListener(`input`,Ep);function Dp(){let e=!!M.model&&M.currentMode===`renaissance`&&gp.getAttribute(`aria-pressed`)===`true`;e?F.background.set(0):F.background.copy(dt),document.documentElement.classList.toggle(`black-back-active`,e)}gp.addEventListener(`click`,()=>{let e=gp.getAttribute(`aria-pressed`)!==`true`;gp.setAttribute(`aria-pressed`,String(e)),gp.classList.toggle(`active`,e),Dp()}),document.querySelectorAll(`[data-mode]`).forEach(e=>{e.addEventListener(`click`,()=>{Op(e.dataset.mode)})});function Op(e){Tf(),M.currentMode=e,gp.hidden=e!==`renaissance`,gp.disabled=!M.model,Dp();let t=e===`wireframe`,n=[`original`,`white`,`hidden`].includes(e);Yt&&(Yt.disabled=!n),t&&hp===null&&(hp=qt.checked,qt.checked=!1,qt.dispatchEvent(new Event(`change`))),!t&&hp!==null&&(qt.checked=hp,qt.dispatchEvent(new Event(`change`)),hp=null),[Gt,Kt,qt].forEach(e=>{e.disabled=t}),$t?.classList.toggle(`disabled`,t),document.querySelectorAll(`[data-mode]`).forEach(t=>{t.classList.toggle(`active`,t.dataset.mode===e),t.setAttribute(`aria-pressed`,String(t.dataset.mode===e))}),M.model&&(M.edgeGroup.visible=!1,j.shadow.normalBias=e===`white`||e===`hidden`?bp:xp,$e.groundColor.set(e===`white`||e===`hidden`?vp:yp),e===`renaissance`?($e.intensity=0,M.ground&&(M.ground.material.opacity=1)):($e.intensity=e===`white`||e===`hidden`?_p:at,M.ground&&(M.ground.material.opacity=zd)),Nf(M.model,t=>{let n=M.originalMaterials.get(t.uuid);switch(e){case`original`:t.material=n,t.castShadow=!Fd(n),t.visible=!0;break;case`white`:t.material=Td(n),t.castShadow=!Fd(n),t.visible=!0;break;case`hidden`:t.material=Td(n),t.castShadow=!Fd(n),t.visible=!0,M.edgeGroup.visible=!0;break;case`wireframe`:t.material=fd,t.castShadow=!0,t.visible=!0;break;case`renaissance`:{let e=M.originalMaterials.get(t.uuid);t.material=Ld(e),t.castShadow=!Fd(e)||Id(e),t.visible=!0;break}}}),Ep(),lp(),mp(),Tp())}Sp=Me(e=>{Sp=e,Tp()});function kp(e,t){Array.isArray(t)?t.forEach(t=>kp(e,t)):t&&e.add(t)}function Ap(e){let t=new Set([...e].filter(e=>e?.isTexture)),n=new Set;for(let e of t){let t=e.image;t&&typeof t.close==`function`&&n.add(t)}t.forEach(e=>e.dispose()),n.forEach(e=>e.close())}function jp({textures:e=[],materials:t=[],geometries:n=[]}={}){Ap(e);let r=new Set;t.forEach(e=>kp(r,e)),r.forEach(e=>e.dispose()),new Set(n).forEach(e=>e?.dispose())}function Mp(e,{materials:t=[],geometries:n=[],excludedMaterials:r=[],excludeMaterial:i=()=>!1}={}){let a=new Set,o=new Set,s=new Set,c=new Set(r),l=e=>c.has(e)||i(e);e?.traverse(e=>{e.geometry&&a.add(e.geometry),kp(o,e.material)}),n.forEach(e=>{e&&a.add(e)}),t.forEach(e=>kp(o,e));for(let e of o)if(!l(e))for(let t of Object.values(e))t?.isTexture&&s.add(t);Ap(s),o.forEach(e=>{l(e)||e.dispose()}),a.forEach(e=>e.dispose())}function Np(e){Mp(e)}export{ln as $,Bd as A,dd as B,Jd as C,Wd as D,Xd as E,Cd as F,zt as G,hn as H,Od as I,Nt as J,Jt as K,Dd as L,wd as M,pd as N,Ud as O,Md as P,Ot as Q,md as R,Qd as S,Yd as T,mn as U,fd as V,gn as W,Ft as X,un as Y,Dt as Z,jf as _,Kt as _t,Op as a,Rt as at,Of as b,Xt as bt,sp as c,tn as ct,dp as d,en as dt,cn as et,ep as f,qt as ft,Tf as g,Gt as gt,kf as h,Tt as ht,Ap as i,Lt as it,Nd as j,Vd as k,cp as l,Ht as lt,Nf as m,It as mt,Mp as n,Bt as nt,mp as o,dn as ot,Pf as p,Et as pt,Pt as q,jp as r,Vt as rt,pp as s,Wt as st,Np as t,Mt as tt,up as u,Ut as ut,Mf as v,Yt as vt,Zd as w,Df as x,Af as y,Zt as yt,gd as z};