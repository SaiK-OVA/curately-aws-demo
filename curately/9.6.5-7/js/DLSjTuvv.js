import{e as ue,j as Q,r as o,W as F,A as $,L as z,k as e,T as g,l as K,S as O,B as U,O as A,V as D,H as ce,I as Ce}from"./Da4I77gy.js";import{M as ye}from"./DCKGuMgj.js";import{D as ee}from"./Bt1msObo.js";import{D as V,A as he}from"./Bu7qOu7j.js";import{L as be,D as X,e as fe,b as ge,c as Y}from"./D4E8Ilzm.js";import{e as Ne}from"./DR5LSZrV.js";import{L as pe}from"./BAD9UWAF.js";import{S as xe}from"./BV6i5w7m.js";import{C as Se}from"./xlFz-ogz.js";import{C as De}from"./CYG5EPlH.js";import{T as P}from"./DrwwBJQC.js";import{I as Le}from"./BAhGwoeq.js";import{M}from"./YFmo1cJD.js";import{T as Z}from"./D8Uve2Qz.js";import"./DKbR-AmK.js";import"./DRaa5a1K.js";import"./CNGds3kx.js";import"./CTncTM4t.js";import"./Dw4YnGpZ.js";import"./DtpZK6Fd.js";import"./Cb9wbhoa.js";import"./BSRMXGwI.js";import"./DGAwO83Z.js";import"./M012vGJb.js";import"./Ca_RVXIc.js";import"./DGhwAF8n.js";import"./BtfZ3YdN.js";import"./DVcNEn01.js";import"./DwQ4byYi.js";import"./Bob0wRh9.js";import"./Bfaybex0.js";import"./BsB7p8DA.js";import"./D7ld7k1a.js";import"./BRh2WteL.js";import"./i9j56vBy.js";import"./MGFt9yJK.js";import"./CPvg8iC8.js";const Ee=ue([Q.jsx("path",{d:"M6.41 6 5 7.41 9.58 12 5 16.59 6.41 18l6-6z"},"0"),Q.jsx("path",{d:"m13 6-1.41 1.41L16.17 12l-4.58 4.59L13 18l6-6z"},"1")],"KeyboardDoubleArrowRightOutlined");function ve(){const[a,N]=o.useState({});o.useEffect(()=>{u()},[]);const u=()=>{F($.getById("admin","getCredits",`${z.getvalue("clientId")}/${z.getvalue("recrId")}`).then(d=>{d.data.Success&&N(d.data)}))};return e.jsxDEV("div",{children:[e.jsxDEV(g,{variant:"h6",sx:{fontSize:"14px"},gutterBottom:!0,children:"Show Stats"},void 0,!1,{fileName:"C:/Curately-aws-demo-test/curately-9.6.5/curately-9.6.5/src/components/Dashboard/Settings/CreditLimit/Stats.tsx",lineNumber:31,columnNumber:13},this),e.jsxDEV(ee,{sx:{mb:1}},void 0,!1,{fileName:"C:/Curately-aws-demo-test/curately-9.6.5/curately-9.6.5/src/components/Dashboard/Settings/CreditLimit/Stats.tsx",lineNumber:32,columnNumber:13},this),e.jsxDEV(g,{variant:"h6",sx:{mb:1,fontSize:"14px"},children:"Email Credits Summary"},void 0,!1,{fileName:"C:/Curately-aws-demo-test/curately-9.6.5/curately-9.6.5/src/components/Dashboard/Settings/CreditLimit/Stats.tsx",lineNumber:33,columnNumber:13},this),e.jsxDEV(K,{sx:{display:"flex",flexDirection:"column",gap:1,mb:3},children:[e.jsxDEV(g,{children:`Total Credits: ${(a==null?void 0:a.totalProfileCredits)||0}`},void 0,!1,{fileName:"C:/Curately-aws-demo-test/curately-9.6.5/curately-9.6.5/src/components/Dashboard/Settings/CreditLimit/Stats.tsx",lineNumber:35,columnNumber:17},this),e.jsxDEV(g,{children:`Used Credits: ${(a==null?void 0:a.consumedProfileCredits)||0}`},void 0,!1,{fileName:"C:/Curately-aws-demo-test/curately-9.6.5/curately-9.6.5/src/components/Dashboard/Settings/CreditLimit/Stats.tsx",lineNumber:38,columnNumber:17},this),e.jsxDEV(g,{children:`Remaining Credits: ${((a==null?void 0:a.totalProfileCredits)||0)-((a==null?void 0:a.consumedProfileCredits)||0)}`},void 0,!1,{fileName:"C:/Curately-aws-demo-test/curately-9.6.5/curately-9.6.5/src/components/Dashboard/Settings/CreditLimit/Stats.tsx",lineNumber:39,columnNumber:17},this)]},void 0,!0,{fileName:"C:/Curately-aws-demo-test/curately-9.6.5/curately-9.6.5/src/components/Dashboard/Settings/CreditLimit/Stats.tsx",lineNumber:34,columnNumber:13},this),e.jsxDEV(g,{variant:"h6",sx:{mb:1,fontSize:"14px"},children:"Phone Credits Summary"},void 0,!1,{fileName:"C:/Curately-aws-demo-test/curately-9.6.5/curately-9.6.5/src/components/Dashboard/Settings/CreditLimit/Stats.tsx",lineNumber:42,columnNumber:13},this),e.jsxDEV(K,{sx:{display:"flex",flexDirection:"column",gap:1},children:[e.jsxDEV(g,{children:`Total Credits: ${(a==null?void 0:a.totalSmsCredits)||0}`},void 0,!1,{fileName:"C:/Curately-aws-demo-test/curately-9.6.5/curately-9.6.5/src/components/Dashboard/Settings/CreditLimit/Stats.tsx",lineNumber:44,columnNumber:17},this),e.jsxDEV(g,{children:`Used Credits: ${(a==null?void 0:a.consumedSmsCredits)||0}`},void 0,!1,{fileName:"C:/Curately-aws-demo-test/curately-9.6.5/curately-9.6.5/src/components/Dashboard/Settings/CreditLimit/Stats.tsx",lineNumber:47,columnNumber:17},this),e.jsxDEV(g,{children:`Remaining Credits: ${((a==null?void 0:a.totalSmsCredits)||0)-((a==null?void 0:a.consumedSmsCredits)||0)}`},void 0,!1,{fileName:"C:/Curately-aws-demo-test/curately-9.6.5/curately-9.6.5/src/components/Dashboard/Settings/CreditLimit/Stats.tsx",lineNumber:48,columnNumber:17},this)]},void 0,!0,{fileName:"C:/Curately-aws-demo-test/curately-9.6.5/curately-9.6.5/src/components/Dashboard/Settings/CreditLimit/Stats.tsx",lineNumber:43,columnNumber:13},this)]},void 0,!0,{fileName:"C:/Curately-aws-demo-test/curately-9.6.5/curately-9.6.5/src/components/Dashboard/Settings/CreditLimit/Stats.tsx",lineNumber:30,columnNumber:9},this)}function we(){const[a,N]=o.useState([]),[u,d]=o.useState(0),[E,W]=o.useState(200),[c,q]=o.useState(0),[b,v]=o.useState(!1),[C,f]=o.useState(!1),[x,w]=o.useState(V.now()),[p,I]=o.useState(V.now()),R=async(y,j)=>{const B={clientId:z.getvalue("clientId"),recrId:z.getvalue("recrId"),next:y*j,pageSize:j,startDate:C?x.toFormat("yyyy-MM-dd"):null,endDate:C?p.toFormat("yyyy-MM-dd"):null};if(v(!0),x.startOf("day")>p.startOf("day"))return D("Start Date should be less than End Date.","error"),!1;F($.postWithData("admin","recruiter/creditStats/activity-log",B).then(L=>{var k;if(L.data.Success){const S=((k=L==null?void 0:L.data)==null?void 0:k.recruiterLogList)||[];u>=1?N(T=>[...T,...S]):N([...S]),q(L.data.total||0)}else D(L.data.Message||"An error occurred while fetching logs","error");v(!1)}).catch(()=>{v(!1)}))},H=()=>{f(!1),w(V.now()),I(V.now())};return o.useEffect(()=>{R(u,E)},[u,C]),e.jsxDEV("div",{id:"logs-list",children:[e.jsxDEV(O,{direction:"row",alignItems:"center",justifyContent:"space-between",mb:1,children:[e.jsxDEV(g,{variant:"h6",sx:{fontSize:"14px"},children:"Show Logs"},void 0,!1,{fileName:"C:/Curately-aws-demo-test/curately-9.6.5/curately-9.6.5/src/components/Dashboard/Settings/CreditLimit/Logs.tsx",lineNumber:76,columnNumber:17},this),!C&&c>9?e.jsxDEV(U,{color:"secondary",variant:"outlined",size:"small",onClick:()=>f(!0),children:"Show more"},void 0,!1,{fileName:"C:/Curately-aws-demo-test/curately-9.6.5/curately-9.6.5/src/components/Dashboard/Settings/CreditLimit/Logs.tsx",lineNumber:77,columnNumber:50},this):null]},void 0,!0,{fileName:"C:/Curately-aws-demo-test/curately-9.6.5/curately-9.6.5/src/components/Dashboard/Settings/CreditLimit/Logs.tsx",lineNumber:75,columnNumber:13},this),e.jsxDEV(ee,{sx:{mb:1}},void 0,!1,{fileName:"C:/Curately-aws-demo-test/curately-9.6.5/curately-9.6.5/src/components/Dashboard/Settings/CreditLimit/Logs.tsx",lineNumber:79,columnNumber:13},this),C?e.jsxDEV(O,{spacing:.75,mt:1.5,mb:.75,children:[e.jsxDEV(be,{dateAdapter:he,children:e.jsxDEV(A,{container:!0,direction:"row",justifyContent:"flex-start",alignItems:"center",children:[e.jsxDEV(X,{label:"Start Date",value:x,onChange:y=>{w(y||V.now())},sx:{width:"133px"},slotProps:{textField:{size:"small",fullWidth:!1,InputProps:{style:{textAlign:"center"}}}},maxDate:p},void 0,!1,{fileName:"C:/Curately-aws-demo-test/curately-9.6.5/curately-9.6.5/src/components/Dashboard/Settings/CreditLimit/Logs.tsx",lineNumber:88,columnNumber:25},this),e.jsxDEV(X,{label:"End Date",value:p,onChange:y=>{I(y||V.now())},sx:{width:"133px",marginLeft:"4px"},slotProps:{textField:{size:"small",fullWidth:!1,InputProps:{style:{textAlign:"center"}}}},maxDate:V.now()},void 0,!1,{fileName:"C:/Curately-aws-demo-test/curately-9.6.5/curately-9.6.5/src/components/Dashboard/Settings/CreditLimit/Logs.tsx",lineNumber:117,columnNumber:25},this)]},void 0,!0,{fileName:"C:/Curately-aws-demo-test/curately-9.6.5/curately-9.6.5/src/components/Dashboard/Settings/CreditLimit/Logs.tsx",lineNumber:82,columnNumber:21},this)},void 0,!1,{fileName:"C:/Curately-aws-demo-test/curately-9.6.5/curately-9.6.5/src/components/Dashboard/Settings/CreditLimit/Logs.tsx",lineNumber:81,columnNumber:17},this),e.jsxDEV(O,{direction:"row",justifyContent:"flex-end",alignItems:"center",spacing:2,children:[e.jsxDEV(U,{variant:"outlined",color:"secondary",sx:{textTransform:"none",height:"24px"},onClick:H,children:"Clear"},void 0,!1,{fileName:"C:/Curately-aws-demo-test/curately-9.6.5/curately-9.6.5/src/components/Dashboard/Settings/CreditLimit/Logs.tsx",lineNumber:148,columnNumber:21},this),e.jsxDEV(U,{variant:"contained",color:"primary",fullWidth:!0,onClick:()=>{R(u,E)},children:"Get Data"},void 0,!1,{fileName:"C:/Curately-aws-demo-test/curately-9.6.5/curately-9.6.5/src/components/Dashboard/Settings/CreditLimit/Logs.tsx",lineNumber:149,columnNumber:21},this)]},void 0,!0,{fileName:"C:/Curately-aws-demo-test/curately-9.6.5/curately-9.6.5/src/components/Dashboard/Settings/CreditLimit/Logs.tsx",lineNumber:147,columnNumber:17},this)]},void 0,!0,{fileName:"C:/Curately-aws-demo-test/curately-9.6.5/curately-9.6.5/src/components/Dashboard/Settings/CreditLimit/Logs.tsx",lineNumber:80,columnNumber:23},this):null,e.jsxDEV(Ne,{disablePadding:!0,sx:{height:`calc(100vh - ${C?"318px":"242px"})`},children:a!=null&&a.length?a.map((y,j)=>e.jsxDEV(fe,{children:e.jsxDEV(pe,{primary:y.descr,secondary:new Date(y.actionDate).toLocaleDateString()},void 0,!1,{fileName:"C:/Curately-aws-demo-test/curately-9.6.5/curately-9.6.5/src/components/Dashboard/Settings/CreditLimit/Logs.tsx",lineNumber:157,columnNumber:25},this)},j,!1,{fileName:"C:/Curately-aws-demo-test/curately-9.6.5/curately-9.6.5/src/components/Dashboard/Settings/CreditLimit/Logs.tsx",lineNumber:156,columnNumber:21},this)):e.jsxDEV(g,{textAlign:"center",my:6,children:"No logs available"},void 0,!1,{fileName:"C:/Curately-aws-demo-test/curately-9.6.5/curately-9.6.5/src/components/Dashboard/Settings/CreditLimit/Logs.tsx",lineNumber:160,columnNumber:21},this)},void 0,!1,{fileName:"C:/Curately-aws-demo-test/curately-9.6.5/curately-9.6.5/src/components/Dashboard/Settings/CreditLimit/Logs.tsx",lineNumber:154,columnNumber:13},this)]},void 0,!0,{fileName:"C:/Curately-aws-demo-test/curately-9.6.5/curately-9.6.5/src/components/Dashboard/Settings/CreditLimit/Logs.tsx",lineNumber:74,columnNumber:9},this)}function Ie(){const[a,N]=o.useState("Stats"),[u,d]=o.useState(1),E=(W,c)=>{N(c),d(1)};return e.jsxDEV("div",{children:["   ",e.jsxDEV(ce,{sx:{mb:2,boxShadow:"none"},children:[e.jsxDEV(ge,{value:a,onChange:E,sx:{px:1,"& .MuiTab-root":{textTransform:"capitalize"},fontSize:"16px",borderBottom:"1px solid #E0E0E0","& .MuiTab-textColorPrimary":{color:"#000"}},children:[e.jsxDEV(Y,{value:"Stats",label:"Stats"},void 0,!1,{fileName:"C:/Curately-aws-demo-test/curately-9.6.5/curately-9.6.5/src/components/Dashboard/Settings/CreditLimit/StatsandLogs.tsx",lineNumber:31,columnNumber:17},this),e.jsxDEV(Y,{value:"Logs",label:"Logs"},void 0,!1,{fileName:"C:/Curately-aws-demo-test/curately-9.6.5/curately-9.6.5/src/components/Dashboard/Settings/CreditLimit/StatsandLogs.tsx",lineNumber:32,columnNumber:17},this)]},void 0,!0,{fileName:"C:/Curately-aws-demo-test/curately-9.6.5/curately-9.6.5/src/components/Dashboard/Settings/CreditLimit/StatsandLogs.tsx",lineNumber:19,columnNumber:13},this),e.jsxDEV(K,{sx:{mt:0,p:2},children:a==="Stats"?e.jsxDEV(e.Fragment,{children:e.jsxDEV(ve,{},void 0,!1,{fileName:"C:/Curately-aws-demo-test/curately-9.6.5/curately-9.6.5/src/components/Dashboard/Settings/CreditLimit/StatsandLogs.tsx",lineNumber:63,columnNumber:25},this)},void 0,!1,{fileName:"C:/Curately-aws-demo-test/curately-9.6.5/curately-9.6.5/src/components/Dashboard/Settings/CreditLimit/StatsandLogs.tsx",lineNumber:62,columnNumber:21},this):e.jsxDEV(we,{},void 0,!1,{fileName:"C:/Curately-aws-demo-test/curately-9.6.5/curately-9.6.5/src/components/Dashboard/Settings/CreditLimit/StatsandLogs.tsx",lineNumber:66,columnNumber:21},this)},void 0,!1,{fileName:"C:/Curately-aws-demo-test/curately-9.6.5/curately-9.6.5/src/components/Dashboard/Settings/CreditLimit/StatsandLogs.tsx",lineNumber:35,columnNumber:13},this)]},void 0,!0,{fileName:"C:/Curately-aws-demo-test/curately-9.6.5/curately-9.6.5/src/components/Dashboard/Settings/CreditLimit/StatsandLogs.tsx",lineNumber:18,columnNumber:17},this)]},void 0,!0,{fileName:"C:/Curately-aws-demo-test/curately-9.6.5/curately-9.6.5/src/components/Dashboard/Settings/CreditLimit/StatsandLogs.tsx",lineNumber:18,columnNumber:9},this)}const ct=()=>{const[a,N]=o.useState(""),[u,d]=o.useState([]),[E,W]=o.useState([]),[c,q]=o.useState("Custom"),[b,v]=o.useState("Custom"),[C,f]=o.useState({}),[x,w]=o.useState(""),[p,I]=o.useState(""),[R,H]=o.useState(""),[y,j]=o.useState({pageIndex:0,pageSize:20}),[B,L]=o.useState(0),[k,S]=o.useState(!1),[T,te]=o.useState(!0);o.useEffect(()=>{_()},[]);const _=()=>{const t={clientId:z.getvalue("clientId")};F($.postWithData("admin","recruiter/creditDetails",t).then(s=>{s.data.Success?(d(s.data.recruiterCreditDetails),W(s.data.recruiterCreditDetails)):D(s.data.Message?s.data.Message:"An error occurred while fetching credit details","error")}))},G=(t,s,l)=>{let i=u;const r=t.target.value;i=i.map(n=>({...n,[l]:n.recrId===s?parseInt(r)||"":n[l]})),d([...i])},J=t=>{const s=(t==null?void 0:t.length)>20?t.slice(0,20):t;return(t==null?void 0:t.length)>20?e.jsxDEV(Z,{title:t,children:e.jsxDEV("span",{children:[s,"..."]},void 0,!0,{fileName:"C:/Curately-aws-demo-test/curately-9.6.5/curately-9.6.5/src/components/Dashboard/Settings/CreditLimit/CreditLimit.tsx",lineNumber:78,columnNumber:21},void 0)},void 0,!1,{fileName:"C:/Curately-aws-demo-test/curately-9.6.5/curately-9.6.5/src/components/Dashboard/Settings/CreditLimit/CreditLimit.tsx",lineNumber:77,columnNumber:17},void 0):e.jsxDEV("span",{children:s},void 0,!1,{fileName:"C:/Curately-aws-demo-test/curately-9.6.5/curately-9.6.5/src/components/Dashboard/Settings/CreditLimit/CreditLimit.tsx",lineNumber:81,columnNumber:23},void 0)},ie=o.useMemo(()=>[{accessorKey:"name",header:"Name",Cell:({row:t})=>J(t.original.recrName)},{accessorKey:"email",header:"Email",Cell:({row:t})=>J(t.original.email)},{accessorKey:"emailUsed",header:"Email Used",Cell:({row:t})=>e.jsxDEV("span",{children:t.original.usedCreditCount},void 0,!1,{fileName:"C:/Curately-aws-demo-test/curately-9.6.5/curately-9.6.5/src/components/Dashboard/Settings/CreditLimit/CreditLimit.tsx",lineNumber:102,columnNumber:21},void 0),maxSize:60,size:50},{accessorKey:"phoneUsed",header:"Phone Used",Cell:({row:t})=>e.jsxDEV("span",{children:t.original.usedSmsCount},void 0,!1,{fileName:"C:/Curately-aws-demo-test/curately-9.6.5/curately-9.6.5/src/components/Dashboard/Settings/CreditLimit/CreditLimit.tsx",lineNumber:111,columnNumber:21},void 0),muiTableBodyCellProps:{sx:{width:"100px"}},size:50},{accessorKey:"emailAssigned",header:"Email Assigned",Cell:({row:t})=>{const s=t.getIsSelected();return e.jsxDEV("span",{children:e.jsxDEV(P,{fullWidth:!0,id:`creditCount-${t.original.recrId}`,name:`creditCount-${t.original.recrId}`,size:"small",type:"number",value:t.original.creditCount,slotProps:{input:{readOnly:["Unlimited","Equally"].includes(c)?!0:c==="Custom"?!s:!0}},onChange:l=>G(l,t.original.recrId,"creditCount"),sx:{width:"5em"}},void 0,!1,{fileName:"C:/Curately-aws-demo-test/curately-9.6.5/curately-9.6.5/src/components/Dashboard/Settings/CreditLimit/CreditLimit.tsx",lineNumber:122,columnNumber:25},void 0)},void 0,!1,{fileName:"C:/Curately-aws-demo-test/curately-9.6.5/curately-9.6.5/src/components/Dashboard/Settings/CreditLimit/CreditLimit.tsx",lineNumber:121,columnNumber:28},void 0)},maxSize:60,size:50},{accessorKey:"phoneAssigned",header:"Phone Assigned",Cell:({row:t})=>{const s=t.getIsSelected();return e.jsxDEV("span",{children:e.jsxDEV(P,{fullWidth:!0,id:`smsCount-${t.original.recrId}`,name:`smsCount-${t.original.recrId}`,size:"small",type:"number",value:t.original.smsCount,slotProps:{input:{readOnly:["Unlimited","Equally"].includes(b)?!0:b==="Custom"?!s:!0}},onChange:l=>G(l,t.original.recrId,"smsCount"),sx:{width:"5em"}},void 0,!1,{fileName:"C:/Curately-aws-demo-test/curately-9.6.5/curately-9.6.5/src/components/Dashboard/Settings/CreditLimit/CreditLimit.tsx",lineNumber:148,columnNumber:25},void 0)},void 0,!1,{fileName:"C:/Curately-aws-demo-test/curately-9.6.5/curately-9.6.5/src/components/Dashboard/Settings/CreditLimit/CreditLimit.tsx",lineNumber:147,columnNumber:28},void 0)},maxSize:60,size:50}],[c,b,u]),h=(t,s)=>{let l=E.find(i=>i.recrId===s)||null;return l&&l[t==="EMAIL"?"creditCount":"smsCount"]||0},se=t=>{var l;const s=t.target.value;if(q(s),["Unlimited","Equally"].includes(s)){let i=u;if((l=Object.keys(C))!=null&&l.length){const r=Object.entries(C).filter(([n,m])=>m).map(([n])=>parseInt(n));d(n=>n.map(m=>({...m,creditCount:r.includes(m.recrId)?s==="Unlimited"?-1:s==="Equally"?x||0:h("EMAIL",m.recrId):h("EMAIL",m.recrId)})))}else{const r=i.reduce((n,m)=>(n[m.recrId]=!0,n),{});f(n=>({...n,...r})),d(n=>n.map((m,de)=>({...m,creditCount:s==="Unlimited"?-1:s==="Equally"?x||0:h("EMAIL",m.recrId)})))}S(!0)}else["Unlimited","Equally"].includes(b)||(f({}),S(!1)),d(i=>i.map(r=>({...r,creditCount:h("EMAIL",r.recrId)})))},re=t=>{var l;const s=t.target.value;if(v(s),["Unlimited","Equally"].includes(s)){let i=u;if((l=Object.keys(C))!=null&&l.length){const r=Object.entries(C).filter(([n,m])=>m).map(([n])=>parseInt(n));d(n=>n.map(m=>({...m,smsCount:r.includes(m.recrId)?s==="Unlimited"?-1:s==="Equally"?p||0:h("PHONE",m.recrId):h("PHONE",m.recrId)})))}else{const r=i.reduce((n,m)=>(n[m.recrId]=!0,n),{});f(n=>({...n,...r})),d(n=>n.map((m,de)=>({...m,smsCount:s==="Unlimited"?-1:s==="Equally"?p||0:h("PHONE",m.recrId)})))}S(!0)}else["Unlimited","Equally"].includes(c)||(f({}),S(!1)),d(i=>i.map(r=>({...r,smsCount:h("PHONE",r.recrId)})))},ae=t=>{const s=t.target.value;w(s);const l=Object.entries(C).filter(([i,r])=>r).map(([i])=>parseInt(i));c==="Equally"&&d(i=>i.map(r=>({...r,creditCount:l.includes(r.recrId)?parseInt(s)||0:r.creditCount})))},le=t=>{const s=t.target.value;I(s);const l=Object.entries(C).filter(([i,r])=>r).map(([i])=>parseInt(i));b==="Equally"&&d(i=>i.map(r=>({...r,smsCount:l.includes(r.recrId)?parseInt(s)||0:r.smsCount})))},ne=async()=>{const t=Object.entries(C).filter(([i,r])=>r).map(([i])=>parseInt(i));if(c==="Custom"&&b==="Custom"&&t.length===0)return D("Select recruiters to assign credits","error"),!1;if(c==="Equally"&&!x)return D("Enter email credit value","error"),!1;if(b==="Equally"&&!p)return D("Enter phone credit value","error"),!1;const s=u.filter(i=>t.includes(i.recrId)).map(i=>({recrId:i.recrId,creditCount:i.creditCount,smsCount:i.smsCount})),l={clientId:z.getvalue("clientId"),recrId:z.getvalue("recrId"),recruiterCreditDetails:s};try{F($.postWithData("admin","recruiter/creditsUpdate",l).then(i=>{i.data.Success?(D("Credits updated successfully!","success"),f({}),S(!1),q("Custom"),v("Custom"),w(""),I(""),N(""),_()):D(i.data.Message||"Failed to update credits","error")}))}catch(i){console.error("Error updating recruiter credits:",i),D("Something went wrong. Please try again.","error")}},oe=o.useMemo(()=>{var l;let t=((l=a==null?void 0:a.toLowerCase())==null?void 0:l.trim())||"";const s=u.filter(i=>i.recrName.toLowerCase().includes(t.toLowerCase()||"")||i.email.toLowerCase().includes(t.toLowerCase()||""));return L(s.length),s},[a,u]),me=()=>{d([...E]),f({}),q("Custom"),v("Custom"),w(""),I(""),N(""),S(!1),j({...y,pageIndex:0})};return e.jsxDEV("div",{id:"CreditLimit",children:[e.jsxDEV(A,{container:!0,direction:"row",justifyContent:"space-between",alignItems:"center",className:"customCard pt-1 mb-2 mt-2",sx:{minHeight:"auto !important"},children:e.jsxDEV(g,{variant:"h6",className:"headerName",children:"Credit Assignment"},void 0,!1,{fileName:"C:/Curately-aws-demo-test/curately-9.6.5/curately-9.6.5/src/components/Dashboard/Settings/CreditLimit/CreditLimit.tsx",lineNumber:449,columnNumber:17},void 0)},void 0,!1,{fileName:"C:/Curately-aws-demo-test/curately-9.6.5/curately-9.6.5/src/components/Dashboard/Settings/CreditLimit/CreditLimit.tsx",lineNumber:441,columnNumber:13},void 0),e.jsxDEV(A,{container:!0,direction:"row",spacing:1,children:[e.jsxDEV(A,{size:T?9:12,children:e.jsxDEV(A,{container:!0,spacing:0,className:"customCard px-0 py-2 ",children:e.jsxDEV(A,{sx:{width:"calc(100%)"},children:e.jsxDEV("div",{className:"MRTableCustom pl-0 mt-1",children:[e.jsxDEV(O,{direction:"row",alignItems:"center",justifyContent:"space-between",spacing:1,className:"headerFormContainer",children:[e.jsxDEV(O,{direction:"row",alignItems:"center",spacing:0,children:[e.jsxDEV(P,{placeholder:"Search by name or email",size:"small",id:"Search",name:"Search",className:"creditSearchName mr-1",value:a,onChange:t=>{N(t.target.value)},slotProps:{input:{startAdornment:e.jsxDEV(xe,{fontSize:"small",htmlColor:"#757575"},void 0,!1,{fileName:"C:/Curately-aws-demo-test/curately-9.6.5/curately-9.6.5/src/components/Dashboard/Settings/CreditLimit/CreditLimit.tsx",lineNumber:470,columnNumber:69},void 0),endAdornment:e.jsxDEV(Le,{position:"end",disablePointerEvents:!a,children:e.jsxDEV(Se,{fontSize:"small",htmlColor:a?"#757575":"#ebebeb",sx:{cursor:"pointer"},onClick:()=>N("")},void 0,!1,{fileName:"C:/Curately-aws-demo-test/curately-9.6.5/curately-9.6.5/src/components/Dashboard/Settings/CreditLimit/CreditLimit.tsx",lineNumber:472,columnNumber:57},void 0)},void 0,!1,{fileName:"C:/Curately-aws-demo-test/curately-9.6.5/curately-9.6.5/src/components/Dashboard/Settings/CreditLimit/CreditLimit.tsx",lineNumber:471,columnNumber:67},void 0)}}},void 0,!1,{fileName:"C:/Curately-aws-demo-test/curately-9.6.5/curately-9.6.5/src/components/Dashboard/Settings/CreditLimit/CreditLimit.tsx",lineNumber:460,columnNumber:41},void 0),e.jsxDEV(P,{sx:{width:"110px"},fullWidth:!0,label:"Assign Email Credits",name:"Assign-Email-Credits",id:"Assign-Email-Credits",size:"small",className:"mr-1",select:!0,placeholder:"Assign Email",value:c,onChange:se,children:[e.jsxDEV(M,{value:"Custom",children:"Custom"},void 0,!1,{fileName:"C:/Curately-aws-demo-test/curately-9.6.5/curately-9.6.5/src/components/Dashboard/Settings/CreditLimit/CreditLimit.tsx",lineNumber:490,columnNumber:45},void 0),e.jsxDEV(M,{value:"Equally",children:"Equally"},void 0,!1,{fileName:"C:/Curately-aws-demo-test/curately-9.6.5/curately-9.6.5/src/components/Dashboard/Settings/CreditLimit/CreditLimit.tsx",lineNumber:491,columnNumber:45},void 0),e.jsxDEV(M,{value:"Unlimited",children:"Unlimited"},void 0,!1,{fileName:"C:/Curately-aws-demo-test/curately-9.6.5/curately-9.6.5/src/components/Dashboard/Settings/CreditLimit/CreditLimit.tsx",lineNumber:492,columnNumber:45},void 0)]},void 0,!0,{fileName:"C:/Curately-aws-demo-test/curately-9.6.5/curately-9.6.5/src/components/Dashboard/Settings/CreditLimit/CreditLimit.tsx",lineNumber:477,columnNumber:41},void 0),c==="Equally"&&e.jsxDEV(P,{size:"small",placeholder:"Email Credits",label:"Email Credits",id:"Email Credits",name:"Email Credits",className:"mr-1",value:x,onChange:ae,sx:{width:"100px"},type:"number",fullWidth:!0},void 0,!1,{fileName:"C:/Curately-aws-demo-test/curately-9.6.5/curately-9.6.5/src/components/Dashboard/Settings/CreditLimit/CreditLimit.tsx",lineNumber:496,columnNumber:45},void 0),e.jsxDEV(P,{sx:{width:"110px"},fullWidth:!0,className:"selHeight mr-1",label:"Assign Phone Credits ",name:"Assign-Phone-Credits",id:"Assign-Phone-Credits",size:"small",select:!0,placeholder:"Assign Phone   ",value:b,onChange:re,children:[e.jsxDEV(M,{value:"Custom",children:"Custom"},void 0,!1,{fileName:"C:/Curately-aws-demo-test/curately-9.6.5/curately-9.6.5/src/components/Dashboard/Settings/CreditLimit/CreditLimit.tsx",lineNumber:523,columnNumber:45},void 0),e.jsxDEV(M,{value:"Equally",children:"Equally"},void 0,!1,{fileName:"C:/Curately-aws-demo-test/curately-9.6.5/curately-9.6.5/src/components/Dashboard/Settings/CreditLimit/CreditLimit.tsx",lineNumber:524,columnNumber:45},void 0),e.jsxDEV(M,{value:"Unlimited",children:"Unlimited"},void 0,!1,{fileName:"C:/Curately-aws-demo-test/curately-9.6.5/curately-9.6.5/src/components/Dashboard/Settings/CreditLimit/CreditLimit.tsx",lineNumber:525,columnNumber:45},void 0)]},void 0,!0,{fileName:"C:/Curately-aws-demo-test/curately-9.6.5/curately-9.6.5/src/components/Dashboard/Settings/CreditLimit/CreditLimit.tsx",lineNumber:510,columnNumber:41},void 0),b==="Equally"&&e.jsxDEV(P,{size:"small",placeholder:"Phone Credit Value",id:"Phone Credit Value",name:"Phone Credit Value",label:"Enter Phone Credit Value",className:"mr-1",value:p,onChange:le,sx:{width:"100px"},type:"number",fullWidth:!0},void 0,!1,{fileName:"C:/Curately-aws-demo-test/curately-9.6.5/curately-9.6.5/src/components/Dashboard/Settings/CreditLimit/CreditLimit.tsx",lineNumber:529,columnNumber:45},void 0),e.jsxDEV(U,{variant:"contained",color:"primary",className:"mr-1",onClick:ne,children:"Save"},void 0,!1,{fileName:"C:/Curately-aws-demo-test/curately-9.6.5/curately-9.6.5/src/components/Dashboard/Settings/CreditLimit/CreditLimit.tsx",lineNumber:543,columnNumber:41},void 0),e.jsxDEV(U,{variant:"outlined",color:"secondary",sx:{textTransform:"none",height:"26px"},onClick:me,children:"Clear"},void 0,!1,{fileName:"C:/Curately-aws-demo-test/curately-9.6.5/curately-9.6.5/src/components/Dashboard/Settings/CreditLimit/CreditLimit.tsx",lineNumber:551,columnNumber:41},void 0)]},void 0,!0,{fileName:"C:/Curately-aws-demo-test/curately-9.6.5/curately-9.6.5/src/components/Dashboard/Settings/CreditLimit/CreditLimit.tsx",lineNumber:459,columnNumber:37},void 0),e.jsxDEV(Z,{title:"Toggle Stats",children:e.jsxDEV(Ce,{size:"small",onClick:()=>te(t=>!t),children:e.jsxDEV(Ee,{className:`${T?"":"statsIconFlip"}`},void 0,!1,{fileName:"C:/Curately-aws-demo-test/curately-9.6.5/curately-9.6.5/src/components/Dashboard/Settings/CreditLimit/CreditLimit.tsx",lineNumber:561,columnNumber:114},void 0)},void 0,!1,{fileName:"C:/Curately-aws-demo-test/curately-9.6.5/curately-9.6.5/src/components/Dashboard/Settings/CreditLimit/CreditLimit.tsx",lineNumber:561,columnNumber:41},void 0)},void 0,!1,{fileName:"C:/Curately-aws-demo-test/curately-9.6.5/curately-9.6.5/src/components/Dashboard/Settings/CreditLimit/CreditLimit.tsx",lineNumber:560,columnNumber:37},void 0)]},void 0,!0,{fileName:"C:/Curately-aws-demo-test/curately-9.6.5/curately-9.6.5/src/components/Dashboard/Settings/CreditLimit/CreditLimit.tsx",lineNumber:458,columnNumber:33},void 0),e.jsxDEV(ye,{columns:ie,data:oe,enableTopToolbar:!1,enableStickyHeader:!0,enableRowSelection:!0,initialState:{columnPinning:{left:["mrt-row-select","name"]},density:"compact",showGlobalFilter:!0},enableDensityToggle:!1,enableFullScreenToggle:!1,enableGlobalFilterModes:!0,columnResizeMode:"onChange",enablePagination:!0,state:{pagination:y,globalFilter:R,rowSelection:C},muiTableProps:{sx:{"& td, & th":{padding:{xs:"4px",sm:"8px"}}}},muiPaginationProps:{rowsPerPageOptions:[20],showLastButton:!1,SelectProps:{style:{display:"none"}}},renderBottomToolbarCustomActions:()=>e.jsxDEV(De,{page:y.pageIndex,rowsPerPage:y.pageSize,rowCount:B,onChangePage:t=>j({...y,pageIndex:t,pageSize:y.pageSize})},void 0,!1,{fileName:"C:/Curately-aws-demo-test/curately-9.6.5/curately-9.6.5/src/components/Dashboard/Settings/CreditLimit/CreditLimit.tsx",lineNumber:598,columnNumber:41},void 0),onGlobalFilterChange:H,getRowId:t=>t.recrId,onRowSelectionChange:t=>{const s=t(C),l=Object.entries(s).filter(([i,r])=>r).map(([i])=>parseInt(i));d(i=>i.map(r=>({...r,creditCount:l.includes(r.recrId)?c==="Unlimited"?-1:c==="Equally"?x||0:h("EMAIL",r.recrId):h("EMAIL",r.recrId),smsCount:l.includes(r.recrId)?b==="Unlimited"?-1:b==="Equally"?p||0:h("PHONE",r.recrId):h("PHONE",r.recrId)}))),f({...s})},enableSelectAll:!0,muiSelectCheckboxProps:({row:t})=>({onChange:s=>{let l=u;if(t.id){let i={...C},r=u.findIndex(n=>n.recrId===t.id);s.target.checked?(l[r].creditCount=c==="Unlimited"?-1:c==="Custom"?h("EMAIL",l[r].recrId):x||0,l[r].smsCount=b==="Unlimited"?-1:b==="Custom"?h("PHONE",l[r].recrId):p||0,i[t.id]=s.target.checked):(i.hasOwnProperty(t.id)&&delete i[t.id],l[r].creditCount=h("EMAIL",l[r].recrId),l[r].smsCount=h("PHONE",l[r].recrId)),d([...l]),f(i)}}}),muiSelectAllCheckboxProps:{onChange:(t,s)=>{if(s){const l=u.reduce((i,r)=>(i[r.recrId]=!0,i),{});f(l)}else f({});S(s)},checked:k}},void 0,!1,{fileName:"C:/Curately-aws-demo-test/curately-9.6.5/curately-9.6.5/src/components/Dashboard/Settings/CreditLimit/CreditLimit.tsx",lineNumber:564,columnNumber:33},void 0)]},void 0,!0,{fileName:"C:/Curately-aws-demo-test/curately-9.6.5/curately-9.6.5/src/components/Dashboard/Settings/CreditLimit/CreditLimit.tsx",lineNumber:457,columnNumber:29},void 0)},void 0,!1,{fileName:"C:/Curately-aws-demo-test/curately-9.6.5/curately-9.6.5/src/components/Dashboard/Settings/CreditLimit/CreditLimit.tsx",lineNumber:456,columnNumber:25},void 0)},void 0,!1,{fileName:"C:/Curately-aws-demo-test/curately-9.6.5/curately-9.6.5/src/components/Dashboard/Settings/CreditLimit/CreditLimit.tsx",lineNumber:455,columnNumber:21},void 0)},void 0,!1,{fileName:"C:/Curately-aws-demo-test/curately-9.6.5/curately-9.6.5/src/components/Dashboard/Settings/CreditLimit/CreditLimit.tsx",lineNumber:454,columnNumber:17},void 0),e.jsxDEV(A,{size:T?3:0,className:`${T?"":"d-none"}`,children:e.jsxDEV(Ie,{},void 0,!1,{fileName:"C:/Curately-aws-demo-test/curately-9.6.5/curately-9.6.5/src/components/Dashboard/Settings/CreditLimit/CreditLimit.tsx",lineNumber:685,columnNumber:21},void 0)},void 0,!1,{fileName:"C:/Curately-aws-demo-test/curately-9.6.5/curately-9.6.5/src/components/Dashboard/Settings/CreditLimit/CreditLimit.tsx",lineNumber:684,columnNumber:17},void 0)]},void 0,!0,{fileName:"C:/Curately-aws-demo-test/curately-9.6.5/curately-9.6.5/src/components/Dashboard/Settings/CreditLimit/CreditLimit.tsx",lineNumber:453,columnNumber:13},void 0)]},void 0,!0,{fileName:"C:/Curately-aws-demo-test/curately-9.6.5/curately-9.6.5/src/components/Dashboard/Settings/CreditLimit/CreditLimit.tsx",lineNumber:440,columnNumber:9},void 0)};export{ct as default};
