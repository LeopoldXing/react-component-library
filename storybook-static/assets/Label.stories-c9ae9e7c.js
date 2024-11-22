import{u as L,j as D}from"./styled-components.browser.esm-9044cd9c.js";import"./index-76fb7be0.js";import"./_commonjsHelpers-de833af9.js";const x=L.label`
  font-size: ${e=>e.size==="small"?"0.8rem":e.size==="medium"?"1rem":"1.1rem"};
  font-family: "Playfair Display", serif;
  cursor: pointer;
  color: "#2F2F2F";
  ${e=>e.disabled&&`
    background-color: grey;
    cursor: not-allowed;
    color: #ccc;
  `}
`,t=({size:e="medium",htmlFor:z,text:F,disabled:S=!1,..._})=>D(x,{size:e,htmlFor:z,disabled:S,..._,children:F});try{t.displayName="Label",t.__docgenInfo={description:"",displayName:"Label",props:{text:{defaultValue:null,description:"",name:"text",required:!1,type:{name:"string"}},size:{defaultValue:{value:"medium"},description:"",name:"size",required:!1,type:{name:"enum",value:[{value:'"small"'},{value:'"medium"'},{value:'"large"'}]}},htmlFor:{defaultValue:null,description:"",name:"htmlFor",required:!0,type:{name:"string"}},color:{defaultValue:null,description:"",name:"color",required:!1,type:{name:"string"}},disabled:{defaultValue:{value:"false"},description:"",name:"disabled",required:!1,type:{name:"boolean"}}}}}catch{}const V={title:"Components/Label",component:t,argTypes:{}},a={args:{htmlFor:"my-input",text:"Username:"}},r={args:{...a.args,size:"small"}},s={args:{...a.args,size:"large"}},l={args:{...a.args,size:"large",disabled:!0}};var o,n,i;a.parameters={...a.parameters,docs:{...(o=a.parameters)==null?void 0:o.docs,source:{originalSource:`{
  args: {
    htmlFor: "my-input",
    text: "Username:"
  }
}`,...(i=(n=a.parameters)==null?void 0:n.docs)==null?void 0:i.source}}};var m,u,c;r.parameters={...r.parameters,docs:{...(m=r.parameters)==null?void 0:m.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    size: "small"
  }
}`,...(c=(u=r.parameters)==null?void 0:u.docs)==null?void 0:c.source}}};var d,p,g;s.parameters={...s.parameters,docs:{...(d=s.parameters)==null?void 0:d.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    size: "large"
  }
}`,...(g=(p=s.parameters)==null?void 0:p.docs)==null?void 0:g.source}}};var f,b,y;l.parameters={...l.parameters,docs:{...(f=l.parameters)==null?void 0:f.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    size: "large",
    disabled: true
  }
}`,...(y=(b=l.parameters)==null?void 0:b.docs)==null?void 0:y.source}}};const j=["Default","SmallFontSize","LargeFontSize","DisabledLabel"];export{a as Default,l as DisabledLabel,s as LargeFontSize,r as SmallFontSize,j as __namedExportsOrder,V as default};
