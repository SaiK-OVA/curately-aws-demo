import{r as s,aj as Ee,cc as je,W as K,A as _,L as y,V as E,k as a,bV as Ve,cj as Ie,O as G,S as P,T as Oe,l as Me,B as re}from"./Da4I77gy.js";import{M as Te}from"./DCKGuMgj.js";import{C as Le}from"./CYG5EPlH.js";import{S as Ae}from"./BcvtPrAc.js";import{D as c,A as Pe}from"./Bu7qOu7j.js";import{C as be}from"./BI0SiBuK.js";import{F as Re}from"./3Gqd8Nje.js";import{M as ke}from"./DLV53fDP.js";import{v as Fe}from"./D9g3XlR8.js";import{T as se}from"./D8Uve2Qz.js";import{E as ze}from"./kLLhd3nI.js";import{T as le,C as Be}from"./DrwwBJQC.js";import{L as We,D as fe}from"./D4E8Ilzm.js";import{M as $e}from"./YFmo1cJD.js";import{I as ve}from"./BAhGwoeq.js";import{C as Ke}from"./xlFz-ogz.js";import{S as _e}from"./BV6i5w7m.js";import"./DKbR-AmK.js";import"./DRaa5a1K.js";import"./CNGds3kx.js";import"./CTncTM4t.js";import"./Dw4YnGpZ.js";import"./DtpZK6Fd.js";import"./Cb9wbhoa.js";import"./BSRMXGwI.js";import"./DGAwO83Z.js";import"./M012vGJb.js";import"./DR5LSZrV.js";import"./Ca_RVXIc.js";import"./DGhwAF8n.js";import"./BtfZ3YdN.js";import"./Bt1msObo.js";import"./DVcNEn01.js";import"./DwQ4byYi.js";import"./Bob0wRh9.js";import"./Bfaybex0.js";import"./D7ld7k1a.js";import"./BRh2WteL.js";import"./rYcqsWUw.js";import"./CkTy0Aeu.js";import"./D_Wak6kh.js";import"./MGFt9yJK.js";const At=()=>{const[C,R]=s.useState(!1),[g,U]=s.useState(""),[H,Y]=s.useState(""),[k,ne]=s.useState(""),[f,F]=s.useState([]),[x,J]=s.useState(""),[De,q]=s.useState(!1),[z,v]=s.useState({}),[B,p]=s.useState(0),[he,ye]=s.useState([]),[Je,Ne]=s.useState(),[m,S]=s.useState({pageIndex:0,pageSize:25}),[ce,Q]=s.useState(!1),[X,Z]=s.useState({}),[ee,te]=s.useState(25),ue=s.useRef(!0),[w,Ce]=Ee(),j=s.useRef(w.get("id")?w.get("id"):""),r=s.useRef({divaJobsList:[],rowCount:0,searched:!1,searchJobData:{searchJobName:"",searchJobReferenceNo:"",searchCompanyName:"",startDate:c.now().minus({days:14}),endDate:c.now()},pagination:{pageIndex:0,pageSize:25},searchOffSet:25,searchValue:""});s.useLayoutEffect(()=>{var e,t;if(w.get("id")){j.current=w.get("id");const i=sessionStorage.getItem(`DivaJobs_${j.current}`);i&&je.isJSON(i)&&((t=(e=JSON.parse(i))==null?void 0:e.divaJobsList)!=null&&t.length)?r.current=JSON.parse(i):ue.current=!1}else{let i=Fe();Ce({id:i}),j.current=i}},[w]),s.useEffect(()=>{var e,t,i,o,l,u,n,D,V,I,O,M;ue.current?(F(((e=r==null?void 0:r.current)==null?void 0:e.divaJobsList)||[]),S(((t=r==null?void 0:r.current)==null?void 0:t.pagination)||{pageIndex:0,pageSize:25}),J(((i=r==null?void 0:r.current)==null?void 0:i.searchValue)||""),te(((o=r==null?void 0:r.current)==null?void 0:o.searchOffSet)||25),R(((l=r==null?void 0:r.current)==null?void 0:l.searched)||!1),p(((u=r==null?void 0:r.current)==null?void 0:u.rowCount)||0),U(((D=(n=r==null?void 0:r.current)==null?void 0:n.searchJobData)==null?void 0:D.searchJobName)||""),Y(((I=(V=r==null?void 0:r.current)==null?void 0:V.searchJobData)==null?void 0:I.searchJobReferenceNo)||""),ne(((M=(O=r==null?void 0:r.current)==null?void 0:O.searchJobData)==null?void 0:M.searchCompanyName)||""),W(()=>{var h,T,L,A;return(T=(h=r==null?void 0:r.current)==null?void 0:h.searchJobData)!=null&&T.startDate?c.fromISO((A=(L=r==null?void 0:r.current)==null?void 0:L.searchJobData)==null?void 0:A.startDate):c.now().minus({days:14})}),$(()=>{var h,T,L,A;return(T=(h=r==null?void 0:r.current)==null?void 0:h.searchJobData)!=null&&T.endDate?c.fromISO((A=(L=r==null?void 0:r.current)==null?void 0:L.searchJobData)==null?void 0:A.endDate):c.now()})):ae()},[w]);const N=e=>{const{jobsList:t,totalCount:i,paginationData:o,isSearched:l,jobSearchValue:u,searchOffsetValue:n}=e,D={divaJobsList:t,rowCount:i||B||t.length,searched:l,searchJobData:{searchJobName:[null,void 0].includes(e==null?void 0:e.searchJobName)?g:e==null?void 0:e.searchJobName,searchJobReferenceNo:[null,void 0].includes(e==null?void 0:e.searchJobReferenceNo)?H:e==null?void 0:e.searchJobReferenceNo,searchCompanyName:[null,void 0].includes(e==null?void 0:e.searchCompanyName)?k:e==null?void 0:e.searchCompanyName,startDate:[null,void 0].includes(e==null?void 0:e.startDate)?d:e==null?void 0:e.startDate,endDate:[null,void 0].includes(e==null?void 0:e.endDate)?b:e==null?void 0:e.endDate},pagination:o||m,searchOffSet:n||ee,searchValue:u};sessionStorage.setItem(`DivaJobs_${j.current}`,JSON.stringify(D))},[d,W]=s.useState(c.now().minus({days:14})),[b,$]=s.useState(c.now()),[Ge,ge]=s.useState([]);s.useEffect(()=>{xe()},[]);const xe=()=>{K(_.getCall("ats",`jobDiva/getCompanies/${y.getvalue("clientId")}`).then(e=>{var t;ge(((t=e==null?void 0:e.data)==null?void 0:t.data)||[])}))},ae=()=>{K(_.getCall("ats",`jobDiva/issuedJobsList/${y.getvalue("clientId")}`).then(e=>{var i,o;let t=((i=e==null?void 0:e.data)==null?void 0:i.data)||[];(o=e==null?void 0:e.data)!=null&&o.Success&&(t!=null&&t.length)?(t=t.map(l=>({...l,title:l.TITLE||"",id:l.JOBID||"",company_name:l.COMPANYNAME||"",dateLastModified:l.ISSUEDATE||""})),t=t.sort((l,u)=>{let n=new Date(l.ISSUEDATE);return new Date(u.ISSUEDATE).getTime()-n.getTime()}),F([...t]),p((t==null?void 0:t.length)||0),J(""),N({jobsList:[...t],isSearched:!1,jobSearchValue:"",searchJobName:"",searchJobReferenceNo:"",searchCompanyName:"",startDate:c.now().minus({days:14}),endDate:c.now(),searchOffsetValue:25})):E(e.data.Message?e.data.Message:"An error occured while getting Job List.","error")}))},oe=e=>{const t=(e==null?void 0:e.length)>30?e.slice(0,30):e;return(e==null?void 0:e.length)>30?a.jsxDEV(se,{title:e,children:a.jsxDEV("span",{children:[t,"..."]},void 0,!0,{fileName:"C:/Curately-aws-demo-test/curately-9.6.5/curately-9.6.5/src/components/Dashboard/JobDiva/DivaJobs/DivaJobs.tsx",lineNumber:226,columnNumber:21},void 0)},void 0,!1,{fileName:"C:/Curately-aws-demo-test/curately-9.6.5/curately-9.6.5/src/components/Dashboard/JobDiva/DivaJobs/DivaJobs.tsx",lineNumber:225,columnNumber:17},void 0):a.jsxDEV("span",{children:t},void 0,!1,{fileName:"C:/Curately-aws-demo-test/curately-9.6.5/curately-9.6.5/src/components/Dashboard/JobDiva/DivaJobs/DivaJobs.tsx",lineNumber:229,columnNumber:23},void 0)},me=s.useMemo(()=>{const e=f.filter(t=>t.title.toLowerCase().includes(x.toLowerCase()||""));return p(e.length),e},[x,f]),pe=s.useMemo(()=>[{accessorKey:"JOBDIVANO",header:"JobDiva No",Cell:({row:e})=>oe(e.original.JOBDIVANO),size:70},{accessorKey:"title",header:"Job Title",Cell:({row:e})=>{var o,l;let t=e.original.title?e.original.title:"",i=oe(e.original.title);return(o=e==null?void 0:e.original)!=null&&o.curatelyId?a.jsxDEV(Ve,{className:"hightLightTd",to:`/${y.getvalue("clientName")}/job/view/${(l=e==null?void 0:e.original)==null?void 0:l.curatelyId}`,state:{data:[{text:"Search",link:`/${y.getvalue("clientName")}/Jobdiva/job`},{text:"Jobdiva",link:`/${y.getvalue("clientName")}/Jobdiva/job?id=${j.current}`},{text:t,link:""}]},children:i},void 0,!1,{fileName:"C:/Curately-aws-demo-test/curately-9.6.5/curately-9.6.5/src/components/Dashboard/JobDiva/DivaJobs/DivaJobs.tsx",lineNumber:285,columnNumber:25},void 0):i}},{accessorKey:"company_name",header:"Company Name",Cell:({row:e})=>oe(e.original.company_name)},{accessorKey:"dateLastModified",header:"Issued Date",Cell:({row:e})=>Re.formatMillisecondsToCustomDate(e.original.dateLastModified)},{accessorKey:"curatelyId",header:"Curately",Cell:({row:e})=>{var t;return(t=e==null?void 0:e.original)!=null&&t.curatelyId?a.jsxDEV(se,{title:"Curately",children:a.jsxDEV("span",{className:"ml-4",children:e.original.curatelyId?a.jsxDEV(be,{color:"success"},void 0,!1,{fileName:"C:/Curately-aws-demo-test/curately-9.6.5/curately-9.6.5/src/components/Dashboard/JobDiva/DivaJobs/DivaJobs.tsx",lineNumber:317,columnNumber:54},void 0):""},void 0,!1,{fileName:"C:/Curately-aws-demo-test/curately-9.6.5/curately-9.6.5/src/components/Dashboard/JobDiva/DivaJobs/DivaJobs.tsx",lineNumber:316,columnNumber:21},void 0)},void 0,!1,{fileName:"C:/Curately-aws-demo-test/curately-9.6.5/curately-9.6.5/src/components/Dashboard/JobDiva/DivaJobs/DivaJobs.tsx",lineNumber:315,columnNumber:47},void 0):""},size:80},{accessorKey:"voiceAiEnabled",header:"Voice AI",size:80,Cell:({row:e})=>{var t;return e.original.curatelyId?a.jsxDEV(a.Fragment,{children:(t=e==null?void 0:e.original)!=null&&t.voiceAiEnabled?a.jsxDEV("span",{className:"ml-4",children:[" ",a.jsxDEV(be,{color:"success"},void 0,!1,{fileName:"C:/Curately-aws-demo-test/curately-9.6.5/curately-9.6.5/src/components/Dashboard/JobDiva/DivaJobs/DivaJobs.tsx",lineNumber:332,columnNumber:58},void 0)," "]},void 0,!0,{fileName:"C:/Curately-aws-demo-test/curately-9.6.5/curately-9.6.5/src/components/Dashboard/JobDiva/DivaJobs/DivaJobs.tsx",lineNumber:332,columnNumber:33},void 0):a.jsxDEV(se,{title:"Click here to View Error Message",children:a.jsxDEV("span",{className:"ml-4 errorMsg",style:{cursor:"pointer"},onClick:()=>{var i;Ie({errorMessage:(i=e==null?void 0:e.original)==null?void 0:i.voiceAiReason,title:"VoiceAI - Error Message"})},children:[" ",a.jsxDEV(ze,{color:"error"},void 0,!1,{fileName:"C:/Curately-aws-demo-test/curately-9.6.5/curately-9.6.5/src/components/Dashboard/JobDiva/DivaJobs/DivaJobs.tsx",lineNumber:336,columnNumber:38},void 0),"  "]},void 0,!0,{fileName:"C:/Curately-aws-demo-test/curately-9.6.5/curately-9.6.5/src/components/Dashboard/JobDiva/DivaJobs/DivaJobs.tsx",lineNumber:334,columnNumber:83},void 0)},void 0,!1,{fileName:"C:/Curately-aws-demo-test/curately-9.6.5/curately-9.6.5/src/components/Dashboard/JobDiva/DivaJobs/DivaJobs.tsx",lineNumber:334,columnNumber:33},void 0)},void 0,!1,{fileName:"C:/Curately-aws-demo-test/curately-9.6.5/curately-9.6.5/src/components/Dashboard/JobDiva/DivaJobs/DivaJobs.tsx",lineNumber:330,columnNumber:25},void 0):null}}],[me]),ie=()=>{J("");let e=c.now().plus({days:1});if(g||k||d&&b&&d.startOf("day")<=b.startOf("day")){let t={maxReturned:ee,offset:0,issuedatefrom:d?new Date(d==null?void 0:d.toFormat("yyyy-MM-dd")).toISOString():"",issuedateto:b?new Date(e==null?void 0:e.toFormat("yyyy-MM-dd")).toISOString():"",title:g||"",jobdivaref:H||"",companyname:k||""};K(_.postWithData("ats",`jobDiva/searchJob/${y.getvalue("clientId")}`,t).then(i=>{var l,u;let o=((l=i==null?void 0:i.data)==null?void 0:l.data)||[];(u=i==null?void 0:i.data)!=null&&u.Success&&(o!=null&&o.length)?(R(!0),o=o.map(n=>({...n,title:n["job title"]||"",id:n.id||"",company_name:n.company||"",dateLastModified:n["issue date"]||"",OPTIONALREFERENCENO:n["optional reference"]||"",JOBDIVANO:n["reference #"]||""})),F([...o]),p((o==null?void 0:o.length)||0),N({jobsList:[...o],isSearched:!0,jobSearchValue:""})):(N({jobsList:[],isSearched:!0,jobSearchValue:"",totalCount:0}),F([]),p(0),R(!0))}))}else d?b?d.startOf("day")>b.startOf("day")&&E("Start Date should be less than End Date.","error"):E("Enter Valid End Date.","error"):E("Enter Valid Start Date.","error")},de=e=>{const t=Object.keys(z);let i={atsName:"JobDiva",clientId:y.getvalue("clientId"),recruiterId:y.getvalue("recrId"),moduleName:"Job",atsValues:t};e&&(i=Object.assign({},i,{...i,missingFields:e})),K(_.postWithData("ats","ats/consume",i).then(o=>{var l,u,n,D,V,I,O,M,h;(l=o.data)!=null&&l.Success&&((u=o.data)==null?void 0:u.Status)===200?(E(o.data.Message,"success"),v({}),Q(!1),Z({}),q(!1),C?ie():ae()):(n=o==null?void 0:o.data)!=null&&n.Error&&((D=o==null?void 0:o.data)==null?void 0:D.Status)===400&&((I=(V=o==null?void 0:o.data)==null?void 0:V.data)!=null&&I.missingFields)&&((h=Object.keys((M=(O=o==null?void 0:o.data)==null?void 0:O.data)==null?void 0:M.missingFields))!=null&&h.length)?(Q(!0),Z(o.data.data)):E(o.data.Message?o.data.Message:"An error occured while getting this Push to Curately.","error")}))};s.useEffect(()=>{g&&ie()},[m.pageIndex,m.pageSize]);const Se=async e=>{if(q(e.target.checked),e.target.checked){let t={},i=f;for(let o=0;o<f.length;o++)["",null,void 0,!1].includes(i[o].voiceAiEnabled)&&(t[i[o].id]=!0);v(t)}else v({})},we=()=>{ne(""),U(""),Y(""),W(c.now().minus({days:14})),$(c.now()),S({...m,pageIndex:0}),J(""),v({}),R(!1),ae(),te(25)};return a.jsxDEV("div",{className:"",id:"DivaJobs",children:[a.jsxDEV("div",{className:"",children:[a.jsxDEV(G,{container:!0,direction:"row",justifyContent:"space-between",alignItems:"center",className:"customCard px-4 py-2 mb-2",sx:{minHeight:"auto !important"},children:a.jsxDEV(P,{direction:"row",spacing:3,children:a.jsxDEV(Oe,{variant:"h6",className:"header, pt-1",children:"JobDiva - Issued Jobs List"},void 0,!1,{fileName:"C:/Curately-aws-demo-test/curately-9.6.5/curately-9.6.5/src/components/Dashboard/JobDiva/DivaJobs/DivaJobs.tsx",lineNumber:494,columnNumber:25},void 0)},void 0,!1,{fileName:"C:/Curately-aws-demo-test/curately-9.6.5/curately-9.6.5/src/components/Dashboard/JobDiva/DivaJobs/DivaJobs.tsx",lineNumber:493,columnNumber:21},void 0)},void 0,!1,{fileName:"C:/Curately-aws-demo-test/curately-9.6.5/curately-9.6.5/src/components/Dashboard/JobDiva/DivaJobs/DivaJobs.tsx",lineNumber:485,columnNumber:17},void 0),a.jsxDEV(G,{className:"my-3 customCard ",container:!0,direction:"row",justifyContent:"flex-start",alignItems:"center",children:[a.jsxDEV(P,{direction:"row",spacing:3,style:{paddingRight:"22px"},children:[a.jsxDEV(le,{fullWidth:!0,label:"Job Title",name:"Job Title",id:"JobTitle",size:"small",placeholder:"Search by Job Title",value:g,onChange:e=>U(e.target.value),sx:{"& .MuiInputBase-root":{width:"13rem",py:"1px"}}},void 0,!1,{fileName:"C:/Curately-aws-demo-test/curately-9.6.5/curately-9.6.5/src/components/Dashboard/JobDiva/DivaJobs/DivaJobs.tsx",lineNumber:508,columnNumber:25},void 0),a.jsxDEV(le,{fullWidth:!0,label:"Reference No",name:"Reference No",id:"ReferenceNo",size:"small",placeholder:"Search by Reference No",value:H,onChange:e=>Y(e.target.value),sx:{"& .MuiInputBase-root":{width:"13rem",py:"1px"}}},void 0,!1,{fileName:"C:/Curately-aws-demo-test/curately-9.6.5/curately-9.6.5/src/components/Dashboard/JobDiva/DivaJobs/DivaJobs.tsx",lineNumber:521,columnNumber:25},void 0)]},void 0,!0,{fileName:"C:/Curately-aws-demo-test/curately-9.6.5/curately-9.6.5/src/components/Dashboard/JobDiva/DivaJobs/DivaJobs.tsx",lineNumber:507,columnNumber:21},void 0),a.jsxDEV(P,{direction:"row",spacing:3,children:a.jsxDEV(We,{dateAdapter:Pe,children:a.jsxDEV(G,{container:!0,direction:"row",justifyContent:"flex-start",alignItems:"center",children:[a.jsxDEV(fe,{label:"Start Date",value:d,onChange:e=>{W(e||c.now().minus({days:14}))},slotProps:{textField:{size:"small",fullWidth:!1,InputProps:{style:{textAlign:"center"}}}},maxDate:b,sx:{"& .MuiInputBase-root":{width:"11rem"}}},void 0,!1,{fileName:"C:/Curately-aws-demo-test/curately-9.6.5/curately-9.6.5/src/components/Dashboard/JobDiva/DivaJobs/DivaJobs.tsx",lineNumber:612,columnNumber:33},void 0),a.jsxDEV(Me,{sx:{mx:2},children:" to "},void 0,!1,{fileName:"C:/Curately-aws-demo-test/curately-9.6.5/curately-9.6.5/src/components/Dashboard/JobDiva/DivaJobs/DivaJobs.tsx",lineNumber:638,columnNumber:33},void 0),a.jsxDEV(fe,{label:"End Date",value:b,onChange:e=>{$(e||c.now())},slotProps:{textField:{size:"small",fullWidth:!1,InputProps:{style:{textAlign:"center"}}}},maxDate:c.now(),sx:{"& .MuiInputBase-root":{width:"11rem"}}},void 0,!1,{fileName:"C:/Curately-aws-demo-test/curately-9.6.5/curately-9.6.5/src/components/Dashboard/JobDiva/DivaJobs/DivaJobs.tsx",lineNumber:639,columnNumber:33},void 0)]},void 0,!0,{fileName:"C:/Curately-aws-demo-test/curately-9.6.5/curately-9.6.5/src/components/Dashboard/JobDiva/DivaJobs/DivaJobs.tsx",lineNumber:606,columnNumber:29},void 0)},void 0,!1,{fileName:"C:/Curately-aws-demo-test/curately-9.6.5/curately-9.6.5/src/components/Dashboard/JobDiva/DivaJobs/DivaJobs.tsx",lineNumber:605,columnNumber:25},void 0)},void 0,!1,{fileName:"C:/Curately-aws-demo-test/curately-9.6.5/curately-9.6.5/src/components/Dashboard/JobDiva/DivaJobs/DivaJobs.tsx",lineNumber:604,columnNumber:21},void 0),a.jsxDEV(P,{direction:"row",alignItems:"center",spacing:3,children:a.jsxDEV(le,{fullWidth:!0,select:!0,label:"Max Records",className:"ml-4",size:"small",color:"info",value:ee,onChange:e=>{te(e.target.value)},sx:{"& .MuiInputBase-root":{width:"6rem"}},children:[25,50,100,200,300,400,500].map((e,t)=>a.jsxDEV($e,{value:e,children:e},t,!1,{fileName:"C:/Curately-aws-demo-test/curately-9.6.5/curately-9.6.5/src/components/Dashboard/JobDiva/DivaJobs/DivaJobs.tsx",lineNumber:682,columnNumber:33},void 0))},void 0,!1,{fileName:"C:/Curately-aws-demo-test/curately-9.6.5/curately-9.6.5/src/components/Dashboard/JobDiva/DivaJobs/DivaJobs.tsx",lineNumber:669,columnNumber:25},void 0)},void 0,!1,{fileName:"C:/Curately-aws-demo-test/curately-9.6.5/curately-9.6.5/src/components/Dashboard/JobDiva/DivaJobs/DivaJobs.tsx",lineNumber:668,columnNumber:21},void 0),a.jsxDEV(P,{direction:"row",alignItems:"center",spacing:3,children:[a.jsxDEV(re,{variant:"contained",color:"primary",className:"ml-4",fullWidth:!0,disabled:!(g||k||d||b),onClick:()=>{S({pageIndex:0,pageSize:25}),v({}),p(0),J(""),ie(),N({jobsList:f,jobSearchValue:"",paginationData:{...m,pageIndex:0},isSearched:C})},children:"Search"},void 0,!1,{fileName:"C:/Curately-aws-demo-test/curately-9.6.5/curately-9.6.5/src/components/Dashboard/JobDiva/DivaJobs/DivaJobs.tsx",lineNumber:687,columnNumber:25},void 0),a.jsxDEV(re,{variant:"contained",color:"inherit",className:"ml-4",sx:{textTransform:"capitalize",p:"3px 5px"},fullWidth:!0,disabled:!C,onClick:we,children:"Clear"},void 0,!1,{fileName:"C:/Curately-aws-demo-test/curately-9.6.5/curately-9.6.5/src/components/Dashboard/JobDiva/DivaJobs/DivaJobs.tsx",lineNumber:712,columnNumber:25},void 0)]},void 0,!0,{fileName:"C:/Curately-aws-demo-test/curately-9.6.5/curately-9.6.5/src/components/Dashboard/JobDiva/DivaJobs/DivaJobs.tsx",lineNumber:686,columnNumber:21},void 0)]},void 0,!0,{fileName:"C:/Curately-aws-demo-test/curately-9.6.5/curately-9.6.5/src/components/Dashboard/JobDiva/DivaJobs/DivaJobs.tsx",lineNumber:500,columnNumber:17},void 0),a.jsxDEV("div",{className:"p-4 customCard CardView",children:a.jsxDEV("div",{className:"MRTableCustom pl-0 ",children:[a.jsxDEV(G,{container:!0,className:"actionItems",width:"auto",children:[a.jsxDEV(Be,{className:"select-all-checkbox",disableRipple:!0,color:"default",checked:De,onChange:Se},void 0,!1,{fileName:"C:/Curately-aws-demo-test/curately-9.6.5/curately-9.6.5/src/components/Dashboard/JobDiva/DivaJobs/DivaJobs.tsx",lineNumber:731,columnNumber:29},void 0),a.jsxDEV(re,{variant:"outlined",color:"secondary",className:"mr-2 ml-2",disabled:Object.keys(z).length!==1,onClick:()=>de(),children:"Push to VoiceAI"},void 0,!1,{fileName:"C:/Curately-aws-demo-test/curately-9.6.5/curately-9.6.5/src/components/Dashboard/JobDiva/DivaJobs/DivaJobs.tsx",lineNumber:738,columnNumber:29},void 0)]},void 0,!0,{fileName:"C:/Curately-aws-demo-test/curately-9.6.5/curately-9.6.5/src/components/Dashboard/JobDiva/DivaJobs/DivaJobs.tsx",lineNumber:730,columnNumber:25},void 0),a.jsxDEV(Te,{columns:pe,enableRowSelection:e=>{var t;return["",null,void 0,!1].includes((t=e==null?void 0:e.original)==null?void 0:t.voiceAiEnabled)},data:me,enablePinning:!0,muiSearchTextFieldProps:{placeholder:"Search",sx:{width:"205px",right:"50px",padding:"-10px",height:"20px",marginTop:"-10px",marginRight:"-40px"},value:x,onChange:e=>{S({...m,pageIndex:0}),N({jobsList:f,jobSearchValue:e.target.value,paginationData:{...m,pageIndex:0},isSearched:C}),J(e.target.value)},InputProps:{startAdornment:a.jsxDEV(ve,{position:"start",children:a.jsxDEV(_e,{fontSize:"small",htmlColor:"#757575"},void 0,!1,{fileName:"C:/Curately-aws-demo-test/curately-9.6.5/curately-9.6.5/src/components/Dashboard/JobDiva/DivaJobs/DivaJobs.tsx",lineNumber:768,columnNumber:86},void 0)},void 0,!1,{fileName:"C:/Curately-aws-demo-test/curately-9.6.5/curately-9.6.5/src/components/Dashboard/JobDiva/DivaJobs/DivaJobs.tsx",lineNumber:768,columnNumber:53},void 0),endAdornment:a.jsxDEV(ve,{position:"end",disablePointerEvents:!x,children:a.jsxDEV(Ke,{fontSize:"small",htmlColor:x?"#757575":"#ebebeb",sx:{cursor:"pointer"},onClick:()=>{N({jobsList:f,jobSearchValue:"",isSearched:C}),J("")}},void 0,!1,{fileName:"C:/Curately-aws-demo-test/curately-9.6.5/curately-9.6.5/src/components/Dashboard/JobDiva/DivaJobs/DivaJobs.tsx",lineNumber:770,columnNumber:41},void 0)},void 0,!1,{fileName:"C:/Curately-aws-demo-test/curately-9.6.5/curately-9.6.5/src/components/Dashboard/JobDiva/DivaJobs/DivaJobs.tsx",lineNumber:769,columnNumber:51},void 0)}},initialState:{density:"compact",showGlobalFilter:!0},onColumnFiltersChange:ye,onGlobalFilterChange:Ne,enableDensityToggle:!1,enableFullScreenToggle:!1,columnResizeMode:"onChange",getRowId:e=>e.id,onPaginationChange:S,state:{pagination:m,columnFilters:he,globalFilter:Je,rowSelection:z},rowCount:B,onRowSelectionChange:v,enableStickyHeader:!0,enablePagination:!0,muiPaginationProps:{showFirstButton:!1,showLastButton:!1,SelectProps:{style:{display:"none"}}},muiSelectCheckboxProps:e=>({onChange:t=>{if(e.row.id){let i={...z};t.target.checked?i[e.row.id]=t.target.checked:i.hasOwnProperty(e.row.id)&&delete i[e.row.id],v(i)}}}),renderBottomToolbarCustomActions:()=>a.jsxDEV(Le,{page:m.pageIndex,rowsPerPage:25,rowCount:B,onChangePage:e=>{v({}),q(!1),N({jobsList:f,jobSearchValue:x,paginationData:{...m,pageIndex:e},isSearched:C}),S({...m,pageIndex:e})}},void 0,!1,{fileName:"C:/Curately-aws-demo-test/curately-9.6.5/curately-9.6.5/src/components/Dashboard/JobDiva/DivaJobs/DivaJobs.tsx",lineNumber:832,columnNumber:33},void 0),icons:{ArrowDownwardIcon:e=>a.jsxDEV(Ae,{...e},void 0,!1,{fileName:"C:/Curately-aws-demo-test/curately-9.6.5/curately-9.6.5/src/components/Dashboard/JobDiva/DivaJobs/DivaJobs.tsx",lineNumber:858,columnNumber:37},void 0)}},void 0,!1,{fileName:"C:/Curately-aws-demo-test/curately-9.6.5/curately-9.6.5/src/components/Dashboard/JobDiva/DivaJobs/DivaJobs.tsx",lineNumber:748,columnNumber:25},void 0)]},void 0,!0,{fileName:"C:/Curately-aws-demo-test/curately-9.6.5/curately-9.6.5/src/components/Dashboard/JobDiva/DivaJobs/DivaJobs.tsx",lineNumber:728,columnNumber:21},void 0)},void 0,!1,{fileName:"C:/Curately-aws-demo-test/curately-9.6.5/curately-9.6.5/src/components/Dashboard/JobDiva/DivaJobs/DivaJobs.tsx",lineNumber:726,columnNumber:17},void 0)]},void 0,!0,{fileName:"C:/Curately-aws-demo-test/curately-9.6.5/curately-9.6.5/src/components/Dashboard/JobDiva/DivaJobs/DivaJobs.tsx",lineNumber:484,columnNumber:13},void 0),ce&&a.jsxDEV(ke,{open:ce,closePopup:()=>{Q(!1),Z({})},passedData:X==null?void 0:X.missingFields,handleUpdateToJobDiva:de},void 0,!1,{fileName:"C:/Curately-aws-demo-test/curately-9.6.5/curately-9.6.5/src/components/Dashboard/JobDiva/DivaJobs/DivaJobs.tsx",lineNumber:866,columnNumber:35},void 0)]},void 0,!0,{fileName:"C:/Curately-aws-demo-test/curately-9.6.5/curately-9.6.5/src/components/Dashboard/JobDiva/DivaJobs/DivaJobs.tsx",lineNumber:483,columnNumber:9},void 0)};export{At as default};
