(this.webpackJsonpbbbs_team3_react=this.webpackJsonpbbbs_team3_react||[]).push([[17],{175:function(t,e,i){"use strict";var n=i(4),s=(i(176),i(0));function a(t){var e=t.filterList,i=t.name,a=t.handleClick,o=["tags",t.sectionClass].join(" ").trim(),c=["tags__list",e.length>3?"tags__list_mobile":""].join(" ").trim();return Object(s.jsx)("div",{className:o,children:Object(s.jsx)("ul",{className:c,children:e.map((function(t){return Object(s.jsx)("li",{className:"tags__list-item",children:Object(s.jsx)(n.r,{name:i,value:null===t||void 0===t?void 0:t.filter,title:null===t||void 0===t?void 0:t.name,isActive:null===t||void 0===t?void 0:t.isActive,onClick:a})},null===t||void 0===t?void 0:t.name)}))})})}a.defaultProps={filterList:[],sectionClass:"",name:"",handleClick:function(){}},e.a=a},176:function(t,e,i){},206:function(t,e,i){},254:function(t,e,i){"use strict";i.r(e);var n=i(3),s=i(1),a=i(15),o=i(5),c={headTitle:"".concat(o.n," | ").concat(o.y),headDescription:"\u0421\u0442\u0440\u0430\u043d\u0438\u0446\u0430 \u0441 \u043e\u0442\u0432\u0435\u0442\u0430\u043c\u0438 \u043d\u0430 \u043e\u0441\u043d\u043e\u0432\u043d\u044b\u0435 \u0432\u043e\u043f\u0440\u043e\u0441\u044b.",title:"\u041e\u0442\u0432\u0435\u0442\u044b \u043d\u0430 \u0432\u043e\u043f\u0440\u043e\u0441\u044b",textStubNoData:"\u0412 \u0434\u0430\u043d\u043d\u044b\u0439 \u043c\u043e\u043c\u0435\u043d\u0442 \u0441\u0442\u0440\u0430\u043d\u0438\u0446\u0430 \u0432\u043e\u043f\u0440\u043e\u0441\u043e\u0432 \u043f\u0443\u0441\u0442\u0430. \u0412\u043e\u0437\u0432\u0440\u0430\u0449\u0430\u0439\u0442\u0435\u0441\u044c \u043f\u043e\u0437\u0436\u0435!",formPlaceholder:"\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0432\u043e\u043f\u0440\u043e\u0441",formSubmitButton:"\u041e\u0442\u043f\u0440\u0430\u0432\u0438\u0442\u044c",formSubmitButtonLoading:"\u041e\u0442\u043f\u0440\u0430\u0432\u043a\u0430..."},r=i(7),l=i(2),u=i(11),d={beforeSubmit:{title:"\u0415\u0441\u043b\u0438 \u0432\u044b \u043d\u0435 \u043d\u0430\u0448\u043b\u0438 \u043e\u0442\u0432\u0435\u0442 \u043d\u0430 \u0441\u0432\u043e\u0439 \u0432\u043e\u043f\u0440\u043e\u0441 \u2014 \u043d\u0430\u043f\u0438\u0448\u0438\u0442\u0435 \u043d\u0430\u043c, \u0438 \u043c\u044b \u0432\u043a\u043b\u044e\u0447\u0438\u043c \u0435\u0433\u043e \u0432 \u0441\u043f\u0438\u0441\u043e\u043a",titleClass:"",formVisibilityClass:""},successSubmit:{title:"\u0421\u043f\u0430\u0441\u0438\u0431\u043e! \u041c\u044b \u043f\u0440\u0438\u043d\u044f\u043b\u0438 \u0432\u0430\u0448 \u0432\u043e\u043f\u0440\u043e\u0441. \u0412\u0430\u0448 \u0432\u043e\u043f\u0440\u043e\u0441 \u043e\u043f\u0443\u0431\u043b\u0438\u043a\u0443\u044e\u0442, \u043a\u0430\u043a \u0442\u043e\u043b\u044c\u043a\u043e \u043e\u043d \u043f\u0440\u043e\u0439\u0434\u0435\u0442 \u043f\u0440\u043e\u0432\u0435\u0440\u043a\u0443 \u0438 \u043c\u043e\u0434\u0435\u0440\u0430\u0442\u043e\u0440 \u0434\u0430\u0441\u0442 \u043d\u0430 \u043d\u0435\u0433\u043e \u043e\u0442\u0432\u0435\u0442!",titleClass:"add-question__title_success",formVisibilityClass:"question-form_invisible"},errorSubmit:{title:"\u041f\u0440\u043e\u0438\u0437\u043e\u0448\u043b\u0430 \u043e\u0448\u0438\u0431\u043a\u0430 \u043f\u0440\u0438 \u043e\u0442\u043f\u0440\u0430\u0432\u043a\u0435 \u0432\u0430\u0448\u0435\u0433\u043e \u0432\u043e\u043f\u0440\u043e\u0441\u0430! \u041f\u043e\u043f\u0440\u043e\u0431\u0443\u0439\u0442\u0435 \u043f\u043e\u0432\u0442\u043e\u0440\u0438\u0442\u044c \u043f\u043e\u0437\u0436\u0435 \u0438\u043b\u0438 \u043e\u0431\u0440\u0430\u0442\u0438\u0442\u044c\u0441\u044f \u0432 \u0441\u043b\u0443\u0436\u0431\u0443 \u043f\u043e\u0434\u0434\u0435\u0440\u0436\u043a\u0438!",titleClass:"add-question__title_error"}},b=i(50),j=i(14),f=i.n(j),m=i(6);function h(t){var e=t.limit,i=t.offset,n=t.tags;return f.a.get("".concat(m.b).concat(m.a,"/questions/"),{params:{limit:e,offset:i,tags:n}}).then((function(t){return t.data})).catch((function(t){return Promise.reject(null===t||void 0===t?void 0:t.response)}))}function g(){return f.a.get("".concat(m.b).concat(m.a,"/questions/tags/")).then((function(t){return t.data})).catch((function(t){return Promise.reject(null===t||void 0===t?void 0:t.response)}))}var v=i(45),O=i(54),_=i(46),x=i(175),p=i(4),q=(i(206),i(32)),C=i(0),S=c.headTitle,P=c.headDescription,N=c.title,k=c.textStubNoData,F=c.formPlaceholder,L=c.formSubmitButton,y=c.formSubmitButtonLoading;e.default=function(){var t=Object(s.useContext)(r.b).currentUser,e=Object(s.useContext)(r.c),i=e.serverError,o=e.setError,c=e.clearError,j=i?Object(b.a)(i):"",D=l.g.unauthorized,E=l.g.badRequest,T=Object(s.useState)(!1),B=Object(n.a)(T,2),V=B[0],I=B[1],w=Object(s.useState)(!1),U=Object(n.a)(w,2),z=U[0],A=U[1],G=Object(s.useState)(null),J=Object(n.a)(G,2),Q=J[0],R=J[1],M=Object(a.h)().state,H=null===M||void 0===M?void 0:M.question,K=null===M||void 0===M?void 0:M.id,W=Object(s.useState)(!1),X=Object(n.a)(W,2),Y=X[0],Z=X[1],$=Object(s.useState)(d.beforeSubmit),tt=Object(n.a)($,2),et=tt[0],it=tt[1],nt=Object(u.k)(),st=nt.values,at=nt.handleChange,ot=nt.errors,ct=nt.isValid,rt=nt.resetForm,lt=function(t){t?it(d.errorSubmit):(it(d.successSubmit),setTimeout((function(){rt(),c(),it(d.beforeSubmit)}),4e3))},ut=function(t){t.preventDefault();var e=st.question;A(!0),function(t){return f.a.post("".concat(m.b).concat(m.a,"/questions/"),t).then((function(t){return t.data})).catch((function(t){return Promise.reject(null===t||void 0===t?void 0:t.response)}))}({title:e}).then((function(){return lt(!1)})).catch((function(t){(null===t||void 0===t?void 0:t.status)===E||(null===t||void 0===t?void 0:t.status)===D?o(null===t||void 0===t?void 0:t.data):lt(!0)})).finally((function(){return A(!1)}))},dt={apiGetDataCallback:h,apiGetFiltersCallback:g,apiFilterNames:{tags:"tags"},pageSize:10,setIsPageError:I},bt=Object(u.h)(dt),jt=bt.dataToRender,ft=bt.filters,mt=bt.isPageLoading,ht=bt.isFiltersUsed,gt=bt.isPaginationUsed,vt=bt.totalPages,Ot=bt.pageIndex,_t=bt.changePageIndex,xt=bt.changeFilter;Object(s.useEffect)((function(){var t;K&&(t=K,f.a.get("".concat(m.b).concat(m.a,"/questions/").concat(t,"/")).then((function(t){return t.data})).catch((function(t){return Promise.reject(null===t||void 0===t?void 0:t.response)}))).then((function(t){Z(!0),R(t)})).catch((function(){return I(!0)})),H&&(Z(!0),R(H))}),[K,H]),Object(s.useEffect)((function(){Y&&Z(!1)}),[gt,ht]);var pt,qt=(pt=jt,H&&Y?pt.filter((function(t){return t.id!==H.id})):K&&Y?pt.filter((function(t){return t.id!==K})):pt);return mt?Object(C.jsx)(p.k,{isCentered:!0}):Object(C.jsx)(v.a,{headTitle:S,headDescription:P,children:Object(C.jsx)("section",{className:"questions-page page__section fade-in",children:function(){if(V||!qt.length)return Object(C.jsx)(_.a,{titleText:V?l.h.generalErrorMessage.title:k});return Object(C.jsxs)(C.Fragment,{children:[Object(C.jsx)(p.w,{title:N,sectionClass:"questions__title"}),Ct(),St(),t&&Object(C.jsx)(C.Fragment,{children:Object(C.jsxs)("section",{className:"add-question fade-in",children:[Object(C.jsx)(p.x,{sectionClass:"add-question__title ".concat(et.titleClass),title:et.title}),Object(C.jsxs)("form",{className:"question-form ".concat(et.formVisibilityClass),onSubmit:function(t){return ut(t)},noValidate:!0,children:[Object(C.jsxs)("fieldset",{className:"question-form__add-question",children:[Object(C.jsx)(p.i,{id:"questionsFormInput",type:"text",name:"question",placeholder:F,onChange:at,value:null===st||void 0===st?void 0:st.question,minLength:q.d.question.minLength,maxLength:q.d.question.maxLength,required:!0,error:null===ot||void 0===ot?void 0:ot.question,sectionClass:"input__question-form"}),Object(C.jsx)(p.b,{title:z?y:L,color:"black",sectionClass:"question-form__button",isSubmittable:!0,isDisabled:z||!ct})]}),Object(C.jsx)("span",{className:"form-error-message",children:j})]})]})})]})}()})});function Ct(){return ft.length>2?Object(C.jsx)(x.a,{filterList:ft,name:"tag",handleClick:xt}):null}function St(){return ht?Object(C.jsx)(p.k,{isPaginate:!0}):Object(C.jsxs)(C.Fragment,{children:[gt?Object(C.jsx)(p.k,{isPaginate:!0}):Object(C.jsx)(C.Fragment,{children:Object(C.jsxs)("ul",{className:"questions",children:[Pt(),qt.map((function(t){return Object(C.jsx)("li",{className:"questions__list-item slide-bottom-up",children:Object(C.jsx)(O.a,{data:t,sectionClass:"card__questions_type_questions-page",isQuestionsPage:!0})},null===t||void 0===t?void 0:t.id)}))]})}),vt>1&&Object(C.jsx)(p.q,{sectionClass:"cards-section__pagination",pageCount:vt,value:Ot,onChange:_t})]})}function Pt(){return Y&&Q?Object(C.jsx)("li",{className:"questions__list-item fade-in",children:Object(C.jsx)(O.a,{data:Q,sectionClass:"card__questions_type_questions-page",isQuestionsPage:!0,isOpenByDefault:!0})}):null}}}}]);