import{r as w,k as n}from"./Da4I77gy.js";import{f as A,g as i,d as v,I as D,L as g}from"./BktpiT-y.js";import{a as t}from"./D8xWqXbL.js";import{A as b}from"./Bw2Rwgey.js";import{L as N}from"./JSL5Psgw.js";import{B as E}from"./O4whC5ku.js";const k=({id:u,name:C,height:m,width:c,data:s,labels:l})=>(w.useLayoutEffect(()=>{let e=A({id:u});e.setThemes([b.new(e)]);let r=e.container.children.push(t.XYChart.new(e,{layout:e.verticalLayout})),h=r.children.push(N.new(e,{centerX:i,x:i})),d=t.AxisRendererX.new(e,{cellStartLocation:.1,cellEndLocation:.9,minorGridEnabled:!0,minGridDistance:10}),p=r.xAxes.push(t.CategoryAxis.new(e,{categoryField:"year",renderer:d,tooltip:v.new(e,{})}));d.grid.template.setAll({location:1}),p.data.setAll(s);let x=r.yAxes.push(t.ValueAxis.new(e,{renderer:t.AxisRendererY.new(e,{strokeOpacity:.1,minGridDistance:10}),min:0,maxPrecision:0}));function o(y,f){let a=r.series.push(t.ColumnSeries.new(e,{name:y,xAxis:p,yAxis:x,valueYField:f,categoryXField:"year"}));a.columns.template.setAll({tooltipText:"{name}, {categoryX}:{valueY}",width:D(90),tooltipY:0,strokeOpacity:0}),a.data.setAll(s),a.appear(),a.bullets.push(function(){return E.new(e,{locationY:0,sprite:g.new(e,{text:"{valueY}",fill:e.interfaceColors.get("alternativeText"),centerY:0,centerX:i,populateText:!0})})}),h.data.push(a)}return o(l[0],"value1"),o(l[1],"value2"),o(l[2],"value3"),r.appear(1e3,100),()=>{e.dispose()}},[s]),n.jsxDEV("div",{id:u,style:{width:c||"100%",height:m||"250px",marginBottom:"20px"},children:n.jsxDEV("p",{className:"fs-14",children:n.jsxDEV("strong",{children:C},void 0,!1,{fileName:"C:/Curately-aws-demo-test/curately-9.6.5/curately-9.6.5/src/components/Dashboard/Reports/Charts/Demo/ClusteredColumnChart/ClusteredColumnChart.tsx",lineNumber:164,columnNumber:34},void 0)},void 0,!1,{fileName:"C:/Curately-aws-demo-test/curately-9.6.5/curately-9.6.5/src/components/Dashboard/Reports/Charts/Demo/ClusteredColumnChart/ClusteredColumnChart.tsx",lineNumber:164,columnNumber:13},void 0)},void 0,!1,{fileName:"C:/Curately-aws-demo-test/curately-9.6.5/curately-9.6.5/src/components/Dashboard/Reports/Charts/Demo/ClusteredColumnChart/ClusteredColumnChart.tsx",lineNumber:157,columnNumber:10},void 0));export{k as C};
