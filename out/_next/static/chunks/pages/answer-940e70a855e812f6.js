(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[878],{1552:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/answer",function(){return n(6633)}])},1473:function(e,t,n){"use strict";n.d(t,{l:function(){return c}});var s=n(6154);let c=e=>s.Z.post("https://api.openai.com/v1/engines/text-davinci-003/completions",{prompt:e,temperature:.4,max_tokens:1888},{headers:{Authorization:"Bearer ".concat("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"),"Content-Type":"application/json"}}).then(e=>e.data.choices[0].text).catch(e=>{console.log(e)})},5361:function(e,t,n){"use strict";var s=n(5893);let c=e=>(0,s.jsx)("button",{className:"btn-primary m-3 ".concat(e.loading?"animate-pulse":""),onClick:e.onClick,children:e.text});t.Z=c},6633:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return v}});var s=n(5893),c=n(9008),r=n.n(c),i=n(1664),l=n.n(i),a=n(9473),d=n(9705);let o=()=>{let e=(0,a.v9)(e=>e.recommendList.foodRecipe),t=(0,d.U)(e);return(0,s.jsx)(s.Fragment,{children:t&&(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)("div",{className:"grid grid-cols-2 mx-10 md:mx-48 my-6",children:[(0,s.jsxs)("div",{className:"justify-self-center",children:[(0,s.jsx)("p",{className:"font-extrabold text-center",children:"재료"}),e.map(e=>e.includes("-")?(0,s.jsxs)("div",{children:[(0,s.jsx)("br",{}),(0,s.jsx)("p",{children:e.replace("-","☑︎")+"\n"})]},e):null)]}),(0,s.jsxs)("div",{className:"justify-self-center",children:[(0,s.jsx)("p",{className:"font-extrabold text-center",children:"레시피"}),e.map(e=>"."===e[1]?(0,s.jsxs)("div",{children:[(0,s.jsx)("br",{}),(0,s.jsx)("p",{children:e+"\n"})]},e):null)]})]}),(0,s.jsx)("p",{className:"mt-10 text-gray",children:"다른 요리가 궁금하다면 재선택 후 검색해보세요"}),(0,s.jsx)(l(),{href:"/",children:(0,s.jsx)("span",{className:"text-lightOrange italic",children:"OR 다시 재료 고르러 가기 →"})})]})})};var x=n(7294),m=n(1473),h=n(5361),u=n(6530);let j=()=>{let[e,t]=(0,x.useState)(!1),n=(0,a.v9)(e=>e.recommendList.selectedFood),c=(0,a.I0)(),r=async e=>{e.preventDefault(),t(!0);try{let e=await (0,m.l)("".concat(n," 레시피 알려줘")).then(e=>e.toString());c((0,u.qv)(e.split("\n").filter(e=>e.length))),t(!1)}catch(e){console.log(e)}};return(0,s.jsxs)(s.Fragment,{children:[n&&(0,s.jsx)(h.Z,{loading:e,onClick:r,text:"선택한 요리 레시피 검색하기"}),e&&(0,s.jsx)("p",{className:"text-gray text-sm",children:"조금만 기다려주세요..."})]})},p=()=>{let[e,t]=(0,x.useState)(""),n=(0,a.v9)(e=>e.recommendList.recommendedFoodList),c=(0,a.I0)(),r=e=>{t(e.currentTarget.id),c((0,u.eD)(e.currentTarget.id))};return(0,s.jsxs)(s.Fragment,{children:[!e&&n.length>0&&(0,s.jsx)("p",{className:"mb-10 text-gray",children:"요리를 선택하시면 레시피를 알려드려요!"}),n.map(t=>(0,s.jsx)("div",{children:(0,s.jsx)("button",{className:"item-ingredient-btn mb-4 ".concat(t===e&&"bg-lightRed"),id:t,onClick:r,children:t})},t)),!e&&0===n.length&&(0,s.jsxs)(l(),{href:"/",className:"text-center",children:[(0,s.jsx)("p",{className:"text-lg",children:"앗! 선택된 재료가 없어요!"}),(0,s.jsx)("p",{className:"underline decoration-wavy text-lightRed",children:"재료 선택하러가기 →"})]})]})},g=()=>(0,s.jsxs)("div",{className:"flex flex-col items-center justify-center mb-10",children:[(0,s.jsx)(p,{}),(0,s.jsx)(j,{}),(0,s.jsx)(o,{})]}),f=()=>(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(r(),{children:(0,s.jsx)("title",{children:"마이 냉장고"})}),(0,s.jsx)(g,{})]});var v=f},9705:function(e,t,n){"use strict";n.d(t,{U:function(){return s}});let s=e=>0!==e.length}},function(e){e.O(0,[237,774,888,179],function(){return e(e.s=1552)}),_N_E=e.O()}]);