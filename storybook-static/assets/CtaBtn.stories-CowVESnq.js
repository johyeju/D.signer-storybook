import{j as e}from"./jsx-runtime-z8MfsBtr.js";import"./index-C9rmetsa.js";const i=({leftButtonText:r,leftButtonVisible:o,rightButtonText:l})=>e.jsxs("div",{style:{display:"flex",justifyContent:o?"space-around":"center",padding:"10px",gap:"10px"},children:[o&&r&&e.jsx("button",{style:{color:"gray"},children:r}),e.jsx("button",{style:{color:"blue"},children:l})]});i.__docgenInfo={description:"",methods:[],displayName:"CtaBtn",props:{leftButtonText:{required:!1,tsType:{name:"string"},description:""},leftButtonVisible:{required:!0,tsType:{name:"boolean"},description:""},rightButtonText:{required:!0,tsType:{name:"string"},description:""}}};const p={title:"CTA/CtaBtn",parameters:{layout:"centered"},tags:["autodocs"],component:i,argTypes:{leftButtonVisible:{control:"boolean"},leftButtonText:{control:"text",if:{arg:"leftButtonVisible"}},rightButtonText:{control:"text"}}},t={args:{leftButtonVisible:!0,leftButtonText:"왼쪽",rightButtonText:"오른쪽"}};var n,s,a;t.parameters={...t.parameters,docs:{...(n=t.parameters)==null?void 0:n.docs,source:{originalSource:`{
  args: {
    leftButtonVisible: true,
    leftButtonText: '왼쪽',
    rightButtonText: '오른쪽'
  }
}`,...(a=(s=t.parameters)==null?void 0:s.docs)==null?void 0:a.source}}};const d=["Default"];export{t as Default,d as __namedExportsOrder,p as default};
