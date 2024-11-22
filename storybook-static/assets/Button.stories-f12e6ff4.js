import{u as L,j as $}from"./styled-components.browser.esm-9044cd9c.js";import"./index-76fb7be0.js";import"./_commonjsHelpers-de833af9.js";const P=L.button`
  border-radius: 3px;
  display: inline-block;
  padding: ${e=>e.size==="small"?"8px":e.size==="medium"?"12px 25px":"18px 32px"};
  border: none;
  font-size: 1rem;
  border-radius: 1rem;
  min-width: 80px;
  cursor: pointer;
  font-family: "Playfair Display", serif;
  transition:
    background-color 0.3s linear,
    color 0.3s linear;

  background-color: ${e=>e.primary===!0?"#EB5552":"#2F2F2F"};

  color: #ffffff;

  &:hover {
    background-color: ${e=>e.primary?"#F5B74C":"#878484"};
  }

  &:focus {
    outline: 2px solid #eb5552;
    outline-offset: 2px;
  }

  &:active {
    background-color: ${e=>e.primary?"#C73438":"#000000"};
  }

  &:disabled {
    background-color: #c8c8c8;
    color: #ffffff;
    cursor: not-allowed;
  }

  ${e=>e.isSuccess&&`
    background-color: #68E365;
    &:hover {
      background-color: #32B53A;
    }
    &:focus {
      outline: 2px solid #68E365;
      outline-offset: 2px;
    }
    &:active {
      background-color: #008906;
    }
  `}

  ${e=>e.isError&&`
    background-color: #FF677B;
    &:hover {
      background-color: F84B6A;
    }
    &:focus {
      outline: 2px solid #FF677B;
      outline-offset: 2px;
    }
    &:active {
      background-color: #F72B50;
    }
  `}

  ${e=>e.isWarning&&`
    background-color: #FFC021;
    &:hover {
      background-color: #FFAC00;
    }
    &:focus {
      outline: 2px solid #FFC021;
      outline-offset: 2px;
    }
    &:active {
      background-color: #FFA200;
    }
  `}
`,c=({size:e="medium",disabled:l=!1,text:M,onClick:A,...D})=>$(P,{type:"button",onClick:A,disabled:l,size:e,...D,"aria-disabled":l?!0:void 0,children:M});try{c.displayName="Button",c.__docgenInfo={description:"",displayName:"Button",props:{text:{defaultValue:null,description:"",name:"text",required:!1,type:{name:"string"}},primary:{defaultValue:null,description:"",name:"primary",required:!1,type:{name:"boolean"}},disabled:{defaultValue:{value:"false"},description:"",name:"disabled",required:!1,type:{name:"boolean"}},size:{defaultValue:{value:"medium"},description:"",name:"size",required:!1,type:{name:"enum",value:[{value:'"small"'},{value:'"medium"'},{value:'"large"'}]}},onClick:{defaultValue:null,description:"",name:"onClick",required:!1,type:{name:"MouseEventHandler<HTMLButtonElement>"}},isSuccess:{defaultValue:null,description:"",name:"isSuccess",required:!1,type:{name:"boolean"}},isError:{defaultValue:null,description:"",name:"isError",required:!1,type:{name:"boolean"}},isWarning:{defaultValue:null,description:"",name:"isWarning",required:!1,type:{name:"boolean"}}}}}catch{}const H={title:"Components/Button",component:c,argTypes:{}},r=e=>$(c,{...e}),a=r.bind({});a.args={primary:!0,size:"medium",text:"Primary Medium"};const o=r.bind({});o.args={primary:!0,size:"small",text:"Small Button"};const s=r.bind({});s.args={primary:!0,size:"large",text:"Large Button"};const t=r.bind({});t.args={primary:!0,size:"medium",text:"Disabled",disabled:!0};const i=r.bind({});i.args={primary:!0,size:"medium",text:"Success",isSuccess:!0};const n=r.bind({});n.args={primary:!0,size:"medium",text:"Error",isError:!0};const u=r.bind({});u.args={primary:!0,size:"medium",text:"Warning",isWarning:!0};var d,m,p;a.parameters={...a.parameters,docs:{...(d=a.parameters)==null?void 0:d.docs,source:{originalSource:"args => <Button {...args} />",...(p=(m=a.parameters)==null?void 0:m.docs)==null?void 0:p.source}}};var g,f,b;o.parameters={...o.parameters,docs:{...(g=o.parameters)==null?void 0:g.docs,source:{originalSource:"args => <Button {...args} />",...(b=(f=o.parameters)==null?void 0:f.docs)==null?void 0:b.source}}};var y,x,B;s.parameters={...s.parameters,docs:{...(y=s.parameters)==null?void 0:y.docs,source:{originalSource:"args => <Button {...args} />",...(B=(x=s.parameters)==null?void 0:x.docs)==null?void 0:B.source}}};var F,S,k;t.parameters={...t.parameters,docs:{...(F=t.parameters)==null?void 0:F.docs,source:{originalSource:"args => <Button {...args} />",...(k=(S=t.parameters)==null?void 0:S.docs)==null?void 0:k.source}}};var v,E,z;i.parameters={...i.parameters,docs:{...(v=i.parameters)==null?void 0:v.docs,source:{originalSource:"args => <Button {...args} />",...(z=(E=i.parameters)==null?void 0:E.docs)==null?void 0:z.source}}};var _,q,C;n.parameters={...n.parameters,docs:{...(_=n.parameters)==null?void 0:_.docs,source:{originalSource:"args => <Button {...args} />",...(C=(q=n.parameters)==null?void 0:q.docs)==null?void 0:C.source}}};var V,h,W;u.parameters={...u.parameters,docs:{...(V=u.parameters)==null?void 0:V.docs,source:{originalSource:"args => <Button {...args} />",...(W=(h=u.parameters)==null?void 0:h.docs)==null?void 0:W.source}}};const N=["PrimaryMedium","Small","Large","Disabled","Success","Error","Warning"];export{t as Disabled,n as Error,s as Large,a as PrimaryMedium,o as Small,i as Success,u as Warning,N as __namedExportsOrder,H as default};
