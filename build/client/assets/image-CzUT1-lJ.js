import{r,j as f}from"./jsx-runtime-DexIYAB0.js";import{c as R,g as N,t as L,h as C,a as P,n as E,u as q,B as Q,I as J}from"./heading-DH7VEZXF.js";const X="/portfolio/assets/gotham-bold-italic-C_msAlmW.woff2",Y="/portfolio/assets/gotham-bold-D1kvQ7KV.woff2",Z="/portfolio/assets/gotham-book-italic-Bm2IEtSK.woff2",tt="/portfolio/assets/gotham-book-Bnaws0Ef.woff2",et="/portfolio/assets/gotham-medium-italic-Dok430ou.woff2",ot="/portfolio/assets/gotham-medium-0VT3RO8I.woff2",st="/portfolio/assets/ipa-gothic-DimHCOud.woff2",z=r.createContext({}),It=({theme:t="dark",children:e,className:n,as:s="div",toggleTheme:i,...a})=>{const o=W(),c=!o.theme;return f.jsxs(z.Provider,{value:{theme:t,toggleTheme:i||o.toggleTheme},children:[c&&e,!c&&f.jsx(s,{className:R(n),"data-theme":t,...a,children:e})]})};function W(){return r.useContext(z)}function g(t){return t.replace(/\s\s+/g," ")}function j(t){return g(Object.keys(t).map(e=>`--${e}: ${t[e]};`).join(`

`))}function at(){return g(Object.keys(N).map(t=>`
        @media (max-width: ${N[t]}px) {
          :root {
            ${j(L[t])}
          }
        }
      `).join(`
`))}const nt=g(`
  @layer theme, base, components, layout;
`),rt=g(`
  :root {
    ${j(L.base)}
  }

  ${at()}

  [data-theme='dark'] {
    ${j(C.dark)}
  }

  [data-theme='light'] {
    ${j(C.light)}
  }
`),ct=g(`
  @font-face {
    font-family: Gotham;
    font-weight: 400;
    src: url(${tt}) format('woff2');
    font-display: block;
    font-style: normal;
  }

  @font-face {
    font-family: Gotham;
    font-weight: 400;
    src: url(${Z}) format('woff2');
    font-display: block;
    font-style: italic;
  }

  @font-face {
    font-family: Gotham;
    font-weight: 500;
    src: url(${ot}) format('woff2');
    font-display: block;
    font-style: normal;
  }

  @font-face {
    font-family: Gotham;
    font-weight: 500;
    src: url(${et}) format('woff2');
    font-display: block;
    font-style: italic;
  }

  @font-face {
    font-family: Gotham;
    font-weight: 700;
    src: url(${Y}) format('woff2');
    font-display: block;
    font-style: normal;
  }

  @font-face {
    font-family: Gotham;
    font-weight: 700;
    src: url(${X}) format('woff2');
    font-display: block;
    font-style: italic;
  }

  @font-face {
    font-family: IPA Gothic;
    font-weight: 400;
    src: url(${st}) format('woff2');
    font-display: swap;
    font-style: normal;
  }
`),$t=g(`
  ${nt}

  @layer theme {
    ${rt}
    ${ct}
  }
`);function it(){const[t,e]=r.useState(!1);return r.useEffect(()=>{e(!0)},[]),t}function lt(t,e,n={},s=!0){const[i,a]=r.useState(!1),[o,c]=r.useState(!1);return r.useEffect(()=>{if(!(t!=null&&t.current))return;const l=new IntersectionObserver(([u])=>{const{isIntersecting:m,target:h}=u;a(m),m&&e&&(l.unobserve(h),c(!0))},n);return!o&&s&&l.observe(t.current),()=>l.disconnect()},[t,e,n,o,s]),i}async function ft({src:t,srcSet:e,sizes:n}){return new Promise((s,i)=>{try{if(!t&&!e)throw new Error("No image src or srcSet provided");let a=new Image;t&&(a.src=t),e&&(a.srcset=e),n&&(a.sizes=n);const o=()=>{a.removeEventListener("load",o);const c=a.currentSrc;a=null,s(c)};a.addEventListener("load",o)}catch(a){i(`Error loading ${e}: ${a}`)}})}async function ut(t=1,e=1){return new Promise(n=>{const s=document.createElement("canvas"),i=s.getContext("2d");s.width=t,s.height=e,i.fillStyle="rgba(0, 0, 0, 0)",i.fillRect(0,0,t,e),s.toBlob(async a=>{if(!a)throw new Error("Video thumbnail failed to load");const o=URL.createObjectURL(a);s.remove(),n(o)})})}async function mt({srcSet:t,sizes:e}){const n=await Promise.all(t.split(", ").map(async o=>{const[c,l]=o.split(" "),u=Number(l.replace("w","")),m=await ut(u);return{src:c,image:m,width:l}})),s=n.map(({image:o,width:c})=>`${o} ${c}`).join(", "),i=await ft({srcSet:s,sizes:e});return n.find(o=>o.image===i).src}const dt="_image_4szht_2",ht="_container_4szht_42",pt="_elementWrapper_4szht_49",gt="_placeholder_4szht_71",yt="_element_4szht_49",wt="_button_4szht_104",p={image:dt,container:ht,elementWrapper:pt,placeholder:gt,element:yt,button:wt},kt=({className:t,style:e,reveal:n,delay:s=0,raised:i,src:a,srcSet:o,placeholder:c,...l})=>{const[u,m]=r.useState(!1),{theme:h}=W(),y=r.useRef(),w=a||o.split(" ")[0],S=lt(y,!D(w)),v=r.useCallback(()=>{m(!0)},[]);return f.jsx("div",{className:R(p.image,t),"data-visible":S||u,"data-reveal":n,"data-raised":i,"data-theme":h,style:P({delay:E(s)},e),ref:y,children:f.jsx(vt,{delay:s,onLoad:v,loaded:u,inViewport:S,reveal:n,src:w,srcSet:o,placeholder:c,...l})})},vt=({onLoad:t,loaded:e,inViewport:n,srcSet:s,placeholder:i,delay:a,src:o,alt:c,play:l=!0,restartOnPause:u,reveal:m,sizes:h,width:y,height:w,noPauseButton:S,cover:v,...G})=>{const I=q(),[F,U]=r.useState(!0),[T,$]=r.useState(!I),[_,V]=r.useState(),[B,A]=r.useState(!1),O=r.useRef(),d=r.useRef(),b=D(o),M=n,H=it();r.useEffect(()=>{b&&s?(async()=>{const x=await mt({srcSet:s,sizes:h});V(x)})():b&&V(o)},[b,h,o,s]),r.useEffect(()=>{if(!d.current||!_)return;const k=()=>{$(!0),d.current.play()},x=()=>{$(!1),d.current.pause()};l||(x(),u&&(d.current.currentTime=0)),!B&&(n?n&&!I&&l&&k():x())},[n,l,I,u,B,_]);const K=k=>{k.preventDefault(),A(!0),d.current.paused?($(!0),d.current.play()):($(!1),d.current.pause())};return f.jsxs("div",{className:p.elementWrapper,"data-reveal":m,"data-visible":n||e,style:P({delay:E(a+1e3)}),children:[b&&H&&f.jsxs(r.Fragment,{children:[f.jsx("video",{muted:!0,loop:!0,playsInline:!0,className:p.element,"data-loaded":e,"data-cover":v,autoPlay:!I,onLoadStart:t,src:_,"aria-label":c,ref:d,...G}),!S&&f.jsxs(Q,{className:p.button,onClick:K,children:[f.jsx(J,{icon:T?"pause":"play"}),T?"Pause":"Play"]})]}),!b&&f.jsx("img",{className:p.element,"data-loaded":e,"data-cover":v,onLoad:t,decoding:"async",src:M?o:void 0,srcSet:M?s:void 0,width:y,height:w,alt:c,sizes:h,...G}),F&&f.jsx("img",{"aria-hidden":!0,className:p.placeholder,"data-loaded":e,"data-cover":v,style:P({delay:E(a)}),ref:O,src:i,width:y,height:w,onTransitionEnd:()=>U(!1),decoding:"async",loading:"lazy",alt:"",role:"presentation"})]})};function D(t){return typeof t=="string"&&t.includes(".mp4")}export{ot as G,kt as I,It as T,W as a,tt as b,mt as r,$t as t,lt as u};
