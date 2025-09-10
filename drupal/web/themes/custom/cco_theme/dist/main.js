/*!
 * Font Awesome Free 7.0.1 by @fontawesome - https://fontawesome.com
 * License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License)
 * Copyright 2025 Fonticons, Inc.
 */function xe(e,t){(t==null||t>e.length)&&(t=e.length);for(var a=0,r=Array(t);a<t;a++)r[a]=e[a];return r}function Sa(e){if(Array.isArray(e))return e}function ka(e){if(Array.isArray(e))return xe(e)}function Pa(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function Ea(e,t){for(var a=0;a<t.length;a++){var r=t[a];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,St(r.key),r)}}function Ia(e,t,a){return t&&Ea(e.prototype,t),Object.defineProperty(e,"prototype",{writable:!1}),e}function ee(e,t){var a=typeof Symbol!="undefined"&&e[Symbol.iterator]||e["@@iterator"];if(!a){if(Array.isArray(e)||(a=Me(e))||t){a&&(e=a);var r=0,n=function(){};return{s:n,n:function(){return r>=e.length?{done:!0}:{done:!1,value:e[r++]}},e:function(l){throw l},f:n}}throw new TypeError(`Invalid attempt to iterate non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}var o,i=!0,s=!1;return{s:function(){a=a.call(e)},n:function(){var l=a.next();return i=l.done,l},e:function(l){s=!0,o=l},f:function(){try{i||a.return==null||a.return()}finally{if(s)throw o}}}}function h(e,t,a){return(t=St(t))in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function Fa(e){if(typeof Symbol!="undefined"&&e[Symbol.iterator]!=null||e["@@iterator"]!=null)return Array.from(e)}function Ca(e,t){var a=e==null?null:typeof Symbol!="undefined"&&e[Symbol.iterator]||e["@@iterator"];if(a!=null){var r,n,o,i,s=[],l=!0,u=!1;try{if(o=(a=a.call(e)).next,t===0){if(Object(a)!==a)return;l=!1}else for(;!(l=(r=o.call(a)).done)&&(s.push(r.value),s.length!==t);l=!0);}catch(m){u=!0,n=m}finally{try{if(!l&&a.return!=null&&(i=a.return(),Object(i)!==i))return}finally{if(u)throw n}}return s}}function Oa(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function Na(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function Be(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable})),a.push.apply(a,r)}return a}function f(e){for(var t=1;t<arguments.length;t++){var a=arguments[t]!=null?arguments[t]:{};t%2?Be(Object(a),!0).forEach(function(r){h(e,r,a[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):Be(Object(a)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(a,r))})}return e}function oe(e,t){return Sa(e)||Ca(e,t)||Me(e,t)||Oa()}function I(e){return ka(e)||Fa(e)||Me(e)||Na()}function ja(e,t){if(typeof e!="object"||!e)return e;var a=e[Symbol.toPrimitive];if(a!==void 0){var r=a.call(e,t);if(typeof r!="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return(t==="string"?String:Number)(e)}function St(e){var t=ja(e,"string");return typeof t=="symbol"?t:t+""}function re(e){"@babel/helpers - typeof";return re=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},re(e)}function Me(e,t){if(e){if(typeof e=="string")return xe(e,t);var a={}.toString.call(e).slice(8,-1);return a==="Object"&&e.constructor&&(a=e.constructor.name),a==="Map"||a==="Set"?Array.from(e):a==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(a)?xe(e,t):void 0}}var Ve=function(){},Le={},kt={},Pt=null,Et={mark:Ve,measure:Ve};try{typeof window!="undefined"&&(Le=window),typeof document!="undefined"&&(kt=document),typeof MutationObserver!="undefined"&&(Pt=MutationObserver),typeof performance!="undefined"&&(Et=performance)}catch{}var Ta=Le.navigator||{},Je=Ta.userAgent,Ke=Je===void 0?"":Je,T=Le,p=kt,qe=Pt,Q=Et;T.document;var j=!!p.documentElement&&!!p.head&&typeof p.addEventListener=="function"&&typeof p.createElement=="function",It=~Ke.indexOf("MSIE")||~Ke.indexOf("Trident/"),me,_a=/fa(k|kd|s|r|l|t|d|dr|dl|dt|b|slr|slpr|wsb|tl|ns|nds|es|jr|jfr|jdr|cr|ss|sr|sl|st|sds|sdr|sdl|sdt)?[\-\ ]/,Ma=/Font ?Awesome ?([567 ]*)(Solid|Regular|Light|Thin|Duotone|Brands|Free|Pro|Sharp Duotone|Sharp|Kit|Notdog Duo|Notdog|Chisel|Etch|Thumbprint|Jelly Fill|Jelly Duo|Jelly|Slab Press|Slab|Whiteboard)?.*/i,Ft={classic:{fa:"solid",fas:"solid","fa-solid":"solid",far:"regular","fa-regular":"regular",fal:"light","fa-light":"light",fat:"thin","fa-thin":"thin",fab:"brands","fa-brands":"brands"},duotone:{fa:"solid",fad:"solid","fa-solid":"solid","fa-duotone":"solid",fadr:"regular","fa-regular":"regular",fadl:"light","fa-light":"light",fadt:"thin","fa-thin":"thin"},sharp:{fa:"solid",fass:"solid","fa-solid":"solid",fasr:"regular","fa-regular":"regular",fasl:"light","fa-light":"light",fast:"thin","fa-thin":"thin"},"sharp-duotone":{fa:"solid",fasds:"solid","fa-solid":"solid",fasdr:"regular","fa-regular":"regular",fasdl:"light","fa-light":"light",fasdt:"thin","fa-thin":"thin"},slab:{"fa-regular":"regular",faslr:"regular"},"slab-press":{"fa-regular":"regular",faslpr:"regular"},thumbprint:{"fa-light":"light",fatl:"light"},whiteboard:{"fa-semibold":"semibold",fawsb:"semibold"},notdog:{"fa-solid":"solid",fans:"solid"},"notdog-duo":{"fa-solid":"solid",fands:"solid"},etch:{"fa-solid":"solid",faes:"solid"},jelly:{"fa-regular":"regular",fajr:"regular"},"jelly-fill":{"fa-regular":"regular",fajfr:"regular"},"jelly-duo":{"fa-regular":"regular",fajdr:"regular"},chisel:{"fa-regular":"regular",facr:"regular"}},La={GROUP:"duotone-group",PRIMARY:"primary",SECONDARY:"secondary"},Ct=["fa-classic","fa-duotone","fa-sharp","fa-sharp-duotone","fa-thumbprint","fa-whiteboard","fa-notdog","fa-notdog-duo","fa-chisel","fa-etch","fa-jelly","fa-jelly-fill","fa-jelly-duo","fa-slab","fa-slab-press"],w="classic",J="duotone",Ot="sharp",Nt="sharp-duotone",jt="chisel",Tt="etch",_t="jelly",Mt="jelly-duo",Lt="jelly-fill",$t="notdog",Dt="notdog-duo",Rt="slab",zt="slab-press",Wt="thumbprint",Yt="whiteboard",$a="Classic",Da="Duotone",Ra="Sharp",za="Sharp Duotone",Wa="Chisel",Ya="Etch",Ua="Jelly",Ha="Jelly Duo",Ga="Jelly Fill",Xa="Notdog",Ba="Notdog Duo",Va="Slab",Ja="Slab Press",Ka="Thumbprint",qa="Whiteboard",Ut=[w,J,Ot,Nt,jt,Tt,_t,Mt,Lt,$t,Dt,Rt,zt,Wt,Yt];me={},h(h(h(h(h(h(h(h(h(h(me,w,$a),J,Da),Ot,Ra),Nt,za),jt,Wa),Tt,Ya),_t,Ua),Mt,Ha),Lt,Ga),$t,Xa),h(h(h(h(h(me,Dt,Ba),Rt,Va),zt,Ja),Wt,Ka),Yt,qa);var Qa={classic:{900:"fas",400:"far",normal:"far",300:"fal",100:"fat"},duotone:{900:"fad",400:"fadr",300:"fadl",100:"fadt"},sharp:{900:"fass",400:"fasr",300:"fasl",100:"fast"},"sharp-duotone":{900:"fasds",400:"fasdr",300:"fasdl",100:"fasdt"},slab:{400:"faslr"},"slab-press":{400:"faslpr"},whiteboard:{600:"fawsb"},thumbprint:{300:"fatl"},notdog:{900:"fans"},"notdog-duo":{900:"fands"},etch:{900:"faes"},chisel:{400:"facr"},jelly:{400:"fajr"},"jelly-fill":{400:"fajfr"},"jelly-duo":{400:"fajdr"}},Za={"Font Awesome 7 Free":{900:"fas",400:"far"},"Font Awesome 7 Pro":{900:"fas",400:"far",normal:"far",300:"fal",100:"fat"},"Font Awesome 7 Brands":{400:"fab",normal:"fab"},"Font Awesome 7 Duotone":{900:"fad",400:"fadr",normal:"fadr",300:"fadl",100:"fadt"},"Font Awesome 7 Sharp":{900:"fass",400:"fasr",normal:"fasr",300:"fasl",100:"fast"},"Font Awesome 7 Sharp Duotone":{900:"fasds",400:"fasdr",normal:"fasdr",300:"fasdl",100:"fasdt"},"Font Awesome 7 Jelly":{400:"fajr",normal:"fajr"},"Font Awesome 7 Jelly Fill":{400:"fajfr",normal:"fajfr"},"Font Awesome 7 Jelly Duo":{400:"fajdr",normal:"fajdr"},"Font Awesome 7 Slab":{400:"faslr",normal:"faslr"},"Font Awesome 7 Slab Press":{400:"faslpr",normal:"faslpr"},"Font Awesome 7 Thumbprint":{300:"fatl",normal:"fatl"},"Font Awesome 7 Notdog":{900:"fans",normal:"fans"},"Font Awesome 7 Notdog Duo":{900:"fands",normal:"fands"},"Font Awesome 7 Etch":{900:"faes",normal:"faes"},"Font Awesome 7 Chisel":{400:"facr",normal:"facr"},"Font Awesome 7 Whiteboard":{600:"fawsb",normal:"fawsb"}},er=new Map([["classic",{defaultShortPrefixId:"fas",defaultStyleId:"solid",styleIds:["solid","regular","light","thin","brands"],futureStyleIds:[],defaultFontWeight:900}],["duotone",{defaultShortPrefixId:"fad",defaultStyleId:"solid",styleIds:["solid","regular","light","thin"],futureStyleIds:[],defaultFontWeight:900}],["sharp",{defaultShortPrefixId:"fass",defaultStyleId:"solid",styleIds:["solid","regular","light","thin"],futureStyleIds:[],defaultFontWeight:900}],["sharp-duotone",{defaultShortPrefixId:"fasds",defaultStyleId:"solid",styleIds:["solid","regular","light","thin"],futureStyleIds:[],defaultFontWeight:900}],["chisel",{defaultShortPrefixId:"facr",defaultStyleId:"regular",styleIds:["regular"],futureStyleIds:[],defaultFontWeight:400}],["etch",{defaultShortPrefixId:"faes",defaultStyleId:"solid",styleIds:["solid"],futureStyleIds:[],defaultFontWeight:900}],["jelly",{defaultShortPrefixId:"fajr",defaultStyleId:"regular",styleIds:["regular"],futureStyleIds:[],defaultFontWeight:400}],["jelly-duo",{defaultShortPrefixId:"fajdr",defaultStyleId:"regular",styleIds:["regular"],futureStyleIds:[],defaultFontWeight:400}],["jelly-fill",{defaultShortPrefixId:"fajfr",defaultStyleId:"regular",styleIds:["regular"],futureStyleIds:[],defaultFontWeight:400}],["notdog",{defaultShortPrefixId:"fans",defaultStyleId:"solid",styleIds:["solid"],futureStyleIds:[],defaultFontWeight:900}],["notdog-duo",{defaultShortPrefixId:"fands",defaultStyleId:"solid",styleIds:["solid"],futureStyleIds:[],defaultFontWeight:900}],["slab",{defaultShortPrefixId:"faslr",defaultStyleId:"regular",styleIds:["regular"],futureStyleIds:[],defaultFontWeight:400}],["slab-press",{defaultShortPrefixId:"faslpr",defaultStyleId:"regular",styleIds:["regular"],futureStyleIds:[],defaultFontWeight:400}],["thumbprint",{defaultShortPrefixId:"fatl",defaultStyleId:"light",styleIds:["light"],futureStyleIds:[],defaultFontWeight:300}],["whiteboard",{defaultShortPrefixId:"fawsb",defaultStyleId:"semibold",styleIds:["semibold"],futureStyleIds:[],defaultFontWeight:600}]]),tr={chisel:{regular:"facr"},classic:{brands:"fab",light:"fal",regular:"far",solid:"fas",thin:"fat"},duotone:{light:"fadl",regular:"fadr",solid:"fad",thin:"fadt"},etch:{solid:"faes"},jelly:{regular:"fajr"},"jelly-duo":{regular:"fajdr"},"jelly-fill":{regular:"fajfr"},notdog:{solid:"fans"},"notdog-duo":{solid:"fands"},sharp:{light:"fasl",regular:"fasr",solid:"fass",thin:"fast"},"sharp-duotone":{light:"fasdl",regular:"fasdr",solid:"fasds",thin:"fasdt"},slab:{regular:"faslr"},"slab-press":{regular:"faslpr"},thumbprint:{light:"fatl"},whiteboard:{semibold:"fawsb"}},Ht=["fak","fa-kit","fakd","fa-kit-duotone"],Qe={kit:{fak:"kit","fa-kit":"kit"},"kit-duotone":{fakd:"kit-duotone","fa-kit-duotone":"kit-duotone"}},ar=["kit"],rr="kit",nr="kit-duotone",ir="Kit",or="Kit Duotone";h(h({},rr,ir),nr,or);var sr={kit:{"fa-kit":"fak"}},lr={"Font Awesome Kit":{400:"fak",normal:"fak"},"Font Awesome Kit Duotone":{400:"fakd",normal:"fakd"}},fr={kit:{fak:"fa-kit"}},Ze={kit:{kit:"fak"},"kit-duotone":{"kit-duotone":"fakd"}},ve,Z={GROUP:"duotone-group",SWAP_OPACITY:"swap-opacity",PRIMARY:"primary",SECONDARY:"secondary"},ur=["fa-classic","fa-duotone","fa-sharp","fa-sharp-duotone","fa-thumbprint","fa-whiteboard","fa-notdog","fa-notdog-duo","fa-chisel","fa-etch","fa-jelly","fa-jelly-fill","fa-jelly-duo","fa-slab","fa-slab-press"],cr="classic",dr="duotone",mr="sharp",vr="sharp-duotone",hr="chisel",gr="etch",pr="jelly",br="jelly-duo",yr="jelly-fill",xr="notdog",wr="notdog-duo",Ar="slab",Sr="slab-press",kr="thumbprint",Pr="whiteboard",Er="Classic",Ir="Duotone",Fr="Sharp",Cr="Sharp Duotone",Or="Chisel",Nr="Etch",jr="Jelly",Tr="Jelly Duo",_r="Jelly Fill",Mr="Notdog",Lr="Notdog Duo",$r="Slab",Dr="Slab Press",Rr="Thumbprint",zr="Whiteboard";ve={},h(h(h(h(h(h(h(h(h(h(ve,cr,Er),dr,Ir),mr,Fr),vr,Cr),hr,Or),gr,Nr),pr,jr),br,Tr),yr,_r),xr,Mr),h(h(h(h(h(ve,wr,Lr),Ar,$r),Sr,Dr),kr,Rr),Pr,zr);var Wr="kit",Yr="kit-duotone",Ur="Kit",Hr="Kit Duotone";h(h({},Wr,Ur),Yr,Hr);var Gr={classic:{"fa-brands":"fab","fa-duotone":"fad","fa-light":"fal","fa-regular":"far","fa-solid":"fas","fa-thin":"fat"},duotone:{"fa-regular":"fadr","fa-light":"fadl","fa-thin":"fadt"},sharp:{"fa-solid":"fass","fa-regular":"fasr","fa-light":"fasl","fa-thin":"fast"},"sharp-duotone":{"fa-solid":"fasds","fa-regular":"fasdr","fa-light":"fasdl","fa-thin":"fasdt"},slab:{"fa-regular":"faslr"},"slab-press":{"fa-regular":"faslpr"},whiteboard:{"fa-semibold":"fawsb"},thumbprint:{"fa-light":"fatl"},notdog:{"fa-solid":"fans"},"notdog-duo":{"fa-solid":"fands"},etch:{"fa-solid":"faes"},jelly:{"fa-regular":"fajr"},"jelly-fill":{"fa-regular":"fajfr"},"jelly-duo":{"fa-regular":"fajdr"},chisel:{"fa-regular":"facr"}},Xr={classic:["fas","far","fal","fat","fad"],duotone:["fadr","fadl","fadt"],sharp:["fass","fasr","fasl","fast"],"sharp-duotone":["fasds","fasdr","fasdl","fasdt"],slab:["faslr"],"slab-press":["faslpr"],whiteboard:["fawsb"],thumbprint:["fatl"],notdog:["fans"],"notdog-duo":["fands"],etch:["faes"],jelly:["fajr"],"jelly-fill":["fajfr"],"jelly-duo":["fajdr"],chisel:["facr"]},we={classic:{fab:"fa-brands",fad:"fa-duotone",fal:"fa-light",far:"fa-regular",fas:"fa-solid",fat:"fa-thin"},duotone:{fadr:"fa-regular",fadl:"fa-light",fadt:"fa-thin"},sharp:{fass:"fa-solid",fasr:"fa-regular",fasl:"fa-light",fast:"fa-thin"},"sharp-duotone":{fasds:"fa-solid",fasdr:"fa-regular",fasdl:"fa-light",fasdt:"fa-thin"},slab:{faslr:"fa-regular"},"slab-press":{faslpr:"fa-regular"},whiteboard:{fawsb:"fa-semibold"},thumbprint:{fatl:"fa-light"},notdog:{fans:"fa-solid"},"notdog-duo":{fands:"fa-solid"},etch:{faes:"fa-solid"},jelly:{fajr:"fa-regular"},"jelly-fill":{fajfr:"fa-regular"},"jelly-duo":{fajdr:"fa-regular"},chisel:{facr:"fa-regular"}},Br=["fa-solid","fa-regular","fa-light","fa-thin","fa-duotone","fa-brands","fa-semibold"],Gt=["fa","fas","far","fal","fat","fad","fadr","fadl","fadt","fab","fass","fasr","fasl","fast","fasds","fasdr","fasdl","fasdt","faslr","faslpr","fawsb","fatl","fans","fands","faes","fajr","fajfr","fajdr","facr"].concat(ur,Br),Vr=["solid","regular","light","thin","duotone","brands","semibold"],Xt=[1,2,3,4,5,6,7,8,9,10],Jr=Xt.concat([11,12,13,14,15,16,17,18,19,20]),Kr=["aw","fw","pull-left","pull-right"],qr=[].concat(I(Object.keys(Xr)),Vr,Kr,["2xs","xs","sm","lg","xl","2xl","beat","border","fade","beat-fade","bounce","flip-both","flip-horizontal","flip-vertical","flip","inverse","layers","layers-bottom-left","layers-bottom-right","layers-counter","layers-text","layers-top-left","layers-top-right","li","pull-end","pull-start","pulse","rotate-180","rotate-270","rotate-90","rotate-by","shake","spin-pulse","spin-reverse","spin","stack-1x","stack-2x","stack","ul","width-auto","width-fixed",Z.GROUP,Z.SWAP_OPACITY,Z.PRIMARY,Z.SECONDARY]).concat(Xt.map(function(e){return"".concat(e,"x")})).concat(Jr.map(function(e){return"w-".concat(e)})),Qr={"Font Awesome 5 Free":{900:"fas",400:"far"},"Font Awesome 5 Pro":{900:"fas",400:"far",normal:"far",300:"fal"},"Font Awesome 5 Brands":{400:"fab",normal:"fab"},"Font Awesome 5 Duotone":{900:"fad"}},O="___FONT_AWESOME___",Ae=16,Bt="fa",Vt="svg-inline--fa",$="data-fa-i2svg",Se="data-fa-pseudo-element",Zr="data-fa-pseudo-element-pending",$e="data-prefix",De="data-icon",et="fontawesome-i2svg",en="async",tn=["HTML","HEAD","STYLE","SCRIPT"],Jt=["::before","::after",":before",":after"],Kt=function(){try{return!0}catch{return!1}}();function K(e){return new Proxy(e,{get:function(a,r){return r in a?a[r]:a[w]}})}var qt=f({},Ft);qt[w]=f(f(f(f({},{"fa-duotone":"duotone"}),Ft[w]),Qe.kit),Qe["kit-duotone"]);var an=K(qt),ke=f({},tr);ke[w]=f(f(f(f({},{duotone:"fad"}),ke[w]),Ze.kit),Ze["kit-duotone"]);var tt=K(ke),Pe=f({},we);Pe[w]=f(f({},Pe[w]),fr.kit);var Re=K(Pe),Ee=f({},Gr);Ee[w]=f(f({},Ee[w]),sr.kit);K(Ee);var rn=_a,Qt="fa-layers-text",nn=Ma,on=f({},Qa);K(on);var sn=["class","data-prefix","data-icon","data-fa-transform","data-fa-mask"],he=La,ln=[].concat(I(ar),I(qr)),X=T.FontAwesomeConfig||{};function fn(e){var t=p.querySelector("script["+e+"]");if(t)return t.getAttribute(e)}function un(e){return e===""?!0:e==="false"?!1:e==="true"?!0:e}if(p&&typeof p.querySelector=="function"){var cn=[["data-family-prefix","familyPrefix"],["data-css-prefix","cssPrefix"],["data-family-default","familyDefault"],["data-style-default","styleDefault"],["data-replacement-class","replacementClass"],["data-auto-replace-svg","autoReplaceSvg"],["data-auto-add-css","autoAddCss"],["data-search-pseudo-elements","searchPseudoElements"],["data-search-pseudo-elements-warnings","searchPseudoElementsWarnings"],["data-search-pseudo-elements-full-scan","searchPseudoElementsFullScan"],["data-observe-mutations","observeMutations"],["data-mutate-approach","mutateApproach"],["data-keep-original-source","keepOriginalSource"],["data-measure-performance","measurePerformance"],["data-show-missing-icons","showMissingIcons"]];cn.forEach(function(e){var t=oe(e,2),a=t[0],r=t[1],n=un(fn(a));n!=null&&(X[r]=n)})}var Zt={styleDefault:"solid",familyDefault:w,cssPrefix:Bt,replacementClass:Vt,autoReplaceSvg:!0,autoAddCss:!0,searchPseudoElements:!1,searchPseudoElementsWarnings:!0,searchPseudoElementsFullScan:!1,observeMutations:!0,mutateApproach:"async",keepOriginalSource:!0,measurePerformance:!1,showMissingIcons:!0};X.familyPrefix&&(X.cssPrefix=X.familyPrefix);var U=f(f({},Zt),X);U.autoReplaceSvg||(U.observeMutations=!1);var d={};Object.keys(Zt).forEach(function(e){Object.defineProperty(d,e,{enumerable:!0,set:function(a){U[e]=a,B.forEach(function(r){return r(d)})},get:function(){return U[e]}})});Object.defineProperty(d,"familyPrefix",{enumerable:!0,set:function(t){U.cssPrefix=t,B.forEach(function(a){return a(d)})},get:function(){return U.cssPrefix}});T.FontAwesomeConfig=d;var B=[];function dn(e){return B.push(e),function(){B.splice(B.indexOf(e),1)}}var z=Ae,F={size:16,x:0,y:0,rotate:0,flipX:!1,flipY:!1};function mn(e){if(!(!e||!j)){var t=p.createElement("style");t.setAttribute("type","text/css"),t.innerHTML=e;for(var a=p.head.childNodes,r=null,n=a.length-1;n>-1;n--){var o=a[n],i=(o.tagName||"").toUpperCase();["STYLE","LINK"].indexOf(i)>-1&&(r=o)}return p.head.insertBefore(t,r),e}}var vn="0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";function at(){for(var e=12,t="";e-- >0;)t+=vn[Math.random()*62|0];return t}function H(e){for(var t=[],a=(e||[]).length>>>0;a--;)t[a]=e[a];return t}function ze(e){return e.classList?H(e.classList):(e.getAttribute("class")||"").split(" ").filter(function(t){return t})}function ea(e){return"".concat(e).replace(/&/g,"&amp;").replace(/"/g,"&quot;").replace(/'/g,"&#39;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}function hn(e){return Object.keys(e||{}).reduce(function(t,a){return t+"".concat(a,'="').concat(ea(e[a]),'" ')},"").trim()}function se(e){return Object.keys(e||{}).reduce(function(t,a){return t+"".concat(a,": ").concat(e[a].trim(),";")},"")}function We(e){return e.size!==F.size||e.x!==F.x||e.y!==F.y||e.rotate!==F.rotate||e.flipX||e.flipY}function gn(e){var t=e.transform,a=e.containerWidth,r=e.iconWidth,n={transform:"translate(".concat(a/2," 256)")},o="translate(".concat(t.x*32,", ").concat(t.y*32,") "),i="scale(".concat(t.size/16*(t.flipX?-1:1),", ").concat(t.size/16*(t.flipY?-1:1),") "),s="rotate(".concat(t.rotate," 0 0)"),l={transform:"".concat(o," ").concat(i," ").concat(s)},u={transform:"translate(".concat(r/2*-1," -256)")};return{outer:n,inner:l,path:u}}function pn(e){var t=e.transform,a=e.width,r=a===void 0?Ae:a,n=e.height,o=n===void 0?Ae:n,i="";return It?i+="translate(".concat(t.x/z-r/2,"em, ").concat(t.y/z-o/2,"em) "):i+="translate(calc(-50% + ".concat(t.x/z,"em), calc(-50% + ").concat(t.y/z,"em)) "),i+="scale(".concat(t.size/z*(t.flipX?-1:1),", ").concat(t.size/z*(t.flipY?-1:1),") "),i+="rotate(".concat(t.rotate,"deg) "),i}var bn=`:root, :host {
  --fa-font-solid: normal 900 1em/1 "Font Awesome 7 Free";
  --fa-font-regular: normal 400 1em/1 "Font Awesome 7 Free";
  --fa-font-light: normal 300 1em/1 "Font Awesome 7 Pro";
  --fa-font-thin: normal 100 1em/1 "Font Awesome 7 Pro";
  --fa-font-duotone: normal 900 1em/1 "Font Awesome 7 Duotone";
  --fa-font-duotone-regular: normal 400 1em/1 "Font Awesome 7 Duotone";
  --fa-font-duotone-light: normal 300 1em/1 "Font Awesome 7 Duotone";
  --fa-font-duotone-thin: normal 100 1em/1 "Font Awesome 7 Duotone";
  --fa-font-brands: normal 400 1em/1 "Font Awesome 7 Brands";
  --fa-font-sharp-solid: normal 900 1em/1 "Font Awesome 7 Sharp";
  --fa-font-sharp-regular: normal 400 1em/1 "Font Awesome 7 Sharp";
  --fa-font-sharp-light: normal 300 1em/1 "Font Awesome 7 Sharp";
  --fa-font-sharp-thin: normal 100 1em/1 "Font Awesome 7 Sharp";
  --fa-font-sharp-duotone-solid: normal 900 1em/1 "Font Awesome 7 Sharp Duotone";
  --fa-font-sharp-duotone-regular: normal 400 1em/1 "Font Awesome 7 Sharp Duotone";
  --fa-font-sharp-duotone-light: normal 300 1em/1 "Font Awesome 7 Sharp Duotone";
  --fa-font-sharp-duotone-thin: normal 100 1em/1 "Font Awesome 7 Sharp Duotone";
  --fa-font-slab-regular: normal 400 1em/1 "Font Awesome 7 Slab";
  --fa-font-slab-press-regular: normal 400 1em/1 "Font Awesome 7 Slab Press";
  --fa-font-whiteboard-semibold: normal 600 1em/1 "Font Awesome 7 Whiteboard";
  --fa-font-thumbprint-light: normal 300 1em/1 "Font Awesome 7 Thumbprint";
  --fa-font-notdog-solid: normal 900 1em/1 "Font Awesome 7 Notdog";
  --fa-font-notdog-duo-solid: normal 900 1em/1 "Font Awesome 7 Notdog Duo";
  --fa-font-etch-solid: normal 900 1em/1 "Font Awesome 7 Etch";
  --fa-font-jelly-regular: normal 400 1em/1 "Font Awesome 7 Jelly";
  --fa-font-jelly-fill-regular: normal 400 1em/1 "Font Awesome 7 Jelly Fill";
  --fa-font-jelly-duo-regular: normal 400 1em/1 "Font Awesome 7 Jelly Duo";
  --fa-font-chisel-regular: normal 400 1em/1 "Font Awesome 7 Chisel";
}

.svg-inline--fa {
  box-sizing: content-box;
  display: var(--fa-display, inline-block);
  height: 1em;
  overflow: visible;
  vertical-align: -0.125em;
  width: var(--fa-width, 1.25em);
}
.svg-inline--fa.fa-2xs {
  vertical-align: 0.1em;
}
.svg-inline--fa.fa-xs {
  vertical-align: 0em;
}
.svg-inline--fa.fa-sm {
  vertical-align: -0.0714285714em;
}
.svg-inline--fa.fa-lg {
  vertical-align: -0.2em;
}
.svg-inline--fa.fa-xl {
  vertical-align: -0.25em;
}
.svg-inline--fa.fa-2xl {
  vertical-align: -0.3125em;
}
.svg-inline--fa.fa-pull-left,
.svg-inline--fa .fa-pull-start {
  float: inline-start;
  margin-inline-end: var(--fa-pull-margin, 0.3em);
}
.svg-inline--fa.fa-pull-right,
.svg-inline--fa .fa-pull-end {
  float: inline-end;
  margin-inline-start: var(--fa-pull-margin, 0.3em);
}
.svg-inline--fa.fa-li {
  width: var(--fa-li-width, 2em);
  inset-inline-start: calc(-1 * var(--fa-li-width, 2em));
  inset-block-start: 0.25em; /* syncing vertical alignment with Web Font rendering */
}

.fa-layers-counter, .fa-layers-text {
  display: inline-block;
  position: absolute;
  text-align: center;
}

.fa-layers {
  display: inline-block;
  height: 1em;
  position: relative;
  text-align: center;
  vertical-align: -0.125em;
  width: var(--fa-width, 1.25em);
}
.fa-layers .svg-inline--fa {
  inset: 0;
  margin: auto;
  position: absolute;
  transform-origin: center center;
}

.fa-layers-text {
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  transform-origin: center center;
}

.fa-layers-counter {
  background-color: var(--fa-counter-background-color, #ff253a);
  border-radius: var(--fa-counter-border-radius, 1em);
  box-sizing: border-box;
  color: var(--fa-inverse, #fff);
  line-height: var(--fa-counter-line-height, 1);
  max-width: var(--fa-counter-max-width, 5em);
  min-width: var(--fa-counter-min-width, 1.5em);
  overflow: hidden;
  padding: var(--fa-counter-padding, 0.25em 0.5em);
  right: var(--fa-right, 0);
  text-overflow: ellipsis;
  top: var(--fa-top, 0);
  transform: scale(var(--fa-counter-scale, 0.25));
  transform-origin: top right;
}

.fa-layers-bottom-right {
  bottom: var(--fa-bottom, 0);
  right: var(--fa-right, 0);
  top: auto;
  transform: scale(var(--fa-layers-scale, 0.25));
  transform-origin: bottom right;
}

.fa-layers-bottom-left {
  bottom: var(--fa-bottom, 0);
  left: var(--fa-left, 0);
  right: auto;
  top: auto;
  transform: scale(var(--fa-layers-scale, 0.25));
  transform-origin: bottom left;
}

.fa-layers-top-right {
  top: var(--fa-top, 0);
  right: var(--fa-right, 0);
  transform: scale(var(--fa-layers-scale, 0.25));
  transform-origin: top right;
}

.fa-layers-top-left {
  left: var(--fa-left, 0);
  right: auto;
  top: var(--fa-top, 0);
  transform: scale(var(--fa-layers-scale, 0.25));
  transform-origin: top left;
}

.fa-1x {
  font-size: 1em;
}

.fa-2x {
  font-size: 2em;
}

.fa-3x {
  font-size: 3em;
}

.fa-4x {
  font-size: 4em;
}

.fa-5x {
  font-size: 5em;
}

.fa-6x {
  font-size: 6em;
}

.fa-7x {
  font-size: 7em;
}

.fa-8x {
  font-size: 8em;
}

.fa-9x {
  font-size: 9em;
}

.fa-10x {
  font-size: 10em;
}

.fa-2xs {
  font-size: calc(10 / 16 * 1em); /* converts a 10px size into an em-based value that's relative to the scale's 16px base */
  line-height: calc(1 / 10 * 1em); /* sets the line-height of the icon back to that of it's parent */
  vertical-align: calc((6 / 10 - 0.375) * 1em); /* vertically centers the icon taking into account the surrounding text's descender */
}

.fa-xs {
  font-size: calc(12 / 16 * 1em); /* converts a 12px size into an em-based value that's relative to the scale's 16px base */
  line-height: calc(1 / 12 * 1em); /* sets the line-height of the icon back to that of it's parent */
  vertical-align: calc((6 / 12 - 0.375) * 1em); /* vertically centers the icon taking into account the surrounding text's descender */
}

.fa-sm {
  font-size: calc(14 / 16 * 1em); /* converts a 14px size into an em-based value that's relative to the scale's 16px base */
  line-height: calc(1 / 14 * 1em); /* sets the line-height of the icon back to that of it's parent */
  vertical-align: calc((6 / 14 - 0.375) * 1em); /* vertically centers the icon taking into account the surrounding text's descender */
}

.fa-lg {
  font-size: calc(20 / 16 * 1em); /* converts a 20px size into an em-based value that's relative to the scale's 16px base */
  line-height: calc(1 / 20 * 1em); /* sets the line-height of the icon back to that of it's parent */
  vertical-align: calc((6 / 20 - 0.375) * 1em); /* vertically centers the icon taking into account the surrounding text's descender */
}

.fa-xl {
  font-size: calc(24 / 16 * 1em); /* converts a 24px size into an em-based value that's relative to the scale's 16px base */
  line-height: calc(1 / 24 * 1em); /* sets the line-height of the icon back to that of it's parent */
  vertical-align: calc((6 / 24 - 0.375) * 1em); /* vertically centers the icon taking into account the surrounding text's descender */
}

.fa-2xl {
  font-size: calc(32 / 16 * 1em); /* converts a 32px size into an em-based value that's relative to the scale's 16px base */
  line-height: calc(1 / 32 * 1em); /* sets the line-height of the icon back to that of it's parent */
  vertical-align: calc((6 / 32 - 0.375) * 1em); /* vertically centers the icon taking into account the surrounding text's descender */
}

.fa-width-auto {
  --fa-width: auto;
}

.fa-fw,
.fa-width-fixed {
  --fa-width: 1.25em;
}

.fa-ul {
  list-style-type: none;
  margin-inline-start: var(--fa-li-margin, 2.5em);
  padding-inline-start: 0;
}
.fa-ul > li {
  position: relative;
}

.fa-li {
  inset-inline-start: calc(-1 * var(--fa-li-width, 2em));
  position: absolute;
  text-align: center;
  width: var(--fa-li-width, 2em);
  line-height: inherit;
}

/* Heads Up: Bordered Icons will not be supported in the future!
  - This feature will be deprecated in the next major release of Font Awesome (v8)!
  - You may continue to use it in this version *v7), but it will not be supported in Font Awesome v8.
*/
/* Notes:
* --@{v.$css-prefix}-border-width = 1/16 by default (to render as ~1px based on a 16px default font-size)
* --@{v.$css-prefix}-border-padding =
  ** 3/16 for vertical padding (to give ~2px of vertical whitespace around an icon considering it's vertical alignment)
  ** 4/16 for horizontal padding (to give ~4px of horizontal whitespace around an icon)
*/
.fa-border {
  border-color: var(--fa-border-color, #eee);
  border-radius: var(--fa-border-radius, 0.1em);
  border-style: var(--fa-border-style, solid);
  border-width: var(--fa-border-width, 0.0625em);
  box-sizing: var(--fa-border-box-sizing, content-box);
  padding: var(--fa-border-padding, 0.1875em 0.25em);
}

.fa-pull-left,
.fa-pull-start {
  float: inline-start;
  margin-inline-end: var(--fa-pull-margin, 0.3em);
}

.fa-pull-right,
.fa-pull-end {
  float: inline-end;
  margin-inline-start: var(--fa-pull-margin, 0.3em);
}

.fa-beat {
  animation-name: fa-beat;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-bounce {
  animation-name: fa-bounce;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.28, 0.84, 0.42, 1));
}

.fa-fade {
  animation-name: fa-fade;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
}

.fa-beat-fade {
  animation-name: fa-beat-fade;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
}

.fa-flip {
  animation-name: fa-flip;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-shake {
  animation-name: fa-shake;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin {
  animation-name: fa-spin;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 2s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin-reverse {
  --fa-animation-direction: reverse;
}

.fa-pulse,
.fa-spin-pulse {
  animation-name: fa-spin;
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, steps(8));
}

@media (prefers-reduced-motion: reduce) {
  .fa-beat,
  .fa-bounce,
  .fa-fade,
  .fa-beat-fade,
  .fa-flip,
  .fa-pulse,
  .fa-shake,
  .fa-spin,
  .fa-spin-pulse {
    animation: none !important;
    transition: none !important;
  }
}
@keyframes fa-beat {
  0%, 90% {
    transform: scale(1);
  }
  45% {
    transform: scale(var(--fa-beat-scale, 1.25));
  }
}
@keyframes fa-bounce {
  0% {
    transform: scale(1, 1) translateY(0);
  }
  10% {
    transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
  }
  30% {
    transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
  }
  50% {
    transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
  }
  57% {
    transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
  }
  64% {
    transform: scale(1, 1) translateY(0);
  }
  100% {
    transform: scale(1, 1) translateY(0);
  }
}
@keyframes fa-fade {
  50% {
    opacity: var(--fa-fade-opacity, 0.4);
  }
}
@keyframes fa-beat-fade {
  0%, 100% {
    opacity: var(--fa-beat-fade-opacity, 0.4);
    transform: scale(1);
  }
  50% {
    opacity: 1;
    transform: scale(var(--fa-beat-fade-scale, 1.125));
  }
}
@keyframes fa-flip {
  50% {
    transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
  }
}
@keyframes fa-shake {
  0% {
    transform: rotate(-15deg);
  }
  4% {
    transform: rotate(15deg);
  }
  8%, 24% {
    transform: rotate(-18deg);
  }
  12%, 28% {
    transform: rotate(18deg);
  }
  16% {
    transform: rotate(-22deg);
  }
  20% {
    transform: rotate(22deg);
  }
  32% {
    transform: rotate(-12deg);
  }
  36% {
    transform: rotate(12deg);
  }
  40%, 100% {
    transform: rotate(0deg);
  }
}
@keyframes fa-spin {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
.fa-rotate-90 {
  transform: rotate(90deg);
}

.fa-rotate-180 {
  transform: rotate(180deg);
}

.fa-rotate-270 {
  transform: rotate(270deg);
}

.fa-flip-horizontal {
  transform: scale(-1, 1);
}

.fa-flip-vertical {
  transform: scale(1, -1);
}

.fa-flip-both,
.fa-flip-horizontal.fa-flip-vertical {
  transform: scale(-1, -1);
}

.fa-rotate-by {
  transform: rotate(var(--fa-rotate-angle, 0));
}

.svg-inline--fa .fa-primary {
  fill: var(--fa-primary-color, currentColor);
  opacity: var(--fa-primary-opacity, 1);
}

.svg-inline--fa .fa-secondary {
  fill: var(--fa-secondary-color, currentColor);
  opacity: var(--fa-secondary-opacity, 0.4);
}

.svg-inline--fa.fa-swap-opacity .fa-primary {
  opacity: var(--fa-secondary-opacity, 0.4);
}

.svg-inline--fa.fa-swap-opacity .fa-secondary {
  opacity: var(--fa-primary-opacity, 1);
}

.svg-inline--fa mask .fa-primary,
.svg-inline--fa mask .fa-secondary {
  fill: black;
}

.svg-inline--fa.fa-inverse {
  fill: var(--fa-inverse, #fff);
}

.fa-stack {
  display: inline-block;
  height: 2em;
  line-height: 2em;
  position: relative;
  vertical-align: middle;
  width: 2.5em;
}

.fa-inverse {
  color: var(--fa-inverse, #fff);
}

.svg-inline--fa.fa-stack-1x {
  --fa-width: 1.25em;
  height: 1em;
  width: var(--fa-width);
}
.svg-inline--fa.fa-stack-2x {
  --fa-width: 2.5em;
  height: 2em;
  width: var(--fa-width);
}

.fa-stack-1x,
.fa-stack-2x {
  inset: 0;
  margin: auto;
  position: absolute;
  z-index: var(--fa-stack-z-index, auto);
}`;function ta(){var e=Bt,t=Vt,a=d.cssPrefix,r=d.replacementClass,n=bn;if(a!==e||r!==t){var o=new RegExp("\\.".concat(e,"\\-"),"g"),i=new RegExp("\\--".concat(e,"\\-"),"g"),s=new RegExp("\\.".concat(t),"g");n=n.replace(o,".".concat(a,"-")).replace(i,"--".concat(a,"-")).replace(s,".".concat(r))}return n}var rt=!1;function ge(){d.autoAddCss&&!rt&&(mn(ta()),rt=!0)}var yn={mixout:function(){return{dom:{css:ta,insertCss:ge}}},hooks:function(){return{beforeDOMElementCreation:function(){ge()},beforeI2svg:function(){ge()}}}},N=T||{};N[O]||(N[O]={});N[O].styles||(N[O].styles={});N[O].hooks||(N[O].hooks={});N[O].shims||(N[O].shims=[]);var E=N[O],aa=[],ra=function(){p.removeEventListener("DOMContentLoaded",ra),ne=1,aa.map(function(t){return t()})},ne=!1;j&&(ne=(p.documentElement.doScroll?/^loaded|^c/:/^loaded|^i|^c/).test(p.readyState),ne||p.addEventListener("DOMContentLoaded",ra));function xn(e){j&&(ne?setTimeout(e,0):aa.push(e))}function q(e){var t=e.tag,a=e.attributes,r=a===void 0?{}:a,n=e.children,o=n===void 0?[]:n;return typeof e=="string"?ea(e):"<".concat(t," ").concat(hn(r),">").concat(o.map(q).join(""),"</").concat(t,">")}function nt(e,t,a){if(e&&e[t]&&e[t][a])return{prefix:t,iconName:a,icon:e[t][a]}}var pe=function(t,a,r,n){var o=Object.keys(t),i=o.length,s=a,l,u,m;for(r===void 0?(l=1,m=t[o[0]]):(l=0,m=r);l<i;l++)u=o[l],m=s(m,t[u],u,t);return m};function na(e){return I(e).length!==1?null:e.codePointAt(0).toString(16)}function it(e){return Object.keys(e).reduce(function(t,a){var r=e[a],n=!!r.icon;return n?t[r.iconName]=r.icon:t[a]=r,t},{})}function Ie(e,t){var a=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},r=a.skipHooks,n=r===void 0?!1:r,o=it(t);typeof E.hooks.addPack=="function"&&!n?E.hooks.addPack(e,it(t)):E.styles[e]=f(f({},E.styles[e]||{}),o),e==="fas"&&Ie("fa",t)}var V=E.styles,wn=E.shims,ia=Object.keys(Re),An=ia.reduce(function(e,t){return e[t]=Object.keys(Re[t]),e},{}),Ye=null,oa={},sa={},la={},fa={},ua={};function Sn(e){return~ln.indexOf(e)}function kn(e,t){var a=t.split("-"),r=a[0],n=a.slice(1).join("-");return r===e&&n!==""&&!Sn(n)?n:null}var ca=function(){var t=function(o){return pe(V,function(i,s,l){return i[l]=pe(s,o,{}),i},{})};oa=t(function(n,o,i){if(o[3]&&(n[o[3]]=i),o[2]){var s=o[2].filter(function(l){return typeof l=="number"});s.forEach(function(l){n[l.toString(16)]=i})}return n}),sa=t(function(n,o,i){if(n[i]=i,o[2]){var s=o[2].filter(function(l){return typeof l=="string"});s.forEach(function(l){n[l]=i})}return n}),ua=t(function(n,o,i){var s=o[2];return n[i]=i,s.forEach(function(l){n[l]=i}),n});var a="far"in V||d.autoFetchSvg,r=pe(wn,function(n,o){var i=o[0],s=o[1],l=o[2];return s==="far"&&!a&&(s="fas"),typeof i=="string"&&(n.names[i]={prefix:s,iconName:l}),typeof i=="number"&&(n.unicodes[i.toString(16)]={prefix:s,iconName:l}),n},{names:{},unicodes:{}});la=r.names,fa=r.unicodes,Ye=le(d.styleDefault,{family:d.familyDefault})};dn(function(e){Ye=le(e.styleDefault,{family:d.familyDefault})});ca();function Ue(e,t){return(oa[e]||{})[t]}function Pn(e,t){return(sa[e]||{})[t]}function L(e,t){return(ua[e]||{})[t]}function da(e){return la[e]||{prefix:null,iconName:null}}function En(e){var t=fa[e],a=Ue("fas",e);return t||(a?{prefix:"fas",iconName:a}:null)||{prefix:null,iconName:null}}function _(){return Ye}var ma=function(){return{prefix:null,iconName:null,rest:[]}};function In(e){var t=w,a=ia.reduce(function(r,n){return r[n]="".concat(d.cssPrefix,"-").concat(n),r},{});return Ut.forEach(function(r){(e.includes(a[r])||e.some(function(n){return An[r].includes(n)}))&&(t=r)}),t}function le(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},a=t.family,r=a===void 0?w:a,n=an[r][e];if(r===J&&!e)return"fad";var o=tt[r][e]||tt[r][n],i=e in E.styles?e:null,s=o||i||null;return s}function Fn(e){var t=[],a=null;return e.forEach(function(r){var n=kn(d.cssPrefix,r);n?a=n:r&&t.push(r)}),{iconName:a,rest:t}}function ot(e){return e.sort().filter(function(t,a,r){return r.indexOf(t)===a})}var st=Gt.concat(Ht);function fe(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},a=t.skipLookups,r=a===void 0?!1:a,n=null,o=ot(e.filter(function(v){return st.includes(v)})),i=ot(e.filter(function(v){return!st.includes(v)})),s=o.filter(function(v){return n=v,!Ct.includes(v)}),l=oe(s,1),u=l[0],m=u===void 0?null:u,c=In(o),g=f(f({},Fn(i)),{},{prefix:le(m,{family:c})});return f(f(f({},g),jn({values:e,family:c,styles:V,config:d,canonical:g,givenPrefix:n})),Cn(r,n,g))}function Cn(e,t,a){var r=a.prefix,n=a.iconName;if(e||!r||!n)return{prefix:r,iconName:n};var o=t==="fa"?da(n):{},i=L(r,n);return n=o.iconName||i||n,r=o.prefix||r,r==="far"&&!V.far&&V.fas&&!d.autoFetchSvg&&(r="fas"),{prefix:r,iconName:n}}var On=Ut.filter(function(e){return e!==w||e!==J}),Nn=Object.keys(we).filter(function(e){return e!==w}).map(function(e){return Object.keys(we[e])}).flat();function jn(e){var t=e.values,a=e.family,r=e.canonical,n=e.givenPrefix,o=n===void 0?"":n,i=e.styles,s=i===void 0?{}:i,l=e.config,u=l===void 0?{}:l,m=a===J,c=t.includes("fa-duotone")||t.includes("fad"),g=u.familyDefault==="duotone",v=r.prefix==="fad"||r.prefix==="fa-duotone";if(!m&&(c||g||v)&&(r.prefix="fad"),(t.includes("fa-brands")||t.includes("fab"))&&(r.prefix="fab"),!r.prefix&&On.includes(a)){var y=Object.keys(s).find(function(A){return Nn.includes(A)});if(y||u.autoFetchSvg){var b=er.get(a).defaultShortPrefixId;r.prefix=b,r.iconName=L(r.prefix,r.iconName)||r.iconName}}return(r.prefix==="fa"||o==="fa")&&(r.prefix=_()||"fas"),r}var Tn=function(){function e(){Pa(this,e),this.definitions={}}return Ia(e,[{key:"add",value:function(){for(var a=this,r=arguments.length,n=new Array(r),o=0;o<r;o++)n[o]=arguments[o];var i=n.reduce(this._pullDefinitions,{});Object.keys(i).forEach(function(s){a.definitions[s]=f(f({},a.definitions[s]||{}),i[s]),Ie(s,i[s]);var l=Re[w][s];l&&Ie(l,i[s]),ca()})}},{key:"reset",value:function(){this.definitions={}}},{key:"_pullDefinitions",value:function(a,r){var n=r.prefix&&r.iconName&&r.icon?{0:r}:r;return Object.keys(n).map(function(o){var i=n[o],s=i.prefix,l=i.iconName,u=i.icon,m=u[2];a[s]||(a[s]={}),m.length>0&&m.forEach(function(c){typeof c=="string"&&(a[s][c]=u)}),a[s][l]=u}),a}}])}(),lt=[],W={},Y={},_n=Object.keys(Y);function Mn(e,t){var a=t.mixoutsTo;return lt=e,W={},Object.keys(Y).forEach(function(r){_n.indexOf(r)===-1&&delete Y[r]}),lt.forEach(function(r){var n=r.mixout?r.mixout():{};if(Object.keys(n).forEach(function(i){typeof n[i]=="function"&&(a[i]=n[i]),re(n[i])==="object"&&Object.keys(n[i]).forEach(function(s){a[i]||(a[i]={}),a[i][s]=n[i][s]})}),r.hooks){var o=r.hooks();Object.keys(o).forEach(function(i){W[i]||(W[i]=[]),W[i].push(o[i])})}r.provides&&r.provides(Y)}),a}function Fe(e,t){for(var a=arguments.length,r=new Array(a>2?a-2:0),n=2;n<a;n++)r[n-2]=arguments[n];var o=W[e]||[];return o.forEach(function(i){t=i.apply(null,[t].concat(r))}),t}function D(e){for(var t=arguments.length,a=new Array(t>1?t-1:0),r=1;r<t;r++)a[r-1]=arguments[r];var n=W[e]||[];n.forEach(function(o){o.apply(null,a)})}function M(){var e=arguments[0],t=Array.prototype.slice.call(arguments,1);return Y[e]?Y[e].apply(null,t):void 0}function Ce(e){e.prefix==="fa"&&(e.prefix="fas");var t=e.iconName,a=e.prefix||_();if(t)return t=L(a,t)||t,nt(va.definitions,a,t)||nt(E.styles,a,t)}var va=new Tn,Ln=function(){d.autoReplaceSvg=!1,d.observeMutations=!1,D("noAuto")},$n={i2svg:function(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};return j?(D("beforeI2svg",t),M("pseudoElements2svg",t),M("i2svg",t)):Promise.reject(new Error("Operation requires a DOM of some kind."))},watch:function(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},a=t.autoReplaceSvgRoot;d.autoReplaceSvg===!1&&(d.autoReplaceSvg=!0),d.observeMutations=!0,xn(function(){Rn({autoReplaceSvgRoot:a}),D("watch",t)})}},Dn={icon:function(t){if(t===null)return null;if(re(t)==="object"&&t.prefix&&t.iconName)return{prefix:t.prefix,iconName:L(t.prefix,t.iconName)||t.iconName};if(Array.isArray(t)&&t.length===2){var a=t[1].indexOf("fa-")===0?t[1].slice(3):t[1],r=le(t[0]);return{prefix:r,iconName:L(r,a)||a}}if(typeof t=="string"&&(t.indexOf("".concat(d.cssPrefix,"-"))>-1||t.match(rn))){var n=fe(t.split(" "),{skipLookups:!0});return{prefix:n.prefix||_(),iconName:L(n.prefix,n.iconName)||n.iconName}}if(typeof t=="string"){var o=_();return{prefix:o,iconName:L(o,t)||t}}}},k={noAuto:Ln,config:d,dom:$n,parse:Dn,library:va,findIconDefinition:Ce,toHtml:q},Rn=function(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},a=t.autoReplaceSvgRoot,r=a===void 0?p:a;(Object.keys(E.styles).length>0||d.autoFetchSvg)&&j&&d.autoReplaceSvg&&k.dom.i2svg({node:r})};function ue(e,t){return Object.defineProperty(e,"abstract",{get:t}),Object.defineProperty(e,"html",{get:function(){return e.abstract.map(function(r){return q(r)})}}),Object.defineProperty(e,"node",{get:function(){if(j){var r=p.createElement("div");return r.innerHTML=e.html,r.children}}}),e}function zn(e){var t=e.children,a=e.main,r=e.mask,n=e.attributes,o=e.styles,i=e.transform;if(We(i)&&a.found&&!r.found){var s=a.width,l=a.height,u={x:s/l/2,y:.5};n.style=se(f(f({},o),{},{"transform-origin":"".concat(u.x+i.x/16,"em ").concat(u.y+i.y/16,"em")}))}return[{tag:"svg",attributes:n,children:t}]}function Wn(e){var t=e.prefix,a=e.iconName,r=e.children,n=e.attributes,o=e.symbol,i=o===!0?"".concat(t,"-").concat(d.cssPrefix,"-").concat(a):o;return[{tag:"svg",attributes:{style:"display: none;"},children:[{tag:"symbol",attributes:f(f({},n),{},{id:i}),children:r}]}]}function Yn(e){var t=["aria-label","aria-labelledby","title","role"];return t.some(function(a){return a in e})}function He(e){var t=e.icons,a=t.main,r=t.mask,n=e.prefix,o=e.iconName,i=e.transform,s=e.symbol,l=e.maskId,u=e.extra,m=e.watchable,c=m===void 0?!1:m,g=r.found?r:a,v=g.width,y=g.height,b=[d.replacementClass,o?"".concat(d.cssPrefix,"-").concat(o):""].filter(function(C){return u.classes.indexOf(C)===-1}).filter(function(C){return C!==""||!!C}).concat(u.classes).join(" "),A={children:[],attributes:f(f({},u.attributes),{},{"data-prefix":n,"data-icon":o,class:b,role:u.attributes.role||"img",viewBox:"0 0 ".concat(v," ").concat(y)})};!Yn(u.attributes)&&!u.attributes["aria-hidden"]&&(A.attributes["aria-hidden"]="true"),c&&(A.attributes[$]="");var x=f(f({},A),{},{prefix:n,iconName:o,main:a,mask:r,maskId:l,transform:i,symbol:s,styles:f({},u.styles)}),S=r.found&&a.found?M("generateAbstractMask",x)||{children:[],attributes:{}}:M("generateAbstractIcon",x)||{children:[],attributes:{}},P=S.children,R=S.attributes;return x.children=P,x.attributes=R,s?Wn(x):zn(x)}function ft(e){var t=e.content,a=e.width,r=e.height,n=e.transform,o=e.extra,i=e.watchable,s=i===void 0?!1:i,l=f(f({},o.attributes),{},{class:o.classes.join(" ")});s&&(l[$]="");var u=f({},o.styles);We(n)&&(u.transform=pn({transform:n,width:a,height:r}),u["-webkit-transform"]=u.transform);var m=se(u);m.length>0&&(l.style=m);var c=[];return c.push({tag:"span",attributes:l,children:[t]}),c}function Un(e){var t=e.content,a=e.extra,r=f(f({},a.attributes),{},{class:a.classes.join(" ")}),n=se(a.styles);n.length>0&&(r.style=n);var o=[];return o.push({tag:"span",attributes:r,children:[t]}),o}var be=E.styles;function Oe(e){var t=e[0],a=e[1],r=e.slice(4),n=oe(r,1),o=n[0],i=null;return Array.isArray(o)?i={tag:"g",attributes:{class:"".concat(d.cssPrefix,"-").concat(he.GROUP)},children:[{tag:"path",attributes:{class:"".concat(d.cssPrefix,"-").concat(he.SECONDARY),fill:"currentColor",d:o[0]}},{tag:"path",attributes:{class:"".concat(d.cssPrefix,"-").concat(he.PRIMARY),fill:"currentColor",d:o[1]}}]}:i={tag:"path",attributes:{fill:"currentColor",d:o}},{found:!0,width:t,height:a,icon:i}}var Hn={found:!1,width:512,height:512};function Gn(e,t){!Kt&&!d.showMissingIcons&&e&&console.error('Icon with name "'.concat(e,'" and prefix "').concat(t,'" is missing.'))}function Ne(e,t){var a=t;return t==="fa"&&d.styleDefault!==null&&(t=_()),new Promise(function(r,n){if(a==="fa"){var o=da(e)||{};e=o.iconName||e,t=o.prefix||t}if(e&&t&&be[t]&&be[t][e]){var i=be[t][e];return r(Oe(i))}Gn(e,t),r(f(f({},Hn),{},{icon:d.showMissingIcons&&e?M("missingIconAbstract")||{}:{}}))})}var ut=function(){},je=d.measurePerformance&&Q&&Q.mark&&Q.measure?Q:{mark:ut,measure:ut},G='FA "7.0.1"',Xn=function(t){return je.mark("".concat(G," ").concat(t," begins")),function(){return ha(t)}},ha=function(t){je.mark("".concat(G," ").concat(t," ends")),je.measure("".concat(G," ").concat(t),"".concat(G," ").concat(t," begins"),"".concat(G," ").concat(t," ends"))},Ge={begin:Xn,end:ha},te=function(){};function ct(e){var t=e.getAttribute?e.getAttribute($):null;return typeof t=="string"}function Bn(e){var t=e.getAttribute?e.getAttribute($e):null,a=e.getAttribute?e.getAttribute(De):null;return t&&a}function Vn(e){return e&&e.classList&&e.classList.contains&&e.classList.contains(d.replacementClass)}function Jn(){if(d.autoReplaceSvg===!0)return ae.replace;var e=ae[d.autoReplaceSvg];return e||ae.replace}function Kn(e){return p.createElementNS("http://www.w3.org/2000/svg",e)}function qn(e){return p.createElement(e)}function ga(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},a=t.ceFn,r=a===void 0?e.tag==="svg"?Kn:qn:a;if(typeof e=="string")return p.createTextNode(e);var n=r(e.tag);Object.keys(e.attributes||[]).forEach(function(i){n.setAttribute(i,e.attributes[i])});var o=e.children||[];return o.forEach(function(i){n.appendChild(ga(i,{ceFn:r}))}),n}function Qn(e){var t=" ".concat(e.outerHTML," ");return t="".concat(t,"Font Awesome fontawesome.com "),t}var ae={replace:function(t){var a=t[0];if(a.parentNode)if(t[1].forEach(function(n){a.parentNode.insertBefore(ga(n),a)}),a.getAttribute($)===null&&d.keepOriginalSource){var r=p.createComment(Qn(a));a.parentNode.replaceChild(r,a)}else a.remove()},nest:function(t){var a=t[0],r=t[1];if(~ze(a).indexOf(d.replacementClass))return ae.replace(t);var n=new RegExp("".concat(d.cssPrefix,"-.*"));if(delete r[0].attributes.id,r[0].attributes.class){var o=r[0].attributes.class.split(" ").reduce(function(s,l){return l===d.replacementClass||l.match(n)?s.toSvg.push(l):s.toNode.push(l),s},{toNode:[],toSvg:[]});r[0].attributes.class=o.toSvg.join(" "),o.toNode.length===0?a.removeAttribute("class"):a.setAttribute("class",o.toNode.join(" "))}var i=r.map(function(s){return q(s)}).join(`
`);a.setAttribute($,""),a.innerHTML=i}};function dt(e){e()}function pa(e,t){var a=typeof t=="function"?t:te;if(e.length===0)a();else{var r=dt;d.mutateApproach===en&&(r=T.requestAnimationFrame||dt),r(function(){var n=Jn(),o=Ge.begin("mutate");e.map(n),o(),a()})}}var Xe=!1;function ba(){Xe=!0}function Te(){Xe=!1}var ie=null;function mt(e){if(qe&&d.observeMutations){var t=e.treeCallback,a=t===void 0?te:t,r=e.nodeCallback,n=r===void 0?te:r,o=e.pseudoElementsCallback,i=o===void 0?te:o,s=e.observeMutationsRoot,l=s===void 0?p:s;ie=new qe(function(u){if(!Xe){var m=_();H(u).forEach(function(c){if(c.type==="childList"&&c.addedNodes.length>0&&!ct(c.addedNodes[0])&&(d.searchPseudoElements&&i(c.target),a(c.target)),c.type==="attributes"&&c.target.parentNode&&d.searchPseudoElements&&i([c.target],!0),c.type==="attributes"&&ct(c.target)&&~sn.indexOf(c.attributeName))if(c.attributeName==="class"&&Bn(c.target)){var g=fe(ze(c.target)),v=g.prefix,y=g.iconName;c.target.setAttribute($e,v||m),y&&c.target.setAttribute(De,y)}else Vn(c.target)&&n(c.target)})}}),j&&ie.observe(l,{childList:!0,attributes:!0,characterData:!0,subtree:!0})}}function Zn(){ie&&ie.disconnect()}function ei(e){var t=e.getAttribute("style"),a=[];return t&&(a=t.split(";").reduce(function(r,n){var o=n.split(":"),i=o[0],s=o.slice(1);return i&&s.length>0&&(r[i]=s.join(":").trim()),r},{})),a}function ti(e){var t=e.getAttribute("data-prefix"),a=e.getAttribute("data-icon"),r=e.innerText!==void 0?e.innerText.trim():"",n=fe(ze(e));return n.prefix||(n.prefix=_()),t&&a&&(n.prefix=t,n.iconName=a),n.iconName&&n.prefix||(n.prefix&&r.length>0&&(n.iconName=Pn(n.prefix,e.innerText)||Ue(n.prefix,na(e.innerText))),!n.iconName&&d.autoFetchSvg&&e.firstChild&&e.firstChild.nodeType===Node.TEXT_NODE&&(n.iconName=e.firstChild.data)),n}function ai(e){var t=H(e.attributes).reduce(function(a,r){return a.name!=="class"&&a.name!=="style"&&(a[r.name]=r.value),a},{});return t}function ri(){return{iconName:null,prefix:null,transform:F,symbol:!1,mask:{iconName:null,prefix:null,rest:[]},maskId:null,extra:{classes:[],styles:{},attributes:{}}}}function vt(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{styleParser:!0},a=ti(e),r=a.iconName,n=a.prefix,o=a.rest,i=ai(e),s=Fe("parseNodeAttributes",{},e),l=t.styleParser?ei(e):[];return f({iconName:r,prefix:n,transform:F,mask:{iconName:null,prefix:null,rest:[]},maskId:null,symbol:!1,extra:{classes:o,styles:l,attributes:i}},s)}var ni=E.styles;function ya(e){var t=d.autoReplaceSvg==="nest"?vt(e,{styleParser:!1}):vt(e);return~t.extra.classes.indexOf(Qt)?M("generateLayersText",e,t):M("generateSvgReplacementMutation",e,t)}function ii(){return[].concat(I(Ht),I(Gt))}function ht(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;if(!j)return Promise.resolve();var a=p.documentElement.classList,r=function(c){return a.add("".concat(et,"-").concat(c))},n=function(c){return a.remove("".concat(et,"-").concat(c))},o=d.autoFetchSvg?ii():Ct.concat(Object.keys(ni));o.includes("fa")||o.push("fa");var i=[".".concat(Qt,":not([").concat($,"])")].concat(o.map(function(m){return".".concat(m,":not([").concat($,"])")})).join(", ");if(i.length===0)return Promise.resolve();var s=[];try{s=H(e.querySelectorAll(i))}catch{}if(s.length>0)r("pending"),n("complete");else return Promise.resolve();var l=Ge.begin("onTree"),u=s.reduce(function(m,c){try{var g=ya(c);g&&m.push(g)}catch(v){Kt||v.name==="MissingIcon"&&console.error(v)}return m},[]);return new Promise(function(m,c){Promise.all(u).then(function(g){pa(g,function(){r("active"),r("complete"),n("pending"),typeof t=="function"&&t(),l(),m()})}).catch(function(g){l(),c(g)})})}function oi(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;ya(e).then(function(a){a&&pa([a],t)})}function si(e){return function(t){var a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=(t||{}).icon?t:Ce(t||{}),n=a.mask;return n&&(n=(n||{}).icon?n:Ce(n||{})),e(r,f(f({},a),{},{mask:n}))}}var li=function(t){var a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=a.transform,n=r===void 0?F:r,o=a.symbol,i=o===void 0?!1:o,s=a.mask,l=s===void 0?null:s,u=a.maskId,m=u===void 0?null:u,c=a.classes,g=c===void 0?[]:c,v=a.attributes,y=v===void 0?{}:v,b=a.styles,A=b===void 0?{}:b;if(t){var x=t.prefix,S=t.iconName,P=t.icon;return ue(f({type:"icon"},t),function(){return D("beforeDOMElementCreation",{iconDefinition:t,params:a}),He({icons:{main:Oe(P),mask:l?Oe(l.icon):{found:!1,width:null,height:null,icon:{}}},prefix:x,iconName:S,transform:f(f({},F),n),symbol:i,maskId:m,extra:{attributes:y,styles:A,classes:g}})})}},fi={mixout:function(){return{icon:si(li)}},hooks:function(){return{mutationObserverCallbacks:function(a){return a.treeCallback=ht,a.nodeCallback=oi,a}}},provides:function(t){t.i2svg=function(a){var r=a.node,n=r===void 0?p:r,o=a.callback,i=o===void 0?function(){}:o;return ht(n,i)},t.generateSvgReplacementMutation=function(a,r){var n=r.iconName,o=r.prefix,i=r.transform,s=r.symbol,l=r.mask,u=r.maskId,m=r.extra;return new Promise(function(c,g){Promise.all([Ne(n,o),l.iconName?Ne(l.iconName,l.prefix):Promise.resolve({found:!1,width:512,height:512,icon:{}})]).then(function(v){var y=oe(v,2),b=y[0],A=y[1];c([a,He({icons:{main:b,mask:A},prefix:o,iconName:n,transform:i,symbol:s,maskId:u,extra:m,watchable:!0})])}).catch(g)})},t.generateAbstractIcon=function(a){var r=a.children,n=a.attributes,o=a.main,i=a.transform,s=a.styles,l=se(s);l.length>0&&(n.style=l);var u;return We(i)&&(u=M("generateAbstractTransformGrouping",{main:o,transform:i,containerWidth:o.width,iconWidth:o.width})),r.push(u||o.icon),{children:r,attributes:n}}}},ui={mixout:function(){return{layer:function(a){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=r.classes,o=n===void 0?[]:n;return ue({type:"layer"},function(){D("beforeDOMElementCreation",{assembler:a,params:r});var i=[];return a(function(s){Array.isArray(s)?s.map(function(l){i=i.concat(l.abstract)}):i=i.concat(s.abstract)}),[{tag:"span",attributes:{class:["".concat(d.cssPrefix,"-layers")].concat(I(o)).join(" ")},children:i}]})}}}},ci={mixout:function(){return{counter:function(a){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};r.title;var n=r.classes,o=n===void 0?[]:n,i=r.attributes,s=i===void 0?{}:i,l=r.styles,u=l===void 0?{}:l;return ue({type:"counter",content:a},function(){return D("beforeDOMElementCreation",{content:a,params:r}),Un({content:a.toString(),extra:{attributes:s,styles:u,classes:["".concat(d.cssPrefix,"-layers-counter")].concat(I(o))}})})}}}},di={mixout:function(){return{text:function(a){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=r.transform,o=n===void 0?F:n,i=r.classes,s=i===void 0?[]:i,l=r.attributes,u=l===void 0?{}:l,m=r.styles,c=m===void 0?{}:m;return ue({type:"text",content:a},function(){return D("beforeDOMElementCreation",{content:a,params:r}),ft({content:a,transform:f(f({},F),o),extra:{attributes:u,styles:c,classes:["".concat(d.cssPrefix,"-layers-text")].concat(I(s))}})})}}},provides:function(t){t.generateLayersText=function(a,r){var n=r.transform,o=r.extra,i=null,s=null;if(It){var l=parseInt(getComputedStyle(a).fontSize,10),u=a.getBoundingClientRect();i=u.width/l,s=u.height/l}return Promise.resolve([a,ft({content:a.innerHTML,width:i,height:s,transform:n,extra:o,watchable:!0})])}}},xa=new RegExp('"',"ug"),gt=[1105920,1112319],pt=f(f(f(f({},{FontAwesome:{normal:"fas",400:"fas"}}),Za),Qr),lr),_e=Object.keys(pt).reduce(function(e,t){return e[t.toLowerCase()]=pt[t],e},{}),mi=Object.keys(_e).reduce(function(e,t){var a=_e[t];return e[t]=a[900]||I(Object.entries(a))[0][1],e},{});function vi(e){var t=e.replace(xa,"");return na(I(t)[0]||"")}function hi(e){var t=e.getPropertyValue("font-feature-settings").includes("ss01"),a=e.getPropertyValue("content"),r=a.replace(xa,""),n=r.codePointAt(0),o=n>=gt[0]&&n<=gt[1],i=r.length===2?r[0]===r[1]:!1;return o||i||t}function gi(e,t){var a=e.replace(/^['"]|['"]$/g,"").toLowerCase(),r=parseInt(t),n=isNaN(r)?"normal":r;return(_e[a]||{})[n]||mi[a]}function bt(e,t){var a="".concat(Zr).concat(t.replace(":","-"));return new Promise(function(r,n){if(e.getAttribute(a)!==null)return r();var o=H(e.children),i=o.filter(function(ce){return ce.getAttribute(Se)===t})[0],s=T.getComputedStyle(e,t),l=s.getPropertyValue("font-family"),u=l.match(nn),m=s.getPropertyValue("font-weight"),c=s.getPropertyValue("content");if(i&&!u)return e.removeChild(i),r();if(u&&c!=="none"&&c!==""){var g=s.getPropertyValue("content"),v=gi(l,m),y=vi(g),b=u[0].startsWith("FontAwesome"),A=hi(s),x=Ue(v,y),S=x;if(b){var P=En(y);P.iconName&&P.prefix&&(x=P.iconName,v=P.prefix)}if(x&&!A&&(!i||i.getAttribute($e)!==v||i.getAttribute(De)!==S)){e.setAttribute(a,S),i&&e.removeChild(i);var R=ri(),C=R.extra;C.attributes[Se]=t,Ne(x,v).then(function(ce){var wa=He(f(f({},R),{},{icons:{main:ce,mask:ma()},prefix:v,iconName:S,extra:C,watchable:!0})),de=p.createElementNS("http://www.w3.org/2000/svg","svg");t==="::before"?e.insertBefore(de,e.firstChild):e.appendChild(de),de.outerHTML=wa.map(function(Aa){return q(Aa)}).join(`
`),e.removeAttribute(a),r()}).catch(n)}else r()}else r()})}function pi(e){return Promise.all([bt(e,"::before"),bt(e,"::after")])}function bi(e){return e.parentNode!==document.head&&!~tn.indexOf(e.tagName.toUpperCase())&&!e.getAttribute(Se)&&(!e.parentNode||e.parentNode.tagName!=="svg")}var yi=function(t){return!!t&&Jt.some(function(a){return t.includes(a)})},xi=function(t){if(!t)return[];var a=new Set,r=t.split(/,(?![^()]*\))/).map(function(l){return l.trim()});r=r.flatMap(function(l){return l.includes("(")?l:l.split(",").map(function(u){return u.trim()})});var n=ee(r),o;try{for(n.s();!(o=n.n()).done;){var i=o.value;if(yi(i)){var s=Jt.reduce(function(l,u){return l.replace(u,"")},i);s!==""&&s!=="*"&&a.add(s)}}}catch(l){n.e(l)}finally{n.f()}return a};function yt(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1;if(j){var a;if(t)a=e;else if(d.searchPseudoElementsFullScan)a=e.querySelectorAll("*");else{var r=new Set,n=ee(document.styleSheets),o;try{for(n.s();!(o=n.n()).done;){var i=o.value;try{var s=ee(i.cssRules),l;try{for(s.s();!(l=s.n()).done;){var u=l.value,m=xi(u.selectorText),c=ee(m),g;try{for(c.s();!(g=c.n()).done;){var v=g.value;r.add(v)}}catch(b){c.e(b)}finally{c.f()}}}catch(b){s.e(b)}finally{s.f()}}catch(b){d.searchPseudoElementsWarnings&&console.warn("Font Awesome: cannot parse stylesheet: ".concat(i.href," (").concat(b.message,`)
If it declares any Font Awesome CSS pseudo-elements, they will not be rendered as SVG icons. Add crossorigin="anonymous" to the <link>, enable searchPseudoElementsFullScan for slower but more thorough DOM parsing, or suppress this warning by setting searchPseudoElementsWarnings to false.`))}}}catch(b){n.e(b)}finally{n.f()}if(!r.size)return;var y=Array.from(r).join(", ");try{a=e.querySelectorAll(y)}catch{}}return new Promise(function(b,A){var x=H(a).filter(bi).map(pi),S=Ge.begin("searchPseudoElements");ba(),Promise.all(x).then(function(){S(),Te(),b()}).catch(function(){S(),Te(),A()})})}}var wi={hooks:function(){return{mutationObserverCallbacks:function(a){return a.pseudoElementsCallback=yt,a}}},provides:function(t){t.pseudoElements2svg=function(a){var r=a.node,n=r===void 0?p:r;d.searchPseudoElements&&yt(n)}}},xt=!1,Ai={mixout:function(){return{dom:{unwatch:function(){ba(),xt=!0}}}},hooks:function(){return{bootstrap:function(){mt(Fe("mutationObserverCallbacks",{}))},noAuto:function(){Zn()},watch:function(a){var r=a.observeMutationsRoot;xt?Te():mt(Fe("mutationObserverCallbacks",{observeMutationsRoot:r}))}}}},wt=function(t){var a={size:16,x:0,y:0,flipX:!1,flipY:!1,rotate:0};return t.toLowerCase().split(" ").reduce(function(r,n){var o=n.toLowerCase().split("-"),i=o[0],s=o.slice(1).join("-");if(i&&s==="h")return r.flipX=!0,r;if(i&&s==="v")return r.flipY=!0,r;if(s=parseFloat(s),isNaN(s))return r;switch(i){case"grow":r.size=r.size+s;break;case"shrink":r.size=r.size-s;break;case"left":r.x=r.x-s;break;case"right":r.x=r.x+s;break;case"up":r.y=r.y-s;break;case"down":r.y=r.y+s;break;case"rotate":r.rotate=r.rotate+s;break}return r},a)},Si={mixout:function(){return{parse:{transform:function(a){return wt(a)}}}},hooks:function(){return{parseNodeAttributes:function(a,r){var n=r.getAttribute("data-fa-transform");return n&&(a.transform=wt(n)),a}}},provides:function(t){t.generateAbstractTransformGrouping=function(a){var r=a.main,n=a.transform,o=a.containerWidth,i=a.iconWidth,s={transform:"translate(".concat(o/2," 256)")},l="translate(".concat(n.x*32,", ").concat(n.y*32,") "),u="scale(".concat(n.size/16*(n.flipX?-1:1),", ").concat(n.size/16*(n.flipY?-1:1),") "),m="rotate(".concat(n.rotate," 0 0)"),c={transform:"".concat(l," ").concat(u," ").concat(m)},g={transform:"translate(".concat(i/2*-1," -256)")},v={outer:s,inner:c,path:g};return{tag:"g",attributes:f({},v.outer),children:[{tag:"g",attributes:f({},v.inner),children:[{tag:r.icon.tag,children:r.icon.children,attributes:f(f({},r.icon.attributes),v.path)}]}]}}}},ye={x:0,y:0,width:"100%",height:"100%"};function At(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!0;return e.attributes&&(e.attributes.fill||t)&&(e.attributes.fill="black"),e}function ki(e){return e.tag==="g"?e.children:[e]}var Pi={hooks:function(){return{parseNodeAttributes:function(a,r){var n=r.getAttribute("data-fa-mask"),o=n?fe(n.split(" ").map(function(i){return i.trim()})):ma();return o.prefix||(o.prefix=_()),a.mask=o,a.maskId=r.getAttribute("data-fa-mask-id"),a}}},provides:function(t){t.generateAbstractMask=function(a){var r=a.children,n=a.attributes,o=a.main,i=a.mask,s=a.maskId,l=a.transform,u=o.width,m=o.icon,c=i.width,g=i.icon,v=gn({transform:l,containerWidth:c,iconWidth:u}),y={tag:"rect",attributes:f(f({},ye),{},{fill:"white"})},b=m.children?{children:m.children.map(At)}:{},A={tag:"g",attributes:f({},v.inner),children:[At(f({tag:m.tag,attributes:f(f({},m.attributes),v.path)},b))]},x={tag:"g",attributes:f({},v.outer),children:[A]},S="mask-".concat(s||at()),P="clip-".concat(s||at()),R={tag:"mask",attributes:f(f({},ye),{},{id:S,maskUnits:"userSpaceOnUse",maskContentUnits:"userSpaceOnUse"}),children:[y,x]},C={tag:"defs",children:[{tag:"clipPath",attributes:{id:P},children:ki(g)},R]};return r.push(C,{tag:"rect",attributes:f({fill:"currentColor","clip-path":"url(#".concat(P,")"),mask:"url(#".concat(S,")")},ye)}),{children:r,attributes:n}}}},Ei={provides:function(t){var a=!1;T.matchMedia&&(a=T.matchMedia("(prefers-reduced-motion: reduce)").matches),t.missingIconAbstract=function(){var r=[],n={fill:"currentColor"},o={attributeType:"XML",repeatCount:"indefinite",dur:"2s"};r.push({tag:"path",attributes:f(f({},n),{},{d:"M156.5,447.7l-12.6,29.5c-18.7-9.5-35.9-21.2-51.5-34.9l22.7-22.7C127.6,430.5,141.5,440,156.5,447.7z M40.6,272H8.5 c1.4,21.2,5.4,41.7,11.7,61.1L50,321.2C45.1,305.5,41.8,289,40.6,272z M40.6,240c1.4-18.8,5.2-37,11.1-54.1l-29.5-12.6 C14.7,194.3,10,216.7,8.5,240H40.6z M64.3,156.5c7.8-14.9,17.2-28.8,28.1-41.5L69.7,92.3c-13.7,15.6-25.5,32.8-34.9,51.5 L64.3,156.5z M397,419.6c-13.9,12-29.4,22.3-46.1,30.4l11.9,29.8c20.7-9.9,39.8-22.6,56.9-37.6L397,419.6z M115,92.4 c13.9-12,29.4-22.3,46.1-30.4l-11.9-29.8c-20.7,9.9-39.8,22.6-56.8,37.6L115,92.4z M447.7,355.5c-7.8,14.9-17.2,28.8-28.1,41.5 l22.7,22.7c13.7-15.6,25.5-32.9,34.9-51.5L447.7,355.5z M471.4,272c-1.4,18.8-5.2,37-11.1,54.1l29.5,12.6 c7.5-21.1,12.2-43.5,13.6-66.8H471.4z M321.2,462c-15.7,5-32.2,8.2-49.2,9.4v32.1c21.2-1.4,41.7-5.4,61.1-11.7L321.2,462z M240,471.4c-18.8-1.4-37-5.2-54.1-11.1l-12.6,29.5c21.1,7.5,43.5,12.2,66.8,13.6V471.4z M462,190.8c5,15.7,8.2,32.2,9.4,49.2h32.1 c-1.4-21.2-5.4-41.7-11.7-61.1L462,190.8z M92.4,397c-12-13.9-22.3-29.4-30.4-46.1l-29.8,11.9c9.9,20.7,22.6,39.8,37.6,56.9 L92.4,397z M272,40.6c18.8,1.4,36.9,5.2,54.1,11.1l12.6-29.5C317.7,14.7,295.3,10,272,8.5V40.6z M190.8,50 c15.7-5,32.2-8.2,49.2-9.4V8.5c-21.2,1.4-41.7,5.4-61.1,11.7L190.8,50z M442.3,92.3L419.6,115c12,13.9,22.3,29.4,30.5,46.1 l29.8-11.9C470,128.5,457.3,109.4,442.3,92.3z M397,92.4l22.7-22.7c-15.6-13.7-32.8-25.5-51.5-34.9l-12.6,29.5 C370.4,72.1,384.4,81.5,397,92.4z"})});var i=f(f({},o),{},{attributeName:"opacity"}),s={tag:"circle",attributes:f(f({},n),{},{cx:"256",cy:"364",r:"28"}),children:[]};return a||s.children.push({tag:"animate",attributes:f(f({},o),{},{attributeName:"r",values:"28;14;28;28;14;28;"})},{tag:"animate",attributes:f(f({},i),{},{values:"1;0;1;1;0;1;"})}),r.push(s),r.push({tag:"path",attributes:f(f({},n),{},{opacity:"1",d:"M263.7,312h-16c-6.6,0-12-5.4-12-12c0-71,77.4-63.9,77.4-107.8c0-20-17.8-40.2-57.4-40.2c-29.1,0-44.3,9.6-59.2,28.7 c-3.9,5-11.1,6-16.2,2.4l-13.1-9.2c-5.6-3.9-6.9-11.8-2.6-17.2c21.2-27.2,46.4-44.7,91.2-44.7c52.3,0,97.4,29.8,97.4,80.2 c0,67.6-77.4,63.5-77.4,107.8C275.7,306.6,270.3,312,263.7,312z"}),children:a?[]:[{tag:"animate",attributes:f(f({},i),{},{values:"1;0;0;0;0;1;"})}]}),a||r.push({tag:"path",attributes:f(f({},n),{},{opacity:"0",d:"M232.5,134.5l7,168c0.3,6.4,5.6,11.5,12,11.5h9c6.4,0,11.7-5.1,12-11.5l7-168c0.3-6.8-5.2-12.5-12-12.5h-23 C237.7,122,232.2,127.7,232.5,134.5z"}),children:[{tag:"animate",attributes:f(f({},i),{},{values:"0;0;1;1;0;0;"})}]}),{tag:"g",attributes:{class:"missing"},children:r}}}},Ii={hooks:function(){return{parseNodeAttributes:function(a,r){var n=r.getAttribute("data-fa-symbol"),o=n===null?!1:n===""?!0:n;return a.symbol=o,a}}}},Fi=[yn,fi,ui,ci,di,wi,Ai,Si,Pi,Ei,Ii];Mn(Fi,{mixoutsTo:k});k.noAuto;k.config;var Ci=k.library,Oi=k.dom;k.parse;k.findIconDefinition;k.toHtml;k.icon;k.layer;k.text;k.counter;/*!
 * Font Awesome Free 7.0.1 by @fontawesome - https://fontawesome.com
 * License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License)
 * Copyright 2025 Fonticons, Inc.
 */var Ni={prefix:"fas",iconName:"chevron-right",icon:[320,512,[9002],"f054","M311.1 233.4c12.5 12.5 12.5 32.8 0 45.3l-192 192c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L243.2 256 73.9 86.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l192 192z"]},ji={prefix:"fas",iconName:"chevron-left",icon:[320,512,[9001],"f053","M9.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l192 192c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L77.3 256 246.6 86.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-192 192z"]};/*!
 * Font Awesome Free 7.0.1 by @fontawesome - https://fontawesome.com
 * License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License)
 * Copyright 2025 Fonticons, Inc.
 */var Ti={prefix:"fab",iconName:"linkedin",icon:[448,512,[],"f08c","M416 32L31.9 32C14.3 32 0 46.5 0 64.3L0 447.7C0 465.5 14.3 480 31.9 480L416 480c17.6 0 32-14.5 32-32.3l0-383.4C448 46.5 433.6 32 416 32zM135.4 416l-66.4 0 0-213.8 66.5 0 0 213.8-.1 0zM102.2 96a38.5 38.5 0 1 1 0 77 38.5 38.5 0 1 1 0-77zM384.3 416l-66.4 0 0-104c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9l0 105.8-66.4 0 0-213.8 63.7 0 0 29.2 .9 0c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9l0 117.2z"]},_i={prefix:"fab",iconName:"twitter",icon:[512,512,[],"f099","M459.4 151.7c.3 4.5 .3 9.1 .3 13.6 0 138.7-105.6 298.6-298.6 298.6-59.5 0-114.7-17.2-161.1-47.1 8.4 1 16.6 1.3 25.3 1.3 49.1 0 94.2-16.6 130.3-44.8-46.1-1-84.8-31.2-98.1-72.8 6.5 1 13 1.6 19.8 1.6 9.4 0 18.8-1.3 27.6-3.6-48.1-9.7-84.1-52-84.1-103l0-1.3c14 7.8 30.2 12.7 47.4 13.3-28.3-18.8-46.8-51-46.8-87.4 0-19.5 5.2-37.4 14.3-53 51.7 63.7 129.3 105.3 216.4 109.8-1.6-7.8-2.6-15.9-2.6-24 0-57.8 46.8-104.9 104.9-104.9 30.2 0 57.5 12.7 76.7 33.1 23.7-4.5 46.5-13.3 66.6-25.3-7.8 24.4-24.4 44.8-46.1 57.8 21.1-2.3 41.6-8.1 60.4-16.2-14.3 20.8-32.2 39.3-52.6 54.3z"]};Ci.add(ji,Ni,Ti,_i);Oi.watch();
//# sourceMappingURL=main.js.map
