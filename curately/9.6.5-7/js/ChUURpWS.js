import{L as d,r as u,W as h,A as m,k as e,D as te,I as F,n as se,o as re,S as I,U as oe,B as L,V as c,O as P,T as ae,b1 as ue}from"./Da4I77gy.js";import{E as ne}from"./D4E8Ilzm.js";import{D as ce}from"./BM75X-kx.js";import{S as le}from"./BcvtPrAc.js";import{M as ie}from"./DCKGuMgj.js";import{u as de}from"./D7ld7k1a.js";import{c as me,a as D}from"./BRh2WteL.js";import{E as B}from"./MGFt9yJK.js";import{l as k}from"./Bu7qOu7j.js";import{D as Se}from"./BtfZ3YdN.js";import{T as R,I as fe}from"./DrwwBJQC.js";import{F as ye,S as pe}from"./DR5LSZrV.js";import{M as be}from"./YFmo1cJD.js";import{L as Ne}from"./xO5jApXz.js";import{C as ge}from"./CYG5EPlH.js";import{T as W}from"./D8Uve2Qz.js";import"./DGAwO83Z.js";import"./BAhGwoeq.js";import"./DKbR-AmK.js";import"./DRaa5a1K.js";import"./CNGds3kx.js";import"./CTncTM4t.js";import"./Dw4YnGpZ.js";import"./DtpZK6Fd.js";import"./Cb9wbhoa.js";import"./BSRMXGwI.js";import"./M012vGJb.js";import"./Ca_RVXIc.js";import"./DGhwAF8n.js";import"./Bt1msObo.js";import"./DVcNEn01.js";import"./DwQ4byYi.js";import"./Bob0wRh9.js";import"./Bfaybex0.js";const he=({open:E,handleClose:y,add:p,sourceData:n})=>{let A=d.getvalue("clientId");const[x,b]=u.useState(!1),[v,w]=u.useState([]),V=n?{sourceId:n?n.sourceId:"",sourceName:n?n.sourceName:"",description:n?n.description:"",sourceTypeId:n?n.sourceTypeId.toString():"",clientId:d.getvalue("clientId")}:{sourceName:"",description:"",sourceTypeId:"",sourceId:"",clientId:d.getvalue("clientId")},z=me().shape({sourceName:D().matches(/^[a-zA-Z0-9-_@() ]+$/,"Source name can only contain letters, numbers, and spaces").required("Source name is required"),description:D(),sourceTypeId:D().required("Source Type is required"),sourceId:D(),clientId:D()}),s=de({initialValues:V,validationSchema:z,onSubmit:()=>{b(!0)},validateOnMount:!0}),C=()=>{if(s.values.sourceName.trim()==="")return c("Please Enter Source name","error"),!1;if(s.values.sourceTypeId.trim()==="")return c("Please select 'Source Type","error"),!1;b(!0),s.isValid?h(m.postWithData("admin","saveSource",{...s.values}).then(r=>{r.data.Success?(c("Source has been saved successfully.","success"),s.resetForm(),y(!0)):c(r.data.Message?r.data.Message:"An error occured","error")})):c("Please fill all fields.","error")},S=()=>{if(s.values.sourceName.trim()==="")return c("Please Enter Source name","error"),!1;if(s.values.sourceTypeId==="")return c("Please select 'Source Type","error"),!1;b(!0),s.isValid?h(m.postWithData("admin","updateSource",{...s.values}).then(r=>{var i;(i=r==null?void 0:r.data)!=null&&i.Success?(c("Source has been updated successfully.","success"),s.resetForm(),y(!0)):c(r.data.Message?r.data.Message:"An error occured","error")})):c("Please fill all fields.","error")},N=()=>{y(!1),s.resetForm()},$=u.useCallback(k.debounce(()=>{h(m.getCall("admin",`getSourceTypeList/${A}`).then(r=>{w(r.data.list)}))},600),[]);u.useEffect(()=>{$()},[]);const j=r=>{m.saveAuditLog(r)};return e.jsxDEV(te,{open:E,onClose:y,maxWidth:"sm",fullWidth:!0,children:[e.jsxDEV(Se,{children:[p?"Add New":"Update"," Sources"]},void 0,!0,{fileName:"C:/Curately-aws-demo-test/curately-9.6.5/curately-9.6.5/src/components/Dashboard/Settings/Sources/AddSources.tsx",lineNumber:183,columnNumber:13},void 0),e.jsxDEV(F,{"aria-label":"close",onClick:N,sx:{position:"absolute",right:8,top:8,color:r=>r.palette.grey[500]},children:e.jsxDEV(se,{},void 0,!1,{fileName:"C:/Curately-aws-demo-test/curately-9.6.5/curately-9.6.5/src/components/Dashboard/Settings/Sources/AddSources.tsx",lineNumber:194,columnNumber:17},void 0)},void 0,!1,{fileName:"C:/Curately-aws-demo-test/curately-9.6.5/curately-9.6.5/src/components/Dashboard/Settings/Sources/AddSources.tsx",lineNumber:184,columnNumber:13},void 0),e.jsxDEV(re,{children:e.jsxDEV("form",{onSubmit:s.handleSubmit,children:e.jsxDEV(I,{spacing:1,className:"mt-1",children:[e.jsxDEV(R,{autoFocus:!0,id:"sourceName",name:"sourceName",label:"Source Name",size:"small",type:"text",fullWidth:!0,variant:"outlined",value:s.values.sourceName,onChange:s.handleChange},void 0,!1,{fileName:"C:/Curately-aws-demo-test/curately-9.6.5/curately-9.6.5/src/components/Dashboard/Settings/Sources/AddSources.tsx",lineNumber:200,columnNumber:25},void 0),e.jsxDEV(B,{formikObj:s,name:"sourceName",isFormSubmitted:x},void 0,!1,{fileName:"C:/Curately-aws-demo-test/curately-9.6.5/curately-9.6.5/src/components/Dashboard/Settings/Sources/AddSources.tsx",lineNumber:219,columnNumber:25},void 0),e.jsxDEV(ye,{size:"small",children:[e.jsxDEV(fe,{id:"type-label",children:"Type "},void 0,!1,{fileName:"C:/Curately-aws-demo-test/curately-9.6.5/curately-9.6.5/src/components/Dashboard/Settings/Sources/AddSources.tsx",lineNumber:223,columnNumber:29},void 0),e.jsxDEV(pe,{labelId:"type-label",id:"type-select",name:"sourceTypeId",label:"sourceTypeId",value:s.values.sourceTypeId?s.values.sourceTypeId:"",onChange:s.handleChange,children:v&&v.map((r,i)=>e.jsxDEV(be,{value:`${r.sourceTypeId}`,children:r.sourceType},i,!1,{fileName:"C:/Curately-aws-demo-test/curately-9.6.5/curately-9.6.5/src/components/Dashboard/Settings/Sources/AddSources.tsx",lineNumber:234,columnNumber:45},void 0))},void 0,!1,{fileName:"C:/Curately-aws-demo-test/curately-9.6.5/curately-9.6.5/src/components/Dashboard/Settings/Sources/AddSources.tsx",lineNumber:224,columnNumber:29},void 0)]},void 0,!0,{fileName:"C:/Curately-aws-demo-test/curately-9.6.5/curately-9.6.5/src/components/Dashboard/Settings/Sources/AddSources.tsx",lineNumber:222,columnNumber:25},void 0),e.jsxDEV(B,{formikObj:s,name:"sourceTypeId",isFormSubmitted:x},void 0,!1,{fileName:"C:/Curately-aws-demo-test/curately-9.6.5/curately-9.6.5/src/components/Dashboard/Settings/Sources/AddSources.tsx",lineNumber:241,columnNumber:25},void 0),e.jsxDEV(R,{id:"options",label:"Description",placeholder:"Brief Description",multiline:!0,rows:4,fullWidth:!0,variant:"outlined",value:s.values.description,onChange:r=>{const i=r.target.value;s.setFieldValue("description",i)}},void 0,!1,{fileName:"C:/Curately-aws-demo-test/curately-9.6.5/curately-9.6.5/src/components/Dashboard/Settings/Sources/AddSources.tsx",lineNumber:242,columnNumber:25},void 0)]},void 0,!0,{fileName:"C:/Curately-aws-demo-test/curately-9.6.5/curately-9.6.5/src/components/Dashboard/Settings/Sources/AddSources.tsx",lineNumber:199,columnNumber:21},void 0)},void 0,!1,{fileName:"C:/Curately-aws-demo-test/curately-9.6.5/curately-9.6.5/src/components/Dashboard/Settings/Sources/AddSources.tsx",lineNumber:198,columnNumber:17},void 0)},void 0,!1,{fileName:"C:/Curately-aws-demo-test/curately-9.6.5/curately-9.6.5/src/components/Dashboard/Settings/Sources/AddSources.tsx",lineNumber:196,columnNumber:13},void 0),e.jsxDEV(oe,{children:[e.jsxDEV(L,{variant:"outlined",type:"button",size:"small",color:"secondary",className:"mr-2",onClick:N,children:"Cancel"},void 0,!1,{fileName:"C:/Curately-aws-demo-test/curately-9.6.5/curately-9.6.5/src/components/Dashboard/Settings/Sources/AddSources.tsx",lineNumber:263,columnNumber:17},void 0),e.jsxDEV(L,{color:"primary",variant:"contained",size:"small",onClick:()=>{(n&&n.sourceId?S:C)(),j(4235)},children:[p?"Add":"Update"," Sources"]},void 0,!0,{fileName:"C:/Curately-aws-demo-test/curately-9.6.5/curately-9.6.5/src/components/Dashboard/Settings/Sources/AddSources.tsx",lineNumber:271,columnNumber:17},void 0)]},void 0,!0,{fileName:"C:/Curately-aws-demo-test/curately-9.6.5/curately-9.6.5/src/components/Dashboard/Settings/Sources/AddSources.tsx",lineNumber:262,columnNumber:13},void 0)]},void 0,!0,{fileName:"C:/Curately-aws-demo-test/curately-9.6.5/curately-9.6.5/src/components/Dashboard/Settings/Sources/AddSources.tsx",lineNumber:182,columnNumber:9},void 0)},tt=()=>{const E=d.checkSettings(110005)===5||d.checkSettings(110005)===6,y=d.checkSettings(110005)===6;let p=d.getvalue("clientId");const[n,A]=u.useState([]),[x,b]=u.useState({sourceId:"",sourceName:"",description:"",sourceTypeId:"",clientId:""}),[v,w]=u.useState(!1),[V,z]=u.useState({}),[s,C]=u.useState(!1),[S,N]=u.useState({pageIndex:0,pageSize:10}),[$,j]=u.useState(0),[r,i]=u.useState(""),[T,U]=u.useState([]),[G,q]=u.useState([{desc:!0,id:"createdDate"}]),K=t=>new Promise((o,l)=>{h(m.getCall("admin",`getSourceListbyId/${t}/${p}`).then(a=>{if(a.data&&a.data.sourceid){const f=a.data;b({sourceId:f.sourceid,sourceName:f.sourcename,description:f.description,sourceTypeId:f.sourcetypeid,clientId:d.getvalue("clientId")})}w(!0),o(a)}).catch(a=>{console.error("Error fetching User details:",a),l(a)}))});u.useEffect(()=>{const t=n.filter(o=>{var a;const l=r||"";return(a=o.sourceName)==null?void 0:a.toLowerCase().includes(l.toLowerCase())});U(t),N(o=>({...o,pageIndex:0}))},[r,n]);const H=t=>{K(t).then(()=>{C(!0),g(4236)}).catch(o=>{c("Unable to fetch User Data",o)})},Z=()=>{b({sourceId:"",sourceName:"",description:"",sourceTypeId:"",clientId:""}),C(!0),w(!1)},_=t=>{C(!1),t&&M()},M=u.useCallback(k.debounce(()=>{h(m.getCall("admin",`getSourceList/${p}`).then(t=>{var l;let o=t.data.list;for(let a=0;a<o.length;a++)((l=o[a].createdDate)==null?void 0:l.length)>19&&(o[a].createdDate=Ne.ServerEDTToSystem(o[a].createdDate.substring(0,19),"yyyy-MM-dd hh:mm:ss","MM/dd/yyyy hh:mm a"));A(t.data.list),j(t.data.list.length)}))},400),[]),J=k.debounce(M,300);u.useEffect(()=>{!s&&J()},[]);const Q=(t,o)=>{ue(`Are you sure you want to delete ${o} Source ?`,()=>{X(t),g(4237)})},X=t=>{h(m.getCall("admin",`deleteSource/${t}/${p}`).then(o=>{o.data.Success?(c("Source has been deleted successfully.","success"),M()):c(o.data.Message?o.data.Message:"An error occured while deleting","error")}).catch(o=>{var l,a,f,O;c((a=(l=o.response)==null?void 0:l.data)!=null&&a.Message?(O=(f=o.response)==null?void 0:f.data)==null?void 0:O.Message:"An error occured while deleting","error")}))},Y=u.useMemo(()=>[{accessorKey:"sourceName",header:"Name",enableColumnPinning:!0,size:350},{accessorKey:"sourceType",header:"Type",size:350},{accessorKey:"createdDate",header:"Created On",size:300},{accessorKey:"Actions",header:"Actions",enableSorting:!1,Cell:({row:t})=>e.jsxDEV(I,{children:e.jsxDEV(I,{direction:"row",children:[E?e.jsxDEV(W,{title:"Edit",placement:"top",color:"primary",children:e.jsxDEV(F,{onClick:()=>{H(t.original.sourceId)},children:e.jsxDEV(ne,{},void 0,!1,{fileName:"C:/Curately-aws-demo-test/curately-9.6.5/curately-9.6.5/src/components/Dashboard/Settings/Sources/Sources.tsx",lineNumber:272,columnNumber:23},void 0)},void 0,!1,{fileName:"C:/Curately-aws-demo-test/curately-9.6.5/curately-9.6.5/src/components/Dashboard/Settings/Sources/Sources.tsx",lineNumber:271,columnNumber:21},void 0)},void 0,!1,{fileName:"C:/Curately-aws-demo-test/curately-9.6.5/curately-9.6.5/src/components/Dashboard/Settings/Sources/Sources.tsx",lineNumber:270,columnNumber:19},void 0):null,y?e.jsxDEV(W,{title:"Delete",placement:"top",color:"primary",children:e.jsxDEV(F,{onClick:()=>{Q(t.original.sourceId,t.original.sourceName)},children:e.jsxDEV(ce,{},void 0,!1,{fileName:"C:/Curately-aws-demo-test/curately-9.6.5/curately-9.6.5/src/components/Dashboard/Settings/Sources/Sources.tsx",lineNumber:282,columnNumber:23},void 0)},void 0,!1,{fileName:"C:/Curately-aws-demo-test/curately-9.6.5/curately-9.6.5/src/components/Dashboard/Settings/Sources/Sources.tsx",lineNumber:281,columnNumber:21},void 0)},void 0,!1,{fileName:"C:/Curately-aws-demo-test/curately-9.6.5/curately-9.6.5/src/components/Dashboard/Settings/Sources/Sources.tsx",lineNumber:280,columnNumber:19},void 0):null]},void 0,!0,{fileName:"C:/Curately-aws-demo-test/curately-9.6.5/curately-9.6.5/src/components/Dashboard/Settings/Sources/Sources.tsx",lineNumber:267,columnNumber:13},void 0)},t.original.sourceId,!1,{fileName:"C:/Curately-aws-demo-test/curately-9.6.5/curately-9.6.5/src/components/Dashboard/Settings/Sources/Sources.tsx",lineNumber:266,columnNumber:11},void 0),size:350}],[]),g=t=>{m.saveAuditLog(t)};u.useEffect(()=>{g(4233)},[]);const ee=t=>{t>S.pageIndex?g(4238):t<S.pageIndex&&g(4239)};return e.jsxDEV("div",{className:"emailTemplateList pt-3 px-5",id:"sourceList",children:[e.jsxDEV(P,{container:!0,direction:"row",className:"customCard px-4 py-2",justifyContent:"space-between",alignItems:"center",display:"flex",sx:{minHeight:"auto !important"},children:[e.jsxDEV(ae,{variant:"h6",className:"headerName",children:"Sources"},void 0,!1,{fileName:"C:/Curately-aws-demo-test/curately-9.6.5/curately-9.6.5/src/components/Dashboard/Settings/Sources/Sources.tsx",lineNumber:325,columnNumber:9},void 0),e.jsxDEV(I,{direction:"row",className:"btn-container",children:e.jsxDEV(L,{variant:"contained",color:"primary",size:"small",onClick:()=>{g(4234),Z()},children:"New Sources"},void 0,!1,{fileName:"C:/Curately-aws-demo-test/curately-9.6.5/curately-9.6.5/src/components/Dashboard/Settings/Sources/Sources.tsx",lineNumber:329,columnNumber:11},void 0)},void 0,!1,{fileName:"C:/Curately-aws-demo-test/curately-9.6.5/curately-9.6.5/src/components/Dashboard/Settings/Sources/Sources.tsx",lineNumber:328,columnNumber:9},void 0)]},void 0,!0,{fileName:"C:/Curately-aws-demo-test/curately-9.6.5/curately-9.6.5/src/components/Dashboard/Settings/Sources/Sources.tsx",lineNumber:316,columnNumber:7},void 0),e.jsxDEV(P,{container:!0,className:"customCard p-0 filterExpand-grid",children:[e.jsxDEV(P,{sx:{width:"calc(100%)"},children:e.jsxDEV("div",{className:"MRTableCustom  pl-0 ",children:e.jsxDEV(ie,{columns:Y,data:T,state:{rowSelection:V,pagination:S,sorting:G,globalFilter:r},enablePinning:!0,enableStickyHeader:!0,initialState:{columnPinning:{left:["mrt-row-select","sourceName"]},density:"compact",showGlobalFilter:!0},muiPaginationProps:{rowsPerPageOptions:[10],showFirstButton:!1,showLastButton:!1,SelectProps:{style:{display:"none"}}},enablePagination:!0,renderBottomToolbarCustomActions:()=>e.jsxDEV(ge,{page:S.pageIndex,rowsPerPage:10,rowCount:T.length,onChangePage:t=>{N({...S,pageIndex:t,pageSize:10}),ee(t)},showCount:!0},void 0,!1,{fileName:"C:/Curately-aws-demo-test/curately-9.6.5/curately-9.6.5/src/components/Dashboard/Settings/Sources/Sources.tsx",lineNumber:362,columnNumber:17},void 0),onGlobalFilterChange:i,enableSorting:!0,onSortingChange:q,enableDensityToggle:!1,enableFullScreenToggle:!0,enableFilters:!1,enableGlobalFilterModes:!0,columnResizeMode:"onChange",onPaginationChange:N,getRowId:t=>t.sourceId,icons:{ArrowDownwardIcon:t=>e.jsxDEV(le,{...t},void 0,!1,{fileName:"C:/Curately-aws-demo-test/curately-9.6.5/curately-9.6.5/src/components/Dashboard/Settings/Sources/Sources.tsx",lineNumber:384,columnNumber:61},void 0)},rowCount:T.length},void 0,!1,{fileName:"C:/Curately-aws-demo-test/curately-9.6.5/curately-9.6.5/src/components/Dashboard/Settings/Sources/Sources.tsx",lineNumber:335,columnNumber:13},void 0)},void 0,!1,{fileName:"C:/Curately-aws-demo-test/curately-9.6.5/curately-9.6.5/src/components/Dashboard/Settings/Sources/Sources.tsx",lineNumber:334,columnNumber:11},void 0)},void 0,!1,{fileName:"C:/Curately-aws-demo-test/curately-9.6.5/curately-9.6.5/src/components/Dashboard/Settings/Sources/Sources.tsx",lineNumber:333,columnNumber:9},void 0),s?e.jsxDEV(he,{open:s,handleClose:_,sourceData:x,add:!v},void 0,!1,{fileName:"C:/Curately-aws-demo-test/curately-9.6.5/curately-9.6.5/src/components/Dashboard/Settings/Sources/Sources.tsx",lineNumber:393,columnNumber:13},void 0):null]},void 0,!0,{fileName:"C:/Curately-aws-demo-test/curately-9.6.5/curately-9.6.5/src/components/Dashboard/Settings/Sources/Sources.tsx",lineNumber:332,columnNumber:7},void 0)]},void 0,!0,{fileName:"C:/Curately-aws-demo-test/curately-9.6.5/curately-9.6.5/src/components/Dashboard/Settings/Sources/Sources.tsx",lineNumber:315,columnNumber:5},void 0)};export{tt as default};
