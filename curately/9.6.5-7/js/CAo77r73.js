import{r as a,L as i,b_ as r}from"./Da4I77gy.js";const d=({embedID:o})=>{const[s,c]=a.useState("");return a.useEffect(()=>{let e=i.getvalue("clientId");e&&r.post("https://api.explo.co/api/generate_jwt",{provided_id:String(e),embed_id:o},{headers:{"Explo-Authorization":"Token 332786d1d62ae9f1db0b68f0442802cca97210aeaa9ea3091d6d844201f36fca","content-type":"application/json"}}).then(t=>{c(t.data.jwt)}).catch(t=>{console.log("err is===>",t)})},[]),{jwt:s}};export{d as U};
