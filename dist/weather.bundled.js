(()=>{"use strict";var n={426:(n,t,e)=>{e.d(t,{Z:()=>s});var i=e(645),o=e.n(i)()((function(n){return n[1]}));o.push([n.id,":root {\n    --sky-color: #4CACF2;\n}\n\n.width-80 {\n    width: 80%;\n    margin: auto;\n}\n\n.long-page {\n    height: 1150px;\n}\n\n.info-user {\n    font-weight: 300;\n    color: grey;\n}\n\n.empty-state {\n    display: flex;\n    align-items: center;\n    justify-content: center;\n}\n\n* {\n    margin: 0;\n    padding: 0;\n    font-family: 'Helvetica Neue', sans-serif;\n}\n\nbody {\n    height: 100vh;\n}\n\nmain {\n    margin: auto;\n    padding-bottom: 50px;\n}\n\nheader {\n    background-color: var(--sky-color);\n    color: white;\n}\n\nheader .head {\n    display: flex;\n    align-items: center;\n    justify-content: space-between;\n}\n\nheader .head .logo {\n    display: flex;\n    align-items: center;\n    cursor: pointer;\n}\n\nheader .head .logo img {\n    width: 34;\n    height: 34px;\n    margin-right: 15px;\n}\n\nheader .head h1 { font-size: 20px; font-weight: 500; padding: 22px 0; }\nheader .head p { font-size: 15px; font-weight: 200; }\n\nsection.search {\n    display: flex;\n    align-items: center;\n    justify-content: space-between;\n    margin-top: 60px;\n    margin-bottom: 50px;\n}\n\nsection.search input {\n    padding-left: 30px;\n    padding-top: 14px;\n    padding-bottom: 13px;\n    width: 100%;\n    margin-right: 15px;\n    box-sizing: border-box;\n    border-radius: 8px;\n    font-size: 17px;\n    font-weight: 200;\n    border: none;\n    background-color: #F4F4F4;\n}\n\nsection.search input::placeholder {\n    font-weight: 100;\n    font-size: 17px;\n}\n\nsection.search input:focus {\n    outline: none;\n}\n\nsection.search button {\n    cursor: pointer;\n    font-size: 17px;\n    font-weight: 500;\n    padding: 13px 33px;\n    box-sizing: border-box;\n    border-radius: 8px;\n    border: none;\n    color: white;\n    background-color: var(--sky-color);\n}\n\nsection.weather-result {\n    display: flex;\n    flex-direction: column;\n    justify-content: space-between;\n\n    margin-top: 50px;\n    border-radius: 10px;\n    padding: 25px 30px;\n    box-sizing: border-box;\n    color: white;\n    background-image: linear-gradient(125deg, #0080ED, #00B6ED);\n}\n\nsection.weather-result .top {\n    display: flex;\n    justify-content: space-between;\n}\n\nsection.weather-result .top .city p > img {\n    width: 28px;\n    height: 32px;\n    margin-right: 7px;\n}\n\nsection.weather-result .top .city p:first-child {\n    display: flex;\n    align-items: center;\n    font-size: 40px;\n    font-weight: 600;\n}\n\nsection.weather-result .top .city p:last-child {\n    margin-top: 10px;\n    font-size: 20px;\n    font-weight: 200;\n}\n\nsection.weather-result .top .celcius {\n    text-align: center;\n}\n\nsection.weather-result .top .celcius p:first-child {\n    font-size: 75px;\n    font-weight: 200;\n}\n\nsection.weather-result .bottom {\n    margin-top: 199px;\n    display: flex;\n    justify-content: space-between;\n}\n\nsection.weather-result .bottom .temp-info,\nsection.weather-result .bottom .wind .winds,\nsection.weather-result .bottom .phv .phvs {\n    display: flex;\n}\n\nsection.weather-result .bottom .wind img {\n    display: none;\n}\n\nsection.weather-result .bottom .wind .wind-name, \nsection.weather-result .bottom .phv .phv-name {\n    display: none;\n}\n\nsection.weather-result .bottom .temp-info .temp { margin-right: 30px; }\nsection.weather-result .bottom .temp-info .temp p:first-child { font-size: 15px; font-weight: 500; }\nsection.weather-result .bottom .temp-info .temp p:last-child { font-size: 25px; font-weight: 200; margin-top: 5px; }\n\nsection.weather-result .bottom .temp-info .temp-min { margin-right: 30px; }\nsection.weather-result .bottom .temp-info .temp-min p:first-child { font-size: 15px; font-weight: 500; }\nsection.weather-result .bottom .temp-info .temp-min p:last-child { font-size: 25px; font-weight: 200; margin-top: 5px; }\n\nsection.weather-result .bottom .temp-info .temp-max p:first-child { font-size: 15px; font-weight: 500; }\nsection.weather-result .bottom .temp-info .temp-max p:last-child { font-size: 25px; font-weight: 200; margin-top: 5px; }\n\nsection.weather-result .bottom .wind .speed { margin-right: 30px; }\nsection.weather-result .bottom .wind .speed p:first-child { font-size: 15px; font-weight: 500; }\nsection.weather-result .bottom .wind .speed p:last-child { font-size: 25px; font-weight: 200; margin-top: 5px; }\n\nsection.weather-result .bottom .wind .degree p:first-child { font-size: 15px; font-weight: 500; }\nsection.weather-result .bottom .wind .degree p:last-child { font-size: 25px; font-weight: 200; margin-top: 5px; }\n\nsection.weather-result .bottom .phv .pressure { margin-right: 30px; }\nsection.weather-result .bottom .phv .pressure p:first-child { font-size: 15px; font-weight: 500; }\nsection.weather-result .bottom .phv .pressure p:last-child { font-size: 25px; font-weight: 200; margin-top: 5px; }\n\nsection.weather-result .bottom .phv .humidity { margin-right: 30px; }\nsection.weather-result .bottom .phv .humidity p:first-child { font-size: 15px; font-weight: 500; }\nsection.weather-result .bottom .phv .humidity p:last-child { font-size: 25px; font-weight: 200; margin-top: 5px; }\n\nsection.weather-result .bottom .phv .visibility p:first-child { font-size: 15px; font-weight: 500; }\nsection.weather-result .bottom .phv .visibility p:last-child { font-size: 25px; font-weight: 200; margin-top: 5px; }\n\n/* \n    STYLE ON TABLET\n    768px (portrait)\n*/\n\n@media (min-width: 768px) and (max-width: 1024px) { \n\n    header .head h1 { font-size: 20px; }\n\n    section.search input {\n        padding-top: 8px;\n        padding-bottom: 8px;\n        padding-left: 25px;\n    }\n\n    section.search button {\n        padding: 9px 22px;\n    }\n\n    section.weather-result {\n        padding: 35px 30px;\n    }\n\n    section.weather-result .top .city p > img {\n        width: 24px;\n        height: 28px;\n        margin-right: 7px;\n    }\n\n    section.weather-result .top .city p:first-child {\n        font-size: 25px;\n    }\n\n    section.weather-result .top .city p:last-child {\n        font-size: 13px;\n    }\n\n    section.weather-result .top .celcius p:first-child {\n        font-size: 60px;\n    }\n\n    section.weather-result .top .celcius p:last-child {\n        font-size: 13px;\n    }\n\n    /* MARGIN */\n    section.weather-result .bottom .temp-info .temp,\n    section.weather-result .bottom .temp-info .temp-min { \n        margin-right: 20px; \n    }\n\n    section.weather-result .bottom .wind .speed { margin-right: 20px; }\n\n    section.weather-result .bottom .phv .pressure,\n    section.weather-result .bottom .phv .humidity {\n        margin-right: 20px;\n    }\n\n    /* FISRT CHILD */\n    section.weather-result .bottom .temp-info .temp p:first-child,\n    section.weather-result .bottom .temp-info .temp-min p:first-child,\n    section.weather-result .bottom .temp-info .temp-max p:first-child {\n        font-size: 12px;\n    }\n\n    section.weather-result .bottom .wind .speed p:first-child,\n    section.weather-result .bottom .wind .degree p:first-child {\n        font-size: 12px;\n    }\n\n    section.weather-result .bottom .phv .pressure p:first-child,\n    section.weather-result .bottom .phv .humidity p:first-child,\n    section.weather-result .bottom .phv .visibility p:first-child {\n        font-size: 12px;\n    }\n\n    /* LAST CHILD */\n    section.weather-result .bottom .temp-info .temp p:last-child,\n    section.weather-result .bottom .temp-info .temp-min p:last-child,\n    section.weather-result .bottom .temp-info .temp-max p:last-child {\n        font-size: 18px;\n    }\n\n    section.weather-result .bottom .wind .speed p:last-child,\n    section.weather-result .bottom .wind .degree p:last-child {\n        font-size: 18px;\n    }\n\n    section.weather-result .bottom .phv .pressure p:last-child,\n    section.weather-result .bottom .phv .humidity p:last-child,\n    section.weather-result .bottom .phv .visibility p:last-child {\n        font-size: 18px;\n    }\n}\n\n/* \n    STYLE ON MOBILE - L\n    425px (portrait)\n*/\n\n@media (min-width: 425px) and (max-width: 767px) {\n\n    main {\n        padding-bottom: 450px;\n        /* border: 1px solid red; */\n    }\n\n    header .head .logo img {\n        width: 28px;\n        height: 28px;\n        margin-right: 10px;\n    }\n\n    header .head h1 {\n        font-size: 15px;\n    }\n\n    section.search input {\n        padding-left: 22px;\n        padding-top: 7px;\n        padding-bottom: 7px;\n        margin-right: 8px;\n        border-radius: 5px;\n        background-color: #ededed;\n    }\n\n    section.search button {\n        font-size: 14px;\n        border-radius: 5px;\n        padding: 8px 17px;\n    }\n\n    section.weather-result {\n        height: 568px;\n        padding: 20px 20px;\n    }\n\n    section.weather-result .top {\n        position: relative;\n        /* border: 1px solid red; */\n    }\n\n    section.weather-result .top .city {\n        height: fit-content;\n        /* border: 1px solid red; */\n    }\n\n    /* Location SVG */\n    section.weather-result .top .city p > img {\n        width: 20px;\n        height: 24px;\n        margin-right: 7px;\n    }\n\n    section.weather-result .top .city p:first-child {\n        font-size: 20px;\n    }\n\n    section.weather-result .top .city p:last-child {\n        font-size: 12px;\n        width: 125px;\n        /* border: 1px solid red; */\n    }\n\n    section.weather-result .top .celcius {\n        position: absolute;\n        top: 60px;\n        left: 80px;\n        margin-top: 156px;\n        /* border: 1px solid red; */\n    }\n\n    section.weather-result .top .celcius p:first-child {\n        font-size: 60px;\n    }\n\n    section.weather-result .top .celcius p:last-child {\n        font-size: 15px;\n    }\n\n    section.weather-result .top img.icon {\n        width: 60px;\n        height: 60px;\n        /* border: 1px solid red; */\n    }\n\n    section.weather-result .bottom {\n        position: relative;\n        display: block;\n    }\n\n    section.weather-result .bottom .temp-info {\n        width: 100%;\n        justify-content: space-between;\n    }\n\n    /* FISRT CHILD */\n    section.weather-result .bottom .temp-info .temp p:first-child,\n    section.weather-result .bottom .temp-info .temp-min p:first-child,\n    section.weather-result .bottom .temp-info .temp-max p:first-child {\n        font-size: 12px;\n    }\n\n    /* LAST CHILD */\n    section.weather-result .bottom .temp-info .temp p:last-child,\n    section.weather-result .bottom .temp-info .temp-min p:last-child,\n    section.weather-result .bottom .temp-info .temp-max p:last-child {\n        font-size: 18px;\n    }\n\n    section.weather-result .bottom .wind {\n        position: absolute;\n        width: 100%;\n        top: 100px;\n        left: -20px;\n        padding: 20px 20px;\n        border-radius: 10px;\n        background-image: linear-gradient(125deg, #0080ED, #00B6ED);\n    }\n\n    section.weather-result .bottom .wind .wind-name {\n        display: block;\n        font-size: 20px;\n        font-weight: 600;\n        margin-bottom: 100px;\n    }\n\n    section.weather-result .bottom .wind .wind-header {\n        display: flex;\n        justify-content: space-between;\n    }\n\n    section.weather-result .bottom .wind img {\n        display: block;\n        position: relative;\n        width: 169px;\n        height: 112.94px;\n        bottom: 10px;\n        left: 40px;\n        opacity: .4;\n    }\n\n    section.weather-result .bottom .wind .speed p:first-child,\n    section.weather-result .bottom .wind .degree p:first-child {\n        font-size: 12px;\n    }\n\n    section.weather-result .bottom .wind .speed p:last-child,\n    section.weather-result .bottom .wind .degree p:last-child {\n        font-size: 18px;\n    }\n\n    section.weather-result .bottom .phv .phv-name {\n        display: block;\n        font-size: 20px;\n        font-weight: 600;\n        margin-bottom: 37px;\n    }\n     \n    section.weather-result .bottom .phv {\n        position: absolute;\n        width: 100%;\n        top: 345px;\n        left: -20px;\n        padding: 20px 20px;\n        border-radius: 10px;\n        margin-bottom: 100px;\n        background-image: linear-gradient(125deg, #0080ED, #00B6ED);\n    }\n\n    section.weather-result .bottom .phv .pressure p:first-child,\n    section.weather-result .bottom .phv .humidity p:first-child,\n    section.weather-result .bottom .phv .visibility p:first-child { \n        font-size: 12px; \n        font-weight: 500; \n    }\n\n    section.weather-result .bottom .phv .pressure p:last-child,\n    section.weather-result .bottom .phv .humidity p:last-child,\n    section.weather-result .bottom .phv .visibility p:last-child { \n        font-size: 18px; \n        font-weight: 200; \n    }\n\n}\n\n/* \n  ##Device = Most of the Smartphones Mobiles (Portrait)\n  ##Screen = B/w 320px to 479px\n*/\n\n@media (min-width: 280px) and (max-width: 424px) {\n  \n    .width-80 {\n        width: 90%;\n    }\n\n    main {\n        overflow-x: hidden;\n        padding-bottom: 450px;\n        /* width: 100%; */\n    }\n\n    header .head .logo img {\n        width: 28px;\n        height: 28px;\n        margin-right: 10px;\n    }\n\n    header .head h1 {\n        font-size: 15px;\n    }\n\n    header .head p {\n        font-size: 14px;\n        /* display: none; */\n    }\n\n    section.search input {\n        padding-left: 22px;\n        padding-top: 7px;\n        padding-bottom: 7px;\n        margin-right: 8px;\n        border-radius: 5px;\n        background-color: #ededed;\n    }\n\n    section.search button {\n        font-size: 14px;\n        border-radius: 5px;\n        padding: 8px 17px;\n    }\n\n    section.weather-result {\n        height: 568px;\n        padding: 20px 20px;\n    }\n\n    section.weather-result .top {\n        position: relative;\n        border: 1px solid red;\n    }\n\n    section.weather-result .top .city {\n        height: fit-content;\n        /* border: 1px solid red; */\n    }\n\n    section.weather-result .top .city p > img {\n        width: 20px;\n        height: 24px;\n        margin-right: 7px;\n    }\n\n    section.weather-result .top .city p:first-child {\n        font-size: 20px;\n        width: 70px;\n    }\n\n    section.weather-result .top .city p:last-child {\n        font-size: 12px;\n        width: 125px;\n        /* border: 1px solid red; */\n    }\n\n    section.weather-result .top .celcius {\n        position: absolute;\n        top: 60px;\n        left: 80px;\n        margin-top: 156px;\n        /* border: 1px solid red; */\n    }\n\n    section.weather-result .top .celcius p:first-child {\n        font-size: 60px;\n    }\n\n    section.weather-result .top .celcius p:last-child {\n        font-size: 15px;\n    }\n\n    section.weather-result .top img.icon {\n        width: 60px;\n        height: 60px;\n        /* border: 1px solid red; */\n    }\n\n    section.weather-result .bottom {\n        position: relative;\n        display: block;\n    }\n\n    section.weather-result .bottom .temp-info {\n        width: 100%;\n        justify-content: space-between;\n    }\n\n    /* FISRT CHILD */\n    section.weather-result .bottom .temp-info .temp p:first-child,\n    section.weather-result .bottom .temp-info .temp-min p:first-child,\n    section.weather-result .bottom .temp-info .temp-max p:first-child {\n        font-size: 12px;\n    }\n\n    /* LAST CHILD */\n    section.weather-result .bottom .temp-info .temp p:last-child,\n    section.weather-result .bottom .temp-info .temp-min p:last-child,\n    section.weather-result .bottom .temp-info .temp-max p:last-child {\n        font-size: 18px;\n    }\n\n    section.weather-result .bottom .wind .wind-header {\n        display: flex;\n        justify-content: space-between;\n    }\n\n    section.weather-result .bottom .wind img {\n        display: block;\n        position: relative;\n        width: 169px;\n        height: 112.94px;\n        bottom: 10px;\n        left: 40px;\n        opacity: .4;\n    }\n\n    section.weather-result .bottom .wind .wind-name {\n        display: block;\n        font-size: 20px;\n        font-weight: 600;\n        margin-bottom: 100px;\n    }\n\n    section.weather-result .bottom .wind {\n        position: absolute;\n        width: 100%;\n        top: 100px;\n        left: -20px;\n        padding: 20px 20px;\n        border-radius: 10px;\n        background-image: linear-gradient(125deg, #0080ED, #00B6ED);\n    }\n\n    section.weather-result .bottom .wind .speed p:first-child,\n    section.weather-result .bottom .wind .degree p:first-child {\n        font-size: 12px;\n    }\n\n    section.weather-result .bottom .wind .speed p:last-child,\n    section.weather-result .bottom .wind .degree p:last-child {\n        font-size: 18px;\n    }\n\n    section.weather-result .bottom .phv .phv-name {\n        display: block;\n        font-size: 20px;\n        font-weight: 600;\n        margin-bottom: 37px;\n    }\n     \n    section.weather-result .bottom .phv {\n        position: absolute;\n        width: 100%;\n        top: 340px;\n        left: -20px;\n        padding: 20px 20px;\n        border-radius: 10px;\n        margin-bottom: 100px;\n        background-image: linear-gradient(125deg, #0080ED, #00B6ED);\n    }\n\n    section.weather-result .bottom .phv .pressure p:first-child,\n    section.weather-result .bottom .phv .humidity p:first-child,\n    section.weather-result .bottom .phv .visibility p:first-child { \n        font-size: 12px; \n        font-weight: 500; \n    }\n\n    section.weather-result .bottom .phv .pressure p:last-child,\n    section.weather-result .bottom .phv .humidity p:last-child,\n    section.weather-result .bottom .phv .visibility p:last-child { \n        font-size: 18px; \n        font-weight: 200; \n    }\n    \n}",""]);const s=o},645:n=>{n.exports=function(n){var t=[];return t.toString=function(){return this.map((function(t){var e=n(t);return t[2]?"@media ".concat(t[2]," {").concat(e,"}"):e})).join("")},t.i=function(n,e,i){"string"==typeof n&&(n=[[null,n,""]]);var o={};if(i)for(var s=0;s<this.length;s++){var p=this[s][0];null!=p&&(o[p]=!0)}for(var r=0;r<n.length;r++){var a=[].concat(n[r]);i&&o[a[0]]||(e&&(a[2]?a[2]="".concat(e," and ").concat(a[2]):a[2]=e),t.push(a))}},t}},379:(n,t,e)=>{var i,o=function(){var n={};return function(t){if(void 0===n[t]){var e=document.querySelector(t);if(window.HTMLIFrameElement&&e instanceof window.HTMLIFrameElement)try{e=e.contentDocument.head}catch(n){e=null}n[t]=e}return n[t]}}(),s=[];function p(n){for(var t=-1,e=0;e<s.length;e++)if(s[e].identifier===n){t=e;break}return t}function r(n,t){for(var e={},i=[],o=0;o<n.length;o++){var r=n[o],a=t.base?r[0]+t.base:r[0],d=e[a]||0,c="".concat(a," ").concat(d);e[a]=d+1;var l=p(c),h={css:r[1],media:r[2],sourceMap:r[3]};-1!==l?(s[l].references++,s[l].updater(h)):s.push({identifier:c,updater:f(h,t),references:1}),i.push(c)}return i}function a(n){var t=document.createElement("style"),i=n.attributes||{};if(void 0===i.nonce){var s=e.nc;s&&(i.nonce=s)}if(Object.keys(i).forEach((function(n){t.setAttribute(n,i[n])})),"function"==typeof n.insert)n.insert(t);else{var p=o(n.insert||"head");if(!p)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");p.appendChild(t)}return t}var d,c=(d=[],function(n,t){return d[n]=t,d.filter(Boolean).join("\n")});function l(n,t,e,i){var o=e?"":i.media?"@media ".concat(i.media," {").concat(i.css,"}"):i.css;if(n.styleSheet)n.styleSheet.cssText=c(t,o);else{var s=document.createTextNode(o),p=n.childNodes;p[t]&&n.removeChild(p[t]),p.length?n.insertBefore(s,p[t]):n.appendChild(s)}}function h(n,t,e){var i=e.css,o=e.media,s=e.sourceMap;if(o?n.setAttribute("media",o):n.removeAttribute("media"),s&&"undefined"!=typeof btoa&&(i+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(s))))," */")),n.styleSheet)n.styleSheet.cssText=i;else{for(;n.firstChild;)n.removeChild(n.firstChild);n.appendChild(document.createTextNode(i))}}var m=null,u=0;function f(n,t){var e,i,o;if(t.singleton){var s=u++;e=m||(m=a(t)),i=l.bind(null,e,s,!1),o=l.bind(null,e,s,!0)}else e=a(t),i=h.bind(null,e,t),o=function(){!function(n){if(null===n.parentNode)return!1;n.parentNode.removeChild(n)}(e)};return i(n),function(t){if(t){if(t.css===n.css&&t.media===n.media&&t.sourceMap===n.sourceMap)return;i(n=t)}else o()}}n.exports=function(n,t){(t=t||{}).singleton||"boolean"==typeof t.singleton||(t.singleton=(void 0===i&&(i=Boolean(window&&document&&document.all&&!window.atob)),i));var e=r(n=n||[],t);return function(n){if(n=n||[],"[object Array]"===Object.prototype.toString.call(n)){for(var i=0;i<e.length;i++){var o=p(e[i]);s[o].references--}for(var a=r(n,t),d=0;d<e.length;d++){var c=p(e[d]);0===s[c].references&&(s[c].updater(),s.splice(c,1))}e=a}}}},984:n=>{n.exports=JSON.parse('{"appID":"deb6f5a974ffe2933f25d91271eecd20"}')}},t={};function e(i){var o=t[i];if(void 0!==o)return o.exports;var s=t[i]={id:i,exports:{}};return n[i](s,s.exports,e),s.exports}e.n=n=>{var t=n&&n.__esModule?()=>n.default:()=>n;return e.d(t,{a:t}),t},e.d=(n,t)=>{for(var i in t)e.o(t,i)&&!e.o(n,i)&&Object.defineProperty(n,i,{enumerable:!0,get:t[i]})},e.o=(n,t)=>Object.prototype.hasOwnProperty.call(n,t);var i={};(()=>{e.d(i,{h:()=>d});var n=e(379),t=e.n(n),o=e(426);t()(o.Z,{insert:"head",singleton:!1}),o.Z.locals;const s=function(n){const{name:t,dt:e,main:{temp:i,temp_min:o,temp_max:s,pressure:p,humidity:r},visibility:a,wind:{speed:c,deg:l},weather:[{id:h,main:m,description:u,icon:f}]}=n;let w="";w+=`\n    <section class="weather-result width-80">\n        <div class="top">\n            <div class="city">\n                <p><img src="../assets/location-vc.svg" class="location">${t}</p>\n                <p>${function(){const n=new Date;return`${["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"][n.getDay()]}, ${n.getDate()} ${["Jan","Feb","Mar","Apr","May","June","July","Aug","Sep","Oct","Nov","Dec"][n.getMonth()]} ${n.getFullYear()}`}()}</p>\n            </div>\n\n            <div class="celcius">\n                <p>${Math.floor(i-273.15)}°C</p>\n                <p>${m}</p>\n            </div>\n            \n            <img src="${function(n){return`http://openweathermap.org/img/wn/${n}@2x.png`}(f)}" alt="${u}" class="icon">\n        </div>\n\n        <div class="bottom">\n\n            <div class="temp-info">\n                <div class="temp">\n                    <p>Temp</p>\n                    <p>${Math.floor(i)} K</p>\n                </div>\n\n                <div class="temp-min">\n                    <p>Temp Min</p>\n                    <p>${Math.floor(o)} K</p>\n                </div>\n\n                <div class="temp-max">\n                    <p>Temp Max</p>\n                    <p>${Math.floor(s)} K</p>\n                </div>\n            </div>\n\n            <div class="wind">\n                <div class="wind-header">\n                    <p class="wind-name">Wind</p>\n                    <img src="../assets/wind2.png">\n                </div>\n\n                <div class="winds">\n                    <div class="speed">\n                        <p>Speed</p>\n                        <p>${c}</p>\n                    </div>\n    \n                    <div class="degree">\n                        <p>Deg</p>\n                        <p>${l}</p>\n                    </div>\n                </div>\n            </div>\n\n            <div class="phv">\n                <p class="phv-name">PHV</p>\n\n                <div class="phvs">\n                    <div class="pressure">\n                        <p>Pressure</p>\n                        <p>${p}</p>\n                    </div>\n    \n                    <div class="humidity">\n                        <p>Humidity</p>\n                        <p>${r}</p>\n                    </div>\n    \n                    <div class="visibility">\n                        <p>Visibility</p>\n                        <p>${a}</p>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </section>\n    `,d.innerHTML="",d.innerHTML=w},{appID:p}=e(984),r=document.querySelector("section.search button"),a=document.querySelector("section.search input"),d=document.querySelector("section.weather-group"),c=document.querySelector("header .head .logo");d.innerHTML='\n    <section class="weather-result width-80">\n        <div class="top">\n            <div class="city">\n                <p><img src="../assets/location-vc.svg" class="location">Jakarta</p>\n                <p>Thursday, 24 June 2021</p>\n            </div>\n\n            <div class="celcius">\n                <p>25°C</p>\n                <p>Haze</p>\n            </div>\n            \n            <img src="http://openweathermap.org/img/wn/10d@2x.png" alt="Clouds" class="icon">\n        </div>\n\n        <div class="bottom">\n\n            <div class="temp-info">\n                <div class="temp">\n                    <p>Temp</p>\n                    <p>300 K</p>\n                </div>\n\n                <div class="temp-min">\n                    <p>Temp Min</p>\n                    <p>300 K</p>\n                </div>\n\n                <div class="temp-max">\n                    <p>Temp Max</p>\n                    <p>300 K</p>\n                </div>\n            </div>\n\n            <div class="wind">\n                <div class="wind-header">\n                    <p class="wind-name">Wind</p>\n                    <img src="../assets/wind.png">\n                </div>\n\n                <div class="winds">\n                    <div class="speed">\n                        <p>Speed</p>\n                        <p>1.30</p>\n                    </div>\n\n                    <div class="degree">\n                        <p>Deg</p>\n                        <p>500</p>\n                    </div>\n                </div>\n            </div>\n\n            <div class="phv">\n                <p class="phv-name">PHV</p>\n\n                <div class="phvs">\n                    <div class="pressure">\n                        <p>Pressure</p>\n                        <p>3000</p>\n                    </div>\n\n                    <div class="humidity">\n                        <p>Humidity</p>\n                        <p>5.78</p>\n                    </div>\n\n                    <div class="visibility">\n                        <p>Visibility</p>\n                        <p>6000</p>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </section>\n    ',c.addEventListener("click",(()=>{window.location.reload()})),r.addEventListener("click",(()=>{""==a.value?alert("Insert the City!"):(d.innerHTML='\n    <section class="weather-result width-80">\n        <div class="top">\n            <div class="city">\n                <p><img src="../assets/location-vc.svg" class="location">Loading ..</p>\n                <p>Loading ..</p>\n            </div>\n\n            <div class="celcius">\n                <p>...</p>\n                <p>loading ...</p>\n            </div>\n            \n            <img src="" alt="" class="icon">\n        </div>\n\n        <div class="bottom">\n\n            <div class="temp-info">\n                <div class="temp">\n                    <p>Temp</p>\n                    <p>...</p>\n                </div>\n\n                <div class="temp-min">\n                    <p>Temp Min</p>\n                    <p>...</p>\n                </div>\n\n                <div class="temp-max">\n                    <p>Temp Max</p>\n                    <p>...</p>\n                </div>\n            </div>\n\n            <div class="wind">\n                <div class="wind-header">\n                    <p class="wind-name">Wind</p>\n                    <img src="../assets/wind.png">\n                </div>\n\n                <div class="winds">\n                    <div class="speed">\n                        <p>Speed</p>\n                        <p>...</p>\n                    </div>\n    \n                    <div class="degree">\n                        <p>Deg</p>\n                        <p>...</p>\n                    </div>\n                </div>\n            </div>\n\n            <div class="phv">\n                <p class="phv-name">PHV</p>\n\n                <div class="phvs">\n                    <div class="pressure">\n                        <p>Pressure</p>\n                        <p>...</p>\n                    </div>\n    \n                    <div class="humidity">\n                        <p>Humidity</p>\n                        <p>...</p>\n                    </div>\n    \n                    <div class="visibility">\n                        <p>Visibility</p>\n                        <p>...</p>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </section>',fetch(`https://api.openweathermap.org/data/2.5/weather?q=${a.value}&appid=${p}`).then((n=>{if(200===n.status)return n.json();alert(`City ${n.statusText}`),d.innerHTML='\n        <div class="empty-state">\n            <p class="info-user">No City Showed ...</p>\n        </div>\n    '})).then((n=>s(n))).catch((n=>console.log(n))))})),a.addEventListener("keyup",(n=>{"Enter"==n.key&&r.click()}))})()})();