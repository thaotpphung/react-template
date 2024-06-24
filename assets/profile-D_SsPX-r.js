import{z as r,f as c,y as f,p as j,A as N,j as e,C as h,B as p,P as g,k as b,I as d,T as y,D as v}from"./index-B9yf-OaK.js";const P=r.object({email:r.string().min(1,"Required").email("Invalid email"),firstName:r.string().min(1,"Required"),lastName:r.string().min(1,"Required"),bio:r.string()}),U=({data:s})=>j.patch("/users/profile",s),w=({mutationConfig:s}={})=>{const{refetch:i}=c(),{onSuccess:a,...o}=s||{};return f({onSuccess:(...n)=>{i(),a==null||a(...n)},...o,mutationFn:U})},B=()=>{var o,n,u,x;const s=c(),{addNotification:i}=N(),a=w({mutationConfig:{onSuccess:()=>{i({type:"success",title:"Profile Updated"})}}});return e.jsx(h,{isDone:a.isSuccess,triggerButton:e.jsx(p,{icon:e.jsx(g,{className:"size-4"}),size:"sm",children:"Update Profile"}),title:"Update Profile",submitButton:e.jsx(p,{form:"update-profile",type:"submit",size:"sm",isLoading:a.isPending,children:"Submit"}),children:e.jsx(b,{id:"update-profile",onSubmit:t=>{a.mutate({data:t})},options:{defaultValues:{firstName:((o=s.data)==null?void 0:o.firstName)??"",lastName:((n=s.data)==null?void 0:n.lastName)??"",email:((u=s.data)==null?void 0:u.email)??"",bio:((x=s.data)==null?void 0:x.bio)??""}},schema:P,children:({register:t,formState:m})=>e.jsxs(e.Fragment,{children:[e.jsx(d,{label:"First Name",error:m.errors.firstName,registration:t("firstName")}),e.jsx(d,{label:"Last Name",error:m.errors.lastName,registration:t("lastName")}),e.jsx(d,{label:"Email Address",type:"email",error:m.errors.email,registration:t("email")}),e.jsx(y,{label:"Bio",error:m.errors.bio,registration:t("bio")})]})})})},l=({label:s,value:i})=>e.jsxs("div",{className:"py-4 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6 sm:py-5",children:[e.jsx("dt",{className:"text-sm font-medium text-gray-500",children:s}),e.jsx("dd",{className:"mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0",children:i})]}),R=()=>{const s=c();return s.data?e.jsx(v,{title:"Profile",children:e.jsxs("div",{className:"overflow-hidden bg-white shadow sm:rounded-lg",children:[e.jsxs("div",{className:"px-4 py-5 sm:px-6",children:[e.jsxs("div",{className:"flex justify-between",children:[e.jsx("h3",{className:"text-lg font-medium leading-6 text-gray-900",children:"User Information"}),e.jsx(B,{})]}),e.jsx("p",{className:"mt-1 max-w-2xl text-sm text-gray-500",children:"Personal details of the user."})]}),e.jsx("div",{className:"border-t border-gray-200 px-4 py-5 sm:p-0",children:e.jsxs("dl",{className:"sm:divide-y sm:divide-gray-200",children:[e.jsx(l,{label:"First Name",value:s.data.firstName}),e.jsx(l,{label:"Last Name",value:s.data.lastName}),e.jsx(l,{label:"Email Address",value:s.data.email}),e.jsx(l,{label:"Role",value:s.data.role}),e.jsx(l,{label:"Bio",value:s.data.bio})]})})]})}):null};export{R as ProfileRoute};
