import{Y as N,r as k,k as e,O as s,T as d,bV as y,L as r,B as n,W as b,A as l,V as m}from"./Da4I77gy.js";import{T as W}from"./DrwwBJQC.js";import"./DR5LSZrV.js";const C=()=>{const i=N(),[a,u]=k.useState(""),c=()=>{if(a){let t={workFlowId:"0",workFlowName:a,createdBy:r.getvalue("recrId"),clientId:r.getvalue("clientId")};b(l.postWithData("admin","saveandupdateWorkFlow",t).then(o=>{if(o.data.Success){let w={workflowId:o.data.workFlowId,clientId:r.getvalue("clientId")};f(4203),l.postWithParams(193,"Curately/Workflow/workflow_stages_basic.jsp",w).then(h=>{i("/"+r.getvalue("clientName")+"/letter/workflows/edit/"+o.data.workFlowId)})}else m("WorkFlowName already exists here!","error")}))}else m("Enter Workflow Name","error")},f=t=>{l.saveAuditLog(t)};return e.jsxDEV("div",{className:"Workflow mr-5 pt-3",children:[e.jsxDEV(s,{container:!0,direction:"row",justifyContent:"space-between",alignItems:"center",className:"customCard px-4 py-2 mb-2",sx:{minHeight:"auto !important"},children:[e.jsxDEV(d,{variant:"h6",className:"headerName",children:"Add Workflow"},void 0,!1,{fileName:"C:/Curately-aws-demo-test/curately-9.6.5/curately-9.6.5/src/components/Dashboard/Letters/Workflow/Add/AddWorkflow.tsx",lineNumber:82,columnNumber:17},void 0),e.jsxDEV(y,{to:`/${r.getvalue("clientName")}/letter/workflows/list`,className:"btn btn-primary ml-2 c-white underlineNone",children:e.jsxDEV(n,{variant:"outlined",type:"button",className:"",size:"small",children:"Back to list"},void 0,!1,{fileName:"C:/Curately-aws-demo-test/curately-9.6.5/curately-9.6.5/src/components/Dashboard/Letters/Workflow/Add/AddWorkflow.tsx",lineNumber:85,columnNumber:21},void 0)},void 0,!1,{fileName:"C:/Curately-aws-demo-test/curately-9.6.5/curately-9.6.5/src/components/Dashboard/Letters/Workflow/Add/AddWorkflow.tsx",lineNumber:84,columnNumber:17},void 0)]},void 0,!0,{fileName:"C:/Curately-aws-demo-test/curately-9.6.5/curately-9.6.5/src/components/Dashboard/Letters/Workflow/Add/AddWorkflow.tsx",lineNumber:74,columnNumber:13},void 0),e.jsxDEV(s,{container:!0,className:"customCard",alignItems:"center",sx:{minHeight:"auto !important"},children:[e.jsxDEV("div",{className:"pt-4",children:[e.jsxDEV(d,{style:{fontWeight:"bold"},children:"Workflow Name"},void 0,!1,{fileName:"C:/Curately-aws-demo-test/curately-9.6.5/curately-9.6.5/src/components/Dashboard/Letters/Workflow/Add/AddWorkflow.tsx",lineNumber:99,columnNumber:21},void 0),e.jsxDEV(W,{id:"workflowName",type:"text",value:a,onChange:t=>{u(t.target.value)},name:"workflowName",fullWidth:!0,size:"small",className:"mt-1 mb-2"},void 0,!1,{fileName:"C:/Curately-aws-demo-test/curately-9.6.5/curately-9.6.5/src/components/Dashboard/Letters/Workflow/Add/AddWorkflow.tsx",lineNumber:100,columnNumber:21},void 0)]},void 0,!0,{fileName:"C:/Curately-aws-demo-test/curately-9.6.5/curately-9.6.5/src/components/Dashboard/Letters/Workflow/Add/AddWorkflow.tsx",lineNumber:98,columnNumber:17},void 0),e.jsxDEV("div",{className:"mt-5 pt-4 ml-4",children:e.jsxDEV(n,{variant:"contained",onClick:c,children:"Save"},void 0,!1,{fileName:"C:/Curately-aws-demo-test/curately-9.6.5/curately-9.6.5/src/components/Dashboard/Letters/Workflow/Add/AddWorkflow.tsx",lineNumber:117,columnNumber:21},void 0)},void 0,!1,{fileName:"C:/Curately-aws-demo-test/curately-9.6.5/curately-9.6.5/src/components/Dashboard/Letters/Workflow/Add/AddWorkflow.tsx",lineNumber:116,columnNumber:17},void 0)]},void 0,!0,{fileName:"C:/Curately-aws-demo-test/curately-9.6.5/curately-9.6.5/src/components/Dashboard/Letters/Workflow/Add/AddWorkflow.tsx",lineNumber:90,columnNumber:13},void 0)]},void 0,!0,{fileName:"C:/Curately-aws-demo-test/curately-9.6.5/curately-9.6.5/src/components/Dashboard/Letters/Workflow/Add/AddWorkflow.tsx",lineNumber:73,columnNumber:9},void 0)};export{C as default};
