(function(a){function b(){}function c(a){A=[a]}function d(a,b,c,d){try{d=a&&a.apply(b.context||b,c)}catch(e){d=!1}return d}function e(a){return/\?/.test(a)?"&":"?"}function D(l){function Y(a){if(!(Q++)){R();K&&(y[M]={s:[a]});G&&(a=G.apply(l,[a]));d(D,l,[a,t]);d(F,l,[l,t])}}function Z(a){if(!(Q++)){R();K&&a!=u&&(y[M]=a);d(E,l,[l,a]);d(F,l,[l,a])}}l=a.extend({},B,l);var D=l.success,E=l.error,F=l.complete,G=l.dataFilter,H=l.callbackParameter,I=l.callback,J=l.cache,K=l.pageCache,L=l.charset,M=l.url,N=l.data,O=l.timeout,P,Q=0,R=b,S,T,U,V,W,X;w&&w(function(a){a.done(D).fail(E);D=a.resolve;E=a.reject}).promise(l);l.abort=function(){!(Q++)&&R()};if(d(l.beforeSend,l,[l])===!1||Q){return l}M=M||h;N=N?typeof N=="string"?N:a.param(N,l.traditional):h;M+=N?e(M)+N:h;H&&(M+=e(M)+encodeURIComponent(H)+"=?");!J&&!K&&(M+=e(M)+"_"+(new Date).getTime()+"=");M=M.replace(/=\?(&|$)/,"="+I+"$1");if(K&&(P=y[M])){P.s?Y(P.s[0]):Z(P)}else{v[I]=c;V=a(s)[0];V.id=k+z++;if(L){V[g]=L}C&&C.version()<11.6?(W=a(s)[0]).text="document.getElementById('"+V.id+"')."+n+"()":V[f]=f;if(p in V){V.htmlFor=V.id;V.event=m}V[o]=V[n]=V[p]=function(a){if(!V[q]||!/i/.test(V[q])){try{V[m]&&V[m]()}catch(b){}a=A;A=0;a?Y(a[0]):Z(i)}};V.src=M;R=function(a){X&&clearTimeout(X);V[p]=V[o]=V[n]=null;x[r](V);W&&x[r](W)};x[j](V,U=x.firstChild);W&&x[j](W,U);X=O>0&&setTimeout(function(){Z(u)},O)}return l}var f="async",g="charset",h="",i="error",j="insertBefore",k="_jqjsp",l="on",m=l+"click",n=l+i,o=l+"load",p=l+"readystatechange",q="readyState",r="removeChild",s="<script>",t="success",u="timeout",v=window,w=a.Deferred,x=a("head")[0]||document.documentElement,y={},z=0,A,B={callback:k,url:location.href},C=v.opera;D.setup=function(b){a.extend(B,b)};a.jsonp=D})(jQuery)
function dianomiUnitCallback(position, said, divID, addClass, addStyle){
	this.initialize = function(containerID){
		// Inject the ad html
		jQuery(function($){
			var url = encodeURIComponent(document.location); 
			$.jsonp({
				url: "//www.dianomi.com/smartads.epl?id="+said+"&callback=jsonp&url="+url,
				callback: "jsonp",
				success: function(jsonDianomiAd) {
					$("#"+divID).append("<div class='dianomiContent "+addClass+"' style='display: block; "+addStyle+"'>" + jsonDianomiAd + "<a href='//www.dianomi.com/cms/register-interest/?utm_source=network&amp;utm_medium=smartad_sponsor_link&url="+url+"' style='color: #999; text-decoration: none; display:block; float:right; margin-top: -20px;' target='_blank' title='dianomi'><img src='//www.dianomi.com/img/uploads/VfG99MCoyKoAAGpDgiIAAAAI.png' style='border: none; outline: none; width: 55px; height: auto;'></a></div>");
				}
			})
		});
	}
}

