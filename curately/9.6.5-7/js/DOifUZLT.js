import{r as f,k as n,l as y}from"./Da4I77gy.js";import{f as w,d as b,g as s,I as A,L as D}from"./BktpiT-y.js";import{a as t}from"./D8xWqXbL.js";import{A as N}from"./Bw2Rwgey.js";import{L as g}from"./JSL5Psgw.js";import{B as k}from"./O4whC5ku.js";const R=({id:i,data:l,name:c,size:d})=>(f.useLayoutEffect(()=>{let e=w({id:i});e.setThemes([N.new(e)]);let r=e.container.children.push(t.XYChart.new(e,{paddingLeft:0,layout:e.verticalLayout})),m=t.AxisRendererX.new(e,{minorGridEnabled:!0,minGridDistance:50}),u=r.xAxes.push(t.CategoryAxis.new(e,{categoryField:"year",renderer:m,tooltip:b.new(e,{})}));m.grid.template.setAll({location:1}),u.data.setAll(l);let p=r.yAxes.push(t.ValueAxis.new(e,{min:0,max:100,numberFormat:"#",strictMinMax:!0,calculateTotals:!0,renderer:t.AxisRendererY.new(e,{strokeOpacity:.1,minGridDistance:10})})),h=r.children.push(g.new(e,{centerX:s,x:s}));function o(x,C){let a=r.series.push(t.ColumnSeries.new(e,{name:x,stacked:!0,xAxis:u,yAxis:p,valueYField:C,valueYShow:"valueYTotalPercent",categoryXField:"year"}));a.columns.template.setAll({tooltipText:"{name}, {categoryX}:{valueYTotalPercent.formatNumber('#.#')}%",tooltipY:A(15)}),a.data.setAll(l),a.appear(),a.bullets.push(function(){return k.new(e,{sprite:D.new(e,{fill:e.interfaceColors.get("alternativeText"),centerY:s,centerX:s,populateText:!0})})}),h.data.push(a)}return o("Male","male"),o("Female","female"),o("Other","other"),r.appear(1e3,100),()=>{e.dispose()}},[l]),n.jsxDEV(y,{className:"",id:i,style:d,children:n.jsxDEV("p",{className:"fs-14",children:n.jsxDEV("strong",{children:c},void 0,!1,{fileName:"C:/Curately-aws-demo-test/curately-9.6.5/curately-9.6.5/src/components/Dashboard/Reports/Charts/Demo/StackedColumnChart/StackedColumnChart.tsx",lineNumber:166,columnNumber:28},void 0)},void 0,!1,{fileName:"C:/Curately-aws-demo-test/curately-9.6.5/curately-9.6.5/src/components/Dashboard/Reports/Charts/Demo/StackedColumnChart/StackedColumnChart.tsx",lineNumber:166,columnNumber:7},void 0)},void 0,!1,{fileName:"C:/Curately-aws-demo-test/curately-9.6.5/curately-9.6.5/src/components/Dashboard/Reports/Charts/Demo/StackedColumnChart/StackedColumnChart.tsx",lineNumber:163,columnNumber:5},void 0));export{R as S};
