import{i as P,g as C,r as b,h as E,j as i,f as T,c as j,T as A,a as u,b as z,m as L,P as e,e as M}from"./Da4I77gy.js";import{a as S,f as O}from"./DR5LSZrV.js";function R(t){return C("MuiInputAdornment",t)}const h=P("MuiInputAdornment",["root","filled","standard","outlined","positionStart","positionEnd","disablePointerEvents","hiddenLabel","sizeSmall"]);var y;const w=(t,n)=>{const{ownerState:o}=t;return[n.root,n[`position${u(o.position)}`],o.disablePointerEvents===!0&&n.disablePointerEvents,n[o.variant]]},U=t=>{const{classes:n,disablePointerEvents:o,hiddenLabel:r,position:s,size:l,variant:p}=t,d={root:["root",o&&"disablePointerEvents",s&&`position${u(s)}`,p,r&&"hiddenLabel",l&&`size${u(l)}`]};return z(d,R,n)},$=T("div",{name:"MuiInputAdornment",slot:"Root",overridesResolver:w})(L(({theme:t})=>({display:"flex",maxHeight:"2em",alignItems:"center",whiteSpace:"nowrap",color:(t.vars||t).palette.action.active,variants:[{props:{variant:"filled"},style:{[`&.${h.positionStart}&:not(.${h.hiddenLabel})`]:{marginTop:16}}},{props:{position:"start"},style:{marginRight:8}},{props:{position:"end"},style:{marginLeft:8}},{props:{disablePointerEvents:!0},style:{pointerEvents:"none"}}]}))),F=b.forwardRef(function(n,o){const r=E({props:n,name:"MuiInputAdornment"}),{children:s,className:l,component:p="div",disablePointerEvents:d=!1,disableTypography:g=!1,position:v,variant:c,...x}=r,a=S()||{};let m=c;c&&a.variant&&c===a.variant&&console.error("MUI: The `InputAdornment` variant infers the variant prop you do not have to provide one."),a&&!m&&(m=a.variant);const f={...r,hiddenLabel:a.hiddenLabel,size:a.size,disablePointerEvents:d,position:v,variant:m},I=U(f);return i.jsx(O.Provider,{value:null,children:i.jsx($,{as:p,ownerState:f,className:j(I.root,l),ref:o,...x,children:typeof s=="string"&&!g?i.jsx(A,{color:"textSecondary",children:s}):i.jsxs(b.Fragment,{children:[v==="start"?y||(y=i.jsx("span",{className:"notranslate","aria-hidden":!0,children:"​"})):null,s]})})})});F.propTypes={children:e.node,classes:e.object,className:e.string,component:e.elementType,disablePointerEvents:e.bool,disableTypography:e.bool,position:e.oneOf(["end","start"]).isRequired,sx:e.oneOfType([e.arrayOf(e.oneOfType([e.func,e.object,e.bool])),e.func,e.object]),variant:e.oneOf(["filled","outlined","standard"])};const q=M(i.jsx("path",{d:"M12 7c2.76 0 5 2.24 5 5 0 .65-.13 1.26-.36 1.83l2.92 2.92c1.51-1.26 2.7-2.89 3.43-4.75-1.73-4.39-6-7.5-11-7.5-1.4 0-2.74.25-3.98.7l2.16 2.16C10.74 7.13 11.35 7 12 7M2 4.27l2.28 2.28.46.46C3.08 8.3 1.78 10.02 1 12c1.73 4.39 6 7.5 11 7.5 1.55 0 3.03-.3 4.38-.84l.42.42L19.73 22 21 20.73 3.27 3zM7.53 9.8l1.55 1.55c-.05.21-.08.43-.08.65 0 1.66 1.34 3 3 3 .22 0 .44-.03.65-.08l1.55 1.55c-.67.33-1.41.53-2.2.53-2.76 0-5-2.24-5-5 0-.79.2-1.53.53-2.2m4.31-.78 3.15 3.15.02-.16c0-1.66-1.34-3-3-3z"}),"VisibilityOff");export{F as I,q as V};
