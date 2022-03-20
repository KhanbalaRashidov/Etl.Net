"use strict";(self.webpackChunketlnetdocumentation=self.webpackChunketlnetdocumentation||[]).push([[8535],{3905:function(e,n,t){t.d(n,{Zo:function(){return u},kt:function(){return d}});var r=t(67294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function s(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?s(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):s(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function o(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},s=Object.keys(e);for(r=0;r<s.length;r++)t=s[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(r=0;r<s.length;r++)t=s[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var c=r.createContext({}),l=function(e){var n=r.useContext(c),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},u=function(e){var n=l(e.components);return r.createElement(c.Provider,{value:n},e.children)},p={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},m=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,s=e.originalType,c=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),m=l(t),d=a,g=m["".concat(c,".").concat(d)]||m[d]||p[d]||s;return t?r.createElement(g,i(i({ref:n},u),{},{components:t})):r.createElement(g,i({ref:n},u))}));function d(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var s=t.length,i=new Array(s);i[0]=m;var o={};for(var c in n)hasOwnProperty.call(n,c)&&(o[c]=n[c]);o.originalType=e,o.mdxType="string"==typeof e?e:a,i[1]=o;for(var l=2;l<s;l++)i[l]=t[l];return r.createElement.apply(null,i)}return r.createElement.apply(null,t)}m.displayName="MDXCreateElement"},98895:function(e,n,t){t.r(n),t.d(n,{assets:function(){return u},contentTitle:function(){return c},default:function(){return d},frontMatter:function(){return o},metadata:function(){return l},toc:function(){return p}});var r=t(87462),a=t(63366),s=(t(67294),t(3905)),i=["components"],o={sidebar_position:11},c="Inject values in a process",l={unversionedId:"recipes/useExternalData",id:"recipes/useExternalData",title:"Inject values in a process",description:"From trigger stream",source:"@site/docs/recipes/11_useExternalData.md",sourceDirName:"recipes",slug:"/recipes/useExternalData",permalink:"/Etl.Net/docs/recipes/useExternalData",editUrl:"https://github.com/paillave/Etl.Net/blob/develop/documentation/docs/recipes/11_useExternalData.md",tags:[],version:"current",sidebarPosition:11,frontMatter:{sidebar_position:11},sidebar:"tutorialSidebar",previous:{title:"Combine streams",permalink:"/Etl.Net/docs/recipes/linkStreams"},next:{title:"Reduce/aggregate and distinct",permalink:"/Etl.Net/docs/recipes/reduceAndAggregate"}},u={},p=[{value:"From trigger stream",id:"from-trigger-stream",level:2},{value:"From dependency injection",id:"from-dependency-injection",level:2}],m={toc:p};function d(e){var n=e.components,t=(0,a.Z)(e,i);return(0,s.kt)("wrapper",(0,r.Z)({},m,t,{components:n,mdxType:"MDXLayout"}),(0,s.kt)("h1",{id:"inject-values-in-a-process"},"Inject values in a process"),(0,s.kt)("h2",{id:"from-trigger-stream"},"From trigger stream"),(0,s.kt)("p",null,"The most natural and straight give a value to a process execution is to pass it as a parameter."),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-cs"},'using System;\nusing System.Threading.Tasks;\nusing Paillave.Etl.Core;\n\nnamespace Demo\n{\n    class ProcessArguments\n    {\n        public string AStringValue { get; set; }\n        public int AnIntValue { get; set; }\n    }\n    class Program3\n    {\n        static async Task Main3(string[] args)\n        {\n            var processRunner = StreamProcessRunner.Create<ProcessArguments>(DefineProcess);\n            var res = await processRunner.ExecuteAsync(new ProcessArguments\n            {\n                AStringValue = args[0],\n                AnIntValue = 564\n            });\n        }\n        private static void DefineProcess(ISingleStream<ProcessArguments> contextStream)\n        {\n            contextStream.Do("show process params on console", i => Console.WriteLine($"{i.AStringValue}: {i.AnIntValue}"));\n        }\n    }\n}\n')),(0,s.kt)("h2",{id:"from-dependency-injection"},"From dependency injection"),(0,s.kt)("p",null,"It can happen that some values to be recovered later without necessarily dealing with the contextStream.\nThis is where dependency injection can be used:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-cs"},'using System.Threading.Tasks;\nusing Paillave.Etl.Core;\n\nnamespace Demo\n{\n    class SomeExternalValue\n    {\n        public string AStringValue { get; set; }\n        public int AnIntValue { get; set; }\n    }\n    class Program\n    {\n        static async Task Main(string[] args)\n        {\n            var processRunner = StreamProcessRunner.Create<string>(DefineProcess);\n            var executionOptions = new ExecutionOptions<string>\n            {\n                Resolver = new SimpleDependencyResolver()\n                    .Register(new SomeExternalValue\n                    {\n                        AStringValue = "injected string",\n                        AnIntValue = 658\n                    })\n            };\n            var res = await processRunner.ExecuteAsync("transmitted parameter", executionOptions);\n        }\n        private static void DefineProcess(ISingleStream<string> contextStream)\n        {\n            contextStream\n                .ResolveAndSelect("get some values", o => o\n                    .Resolve<SomeExternalValue>()\n                    .Select((context, injected) => $"{context}-{injected.AStringValue}:{injected.AnIntValue}"));\n        }\n    }\n}\n')),(0,s.kt)("p",null,"Within a custom operator, accessing the dependency injection resolver is done this way: ",(0,s.kt)("inlineCode",{parentName:"p"},"base.ExecutionContext.DependencyResolver.Resolve<MyTypeToResolve>()")),(0,s.kt)("p",null,"In a value provider it is directly given as a parameter in the ",(0,s.kt)("inlineCode",{parentName:"p"},"PushValues")," method."))}d.isMDXComponent=!0}}]);