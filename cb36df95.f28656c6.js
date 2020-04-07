/*! For license information please see cb36df95.f28656c6.js.LICENSE.txt */
(window.webpackJsonp=window.webpackJsonp||[]).push([[22],{123:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return c})),a.d(t,"metadata",(function(){return l})),a.d(t,"rightToc",(function(){return i})),a.d(t,"default",(function(){return u}));var r=a(1),n=a(6),o=(a(0),a(137)),b=a(141),s=a(142),c={title:"Methods"},l={id:"formatting/methods",title:"Methods",description:"import Tabs from '@theme/Tabs';",source:"@site/docs/formatting/methods.mdx",permalink:"/fast-csv/docs/formatting/methods",editUrl:"https://github.com/C2FO/fast-csv/edit/master/documentation/docs/formatting/methods.mdx",sidebar:"docs",previous:{title:"Row Types",permalink:"/fast-csv/docs/formatting/row-types"},next:{title:"Examples",permalink:"/fast-csv/docs/formatting/examples"}},i=[{value:"format",id:"format",children:[]},{value:"write",id:"write",children:[]},{value:"writeToStream",id:"writetostream",children:[]},{value:"writeToPath",id:"writetopath",children:[]},{value:"writeToString",id:"writetostring",children:[]},{value:"writeToBuffer",id:"writetobuffer",children:[]}],p={rightToc:i};function u(e){var t=e.components,a=Object(n.a)(e,["components"]);return Object(o.b)("wrapper",Object(r.a)({},p,a,{components:t,mdxType:"MDXLayout"}),Object(o.b)("h2",{id:"format"},"format"),Object(o.b)("p",null,Object(o.b)("inlineCode",{parentName:"p"},"csv.format(options): CsvFormatterStream")),Object(o.b)("p",null,"This is the main entry point for formatting CSVs. It is used by all other helper methods."),Object(o.b)(b.a,{defaultValue:"ts",values:[{label:"TypeScript",value:"ts"},{label:"JavaScript",value:"js"},{label:"Output",value:"output"}],mdxType:"Tabs"},Object(o.b)(s.a,{value:"ts",mdxType:"TabItem"},Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-ts"}),"import { format } from '@fast-csv/format';\n\nconst stream = format();\nstream.pipe(process.stdout);\n\nstream.write(['a', 'b']);\nstream.write(['a1', 'b1']);\nstream.write(['a2', 'b2']);\nstream.end();\n"))),Object(o.b)(s.a,{value:"js",mdxType:"TabItem"},Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-js"}),"const { format } = require('@fast-csv/format');\n\nconst stream = format();\nstream.pipe(process.stdout);\n\nstream.write(['a', 'b']);\nstream.write(['a1', 'b1']);\nstream.write(['a2', 'b2']);\nstream.end();\n"))),Object(o.b)(s.a,{value:"output",mdxType:"TabItem"},Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{}),"a,b\na1,b1\na2,b2\n")))),Object(o.b)("h2",{id:"write"},"write"),Object(o.b)("p",null,Object(o.b)("inlineCode",{parentName:"p"},"write(rows[, options]): CsvFormatterStream")),Object(o.b)("p",null,"Create a formatter, writes the rows and returns the ",Object(o.b)("inlineCode",{parentName:"p"},"CsvFormatterStream"),"."),Object(o.b)(b.a,{defaultValue:"ts",values:[{label:"TypeScript",value:"ts"},{label:"JavaScript",value:"js"},{label:"Output",value:"output"}],mdxType:"Tabs"},Object(o.b)(s.a,{value:"ts",mdxType:"TabItem"},Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-ts"}),"import { write } from '@fast-csv/format';\n\nconst rows = [\n    ['a', 'b'],\n    ['a1', 'b1'],\n    ['a2', 'b2'],\n];\nwrite(rows).pipe(process.stdout);\n"))),Object(o.b)(s.a,{value:"js",mdxType:"TabItem"},Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-js"}),"const { write } = require('@fast-csv/format');\n\nconst rows = [\n    ['a', 'b'],\n    ['a1', 'b1'],\n    ['a2', 'b2'],\n];\nwrite(rows).pipe(process.stdout);\n"))),Object(o.b)(s.a,{value:"output",mdxType:"TabItem"},Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{}),"a,b\na1,b1\na2,b2\n")))),Object(o.b)("h2",{id:"writetostream"},"writeToStream"),Object(o.b)("p",null,Object(o.b)("inlineCode",{parentName:"p"},"writeToStream(stream, rows[, options])")),Object(o.b)("p",null,"Write an array of values to a ",Object(o.b)("inlineCode",{parentName:"p"},"WritableStream"),", and returns the original stream"),Object(o.b)(b.a,{defaultValue:"ts",values:[{label:"TypeScript",value:"ts"},{label:"JavaScript",value:"js"},{label:"Output",value:"output"}],mdxType:"Tabs"},Object(o.b)(s.a,{value:"ts",mdxType:"TabItem"},Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-ts"}),"import { writeToStream } from '@fast-csv/format';\n\nconst rows = [\n    ['a', 'b'],\n    ['a1', 'b1'],\n    ['a2', 'b2'],\n];\nwriteToStream(process.stdout, rows);\n"))),Object(o.b)(s.a,{value:"js",mdxType:"TabItem"},Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-js"}),"const { writeToStream } = require('@fast-csv/format');\n\nconst rows = [\n    ['a', 'b'],\n    ['a1', 'b1'],\n    ['a2', 'b2'],\n];\nwriteToStream(process.stdout, rows);\n"))),Object(o.b)(s.a,{value:"output",mdxType:"TabItem"},Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{}),"a,b\na1,b1\na2,b2\n")))),Object(o.b)("h2",{id:"writetopath"},"writeToPath"),Object(o.b)("p",null,Object(o.b)("inlineCode",{parentName:"p"},"writeToPath(path, rows[, options])")),Object(o.b)("p",null,"Write an array of values to the specified path"),Object(o.b)(b.a,{defaultValue:"ts",values:[{label:"TypeScript",value:"ts"},{label:"JavaScript",value:"js"},{label:"Output",value:"output"}],mdxType:"Tabs"},Object(o.b)(s.a,{value:"ts",mdxType:"TabItem"},Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-ts"}),"import { writeToPath } from '@fast-csv/format';\n\nconst rows = [\n    ['a', 'b'],\n    ['a1', 'b1'],\n    ['a2', 'b2'],\n];\nwriteToPath(path.resolve(__dirname, 'tmp.csv'), rows)\n    .on('error', err => console.error(err))\n    .on('finish', () => console.log('Done writing.'));\n\n"))),Object(o.b)(s.a,{value:"js",mdxType:"TabItem"},Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-js"}),"const { writeToPath } = require('@fast-csv/format');\n\nconst rows = [\n    ['a', 'b'],\n    ['a1', 'b1'],\n    ['a2', 'b2'],\n];\nwriteToPath(path.resolve(__dirname, 'tmp.csv'), rows)\n    .on('error', err => console.error(err))\n    .on('finish', () => console.log('Done writing.'));\n\n"))),Object(o.b)(s.a,{value:"output",mdxType:"TabItem"},Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{}),"a,b\na1,b1\na2,b2\n")))),Object(o.b)("h2",{id:"writetostring"},"writeToString"),Object(o.b)("p",null,Object(o.b)("inlineCode",{parentName:"p"},"writeToString(arr[, options]): Promise<string>")),Object(o.b)("p",null,"Formats the rows and returns a ",Object(o.b)("inlineCode",{parentName:"p"},"Promise")," that will resolve with the CSV content as a ",Object(o.b)("inlineCode",{parentName:"p"},"string"),"."),Object(o.b)(b.a,{defaultValue:"ts",values:[{label:"TypeScript",value:"ts"},{label:"JavaScript",value:"js"},{label:"Output",value:"output"}],mdxType:"Tabs"},Object(o.b)(s.a,{value:"ts",mdxType:"TabItem"},Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-ts"}),"import { writeToString } from '@fast-csv/format';\n\nconst rows = [\n    ['a', 'b'],\n    ['a1', 'b1'],\n    ['a2', 'b2'],\n];\nwriteToString(rows).then(data => console.log(data));\n"))),Object(o.b)(s.a,{value:"js",mdxType:"TabItem"},Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-js"}),"const { writeToString } = require('@fast-csv/format');\n\nconst rows = [\n    ['a', 'b'],\n    ['a1', 'b1'],\n    ['a2', 'b2'],\n];\nwriteToString(rows).then(data => console.log(data));\n"))),Object(o.b)(s.a,{value:"output",mdxType:"TabItem"},Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{}),"a,b\na1,b1\na2,b2\n")))),Object(o.b)("h2",{id:"writetobuffer"},"writeToBuffer"),Object(o.b)("p",null,Object(o.b)("inlineCode",{parentName:"p"},"writeToBuffer(arr[, options]): Promise<Buffer>")),Object(o.b)("p",null,"Formats the rows and returns a ",Object(o.b)("inlineCode",{parentName:"p"},"Promise")," that will resolve with the CSV content as a ",Object(o.b)("inlineCode",{parentName:"p"},"Buffer"),"."),Object(o.b)(b.a,{defaultValue:"ts",values:[{label:"TypeScript",value:"ts"},{label:"JavaScript",value:"js"},{label:"Output",value:"output"}],mdxType:"Tabs"},Object(o.b)(s.a,{value:"ts",mdxType:"TabItem"},Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-ts"}),"import { writeToBuffer } from '@fast-csv/format';\n\nconst rows = [\n    ['a', 'b'],\n    ['a1', 'b1'],\n    ['a2', 'b2'],\n];\nwriteToBuffer(rows).then(data => console.log(data.toString()));\n"))),Object(o.b)(s.a,{value:"js",mdxType:"TabItem"},Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-js"}),"const { writeToBuffer } = require('@fast-csv/format');\n\nconst rows = [\n    ['a', 'b'],\n    ['a1', 'b1'],\n    ['a2', 'b2'],\n];\nwriteToBuffer(rows).then(data => console.log(data.toString()));\n"))),Object(o.b)(s.a,{value:"output",mdxType:"TabItem"},Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{}),"a,b\na1,b1\na2,b2\n")))))}u.isMDXComponent=!0},136:function(e,t,a){var r;!function(){"use strict";var a={}.hasOwnProperty;function n(){for(var e=[],t=0;t<arguments.length;t++){var r=arguments[t];if(r){var o=typeof r;if("string"===o||"number"===o)e.push(r);else if(Array.isArray(r)&&r.length){var b=n.apply(null,r);b&&e.push(b)}else if("object"===o)for(var s in r)a.call(r,s)&&r[s]&&e.push(s)}}return e.join(" ")}e.exports?(n.default=n,e.exports=n):void 0===(r=function(){return n}.apply(t,[]))||(e.exports=r)}()},137:function(e,t,a){"use strict";a.d(t,"a",(function(){return p})),a.d(t,"b",(function(){return d}));var r=a(0),n=a.n(r);function o(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function b(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function s(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?b(Object(a),!0).forEach((function(t){o(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):b(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function c(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},o=Object.keys(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var l=n.a.createContext({}),i=function(e){var t=n.a.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):s({},t,{},e)),a},p=function(e){var t=i(e.components);return n.a.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.a.createElement(n.a.Fragment,{},t)}},m=Object(r.forwardRef)((function(e,t){var a=e.components,r=e.mdxType,o=e.originalType,b=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),p=i(a),m=r,d=p["".concat(b,".").concat(m)]||p[m]||u[m]||o;return a?n.a.createElement(d,s({ref:t},l,{components:a})):n.a.createElement(d,s({ref:t},l))}));function d(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=a.length,b=new Array(o);b[0]=m;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:r,b[1]=s;for(var l=2;l<o;l++)b[l]=a[l];return n.a.createElement.apply(null,b)}return n.a.createElement.apply(null,a)}m.displayName="MDXCreateElement"},141:function(e,t,a){"use strict";var r=a(0),n=a.n(r),o=a(136),b=a.n(o),s=a(93),c=a.n(s);const l=37,i=39;t.a=function(e){const{block:t,children:a,defaultValue:o,values:s}=e,[p,u]=Object(r.useState)(o),m=[];return n.a.createElement("div",null,n.a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:b()("tabs",{"tabs--block":t})},s.map(({value:e,label:t})=>n.a.createElement("li",{role:"tab",tabIndex:"0","aria-selected":p===e,className:b()("tab-item",c.a.tabItem,{"tab-item--active":p===e}),key:e,ref:e=>m.push(e),onKeyDown:e=>((e,t,a)=>{switch(a.keyCode){case i:((e,t)=>{const a=e.indexOf(t)+1;e[a]?e[a].focus():e[0].focus()})(e,t);break;case l:((e,t)=>{const a=e.indexOf(t)-1;e[a]?e[a].focus():e[e.length-1].focus()})(e,t)}})(m,e.target,e),onFocus:()=>u(e),onClick:()=>u(e)},t))),n.a.createElement("div",{role:"tabpanel",className:"margin-vert--md"},r.Children.toArray(a).filter(e=>e.props.value===p)[0]))}},142:function(e,t,a){"use strict";var r=a(0),n=a.n(r);t.a=function(e){return n.a.createElement("div",null,e.children)}}}]);