(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[405],{8312:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return n(246)}])},5361:function(e,t,n){"use strict";var s=n(5893);let i=e=>(0,s.jsx)("button",{className:"btn-primary m-3 ".concat(e.loading?"animate-pulse":""),onClick:e.onClick,children:e.text});t.Z=i},7274:function(e,t,n){"use strict";n.d(t,{l:function(){return i}});var s=n(6154);let i=e=>s.Z.post("https://api.openai.com/v1/engines/text-davinci-003/completions",{prompt:e,temperature:.4,max_tokens:1888},{headers:{Authorization:"Bearer ".concat("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"),"Content-Type":"application/json"}}).then(e=>e.data.choices[0].text).catch(e=>{console.log(e)})},246:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return v}});var s=n(5893),i=n(9008),l=n.n(i),c=n(7294),r=n(9473),a=n(2759),o=n(9705);let d=()=>{let[e,t]=(0,c.useState)(""),n=(0,r.I0)(),i=!(0,o.U)(e),l=e=>t(e.target.value.trim()),d=s=>{s.preventDefault(),n((0,a.$8)(e)),t("")};return(0,s.jsxs)("form",{className:"flex items-center justify-center",onSubmit:d,children:[(0,s.jsx)("input",{className:"w-64 placeholder:italic placeholder:text-slate-400 bg-white rounded py-2 px-3 shadow-md focus:outline-none focus:border-yellow focus:ring-yellow focus:ring-1",type:"text",placeholder:"냉장고에 있는 재료를 입력해주세요!",value:e,onChange:l}),(0,s.jsx)("button",{className:"btn-primary ml-5 ".concat(i&&"bg-gray/20"),type:"submit",disabled:i,children:"등록"})]})};var u=n(3222);let m=()=>{let e=(0,r.v9)(e=>e.ingredientList.ingredientList),t=(0,r.v9)(e=>e.ingredientList.selectList),n=(0,r.I0)(),i=(0,o.U)(e),l=(0,o.U)(t),c=e=>n((0,a.Gh)(e.currentTarget.id)),d=e=>n((0,a.IE)(e.currentTarget.id));return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)("ul",{className:"my-10 overflow-y-auto h-64 px-10",children:[!i&&(0,s.jsxs)("div",{className:"flex items-center",children:[(0,s.jsx)("span",{className:"text-xl",children:"재료가 텅 비어있어요"}),(0,s.jsx)("img",{src:"".concat(u.O,"/sad.svg"),className:"w-12 h-12 inline-block"})]}),e.map(e=>(0,s.jsxs)("li",{className:"mb-3 flex items-center",children:[(0,s.jsx)("span",{id:e,onClick:c,className:"item-ingredient",children:e}),(0,s.jsx)("button",{className:"btn-option-del",id:e,onClick:d,children:"삭제"})]},e))]}),i&&!l&&(0,s.jsxs)("div",{children:[(0,s.jsx)("span",{children:"재료를 선택해주시면 요리를 추천해드릴게요!"}),(0,s.jsx)("img",{className:"w-10 h-10 inline-block",src:"".concat(u.O,"/search.svg")})]})]})};var x=n(1163),h=n(5361),p=n(7274),j=n(6530);let f=()=>{let[e,t]=(0,c.useState)(!1),n=(0,r.v9)(e=>e.ingredientList.selectList),i=(0,r.I0)(),l=(0,x.useRouter)(),a=(0,o.U)(n),d="".concat(n.join(","),"가 모두 사용되는 요리 레시피 5개 이름 알려줘"),u=async e=>{e.preventDefault(),t(!0);try{let e=await (0,p.l)(d).then(e=>e.toString().trim());i((0,j.AU)(e.split("\n").map(e=>e.slice(3)))),t(!1),i((0,j.qv)([])),l.push("/answer")}catch(e){console.log(e)}};return(0,s.jsx)(s.Fragment,{children:a&&(0,s.jsx)(h.Z,{loading:e,onClick:u,text:"요리 검색하기"})})},g=()=>{let e=(0,r.v9)(e=>e.ingredientList.selectList),t=(0,r.I0)(),n=(0,o.U)(e),i=e=>t((0,a.yZ)(e.currentTarget.id));return(0,s.jsx)(s.Fragment,{children:n&&(0,s.jsxs)("div",{className:"w-64 shadow-xl flex flex-col items-center rounded-md bg-yellow/10",children:[(0,s.jsx)("p",{className:"font-bold text-xl m-3",children:"선택된 재료"}),(0,s.jsx)("ul",{className:"my-6 overflow-y-auto h-60",children:e.map(e=>(0,s.jsxs)("li",{className:"mb-3 flex items-center",children:[(0,s.jsx)("span",{className:"inline-block item-ingredient font-bold",children:e}),(0,s.jsx)("button",{className:"btn-option-del",id:e,onClick:i,children:"삭제"})]},e))}),(0,s.jsx)(f,{})]})})},N=()=>(0,s.jsxs)("div",{className:"flex flex-col items-center justify-center mb-10",children:[(0,s.jsx)(d,{}),(0,s.jsx)(m,{}),(0,s.jsx)(g,{})]}),b=()=>(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(l(),{children:(0,s.jsx)("title",{children:"Home"})}),(0,s.jsx)(N,{})]});var v=b},9705:function(e,t,n){"use strict";n.d(t,{U:function(){return s}});let s=e=>0!==e.length},1163:function(e,t,n){e.exports=n(880)}},function(e){e.O(0,[237,774,888,179],function(){return e(e.s=8312)}),_N_E=e.O()}]);