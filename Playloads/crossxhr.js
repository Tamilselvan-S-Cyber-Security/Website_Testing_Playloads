var FlashHttpRequest_ready;
var FlashHttpRequest_objects;
var FlashHttpRequest_counter;
if (typeof(FlashHttpRequest_counter) == &#39;undefined&#39;){
/*	SWFObject v2.0 

	Copyright (c) 2007 Geoff Stearns, Michael Williams, and Bobby van der Sluis
	This software is released under the MIT License 

*/
var swfobject=function(){var Z=&#34;undefined&#34;,P=&#34;object&#34;,B=&#34;Shockwave Flash&#34;,h=&#34;ShockwaveFlash.ShockwaveFlash&#34;,W=&#34;application/x-shockwave-flash&#34;,K=&#34;SWFObjectExprInst&#34;,G=window,g=document,N=navigator,f=[],H=[],Q=null,L=null,T=null,S=false,C=false;var a=function(){var l=typeof g.getElementById!=Z&amp;&amp;typeof g.getElementsByTagName!=Z&amp;&amp;typeof g.createElement!=Z&amp;&amp;typeof g.appendChild!=Z&amp;&amp;typeof g.replaceChild!=Z&amp;&amp;typeof g.removeChild!=Z&amp;&amp;typeof g.cloneNode!=Z,t=[0,0,0],n=null;if(typeof N.plugins!=Z&amp;&amp;typeof N.plugins[B]==P){n=N.plugins[B].description;if(n){n=n.replace(/^.*\s+(\S+\s+\S+$)/,&#34;$1&#34;);t[0]=parseInt(n.replace(/^(.*)\..*$/,&#34;$1&#34;),10);t[1]=parseInt(n.replace(/^.*\.(.*)\s.*$/,&#34;$1&#34;),10);t[2]=/r/.test(n)?parseInt(n.replace(/^.*r(.*)$/,&#34;$1&#34;),10):0}}else{if(typeof G.ActiveXObject!=Z){var o=null,s=false;try{o=new ActiveXObject(h+&#34;.7&#34;)}catch(k){try{o=new ActiveXObject(h+&#34;.6&#34;);t=[6,0,21];o.AllowScriptAccess=&#34;always&#34;}catch(k){if(t[0]==6){s=true}}if(!s){try{o=new ActiveXObject(h)}catch(k){}}}if(!s&amp;&amp;o){try{n=o.GetVariable(&#34;$version&#34;);if(n){n=n.split(&#34; &#34;)[1].split(&#34;,&#34;);t=[parseInt(n[0],10),parseInt(n[1],10),parseInt(n[2],10)]}}catch(k){}}}}var v=N.userAgent.toLowerCase(),j=N.platform.toLowerCase(),r=/webkit/.test(v)?parseFloat(v.replace(/^.*webkit\/(\d+(\.\d+)?).*$/,&#34;$1&#34;)):false,i=false,q=j?/win/.test(j):/win/.test(v),m=j?/mac/.test(j):/mac/.test(v);/*@cc_on i=true;@if(@_win32)q=true;@elif(@_mac)m=true;@end@*/return{w3cdom:l,pv:t,webkit:r,ie:i,win:q,mac:m}}();var e=function(){if(!a.w3cdom){return }J(I);if(a.ie&amp;&amp;a.win){try{g.write(&#34;
<\/script>");var i=c("__ie_ondomload");if(i){i.onreadystatechange=function(){if(this.readyState=="complete"){this.parentNode.removeChild(this);V()}}}}catch(j){}}if(a.webkit&&typeof g.readyState!=Z){Q=setInterval(function(){if(/loaded|complete/.test(g.readyState)){V()}},10)}if(typeof g.addEventListener!=Z){g.addEventListener("DOMContentLoaded",V,null)}M(V)}();function V(){if(S){return }if(a.ie&&a.win){var m=Y("span");try{var l=g.getElementsByTagName("body")[0].appendChild(m);l.parentNode.removeChild(l)}catch(n){return }}S=true;if(Q){clearInterval(Q);Q=null}var j=f.length;for(var k=0;k<j;k++){f[k]()}}function J(i){if(S){i()}else{f[f.length]=i}}function M(j){if(typeof G.addEventListener!=Z){G.addEventListener("load",j,false)}else{if(typeof g.addEventListener!=Z){g.addEventListener("load",j,false)}else{if(typeof G.attachEvent!=Z){G.attachEvent("onload",j)}else{if(typeof G.onload=="function"){var i=G.onload;G.onload=function(){i();j()}}else{G.onload=j}}}}}function I(){var l=H.length;for(var j=0;j<l;j++){var m=H[j].id;if(a.pv[0]>0){var k=c(m);if(k){H[j].width=k.getAttribute("width")?k.getAttribute("width"):"0";H[j].height=k.getAttribute("height")?k.getAttribute("height"):"0";if(O(H[j].swfVersion)){if(a.webkit&&a.webkit<312){U(k)}X(m,true)}else{if(H[j].expressInstall&&!C&&O("6.0.65")&&(a.win||a.mac)){D(H[j])}else{d(k)}}}}else{X(m,true)}}}function U(m){var k=m.getElementsByTagName(P)[0];if(k){var p=Y("embed"),r=k.attributes;if(r){var o=r.length;for(var n=0;n<o;n++){if(r[n].nodeName.toLowerCase()=="data"){p.setAttribute("src",r[n].nodeValue)}else{p.setAttribute(r[n].nodeName,r[n].nodeValue)}}}var q=k.childNodes;if(q){var s=q.length;for(var l=0;l<s;l++){if(q[l].nodeType==1&&q[l].nodeName.toLowerCase()=="param"){p.setAttribute(q[l].getAttribute("name"),q[l].getAttribute("value"))}}}m.parentNode.replaceChild(p,m)}}function F(i){if(a.ie&&a.win&&O("8.0.0")){G.attachEvent("onunload",function(){var k=c(i);if(k){for(var j in k){if(typeof k[j]=="function"){k[j]=function(){}}}k.parentNode.removeChild(k)}})}}function D(j){C=true;var o=c(j.id);if(o){if(j.altContentId){var l=c(j.altContentId);if(l){L=l;T=j.altContentId}}else{L=b(o)}if(!(/%$/.test(j.width))&&parseInt(j.width,10)<310){j.width="310"}if(!(/%$/.test(j.height))&&parseInt(j.height,10)<137){j.height="137"}g.title=g.title.slice(0,47)+" - Flash Player Installation";var n=a.ie&&a.win?"ActiveX":"PlugIn",k=g.title,m="MMredirectURL="+G.location+"&MMplayerType="+n+"&MMdoctitle="+k,p=j.id;if(a.ie&&a.win&&o.readyState!=4){var i=Y("div");p+="SWFObjectNew";i.setAttribute("id",p);o.parentNode.insertBefore(i,o);o.style.display="none";G.attachEvent("onload",function(){o.parentNode.removeChild(o)})}R({data:j.expressInstall,id:K,width:j.width,height:j.height},{flashvars:m},p)}}function d(j){if(a.ie&&a.win&&j.readyState!=4){var i=Y("div");j.parentNode.insertBefore(i,j);i.parentNode.replaceChild(b(j),i);j.style.display="none";G.attachEvent("onload",function(){j.parentNode.removeChild(j)})}else{j.parentNode.replaceChild(b(j),j)}}function b(n){var m=Y("div");if(a.win&&a.ie){m.innerHTML=n.innerHTML}else{var k=n.getElementsByTagName(P)[0];if(k){var o=k.childNodes;if(o){var j=o.length;for(var l=0;l<j;l++){if(!(o[l].nodeType==1&&o[l].nodeName.toLowerCase()=="param")&&!(o[l].nodeType==8)){m.appendChild(o[l].cloneNode(true))}}}}}return m}function R(AE,AC,q){var p,t=c(q);if(typeof AE.id==Z){AE.id=q}if(a.ie&&a.win){var AD="";for(var z in AE){if(AE[z]!=Object.prototype[z]){if(z=="data"){AC.movie=AE[z]}else{if(z.toLowerCase()=="styleclass"){AD+=' class="'+AE[z]+'"'}else{if(z!="classid"){AD+=" "+z+'="'+AE[z]+'"'}}}}}var AB="";for(var y in AC){if(AC[y]!=Object.prototype[y]){AB+='<param name="'+y+'" value="'+AC[y]+'" />'}}t.outerHTML='<object classid="clsid:D27CDB6E-AE6D-11cf-96B8-444553540000"'+AD+">"+AB+"</object>";F(AE.id);p=c(AE.id)}else{if(a.webkit&&a.webkit<312){var AA=Y("embed");AA.setAttribute("type",W);for(var x in AE){if(AE[x]!=Object.prototype[x]){if(x=="data"){AA.setAttribute("src",AE[x])}else{if(x.toLowerCase()=="styleclass"){AA.setAttribute("class",AE[x])}else{if(x!="classid"){AA.setAttribute(x,AE[x])}}}}}for(var w in AC){if(AC[w]!=Object.prototype[w]){if(w!="movie"){AA.setAttribute(w,AC[w])}}}t.parentNode.replaceChild(AA,t);p=AA}else{var s=Y(P);s.setAttribute("type",W);for(var v in AE){if(AE[v]!=Object.prototype[v]){if(v.toLowerCase()=="styleclass"){s.setAttribute("class",AE[v])}else{if(v!="classid"){s.setAttribute(v,AE[v])}}}}for(var u in AC){if(AC[u]!=Object.prototype[u]&&u!="movie"){E(s,u,AC[u])}}t.parentNode.replaceChild(s,t);p=s}}return p}function E(k,i,j){var l=Y("param");l.setAttribute("name",i);l.setAttribute("value",j);k.appendChild(l)}function c(i){return g.getElementById(i)}function Y(i){return g.createElement(i)}function O(k){var j=a.pv,i=k.split(".");i[0]=parseInt(i[0],10);i[1]=parseInt(i[1],10);i[2]=parseInt(i[2],10);return(j[0]>i[0]||(j[0]==i[0]&&j[1]>i[1])||(j[0]==i[0]&&j[1]==i[1]&&j[2]>=i[2]))?true:false}function A(m,j){if(a.ie&&a.mac){return }var l=g.getElementsByTagName("head")[0],k=Y("style");k.setAttribute("type","text/css");k.setAttribute("media","screen");if(!(a.ie&&a.win)&&typeof g.createTextNode!=Z){k.appendChild(g.createTextNode(m+" {"+j+"}"))}l.appendChild(k);if(a.ie&&a.win&&typeof g.styleSheets!=Z&&g.styleSheets.length>0){var i=g.styleSheets[g.styleSheets.length-1];if(typeof i.addRule==P){i.addRule(m,j)}}}function X(k,i){var j=i?"visible":"hidden";if(S){c(k).style.visibility=j}else{A("#"+k,"visibility:"+j)}}return{registerObject:function(l,i,k){if(!a.w3cdom||!l||!i){return }var j={};j.id=l;j.swfVersion=i;j.expressInstall=k?k:false;H[H.length]=j;X(l,false)},getObjectById:function(l){var i=null;if(a.w3cdom&&S){var j=c(l);if(j){var k=j.getElementsByTagName(P)[0];if(!k||(k&&typeof j.SetVariable!=Z)){i=j}else{if(typeof k.SetVariable!=Z){i=k}}}}return i},embedSWF:function(n,u,r,t,j,m,k,p,s){if(!a.w3cdom||!n||!u||!r||!t||!j){return }r+="";t+="";if(O(j)){X(u,false);var q=(typeof s==P)?s:{};q.data=n;q.width=r;q.height=t;var o=(typeof p==P)?p:{};if(typeof k==P){for(var l in k){if(k[l]!=Object.prototype[l]){if(typeof o.flashvars!=Z){o.flashvars+="&"+l+"="+k[l]}else{o.flashvars=l+"="+k[l]}}}}J(function(){R(q,o,u);if(q.id==u){X(u,true)}})}else{if(m&&!C&&O("6.0.65")&&(a.win||a.mac)){X(u,false);J(function(){var i={};i.id=i.altContentId=u;i.width=r;i.height=t;i.expressInstall=m;D(i)})}}},getFlashPlayerVersion:function(){return{major:a.pv[0],minor:a.pv[1],release:a.pv[2]}},hasFlashPlayerVersion:O,createSWF:function(k,j,i){if(a.w3cdom&&S){return R(k,j,i)}else{return undefined}},createCSS:function(j,i){if(a.w3cdom){A(j,i)}},addDomLoadEvent:J,addLoadEvent:M,getQueryParamValue:function(m){var l=g.location.search||g.location.hash;if(m==null){return l}if(l){var k=l.substring(1).split("&");for(var j=0;j<k.length;j++){if(k[j].substring(0,k[j].indexOf("="))==m){return k[j].substring((k[j].indexOf("=")+1))}}}return""},expressInstallCallback:function(){if(C&&L){var i=c(K);if(i){i.parentNode.replaceChild(L,i);if(T){X(T,true);if(a.ie&&a.win){L.style.display="block"}}L=null;T=null;C=false}}}}}();

////////////////

  //var SWF_URL = "http://www.pliantcode.com/lib/crossxhr.swf"; // set if you want to hardcode path to crossxhr.swf

  FlashHttpRequest_objects = new Object();
  FlashHttpRequest_counter = 0;
  function FlashHttpRequest_(parent) {
    this.parent = parent;
    this.id = FlashHttpRequest_counter++;
    FlashHttpRequest_objects[this.id] = this;
    var gateway;
    this.open = function(method, url) {
      gateway = document.getElementById("FlashHttpRequest_gateway");
      gateway.create(this.id, method, url);
    }
    this.send = function(content) {
      gateway.send(this.id, content);
    }
    this.handler = function(status, data) {
      var obj = this.parent ? parent : this;
      obj.readyState = 4;
      obj.responseText = data;
      obj.status = status;

      var id = this.id;
      setTimeout(function(){  // must release flash
        gateway.finished(id); 
        obj.onreadystatechange.apply(obj); 
      }, 10);
    }
  }
  function FlashHttpRequest_handler(id, status, data) {
    FlashHttpRequest_objects[id].handler(status, data);
  }
  function CrossXHR() {
    var obj;
    var queue = new Array();
    var max_wait = 100;
    var gateway = document.getElementById("FlashHttpRequest_gateway");
    if (gateway && gateway.create)
      if (typeof(FlashHttpRequest_ready) != 'undefined') 
        obj = new FlashHttpRequest_(this);
    if (!obj) {
      
      var self = this;
      queue.push( function() { obj = new FlashHttpRequest_(self) } );
      setTimeout(function(){ self._process_queue() }, 100);
    }
    
    this.open = function(arg1,arg2) {
      if (obj)
        obj.open(arg1,arg2);
      else {
        queue.push( function() { obj.open(arg1,arg2) } );
      }
    }
    this.send = function(arg1) {
      if (obj) {
        obj.send(arg1);
      } else {
        queue.push( function() { 
          obj.send(arg1) } );
      }
    }
    this._process_queue = function() {
      gateway = document.getElementById("FlashHttpRequest_gateway");
      var ok = obj ? true : false;
      if (!ok)
        if (gateway && gateway.create)
          if (typeof(FlashHttpRequest_ready) != 'undefined') 
            ok = true;
      if (!ok) {
        if (max_wait-- > 0)
          setTimeout(function(){ self._process_queue() }, 100);
      } else {
        while (queue.length > 0) {
          var task = queue.shift();
          task.apply(this);
        }
      }
    }
  }
           
  if (typeof(SWF_URL) == 'undefined' || !SWF_URL) {
    var prefix="";
    var tags = document.getElementsByTagName("script");
    for ( var i = 0; i < tags.length; i++ ) {
      var pos = tags[i].src.toLowerCase().indexOf("crossxhr.js")
      if ( pos != -1 ) 
        prefix = tags[i].src.substring(0,pos);
    }
    SWF_URL = prefix+'crossxhr.swf';
  }

  document.write('<span style="position:absolute;top:0;left:0"><span id="FlashHttpRequest_gateway"></span></span>');
	swfobject.embedSWF(SWF_URL, "FlashHttpRequest_gateway", "1", "1", "9.0.0", "expressInstall.swf", {}, {wmode: 'transparent', allowscriptaccess:"always"} );
}
<pre>
</body>
</html>
