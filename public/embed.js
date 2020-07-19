/*
	Modified script from https://cdn.changelog.com/embed.js
	Changes:
	- added `title` attribute to an iframe;
	- added `loading` attribute to an iframe;
	- wrapped `window.postMessage` into a try...catch statement.
*/
!function(e){function t(t){var r=t.getAttribute("data-src"),i=t.getAttribute("data-theme")||"night",n=e.createElement("iframe");n.setAttribute("src",r+"?theme="+i+"&referrer="+e.location.href),n.setAttribute("width","100%"),n.setAttribute("height","220"),n.setAttribute("scrolling","no"),n.setAttribute("frameborder","no"),n.setAttribute("title","Podcast"),n.setAttribute("loading","lazy"),t.parentNode.replaceChild(n,t),this.id=+new Date,this.src=n.src,this.iframe=n}var r="https://changelog.com",i=e.getElementsByClassName("changelog-episode"),n=[],a=function(e,t){try{t.context="player.js",t.version="0.0.11",t.listener=e.id,e.iframe.contentWindow.postMessage(JSON.stringify(t),r)}catch{}};window.addEventListener("message",function(e){if(e.origin!==r)return!1;var t=JSON.parse(e.data);if("player.js"!==t.context)return!1;if("ready"===t.event)for(var i=n.length-1;i>=0;i--)n[i].src===t.value.src&&a(n[i],{method:"addEventListener",value:"play"});if("play"===t.event)for(i=n.length-1;i>=0;i--)n[i].id!==t.listener&&a(n[i],{method:"pause"})});for(var s=i.length-1;s>-1;s--)n.push(new t(i[s]))}(document);
