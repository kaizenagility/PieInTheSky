(function(){var window=this;var d=this,aa=function(){},ba=function(a){var b=typeof a;if("object"==b)if(a){if(a instanceof Array)return"array";if(a instanceof Object)return b;var c=Object.prototype.toString.call(a);if("[object Window]"==c)return"object";if("[object Array]"==c||"number"==typeof a.length&&"undefined"!=typeof a.splice&&"undefined"!=typeof a.propertyIsEnumerable&&!a.propertyIsEnumerable("splice"))return"array";if("[object Function]"==c||"undefined"!=typeof a.call&&"undefined"!=typeof a.propertyIsEnumerable&&!a.propertyIsEnumerable("call"))return"function"}else return"null";else if("function"==b&&"undefined"==typeof a.call)return"object";return b};var f=function(){this.a="";this.b=ca};f.prototype.s=!0;f.prototype.j=function(){return this.a};var da=function(a){return a instanceof f&&a.constructor===f&&a.b===ca?a.a:"type_error:TrustedResourceUrl"},ca={},ea=function(a){var b=new f;b.a=a;return b};var g=function(){this.l="";this.A=fa};g.prototype.s=!0;g.prototype.j=function(){return this.l};var ha=/^(?:(?:https?|mailto|ftp):|[^:/?#]*(?:[/?#]|$))/i,fa={},ia=function(a){var b=new g;b.l=a;return b};ia("about:blank");var h;a:{var ja=d.navigator;if(ja){var ka=ja.userAgent;if(ka){h=ka;break a}}h=""};var n=function(a){n[" "](a);return a};n[" "]=aa;var q=function(){return d.googletag||(d.googletag={})};var r={1:"pagead2.googlesyndication.com",2:"pubads.g.doubleclick.net",3:"securepubads.g.doubleclick.net",7:.02,10:0,13:1500,16:.01,17:1,20:0,23:.001,24:200,27:.01,28:0,29:.01,33:"pagead2.googlesyndication.com",34:1,37:.01,38:.001,47:1E-4,53:"",54:0,57:.05,58:1,159:1,60:0,63:0,65:.01,66:1E-5,67:0,68:0,69:.99,71:.05,73:.001,74:.05,75:"",161:0,162:0,163:"",76:"",77:.001,78:.01,88:1,79:.95,81:.001,83:1E-4,84:0,85:.01,87:.2,89:.995,90:.01,91:.01,92:0,93:0,94:0,95:0,96:.995,97:.001,98:0,99:.01,101:.001,103:.01,104:"/pagead/js/rum.js",105:0,106:"1-0-13",107:"1-0-13",110:.001,113:1,114:.01,115:.01,116:.001,117:.01,118:.05,123:.01,120:.05,121:.01,124:.05,122:.01,125:.01,126:.01,127:.001,129:.01,130:1,131:"",132:.01,156:.01,133:.01,134:.01,135:0,136:1,137:.001,138:"",143:.001,144:.001,141:1,151:.01,157:.05,158:0,164:.001,150:"",153:.05,154:1,155:0,165:.01,166:0,160:21061138,152:[]};r[6]=function(a,b){try{for(var c=null;c!=a;c=a,a=a.parent)switch(a.location.protocol){case "https:":return!0;case "file:":return!!b;case "http:":return!1}}catch(e){}return!0}(window);r[49]=(new Date).getTime();r[36]=/^true$/.test("false");r[46]=/^true$/.test("false");r[148]=/^true$/.test("false");var t=function(){var a={},b;for(b in r)a[b]=r[b];this.a=a};t.prototype.get=function(a){return this.a[a]};t.prototype.set=function(a,b){this.a[a]=b};t.b=void 0;t.a=function(){return t.b?t.b:t.b=new t};var la=["21060621","21060622","21060833","21060713"],ma=t.a().a,na=q(),oa=na._vars_,u;for(u in oa)ma[u]=oa[u];na._vars_=ma;var qa=function(){return"160"},ra=q();ra.hasOwnProperty("getVersion")||(ra.getVersion=qa);var sa=function(){var a=aa;return function(){if(a){var b=a;a=null;b()}}};var ta=function(a,b){a.addEventListener?a.addEventListener("message",b,void 0):a.attachEvent&&a.attachEvent("onmessage",b)};var va=function(){var a=d;this.b=a=void 0===a?d:a;this.B="https://securepubads.g.doubleclick.net/static/3p_cookie.html";this.a=2;this.f=[];this.o=!1;a:{var b=[d.top];a=[];for(var c=0,e;e=b[c++];){a.push(e);try{if(e.frames)for(var l=e.frames.length,m=0;m<l&&50>b.length;++m)b.push(e.frames[m])}catch(F){}}b:{try{var x=d.parent;if(x&&x!=d){var k=x;break b}}catch(F){}k=null}(l=k)&&a.unshift(l);a.unshift(d);var p;for(l=0;l<a.length;++l)try{var y=a[l],pa=v(y);if(pa){this.a=ua(pa);if(2!=this.a)break a;var H;if(H=!p){k=void 0;try{if(k=!!y&&null!=y.location.href)c:{try{n(y.foo);k=!0;break c}catch(F){}k=!1}H=k}catch(F){H=!1}}H&&(p=y)}}catch(F){}this.b=p||this.b}},w=function(a){if(2!=wa(a)){for(var b=1==wa(a),c=0;c<a.f.length;c++)try{a.f[c](b)}catch(e){}a.f=[]}},xa=function(a){var b=v(a.b);b&&2==a.a&&(a.a=ua(b))},wa=function(a){xa(a);return a.a},ya=function(a){var b=z;b.f.push(a);if(2!=b.a)w(b);else if(b.o||(ta(b.b,function(a){var c=v(b.b);if(c&&a.source==c&&2==b.a){switch(a.data){case "3p_cookie_yes":b.a=1;break;case "3p_cookie_no":b.a=0}w(b)}}),b.o=!0),v(b.b))w(b);else{a=b.b.document.createElement("iframe");a.src=b.B;a.name="detect_3p_cookie";a.style.visibility="hidden";a.style.height="0";a.onload=function(){xa(b);w(b)};try{b.b.document.body.appendChild(a)}catch(c){}}},za=function(a,b){try{return!!a.frames[b]}catch(c){return!1}},v=function(a){return a.frames[n("detect_3p_cookie")]||null},ua=function(a){return za(a,"3p_cookie_yes")?1:za(a,"3p_cookie_no")?0:2};var A=null;var Aa=function(a,b){var c="script";c=void 0===c?"":c;var e=a.createElement("link");e.rel="preload";b instanceof f?b=da(b):b instanceof g?b=b instanceof g&&b.constructor===g&&b.A===fa?b.l:"type_error:SafeUrl":(b instanceof g||(b=b.s?b.j():String(b),ha.test(b)||(b="about:invalid#zClosurez"),b=ia(b)),b=b.j());e.href=b;c&&(e.as=c);(a=a.getElementsByTagName("head")[0])&&a.appendChild(e)};var Ba=/^\.google\.(com?\.)?[a-z]{2,3}$/,Ca=/\.(cn|com\.bi|do|sl)$/,B=function(a){return Ba.test(a)&&!Ca.test(a)},C=d,z,Da=function(a,b){a="https://"+("adservice"+b+"/adsid/integrator."+a);b=["domain="+encodeURIComponent(d.location.hostname)];D[3]>=+new Date&&b.push("adsid="+encodeURIComponent(D[1]));return a+"?"+b.join("&")},D,E,G=function(){C=d;D=C.googleToken=C.googleToken||{};var a=+new Date;D[1]&&D[3]>a&&0<D[2]||(D[1]="",D[2]=-1,D[3]=-1,D[4]="",D[6]="");E=C.googleIMState=C.googleIMState||{};B(E[1])||(E[1]=".google.com");"array"==ba(E[5])||(E[5]=[]);"boolean"==typeof E[6]||(E[6]=!1);"array"==ba(E[7])||(E[7]=[]);"number"==typeof E[8]||(E[8]=0)},Ea=function(a){try{a()}catch(b){d.setTimeout(function(){throw b;},0)}},Ga=function(a){"complete"==d.document.readyState||"loaded"==d.document.readyState||d.currentScript&&d.currentScript.async?Fa(3):a()},Ha=0,I={g:function(){return 0<E[8]},m:function(){E[8]++},u:function(){0<E[8]&&E[8]--},v:function(){E[8]=0},c:function(){},w:function(){return!1},i:function(){return E[5]},h:Ea},J={g:function(){return E[6]},m:function(){E[6]=!0},u:function(){E[6]=!1},v:function(){E[6]=!1},c:function(){},w:function(){return".google.com"!=E[1]&&2<++Ha},i:function(){return E[7]},h:function(a){Ga(function(){Ea(a)})}},Fa=function(a){if(1E-5>Math.random()){d.google_image_requests||(d.google_image_requests=[]);var b=d.document.createElement("img");b.src="https://pagead2.googlesyndication.com/pagead/gen_204?id=imerr&err="+a;d.google_image_requests.push(b)}};I.c=function(){if(!I.g()){var a=d.document,b=function(b){var c=Da("js",b);Aa(a,c);b=a.createElement("script");b.type="text/javascript";b.onerror=function(){return d.processGoogleToken({},2)};c=ea(c);b.src=da(c);try{(a.head||a.body||a.documentElement).appendChild(b),I.m()}catch(m){}},c=E[1];b(c);".google.com"!=c&&b(".google.com");d.setTimeout(function(){return d.processGoogleToken({},1)},1E3)}};J.c=function(){if(!J.g()){var a=d.document,b=Da("sync.js",E[1]);Aa(a,b);b=b.replace(/[\W]/g,function(a){return"&#"+a.charCodeAt()+";"});var c=n("script"),e="<"+c+' src="'+b+'"></'+c+">"+("<"+c+'>processGoogleTokenSync({"newToken":"FBS"},5);</'+c+">");Ga(function(){a.write(e);J.m()})}};var Ia=function(a,b){G();var c=C.googleToken[5]||0;a&&(0!=c||D[3]>=+new Date?b.h(a):(b.i().push(a),b.c()));D[3]>=+new Date&&D[2]>=+new Date||b.c()},Ka=function(a){d.processGoogleToken=d.processGoogleToken||function(a,c){return Ja(I,a,c)};Ia(a,I)},La=function(a){d.processGoogleTokenSync=d.processGoogleTokenSync||function(a,c){return Ja(J,a,c)};Ia(a,J)},Ma=function(a){z=z||new va;ya(function(b){b&&a()})},Ja=function(a,b,c){b=void 0===b?{}:b;c=void 0===c?0:c;var e=b.newToken||"",l=parseInt(b.freshLifetimeSecs||"",10)||3600,m=parseInt(b.validLifetimeSecs||"",10)||86400,x=b["1p_jar"]||"";b=b.pucrd||"";G();1==c?a.v():a.u();Fa(c);if(!e&&a.w())B(".google.com")&&(E[1]=".google.com"),a.c();else{var k=C.googleToken=C.googleToken||{},p=!(D[3]>=+new Date)&&(5==c||4==c||2==c);if(0==c&&e&&"string"==typeof e&&0<l&&0<m&&"string"==typeof x||p)p=+new Date,k[5]=c,k[1]=e,k[2]=p+1E3*l,k[3]=p+1E3*m,k[4]=x,k[6]=b,G();if(e||!a.g()){c=a.i();for(e=0;e<c.length;e++)a.h(c[e]);c.length=0}}};n("partner.googleadservices.com");n("www.googletagservices.com");var Na="",Oa="",Pa=t.a().get(46)&&!t.a().get(6);Na=Pa?"http:":"https:";Oa=t.a().get(Pa?2:3);var Qa=function(a,b){var c;if(null===A){A="";try{if(c=d.top.location.hash){var e=c.match(/\bdeid=([\d,]+)/);A=e?e[1]:""}}catch(m){}}if(c=(c=A)&&c.match(new RegExp("\\b("+a.join("|")+")\\b")))a=c[0];else if(b)a:{if(!(1E-4>Math.random())&&(c=Math.random(),c<a.length*b)){try{var l=new Uint32Array(1);d.crypto.getRandomValues(l);c=l[0]/65536/65536}catch(m){c=Math.random()}a=a[Math.floor(c*a.length)];break a}a=null}else a=null;return a};var K=q(),L=K.fifWin||window,M=L.document,Ra=[],Sa=q();Sa.hasOwnProperty("cmd")||(Sa.cmd=Ra);if(K.evalScripts)K.evalScripts();else{var Ta=M.currentScript,N;var O=t.a(),P=O.get(76);if(P)N=P;else{var Q=["158","158","160"],Ua=Q[0]||"160",R=O.get(131),S="",T,Va="/gpt/pubads_impl_";if(R){"21061130"!==R&&(S="?eid="+R);var Wa=O.get(162);T="160";"21061058"===R&&Wa&&(Va+="control_",T=Wa)}else if(1<Q.length&&-1==h.indexOf("Google Web Preview")){var U=["21061153","21061154","21061155"],V=Qa(U,.001);if(V)if(t.a().set(53,V),V==U[0])S="?v="+Q[U.length-1];else for(var W=1;W<U.length;++W)if(V==U[W]){T=Q[W];break}}P=Na+"//"+Oa+Va+(T||Ua)+".js"+S;t.a().set(76,P);N=P}var Xa=N;-1!=h.indexOf("iPhone")&&t.a().set(79,0);var Ya=t.a().get(160);Ya&&t.a().get(152).push(Ya);var X=t.a().get(138)||Qa(la,t.a().get(137));if(X)try{var Y=t.a().get(150);Y&&(G(),B(Y)&&(E[1]=Y));t.a().set(138,X)}catch(a){}var Z=L.performance;if(Z&&Z.now){var Za=Z.now();(L.google_js_reporting_queue=L.google_js_reporting_queue||[]).push({label:"1",type:9,value:Za,uniqueId:"rt."+Math.random()})}if(!("complete"==M.readyState||"loaded"==M.readyState||Ta&&Ta.async)){var $a="gpt-impl-"+Math.random();try{M.write('<script id="'+$a+'" src="'+Xa+'">\x3c/script>'),K._syncTagged_=!0}catch(a){}if(M.getElementById($a))switch(K._loadStarted_=!0,X){case "21060833":var ab=sa();Ma(ab);La(ab);break;case "21060622":case "21060713":La(null)}}if(!K._loadStarted_){switch(X){case "21060833":var bb=sa();Ma(bb);Ka(bb);break;case "21060622":case "21060713":Ka(null)}var cb=M.createElement("script");cb.src=Xa;cb.async=!0;(M.head||M.body||M.documentElement).appendChild(cb);K._loadStarted_=!0}};}).call(this.googletag&&googletag.fifWin?googletag.fifWin.parent:this)
