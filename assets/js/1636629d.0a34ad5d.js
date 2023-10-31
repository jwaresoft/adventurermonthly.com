"use strict";(self.webpackChunkadventurer_monthly=self.webpackChunkadventurer_monthly||[]).push([[358],{3905:(e,t,o)=>{o.d(t,{Zo:()=>d,kt:()=>h});var n=o(7294);function r(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function a(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,n)}return o}function l(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?a(Object(o),!0).forEach((function(t){r(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):a(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function i(e,t){if(null==e)return{};var o,n,r=function(e,t){if(null==e)return{};var o,n,r={},a=Object.keys(e);for(n=0;n<a.length;n++)o=a[n],t.indexOf(o)>=0||(r[o]=e[o]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)o=a[n],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(r[o]=e[o])}return r}var s=n.createContext({}),u=function(e){var t=n.useContext(s),o=t;return e&&(o="function"==typeof e?e(t):l(l({},t),e)),o},d=function(e){var t=u(e.components);return n.createElement(s.Provider,{value:t},e.children)},c="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var o=e.components,r=e.mdxType,a=e.originalType,s=e.parentName,d=i(e,["components","mdxType","originalType","parentName"]),c=u(o),m=r,h=c["".concat(s,".").concat(m)]||c[m]||p[m]||a;return o?n.createElement(h,l(l({ref:t},d),{},{components:o})):n.createElement(h,l({ref:t},d))}));function h(e,t){var o=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=o.length,l=new Array(a);l[0]=m;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i[c]="string"==typeof e?e:r,l[1]=i;for(var u=2;u<a;u++)l[u]=o[u];return n.createElement.apply(null,l)}return n.createElement.apply(null,o)}m.displayName="MDXCreateElement"},4626:(e,t,o)=>{o.d(t,{ZP:()=>i});var n=o(7462),r=(o(7294),o(3905));const a={toc:[]},l="wrapper";function i(e){let{components:t,...o}=e;return(0,r.kt)(l,(0,n.Z)({},a,o,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("admonition",{type:"note"},(0,r.kt)("p",{parentName:"admonition"},"If you try to run ",(0,r.kt)("inlineCode",{parentName:"p"},"docker compose up")," on  linux and get permission denied, there are two remedies."),(0,r.kt)("ol",{parentName:"admonition"},(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"run ",(0,r.kt)("inlineCode",{parentName:"p"},"sudo docker compose up")," - by default your user is not added to the docker group and cannot start / stop containers.  Running as root remedies this.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Add your user to the docker group.  This is easy and there are instructions in Docker's ",(0,r.kt)("a",{parentName:"p",href:"https://docs.docker.com/engine/install/linux-postinstall/#manage-docker-as-a-non-root-user"},"Linux post-installation steps for Docker Engine"),".")))))}i.isMDXComponent=!0},8423:(e,t,o)=>{o.d(t,{ZP:()=>O});var n=o(7462),r=o(7294),a=o(3905),l=o(6010),i=o(2466),s=o(6550),u=o(1980),d=o(7392),c=o(12);function p(e){return function(e){return r.Children.map(e,(e=>{if(!e||(0,r.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}(e).map((e=>{let{props:{value:t,label:o,attributes:n,default:r}}=e;return{value:t,label:o,attributes:n,default:r}}))}function m(e){const{values:t,children:o}=e;return(0,r.useMemo)((()=>{const e=t??p(o);return function(e){const t=(0,d.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,o])}function h(e){let{value:t,tabValues:o}=e;return o.some((e=>e.value===t))}function f(e){let{queryString:t=!1,groupId:o}=e;const n=(0,s.k6)(),a=function(e){let{queryString:t=!1,groupId:o}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!o)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return o??null}({queryString:t,groupId:o});return[(0,u._X)(a),(0,r.useCallback)((e=>{if(!a)return;const t=new URLSearchParams(n.location.search);t.set(a,e),n.replace({...n.location,search:t.toString()})}),[a,n])]}function k(e){const{defaultValue:t,queryString:o=!1,groupId:n}=e,a=m(e),[l,i]=(0,r.useState)((()=>function(e){let{defaultValue:t,tabValues:o}=e;if(0===o.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!h({value:t,tabValues:o}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${o.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const n=o.find((e=>e.default))??o[0];if(!n)throw new Error("Unexpected error: 0 tabValues");return n.value}({defaultValue:t,tabValues:a}))),[s,u]=f({queryString:o,groupId:n}),[d,p]=function(e){let{groupId:t}=e;const o=function(e){return e?`docusaurus.tab.${e}`:null}(t),[n,a]=(0,c.Nk)(o);return[n,(0,r.useCallback)((e=>{o&&a.set(e)}),[o,a])]}({groupId:n}),k=(()=>{const e=s??d;return h({value:e,tabValues:a})?e:null})();(0,r.useLayoutEffect)((()=>{k&&i(k)}),[k]);return{selectedValue:l,selectValue:(0,r.useCallback)((e=>{if(!h({value:e,tabValues:a}))throw new Error(`Can't select invalid tab value=${e}`);i(e),u(e),p(e)}),[u,p,a]),tabValues:a}}var y=o(2389);const g={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};function v(e){let{className:t,block:o,selectedValue:a,selectValue:s,tabValues:u}=e;const d=[],{blockElementScrollPositionUntilNextRender:c}=(0,i.o5)(),p=e=>{const t=e.currentTarget,o=d.indexOf(t),n=u[o].value;n!==a&&(c(t),s(n))},m=e=>{let t=null;switch(e.key){case"Enter":p(e);break;case"ArrowRight":{const o=d.indexOf(e.currentTarget)+1;t=d[o]??d[0];break}case"ArrowLeft":{const o=d.indexOf(e.currentTarget)-1;t=d[o]??d[d.length-1];break}}t?.focus()};return r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,l.Z)("tabs",{"tabs--block":o},t)},u.map((e=>{let{value:t,label:o,attributes:i}=e;return r.createElement("li",(0,n.Z)({role:"tab",tabIndex:a===t?0:-1,"aria-selected":a===t,key:t,ref:e=>d.push(e),onKeyDown:m,onClick:p},i,{className:(0,l.Z)("tabs__item",g.tabItem,i?.className,{"tabs__item--active":a===t})}),o??t)})))}function w(e){let{lazy:t,children:o,selectedValue:n}=e;const a=(Array.isArray(o)?o:[o]).filter(Boolean);if(t){const e=a.find((e=>e.props.value===n));return e?(0,r.cloneElement)(e,{className:"margin-top--md"}):null}return r.createElement("div",{className:"margin-top--md"},a.map(((e,t)=>(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==n}))))}function b(e){const t=k(e);return r.createElement("div",{className:(0,l.Z)("tabs-container",g.tabList)},r.createElement(v,(0,n.Z)({},e,t)),r.createElement(w,(0,n.Z)({},e,t)))}function N(e){const t=(0,y.Z)();return r.createElement(b,(0,n.Z)({key:String(t)},e))}const D={tabItem:"tabItem_Ymn6"};function T(e){let{children:t,hidden:o,className:n}=e;return r.createElement("div",{role:"tabpanel",className:(0,l.Z)(D.tabItem,n),hidden:o},t)}const C={toc:[]},I="wrapper";function O(e){let{components:t,...o}=e;return(0,a.kt)(I,(0,n.Z)({},C,o,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("admonition",{type:"info"},(0,a.kt)(N,{mdxType:"Tabs"},(0,a.kt)(T,{value:"Windows",label:(0,a.kt)("div",{style:{verticleAlign:"middle"}},(0,a.kt)("img",{src:"/svg/windows.svg",width:"24px"})," Windows"),mdxType:"TabItem"},(0,a.kt)("h2",{parentName:"admonition",id:"how-to-install-docker--docker-compose-on-windows"},"HOW TO: Install Docker & Docker Compose On Windows"),(0,a.kt)("p",{parentName:"admonition"},"  ",(0,a.kt)("a",{parentName:"p",href:"https://docs.docker.com/desktop/install/windows-install/"},"Install Docker Desktop On Windows")," -- This will install the docker desktop GUI and docker compose for Windows."),"  "),(0,a.kt)(T,{value:"MacOS",label:(0,a.kt)("div",{style:{verticleAlign:"middle"}},(0,a.kt)("img",{src:"/svg/apple.svg",width:"24px"})," Mac"),mdxType:"TabItem"},(0,a.kt)("h2",{parentName:"admonition",id:"how-to-install-docker--docker-compose-on-macos"},"HOW TO: Install Docker & Docker Compose On MacOS"),(0,a.kt)("p",{parentName:"admonition"},"  ",(0,a.kt)("a",{parentName:"p",href:"https://docs.docker.com/desktop/install/mac-install/"},"Install Docker Desktop On Mac OS")," -- This will install the docker desktop GUI and docker compose for Mac OS."),"  "),(0,a.kt)(T,{value:"Linux",label:(0,a.kt)("div",{style:{verticleAlign:"middle"}},(0,a.kt)("img",{src:"/svg/linux.svg",width:"24px"})," Linux"),default:!0,mdxType:"TabItem"},(0,a.kt)("h2",{parentName:"admonition",id:"how-to-install-docker--docker-compose-on-linux"},"HOW TO: Install Docker & Docker Compose On Linux"),(0,a.kt)("p",{parentName:"admonition"},"  ",(0,a.kt)("a",{parentName:"p",href:"https://docs.docker.com/desktop/install/linux-install/"},"Install ",(0,a.kt)("strong",{parentName:"a"},"Docker Desktop")," On Linux (Debian, Ubuntu, Fedora)")," -- This will install the docker desktop GUI and docker compose for Linux (Debian, Ubuntu, Fedora)."),(0,a.kt)("p",{parentName:"admonition"},"  ",(0,a.kt)("a",{parentName:"p",href:"https://docs.docker.com/engine/install/"},"Install ",(0,a.kt)("strong",{parentName:"a"},"Docker Engine")," on Linux")," -- This will install docker engine and compose on your machine.  This is the CLI only option for those who do not want / need the docker desktop client.  This includes instructions for the three distros listed above as well as many others."),"  "))))}O.isMDXComponent=!0},3549:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>m,contentTitle:()=>c,default:()=>y,frontMatter:()=>d,metadata:()=>p,toc:()=>h});var n=o(7462),r=(o(7294),o(3905));const a={toc:[]},l="wrapper";function i(e){let{components:t,...o}=e;return(0,r.kt)(l,(0,n.Z)({},a,o,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("admonition",{type:"caution"},(0,r.kt)("p",{parentName:"admonition"},(0,r.kt)("strong",{parentName:"p"},"USE AT YOUR OWN RISK!!")),(0,r.kt)("p",{parentName:"admonition"},"These guides are presented as is with no waranty, expectation of security, or anything like that.  These are simply guides for how someone who has contributed to this github projected has set something up.  They do not come with security audits, stats, dashboards, metrics, or ANY promises of being up to date or safe and secure to begin with.")))}i.isMDXComponent=!0;var s=o(8423),u=o(4626);const d={sidebar_position:1,title:"With Cloudflare & Docker Compose"},c="Foundry SelfHost With Cloudflare & Docker Compose",p={unversionedId:"self-host/cloudflare-docker-compose",id:"self-host/cloudflare-docker-compose",title:"With Cloudflare & Docker Compose",description:"An alternative to port forwarding utilizing cloudflare tunnels and a docker installation on a local machine.",source:"@site/docs/01-self-host/01-cloudflare-docker-compose.mdx",sourceDirName:"01-self-host",slug:"/self-host/cloudflare-docker-compose",permalink:"/docs/self-host/cloudflare-docker-compose",draft:!1,tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1,title:"With Cloudflare & Docker Compose"},sidebar:"guidesSidebar",previous:{title:"Self Hosting Guides",permalink:"/docs/category/self-hosting-guides"},next:{title:"Game System Automation",permalink:"/docs/category/game-system-automation"}},m={},h=[{value:"1. Setup a Cloudflare Account",id:"1-setup-a-cloudflare-account",level:2},{value:"2. Purchase or Transfer a Domain Name",id:"2-purchase-or-transfer-a-domain-name",level:2},{value:"2.a If You Already Purchased A Domain Elsewhere...",id:"2a-if-you-already-purchased-a-domain-elsewhere",level:3},{value:"2.b If You Would Like To Just Buy One At Cloudflare ( or not buy one at all)...",id:"2b-if-you-would-like-to-just-buy-one-at-cloudflare--or-not-buy-one-at-all",level:3},{value:"3. Setup a new Tunnel",id:"3-setup-a-new-tunnel",level:2},{value:"4. Docker Compose",id:"4-docker-compose",level:2},{value:"4.1 Install Docker &amp; Docker Compose",id:"41-install-docker--docker-compose",level:3},{value:"4.2 Clone / Download the Docker Config.",id:"42-clone--download-the-docker-config",level:3},{value:"4.3 Populate Settings Files.",id:"43-populate-settings-files",level:3},{value:".env",id:"env",level:4},{value:"./env.d/foundry",id:"envdfoundry",level:4},{value:"./env.d/foundry",id:"envdfoundry-1",level:4},{value:"4.4 (Optional) Copy Foundry Data",id:"44-optional-copy-foundry-data",level:3},{value:"4.5 Run it.",id:"45-run-it",level:3},{value:"Troubleshooting",id:"troubleshooting",level:2},{value:"Permission Denied Running `docker compose up&#39;",id:"permission-denied-running-docker-compose-up",level:3}],f={toc:h},k="wrapper";function y(e){let{components:t,...o}=e;return(0,r.kt)(k,(0,n.Z)({},f,o,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"foundry-selfhost-with-cloudflare--docker-compose"},"Foundry SelfHost With Cloudflare & Docker Compose"),(0,r.kt)("img",{src:"/img/guides-img/flying-whales.webp",className:"guide-img-600"}),(0,r.kt)("p",null,"An alternative to port forwarding utilizing cloudflare tunnels and a docker installation on a local machine."),(0,r.kt)(i,{mdxType:"SelfHostDisclaimer"}),(0,r.kt)("h2",{id:"1-setup-a-cloudflare-account"},"1. Setup a Cloudflare Account"),(0,r.kt)("p",null,"If you don't already have one, ",(0,r.kt)("a",{parentName:"p",href:"https://dash.cloudflare.com/sign-up"},"sign up")," for one."),(0,r.kt)("h2",{id:"2-purchase-or-transfer-a-domain-name"},"2. Purchase or Transfer a Domain Name"),(0,r.kt)("p",null,"This is the domain (or a subdomain of this domain) where your instance will be available online.  You only need one domain if you plan to run multiple foundry instances as you will be able to assign subdomains when setting up tunnel(s) in a later step.  "),(0,r.kt)("h3",{id:"2a-if-you-already-purchased-a-domain-elsewhere"},"2.a If You Already Purchased A Domain Elsewhere..."),(0,r.kt)("p",null,"There are a few steps to setup your domain with cloudflare if you purchased it elsewhere."),(0,r.kt)("p",null,"Before you can set up your tunnel, you will need to ",(0,r.kt)("a",{parentName:"p",href:"https://developers.cloudflare.com/dns/zone-setups/full-setup/setup/"},"add a site and configure cloudflare domain servers"),"."),(0,r.kt)("p",null,"These are the prereqs you will see in the ",(0,r.kt)("a",{parentName:"p",href:"https://developers.cloudflare.com/cloudflare-one/connections/connect-networks/install-and-setup/tunnel-guide/local/#prerequisites"},"tunnel docs"),"."),(0,r.kt)("h3",{id:"2b-if-you-would-like-to-just-buy-one-at-cloudflare--or-not-buy-one-at-all"},"2.b If You Would Like To Just Buy One At Cloudflare ( or not buy one at all)..."),(0,r.kt)("p",null,"You can register a new domain name with ",(0,r.kt)("a",{parentName:"p",href:"https://developers.cloudflare.com/registrar/get-started/register-domain/"},"Cloudflare Registrar"),"."),(0,r.kt)("p",null,"You will want to ",(0,r.kt)("a",{parentName:"p",href:"https://developers.cloudflare.com/fundamentals/setup/account-setup/add-site/"},"add a site")," in either case as I believe it is a required step for the tunnel.  I cannot confirm if registering a domain through Cloudflare sets up a site or not as I already had a domain and thus did 2.a."),(0,r.kt)("h2",{id:"3-setup-a-new-tunnel"},"3. Setup a new Tunnel"),(0,r.kt)("p",null,"This can be done either through ",(0,r.kt)("strong",{parentName:"p"},"Cloudflare's WebUI")," or for those prefering the command line, the ",(0,r.kt)("strong",{parentName:"p"},"Cloudflare CLI"),".  Up to date instructions for both can be found in ",(0,r.kt)("a",{parentName:"p",href:"https://developers.cloudflare.com/cloudflare-one/connections/connect-networks/get-started/"},"Cloudflare's create your first tunnel docs"),"."),(0,r.kt)("p",null,"If you are uncomfortable with the command line I would recommend ",(0,r.kt)("a",{parentName:"p",href:"https://developers.cloudflare.com/cloudflare-one/connections/connect-networks/get-started/create-remote-tunnel/"},"Setting up a tunnel through the web dashboard")," as it is point and click.  I have provided a few notes below to help clarify the cloudflare instructions for those new to all of this."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"you can hold off on steps ",(0,r.kt)("strong",{parentName:"li"},"1.5")," and ",(0,r.kt)("strong",{parentName:"li"},"1.6"),"  until after you have everything set up."),(0,r.kt)("li",{parentName:"ul"},"you ",(0,r.kt)("em",{parentName:"li"},"will")," ideally want to keep your tunnel token from these steps, and keep it somewhere ",(0,r.kt)("strong",{parentName:"li"},"SAFE")," like a password manager.  If you do not, you can always log in and access it later by editing the existing tunnel."),(0,r.kt)("li",{parentName:"ul"},"for the hostname of this (and any tunnel you set up for use with the docker compose setup below) you can use ",(0,r.kt)("inlineCode",{parentName:"li"},"foundry:30000"),".  This is explained more in the Docker Compose steps.")),(0,r.kt)("h2",{id:"4-docker-compose"},"4. Docker Compose"),(0,r.kt)("p",null,"You will want to install docker, and docker compose (now comes bundled with docker) in order to run foundry with the cloudflare daemon.  If you are new to docker and docker compose, there are some (hopefully) helpful links and snippets in ",(0,r.kt)("a",{parentName:"p",href:"/docs/general/docker"},"the Docker General Info / Links section"),"."),(0,r.kt)("h3",{id:"41-install-docker--docker-compose"},"4.1 Install Docker & Docker Compose"),(0,r.kt)("p",null,"Install docker for your desktop environment using the steps below."),(0,r.kt)(s.ZP,{mdxType:"InstallDockerTabs"}),(0,r.kt)("h3",{id:"42-clone--download-the-docker-config"},"4.2 Clone / Download the Docker Config."),(0,r.kt)("p",null,"The ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/adventurermonthly/foundry-cloudflared"},"foundry-cloudflared repo")," contains ",(0,r.kt)("inlineCode",{parentName:"p"},"the docker-compose.yml")," necessary to run this.  You can either clone it or if you are unfamiliar with git, download the repo as a zip by clicking the ",(0,r.kt)("strong",{parentName:"p"},"Code")," dropdown button."),(0,r.kt)("h3",{id:"43-populate-settings-files"},"4.3 Populate Settings Files."),(0,r.kt)("p",null,"you will not need to change the docker-compose.yml file itself, unless you want to override the default volume.  You WILL need to create a directory and 3 files."),(0,r.kt)("h4",{id:"env"},".env"),(0,r.kt)("p",null,"Create a file called ",(0,r.kt)("inlineCode",{parentName:"p"},".env")," in the directory with the ",(0,r.kt)("inlineCode",{parentName:"p"},"docker-compose.yml")," file.  Use your favorite / any text editor to add the following to it:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"VERSION=\n")),(0,r.kt)("p",null,"where the value is the version number you would like to pin to.  For example, for version 11.307, you would create"),(0,r.kt)("p",null,"EXAMPLE"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"VERSION=11.307\n")),(0,r.kt)("p",null,"This will keep the docker container at the version specified.  To update in the future, you simply need to stop the docker compose setup, update this file, and start it again.  It will update on boot."),(0,r.kt)("h4",{id:"envdfoundry"},"./env.d/foundry"),(0,r.kt)("p",null,"Our next two files need to be put in a directory called ",(0,r.kt)("inlineCode",{parentName:"p"},"env.d")," so you will want to create that at the project root now.  Then create a file in the ",(0,r.kt)("inlineCode",{parentName:"p"},"env.d")," directory called ",(0,r.kt)("inlineCode",{parentName:"p"},"foundry")," and populate it with the following:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"FOUNDRY_PASSWORD=           \nFOUNDRY_USERNAME=\nFOUNDRY_ADMIN_KEY=\nCONTAINER_PRESERVE_CONFIG=true\n")),(0,r.kt)("p",null,"where"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"FOUNDRY_PASSWORD - your password for ",(0,r.kt)("a",{parentName:"li",href:"https://foundryvtt.com/"},"https://foundryvtt.com/"),"."),(0,r.kt)("li",{parentName:"ul"},"FOUNDRY_USERNAME - your username for ",(0,r.kt)("a",{parentName:"li",href:"https://foundryvtt.com"},"https://foundryvtt.com")),(0,r.kt)("li",{parentName:"ul"},"FOUNDRY_ADMIN_KEY - set your admin password here for the server.  You can reset it here in the furture as well.")),(0,r.kt)("h4",{id:"envdfoundry-1"},"./env.d/foundry"),(0,r.kt)("p",null,"Last create another file in ",(0,r.kt)("inlineCode",{parentName:"p"},"env.d")," called ",(0,r.kt)("inlineCode",{parentName:"p"},"cloudflared")," and add the following:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"TUNNEL_TOKEN=\n")),(0,r.kt)("p",null,"where"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"TUNNEL_TOKEN - the token for your cloudflare tunnel.  If you didn't save it somewhere safe earlier you can get it by logging into cloudflare and clicking edit for the tunnel.  You don't need to edit anything, just grab the token value from the code snippet.")),(0,r.kt)("h3",{id:"44-optional-copy-foundry-data"},"4.4 (Optional) Copy Foundry Data"),(0,r.kt)("p",null,"If you are just going to start fresh you can skip this step.  If you have a bunch of foudry data locally which you would like to copy over, you can do the following:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"create a folder ",(0,r.kt)("inlineCode",{parentName:"li"},"foundry-data")," at the root of the project.  If you skipped this step and ran the setup, you will already have this directory."),(0,r.kt)("li",{parentName:"ul"},"Copy your ",(0,r.kt)("inlineCode",{parentName:"li"},"Data")," and/or ",(0,r.kt)("inlineCode",{parentName:"li"},"Config")," directories from your local foundry directory into ",(0,r.kt)("inlineCode",{parentName:"li"},"foundry-data"),".  You should be good to go."),(0,r.kt)("li",{parentName:"ul"},"If you would like to backup your server, you can just create a copy of the ",(0,r.kt)("inlineCode",{parentName:"li"},"foundry-data")," directory at any time and keep it somewhere safe.")),(0,r.kt)("h3",{id:"45-run-it"},"4.5 Run it."),(0,r.kt)("p",null,"To run it, from the root of the directory run "),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"docker compose up\n")),(0,r.kt)("p",null,"in the command line.  I am not sure how to run this from docker desktop directory as I set it up using docker-engine on linux.  I believe you will need to have docker desktop running to have this running.  Google instructions for this and reach out and let us know how it went!"),(0,r.kt)("p",null,"to shutdown the servers, run "),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"docker compose down\n")),(0,r.kt)(i,{mdxType:"SelfHostDisclaimer"}),(0,r.kt)("h2",{id:"troubleshooting"},"Troubleshooting"),(0,r.kt)("h3",{id:"permission-denied-running-docker-compose-up"},"Permission Denied Running `docker compose up'"),(0,r.kt)("p",null,"This is expected as by default only root can run docker commands.  This note should get you around it."),(0,r.kt)(u.ZP,{mdxType:"DockerPermissions"}))}y.isMDXComponent=!0}}]);