import{f as d}from"./index-MpUCZ_R_.js";import{j as u}from"./jsx-runtime-z8MfsBtr.js";import"./index-C9rmetsa.js";function n({children:a,isChecked:s,onClick:i}){const c=s?"bg-white text-primary":"text-white bg-dark-opacity";return u.jsx("button",{className:`
        rounded-tag-button
        px-[10px] border
        border-white
        h-[33px]
        text-sm
        font-medium
        ${c}`,onClick:i,children:a})}n.__docgenInfo={description:"",methods:[],displayName:"TagButton",props:{children:{required:!0,tsType:{name:"string"},description:""},isChecked:{required:!0,tsType:{name:"boolean"},description:""},onClick:{required:!0,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""}}};const f={title:"Buttons/LocationBtn",component:n,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{children:{control:"text",description:"버튼의 텍스트",defaultValue:"button"},isChecked:{control:"boolean",description:"버튼 활성화 여부",defaultValue:!1},onClick:{action:"clicked",description:"버튼 클릭 이벤트"}},args:{onClick:d()}},e={args:{children:"button",isChecked:!1}};var t,r,o;e.parameters={...e.parameters,docs:{...(t=e.parameters)==null?void 0:t.docs,source:{originalSource:`{
  args: {
    children: 'button',
    isChecked: false
  }
}`,...(o=(r=e.parameters)==null?void 0:r.docs)==null?void 0:o.source}}};const g=["Default"];export{e as Default,g as __namedExportsOrder,f as default};
