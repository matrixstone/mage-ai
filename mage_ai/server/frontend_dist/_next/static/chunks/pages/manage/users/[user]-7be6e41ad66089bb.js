(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[4496],{55072:function(e,n,r){"use strict";r.d(n,{Et:function(){return f},Q:function(){return d}});r(82684);var t=r(71180),o=r(55485),u=r(38276),s=r(31748),i=r(72473),l=r(79633),a=r(70515),c=r(28598),d=30,f=9;n.ZP=function(e){var n=e.page,r=e.maxPages,d=e.onUpdate,f=e.totalPages,p=[],m=r;if(m>f)p=Array.from({length:f},(function(e,n){return n}));else{var v=Math.floor(m/2),h=n-v;n+v>=f?(h=f-m+2,m-=2):n-v<=0?(h=0,m-=2):(m-=4,h=n-Math.floor(m/2)),p=Array.from({length:m},(function(e,n){return n+h}))}return(0,c.jsx)(c.Fragment,{children:f>0&&(0,c.jsxs)(o.ZP,{alignItems:"center",children:[(0,c.jsx)(t.ZP,{disabled:0===n,onClick:function(){return d(n-1)},children:(0,c.jsx)(i.PaginateArrowLeft,{size:1.5*a.iI,stroke:s.Av})}),!p.includes(0)&&(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(u.Z,{ml:1,children:(0,c.jsx)(t.ZP,{borderLess:!0,noBackground:!0,onClick:function(){return d(0)},children:1})},0),!p.includes(1)&&(0,c.jsx)(u.Z,{ml:1,children:(0,c.jsx)(t.ZP,{noBackground:!0,noPadding:!0,notClickable:!0,children:"..."})},0)]}),p.map((function(e){return(0,c.jsx)(u.Z,{ml:1,children:(0,c.jsx)(t.ZP,{backgroundColor:e===n&&l.a$,borderLess:!0,noBackground:!0,notClickable:e===n,onClick:function(){e!==n&&d(e)},children:e+1})},e)})),!p.includes(f-1)&&(0,c.jsxs)(c.Fragment,{children:[!p.includes(f-2)&&(0,c.jsx)(u.Z,{ml:1,children:(0,c.jsx)(t.ZP,{noBackground:!0,noPadding:!0,notClickable:!0,children:"..."})},0),(0,c.jsx)(u.Z,{ml:1,children:(0,c.jsx)(t.ZP,{borderLess:!0,noBackground:!0,onClick:function(){return d(f-1)},children:f})},f-1)]}),(0,c.jsx)(u.Z,{ml:1}),(0,c.jsx)(t.ZP,{disabled:n===f-1,onClick:function(){return d(n+1)},children:(0,c.jsx)(i.PaginateArrowRight,{size:1.5*a.iI,stroke:s.Av})})]})})}},14875:function(e,n,r){"use strict";r.d(n,{Z3:function(){return t},ms:function(){return u},s7:function(){return o}});var t=[{autoComplete:"username",label:"Username",required:!0,uuid:"username"},{autoComplete:"email",disabled:!1,label:"Email",required:!0,type:"email",uuid:"email"}],o="password_current",u=[{autoComplete:"current-password",label:"Current password",type:"password",uuid:o},{autoComplete:"new-password",label:"New password",type:"password",uuid:"password"},{autoComplete:"new-password",label:"Confirm new password",type:"password",uuid:"password_confirmation"}]},36043:function(e,n,r){"use strict";var t=r(82394),o=r(21831),u=r(75582),s=r(21764),i=r(82684),l=r(83455),a=r(71180),c=r(31882),d=r(55485),f=r(85854),p=r(44085),m=r(38276),v=r(30160),h=r(17488),b=r(35686),w=r(50018),j=r(98464),g=r(82359),Z=r(14875),x=r(86735),y=r(42122),P=r(72619),O=r(28598);function _(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),r.push.apply(r,t)}return r}function k(e){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{};n%2?_(Object(r),!0).forEach((function(n){(0,t.Z)(e,n,r[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):_(Object(r)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))}))}return e}n.Z=function(e){var n=e.disabledFields,r=e.hideFields,_=e.newUser,C=e.onDeleteSuccess,E=e.onSaveSuccess,S=e.showDelete,M=e.title,D=e.user,I=(0,i.useState)(!0),T=I[0],U=I[1],A=(0,i.useState)({}),F=A[0],N=A[1],L=(0,i.useState)(null),R=L[0],q=L[1],B=((0,w.Z)()||{}).owner,W=b.ZP.statuses.list().data,G=(0,i.useMemo)((function(){var e;return(null==W||null===(e=W.statuses)||void 0===e?void 0:e[0])||{}}),[W]),H=G.project_type,V=G.project_uuid,z="global",Q=null,X=null;H===g.k.SUB?(z="project",Q=V):H===g.k.MAIN&&(X="The roles selected here will apply to this user globally.\n                If a user has both a global role and a workspace role,\n                then the role with higher access will take precedence.");var $=b.ZP.roles.list({entity:z,entity_ids:Q?[Q]:[],limit_roles:!!_},{revalidateOnFocus:!1}),J=$.data,K=($.mutate,(0,i.useMemo)((function(){return(null==J?void 0:J.roles)||[]}),[null==J?void 0:J.roles])),Y=(0,l.Db)(_?b.ZP.users.useCreate():b.ZP.users.useUpdate(null==D?void 0:D.id),{onSuccess:function(e){return(0,P.wD)(e,{callback:function(e){var n=e.user,r=Z.Z3.concat(Z.ms).map((function(e){return e.uuid}));r.push("id");var t=(0,y.GL)(n,r);q(t),s.Am.success(_?"New user created successfully.":"User profile successfully updated.",{position:s.Am.POSITION.BOTTOM_RIGHT,toastId:"user-update-success-".concat(n.id)}),null==E||E(t)},onErrorCallback:function(e){var n=e.error,r=n.errors,t=n.exception,o=n.message,u=n.type;s.Am.error((null==r?void 0:r.error)||t||o,{position:s.Am.POSITION.BOTTOM_RIGHT,toastId:u})}})}}),ee=(0,u.Z)(Y,2),ne=ee[0],re=ee[1].isLoading,te=(0,l.Db)(b.ZP.users.useDelete(null==D?void 0:D.id),{onSuccess:function(e){return(0,P.wD)(e,{callback:function(){null==C||C()},onErrorCallback:function(e){var n=e.error,r=n.errors,t=n.message;alert(t),console.log(r)}})}}),oe=(0,u.Z)(te,2),ue=oe[0],se=oe[1].isLoading,ie=r?(0,o.Z)(r):[];_&&ie.push(Z.s7);var le=!ie||!ie.includes(Z.s7),ae=(0,j.Z)(D);(0,i.useEffect)((function(){if(D&&(!R||(null==ae?void 0:ae.id)!==(null==D?void 0:D.id))){var e=Z.Z3.concat(Z.ms).map((function(e){return e.uuid}));q((0,y.GL)(D,e))}null!=R&&R.password||null!=R&&R.password_confirmation?(null==R?void 0:R.password)!==(null==R?void 0:R.password_confirmation)?N({password_confirmation:"Password confirmation does not match."}):!le||null!=R&&R.password_current?N(null):N({password_current:"This field is required."}):null!=R&&R.password_current&&le?null!=R&&R.password&&null!=R&&R.password_confirmation?N(null):N({password:"This field is required.",password_confirmation:"This field is required."}):null!=R&&R.password_current||null!=R&&R.password||null!=R&&R.password_confirmation||N(null)}),[R,le,D,ae]);var ce=(0,i.useState)(!1),de=ce[0],fe=ce[1],pe=(0,i.useMemo)((function(){return(de?null==R?void 0:R.roles_new:null==D?void 0:D.roles_new)||[]}),[R,de,D]),me=(0,i.useMemo)((function(){var e=(null==K?void 0:K.map((function(e){return e.id})))||[];return null==pe?void 0:pe.filter((function(n){var r=n.id;return e.includes(r)}))}),[pe,K]);return(0,O.jsxs)(O.Fragment,{children:[(0,O.jsx)(f.Z,{children:M||"Edit profile"}),(0,O.jsxs)("form",{children:[Z.Z3.filter((function(e){var n=e.uuid;return!ie||!ie.includes(n)})).map((function(e){var n=e.autoComplete,r=e.disabled,o=e.label,u=e.required,s=e.type,i=e.uuid;return(0,O.jsx)(m.Z,{mt:2,children:(0,O.jsx)(h.Z,{autoComplete:n,disabled:r&&!_,label:o,onChange:function(e){U(!1),q((function(n){return k(k({},n),{},(0,t.Z)({},i,e.target.value))}))},primary:!0,required:u,setContentOnMount:!0,type:s,value:(null==R?void 0:R[i])||""})},i)})),!(null!=D&&D.owner)&&!(null!=ie&&ie.includes("roles"))&&(0,O.jsxs)(m.Z,{mt:2,children:[X&&(0,O.jsx)(m.Z,{mb:1,children:(0,O.jsx)(v.ZP,{children:X})}),(0,O.jsx)(p.Z,{disabled:null==n?void 0:n.includes("roles"),label:"Roles",onChange:function(e){var n=(0,x.sE)(K,(function(n){return n.id==e.target.value}));n&&(U(!1),fe(!0),q((function(e){var r={};return(0,x.sE)(pe,(function(e){return e.id==(null==n?void 0:n.id)}))||(r={roles_new:[].concat((0,o.Z)(pe),[n])}),k(k({},e),r)})))},primary:!0,setContentOnMount:!0,children:K.map((function(e){var n=e.id,r=e.name;return(0,O.jsx)("option",{value:n,children:r},r)}))}),(0,O.jsx)(m.Z,{mb:1}),(0,O.jsx)(d.ZP,{alignItems:"center",flexWrap:"wrap",children:null==me?void 0:me.map((function(e){var r=e.id,t=e.name;return(0,O.jsx)(m.Z,{mb:1,mr:1,children:(0,O.jsx)(c.Z,{disabled:null==n?void 0:n.includes("roles"),label:t,onClick:function(){U(!1),fe(!0),q((function(e){return k(k({},e),{},{roles_new:(0,x.Od)(pe,(function(e){return e.id===r}))})}))},primary:!0})},"user_roles/".concat(t))}))})]}),(0,O.jsxs)(m.Z,{mt:5,children:[(0,O.jsx)(f.Z,{children:_?"Password":"Change password"}),Z.ms.filter((function(e){var n=e.uuid;return!ie||!ie.includes(n)})).map((function(e){var n=e.autoComplete,r=e.disabled,o=e.label,u=e.required,s=e.type,i=e.uuid;return(0,O.jsx)(m.Z,{mt:2,children:(0,O.jsx)(h.Z,{autoComplete:n,disabled:r,label:o,meta:{error:null==F?void 0:F[i],touched:!(null==F||!F[i])},onChange:function(e){U(!1),q((function(n){return k(k({},n),{},(0,t.Z)({},i,e.target.value))}))},primary:!0,required:u,setContentOnMount:!0,type:s,value:(null==R?void 0:R[i])||""})},i)}))]}),(0,O.jsx)(m.Z,{mt:5,children:(0,O.jsxs)(d.ZP,{children:[(0,O.jsx)(a.ZP,{disabled:T||F&&!(0,y.Qr)(F),loading:re,onClick:function(){var e,n=k({},R);"roles_new"in n&&(n.roles_new=null===(e=R.roles_new)||void 0===e?void 0:e.map((function(e){return e.id})));ne({user:n})},primary:!0,children:_?"Create new user":"Update user profile"}),S&&B&&(0,O.jsx)(m.Z,{ml:1,children:(0,O.jsx)(a.ZP,{danger:!0,loading:se,onClick:function(){window.confirm("Are you sure you want to delete ".concat(R.username||R.email,"?"))&&ue()},children:"Delete user"})})]})})]})]})}},5178:function(e,n,r){"use strict";r.r(n),r.d(n,{default:function(){return F}});var t=r(77837),o=r(38860),u=r.n(o),s=r(82684),i=r(34376),l=r(93808),a=r(38276),c=r(36043),d=r(75582),f=r(21831),p=r(82394),m=r(21764),v=r(83455),h=r(71180),b=r(31882),w=r(55485),j=r(55072),g=r(44085),Z=r(4190),x=r(75499),y=r(30160),P=r(35686),O=r(86735),_=r(72619),k=r(69419),C=r(28598);function E(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),r.push.apply(r,t)}return r}function S(e){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{};n%2?E(Object(r),!0).forEach((function(n){(0,p.Z)(e,n,r[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):E(Object(r)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))}))}return e}var M=function(e){e.fetchUser;var n=e.isLoadingWorkspaces,r=e.user,t=e.workspaces,o=(0,i.useRouter)(),u=(0,s.useState)(),l=u[0],c=u[1],E=(0,s.useState)(!0),M=E[0],D=E[1];(0,s.useEffect)((function(){r&&c(r)}),[r]);var I=(0,k.iV)(),T=null!=I&&I.page?I.page:0,U=(null==t?void 0:t.length)||0,A=(0,s.useMemo)((function(){return null==t?void 0:t.slice(10*T,10*T+10)}),[t,T]),F=(0,s.useMemo)((function(){return null==A?void 0:A.map((function(e){return e.project_uuid}))}),[A]),N=P.ZP.roles.list({entity:"project",entity_ids:F},{revalidateOnFocus:!1},{pauseFetch:!A}),L=N.data,R=N.isValidating,q=(N.mutate,(0,s.useCallback)((function(e){return null==e?void 0:e.reduce((function(e,n){var r,t=e;return null==n||null===(r=n.permissions)||void 0===r||r.forEach((function(e){var r=e.entity_id,o=t[r]||[];t=S(S({},t),{},(0,p.Z)({},r,[].concat((0,f.Z)(o),[n])))})),t}),{})}),[])),B=(0,s.useMemo)((function(){var e=(null==L?void 0:L.roles)||[];return q(e)}),[L,q]),W=(0,s.useMemo)((function(){var e=l||r,n=null==e?void 0:e.roles_new;return q(n)}),[q,l,r]),G=(0,v.Db)(P.ZP.users.useUpdate(null==r?void 0:r.id),{onSuccess:function(e){return(0,_.wD)(e,{callback:function(){o.push("/manage/users")},onErrorCallback:function(e){var n=e.error,r=n.errors,t=n.exception,o=n.message,u=n.type;m.Am.error((null==r?void 0:r.error)||t||o,{position:m.Am.POSITION.BOTTOM_RIGHT,toastId:u})}})}}),H=(0,d.Z)(G,2),V=H[0],z=H[1].isLoading;return(0,C.jsxs)(C.Fragment,{children:[(0,C.jsx)(a.Z,{p:2,children:(0,C.jsx)(h.ZP,{disabled:M,loading:z,onClick:function(){var e,n=S(S({},l),{},{roles_new:null==l||null===(e=l.roles_new)||void 0===e?void 0:e.map((function(e){return e.id}))});V({user:n})},primary:!0,children:"Update workspace roles"})}),R||n?(0,C.jsx)(a.Z,{p:2,children:(0,C.jsx)(Z.Z,{color:"white"})}):(0,C.jsx)(x.Z,{columnFlex:[1,1],columns:[{uuid:"Workspace"},{uuid:"Role"}],rows:null==A?void 0:A.map((function(e){var n=e.name,r=e.project_uuid,t=(null==B?void 0:B[r])||[],o=null==W?void 0:W[r];return[(0,C.jsx)(y.ZP,{bold:!0,children:n},"name"),(0,C.jsxs)(C.Fragment,{children:[(0,C.jsx)(g.Z,{label:"Roles",onChange:function(e){D(!1);var n=(0,O.sE)(t,(function(n){return n.id==e.target.value}));n&&c((function(e){var r,t=(null==e||null===(r=e.roles_new)||void 0===r?void 0:r.filter((function(e){return e.id!=(null==n?void 0:n.id)})))||[],o={roles_new:[].concat((0,f.Z)(t),[n])};return S(S({},e),o)}))},primary:!0,setContentOnMount:!0,children:t.map((function(e){var n=e.id,r=e.name;return(0,C.jsx)("option",{value:n,children:r},r)}))},"project_role"),(0,C.jsx)(a.Z,{mb:1}),(0,C.jsx)(w.ZP,{alignItems:"center",flexWrap:"wrap",children:null==o?void 0:o.map((function(e){var n=e.id,r=e.name;return(0,C.jsx)(a.Z,{mb:1,mr:1,children:(0,C.jsx)(b.Z,{label:r,onClick:function(){D(!1),c((function(e){return S(S({},e),{},{roles_new:(0,O.Od)((null==e?void 0:e.roles_new)||[],(function(e){return e.id===n}))})}))},primary:!0})},"user_roles/".concat(r))}))})]})]}))}),(0,C.jsx)(a.Z,{p:2,children:(0,C.jsx)(j.ZP,{maxPages:j.Et,onUpdate:function(e){var n=Number(e),t=S(S({},I),{},{page:n>=0?n:0});o.push("/manage/users/[user]","/manage/users/".concat(r.id,"?").concat((0,k.uM)(t)))},page:Number(T),totalPages:Math.ceil(U/10)})})]})},D=r(59533),I=r(70515),T=r(14875),U=r(75083);function A(e){var n=e.user,r=(0,i.useRouter)(),t=(0,s.useState)(null),o=t[0],u=t[1],l=null==n?void 0:n.id,d=P.ZP.users.detail(l),f=d.data,p=d.mutate,m=P.ZP.statuses.list().data,v=(0,s.useMemo)((function(){var e,n;return null==m||null===(e=m.statuses)||void 0===e||null===(n=e[0])||void 0===n?void 0:n.instance_type}),[m]),h=(0,s.useMemo)((function(){return null==f?void 0:f.user}),[f]);(0,s.useEffect)((function(){(0,_.bB)(f,u)}),[f]);var b=P.ZP.workspaces.list({cluster_type:v,user_id:l},{revalidateOnFocus:!1}),w=b.data,j=b.isValidating,g=(0,s.useMemo)((function(){return(0,C.jsx)(a.Z,{p:I.cd,children:(0,C.jsx)(c.Z,{hideFields:[T.s7],onDeleteSuccess:function(){return r.push("/manage/users")},onSaveSuccess:function(){return r.push("/manage/users")},showDelete:!0,title:"Edit user",user:h})})}),[r,h]),Z=(0,s.useMemo)((function(){return null==w?void 0:w.workspaces}),[w]);return(0,C.jsx)(D.Z,{before:g,breadcrumbs:[{label:function(){return"Workspaces"},linkProps:{as:"/manage",href:"/manage"}},{label:function(){return"Users"},linkProps:{as:"/manage/users",href:"/manage/users"}},{bold:!0,label:function(){return(null==h?void 0:h.username)||"User"}}],errors:o,pageName:U.L6.USERS,children:(0,C.jsx)(M,{fetchUser:p,user:h,isLoadingWorkspaces:j,workspaces:Z})})}A.getInitialProps=function(){var e=(0,t.Z)(u().mark((function e(n){var r;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=n.query.user,e.abrupt("return",{user:{id:r}});case 2:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}();var F=(0,l.Z)(A)},11976:function(e,n,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/manage/users/[user]",function(){return r(5178)}])},80022:function(e,n,r){"use strict";function t(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}r.d(n,{Z:function(){return t}})},15544:function(e,n,r){"use strict";function t(e){return t=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},t(e)}r.d(n,{Z:function(){return t}})},13692:function(e,n,r){"use strict";r.d(n,{Z:function(){return o}});var t=r(61049);function o(e,n){if("function"!=typeof n&&null!==n)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(n&&n.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),n&&(0,t.Z)(e,n)}},93189:function(e,n,r){"use strict";r.d(n,{Z:function(){return u}});var t=r(12539),o=r(80022);function u(e,n){if(n&&("object"===t(n)||"function"==typeof n))return n;if(void 0!==n)throw new TypeError("Derived constructors may only return object or undefined");return(0,o.Z)(e)}}},function(e){e.O(0,[449,1598,9774,2888,179],(function(){return n=11976,e(e.s=n);var n}));var n=e.O();_N_E=n}]);