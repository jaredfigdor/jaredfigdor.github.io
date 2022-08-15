(function(){"use strict";var t={1138:function(t,i,e){var s=e(144),o=e(998),a=e(5716),n=e(3059),c=e(3687),l=function(){var t=this,i=t._self._c;return i(o.Z,[i(a.Z,{attrs:{app:"",color:"primary",dark:""}},[i("div",{staticClass:"wrapflex"},[i("div",{staticClass:"d-flex align-center"},[t._v(" ProtoCoach ")])]),i(c.Z)],1),i(n.Z,[i("router-view")],1)],1)},r=[],d={name:"App",data:()=>({})},u=d,f=e(1001),v=(0,f.Z)(u,l,r,!1,null,null,null),p=v.exports,m=e(8345),h=e(5550),b=e(6190),C=e(579),g=e(1267),_=e(3201),k=e(5808),y=e(7397),x=e(4525),w=e(1666),Z=e(1783),S=e(7953),A=function(){var t=this,i=t._self._c;return i("div",{staticClass:"wrapper"},[i(_.Z,{staticClass:"mt-8",attrs:{row:""}},[i(g.Z,{attrs:{xs12:"",sm6:"","offset-sm3":""}},[i(C.Z,[i(Z.Z,{attrs:{color:"teal",dark:""}},[i(h.Z),i(S.qW,[t._v("Volumes")]),i(c.Z),i(b.Z,{attrs:{icon:""}})],1),i(k.Z,t._l(t.items,(function(e){return i(y.Z,{key:e.title,scopedSlots:t._u([{key:"activator",fn:function(){return[i(x.Z,[i(w.km,[i(w.V9,[t._v(t._s(e.title))])],1)],1)]},proxy:!0}],null,!0),model:{value:e.active,callback:function(i){t.$set(e,"active",i)},expression:"item.active"}},t._l(e.items,(function(s){return i(x.Z,{key:e.section_id,attrs:{to:{name:"view-sections",params:{section_id:s.section_id}}}},[i(w.km,[i(w.V9,[t._v(t._s(s.stitle))])],1)],1)})),1)})),1)],1)],1)],1)],1)},P=[],O=e(8085),L=(e(6257),{apiKey:"AIzaSyAxs71qzDjm5pWRmrlqkP8vzHRRtgalAZc",authDomain:"protocoach-dev.firebaseapp.com",projectId:"protocoach-dev",storageBucket:"protocoach-dev.appspot.com",messagingSenderId:"831931592195",appId:"1:831931592195:web:43a8d2b4c747f65c61a836"});const q=O.Z.initializeApp(L);var B=q.firestore(),E={data(){return{section_id:null,name:null,policy:null,section:null,status:null,record:null,stitle:null,islocked:null,volume1:[],items:[{title:"Volume 1",items:[]},{title:"Volume 2"}]}},created(){B.collection("volumes").get().then((t=>{t.forEach((t=>{console.log(t.data());const i={id:t.id,volumes:t.data().volume,name:t.data().name,section:t.data().section,islocked:t.data().islocked,section_id:t.data().section_id,stitle:t.data().stitle,policy:t.data().policy,modification:t.data().modification};this.items[0]["items"].push(i)}))}))},watch:{$route:"showSection"},methods:{fetchData(){B.collection("volumes").where("section_id","==",this.$route.params.section_id).get().then((t=>{t.forEach((t=>{this.section_id=t.data().section_id,this.name=t.data().name,this.section=t.data().section,this.status=t.data().status,this.stitle=t.data().stitle,this.policy=t.data().policy,this.record=t.data().record,this.islocked=t.data().islocked,this.modification=t.data().modification}))}))},showSection(){st.push({name:"view-sections",params:{section_id:subItem.section_id}})}}},N=E,j=(0,f.Z)(N,A,P,!1,null,null,null),I=j.exports,$=e(4886),D=e(626),M=e(2165),R=e(1854),T=function(){var t=this,i=t._self._c;return i("div",{staticClass:"containment"},[i("div",{attrs:{id:"view-sections"}},[i("h5",[t._v(" Section "+t._s(this.section_id)+" : "+t._s(this.stitle)+" ")]),i("div",{staticClass:"row"},[i("form",{staticClass:"col-s12",on:{submit:function(i){return i.preventDefault(),t.updateSection.apply(null,arguments)}}},[i("div",{staticClass:"col s4"},[i("div",{staticClass:"input-field"},[i("input",{directives:[{name:"model",rawName:"v-model",value:t.section_id,expression:"section_id"}],attrs:{disabled:"",type:"text",required:""},domProps:{value:t.section_id},on:{input:function(i){i.target.composing||(t.section_id=i.target.value)}}}),i("span",{staticClass:"helper-text"},[t._v("Section ID#")])])]),i("div",{staticClass:"col s4"},[i("div",{staticClass:"input-field"},[i("input",{directives:[{name:"model",rawName:"v-model",value:t.status,expression:"status"}],attrs:{disabled:"",type:"text",required:""},domProps:{value:t.status},on:{input:function(i){i.target.composing||(t.status=i.target.value)}}}),i("span",{staticClass:"helper-text"},[t._v("Status")])])]),i("div",{staticClass:"row"},[i("div",{staticClass:"input-field col s4"},[i("input",{directives:[{name:"model",rawName:"v-model",value:t.record,expression:"record"}],attrs:{disabled:"",type:"text",required:""},domProps:{value:t.record},on:{input:function(i){i.target.composing||(t.record=i.target.value)}}}),i("span",{staticClass:"helper-text"},[t._v("Record #")])])]),i("div",{staticClass:"col s4"},[i("div",{staticClass:"input-field"},[i("input",{directives:[{name:"model",rawName:"v-model",value:t.section,expression:"section"}],attrs:{disabled:"",type:"text",required:""},domProps:{value:t.section},on:{input:function(i){i.target.composing||(t.section=i.target.value)}}}),i("span",{staticClass:"helper-text"},[t._v("Section")])])]),i("div",{staticClass:"col s4"},[i("div",{staticClass:"input-field"},[i("input",{directives:[{name:"model",rawName:"v-model",value:t.stitle,expression:"stitle"}],attrs:{disabled:"",type:"text",required:""},domProps:{value:t.stitle},on:{input:function(i){i.target.composing||(t.stitle=i.target.value)}}}),i("span",{staticClass:"helper-text"},[t._v("Title")])])]),i("div",{staticClass:"row"},[i("div",{staticClass:"input-field col s4"},[i("input",{directives:[{name:"model",rawName:"v-model",value:t.name,expression:"name"}],attrs:{disabled:"",type:"text",required:""},domProps:{value:t.name},on:{input:function(i){i.target.composing||(t.name=i.target.value)}}}),i("span",{staticClass:"helper-text"},[t._v("Name")])])]),i("div",{staticClass:"row"},[i("div",[i(R.Z,{attrs:{color:"cyan","slider-color":"yellow"},model:{value:t.active,callback:function(i){t.active=i},expression:"active"}},[i(D.Z,{on:{click:t.back}},[t._v(" Policy ")]),i(D.Z,{on:{click:t.next}},[t._v(" modification ")]),i(M.Z,[i(C.Z,{attrs:{flat:""}},[i($.ZB,[t.editor?i("div",[i("div",{staticClass:"tapbuttons"},[i("button",{staticClass:"btn bold",class:{"is-active":t.editor.isActive("bold")},on:{click:function(i){t.editor.chain().focus().toggleBold().run()}}},[i("i",{staticClass:"fa-solid fa-bold"})]),i("button",{staticClass:"btn italic",class:{"is-active":t.editor.isActive("italic")},on:{click:function(i){t.editor.chain().focus().toggleItalic().run()}}},[i("i",{staticClass:"fa-solid fa-italic fa-1x"})]),i("button",{staticClass:"btn strike",class:{"is-active":t.editor.isActive("strike")},on:{click:function(i){t.editor.chain().focus().toggleStrike().run()}}},[i("i",{staticClass:"fa-solid fa-strikethrough"})]),i("button",{staticClass:"btn listb",class:{"is-active":t.editor.isActive("bulletList")},on:{click:function(i){t.editor.chain().focus().toggleBulletList().run()}}},[i("i",{staticClass:"fa-solid fa-list-ul"})]),i("button",{staticClass:"btn listn",class:{"is-active":t.editor.isActive("orderedList")},on:{click:function(i){t.editor.chain().focus().toggleOrderedList().run()}}},[i("i",{staticClass:"fa-solid fa-list-ol"})]),i("button",{staticClass:"btn undo",on:{click:function(i){t.editor.chain().focus().undo().run()}}},[i("i",{staticClass:"fa-solid fa-rotate-left"})]),i("button",{staticClass:"btn redo",on:{click:function(i){t.editor.chain().focus().redo().run()}}},[i("i",{staticClass:"fa-solid fa-rotate-right"})])])]):t._e(),i("editor-content",{attrs:{editor:t.editor}})],1)],1)],1),i(M.Z,[i(C.Z,{attrs:{flat:""}},[i($.ZB,[t.editor?i("div",{attrs:{"editable:":"",false:""}},[i("div",{staticClass:"tapbuttons"},[i("button",{staticClass:"btn bold",class:{"is-active":t.editor.isActive("bold")},on:{click:function(i){t.editor.chain().focus().toggleBold().run()}}},[i("i",{staticClass:"fa-solid fa-bold"})]),i("button",{staticClass:"btn italic",class:{"is-active":t.editor.isActive("italic")},on:{click:function(i){t.editor.chain().focus().toggleItalic().run()}}},[i("i",{staticClass:"fa-solid fa-italic fa-1x"})]),i("button",{staticClass:"btn strike",class:{"is-active":t.editor.isActive("strike")},on:{click:function(i){t.editor.chain().focus().toggleStrike().run()}}},[i("i",{staticClass:"fa-solid fa-strikethrough"})]),i("button",{staticClass:"btn listb",class:{"is-active":t.editor.isActive("bulletList")},on:{click:function(i){t.editor.chain().focus().toggleBulletList().run()}}},[i("i",{staticClass:"fa-solid fa-list-ul"})]),i("button",{staticClass:"btn listn",class:{"is-active":t.editor.isActive("orderedList")},on:{click:function(i){t.editor.chain().focus().toggleOrderedList().run()}}},[i("i",{staticClass:"fa-solid fa-list-ol"})]),i("button",{staticClass:"btn undo",on:{click:function(i){t.editor.chain().focus().undo().run()}}},[i("i",{staticClass:"fa-solid fa-rotate-left"})]),i("button",{staticClass:"btn redo",on:{click:function(i){t.editor.chain().focus().redo().run()}}},[i("i",{staticClass:"fa-solid fa-rotate-right"})])])]):t._e(),i("editor-content",{attrs:{editor:t.editor}})],1)],1)],1)],1)],1)]),i("div",{staticClass:"buttons"},[i("div",{staticClass:"col"},[i(b.Z,{attrs:{to:"/",color:"grey",dark:""}},[t._v(" Back ")])],1),i("div",{staticClass:"col"},[i(b.Z,{attrs:{color:"red",dark:"",to:{name:"edit-sections",params:{section_id:t.section_id}}}},[i("i",{staticClass:"fa fa-unlock"}),t._v(" Unlock ")])],1)])])])])])},V=[],z=e(772),U=e(7753),W=(e(9068),{components:{EditorContent:z.kg},name:"view-sections",props:{value:{type:String,default:""}},data(){return{editor:null,active:null,section_id:null,name:null,policy:null,section:null,status:null,stitle:null,record:null,modification:null}},beforeRouteEnter(t,i,e){B.collection("volumes").where("section_id","==",t.params.section_id).get().then((t=>{t.forEach((t=>{e((i=>{i.section_id=t.data().section_id,i.name=t.data().name,i.section=t.data().section,i.status=t.data().status,i.stitle=t.data().stitle,i.policy=t.data().policy,i.record=t.data().record,i.modification=t.data().modification}))}))}))},mounted(){this.editor=new z.ML({extensions:[U.Z],content:this.policy})},beforeUnmount(){this.editor.destroy()},methods:{next(){this.editor.commands.setContent({type:"doc",content:[{type:"text",text:this.modification}]})},back(){this.editor.commands.setContent({type:"doc",content:[{type:"text",text:this.policy}]})},editSection(){st.push({name:"edit-sections",params:{section_id:section_id}})}}}),F=W,H=(0,f.Z)(F,T,V,!1,null,null,null),K=H.exports,G=function(){var t=this,i=t._self._c;return i("div",{staticClass:"containment"},[i("div",{attrs:{id:"view-sections"}},[i("h5",[t._v(" Section "+t._s(this.section_id)+" : "+t._s(this.stitle)+" ")]),i("div",{staticClass:"row"},[i("form",{staticClass:"col-s12",on:{submit:function(i){return i.preventDefault(),t.updateSection.apply(null,arguments)}}},[i("div",{staticClass:"col s4"},[i("div",{staticClass:"input-field"},[i("input",{directives:[{name:"model",rawName:"v-model",value:t.section_id,expression:"section_id"}],attrs:{type:"text",required:""},domProps:{value:t.section_id},on:{input:function(i){i.target.composing||(t.section_id=i.target.value)}}}),i("span",{staticClass:"helper-text"},[t._v("Section ID#")])])]),i("div",{staticClass:"col s4"},[i("div",{staticClass:"input-field"},[i("input",{directives:[{name:"model",rawName:"v-model",value:t.status,expression:"status"}],attrs:{type:"text",required:""},domProps:{value:t.status},on:{input:function(i){i.target.composing||(t.status=i.target.value)}}}),i("span",{staticClass:"helper-text"},[t._v("Status")])])]),i("div",{staticClass:"row"},[i("div",{staticClass:"input-field col s4"},[i("input",{directives:[{name:"model",rawName:"v-model",value:t.record,expression:"record"}],attrs:{type:"text",required:""},domProps:{value:t.record},on:{input:function(i){i.target.composing||(t.record=i.target.value)}}}),i("span",{staticClass:"helper-text"},[t._v("Record #")])])]),i("div",{staticClass:"col s4"},[i("div",{staticClass:"input-field"},[i("input",{directives:[{name:"model",rawName:"v-model",value:t.section,expression:"section"}],attrs:{type:"text",required:""},domProps:{value:t.section},on:{input:function(i){i.target.composing||(t.section=i.target.value)}}}),i("span",{staticClass:"helper-text"},[t._v("Section")])])]),i("div",{staticClass:"col s4"},[i("div",{staticClass:"input-field"},[i("input",{directives:[{name:"model",rawName:"v-model",value:t.stitle,expression:"stitle"}],attrs:{type:"text",required:""},domProps:{value:t.stitle},on:{input:function(i){i.target.composing||(t.stitle=i.target.value)}}}),i("span",{staticClass:"helper-text"},[t._v("Title")])])]),i("div",{staticClass:"row"},[i("div",{staticClass:"input-field col s4"},[i("input",{directives:[{name:"model",rawName:"v-model",value:t.name,expression:"name"}],attrs:{type:"text",required:""},domProps:{value:t.name},on:{input:function(i){i.target.composing||(t.name=i.target.value)}}}),i("span",{staticClass:"helper-text"},[t._v("Name")])])]),i("div",{staticClass:"row"},[i("div",[i(R.Z,{attrs:{color:"cyan","slider-color":"yellow"},model:{value:t.active,callback:function(i){t.active=i},expression:"active"}},[i(D.Z,{on:{click:t.back}},[t._v(" Policy ")]),i(D.Z,{on:{click:t.next}},[t._v(" Modification ")]),i(M.Z,[i(C.Z,{attrs:{flat:""}},[i($.ZB,[t.editor?i("div",[i("div",{staticClass:"tapbuttons"},[i("button",{staticClass:"btn bold",class:{"is-active":t.editor.isActive("bold")},on:{click:function(i){t.editor.chain().focus().toggleBold().run()}}},[i("i",{staticClass:"fa-solid fa-bold"})]),i("button",{staticClass:"btn italic",class:{"is-active":t.editor.isActive("italic")},on:{click:function(i){t.editor.chain().focus().toggleItalic().run()}}},[i("i",{staticClass:"fa-solid fa-italic fa-1x"})]),i("button",{staticClass:"btn strike",class:{"is-active":t.editor.isActive("strike")},on:{click:function(i){t.editor.chain().focus().toggleStrike().run()}}},[i("i",{staticClass:"fa-solid fa-strikethrough"})]),i("button",{staticClass:"btn listb",class:{"is-active":t.editor.isActive("bulletList")},on:{click:function(i){t.editor.chain().focus().toggleBulletList().run()}}},[i("i",{staticClass:"fa-solid fa-list-ul"})]),i("button",{staticClass:"btn listn",class:{"is-active":t.editor.isActive("orderedList")},on:{click:function(i){t.editor.chain().focus().toggleOrderedList().run()}}},[i("i",{staticClass:"fa-solid fa-list-ol"})]),i("button",{staticClass:"btn undo",on:{click:function(i){t.editor.chain().focus().undo().run()}}},[i("i",{staticClass:"fa-solid fa-rotate-left"})]),i("button",{staticClass:"btn redo",on:{click:function(i){t.editor.chain().focus().redo().run()}}},[i("i",{staticClass:"fa-solid fa-rotate-right"})])])]):t._e(),i("editor-content",{attrs:{editor:t.editor}})],1)],1)],1),i(M.Z,[i(C.Z,{attrs:{flat:""}},[i($.ZB,[t.editor?i("div",[i("div",{staticClass:"tapbuttons"},[i("button",{staticClass:"btn bold",class:{"is-active":t.editor.isActive("bold")},on:{click:function(i){t.editor.chain().focus().toggleBold().run()}}},[i("i",{staticClass:"fa-solid fa-bold"})]),i("button",{staticClass:"btn italic",class:{"is-active":t.editor.isActive("italic")},on:{click:function(i){t.editor.chain().focus().toggleItalic().run()}}},[i("i",{staticClass:"fa-solid fa-italic fa-1x"})]),i("button",{staticClass:"btn strike",class:{"is-active":t.editor.isActive("strike")},on:{click:function(i){t.editor.chain().focus().toggleStrike().run()}}},[i("i",{staticClass:"fa-solid fa-strikethrough"})]),i("button",{staticClass:"btn listb",class:{"is-active":t.editor.isActive("bulletList")},on:{click:function(i){t.editor.chain().focus().toggleBulletList().run()}}},[i("i",{staticClass:"fa-solid fa-list-ul"})]),i("button",{staticClass:"btn listn",class:{"is-active":t.editor.isActive("orderedList")},on:{click:function(i){t.editor.chain().focus().toggleOrderedList().run()}}},[i("i",{staticClass:"fa-solid fa-list-ol"})]),i("button",{staticClass:"btn undo",on:{click:function(i){t.editor.chain().focus().undo().run()}}},[i("i",{staticClass:"fa-solid fa-rotate-left"})]),i("button",{staticClass:"btn redo",on:{click:function(i){t.editor.chain().focus().redo().run()}}},[i("i",{staticClass:"fa-solid fa-rotate-right"})])])]):t._e(),i("editor-content",{attrs:{editor:t.editor}})],1)],1)],1)],1)],1)]),i("div",{staticClass:"buttons"},[i("div",{staticClass:"col"},[i(b.Z,{attrs:{to:"/:section_id",color:"grey",dark:""}},[t._v(" Back ")])],1),i("div",{staticClass:"col"},[i(b.Z,{attrs:{color:"green",dark:"",type:"submit"}},[i("i",{staticClass:"fa fa-unlock"}),t._v(" Save ")])],1)])])])])])},J=[],Q={components:{EditorContent:z.kg},name:"view-sections",props:{value:{type:String,default:""}},data(){return{editor:null,active:null,section_id:null,name:null,policy:null,section:null,status:null,islocked:null,stitle:null,record:null,modification:null}},beforeRouteEnter(t,i,e){B.collection("volumes").where("section_id","==",t.params.section_id).get().then((t=>{t.forEach((t=>{e((i=>{i.section_id=t.data().section_id,i.name=t.data().name,i.section=t.data().section,i.status=t.data().status,i.stitle=t.data().stitle,i.policy=t.data().policy,i.record=t.data().record,i.modification=t.data().modification}))}))}))},watch:{$route:"fetchData"},mounted(){this.editor=new z.ML({extensions:[U.Z],content:this.policy})},beforeUnmount(){this.editor.destroy()},methods:{next(){this.editor.commands.setContent({type:"doc",content:[{type:"text",text:this.modification}]})},back(){this.editor.commands.setContent({type:"doc",content:[{type:"text",text:this.policy}]})},fetchData(){B.collection("volumes").where("section_id","==",this.$route.params.section_id).get().then((t=>{t.forEach((t=>{this.section_id=t.data().section_id,this.name=t.data().name,this.section=t.data().section,this.status=t.data().status,this.stitle=t.data().stitle,this.policy=t.data().policy,this.record=t.data().record,this.islocked=t.data().islocked,this.modification=t.data().modification}))}))},updateSection(){B.collection("volumes").where("section_id","==",this.$route.params.section_id).get().then((t=>{t.forEach((t=>{t.ref.update({section_id:this.section_id,name:this.name,policy:this.section,status:this.status,stitle:this.stitle,policy:this.policy,islocked:this.islocked,record:this.record,modification:this.modification}).then((()=>{this.$router.push({name:"home",params:{section_id:this.section_id}})}))}))}))},deleteSection(){confirm("Are you sure")&&B.collection("volumes").where("section_id","==",this.$route.params.section_id).get().then((t=>{t.forEach((t=>{t.ref.delete(),this.$router.push("/")}))}))}}},X=Q,Y=(0,f.Z)(X,G,J,!1,null,null,null),tt=Y.exports;s.ZP.use(m.Z);const it=[{path:"/",name:"home",component:I},{path:"/:section_id",name:"view-sections",component:K},{path:"/edit/:section_id",name:"edit-sections",component:tt}],et=new m.Z({routes:it});var st=et,ot=e(8864);s.ZP.use(ot.Z);var at=new ot.Z({icons:{iconfont:"mdi"}});s.ZP.config.productionTip=!1;new s.ZP({router:st,components:{App:p},vuetify:at,render:t=>t(p)}).$mount("#app")}},i={};function e(s){var o=i[s];if(void 0!==o)return o.exports;var a=i[s]={id:s,loaded:!1,exports:{}};return t[s].call(a.exports,a,a.exports,e),a.loaded=!0,a.exports}e.m=t,function(){var t=[];e.O=function(i,s,o,a){if(!s){var n=1/0;for(d=0;d<t.length;d++){s=t[d][0],o=t[d][1],a=t[d][2];for(var c=!0,l=0;l<s.length;l++)(!1&a||n>=a)&&Object.keys(e.O).every((function(t){return e.O[t](s[l])}))?s.splice(l--,1):(c=!1,a<n&&(n=a));if(c){t.splice(d--,1);var r=o();void 0!==r&&(i=r)}}return i}a=a||0;for(var d=t.length;d>0&&t[d-1][2]>a;d--)t[d]=t[d-1];t[d]=[s,o,a]}}(),function(){e.n=function(t){var i=t&&t.__esModule?function(){return t["default"]}:function(){return t};return e.d(i,{a:i}),i}}(),function(){e.d=function(t,i){for(var s in i)e.o(i,s)&&!e.o(t,s)&&Object.defineProperty(t,s,{enumerable:!0,get:i[s]})}}(),function(){e.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"===typeof window)return window}}()}(),function(){e.hmd=function(t){return t=Object.create(t),t.children||(t.children=[]),Object.defineProperty(t,"exports",{enumerable:!0,set:function(){throw new Error("ES Modules may not assign module.exports or exports.*, Use ESM export syntax, instead: "+t.id)}}),t}}(),function(){e.o=function(t,i){return Object.prototype.hasOwnProperty.call(t,i)}}(),function(){e.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})}}(),function(){var t={143:0};e.O.j=function(i){return 0===t[i]};var i=function(i,s){var o,a,n=s[0],c=s[1],l=s[2],r=0;if(n.some((function(i){return 0!==t[i]}))){for(o in c)e.o(c,o)&&(e.m[o]=c[o]);if(l)var d=l(e)}for(i&&i(s);r<n.length;r++)a=n[r],e.o(t,a)&&t[a]&&t[a][0](),t[a]=0;return e.O(d)},s=self["webpackChunkpc"]=self["webpackChunkpc"]||[];s.forEach(i.bind(null,0)),s.push=i.bind(null,s.push.bind(s))}();var s=e.O(void 0,[998],(function(){return e(1138)}));s=e.O(s)})();
//# sourceMappingURL=app.d09cf652.js.map