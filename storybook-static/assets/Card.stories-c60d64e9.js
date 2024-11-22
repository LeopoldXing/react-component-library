import{u as n,a as y,j as r}from"./styled-components.browser.esm-9044cd9c.js";import"./index-76fb7be0.js";import"./_commonjsHelpers-de833af9.js";const _=n.div`
  border: 1px solid #ddd;
  border-radius: 4px;
  padding: 20px;
  max-width: ${e=>e.width||"300px"};
  opacity: ${e=>e.disabled?.5:1};
  ${e=>e.disabled&&`
  cursor: not-allowed;
`}
`,T=n.img`
  width: 100%;
  border-radius: 4px;
`,q=n.h2`
  font-size: 1.2em;
  margin-top: 10px;
`,w=n.p`
  margin-top: 10px;
`,V=n.button`
  margin-top: 20px;
  padding: 10px 20px;
  border: none;
  border-radius: 4px;
  background-color: blue;
  color: white;
  cursor: pointer;
`,i=({imageurl:e,title:o,content:C,buttonText:d,onButtonClick:f,disabled:s,...h})=>y(_,{disabled:s,...h,children:[e&&r(T,{src:e,alt:o}),r(q,{children:o}),r(w,{children:C}),d&&r(V,{onClick:f,disabled:s,children:d})]}),b=i;try{i.displayName="Card",i.__docgenInfo={description:"",displayName:"Card",props:{imageurl:{defaultValue:null,description:"",name:"imageurl",required:!1,type:{name:"string"}},width:{defaultValue:null,description:"",name:"width",required:!1,type:{name:"string"}},title:{defaultValue:null,description:"",name:"title",required:!0,type:{name:"string"}},content:{defaultValue:null,description:"",name:"content",required:!0,type:{name:"string"}},buttonText:{defaultValue:null,description:"",name:"buttonText",required:!1,type:{name:"string"}},onButtonClick:{defaultValue:null,description:"",name:"onButtonClick",required:!1,type:{name:"(() => void)"}},disabled:{defaultValue:null,description:"",name:"disabled",required:!1,type:{name:"boolean"}}}}}catch{}const $={title:"Components/Card",component:b},x=e=>r(b,{...e}),t=x.bind({});t.args={imageurl:"https://via.placeholder.com/300",title:"Card Title",content:"This is a card description.",buttonText:"Click Me"};const a=x.bind({});a.args={imageurl:"https://via.placeholder.com/300",title:"Card Title",content:"This is a card description.",buttonText:"Click Me",disabled:!0};var l,c,p;t.parameters={...t.parameters,docs:{...(l=t.parameters)==null?void 0:l.docs,source:{originalSource:"args => <Card {...args} />",...(p=(c=t.parameters)==null?void 0:c.docs)==null?void 0:p.source}}};var u,m,g;a.parameters={...a.parameters,docs:{...(u=a.parameters)==null?void 0:u.docs,source:{originalSource:"args => <Card {...args} />",...(g=(m=a.parameters)==null?void 0:m.docs)==null?void 0:g.source}}};const j=["Default","Disabled"];export{t as Default,a as Disabled,j as __namedExportsOrder,$ as default};
