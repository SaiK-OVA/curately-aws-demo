import{r as n,L as F,A as S,k as e,S as t,T as c,n as V,B as L,H as G,O as x,W as K}from"./Da4I77gy.js";import{M as P}from"./DCKGuMgj.js";import{l as J,D as w,g as O}from"./Bu7qOu7j.js";import{G as B}from"./yrrelmb3.js";import{W as q}from"./7Kng7kay.js";import{A as v}from"./CUxQyxqa.js";import{A as U}from"./B0DFcVsN.js";import{C as $}from"./BiHCwA5A.js";import{M as z}from"./BQvNjWLp.js";import{A as E,a as R,b as k}from"./Dh0klti0.js";import{T as Q}from"./D8Uve2Qz.js";import{C as D}from"./DGAwO83Z.js";import{A as X}from"./DwQ4byYi.js";import{T as Y}from"./DrwwBJQC.js";import"./DKbR-AmK.js";import"./DRaa5a1K.js";import"./CNGds3kx.js";import"./D4E8Ilzm.js";import"./DR5LSZrV.js";import"./YFmo1cJD.js";import"./BAhGwoeq.js";import"./CTncTM4t.js";import"./Dw4YnGpZ.js";import"./DtpZK6Fd.js";import"./Cb9wbhoa.js";import"./BSRMXGwI.js";import"./M012vGJb.js";import"./Ca_RVXIc.js";import"./DGhwAF8n.js";import"./BtfZ3YdN.js";import"./Bt1msObo.js";import"./DVcNEn01.js";import"./Bfaybex0.js";import"./rYcqsWUw.js";import"./Bob0wRh9.js";const Z=({onSearch:b,onFiltersChange:d})=>{const[a,A]=n.useState(!1),[l,u]=n.useState({job:"",workflow:""}),[H,h]=n.useState([]),[j,C]=n.useState([]),[r,y]=n.useState([]),o=i=>e.jsxDEV(G,{elevation:3,...i,sx:{"& .MuiAutocomplete-option":{fontWeight:"600",color:"var(--c-text-header)"}}},void 0,!1,{fileName:"C:/Curately-aws-demo-test/curately-9.6.5/curately-9.6.5/src/components/Dashboard/Resume/HiringVolumeApplicants/HiringVolumeFilters/HiringVolumeFilters.tsx",lineNumber:109,columnNumber:16},void 0),m=i=>(s,p)=>{A(p?i:!1)},g=()=>{u({workflow:"",job:""}),b({workflow:"",job:""})},f=(i,s,p)=>{s==null||s.stopPropagation(),u({...l,[i]:""}),b({...l,[i]:""})},I=i=>{u({...l,job:i})},T=i=>{u({...l,workflow:i})},M=()=>{const i={workflow:l.workflow,job:l.job};b(i)},W=n.useCallback(J.debounce((i,s)=>{const p={filterName:i,filterValue:s,clientId:F.getvalue("clientId"),recrId:F.getvalue("recrId")};S.postWithData("admin","applicantsAutomation",p).then(N=>{i==="title"?h(N.data.jobTitles):i==="name"&&C(N.data.jobTitles)})},400),[]);return n.useEffect(()=>{u({workflow:d.workflow,job:d.job})},[d.workflow,d.job]),e.jsxDEV("div",{id:"HiringVolumeFilters",children:[e.jsxDEV("div",{className:"accordian-wrap customFilterChips",children:[e.jsxDEV(t,{direction:"row",justifyContent:"space-between",className:"heading",children:e.jsxDEV(t,{direction:"row",spacing:1,alignItems:"center",children:[e.jsxDEV(c,{component:"h5",children:"Filters"},void 0,!1,{fileName:"C:/Curately-aws-demo-test/curately-9.6.5/curately-9.6.5/src/components/Dashboard/Resume/HiringVolumeApplicants/HiringVolumeFilters/HiringVolumeFilters.tsx",lineNumber:207,columnNumber:25},void 0),(l.workflow!==""||l.job!=="")&&e.jsxDEV(t,{className:"clearStack",direction:"row",justifyContent:"space-around",onClick:g,children:[e.jsxDEV(V,{},void 0,!1,{fileName:"C:/Curately-aws-demo-test/curately-9.6.5/curately-9.6.5/src/components/Dashboard/Resume/HiringVolumeApplicants/HiringVolumeFilters/HiringVolumeFilters.tsx",lineNumber:217,columnNumber:33},void 0),e.jsxDEV(c,{children:(l.workflow!==""?1:0)+(l.job!==""?1:0)},void 0,!1,{fileName:"C:/Curately-aws-demo-test/curately-9.6.5/curately-9.6.5/src/components/Dashboard/Resume/HiringVolumeApplicants/HiringVolumeFilters/HiringVolumeFilters.tsx",lineNumber:218,columnNumber:33},void 0)]},void 0,!0,{fileName:"C:/Curately-aws-demo-test/curately-9.6.5/curately-9.6.5/src/components/Dashboard/Resume/HiringVolumeApplicants/HiringVolumeFilters/HiringVolumeFilters.tsx",lineNumber:211,columnNumber:29},void 0)]},void 0,!0,{fileName:"C:/Curately-aws-demo-test/curately-9.6.5/curately-9.6.5/src/components/Dashboard/Resume/HiringVolumeApplicants/HiringVolumeFilters/HiringVolumeFilters.tsx",lineNumber:206,columnNumber:21},void 0)},void 0,!1,{fileName:"C:/Curately-aws-demo-test/curately-9.6.5/curately-9.6.5/src/components/Dashboard/Resume/HiringVolumeApplicants/HiringVolumeFilters/HiringVolumeFilters.tsx",lineNumber:205,columnNumber:17},void 0),e.jsxDEV("div",{className:"filterListTab",children:[e.jsxDEV(E,{disableGutters:!0,square:!0,expanded:a==="panel2",onChange:m("panel2"),children:[e.jsxDEV(R,{expandIcon:e.jsxDEV(v,{},void 0,!1,{fileName:"C:/Curately-aws-demo-test/curately-9.6.5/curately-9.6.5/src/components/Dashboard/Resume/HiringVolumeApplicants/HiringVolumeFilters/HiringVolumeFilters.tsx",lineNumber:230,columnNumber:41},void 0),"aria-controls":"panel2bh-content",id:"panel2bh-header",children:e.jsxDEV(t,{sx:{width:"100%"},children:[e.jsxDEV(t,{className:"acc-title",direction:"row",justifyContent:"space-between",children:[e.jsxDEV(t,{direction:"row",alignItems:"center",children:[e.jsxDEV(q,{className:"title-icon"},void 0,!1,{fileName:"C:/Curately-aws-demo-test/curately-9.6.5/curately-9.6.5/src/components/Dashboard/Resume/HiringVolumeApplicants/HiringVolumeFilters/HiringVolumeFilters.tsx",lineNumber:237,columnNumber:41},void 0),e.jsxDEV(c,{children:"Job"},void 0,!1,{fileName:"C:/Curately-aws-demo-test/curately-9.6.5/curately-9.6.5/src/components/Dashboard/Resume/HiringVolumeApplicants/HiringVolumeFilters/HiringVolumeFilters.tsx",lineNumber:238,columnNumber:41},void 0)]},void 0,!0,{fileName:"C:/Curately-aws-demo-test/curately-9.6.5/curately-9.6.5/src/components/Dashboard/Resume/HiringVolumeApplicants/HiringVolumeFilters/HiringVolumeFilters.tsx",lineNumber:236,columnNumber:37},void 0),l.job!==""&&e.jsxDEV(t,{className:"clearStack",direction:"row",justifyContent:"space-around",onClick:i=>f("job",i),children:[e.jsxDEV(V,{},void 0,!1,{fileName:"C:/Curately-aws-demo-test/curately-9.6.5/curately-9.6.5/src/components/Dashboard/Resume/HiringVolumeApplicants/HiringVolumeFilters/HiringVolumeFilters.tsx",lineNumber:246,columnNumber:41},void 0),e.jsxDEV(c,{children:l.job!==""?1:0},void 0,!1,{fileName:"C:/Curately-aws-demo-test/curately-9.6.5/curately-9.6.5/src/components/Dashboard/Resume/HiringVolumeApplicants/HiringVolumeFilters/HiringVolumeFilters.tsx",lineNumber:247,columnNumber:41},void 0)]},void 0,!0,{fileName:"C:/Curately-aws-demo-test/curately-9.6.5/curately-9.6.5/src/components/Dashboard/Resume/HiringVolumeApplicants/HiringVolumeFilters/HiringVolumeFilters.tsx",lineNumber:240,columnNumber:65},void 0)]},void 0,!0,{fileName:"C:/Curately-aws-demo-test/curately-9.6.5/curately-9.6.5/src/components/Dashboard/Resume/HiringVolumeApplicants/HiringVolumeFilters/HiringVolumeFilters.tsx",lineNumber:235,columnNumber:33},void 0),l.job!==""&&a!=="panel2"&&e.jsxDEV(t,{direction:"row",mt:1,flexWrap:"wrap",children:[e.jsxDEV("div",{className:"filterLabelName",children:"Title:"},void 0,!1,{fileName:"C:/Curately-aws-demo-test/curately-9.6.5/curately-9.6.5/src/components/Dashboard/Resume/HiringVolumeApplicants/HiringVolumeFilters/HiringVolumeFilters.tsx",lineNumber:255,columnNumber:41},void 0),e.jsxDEV(Q,{title:`${l.job}`,placement:"bottom",children:e.jsxDEV(D,{label:l.job,icon:e.jsxDEV(V,{},void 0,!1,{fileName:"C:/Curately-aws-demo-test/curately-9.6.5/curately-9.6.5/src/components/Dashboard/Resume/HiringVolumeApplicants/HiringVolumeFilters/HiringVolumeFilters.tsx",lineNumber:257,columnNumber:80},void 0),className:"selectedChips",onClick:i=>f("job",i)},void 0,!1,{fileName:"C:/Curately-aws-demo-test/curately-9.6.5/curately-9.6.5/src/components/Dashboard/Resume/HiringVolumeApplicants/HiringVolumeFilters/HiringVolumeFilters.tsx",lineNumber:257,columnNumber:45},void 0)},void 0,!1,{fileName:"C:/Curately-aws-demo-test/curately-9.6.5/curately-9.6.5/src/components/Dashboard/Resume/HiringVolumeApplicants/HiringVolumeFilters/HiringVolumeFilters.tsx",lineNumber:256,columnNumber:41},void 0)]},void 0,!0,{fileName:"C:/Curately-aws-demo-test/curately-9.6.5/curately-9.6.5/src/components/Dashboard/Resume/HiringVolumeApplicants/HiringVolumeFilters/HiringVolumeFilters.tsx",lineNumber:254,columnNumber:37},void 0)]},void 0,!0,{fileName:"C:/Curately-aws-demo-test/curately-9.6.5/curately-9.6.5/src/components/Dashboard/Resume/HiringVolumeApplicants/HiringVolumeFilters/HiringVolumeFilters.tsx",lineNumber:234,columnNumber:29},void 0)},void 0,!1,{fileName:"C:/Curately-aws-demo-test/curately-9.6.5/curately-9.6.5/src/components/Dashboard/Resume/HiringVolumeApplicants/HiringVolumeFilters/HiringVolumeFilters.tsx",lineNumber:229,columnNumber:25},void 0),e.jsxDEV(k,{children:e.jsxDEV(X,{id:"job",options:H.map(i=>i),value:l.job,freeSolo:!0,renderTags:(i,s)=>i.map((p,N)=>e.jsxDEV(D,{variant:"outlined",label:p.label,...s({index:N})},void 0,!1,{fileName:"C:/Curately-aws-demo-test/curately-9.6.5/curately-9.6.5/src/components/Dashboard/Resume/HiringVolumeApplicants/HiringVolumeFilters/HiringVolumeFilters.tsx",lineNumber:271,columnNumber:41},void 0)),renderInput:i=>e.jsxDEV(Y,{...i,variant:"outlined",placeholder:"Enter job title..."},void 0,!1,{fileName:"C:/Curately-aws-demo-test/curately-9.6.5/curately-9.6.5/src/components/Dashboard/Resume/HiringVolumeApplicants/HiringVolumeFilters/HiringVolumeFilters.tsx",lineNumber:275,columnNumber:37},void 0),PaperComponent:o,onChange:(i,s)=>s?I(s):"",onKeyUp:i=>W("title",i.target.value),clearIcon:e.jsxDEV($,{fontSize:"small",onClick:i=>f("job",i)},void 0,!1,{fileName:"C:/Curately-aws-demo-test/curately-9.6.5/curately-9.6.5/src/components/Dashboard/Resume/HiringVolumeApplicants/HiringVolumeFilters/HiringVolumeFilters.tsx",lineNumber:285,columnNumber:37},void 0)},void 0,!1,{fileName:"C:/Curately-aws-demo-test/curately-9.6.5/curately-9.6.5/src/components/Dashboard/Resume/HiringVolumeApplicants/HiringVolumeFilters/HiringVolumeFilters.tsx",lineNumber:264,columnNumber:29},void 0)},void 0,!1,{fileName:"C:/Curately-aws-demo-test/curately-9.6.5/curately-9.6.5/src/components/Dashboard/Resume/HiringVolumeApplicants/HiringVolumeFilters/HiringVolumeFilters.tsx",lineNumber:263,columnNumber:25},void 0)]},void 0,!0,{fileName:"C:/Curately-aws-demo-test/curately-9.6.5/curately-9.6.5/src/components/Dashboard/Resume/HiringVolumeApplicants/HiringVolumeFilters/HiringVolumeFilters.tsx",lineNumber:228,columnNumber:21},void 0),e.jsxDEV(E,{disableGutters:!0,square:!0,expanded:a==="panel1",onChange:m("panel1"),children:[e.jsxDEV(R,{expandIcon:e.jsxDEV(v,{},void 0,!1,{fileName:"C:/Curately-aws-demo-test/curately-9.6.5/curately-9.6.5/src/components/Dashboard/Resume/HiringVolumeApplicants/HiringVolumeFilters/HiringVolumeFilters.tsx",lineNumber:291,columnNumber:41},void 0),"aria-controls":"panel1bh-content",id:"panel1bh-header",children:e.jsxDEV(t,{sx:{width:"100%"},children:[e.jsxDEV(t,{className:"acc-title",direction:"row",justifyContent:"space-between",children:[e.jsxDEV(t,{direction:"row",alignItems:"center",children:[e.jsxDEV(U,{className:"title-icon"},void 0,!1,{fileName:"C:/Curately-aws-demo-test/curately-9.6.5/curately-9.6.5/src/components/Dashboard/Resume/HiringVolumeApplicants/HiringVolumeFilters/HiringVolumeFilters.tsx",lineNumber:298,columnNumber:41},void 0),e.jsxDEV(c,{children:"WorkFlow"},void 0,!1,{fileName:"C:/Curately-aws-demo-test/curately-9.6.5/curately-9.6.5/src/components/Dashboard/Resume/HiringVolumeApplicants/HiringVolumeFilters/HiringVolumeFilters.tsx",lineNumber:299,columnNumber:41},void 0)]},void 0,!0,{fileName:"C:/Curately-aws-demo-test/curately-9.6.5/curately-9.6.5/src/components/Dashboard/Resume/HiringVolumeApplicants/HiringVolumeFilters/HiringVolumeFilters.tsx",lineNumber:297,columnNumber:37},void 0),l.workflow!==""&&e.jsxDEV(t,{className:"clearStack",direction:"row",justifyContent:"space-around",onClick:i=>f("workflow",i),children:[e.jsxDEV(V,{},void 0,!1,{fileName:"C:/Curately-aws-demo-test/curately-9.6.5/curately-9.6.5/src/components/Dashboard/Resume/HiringVolumeApplicants/HiringVolumeFilters/HiringVolumeFilters.tsx",lineNumber:307,columnNumber:41},void 0),e.jsxDEV(c,{children:l.workflow!==""&&1},void 0,!1,{fileName:"C:/Curately-aws-demo-test/curately-9.6.5/curately-9.6.5/src/components/Dashboard/Resume/HiringVolumeApplicants/HiringVolumeFilters/HiringVolumeFilters.tsx",lineNumber:308,columnNumber:41},void 0)]},void 0,!0,{fileName:"C:/Curately-aws-demo-test/curately-9.6.5/curately-9.6.5/src/components/Dashboard/Resume/HiringVolumeApplicants/HiringVolumeFilters/HiringVolumeFilters.tsx",lineNumber:301,columnNumber:70},void 0)]},void 0,!0,{fileName:"C:/Curately-aws-demo-test/curately-9.6.5/curately-9.6.5/src/components/Dashboard/Resume/HiringVolumeApplicants/HiringVolumeFilters/HiringVolumeFilters.tsx",lineNumber:296,columnNumber:33},void 0),l.workflow!==""&&a!=="panel1"&&e.jsxDEV(t,{direction:"row",mt:1,flexWrap:"wrap",children:[e.jsxDEV("div",{className:"filterLabelName",children:"Workflowe:"},void 0,!1,{fileName:"C:/Curately-aws-demo-test/curately-9.6.5/curately-9.6.5/src/components/Dashboard/Resume/HiringVolumeApplicants/HiringVolumeFilters/HiringVolumeFilters.tsx",lineNumber:316,columnNumber:41},void 0),e.jsxDEV(D,{label:l.workflow,icon:e.jsxDEV(V,{},void 0,!1,{fileName:"C:/Curately-aws-demo-test/curately-9.6.5/curately-9.6.5/src/components/Dashboard/Resume/HiringVolumeApplicants/HiringVolumeFilters/HiringVolumeFilters.tsx",lineNumber:317,columnNumber:81},void 0),onClick:i=>f("workflow",i)},void 0,!1,{fileName:"C:/Curately-aws-demo-test/curately-9.6.5/curately-9.6.5/src/components/Dashboard/Resume/HiringVolumeApplicants/HiringVolumeFilters/HiringVolumeFilters.tsx",lineNumber:317,columnNumber:41},void 0)]},void 0,!0,{fileName:"C:/Curately-aws-demo-test/curately-9.6.5/curately-9.6.5/src/components/Dashboard/Resume/HiringVolumeApplicants/HiringVolumeFilters/HiringVolumeFilters.tsx",lineNumber:315,columnNumber:37},void 0)]},void 0,!0,{fileName:"C:/Curately-aws-demo-test/curately-9.6.5/curately-9.6.5/src/components/Dashboard/Resume/HiringVolumeApplicants/HiringVolumeFilters/HiringVolumeFilters.tsx",lineNumber:295,columnNumber:29},void 0)},void 0,!1,{fileName:"C:/Curately-aws-demo-test/curately-9.6.5/curately-9.6.5/src/components/Dashboard/Resume/HiringVolumeApplicants/HiringVolumeFilters/HiringVolumeFilters.tsx",lineNumber:290,columnNumber:25},void 0),e.jsxDEV(k,{children:e.jsxDEV(z,{id:"workflowId",handleChange:(i,s)=>{T(i)},valuePassed:l.workflow,isMultiple:!1,textToShow:"Select Workflow",width:"100%",type:"workflow",placeholder:"Select Workflow"},void 0,!1,{fileName:"C:/Curately-aws-demo-test/curately-9.6.5/curately-9.6.5/src/components/Dashboard/Resume/HiringVolumeApplicants/HiringVolumeFilters/HiringVolumeFilters.tsx",lineNumber:323,columnNumber:29},void 0)},void 0,!1,{fileName:"C:/Curately-aws-demo-test/curately-9.6.5/curately-9.6.5/src/components/Dashboard/Resume/HiringVolumeApplicants/HiringVolumeFilters/HiringVolumeFilters.tsx",lineNumber:322,columnNumber:25},void 0)]},void 0,!0,{fileName:"C:/Curately-aws-demo-test/curately-9.6.5/curately-9.6.5/src/components/Dashboard/Resume/HiringVolumeApplicants/HiringVolumeFilters/HiringVolumeFilters.tsx",lineNumber:289,columnNumber:21},void 0)]},void 0,!0,{fileName:"C:/Curately-aws-demo-test/curately-9.6.5/curately-9.6.5/src/components/Dashboard/Resume/HiringVolumeApplicants/HiringVolumeFilters/HiringVolumeFilters.tsx",lineNumber:227,columnNumber:17},void 0)]},void 0,!0,{fileName:"C:/Curately-aws-demo-test/curately-9.6.5/curately-9.6.5/src/components/Dashboard/Resume/HiringVolumeApplicants/HiringVolumeFilters/HiringVolumeFilters.tsx",lineNumber:204,columnNumber:13},void 0),e.jsxDEV("div",{className:"filterBtnWrap",children:e.jsxDEV(L,{variant:"text",onClick:M,children:"Apply Filters"},void 0,!1,{fileName:"C:/Curately-aws-demo-test/curately-9.6.5/curately-9.6.5/src/components/Dashboard/Resume/HiringVolumeApplicants/HiringVolumeFilters/HiringVolumeFilters.tsx",lineNumber:364,columnNumber:17},void 0)},void 0,!1,{fileName:"C:/Curately-aws-demo-test/curately-9.6.5/curately-9.6.5/src/components/Dashboard/Resume/HiringVolumeApplicants/HiringVolumeFilters/HiringVolumeFilters.tsx",lineNumber:363,columnNumber:13},void 0)]},void 0,!0,{fileName:"C:/Curately-aws-demo-test/curately-9.6.5/curately-9.6.5/src/components/Dashboard/Resume/HiringVolumeApplicants/HiringVolumeFilters/HiringVolumeFilters.tsx",lineNumber:203,columnNumber:9},void 0)},Ie=()=>{const[b,d]=n.useState([]),[a,A]=n.useState(!1),[l,u]=n.useState({job:"",workflow:""}),H=r=>{window.open(O.getWindowLocation()+"candidate/view/"+r)},h=()=>{let r=F.getvalue("clientId");const y={startDate:w.now().minus({month:6}).toFormat("MM/dd/yyyy"),endDate:w.now().toFormat("MM/dd/yyyy"),clientId:r};K(S.postWithData("admin","applicantsHighvolumeHiring",y).then(o=>{var m,g;console.log(o),d((g=(m=o.data)==null?void 0:m.ApplicantsHighvolumeHiring)!=null&&g.length?o.data.ApplicantsHighvolumeHiring:[])}).catch(o=>{console.error("Error fetching applicants:",o)}))};n.useEffect(()=>{h()},[]);const j=n.useMemo(()=>[{accessorKey:"candname",header:"Name",Cell:({row:r})=>e.jsxDEV("span",{className:"hightLightTd",onClick:()=>H(r.original.candid),children:r.original.candname.toLowerCase()},void 0,!1,{fileName:"C:/Curately-aws-demo-test/curately-9.6.5/curately-9.6.5/src/components/Dashboard/Resume/HiringVolumeApplicants/HiringVolumeApplicants.tsx",lineNumber:78,columnNumber:21},void 0)},{accessorKey:"jobtitle",header:"Job",Cell:({row:r})=>e.jsxDEV("span",{children:r.original.jobtitle},void 0,!1,{fileName:"C:/Curately-aws-demo-test/curately-9.6.5/curately-9.6.5/src/components/Dashboard/Resume/HiringVolumeApplicants/HiringVolumeApplicants.tsx",lineNumber:86,columnNumber:21},void 0)},{accessorKey:"WorkFlowName",header:"Workflow",Cell:({row:r})=>e.jsxDEV("span",{children:r.original.WorkFlowName},void 0,!1,{fileName:"C:/Curately-aws-demo-test/curately-9.6.5/curately-9.6.5/src/components/Dashboard/Resume/HiringVolumeApplicants/HiringVolumeApplicants.tsx",lineNumber:93,columnNumber:21},void 0)},{accessorKey:"StageName",header:"Stages",Cell:({row:r})=>{const y=r.original.StageName.split(", ");return e.jsxDEV("div",{style:{display:"flex",flexDirection:"column"},children:y.map((o,m)=>e.jsxDEV("div",{style:{display:"flex",alignItems:"center"},children:o},m,!1,{fileName:"C:/Curately-aws-demo-test/curately-9.6.5/curately-9.6.5/src/components/Dashboard/Resume/HiringVolumeApplicants/HiringVolumeApplicants.tsx",lineNumber:104,columnNumber:33},void 0))},void 0,!1,{fileName:"C:/Curately-aws-demo-test/curately-9.6.5/curately-9.6.5/src/components/Dashboard/Resume/HiringVolumeApplicants/HiringVolumeApplicants.tsx",lineNumber:102,columnNumber:25},void 0)}},{accessorKey:"Savedt",header:"Date",Cell:({row:r})=>e.jsxDEV("span",{children:w.fromFormat(r.original.Savedt.substring(0,19),"yyyy-MM-dd hh:mm:ss").toFormat("MM/dd/yyyy ")},void 0,!1,{fileName:"C:/Curately-aws-demo-test/curately-9.6.5/curately-9.6.5/src/components/Dashboard/Resume/HiringVolumeApplicants/HiringVolumeApplicants.tsx",lineNumber:117,columnNumber:21},void 0)}],[]),C=r=>{u({job:r.job,workflow:""})};return e.jsxDEV("div",{id:"hiringVolumeApplicants",children:e.jsxDEV(x,{container:!0,className:"customCard p-0 filterExpand-grid mt-4",children:[e.jsxDEV(x,{sx:{width:a?0:310,overflow:"hidden",opacity:a?0:1},children:[e.jsxDEV(t,{direction:"row",className:"applicantsFilterHead",children:[e.jsxDEV(B,{},void 0,!1,{fileName:"C:/Curately-aws-demo-test/curately-9.6.5/curately-9.6.5/src/components/Dashboard/Resume/HiringVolumeApplicants/HiringVolumeApplicants.tsx",lineNumber:160,columnNumber:25},void 0),e.jsxDEV(c,{component:"h5",children:"Applicants"},void 0,!1,{fileName:"C:/Curately-aws-demo-test/curately-9.6.5/curately-9.6.5/src/components/Dashboard/Resume/HiringVolumeApplicants/HiringVolumeApplicants.tsx",lineNumber:161,columnNumber:25},void 0)]},void 0,!0,{fileName:"C:/Curately-aws-demo-test/curately-9.6.5/curately-9.6.5/src/components/Dashboard/Resume/HiringVolumeApplicants/HiringVolumeApplicants.tsx",lineNumber:159,columnNumber:21},void 0),e.jsxDEV(Z,{onSearch:C,onFiltersChange:l},void 0,!1,{fileName:"C:/Curately-aws-demo-test/curately-9.6.5/curately-9.6.5/src/components/Dashboard/Resume/HiringVolumeApplicants/HiringVolumeApplicants.tsx",lineNumber:163,columnNumber:21},void 0)]},void 0,!0,{fileName:"C:/Curately-aws-demo-test/curately-9.6.5/curately-9.6.5/src/components/Dashboard/Resume/HiringVolumeApplicants/HiringVolumeApplicants.tsx",lineNumber:158,columnNumber:17},void 0),e.jsxDEV(x,{sx:{width:a?"calc(100%)":"calc(100% - 310px)"},children:e.jsxDEV("div",{className:`MRTableCustom ${a?"pl-0":""}`,children:e.jsxDEV("div",{className:"MRTableCustom pl-0",children:e.jsxDEV(P,{columns:j,data:b,initialState:{density:"compact",showGlobalFilter:!1},enableFilters:!1,enableGlobalFilterModes:!0},void 0,!1,{fileName:"C:/Curately-aws-demo-test/curately-9.6.5/curately-9.6.5/src/components/Dashboard/Resume/HiringVolumeApplicants/HiringVolumeApplicants.tsx",lineNumber:171,columnNumber:29},void 0)},void 0,!1,{fileName:"C:/Curately-aws-demo-test/curately-9.6.5/curately-9.6.5/src/components/Dashboard/Resume/HiringVolumeApplicants/HiringVolumeApplicants.tsx",lineNumber:168,columnNumber:25},void 0)},void 0,!1,{fileName:"C:/Curately-aws-demo-test/curately-9.6.5/curately-9.6.5/src/components/Dashboard/Resume/HiringVolumeApplicants/HiringVolumeApplicants.tsx",lineNumber:166,columnNumber:21},void 0)},void 0,!1,{fileName:"C:/Curately-aws-demo-test/curately-9.6.5/curately-9.6.5/src/components/Dashboard/Resume/HiringVolumeApplicants/HiringVolumeApplicants.tsx",lineNumber:165,columnNumber:17},void 0)]},void 0,!0,{fileName:"C:/Curately-aws-demo-test/curately-9.6.5/curately-9.6.5/src/components/Dashboard/Resume/HiringVolumeApplicants/HiringVolumeApplicants.tsx",lineNumber:157,columnNumber:13},void 0)},void 0,!1,{fileName:"C:/Curately-aws-demo-test/curately-9.6.5/curately-9.6.5/src/components/Dashboard/Resume/HiringVolumeApplicants/HiringVolumeApplicants.tsx",lineNumber:156,columnNumber:9},void 0)};export{Ie as default};
