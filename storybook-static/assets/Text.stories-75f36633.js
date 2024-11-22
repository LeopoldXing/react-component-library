import{u as H,j as $}from"./styled-components.browser.esm-9044cd9c.js";import"./index-76fb7be0.js";import"./_commonjsHelpers-de833af9.js";const P=H.span`
  font-family: "Playfair Display", serif;
  font-size: ${e=>e.types==="header"?"1.6rem":e.types==="paragraph"?"1rem":"0.7rem"};
  font-weight: ${e=>e.bold?"bold":"normal"};
  font-style: ${e=>e.italic?"italic":"normal"};
  ${e=>e.disabled&&`
    background-color: grey;
    cursor: not-allowed;
    color: #ccc;
  `}
`,l=({types:e="paragraph",bold:C,italic:I,text:V,...B})=>$(P,{types:e,bold:C,italic:I,...B,children:V});try{l.displayName="Text",l.__docgenInfo={description:"",displayName:"Text",props:{text:{defaultValue:null,description:"",name:"text",required:!1,type:{name:"string"}},types:{defaultValue:{value:"paragraph"},description:"",name:"types",required:!1,type:{name:"enum",value:[{value:'"header"'},{value:'"paragraph"'},{value:'"copyright"'}]}},bold:{defaultValue:null,description:"",name:"bold",required:!1,type:{name:"boolean"}},italic:{defaultValue:null,description:"",name:"italic",required:!1,type:{name:"boolean"}},disabled:{defaultValue:null,description:"",name:"disabled",required:!1,type:{name:"boolean"}}}}}catch{}const R={title:"Components/Text",component:l,argTypes:{}},a={args:{types:"paragraph",text:"Paragraph"}},r={args:{types:"header",text:"Header Text"}},t={args:{types:"copyright",text:"Copyright Text"}},s={args:{bold:!0,text:"Bold Text"}},o={args:{italic:!0,text:"Italic Text"}},n={args:{text:"Disabled",disabled:!0}};var c,p,d;a.parameters={...a.parameters,docs:{...(c=a.parameters)==null?void 0:c.docs,source:{originalSource:`{
  args: {
    types: "paragraph",
    text: "Paragraph"
  }
}`,...(d=(p=a.parameters)==null?void 0:p.docs)==null?void 0:d.source}}};var i,u,m;r.parameters={...r.parameters,docs:{...(i=r.parameters)==null?void 0:i.docs,source:{originalSource:`{
  args: {
    types: "header",
    text: "Header Text"
  }
}`,...(m=(u=r.parameters)==null?void 0:u.docs)==null?void 0:m.source}}};var x,g,y;t.parameters={...t.parameters,docs:{...(x=t.parameters)==null?void 0:x.docs,source:{originalSource:`{
  args: {
    types: "copyright",
    text: "Copyright Text"
  }
}`,...(y=(g=t.parameters)==null?void 0:g.docs)==null?void 0:y.source}}};var T,f,h;s.parameters={...s.parameters,docs:{...(T=s.parameters)==null?void 0:T.docs,source:{originalSource:`{
  args: {
    bold: true,
    text: "Bold Text"
  }
}`,...(h=(f=s.parameters)==null?void 0:f.docs)==null?void 0:h.source}}};var b,_,D;o.parameters={...o.parameters,docs:{...(b=o.parameters)==null?void 0:b.docs,source:{originalSource:`{
  args: {
    italic: true,
    text: "Italic Text"
  }
}`,...(D=(_=o.parameters)==null?void 0:_.docs)==null?void 0:D.source}}};var S,q,v;n.parameters={...n.parameters,docs:{...(S=n.parameters)==null?void 0:S.docs,source:{originalSource:`{
  args: {
    text: "Disabled",
    disabled: true
  }
}`,...(v=(q=n.parameters)==null?void 0:q.docs)==null?void 0:v.source}}};const k=["DefaultText","HeaderText","CopyRightText","BoldText","ItalicText","DisabledText"];export{s as BoldText,t as CopyRightText,a as DefaultText,n as DisabledText,r as HeaderText,o as ItalicText,k as __namedExportsOrder,R as default};
