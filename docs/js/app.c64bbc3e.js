(function(t){function a(a){for(var e,r,o=a[0],n=a[1],l=a[2],f=0,_=[];f<o.length;f++)r=o[f],Object.prototype.hasOwnProperty.call(i,r)&&i[r]&&_.push(i[r][0]),i[r]=0;for(e in n)Object.prototype.hasOwnProperty.call(n,e)&&(t[e]=n[e]);d&&d(a);while(_.length)_.shift()();return c.push.apply(c,l||[]),s()}function s(){for(var t,a=0;a<c.length;a++){for(var s=c[a],e=!0,o=1;o<s.length;o++){var n=s[o];0!==i[n]&&(e=!1)}e&&(c.splice(a--,1),t=r(r.s=s[0]))}return t}var e={},i={app:0},c=[];function r(a){if(e[a])return e[a].exports;var s=e[a]={i:a,l:!1,exports:{}};return t[a].call(s.exports,s,s.exports,r),s.l=!0,s.exports}r.m=t,r.c=e,r.d=function(t,a,s){r.o(t,a)||Object.defineProperty(t,a,{enumerable:!0,get:s})},r.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},r.t=function(t,a){if(1&a&&(t=r(t)),8&a)return t;if(4&a&&"object"===typeof t&&t&&t.__esModule)return t;var s=Object.create(null);if(r.r(s),Object.defineProperty(s,"default",{enumerable:!0,value:t}),2&a&&"string"!=typeof t)for(var e in t)r.d(s,e,function(a){return t[a]}.bind(null,e));return s},r.n=function(t){var a=t&&t.__esModule?function(){return t["default"]}:function(){return t};return r.d(a,"a",a),a},r.o=function(t,a){return Object.prototype.hasOwnProperty.call(t,a)},r.p="/";var o=window["webpackJsonp"]=window["webpackJsonp"]||[],n=o.push.bind(o);o.push=a,o=o.slice();for(var l=0;l<o.length;l++)a(o[l]);var d=n;c.push([0,"chunk-vendors"]),s()})({0:function(t,a,s){t.exports=s("56d7")},"03fc":function(t,a,s){t.exports=s.p+"img/left_side.5f407c8f.svg"},"1fb0":function(t,a,s){t.exports=s.p+"img/front_bank.d6bad743.svg"},"271b":function(t,a,s){t.exports=s.p+"img/datacamp_certificate4.abfe1194.svg"},"278a":function(t,a,s){t.exports=s.p+"img/front_bank.d6bad743.svg"},"3c60":function(t,a,s){t.exports=s.p+"img/green_pipe.ca8ba1da.svg"},4496:function(t,a,s){t.exports=s.p+"img/datacamp_certificate5.fb7398f1.svg"},"51c4":function(t,a,s){t.exports=s.p+"img/google_analytics.f61ac4b6.svg"},"51c8":function(t,a,s){t.exports=s.p+"img/sun.4d28ad3a.svg"},"56d7":function(t,a,s){"use strict";s.r(a);s("e260"),s("e6cf"),s("cca6"),s("a79d");var e=s("2b0e"),i=function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{attrs:{id:"app"}},[s("OverlayMenu"),s("Home",{attrs:{msg:"Welcome to Your Home App"}}),s("Underground"),s("SkillCertificate"),s("AboutMe"),s("Projects"),s("Contact"),s("End")],1)},c=[],r=s("f5af"),o=s.n(r),n=(s("e829"),function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("header",{staticClass:"overlay-menu"},[s("span",{staticClass:"overlay-menu__menuIcon",on:{click:function(a){t.overlayActive=!0}}},[t._v(" ☰ ")]),s("div",{staticClass:"overlay-menu__overlay",class:{"overlay-menu__overlay--active":t.overlayActive}},[s("div",{staticClass:"overlay-menu__closebtn",on:{click:function(a){t.overlayActive=!1}}},[t._v(" × ")]),s("nav",{staticClass:"overlay-menu__nav"},[s("a",{staticClass:"overlay-menu__item",attrs:{href:"#home"},on:{click:function(a){t.overlayActive=!1}}},[t._v("Home")]),s("a",{staticClass:"overlay-menu__item",attrs:{href:"#skills_and_certifications"},on:{click:function(a){t.overlayActive=!1}}},[t._v("Qualifications")]),s("a",{staticClass:"overlay-menu__item",attrs:{href:"#about_me"},on:{click:function(a){t.overlayActive=!1}}},[t._v("About Me")]),s("a",{staticClass:"overlay-menu__item",attrs:{href:"#projects"},on:{click:function(a){t.overlayActive=!1}}},[t._v("Projects")]),s("a",{staticClass:"overlay-menu__item",attrs:{href:"#contact"},on:{click:function(a){t.overlayActive=!1}}},[t._v("Contact")])])])])}),l=[],d={name:"OverlayMenu",data:function(){return{overlayActive:!1}}},f=d,_=s("2877"),u=Object(_["a"])(f,n,l,!1,null,null,null),m=u.exports,v=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("section",{staticClass:"home",attrs:{id:"home"}},[t._m(0),e("img",{staticClass:"home__sun",attrs:{"data-aos":"fade-up-left","data-aos-duration":"1500",src:s("51c8"),alt:"sun"}}),e("img",{staticClass:"home__city",attrs:{"data-aos":"fade-left","data-aos-duration":"1000",src:s("7fa9"),alt:"city","data-aos-offset":"-50"}}),e("Waves"),e("img",{staticClass:"home__front",attrs:{src:s("278a"),alt:"bench and ground"}}),t._m(1)],1)},p=[function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"home__title",attrs:{"data-aos":"fade-up","data-aos-duration":"3000"}},[t._v("Ergin Deniz "),s("br"),t._v("Kösecioğlu"),s("br"),s("span",[t._v("- an IT guy -")])])},function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"home__down-arrow"},[s("a",{attrs:{href:"#underground","aria-label":"Continue"}},[s("span")])])}],g=function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"waves",class:t.darkWaves?"waves--dark":""},[s("div",{staticClass:"waves__sea"}),s("svg",{staticClass:"waves__waves",attrs:{xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",viewBox:"0 24 150 28",preserveAspectRatio:"none","shape-rendering":"auto"}},[s("defs",[s("path",{attrs:{id:"gentle-wave",d:"M-160 44c30 0 58-18 88-18s 58 18 88 18 58-18 88-18 58 18 88 18 v44h-352z"}})]),s("g",{staticClass:"waves__waveList"},[s("use",{attrs:{"xlink:href":"#gentle-wave",x:"48",y:"0"}}),s("use",{attrs:{"xlink:href":"#gentle-wave",x:"48",y:"3"}}),s("use",{attrs:{"xlink:href":"#gentle-wave",x:"48",y:"5"}}),s("use",{attrs:{"xlink:href":"#gentle-wave",x:"48",y:"7"}})])])])},h=[],b={name:"Wave",props:{darkWaves:Boolean}},C=b,y=Object(_["a"])(C,g,h,!1,null,null,null),k=y.exports,x={name:"Home",components:{Waves:k}},w=x,j=Object(_["a"])(w,v,p,!1,null,null,null),z=j.exports,E=function(){var t=this,a=t.$createElement;t._self._c;return t._m(0)},O=[function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("section",{staticClass:"undergrd"},[e("img",{staticClass:"undergrd__image",attrs:{src:s("64b0"),alt:"earth with pipes"}}),e("div",{staticClass:"undergrd__main",attrs:{id:"underground"}},[e("div",{staticClass:"undergrd__text",attrs:{"data-aos":"flip-up","data-aos-duration":"2000"}},[e("h2",[t._v(" Thank You For Visiting My "),e("br"),e("span",[t._v("Portfolio.")])])]),e("a",{staticClass:"undergrd__chest",attrs:{"data-aos":"fade-right","data-aos-easing":"ease-in-sine",href:"https://youtu.be/sIhYExeApXE",target:"_blank",src:"../../assets/svg/chest_idle.svg"}},[e("span",{staticClass:"undergrd__chestText"},[t._v("Hey! wanna see my video? 😊")])]),e("img",{staticClass:"undergrd__stone",attrs:{"data-aos":"fade-left","data-aos-easing":"ease-in-sine","data-aos-offset":"-50",src:s("72c5"),alt:"stones"}})])])}],A={name:"Underground"},S=A,$=Object(_["a"])(S,E,O,!1,null,null,null),M=$.exports,P=function(){var t=this,a=t.$createElement;t._self._c;return t._m(0)},T=[function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("section",{staticClass:"skill-certificate",attrs:{id:"skills_and_certifications"}},[e("div",{staticClass:"skill-certificate__skill-wrapper"},[e("div",{staticClass:"skill-certificate__text"},[t._v("Skills")]),e("div",{staticClass:"skill-certificate__skills",attrs:{"data-aos":"zoom-in"}},[e("div",{staticClass:"coin_text"},[t._v("Flutter/Dart")]),e("div",{staticClass:"coin"}),e("div",{staticClass:"coin"}),e("div",{staticClass:"coin"}),e("div",{staticClass:"coin"})]),e("div",{staticClass:"skill-certificate__skills",attrs:{"data-aos":"zoom-in","data-aos-delay":"200"}},[e("div",{staticClass:"coin_text"},[t._v("HTML/CSS/JS")]),e("div",{staticClass:"coin"}),e("div",{staticClass:"coin"}),e("div",{staticClass:"coin"}),e("div",{staticClass:"coin"})]),e("div",{staticClass:"skill-certificate__skills",attrs:{"data-aos":"zoom-in","data-aos-delay":"400","data-aos-offset":"-50"}},[e("div",{staticClass:"coin_text"},[t._v("React")]),e("div",{staticClass:"coin"}),e("div",{staticClass:"coin"}),e("div",{staticClass:"coin"})]),e("div",{staticClass:"skill-certificate__skills",attrs:{"data-aos":"zoom-in","data-aos-delay":"600","data-aos-offset":"-50"}},[e("div",{staticClass:"coin_text"},[t._v("Git")]),e("div",{staticClass:"coin"}),e("div",{staticClass:"coin"}),e("div",{staticClass:"coin"})]),e("div",{staticClass:"skill-certificate__skills",attrs:{"data-aos":"zoom-in","data-aos-delay":"800","data-aos-offset":"-50"}},[e("div",{staticClass:"coin_text"},[t._v("Python")]),e("div",{staticClass:"coin"}),e("div",{staticClass:"coin"})]),e("div",{staticClass:"skill-certificate__skills",attrs:{"data-aos":"zoom-in","data-aos-delay":"1000","data-aos-offset":"-50"}},[e("div",{staticClass:"coin_text"},[t._v("SQL")]),e("div",{staticClass:"coin"}),e("div",{staticClass:"coin"})])]),e("img",{staticClass:"skill-certificate__pipe",attrs:{id:"green_pipe",src:s("3c60"),alt:"green pipe"}}),e("div",{staticClass:"skill-certificate__certificates-wrapper"},[e("div",{staticClass:"skill-certificate__text"},[t._v("Certificates")]),e("a",{attrs:{target:"_blank",href:"https://www.freecodecamp.org/certification/edenizk/responsive-web-design","data-aos":"zoom-in"}},[e("img",{staticClass:"skill-certificate__certificate",attrs:{src:s("4496"),type:"image","aria-label":"freecodecamp certificate"}})]),e("a",{attrs:{target:"_blank",href:"https://drive.google.com/file/d/1AnP60QV4A7FheGgrNiRIqDConPRAyShK/view?usp=sharing","data-aos":"zoom-in","data-aos-delay":"200"}},[e("img",{staticClass:"skill-certificate__certificate",attrs:{src:s("271b"),type:"image","aria-label":"scrum certificate"}})]),e("a",{attrs:{target:"_blank",href:"https://www.datacamp.com/statement-of-accomplishment/course/2d0975892b23bdbfd3de44028229f3cfbcff121f","data-aos":"zoom-in","data-aos-delay":"400","data-aos-offset":"-50"}},[e("img",{staticClass:"skill-certificate__certificate",attrs:{src:s("e1e1"),type:"image","aria-label":"datacamp certificate 1"}})]),e("a",{attrs:{target:"_blank",href:"https://www.datacamp.com/statement-of-accomplishment/course/be0ce43746c9cf3d0f0dfd55ef663f810042f8f9","data-aos":"zoom-in","data-aos-delay":"600","data-aos-offset":"-50"}},[e("img",{staticClass:"skill-certificate__certificate",attrs:{src:s("6c3f"),type:"image","aria-label":"datacamp certificate 2"}})]),e("a",{attrs:{target:"_blank",href:"https://www.datacamp.com/statement-of-accomplishment/course/98327bb4212ce8de6aedac926079fb0c0f537fc4","data-aos":"zoom-in","data-aos-delay":"800","data-aos-offset":"-50"}},[e("img",{staticClass:"skill-certificate__certificate",attrs:{src:s("7776"),type:"image","aria-label":"datacamp certificate 3"}})]),e("a",{attrs:{target:"_blank",href:"https://analytics.google.com/analytics/academy/certificate/vSyxlz4QTmySfxl24TB1KQ","data-aos":"zoom-in","data-aos-delay":"1000","data-aos-offset":"-50"}},[e("img",{staticClass:"skill-certificate__certificate",attrs:{src:s("51c4"),type:"image","aria-label":"Google Analytics Certificate"}})])]),e("img",{staticClass:"skill-certificate__stone",attrs:{"data-aos":"fade-left","data-aos-easing":"ease-in-sine","data-aos-offset":"-50",src:s("72c5"),alt:"stones"}})])}],W={name:"SkillCertificate"},H=W,D=Object(_["a"])(H,P,T,!1,null,null,null),F=D.exports,I=function(){var t=this,a=t.$createElement;t._self._c;return t._m(0)},B=[function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("section",{staticClass:"about-me space_sections",attrs:{id:"about_me"}},[e("img",{staticClass:"about-me__stars about-me__stars--left stars",attrs:{"data-aos":"zoom-in-up","data-aos-duration":"1000",src:s("03fc"),alt:"stars"}}),e("img",{staticClass:"about-me__comet",attrs:{"data-aos":"fade-down-left","data-aos-delay":"300","data-aos-duration":"2000",src:s("a7f8"),alt:"comet"}}),e("div",{staticClass:"about-me__title"},[t._v("About Me")]),e("div",{staticClass:"about-me__text",attrs:{"data-aos":"fade-up","data-aos-duration":"2000"}},[t._v(" My name is Ergin Deniz Kösecioğlu, "),e("br"),t._v("but... "),e("br"),t._v("You can call me "),e("span",{staticStyle:{color:"#0BFFFF"}},[t._v("Deniz")]),t._v(" 😋. "),e("br"),t._v("I am an IT student who is a tireless seeker of knowledge and looking for new challenges in programming. also trying to learn how to make good design. "),e("br"),e("br"),t._v("I am also an animal lover, enjoy playing ukulele and like to make 2D/3D art in free time. ")]),e("img",{staticClass:"about-me__stars about-me__stars--right stars",attrs:{"data-aos":"zoom-in-up","data-aos-duration":"1000","data-aos-delay":"300",src:s("c076"),alt:"stars"}})])}],G={name:"AboutMe"},Q=G,Y=Object(_["a"])(Q,I,B,!1,null,null,null),J=Y.exports,K=function(){var t=this,a=t.$createElement;t._self._c;return t._m(0)},R=[function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("section",{staticClass:"projects space_sections",attrs:{id:"projects"}},[e("img",{staticClass:"projects__stars projects__stars--left stars",attrs:{src:s("d3ff"),alt:"stars","data-aos":"stars","data-aos-duration":"5000"}}),e("div",{staticClass:"projects__title"},[t._v("Projects")]),e("img",{staticClass:"projects__stars projects__stars--right stars",attrs:{src:s("d3ff"),alt:"stars","data-aos":"stars","data-aos-duration":"5000"}}),e("img",{staticClass:"comet",attrs:{id:"project_comet","data-aos":"fade-down-left","data-aos-delay":"300","data-aos-duration":"2000",src:s("a7f8"),alt:"comet"}}),e("div",{staticClass:"projects__projectsWrapper",attrs:{id:"about_me_text","data-aos":"fade-up","data-aos-duration":"2000"}},[e("p",{staticClass:"projects__tempText"},[t._v("Currently under construction but you can visit my GitHub page for my projects :)")]),e("a",{staticClass:"contact__icon",attrs:{target:"_blank",href:"https://github.com/edenizk","aria-label":"link to my github"}},[e("img",{attrs:{src:s("8921")}})])])])}],L={name:"Projects"},U=L,V=Object(_["a"])(U,K,R,!1,null,null,null),q=V.exports,N=function(){var t=this,a=t.$createElement;t._self._c;return t._m(0)},X=[function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("section",{staticClass:"space_sections contact",attrs:{id:"contact"}},[e("img",{staticClass:"contact__stars stars",staticStyle:{top:"5vh",right:"5vh",transform:"rotate(180deg)"},attrs:{src:s("d5c7"),alt:"stars"}}),e("img",{staticClass:"contact__stars stars",staticStyle:{left:"0vh",bottom:"0"},attrs:{src:s("d5c7"),alt:"stars"}}),e("div",{staticClass:"contact__text",attrs:{id:"contact_text","data-aos":"fade-up","data-aos-duration":"2000"}},[e("div",{staticClass:"contact__title",attrs:{id:"title_contact"}},[t._v(" You Have "),e("br"),t._v("A Cool Project? "),e("br"),t._v("Just Contact Me 😁 ")]),e("br"),e("a",{staticClass:"contact__email",attrs:{href:"mailto:ergindenizkosecioglu@gmail.com",id:"my_email"}},[t._v(" ergindenizkosecioglu@gmail.com ")]),e("div",{staticClass:"contact__icons",attrs:{id:"contact_icons"}},[e("a",{staticClass:"contact__icon",attrs:{target:"_blank",href:"https://github.com/edenizk","aria-label":"link to my github"}},[e("img",{attrs:{src:s("8921")}})]),e("a",{staticClass:"contact__icon",attrs:{target:"_blank",href:"https://www.linkedin.com/in/edkos/","aria-label":"link to my linkedin"}},[e("img",{attrs:{src:s("7184")}})]),e("a",{staticClass:"contact__icon",attrs:{target:"_blank",href:"https://www.artstation.com/dkpixx","aria-label":"link to my artstation"}},[e("img",{attrs:{src:s("6660")}})])])]),e("img",{staticClass:"contact__moon",attrs:{id:"contact_moon",src:s("f6fe"),alt:"moon","data-aos":"fade-down","data-aos-duration":"2000"}})])}],Z={name:"Contact"},tt=Z,at=Object(_["a"])(tt,N,X,!1,null,null,null),st=at.exports,et=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("section",{staticClass:"space_sections end",attrs:{id:"end"}},[e("div",{staticClass:"home__title end__title",staticStyle:{color:"white"},attrs:{"data-aos":"fade-up","data-aos-duration":"3000"}},[t._v(" GoodBye ")]),e("img",{staticClass:"stars",staticStyle:{top:"0",right:"120vh",transform:"rotate(-130deg)"},attrs:{src:s("d3ff"),alt:"stars"}}),e("img",{staticClass:"stars",staticStyle:{top:"0",right:"35vh",transform:"rotate(-130deg)"},attrs:{src:s("d3ff"),alt:"stars"}}),e("img",{attrs:{id:"end_comet",src:s("a7f8"),alt:"comet","data-aos":"fade-down-left","data-aos-delay":"300","data-aos-duration":"2000"}}),e("img",{staticClass:"home__sun",attrs:{src:s("f6fe"),alt:"sun","data-aos":"fade-up-left","data-aos-duration":"1500"}}),e("img",{staticClass:"home__city",attrs:{src:s("e801"),alt:"city","data-aos":"fade-left","data-aos-duration":"1000"}}),e("Waves",{attrs:{darkWaves:""}}),e("img",{staticClass:"home__front",staticStyle:{"z-index":"2"},attrs:{src:s("1fb0"),alt:"bench and ground"}})],1)},it=[],ct={name:"End",components:{Waves:k}},rt=ct,ot=Object(_["a"])(rt,et,it,!1,null,null,null),nt=ot.exports;s("cf0e");o.a.init();var lt={name:"App",components:{OverlayMenu:m,Home:z,Underground:M,SkillCertificate:F,AboutMe:J,Projects:q,Contact:st,End:nt}},dt=lt,ft=Object(_["a"])(dt,i,c,!1,null,null,null),_t=ft.exports;e["a"].config.productionTip=!1,new e["a"]({render:function(t){return t(_t)}}).$mount("#app")},"64b0":function(t,a,s){t.exports=s.p+"img/earth_with_pipes.90439264.svg"},6660:function(t,a,s){t.exports=s.p+"img/artstation.f5ce7057.svg"},"6c3f":function(t,a,s){t.exports=s.p+"img/datacamp_certificate2.42abcc1f.svg"},7184:function(t,a,s){t.exports=s.p+"img/linkedin.7d416fb8.svg"},"72c5":function(t,a,s){t.exports=s.p+"img/stone.2f1e8454.svg"},7776:function(t,a,s){t.exports=s.p+"img/datacamp_certificate3.47c0575a.svg"},"7fa9":function(t,a,s){t.exports=s.p+"img/city4.df9fde55.svg"},8921:function(t,a,s){t.exports=s.p+"img/git.5987f4a8.svg"},a7f8:function(t,a,s){t.exports=s.p+"img/comet.589634c9.svg"},c076:function(t,a,s){t.exports=s.p+"img/rightside_stars.6eb989e2.svg"},cf0e:function(t,a,s){},d3ff:function(t,a,s){t.exports=s.p+"img/stars3.7808ba42.svg"},d5c7:function(t,a,s){t.exports=s.p+"img/contact_stars.8f2e5983.svg"},e1e1:function(t,a,s){t.exports=s.p+"img/datacamp_certificate1.21e620d4.svg"},e801:function(t,a,s){t.exports=s.p+"img/city_night.fdfe621e.svg"},f6fe:function(t,a,s){t.exports=s.p+"img/moon.211c460c.svg"}});
//# sourceMappingURL=app.c64bbc3e.js.map