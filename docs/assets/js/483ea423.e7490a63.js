"use strict";(self.webpackChunketlnetdocumentation=self.webpackChunketlnetdocumentation||[]).push([[4829],{3905:function(t,e,n){n.d(e,{Zo:function(){return d},kt:function(){return g}});var a=n(67294);function r(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function l(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,a)}return n}function i(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?l(Object(n),!0).forEach((function(e){r(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function o(t,e){if(null==t)return{};var n,a,r=function(t,e){if(null==t)return{};var n,a,r={},l=Object.keys(t);for(a=0;a<l.length;a++)n=l[a],e.indexOf(n)>=0||(r[n]=t[n]);return r}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(a=0;a<l.length;a++)n=l[a],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(r[n]=t[n])}return r}var p=a.createContext({}),u=function(t){var e=a.useContext(p),n=e;return t&&(n="function"==typeof t?t(e):i(i({},e),t)),n},d=function(t){var e=u(t.components);return a.createElement(p.Provider,{value:e},t.children)},s={inlineCode:"code",wrapper:function(t){var e=t.children;return a.createElement(a.Fragment,{},e)}},m=a.forwardRef((function(t,e){var n=t.components,r=t.mdxType,l=t.originalType,p=t.parentName,d=o(t,["components","mdxType","originalType","parentName"]),m=u(n),g=r,c=m["".concat(p,".").concat(g)]||m[g]||s[g]||l;return n?a.createElement(c,i(i({ref:e},d),{},{components:n})):a.createElement(c,i({ref:e},d))}));function g(t,e){var n=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var l=n.length,i=new Array(l);i[0]=m;var o={};for(var p in e)hasOwnProperty.call(e,p)&&(o[p]=e[p]);o.originalType=t,o.mdxType="string"==typeof t?t:r,i[1]=o;for(var u=2;u<l;u++)i[u]=n[u];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},98969:function(t,e,n){n.r(e),n.d(e,{assets:function(){return d},contentTitle:function(){return p},default:function(){return g},frontMatter:function(){return o},metadata:function(){return u},toc:function(){return s}});var a=n(87462),r=n(63366),l=(n(67294),n(3905)),i=["components"],o={sidebar_position:12},p="Reduce/aggregate and distinct",u={unversionedId:"recipes/reduceAndAggregate",id:"recipes/reduceAndAggregate",title:"Reduce/aggregate and distinct",description:"Distinct",source:"@site/docs/recipes/12_reduceAndAggregate.md",sourceDirName:"recipes",slug:"/recipes/reduceAndAggregate",permalink:"/Etl.Net/docs/recipes/reduceAndAggregate",editUrl:"https://github.com/paillave/Etl.Net/blob/develop/documentation/docs/recipes/12_reduceAndAggregate.md",tags:[],version:"current",sidebarPosition:12,frontMatter:{sidebar_position:12},sidebar:"tutorialSidebar",previous:{title:"Inject values in a process",permalink:"/Etl.Net/docs/recipes/useExternalData"},next:{title:"Change/Create in stream data",permalink:"/Etl.Net/docs/recipes/changeData"}},d={},s=[{value:"Distinct",id:"distinct",level:2},{value:"Group By",id:"group-by",level:2},{value:"Aggregate",id:"aggregate",level:2},{value:"Pivot",id:"pivot",level:2},{value:"ToList",id:"tolist",level:2}],m={toc:s};function g(t){var e=t.components,n=(0,r.Z)(t,i);return(0,l.kt)("wrapper",(0,a.Z)({},m,n,{components:e,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"reduceaggregate-and-distinct"},"Reduce/aggregate and distinct"),(0,l.kt)("h2",{id:"distinct"},"Distinct"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"Distinct")," Permits to remove duplicates based on a given key."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-cs",metastring:"{9}","{9}":!0},'contextStream\n    .CrossApply("create values from enumeration", ctx => Enumerable.Range(1, 100)\n        .Select(i => new\n        {\n            OutputId = i % 11,\n            Label = $"{ctx}{i % 11}",\n            Description = (i % 5 == 0) ? null : $"Description {i}"\n        }))\n    .Distinct("Distinct ", i => i.OutputId)\n    .Do("print file name to console", i => Console.WriteLine(i));\n')),(0,l.kt)("p",null,"Input stream:"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"OutputId"),(0,l.kt)("th",{parentName:"tr",align:null},"Label"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"1"),(0,l.kt)("td",{parentName:"tr",align:null},"Label 1"),(0,l.kt)("td",{parentName:"tr",align:null},"Description 1")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"2"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"Description 2")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"3"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"Description 3")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"4"),(0,l.kt)("td",{parentName:"tr",align:null},"Label 4"),(0,l.kt)("td",{parentName:"tr",align:null},"Description 4")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"5"),(0,l.kt)("td",{parentName:"tr",align:null},"Label 5"),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"6"),(0,l.kt)("td",{parentName:"tr",align:null},"Label 6"),(0,l.kt)("td",{parentName:"tr",align:null},"Description 6")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"0"),(0,l.kt)("td",{parentName:"tr",align:null},"Label 0"),(0,l.kt)("td",{parentName:"tr",align:null},"Description 0")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"1"),(0,l.kt)("td",{parentName:"tr",align:null},"Label 1"),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"2"),(0,l.kt)("td",{parentName:"tr",align:null},"Label 2"),(0,l.kt)("td",{parentName:"tr",align:null},"Description 2")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"3"),(0,l.kt)("td",{parentName:"tr",align:null},"Label 3"),(0,l.kt)("td",{parentName:"tr",align:null},"Description 3")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"4"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"Description 4")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"5"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"Description 5")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"6"),(0,l.kt)("td",{parentName:"tr",align:null},"Label 6"),(0,l.kt)("td",{parentName:"tr",align:null},"Description 6")))),(0,l.kt)("p",null,"The regular ",(0,l.kt)("inlineCode",{parentName:"p"},"Distinct")," provides this result:"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"OutputId"),(0,l.kt)("th",{parentName:"tr",align:null},"Label"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"1"),(0,l.kt)("td",{parentName:"tr",align:null},"Label 1"),(0,l.kt)("td",{parentName:"tr",align:null},"Description 1")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"2"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"Description 2")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"3"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"Description 3")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"4"),(0,l.kt)("td",{parentName:"tr",align:null},"Label 4"),(0,l.kt)("td",{parentName:"tr",align:null},"Description 4")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"5"),(0,l.kt)("td",{parentName:"tr",align:null},"Label 5"),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"6"),(0,l.kt)("td",{parentName:"tr",align:null},"Label 6"),(0,l.kt)("td",{parentName:"tr",align:null},"Description 6")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"0"),(0,l.kt)("td",{parentName:"tr",align:null},"Label 0"),(0,l.kt)("td",{parentName:"tr",align:null},"Description 0")))),(0,l.kt)("p",null,"Sometimes, from bad input files can fill a value for a column but not always. It is a usual request in such a context to take in consideration only not null value instead of the first found record as is. Here the output stream we would like to reach:"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"OutputId"),(0,l.kt)("th",{parentName:"tr",align:null},"Label"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"1"),(0,l.kt)("td",{parentName:"tr",align:null},"Label 1"),(0,l.kt)("td",{parentName:"tr",align:null},"Description 1")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"2"),(0,l.kt)("td",{parentName:"tr",align:null},"Label 2"),(0,l.kt)("td",{parentName:"tr",align:null},"Description 2")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"3"),(0,l.kt)("td",{parentName:"tr",align:null},"Label 3"),(0,l.kt)("td",{parentName:"tr",align:null},"Description 3")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"4"),(0,l.kt)("td",{parentName:"tr",align:null},"Label 4"),(0,l.kt)("td",{parentName:"tr",align:null},"Description 4")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"5"),(0,l.kt)("td",{parentName:"tr",align:null},"Label 5"),(0,l.kt)("td",{parentName:"tr",align:null},"Description 5")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"6"),(0,l.kt)("td",{parentName:"tr",align:null},"Label 6"),(0,l.kt)("td",{parentName:"tr",align:null},"Description 6")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"0"),(0,l.kt)("td",{parentName:"tr",align:null},"Label 0"),(0,l.kt)("td",{parentName:"tr",align:null},"Description 0")))),(0,l.kt)("p",null,"Obtaining this result is made by setting ",(0,l.kt)("inlineCode",{parentName:"p"},"true")," the second optional parameter of ",(0,l.kt)("inlineCode",{parentName:"p"},"Distinct")," operator."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-cs",metastring:"{9}","{9}":!0},'contextStream\n    .CrossApply("create values from enumeration", ctx => Enumerable.Range(1, 100)\n        .Select(i => new\n        {\n            OutputId = i % 11,\n            Label = $"{ctx}{i % 11}",\n            Description = (i % 5 == 0) ? null : $"Description {i}"\n        }))\n    .Distinct("Distinct ", i => i.OutputId, true)\n    .Do("print file name to console", i => Console.WriteLine(i));\n')),(0,l.kt)("h2",{id:"group-by"},"Group By"),(0,l.kt)("p",null,"In the ",(0,l.kt)("a",{parentName:"p",href:"/docs/recipes/createFiles"},"create several files recipe")," ",(0,l.kt)("inlineCode",{parentName:"p"},"GroupBy")," was used to group payloads in a sub process per key. But the ",(0,l.kt)("inlineCode",{parentName:"p"},"GroupBy")," operator can be used to group payload in a list per key."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-cs",metastring:"{9}","{9}":!0},'contextStream\n    .CrossApply("create values from enumeration", ctx => Enumerable.Range(1, 100)\n        .Select(i => new\n        {\n            OutputId = i % 11,\n            Label = $"{ctx}{i}",\n            Description = (i % 5 == 0) ? null : $"Description {i}"\n        }))\n    .GroupBy("group by OutputId", i => i.OutputId)\n    .Do("print file name to console", i => Console.WriteLine($"{i.Key}: {i.Aggregation.Count} items"));\n')),(0,l.kt)("h2",{id:"aggregate"},"Aggregate"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"GroupBy")," simply groups payloads in lists or in sub processes. ",(0,l.kt)("inlineCode",{parentName:"p"},"Aggregate")," permits to make any free action per group of payload. It can make more things than ",(0,l.kt)("inlineCode",{parentName:"p"},"GroupBy")," but it is lest straight forward to use."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-cs",metastring:"{10-17}","{10-17}":!0},'contextStream\n    .CrossApply("create values from enumeration", ctx => Enumerable.Range(1, 100)\n        .Select(i => new\n        {\n            Id = i,\n            OutputId = i % 11,\n            Label = $"{ctx}{i}",\n            Description = (i % 5 == 0) ? null : $"Description {i}"\n        }))\n    .Aggregate("aggregate by OutputId",\n        i => i.OutputId,\n        i => new { Key = i.OutputId, Ids = new List<int>() },\n        (a, v) =>\n        {\n            a.Ids.Add(v.Id);\n            return a;\n        })\n    .Do("print file name to console", i => Console.WriteLine($"{i.Key}: {i.Aggregation.Ids.Count} items"));\n')),(0,l.kt)("h2",{id:"pivot"},"Pivot"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"Pivot")," makes several aggregation of values on a single output occurrence. Like the ",(0,l.kt)("inlineCode",{parentName:"p"},"PIVOT")," of SQL, or the pivot table of excel."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-cs",metastring:"{10-16}","{10-16}":!0},'contextStream\n    .CrossApply("create values from enumeration", ctx => Enumerable.Range(1, 100)\n        .Select(i => new\n        {\n            Id = i,\n            OutputId = i % 3,\n            Label = $"{ctx}{i}",\n            Description = (i % 5 == 0) ? null : $"Description {i}"\n        }))\n    .Pivot("pivot values", i => i.OutputId, i => new\n    {\n        Count = AggregationOperators.Count(),\n        Count0 = AggregationOperators.Count().For(i.OutputId == 0),\n        Count1 = AggregationOperators.Count().For(i.OutputId == 1),\n        Count2 = AggregationOperators.Count().For(i.OutputId == 2)\n    })\n    .Do("print file name to console", i => Console.WriteLine($"{i.Key}: Count={i.Aggregation.Count}, Count0={i.Aggregation.Count0}, Count1={i.Aggregation.Count1}, Count2={i.Aggregation.Count2}"));\n')),(0,l.kt)("h2",{id:"tolist"},"ToList"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"ToList")," aggregates all the payload of every events in one payload that is the list of every payload."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-cs",metastring:"{3}","{3}":!0},'contextStream\n    .CrossApply("create values from enumeration", ctx => Enumerable.Range(1, 100))\n    .ToList("aggregate everything")\n    .Do("print everything in one go", i => Console.WriteLine(string.Join("-", i)));\n')))}g.isMDXComponent=!0}}]);