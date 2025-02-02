import{j as o}from"./jsx-runtime-z8MfsBtr.js";import{f as b}from"./index-MpUCZ_R_.js";import{I as k}from"./IconButton-Dv4gx9l3.js";import{i as a}from"./IconTypes-yZz9cHYu.js";import"./index-C9rmetsa.js";const y="bg-Pill text-white",x="bg-white text-Pill",P="disabled:bg-mono100 disabled:text-mono200",B={dark:y,light:x};function m({theme:e,children:t,onClick:h,disabled:f,icon:i}){return o.jsxs("button",{className:`rounded-button-default w-full h-[59px] ${P} ${B[e]}`,disabled:f,onClick:h,children:[i&&o.jsx(k,{iconPath:i.iconPath,onClick:g=>g.stopPropagation()}),t]})}m.__docgenInfo={description:"",methods:[],displayName:"PillBtn",props:{theme:{required:!0,tsType:{name:"union",raw:"'dark' | 'light'",elements:[{name:"literal",value:"'dark'"},{name:"literal",value:"'light'"}]},description:""},disabled:{required:!0,tsType:{name:"boolean"},description:""},children:{required:!0,tsType:{name:"string"},description:""},onClick:{required:!0,tsType:{name:"ReactMouseEventHandler",raw:"React.MouseEventHandler<HTMLButtonElement>",elements:[{name:"HTMLButtonElement"}]},description:""},icon:{required:!1,tsType:{name:"signature",type:"object",raw:"{ alt: string; iconPath: string }",signature:{properties:[{key:"alt",value:{name:"string",required:!0}},{key:"iconPath",value:{name:"string",required:!0}}]}},description:""}}};const I={title:"Buttons/PillBtn",component:m,parameters:{layout:"centered"},decorators:[e=>o.jsx("div",{style:{width:"360px"},children:o.jsx(e,{})})],tags:["autodocs"],argTypes:{theme:{control:{type:"select",options:["dark","light"]},description:"버튼 테마",defaultValue:"dark"},children:{control:"text",description:"버튼 텍스트",defaultValue:"Button"},disabled:{control:"boolean",description:"버튼 비활성화 여부",defaultValue:!1},icon:{control:{type:"select"},options:Object.keys(a),mapping:Object.fromEntries(Object.entries(a).map(([e,t])=>[e,t?{alt:e,iconPath:t}:void 0])),description:"아이콘 선택",defaultValue:void 0},onClick:{action:"clicked",description:"버튼 클릭 이벤트"}},args:{onClick:b()}},n={args:{children:"Button",theme:"dark",disabled:!1,icon:void 0}},r={args:{children:"Button with Icon",theme:"dark",disabled:!1,icon:{alt:"delete",iconPath:a.delete}}};var s,l,d;n.parameters={...n.parameters,docs:{...(s=n.parameters)==null?void 0:s.docs,source:{originalSource:`{
  args: {
    children: 'Button',
    theme: 'dark',
    disabled: false,
    icon: undefined // 기본값: 아이콘 없음
  }
}`,...(d=(l=n.parameters)==null?void 0:l.docs)==null?void 0:d.source}}};var c,u,p;r.parameters={...r.parameters,docs:{...(c=r.parameters)==null?void 0:c.docs,source:{originalSource:`{
  args: {
    children: 'Button with Icon',
    theme: 'dark',
    disabled: false,
    icon: {
      alt: 'delete',
      iconPath: icons.delete
    } // delete 아이콘 사용
  }
}`,...(p=(u=r.parameters)==null?void 0:u.docs)==null?void 0:p.source}}};const v=["Default","WithIcon"];export{n as Default,r as WithIcon,v as __namedExportsOrder,I as default};
