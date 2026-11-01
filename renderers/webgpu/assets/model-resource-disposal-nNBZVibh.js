import{$i as e,$r as t,Bi as n,C as r,Ci as i,Ct as a,Hi as o,Kt as s,On as c,Qt as l,St as u,T as d,U as f,V as p,Vi as m,Xt as h,Zr as g,Zt as _,_ as v,_i as y,aa as b,ar as x,b as S,bi as C,cr as w,dn as ee,dr as te,dt as ne,et as re,fn as T,hn as ie,ia as E,ir as ae,la as oe,ln as se,lr as ce,mn as le,ni as ue,oa as de,oi as fe,or as pe,qt as me,ri as he,si as ge,st as _e,tr as ve,ua as ye,ut as be,vi as xe,w as Se,wa as Ce,wi as we,wn as Te,xn as Ee,y as De,yi as Oe,yr as ke}from"./three.module-C2LELW4B.js";import{$ as Ae,A as je,C as Me,Ct as D,F as Ne,G as Pe,H as Fe,I as Ie,J as Le,K as Re,L as ze,M as Be,N as Ve,P as He,Q as O,R as Ue,St as We,U as Ge,V as Ke,X as qe,Z as k,_ as Je,_t as Ye,a as Xe,at as Ze,b as Qe,bt as $e,ct as et,d as tt,dt as nt,et as rt,f as it,ft as at,gt as A,ht as ot,i as st,it as ct,j as lt,l as ut,lt as j,mt as dt,nt as ft,o as pt,ot as mt,p as ht,pt as gt,q as _t,r as vt,rt as yt,s as M,st as bt,tt as xt,ut as St,v as N,vt as Ct,xt as wt,y as P,yt as Tt,z as Et}from"./raycast-hit-filter-CwuqNiNx.js";import{t as Dt}from"./HDRLoader-CiyjgvYD.js";var Ot=document.querySelector(`#startScreen`),kt=document.querySelector(`#showAllButton`),At=document.querySelector(`#groupMenu`),jt=document.querySelector(`#groupMenuButton`),Mt=document.querySelector(`#groupList`),Nt=document.querySelector(`#showAllGroupsButton`),Pt=document.querySelector(`#hideAllGroupsButton`),Ft=document.querySelector(`#openButton`),It=document.querySelector(`#demoButton`),Lt=document.querySelector(`#demo2Button`);document.querySelector(`#openAgain`);var Rt=document.querySelector(`#fileInput`),zt=document.querySelector(`#sidePanel`),Bt=document.querySelector(`#panelButton`),Vt=document.querySelector(`#perspectiveButton`),Ht=document.querySelector(`#axonButton`),Ut=document.querySelector(`#orthoButton`),Wt=document.querySelector(`#orthoMenu`),Gt=document.querySelector(`#sectionMenu`),Kt=document.querySelector(`#sectionMenuButton`),qt=document.querySelector(`#sectionButton`),Jt=document.querySelector(`#sunAngle`),Yt=document.querySelector(`#sunHeight`),Xt=document.querySelector(`#shadowToggle`),Zt=document.querySelector(`#cameraFov`),Qt=document.querySelector(`#transparency`),$t=document.querySelector(`#windowLightsToggle`),en=document.querySelector(`#windowLightsIntensity`),tn=document.querySelector(`#photo1Button`),nn=document.querySelector(`#lightSection`),rn=document.querySelector(`#sectionSlider`),an=document.querySelector(`#sectionFlip`),on=document.querySelector(`#sectionDebug`),sn=document.querySelector(`#sectionFill`),cn=document.querySelectorAll(`[data-section-color]`),ln=document.querySelector(`#sectionDebugStats`),un=document.querySelector(`#status`),dn=document.querySelector(`#modelStats`),fn=document.querySelector(`#materialList`),pn=document.querySelector(`#elementTypeList`),mn=document.querySelector(`#retainedControls`),hn=`enabled`,gn=`disabled`;function _n(e){return e?.parser?.json?.asset?.extras?.dropView?.materialWorkbench?.policy===`disabled`?gn:hn}function vn({embedded:e=!1,policy:t=hn,sourceKind:n=null}={}){if(e)return{visible:!1,canEdit:!1,canSave:!1};let r=t!==gn;return{visible:!0,canEdit:r,canSave:r&&n===`user`}}function yn(e){return e==null}var bn=1.25,xn=65535,Sn=2**-24,Cn=Symbol(`SKIP_GENERATION`),wn={strategy:0,maxDepth:40,targetLeafSize:10,useSharedArrayBuffer:!1,setBoundingBox:!0,onProgress:null,indirect:!1,verbose:!0,range:null,[Cn]:!1};function F(e,t,n){return n.min.x=t[e],n.min.y=t[e+1],n.min.z=t[e+2],n.max.x=t[e+3],n.max.y=t[e+4],n.max.z=t[e+5],n}function Tn(e){let t=-1,n=-1/0;for(let r=0;r<3;r++){let i=e[r+3]-e[r];i>n&&(n=i,t=r)}return t}function En(e,t,n){for(let r=0;r<3;r++){let i=t[e+2*r],a=t[e+2*r+1],o=i-a,s=i+a;o<n[r]&&(n[r]=o),s>n[r+3]&&(n[r+3]=s)}}function Dn(e){let t=e[3]-e[0],n=e[4]-e[1],r=e[5]-e[2];return 2*(t*n+n*r+r*t)}function I(e,t){return t[e+15]===xn}function L(e,t){return t[e+6]}function R(e,t){return t[e+14]}function z(e){return e+8}function B(e,t){return e+t[e+6]*8}function On(e,t){return t[e+7]}function V(e){return e}function kn(e,t,n,r,i){let a=1/0,o=1/0,s=1/0,c=-1/0,l=-1/0,u=-1/0,d=1/0,f=1/0,p=1/0,m=-1/0,h=-1/0,g=-1/0,_=e.offset||0;for(let r=(t-_)*6,i=(t+n-_)*6;r<i;r+=6){let t=e[r+0],n=e[r+1],i=t-n,_=t+n;i<a&&(a=i),_>c&&(c=_),t<d&&(d=t),t>m&&(m=t);let v=e[r+2],y=e[r+3],b=v-y,x=v+y;b<o&&(o=b),x>l&&(l=x),v<f&&(f=v),v>h&&(h=v);let S=e[r+4],C=e[r+5],w=S-C,ee=S+C;w<s&&(s=w),ee>u&&(u=ee),S<p&&(p=S),S>g&&(g=S)}r[0]=a,r[1]=o,r[2]=s,r[3]=c,r[4]=l,r[5]=u,i[0]=d,i[1]=f,i[2]=p,i[3]=m,i[4]=h,i[5]=g}var An=8,jn=8,Mn=new Int32Array(An),Nn=new Float32Array(48),Pn=new Float32Array(48),Fn=new Float32Array(6),In=new Float32Array(6),Ln=new Int32Array(jn),Rn=new Float32Array(48);function zn(e,t,n,r){for(let i=0;i<3;i++){let a=t[e+2*i],o=t[e+2*i+1],s=a-o,c=a+o;s<n[r+i]&&(n[r+i]=s),c>n[r+i+3]&&(n[r+i+3]=c)}}function Bn(e,t){let n=e[t+3]-e[t],r=e[t+4]-e[t+1],i=e[t+5]-e[t+2];return 2*(n*r+r*i+i*n)}function Vn(e,t,n,r,i,a){let o=-1,s=0;if(a===0)o=Tn(t),o!==-1&&(s=(t[o]+t[o+3])/2);else if(a===1)o=Tn(e),o!==-1&&(s=Hn(n,r,i,o));else if(a===2){let a=Dn(e),c=bn*i,l=n.offset||0,u=(r-l)*6,d=(r+i-l)*6;for(let e=0;e<3;e++){let r=t[e],l=(t[e+3]-r)/An;if(i<jn){for(let t=0;t<i;t++){let r=u+t*6,i=n[r+2*e],a=t;for(;a>0&&n[Ln[a-1]+2*e]>i;)Ln[a]=Ln[a-1],a--;Ln[a]=r}for(let e=0;e<3;e++)Fn[e]=1/0,Fn[e+3]=-1/0,In[e]=1/0,In[e+3]=-1/0;for(let e=i-1;e>=0;e--)En(Ln[e],n,In),Rn.set(In,e*6);for(let t=0;t<i-1;t++){En(Ln[t],n,Fn);let r=n[Ln[t+1]+2*e];if(n[Ln[t]+2*e]===r)continue;let l=t+1,u=i-l,d=Dn(Fn)/a,f=Bn(Rn,l*6)/a,p=1+bn*(d*l+f*u);p<c&&(o=e,c=p,s=r)}}else{for(let e=0;e<An;e++){Mn[e]=0;for(let t=0;t<3;t++)Nn[e*6+t]=1/0,Nn[e*6+t+3]=-1/0}for(let t=u;t<d;t+=6){let i=~~((n[t+2*e]-r)/l);i>=An&&(i=7),Mn[i]++,zn(t,n,Nn,i*6)}for(let e=0;e<6;e++)Pn[42+e]=Nn[42+e];for(let e=6;e>=0;e--){let t=e*6,n=t+6;for(let e=0;e<3;e++)Pn[t+e]=Math.min(Nn[t+e],Pn[n+e]),Pn[t+e+3]=Math.max(Nn[t+e+3],Pn[n+e+3])}let t=0;for(let n=0;n<7;n++){let u=n*6,d=Mn[n];if(d!==0)for(let e=0;e<3;e++)t===0?(Fn[e]=Nn[u+e],Fn[e+3]=Nn[u+e+3]):(Fn[e]=Math.min(Fn[e],Nn[u+e]),Fn[e+3]=Math.max(Fn[e+3],Nn[u+e+3]));t+=d;let f=0,p=0;t!==0&&(f=Dn(Fn)/a);let m=i-t;m!==0&&(p=Bn(Pn,u+6)/a);let h=1+bn*(f*t+p*m);h<c&&(o=e,c=h,s=r+l+n*l)}}}}else console.warn(`BVH: Invalid build strategy value ${a} used.`);return{axis:o,pos:s}}function Hn(e,t,n,r){let i=0,a=e.offset;for(let o=t,s=t+n;o<s;o++)i+=e[(o-a)*6+r*2];return i/n}function Un(e,t,n,r,i,a){let o=r,s=r+i-1,c=a.pos,l=a.axis*2,u=n.offset||0;for(;;){for(;o<=s&&n[(o-u)*6+l]<c;)o++;for(;o<=s&&n[(s-u)*6+l]>=c;)s--;if(o<s){for(let n=0;n<t;n++){let r=e[o*t+n];e[o*t+n]=e[s*t+n],e[s*t+n]=r}for(let e=0;e<6;e++){let t=o-u,r=s-u,i=n[t*6+e];n[t*6+e]=n[r*6+e],n[r*6+e]=i}o++,s--}else return o}}var Wn=2**32,Gn=new Float32Array(6),Kn=new Float32Array(6);function qn(e,t,n,r,i,a){let{maxDepth:o,verbose:s,targetLeafSize:c,_strictLeafSize:l=1/0,strategy:u,onProgress:d,useSharedArrayBuffer:f=!1}=i,p=e.primitiveBuffer,m=e.primitiveBufferStride,h=new(f?SharedArrayBuffer:ArrayBuffer)(32*Math.max(1,2*Math.ceil(r)-1)),g=new Float32Array(h),_=new Uint32Array(h),v=new Uint16Array(h),y=0,b=!1;return kn(t,n,r,Gn,Kn),C(n,r,0),h.slice(0,y*32);function x(e){d&&d((e-a.offset)/a.count)}function S(e,t,n){let r=e*2;_[e+6]=t,v[r+14]=n,v[r+15]=xn,x(t+n)}function C(e,n,r){let i=y++,a=i*8;g.set(Gn,a),!b&&r>=o&&(b=!0,s&&console.warn(`BVH: Max depth of ${o} reached when generating BVH. Consider increasing maxDepth.`));let d=n>l;if(n<=c&&!d||r>=o){S(a,e,n);return}let f=Vn(Gn,Kn,t,e,n,u),h=f.axis===-1?-1:Un(p,m,t,e,n,f);if(f.axis===-1||h===e||h===e+n){if(!d){S(a,e,n);return}f.axis=Math.max(0,Tn(Gn)),h=e+Math.max(1,Math.floor(n/2))}_[a+7]=f.axis;let v=h-e;kn(t,e,v,Gn,Kn),C(e,v,r+1);let x=y-i;if(x>Wn)throw Error(`MeshBVH: Cannot store relative child node offset greater than 32 bits.`);_[a+6]=x;let w=n-v;kn(t,h,w,Gn,Kn),C(h,w,r+1)}}function Jn(e,t){let n=e.getRootRanges(t.range),r=n[0],i=n[n.length-1],a={offset:r.offset,count:i.offset+i.count-r.offset},o=new Float32Array(6*a.count);o.offset=a.offset,e.computePrimitiveBounds(a.offset,a.count,o),e._roots=n.map(n=>qn(e,o,n.offset,n.count,t,a))}var Yn=class{constructor(e){this._getNewPrimitive=e,this._primitives=[]}getPrimitive(){let e=this._primitives;return e.length===0?this._getNewPrimitive():e.pop()}releasePrimitive(e){this._primitives.push(e)}},H=new class{constructor(){this.float32Array=null,this.uint16Array=null,this.uint32Array=null;let e=[],t=null;this.setBuffer=n=>{t&&e.push(t),t=n,this.float32Array=new Float32Array(n),this.uint16Array=new Uint16Array(n),this.uint32Array=new Uint32Array(n)},this.clearBuffer=()=>{t=null,this.float32Array=null,this.uint16Array=null,this.uint32Array=null,e.length!==0&&this.setBuffer(e.pop())}}},Xn,Zn,Qn=[],$n=new Yn(()=>new v);function er(e,t,n,r,i,a){Xn=$n.getPrimitive(),Zn=$n.getPrimitive(),Qn.push(Xn,Zn),H.setBuffer(e._roots[t]);let o=tr(0,e.geometry,n,r,i,a);H.clearBuffer(),$n.releasePrimitive(Xn),$n.releasePrimitive(Zn),Qn.pop(),Qn.pop();let s=Qn.length;return s>0&&(Zn=Qn[s-1],Xn=Qn[s-2]),o}function tr(e,t,n,r,i=null,a=0,o=0){let{float32Array:s,uint16Array:c,uint32Array:l}=H,u=e*2;if(I(u,c)){let t=L(e,l),n=R(u,c);return F(V(e),s,Xn),r(t,n,!1,o,a+e/8,Xn)}{let u=z(e),d=B(e,l),f=u,p=d,m,h,g,_;if(i&&(g=Xn,_=Zn,F(V(f),s,g),F(V(p),s,_),m=i(g),h=i(_),h<m)){f=d,p=u;let e=m;m=h,h=e,g=_}g||(g=Xn,F(V(f),s,g));let v=I(f*2,c),y=n(g,v,m,o+1,a+f/8),b;if(y===2){let e=w(f);b=r(e,ee(f)-e,!0,o+1,a+f/8,g)}else b=y&&tr(f,t,n,r,i,a,o+1);if(b)return!0;_=Zn,F(V(p),s,_);let x=I(p*2,c),S=n(_,x,h,o+1,a+p/8),C;if(S===2){let e=w(p);C=r(e,ee(p)-e,!0,o+1,a+p/8,_)}else C=S&&tr(p,t,n,r,i,a,o+1);return!!C;function w(e){let{uint16Array:t,uint32Array:n}=H,r=e*2;for(;!I(r,t);)e=z(e),r=e*2;return L(e,n)}function ee(e){let{uint16Array:t,uint32Array:n}=H,r=e*2;for(;!I(r,t);)e=B(e,n),r=e*2;return L(e,n)+R(r,t)}}}var nr=new H.constructor,rr=new H.constructor,ir=new Yn(()=>new v),ar=new v,or=new v,sr=new v,cr=new v,lr=!1;function ur(e,t,n,r){if(lr)throw Error(`MeshBVH: Recursive calls to bvhcast not supported.`);lr=!0;let i=e._roots,a=t._roots,o,s=0,c=0,l=new T().copy(n).invert();for(let e=0,t=i.length;e<t;e++){nr.setBuffer(i[e]),c=0;let t=ir.getPrimitive();F(V(0),nr.float32Array,t),t.applyMatrix4(l);for(let e=0,i=a.length;e<i&&(rr.setBuffer(a[e]),o=dr(0,0,n,l,r,s,c,0,0,t),rr.clearBuffer(),c+=a[e].byteLength/32,!o);e++);if(ir.releasePrimitive(t),nr.clearBuffer(),s+=i[e].byteLength/32,o)break}return lr=!1,o}function dr(e,t,n,r,i,a=0,o=0,s=0,c=0,l=null,u=!1){let d,f;u?(d=rr,f=nr):(d=nr,f=rr);let p=d.float32Array,m=d.uint32Array,h=d.uint16Array,g=f.float32Array,_=f.uint32Array,v=f.uint16Array,y=e*2,b=t*2,x=I(y,h),S=I(b,v),C=!1;if(S&&x)C=u?i(L(t,_),R(t*2,v),L(e,m),R(e*2,h),c,o+t/8,s,a+e/8):i(L(e,m),R(e*2,h),L(t,_),R(t*2,v),s,a+e/8,c,o+t/8);else if(S){let l=ir.getPrimitive();F(V(t),g,l),l.applyMatrix4(n);let d=z(e),f=B(e,m);F(V(d),p,ar),F(V(f),p,or);let h=l.intersectsBox(ar),_=l.intersectsBox(or);C=h&&dr(t,d,r,n,i,o,a,c,s+1,l,!u)||_&&dr(t,f,r,n,i,o,a,c,s+1,l,!u),ir.releasePrimitive(l)}else{let d=z(t),f=B(t,_);F(V(d),g,sr),F(V(f),g,cr);let h=l.intersectsBox(sr),v=l.intersectsBox(cr);if(h&&v)C=dr(e,d,n,r,i,a,o,s,c+1,l,u)||dr(e,f,n,r,i,a,o,s,c+1,l,u);else if(h){if(x)C=dr(e,d,n,r,i,a,o,s,c+1,l,u);else{let t=ir.getPrimitive();t.copy(sr).applyMatrix4(n);let l=z(e),f=B(e,m);F(V(l),p,ar),F(V(f),p,or);let h=t.intersectsBox(ar),g=t.intersectsBox(or);C=h&&dr(d,l,r,n,i,o,a,c,s+1,t,!u)||g&&dr(d,f,r,n,i,o,a,c,s+1,t,!u),ir.releasePrimitive(t)}}else if(v){if(x)C=dr(e,f,n,r,i,a,o,s,c+1,l,u);else{let t=ir.getPrimitive();t.copy(cr).applyMatrix4(n);let l=z(e),d=B(e,m);F(V(l),p,ar),F(V(d),p,or);let h=t.intersectsBox(ar),g=t.intersectsBox(or);C=h&&dr(f,l,r,n,i,o,a,c,s+1,t,!u)||g&&dr(f,d,r,n,i,o,a,c,s+1,t,!u),ir.releasePrimitive(t)}}}return C}var fr=new class{constructor(){let e=null,t=null,n=null,r=!1;this.root=null,this.buffer=null,this.uint32Array=null,this.uint16Array=null,this.setBVH=(i,a)=>{if(r)throw Error(`BVHTraversalHelper: cannot call setBVH during an active traversal.`);this.root=a,this.buffer=e=i._roots[a],this.uint16Array=n=new Uint16Array(e),this.uint32Array=t=new Uint32Array(e)},this.reset=()=>{this.root=null,this.buffer=e=null,this.uint16Array=n=null,this.uint32Array=t=null},this.getRangeStart=e=>{let r=e*2;for(;!I(r,n);)e=z(e),r=e*2;return L(e,t)},this.getRangeEnd=e=>{let r=e*2;for(;!I(r,n);)e=B(e,t),r=e*2;return L(e,t)+R(r,n)};let i=(e,r,a)=>{let o=I(r*2,n);if(!e(a,o,r)&&!o){let n=z(r),o=B(r,t);i(e,n,a+1),i(e,o,a+1)}};this.traverseBuffer=e=>{if(r)throw Error(`BVHTraversalHelper: cannot start a traversal during an active traversal.`);r=!0;try{i(e,0,0)}finally{r=!1}},this.traverse=r=>{this.traverseBuffer((i,a,o)=>{if(a){let s=o*2,c=t[o+6],l=n[s+14];return r(i,a,new Float32Array(e,o*4,6),c,l)}{let n=On(o,t);return r(i,a,new Float32Array(e,o*4,6),n)}})}}},pr=new v,mr=new Float32Array(6),hr=class{constructor(){this._roots=null,this.primitiveBuffer=null,this.primitiveBufferStride=null}init(e){e={...wn,...e},`maxLeafSize`in e&&(console.warn(`BVH: "maxLeafSize" option has been deprecated. Use "targetLeafSize", instead.`),e={...e,targetLeafSize:e.maxLeafSize}),Jn(this,e)}getRootRanges(){throw Error(`BVH: getRootRanges() not implemented`)}writePrimitiveBounds(){throw Error(`BVH: writePrimitiveBounds() not implemented`)}writePrimitiveRangeBounds(e,t,n,r){let i=1/0,a=1/0,o=1/0,s=-1/0,c=-1/0,l=-1/0;for(let n=e,r=e+t;n<r;n++){this.writePrimitiveBounds(n,mr,0);let[e,t,r,u,d,f]=mr;e<i&&(i=e),u>s&&(s=u),t<a&&(a=t),d>c&&(c=d),r<o&&(o=r),f>l&&(l=f)}return n[r+0]=i,n[r+1]=a,n[r+2]=o,n[r+3]=s,n[r+4]=c,n[r+5]=l,n}computePrimitiveBounds(e,t,n){let r=n.offset||0;for(let i=e,a=e+t;i<a;i++){this.writePrimitiveBounds(i,mr,0);let[e,t,a,o,s,c]=mr,l=(e+o)/2,u=(t+s)/2,d=(a+c)/2,f=(o-e)/2,p=(s-t)/2,m=(c-a)/2,h=(i-r)*6;n[h+0]=l,n[h+1]=f+(Math.abs(l)+f)*Sn,n[h+2]=u,n[h+3]=p+(Math.abs(u)+p)*Sn,n[h+4]=d,n[h+5]=m+(Math.abs(d)+m)*Sn}return n}shiftPrimitiveOffsets(e){let t=this._indirectBuffer;if(t)for(let n=0,r=t.length;n<r;n++)t[n]+=e;else{let t=this._roots;for(let n=0;n<t.length;n++){let r=t[n],i=new Uint32Array(r),a=new Uint16Array(r),o=r.byteLength/32;for(let t=0;t<o;t++){let n=8*t;I(2*n,a)&&(i[n+6]+=e)}}}}traverse(e,t=0){fr.setBVH(this,t),fr.traverse(e),fr.reset()}refit(){let e=this._roots;for(let t=0,n=e.length;t<n;t++){let n=e[t],r=new Uint32Array(n),i=new Uint16Array(n),a=new Float32Array(n),o=n.byteLength/32;for(let e=o-1;e>=0;e--){let t=e*8,n=t*2;if(I(n,i)){let e=L(t,r),o=R(n,i);this.writePrimitiveRangeBounds(e,o,mr,0),a.set(mr,t)}else{let e=z(t),n=B(t,r);for(let r=0;r<3;r++){let i=a[e+r],o=a[e+r+3],s=a[n+r],c=a[n+r+3];a[t+r]=i<s?i:s,a[t+r+3]=o>c?o:c}}}}}getBoundingBox(e){return e.makeEmpty(),this._roots.forEach(t=>{F(0,new Float32Array(t),pr),e.union(pr)}),e}shapecast(e){let{boundsTraverseOrder:t,intersectsBounds:n,intersectsRange:r,intersectsPrimitive:i,scratchPrimitive:a,iterate:o}=e;if(r&&i){let e=r;r=(t,n,r,s,c)=>e(t,n,r,s,c)?!0:o(t,n,this,i,r,s,a)}else r||=i?(e,t,n,r)=>o(e,t,this,i,n,r,a):(e,t,n)=>n;let s=!1,c=0,l=this._roots;for(let e=0,i=l.length;e<i;e++){let i=l[e];if(s=er(this,e,n,r,t,c),s)break;c+=i.byteLength/32}return s}bvhcast(e,t,n){let{intersectsRanges:r}=n;return ur(this,e,t,r)}};function gr(){return typeof SharedArrayBuffer<`u`}function _r(e){return e.index?e.index.count:e.attributes.position.count}function vr(e){return _r(e)/3}function yr(e,t=ArrayBuffer){return e>65535?new Uint32Array(new t(4*e)):new Uint16Array(new t(2*e))}function br(e,t){if(!e.index){let n=e.attributes.position.count,r=yr(n,t.useSharedArrayBuffer?SharedArrayBuffer:ArrayBuffer);e.setIndex(new De(r,1));for(let e=0;e<n;e++)r[e]=e}}function xr(e,t,n){let r=_r(e)/n,i=t||e.drawRange,a=i.start/n,o=(i.start+i.count)/n,s=Math.max(0,a),c=Math.min(r,o)-s;return{offset:Math.floor(s),count:Math.floor(c)}}function Sr(e,t){return e.groups.map(e=>({offset:e.start/t,count:e.count/t}))}function Cr(e,t,n){let r=xr(e,t,n),i=Sr(e,n);if(!i.length)return[r];let a=[],o=r.offset,s=r.offset+r.count,c=_r(e)/n,l=[];for(let e of i){let{offset:t,count:n}=e,r=t,i=t+(isFinite(n)?n:c-t);r<s&&i>o&&(l.push({pos:Math.max(o,r),isStart:!0}),l.push({pos:Math.min(s,i),isStart:!1}))}l.sort((e,t)=>e.pos===t.pos?e.type===`end`?-1:1:e.pos-t.pos);let u=0,d=null;for(let e of l){let t=e.pos;u!==0&&t!==d&&a.push({offset:d,count:t-d}),u+=e.isStart?1:-1,d=t}return a}function wr(e,t){let n=e[e.length-1],r=n.offset+n.count>2**16,i=e.reduce((e,t)=>e+t.count,0),a=r?4:2,o=t?new SharedArrayBuffer(i*a):new ArrayBuffer(i*a),s=r?new Uint32Array(o):new Uint16Array(o),c=0;for(let t=0;t<e.length;t++){let{offset:n,count:r}=e[t];for(let e=0;e<r;e++)s[c+e]=n+e;c+=r}return s}var Tr=class extends hr{get indirect(){return!!this._indirectBuffer}get primitiveStride(){return null}get primitiveBufferStride(){return this.indirect?1:this.primitiveStride}set primitiveBufferStride(e){}get primitiveBuffer(){return this.indirect?this._indirectBuffer:this.geometry.index.array}set primitiveBuffer(e){}constructor(e,t={}){if(!e.isBufferGeometry)throw Error(`BVH: Only BufferGeometries are supported.`);if(e.index&&e.index.isInterleavedBufferAttribute)throw Error(`BVH: InterleavedBufferAttribute is not supported for the index attribute.`);if(t.useSharedArrayBuffer&&!gr())throw Error(`BVH: SharedArrayBuffer is not available.`);super(),this.geometry=e,this.resolvePrimitiveIndex=t.indirect?e=>this._indirectBuffer[e]:e=>e,this.primitiveBuffer=null,this.primitiveBufferStride=null,this._indirectBuffer=null,t={...wn,...t},t[Cn]||this.init(t)}init(e){let{geometry:t,primitiveStride:n}=this;if(e.indirect){let r=wr(Cr(t,e.range,n),e.useSharedArrayBuffer);this._indirectBuffer=r}else br(t,e);super.init(e),!t.boundingBox&&e.setBoundingBox&&(t.boundingBox=this.getBoundingBox(new v))}getRootRanges(e){return this.indirect?[{offset:0,count:this._indirectBuffer.length}]:Cr(this.geometry,e,this.primitiveStride)}raycastObject3D(){throw Error(`BVH: raycastObject3D() not implemented`)}},Er=class{constructor(){this.min=1/0,this.max=-1/0}setFromPointsField(e,t){let n=1/0,r=-1/0;for(let i=0,a=e.length;i<a;i++){let a=e[i][t];n=a<n?a:n,r=a>r?a:r}this.min=n,this.max=r}setFromPoints(e,t){let n=1/0,r=-1/0;for(let i=0,a=t.length;i<a;i++){let a=t[i],o=e.dot(a);n=o<n?o:n,r=o>r?o:r}this.min=n,this.max=r}isSeparated(e){return this.min>e.max||e.min>this.max}};Er.prototype.setFromBox=(function(){let e=new b;return function(t,n){let r=n.min,i=n.max,a=1/0,o=-1/0;for(let n=0;n<=1;n++)for(let s=0;s<=1;s++)for(let c=0;c<=1;c++){e.x=r.x*n+i.x*(1-n),e.y=r.y*s+i.y*(1-s),e.z=r.z*c+i.z*(1-c);let l=t.dot(e);a=Math.min(l,a),o=Math.max(l,o)}this.min=a,this.max=o}})();var Dr=(function(){let e=new b,t=new b,n=new b;return function(r,i,a){let o=r.start,s=e,c=i.start,l=t;n.subVectors(o,c),e.subVectors(r.end,r.start),t.subVectors(i.end,i.start);let u=n.dot(l),d=l.dot(s),f=l.dot(l),p=n.dot(s),m=s.dot(s)*f-d*d,h,g;h=m===0?0:(u*d-p*f)/m,g=(u+h*d)/f,a.x=h,a.y=g}})(),Or=(function(){let e=new E,t=new b,n=new b;return function(r,i,a,o){Dr(r,i,e);let s=e.x,c=e.y;if(s>=0&&s<=1&&c>=0&&c<=1){r.at(s,a),i.at(c,o);return}if(s>=0&&s<=1){c<0?i.at(0,o):i.at(1,o),r.closestPointToPoint(o,!0,a);return}if(c>=0&&c<=1){s<0?r.at(0,a):r.at(1,a),i.closestPointToPoint(a,!0,o);return}{let e;e=s<0?r.start:r.end;let l;l=c<0?i.start:i.end;let u=t,d=n;if(r.closestPointToPoint(l,!0,t),i.closestPointToPoint(e,!0,n),u.distanceToSquared(l)<=d.distanceToSquared(e)){a.copy(u),o.copy(l);return}a.copy(e),o.copy(d);return}}})(),kr=(function(){let e=new b,t=new b,n=new x,r=new s;return function(i,a){let{radius:o,center:s}=i,{a:c,b:l,c:u}=a;if(r.start=c,r.end=l,r.closestPointToPoint(s,!0,e).distanceTo(s)<=o||(r.start=c,r.end=u,r.closestPointToPoint(s,!0,e).distanceTo(s)<=o)||(r.start=l,r.end=u,r.closestPointToPoint(s,!0,e).distanceTo(s)<=o))return!0;let d=a.getPlane(n);if(Math.abs(d.distanceToPoint(s))<=o){let e=d.projectPoint(s,t);if(a.containsPoint(e))return!0}return!1}})(),Ar=[`x`,`y`,`z`],jr=1e-15,Mr=jr*jr;function Nr(e){return Math.abs(e)<jr}var Pr=class extends o{constructor(...e){super(...e),this.isExtendedTriangle=!0,this.satAxes=[,,,,].fill().map(()=>new b),this.satBounds=[,,,,].fill().map(()=>new Er),this.points=[this.a,this.b,this.c],this.plane=new x,this.isDegenerateIntoSegment=!1,this.isDegenerateIntoPoint=!1,this.degenerateSegment=new s,this.needsUpdate=!0}intersectsSphere(e){return kr(e,this)}update(){let e=this.a,t=this.b,n=this.c,r=this.points,i=this.satAxes,a=this.satBounds,o=i[0],s=a[0];this.getNormal(o),s.setFromPoints(o,r);let c=i[1],l=a[1];c.subVectors(e,t),l.setFromPoints(c,r);let u=i[2],d=a[2];u.subVectors(t,n),d.setFromPoints(u,r);let f=i[3],p=a[3];f.subVectors(n,e),p.setFromPoints(f,r);let m=c.length(),h=u.length(),g=f.length();this.isDegenerateIntoPoint=!1,this.isDegenerateIntoSegment=!1,m<jr?h<jr||g<jr?this.isDegenerateIntoPoint=!0:(this.isDegenerateIntoSegment=!0,this.degenerateSegment.start.copy(e),this.degenerateSegment.end.copy(n)):h<jr?g<jr?this.isDegenerateIntoPoint=!0:(this.isDegenerateIntoSegment=!0,this.degenerateSegment.start.copy(t),this.degenerateSegment.end.copy(e)):g<jr&&(this.isDegenerateIntoSegment=!0,this.degenerateSegment.start.copy(n),this.degenerateSegment.end.copy(t)),this.plane.setFromNormalAndCoplanarPoint(o,e),this.needsUpdate=!1}};Pr.prototype.closestPointToSegment=(function(){let e=new b,t=new b,n=new s;return function(r,i=null,a=null){this.needsUpdate&&this.update();let{start:o,end:s}=r,c=this.points,l,u=1/0;if(this.plane.distanceToPoint(o)*this.plane.distanceToPoint(s)<0&&this.plane.intersectLine(r,e)!==null&&this.containsPoint(e))return i&&i.copy(e),a&&a.copy(e),0;for(let o=0;o<3;o++){let s=(o+1)%3;n.start.copy(c[o]),n.end.copy(c[s]),Or(n,r,e,t),l=e.distanceToSquared(t),l<u&&(u=l,i&&i.copy(e),a&&a.copy(t))}return this.closestPointToPoint(o,e),l=o.distanceToSquared(e),l<u&&(u=l,i&&i.copy(e),a&&a.copy(o)),this.closestPointToPoint(s,e),l=s.distanceToSquared(e),l<u&&(u=l,i&&i.copy(e),a&&a.copy(s)),Math.sqrt(u)}})(),Pr.prototype.intersectsTriangle=(function(){let e=new Pr,t=new Er,n=new Er,r=new b,i=new b,a=new b,o=new b,c=new s,l=new s,u=new b,d=new E,f=new E;function p(e,i,a,s){let c=r;!e.isDegenerateIntoPoint&&!e.isDegenerateIntoSegment?c.copy(e.plane.normal):c.copy(i.plane.normal);let l=e.satBounds,u=e.satAxes;for(let r=1;r<4;r++){let a=l[r],s=u[r];if(t.setFromPoints(s,i.points),a.isSeparated(t)||(o.copy(c).cross(s),t.setFromPoints(o,e.points),n.setFromPoints(o,i.points),t.isSeparated(n)))return!1}let d=i.satBounds,f=i.satAxes;for(let r=1;r<4;r++){let a=d[r],s=f[r];if(t.setFromPoints(s,e.points),a.isSeparated(t)||(o.crossVectors(c,s),t.setFromPoints(o,e.points),n.setFromPoints(o,i.points),t.isSeparated(n)))return!1}return a&&(s||console.warn(`ExtendedTriangle.intersectsTriangle: Triangles are coplanar which does not support an output edge. Setting edge to 0, 0, 0.`),a.start.set(0,0,0),a.end.set(0,0,0)),!0}function m(e,t,n,r,i,a,o,s,c,l,u){let d=o/(o-s);l.x=r+(i-r)*d,u.start.subVectors(t,e).multiplyScalar(d).add(e),d=o/(o-c),l.y=r+(a-r)*d,u.end.subVectors(n,e).multiplyScalar(d).add(e)}function h(e,t,n,r,i,a,o,s,c,l,u){if(i>0)m(e.c,e.a,e.b,r,t,n,c,o,s,l,u);else if(a>0)m(e.b,e.a,e.c,n,t,r,s,o,c,l,u);else if(s*c>0||o!=0)m(e.a,e.b,e.c,t,n,r,o,s,c,l,u);else if(s!=0)m(e.b,e.a,e.c,n,t,r,s,o,c,l,u);else if(c!=0)m(e.c,e.a,e.b,r,t,n,c,o,s,l,u);else return!0;return!1}function g(e,t,n,i){let a=t.degenerateSegment,o=e.plane.distanceToPoint(a.start),s=e.plane.distanceToPoint(a.end);return Nr(o)?Nr(s)?p(e,t,n,i):(n&&(n.start.copy(a.start),n.end.copy(a.start)),e.containsPoint(a.start)):Nr(s)?(n&&(n.start.copy(a.end),n.end.copy(a.end)),e.containsPoint(a.end)):e.plane.intersectLine(a,r)!=null&&(n&&(n.start.copy(r),n.end.copy(r)),e.containsPoint(r))}function _(e,t,n){let r=t.a;return Nr(e.plane.distanceToPoint(r))&&e.containsPoint(r)?(n&&(n.start.copy(r),n.end.copy(r)),!0):!1}function v(e,t,n){let i=e.degenerateSegment,a=t.a;return i.closestPointToPoint(a,!0,r),a.distanceToSquared(r)<Mr&&(n&&(n.start.copy(a),n.end.copy(a)),!0)}function y(e,t,n,o){if(e.isDegenerateIntoSegment){if(t.isDegenerateIntoSegment){let o=e.degenerateSegment,s=t.degenerateSegment,c=i,l=a;o.delta(c),s.delta(l);let u=r.subVectors(s.start,o.start),d=c.x*l.y-c.y*l.x;if(Nr(d))return!1;let f=(u.x*l.y-u.y*l.x)/d,p=-(c.x*u.y-c.y*u.x)/d;return f<0||f>1||p<0||p>1?!1:Nr(o.start.z+c.z*f-(s.start.z+l.z*p))?(n&&(n.start.copy(o.start).addScaledVector(c,f),n.end.copy(o.start).addScaledVector(c,f)),!0):!1}return t.isDegenerateIntoPoint?v(e,t,n):g(t,e,n,o)}if(e.isDegenerateIntoPoint)return t.isDegenerateIntoPoint?t.a.distanceToSquared(e.a)<Mr&&(n&&(n.start.copy(e.a),n.end.copy(e.a)),!0):t.isDegenerateIntoSegment?v(t,e,n):_(t,e,n);if(t.isDegenerateIntoPoint)return _(e,t,n);if(t.isDegenerateIntoSegment)return g(e,t,n,o)}return function(t,n=null,r=!1){this.needsUpdate&&this.update(),t.isExtendedTriangle?t.needsUpdate&&t.update():(e.copy(t),e.update(),t=e);let o=y(this,t,n,r);if(o!==void 0)return o;let s=this.plane,m=t.plane,g=m.distanceToPoint(this.a),_=m.distanceToPoint(this.b),v=m.distanceToPoint(this.c);Nr(g)&&(g=0),Nr(_)&&(_=0),Nr(v)&&(v=0);let b=g*_,x=g*v;if(b>0&&x>0)return!1;let S=s.distanceToPoint(t.a),C=s.distanceToPoint(t.b),w=s.distanceToPoint(t.c);Nr(S)&&(S=0),Nr(C)&&(C=0),Nr(w)&&(w=0);let ee=S*C,te=S*w;if(ee>0&&te>0)return!1;i.copy(s.normal),a.copy(m.normal);let ne=i.cross(a),re=0,T=Math.abs(ne.x),ie=Math.abs(ne.y);ie>T&&(T=ie,re=1),Math.abs(ne.z)>T&&(re=2);let E=Ar[re],ae=this.a[E],oe=this.b[E],se=this.c[E],ce=t.a[E],le=t.b[E],ue=t.c[E];if(h(this,ae,oe,se,b,x,g,_,v,d,c)||h(t,ce,le,ue,ee,te,S,C,w,f,l))return p(this,t,n,r);if(d.y<d.x){let e=d.y;d.y=d.x,d.x=e,u.copy(c.start),c.start.copy(c.end),c.end.copy(u)}if(f.y<f.x){let e=f.y;f.y=f.x,f.x=e,u.copy(l.start),l.start.copy(l.end),l.end.copy(u)}return d.y<f.x||f.y<d.x?!1:(n&&(f.x>d.x?n.start.copy(l.start):n.start.copy(c.start),f.y<d.y?n.end.copy(l.end):n.end.copy(c.end)),!0)}})(),Pr.prototype.distanceToPoint=(function(){let e=new b;return function(t){return this.closestPointToPoint(t,e),t.distanceTo(e)}})(),Pr.prototype.distanceToTriangle=(function(){let e=new b,t=new b,n=[`a`,`b`,`c`],r=new s,i=new s;return function(a,o=null,s=null){let c=o||s?r:null;if(this.intersectsTriangle(a,c,!0))return(o||s)&&(o&&c.getCenter(o),s&&c.getCenter(s)),0;let l=1/0;for(let t=0;t<3;t++){let r,i=n[t],c=a[i];this.closestPointToPoint(c,e),r=c.distanceToSquared(e),r<l&&(l=r,o&&o.copy(e),s&&s.copy(c));let u=this[i];a.closestPointToPoint(u,e),r=u.distanceToSquared(e),r<l&&(l=r,o&&o.copy(u),s&&s.copy(e))}for(let c=0;c<3;c++){let u=n[c],d=n[(c+1)%3];r.set(this[u],this[d]);for(let c=0;c<3;c++){let u=n[c],d=n[(c+1)%3];i.set(a[u],a[d]),Or(r,i,e,t);let f=e.distanceToSquared(t);f<l&&(l=f,o&&o.copy(e),s&&s.copy(t))}}return Math.sqrt(l)}})();var U=class{constructor(e,t,n){this.isOrientedBox=!0,this.min=new b,this.max=new b,this.matrix=new T,this.invMatrix=new T,this.points=Array(8).fill().map(()=>new b),this.satAxes=[,,,].fill().map(()=>new b),this.satBounds=[,,,].fill().map(()=>new Er),this.alignedSatBounds=[,,,].fill().map(()=>new Er),this.needsUpdate=!1,e&&this.min.copy(e),t&&this.max.copy(t),n&&this.matrix.copy(n)}set(e,t,n){this.min.copy(e),this.max.copy(t),this.matrix.copy(n),this.needsUpdate=!0}copy(e){this.min.copy(e.min),this.max.copy(e.max),this.matrix.copy(e.matrix),this.needsUpdate=!0}};U.prototype.update=(function(){return function(){let e=this.matrix,t=this.min,n=this.max,r=this.points;for(let i=0;i<=1;i++)for(let a=0;a<=1;a++)for(let o=0;o<=1;o++){let s=r[1*i|2*a|4*o];s.x=i?n.x:t.x,s.y=a?n.y:t.y,s.z=o?n.z:t.z,s.applyMatrix4(e)}let i=this.satBounds,a=this.satAxes,o=r[0];for(let e=0;e<3;e++){let t=a[e],n=i[e],s=r[1<<e];t.subVectors(o,s),n.setFromPoints(t,r)}let s=this.alignedSatBounds;s[0].setFromPointsField(r,`x`),s[1].setFromPointsField(r,`y`),s[2].setFromPointsField(r,`z`),this.invMatrix.copy(this.matrix).invert(),this.needsUpdate=!1}})(),U.prototype.intersectsBox=(function(){let e=new Er;return function(t){this.needsUpdate&&this.update();let n=t.min,r=t.max,i=this.satBounds,a=this.satAxes,o=this.alignedSatBounds;if(e.min=n.x,e.max=r.x,o[0].isSeparated(e)||(e.min=n.y,e.max=r.y,o[1].isSeparated(e))||(e.min=n.z,e.max=r.z,o[2].isSeparated(e)))return!1;for(let n=0;n<3;n++){let r=a[n],o=i[n];if(e.setFromBox(r,t),o.isSeparated(e))return!1}return!0}})(),U.prototype.intersectsTriangle=(function(){let e=new Pr,t=[,,,],n=new Er,r=new Er,i=new b;return function(a){this.needsUpdate&&this.update(),a.isExtendedTriangle?a.needsUpdate&&a.update():(e.copy(a),e.update(),a=e);let o=this.satBounds,s=this.satAxes;t[0]=a.a,t[1]=a.b,t[2]=a.c;for(let e=0;e<3;e++){let r=o[e],i=s[e];if(n.setFromPoints(i,t),r.isSeparated(n))return!1}let c=a.satBounds,l=a.satAxes,u=this.points;for(let e=0;e<3;e++){let t=c[e],r=l[e];if(n.setFromPoints(r,u),t.isSeparated(n))return!1}for(let e=0;e<3;e++){let a=s[e];for(let e=0;e<4;e++){let o=l[e];if(i.crossVectors(a,o),n.setFromPoints(i,t),r.setFromPoints(i,u),n.isSeparated(r))return!1}}return!0}})(),U.prototype.closestPointToPoint=(function(){return function(e,t){return this.needsUpdate&&this.update(),t.copy(e).applyMatrix4(this.invMatrix).clamp(this.min,this.max).applyMatrix4(this.matrix),t}})(),U.prototype.distanceToPoint=(function(){let e=new b;return function(t){return this.closestPointToPoint(t,e),t.distanceTo(e)}})(),U.prototype.distanceToBox=(function(){let e=[`x`,`y`,`z`],t=Array(12).fill().map(()=>new s),n=Array(12).fill().map(()=>new s),r=new b,i=new b;return function(a,o=0,s=null,c=null){if(this.needsUpdate&&this.update(),this.intersectsBox(a))return(s||c)&&(a.getCenter(i),this.closestPointToPoint(i,r),a.closestPointToPoint(r,i),s&&s.copy(r),c&&c.copy(i)),0;let l=o*o,u=a.min,d=a.max,f=this.points,p=1/0;for(let e=0;e<8;e++){let t=f[e];i.copy(t).clamp(u,d);let n=t.distanceToSquared(i);if(n<p&&(p=n,s&&s.copy(t),c&&c.copy(i),n<l))return Math.sqrt(n)}let m=0;for(let r=0;r<3;r++)for(let i=0;i<=1;i++)for(let a=0;a<=1;a++){let o=(r+1)%3,s=(r+2)%3,c=i<<o|a<<s,l=1<<r|i<<o|a<<s,p=f[c],h=f[l];t[m].set(p,h);let g=e[r],_=e[o],v=e[s],y=n[m],b=y.start,x=y.end;b[g]=u[g],b[_]=i?u[_]:d[_],b[v]=a?u[v]:d[v],x[g]=d[g],x[_]=i?u[_]:d[_],x[v]=a?u[v]:d[v],m++}for(let e=0;e<=1;e++)for(let t=0;t<=1;t++)for(let n=0;n<=1;n++){i.x=e?d.x:u.x,i.y=t?d.y:u.y,i.z=n?d.z:u.z,this.closestPointToPoint(i,r);let a=i.distanceToSquared(r);if(a<p&&(p=a,s&&s.copy(r),c&&c.copy(i),a<l))return Math.sqrt(a)}for(let e=0;e<12;e++){let a=t[e];for(let e=0;e<12;e++){let t=n[e];Or(a,t,r,i);let o=r.distanceToSquared(i);if(o<p&&(p=o,s&&s.copy(r),c&&c.copy(i),o<l))return Math.sqrt(o)}}return Math.sqrt(p)}})();var Fr=new class extends Yn{constructor(){super(()=>new Pr)}},Ir=new b,Lr=new b;function Rr(e,t,n={},r=0,i=1/0){let a=r*r,o=i*i,s=1/0,c=null;if(e.shapecast({boundsTraverseOrder:e=>(Ir.copy(t).clamp(e.min,e.max),Ir.distanceToSquared(t)),intersectsBounds:(e,t,n)=>n<s&&n<o,intersectsTriangle:(e,n)=>{e.closestPointToPoint(t,Ir);let r=t.distanceToSquared(Ir);return r<s&&(Lr.copy(Ir),s=r,c=n),r<a}}),s===1/0)return null;let l=Math.sqrt(s);return n.point?n.point.copy(Lr):n.point=Lr.clone(),n.distance=l,n.faceIndex=c,n}var zr=!0,Br=new b,Vr=new b,Hr=new b,Ur=new E,Wr=new E,Gr=new E,Kr=new b,qr=new b,Jr=new b,Yr=new b;function Xr(e,t,n,r,i,a,o,s){let c;if(c=a===1?e.intersectTriangle(r,n,t,!0,i):e.intersectTriangle(t,n,r,a!==2,i),c===null)return null;let l=e.origin.distanceTo(i);return l<o||l>s?null:{distance:l,point:i.clone()}}function Zr(e,t,n,r,i,a,s,c,l,u,d){Br.fromBufferAttribute(t,a),Vr.fromBufferAttribute(t,s),Hr.fromBufferAttribute(t,c);let f=Xr(e,Br,Vr,Hr,Yr,l,u,d);if(f){if(r){Ur.fromBufferAttribute(r,a),Wr.fromBufferAttribute(r,s),Gr.fromBufferAttribute(r,c),f.uv=new E;let e=o.getInterpolation(Yr,Br,Vr,Hr,Ur,Wr,Gr,f.uv);zr||(f.uv=e)}if(i){Ur.fromBufferAttribute(i,a),Wr.fromBufferAttribute(i,s),Gr.fromBufferAttribute(i,c),f.uv1=new E;let e=o.getInterpolation(Yr,Br,Vr,Hr,Ur,Wr,Gr,f.uv1);zr||(f.uv1=e)}if(n){Kr.fromBufferAttribute(n,a),qr.fromBufferAttribute(n,s),Jr.fromBufferAttribute(n,c),f.normal=new b;let t=o.getInterpolation(Yr,Br,Vr,Hr,Kr,qr,Jr,f.normal);f.normal.dot(e.direction)>0&&f.normal.multiplyScalar(-1),zr||(f.normal=t)}let t={a,b:s,c,normal:new b,materialIndex:0};if(o.getNormal(Br,Vr,Hr,t.normal),f.face=t,f.faceIndex=a,zr){let e=new b;o.getBarycoord(Yr,Br,Vr,Hr,e),f.barycoord=e}}return f}function Qr(e){return e&&e.isMaterial?e.side:e}function $r(e,t,n,r,i,a,o){let s=r*3,c=s+0,l=s+1,u=s+2,{index:d,groups:f}=e;e.index&&(c=d.getX(c),l=d.getX(l),u=d.getX(u));let{position:p,normal:m,uv:h,uv1:g}=e.attributes;if(Array.isArray(t)){let e=r*3;for(let s=0,d=f.length;s<d;s++){let{start:d,count:_,materialIndex:v}=f[s];if(e>=d&&e<d+_){let e=Qr(t[v]),s=Zr(n,p,m,h,g,c,l,u,e,a,o);if(s){if(s.faceIndex=r,s.face.materialIndex=v,i)i.push(s);else return s}}}}else{let e=Qr(t),s=Zr(n,p,m,h,g,c,l,u,e,a,o);if(s){if(s.faceIndex=r,s.face.materialIndex=0,i)i.push(s);else return s}}return null}function W(e,t,n,r){let i=e.a,a=e.b,o=e.c,s=t,c=t+1,l=t+2;n&&(s=n.getX(s),c=n.getX(c),l=n.getX(l)),i.x=r.getX(s),i.y=r.getY(s),i.z=r.getZ(s),a.x=r.getX(c),a.y=r.getY(c),a.z=r.getZ(c),o.x=r.getX(l),o.y=r.getY(l),o.z=r.getZ(l)}function ei(e,t,n,r,i,a,o,s){let{geometry:c,_indirectBuffer:l}=e;for(let e=r,l=r+i;e<l;e++)$r(c,t,n,e,a,o,s)}function ti(e,t,n,r,i,a,o){let{geometry:s,_indirectBuffer:c}=e,l=1/0,u=null;for(let e=r,c=r+i;e<c;e++){let r;r=$r(s,t,n,e,null,a,o),r&&r.distance<l&&(u=r,l=r.distance)}return u}function ni(e,t,n,r,i,a,o){let{geometry:s}=n,{index:c}=s,l=s.attributes.position;for(let n=e,s=t+e;n<s;n++){let e;if(e=n,W(o,e*3,c,l),o.needsUpdate=!0,r(o,e,i,a))return!0}return!1}function ri(e,t=null){t&&Array.isArray(t)&&(t=new Set(t));let n=e.geometry,r=n.index?n.index.array:null,i=n.attributes.position,a,o,s,c,l=0,u=e._roots;for(let e=0,t=u.length;e<t;e++)a=u[e],o=new Uint32Array(a),s=new Uint16Array(a),c=new Float32Array(a),d(0,l),l+=a.byteLength;function d(e,n,a=!1){let l=e*2;if(I(l,s)){let t=L(e,o),n=R(l,s),a=1/0,u=1/0,d=1/0,f=-1/0,p=-1/0,m=-1/0;for(let e=3*t,o=3*(t+n);e<o;e++){let t=r[e],n=i.getX(t),o=i.getY(t),s=i.getZ(t);n<a&&(a=n),n>f&&(f=n),o<u&&(u=o),o>p&&(p=o),s<d&&(d=s),s>m&&(m=s)}return c[e+0]!==a||c[e+1]!==u||c[e+2]!==d||c[e+3]!==f||c[e+4]!==p||c[e+5]!==m?(c[e+0]=a,c[e+1]=u,c[e+2]=d,c[e+3]=f,c[e+4]=p,c[e+5]=m,!0):!1}{let r=z(e),i=B(e,o),s=a,l=!1,u=!1;if(t){if(!s){let e=r/8+n/32,a=i/8+n/32;l=t.has(e),u=t.has(a),s=!l&&!u}}else l=!0,u=!0;let f=s||l,p=s||u,m=!1;f&&(m=d(r,n,s));let h=!1;p&&(h=d(i,n,s));let g=m||h;if(g)for(let t=0;t<3;t++){let n=r+t,a=i+t,o=c[n],s=c[n+3],l=c[a],u=c[a+3];c[e+t]=o<l?o:l,c[e+t+3]=s>u?s:u}return g}}}function ii(e,t,n,r,i){let a,o,s,c,l,u,d=1/n.direction.x,f=1/n.direction.y,p=1/n.direction.z,m=n.origin.x,h=n.origin.y,g=n.origin.z,_=t[e],v=t[e+3],y=t[e+1],b=t[e+3+1],x=t[e+2],S=t[e+3+2];return d>=0?(a=(_-m)*d,o=(v-m)*d):(a=(v-m)*d,o=(_-m)*d),f>=0?(s=(y-h)*f,c=(b-h)*f):(s=(b-h)*f,c=(y-h)*f),a>c||s>o||((s>a||isNaN(a))&&(a=s),(c<o||isNaN(o))&&(o=c),p>=0?(l=(x-g)*p,u=(S-g)*p):(l=(S-g)*p,u=(x-g)*p),a>u||l>o)?!1:((l>a||a!==a)&&(a=l),(u<o||o!==o)&&(o=u),a<=i&&o>=r)}function ai(e,t,n,r,i,a,o,s){let{geometry:c,_indirectBuffer:l}=e;for(let e=r,u=r+i;e<u;e++)$r(c,t,n,l?l[e]:e,a,o,s)}function oi(e,t,n,r,i,a,o){let{geometry:s,_indirectBuffer:c}=e,l=1/0,u=null;for(let e=r,d=r+i;e<d;e++){let r;r=$r(s,t,n,c?c[e]:e,null,a,o),r&&r.distance<l&&(u=r,l=r.distance)}return u}function si(e,t,n,r,i,a,o){let{geometry:s}=n,{index:c}=s,l=s.attributes.position;for(let s=e,u=t+e;s<u;s++){let e;if(e=n.resolveTriangleIndex(s),W(o,e*3,c,l),o.needsUpdate=!0,r(o,e,i,a))return!0}return!1}function ci(e,t,n,r,i,a,o){H.setBuffer(e._roots[t]),ii(0,H.float32Array,r,a,o)&&li(0,e,n,r,i,a,o),H.clearBuffer()}function li(e,t,n,r,i,a,o){let{float32Array:s,uint16Array:c,uint32Array:l}=H,u=e*2;if(I(u,c))ei(t,n,r,L(e,l),R(u,c),i,a,o);else{let c=z(e);ii(c,s,r,a,o)&&li(c,t,n,r,i,a,o);let u=B(e,l);ii(u,s,r,a,o)&&li(u,t,n,r,i,a,o)}}var ui=[`x`,`y`,`z`];function di(e,t,n,r,i,a){H.setBuffer(e._roots[t]);let o=null;return ii(0,H.float32Array,r,i,a)&&(o=fi(0,e,n,r,i,a)),H.clearBuffer(),o}function fi(e,t,n,r,i,a){let{float32Array:o,uint16Array:s,uint32Array:c}=H,l=e*2;if(I(l,s))return ti(t,n,r,L(e,c),R(l,s),i,a);{let s=On(e,c),l=ui[s],u=r.direction[l]>=0,d,f;u?(d=z(e),f=B(e,c)):(d=B(e,c),f=z(e));let p=ii(d,o,r,i,a)?fi(d,t,n,r,i,a):null;if(p){let e=p.point[l];if(u?e<=o[f+s]:e>=o[f+s+3])return p}let m=ii(f,o,r,i,a)?fi(f,t,n,r,i,a):null;return p&&m?p.distance<=m.distance?p:m:p||m||null}}var pi=new v,mi=new Pr,hi=new Pr,gi=new T,_i=new U,vi=new U;function yi(e,t,n,r){H.setBuffer(e._roots[t]);let i=bi(0,e,n,r);return H.clearBuffer(),i}function bi(e,t,n,r,i=null){let{float32Array:a,uint16Array:o,uint32Array:s}=H,c=e*2;if(i===null&&(n.boundingBox||n.computeBoundingBox(),_i.set(n.boundingBox.min,n.boundingBox.max,r),i=_i),I(c,o)){let i=t.geometry,l=i.index,u=i.attributes.position,d=n.index,f=n.attributes.position,p=L(e,s),m=R(c,o);if(gi.copy(r).invert(),n.boundsTree)return F(V(e),a,vi),vi.matrix.copy(gi),vi.needsUpdate=!0,n.boundsTree.shapecast({intersectsBounds:e=>vi.intersectsBox(e),intersectsTriangle:e=>{e.a.applyMatrix4(r),e.b.applyMatrix4(r),e.c.applyMatrix4(r),e.needsUpdate=!0;for(let t=p*3,n=(m+p)*3;t<n;t+=3)if(W(hi,t,l,u),hi.needsUpdate=!0,e.intersectsTriangle(hi))return!0;return!1}});{let e=vr(n);for(let t=p*3,n=(m+p)*3;t<n;t+=3){W(mi,t,l,u),mi.a.applyMatrix4(gi),mi.b.applyMatrix4(gi),mi.c.applyMatrix4(gi),mi.needsUpdate=!0;for(let t=0,n=e*3;t<n;t+=3)if(W(hi,t,d,f),hi.needsUpdate=!0,mi.intersectsTriangle(hi))return!0}}}else{let o=z(e),c=B(e,s);return F(V(o),a,pi),!!(i.intersectsBox(pi)&&bi(o,t,n,r,i)||(F(V(c),a,pi),i.intersectsBox(pi)&&bi(c,t,n,r,i)))}}var xi=new T,Si=new U,Ci=new U,wi=new b,Ti=new b,Ei=new b,Di=new b;function Oi(e,t,n,r={},i={},a=0,o=1/0){t.boundingBox||t.computeBoundingBox(),Si.set(t.boundingBox.min,t.boundingBox.max,n),Si.needsUpdate=!0;let s=e.geometry,c=s.attributes.position,l=s.index,u=t.attributes.position,d=t.index,f=Fr.getPrimitive(),p=Fr.getPrimitive(),m=wi,h=Ti,g=null,_=null;i&&(g=Ei,_=Di);let v=1/0,y=null,b=null;return xi.copy(n).invert(),Ci.matrix.copy(xi),e.shapecast({boundsTraverseOrder:e=>Si.distanceToBox(e),intersectsBounds:(e,t,n)=>n<v&&n<o&&(t&&(Ci.min.copy(e.min),Ci.max.copy(e.max),Ci.needsUpdate=!0),!0),intersectsRange:(e,r)=>{if(t.boundsTree)return t.boundsTree.shapecast({boundsTraverseOrder:e=>Ci.distanceToBox(e),intersectsBounds:(e,t,n)=>n<v&&n<o,intersectsRange:(t,i)=>{for(let o=t,s=t+i;o<s;o++){W(p,3*o,d,u),p.a.applyMatrix4(n),p.b.applyMatrix4(n),p.c.applyMatrix4(n),p.needsUpdate=!0;for(let t=e,n=e+r;t<n;t++){W(f,3*t,l,c),f.needsUpdate=!0;let e=f.distanceToTriangle(p,m,g);if(e<v&&(h.copy(m),_&&_.copy(g),v=e,y=t,b=o),e<a)return!0}}}});{let i=vr(t);for(let t=0,o=i;t<o;t++){W(p,3*t,d,u),p.a.applyMatrix4(n),p.b.applyMatrix4(n),p.c.applyMatrix4(n),p.needsUpdate=!0;for(let n=e,i=e+r;n<i;n++){W(f,3*n,l,c),f.needsUpdate=!0;let e=f.distanceToTriangle(p,m,g);if(e<v&&(h.copy(m),_&&_.copy(g),v=e,y=n,b=t),e<a)return!0}}}}}),Fr.releasePrimitive(f),Fr.releasePrimitive(p),v===1/0?null:(r.point?r.point.copy(h):r.point=h.clone(),r.distance=v,r.faceIndex=y,i&&(i.point?i.point.copy(_):i.point=_.clone(),i.point.applyMatrix4(xi),h.applyMatrix4(xi),i.distance=h.sub(i.point).length(),i.faceIndex=b),r)}function ki(e,t=null){t&&Array.isArray(t)&&(t=new Set(t));let n=e.geometry,r=n.index?n.index.array:null,i=n.attributes.position,a,o,s,c,l=0,u=e._roots;for(let e=0,t=u.length;e<t;e++)a=u[e],o=new Uint32Array(a),s=new Uint16Array(a),c=new Float32Array(a),d(0,l),l+=a.byteLength;function d(n,a,l=!1){let u=n*2;if(I(u,s)){let t=L(n,o),a=R(u,s),l=1/0,d=1/0,f=1/0,p=-1/0,m=-1/0,h=-1/0;for(let n=t,o=t+a;n<o;n++){let t=3*e.resolveTriangleIndex(n);for(let e=0;e<3;e++){let n=t+e;n=r?r[n]:n;let a=i.getX(n),o=i.getY(n),s=i.getZ(n);a<l&&(l=a),a>p&&(p=a),o<d&&(d=o),o>m&&(m=o),s<f&&(f=s),s>h&&(h=s)}}return c[n+0]!==l||c[n+1]!==d||c[n+2]!==f||c[n+3]!==p||c[n+4]!==m||c[n+5]!==h?(c[n+0]=l,c[n+1]=d,c[n+2]=f,c[n+3]=p,c[n+4]=m,c[n+5]=h,!0):!1}{let e=z(n),r=B(n,o),i=l,s=!1,u=!1;if(t){if(!i){let n=e/8+a/32,o=r/8+a/32;s=t.has(n),u=t.has(o),i=!s&&!u}}else s=!0,u=!0;let f=i||s,p=i||u,m=!1;f&&(m=d(e,a,i));let h=!1;p&&(h=d(r,a,i));let g=m||h;if(g)for(let t=0;t<3;t++){let i=e+t,a=r+t,o=c[i],s=c[i+3],l=c[a],u=c[a+3];c[n+t]=o<l?o:l,c[n+t+3]=s>u?s:u}return g}}}function Ai(e,t,n,r,i,a,o){H.setBuffer(e._roots[t]),ii(0,H.float32Array,r,a,o)&&ji(0,e,n,r,i,a,o),H.clearBuffer()}function ji(e,t,n,r,i,a,o){let{float32Array:s,uint16Array:c,uint32Array:l}=H,u=e*2;if(I(u,c))ai(t,n,r,L(e,l),R(u,c),i,a,o);else{let c=z(e);ii(c,s,r,a,o)&&ji(c,t,n,r,i,a,o);let u=B(e,l);ii(u,s,r,a,o)&&ji(u,t,n,r,i,a,o)}}var Mi=[`x`,`y`,`z`];function Ni(e,t,n,r,i,a){H.setBuffer(e._roots[t]);let o=null;return ii(0,H.float32Array,r,i,a)&&(o=Pi(0,e,n,r,i,a)),H.clearBuffer(),o}function Pi(e,t,n,r,i,a){let{float32Array:o,uint16Array:s,uint32Array:c}=H,l=e*2;if(I(l,s))return oi(t,n,r,L(e,c),R(l,s),i,a);{let s=On(e,c),l=Mi[s],u=r.direction[l]>=0,d,f;u?(d=z(e),f=B(e,c)):(d=B(e,c),f=z(e));let p=ii(d,o,r,i,a)?Pi(d,t,n,r,i,a):null;if(p){let e=p.point[l];if(u?e<=o[f+s]:e>=o[f+s+3])return p}let m=ii(f,o,r,i,a)?Pi(f,t,n,r,i,a):null;return p&&m?p.distance<=m.distance?p:m:p||m||null}}var Fi=new v,Ii=new Pr,Li=new Pr,Ri=new T,zi=new U,Bi=new U;function Vi(e,t,n,r){H.setBuffer(e._roots[t]);let i=Hi(0,e,n,r);return H.clearBuffer(),i}function Hi(e,t,n,r,i=null){let{float32Array:a,uint16Array:o,uint32Array:s}=H,c=e*2;if(i===null&&(n.boundingBox||n.computeBoundingBox(),zi.set(n.boundingBox.min,n.boundingBox.max,r),i=zi),I(c,o)){let i=t.geometry,l=i.index,u=i.attributes.position,d=n.index,f=n.attributes.position,p=L(e,s),m=R(c,o);if(Ri.copy(r).invert(),n.boundsTree)return F(V(e),a,Bi),Bi.matrix.copy(Ri),Bi.needsUpdate=!0,n.boundsTree.shapecast({intersectsBounds:e=>Bi.intersectsBox(e),intersectsTriangle:e=>{e.a.applyMatrix4(r),e.b.applyMatrix4(r),e.c.applyMatrix4(r),e.needsUpdate=!0;for(let n=p,r=m+p;n<r;n++)if(W(Li,3*t.resolveTriangleIndex(n),l,u),Li.needsUpdate=!0,e.intersectsTriangle(Li))return!0;return!1}});{let e=vr(n);for(let n=p,r=m+p;n<r;n++){W(Ii,3*t.resolveTriangleIndex(n),l,u),Ii.a.applyMatrix4(Ri),Ii.b.applyMatrix4(Ri),Ii.c.applyMatrix4(Ri),Ii.needsUpdate=!0;for(let t=0,n=e*3;t<n;t+=3)if(W(Li,t,d,f),Li.needsUpdate=!0,Ii.intersectsTriangle(Li))return!0}}}else{let o=z(e),c=B(e,s);return F(V(o),a,Fi),!!(i.intersectsBox(Fi)&&Hi(o,t,n,r,i)||(F(V(c),a,Fi),i.intersectsBox(Fi)&&Hi(c,t,n,r,i)))}}var Ui=new T,Wi=new U,Gi=new U,Ki=new b,qi=new b,Ji=new b,Yi=new b;function Xi(e,t,n,r={},i={},a=0,o=1/0){t.boundingBox||t.computeBoundingBox(),Wi.set(t.boundingBox.min,t.boundingBox.max,n),Wi.needsUpdate=!0;let s=e.geometry,c=s.attributes.position,l=s.index,u=t.attributes.position,d=t.index,f=Fr.getPrimitive(),p=Fr.getPrimitive(),m=Ki,h=qi,g=null,_=null;i&&(g=Ji,_=Yi);let v=1/0,y=null,b=null;return Ui.copy(n).invert(),Gi.matrix.copy(Ui),e.shapecast({boundsTraverseOrder:e=>Wi.distanceToBox(e),intersectsBounds:(e,t,n)=>n<v&&n<o&&(t&&(Gi.min.copy(e.min),Gi.max.copy(e.max),Gi.needsUpdate=!0),!0),intersectsRange:(r,i)=>{if(t.boundsTree){let s=t.boundsTree;return s.shapecast({boundsTraverseOrder:e=>Gi.distanceToBox(e),intersectsBounds:(e,t,n)=>n<v&&n<o,intersectsRange:(t,o)=>{for(let x=t,S=t+o;x<S;x++){let t=s.resolveTriangleIndex(x);W(p,3*t,d,u),p.a.applyMatrix4(n),p.b.applyMatrix4(n),p.c.applyMatrix4(n),p.needsUpdate=!0;for(let t=r,n=r+i;t<n;t++){let n=e.resolveTriangleIndex(t);W(f,3*n,l,c),f.needsUpdate=!0;let r=f.distanceToTriangle(p,m,g);if(r<v&&(h.copy(m),_&&_.copy(g),v=r,y=t,b=x),r<a)return!0}}}})}{let o=vr(t);for(let t=0,s=o;t<s;t++){W(p,3*t,d,u),p.a.applyMatrix4(n),p.b.applyMatrix4(n),p.c.applyMatrix4(n),p.needsUpdate=!0;for(let n=r,o=r+i;n<o;n++){let r=e.resolveTriangleIndex(n);W(f,3*r,l,c),f.needsUpdate=!0;let i=f.distanceToTriangle(p,m,g);if(i<v&&(h.copy(m),_&&_.copy(g),v=i,y=n,b=t),i<a)return!0}}}}}),Fr.releasePrimitive(f),Fr.releasePrimitive(p),v===1/0?null:(r.point?r.point.copy(h):r.point=h.clone(),r.distance=v,r.faceIndex=y,i&&(i.point?i.point.copy(_):i.point=_.clone(),i.point.applyMatrix4(Ui),h.applyMatrix4(Ui),i.distance=h.sub(i.point).length(),i.faceIndex=b),r)}function Zi(e,t,n){return e===null?null:(e.point.applyMatrix4(t.matrixWorld),e.distance=e.point.distanceTo(n.ray.origin),e.object=t,e)}var Qi=new U,$i=new t,ea=new b,ta=new T,na=new b,ra=[`getX`,`getY`,`getZ`],ia=class e extends Tr{static serialize(e,t={}){t={cloneBuffers:!0,...t};let n=e.geometry,r=e._roots,i=e._indirectBuffer,a=n.getIndex(),o={version:1,roots:null,index:null,indirectBuffer:null};return t.cloneBuffers?(o.roots=r.map(e=>e.slice()),o.index=a?a.array.slice():null,o.indirectBuffer=i?i.slice():null):(o.roots=r,o.index=a?a.array:null,o.indirectBuffer=i),o}static deserialize(t,n,r={}){r={setIndex:!0,indirect:!!t.indirectBuffer,...r};let{index:i,roots:a,indirectBuffer:o}=t;t.version||(console.warn(`MeshBVH.deserialize: Serialization format has been changed and will be fixed up. It is recommended to regenerate any stored serialized data.`),c(a));let s=new e(n,{...r,[Cn]:!0});if(s._roots=a,s._indirectBuffer=o||null,r.setIndex){let e=n.getIndex();if(e===null){let e=new De(t.index,1,!1);n.setIndex(e)}else e.array!==i&&(e.array.set(i),e.needsUpdate=!0)}return s;function c(e){for(let t=0;t<e.length;t++){let n=e[t],r=new Uint32Array(n),i=new Uint16Array(n);for(let e=0,t=n.byteLength/32;e<t;e++){let t=8*e;I(2*t,i)||(r[t+6]=r[t+6]/8-e)}}}}get primitiveStride(){return 3}get resolveTriangleIndex(){return this.resolvePrimitiveIndex}constructor(e,t={}){t.maxLeafTris&&(console.warn(`MeshBVH: "maxLeafTris" option has been deprecated. Use "targetLeafSize", instead.`),t={...t,targetLeafSize:t.maxLeafTris}),super(e,t)}shiftTriangleOffsets(e){return super.shiftPrimitiveOffsets(e)}writePrimitiveBounds(e,t,n){let r=this.geometry,i=this._indirectBuffer,a=r.attributes.position,o=r.index?r.index.array:null,s=(i?i[e]:e)*3,c=s+0,l=s+1,u=s+2;o&&(c=o[c],l=o[l],u=o[u]);for(let e=0;e<3;e++){let r=a[ra[e]](c),i=a[ra[e]](l),o=a[ra[e]](u),s=r;i<s&&(s=i),o<s&&(s=o);let d=r;i>d&&(d=i),o>d&&(d=o),t[n+e]=s,t[n+e+3]=d}return t}computePrimitiveBounds(e,t,n){let r=this.geometry,i=this._indirectBuffer,a=r.attributes.position,o=r.index?r.index.array:null,s=a.normalized;if(e<0||t+e-n.offset>n.length/6)throw Error(`MeshBVH: compute triangle bounds range is invalid.`);let c=a.array,l=a.offset||0,u=3;a.isInterleavedBufferAttribute&&(u=a.data.stride);let d=[`getX`,`getY`,`getZ`],f=n.offset;for(let r=e,p=e+t;r<p;r++){let e=(i?i[r]:r)*3,t=(r-f)*6,p=e+0,m=e+1,h=e+2;o&&(p=o[p],m=o[m],h=o[h]),s||(p=p*u+l,m=m*u+l,h=h*u+l);for(let e=0;e<3;e++){let r,i,o;s?(r=a[d[e]](p),i=a[d[e]](m),o=a[d[e]](h)):(r=c[p+e],i=c[m+e],o=c[h+e]);let l=r;i<l&&(l=i),o<l&&(l=o);let u=r;i>u&&(u=i),o>u&&(u=o);let f=(u-l)/2,g=e*2;n[t+g+0]=l+f,n[t+g+1]=f+(Math.abs(l)+f)*Sn}}return n}raycastObject3D(e,t,n=[]){let{material:r}=e;if(r===void 0)return;ta.copy(e.matrixWorld).invert(),$i.copy(t.ray).applyMatrix4(ta),na.setFromMatrixScale(e.matrixWorld),ea.copy($i.direction).multiply(na);let i=ea.length(),a=t.near/i,o=t.far/i;if(t.firstHitOnly===!0){let i=this.raycastFirst($i,r,a,o);i=Zi(i,e,t),i&&n.push(i)}else{let i=this.raycast($i,r,a,o);for(let r=0,a=i.length;r<a;r++){let a=Zi(i[r],e,t);a&&n.push(a)}}return n}refit(e=null){return(this.indirect?ki:ri)(this,e)}raycast(e,t=0,n=0,r=1/0){let i=this._roots,a=[],o=this.indirect?Ai:ci;for(let s=0,c=i.length;s<c;s++)o(this,s,t,e,a,n,r);return a}raycastFirst(e,t=0,n=0,r=1/0){let i=this._roots,a=null,o=this.indirect?Ni:di;for(let s=0,c=i.length;s<c;s++){let i=o(this,s,t,e,n,r);i!=null&&(a==null||i.distance<a.distance)&&(a=i)}return a}intersectsGeometry(e,t){let n=!1,r=this._roots,i=this.indirect?Vi:yi;for(let a=0,o=r.length;a<o&&(n=i(this,a,e,t),!n);a++);return n}shapecast(e){let t=Fr.getPrimitive(),n=super.shapecast({...e,intersectsPrimitive:e.intersectsTriangle,scratchPrimitive:t,iterate:this.indirect?si:ni});return Fr.releasePrimitive(t),n}bvhcast(t,n,r){let{intersectsRanges:i,intersectsTriangles:a}=r,o=Fr.getPrimitive(),s=this.geometry.index,c=this.geometry.attributes.position,l=this.indirect?e=>{let t=this.resolveTriangleIndex(e);W(o,t*3,s,c)}:e=>{W(o,e*3,s,c)},u=Fr.getPrimitive(),d=t.geometry.index,f=t.geometry.attributes.position,p=t.indirect?e=>{let n=t.resolveTriangleIndex(e);W(u,n*3,d,f)}:e=>{W(u,e*3,d,f)};if(a){if(!(t instanceof e))throw Error(`MeshBVH: "intersectsTriangles" callback can only be used with another MeshBVH.`);let r=(e,t,r,i,s,c,d,f)=>{for(let m=r,h=r+i;m<h;m++){p(m),u.a.applyMatrix4(n),u.b.applyMatrix4(n),u.c.applyMatrix4(n),u.needsUpdate=!0;for(let n=e,r=e+t;n<r;n++)if(l(n),o.needsUpdate=!0,a(o,u,n,m,s,c,d,f))return!0}return!1};if(i){let e=i;i=function(t,n,i,a,o,s,c,l){return e(t,n,i,a,o,s,c,l)?!0:r(t,n,i,a,o,s,c,l)}}else i=r}return super.bvhcast(t,n,{intersectsRanges:i})}intersectsBox(e,t){return Qi.set(e.min,e.max,t),Qi.needsUpdate=!0,this.shapecast({intersectsBounds:e=>Qi.intersectsBox(e),intersectsTriangle:e=>Qi.intersectsTriangle(e)})}intersectsSphere(e){return this.shapecast({intersectsBounds:t=>e.intersectsBox(t),intersectsTriangle:t=>t.intersectsSphere(e)})}closestPointToGeometry(e,t,n={},r={},i=0,a=1/0){return(this.indirect?Xi:Oi)(this,e,t,n,r,i,a)}closestPointToPoint(e,t={},n=0,r=1/0){return Rr(this,e,t,n,r)}},aa=new b,oa=new b,sa=new b,ca=new t,la=new T,ua=new b,da=new b,fa=[`x`,`y`,`z`],pa=!0,ma=new E,ha=new E,ga=new E,_a=new b,va=new b,ya=new b,ba=class extends Tr{get primitiveStride(){return 3}constructor(e,t={}){if(!e.isMesh)throw Error(`SkinnedMeshBVH: First argument must be a Mesh.`);super(e.geometry,{...t,[Cn]:!0}),this.mesh=e,t[Cn]||this.init(t)}writePrimitiveBounds(e,t,n){let{mesh:r,geometry:i}=this,a=this._indirectBuffer,o=i.index?i.index.array:null,s=(a?a[e]:e)*3,c=s+0,l=s+1,u=s+2;o&&(c=o[c],l=o[l],u=o[u]),r.getVertexPosition(c,aa),r.getVertexPosition(l,oa),r.getVertexPosition(u,sa);for(let e=0;e<3;e++){let r=fa[e],i=aa[r],a=oa[r],o=sa[r],s=i;a<s&&(s=a),o<s&&(s=o);let c=i;a>c&&(c=a),o>c&&(c=o),t[n+e]=s,t[n+e+3]=c}return t}shapecast(e){let t=new Pr;return super.shapecast({...e,intersectsPrimitive:e.intersectsTriangle,scratchPrimitive:t,iterate:xa})}raycastObject3D(e,t,n=[]){let{material:r}=e;if(r===void 0)return;let{matrixWorld:i}=e,{firstHitOnly:a}=t;la.copy(i).invert(),ca.copy(t.ray).applyMatrix4(la);let s=null,c=1/0;return this.shapecast({boundsTraverseOrder:e=>e.distanceToPoint(ca.origin),intersectsBounds:e=>{if(a){if(!ca.intersectBox(e,da))return 0;let n;return e.containsPoint(ca.origin)?n=0:(da.applyMatrix4(i),n=t.ray.origin.distanceTo(da)),+(n<c)}return+!!ca.intersectsBox(e)},intersectsTriangle:(l,u)=>{let d=null;if(d=r.side===0?ca.intersectTriangle(l.a,l.b,l.c,!0,ua):r.side===1?ca.intersectTriangle(l.c,l.b,l.a,!0,ua):ca.intersectTriangle(l.a,l.b,l.c,!1,ua),!d)return;d=d.clone().applyMatrix4(i);let f=t.ray.origin.distanceTo(d);if(f>=t.near&&f<=t.far){if(a&&f>=c)return;let{geometry:t}=this,{index:r}=t,i=this.resolvePrimitiveIndex(u),p=i*3,m=p+0,h=p+1,g=p+2;r&&(m=r.array[m],h=r.array[h],g=r.array[g]);let _={distance:f,point:d.clone(),object:e,uv:null,uv1:null,normal:null,face:{a:m,b:h,c:g,normal:o.getNormal(l.a,l.b,l.c,new b),materialIndex:0},faceIndex:i};if(pa){let e=new b;o.getBarycoord(ua,l.a,l.b,l.c,e),_.barycoord=e}let v=t.attributes.uv,y=t.attributes.uv1,x=t.attributes.normal;if(v){ma.fromBufferAttribute(v,m),ha.fromBufferAttribute(v,h),ga.fromBufferAttribute(v,g),_.uv=new E;let e=o.getInterpolation(ua,l.a,l.b,l.c,ma,ha,ga,_.uv);pa||(_.uv=e)}if(y){ma.fromBufferAttribute(y,m),ha.fromBufferAttribute(y,h),ga.fromBufferAttribute(y,g),_.uv1=new E;let e=o.getInterpolation(ua,l.a,l.b,l.c,ma,ha,ga,_.uv1);pa||(_.uv1=e)}if(x){_a.fromBufferAttribute(x,m),va.fromBufferAttribute(x,h),ya.fromBufferAttribute(x,g),_.normal=new b;let e=o.getInterpolation(ua,l.a,l.b,l.c,_a,va,ya,_.normal);_.normal.dot(ca.direction)>0&&_.normal.multiplyScalar(-1),pa||(_.normal=e)}c=_.distance,s=_,a||n.push(_)}}}),a&&s&&n.push(s),n}};function xa(e,t,n,r,i,a,o){let{mesh:s,geometry:c}=n,l=c.index?c.index.array:null;for(let c=e,u=t+e;c<u;c++){let e=n.resolvePrimitiveIndex(c),t=3*e+0,u=3*e+1,d=3*e+2;if(l&&(t=l[t],u=l[u],d=l[d]),s.getVertexPosition(t,o.a),s.getVertexPosition(u,o.b),s.getVertexPosition(d,o.c),o.needsUpdate=!0,r(o,c,i,a))return!0}return!1}var Sa=new O({min:`array<f32, 3>`,max:`array<f32, 3>`},`BVHBoundingBox`);Sa.getLength=()=>6;var Ca=new O({leftBounds:`BVHBoundingBox`,rightBounds:`BVHBoundingBox`,rightChildOrTriangleOffset:`uint`,splitAxisOrTriangleCount:`uint`,_alignment0:`uint`,_alignment1:`uint`},`BVHNode`);Ca.getLength=()=>2*Sa.getLength()+4;var wa=new O({matrixWorld:`mat4x4f`,inverseMatrixWorld:`mat4x4f`,visible:`uint`,_alignment0:`uint`,_alignment1:`uint`,_alignment2:`uint`},`TransformStruct`),G=new O({origin:`vec3f`,direction:`vec3f`,maxDist:`float`},`Ray`),Ta=new O({indices:`vec4u`,normal:`vec3f`,didHit:`bool`,barycoord:`vec3f`,objectIndex:`uint`,side:`float`,dist:`float`},`IntersectionResult`),Ea=new O({faceIndices:`vec4u`,closestPoint:`vec3f`,found:`bool`,barycoord:`vec3f`,objectIndex:`uint`,faceNormal:`vec3f`,side:`float`,distanceSq:`float`},`PointQueryResult`),Da=We(`

	const BVH_STACK_DEPTH = 60u;
	const INFINITY = 1e20;
	const TRI_INTERSECT_EPSILON = 1e-5;

`),Oa=We(`
	struct IntersectionResult {
		indices: vec4u,
		normal: vec3f,
		didHit: bool,
		barycoord: vec3f,
		side: f32,
		dist: f32,
	};
`);D(`

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

`);var ka=D(`

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

`,[G,Sa]),Aa=D(`

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

`,[G,Oa,Da]),ja=D(`

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

`,[Aa,G,Oa,Da]);D(`

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

`,[ja,ka,G,Ca,Oa,Da]);var Ma=class extends _t{static get type(){return`ProxyCallNode`}constructor(e,t){super(),this.proxyNode=e,this.params=t}setup(){return this.proxyNode.proxyNode.call(...this.params)}},Na=class{get isNode(){return!0}get proxyNode(){let{proxyObject:e,proxyProperty:t}=this,n=t.split(`.`),r=e;for(let e=0,t=n.length;e<t;e++)r=r?.[n[e]];return r&&`functionNode`in r?r.functionNode:r??null}constructor(e,t=null){return this.proxyObject=t,this.proxyProperty=e,new Proxy(this,{get(e,t){if(t in e)return Reflect.get(e,t);{let n=e.proxyNode;if(!n)return;let r=Reflect.get(n,t);return typeof r==`function`?r.bind(n):r}},set(e,t,n){if(t in e)return Reflect.set(e,t,n);throw Error(`NodeProxy: Cannot set members of proxied nodes.`)}})}},K=(...e)=>new Na(...e),q=(...e)=>{let t=new Na(...e);return Ae.nodeProxyConstructor((...e)=>new Ma(t,e),t)},Pa=class extends Na{get proxyNode(){return super.proxyNode||this.fallbackNode}constructor(e,t){super(e,null),Object.defineProperty(this,"fallbackNode",{value:t})}setup(e){return this.proxyObject=e.getContext(),this.proxyNode.setup(e)}},Fa=(...e)=>new Pa(...e),J=(...e)=>{let t=new Pa(...e);return Ae.nodeProxyConstructor((...e)=>new Ma(t,e),t)},Ia=new de,La=new de;function Ra(e,t,n,r){let i=t*8;for(let t=0;t<3;t++){let a=e[i+t],o=e[i+t+3];a>o?(n[r+t]=1,n[r+t+3]=-1):(n[r+t]=a,n[r+t+3]=o)}}function za(e,t,n,r,i){let a=n*8;Ra(e,n+1,r,i),Ra(e,n+t[a+6],r,i+6)}function Ba(e,t){let n=e?e.array:null,r=new Uint32Array(t.length*3);for(let e=0,i=t.length;e<i;e++){let i=3*e,a=3*t[e];for(let e=0;e<3;e++)r[i+e]=n?n[a+e]:a+e}return r}function Va(e,t,n,r){let i=new Uint32Array(r),a=new Float32Array(r);e._roots.forEach(e=>{let r=new Uint16Array(e),o=new Uint32Array(e),s=new Float32Array(e);for(let c=0,l=e.byteLength/32;c<l;c++){let e=c*8,l=e*2,u=n*16,d=I(l,r);if(d||za(s,o,c,a,u),t===null){n++;continue}if(d){let n=o[e+6],{transformSlot:a,nodeOffset:s}=r[l+14]===0?{transformSlot:0,nodeOffset:0}:t[n];if(a>16777215)throw Error(`packBVHBufferUtils: transform slot ${a} exceeds the 24-bit TLAS leaf limit.`);i[u+12]=s,i[u+13]=4278190080|a&16777215}else i[u+12]=o[e+6],i[u+13]=o[e+7];n++}})}function Ha(e,t){return Ua(new Uint16Array(e),new Uint32Array(e),t)}function Ua(e,t,n){if(I(n*8*2,e))return 1;let r=t[n*8+6];return r+Ua(e,t,n+r)}function Wa(e,t=0){let n=new Uint16Array(e),r=new Uint32Array(e),i=0;return a(t*8,1),i;function a(e,t){let o=e;if(I(e*2,n))i=Math.max(t,i);else{let e=B(o,r);a(z(o),t+1),a(e,t+1)}}}function Ga(e,t,n,r,i,a){let o=new Uint16Array(a),s=new Uint32Array(a),c=new Float32Array(a),l=new Uint16Array(e),u=new Uint32Array(e),d=new Float32Array(e);for(let e=0;e<n;e++){let n=t+e,a=n*8,f=a*2,p=i*16,m=p*2;I(f,l)?(s[p+12]=u[a+6]+r,o[m+26]=l[f+14],o[m+27]=xn):(za(d,u,n,c,p),s[p+12]=u[a+6],s[p+13]=u[a+7]),i++}}function Ka(e,t,n,r,i){let{geometry:a}=e,{start:o,count:s,vertexStart:c}=t;if(e.indirect){let t=Ba(a.index,e._indirectBuffer);for(let e=0;e<t.length;e++)i[e+r]=t[e]-c+n}else if(a.index)for(let e=0;e<s;e++)i[e+r]=a.index.getX(e+o)-c+n;else for(let e=0;e<s;e++)i[e+r]=e+o+n}function qa(e,t,n,r,i,a){let{geometry:o,mesh:s=null}=e,{vertexStart:c,vertexCount:l}=t,u=new Float32Array(r),d=i.getLength();i.membersLayout.forEach(({name:e},t)=>{let r=o.attributes[e];a.getDefaultAttributeValue(e,Ia);for(let i=0;i<l;i++){if(r){switch(La.fromBufferAttribute(r,i+c),r.itemSize){case 1:La.y=Ia.y,La.z=Ia.z,La.w=Ia.w;break;case 2:La.z=Ia.z,La.w=Ia.w;break;case 3:La.w=Ia.w}s&&(e===`position`||e===`normal`||e===`tangent`)&&s.applyBoneTransform(i+c,La)}else La.copy(Ia);La.toArray(u,(n+i)*d+t*4)}})}var Ja=class extends _t{constructor(e){super(),this.literal=e}build(){return this.literal}},Ya=class extends _t{constructor(e,t=`property`){super(),this.node=e,this.output=t}build(e){return this.node.build(e,this.output)}};function Xa(e){return e.isNode?new Ya(e):null}function Za(e){let t=[];for(let n of e)if(Array.isArray(n))for(let e of n){let n=Xa(e);n&&t.push(n)}return t}function Qa(e,t){return e.map(e=>(e&&!e.isNode&&e instanceof Function&&(e=e(t)),e&&e.isNode?(e.setup(t),e.isWGSLTagCodeNode?new Ya(e,`inline`):new Ya(e)):e))}function $a(e,t,n){let r=``;for(let i=0,a=e.length;i<a;i++)if(r+=e[i],i<t.length){let e=t[i];Array.isArray(e)||(r+=typeof e==`string`||typeof e==`number`?String(e):e.build(n))}return r}var eo=class extends Re{static get type(){return`WGSLTagFnNode`}constructor(e,t,n=`wgsl`){super(``,Za(t),n),this.isWGSLTagFnNode=!0,this.tokens=e,this.args=t}setup(e){super.setup(e),this._normalizedArgs=Qa(this.args,e)}getNodeFunction(e){let{tokens:t,_normalizedArgs:n}=this,r=e.getDataFromNode(this),i=r.nodeFunction;if(i===void 0){let a=``;for(let r=0,i=t.length;r<i;r++)if(a+=t[r],r<n.length){let t=n[r];Array.isArray(t)||(typeof t==`string`||typeof t==`number`?a+=String(t):t.isStructLayoutNode?a+=t.getNodeType(e):t.isStruct?a+=t.layout.getNodeType(e):a+=`_arg`+r)}a=a.replace(/\/\/.*[\n\r]/g,``),i=e.parser.parseFunction(a),r.nodeFunction=i}return i}generate(e,t){let n=super.generate(e,t),{_normalizedArgs:r}=this,i=$a(this.tokens,r,e),{type:a}=this.getNodeFunction(e),o=e.getCodeFromNode(this,a);return o.code=i.replace(/\/\/.+[\n\r]/g,``).replace(/->\s*void/,``).trim(),n}},to=class extends Pe{static get type(){return`WGSLTagCodeNode`}constructor(e,t,n=`wgsl`){super(``,Za(t),n),this.isWGSLTagCodeNode=!0,this.tokens=e,this.args=t}setup(e){super.setup(e),this._normalizedArgs=Qa(this.args,e)}build(e,t){return t===`inline`?$a(this.tokens,this._normalizedArgs,e):super.build(e,t)}generate(e){super.generate(e);let t=e.getCodeFromNode(this,this.getNodeType(e));return t.code=$a(this.tokens,this._normalizedArgs,e),t.code}},no=e=>Ae.nodeProxyConstructor((...t)=>{if(t.length===1&&t[0]&&typeof t[0]==`object`&&!t[0].isNode){let e=t[0];for(let t in e)typeof e[t]==`string`&&(e[t]=new Ja(e[t]))}return e.call(...t)},e),Y=(e,...t)=>no(new eo(e,t)),ro=(e,...t)=>new to(e,t),io=ot(60);function ao(e,t){let{name:n=`bvh_shapecast_fn_${Math.random().toString(36).substring(2,7)}`,shapeStruct:r,resultStruct:i=null,prefixFn:a=null,boundsOrderFn:o=null,intersectsBoundsFn:s,intersectRangeFn:c,transformShapeFn:l=null,transformResultFn:u=null,resetShapeFn:d=null}=t,{nodes:f,transforms:p}=e.storage,m=``;a&&(m=ro`${a}();`);let h=``;u&&(h=ro`${u}( result, objectIndex );`);let g=``;l&&(g=ro`${l}( &localShape, objectIndex );`);let _=``;d&&(_=ro`${d}( objectIndex );`);let v=``;o&&(v=ro`
			let leftToRight = ${o}( localShape, splitAxis, node );
			c1 = select( rightIndex, leftIndex, leftToRight );
			c2 = select( leftIndex, rightIndex, leftToRight );
			hit1 = select( hitRight, hitLeft, leftToRight );
			hit2 = select( hitLeft, hitRight, leftToRight );
		`);let y=i?ro`result: ptr<function, ${i}>`:``,b=i?`result`:``,x=Y`
		// fn
		fn ${n}( shape: ${r}, ${y} ) -> bool {

			${m}

			var didHit = false;

			var isTLAS = true;
			var pointer: i32 = 0;
			var stack: array<u32, ${io}>;
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
				if ( pointer < 0 || pointer >= i32( ${io} ) ) {

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
	`;return x.outputType=i,x.functionName=n,x}var oo=Y`
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
`,so=Y`
	// fn
	fn intersectRayTriangle( ray: ${G}, a: vec3f, b: vec3f, c: vec3f, threshold: f32 ) -> ${Ta} {

		const DET_EPSILON = 1e-15;

		var result: ${Ta};
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
`,co=Y`
	// fn
	fn ndcToCameraRay( ndc: vec2f, inverseModelViewProjection: mat4x4f ) -> ${G} {

		var homogeneous = vec4f();
		var ray: ${G};

		homogeneous = inverseModelViewProjection * vec4f( ndc, 0.0, 1.0 );
		ray.origin = homogeneous.xyz / homogeneous.w;

		homogeneous = inverseModelViewProjection * vec4f( ndc, 1.0, 1.0 );
		let toFarPlane = ( homogeneous.xyz / homogeneous.w ) - ray.origin;
		ray.maxDist = length( toFarPlane );
		ray.direction = toFarPlane / ray.maxDist;

		return ray;

	}
`;function lo(e){let{index:t,attributes:n,transforms:r}=e.storage,i=yt(1).toVar(`bvh_rayScalar_${Math.random().toString(36).substring(2,7)}`);return e.getShapecastFn({name:`bvh_RaycastFirstHit`,shapeStruct:G,resultStruct:Ta,boundsOrderFn:Y`
			fn getBoundsOrder( ray: ${G}, splitAxis: u32, node: ${Ca} ) -> bool {

				return ray.direction[ splitAxis ] >= 0.0;

			}
		`,intersectsBoundsFn:Y`
			fn rayIntersectsBounds( ray: ${G}, bounds: ${Sa}, result: ptr<function, ${Ta}> ) -> u32 {

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
			fn intersectRange( ray: ${G}, offset: u32, count: u32, result: ptr<function, ${Ta}> ) -> bool {

				var didHit = false;
				for ( var ti = offset; ti < offset + count; ti = ti + 1u ) {

					let i0 = ${t}[ ti * 3u ];
					let i1 = ${t}[ ti * 3u + 1u ];
					let i2 = ${t}[ ti * 3u + 2u ];

					let a = ${n}[ i0 ].position.xyz;
					let b = ${n}[ i1 ].position.xyz;
					let c = ${n}[ i2 ].position.xyz;

					var triResult = ${so}( ray, a, b, c, 0.0 );
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
			fn transformRay( ray: ptr<function, ${G}>, objectIndex: u32 ) -> void {

				let toLocal = ${r}[ objectIndex ].inverseMatrixWorld;
				ray.origin = ( toLocal * vec4f( ray.origin, 1.0 ) ).xyz;
				ray.direction = ( toLocal * vec4f( ray.direction, 0.0 ) ).xyz;

				let len = length( ray.direction );
				ray.direction /= len;
				${i} = 1.0 / len;

			}
		`,transformResultFn:Y`
			fn transformResult( hit: ptr<function, ${Ta}>, objectIndex: u32 ) -> void {

				let toLocal = ${r}[ objectIndex ].inverseMatrixWorld;
				hit.normal = normalize( ( transpose( toLocal ) * vec4f( hit.normal, 0.0 ) ).xyz );
				hit.objectIndex = objectIndex;

			}
		`,resetShapeFn:Y`
			fn resetRayScalar( objectIndex: u32 ) -> void {

				${i} = 1.0;

			}
		`})}function uo(e){let{storage:t,structs:n}=e,r=n.attributes.membersLayout.map(({name:e})=>`result.${e} = a0.${e} * barycoord.x + a1.${e} * barycoord.y + a2.${e} * barycoord.z;`).join(`
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
	`}function fo(e){let{index:t,attributes:n,transforms:r}=e.storage,i=mt().toVar(`bvh_toWorldMat`);return e.getShapecastFn({name:`bvh_ClosestPointToPoint`,shapeStruct:`vec3f`,resultStruct:Ea,boundsOrderFn:Y`
			fn cppBoundsOrder( shape: vec3f, splitAxis: u32, node: ${Ca} ) -> bool {

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
			fn cppIntersectsBounds( shape: vec3f, bounds: ${Sa}, result: ptr<function, ${Ea}> ) -> u32 {

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
			fn cppIntersectsRange( shape: vec3f, offset: u32, count: u32, result: ptr<function, ${Ea}> ) -> bool {

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

					let barycoord = ${oo}( shape, a, b, c );
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
			fn cppTransformResult( result: ptr<function, ${Ea}>, objectIndex: u32 ) -> void {

				result.objectIndex = objectIndex;

			}
		`})}var po=24,mo=(1<<po)-1,ho=7,go=127,_o=new T,vo=new v,yo=new T,bo=class extends hr{constructor(e,t){super(),t={getBVH:(e,t)=>{throw Error(`ClusteredBVH: getBVH callback must be provided `)},shouldCluster:e=>e.isSkinnedMesh||e.isInstancedMesh||e.isBatchedMesh,primitiveLimit:64,matrixWorld:Array.isArray(e)?new T:e.matrixWorld,includeInstances:!0,_strictLeafSize:1,...t};let n=Array.from(So(e)),r=Math.ceil(Math.log2(n.length)),i=(1<<r)-1;this.objects=n,this.getBVH=t.getBVH,this.shouldCluster=t.shouldCluster,this.includeInstances=t.includeInstances,this.primitiveLimit=t.primitiveLimit,this.matrixWorld=t.matrixWorld,this.bvhMap=new WeakMap,this.idBits=r,this.idMask=i,this.primitiveBufferStride=2,this.init(t)}init(e){let t=0,{objects:n,bvhMap:r,matrixWorld:i}=this;_o.copy(i).invert(),n.forEach(e=>{let n=[];for(let r=0,i=this._getInstanceCount(e);r<i;r++){let i=this.getBVH(e,r);n.push(i),i&&(t+=this.shouldCluster(e)?i._roots.length:this._countRelevantLeafNodes(i))}r.set(e,n)}),this.primitiveBuffer=new Uint32Array(t*2),this._fillPrimitiveBuffer(this.primitiveBuffer),super.init(e)}getRootRanges(){return[{offset:0,count:this.primitiveBuffer.length/this.primitiveBufferStride}]}refit(...e){_o.copy(this.matrixWorld).invert(),super.refit(...e)}writePrimitiveBounds(e,t,n){let{primitiveBuffer:r,bvhMap:i,objects:a}=this,o=r[2*e+0],s=r[2*e+1],c=a[this.getObjectId(o)],l=this.getInstanceId(o),u=i.get(c)[l],d=this.getBVHRootIndex(s),f=this.getBVHNodeIndex(s);c.isInstancedMesh||c.isBatchedMesh?(c.getMatrixAt(l,yo),yo.premultiply(c.matrixWorld)):yo.copy(c.matrixWorld),yo.premultiply(_o),F(f,new Float32Array(u._roots[d]),vo),vo.applyMatrix4(yo);let{min:p,max:m}=vo;t[n+0]=p.x,t[n+1]=p.y,t[n+2]=p.z,t[n+3]=m.x,t[n+4]=m.y,t[n+5]=m.z}getInstanceId(e){let{idMask:t,idBits:n}=this;return(e&~t)>>>n}getObjectId(e){let{idMask:t}=this;return e&t}getBVHRootIndex(e){return e>>>po}getBVHNodeIndex(e){return(e&mo)*8}_getInstanceCount(e){let{includeInstances:t}=this;return e.isInstancedMesh&&t?e.count:e.isBatchedMesh&&t?e.instanceCount:1}_fillPrimitiveBuffer(e){let{objects:t,bvhMap:n,idBits:r,primitiveLimit:i}=this,a=0,o=(t,n,i,o)=>{if(o>mo)throw Error(`ClusteredBVH: cluster node index ${o} exceeds the ${po}-bit packing limit and cannot be represented.`);if(i>go)throw Error(`ClusteredBVH: bvh root index ${i} exceeds the ${ho}-bit packing limit and cannot be represented.`);e[2*a+0]=t<<r|n,e[2*a+1]=i<<po|o&mo,a++};t.forEach((e,t)=>{n.get(e).forEach((n,r)=>{if(n){if(this.shouldCluster(e))for(let e=0,i=n._roots.length;e<i;e++)o(r,t,e,0);else xo(n,i,(e,n)=>{o(r,t,e,n/8)})}})})}_countRelevantLeafNodes(e){let{primitiveLimit:t}=this,n=0;return xo(e,t,(e,r,i,a)=>{n++,a&&i>=t&&console.warn(`ClusteredBVH: a leaf node with ${i} primitives exceeds the cluster primitive limit of ${t} and cannot be subdivided further.`)}),n}};function xo(e,t,n){let r=e._roots.length;for(let i=0;i<r;i++)fr.setBVH(e,i),fr.traverseBuffer((e,r,a)=>{let o=fr.getRangeStart(a),s=fr.getRangeEnd(a)-o;return s<t||r?(n(i,a,s,r),!0):!1});fr.reset()}function So(e,t=new Set){return Array.isArray(e)?e.forEach(e=>So(e,t)):e.traverse(e=>{e.isMesh&&t.add(e)}),t}var Co=new T,wo=new T,To={start:0,count:0,vertexStart:0,vertexCount:0};function Eo(e){let t=e;for(;t;){if(t.visible===!1)return!1;t=t.parent}return!0}function Do(e){return e._roots.reduce((e,t)=>e+t.byteLength/32,0)}function Oo(e,t){return`${e}_${t}`}var ko=class{constructor(e,t={}){let{attributes:n={position:`vec4f`},autogenerateBvh:r=!0}=t;Array.isArray(e)||(e=[e]),e=e.map(e=>{if(e.isObject3D)return e;if(e.isBufferGeometry)return new le(e);if(e instanceof Tr){let t=new le;return t.geometry.boundsTree=e,t}}),this._bvhCache=new Map,this.autogenerateBvh=r,this.attributes=n,this.objects=e,this.bvh=null,this.storage=new Ao,this.structs=new Ao({transform:wa}),this.fns=new Ao({raycastFirstHit:lo(this),closestPointToPoint:fo(this),sampleTrianglePoint:null},q)}getRootObject(){let{objects:e}=this;if(e.isObject3D)return e;Array.isArray(e)||(e=[e]),e=e.map(e=>{if(e.isObject3D)return e;if(e.isBufferGeometry)return new le(e);if(e instanceof Tr){let t=new le;return t.geometry.boundsTree=e,t}});let t=new u;return t.children=e,t}getShapecastFn(e){return ao(this,e)}update(){let e=this.getRootObject(),t=0;e.traverse(e=>{e.isMesh&&t++}),this.bvh=new bo(e,{strategy:2,getBVH:(e,t)=>this._getBVHSync(e,t,To),primitiveLimit:t<3?1/0:64}),this.dispose();let{attributes:n,structs:r,bvh:i}=this,a=[],o=[],s=new Map,c=Do(i)*64,l=0,u=0,d=[],f=0,p=this._getTransformMap(i),{primitiveBuffer:m,primitiveBufferStride:h}=i;for(let e=0,t=m.length;e<t;e+=h){let t=m[e],n=m[e+1],r=i.objects[i.getObjectId(t)],h=i.getInstanceId(t),g={start:0,count:0,vertexStart:0,vertexCount:0},_=this._getBVHSync(r,h,g);if(!_)throw Error(`BVHComputeData: BVH not found.`);let v=a.find(e=>e.bvh===_);v||(v={index:a.length,bvh:_,range:g,geometryOffset:0},l+=v.range.count,u+=v.range.vertexCount,a.push(v));let y=i.getBVHRootIndex(n),b=i.getBVHNodeIndex(n)/8,x=`${v.index}_${y}_${b}`,S=s.get(x);if(S===void 0){let e=Ha(_._roots[y],b);S={data:v,root:y,node:b,size:e,base:0},s.set(x,S),o.push(S),c+=e*64,f=Math.max(f,Wa(_._roots[y],b))}d.push({transformSlot:p.get(Oo(t,y)).slot,subtree:S})}if(Wa(i._roots[0])+f-1>io.value)throw Error(`BVHComputeData: BVH depth overruns the compute stack depth.`);let g=Math.max(p.size,2);l=Math.max(l,2),u=Math.max(u,2);let _=new O(n,`bvh_GeometryStruct`),v=0,y=0,b=new Uint32Array(l),x=new ArrayBuffer(u*_.getLength()*4),S=new ArrayBuffer(c);a.forEach(e=>{e.geometryOffset=y/3,e.bvh.indirect||(e.geometryOffset-=e.range.start/3),Ka(e.bvh,e.range,v,y,b),qa(e.bvh,e.range,v,x,_,this),y+=e.range.count,v+=e.range.vertexCount});let C=Do(i);o.forEach(e=>{e.base=C,Ga(e.data.bvh._roots[e.root],e.node,e.size,e.data.geometryOffset,C,S),C+=e.size}),d.forEach(e=>e.nodeOffset=e.subtree.base),Va(i,d,0,S);let w=new ArrayBuffer(r.transform.getLength()*g*4),ee=j(new k(new Uint32Array(S),1),Ca).toReadOnly().setName(`bvh_nodes`),te=new k(new Uint32Array(w),1),ne=j(te,r.transform).toReadOnly().setName(`bvh_transforms`),re=j(new k(b,1),`uint`).toReadOnly().setName(`bvh_index`),T=j(new k(new Uint32Array(x),_.getLength()),_).toReadOnly().setName(`bvh_attributes`);this.storage.transforms=ne,this.storage.nodes=ee,this.storage.index=re,this.storage.attributes=T,this.structs.attributes=_,wo.copy(i.matrixWorld).invert(),p.forEach(e=>{this.writeTransformData(e,wo,e.slot,w)}),this.fns.sampleTrianglePoint=uo(this),this._bvhCache.clear()}async updateAsync(){let e=[];this.getRootObject().traverse(t=>{if(!t.isMesh)return;let n=1;t.isInstancedMesh?n=t.count:t.isBatchedMesh&&(n=t.instanceCount);for(let r=0;r<n;r++)e.push(this.getBVH(t,r,To))}),await Promise.all(e),this.update()}updateTransforms(){let{bvh:e,storage:t}=this;e.refit();let n=t.nodes.proxyNode.value;Va(e,null,0,n.array.buffer),n.needsUpdate=!0;let r=t.transforms.proxyNode.value,i=r.array.buffer;wo.copy(e.matrixWorld).invert(),this._getTransformMap(e).forEach(e=>{this.writeTransformData(e,wo,e.slot,i)}),r.needsUpdate=!0}writeTransformData(e,t,n,r){let{structs:i}=this,a=new Float32Array(r),o=new Uint32Array(r),{object:s,instanceId:c}=e;s.isInstancedMesh||s.isBatchedMesh?(s.getMatrixAt(c,Co),Co.premultiply(s.matrixWorld)):Co.copy(s.matrixWorld),Co.premultiply(t),Co.toArray(a,n*i.transform.getLength()),Co.invert(),Co.toArray(a,n*i.transform.getLength()+16);let l=Eo(s);s.isBatchedMesh&&(l&&=s.getVisibleAt(c)),o[n*i.transform.getLength()+32]=+!!l}getBVH(e,t,n){let{autogenerateBvh:r,_bvhCache:i}=this,a=null;if(e.boundsTree||e.isSkinnedMesh){let t=e.geometry;if(n.count=t.index?t.index.count:t.attributes.position.count,n.vertexCount=t.attributes.position.count,a=e.boundsTree||null,a===null&&r){let t=e.uuid;a=i.get(t)||new ba(e),i.set(t,a)}}else if(e.isBatchedMesh){let o=e.getGeometryIdAt(t),s=e.getGeometryRangeAt(o);if(Object.assign(n,s),a=e.boundsTrees[o]||null,a===null&&r){let t=`batched_${e.geometry.uuid}_${s.start}_${s.count}`;a=i.get(t)||new ia(e.geometry,{range:{...n}}),i.set(t,a)}}else{let t=e.geometry;if(n.count=t.index?t.index.count:t.attributes.position.count,n.vertexCount=t.attributes.position.count,a=e.geometry.boundsTree||null,a===null&&r){let e=t.uuid;a=i.get(e)||new ia(t),i.set(e,a)}}return a}getDefaultAttributeValue(e,t){switch(e){case`position`:case`color`:t.set(1,1,1,1);break;default:t.set(0,0,0,0)}return t}dispose(){let{storage:e}=this;for(let t in e)e[t].value?.dispose()}_getBVHSync(e,t,n){let r=this.getBVH(e,t,n);if(r instanceof Promise)throw Error(`BVHComputeData: "getBVH" returned a promise. Use "updateAsync" instead.`);return r}_getTransformMap(e){let{primitiveBuffer:t,primitiveBufferStride:n}=e,r=new Map;for(let i=0,a=t.length;i<a;i+=n){let n=t[i],a=e.getBVHRootIndex(t[i+1]),o=Oo(n,a);if(r.has(o))continue;let s=r.size,c=e.objects[e.getObjectId(n)],l=e.getInstanceId(n);r.set(o,{object:c,instanceId:l,compositeId:n,root:a,slot:s})}return r}},Ao=class{constructor(e={},t=K){let n={};return new Proxy({...e},{get(e,r){return n[r]||(n[r]=t(r,e)),n[r]},set(e,t,n){return e[t]=n,!0}})}},jo=new ve(-1,1,1,-1,0,1),Mo=new class extends S{constructor(){super(),this.setAttribute(`position`,new be([-1,3,0,-1,-1,0,3,-1,0],3)),this.setAttribute(`uv`,new be([0,2,0,0,2,0],2))}},No=class{constructor(e){this._mesh=new le(Mo,e)}dispose(){this._mesh.geometry.dispose()}render(e){e.render(this._mesh,jo)}get material(){return this._mesh.material}set material(e){this._mesh.material=e}},Po=D(`
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
`),Fo=class extends Ue{get texture(){return this._texNode.value}set texture(e){this._texNode.value=e}get fromTexture(){return this._fromTexNode.value}set fromTexture(e){this._fromTexNode.value=e}get toneMapping(){return this._toneMapping.toneMapping}set toneMapping(e){this._toneMapping.setToneMapping(e)}get transition(){return this._transitionUniform.value}set transition(e){this._transitionUniform.value=e}get exposure(){return this._toneMapping.exposureNode.value}set exposure(e){this._toneMapping.exposureNode.value=e}constructor(e){super();let t=nt(new Ge);this._texNode=t;let n=nt(new Ge);this._fromTexNode=n;let r=Tt(Ct()),i=A(1);this._transitionUniform=i;let a=Y`
			fn fade( uv: vec2f ) -> vec4f {

				if ( ${i} <= 0.0 ) {

					return ${Po}( ${n}, uv );

				} else if ( ${i} >= 1.0 ) {

					return ${Po}( ${t}, uv );

				} else {

					let col0 = ${Po}( ${n}, uv );
					let col1 = ${Po}( ${t}, uv );
					return mix( col0, col1, ${i} );

				}

			}
		`,o=dt(0,1,a(r));this._toneMapping=o,this.transparent=!0,this.colorNode=wt(o.rgb,o.a),this.setValues(e)}},Io=Y`
	fn debugHeatColor( t: f32 ) -> vec3f {

		let r = clamp( 1.5 - abs( 4.0 * t - 3.0 ), 0.0, 1.0 );
		let g = clamp( 1.5 - abs( 4.0 * t - 2.0 ), 0.0, 1.0 );
		let b = clamp( 1.5 - abs( 4.0 * t - 1.0 ), 0.0, 1.0 );
		return vec3f( r, g, b );

	}
`,Lo=new O({tlasCount:`uint`,blasCount:`uint`,didHit:`bool`,dist:`float`},`DebugBoundsResult`);function Ro(e){let{transforms:t,index:n,attributes:r,materials:i}=e.storage,a=A(new T),o=A(new T),s=A(1),c=A(1),l=A(0),u=A(64),d=ot(0).toVar(`bvh_debugBoundsLevel`),f=yt(1).toVar(`bvh_debugRayScalar`),p=yt(0).toVar(`bvh_debugMaterialSide`),m=Y`
		fn debugGetBoundsOrder( ray: ${G}, splitAxis: u32, node: ${Ca} ) -> bool {

			return ray.direction[ splitAxis ] >= 0.0;

		}
	`,h=Y`
		fn debugIntersectsBounds( ray: ${G}, bounds: ${Sa}, result: ptr<function, ${Lo}> ) -> u32 {

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
		fn debugIntersectRange( ray: ${G}, offset: u32, count: u32, result: ptr<function, ${Lo}> ) -> bool {

			var didHit = false;
			if ( ${l} > 0.5 ) {

				for ( var ti = offset; ti < offset + count; ti = ti + 1u ) {

					let i0 = ${n}[ ti * 3u ];
					let i1 = ${n}[ ti * 3u + 1u ];
					let i2 = ${n}[ ti * 3u + 2u ];

					let a = ${r}[ i0 ].position.xyz;
					let b = ${r}[ i1 ].position.xyz;
					let c = ${r}[ i2 ].position.xyz;

					var triResult = ${Aa}( ray, a, b, c );
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
		fn debugTransformRay( ray: ptr<function, ${G}>, objectIndex: u32 ) -> void {

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
			var ray = ${co}( ndc, ${a} * ${o} );
			ray.direction = normalize( ray.direction );

			// count the boxes the ray crosses, pruning those behind the nearest hit surface
			var result: ${Lo};
			${e.getShapecastFn({name:`debugBoundsCount`,shapeStruct:G,resultStruct:Lo,boundsOrderFn:m,intersectsBoundsFn:h,intersectRangeFn:g,transformShapeFn:_,resetShapeFn:v})}( ray, &result );

			let tlas = select( 0u, result.tlasCount, ${s} > 0.5 );
			let blas = select( 0u, result.blasCount, ${c} > 0.5 );
			let count = tlas + blas;

			let t = clamp( f32( count ) / max( ${u}, 1.0 ), 0.0, 1.0 );

			return vec4f( ${Io}( t ), 1.0 );

		}
	`;return y.uniforms={cameraToModelMatrix:a,inverseProjectionMatrix:o,displayTLAS:s,displayBLAS:c,stopAtSurface:l,saturationCount:u},y}var X=class{get computeNode(){return this.kernel.computeNode}get workgroupSize(){return this.kernel.workgroupSize}set needsUpdate(e){this.setWorkgroupSize(...this.workgroupSize)}constructor(e,t={}){let{workgroupSize:n=[64],context:r={}}=t;this._fn=e,this.kernel=null,this.context=r,this.setWorkgroupSize(...n)}defineUniformAccessors(e){for(let t in e){if(t in this)throw Error(`ComputeNode: Uniform name ${t} is already defined.`);let n=e[t];n.isStorageBufferNode&&!n.name&&n.setName(`kernel_${t}`),`value`in n&&Object.defineProperty(this,t,{get(){return e[t].value},set(n){e[t].value=n}})}}setWorkgroupSize(e=64,t=1,n=1){let r=this._fn.context(this.context);return r.parameters=this._fn.parameters,this.kernel?.dispose(),this.kernel=r.computeKernel([e,t,n]),this}dispose(){this.kernel?.dispose(),this.kernel=null}getDispatchSize(e=1,t=1,n=1,r=[]){let[i,a,o]=this.workgroupSize;return r.length=3,r[0]=Math.ceil(e/i),r[1]=Math.ceil(t/a),r[2]=Math.ceil(n/o),r}},Z=We(`

	const PI: f32 = 3.141592653589793;
	const EPSILON: f32 = 1e-5;
	const MIN_ROUGHNESS: f32 = 1e-3;
	const MIN_INCIDENT_COS: f32 = 1e-3;

`),zo=new O({color:`vec3f`,isTransmissive:`bool`,direction:`vec3f`,pdf:`float`},`ScatterRecord`),Bo=new O({reflectance:`vec3f`,transmittance:`vec3f`,reflectProbability:`float`},`TransmissionFresnel`),Vo=new O({color:`vec3`,map:`int`,metalness:`float`,metalnessMap:`int`,roughness:`float`,roughnessMap:`int`,ior:`float`,transmission:`float`,transmissionMap:`int`,emissiveIntensity:`float`,emissive:`vec3`,emissiveMap:`int`,normalMap:`int`,normalScale:`vec2`,clearcoat:`float`,clearcoatMap:`int`,clearcoatNormalMap:`int`,clearcoatNormalScale:`vec2`,clearcoatRoughness:`float`,clearcoatRoughnessMap:`int`,iridescenceMap:`int`,iridescenceThicknessMap:`int`,iridescence:`float`,iridescenceIor:`float`,iridescenceThicknessMinimum:`float`,iridescenceThicknessMaximum:`float`,diffuseRoughness:`float`,dispersion:`float`,specularColor:`vec3`,specularColorMap:`int`,specularIntensity:`float`,specularIntensityMap:`int`,thinWall:`int`,attenuationColor:`vec3`,attenuationDistance:`float`,alphaMap:`int`,castShadow:`int`,opacity:`float`,alphaTest:`float`,side:`float`,matte:`int`,sheen:`float`,sheenColor:`vec3`,sheenColorMap:`int`,sheenRoughness:`float`,sheenRoughnessMap:`int`,vertexColors:`int`,flatShading:`int`,transparent:`int`,fogVolume:`int`,anisotropy:`float`,anisotropyRotation:`float`,anisotropyMap:`int`,mapTransform:`mat3`,metalnessMapTransform:`mat3`,roughnessMapTransform:`mat3`,transmissionMapTransform:`mat3`,emissiveMapTransform:`mat3`,normalMapTransform:`mat3`,clearcoatMapTransform:`mat3`,clearcoatNormalMapTransform:`mat3`,clearcoatRoughnessMapTransform:`mat3`,sheenColorMapTransform:`mat3`,sheenRoughnessMapTransform:`mat3`,iridescenceMapTransform:`mat3`,iridescenceThicknessMapTransform:`mat3`,specularColorMapTransform:`mat3`,specularIntensityMapTransform:`mat3`,alphaMapTransform:`mat3`,anisotropyMapTransform:`mat3`,multiscatterColor:`vec3`,scatterStrength:`float`,scatterAnisotropy:`float`},`Material`),Ho=new O({volumeParticle:`bool`,faceNormal:`vec3f`,frontFace:`bool`,normal:`vec3f`,normalBasis:`mat3x3f`,normalInvBasis:`mat3x3f`,eta:`f32`,f0:`f32`,roughness:`f32`,diffuseRoughness:`f32`,metalness:`f32`,anisotropy:`f32`,color:`vec3f`,emission:`vec3f`,opacity:`f32`,ior:`f32`,transmission:`f32`,thinWall:`bool`,attenuationColor:`vec3f`,attenuationDistance:` f32`,clearcoatNormal:`vec3f`,clearcoatBasis:`mat3x3f`,clearcoatInvBasis:`mat3x3f`,clearcoat:`f32`,clearcoatRoughness:`f32`,sheen:`f32`,sheenColor:`vec3f`,sheenRoughness:`f32`,iridescence:`f32`,iridescenceIor:`f32`,iridescenceThickness:`f32`,specularColor:`vec3f`,specularIntensity:`f32`},`SurfaceRecord`);new O({rotation:`mat3x3f`,intensity:`float`,blur:`float`,totalSum:`float`},`EnvironmentInfo`);var Uo=new O({color:`vec3f`,direction:`vec3f`,pdf:`float`},`EnvironmentSample`),Wo=new O({position:`vec3f`,lightType:`int`,color:`vec3f`,intensity:`float`,u:`vec3f`,visibleToCameraRays:`int`,v:`vec3f`,area:`float`,radius:`float`,decay:`float`,distance:`float`,coneCos:`float`,penumbraCos:`float`,iesProfile:`int`},`Light`),Go=new O({dist:`float`,direction:`vec3f`,pdf:`float`,emission:`vec3f`,lightType:`int`},`LightRecord`),Ko=new O({diffuse:`float`,specular:`float`,transmission:`float`,clearcoat:`float`},`LobeWeights`),qo=new O({V:`vec3f`,L:`vec3f`,H:`vec3f`,VdotH:`float`},`BxDFContext`),Jo=Y`

	fn isAuxSurface( surface: ${Ho}, scatterRec: ${zo} ) -> bool {

		let isMirror = surface.roughness <= ${.02} && surface.metalness >= ${.98};
		return ! scatterRec.isTransmissive && ! isMirror;

	}

`,Yo=Y`

	fn unpackAuxAlbedo( packed: vec3u ) -> vec3f {

		return vec3f( unpack2x16float( packed.x ), unpack2x16float( packed.y ).x );

	}

`,Xo=Y`

	fn unpackAuxNormal( packed: vec3u ) -> vec3f {

		return vec3f( unpack2x16float( packed.z ), unpack2x16float( packed.y ).y );

	}

`,Zo=Y`

	fn blendAux( packed: vec3u, albedo: vec3f, normal: vec3f, weight: f32 ) -> vec3u {

		let meanAlbedo = mix( ${Yo}( packed ), albedo, weight );
		let meanNormal = mix( ${Xo}( packed ), normal * 0.5 + 0.5, weight );
		return vec3u(
			pack2x16float( meanAlbedo.rg ),
			pack2x16float( vec2f( meanAlbedo.b, meanNormal.z ) ),
			pack2x16float( meanNormal.xy ),
		);

	}

`;function Qo(e=``){let t=new Ge(1,1);return t.format=ke,t.type=ne,t.colorSpace=d.workingColorSpace,t.name=e,t.generateMipmaps=!1,t}function $o(t=``){let n=new Ge(1,1);return n.format=he,n.type=e,n.name=t,n.generateMipmaps=!1,n}function es(t=``){let n=new Fe(1,1,3);return n.format=he,n.type=e,n.name=t,n.generateMipmaps=!1,n}var ts=ot(65536),ns=yt(1/16777216),rs=We(`

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

`),is=ot(0).toVar(`sobolPixelIndex`),as=ot(0).toVar(`sobolPathIndex`),os=ot(0).toVar(`sobolBounceIndex`),ss=D(`
	fn getMaskedSobol( index: u32, directions: array<u32, 32> ) -> u32 {

		var X = 0u;
		for ( var bit = 0u; bit < 32u; bit ++ ) {

			let mask = ( index >> bit ) & 1u;
			X ^= mask * directions[ bit ];

		}
		return X;

	}
`),cs=(e=1)=>{if(e<=0)return;let t=e>1?`vec${e}u`:`u32`,n=D(`
		fn sobolReverseBits_${t}( in: ${t} ) -> ${t} {

			var x = in;
			x = ( ( ( x & ${t}( 0xaaaaaaaau ) ) >> ${t}( 1 ) ) | ( ( x & ${t}( 0x55555555u ) ) << ${t}( 1 ) ) );
			x = ( ( ( x & ${t}( 0xccccccccu ) ) >> ${t}( 2 ) ) | ( ( x & ${t}( 0x33333333u ) ) << ${t}( 2 ) ) );
			x = ( ( ( x & ${t}( 0xf0f0f0f0u ) ) >> ${t}( 4 ) ) | ( ( x & ${t}( 0x0f0f0f0fu ) ) << ${t}( 4 ) ) );
			x = ( ( ( x & ${t}( 0xff00ff00u ) ) >> ${t}( 8 ) ) | ( ( x & ${t}( 0x00ff00ffu ) ) << ${t}( 8 ) ) );
			return ( ( x >> ${t}( 16 ) ) | ( x << ${t}( 16 ) ) );

		}
	`),r=D(`
		fn sobolHashCombine_${t}( seed: u32, v: ${t} ) -> ${t} {

			return ${t}( seed ) ^ ( v + ${t}( ( seed << 6 ) + ( seed >> 2 ) ) );

		}
	`),i=D(`
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
	`}},ls=Array.from({length:5},(e,t)=>cs(t)),us=Y`
  	${[rs]}
	fn generateSobolPoint( id: u32 ) -> vec4f {

		var index = id;
		if ( index >= ${ts} ) {

			index = index % ${ts};
			// return vec4( 0.0 );

		}

		// NOTE: this sobol "direction" is also available but we can't write out 5 components
		// uint x = index & 0x00ffffffu;
		let x = ${ls[1].reverseBits}( ${ss}( index, SOBOL_DIRECTIONS_1 ) ) & 0x00ffffffu;
		let y = ${ls[1].reverseBits}( ${ss}( index, SOBOL_DIRECTIONS_2 ) ) & 0x00ffffffu;
		let z = ${ls[1].reverseBits}( ${ss}( index, SOBOL_DIRECTIONS_3 ) ) & 0x00ffffffu;
		let w = ${ls[1].reverseBits}( ${ss}( index, SOBOL_DIRECTIONS_4 ) ) & 0x00ffffffu;

		return vec4( f32( x ), f32( y ), f32( z ), f32( w ) ) * ${ns};

	}
`,ds=D(`
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
`),fs=Y`
	fn sobolGetSeed( effect: u32 ) -> u32 {

		return ${ds}(
			${ls[1].hashCombine}(
				${ls[1].hashCombine}(
					${ds}( ${os} ),
					${is}
				),
				effect
			)
		);

	}
`,ps=(e=1,t=us)=>{if(e<=0)return;let n=e>1?`vec${e}u`:`u32`,r=e>1?`vec${e}f`:`f32`,i=`.r`,a=`1u`;return e===2?(i=`.rg`,a=`vec2( 1u, 2u )`):e===3?(i=`.rgb`,a=`vec3( 1u, 2u, 3u )`):e===4&&(i=``,a=`vec4( 1u, 2u, 3u, 4u )`),Y`
		fn sobol${e}( effect: u32 ) -> ${r} {

			let seed = ${fs}( effect );
			let index = ${as};

			let shuffle_seed = ${ls[1].hashCombine}( seed, 0u );
			let shuffled_index = ${ls[1].scramble}( ${ls[1].reverseBits}( index ), shuffle_seed );
			let sobol_pt = ${t}( shuffled_index )${i};
			var result = ${n}( sobol_pt * 16777216.0 );

			let seed2 = ${ls[e].hashCombine}( seed, ${a} );
			result = ${ls[e].scramble}( result, seed2 );

			return ${ns} * ${r}( result >> ${n}( 8 ) );

		}
	`},ms=ps(1),hs=ps(2),gs=ps(3),_s=ps(4),vs=Y`
	fn sobolInit( pixel: vec2u, pathIndex: u32, bounceIndex: u32 ) -> void {

		${is} = ( pixel.x << 16 ) | pixel.y;
		${as} = pathIndex;
		${os} = bounceIndex;

	}
`,ys=Y`
	fn sobolNextBounce() -> void {

		${os}++;

	}
`,bs=J(`random.rngInit`,vs),xs=J(`random.rngNextBounce`,ys),Ss=J(`random.rand1`,ms),Cs=J(`random.rand2`,hs),ws=J(`random.rand3`,gs);J(`random.rand4`,_s);var Ts=D(`

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

`),Es=D(`

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

`),Ds=D(`

	fn iorToF0( ior: f32 ) -> f32 {
		return pow( ( 1 - ior ) / ( 1 + ior ), 2 );
	}

`),Os=D(`

	fn iorToF0General( transmittedIor: f32, incidentIor: f32 ) -> f32 {

		return pow( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ), 2 );

	}

`),ks=D(`

	fn iorToF0GeneralVec( transmittedIor: vec3f, incidentIor: vec3f ) -> vec3f {

		let v = ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor );
		return v * v;

	}

`),As=D(`

	fn fresnel0ToIor( f0: vec3f ) -> vec3f {

		let sqrtF0 = sqrt( f0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );

	}

`),js=D(`

	fn schlickFresnel( cosine: f32, f0: f32 ) -> f32 {

		return f0 + ( 1.0 - f0 ) * pow( 1.0 - cosine, 5.0 );

	}

`),Ms=D(`

	fn schlickFresnelVec( cosine: f32, f0: vec3f, f90: vec3f ) -> vec3f {

		return f0 + ( f90 - f0 ) * pow( 1.0 - cosine, 5.0 );

	}

`),Ns=D(`

	fn totalInternalReflection( cosTheta: f32, eta: f32 ) -> bool {

		let sinTheta = sqrt( 1.0 - cosTheta * cosTheta );
		return eta * sinTheta > 1.0;

	}

`),Ps=D(`

	fn totalInternalReflectionVec( cosTheta: f32, eta: vec3f ) -> vec3<bool> {

		let sinTheta = sqrt( 1.0 - cosTheta * cosTheta );
		return eta * sinTheta > vec3f( 1.0 );

	}

`);D(`

	fn evaluateFresnel( cosine: f32, eta: f32, f0: vec3f, f90: vec3f ) -> vec3f {

		if ( totalInternalReflection( cosine, eta ) ) {

			return f90;

		}

		return f0 + ( f90 - f0 ) * pow( 1.0 - cosine, 5.0 );
	}

`,[Ns]);var Fs=D(`

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

`),Is=D(`

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

`,[Ns,Fs,js]),Ls=D(`

	fn isTerminatingScatter( scatterRec: ScatterRecord ) -> bool {

		return scatterRec.pdf <= 0;

	}

`,[zo]),Q=D(`

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

`),Rs=D(`

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

`),zs=D(`

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

`),Bs=D(`

	fn wrapTexelIndex( i: i32, size: i32, wrapMode: i32 ) -> i32 {

		if ( wrapMode == 0 ) {

			// Repeat wraps to the opposite edge
			return ( ( i % size ) + size ) % size;

		}

		// ClampToEdge and MirroredRepeat both fold back onto the edge texel
		return clamp( i, 0, size - 1 );

	}

`),Vs=(e,t,n=`sampleTexel`)=>Y`

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
			${Rs}( uv.x, wrapS ),
			${Rs}( uv.y, wrapT ),
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
			let x0 = ${Bs}( base.x,     intSize.x, wrapS );
			let x1 = ${Bs}( base.x + 1, intSize.x, wrapS );
			let y0 = ${Bs}( base.y,     intSize.y, wrapT );
			let y1 = ${Bs}( base.y + 1, intSize.y, wrapT );

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
`,Hs=D(`

	fn sampleSphere( uv: vec2f ) -> vec3f {

		let u = ( uv.x - 0.5 ) * 2.0;
		let t = uv.y * PI * 2.0;
		let f = sqrt( 1.0 - u * u );

		return vec3f( f * cos( t ), f * sin( t ), u );

	}

`,[Z]),Us=D(`

	fn diffuseDirection( wo: vec3f, uv: vec2f ) -> vec3f {

		var lightDirection = sampleSphere( uv );
		lightDirection.z += 1.0;
		lightDirection = normalize( lightDirection );

		return lightDirection;

	}

`,[Hs]),Ws=D(`

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

`,[Is,js,Ds,Ko,Z]),Gs=D(`

	fn equirectDirectionToUv(direction: vec3f) -> vec2f {

		// from Spherical.setFromCartesianCoords
		var uv = vec2f( atan2( direction.z, direction.x ), acos( direction.y ) );
		uv /= vec2f( 2.0 * PI, PI );

		// apply adjustments to get values in range [0, 1] and y right side up
		uv.x += 0.5;
		uv.y = 1.0 - uv.y;
		return uv;

	}

`),Ks=D(`

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

`,[Z]),qs=D(`

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

`,[Z]),Js=D(`

	fn misHeuristic( a: f32, b: f32 ) -> f32 {

		// computed as a ratio so squaring large pdfs can't overflow to Inf / Inf
		if ( a >= b ) {

			let r = b / a;
			return 1.0 / ( 1.0 + r * r );

		}

		let r = a / b;
		return r * r / ( 1.0 + r * r );

	}

`),Ys=D(`

	fn luminance( color: vec3f ) -> f32 {

		return dot( color, vec3f( 0.2126, 0.7152, 0.0722 ) );

	}

`),Xs=D(`

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

`,[Z]);D(`

	fn equirectDirectionPdf( direction: vec3f ) -> f32 {

		let uv = equirectDirectionToUv( direction );
		let theta = uv.y * PI;
		let sinTheta = sin( theta );
		if ( sinTheta == 0.0 ) {

			return 0.0;

		}

		return 1.0 / ( 2.0 * PI * PI * sinTheta );

	}

`,[Z,Gs]);var Zs=D(`

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

`),Qs=1e30,$s=1e-5,ec=D(`

	fn isMISWeightLight( lightType: i32 ) -> bool {

		return lightType == 5 || lightType == 1 || lightType == 0;

	}

`),tc=D(`

	fn getSpotAttenuation( coneCosine: f32, penumbraCosine: f32, angleCosine: f32 ) -> f32 {

		return smoothstep( coneCosine, penumbraCosine, angleCosine );

	}

`),nc=D(`

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

`,[Z]),rc=D(`

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

`,[Z]),ic=D(`

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

`,[Z]),ac=D(`

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

`,[Wo,Go,Z]),oc=D(`

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

`,[Wo,Go,Z,nc]),sc=D(`

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

`,[Wo,Z]),cc=1e-6,lc=1e-6,uc=new O({inside:`bool`,object:`uint`,extinction:`vec3f`,albedo:`vec3f`,anisotropy:`float`},`Medium`),dc=Y`

	fn enterMedium( material: ${Vo}, object: u32 ) -> ${uc} {

		var medium: ${uc};
		medium.extinction = - log( max( material.attenuationColor, vec3f( ${cc} ) ) ) / material.attenuationDistance;
		medium.albedo = ${Y`

	fn singleScatterAlbedo( multiscatterAlbedo: vec3f, anisotropy: f32 ) -> vec3f {

		let a = multiscatterAlbedo;
		let s = clamp( 4.09712 + 4.20863 * a - sqrt( 9.59217 + 41.6808 * a + 17.7126 * a * a ), vec3f( 0.0 ), vec3f( 1.0 ) );
		let s2 = select( s * s, vec3f( 1.0 ), a <= vec3f( 0.0 ) );
		return ( 1.0 - s2 ) / ( 1.0 - anisotropy * s2 );

	}

`}( material.multiscatterColor * material.scatterStrength, material.scatterAnisotropy );
		medium.inside = any( medium.albedo > vec3f( 0.0 ) ) && any( medium.extinction > vec3f( 0.0 ) );
		medium.object = object;
		medium.anisotropy = material.scatterAnisotropy;
		return medium;

	}

`,fc=Y`

	fn mediumChannelPdf( throughput: vec3f, albedo: vec3f ) -> vec3f {

		let weights = abs( throughput * albedo );
		let weightSum = weights.r + weights.g + weights.b;
		if ( weightSum > 0.0 ) {

			return weights / weightSum;

		}

		return vec3f( 1.0 / 3.0 );

	}

`,pc=Y`

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

			return ${Qs};

		}

		return - log( 1.0 - u.y ) / extinction;

	}

`,mc=Y`

	fn mediumDistancePdf( medium: ${uc}, dist: f32, scattered: bool ) -> vec3f {

		let transmittance = exp( - medium.extinction * dist );
		return select( transmittance, medium.extinction * transmittance, scattered );

	}

`,hc=D(`

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

`,[Z]),gc=D(`

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

`,[Z]),_c=D(`

	fn ggxShadowMaskG1( V: vec3f, alpha: vec2f ) -> f32 {

		// TODO: this could be collapsed to a simpler form as an optimization
		return 1.0 / ( 1.0 + ggxLambda( V, alpha ) );

	}

`,[gc]),vc=D(`

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

`,[Z]),yc=D(`

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

`,[Z]),bc=D(`

	fn ggxReflectionAdjustedPDF( V: vec3f, H: vec3f, alpha: vec2f ) -> f32 {

		let NdotV = max( V.z, MIN_INCIDENT_COS );
		let D = ggxDistribution( H, alpha );
		let G1 = ggxShadowMaskG1( V, alpha );

		return D * G1 / ( 4 * NdotV );

	}
`,[yc,_c]),xc=D(`

	fn ggxRefractionAdjustedPDF( V: vec3f, L: vec3f, H: vec3f, alpha: vec2f, eta: f32 ) -> f32 {

		let NdotV = max( V.z, MIN_INCIDENT_COS );
		let HdotV = dot( V, H );
		let HdotL = dot( L, H );
		let D = ggxDistribution( H, alpha );
		let G1 = ggxShadowMaskG1( V, alpha );

		let denom = eta * HdotV + HdotL;
		return D * G1 * abs( HdotV ) * abs( HdotL ) / ( NdotV * denom * denom );

	}
`,[yc,_c]),Sc=Y`

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

`,Cc=Y`

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

`,wc=3402823466e29,Tc=(e,t,n)=>D(`

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

`,[Ts,Ds,Es,e,t,n,Ho,Z,Sc,Cc]);D(`

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

`,[Z,js,Ho]),D(`

	fn lambertBrdf( NdotV: f32, NdotL: f32, VdotH: f32, surf: SurfaceRecord ) -> vec3f {

		return surf.color / PI;

	}

`,[Z,Ho]);var Ec=D(`

	fn specularBrdf( V: vec3f, L: vec3f, H: vec3f, alpha: vec2f ) -> vec3f {

		let alphaT = alpha.x;
		let alphaB = alpha.y;

		let Vis = ggxSmithVisibility( V, L, alpha );
		let D = ggxDistribution( H, alpha );

		return vec3f( D * Vis );

	}

`,[vc,yc]),Dc=D(`

	fn isMatchedIor( eta: f32 ) -> bool {

		return abs( eta - 1.0 ) < EPSILON;

	}

`,[Z]),Oc=D(`

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

`,[_c,yc,Fs]),kc=D(`

	fn thinWallTransmissionRoughness( alpha: f32, eta: f32 ) -> f32 {

		let t = 3.4 * ( eta - 1.0 ) * ( eta - 0.5 ) * ( eta - 0.5 ) / ( eta * eta * eta );
		return saturate( alpha * sqrt( max( t, 0.0 ) ) );

	}

`),Ac=D(`

	fn transmissionAttenuation( dist: f32, attColor: vec3f, attDist: f32 ) -> vec3f {

		return pow( attColor, vec3f( dist / attDist ) );

	}

`),jc=Y`

	fn applyDispersion( surf: ptr<function, ${Ho}>, dispersion: f32, wavelength: f32 ) -> void {

		surf.ior = ${D(`

	fn dispersionIor( ior: f32, dispersion: f32, wavelength: f32 ) -> f32 {

		let nd = max( ior, 1.0 );
		let scale = ( nd - 1.0 ) * max( dispersion, 0.0 ) / 20.0;
		let lambda = clamp( wavelength, 360.0, 830.0 );
		return max( nd + scale * ( 523655.0 / ( lambda * lambda ) - 1.5168 ), 1.0 );

	}

`)}( surf.ior, dispersion, wavelength );
		surf.eta = select( surf.ior, 1.0 / surf.ior, surf.thinWall || surf.frontFace );
		surf.f0 = ${Ds}( surf.eta );

	}

`,Mc=D(`

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

`),Nc=D(`

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

`,[Ms,Ds,Ns]),Pc=Ze(3.2404542,-.969266,.0556434,-1.5371385,1.8760108,-.2040259,-.4985314,.041556,1.0572252),Fc=Y`

	fn evalSensitivity( OPD: f32, shift: vec3f ) -> vec3f {

		let phase = 2.0 * ${Math.PI} * OPD * 1.0e-9;
		const val = vec3(5.4856e-13, 4.4201e-13, 5.2481e-13);
		const pos = vec3(1.6810e+06, 1.7953e+06, 2.2084e+06);
		const _var = vec3(4.3278e+09, 9.3046e+09, 6.6121e+09);

		var xyz = val * sqrt(2.0 * ${Math.PI} * _var) * cos(pos * phase + shift) * exp(-phase * phase * _var);
		xyz.x += 9.7470e-14 * sqrt(2.0 * ${Math.PI} * 4.5282e+09) * cos(2.2399e+06 * phase + shift.x) * exp(-4.5282e+09 * phase * phase);
		xyz /= 1.0685e-7;

		let rgb = ${Pc} * xyz;
		return rgb;

	}

`,Ic=D(`

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

`,[Os,ks,js,As,Fc,Ps]),Lc=(e=Ic)=>Y`

	fn transmissionFresnel( cosTheta: f32, surf: ${Ho} ) -> ${Bo} {

		var result: ${Bo};
		let cosine = saturate( abs( cosTheta ) );
		let matchedIor = ${Dc}( surf.eta );
		let airIncident = surf.thinWall || surf.frontFace;
		let dielectricFresnel = ${Fs}( cosine, surf.eta );

		// Keep matched media transparent unless a real thin-film layer is present. This avoids
		// introducing the non-physical Schlick F90 reflection produced by KHR_materials_specular
		// when the substrate itself has no IOR boundary.
		var reflectance = vec3f( 0.0 );
		if ( ! matchedIor ) {

			let specularF0 = min( surf.f0 * surf.specularColor, vec3f( 1.0 ) );
			let dielectricReflectance = select(
				vec3f( dielectricFresnel ),
				${Ms}( cosine, specularF0, vec3f( 1.0 ) ),
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
				vec3f( ${Ds}( filmBaseIor ) ),
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

`,Rc=D(`

	fn conductorFresnel( VdotH: f32, f0: vec3f, specular: vec3f ) -> vec3f {

		return specular * schlickFresnelVec( abs( VdotH ), f0, vec3f( 1 ) );

	}

`,[Ms]),zc=D(`

	fn fresnelCoat( VdotNc: f32, ior: f32, base: vec3f, layer: vec3f, weight: f32 ) -> vec3f {

		let f0 = iorToF0( ior );
		let F = schlickFresnel( abs( VdotNc ), f0 );

		return mix( base, layer, weight * F );

	}

`,[Ds,js]),Bc=e=>Y`

	fn albedo(
		eta: f32,
		includeFresnel: bool,
		includeRefraction: bool,
		globalId: vec3u,
		layer: u32,
	) -> void {

		// The matched-IOR limit is a unit-energy delta transmission event, so it cannot
		// be integrated with the rough BTDF below.
		if ( includeRefraction && ${Dc}( eta ) ) {

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

		let f0 = ${Ds}( eta );

		var result = 0.0;
		for ( var x = 0u; x < GRID_SIZE; x++ ) {

			for ( var y = 0u; y < GRID_SIZE; y++ ) {

				// calculate the half vector to sample
				let gridPoint = vec2f( vec2u( x, y ) ) + vec2f( 0.5 );
				let sampleUv = gridPoint / f32( GRID_SIZE );
				let wh = ${hc}( wo, vec2( alpha ), sampleUv );

				var f = 1.0;
				if ( includeFresnel ) {

					// use the exact dielectric fresnel so the table agrees with the fresnel used
					// for lobe sampling
					f = ${Fs}( dot( wo, wh ), eta );

				}

				// air-incident reflection is evaluated with schlick in bsdfEval - only the
				// volume-incident ( TIR ) glass reflection uses the exact fresnel
				var reflectionF = f;
				if ( eta < 1.0 ) {

					reflectionF = ${js}( dot( wo, wh ), f0 );

				}

				// reflection lobe - samples landing below the surface are lost
				let wi = - reflect( wo, wh );
				let reflectionPdf = ${bc}( wo, wh, vec2f( alpha ) );
				if ( wi.z > 0.0 && reflectionPdf != 0.0 ) {

					let specular = ${Ec}( wo, wi, wh, vec2f( alpha ) );
					result += reflectionF * specular.x * wi.z / reflectionPdf;

				}

				// refraction lobe - the btdf carries its own ( 1 - F ) fresnel weight, and
				// samples landing back above the surface are lost
				if ( includeRefraction ) {

					let wiRefract = refract( - wo, wh, eta );
					if ( wiRefract.z < 0.0 ) {

						let transmission = ${Oc}( wo, wiRefract, wh, vec2f( alpha ), eta );
						let pdf = ${xc}( wo, wiRefract, wh, vec2f( alpha ), eta );
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

`;function Vc(e,t=Math.random){for(let n=e.length-1;n>0;n--){let r=~~((t()-1e-6)*n),i=e[n];e[n]=e[r],e[r]=i}}function Hc(e,t){e.fill(0);for(let n=0;n<t;n++)e[n]=1}var Uc=class{constructor(e){this.count=0,this.size=-1,this.sigma=-1,this.radius=-1,this.lookupTable=null,this.score=null,this.binaryPattern=null,this.resize(e),this.setSigma(1.5)}findVoid(){let{score:e,binaryPattern:t}=this,n=1/0,r=-1;for(let i=0,a=t.length;i<a;i++){if(t[i]!==0)continue;let a=e[i];a<n&&(n=a,r=i)}return r}findCluster(){let{score:e,binaryPattern:t}=this,n=-1/0,r=-1;for(let i=0,a=t.length;i<a;i++){if(t[i]!==1)continue;let a=e[i];a>n&&(n=a,r=i)}return r}setSigma(e){if(e===this.sigma)return;let t=~~(Math.sqrt(20*e**2)+1),n=2*t+1,r=new Float32Array(n*n),i=e*e;for(let e=-t;e<=t;e++)for(let a=-t;a<=t;a++){let o=(t+a)*n+e+t,s=e*e+a*a;r[o]=Math.E**(-s/(2*i))}this.lookupTable=r,this.sigma=e,this.radius=t}resize(e){this.size!==e&&(this.size=e,this.score=new Float32Array(e*e),this.binaryPattern=new Uint8Array(e*e))}invert(){let{binaryPattern:e,score:t,size:n}=this;t.fill(0);for(let t=0,r=e.length;t<r;t++)if(e[t]===0){let r=~~(t/n),i=t-r*n;this.updateScore(i,r,1),e[t]=1}else e[t]=0}updateScore(e,t,n){let{size:r,score:i,lookupTable:a}=this,o=this.radius,s=2*o+1;for(let c=-o;c<=o;c++)for(let l=-o;l<=o;l++){let u=a[(o+l)*s+c+o],d=e+c;d=d<0?r+d:d%r;let f=t+l;f=f<0?r+f:f%r;let p=f*r+d;i[p]+=n*u}}addPointIndex(e){this.binaryPattern[e]=1;let t=this.size,n=~~(e/t),r=e-n*t;this.updateScore(r,n,1),this.count++}removePointIndex(e){this.binaryPattern[e]=0;let t=this.size,n=~~(e/t),r=e-n*t;this.updateScore(r,n,-1),this.count--}copy(e){this.resize(e.size),this.score.set(e.score),this.binaryPattern.set(e.binaryPattern),this.setSigma(e.sigma),this.count=e.count}},Wc=class{constructor(){this.random=Math.random,this.sigma=1.5,this.size=64,this.majorityPointsRatio=.1,this.samples=new Uc(1),this.savedSamples=new Uc(1)}generate(){let{samples:e,savedSamples:t,sigma:n,majorityPointsRatio:r,size:i}=this;e.resize(i),e.setSigma(n);let a=Math.floor(i*i*r),o=e.binaryPattern;Hc(o,a),Vc(o,this.random);for(let t=0,n=o.length;t<n;t++)o[t]===1&&e.addPointIndex(t);for(;;){let t=e.findCluster();e.removePointIndex(t);let n=e.findVoid();if(t===n){e.addPointIndex(t);break}e.addPointIndex(n)}let s=new Uint32Array(i*i);t.copy(e);let c;for(c=e.count-1;c>=0;){let t=e.findCluster();e.removePointIndex(t),s[t]=c,c--}let l=i*i;for(c=t.count;c<l/2;){let e=t.findVoid();t.addPointIndex(e),s[e]=c,c++}for(t.invert();c<l;){let e=t.findCluster();t.removePointIndex(e),s[e]=c,c++}return{data:s,maxValue:l}}};function Gc(e){return e>=3?4:e}function Kc(e){switch(e){case 1:return ue;case 2:return g;default:return ke}}var qc=class extends p{constructor(e=64,t=1){super(new Float32Array(4),1,1,ke,ne),this.minFilter=c,this.magFilter=c,this.size=e,this.channels=t,this.update()}update(){let e=this.channels,t=this.size,n=new Wc;n.channels=e,n.size=t;let r=Gc(e),i=Kc(r);(this.image.width!==t||i!==this.format)&&(this.image.width=t,this.image.height=t,this.image.data=new Float32Array(t**2*r),this.format=i,this.dispose());let a=this.image.data;for(let t=0,i=e;t<i;t++){let e=n.generate(),i=e.data,o=e.maxValue;for(let e=0,n=i.length;e<n;e++){let n=i[e]/o;a[e*r+t]=n}}this.needsUpdate=!0}},Jc=Ce({rand1:()=>il,rand2:()=>rl,rand3:()=>nl,rand4:()=>tl,rngInit:()=>$c,rngNextBounce:()=>el}),Yc=64,Xc=new qc(Yc,1),Zc=nt(Xc),Qc=wt(0).toVar(`blueDitherSeed`),$c=Y`
	fn blueDitherInitialize( pixel: vec2u, pathIndex: u32, bounceIndex: u32 ) -> void {

		let coord = vec2i( pixel % vec2u( ${Yc}u ) );
		${Qc} = textureLoad( ${Zc}, coord, 0 );
		${vs}( vec2u( 0 ), pathIndex, bounceIndex );

	}
`,el=Y`
	fn blueDitherNextBounce() -> void {

		${ys}();

	}
`,tl=Y`
	fn blueDitherRand4( effect: u32 ) -> vec4f {

		// Get the scrambled sobol stratified sample
		let stratifiedSample = ${_s}( effect );

		// offset it by the blue noise seed and dimension rotation
		return fract( stratifiedSample + ${Qc}.r );

	}
`,nl=Y`
	fn blueDitherRand3( effect: u32 ) -> vec3f {

		return ${tl}( effect ).xyz;

	}
`,rl=Y`
	fn blueDitherRand2( effect: u32 ) -> vec2f {

		return ${tl}( effect ).xy;

	}
`,il=Y`
	fn blueDitherRand1( effect: u32 ) -> f32 {

		return ${tl}( effect ).x;

	}
`,al=2147483648,ol=1073741824,sl=1073741823,cl=class extends X{constructor(){let e={material:{value:null},envInfo:{value:null},lightsInfo:{value:null},prevOutputTarget:gt(Qo()).toReadOnly(),outputTarget:gt(Qo()).toWriteOnly(),sampleCountTarget:gt($o()).toReadWrite(),offset:A(new E),tileSize:A(new E),seed:A(0),maxBounces:A(5),maxTransparentBounces:A(5,`uint`),maxVolumeSteps:A(256,`uint`),misEnabled:A(1,`uint`),maxSamples:A(0,`uint`),filterGlossy:A(1),clampDirect:A(0),clampIndirect:A(10),backgroundInfo:{value:null},transmissiveBackground:A(1),accumulateAux:A(0,`uint`),auxTarget:gt(es()).toReadWrite(),textures:nt(new p),textureSampler:bt(new p),globalId:ct},t=Fa(`bvhData.fns.raycastFirstHit.outputType`),n=J(`bvhData.fns.raycastFirstHit`),r=J(`bvhData.fns.raycastShadow`),i=J(`bvhData.fns.sampleTrianglePoint`),a=J(`bvhData.fns.getSurfaceRecord`),o=J(`bvhData.fns.getCameraRay`),s=q(`material.value.bsdfSample`,e),c=q(`material.value.bsdfEvalPdf`,e),l=K(`envInfo.value.totalSumNode`,e),u=K(`envInfo.value.intensityNode`,e),d=K(`envInfo.value.sampleColor`,e),f=K(`envInfo.value.sampleDir`,e),m=K(`envInfo.value.getDirPdf`,e),h=K(`envInfo.value.getWeight`,e),g=K(`backgroundInfo.value.sampleColor`,e),_=K(`lightsInfo.value.countNode`,e),v=q(`lightsInfo.value.randomLightSample`,e),y=q(`lightsInfo.value.intersectLightAtIndex`,e),b=q(`lightsInfo.value.getLightWeight`,e),x=q(`lightsInfo.value.getLightsWeight`,e),S=q(`lightsInfo.value.selectLight`,e),C=q(`lightsInfo.value.isLightVisibleToCamera`,e),w=Y`

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
				maxVolumeSteps: u32,
				misEnabled: u32,
				maxSamples: u32,
				filterGlossy: f32,
				clampDirect: f32,
				clampIndirect: f32,

				transmissiveBackground: u32,
				accumulateAux: u32,

			) -> void {

				let transforms = &${Fa(`bvhData.storage.transforms`)};
				let materials = &${Fa(`bvhData.storage.materials`)};

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
				${bs}( indexUV.xy, seed, 0 );

				// scene ray
				let jitteredUv = uv + ${Cs}( ${0} ) / vec2f( targetDimensions );
				var ray: ${G};
				if ( ! ${o}( jitteredUv, vec2f( targetDimensions ), &ray ) ) {

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
				var isFullyTransmissive = true;
				var minPdf = 1.0;
				var transparentBounce = 0u;

				// the scattering volume the path is in. Media don't nest
				var medium: ${uc};
				var volumeSteps = 0u;

				// no light is sampled at a scatter event, so whatever the next segment reaches takes full weight
				var mediumScattered = false;

				// A negative value marks a sampled wavelength whose RGB reconstruction weight has not been applied yet.
				var dispersionWavelength = - mix( ${360}.0, ${830}.0, ${Ss}( ${7} ) );

				// one-sample NEE chooses between the analytic lights and the environment
				let envActive = ${l} > 0.0 && ${u} > 0.0;
				let lightsCount = ${_};
				var envWeight = 0.0;
				if ( envActive ) {

					envWeight = ${h}();

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

					var hitResult: ${t};
					let didHit = ${n}( ray, &hitResult );
					let surfaceDist = select( ${Qs}, hitResult.dist, didHit );

					// Inside a medium, sample a scatter event before the next surface
					let segmentInMedium = medium.inside;
					if ( medium.inside ) {

						let channelPdf = ${fc}( throughputColor, medium.albedo );
						let scatterDist = ${pc}( medium, channelPdf, ${Cs}( ${8} ) );
						let scattered = scatterDist < surfaceDist;
						let segmentDist = select( surfaceDist, scatterDist, scattered );
						let transmittance = exp( - medium.extinction * segmentDist );
						let distancePdf = dot( channelPdf, ${mc}( medium, segmentDist, scattered ) );
						if ( distancePdf <= 0.0 ) {

							break;

						}

						if ( ! scattered ) {

							// reaching the surface, weighted by the probability of no scatter event before it
							throughputColor *= transmittance / distancePdf;

						} else {

							throughputColor *= medium.albedo * medium.extinction * transmittance / distancePdf;
							ray.origin += ray.direction * scatterDist;
							ray.direction = ${qs}( ray.direction, medium.anisotropy, ${Cs}( ${9} ) );
							ray.maxDist = 0.0;
							mediumScattered = true;
							isFullyTransmissive = false;

							// volume steps are capped separately from bounces
							volumeSteps ++;
							let maxThroughput = max( max( throughputColor.r, throughputColor.g ), throughputColor.b );
							if ( volumeSteps >= maxVolumeSteps || maxThroughput < ${lc} ) {

								break;

							}

							${xs}();
							bounce --;
							continue;

						}

					}

					// NEE's total weight at the vertex this ray left, for MIS. Camera rays have none, and
					// neither do scatter events in a medium
					let isMISWeighted = misEnabled != 0u && bounce > 0u && ! mediumScattered;
					var lightTotalWeight = 0.0;
					if ( isMISWeighted ) {

						lightTotalWeight = ${x}( ray.origin ) + envWeight;

					}

					// forward hits on area lights. Camera rays only see visibleToCameraRays lights, at full weight
					for ( var li = 0u; li < lightsCount; li ++ ) {

						if ( bounce == 0u && ! ${C}( li ) ) {

							continue;

						}

						var lightRec: ${Go};
						if ( ${y}( ray.origin, ray.direction, li, &lightRec ) && lightRec.dist < surfaceDist ) {

							var misWeight = 1.0;
							if ( isMISWeighted ) {

								let selectionPdf = ${b}( li, ray.origin ) / lightTotalWeight;
								misWeight = ${Js}( bsdfPdf, lightRec.pdf * selectionPdf );

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
						if ( ${Ss}( ${50} ) > surface.opacity ) {

							// stop once the transparent bounces run out
							if ( transparentBounce >= maxTransparentBounces ) {

								break;

							}

							ray.origin = ${zs}( vertexData.position.xyz, ray.direction, hitResult.normal );
							${xs}();
							transparentBounce ++;
							bounce --;
							continue;

						}

						let isDispersive = materialInfo.dispersion > 0.0 && surface.ior > 1.0 && surface.transmission > 0.0 && ! surface.thinWall;
						if ( isDispersive ) {

							let wavelength = abs( dispersionWavelength );
							${jc}( &surface, materialInfo.dispersion, wavelength );
							if ( dispersionWavelength < 0.0 ) {

								dispersionWavelength = wavelength;
								throughputColor *= ${Mc}( wavelength );

							}

						}

						// attenuate the light transmitted through the volume when exiting a backface. A scattering
						// medium has already applied its transmittance above
						if ( hitResult.side < 0.0 && materialInfo.transmission > 0.0 && ! segmentInMedium ) {

							throughputColor *= ${Ac}( hitResult.dist, materialInfo.attenuationColor, materialInfo.attenuationDistance );

						}

						// emission, clamped at the depth of the segment that found it, as in Cycles
						let emission = ${Q}( throughputColor * surface.emission, bounce, clampDirect, clampIndirect );
						resultColor += vec4f( emission, 0.0 );

						// next event estimation: choose one light or the environment by its estimated
						// contribution
						if ( misEnabled != 0u ) {

							let ruv = ${ws}( ${5} );
							var selectionPdf = 0.0;
							let lightIndex = ${S}( vertexData.position.xyz, envWeight, ruv.x, &selectionPdf );
							if ( selectionPdf > 0.0 ) {

								var lightRec: ${Go};
								if ( envActive && lightIndex == lightsCount ) {

									// the environment, sampled from its CDF, as a light of kind ENVIRONMENT
									let envSample = ${f}( ruv.yz );
									lightRec.direction = envSample.direction;
									lightRec.emission = envSample.color;
									lightRec.pdf = envSample.pdf;
									lightRec.dist = ${Qs};
									lightRec.lightType = ${5};

								} else {

									lightRec = ${v}( lightIndex, vertexData.position.xyz, ruv.yz );

								}

								if ( lightRec.pdf > 0.0 ) {

									let evalRec = ${c}( view, lightRec.direction, surface );
									if ( evalRec.pdf > 0.0 ) {

										var shadowRay: ${G};
										shadowRay.origin = ${zs}( vertexData.position.xyz, lightRec.direction, hitResult.normal );
										shadowRay.direction = lightRec.direction;
										shadowRay.maxDist = lightRec.dist * ( 1.0 - ${$s} );

										// opaque occlusion up to the light distance. A shadow-specific any hit
										// traversal could support tinted shadows from transmissive and partially
										// opaque objects
										var shadowHit: ${t};
										let occluded = ${r}( shadowRay, &shadowHit );
										if ( ! occluded ) {

											let lightPdf = lightRec.pdf * selectionPdf;

											// env + area lights are also bsdf-sampled, so MIS-weight them - punctual lights take full weight,
											// or when a bsdf ray could never reach the light or isn't traced past the bounce limit
											let isMISWeighted = ${ec}( lightRec.lightType ) && ! shadowHit.forwardBlocked && bounce + 1u < maxBounces;
											let misWeight = select( 1.0, ${Js}( lightPdf, evalRec.pdf ), isMISWeighted );
											let directLight = throughputColor * lightRec.emission * evalRec.color * misWeight / lightPdf;
											let contribution = ${Q}( directLight, bounce + 1u, clampDirect, clampIndirect );
											resultColor += vec4f( contribution, 0.0 );

										}

									}

								}

							}

						}

						let scatterRec = ${s}( view, surface );

						if ( ! auxFound ) {

							auxFound = ${Jo}( surface, scatterRec );
							auxAlbedo = saturate( throughputColor * surface.color );
							auxNormal = surface.normal;

						}

						if ( ${Ls}( scatterRec ) ) {

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
							if ( rrProb <= 0.0 || ${Ss}( ${6} ) > rrProb ) {

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

							let entered = ${dc}( materialInfo, hitResult.objectIndex );

							if ( entered.inside ) {

								medium = entered;

							}

						}

						// exit if our throughput is 0.0
						if ( all( throughputColor == vec3f( 0.0 ) ) ) {

							break;

						}

						ray.origin = ${zs}( vertexData.position.xyz, scatterRec.direction, hitResult.normal );
						ray.direction = scatterRec.direction;
						ray.maxDist = 0.0;

					} else {

						if ( bounce > 0u && ! isFullyTransmissive ) {

							var misWeight = 1.0;
							if ( isMISWeighted && envActive ) {

								// match the env pdf scaling used by the NEE selection so the two estimators balance
								let envPdf = ${m}( ray.direction ) * envWeight / lightTotalWeight;
								misWeight = ${Js}( bsdfPdf, envPdf );

							}

							let environment = ${d}( ray.direction ).rgb * throughputColor * misWeight;
							let contribution = ${Q}( environment, bounce, clampDirect, clampIndirect );
							resultColor += vec4f( contribution, 0.0 );

						} else {

							// hit the background
							// support multiple transparent background blending techniques
							let rng = ${Cs}( ${1} );
							let bg = ${g}( ray.direction, rng );
							if ( bounce == 0u ) {

								// sample the background directly if this is the primary ray
								let background = ${Q}( bg.a * bg.rgb, bounce, clampDirect, clampIndirect );
								resultColor = vec4f( background, bg.a );

							} else {

								// transmissive ray handling
								let env = ${d}( ray.direction );
								let avg = saturate( dot( throughputColor, vec3f( 1.0 / 3.0 ) ) );
								let transparency = ( 1.0 - bg.a ) * avg;
								var envMisWeight = 1.0;
								if ( misEnabled != 0u && ${l} > 0.0 ) {

									let envPdf = ${m}( ray.direction );
									envMisWeight = ${Js}( bsdfPdf, envPdf );

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

					${xs}();

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
				let blendedColor = ${Zs}( prevColor, resultColor, 1.0 / f32( nextSampleCount ) );
				textureStore( ${e.sampleCountTarget}, indexUV, vec4( nextSampleCount ) );
				textureStore( ${e.outputTarget}, colorIndex, blendedColor );

				// the auxiliary images are blended the same way, in the same row order
				if ( accumulateAux != 0u ) {

					var auxPacked: vec3u;
					for ( var layer = 0u; layer < ${3}u; layer ++ ) {

						auxPacked[ layer ] = textureLoad( ${e.auxTarget}, colorIndex, layer ).r;

					}

					auxPacked = ${Zo}( auxPacked, auxAlbedo, auxNormal, 1.0 / f32( nextSampleCount ) );
					for ( var layer = 0u; layer < ${3}u; layer ++ ) {

						textureStore( ${e.auxTarget}, colorIndex, layer, vec4u( auxPacked[ layer ] ) );

					}

				}

			}`;super(w(e)),this.defineUniformAccessors(e)}};function ll(e){let t=new Uint16Array(e.length);for(let n=0,r=e.length;n<r;++n)t[n]=f.toHalfFloat(e[n]);return t}function ul(e,t,n=0,r=e.length){let i=n,a=n+r-1;for(;i<a;){let n=i+a>>1;e[n]<t?i=n+1:a=n}return i-n}function dl(e,t,n){return .2126*e+.7152*t+.0722*n}function fl(e,t=a){let n=e.clone();n.source=new we({...n.image});let{width:r,height:i,data:o}=n.image,s=o;if(n.type!==t){s=t===1016?new Uint16Array(o.length):new Float32Array(o.length);let e;e=o instanceof Int8Array||o instanceof Int16Array||o instanceof Int32Array?2**(8*o.BYTES_PER_ELEMENT-1)-1:2**(8*o.BYTES_PER_ELEMENT)-1;for(let r=0,i=o.length;r<i;r++){let i=o[r];n.type===1016&&(i=f.fromHalfFloat(o[r])),n.type!==1015&&n.type!==1016&&(i/=e),t===1016&&(s[r]=f.toHalfFloat(i))}n.image.data=s,n.type=t}if(n.flipY){let e=s;s=s.slice();for(let t=0;t<i;t++)for(let n=0;n<r;n++){let a=i-t-1,o=4*(t*r+n),c=4*(a*r+n);s[c+0]=e[o+0],s[c+1]=e[o+1],s[c+2]=e[o+2],s[c+3]=e[o+3]}n.flipY=!1,n.image.data=s}return n}var pl=class{constructor(){let e=new p(ll(new Float32Array([0,0,0,0])),1,1);e.type=a,e.format=ke,e.minFilter=_,e.magFilter=_,e.wrapS=ge,e.wrapT=ge,e.generateMipmaps=!1,e.needsUpdate=!0;let t=new p(ll(new Float32Array([0,1])),1,2);t.type=a,t.format=ue,t.minFilter=_,t.magFilter=_,t.generateMipmaps=!1,t.needsUpdate=!0;let n=new p(ll(new Float32Array([0,0,1,1])),2,2);n.type=a,n.format=ue,n.minFilter=_,n.magFilter=_,n.generateMipmaps=!1,n.needsUpdate=!0,this.map=e,this.marginalWeights=t,this.conditionalWeights=n,this.totalSum=0}getPixelWeight(e,t,n){return dl(e,t,n)}dispose(){this.marginalWeights.dispose(),this.conditionalWeights.dispose(),this.map.dispose()}updateFrom(e){let t=fl(e);t.wrapS=ge,t.wrapT=r;let{width:n,height:i,data:a}=t.image,o=new Float32Array(n*i),s=new Float32Array(n*i),c=new Float32Array(i),l=new Float32Array(i),u=0,d=0;for(let e=0;e<i;e++){let t=0;for(let r=0;r<n;r++){let c=e*n+r,l=f.fromHalfFloat(a[4*c+0]),d=f.fromHalfFloat(a[4*c+1]),p=f.fromHalfFloat(a[4*c+2]),m=this.getPixelWeight(l,d,p,e,i);t+=m,u+=m,o[c]=m,s[c]=t}if(t!==0)for(let r=e*n,i=e*n+n;r<i;r++)o[r]/=t,s[r]/=t;d+=t,c[e]=t,l[e]=d}if(d!==0)for(let e=0,t=c.length;e<t;e++)c[e]/=d,l[e]/=d;let p=new Uint16Array(i),m=new Uint16Array(n*i);for(let e=0;e<i;e++){let t=ul(l,(e+1)/i);p[e]=f.toHalfFloat((t+.5)/i)}for(let e=0;e<i;e++)for(let t=0;t<n;t++){let r=e*n+t,i=ul(s,(t+1)/n,e*n,n);m[r]=f.toHalfFloat((i+.5)/n)}this.dispose();let{marginalWeights:h,conditionalWeights:g}=this;h.image={width:i,height:1,data:p},h.needsUpdate=!0,g.image={width:n,height:i,data:m},g.needsUpdate=!0,this.totalSum=u,this.map=t,this.cdfMarginal=l,this.cdfConditional=s}},ml=class extends pl{constructor(){super(),this.mapNode=nt(this.map),this.mapSampler=bt(this.mapNode),this.cdfNode=j(new k(new Float32Array([0,1,0,1]),1),`float`).toReadOnly(),this.rotationNode=A(new ee),this.intensityNode=A(1),this.totalSumNode=A(this.totalSum),this._initFns()}getPixelWeight(e,t,n,r,i){let a=Math.PI*(r+.5)/i;return super.getPixelWeight(e,t,n)*Math.sin(a)}updateFrom(e){super.updateFrom(e);let{mapNode:t,cdfNode:n,totalSumNode:r}=this;t.value=this.map,r.value=this.totalSum;let{width:i,height:a}=this.map.image,{cdfMarginal:o,cdfConditional:s}=this,c=new Float32Array(a+1+a*(i+1));c.set(o,1);for(let e=0;e<a;e++)c.set(s.subarray(e*i,e*i+i),a+1+e*(i+1)+1);n.value=new k(c,1)}dispose(){super.dispose(),this.cdfNode.value.dispose()}_initFns(){let{mapNode:e,mapSampler:t,cdfNode:n,totalSumNode:r,rotationNode:i,intensityNode:a}=this,o=Y`
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
				let sinTheta = sin( ${Le} * v );
				return select( 0.0, rowPdf * pixelPdf * f32( resolution.x * resolution.y ) / ( 2.0 * ${Le} * ${Le} * sinTheta ), sinTheta > 0.0 );

			}
		`;this.sampleColor=Y`
			fn sampleEnv( direction: vec3f ) -> vec4f {

				let sampleDir = ${i} * direction;
				let mapUv = ${Gs}( sampleDir );
				let col = textureSampleLevel( ${e}, ${t}, mapUv, 0 );

				return vec4f( ${a} * col.rgb, col.a );

			}
		`,this.sampleDir=Y`
			fn sampleEnvDir( r: vec2f ) -> ${Uo} {

				var result: ${Uo};

				// search the CDFs: marginal picks the row (v), conditional picks the column (u), and the
				// fractions place the sample within the pixel
				let resolution = textureDimensions( ${e} );
				var rowFraction = 0.0;
				var columnFraction = 0.0;
				let row = ${o}( r.x, 0u, resolution.y, &rowFraction );
				let column = ${o}( r.y, resolution.y + 1u + row * ( resolution.x + 1u ), resolution.x, &columnFraction );
				let texel = vec2u( column, row );
				let uv = ( vec2f( texel ) + vec2f( columnFraction, rowFraction ) ) / vec2f( resolution );

				let direction = ${Xs}( uv );
				let color = textureSampleLevel( ${e}, ${t}, uv, 0 ).rgb;

				result.direction = transpose( ${i} ) * direction;
				result.color = color * ${a};
				result.pdf = ${s}( texel, uv.y );

				return result;

			}
		`,this.getWeight=Y`
			fn getEnvWeight() -> f32 {

				let resolution = textureDimensions( ${e} );
				return ${a} * ${Le} * ${Le} * ${r} / ( 2.0 * f32( resolution.x * resolution.y ) );

			}
		`,this.getDirPdf=Y`
			fn getEnvDirPdf( direction: vec3f ) -> f32 {

				if ( ${r} == 0.0 ) {

					return 0.0;

				}

				let rotatedDir = ${i} * direction;
				let mapUv = ${Gs}( rotatedDir );
				let resolution = textureDimensions( ${e} );
				let texel = min( vec2u( mapUv * vec2f( resolution ) ), resolution - 1u );

				return ${s}( texel, mapUv.y );

			}
		`}},hl=class{get map(){return this.mapNode.value}set map(e){this.mapNode.value=e}get blur(){return this.blurNode.value}set blur(e){this.blurNode.value=e}get rotation(){return this.rotationNode.value}get intensity(){return this.intensityNode.value}set intensity(e){this.intensityNode.value=e}constructor(){let e=new p(new Uint8Array([0,0,0,255]),1,1,ke);e.minFilter=_,e.magFilter=_,e.wrapS=ge,e.wrapT=ge,e.generateMipmaps=!1,e.needsUpdate=!0,this.mapNode=nt(e),this.mapSampler=bt(this.mapNode),this.blurNode=A(0),this.rotationNode=A(new T),this.intensityNode=A(1),this._initFns()}dispose(){this.map.dispose()}_initFns(){let{mapNode:e,mapSampler:t,blurNode:n,rotationNode:r,intensityNode:i}=this;this.sampleColor=Y`
			fn sampleBackground( direction: vec3f, uv: vec2f ) -> vec4f {

				let rotatedDir = ( ${r} * vec4f( direction, 0.0 ) ).xyz;
				let offsetDir = ${Ks}( rotatedDir, uv ) * 0.5 * ${n};
				let sampleDir = normalize( rotatedDir + offsetDir );

				let mapUv = ${Gs}( sampleDir );
				let col = textureSampleLevel( ${e}, ${t}, mapUv, 0 );

				return vec4f( ${i} * col.rgb, col.a );

			}
		`}},gl=new Se,_l=new ee;function vl(e){return`${e.source.uuid}:${e.source.version}`}function yl(e,t,n,r){if(e[t].x+n>r)return-1;let i=n,a=0,o=t;for(;i>0;){if(o>=e.length)return-1;a=Math.max(a,e[o].y),i-=e[o].width,o++}return a}function bl(e,t,n,r){let i=t+r,a=[],o=!1;for(let s=0;s<e.length;s++){let c=e[s],l=c.x+c.width;l<=t?a.push(c):c.x>=i?(o||=(a.push({x:t,y:n,width:r}),!0),a.push(c)):(o||=(a.push({x:t,y:n,width:r}),!0),l>i&&a.push({x:i,y:c.y,width:l-i}))}o||a.push({x:t,y:n,width:r}),e.length=0;for(let t=0;t<a.length;t++){let n=a[t],r=e[e.length-1];r&&r.y===n.y&&r.x+r.width===n.x?r.width+=n.width:e.push(n)}}function xl(e,t,n,r,i){let a=1/0,o=0,s=-1;for(let c=0;c<e.length;c++){let l=yl(e,c,t,r);l>=0&&l+n<=i&&l<a&&(a=l,o=e[c].x,s=c)}return s===-1?null:(bl(e,o,a+n,t),{x:o,y:a})}var Sl=class{get width(){return this.renderTarget.width}get height(){return this.renderTarget.height}get pageCount(){return this.renderTarget.depth}get texture(){return this.renderTarget.texture}constructor(e={}){this.renderTarget=new fe(1,1,{depthBuffer:!1,depth:1,...e}),this.texture.isArrayTexture=!0,this.textureInfo=[new de],this.hashes=[],this.placements=[],this.quadMesh=new qe(new ie),this.quadMesh.material.blending=0}setTextures(e,t){let n=t.map((e,t)=>t);if(n.sort((e,n)=>t[e].source.uuid<t[n].source.uuid?-1:1),t=n.map(e=>t[e]),this._hashesMatch(t)){this._buildCallerTextureInfo(n);return}let r=t.reduce((e,t)=>Math.max(e,t.width,t.height),1);r=Math.min(e.backend.device.limits.maxTextureDimension2D,r);let i=r,a=r,{renderTarget:o}=this,{placements:s,pageCount:c}=this._packTextures(t,i,a);o.setSize(i,a,c),this.texture.isArrayTexture=!0,this._renderTextures(e,t,s),this.placements=s;let l=Array(t.length);for(let e=0,n=t.length;e<n;e++){let n=vl(t[e]);l[e]=n}this.hashes=l,this._buildCallerTextureInfo(n)}_buildCallerTextureInfo(e){let t=Array(e.length);for(let n=0,r=e.length;n<r;n++)t[e[n]]=this.placements[n];this._buildTextureInfo(t)}dispose(){this.renderTarget.dispose(),this.quadMesh.material.dispose()}_hashesMatch(e){let t=this.hashes;if(t.length!==e.length)return!1;for(let n=0,r=e.length;n<r;n++)if(t[n]!==vl(e[n]))return!1;return!0}_packTextures(e,t,n){let r=[];for(let i=0,a=e.length;i<a;i++){let a=e[i];r.push({index:i,w:Math.min(a.width,t),h:Math.min(a.height,n)})}let i=r.sort((e,t)=>t.h-e.h),a=Array(e.length),o=[];for(let e=0,r=i.length;e<r;e++){let r=i[e],s=null,c=-1;for(let e=0;e<o.length;e++)if(s=xl(o[e],r.w,r.h,t,n),s){c=e;break}if(!s){let e=[{x:0,y:0,width:t}];s=xl(e,r.w,r.h,t,n),o.push(e),c=o.length-1}a[r.index]={x:s.x,y:s.y,w:r.w,h:r.h,page:c}}return{placements:a,pageCount:Math.max(o.length,1)}}_buildTextureInfo(e){let t=this.textureInfo;t.length=0;for(let n=0,r=e.length;n<r;n++){let{x:r,y:i,w:a,h:o,page:s}=e[n],c=new de;c.x=r&65535|(i&65535)<<16,c.y=a&65535|(o&65535)<<16,c.z=s&65535,c.w=0,t.push(c)}t.length===0&&t.push(new de(0,0,0,0))}_renderTextures(e,t,n){let{quadMesh:r,renderTarget:i,width:a,height:o}=this,s=e.getRenderTarget(),c=e.toneMapping,l=e.autoClear,u=e.getScissorTest(),d=e.getClearAlpha();e.getClearColor(gl),e.toneMapping=0,e.autoClear=!1,e.setScissorTest(!0),e.setClearColor(0,0);for(let t=0,n=i.depth;t<n;t++)i.viewport.set(0,0,a,o),i.scissor.set(0,0,a,o),e.setRenderTarget(i,t),e.clear();for(let a=0,o=t.length;a<o;a++){let{x:o,y:s,w:c,h:l,page:u}=n[a],d=t[a];if(i.viewport.set(o,s,c,l),i.scissor.set(o,s,c,l),e.setRenderTarget(i,u),d.isRenderTargetTexture){let t=d.matrixAutoUpdate;_l.copy(d.matrix),d.matrix.identity(),d.matrixAutoUpdate=!1,r.material.map=d,r.render(e),d.matrixAutoUpdate=t,d.matrix.copy(_l)}else{let t=d.clone();t.matrixAutoUpdate=!1,t.matrix.identity(),r.material.map=t,r.render(e),t.dispose()}}i.viewport.set(0,0,a,o),i.scissor.set(0,0,a,o),r.material.map=null,e.setClearColor(gl,d),e.setScissorTest(u),e.autoClear=l,e.setRenderTarget(s),e.toneMapping=c}};function Cl(e){let t=0;if(e.byteLength!==0){let n=new Uint8Array(e);for(let r=0;r<e.byteLength;r++){let e=n[r];t=(t<<5)-t+e,t|=0}}return t}var wl=6,Tl=11,El=0,Dl=1,Ol=2,kl=3,Al=4,jl=new b,Ml=new b,Nl=new T,Pl=new te,Fl=new b,Il=new b,Ll=new b(0,1,0),Rl=class{constructor(){let e=new p(new Float32Array(4),1,1);e.format=ke,e.type=ne,e.wrapS=r,e.wrapT=r,e.generateMipmaps=!1,e.minFilter=c,e.magFilter=c,this.tex=e,this.count=0}updateFrom(e,t=[]){let n=this.tex,r=Math.max(e.length*wl,1),i=Math.ceil(Math.sqrt(r));n.image.width!==i&&(n.dispose(),n.image.data=new Float32Array(i*i*4),n.image.width=i,n.image.height=i);let a=n.image.data;for(let n=0,r=e.length;n<r;n++){let r=e[n],i=n*wl*4,o=0;for(let e=0;e<24;e++)a[i+e]=0;r.getWorldPosition(Ml),a[i+o++]=Ml.x,a[i+o++]=Ml.y,a[i+o++]=Ml.z;let s=El;if(r.isRectAreaLight&&r.isCircular?s=Dl:r.isSpotLight?s=Ol:r.isDirectionalLight||r.isSunLight?s=kl:r.isPointLight&&(s=Al),a[i+o++]=s,a[i+o++]=r.color.r,a[i+o++]=r.color.g,a[i+o++]=r.color.b,a[i+o++]=r.intensity,r.getWorldQuaternion(Pl),r.isRectAreaLight)jl.set(r.width,0,0).applyQuaternion(Pl),a[i+o++]=jl.x,a[i+o++]=jl.y,a[i+o++]=jl.z,o++,Ml.set(0,r.height,0).applyQuaternion(Pl),a[i+o++]=Ml.x,a[i+o++]=Ml.y,a[i+o++]=Ml.z,a[i+o++]=jl.cross(Ml).length()*(r.isCircular?Math.PI/4:1);else if(r.isSpotLight){let e=r.radius||0;Fl.setFromMatrixPosition(r.matrixWorld),Il.setFromMatrixPosition(r.target.matrixWorld),Nl.lookAt(Fl,Il,Ll),Pl.setFromRotationMatrix(Nl),jl.set(1,0,0).applyQuaternion(Pl),a[i+o++]=jl.x,a[i+o++]=jl.y,a[i+o++]=jl.z,o++,Ml.set(0,1,0).applyQuaternion(Pl),a[i+o++]=Ml.x,a[i+o++]=Ml.y,a[i+o++]=Ml.z,a[i+o++]=Math.PI*e*e,a[i+o++]=e,a[i+o++]=r.decay,a[i+o++]=r.distance,a[i+o++]=Math.cos(r.angle),a[i+o++]=Math.cos(r.angle*(1-r.penumbra)),a[i+o++]=r.iesMap?t.indexOf(r.iesMap):-1}else if(r.isPointLight){let e=jl.setFromMatrixPosition(r.matrixWorld);a[i+o++]=e.x,a[i+o++]=e.y,a[i+o++]=e.z,o++,o+=4,o+=1,a[i+o++]=r.decay,a[i+o++]=r.distance}else if(r.isDirectionalLight){let e=jl.setFromMatrixPosition(r.matrixWorld),t=Ml.setFromMatrixPosition(r.target.matrixWorld);Il.subVectors(e,t).normalize(),a[i+o++]=Il.x,a[i+o++]=Il.y,a[i+o++]=Il.z}else r.isSunLight&&(Il.setFromMatrixPosition(r.matrixWorld).normalize(),a[i+o++]=Il.x,a[i+o++]=Il.y,a[i+o++]=Il.z);a[i+Tl]=+!!r.visibleToCameraRays}this.count=e.length;let o=Cl(a.buffer);return this.hash!==o&&(this.hash=o,n.needsUpdate=!0,!0)}},zl=class extends Rl{constructor(){super(),this.countNode=A(this.count,`uint`),this.buffer=new k(new Float32Array(2*Wo.getLength()),Wo.getLength()),this.bufferNode=j(this.buffer,Wo).toReadOnly().setName(`lights`),this.iesAtlas=new Sl({type:a}),this.iesProfilesNode=nt(this.iesAtlas.texture),this.iesInfoNode=Ye(this.iesAtlas.textureInfo,`uvec4`).setName(`iesInfo`),this._initFns()}updateFrom(e,t){let n=Array.from(new Set(t.map(e=>e.iesMap).filter(e=>e))),r=super.updateFrom(t,n);this.iesAtlas.setTextures(e,n),this.iesProfilesNode.value=this.iesAtlas.texture;let i=Wo.getLength(),a=this.count,o=Math.max(a,2);this.buffer.array.length!==o*i&&(this.buffer.dispose(),this.buffer=new k(new Float32Array(o*i),i),this.bufferNode.value=this.buffer);let s=this.tex.image.data;this.buffer.array.set(s.subarray(0,a*i));let c=new Int32Array(this.buffer.array.buffer);for(let e=0;e<a;e++){let t=e*i;c[t+3]=Math.round(s[t+3]),c[t+11]=Math.round(s[t+11]),c[t+21]=Math.round(s[t+21])}return this.buffer.needsUpdate=!0,this.countNode.value=this.count,r}_initFns(){let{bufferNode:e,countNode:t,iesProfilesNode:n,iesInfoNode:r}=this,i=Vs(r,n,`sampleIesTexel`);this.isLightVisibleToCamera=Y`
			fn isLightVisibleToCamera( index: u32 ) -> bool {

				return ${e}[ index ].visibleToCameraRays != 0;

			}
		`,this.getLightWeight=Y`
			fn getLightWeight( index: u32, position: vec3f ) -> f32 {

				let light = ${e}[ index ];
				let power = ${Ys}( light.color * light.intensity );
				if ( light.lightType == ${2} ) {

					// the most any point on the spot's disc lights the position. Ies profiles are not
					// evaluated here
					let nearest = ${sc}( light, position );
					var attenuation = 1.0;
					if ( light.iesProfile < 0 ) {

						attenuation = ${tc}( light.coneCos, light.penumbraCos, nearest.x );

					}

					return power * attenuation * ${nc}( nearest.y, light.distance, light.decay );

				} else if ( light.lightType == ${4} ) {

					// the point light's world position is packed into the u slot
					let dist = length( light.u - position );
					return power * ${nc}( dist, light.distance, light.decay );

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
			fn randomLightSample( lightIndex: u32, rayOrigin: vec3f, ruv: vec2f ) -> ${Go} {

				let light = ${e}[ lightIndex ];

				var result: ${Go};
				if ( light.lightType == ${2} ) {

					result = ${oc}( light, rayOrigin, ruv );

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

						spotAttenuation = ${tc}( light.coneCos, light.penumbraCos, cosTheta );

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
					result.dist = ${Qs};
					result.direction = light.u;
					result.pdf = 1.0;
					result.emission = light.color * light.intensity;
					result.lightType = light.lightType;

				} else {

					result = ${ac}( light, rayOrigin, ruv );

				}

				return result;

			}
		`,this.intersectLightAtIndex=Y`
			fn intersectLightAtIndex( rayOrigin: vec3f, rayDirection: vec3f, index: u32, lightRec: ptr<function, ${Go}> ) -> bool {

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

						dist = ${rc}( light.position, normal, u, v, rayOrigin, rayDirection );

					} else if ( light.lightType == ${1} ) {

						dist = ${ic}( light.position, normal, u, v, rayOrigin, rayDirection );

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
		`}dispose(){this.tex.dispose(),this.buffer.dispose(),this.iesAtlas.dispose()}},Bl=class extends X{constructor(){let e={globalId:ct,outputTarget:gt(new Ge(1,1)).toWriteOnly()},t=Y`
			fn compute( globalId: vec3u ) -> void {

				textureStore( ${e.outputTarget}, ${()=>e.outputTarget.value.isArrayTexture?`globalId.xy, globalId.z`:`globalId.xy`}, vec4( 0, 0, 0, 1 ) );

			}
		`;super(t(e)),this.defineUniformAccessors({target:e.outputTarget})}},Vl=0,Hl=1,Ul=class{constructor(e){this.renderer=e,this.maxBounces=15,this.frameBudget=25e4,this.maxTransparentBounces=15,this.maxVolumeSteps=256,this.lowResMode=!1,this.maxSamples=0,this.asyncCompile=!1,this.compiling=!1,this.timing={count:0,frameTime:0,frameBudget:0,lowResMode:!1,pixelCount:0},this._renderTask=null,this._compileState=new WeakMap,this._timestampUIDs=null,this._timingFrame=!1,this.outputTarget=Qo(`Output #0`),this.prevOutputTarget=Qo(`Output #1`),this.sampleCountTarget=$o(`Sample Count`),this.sampleCountClearKernel=new Bl().setWorkgroupSize(8,8,1),this.outputTargetClearKernel=new Bl().setWorkgroupSize(8,8,1),this.auxTargetClearKernel=new Bl().setWorkgroupSize(8,8,1),this.auxTarget=null,this._auxPlaceholder=es()}setAccumulateAux(e){if(!!this.auxTarget!==e){if(this.auxTarget?.dispose(),this.auxTarget=null,e){let{width:e,height:t}=this.outputTarget;this.auxTarget=es(`Auxiliary Images`),this.auxTarget.setSize(e,t,3)}this.reset()}}setRandom(e){}setBVHData(e){}setTextures(e){}setMaterial(e){}setFilterGlossy(e){}setClamping(e,t){}setEnvironment(e,t,n){}setLights(e){}setBackground(e,t,n,r){}*compileKernels(e){let{renderer:t,_compileState:n}=this;if(!this.asyncCompile||!t.compileComputeAsync)return;let r=e.map(e=>e.kernel),i=r.filter(e=>!n.has(e));for(i.length>0&&(i.forEach(e=>n.set(e,Vl)),t.compileComputeAsync(i).catch(()=>{}).finally(()=>{i.forEach(e=>n.set(e,Hl))}));r.some(e=>n.get(e)!==Hl);)this.compiling=!0,yield;this.compiling=!1}rebuild(){this._renderTask=null}setSize(e,t){e=Math.ceil(e),t=Math.ceil(t);let{width:n,height:r}=this.outputTarget;return n===e&&r===t?!1:(this.outputTarget.dispose(),this.prevOutputTarget.dispose(),this.sampleCountTarget.dispose(),this.outputTarget=this.outputTarget.clone(),this.prevOutputTarget=this.outputTarget.clone(),this.sampleCountTarget=this.sampleCountTarget.clone(),this.outputTarget.setSize(e,t),this.prevOutputTarget.setSize(e,t),this.sampleCountTarget.setSize(e,t),this.auxTarget?.setSize(e,t,3),this.reset(),!0)}getSize(e){let{width:t,height:n}=this.outputTarget;return e.x=t,e.y=n,e}update(){let{renderer:e}=this;if(!e.initialized)return;this._renderTask||=this.createRenderTask();let t=e.backend.trackTimestamp&&!this._timingFrame;this._timestampUIDs=t?[]:null,this._renderTask.next(),t&&this._timestampUIDs.length>0&&this._measureFrameTime(this._timestampUIDs),this._timestampUIDs=null}dispatch(e,t){let{renderer:n}=this;n.compute(e.kernel,t),this._timestampUIDs?.push(n.backend.getTimestampUID(e.kernel))}async _measureFrameTime(e){let{renderer:t,timing:n,frameBudget:r,lowResMode:i}=this,{backend:a}=t,{width:o,height:s}=this.outputTarget;this._timingFrame=!0,await t.resolveTimestampsAsync(m.COMPUTE),this._timingFrame=!1,e.every(e=>a.hasTimestampQuery(e))&&(n.frameTime=e.reduce((e,t)=>e+a.getTimestamp(t),0),n.frameBudget=r,n.lowResMode=i,n.pixelCount=o*s,n.count++)}*createRenderTask(){}async getSampleCountsAsync(){return{min:0,max:0,avg:0}}resetSeed(){}reset(){let{renderer:e,outputTargetClearKernel:t,sampleCountClearKernel:n,outputTarget:r,prevOutputTarget:i,sampleCountTarget:a}=this;if(!e.initialized)return;let{width:o,height:s}=r,c=t.getDispatchSize(o,s);if(t.target=r,e.compute(t.kernel,c),t.target=i,e.compute(t.kernel,c),n.target=a,e.compute(n.kernel,c),this.auxTarget){let{auxTargetClearKernel:t}=this;t.target=this.auxTarget,e.compute(t.kernel,t.getDispatchSize(o,s,3))}this._renderTask=null}dispose(){this.outputTarget.dispose(),this.prevOutputTarget.dispose(),this.sampleCountTarget.dispose(),this.sampleCountClearKernel.dispose(),this.outputTargetClearKernel.dispose(),this.auxTargetClearKernel.dispose(),this.auxTarget?.dispose(),this._auxPlaceholder.dispose(),this._renderTask=null}},Wl=new E,Gl=class extends Ul{constructor(e){super(e),this.envInfo=new ml,this._completedSamples=0,this._tileProgress=0,this.kernel=new cl().setWorkgroupSize(8,8,1),this.kernel.envInfo=this.envInfo,this.backgroundInfo=new hl,this.kernel.backgroundInfo=this.backgroundInfo,this.lightsInfo=new zl,this.kernel.lightsInfo=this.lightsInfo}resetSeed(){this.kernel.seed=0}reset(){super.reset(),this._completedSamples=0,this._tileProgress=0}async getSampleCountsAsync(){if(this.lowResMode)return{min:0,max:0,avg:0};let e=this._completedSamples,t=this._tileProgress;return{min:t===1?e+1:e,max:e+1,avg:e+t}}setBVHData(e){this.kernel.context.bvhData=e,this.rebuild()}rebuild(){super.rebuild(),this.kernel.needsUpdate=!0,this.reset()}setRandom(e){this.kernel.context.random=e,this.kernel.needsUpdate=!0,this.reset()}setMaterial(e){this.kernel.material=e.getData(),this.kernel.needsUpdate=!0,this.reset()}setFilterGlossy(e){this.kernel.filterGlossy=e===0?wc:1/e,this.reset()}setClamping(e,t){this.kernel.clampDirect=e,this.kernel.clampIndirect=t,this.reset()}setEnvironment(e){this.envInfo.updateFrom(e)}setLights(e){this.lightsInfo.updateFrom(this.renderer,e),this.reset()}setMultipleImportanceSampling(e){this.kernel.misEnabled=+!!e,this.reset()}setEnvironmentParams(e,t){let{envInfo:n}=this,r=new T().makeRotationFromEuler(t).invert();n.rotationNode.value.setFromMatrix4(r),n.intensityNode.value=e}setBackground(e){let{backgroundInfo:t}=this;t.dispose(),t.map=e}setBackgroundParams(e,t,n){let{backgroundInfo:r}=this,i=new T().makeRotationFromEuler(t).invert();r.rotationNode.value.copy(i),r.intensity=e,r.blur=n}setTransmissiveBackground(e){this.kernel.transmissiveBackground=e,this.reset()}*createRenderTask(){let{renderer:e,kernel:t,maxBounces:n,maxTransparentBounces:r,maxVolumeSteps:i,outputTarget:a,sampleCountTarget:o,lowResMode:s}=this,c=new E;t.outputTarget=a,t.sampleCountTarget=o,t.maxBounces=n,t.maxTransparentBounces=r,t.maxVolumeSteps=i,yield*this.compileKernels([t]);let l=0;for(;;){if(t.maxSamples=this.maxSamples,t.auxTarget=this.auxTarget??this._auxPlaceholder,t.accumulateAux=+!!this.auxTarget,this.maxSamples!==0&&l>=this.maxSamples){yield;continue}this.getSize(Wl);let n=s?1:Math.max(1,Math.ceil(Wl.x*Wl.y/this.frameBudget));c.x=Math.ceil(Math.sqrt(n)),c.y=Math.ceil(n/c.x);let r=this.lowResMode?1:c.x*c.y,i=0,a=t.tileSize;s?this.getSize(a):this.getSize(a).divide(c).ceil();let o=t.getDispatchSize(a.x,a.y);t.seed+=1,e.copyTextureToTexture(this.outputTarget,this.prevOutputTarget),[this.outputTarget,this.prevOutputTarget]=[this.prevOutputTarget,this.outputTarget],t.prevOutputTarget=this.prevOutputTarget,t.outputTarget=this.outputTarget;for(let e=0;e<c.x;e++)for(let n=0;n<c.y;n++)t.offset.set(e,n).multiply(a),this.dispatch(t,o),i=Math.min(i+1,r),this._completedSamples=l,this._tileProgress=i/r,yield;l++}}dispose(){super.dispose(),this.envInfo.dispose(),this.lightsInfo.dispose(),this.kernel.dispose()}},Kl=new O({throughputColor:`vec3f`,currentBounce:`uint`,resultColor:`vec4f`,emission:`vec3f`,scatterPdf:`float`,scatterColor:`vec3f`,minPdf:`float`,origin:`vec3f`,isFullyTransmissive:`uint`,direction:`vec3f`,side:`float`,normal:`vec3f`,objectIndex:`int`,barycoord:`vec3f`,pixelIndex:`uint`,indices:`vec3u`,seed:`uint`,lightDirection:`vec3f`,lightPdf:`float`,lightEmission:`vec3f`,lightDist:`float`,lightBsdf:`vec3f`,lightBsdfPdf:`float`,rayIntersectionIndex:`int`,shadowRayIntersectionIndex:`int`,lightType:`int`,dist:`float`,alphaDepth:`uint`,maxDist:`float`,dispersionWavelength:`float`,auxAlbedo:`uint`,auxNormal:`uint`},`RayData`),ql=new O({origin:`vec3f`,pixelIndex:`uint`,direction:`vec3f`,currentBounce:`uint`,seed:`uint`,alphaDepth:`uint`,maxDist:`float`,_alignment0:`uint`},`TraceQueuedRay`),Jl=new O({barycoord:`vec3f`,objectIndex:`int`,position:`vec3f`,dist:`float`,normal:`vec3f`,side:`float`,indices:`vec3u`,forwardBlocked:`uint`},`TraceResult`),Yl=class extends X{constructor(){let e={rayDataStorage:j(new k(2,1),Kl),pixelQueue:j(new k(1,1),`uint`),targetDimensions:A(new E),frameBudget:A(0,`uint`),globalId:ct},t=Y`
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
		`;super(t(e)),this.defineUniformAccessors(e)}},Xl=class extends X{constructor(){let e={envInfo:{value:null},backgroundInfo:{value:null},lightsInfo:{value:null},prevOutputTarget:gt(Qo()).toReadOnly(),outputTarget:gt(Qo()).toWriteOnly(),sampleCountTarget:gt($o()).toReadWrite(),auxTarget:gt(es()).toReadWrite(),misEnabled:A(1,`uint`),rayCount:A(0,`uint`),maxBounces:A(5,`uint`),clampDirect:A(0),clampIndirect:A(10),transmissiveBackground:A(1),accumulateAux:A(0,`uint`),rayDataStorage:j(new k(2,1),Kl),rayIntersectionsStorage:j(new k(2,1),Jl),shadowRayIntersectionsStorage:j(new k(2,1),Jl),globalId:ct},t=K(`envInfo.value.totalSumNode`,e),n=K(`envInfo.value.intensityNode`,e),r=K(`envInfo.value.sampleColor`,e),i=K(`envInfo.value.sampleDir`,e),a=K(`envInfo.value.getDirPdf`,e),o=K(`envInfo.value.getWeight`,e),s=K(`backgroundInfo.value.sampleColor`,e),c=K(`lightsInfo.value.countNode`,e),l=q(`lightsInfo.value.randomLightSample`,e),u=q(`lightsInfo.value.intersectLightAtIndex`,e),d=q(`lightsInfo.value.getLightWeight`,e),f=q(`lightsInfo.value.getLightsWeight`,e),p=q(`lightsInfo.value.selectLight`,e),m=q(`lightsInfo.value.isLightVisibleToCamera`,e),h=Y`

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
				let input = ( *rayDataStorage )[ index ];
				if ( input.rayIntersectionIndex < 0 ) {

					return;

				}

				let indexUV = vec2u( input.pixelIndex >> 16, input.pixelIndex & 0xFFFF );
				${bs}( indexUV, input.seed, input.currentBounce + input.alphaDepth );

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
						// or when a bsdf ray could never reach the light or isn't traced past the bounce limit
						let isMISWeighted = ${ec}( input.lightType ) && shadowHit.forwardBlocked == 0u && input.currentBounce < maxBounces;
						let misWeight = select( 1.0, ${Js}( input.lightPdf, input.lightBsdfPdf ), isMISWeighted );
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
				var scatterRec: ${zo};
				scatterRec.color = input.scatterColor;
				scatterRec.pdf = input.scatterPdf;

				// the bounce limit, russian roulette, and terminating scatter checks all ran in
				// MaterialKernel, which stages a zeroed pdf and skips the bounce trace when they fire
				var isTerminated = all( throughputColor == vec3f( 0.0 ) ) || input.currentBounce >= maxBounces || ${Ls}( scatterRec );

				if ( ! isTerminated ) {

					// apply the scatter across the traced segment
					throughputColor *= scatterRec.color / scatterRec.pdf;

					let hitResult = ( *rayIntersectionsStorage )[ u32( input.rayIntersectionIndex ) ];
					let didHit = hitResult.objectIndex >= 0;
					let surfaceDist = select( ${Qs}, hitResult.dist, didHit );

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

						var lightRec: ${Go};
						if ( ${u}( input.origin, input.direction, li, &lightRec ) && lightRec.dist < surfaceDist ) {

							var misWeight = 1.0;
							if ( isMISWeighted ) {

								let selectionPdf = ${d}( li, input.origin ) / lightTotalWeight;
								misWeight = ${Js}( input.scatterPdf, lightRec.pdf * selectionPdf );

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

							let ruv = ${ws}( ${5} );
							var selectionPdf = 0.0;
							let lightIndex = ${p}( hitResult.position, envWeight, ruv.x, &selectionPdf );
							if ( selectionPdf > 0.0 ) {

								var lightRec: ${Go};
								if ( envActive && lightIndex == lightsCount ) {

									// the environment, sampled from its CDF, as a light of kind ENVIRONMENT
									let envSample = ${i}( ruv.yz );
									lightRec.direction = envSample.direction;
									lightRec.emission = envSample.color;
									lightRec.pdf = envSample.pdf;
									lightRec.dist = ${Qs};
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
								misWeight = ${Js}( input.scatterPdf, envPdf );

							}

							let environment = ${r}( input.direction ).rgb * throughputColor * misWeight;
							let contribution = ${Q}( environment, input.currentBounce, clampDirect, clampIndirect );
							resultColor += vec4f( contribution, 0.0 );

						} else {

							// hit the background
							// support multiple transparent background blending techniques
							let rng = ${Cs}( ${1} );
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
									misWeight = ${Js}( input.scatterPdf, envPdf );

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
				let storedSamples = textureLoad( ${e.sampleCountTarget}, indexUV ).r & ${sl}u;

				if ( isTerminated ) {

					// blend the finished sample into the output and free the slot for a new camera ray
					let sampleCount = storedSamples + 1;
					let prevColor = textureLoad( ${e.prevOutputTarget}, colorIndex );
					let blendedColor = ${Zs}( prevColor, resultColor, 1.0 / f32( sampleCount ) );
					textureStore( ${e.sampleCountTarget}, indexUV, vec4( ${ol}u | sampleCount ) );
					textureStore( ${e.outputTarget}, colorIndex, blendedColor );

					// the auxiliary images are blended the same way, in the same row order
					if ( accumulateAux != 0u ) {

						var auxPacked: vec3u;
						for ( var layer = 0u; layer < ${3}u; layer ++ ) {

							auxPacked[ layer ] = textureLoad( ${e.auxTarget}, colorIndex, layer ).r;

						}

						let albedo = unpack4x8unorm( input.auxAlbedo ).rgb;
						let normal = unpack4x8snorm( input.auxNormal ).xyz;
						auxPacked = ${Zo}( auxPacked, albedo, normal, 1.0 / f32( sampleCount ) );
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
		`;super(h(e)),this.defineUniformAccessors(e)}},Zl=class extends X{constructor(){let e={material:{value:null},seed:A(0,`uint`),targetDimensions:A(new E),maxSamples:A(0,`uint`),rayCount:A(0,`uint`),filterGlossy:A(1),maxTransparentBounces:A(5,`uint`),maxBounces:A(5,`uint`),sampleCountTarget:gt($o()).toReadWrite(),rayDataStorage:j(new k(2,1),Kl),rayQueue:j(new k(1,1),ql),shadowRayQueue:j(new k(1,1),ql),queueCounters:j(new k(1,1),`uint`).toAtomic(),pixelQueue:j(new k(1,1),`uint`).toAtomic(),globalId:ct},t=J(`bvhData.fns.getCameraRay`),n=J(`bvhData.fns.sampleTrianglePoint`),r=J(`bvhData.fns.getSurfaceRecord`),i=q(`material.value.bsdfSample`,e),a=q(`material.value.bsdfEvalPdf`,e),o=Y`

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

				let materials = &${Fa(`bvhData.storage.materials`)};
				let transforms = &${Fa(`bvhData.storage.transforms`)};

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
					let samples = ( ${sl}u & combinedField );
					let isComplete = maxSamples != 0u && samples >= maxSamples;

					if ( isComplete ) {

						rayDataStorage[ index ].pixelIndex = pixelIndex;
						rayDataStorage[ index ].rayIntersectionIndex = - 1;
						rayDataStorage[ index ].shadowRayIntersectionIndex = - 1;
						return;

					}

					${bs}( indexUV, seed + samples, 0 );

					let uv = vec2f( indexUV ) / vec2f( targetDimensions );
					let jitteredUv = uv + ${Cs}( ${0} ) / vec2f( targetDimensions );
					var ray: ${G};
					if ( ! ${t}( jitteredUv, vec2f( targetDimensions ), &ray ) ) {

						// the camera declined the pixel, so leave the slot dormant for this round. With a
						// sample cap the pixel counts as finished, since it will never take a sample
						// TODO: same as above - this work is a bit wasteful and leaves slots empty for
						// a frame. Is it possible to quickly skip rays outside the mask or are finished?
						if ( maxSamples != 0u ) {

							textureStore( ${e.sampleCountTarget}, indexUV, vec4( ( combinedField & ~${sl}u ) | maxSamples ) );

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
					rayQueue[ rayIndex ].currentBounce = 0u;
					rayQueue[ rayIndex ].seed = seed + samples;
					rayQueue[ rayIndex ].alphaDepth = 0u;
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
					rayDataStorage[ index ].maxDist = ray.maxDist;
					rayDataStorage[ index ].rayIntersectionIndex = i32( rayIndex );
					rayDataStorage[ index ].shadowRayIntersectionIndex = - 1;
					rayDataStorage[ index ].dispersionWavelength = - mix( ${360}.0, ${830}.0, ${Ss}( ${7} ) );
					rayDataStorage[ index ].auxAlbedo = 0u;
					rayDataStorage[ index ].auxNormal = 0u;

					// write the active params & dispatched flag
					textureStore( ${e.sampleCountTarget}, indexUV, vec4( ${al}u | ${ol}u | samples ) );

				} else {

					// evaluate the surface staged by LogicKernel
					let indexUV = vec2u( input.pixelIndex >> 16, input.pixelIndex & 0xFFFF );
					${bs}( indexUV, input.seed, input.currentBounce + input.alphaDepth );

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
					let passesThrough = ${Ss}( ${50} ) > surface.opacity;
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

						let alphaIndex = atomicAdd( &queueCounters[ ${0}u ], 1u );
						rayQueue[ alphaIndex ].origin = ${zs}( vertexData.position.xyz, input.direction, input.normal );
						rayQueue[ alphaIndex ].direction = input.direction;
						rayQueue[ alphaIndex ].pixelIndex = input.pixelIndex;
						rayQueue[ alphaIndex ].currentBounce = input.currentBounce;
						rayQueue[ alphaIndex ].seed = input.seed;
						rayQueue[ alphaIndex ].alphaDepth = input.alphaDepth + 1u;
						// the origin advanced to the hit point, so the remaining budget shrinks by the
						// distance already traced
						rayQueue[ alphaIndex ].maxDist = max( input.maxDist - input.dist, 0.0 );

						// the surface is skipped, so no scatter or emission is staged for LogicKernel.
						// "pdf" is left alone so the previous scatter still weights the forward MIS,
						// and "bsdf" matches it so applying the scatter leaves the throughput as is.
						rayDataStorage[ index ].alphaDepth = input.alphaDepth + 1u;
						rayDataStorage[ index ].emission = vec3f( 0.0 );
						rayDataStorage[ index ].scatterColor = vec3f( input.scatterPdf );
						rayDataStorage[ index ].lightPdf = 0.0;
						rayDataStorage[ index ].origin = rayQueue[ alphaIndex ].origin;
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
						${jc}( &surface, materialInfo.dispersion, wavelength );
						if ( input.dispersionWavelength < 0.0 ) {

							rayDataStorage[ index ].dispersionWavelength = wavelength;
							throughputColor *= ${Mc}( wavelength );
							rayDataStorage[ index ].throughputColor = throughputColor;

						}

					}

					// attenuate the light transmitted through the volume when exiting a backface so
					// the surface's emission and NEE resolve against the attenuated throughput
					if ( input.side < 0.0 && materialInfo.transmission > 0.0 ) {

						throughputColor *= ${Ac}( input.dist, materialInfo.attenuationColor, materialInfo.attenuationDistance );
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

						let isAuxSurface = ${Jo}( surface, scatterRec );
						let auxAlbedo = saturate( throughputColor * surface.color );
						rayDataStorage[ index ].auxAlbedo = pack4x8unorm( vec4f( auxAlbedo, select( 0.0, 1.0, isAuxSurface ) ) );
						rayDataStorage[ index ].auxNormal = pack4x8snorm( vec4f( surface.normal, 0.0 ) );

					}

					// decide termination now so finished paths skip the bounce trace entirely - a
					// zeroed pdf reads as a terminating scatter in LogicKernel, which still resolves
					// the surface's emission and NEE before freeing the slot
					var isTerminated = newBounce >= maxBounces || all( scatterRec.color == vec3f( 0.0 ) ) || ${Ls}( scatterRec );

					// russian roulette early out:
					// Matches Cycles path_state_continuation_probability in integrator/path_state.h
					if ( ! isTerminated && newBounce >= 3u ) {

						let rrThroughput = throughputColor * scatterRec.color / scatterRec.pdf;
						let rrProb = saturate( sqrt( max( max( rrThroughput.r, rrThroughput.g ), rrThroughput.b ) ) );
						isTerminated = rrProb <= 0.0 || ${Ss}( ${6} ) > rrProb;
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

						let rayIndex = atomicAdd( &queueCounters[ ${0}u ], 1u );
						rayQueue[ rayIndex ].origin = ${zs}( vertexData.position.xyz, scatterRec.direction, input.normal );
						rayQueue[ rayIndex ].direction = scatterRec.direction;
						rayQueue[ rayIndex ].pixelIndex = input.pixelIndex;
						rayQueue[ rayIndex ].currentBounce = newBounce;
						rayQueue[ rayIndex ].seed = input.seed;
						rayQueue[ rayIndex ].alphaDepth = input.alphaDepth;
						rayQueue[ rayIndex ].maxDist = 0.0;
						rayDataStorage[ index ].rayIntersectionIndex = i32( rayIndex );

						rayDataStorage[ index ].origin = rayQueue[ rayIndex ].origin;
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

							let shadowIndex = atomicAdd( &queueCounters[ ${1}u ], 1u );
							shadowRayQueue[ shadowIndex ].origin = ${zs}( vertexData.position.xyz, input.lightDirection, input.normal );
							shadowRayQueue[ shadowIndex ].direction = input.lightDirection;
							shadowRayQueue[ shadowIndex ].pixelIndex = input.pixelIndex;
							shadowRayQueue[ shadowIndex ].currentBounce = input.currentBounce;
							shadowRayQueue[ shadowIndex ].seed = input.seed;
							shadowRayQueue[ shadowIndex ].alphaDepth = input.alphaDepth;
							shadowRayQueue[ shadowIndex ].maxDist = input.lightDist * ( 1.0 - ${$s} );
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
		`;super(o(e)),this.defineUniformAccessors(e)}},Ql=class extends X{constructor(){let e={rayQueue:j(new k(1,1),ql),queueCounters:j(new k(1,1),`uint`),rayIntersectionsStorage:j(new k(2,1),Jl),globalId:ct},t=Fa(`bvhData.fns.raycastFirstHit.outputType`),n=Fa(`bvhData.fns.raycastFirstHit`),r=Y`

			fn compute( globalId: vec3u ) -> void {

				let rayQueue = &${e.rayQueue};
				let queueCounters = &${e.queueCounters};
				let rayIntersectionsStorage = &${e.rayIntersectionsStorage};

				let index = globalId.x;
				if ( index >= queueCounters[ ${0}u ] ) {

					return;

				}

				let queuedRay = rayQueue[ index ];
				let indexUV = vec2u( queuedRay.pixelIndex >> 16, queuedRay.pixelIndex & 0xFFFF );
				${bs}( indexUV, queuedRay.seed, queuedRay.currentBounce + queuedRay.alphaDepth );

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
		`;super(r(e)),this.defineUniformAccessors(e)}},$l=class extends X{constructor(){let e={shadowRayQueue:j(new k(1,1),ql),queueCounters:j(new k(1,1),`uint`),shadowRayIntersectionsStorage:j(new k(2,1),Jl),globalId:ct},t=Fa(`bvhData.fns.raycastFirstHit.outputType`),n=Fa(`bvhData.fns.raycastShadow`),r=Y`

			fn compute( globalId: vec3u ) -> void {

				let shadowRayQueue = &${e.shadowRayQueue};
				let queueCounters = &${e.queueCounters};
				let shadowRayIntersectionsStorage = &${e.shadowRayIntersectionsStorage};

				let index = globalId.x;
				if ( index >= queueCounters[ ${1}u ] ) {

					return;

				}

				let queuedRay = shadowRayQueue[ index ];
				let indexUV = vec2u( queuedRay.pixelIndex >> 16, queuedRay.pixelIndex & 0xFFFF );
				${bs}( indexUV, queuedRay.seed, queuedRay.currentBounce + queuedRay.alphaDepth );

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
		`;super(r(e)),this.defineUniformAccessors(e)}},eu=class extends X{constructor(e=0,t=64){let n={queueCounters:j(new k(1,1),`uint`).toAtomic(),outputDispatch:j(new ze(3,1),`u32`).setName(`outputDispatch`)},r=Y`
			fn compute() -> void {

				let queueCounters = &${n.queueCounters};
				let outputDispatch = &${n.outputDispatch};

				let queueLength = atomicLoad( &queueCounters[ ${e}u ] );
				outputDispatch[ 0 ] = ( queueLength + ${t-1}u ) / ${t}u;
				outputDispatch[ 1 ] = 1u;
				outputDispatch[ 2 ] = 1u;

			}
		`;super(r(n)),this.defineUniformAccessors(n)}},tu=class extends X{constructor(){let e={rayDataStorage:j(new k(2,1),Kl),pixelQueue:j(new k(1,1),`uint`).toAtomic(),start:A(0,`uint`),end:A(0,`uint`),addingSlots:A(0,`uint`),globalId:ct},t=Y`
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
		`;super(t(e)),this.defineUniformAccessors(e)}},nu=class extends X{constructor(e={}){let{type:t=`u32`}=e,n={globalId:ct,outputTarget:j(new ze(1,1),t)},r=Y`
			fn compute( globalId: vec3u ) -> void {

				${n.outputTarget}[ globalId.x ] = 0;

			}
		`;super(r(n)),this.defineUniformAccessors({target:n.outputTarget})}},ru=class extends X{constructor(e){let t={source:j(new k(1,1),e).toReadOnly(),target:j(new k(1,1),e),count:A(0,`uint`),globalId:ct},n=Y`
			fn compute( count: u32, globalId: vec3u ) -> void {

				let index = globalId.x;
				if ( index >= count ) {

					return;

				}

				${t.target}[ index ] = ${t.source}[ index ];

			}
		`;super(n(t)),this.defineUniformAccessors(t)}},iu=4294967296,au=new O({minSamples:{type:`uint`,atomic:!0},maxSamples:{type:`uint`,atomic:!0},totalLo:{type:`uint`,atomic:!0},totalHi:{type:`uint`,atomic:!0},pixelCount:{type:`uint`,atomic:!0}},`SampleCounters`),ou=class extends X{constructor(){let e={counters:j(new k(1,1),au)},t=Y`
			fn compute() -> void {

				atomicStore( &${e.counters}[ 0 ].minSamples, 0xFFFFFFFFu );
				atomicStore( &${e.counters}[ 0 ].maxSamples, 0u );
				atomicStore( &${e.counters}[ 0 ].totalLo, 0u );
				atomicStore( &${e.counters}[ 0 ].totalHi, 0u );
				atomicStore( &${e.counters}[ 0 ].pixelCount, 0u );

			}
		`;super(t(e)),this.defineUniformAccessors(e)}},su=class extends X{constructor(){let e={globalId:ct,counters:j(new k(1,1),au),sampleCountTarget:gt(new Ge(1,1)).toReadOnly()},t=Y`
			fn compute( globalId: vec3u ) -> void {

				let targetDimensions = textureDimensions( ${e.sampleCountTarget} );
				if ( globalId.x >= targetDimensions.x || globalId.y >= targetDimensions.y ) {

					return;

				}

				// pixels without a camera ray aren't part of the image, so skip rather than count zero
				let combinedField = textureLoad( ${e.sampleCountTarget}, globalId.xy ).r;
				if ( ( combinedField & ${ol}u ) == 0u ) {

					return;

				}

				let samples = combinedField & ${sl}u;

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
		`;super(t(e)),this.defineUniformAccessors(e)}},cu=Math.floor(134217728/(Kl.getLength()*4)),lu=5,uu=class extends Ul{constructor(e){super(e),this.seed=0,this.envInfo=new ml,this.backgroundInfo=new hl,this.lightsInfo=new zl,this.rayCount=0,this.rayDataStorage=null,this.rayQueue=null,this.shadowRayQueue=null,this.queueCounters=new k(new Uint32Array(2),1),this.queueCounters.name=`Queue Counters`,this.rayIntersectionsStorage=null,this.shadowRayIntersectionsStorage=null,this.pixelQueue=null,this.sampleCountersStorage=new k(new Uint32Array(5),5),this.sampleCountersStorage.name=`Sample Counters`,this._samplesPromise=null,this.populatePixelIndicesKernel=new Yl().setWorkgroupSize(8,8,1),this.logicKernel=new Xl().setWorkgroupSize(64,1,1),this.materialKernel=new Zl().setWorkgroupSize(64,1,1),this.traceRayKernel=new Ql().setWorkgroupSize(64,1,1),this.traceShadowRayKernel=new $l().setWorkgroupSize(64,1,1),this.rayDispatchConverter=new eu(0).setWorkgroupSize(1,1,1),this.shadowDispatchConverter=new eu(1).setWorkgroupSize(1,1,1),this.primeSampleCountersKernel=new ou().setWorkgroupSize(1,1,1),this.tallySampleCountsKernel=new su().setWorkgroupSize(8,8,1),this.resetSlotsKernel=new tu().setWorkgroupSize(64,1,1),this.copyRayDataKernel=new ru(Kl).setWorkgroupSize(64,1,1),this.logicKernel.envInfo=this.envInfo,this.logicKernel.backgroundInfo=this.backgroundInfo,this.logicKernel.lightsInfo=this.lightsInfo,this.zeroDispatchKernel=new nu().setWorkgroupSize(1,1,1),this.volumeKernel=null}resetSeed(){this.seed=0}reset(){super.reset(),this._samplesPromise=null}setBVHData(e){this.materialKernel.context.bvhData=e,this.materialKernel.needsUpdate=!0,this.traceRayKernel.context.bvhData=e,this.traceRayKernel.needsUpdate=!0,this.traceShadowRayKernel.context.bvhData=e,this.traceShadowRayKernel.needsUpdate=!0,this.reset()}rebuild(){super.rebuild(),this.materialKernel.needsUpdate=!0,this.reset()}setRandom(e){this.logicKernel.context.random=e,this.logicKernel.needsUpdate=!0,this.materialKernel.context.random=e,this.materialKernel.needsUpdate=!0,this.traceRayKernel.context.random=e,this.traceRayKernel.needsUpdate=!0,this.traceShadowRayKernel.context.random=e,this.traceShadowRayKernel.needsUpdate=!0,this.reset()}setMaterial(e){this.materialKernel.material=e.getData(),this.materialKernel.needsUpdate=!0,this.reset()}setFilterGlossy(e){this.materialKernel.filterGlossy=e===0?wc:1/e,this.reset()}setClamping(e,t){this.logicKernel.clampDirect=e,this.logicKernel.clampIndirect=t,this.reset()}setTransmissiveBackground(e){this.logicKernel.transmissiveBackground=e,this.reset()}setEnvironment(e){this.envInfo.updateFrom(e)}setLights(e){this.lightsInfo.updateFrom(this.renderer,e),this.reset()}setEnvironmentParams(e,t){let{envInfo:n}=this,r=new T().makeRotationFromEuler(t).invert();n.rotationNode.value.setFromMatrix4(r),n.intensityNode.value=e}setMultipleImportanceSampling(e){this.logicKernel.misEnabled=+!!e,this.reset()}setBackground(e){let{backgroundInfo:t}=this;t.dispose(),t.map=e}setBackgroundParams(e,t,n){let{backgroundInfo:r}=this,i=new T().makeRotationFromEuler(t).invert();r.rotationNode.value.copy(i),r.intensity=e,r.blur=n}dispose(){super.dispose(),this.envInfo.dispose(),this.lightsInfo.dispose(),this.rayDataStorage?.dispose(),this.rayQueue?.dispose(),this.shadowRayQueue?.dispose(),this.queueCounters.dispose(),this.rayIntersectionsStorage?.dispose(),this.shadowRayIntersectionsStorage?.dispose(),this.sampleCountersStorage.dispose(),this.pixelQueue?.dispose(),this.rayDispatchConverter.outputDispatch.dispose(),this.shadowDispatchConverter.outputDispatch.dispose(),this.populatePixelIndicesKernel.dispose(),this.logicKernel.dispose(),this.materialKernel.dispose(),this.traceRayKernel.dispose(),this.traceShadowRayKernel.dispose(),this.rayDispatchConverter.dispose(),this.shadowDispatchConverter.dispose(),this.primeSampleCountersKernel.dispose(),this.tallySampleCountsKernel.dispose(),this.resetSlotsKernel.dispose(),this.copyRayDataKernel.dispose(),this.zeroDispatchKernel.dispose()}_updatePixelQueue(e,t){let n=2+Math.max(e*t,1);(!this.pixelQueue||this.pixelQueue.array.length<n)&&(this.pixelQueue?.dispose(),this.pixelQueue=new k(new Float32Array(n),n),this.pixelQueue.name=`Pixel Queue`,this.materialKernel.pixelQueue=this.pixelQueue,this.populatePixelIndicesKernel.pixelQueue=this.pixelQueue,this.resetSlotsKernel.pixelQueue=this.pixelQueue)}_resizePool(e,t){let{resetSlotsKernel:n,copyRayDataKernel:r}=this,i=this.rayCount,a=Math.min(i,t),o=Math.min(e,t);n.pixelQueue=this.pixelQueue,o<a&&(n.rayDataStorage=this.rayDataStorage,n.start=o,n.end=a,n.addingSlots=!1,this.dispatch(n,n.getDispatchSize(a-o,1,1)));let s=new k(e,Kl.getLength());s.name=`Ray Data`;let c=new k(e,ql.getLength());c.name=`Ray Queue`;let l=new k(e,ql.getLength());l.name=`Shadow Ray Queue`;let u=new k(e,Jl.getLength());u.name=`Ray Intersections`;let d=new k(e,Jl.getLength());d.name=`Shadow Ray Intersections`;let f=Math.min(e,i);f>0&&(r.source=this.rayDataStorage,r.target=s,r.count=f,this.dispatch(r,r.getDispatchSize(f,1,1))),this.rayDataStorage?.dispose(),this.rayQueue?.dispose(),this.shadowRayQueue?.dispose(),this.rayIntersectionsStorage?.dispose(),this.shadowRayIntersectionsStorage?.dispose(),this.rayDataStorage=s,this.rayQueue=c,this.shadowRayQueue=l,this.rayIntersectionsStorage=u,this.shadowRayIntersectionsStorage=d,this.rayCount=e,o>a&&(n.rayDataStorage=s,n.start=a,n.end=o,n.addingSlots=!0,this.dispatch(n,n.getDispatchSize(o-a,1,1)))}_getRequestedSlotCount(){return Math.min(cu,Math.max(1,Math.floor(this.frameBudget)))}_applyBudget(e){let t=this._getRequestedSlotCount();t!==this.rayCount&&this._resizePool(t,e)}*createRenderTask(){let{renderer:e,maxTransparentBounces:t,logicKernel:n,materialKernel:r,traceRayKernel:i,traceShadowRayKernel:a,rayDispatchConverter:o,shadowDispatchConverter:s,zeroDispatchKernel:c,populatePixelIndicesKernel:l}=this,u=new E;this.getSize(u),this._updatePixelQueue(u.x,u.y);let d=u.x*u.y;for(this._applyBudget(d),yield*this.compileKernels([n,r,i,a,o,s,c,l]),c.target=this.queueCounters,this.dispatch(c,[2]),l.rayDataStorage=this.rayDataStorage,l.pixelQueue=this.pixelQueue,l.frameBudget=Math.min(this.rayCount,d),l.targetDimensions.copy(u),this.dispatch(l,l.getDispatchSize(u.x,u.y,1)),this.seed++;;){let l=this.lowResMode?Math.min(this.maxBounces,lu):1;for(let f=0;f<l;f++){e.copyTextureToTexture(this.outputTarget,this.prevOutputTarget),[this.outputTarget,this.prevOutputTarget]=[this.prevOutputTarget,this.outputTarget],n.prevOutputTarget=this.prevOutputTarget,n.outputTarget=this.outputTarget,n.sampleCountTarget=this.sampleCountTarget,n.auxTarget=this.auxTarget??this._auxPlaceholder,n.accumulateAux=+!!this.auxTarget,n.rayDataStorage=this.rayDataStorage,n.rayIntersectionsStorage=this.rayIntersectionsStorage,n.shadowRayIntersectionsStorage=this.shadowRayIntersectionsStorage,n.maxBounces=this.maxBounces,n.rayCount=Math.min(this.rayCount,d),this.dispatch(n,n.getDispatchSize(n.rayCount,1,1)),this._applyBudget(d);let{rayDataStorage:l,rayQueue:f,shadowRayQueue:p,queueCounters:m,rayIntersectionsStorage:h,shadowRayIntersectionsStorage:g}=this,_=Math.min(this.rayCount,d);c.target=m,this.dispatch(c,[2]),r.rayDataStorage=l,r.rayQueue=f,r.shadowRayQueue=p,r.queueCounters=m,r.pixelQueue=this.pixelQueue,r.sampleCountTarget=this.sampleCountTarget,r.seed=this.seed,r.maxSamples=this.maxSamples,r.rayCount=_,r.maxTransparentBounces=t,r.maxBounces=this.maxBounces,r.targetDimensions.copy(u),this.dispatch(r,r.getDispatchSize(_,1,1)),o.queueCounters=m,this.dispatch(o,[1,1,1]),i.rayQueue=f,i.queueCounters=m,i.rayIntersectionsStorage=h,this.dispatch(i,o.outputDispatch),s.queueCounters=m,this.dispatch(s,[1,1,1]),a.shadowRayQueue=p,a.queueCounters=m,a.shadowRayIntersectionsStorage=g,this.dispatch(a,s.outputDispatch)}yield}}getSampleCountsAsync(){if(this._samplesPromise===null){let e=this._measureSampleCounts().finally(()=>{this._samplesPromise===e&&(this._samplesPromise=null)});this._samplesPromise=e}return this._samplesPromise}async _measureSampleCounts(){let{renderer:e,sampleCountTarget:t,sampleCountersStorage:n,primeSampleCountersKernel:r,tallySampleCountsKernel:i}=this;if(!e.initialized||this.lowResMode)return{min:0,max:0,avg:0};r.counters=n,e.compute(r.kernel,[1,1,1]),i.counters=n,i.sampleCountTarget=t,e.compute(i.kernel,i.getDispatchSize(t.width,t.height));let a=await e.getArrayBufferAsync(n),o=new Uint32Array(a),s=o[4];if(s===0)return{min:0,max:0,avg:0};let c=o[3]*iu+o[2];return{min:o[0],max:o[1],avg:c/s}}},du=`

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
`,fu=class extends xe{constructor(){super({uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:`
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

				${du}

				void main() {

					vec3 rayDirection = equirectUvToDirection( vUv );
					rayDirection.x *= flipEnvMap;
					gl_FragColor = textureCube( envMap, rayDirection );

				}`}),this.depthWrite=!1,this.depthTest=!1}},pu=class{constructor(e){this._renderer=e,this._quad=new No(new fu)}generate(e,t=null,n=null){if(!e.isCubeTexture)throw Error(`CubeToEquirectMaterial: Source can only be cube textures.`);let r=e.images[0],i=this._renderer,o=this._quad;t===null&&(t=4*r.height),n===null&&(n=2*r.height);let s=new oe(t,n,{type:ne,colorSpace:r.colorSpace}),c=r.height,u=Math.log2(c)-2,d=1/c,m=1/(3*Math.max(2**u,112));o.material.defines.CUBEUV_MAX_MIP=`${u}.0`,o.material.defines.CUBEUV_TEXEL_WIDTH=m,o.material.defines.CUBEUV_TEXEL_HEIGHT=d,o.material.uniforms.envMap.value=e,o.material.uniforms.flipEnvMap.value=e.isRenderTargetTexture?1:-1,o.material.needsUpdate=!0;let h=i.getRenderTarget(),g=i.autoClear;i.autoClear=!0,i.setRenderTarget(s),o.render(i),i.setRenderTarget(h),i.autoClear=g;let v=new Uint16Array(t*n*4),y=new Float32Array(t*n*4);i.readRenderTargetPixels(s,0,0,t,n,y),s.dispose();for(let e=0,t=y.length;e<t;e++)v[e]=f.toHalfFloat(y[e]);let b=new p(v,t,n,ke,a);return b.minFilter=l,b.magFilter=_,b.wrapS=ge,b.wrapT=ge,b.mapping=303,b.needsUpdate=!0,b}dispose(){this._quad.dispose()}};function mu(e,t){return e.uuid<t.uuid?1:e.uuid>t.uuid?-1:0}function hu(e){return`${e.source.uuid}:${e.colorSpace}`}function gu(e){let t=[];return e.traverseVisible(e=>{(e.isRectAreaLight||e.isSpotLight||e.isPointLight||e.isDirectionalLight||e.isSunLight)&&t.push(e)}),t.sort(mu)}var _u=new de,vu=new O({matrixWorld:`mat4x4f`,inverseMatrixWorld:`mat4x4f`,visible:`uint`,materialIndex:`uint`,visibleToShadowRays:`uint`,_alignment0:`uint`,color:`vec4f`},`TransformStruct`),yu=new O({indices:`vec4u`,normal:`vec3f`,didHit:`bool`,barycoord:`vec3f`,objectIndex:`uint`,side:`float`,dist:`float`,forwardBlocked:`bool`},`PathTracerIntersectionResult`),bu=class extends ko{constructor(e,t={}){super(e,{attributes:{position:`vec4f`,normal:`vec4f`,tangent:`vec4f`,color:`vec4f`,uv:`vec4f`},...t}),this.structs.transform=vu,this.structs.material=Vo,this.storage.materials=null,this.materialsMap=new Map,this.materials=[],this.bvhMap=new Map,this.textureAtlas=new Sl}updateUvAttributesFromScene(){let{attributes:e}=this,t=new Set([`color`]);for(let n=0;n<8;n++){let r=n===0?`uv`:`uv`+n;delete e[r],t.add(r)}this.getRootObject().traverse(n=>{if(n.geometry)for(let r in n.geometry.attributes)t.has(r)&&(e[r]=`vec4f`)})}updateUvSampleFunction(){let{structs:e,fns:t}=this,n=[],r=null;e.attributes.membersLayout.forEach(({name:e})=>{if(/^uv/.test(e)){let t=e===`uv`?0:Number(e.replace(/^uv/,``));n.push(`
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
			`}useTransparencyRaycastFn(){let{textureAtlas:e,storage:t,fns:n}=this,r=e.texture,i=Vs(Ye(e.textureInfo,`uvec4`).setName(`bvh_textureInfo`),nt(r));n.getSurfaceRecord=Tc(i,n.getUvFromChannel,n.getColor);let a=ot().toVar(`bvh_materialIndex`),o=yt(1).toVar(`bvh_rayScalar`),s=yt(1).toVar(`bvh_baseOpacity`),c=rt(!1).toVar(`bvh_isShadowRay`),l=rt(!1).toVar(`bvh_skipShadowObject`),u={shapeStruct:G,resultStruct:yu,boundsOrderFn:Y`
				fn getBoundsOrder( ray: ${G}, splitAxis: u32, node: ${Ca} ) -> bool {

					return ray.direction[ splitAxis ] >= 0.0;

				}
			`,intersectsBoundsFn:Y`
				fn rayIntersectsBounds( ray: ${G}, bounds: ${Sa}, result: ptr<function, ${yu}> ) -> u32 {

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

			`,intersectRangeFn:Y`
				fn intersectRange( ray: ${G}, offset: u32, count: u32, result: ptr<function, ${yu}> ) -> bool {

					var didHit = false;
					for ( var ti = offset; ti < offset + count; ti = ti + 1u ) {

						let i0 = ${t.index}[ ti * 3u ];
						let i1 = ${t.index}[ ti * 3u + 1u ];
						let i2 = ${t.index}[ ti * 3u + 2u ];

						let a = ${t.attributes}[ i0 ].position.xyz;
						let b = ${t.attributes}[ i1 ].position.xyz;
						let c = ${t.attributes}[ i2 ].position.xyz;

						var triResult = ${so}( ray, a, b, c, 0.0 );
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
			`,transformShapeFn:Y`
				fn transformRay( ray: ptr<function, ${G}>, objectIndex: u32 ) -> void {

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
				fn transformResult( hit: ptr<function, ${yu}>, objectIndex: u32 ) -> void {

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
			`})}update(){let{structs:e}=this,t=new k(new Uint8Array,e.material.getLength());this.storage.materials=j(t,e.material).toReadOnly().setName(`bvh_materials`),this.updateUvAttributesFromScene(),this.updateMaterialsMap(),super.update(),this.updateUvSampleFunction(),this.updateColorSampleFn(),this.updateMaterials(),this.bvhMap.clear(),this.useTransparencyRaycastFn()}updateMaterialsMap(){let{materials:e,materialsMap:t}=this;t.clear(),e.length=0,this.getRootObject().traverse(e=>{e.material&&(Array.isArray(e.material)?e.material.forEach(e=>e&&n(e)):n(e.material))}),e.sort((e,t)=>e.uuid<t.uuid?1:-1).forEach((e,n)=>{t.set(e,n)});function n(n){t.has(n)||(e.push(n),t.set(n,-1))}}updateMaterials(){this.updateMaterialsMap();let{materials:e,storage:t,structs:n,bvh:r}=this,{materialData:i,textures:a}=this.writeMaterialsBuffer(e),o=t.materials.proxyNode,s=t.transforms.proxyNode,c=i.length/n.material.getLength();o.value.count<c&&(o.value.dispose(),o.value=new k(i,n.material.getLength())),o.value.array.set(i),o.value.needsUpdate=!0,this._getTransformMap(r).forEach(e=>{this.writeMaterialData(e,e.slot,s.value.array.buffer)}),s.value.needsUpdate=!0,this.textures=a}writeMaterialsBuffer(e){function t(e){switch(e){case ge:return 0;case r:return 1;case Te:return 2;default:return 0}}function n(e,n){if(n in e&&e[n]){let r=e[n],i=hu(r);s.has(i)||(s.set(i,s.size),c.push(r));let a=s.get(i),o=r.channel&7,l=t(r.wrapS),u=t(r.wrapT);return(r.magFilter===1003)<<30|u<<28|l<<26|o<<23|a&8388607}return-1}function i(e,t,n){return t in e?e[t]:n}function a(e,t,n,r){let i=e[t]&&e[t].isTexture?e[t]:null;if(i){i.matrixAutoUpdate&&i.updateMatrix();let e=i.matrix.elements;for(let t=0;t<3;t++)n[r+4*t+0]=e[3*t+0],n[r+4*t+1]=e[3*t+1],n[r+4*t+2]=e[3*t+2],n[r+4*t+3]=0}return 12}let o=0,s=new Map,c=[],l=Math.max(e.length,2),u=new Float32Array(l*this.structs.material.getLength()),d=new Int32Array(u.buffer);for(let t=0,r=e.length;t<r;t++){let r=e[t];u[o++]=r.color.r,u[o++]=r.color.g,u[o++]=r.color.b,d[o++]=n(r,`map`),u[o++]=i(r,`metalness`,0),d[o++]=n(r,`metalnessMap`),u[o++]=i(r,`roughness`,0),d[o++]=n(r,`roughnessMap`),u[o++]=i(r,`ior`,1.5),u[o++]=i(r,`transmission`,0),d[o++]=n(r,`transmissionMap`),u[o++]=i(r,`emissiveIntensity`,0),`emissive`in r?(u[o++]=r.emissive.r,u[o++]=r.emissive.g,u[o++]=r.emissive.b):(u[o++]=0,u[o++]=0,u[o++]=0),d[o++]=n(r,`emissiveMap`),d[o++]=n(r,`normalMap`),o++,`normalScale`in r?(u[o++]=r.normalScale.x,u[o++]=r.normalScale.y):(u[o++]=1,u[o++]=1),u[o++]=i(r,`clearcoat`,0),d[o++]=n(r,`clearcoatMap`),d[o++]=n(r,`clearcoatNormalMap`),o++,`clearcoatNormalScale`in r?(u[o++]=r.clearcoatNormalScale.x,u[o++]=r.clearcoatNormalScale.y):(u[o++]=1,u[o++]=1),u[o++]=i(r,`clearcoatRoughness`,0),d[o++]=n(r,`clearcoatRoughnessMap`),d[o++]=n(r,`iridescenceMap`),d[o++]=n(r,`iridescenceThicknessMap`),u[o++]=i(r,`iridescence`,0),u[o++]=i(r,`iridescenceIOR`,1.3);let s=i(r,`iridescenceThicknessRange`,[100,400]);u[o++]=s[0],u[o++]=s[1],u[o++]=i(r,`diffuseRoughness`,0),u[o++]=i(r,`dispersion`,0),`specularColor`in r?(u[o++]=r.specularColor.r,u[o++]=r.specularColor.g,u[o++]=r.specularColor.b):(u[o++]=1,u[o++]=1,u[o++]=1),d[o++]=n(r,`specularColorMap`),u[o++]=i(r,`specularIntensity`,1),d[o++]=n(r,`specularIntensityMap`);let c=i(r,`thickness`,0)===0&&i(r,`attenuationDistance`,1/0)===1/0;if(d[o++]=Number(c),o++,`attenuationColor`in r?(u[o++]=r.attenuationColor.r,u[o++]=r.attenuationColor.g,u[o++]=r.attenuationColor.b):(u[o++]=1,u[o++]=1,u[o++]=1),u[o++]=i(r,`attenuationDistance`,1/0),d[o++]=n(r,`alphaMap`),d[o++]=Number(i(r,`castShadow`,!0)),u[o++]=r.opacity,u[o++]=r.alphaTest,!c&&r.transmission>0)u[o++]=0;else switch(r.side){case 0:u[o++]=1;break;case 1:u[o++]=-1;break;case 2:u[o++]=0}d[o++]=Number(i(r,`matte`,!1)),u[o++]=i(r,`sheen`,0),o++,`sheenColor`in r?(u[o++]=r.sheenColor.r,u[o++]=r.sheenColor.g,u[o++]=r.sheenColor.b):(u[o++]=0,u[o++]=0,u[o++]=0),d[o++]=n(r,`sheenColorMap`),u[o++]=i(r,`sheenRoughness`,0),d[o++]=n(r,`sheenRoughnessMap`),d[o++]=Number(r.vertexColors),d[o++]=Number(r.flatShading),d[o++]=Number(r.transparent),d[o++]=0,u[o++]=i(r,`anisotropy`,0),u[o++]=i(r,`anisotropyRotation`,0),d[o++]=n(r,`anisotropyMap`),o++,o++,o++,o+=a(r,`map`,u,o),o+=a(r,`metalnessMap`,u,o),o+=a(r,`roughnessMap`,u,o),o+=a(r,`transmissionMap`,u,o),o+=a(r,`emissiveMap`,u,o),o+=a(r,`normalMap`,u,o),o+=a(r,`clearcoatMap`,u,o),o+=a(r,`clearcoatNormalMap`,u,o),o+=a(r,`clearcoatRoughnessMap`,u,o),o+=a(r,`sheenColorMap`,u,o),o+=a(r,`sheenRoughnessMap`,u,o),o+=a(r,`iridescenceMap`,u,o),o+=a(r,`iridescenceThicknessMap`,u,o),o+=a(r,`specularColorMap`,u,o),o+=a(r,`specularIntensityMap`,u,o),o+=a(r,`alphaMap`,u,o),o+=a(r,`anisotropyMap`,u,o);let l=i(r,`multiscatterColor`,null);u[o++]=l?l.r:1,u[o++]=l?l.g:1,u[o++]=l?l.b:1,u[o++]=i(r,`scatterStrength`,0),u[o++]=i(r,`scatterAnisotropy`,0),o+=3}return{materialData:d,textures:c}}writeMaterialData(e,t,n){let{materialsMap:r}=this,{object:i,instanceId:a,root:o}=e,s=i.material;if(Array.isArray(s)){let{materialIndex:e}=i.geometry.groups[o];s=s[e]}let c=new Uint32Array(n),l=r.has(s)?r.get(s):-1;l===-1&&(c[t*vu.getLength()+32]=0),c[t*vu.getLength()+33]=l,i.isInstancedMesh&&i.instanceColor?(i.getColorAt(a,_u),_u.w=1):i.isBatchedMesh&&i._colorsTexture?i.getColorAt(a,_u):_u.setScalar(1);let u=new Float32Array(n);_u.toArray(u,t*vu.getLength()+36)}writeTransformData(e,t,n,r){super.writeTransformData(e,t,n,r),this.writeMaterialData(e,n,r);let i=new Uint32Array(r);i[n*this.structs.transform.getLength()+34]=e.object.visibleToShadowRays===!1?0:1}getBVH(e,t,n){let{bvhMap:r}=this,a=super.getBVH(e,t,n);if(r.has(a)){let e=r.get(a);if(Object.assign(n,e.range),a!==e.bvh&&a instanceof ba){let t=a.mesh,n=e.bvh.mesh;n.matrixWorld.copy(t.matrixWorld).decompose(n.position,n.quaternion,n.scale),a.refit(),a.getBoundingBox(n.boundingBox),a.geometry.computeBoundingBox()}return e.bvh}if(a.indirect){let e=new S;e.attributes=a.geometry.attributes;let t;if(a.geometry.index)t=a.geometry.index.array.slice(n.start,n.count+n.start);else{let{start:e,count:r}=n;t=new Uint32Array(r);for(let r=0,i=n.count;r<i;r++)t[r]=e+r}e.index=new De(t,1),n.start=0;let o;if(a instanceof ba){let t=a.mesh,n=new i(e);n.copy(t),n.matrixWorld.copy(t.matrixWorld).decompose(n.position,n.quaternion,n.scale),o=new ba(n,{strategy:2,targetLeafSize:5})}else o=new ia(e,{strategy:2,targetLeafSize:5});return r.set(a,{bvh:o,range:{...n}}),o}return a}dispose(){let{storage:e}=this;for(let t in e)e[t].value?.dispose()}},xu=class extends Ue{set texture(e){this._texNode.value=e}set layer(e){this._layerUniform.value=e}constructor(){super(),this.blending=0,this._texNode=nt(new p),this._layerUniform=A(0),this.colorNode=D(`
			fn atlasDebug( tex: texture_2d_array<f32>, coord: vec2f, layer: f32 ) -> vec4f {

				// flip y so texel origin shows at the top-left
				let dims = vec2f( textureDimensions( tex, 0 ).xy );
				let texel = vec2i( vec2f( coord.x, 1.0 - coord.y ) * dims );
				return textureLoad( tex, texel, i32( layer ), 0 );

			}
		`)(this._texNode,Tt(Ct()),this._layerUniform)}},Su=class extends Ue{set texture(e){this._texNode.value=e}set minCount(e){this._minUniform.value=e}set maxCount(e){this._maxUniform.value=e}constructor(){super(),this.blending=0,this._texNode=nt(new Ge(1,1)),this._minUniform=A(0),this._maxUniform=A(1);let e=Y`
			fn sampleDensity( tex: texture_2d<u32>, coord: vec2f, minCount: f32, maxCount: f32 ) -> vec4f {

				let dims = vec2f( textureDimensions( tex, 0 ) );
				let texel = vec2i( coord * dims );

				// the high bits hold the ray state flags rather than part of the count
				let samples = textureLoad( tex, texel, 0 ).r & ${sl}u;

				// stretched across the recorded range rather than from zero, otherwise a converged
				// image with counts bunched near the max reads as uniformly hot
				let range = max( maxCount - minCount, 1.0 );
				let t = clamp( ( f32( samples ) - minCount ) / range, 0.0, 1.0 );

				return vec4f( ${Io}( t ), 1.0 );

			}
		`;this.colorNode=e(this._texNode,Tt(Ct()),this._minUniform,this._maxUniform)}},Cu=class extends Ue{set texture(e){this._texNode.value=e}set showNormal(e){this._showNormalUniform.value=+!!e}constructor(){super(),this.blending=0,this._texNode=nt(es()),this._showNormalUniform=A(0,`uint`);let e=Y`
			fn auxDebug( tex: texture_2d_array<u32>, coord: vec2f, showNormal: u32 ) -> vec4f {

				// the rows are stored top down, so the quad's bottom up uv is flipped
				let texel = vec2u( vec2f( coord.x, 1.0 - coord.y ) * vec2f( textureDimensions( tex, 0 ) ) );
				var packed: vec3u;
				for ( var layer = 0u; layer < ${3}u; layer ++ ) {

					packed[ layer ] = textureLoad( tex, texel, layer, 0 ).r;

				}

				let albedo = ${Yo}( packed );
				let normal = ${Xo}( packed );
				return vec4f( select( albedo, normal, showNormal == 1u ), 1.0 );

			}
		`;this.colorNode=e(this._texNode,Tt(Ct()),this._showNormalUniform)}};function wu(e,t){if(!e.index){let t=e.attributes.position.count,n=Array(t);for(let e=0;e<t;e++)n[e]=e;e.setIndex(n)}if(!e.attributes.normal&&t&&t.includes(`normal`)&&e.computeVertexNormals(),!e.attributes.uv&&t&&t.includes(`uv`)){let t=e.attributes.position.count;e.setAttribute(`uv`,new De(new Float32Array(t*2),2,!1))}if(!e.attributes.uv2&&t&&t.includes(`uv2`)){let t=e.attributes.position.count;e.setAttribute(`uv2`,new De(new Float32Array(t*2),2,!1))}if(!e.attributes.tangent&&t&&t.includes(`tangent`)){if(e.attributes.uv&&e.attributes.normal)e.computeTangents();else{let t=e.attributes.position.count;e.setAttribute(`tangent`,new De(new Float32Array(t*4),4,!1))}}if(!e.attributes.color&&t&&t.includes(`color`)){let t=e.attributes.position.count,n=new Float32Array(t*4);n.fill(1),e.setAttribute(`color`,new De(n,4))}}var Tu=class{init(){}getBsdfNode(){return Y`

			fn bsdfSample( worldWo: vec3f, surf: SurfaceRecord ) -> ScatterRecord {

				var record: ScatterRecord;

				let wo = normalize( surf.normalInvBasis * worldWo );
				let wi = ${Us}( wo, ${Cs}( ${3} ) );
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

		`}getData(){return{bsdfSample:this.getBsdfNode(),bsdfEvalPdf:this.getBsdfEvalPdfNode()}}},Eu=D(`

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

`),Du=D(`

	fn fonSingleScatter( NdotV: f32, NdotL: f32, VdotH: f32, roughness: f32, A: f32, rho: vec3f ) -> vec3f {

		let VdotL = 2.0 * VdotH * VdotH - 1.0;
		let s = VdotL - NdotV * NdotL;
		let sOverT = select( s, s / max( NdotV, NdotL ), s > 0.0 );

		return ( rho / PI ) * A * ( 1.0 + roughness * sOverT );

	}

`,[Z]);D(`

	fn fonBrdf( NdotV: f32, NdotL: f32, VdotH: f32, surf: SurfaceRecord ) -> vec3f {

		let roughness = surf.diffuseRoughness;
		if ( roughness < 1e-5 ) {

			return surf.color / PI;

		}

		let rho = saturate( surf.color );
		let A = 1.0 / ( 1.0 + ( 0.5 - 2.0 / ( 3.0 * PI ) ) * roughness );

		return fonSingleScatter( NdotV, NdotL, VdotH, roughness, A, rho );

	}

`,[Z,Ho,Du]);var Ou=D(`

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

`,[Z,Ho,Eu,Du]),ku=D(`

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

`),Au=D(`

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

`),ju=D(`

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

`,[Z,ku,Au]),Mu=D(`

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

`,[Z,ku,Au]),Nu=D(`

	fn eonUniformHemisphereSample( uv: vec2f ) -> vec3f {

		let sinTheta = sqrt( max( 1.0 - uv.x * uv.x, 0.0 ) );
		let phi = 2.0 * PI * uv.y;
		return vec3f( sinTheta * cos( phi ), sinTheta * sin( phi ), uv.x );

	}

`,[Z]),Pu=D(`

	fn eonUniformProbability( wo: vec3f, roughness: f32 ) -> f32 {

		let mu = saturate( wo.z );
		return clamp( pow( roughness, 0.1 ), 0.0, 1.0 ) * (
			0.162925 + ( - 0.372058 + ( 0.538233 - 0.290822 * mu ) * mu ) * mu
		);

	}

`),Fu=D(`

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

`,[Mu,Nu,Pu]),Iu=D(`

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

`,[Z,ju,Pu]),Lu=Y`

	fn velvetD( cosThetaH: f32, roughness: f32 ) -> f32 {

		var alpha = max( roughness, 0.07 );
		alpha = alpha * alpha;

		let invAlpha = 1.0 / alpha;
		let sqrCosThetaH = cosThetaH * cosThetaH;
		let sinThetaH = max( 1.0 - sqrCosThetaH, 0.001 );

		return ( 2.0 + invAlpha ) * pow( sinThetaH, 0.5 * invAlpha ) / ( 2.0 * PI );

	}

`,Ru=Y`

	fn velvetParamsInterpolate( i: i32, oneMinusAlphaSquared: f32 ) -> f32 {

		let p0 = array<f32, 5>( 25.3245, 3.32435, 0.16801, - 1.27393, - 4.85967 );
		let p1 = array<f32, 5>( 21.5473, 3.82987, 0.19823, - 1.97760, - 4.32054 );

		return mix( p1[ i ], p0[ i ], oneMinusAlphaSquared );

	}

`,zu=Y`

	fn velvetL( x: f32, alpha: f32 ) -> f32 {

		let oneMinusAlpha = 1.0 - alpha;
		let oneMinusAlphaSquared = oneMinusAlpha * oneMinusAlpha;

		let a = ${Ru}( 0, oneMinusAlphaSquared );
		let b = ${Ru}( 1, oneMinusAlphaSquared );
		let c = ${Ru}( 2, oneMinusAlphaSquared );
		let d = ${Ru}( 3, oneMinusAlphaSquared );
		let e = ${Ru}( 4, oneMinusAlphaSquared );

		return a / ( 1.0 + b * pow( abs( x ), c ) ) + d * x + e;

	}

`,Bu=Y`

	fn velvetLambda( cosTheta: f32, alpha: f32 ) -> f32 {

		if ( abs( cosTheta ) < 0.5 ) {

			return exp( ${zu}( cosTheta, alpha ) );

		} else {

			return exp( 2.0 * ${zu}( 0.5, alpha ) - ${zu}( 1.0 - cosTheta, alpha ) );

		}

	}

`,Vu=Y`

	fn velvetG( cosThetaO: f32, cosThetaI: f32, roughness: f32 ) -> f32 {

		var alpha = max( roughness, 0.07 );
		alpha = alpha * alpha;

		return 1.0 / ( 1.0 + ${Bu}( cosThetaO, alpha ) + ${Bu}( cosThetaI, alpha ) );

	}

`,Hu=Y`

	fn directionalAlbedoSheen( cosThetaIn: f32, alpha: f32 ) -> f32 {

		let cosTheta = saturate( cosThetaIn );
		let c = 1.0 - cosTheta;
		let c3 = c * c * c;

		return 0.65584461 * c3 + 1.0 / ( 4.16526551 + exp( -7.97291361 * sqrt( alpha ) + 6.33516894 ) );

	}

`,Uu=Y`

	fn sheenAlbedoScaling( wo: vec3f, wi: vec3f, surf: ${Ho} ) -> f32 {

		var alpha = max( surf.sheenRoughness, 0.07 );
		alpha = alpha * alpha;

		let maxSheenColor = max( max( surf.sheenColor.r, surf.sheenColor.g ), surf.sheenColor.b );

		let eWo = ${Hu}( clamp( wo.z, 0.001, 1.0 ), alpha );
		let eWi = ${Hu}( clamp( wi.z, 0.001, 1.0 ), alpha );

		return min( 1.0 - maxSheenColor * eWo, 1.0 - maxSheenColor * eWi );

	}

`,Wu=Y`

	fn sheenColor( wo: vec3f, wi: vec3f, wh: vec3f, surf: ${Ho} ) -> vec3f {

		let cosThetaO = clamp( wo.z, 0.001, 1.0 );
		let cosThetaI = clamp( wi.z, 0.001, 1.0 );
		let cosThetaH = wh.z;

		let D = ${Lu}( cosThetaH, surf.sheenRoughness );
		let G = ${Vu}( cosThetaO, cosThetaI, surf.sheenRoughness );

		// See equation (1) in http://www.aconty.com/pdf/s2017_pbs_imageworks_sheen.pdf
		var color = surf.sheenColor;
		color *= D * G / ( 4.0 * abs( cosThetaO * cosThetaI ) );

		return color;

	}

`,Gu=32,Ku=16,qu=class extends Ke{constructor(){super(Gu,Gu,31),this.type=a,this.format=ke,this.minFilter=_,this.magFilter=_,this.dielectricLayerCount=10,this.transmissiveLayerCount=10,this.minIoR=1,this.maxIoR=2.5,this.sampleConductorFn=q(`_sampleConductorFn`,this),this.sampleDielectricFn=q(`_sampleDielectricFn`,this),this.sampleTransmissiveFn=q(`_sampleTransmissiveFn`,this)}generate(e){let{dielectricLayerCount:t,transmissiveLayerCount:n,minIoR:r,maxIoR:i}=this,a={outputTarget:St(this).toWriteOnly(),globalId:ct,eta:A(1),layer:A(0,`uint`),includeFresnel:A(0),includeRefraction:A(0)},o=[Gu/Ku,Gu/Ku,1],s=new X(Bc(a.outputTarget)(a),{workgroupSize:[Ku,Ku,1]});a.layer.value=0,a.eta.value=1,a.includeFresnel.value=0,a.includeRefraction.value=0,e.compute(s.kernel,o);for(let n=0;n<t;n++)a.layer.value++,a.eta.value=1/se.mapLinear(n,0,t-1,r,i),a.includeFresnel.value=1,e.compute(s.kernel,o);a.includeFresnel.value=1,a.includeRefraction.value=1;for(let c=0;c<n;c++){let l=se.mapLinear(c,0,n-1,r,i);a.layer.value=1+t+c,a.eta.value=1/l,e.compute(s.kernel,o),a.layer.value=1+t+n+c,a.eta.value=l,e.compute(s.kernel,o)}s.dispose();let c=Y`
			fn mapLinearClamped( v: f32, a0: f32, a1: f32, b0: f32, b1: f32 ) -> f32 {

				let mapped = saturate( ( v - a0 ) / ( a1 - a0 ) );
				return mix( b0, b1, mapped );

			}
		`,l=at(this).setName(`turquinTexture`),u=bt(this).setName(`turquinSampler`),d=1/(1+t+2*n);this._sampleConductorFn=Y`
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
		`}},Ju=yt(1.5),Yu=yt(1e6),Xu=class extends Tu{constructor(e={}){super();let{specularBrdf:t=Ec,specularBtdf:n=Oc,diffuseBrdf:r=Ou,fresnelMix:i=Nc,conductorFresnel:a=Rc,fresnelCoat:o=zc,iridescentFresnel:s=Ic}=e;this.turquinTexture=new qu,this.specularBrdf=t,this.specularBtdf=n,this.diffuseBrdf=r,this.fresnelMix=i,this.conductorFresnel=a,this.fresnelCoat=o,this.iridescentFresnel=s,this.transmissionFresnel=Lc(s)}init(e){this.turquinTexture.generate(e)}getBsdfNode(){this._bsdfEvalFunc=Y`

			// The material is organized as one scoped block per lobe in cascade order - clearcoat,
			// sheen, transmission, specular, diffuse - each accumulating into a shared result and
			// guarding its own hemisphere.
			// TODO: energy only cascades downward through front faces, so the layers are always traversed
			// outside-in and cannot reflect energy back into the glass from below.
			fn bsdfEval( ctx: ${qo}, surf: ${Ho} ) -> vec3f {

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
					let clearcoatBoost = 1.0 + ${Ds}( 1.5 ) * ( 1.0 - clearcoatEnergySS ) / clearcoatEnergySS;

					let clearcoatSpecular = ${this.specularBrdf}( Vc, Lc, Hc, vec2( clearcoatAlpha ) ) * clearcoatBoost;
					let clearcoatFresnel = ${js}( abs( dot( Vc, Hc ) ), ${Ds}( 1.5 ) );

					// retrieve specular energy reflected by this layer
					let clearcoatFresnelEnergySS = ${this.turquinTexture.sampleDielectricFn}( NdotVc, surf.clearcoatRoughness, 1.5 ) * clearcoatBoost;

					result += surf.clearcoat * clearcoatFresnel * clearcoatSpecular;
					attenuation *= 1.0 - surf.clearcoat * clearcoatFresnelEnergySS;

				}

				// sheen
				if ( NdotL > 0.0 && surf.sheen > 0.0 ) {

					result += attenuation * surf.sheen * ${Wu}( ctx.V, ctx.L, ctx.H, surf );
					attenuation *= mix( 1.0, ${Uu}( ctx.V, ctx.L, surf ), surf.sheen );

				}

				// transmission
				// handles specular reflection and transmission
				if ( surf.transmission > 0.0 ) {

					let matchedIor = ${Dc}( surf.eta );

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
							let thinWallAlpha = vec2f( ${kc}( alphaB, surf.ior ) );
							let thinWallEnergySS = max( ${this.turquinTexture.sampleConductorFn}( NdotV, sqrt( thinWallAlpha.x ) ), 1e-5 );
							refraction = fresnel.transmittance * ${this.specularBrdf}( ctx.V, wiMirror, ctx.H, thinWallAlpha ) / thinWallEnergySS;

						} else if ( ! matchedIor ) {

							// The default BTDF contains the plain dielectric Fresnel complement. Replace it
							// with the colored thin-film-aware coefficient shared by sampling and the PDF.
							let dielectricTransmittance = 1.0 - ${Fs}( abs( ctx.VdotH ), surf.eta );
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
					let dielectricFr = ${Ms}( ctx.VdotH, dielectricF0, vec3f( 1.0 ) );
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

						let dielectricFilmFresnel = ${this.iridescentFresnel}( ctx.VdotH, vec3f( ${Ds}( filmBaseIor ) ), surf.iridescenceIor, outsideIor, surf.iridescenceThickness );
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

		`;let e=this.getBsdfEvalPdfNode();return Y`

			fn bsdfSample( worldWo: vec3f, surf: ${Ho} ) -> ${zo} {

				var result: ${zo};
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
				let weights = ${Ws}( wo, wo, woClearcoat, vec3( 0, 0, 1 ), ${Ju}, surf );
				let cdfClearcoat = weights.clearcoat;
				let cdfSpecular = cdfClearcoat + weights.specular;
				let cdfTransmission = cdfSpecular + weights.transmission;
				let cdfTotal = cdfTransmission + weights.diffuse;

				// random samples for lobes
				let lobeSample = ${Ss}( ${2} ) * cdfTotal;
				let directionUV = ${Cs}( ${3} );

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
					let whCoat = ${hc}( woClearcoat, vec2( clearcoatAlpha ), directionUV );
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

					wh = ${hc}( wo, alpha, directionUV );
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
					wh = ${hc}( wo, alpha, directionUV );

					let fresnelCosine = select( dot( wo, wh ), wo.z, surf.thinWall );
					let fresnel = ${this.transmissionFresnel}( fresnelCosine, surf );

					let fresnelSample = ( lobeSample - cdfSpecular ) / ( cdfTransmission - cdfSpecular );
					let doReflect = fresnelSample < fresnel.reflectProbability;
					if ( doReflect ) {

						wi = - normalize( reflect( wo, wh ) );

					} else if ( ${Dc}( surf.eta ) ) {

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
						let thinWallAlpha = vec2f( ${kc}( alphaB, surf.ior ) );
						wh = ${hc}( wo, thinWallAlpha, directionUV );
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
					wi = ${Fu}( wo, surf.diffuseRoughness, directionUV );
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
						deltaTransmittance * ${Yu};
					result.direction = worldWi;
					result.pdf = weights.transmission * deltaProbability * ${Yu};
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

			fn bsdfEvalPdf( worldWo: vec3f, worldWi: vec3f, surf: ${Ho} ) -> ${zo} {

				var result: ${zo};
				result.color = vec3f( 0.0 );
				result.isTransmissive = false;
				result.direction = worldWi;
				result.pdf = 0.0;

				let wo = normalize( surf.normalInvBasis * worldWo );
				let wi = normalize( surf.normalInvBasis * worldWi );
				let woClearcoat = normalize( surf.clearcoatInvBasis * worldWo );

				let isTransmission = wi.z < 0.0;
				if ( isTransmission && ${Dc}( surf.eta ) ) {

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

				let weights = ${Ws}( wo, wo, woClearcoat, vec3( 0, 0, 1 ), ${Ju}, surf );

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
						result.pdf += weights.clearcoat * ${bc}( woClearcoat, whClearcoat, vec2( clearcoatAlpha ) );

					}

				}

				// specular
				if ( weights.specular > 0.0 && wi.z > 0.0 ) {

					// anisotropic roughness along tangent, bitangent
					let alphaB = surf.roughness * surf.roughness;
					let alphaT = mix( alphaB, 1.0, surf.anisotropy * surf.anisotropy );
					let alpha = vec2( alphaT, alphaB );

					result.pdf += weights.specular * ${bc}( wo, wh, alpha );

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

						result.pdf += weights.transmission * fresnel.reflectProbability * ${bc}( wo, wh, alpha );

					} else if ( surf.thinWall ) {

						// the flipped reflection shares the reflection pdf at the remapped roughness
						let thinWallAlpha = vec2f( ${kc}( alphaB, surf.ior ) );
						result.pdf += weights.transmission * ( 1.0 - fresnel.reflectProbability ) * ${bc}( wo, wh, thinWallAlpha );

					} else {

						result.pdf += weights.transmission * ( 1.0 - fresnel.reflectProbability ) * ${xc}( wo, wi, wh, alpha, surf.eta );

					}

				}

				// diffuse
				if ( weights.diffuse > 0.0 ) {

					result.pdf += weights.diffuse * ${Iu}( wo, wi, surf.diffuseRoughness );

				}

				//

				// construct the scatter context
				var ctx: ${qo};
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

		`,this._bsdfEvalPdfNode}},Zu=new E,Qu=new Se,$u=250,ed=16,td=1.15,nd=2,rd=4096,id=.05,ad={strategy:2,targetLeafSize:5},od=4;async function sd(e,t,n){let r=e=>typeof SharedArrayBuffer<`u`&&e.buffer instanceof SharedArrayBuffer?e:e.slice(),{position:i}=t.attributes,{index:a}=t,o=i.array,s=a?a.array:null;i.array=r(o),a&&(a.array=r(s));let c=await e.generate(t,n);return i.array=o,a&&(s.set(a.array),a.array=s,a.needsUpdate=!0),c}var cd=class{constructor(e,t){this.key=t,this.renderer=e,this.texture=null,this.hash=null;let n=new p(new Uint8Array([255,255,255,255]),1,1);n.minFilter=_,n.magFilter=_,this.colorTex=n}dispose(){this.colorTex.dispose(),this.texture?.dispose()}setFromScene(e){let{renderer:t,key:n,colorTex:r}=this,i=e[n],a=``;if(i)i.isColor?(r.image.data[0]=i.r*255,r.image.data[1]=i.g*255,r.image.data[2]=i.b*255,r.image.data[3]=255,i=r,a=r.image.data.join(),r.needsUpdate=a!==this.hash):i.isCubeTexture?(a=null,i=new pu(t).generate(i)):(a=i.uuid+`_`+i.version,a!==this.hash&&(i=i.clone(),i.minFilter=_,i.magFilter=_));else{let e=t.getClearAlpha();t.getClearColor(Qu),r.image.data[0]=Qu.r*255,r.image.data[1]=Qu.g*255,r.image.data[2]=Qu.b*255,r.image.data[3]=e*255,i=r,a=r.image.data.join(),r.needsUpdate=a!==this.hash}if(a===null)return this.texture?.dispose(),this.texture=i,this.hash=null,!0;{let e=a!==this.hash;return e&&(this.texture?.dispose(),this.texture=i,this.hash=a),e}}},ld=class extends _e{get maxBounces(){return this._pathTracer.maxBounces}set maxBounces(e){this._pathTracer.maxBounces=e,this.reset()}get frameBudget(){return this._pathTracer.frameBudget}set frameBudget(e){this._pathTracer.frameBudget=e}get frameTime(){return this._pathTracer.timing.frameTime}get maxTransparentBounces(){return this._pathTracer.maxTransparentBounces}set maxTransparentBounces(e){this._pathTracer.maxTransparentBounces=e,this.reset()}get maxVolumeSteps(){return this._pathTracer.maxVolumeSteps}set maxVolumeSteps(e){this._pathTracer.maxVolumeSteps=e,this.reset()}get maxSamples(){return this._pathTracer.maxSamples}set maxSamples(e){this._pathTracer.maxSamples=e,this._denoiser?.reset()}get complete(){let e=this.maxSamples,t=this._denoiser;return e>0&&this._lastSampleCounts.min>=e&&(!t||t.complete)}async getSampleCountsAsync(){let e=this._pathTracer,t=this._lastSampleCounts,n=await e.getSampleCountsAsync();t.min=n.min,t.max=n.max,t.avg=n.avg;let r=this.getRenderTime()/1e3;return t.samplesPerSecond=r>0?t.avg/r:0,{...t}}get transmissiveBackground(){return this._transmissiveBackground}set transmissiveBackground(e){this._transmissiveBackground!==e&&(this._transmissiveBackground=e,this._pathTracer.setTransmissiveBackground(e))}get filterGlossyFactor(){return this._filterGlossyFactor}set filterGlossyFactor(e){this._filterGlossyFactor!==e&&(this._filterGlossyFactor=e,this._pathTracer.setFilterGlossy(e))}get multipleImportanceSampling(){return this._multipleImportanceSampling}set multipleImportanceSampling(e){this._multipleImportanceSampling!==e&&this.setMultipleImportanceSampling(e)}get clampDirect(){return this._clampDirect}set clampDirect(e){e=Math.max(0,e),this._clampDirect!==e&&(this._clampDirect=e,this._pathTracer.setClamping(e,this._clampIndirect))}get clampIndirect(){return this._clampIndirect}set clampIndirect(e){e=Math.max(0,e),this._clampIndirect!==e&&(this._clampIndirect=e,this._pathTracer.setClamping(this._clampDirect,e))}get target(){return this._pathTracer.outputTarget??null}get fadeState(){return this._fadeState}get lowResTarget(){return this._lowResTarget}get lowResMode(){return this._pathTracer.lowResMode}get compiling(){return this._pathTracer.compiling}get textureAtlas(){return this._bvhData.textureAtlas}useMegakernel(e){let t=this._pathTracer.maxSamples;this._pathTracer.dispose(),this._pathTracer=e?new Gl(this._renderer):new uu(this._renderer),this._pathTracer.maxSamples=t,this._timingCount=0,this._pathTracer.setBVHData(this._bvhData),this._pathTracer.setMaterial(this.material),this._pathTracer.setRandom(this.random),this._pathTracer.setMultipleImportanceSampling(this.multipleImportanceSampling),this._pathTracer.setTransmissiveBackground(this._transmissiveBackground),this._pathTracer.setFilterGlossy(this._filterGlossyFactor),this._pathTracer.setClamping(this._clampDirect,this._clampIndirect),this._pathTracer.setAccumulateAux(!!(this._denoiser&&this._denoiser.useAuxiliaryBuffers)),this.setCamera(this.camera),this._pathTracer.setEnvironment(this._environmentCache.texture),this._pathTracer.setBackground(this._backgroundCache.texture),this.updateEnvironment(),this.updateLights()}constructor(e){super(),this._renderer=e,this._timer=new n,this._environmentCache=new cd(e,`environment`),this._backgroundCache=new cd(e,`background`),this._resetTime=-1,this._fadeState=0,this._lastSampleCounts={min:0,max:0,avg:0,samplesPerSecond:0},this._size=new E,this._blitQuad=new No(new Fo),this._timingCount=0,this._frameTimeTotal=0,this._frameTimeCount=0,this._lowResPixelTime=0,this._lowResScale=0,this._warnedTimestamps=!1,this._lowResTarget=new Ge(1,1),this._lowResTarget.type=ne,this._lowResTarget.generateMipmaps=!1,this._pathTracer=new uu(e),this._denoiser=null,this._upscaler=null,this.minSamples=1,this.renderDelay=500,this.fadeDuration=500,this.dynamicLowRes=!0,this.lowResScale=.1,this.adaptiveDynamicRes=!0,this.adaptiveFrameBudget=!0,this.targetFrameTime=16,this.renderScale=1,this.synchronizeRenderSize=!0,this.renderToCanvas=!0,this.asyncCompile=!1,this.generateMissingAttributes=!0,this.commonAttributes=[`normal`,`tangent`],this.stableNoise=!0,this.pause=!1,this.filterGlossyFactor=1,this._clampDirect=0,this._clampIndirect=10,this.multipleImportanceSampling=!0,this.transmissiveBackground=1,this.random=Jc,this.material=new Xu,this._invViewProjectionMatrix=A(new T),this._cameraRayFnHandle=null,this._BVHWorker=null,this._lastCompleteCheck=0,this._wasComplete=!1,this.setMaterial(this.material),this.setRandom(this.random),this.setScene(new y,new ae)}setMultipleImportanceSampling(e){this._multipleImportanceSampling=e,this._pathTracer.setMultipleImportanceSampling(e),this.reset()}setDenoiser(e){this._denoiser?.reset(),this._denoiser=e,e&&e.init(this._renderer),this._pathTracer.setAccumulateAux(!!(e&&e.useAuxiliaryBuffers)),this.reset()}setUpscaler(e){this._upscaler=e,e&&e.init(this._renderer)}setScene(e,t){e.updateMatrixWorld(!0),t.updateMatrixWorld(),e.traverse(e=>{this.generateMissingAttributes&&e.geometry?.isBufferGeometry&&wu(e.geometry,this.commonAttributes),e.isSkinnedMesh?(e.boundsTree?e.boundsTree.refit():e.boundsTree=new ba(e,{strategy:2,targetLeafSize:5,indirect:!0}),e.boundingBox===null&&(e.boundingBox=new v),e.boundsTree.getBoundingBox(e.boundingBox)):e.isMesh&&(e.geometry.boundsTree||(e.geometry.boundsTree=new ia(e.geometry,ad)))});let n=new bu(e);n.update(),n.textureAtlas.setTextures(this._renderer,n.textures),this._bvhData&&(this._bvhData.dispose(),this._bvhData.textureAtlas.dispose()),this.scene=e,this._bvhData=n,this._pathTracer.setBVHData(n),this.setCamera(t),this.updateEnvironment(),this.updateLights()}setBVHWorker(e){this._BVHWorker=e}async setSceneAsync(e,t){let n=this._BVHWorker;if(!n)throw Error(`WebGPUPathTracer: "setBVHWorker" must be called before "setSceneAsync" can be called.`);let r=new Set;e.traverse(e=>{e.isMesh&&!e.isSkinnedMesh&&!e.geometry.boundsTree&&r.add(e.geometry)});let i=Array.from(r),a=[];for(let e=0,t=Math.min(od,i.length);e<t;e++)a.push(new n);try{await Promise.all(a.map(async e=>{for(;i.length>0;){let t=i.shift();t.boundsTree=await sd(e,t,ad)}}))}finally{a.forEach(e=>e.dispose())}this.setScene(e,t)}getMaterial(){return this.material}setMaterial(e){this.material=e,this._pathTracer.setMaterial(e),this.reset()}setRandom(e){this.random=e,this._pathTracer.setRandom(e),this.reset()}setCamera(e){if(this.camera=e,e.getCameraRayFn)this._cameraRayFnHandle=e.getCameraRayFn();else{let t=this._invViewProjectionMatrix;this._cameraRayFnHandle={update:()=>(e.coordinateSystem=ye,e.updateMatrixWorld(),(e.isOrthographicCamera||e.isPerspectiveCamera)&&e.updateProjectionMatrix(),t.value.multiplyMatrices(e.matrixWorld,e.projectionMatrixInverse),!1),fn:Y`
					fn getCameraRay( uv: vec2f, resolution: vec2f, ray: ptr<function, ${G}> ) -> bool {

						let ndc = uv * 2.0 - vec2f( 1.0 );
						*ray = ${co}( ndc, ${t} );
						return true;

					}
				`}}this._bvhData.fns.getCameraRay=this._cameraRayFnHandle.fn,this._cameraRayFnHandle.update(),this._pathTracer.rebuild(),this.reset()}updateMaterials(){let{_bvhData:e,_renderer:t}=this;e.updateMaterials(),e.textureAtlas.setTextures(t,e.textures),this.reset()}updateTransforms(){this.scene.updateMatrixWorld(!0),this._bvhData.updateTransforms(),this.reset()}updateCamera(){let{_cameraRayFnHandle:e,_pathTracer:t}=this;e.update()&&t.rebuild(),this.reset()}updateEnvironment(){let{_pathTracer:e,scene:t,_environmentCache:n,_backgroundCache:r}=this;n.setFromScene(t)&&e.setEnvironment(n.texture),r.setFromScene(t)&&e.setBackground(r.texture),e.setEnvironmentParams(t.environmentIntensity,t.environmentRotation),e.setBackgroundParams(t.backgroundIntensity,t.backgroundRotation,t.backgroundBlurriness),this.reset()}updateLights(){let{_pathTracer:e,scene:t}=this,n=gu(t);e.setLights(n),this.reset()}setSize(e,t){(this._size.x!==e||this._size.y!==t)&&(this._size.set(e,t),this.reset())}reset(){this._pathTracer.reset(),this._denoiser?.reset(),this._resetTime=-1,this._fadeState=0,this._timer.update(),this._lastSampleCounts={min:0,max:0,avg:0,samplesPerSecond:0},this._lastCompleteCheck=0,this._wasComplete=!1,this._frameTimeTotal=0,this._frameTimeCount=0,this.stableNoise&&this._pathTracer.resetSeed()}_readTiming(){let{timing:e}=this._pathTracer,{trackTimestamp:t}=this._renderer.backend;if((this.adaptiveFrameBudget||this.adaptiveDynamicRes)&&!t&&!this._warnedTimestamps&&(console.warn(`WebGPUPathTracer: "adaptiveFrameBudget" and "adaptiveDynamicRes" need timestamp queries. Create the renderer with "trackTimestamp: true" on a device that supports them.`),this._warnedTimestamps=!0),e.count===this._timingCount)return;if(this._timingCount=e.count,e.lowResMode){this._lowResPixelTime=e.frameTime/e.pixelCount;return}let{frameBudget:n}=e;if(!this.adaptiveFrameBudget||n!==this.frameBudget){this._frameTimeTotal=0,this._frameTimeCount=0;return}if(this._frameTimeTotal+=e.frameTime,this._frameTimeCount++,this._frameTimeCount<ed)return;let{targetFrameTime:r}=this,i=this._frameTimeTotal/this._frameTimeCount;this._frameTimeTotal=0,this._frameTimeCount=0;let a=i/r;if(a<td&&a>1/td)return;let{pixelCount:o}=e,s=Math.min(n,o)*r/i,c=se.clamp(s,n/nd,n*nd);this.frameBudget=se.clamp(Math.round(c),rd,Math.max(rd,o))}renderSample(){let e=this._renderer,t=this._size,n=this._blitQuad,r=this._pathTracer,i=this._lowResTarget,a=this._timer,{renderDelay:o,dynamicLowRes:s,synchronizeRenderSize:c,renderScale:l,lowResScale:u,adaptiveDynamicRes:d,minSamples:f,maxSamples:p}=this;if(a.update(),!this._renderer._initialized)return;this.material.initialized||(this.material.init(e),this.material.initialized=!0);let m=1e3*a.getDelta(),h=this._resetTime===-1;h&&(this._resetTime=0,m=0),this._resetTime+=m;let g=e.getRenderTarget(),_=e.autoClear;if(c){e.getDrawingBufferSize(Zu);let t=Math.floor(l*Zu.x),n=Math.floor(l*Zu.y);this.setSize(t,n)}let{width:v,height:y}=t,b=this._resetTime<o||h&&s&&f!==0;if(b){let e=u;if(d&&this._lowResPixelTime>0){let t=this.targetFrameTime/this._lowResPixelTime,n=Math.min(Math.max(Math.sqrt(t/(v*y)),u),1);h&&Math.abs(n-this._lowResScale)>id&&(this._lowResScale=n),e=this._lowResScale>0?this._lowResScale:u}e=Math.min(e,Math.sqrt(this.frameBudget/(v*y))),v=Math.max(1,Math.floor(e*v)),y=Math.max(1,Math.floor(e*y))}r.getSize(Zu),(Zu.x!==v||Zu.y!==y)&&(!b&&s&&(i.setSize(Zu.x,Zu.y),e.copyTextureToTexture(r.outputTarget,i)),r.setSize(v,y));let x=p>0&&this._lastSampleCounts.min>=p;if(!this.pause&&!x&&(!b||b&&s)&&(r.lowResMode=b,r.asyncCompile=this.asyncCompile,r.update(),this._readTiming(),r.compiling)){this._resetTime-=m;return}let S=this._denoiser,C=this._upscaler,w=!!S&&!S.complete&&!S.running&&p>0;b||(this._fadeState<1&&f>0?this.getSampleCountsAsync():p>0&&this._resetTime-this._lastCompleteCheck>=$u&&(this._lastCompleteCheck=this._resetTime,this.getSampleCountsAsync()),this._lastSampleCounts.min>=f&&(this._fadeState+=m/this.fadeDuration,this._fadeState=Math.min(1,this._fadeState)||1));let ee=b&&s?1:this._fadeState,te=r.outputTarget;S&&!b&&(w&&this._lastSampleCounts.min>=p&&S.update(r.outputTarget,r.auxTarget),te=S.texture??te);let ne=this.complete;ne&&!this._wasComplete&&this.dispatchEvent({type:`complete`}),this._wasComplete=ne,this.renderToCanvas&&(C&&!b&&(te=C.upscale(te,this.camera),e.setRenderTarget(g)),e.autoClear=s?!0:ee===1,n.material.transition=s?ee:1,n.material.opacity=s?1:ee,n.material.fromTexture=i,n.material.texture=te,n.render(e)),e.autoClear=_,e.setRenderTarget(g)}renderDebugBounds(e={}){let{displayTLAS:t=!0,displayBLAS:n=!0,stopAtSurface:r=!1,saturationCount:i=64}=e,a=this._renderer,o=this.camera;if(!a._initialized)return;o.updateMatrixWorld(),(this._debugBoundsQuad===void 0||this._debugBoundsData!==this._bvhData)&&this._buildDebugBoundsQuad();let s=this._debugBoundsUniforms;s.cameraToModelMatrix.value.copy(o.matrixWorld),s.inverseProjectionMatrix.value.copy(o.projectionMatrixInverse),s.displayTLAS.value=+!!t,s.displayBLAS.value=+!!n,s.stopAtSurface.value=+!!r,s.saturationCount.value=i;let c=a.getRenderTarget(),l=a.autoClear,u=a.toneMapping;a.setRenderTarget(null),a.autoClear=!0,a.toneMapping=0,this._debugBoundsQuad.render(a),a.setRenderTarget(c),a.autoClear=l,a.toneMapping=u}_buildDebugBoundsQuad(){let e=this._bvhData,t=Ro(e),n=new Ue;n.colorNode=t(Tt(Ct())),this._debugBoundsQuad===void 0?this._debugBoundsQuad=new No(n):(this._debugBoundsQuad.material.dispose(),this._debugBoundsQuad.material=n),this._debugBoundsUniforms=t.uniforms,this._debugBoundsData=e}renderTextureAtlas(e=0){let t=this._renderer;this._atlasDebugQuad||=new No(new xu);let n=this._atlasDebugQuad;n.material.texture=this.textureAtlas.texture,n.material.layer=e,t.setRenderTarget(null),n.render(t)}renderSampleDensity(){let e=this._renderer;if(!e._initialized)return;this.getSampleCountsAsync(),this._sampleDensityQuad||=new No(new Su);let t=e.toneMapping;e.toneMapping=0;let n=this._sampleDensityQuad;n.material.texture=this._pathTracer.sampleCountTarget,n.material.minCount=this._lastSampleCounts.min,n.material.maxCount=this._lastSampleCounts.max,e.setRenderTarget(null),n.render(e),e.toneMapping=t}renderAuxBuffer(e=`albedo`){let t=this._renderer,n=this._pathTracer;if(!t._initialized||!n.auxTarget)return;this._auxDebugQuad||=new No(new Cu);let r=t.toneMapping;t.toneMapping=0;let i=this._auxDebugQuad;i.material.texture=n.auxTarget,i.material.showNormal=e===`normal`,t.setRenderTarget(null),i.render(t),t.toneMapping=r}dispose(){this._pathTracer.dispose(),this._denoiser?.dispose(),this._upscaler?.dispose(),this._bvhData.dispose(),this._bvhData.textureAtlas.dispose(),this._environmentCache.dispose(),this._backgroundCache.dispose(),this._lowResTarget.dispose(),this._blitQuad.dispose(),this._blitQuad.material.dispose(),this._atlasDebugQuad?.dispose(),this._atlasDebugQuad?.material.dispose(),this._sampleDensityQuad?.dispose(),this._sampleDensityQuad?.material.dispose(),this._auxDebugQuad?.dispose(),this._auxDebugQuad?.material.dispose(),this._debugBoundsQuad!==void 0&&(this._debugBoundsQuad.dispose(),this._debugBoundsQuad.material.dispose())}getRenderTime(){return this._resetTime}};function ud(e){let t=Number(e?.transmission);return!!(e?.isMeshPhysicalMaterial&&Number.isFinite(t)&&t>0)}function dd(e){return!!(e&&Number(e.alphaTest)>0&&(e.map||e.alphaMap)&&!(Number(e.transmission)>0))}function fd(e){return ud(e)?(e.opacity=1,e.transparent=!1,e.depthWrite=!0,e.needsUpdate=!0,!0):!1}function pd(e,t){return!ud(e)||!t?!1:(t.transmission=0,t.transparent=!0,t.opacity=.5,t.depthWrite=!1,t.needsUpdate=!0,!0)}function md(e,t=30,n=85){let r=Math.max(1,n-t);return .86+.12*Math.min(1,Math.max(0,(Number(e)-t)/r))}var hd=.9,gd=new Ee({color:16777215,roughness:.88,metalness:0,side:2});gd.color.multiplyScalar(hd);var _d=new ie({color:1118481,wireframe:!0,side:2}),vd=new me({color:1118481}),yd=new ie({color:16726832,side:2,depthWrite:!0,depthTest:!0,toneMapped:!1}),bd=new me({color:60159,depthTest:!1,depthWrite:!1,toneMapped:!1}),xd=new me({color:16726832,depthTest:!1,depthWrite:!1,toneMapped:!1}),Sd=new ce({color:2152811,size:6,sizeAttenuation:!1,depthTest:!1}),Cd=new ce({color:16722731,size:6,sizeAttenuation:!1,depthTest:!1}),wd=new ce({color:16711892,size:6,sizeAttenuation:!1,depthTest:!1}),Td=new WeakMap,Ed=new Set;function Dd(e){if(!e?.clone)return gd;let t=Td.get(e);if(t)return t.color?.set(16777215).multiplyScalar(hd),t;let n=e.clone();return n.color?.set(16777215).multiplyScalar(hd),n.emissive?.set(0),`roughness`in n&&(n.roughness=.88),`metalness`in n&&(n.metalness=0),dd(e)||(n.map=null),n.emissiveMap=null,pd(e,n),n.needsUpdate=!0,Td.set(e,n),Ed.add(n),n}function Od(e){return Ed.has(e)}function kd(){Ed.forEach(e=>e.dispose()),Ed.clear()}function Ad(e){return Array.isArray(e)?e.map(Dd):Dd(e)}function jd(e,t){hd=e,gd.color.set(16777215).multiplyScalar(e),t?.traverse(t=>{if(!t.isMesh)return;let n=Array.isArray(t.material)?t.material:[t.material];for(let t of n)t?.color?.set(16777215).multiplyScalar(e)})}var Md=new class extends Et{setupDiffuseColor(e){super.setupDiffuseColor(e),xt.rgb.assign($e(1))}setupOutput(e,t){let n=ft(t.rgb,$e(.2126,.7152,.0722)),r=et(.1,n);return super.setupOutput(e,wt($e(r).mul(8),t.a))}}({color:16777215,side:2,toneMapped:!1}),Nd=new ie({color:16777215,transparent:!0,opacity:.18,side:2,depthWrite:!1,toneMapped:!1}),Pd=new Map,Fd=new Set;function Id(e){if(Pd.has(e))return Pd.get(e);let t=Md.clone();return t.map=e.map??null,t.alphaMap=e.alphaMap??null,t.alphaTest=Number(e.alphaTest)>0?Number(e.alphaTest):.5,t.opacity=e.opacity??1,t.needsUpdate=!0,Pd.set(e,t),Fd.add(t),t}function Ld(e){return Fd.has(e)}function Rd(){for(let e of Fd)e.dispose();Pd.clear(),Fd.clear()}function zd(e){return e?Number.isFinite(Number(e.opacity))&&Number(e.opacity)<.999||Number.isFinite(Number(e.transmission))&&Number(e.transmission)>0:!1}function Bd(e){let t=Array.isArray(e)?e:[e];return t.length>0&&t.every(zd)}function Vd(e){return(Array.isArray(e)?e:[e]).some(dd)}function Hd(e){return Array.isArray(e)?e.map(Hd):dd(e)?Id(e):zd(e)?Nd:Md}function Ud(e,t,n=null){if(zd(e)){if(fd(e)){Number.isFinite(n)&&(e.transmission=n);return}e.transparent=!0,e.opacity=t,e.depthWrite=!1,`roughness`in e&&(e.roughness=.16),`metalness`in e&&(e.metalness=.02),e.needsUpdate=!0}}var Wd=.65;function Gd(){M.ground&&N.remove(M.ground);let e=new pe(M.maxModelSize*10,M.maxModelSize*10),t=new Oe({color:0,opacity:Wd});M.ground=new le(e,t),M.ground.rotation.x=-Math.PI/2,M.ground.position.set(M.modelCenter.x,.001,M.modelCenter.z),M.ground.receiveShadow=!0,N.add(M.ground)}Jt.addEventListener(`input`,qd),Yt.addEventListener(`input`,qd);function Kd(){let e=se.degToRad(Number(Jt.value)),t=se.degToRad(Number(Yt.value)),n=Math.cos(t);return new b(Math.cos(e)*n,Math.sin(t),Math.sin(e)*n)}function qd(){if(!M.model)return;let e=Kd(),t=M.maxModelSize*3;P.position.copy(M.modelCenter).addScaledVector(e,t),P.target.position.copy(M.modelCenter),P.target.updateMatrixWorld(),P.updateMatrixWorld();let n=M.maxModelSize*.9;P.shadow.camera.left=-n,P.shadow.camera.right=n,P.shadow.camera.top=n,P.shadow.camera.bottom=-n,P.shadow.camera.near=M.maxModelSize*.01,P.shadow.camera.far=M.maxModelSize*8,P.shadow.camera.updateProjectionMatrix(),Qe(e)}function Jd(e){M.exportedSun=e??null,M.hasImportedSun=!1;let t=lt(e);if(!t||!M.model)return!1;let n=new b(...t).transformDirection(M.model.matrixWorld);if(![n.x,n.y,n.z].every(Number.isFinite)||n.y<=0)return!1;let{azimuth:r,height:i}=Be(n.toArray());return Jt.value=String(r),Yt.min=String(Math.min(5,Math.floor(i))),Yt.max=String(Math.max(85,Math.ceil(i))),Yt.value=String(i),M.hasImportedSun=!0,qd(),!0}Xt.addEventListener(`change`,()=>{P.shadow.intensity=+!!Xt.checked,M.ground&&(M.ground.visible=Xt.checked),Md.needsUpdate=!0});var Yd=document.querySelector(`#startMessage`),Xd=document.querySelector(`#startMessageText`),Zd=Xd.textContent;function Qd(){Xd.textContent=Zd,Yd.classList.remove(`error`)}function $d(e){Xd.textContent=e,Yd.classList.add(`error`),Ot.classList.remove(`hidden`)}function ef(){Xd.textContent=`OPENING MODEL…`,Yd.classList.remove(`error`),Ot.classList.remove(`hidden`)}function tf(e){un&&(un.textContent=e,un.style.opacity=`1`,clearTimeout(tf.timeout),tf.timeout=setTimeout(()=>{un.style.opacity=`.38`},5e3))}function nf(e){let t=document.createElement(`div`);return t.textContent=e,t.innerHTML}var rf=null,af=getComputedStyle(document.documentElement).getPropertyValue(`--bg`).trim()||`#efefed`,of=new Se(af),$=null,sf=null,cf=null,lf=null,uf=null,df=1,ff=null,pf=!1,mf=!1,hf=!1,gf=0,_f=0,vf=!1,yf=null,bf=0,xf=new Map,Sf=()=>[...document.querySelectorAll(`[data-navigation-mode], [data-view]`),Vt,Ht,Ut,Zt,kt].filter(Boolean);function Cf(){tn.textContent=M.pathTracerActive?mf?`RESUME`:`PAUSE`:`PATH TRACER`,tn.classList.toggle(`active`,M.pathTracerActive),tn.setAttribute(`aria-pressed`,String(M.pathTracerActive))}function wf(e){e&&M.navigationMode===`fly`&&document.querySelector(`[data-navigation-mode="orbit"]`)?.click(),M.pathTracerActive=e,M.controls.enabled=!e&&M.navigationMode!==`fly`;for(let t of Sf())e?(xf.set(t,t.disabled),t.disabled=!0):t.disabled=xf.get(t)??!1;e||xf.clear()}function Tf(e){let{data:t,width:n,height:r}=e.image??{};if(!(t instanceof Float32Array)||!n||!r)return null;let i=0,a=-1/0,o=Math.floor(t.length/(n*r));for(let e=0;e<n*r;e++){let n=e*o,r=.2126*t[n]+.7152*t[n+1]+.0722*t[n+2];r>a&&(a=r,i=e)}return new b(...je(i%n,Math.floor(i/n),n,r)).normalize()}async function Ef(){let e=Me();if(sf&&rf===e.url)return sf;let t=await new Dt().setDataType(ne).loadAsync(e.url);if(Me().url!==e.url)throw t.dispose(),Error(`The scene environment changed while loading`);cf=Tf(t);let n=t.image?.data;if(n instanceof Float32Array){for(let e=0;e<n.length;e++)n[e]=Math.min(65504,Math.max(-65504,n[e]));t.needsUpdate=!0}return t.mapping=303,sf?.dispose(),sf=t,rf=e.url,t}function Df(){cf&&(N.environmentRotation.setFromQuaternion(new te().setFromUnitVectors(cf,Kd())),$?.updateEnvironment())}function Of(){let e=tt();N.environment=e??uf,N.environmentIntensity=e?.2:df,e?Qe(Kd()):ff?N.environmentRotation.copy(ff):N.environmentRotation.set(0,0,0),uf=null,ff=null,lf&&=(N.background=lf,null),it.visible=!0,P.visible=!0,M.ground&&yf&&(M.ground.material.dispose(),M.ground.material=yf,yf=null)}async function kf(){if(M.pathTracerActive||!M.model||M.sectionEnabled)return;M.currentMode!==`original`&&document.querySelector(`[data-mode="original"]`)?.click(),pf=!0,mf=!1;let e=++bf;wf(!0),tn.setAttribute(`aria-busy`,`true`),Cf(),tf(`PATH TRACER · loading HDRI…`),uf=N.environment,df=N.environmentIntensity,ff=N.environmentRotation.clone();try{let t=await Ef();if(e!==bf||!M.model)return;N.environment=t,N.environmentIntensity=1,Df(),it.visible=!1,P.visible=!1,lf=N.background.clone(),N.background=of,M.ground&&(yf=M.ground.material,M.ground.material=new Ee({color:of,roughness:.94,metalness:0,side:2}));let n=new ld(Je);if(n.maxBounces=6,n.maxTransparentBounces=10,n.filterGlossyFactor=.35,n.multipleImportanceSampling=!0,n.renderDelay=90,n.minSamples=1,n.lowResScale=.25,n.renderScale=1,tf(`PATH TRACER · preparing scene…`),await new Promise(e=>requestAnimationFrame(e)),e!==bf){n.dispose();return}n.setScene(N,M.camera),$=n,gf=0,hf=!1,tf(`PATH TRACER · refining image…`)}catch(t){if(e!==bf)return;console.error(`WebGPU path tracer failed`,t),Af({restoreStatus:!1}),tf(`PATH TRACER COULD NOT START: ${t.message}`)}finally{e===bf&&(pf=!1,tn.removeAttribute(`aria-busy`))}}tn?.addEventListener(`click`,()=>{M.pathTracerActive?$&&!pf&&(mf=!mf,$.pause=mf,Cf(),tf(mf?`PATH TRACER · paused at ${Math.floor(gf)} samples`:`PATH TRACER · refining image…`)):kf()});function Af({restoreStatus:e=!0}={}){(M.pathTracerActive||$)&&(++bf,$?.dispose(),$=null,pf=!1,mf=!1,gf=0,tn.removeAttribute(`aria-busy`),Of(),wf(!1),Cf(),Nf(),e&&tf(`WebGPU preview`))}function jf(){$&&(hf=!0,mf=!1,$.pause=!1,Cf())}function Mf(){$&&($.updateLights(),mf=!1,$.pause=!1,Cf())}function Nf(){tn&&(tn.disabled=!M.model||M.sectionEnabled||!navigator.gpu,tn.title=M.sectionEnabled?`Turn off SECTION before using PATH TRACER`:`Progressive WebGPU path tracing`)}function Pf(){$?.updateCamera()}function Ff(){return M.pathTracerActive?{preparing:pf,compiling:!1,paused:mf,samples:gf}:null}function If(){if(!M.pathTracerActive)return!1;if(!$||pf)return!0;hf&&($.setScene(N,M.camera),hf=!1,gf=0),mf||$.renderSample();let e=performance.now();if(!vf&&e-_f>1200){_f=e,vf=!0;let t=$;t.getSampleCountsAsync().then(e=>{$===t&&(gf=e.avg)}).catch(e=>console.warn(`Sample count unavailable`,e)).finally(()=>{vf=!1})}return!0}Jt?.addEventListener(`input`,()=>{$&&Df()}),Yt?.addEventListener(`input`,()=>{$&&Df()}),Qt?.addEventListener(`input`,()=>{$&&queueMicrotask(()=>$?.updateMaterials())}),Nf(),Cf();function Lf(e,t){e&&e.traverse(e=>{e.isMesh&&t(e)})}function Rf(){M.edgeGroup&&N.remove(M.edgeGroup),M.edgeGroup=new u,M.model.updateMatrixWorld(!0),Lf(M.model,e=>{let t=new re(e.geometry,25),n=new h(t,vd);n.renderOrder=11e3,n.matrixAutoUpdate=!1,n.matrix.copy(e.matrixWorld);let r=e;for(;r.parent&&r.parent!==M.model;)r=r.parent;n.userData.modelGroup=r,M.edgeGroup.add(n)}),N.add(M.edgeGroup),M.edgeGroup.visible=!1}function zf(){M.edgeGroup?.children.forEach(e=>{e.visible=e.userData.modelGroup?.visible!==!1})}function Bf(e){let t=0;for(let n=e.length-1,r=0;r<e.length;n=r++){let i=e[n],a=e[r];t+=i.x*a.y-a.x*i.y}return t*.5}function Vf(e,t){let n=!1;for(let r=0,i=t.length-1;r<t.length;i=r++){let a=t[r],o=t[i];a.y>e.y!=o.y>e.y&&e.x<(o.x-a.x)*(e.y-a.y)/(o.y-a.y)+a.x&&(n=!n)}return n}function Hf(e){return typeof e.clone==`function`?e.clone():{x:e.x,y:e.y}}function Uf(e,t){return`${Math.min(e,t)}:${Math.max(e,t)}`}function Wf(e,t){return`${e}>${t}`}function Gf({points:e,pointComponentIds:t,edges:n,tolerance:r,includeDiagnostics:i=!1}){let a=Array.from({length:e.length},()=>new Set);for(let[e,t]of n.values())a[e].add(t),a[t].add(e);let o=[],s=0,c=0,l=0;if(i){o=a.map(e=>e.size),s=o.filter(e=>e===1).length,c=o.filter(e=>e>2).length;let e=new Set;for(let t=0;t<a.length;t++)if(o[t]!==2)for(let n of a[t]){let r=Uf(t,n);if(e.has(r))continue;l++;let i=t,s=n;for(e.add(r);o[s]===2;){let t=[...a[s]].find(e=>e!==i);if(t===void 0)break;let n=Uf(s,t);if(e.has(n))break;e.add(n),i=s,s=t}}}let u=a.map((t,n)=>{let r=e[n];return[...t].sort((t,n)=>{let i=e[t],a=e[n];return Math.atan2(i.y-r.y,i.x-r.x)-Math.atan2(a.y-r.y,a.x-r.x)})}),d=new Set,f=[];for(let[i,a]of n.values())for(let[o,s]of[[i,a],[a,i]]){let i=Wf(o,s);if(d.has(i))continue;let a=[],c=o,l=s,p=!1,m=n.size*2+10;for(let e=0;e<m;e++){d.add(Wf(c,l)),a.push(c);let e=u[l];if(!e||e.length===0)break;let t=e.indexOf(c);if(t<0)break;let n=e[(t-1+e.length)%e.length];if(c=l,l=n,c===o&&l===s){p=!0;break}}if(!p)continue;let h=a.map(t=>Hf(e[t]));if(h.length<3)continue;let g=[];for(let e=0;e<h.length;e++){let t=h[(e-1+h.length)%h.length],n=h[e],i=h[(e+1)%h.length],a=n.x-t.x,o=n.y-t.y,s=i.x-n.x,c=a*(i.y-n.y)-o*s;Math.abs(c)>r*r&&g.push(n)}g.length<3||Bf(g)>r*r*4&&f.push({points:g,componentId:t[a[0]]})}return{loops:f,neighbours:a,degrees:o,degree1Count:s,branchCount:c,openChainCount:l}}function Kf(e){return{x:e.x,y:e.y,z:e.z}}function qf(e,t,n){return{x:e.x+(t.x-e.x)*n,y:e.y+(t.y-e.y)*n,z:e.z+(t.z-e.z)*n}}function Jf(e,t){let n=e.x-t.x,r=e.y-t.y,i=e.z-t.z;return n*n+r*r+i*i}function Yf(e,t,n,r,i){let a=[],o=[e,t,n];for(let e=0;e<3;e++){let t=o[e],n=o[(e+1)%3],s=r.distanceToPoint(t),c=r.distanceToPoint(n),l=Math.abs(s)<=i,u=Math.abs(c)<=i;if(l&&u)continue;let d=null;l?d=Kf(t):u?d=Kf(n):s*c<0&&(d=qf(t,n,s/(s-c))),d&&(a.some(e=>Jf(e,d)<=i*i)||a.push(d))}if(a.length<2)return null;let s=0,c=1,l=-1;for(let e=0;e<a.length;e++)for(let t=e+1;t<a.length;t++){let n=Jf(a[e],a[t]);n>l&&(l=n,s=e,c=t)}return[a[s],a[c]]}function Xf({model:e,sectionPlane:t,triangleComponents:n,planeOrigin:r,axisU:i,axisV:a,tolerance:o,collectGraph:s=!0,includeDiagnostics:c=!1}){let l=new Map,u=[],d=[],f=new Map,p=[],m=new Set,h=new Set;function g(e,t,n){return`${n}|${Math.round(e/o)},${Math.round(t/o)}`}function _(e,t){let n=e.clone().sub(r),s=n.dot(i),c=n.dot(a),f=g(s,c,t);if(l.has(f))return l.get(f);let p=u.length;return u.push(new E(Math.round(s/o)*o,Math.round(c/o)*o)),d.push(t),l.set(f,p),p}function v(e,t,n,r){if(p.push(e.x,e.y,e.z,t.x,t.y,t.z),c&&(m.add(n),h.add(r)),!s)return;let i=_(e,r),a=_(t,r);if(i===a)return;let o=Math.min(i,a),l=Math.max(i,a),u=`${o}:${l}`;f.has(u)||f.set(u,[o,l])}let y=new b,x=new b,S=new b,C=new b,w=new b;return Lf(e,r=>{if(!st(r,e)||!r.geometry?.attributes?.position)return;let i=r.geometry;i.boundingBox||i.computeBoundingBox();let a=r.matrixWorld.clone().invert(),s=t.clone().applyMatrix4(a);if(i.boundingBox&&!s.intersectsBox(i.boundingBox))return;let c=i.attributes.position,l=i.index,u=o/Math.max(r.matrixWorld.getMaxScaleOnAxis(),1e-9),d=Math.floor(l?l.count/3:c.count/3),f=n.get(r);for(let e=0;e<d;e++){let t=l?l.getX(e*3):e*3,n=l?l.getX(e*3+1):e*3+1,i=l?l.getX(e*3+2):e*3+2;y.fromBufferAttribute(c,t),x.fromBufferAttribute(c,n),S.fromBufferAttribute(c,i);let a=Yf(y,x,S,s,u);a&&(C.set(a[0].x,a[0].y,a[0].z).applyMatrix4(r.matrixWorld),w.set(a[1].x,a[1].y,a[1].z).applyMatrix4(r.matrixWorld),C.distanceToSquared(w)>o*o&&v(C,w,r,f?.[e]??-1))}}),{points:u,pointComponentIds:d,edges:f,rawSegmentPositions:p,intersectedMeshes:m,intersectedComponents:h}}function Zf(e,t){let n=e.map(e=>({loop:e.points,componentId:e.componentId,sample:t(e.points),area:Math.abs(Bf(e.points)),depth:0,parent:-1}));for(let e=0;e<n.length;e++){let t=0,r=-1,i=1/0;for(let a=0;a<n.length;a++)e!==a&&n[a].componentId===n[e].componentId&&(n[a].area<=n[e].area||Vf(n[e].sample,n[a].loop)&&(t++,n[a].area<i&&(r=a,i=n[a].area)));n[e].depth=t,n[e].parent=r}return n}function Qf(e){let t=C.triangulateShape(e,[]);if(t.length){let n=t[0];return new E((e[n[0]].x+e[n[1]].x+e[n[2]].x)/3,(e[n[0]].y+e[n[1]].y+e[n[2]].y)/3)}return e[0].clone()}function $f({loops:e,planeOrigin:t,axisU:n,axisV:r}){let i=Zf(e,Qf),a=[];function o(e){return t.clone().addScaledVector(n,e.x).addScaledVector(r,e.y)}for(let e=0;e<i.length;e++){let t=i[e];if(t.depth%2!=0)continue;let n=t.loop.map(e=>e.clone());C.isClockWise(n)||n.reverse();let r=[];for(let n=0;n<i.length;n++){let a=i[n];if(a.componentId!==t.componentId||a.depth!==t.depth+1||a.parent!==e)continue;let o=a.loop.map(e=>e.clone());C.isClockWise(o)&&o.reverse(),r.push(o)}let s=C.triangulateShape(n,r),c=n.concat(...r);for(let e of s)for(let t of e){let e=o(c[t]);a.push(e.x,e.y,e.z)}}return a}function ep(e){e?.traverse(e=>e.geometry?.dispose())}function tp({fillEnabled:e,fillPositions:t,rawSegmentPositions:n,debugEnabled:r,points:i,degrees:a,planeOrigin:o,axisU:s,axisV:c}){let l=new u;if(e&&t.length){let e=new S;e.setAttribute(`position`,new be(t,3));let n=new le(e,yd);n.renderOrder=10500,n.raycast=()=>{},l.add(n)}if(!e&&n.length){let e=new S;e.setAttribute(`position`,new be(n,3));let t=new h(e,xd);t.renderOrder=10505,t.raycast=()=>{},l.add(t)}if(!r)return l;let d=new S;d.setAttribute(`position`,new be(n,3));let f=new h(d,bd);f.renderOrder=10510,f.raycast=()=>{},l.add(f);let p=[[],[],[]];i.forEach((e,t)=>{let n=a[t]===1?1:a[t]>2?2:0,r=o.clone().addScaledVector(s,e.x).addScaledVector(c,e.y);p[n].push(r.x,r.y,r.z)});let m=[Sd,Cd,wd];return p.forEach((e,t)=>{if(!e.length)return;let n=new S;n.setAttribute(`position`,new be(e,3));let r=new w(n,m[t]);r.renderOrder=10520,r.raycast=()=>{},l.add(r)}),l}function np(){if(M.sectionTriangleComponents=new WeakMap,M.sectionTopologyComponentCount=0,M.sectionTopologyReady=!1,!M.model)return;M.model.updateMatrixWorld(!0);let e=Math.max(M.maxModelSize*1e-5,1e-6),t=[],n=0;Lf(M.model,e=>{if(!e.geometry?.attributes?.position)return;let r=e.geometry,i=r.attributes.position,a=r.index?Math.floor(r.index.count/3):Math.floor(i.count/3),o=new Int32Array(a);M.sectionTriangleComponents.set(e,o),t.push({mesh:e,geometry:r,start:n,triangleCount:a,components:o}),n+=a});let r=new Int32Array(n),i=new Uint8Array(n);for(let e=0;e<n;e++)r[e]=e;function a(e){let t=e;for(;r[t]!==t;)t=r[t];for(;r[e]!==e;){let n=r[e];r[e]=t,e=n}return t}function o(e,t){let n=a(e),o=a(t);if(n!==o){if(i[n]<i[o]){let e=n;n=o,o=e}r[o]=n,i[n]===i[o]&&i[n]++}}let s=new Map,c=new Map,l=new Map,u=0,d=new b;function f(t,n,r){d.fromBufferAttribute(t,n).applyMatrix4(r);let i=Math.round(d.x/e)+`,`+Math.round(d.y/e)+`,`+Math.round(d.z/e);if(s.has(i))return s.get(i);let a=u++;return s.set(i,a),a}function p(e,t,n){if(e===t)return;let r=Math.min(e,t),i=Math.max(e,t),a=r+`:`+i;c.has(a)?o(n,c.get(a)):c.set(a,n)}function m(e,t,n){let r=e.uuid+`:`+t;l.has(r)?o(n,l.get(r)):l.set(r,n)}for(let e of t){let t=e.geometry,n=t.attributes.position,r=t.index;for(let t=0;t<e.triangleCount;t++){let i=r?r.getX(t*3):t*3,a=r?r.getX(t*3+1):t*3+1,o=r?r.getX(t*3+2):t*3+2,s=f(n,i,e.mesh.matrixWorld),c=f(n,a,e.mesh.matrixWorld),l=f(n,o,e.mesh.matrixWorld),u=e.start+t;p(s,c,u),p(c,l,u),p(l,s,u),m(e.mesh,s,u),m(e.mesh,c,u),m(e.mesh,l,u)}}let h=new Map;for(let e of t)for(let t=0;t<e.triangleCount;t++){let n=a(e.start+t);h.has(n)||h.set(n,M.sectionTopologyComponentCount++),e.components[t]=h.get(n)}M.sectionTopologyReady=!0}function rp(){M.sectionCapFrame===null&&(M.sectionCapFrame=requestAnimationFrame(()=>{M.sectionCapFrame=null,ap()}))}function ip(){ln.textContent=``,M.sectionCapGroup&&(N.remove(M.sectionCapGroup),ep(M.sectionCapGroup),M.sectionCapGroup=null)}function ap(){if(ip(),!M.sectionEnabled||!M.model||!M.modelBounds)return;M.model.updateMatrixWorld(!0);let e=Math.max(M.maxModelSize*1e-5,1e-6),t=M.sectionPlane.coplanarPoint(new b),n=M.sectionPlane.normal.clone().normalize(),r=Math.abs(n.y)<.9?new b(0,1,0):new b(1,0,0),i=new b().crossVectors(r,n).normalize(),a=new b().crossVectors(n,i).normalize(),o=on.checked,s=sn.checked||o;s&&!M.sectionTopologyReady&&np();let{points:c,pointComponentIds:l,edges:u,rawSegmentPositions:d,intersectedMeshes:f,intersectedComponents:p}=Xf({model:M.model,sectionPlane:M.sectionPlane,triangleComponents:M.sectionTriangleComponents,planeOrigin:t,axisU:i,axisV:a,tolerance:e,collectGraph:s,includeDiagnostics:o}),m=[],h=[],g=0,_=0,v=0;s&&({loops:m,degrees:h,degree1Count:g,branchCount:_,openChainCount:v}=Gf({points:c,pointComponentIds:l,edges:u,tolerance:e,includeDiagnostics:o}));let y=sn.checked?$f({loops:m,planeOrigin:t,axisU:i,axisV:a}):[];M.sectionCapGroup=tp({fillEnabled:sn.checked,fillPositions:y,rawSegmentPositions:d,debugEnabled:o,points:c,degrees:h,planeOrigin:t,axisU:i,axisV:a}),o&&(ln.textContent=[`intersected meshes  ${f.size}`,`surface components  ${M.sectionTopologyComponentCount}`,`cut components      ${p.size}`,`raw segments        ${d.length/6}`,`graph edges         ${u.size}`,`graph nodes         ${c.length}`,`closed loops        ${m.length}`,`cap triangles       ${y.length/9}`,`open chains         ${v}`,`degree-1 nodes      ${g}`,`degree >2 nodes     ${_}`].join(`
`)),N.add(M.sectionCapGroup)}var op=[];function sp(){zf(),M.sectionEnabled&&rp(),jf()}function cp(e,t,n){pt(e,t),n&&(n.checked=t)}function lp(e){op.forEach(t=>cp(t,e,t.checkbox)),sp()}function up(){Mt.replaceChildren(),op.forEach(e=>{let t=document.createElement(`label`);t.className=`group-filter-item`;let n=document.createElement(`input`);n.type=`checkbox`,n.checked=e.visible,n.setAttribute(`aria-label`,e.displayLabel),n.addEventListener(`change`,()=>{cp(e,n.checked,n),sp()});let r=document.createElement(`span`);r.textContent=e.displayLabel,r.title=e.displayLabel,e.checkbox=n,t.append(n,r),Mt.appendChild(t)})}function dp(e){op=vt(e),up(),jt.hidden=op.length===0}function fp(){op=[],Mt.replaceChildren(),At.hidden=!0,jt.hidden=!0,jt.setAttribute(`aria-expanded`,`false`)}function pp(){op.forEach(e=>pt(e,e.visible)),zf()}function mp(){return op.map(e=>({sessionKey:e.sessionKey,visible:e.visible}))}function hp(e){let t=Xe(op,e);return op.forEach(e=>{e.checkbox&&(e.checkbox.checked=e.visible)}),t&&sp(),t}Nt.addEventListener(`click`,()=>lp(!0)),Pt.addEventListener(`click`,()=>lp(!1));var gp=new Ie;gp.clipShadows=!0,N.add(gp),qt.addEventListener(`click`,()=>{Af(),M.sectionEnabled=!M.sectionEnabled,qt.classList.toggle(`active`,M.sectionEnabled),qt.setAttribute(`aria-pressed`,String(M.sectionEnabled)),M.sectionEnabled?_p():vp(),Nf()}),document.querySelectorAll(`[data-axis]`).forEach(e=>{e.addEventListener(`click`,()=>{M.sectionAxis=e.dataset.axis,e.before(an),document.querySelectorAll(`[data-axis]`).forEach(t=>{t.classList.toggle(`active`,t===e),t.setAttribute(`aria-pressed`,String(t===e))}),_p()})}),rn.addEventListener(`input`,_p),an.addEventListener(`click`,()=>{let e=an.getAttribute(`aria-pressed`)!==`true`;an.setAttribute(`aria-pressed`,String(e)),_p()}),on.addEventListener(`change`,()=>{rp()}),sn.addEventListener(`change`,()=>{rp()}),cn.forEach(e=>{e.addEventListener(`click`,()=>{let t=e.dataset.sectionColor;yd.color.set(t),xd.color.set(t),yd.needsUpdate=!0,xd.needsUpdate=!0,cn.forEach(t=>{t.classList.toggle(`active`,t===e),t.setAttribute(`aria-pressed`,String(t===e))}),rp()})});function _p(){if(!M.modelBounds)return;let e=Number(rn.value)/1e3,t,n,r=new b;M.sectionAxis===`x`&&(t=M.modelBounds.min.x,n=M.modelBounds.max.x,r.set(-1,0,0)),M.sectionAxis===`y`&&(t=M.modelBounds.min.y,n=M.modelBounds.max.y,r.set(0,-1,0)),M.sectionAxis===`z`&&(t=M.modelBounds.min.z,n=M.modelBounds.max.z,r.set(0,0,-1)),an.getAttribute(`aria-pressed`)===`true`&&r.multiplyScalar(-1);let i=se.lerp(t,n,e),a=new b;M.sectionAxis===`x`&&(a.x=i),M.sectionAxis===`y`&&(a.y=i),M.sectionAxis===`z`&&(a.z=i),M.sectionPlane.setFromNormalAndCoplanarPoint(r,a),vp()}function vp(){if(M.model){gp.enabled=M.sectionEnabled,gp.clippingPlanes=M.sectionEnabled?[M.sectionPlane]:[];for(let e of[M.model,M.edgeGroup])e&&(M.sectionEnabled&&e.parent!==gp?gp.attach(e):!M.sectionEnabled&&e.parent===gp&&N.attach(e));rp()}}var yp=null,bp=document.querySelector(`#blackBackButton`),xp=ut,Sp=12630964,Cp=8947848,wp=.005,Tp=.02,Ep=null,Dp=Ve.whiteSurface,Op=Ve.whiteGlassTransparency;function kp(){if(!Ep||M.pathTracerActive)return;let e=Ep;Je.toneMappingExposure=e.exposure,Je.domElement.style.filter=e.brightness===1&&e.contrast===1&&e.saturation===1?`none`:`brightness(${e.brightness}) contrast(${e.contrast}) saturate(${e.saturation})`,P.intensity=e.sunStrength,ht.set(15724525).multiplyScalar(e.backdrop),jp();let t=M.currentMode===`white`||M.currentMode===`hidden`;it.intensity=M.currentMode===`renaissance`?0:t?e.skyFill:ut,it.groundColor.set(t?Sp:Cp),t&&it.groundColor.multiplyScalar(e.groundBounce),e.whiteSurface!==Dp&&(jd(e.whiteSurface,t?M.model:null),Dp=e.whiteSurface),t&&e.whiteGlassTransparency!==Op&&(Ap(),Op=e.whiteGlassTransparency),Nd.opacity=1-e.bwGlassTransparency/100}function Ap(e=null){let t=[`original`,`white`,`hidden`].includes(M.currentMode);if(!M.model||!t)return;e?.isTrusted&&[`white`,`hidden`].includes(M.currentMode)&&Ep&&Ne(`whiteGlassTransparency`,Number(Qt.value));let n=1-Number(Qt.value)/100,r=Ep&&[`white`,`hidden`].includes(M.currentMode)?1-Ep.whiteGlassTransparency/100:n,i=e?.type===`input`?md(Qt.value,Number(Qt.min),Number(Qt.max)):null;M.originalMaterials.forEach(e=>{let t=Array.isArray(e)?e:[e],a=M.currentMode===`original`?[]:Ad(e),o=Array.isArray(a)?a:[a];t.forEach(e=>{zd(e)&&Ud(e,n,i)}),o.forEach(e=>{zd(e)&&Ud(e,r,i)})}),Ep&&[`white`,`hidden`].includes(M.currentMode)&&(Op=Ep.whiteGlassTransparency)}Qt?.addEventListener(`input`,Ap);function jp(){let e=!!M.model&&M.currentMode===`renaissance`&&bp.getAttribute(`aria-pressed`)===`true`;e?N.background.set(0):N.background.copy(ht),document.documentElement.classList.toggle(`black-back-active`,e)}bp.addEventListener(`click`,()=>{let e=bp.getAttribute(`aria-pressed`)!==`true`;bp.setAttribute(`aria-pressed`,String(e)),bp.classList.toggle(`active`,e),jp()}),document.querySelectorAll(`[data-mode]`).forEach(e=>{e.addEventListener(`click`,()=>{Mp(e.dataset.mode)})});function Mp(e){Af(),M.currentMode=e,bp.hidden=e!==`renaissance`,bp.disabled=!M.model,jp();let t=e===`wireframe`,n=[`original`,`white`,`hidden`].includes(e);Qt&&(Qt.disabled=!n),t&&yp===null&&(yp=Xt.checked,Xt.checked=!1,Xt.dispatchEvent(new Event(`change`))),!t&&yp!==null&&(Xt.checked=yp,Xt.dispatchEvent(new Event(`change`)),yp=null),[Jt,Yt,Xt].forEach(e=>{e.disabled=t}),nn?.classList.toggle(`disabled`,t),document.querySelectorAll(`[data-mode]`).forEach(t=>{t.classList.toggle(`active`,t.dataset.mode===e),t.setAttribute(`aria-pressed`,String(t.dataset.mode===e))}),M.model&&(M.edgeGroup.visible=!1,P.shadow.normalBias=e===`white`||e===`hidden`?wp:Tp,it.groundColor.set(e===`white`||e===`hidden`?Sp:Cp),e===`renaissance`?(it.intensity=0,M.ground&&(M.ground.material.opacity=1)):(it.intensity=e===`white`||e===`hidden`?xp:ut,M.ground&&(M.ground.material.opacity=Wd)),Lf(M.model,t=>{let n=M.originalMaterials.get(t.uuid);switch(e){case`original`:t.material=n,t.castShadow=!Bd(n),t.visible=!0;break;case`white`:t.material=Ad(n),t.castShadow=!Bd(n),t.visible=!0;break;case`hidden`:t.material=Ad(n),t.castShadow=!Bd(n),t.visible=!0,M.edgeGroup.visible=!0;break;case`wireframe`:t.material=_d,t.castShadow=!0,t.visible=!0;break;case`renaissance`:{let e=M.originalMaterials.get(t.uuid);t.material=Hd(e),t.castShadow=!Bd(e)||Vd(e),t.visible=!0;break}}}),Ap(),pp(),vp(),kp())}Ep=He(e=>{Ep=e,kp()});function Np(e,t){Array.isArray(t)?t.forEach(t=>Np(e,t)):t&&e.add(t)}function Pp(e){let t=new Set([...e].filter(e=>e?.isTexture)),n=new Set;for(let e of t){let t=e.image;t&&typeof t.close==`function`&&n.add(t)}t.forEach(e=>e.dispose()),n.forEach(e=>e.close())}function Fp({textures:e=[],materials:t=[],geometries:n=[]}={}){Pp(e);let r=new Set;t.forEach(e=>Np(r,e)),r.forEach(e=>e.dispose()),new Set(n).forEach(e=>e?.dispose())}function Ip(e,{materials:t=[],geometries:n=[],excludedMaterials:r=[],excludeMaterial:i=()=>!1}={}){let a=new Set,o=new Set,s=new Set,c=new Set(r),l=e=>c.has(e)||i(e);e?.traverse(e=>{e.geometry&&a.add(e.geometry),Np(o,e.material)}),n.forEach(e=>{e&&a.add(e)}),t.forEach(e=>Np(o,e));for(let e of o)if(!l(e))for(let t of Object.values(e))t?.isTexture&&s.add(t);Pp(s),o.forEach(e=>{l(e)||e.dispose()}),a.forEach(e=>e.dispose())}function Lp(e){Ip(e)}export{Ft as $,kd as A,vn as B,tf as C,qd as D,Jd as E,Md as F,Lt as G,yn as H,yd as I,Rt as J,It as K,xd as L,Ld as M,Od as N,Gd as O,Nd as P,dn as Q,gd as R,Qd as S,ef as T,Ht as U,_n as V,Zt as W,jt as X,At as Y,fn as Z,If as _,en as _t,Mp as a,qt as at,Mf as b,dp as c,Kt as ct,hp as d,kt as dt,Ut as et,ip as f,zt as ft,Ff as g,Qt as gt,Af as h,Yt as ht,Pp as i,mn as it,vd as j,Rd as k,fp as l,rn as lt,Lf as m,Jt as mt,Ip as n,Bt as nt,vp as o,an as ot,Rf as p,Ot as pt,pn as q,Fp as r,Vt as rt,_p as s,Gt as st,Lp as t,Wt as tt,mp as u,Xt as ut,Pf as v,$t as vt,$d as w,nf as x,Nf as y,_d as z};