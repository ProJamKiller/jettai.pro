//	HYPE.documents["Jettai.pro"]

(function(){(function m(){function k(a,b,c,d){var e=!1;null==window[a]&&(null==window[b]?(window[b]=[],window[b].push(m),a=document.getElementsByTagName("head")[0],b=document.createElement("script"),e=l,false==!0&&(e=""),b.type="text/javascript",""!=d&&(b.integrity=d,b.setAttribute("crossorigin","anonymous")),b.src=e+"/"+c,a.appendChild(b)):window[b].push(m),e=!0);return e}var l="Jettai.pro.hyperesources",f="Jettai.pro",g="jettai_hype_container";if(false==
!1)try{for(var c=document.getElementsByTagName("script"),a=0;a<c.length;a++){var d=c[a].src,b=null!=d?d.indexOf("/jettai_hype_generated_script.js"):-1;if(-1!=b){l=d.substr(0,b);break}}}catch(p){}c=null==navigator.userAgentData&&navigator.userAgent.match(/MSIE (\d+\.\d+)/);c=parseFloat(c&&c[1])||null;d=!0==(null!=window.HYPE_762F||null!=window.HYPE_dtl_762F)||false==!0||null!=c&&10>c;a=!0==d?"HYPE-762.full.min.js":"HYPE-762.thin.min.js";c=!0==d?"F":"T";
d=d?"":"";if(false==!1&&(a=k("HYPE_762"+c,"HYPE_dtl_762"+c,a,d),true==!0&&(a=a||k("HYPE_w_762","HYPE_wdtl_762","HYPE-762.waypoints.min.js","")),false==!0&&(a=a||k("Matter","HYPE_pdtl_762","HYPE-762.physics.min.js","")),a))return;d=window.HYPE.documents;if(null!=d[f]){b=1;a=f;do f=""+a+"-"+b++;while(null!=d[f]);for(var e=
document.getElementsByTagName("div"),b=!1,a=0;a<e.length;a++)if(e[a].id==g&&null==e[a].getAttribute("HYP_dn")){var b=1,h=g;do g=""+h+"-"+b++;while(null!=document.getElementById(g));e[a].id=g;b=!0;break}if(!1==b)return}b=[];b=[{name:"parallax",source:"function(hypeDocument, element, event) {\n$(window).scroll(function(e){\n  parallax();\n});\nfunction parallax(){\n  var scrolled = $(window).scrollTop();\n  $('.parallax').css('margin-top',-(scrolled*0.25)+'px');     \n}\t\n\t\n}",identifier:"775"}];e={};h={};for(a=0;a<b.length;a++)try{h[b[a].identifier]=b[a].name,e[b[a].name]=eval("(function(){return "+b[a].source+"})();")}catch(n){window.console&&window.console.log(n),e[b[a].name]=function(){}}c=new window["HYPE_762"+c](f,g,{"-2":{n:"blank.gif"},"18":{p:1,n:"Adobe%20Express%202024-05-11%2022.02.27.png",g:"46",o:true,t:"@1x"},"10":{p:1,n:"Adobe%20Express%202024-05-11%2022.06.49.png",g:"54",o:true,t:"@1x"},"19":{p:1,n:"Adobe%20Express%202024-05-11%2022.02.27_2x.png",g:"46",o:true,t:"@2x"},"11":{p:1,n:"Adobe%20Express%202024-05-11%2022.06.49_2x.png",g:"54",o:true,t:"@2x"},"0":{n:"chicagoflf.eot"},"12":{p:1,n:"Adobe%20Express%202024-05-11%2022.05.20.png",g:"52",o:true,t:"@1x"},"1":{p:1,n:"chicagoflf.svg",g:"776",t:"image/svg+xml"},"20":{p:1,n:"Adobe%20Express%202024-05-11%2022.01.05.png",g:"44",o:true,t:"@1x"},"2":{n:"chicagoflf.ttf"},"13":{p:1,n:"Adobe%20Express%202024-05-11%2022.05.20_2x.png",g:"52",o:true,t:"@2x"},"3":{n:"chicagoflf.woff"},"21":{p:1,n:"Adobe%20Express%202024-05-11%2022.01.05_2x.png",g:"44",o:true,t:"@2x"},"14":{p:1,n:"Adobe%20Express%202024-05-11%2022.04.20.png",g:"50",o:true,t:"@1x"},"4":{n:"chicagoflf.woff2"},"5":{p:1,n:"A81974E3-7C83-4C89-A335-409EE2D4743E.png",g:"296",o:true,t:"@1x"},"15":{p:1,n:"Adobe%20Express%202024-05-11%2022.04.20_2x.png",g:"50",o:true,t:"@2x"},"22":{p:1,n:"projamkiller_Imagine_the_imagination_in_a_dreamscape_of_block_c_d593bf90-4323-4be7-ba74-ef9c96b28409.jpg",g:"774",o:true,t:"@1x"},"6":{p:1,n:"A81974E3-7C83-4C89-A335-409EE2D4743E_2x.png",g:"296",o:true,t:"@2x"},"23":{p:1,n:"6BD36D1F-CB1C-47A5-831F-1DCCD86F477F-1.png",g:"101",o:true,t:"@1x"},"16":{p:1,n:"Adobe%20Express%202024-05-11%2022.03.18.png",g:"48",o:true,t:"@1x"},"7":{p:1,n:"6BD36D1F-CB1C-47A5-831F-1DCCD86F477F.png",g:"459",o:true,t:"@1x"},"-1":{n:"PIE.htc"},"8":{p:1,n:"6BD36D1F-CB1C-47A5-831F-1DCCD86F477F_2x.png",g:"459",o:true,t:"@2x"},"24":{p:1,n:"6BD36D1F-CB1C-47A5-831F-1DCCD86F477F-1_2x.png",g:"101",o:true,t:"@2x"},"17":{p:1,n:"Adobe%20Express%202024-05-11%2022.03.18_2x.png",g:"48",o:true,t:"@2x"},"9":{p:1,n:"projamkiller_a_wicked_cool_slide_that_says_Where_did_you_get__4f1a9d38-0aea-41ea-933d-ccd8718d5fcc_2.jpg",g:"801",o:true,t:"@1x"}},
l,["<style> @font-face {\n    font-family: 'chicagoflfregular';\n    src: url('Jettai.pro.hyperesources/chicagoflf.eot');\n    src: url('Jettai.pro.hyperesources/chicagoflf.eot?#iefix') format('embedded-opentype'),\n         url('Jettai.pro.hyperesources/chicagoflf.woff2') format('woff2'),\n         url('Jettai.pro.hyperesources/chicagoflf.woff') format('woff'),\n         url('Jettai.pro.hyperesources/chicagoflf.ttf') format('truetype'),\n         url('Jettai.pro.hyperesources/chicagoflf.svg#chicagoflfregular') format('svg');\n    font-weight: normal;\n    font-style: normal;\n}\n</style> "],e,[{n:"Untitled Scene",o:"1",X:[0]},{n:"Untitled Scene 2",o:"35",X:[1]}],[{o:"3",A:{a:[{p:4,h:"775"}]},p:"600px",cA:false,a:100,Z:3800,Y:800,c:"#000",L:[],bY:1,d:800,U:{"811":{V:{screens:"844","Main Timeline":"843"},W:"843",n:"Apple_Jettai"},"819":{V:{"Main Timeline":"845"},W:"845",n:"Imacs_Get Zorbed"},"829":{V:{"Main Timeline":"846"},W:"846",n:"imac_evolution"}},T:{"843":{c:"811",q:false,z:1.12,i:"843",a:[{f:"c",y:0.03,z:0.15,i:"c",e:478,s:358,o:"816"},{f:"c",y:0.03,z:0.15,i:"b",e:6,s:63,o:"816"},{f:"c",y:0.03,z:0.15,i:"a",e:2,s:62,o:"816"},{f:"c",y:0.03,z:0.15,i:"d",e:478,s:364,o:"816"},{y:0.18,i:"c",s:478,z:0,o:"816",f:"c"},{f:"c",y:0.18,z:0.24,i:"b",e:-30,s:6,o:"816"},{y:0.18,i:"a",s:2,z:0,o:"816",f:"c"},{y:0.18,i:"d",s:478,z:0,o:"816",f:"c"},{f:"c",y:0.23,z:0.19,i:"e",e:1,s:0,o:"814"},{f:"c",y:0.23,z:0.11,i:"b",e:621,s:561,o:"813"},{y:1.04,i:"b",s:621,z:0,o:"813",f:"c"},{y:1.12,i:"e",s:1,z:0,o:"814",f:"c"},{y:1.12,i:"b",s:-30,z:0,o:"816",f:"c"}],n:"Main Timeline",f:30,b:[]},"569":{q:false,z:0.25,i:"569",n:"bottom",a:[{f:"e",y:0,z:0.25,i:"e",e:0,s:1,o:"841"},{f:"c",y:0,z:0.2,i:"d",e:607,s:1025,o:"842"},{f:"c",y:0,z:0.2,i:"a",e:-6,s:-340,o:"842"},{f:"c",y:0,z:0.2,i:"b",e:0,s:-209,o:"842"},{f:"c",y:0,z:0.2,i:"c",e:806,s:1475,o:"842"},{y:0.2,i:"d",s:607,z:0,o:"842",f:"c"},{y:0.2,i:"a",s:-6,z:0,o:"842",f:"c"},{y:0.2,i:"b",s:0,z:0,o:"842",f:"c"},{y:0.2,i:"c",s:806,z:0,o:"842",f:"c"},{y:0.25,i:"e",s:0,z:0,o:"841",f:"c"}],f:30,b:[]},"844":{c:"811",q:false,z:0,i:"844",a:[],n:"screens",f:30,b:[]},kTimelineDefaultIdentifier:{q:false,z:0,i:"kTimelineDefaultIdentifier",n:"Main Timeline",a:[],f:30,b:[]},"845":{c:"819",q:false,z:1.02,i:"845",a:[{f:"h",y:0,z:0.13,i:"c",e:666,s:392,o:"820"},{f:"h",y:0,z:0.13,i:"d",e:666,s:392,o:"820"},{f:"h",y:0,z:0.13,i:"b",e:-27,s:110,o:"820"},{f:"h",y:0,z:0.13,i:"a",e:-33,s:104,o:"820"},{f:"a",y:0,z:0.02,i:"bH",e:60,s:0,o:"827"},{f:"e",y:0,z:0.09,i:"b",e:301,s:133,o:"826"},{f:"a",y:0,z:0.02,i:"bH",e:180,s:0,o:"824"},{f:"a",y:0,z:0.02,i:"bH",e:254,s:0,o:"825"},{f:"a",y:0,z:0.02,i:"bH",e:90,s:0,o:"828"},{y:0.02,i:"bH",s:60,z:0,o:"827",f:"c"},{y:0.02,i:"bH",s:180,z:0,o:"824",f:"c"},{y:0.02,i:"bH",s:254,z:0,o:"825",f:"c"},{y:0.02,i:"bH",s:90,z:0,o:"828",f:"c"},{f:"e",y:0.03,z:0.29,i:"f",e:72,s:0,o:"823"},{f:"b",y:0.03,z:0.02,i:"e",e:1,s:0,o:"827"},{f:"e",y:0.03,z:0.05,i:"f",e:72,s:0,o:"827"},{f:"e",y:0.03,z:0.05,i:"f",e:72,s:0,o:"824"},{f:"e",y:0.03,z:0.05,i:"f",e:72,s:0,o:"825"},{f:"e",y:0.03,z:0.05,i:"f",e:72,s:0,o:"828"},{y:0.05,i:"e",s:1,z:0,o:"827",f:"c"},{f:"c",y:0.07,z:0.07,i:"e",e:1,s:0,o:"822"},{f:"h",y:0.07,z:0.15,i:"b",e:645,s:466,o:"822"},{f:"b",y:0.07,z:0.01,i:"e",e:1,s:0,o:"824"},{y:0.08,i:"e",s:1,z:0,o:"824",f:"c"},{y:0.08,i:"f",s:72,z:0,o:"827",f:"c"},{f:"e",y:0.08,z:0.08,i:"f",e:144,s:72,o:"824"},{f:"e",y:0.08,z:0.08,i:"f",e:144,s:72,o:"825"},{f:"e",y:0.08,z:0.08,i:"f",e:144,s:72,o:"828"},{y:0.09,i:"b",s:301,z:0,o:"826",f:"c"},{y:0.13,i:"c",s:666,z:0,o:"820",f:"c"},{y:0.13,i:"d",s:666,z:0,o:"820",f:"c"},{y:0.13,i:"a",s:-33,z:0,o:"820",f:"c"},{y:0.13,i:"b",s:-27,z:0,o:"820",f:"c"},{f:"b",y:0.13,z:0.03,i:"e",e:1,s:0,o:"825"},{y:0.14,i:"e",s:1,z:0,o:"822",f:"c"},{y:0.16,i:"e",s:1,z:0,o:"825",f:"c"},{y:0.16,i:"f",s:144,z:0,o:"824",f:"c"},{f:"e",y:0.16,z:0.06,i:"f",e:216,s:144,o:"825"},{f:"e",y:0.16,z:0.06,i:"f",e:216,s:144,o:"828"},{f:"b",y:0.2,z:0.02,i:"e",e:1,s:0,o:"828"},{y:0.22,i:"b",s:645,z:0,o:"822",f:"c"},{y:0.22,i:"e",s:1,z:0,o:"828",f:"c"},{y:0.22,i:"f",s:216,z:0,o:"825",f:"c"},{f:"e",y:0.22,z:0.08,i:"f",e:288,s:216,o:"828"},{y:1,i:"f",s:288,z:0,o:"828",f:"c"},{y:1.02,i:"f",s:72,z:0,o:"823",f:"c"}],n:"Main Timeline",f:30,b:[]},"846":{c:"829",q:false,z:1.29,i:"846",a:[{f:"b",y:0,z:0.17,i:"c",e:16,s:239,o:"830"},{f:"b",y:0,z:0.17,i:"a",e:344,s:232,o:"830"},{f:"b",y:0,z:0.17,i:"b",e:216,s:115,o:"830"},{f:"c",y:0,z:0.08,i:"e",e:0,s:1,o:"830"},{f:"b",y:0,z:0.17,i:"d",e:17,s:237,o:"830"},{f:"c",y:0,z:0.15,i:"w",e:"Start A Revolution",s:"Start a ",o:"833"},{f:"h",y:0,z:0.15,i:"d",e:382,s:468,o:"835"},{f:"h",y:0,z:0.15,i:"a",e:-47,s:119,o:"835"},{f:"h",y:0,z:0.15,i:"c",e:800,s:468,o:"835"},{f:"h",y:0,z:0.15,i:"b",e:43,s:0,o:"835"},{f:"d",y:0,z:0.26,i:"b",e:441,s:29,o:"833"},{f:"c",y:0.07,z:0.08,i:"e",e:0,s:1,o:"833"},{f:"c",y:0.08,z:0.11,i:"e",e:1,s:0,o:"838"},{f:"h",y:0.08,z:0.21,i:"b",e:176,s:256,o:"838"},{y:0.08,i:"e",s:0,z:0,o:"830",f:"c"},{f:"c",y:0.12,z:0.15,i:"e",e:1,s:0,o:"836"},{f:"h",y:0.12,z:0.2,i:"b",e:176,s:256,o:"836"},{f:"c",y:0.15,z:0.03,i:"G",e:"#FFF",s:"#FDEF00",o:"833"},{f:"a",y:0.15,z:0.03,i:"w",e:"Evolution",s:"Start A Revolution",o:"833"},{y:0.15,i:"a",s:-47,z:0,o:"835",f:"c"},{y:0.15,i:"c",s:800,z:0,o:"835",f:"c"},{y:0.15,i:"d",s:382,z:0,o:"835",f:"c"},{f:"c",y:0.15,z:0.05,i:"e",e:0,s:0,o:"833"},{y:0.15,i:"b",s:43,z:0,o:"835",f:"c"},{y:0.17,i:"c",s:16,z:0,o:"830",f:"c"},{y:0.17,i:"a",s:344,z:0,o:"830",f:"c"},{y:0.17,i:"d",s:17,z:0,o:"830",f:"c"},{f:"h",y:0.17,z:0.2,i:"b",e:169,s:249,o:"834"},{f:"c",y:0.17,z:0.15,i:"e",e:1,s:0,o:"834"},{y:0.17,i:"b",s:216,z:0,o:"830",f:"c"},{y:0.18,i:"G",s:"#FFF",z:0,o:"833",f:"c"},{f:"c",y:0.18,z:0.06,i:"w",e:"revolution",s:"Evolution",o:"833"},{y:0.19,i:"e",s:1,z:0,o:"838",f:"c"},{f:"c",y:0.2,z:0.17,i:"e",e:1,s:0,o:"832"},{f:"h",y:0.2,z:0.2,i:"b",e:179,s:259,o:"832"},{f:"c",y:0.2,z:0.05,i:"e",e:1,s:0,o:"833"},{f:"c",y:0.24,z:0.01,i:"w",e:"Evolution",s:"revolution",o:"833"},{f:"h",y:0.24,z:0.2,i:"b",e:180,s:260,o:"831"},{f:"c",y:0.24,z:0.16,i:"e",e:1,s:0,o:"831"},{f:"c",y:0.25,z:0.05,i:"w",e:"revolution",s:"Evolution",o:"833"},{y:0.25,i:"e",s:1,z:0,o:"833",f:"c"},{y:0.26,i:"b",s:441,z:0,o:"833",f:"c"},{f:"h",y:0.27,z:0.2,i:"b",e:179,s:259,o:"837"},{f:"c",y:0.27,z:0.19,i:"e",e:1,s:0,o:"837"},{y:0.27,i:"e",s:1,z:0,o:"836",f:"c"},{y:0.29,i:"b",s:176,z:0,o:"838",f:"c"},{f:"c",y:1,z:0.29,i:"w",e:"Revelution!",s:"revolution",o:"833"},{y:1.02,i:"b",s:176,z:0,o:"836",f:"c"},{y:1.02,i:"e",s:1,z:0,o:"834",f:"c"},{y:1.07,i:"b",s:169,z:0,o:"834",f:"c"},{y:1.07,i:"e",s:1,z:0,o:"832",f:"c"},{y:1.1,i:"b",s:179,z:0,o:"832",f:"c"},{y:1.1,i:"e",s:1,z:0,o:"831",f:"c"},{y:1.14,i:"b",s:180,z:0,o:"831",f:"c"},{y:1.16,i:"e",s:1,z:0,o:"837",f:"c"},{y:1.17,i:"b",s:179,z:0,o:"837",f:"c"},{y:1.29,i:"w",s:"Revelution!",z:0,o:"833",f:"c"}],n:"Main Timeline",f:30,b:[]}},bZ:180,O:["818","817","811","812","816","815","814","813","823","819","820","826","827","824","825","828","822","821","841","842","840","829","835","838","836","834","832","831","837","830","833","839"],n:"Untitled Layout","_":0,v:{"811":{x:"visible",a:0,bS:37,b:70,j:"absolute",r:"inline",c:800,k:"div",bY:1,d:848,z:20,cA:false,bX:false,bZ:180,cV:[],bD:"none"},"840":{g:"#003266",tX:0.5,x:"hidden",tY:0.5,a:0,b:2640,j:"absolute",r:"inline",z:1,bS:183,k:"div",d:1160,c:800,f:0,bD:"none"},"832":{w:"",h:"48",p:"no-repeat",x:"visible",a:344,q:"100% 100%",b:259,j:"absolute",bF:"829",r:"inline",z:14,k:"div",d:113,c:150,e:0},"824":{p:"no-repeat",b:301,c:221,q:"100% 100%",bS:37,d:300,r:"inline",e:0,bD:"none",f:0,aP:"pointer",h:"296",bF:"823",j:"absolute",x:"visible",aA:{a:[{p:5,j:"https://fletcherchristianmusic.com",k:true}]},k:"div",dB:"button",z:3,bH:0,tX:0.5,bI:1,a:195,tY:0},"816":{p:"no-repeat",b:63,c:358,q:"100% 100%",bS:37,d:364,r:"inline",e:1,bL:0,bD:"none",aP:"pointer",h:"101",aY:0,w:"",bF:"815",j:"absolute",x:"visible",aA:{a:[{p:5,j:"https://zora.co/@jettai",k:true}]},k:"div",dB:"button",z:1,tX:0.3,a:62,tY:0.5},"837":{h:"44",p:"no-repeat",x:"visible",a:550,q:"100% 100%",b:259,j:"absolute",r:"inline",z:12,bF:"829",k:"div",d:113,c:150,e:0},"829":{cW:{a:[{b:"569",p:8,z:false,symbolOid:"2",J:true}]},x:"visible",cX:{a:[{b:"569",p:8,z:true,symbolOid:"2",J:true}]},a:47,b:2937,j:"absolute",r:"inline",z:3,bS:117,k:"div",d:469,c:705,bY:1,e:1,bZ:180,cA:false,bX:false,cV:[],bD:"none"},"820":{c:392,bS:37,d:392,r:"inline",I:"None",e:1,J:"None",bD:"none",K:"None",g:"#FFF",L:"None",M:0,bF:"819",N:0,j:"absolute",O:0,x:"visible",B:"#D8DDE4",P:0,A:"#D8DDE4",C:"#D8DDE4",z:29,aJ:"50%",D:"#D8DDE4",aK:"50%",k:"div",aI:"50%",a:104,aL:"50%",b:110},"812":{cX:{a:[{b:"843",p:8,z:true,symbolOid:"394",J:true}]},c:43,d:43,r:"inline",I:"None",e:0,J:"None",K:"None",g:"#F02300",L:"None",M:0,bF:"811",N:0,j:"absolute",O:0,x:"visible",B:"#D8DDE4",P:0,A:"#D8DDE4",C:"#D8DDE4",z:43,aJ:"50%",D:"#D8DDE4",aK:"50%",k:"div",aI:"50%",a:395,cW:{a:[{b:"843",p:8,z:false,symbolOid:"394",J:true}]},aL:"50%",b:101},"841":{g:"#000",w:"",p:"no-repeat",a:-412,bS:165,q:"100% 100%",x:"hidden",j:"absolute",bF:"840",r:"inline",b:0,z:34,d:1365,k:"div",c:1624,e:1,f:0,bD:"none"},"833":{b:29,aU:8,G:"#FDEF00",c:560,bS:36,aV:8,r:"inline",d:183,e:1,s:"chicagoflfregular",t:72,Z:"break-word",v:"normal",w:"Start a ",bF:"829",j:"absolute",x:"visible",k:"div",y:"preserve",z:19,aS:8,tX:0.5,aT:8,a:56,F:"center",tY:0.5},"825":{p:"no-repeat",b:301,c:221,q:"100% 100%",bS:37,d:300,r:"inline",e:0,bD:"none",f:0,aP:"pointer",h:"296",bF:"823",j:"absolute",x:"visible",aA:{a:[{p:5,j:"https://jamkillergear.xyz",k:true}]},k:"div",dB:"button",z:2,bH:0,tX:0.5,bI:1,a:195,tY:0},"817":{tX:0.5,x:"hidden",tY:0.5,a:0,b:44,bS:167,r:"inline",z:4,k:"div",j:"absolute",d:1160,c:800,f:0,bD:"none"},"838":{h:"54",p:"no-repeat",x:"visible",a:-19,q:"100% 100%",b:256,j:"absolute",r:"inline",z:17,bF:"829",k:"div",d:113,c:150,e:0},"821":{cX:{a:[{b:"845",p:8,z:true,symbolOid:"394",J:true}]},c:43,d:43,I:"None",e:0,J:"None",K:"None",g:"#F02300",L:"None",M:0,bF:"819",N:0,j:"absolute",x:"visible",O:0,B:"#D8DDE4",P:0,A:"#D8DDE4",C:"#D8DDE4",z:32,aJ:"50%",D:"#D8DDE4",aK:"50%",k:"div",aI:"50%",a:278,cW:{a:[{b:"845",p:8,z:false,symbolOid:"394",J:true}]},aL:"50%",b:600},"813":{x:"visible",k:"div",c:565,d:113,z:3,r:"inline",a:112,j:"absolute",bF:"811",b:561},"842":{h:"801",p:"no-repeat",x:"visible",aW:0.58044434,q:"100% 100%",a:-340,j:"absolute",bF:"840",r:"inline",aX:0,bS:119,d:1025,b:-209,z:2,k:"div",c:1475},"834":{w:"",h:"50",p:"no-repeat",x:"visible",a:204,q:"100% 100%",b:249,j:"absolute",bF:"829",r:"inline",z:15,k:"div",d:112,c:149,e:0},"826":{p:"no-repeat",b:133,c:221,q:"100% 100%",bS:37,d:300,r:"inline",f:0,bD:"none",aP:"pointer",h:"296",bF:"823",j:"absolute",x:"visible",aA:{a:[{p:5,j:"https://zora.co/@projamkiller",k:true}]},k:"div",dB:"button",z:5,tX:0.5,a:195,tY:0},"818":{w:"",h:"774",p:"no-repeat",a:-373,bS:191,q:"100% 100%",x:"hidden",j:"absolute",bF:"817",cP:"parallax",r:"inline",b:-4,d:1164,z:3,k:"div",c:1545,bD:"none"},"839":{cX:{a:[{b:"846",p:8,z:true,symbolOid:"394",J:true}]},c:43,d:43,I:"None",e:0,J:"None",K:"None",g:"#F02300",L:"None",M:0,bF:"829",N:0,j:"absolute",x:"visible",O:0,B:"#D8DDE4",P:0,A:"#D8DDE4",C:"#D8DDE4",z:20,aJ:"50%",D:"#D8DDE4",aK:"50%",k:"div",aI:"50%",a:330,cW:{a:[{b:"846",p:8,z:false,symbolOid:"394",J:true}]},aL:"50%",b:702},"830":{h:"459",p:"no-repeat",x:"visible",a:232,q:"100% 100%",bS:37,j:"absolute",bF:"829",r:"inline",b:115,z:18,d:237,k:"div",c:239,e:1,bD:"none"},"822":{aU:8,G:"#F2F2F2",b:466,c:457,bS:37,aV:8,r:"inline",d:97,e:0,s:"chicagoflfregular",bD:"none",t:64,Z:"break-word",aP:"pointer",v:"normal",w:"Go \n$Enjoy \nYourself!",bF:"819",j:"absolute",x:"visible",aA:{a:[{p:5,j:"https://zora.co/collect/zora:0x18de093ca760eb91ae550a29c94f0481736deb02",k:true}]},k:"div",y:"preserve",dB:"button",z:31,aS:8,tX:0.5,aT:8,a:63,F:"center",tY:0.5},"814":{aU:8,G:"#FFF",b:1,c:455,bS:37,aV:8,r:"inline",d:40,e:0,s:"chicagoflfregular",bD:"none",t:74,Y:"normal",Z:"break-word",v:"normal",w:"Jettai.Pro",bF:"813",j:"absolute",x:"visible",k:"div",y:"preserve",z:1,aS:8,tX:0.5,aT:8,a:47,F:"center",tY:0.5},"835":{c:468,bS:37,d:468,r:"inline",I:"None",e:1,J:"None",bL:0,K:"None",g:"rgba(255, 71, 221, 0.595)",L:"None",M:0,w:"",bF:"829",j:"absolute",N:0,O:0,B:"#D8DDE4",P:0,x:"visible",C:"#D8DDE4",A:"#D8DDE4",z:8,D:"#D8DDE4",aK:250,aJ:250,k:"div",aI:250,a:119,aL:250,b:0},"827":{p:"no-repeat",b:301,c:221,q:"100% 100%",bS:37,d:300,r:"inline",e:0,bD:"none",f:0,aP:"pointer",h:"296",bF:"823",j:"absolute",x:"visible",aA:{a:[{p:5,j:"https://zora.co/collect/zora:0x18de093ca760eb91ae550a29c94f0481736deb02/1",k:false}]},k:"div",dB:"button",z:4,bH:0,tX:0.5,a:195,tY:0},"819":{x:"visible",a:100,bS:45,b:1600,j:"absolute",r:"inline",c:600,k:"div",bY:1,d:600,z:18,cA:false,bX:false,bZ:180,cV:[{a:[{b:"299",p:8,z:false,symbolOid:"324",J:true}],B:"waypoint_object_3_trigger"}],bD:"none"},"831":{h:"46",p:"no-repeat",x:"visible",a:434,q:"100% 100%",b:260,j:"absolute",r:"inline",z:13,bF:"829",k:"div",d:112,c:149,e:0},"823":{x:"visible",a:0,bS:37,b:0,j:"absolute",r:"inline",c:600,k:"div",z:30,d:600,bF:"819",f:0,bD:"none"},"815":{cX:{a:[{}]},c:481,bS:37,d:468,r:"inline",e:1,aW:0,gg:"2",bD:"none",aP:"pointer",bF:"811",j:"absolute",x:"visible",aA:{a:[{p:5,j:"https://zora.co/@jettai.eth",k:true}]},k:"div",dB:"button",Q:0,z:42,R:"#000",S:0,a:154,cW:{a:[{}]},T:0,b:225},"836":{w:"",h:"52",p:"no-repeat",x:"visible",a:86,q:"100% 100%",b:256,j:"absolute",bF:"829",r:"inline",z:16,k:"div",d:113,c:150,e:0},"828":{p:"no-repeat",b:301,c:221,q:"100% 100%",bS:37,d:300,r:"inline",e:0,bD:"none",f:0,aP:"pointer",h:"296",bF:"823",j:"absolute",x:"visible",aA:{a:[{p:5,j:"https://producerprotocol.pro",k:true}]},k:"div",dB:"button",z:1,bH:0,tX:0.5,bI:1,a:195,tY:0}}},{o:"37",p:"600px",cA:false,a:100,Z:3800,Y:800,c:"#FFF",L:[],bY:1,d:800,U:{"847":{V:{"Main Timeline":"858"},W:"858",n:"imac_evolution"}},T:{"858":{c:"847",q:false,z:1.29,i:"858",a:[{f:"b",y:0,z:0.17,i:"c",e:16,s:239,o:"848"},{f:"b",y:0,z:0.17,i:"a",e:344,s:232,o:"848"},{f:"b",y:0,z:0.17,i:"b",e:216,s:115,o:"848"},{f:"c",y:0,z:0.08,i:"e",e:0,s:1,o:"848"},{f:"b",y:0,z:0.17,i:"d",e:17,s:237,o:"848"},{f:"c",y:0,z:0.15,i:"w",e:"Start A Revolution",s:"Start a ",o:"851"},{f:"h",y:0,z:0.15,i:"d",e:382,s:468,o:"853"},{f:"h",y:0,z:0.15,i:"a",e:-47,s:119,o:"853"},{f:"h",y:0,z:0.15,i:"c",e:800,s:468,o:"853"},{f:"h",y:0,z:0.15,i:"b",e:43,s:0,o:"853"},{f:"d",y:0,z:0.26,i:"b",e:441,s:29,o:"851"},{f:"c",y:0.07,z:0.08,i:"e",e:0,s:1,o:"851"},{f:"c",y:0.08,z:0.11,i:"e",e:1,s:0,o:"856"},{f:"h",y:0.08,z:0.21,i:"b",e:176,s:256,o:"856"},{y:0.08,i:"e",s:0,z:0,o:"848",f:"c"},{f:"c",y:0.12,z:0.15,i:"e",e:1,s:0,o:"854"},{f:"h",y:0.12,z:0.2,i:"b",e:176,s:256,o:"854"},{f:"c",y:0.15,z:0.03,i:"G",e:"#FFF",s:"#FDEF00",o:"851"},{f:"a",y:0.15,z:0.03,i:"w",e:"Evolution",s:"Start A Revolution",o:"851"},{y:0.15,i:"a",s:-47,z:0,o:"853",f:"c"},{y:0.15,i:"c",s:800,z:0,o:"853",f:"c"},{y:0.15,i:"d",s:382,z:0,o:"853",f:"c"},{f:"c",y:0.15,z:0.05,i:"e",e:0,s:0,o:"851"},{y:0.15,i:"b",s:43,z:0,o:"853",f:"c"},{y:0.17,i:"c",s:16,z:0,o:"848",f:"c"},{y:0.17,i:"a",s:344,z:0,o:"848",f:"c"},{y:0.17,i:"d",s:17,z:0,o:"848",f:"c"},{f:"h",y:0.17,z:0.2,i:"b",e:169,s:249,o:"852"},{f:"c",y:0.17,z:0.15,i:"e",e:1,s:0,o:"852"},{y:0.17,i:"b",s:216,z:0,o:"848",f:"c"},{y:0.18,i:"G",s:"#FFF",z:0,o:"851",f:"c"},{f:"c",y:0.18,z:0.06,i:"w",e:"revolution",s:"Evolution",o:"851"},{y:0.19,i:"e",s:1,z:0,o:"856",f:"c"},{f:"c",y:0.2,z:0.17,i:"e",e:1,s:0,o:"850"},{f:"h",y:0.2,z:0.2,i:"b",e:179,s:259,o:"850"},{f:"c",y:0.2,z:0.05,i:"e",e:1,s:0,o:"851"},{f:"c",y:0.24,z:0.01,i:"w",e:"Evolution",s:"revolution",o:"851"},{f:"h",y:0.24,z:0.2,i:"b",e:180,s:260,o:"849"},{f:"c",y:0.24,z:0.16,i:"e",e:1,s:0,o:"849"},{f:"c",y:0.25,z:0.05,i:"w",e:"revolution",s:"Evolution",o:"851"},{y:0.25,i:"e",s:1,z:0,o:"851",f:"c"},{y:0.26,i:"b",s:441,z:0,o:"851",f:"c"},{f:"h",y:0.27,z:0.2,i:"b",e:179,s:259,o:"855"},{f:"c",y:0.27,z:0.19,i:"e",e:1,s:0,o:"855"},{y:0.27,i:"e",s:1,z:0,o:"854",f:"c"},{y:0.29,i:"b",s:176,z:0,o:"856",f:"c"},{f:"c",y:1,z:0.29,i:"w",e:"Revelution!",s:"revolution",o:"851"},{y:1.02,i:"b",s:176,z:0,o:"854",f:"c"},{y:1.02,i:"e",s:1,z:0,o:"852",f:"c"},{y:1.07,i:"b",s:169,z:0,o:"852",f:"c"},{y:1.07,i:"e",s:1,z:0,o:"850",f:"c"},{y:1.1,i:"b",s:179,z:0,o:"850",f:"c"},{y:1.1,i:"e",s:1,z:0,o:"849",f:"c"},{y:1.14,i:"b",s:180,z:0,o:"849",f:"c"},{y:1.16,i:"e",s:1,z:0,o:"855",f:"c"},{y:1.17,i:"b",s:179,z:0,o:"855",f:"c"},{y:1.29,i:"w",s:"Revelution!",z:0,o:"851",f:"c"}],n:"Main Timeline",f:30,b:[]},kTimelineDefaultIdentifier:{q:false,z:0,i:"kTimelineDefaultIdentifier",n:"Main Timeline",a:[{f:"c",p:2,y:0,z:0,i:"ActionHandler",s:{a:[{p:14,B:"waypoint_object_1_trigger"}]},o:"kTimelineDefaultIdentifier"}],f:30,b:[]}},bZ:180,O:["847","853","852","856","854","850","849","855","848","851","857"],n:"Untitled Layout","_":1,v:{"850":{w:"",h:"48",p:"no-repeat",x:"visible",a:344,q:"100% 100%",b:259,j:"absolute",bF:"847",r:"inline",z:14,k:"div",d:113,c:150,e:0},"853":{c:468,bS:37,d:468,r:"inline",I:"None",e:1,J:"None",bL:0,K:"None",g:"rgba(255, 71, 221, 0.595)",L:"None",M:0,w:"",bF:"847",j:"absolute",N:0,O:0,B:"#D8DDE4",P:0,x:"visible",C:"#D8DDE4",A:"#D8DDE4",z:8,D:"#D8DDE4",aK:250,aJ:250,k:"div",aI:250,a:119,aL:250,b:0},"856":{h:"54",p:"no-repeat",x:"visible",a:-19,q:"100% 100%",b:256,j:"absolute",r:"inline",z:17,bF:"847",k:"div",d:113,c:150,e:0},"849":{h:"46",p:"no-repeat",x:"visible",a:434,q:"100% 100%",b:260,j:"absolute",r:"inline",z:13,bF:"847",k:"div",d:112,c:149,e:0},"852":{w:"",h:"50",p:"no-repeat",x:"visible",a:204,q:"100% 100%",b:249,j:"absolute",bF:"847",r:"inline",z:15,k:"div",d:112,c:149,e:0},"855":{h:"44",p:"no-repeat",x:"visible",a:550,q:"100% 100%",b:259,j:"absolute",r:"inline",z:12,bF:"847",k:"div",d:113,c:150,e:0},"848":{h:"459",p:"no-repeat",x:"visible",a:232,q:"100% 100%",bS:37,j:"absolute",bF:"847",r:"inline",b:115,z:18,d:237,k:"div",c:239,e:1,bD:"none"},"851":{b:29,aU:8,G:"#FDEF00",c:560,bS:36,aV:8,r:"inline",d:183,e:1,s:"chicagoflfregular",t:72,Z:"break-word",v:"normal",w:"Start a ",bF:"847",j:"absolute",x:"visible",k:"div",y:"preserve",z:19,aS:8,tX:0.5,aT:8,a:56,F:"center",tY:0.5},"854":{w:"",h:"52",p:"no-repeat",x:"visible",a:86,q:"100% 100%",b:256,j:"absolute",bF:"847",r:"inline",z:16,k:"div",d:113,c:150,e:0},"857":{cX:{a:[{b:"858",p:8,z:true,symbolOid:"394",J:true}]},c:43,d:43,I:"None",e:0,J:"None",K:"None",g:"#F02300",L:"None",M:0,bF:"847",N:0,j:"absolute",x:"visible",O:0,B:"#D8DDE4",P:0,A:"#D8DDE4",C:"#D8DDE4",z:20,aJ:"50%",D:"#D8DDE4",aK:"50%",k:"div",aI:"50%",a:330,cW:{a:[{b:"858",p:8,z:false,symbolOid:"394",J:true}]},aL:"50%",b:702},"847":{x:"visible",a:44,cA:false,bX:false,j:"absolute",b:202,c:689,k:"div",bY:1,d:113,z:11,bZ:180,cV:[]}}}],{},h,{h:{p:0,q:[[0,0,0.175,0.885,0.32,1.25,1,1]]}},null,false,true,-1,true,true,true,true,true);d[f]=c.API;document.getElementById(g).setAttribute("HYP_dn",f);c.z_o(this.body)})();})();
