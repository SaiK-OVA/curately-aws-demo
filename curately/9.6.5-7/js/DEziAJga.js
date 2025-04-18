import{r as d,k as e,l as k,S as G,O as h,A as x,L as m,V as i}from"./Da4I77gy.js";import{f as U,d as L,g as A}from"./BktpiT-y.js";import{a as O}from"./D8xWqXbL.js";import{A as q}from"./Bw2Rwgey.js";import{L as $}from"./JSL5Psgw.js";import{C as b}from"./D-E8YUBN.js";import{T as J}from"./DrwwBJQC.js";import{M as I}from"./YFmo1cJD.js";import"./6vuVcGup.js";import"./DR5LSZrV.js";const R=({id:g,data:C,name:v,dateformat:E,height:K,width:P,dayOrMonth:w="day",labels:M})=>(d.useLayoutEffect(()=>{var o;let s=U({id:g});s.setThemes([q.new(s)]);let p=s.container.children.push(O.XYChart.new(s,{panX:!0,panY:!0,wheelX:"panX",wheelY:"zoomX",layout:s.verticalLayout}));(o=p.get("colors"))==null||o.set("step",3);let B=p.xAxes.push(O.DateAxis.new(s,{maxDeviation:.3,groupData:!1,baseInterval:{timeUnit:w,count:1},renderer:O.AxisRendererX.new(s,{minorGridEnabled:!0,minGridDistance:50}),tooltip:L.new(s,{})})),T=p.yAxes.push(O.ValueAxis.new(s,{maxDeviation:.3,renderer:O.AxisRendererY.new(s,{})}));const j=p.children.push($.new(s,{centerX:A,x:A,layout:s.horizontalLayout}));for(let f=0;f<C.length;f++){let y=p.series.push(O.LineSeries.new(s,{name:`${M[f]}`,xAxis:B,yAxis:T,valueYField:"value",valueXField:"date",tooltip:L.new(s,{labelText:"{valueX}: {valueY}: {value}"})}));console.log(C[f]),y.data.setAll(C[f]),j.data.push(y)}return s.dateFormatter.setAll({dateFormat:E,dateFields:["valueX"]}),p.appear(1e3,100),()=>{s.dispose()}},[C]),e.jsxDEV(k,{className:"",id:g,style:{height:K||"250px",width:P||"100%"},children:v&&e.jsxDEV("p",{className:"fs-14",children:e.jsxDEV("strong",{children:v},void 0,!1,{fileName:"C:/Curately-aws-demo-test/curately-9.6.5/curately-9.6.5/src/components/Dashboard/Reports/Charts/Demo/LineSerieswithDynamicData/LineSerieswithDynamicData.tsx",lineNumber:110,columnNumber:37},void 0)},void 0,!1,{fileName:"C:/Curately-aws-demo-test/curately-9.6.5/curately-9.6.5/src/components/Dashboard/Reports/Charts/Demo/LineSerieswithDynamicData/LineSerieswithDynamicData.tsx",lineNumber:110,columnNumber:16},void 0)},void 0,!1,{fileName:"C:/Curately-aws-demo-test/curately-9.6.5/curately-9.6.5/src/components/Dashboard/Reports/Charts/Demo/LineSerieswithDynamicData/LineSerieswithDynamicData.tsx",lineNumber:106,columnNumber:5},void 0)),oe=g=>{const[C,v]=d.useState([]),[E,K]=d.useState([]),[P,w]=d.useState([]),[M,s]=d.useState([]),[p,B]=d.useState([]),[T,j]=d.useState({}),[o,f]=d.useState("LAST 30 DAYS"),[y,V]=d.useState("yyyy-MM-DD"),[N,D]=d.useState({openRateByMonth:[],replyRateByMonth:[],openRateByTeamMember:[],replyRateByTeamMember:[],openRateByCampaign:[],replyRateByCampaign:[],selectedDate:[],dateFormat:[],chartLabels:[]}),F=()=>{x.postWithData("admin","getOpenrateByMonth",{clientId:m.getvalue("clientId"),recrId:m.getvalue("recrId"),filterDurationType:o}).then(t=>{var u;if(t.data.data&&t.data.Success){let l=[];const n=[];(u=t.data)==null||u.data.forEach(a=>{n.push({date:new Date(a.monthOrDate).getTime(),value:a.openedEmailCount})}),l.push(n);let r=["Open Rate"];v(l),D(a=>({...a,openRateByMonth:r}))}else i("Failed to fetch data","error")}).catch(t=>{i("Error fetching data - "+t,"error")})},z=()=>{x.postWithData("admin","getReplyrateByMonth",{clientId:m.getvalue("clientId"),recrId:m.getvalue("recrId"),filterDurationType:o}).then(t=>{var u;if(t.data.data&&t.data.Success){let l=[];const n=[];(u=t.data)==null||u.data.forEach(a=>{n.push({date:new Date(a.monthOrDate).getTime(),value:a.repliedEmailCount})}),l.push(n);let r=["Reply Rate"];K(l),D(a=>({...a,replyRateByMonth:r}))}else i("Failed to fetch data","error")}).catch(t=>{i("Error fetching data - "+t,"error")})},X=()=>{x.postWithData("admin","getOpenrateByTeamMember",{clientId:m.getvalue("clientId"),recrId:m.getvalue("recrId"),filterDurationType:o}).then(t=>{var u;if(t.data.Success){const l=(u=t.data)==null?void 0:u.data;let n=[],r=[];l.forEach(a=>{const c=[];r.push(a.fullName),a.data.forEach(S=>{c.push({date:new Date(S.monthOrDate).getTime(),value:S.openedEmailCount})}),n.push(c)}),w(n),D(a=>({...a,openRateByTeamMember:r}))}else i("Failed to fetch data ","error")}).catch(t=>{i("Error fetching data - "+t,"error")})},W=()=>{x.postWithData("admin","getReplyrateByTeamMember",{clientId:m.getvalue("clientId"),recrId:m.getvalue("recrId"),filterDurationType:o}).then(t=>{if(t.data.Success){const u=t.data.data;let l=[],n=[];u.forEach(r=>{const a=[];n.push(r.fullName),r.data.forEach(c=>{a.push({date:new Date(c.monthOrDate).getTime(),value:c.repliedEmailCount})}),l.push(a)}),s(l),D(r=>({...r,replyRateByTeamMember:n}))}else i("Failed to fetch data ","error")}).catch(t=>{i("Error fetching data - "+t,"error")})},Y=()=>{x.postWithData("admin","getOpenrateByCampaign",{clientId:m.getvalue("clientId"),recrId:m.getvalue("recrId"),filterDurationType:o}).then(t=>{if(t.data.Success){const u=t.data.data;let l=[],n=[];u.forEach(r=>{const a=[];n.push(r.sequenceName),r.data.forEach(c=>{a.push({date:new Date(c.monthOrDate).getTime(),value:c.openedEmailCount})}),l.push(a),D(c=>({...c,openRateByCampaign:n}))}),B(l)}else i("Failed to fetch data ","error")}).catch(t=>{i("Error fetching data - "+t,"error")})},H=()=>{x.postWithData("admin","getReplyrateByCampaign",{clientId:m.getvalue("clientId"),recrId:m.getvalue("recrId"),filterDurationType:o}).then(t=>{if(t.data.Success){const u=t.data.data;let l=[],n=[];u.forEach(r=>{const a=[];n.push(r.sequenceName),r.data.forEach(c=>{a.push({date:new Date(c.monthOrDate).getTime(),value:c.repliedEmailCount})}),l.push(a)}),j(l),D(r=>({...r,replyRateByCampaign:n}))}else i("Failed to fetch data ","error")}).catch(t=>{i("Error fetching data - "+t,"error")})};return d.useEffect(()=>{F(),z(),X(),W(),Y(),H()},[o]),d.useEffect(()=>{V(o==="LAST 6 MONTHS"||o==="LAST 12 MONTHS"?"yyyy-MM":"yyyy-MM-DD")},[o]),e.jsxDEV("div",{id:"OutreachKPI",children:e.jsxDEV(b,{className:"customCard  mt-5",style:{backgroundColor:"var(--c-neutral-10) !important"},children:[e.jsxDEV("div",{className:"outreachBox",children:[e.jsxDEV("div",{className:"sourcingHeader",children:e.jsxDEV(G,{direction:"row",spacing:1,alignItems:"center",style:{marginTop:"20px",marginLeft:"10px"},children:e.jsxDEV("h4",{className:"content",children:"Outreach KPI"},void 0,!1,{fileName:"C:/Curately-aws-demo-test/curately-9.6.5/curately-9.6.5/src/components/Dashboard/Reports/Charts/OutreachKPI/OutreachKPI.tsx",lineNumber:287,columnNumber:29},void 0)},void 0,!1,{fileName:"C:/Curately-aws-demo-test/curately-9.6.5/curately-9.6.5/src/components/Dashboard/Reports/Charts/OutreachKPI/OutreachKPI.tsx",lineNumber:284,columnNumber:25},void 0)},void 0,!1,{fileName:"C:/Curately-aws-demo-test/curately-9.6.5/curately-9.6.5/src/components/Dashboard/Reports/Charts/OutreachKPI/OutreachKPI.tsx",lineNumber:283,columnNumber:21},void 0),e.jsxDEV(h,{container:!0,justifyContent:"space-between",alignItems:"center",children:e.jsxDEV(h,{children:e.jsxDEV("div",{className:"GroupBy",children:e.jsxDEV(J,{fullWidth:!0,size:"small",value:o,onChange:t=>f(t.target.value),select:!0,children:[e.jsxDEV(I,{value:"LAST 30 DAYS",children:"Last 30 Days"},void 0,!1,{fileName:"C:/Curately-aws-demo-test/curately-9.6.5/curately-9.6.5/src/components/Dashboard/Reports/Charts/OutreachKPI/OutreachKPI.tsx",lineNumber:299,columnNumber:37},void 0),e.jsxDEV(I,{value:"LAST 60 DAYS",children:"Last 60 days"},void 0,!1,{fileName:"C:/Curately-aws-demo-test/curately-9.6.5/curately-9.6.5/src/components/Dashboard/Reports/Charts/OutreachKPI/OutreachKPI.tsx",lineNumber:300,columnNumber:37},void 0),e.jsxDEV(I,{value:"LAST 6 MONTHS",children:"Last 6 Months"},void 0,!1,{fileName:"C:/Curately-aws-demo-test/curately-9.6.5/curately-9.6.5/src/components/Dashboard/Reports/Charts/OutreachKPI/OutreachKPI.tsx",lineNumber:301,columnNumber:37},void 0),e.jsxDEV(I,{value:"LAST 12 MONTHS",children:"Last 12 Months"},void 0,!1,{fileName:"C:/Curately-aws-demo-test/curately-9.6.5/curately-9.6.5/src/components/Dashboard/Reports/Charts/OutreachKPI/OutreachKPI.tsx",lineNumber:302,columnNumber:37},void 0),e.jsxDEV(I,{value:"CURRENT WEEK",children:"Current Week"},void 0,!1,{fileName:"C:/Curately-aws-demo-test/curately-9.6.5/curately-9.6.5/src/components/Dashboard/Reports/Charts/OutreachKPI/OutreachKPI.tsx",lineNumber:303,columnNumber:37},void 0),e.jsxDEV(I,{value:"CURRENT MONTH",children:"Current Month"},void 0,!1,{fileName:"C:/Curately-aws-demo-test/curately-9.6.5/curately-9.6.5/src/components/Dashboard/Reports/Charts/OutreachKPI/OutreachKPI.tsx",lineNumber:304,columnNumber:37},void 0)]},void 0,!0,{fileName:"C:/Curately-aws-demo-test/curately-9.6.5/curately-9.6.5/src/components/Dashboard/Reports/Charts/OutreachKPI/OutreachKPI.tsx",lineNumber:293,columnNumber:33},void 0)},void 0,!1,{fileName:"C:/Curately-aws-demo-test/curately-9.6.5/curately-9.6.5/src/components/Dashboard/Reports/Charts/OutreachKPI/OutreachKPI.tsx",lineNumber:292,columnNumber:29},void 0)},void 0,!1,{fileName:"C:/Curately-aws-demo-test/curately-9.6.5/curately-9.6.5/src/components/Dashboard/Reports/Charts/OutreachKPI/OutreachKPI.tsx",lineNumber:291,columnNumber:25},void 0)},void 0,!1,{fileName:"C:/Curately-aws-demo-test/curately-9.6.5/curately-9.6.5/src/components/Dashboard/Reports/Charts/OutreachKPI/OutreachKPI.tsx",lineNumber:290,columnNumber:21},void 0)]},void 0,!0,{fileName:"C:/Curately-aws-demo-test/curately-9.6.5/curately-9.6.5/src/components/Dashboard/Reports/Charts/OutreachKPI/OutreachKPI.tsx",lineNumber:282,columnNumber:17},void 0),e.jsxDEV("div",{className:"outreachBox",children:e.jsxDEV(h,{container:!0,spacing:2,children:[e.jsxDEV(h,{size:6,children:e.jsxDEV(b,{className:"customCard  mt-5",children:e.jsxDEV(R,{dayOrMonth:"month",id:"Open rate by month",name:"Open rate by month",data:C,dateformat:y,height:"270px",labels:N.openRateByMonth},void 0,!1,{fileName:"C:/Curately-aws-demo-test/curately-9.6.5/curately-9.6.5/src/components/Dashboard/Reports/Charts/OutreachKPI/OutreachKPI.tsx",lineNumber:314,columnNumber:33},void 0)},void 0,!1,{fileName:"C:/Curately-aws-demo-test/curately-9.6.5/curately-9.6.5/src/components/Dashboard/Reports/Charts/OutreachKPI/OutreachKPI.tsx",lineNumber:313,columnNumber:29},void 0)},void 0,!1,{fileName:"C:/Curately-aws-demo-test/curately-9.6.5/curately-9.6.5/src/components/Dashboard/Reports/Charts/OutreachKPI/OutreachKPI.tsx",lineNumber:312,columnNumber:25},void 0),e.jsxDEV(h,{size:6,children:e.jsxDEV(b,{className:"customCard  mt-5",children:e.jsxDEV(R,{dayOrMonth:"month",id:"Reply rate by month",name:"Reply rate by month",data:E,dateformat:y,height:"270px",labels:N.replyRateByMonth},void 0,!1,{fileName:"C:/Curately-aws-demo-test/curately-9.6.5/curately-9.6.5/src/components/Dashboard/Reports/Charts/OutreachKPI/OutreachKPI.tsx",lineNumber:327,columnNumber:33},void 0)},void 0,!1,{fileName:"C:/Curately-aws-demo-test/curately-9.6.5/curately-9.6.5/src/components/Dashboard/Reports/Charts/OutreachKPI/OutreachKPI.tsx",lineNumber:326,columnNumber:29},void 0)},void 0,!1,{fileName:"C:/Curately-aws-demo-test/curately-9.6.5/curately-9.6.5/src/components/Dashboard/Reports/Charts/OutreachKPI/OutreachKPI.tsx",lineNumber:325,columnNumber:25},void 0)]},void 0,!0,{fileName:"C:/Curately-aws-demo-test/curately-9.6.5/curately-9.6.5/src/components/Dashboard/Reports/Charts/OutreachKPI/OutreachKPI.tsx",lineNumber:311,columnNumber:21},void 0)},void 0,!1,{fileName:"C:/Curately-aws-demo-test/curately-9.6.5/curately-9.6.5/src/components/Dashboard/Reports/Charts/OutreachKPI/OutreachKPI.tsx",lineNumber:310,columnNumber:17},void 0),e.jsxDEV("div",{className:"outreachBox",children:e.jsxDEV(h,{container:!0,spacing:2,children:[e.jsxDEV(h,{size:6,children:e.jsxDEV(b,{className:"customCard  mt-5",children:e.jsxDEV(R,{dayOrMonth:"month",id:"Open rate by team member",name:"Open rate by team member",data:P,dateformat:y,height:"270px",labels:N.openRateByTeamMember},void 0,!1,{fileName:"C:/Curately-aws-demo-test/curately-9.6.5/curately-9.6.5/src/components/Dashboard/Reports/Charts/OutreachKPI/OutreachKPI.tsx",lineNumber:344,columnNumber:33},void 0)},void 0,!1,{fileName:"C:/Curately-aws-demo-test/curately-9.6.5/curately-9.6.5/src/components/Dashboard/Reports/Charts/OutreachKPI/OutreachKPI.tsx",lineNumber:343,columnNumber:29},void 0)},void 0,!1,{fileName:"C:/Curately-aws-demo-test/curately-9.6.5/curately-9.6.5/src/components/Dashboard/Reports/Charts/OutreachKPI/OutreachKPI.tsx",lineNumber:342,columnNumber:25},void 0),e.jsxDEV(h,{size:6,children:e.jsxDEV(b,{className:"customCard  mt-5",children:e.jsxDEV(R,{dayOrMonth:"month",id:"Reply rate by team member",name:"Reply rate by team member",data:M,dateformat:y,height:"270px",labels:N.replyRateByTeamMember},void 0,!1,{fileName:"C:/Curately-aws-demo-test/curately-9.6.5/curately-9.6.5/src/components/Dashboard/Reports/Charts/OutreachKPI/OutreachKPI.tsx",lineNumber:357,columnNumber:33},void 0)},void 0,!1,{fileName:"C:/Curately-aws-demo-test/curately-9.6.5/curately-9.6.5/src/components/Dashboard/Reports/Charts/OutreachKPI/OutreachKPI.tsx",lineNumber:356,columnNumber:29},void 0)},void 0,!1,{fileName:"C:/Curately-aws-demo-test/curately-9.6.5/curately-9.6.5/src/components/Dashboard/Reports/Charts/OutreachKPI/OutreachKPI.tsx",lineNumber:355,columnNumber:25},void 0)]},void 0,!0,{fileName:"C:/Curately-aws-demo-test/curately-9.6.5/curately-9.6.5/src/components/Dashboard/Reports/Charts/OutreachKPI/OutreachKPI.tsx",lineNumber:341,columnNumber:21},void 0)},void 0,!1,{fileName:"C:/Curately-aws-demo-test/curately-9.6.5/curately-9.6.5/src/components/Dashboard/Reports/Charts/OutreachKPI/OutreachKPI.tsx",lineNumber:340,columnNumber:17},void 0),e.jsxDEV("div",{className:"outreachBox",children:e.jsxDEV(h,{container:!0,spacing:2,children:[e.jsxDEV(h,{size:6,children:e.jsxDEV(b,{className:"customCard  mt-5",children:e.jsxDEV(R,{dayOrMonth:"month",id:"Open rate by Campaign",name:"Open rate by Campaign",data:p,dateformat:y,height:"270px",labels:N.openRateByCampaign},void 0,!1,{fileName:"C:/Curately-aws-demo-test/curately-9.6.5/curately-9.6.5/src/components/Dashboard/Reports/Charts/OutreachKPI/OutreachKPI.tsx",lineNumber:374,columnNumber:33},void 0)},void 0,!1,{fileName:"C:/Curately-aws-demo-test/curately-9.6.5/curately-9.6.5/src/components/Dashboard/Reports/Charts/OutreachKPI/OutreachKPI.tsx",lineNumber:373,columnNumber:29},void 0)},void 0,!1,{fileName:"C:/Curately-aws-demo-test/curately-9.6.5/curately-9.6.5/src/components/Dashboard/Reports/Charts/OutreachKPI/OutreachKPI.tsx",lineNumber:372,columnNumber:25},void 0),e.jsxDEV(h,{size:6,children:e.jsxDEV(b,{className:"customCard  mt-5",children:e.jsxDEV(R,{dayOrMonth:"month",id:"Reply rate by Campaign",name:"Reply rate by Campaign",data:T,dateformat:y,height:"270px",labels:N.replyRateByCampaign},void 0,!1,{fileName:"C:/Curately-aws-demo-test/curately-9.6.5/curately-9.6.5/src/components/Dashboard/Reports/Charts/OutreachKPI/OutreachKPI.tsx",lineNumber:387,columnNumber:33},void 0)},void 0,!1,{fileName:"C:/Curately-aws-demo-test/curately-9.6.5/curately-9.6.5/src/components/Dashboard/Reports/Charts/OutreachKPI/OutreachKPI.tsx",lineNumber:386,columnNumber:29},void 0)},void 0,!1,{fileName:"C:/Curately-aws-demo-test/curately-9.6.5/curately-9.6.5/src/components/Dashboard/Reports/Charts/OutreachKPI/OutreachKPI.tsx",lineNumber:385,columnNumber:25},void 0)]},void 0,!0,{fileName:"C:/Curately-aws-demo-test/curately-9.6.5/curately-9.6.5/src/components/Dashboard/Reports/Charts/OutreachKPI/OutreachKPI.tsx",lineNumber:371,columnNumber:21},void 0)},void 0,!1,{fileName:"C:/Curately-aws-demo-test/curately-9.6.5/curately-9.6.5/src/components/Dashboard/Reports/Charts/OutreachKPI/OutreachKPI.tsx",lineNumber:370,columnNumber:17},void 0)]},void 0,!0,{fileName:"C:/Curately-aws-demo-test/curately-9.6.5/curately-9.6.5/src/components/Dashboard/Reports/Charts/OutreachKPI/OutreachKPI.tsx",lineNumber:281,columnNumber:13},void 0)},void 0,!1,{fileName:"C:/Curately-aws-demo-test/curately-9.6.5/curately-9.6.5/src/components/Dashboard/Reports/Charts/OutreachKPI/OutreachKPI.tsx",lineNumber:280,columnNumber:9},void 0)};export{oe as default};
