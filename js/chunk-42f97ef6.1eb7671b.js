(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-42f97ef6"],{1009:function(t,e,s){"use strict";var a=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("nav",{staticClass:"bottom"},[t.isHome?s("div"):t._e(),t.isHome?t._e():s("router-link",{staticClass:"nav-bottom previous",attrs:{to:t.routesDefs.previous.to,tag:"a"}},[s("i",{staticClass:"material-icons"},[t._v("arrow_backward")]),t._v(t._s(t.routesDefs.previous.name))]),t.isContato?t._e():s("router-link",{staticClass:"nav-bottom next",attrs:{to:t.routesDefs.next.to,tag:"a"}},[t._v(t._s(t.routesDefs.next.name)+" "),s("i",{staticClass:"material-icons"},[t._v("arrow_forward")])])],1)},n=[],o={name:"navBottom",computed:{isHome:function(){return"/"===this.$route.path},isContato:function(){return"/contato"===this.$route.path}},props:{routesDefs:{previous:{to:String,name:String},next:{to:String,name:String}}}},i=o,r=(s("7902"),s("2877")),c=Object(r["a"])(i,a,n,!1,null,null,null);c.options.__file="NavBottom.vue";e["a"]=c.exports},"120d":function(t,e,s){},"39b7":function(t,e,s){"use strict";var a=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"gallery"},[t._t("default")],2)},n=[],o={name:"Gallery"},i=o,r=(s("5baa"),s("2877")),c=Object(r["a"])(i,a,n,!1,null,null,null);c.options.__file="Gallery.vue";e["a"]=c.exports},"448c":function(t,e,s){"use strict";var a=s("b212"),n=s.n(a);n.a},"5baa":function(t,e,s){"use strict";var a=s("9c52"),n=s.n(a);n.a},"6c6a":function(t,e,s){},7902:function(t,e,s){"use strict";var a=s("120d"),n=s.n(a);n.a},"92f6":function(t,e,s){"use strict";var a=s("d3f7"),n=s.n(a);n.a},"9c52":function(t,e,s){},a479:function(t,e,s){"use strict";s.r(e);var a=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"Especies"},[s("HeroTitle"),s("section",{staticClass:"especies-colecao"},t._l(t.especies,function(e,a){return s("div",{key:a,staticClass:"especie"},[s("h2",[t._v(t._s(e["titulo"]))]),e.nome_foto?s("img",{attrs:{src:t.imagePath(e.nome_foto),alt:"Foto de "+e.titulo}}):t._e(),s("p",[s("span",[t._v("Moitas cultivadas:")]),t._v(" "+t._s(e["moitas-cultivadas"]))]),s("p",{staticClass:"origem"},[s("span",[t._v("Origem:")]),t._v(" "+t._s(e["origem"]))]),s("p",{staticClass:"descricao"},[s("span",[t._v("Descricao:")]),s("br"),t._v(t._s(e["descricao"]))]),s("p",{staticClass:"usos"},[s("span",[t._v("Usos mais comuns:")]),s("br"),t._v(t._s(e["usos mais comuns"]))])])})),s("NavBottom",{attrs:{routesDefs:t.routesDefs}})],1)},n=[],o=(s("cadf"),s("551c"),s("097d"),s("eb38")),i=s("cd4b"),r=s("39b7"),c=s("1009"),u=s("b3fe"),l={name:"especies",data:function(){return{contentArray:!1,routesDefs:{next:{to:"/extensao",name:"Projetos de extensão"},previous:{to:"/projetobambu",name:"O que é o projeto bambu"}}}},computed:{especies:function(){return this.$store.state.especies}},methods:{imagePath:function(t){return this.imagesSrcBasePath+"especies/"+t}},mixins:[u["a"]],components:{HeroTitle:o["a"],TheContent:i["a"],Gallery:r["a"],NavBottom:c["a"]}},f=l,v=(s("448c"),s("2877")),_=Object(v["a"])(f,a,n,!1,null,"42466760",null);_.options.__file="Especies.vue";e["default"]=_.exports},b212:function(t,e,s){},cd4b:function(t,e,s){"use strict";var a=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"theContent"},[t._t("default")],2)},n=[],o={name:"TheContent"},i=o,r=(s("e68b"),s("2877")),c=Object(r["a"])(i,a,n,!1,null,null,null);c.options.__file="TheContent.vue";e["a"]=c.exports},d3f7:function(t,e,s){},e68b:function(t,e,s){"use strict";var a=s("6c6a"),n=s.n(a);n.a},eb38:function(t,e,s){"use strict";var a=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"HeroTitle"},[s("div",{staticClass:"header"},[s("h2",{staticClass:"page-title"},[t._v(t._s(this.$route.name))])])])},n=[],o={name:"HeroTitle"},i=o,r=(s("92f6"),s("2877")),c=Object(r["a"])(i,a,n,!1,null,"acd9cc12",null);c.options.__file="HeroTitle.vue";e["a"]=c.exports}}]);
//# sourceMappingURL=chunk-42f97ef6.1eb7671b.js.map