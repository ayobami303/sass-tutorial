(function(g){var window=this;var D4=function(a,b,c){var d=b.va();g.N(a.element,"ytp-suggestion-set",!!d.videoId);var e=b.getPlaylistId();c=b.jc(c?c:"mqdefault.jpg");var f=b instanceof g.VB&&b.lengthSeconds?g.OM(b.lengthSeconds):null,k=!!e;e=k&&"RD"==(new g.FK(e.substr(0,2),e.substr(2))).type;var l=b instanceof g.VB?b.sa:null;d={title:b.title,author:b.author,author_and_views:d.shortViewCount?b.author+" \u2022 "+d.shortViewCount:b.author,aria_label:b.lj||g.zN("Watch $TITLE",{TITLE:b.title}),duration:f,url:b.fi(),is_live:l,is_list:k,
is_mix:e,background:c?"background-image: url("+c+")":""};b instanceof g.HK&&(d.playlist_length=b.getLength());a.update(d)},E4=function(a,b){g.X.call(this,{F:"div",
X:["html5-endscreen","ytp-player-content",b||"base-endscreen"]});this.player=a;this.created=!1},F4=function(a){g.X.call(this,{F:"div",
X:["ytp-upnext","ytp-player-content"],N:{"aria-label":"{{aria_label}}"},K:[{F:"div",I:"ytp-cued-thumbnail-overlay-image",N:{style:"{{background}}"}},{F:"span",I:"ytp-upnext-top",K:[{F:"span",I:"ytp-upnext-header",W:"Up Next"},{F:"span",I:"ytp-upnext-title",W:"{{title}}"},{F:"span",I:"ytp-upnext-author",W:"{{author}}"}]},{F:"a",I:"ytp-upnext-autoplay-icon",N:{role:"button",href:"{{url}}","aria-label":"Play next video"},K:[{F:"svg",N:{height:"100%",version:"1.1",viewBox:"0 0 72 72",width:"100%"},K:[{F:"circle",
I:"ytp-svg-autoplay-circle",N:{cx:"36",cy:"36",fill:"#fff","fill-opacity":"0.3",r:"31.5"}},{F:"circle",I:"ytp-svg-autoplay-ring",N:{cx:"-36",cy:"36","fill-opacity":"0",r:"33.5",stroke:"#FFFFFF","stroke-dasharray":"211","stroke-dashoffset":"-211","stroke-width":"4",transform:"rotate(-90)"}},{F:"path",I:"ytp-svg-fill",N:{d:"M 24,48 41,36 24,24 V 48 z M 44,24 v 24 h 4 V 24 h -4 z"}}]}]},{F:"span",I:"ytp-upnext-bottom",K:[{F:"span",I:"ytp-upnext-cancel"},{F:"span",I:"ytp-upnext-paused",W:"Autoplay is paused"}]}]});
this.C=null;var b=this.u["ytp-upnext-cancel"];this.C=new g.X({F:"button",X:["ytp-upnext-cancel-button","ytp-button"],N:{tabindex:"0","aria-label":"Cancel autoplay"},W:"Cancel"});g.B(this,this.C);this.C.ha("click",this.bJ,this);this.C.o(b);this.w=a;this.L=this.u["ytp-svg-autoplay-ring"];this.G=this.D=this.A=this.B=null;this.H=new g.J(this.Nl,5E3,this);g.B(this,this.H);this.J=0;this.M(this.u["ytp-upnext-autoplay-icon"],"click",this.LK);this.zy();this.M(a,"autonavvisibility",this.zy);this.M(a,"mdxnowautoplaying",
this.dK);this.M(a,"mdxautoplaycanceled",this.eK);this.M(a,"mdxautoplayupnext",this.VA);3==this.w.getPresentingPlayerType()&&(a=(a=g.YK(g.RK(this.w)))?a.xD():null)&&this.VA(a)},G4=function(a,b){if(!a.A){g.zo("a11y-announce","Up Next "+a.B.title);
a.J=(0,g.Jq)();a.A=new g.J((0,g.x)(a.Mo,a,b),25);a.Mo(b);var c=b||g.T(a.w.O().experiments,"autoplay_time")||1E4;a.w.ma("onAutonavCoundownStarted",c)}g.dn(a.element,"ytp-upnext-autoplay-paused")},I4=function(a){H4(a);
a.J=(0,g.Jq)();a.Mo();g.L(a.element,"ytp-upnext-autoplay-paused")},H4=function(a){a.A&&(a.A.dispose(),a.A=null)},J4=function(a,b){b=void 0===b?!1:b;
if(g.S(a.w.O().experiments,"autonav_notifications")&&b&&window.Notification&&document.hasFocus){var c=Notification.permission;"default"==c?Notification.requestPermission():"granted"!=c||document.hasFocus()||(c=a.B.va(),a.Nl(),a.D=new Notification("Up Next",{body:c.title,icon:c.jc()}),a.G=a.M(a.D,"click",a.CK),a.H.start())}H4(a);a.w.nextVideo(!1,b)},K4=function(a){E4.call(this,a,"subscribecard-endscreen");
var b=a.getVideoData();this.w=new g.X({F:"div",I:"ytp-subscribe-card",K:[{F:"img",I:"ytp-author-image",N:{src:b.yd}},{F:"div",I:"ytp-subscribe-card-right",K:[{F:"div",I:"ytp-author-name",W:b.author},{F:"div",I:"html5-subscribe-button-container"}]}]});g.B(this,this.w);this.w.o(this.element);this.A=new g.jR("Subscribe",null,"Unsubscribe",null,!0,!1,b.Pf,b.subscribed,"trailer-endscreen",null,null,a);g.B(this,this.A);this.A.o(this.w.u["html5-subscribe-button-container"]);this.hide()},L4=function(a){var b=
a.O(),c=g.Gs||g.nh?{style:"will-change: opacity"}:void 0,d=b.u,e=["ytp-videowall-still"];
b.o&&e.push("ytp-videowall-show-text");g.X.call(this,{F:"a",X:e,N:{href:"{{url}}",target:d?b.A:"","aria-label":"{{aria_label}}","data-is-live":"{{is_live}}","data-is-list":"{{is_list}}","data-is-mix":"{{is_mix}}"},K:[{F:"div",I:"ytp-videowall-still-image",N:{style:"{{background}}"}},{F:"span",I:"ytp-videowall-still-info",K:[{F:"span",I:"ytp-videowall-still-info-bg",K:[{F:"span",I:"ytp-videowall-still-info-content",N:c,K:[{F:"span",I:"ytp-videowall-still-info-title",W:"{{title}}"},{F:"span",I:"ytp-videowall-still-info-author",
W:"{{author_and_views}}"},{F:"span",I:"ytp-videowall-still-info-live",W:"Live"},{F:"span",I:"ytp-videowall-still-info-duration",W:"{{duration}}"}]}]}]},{F:"span",X:["ytp-videowall-still-listlabel-regular","ytp-videowall-still-listlabel"],K:[{F:"span",I:"ytp-videowall-still-listlabel-icon"},"Playlist",{F:"span",I:"ytp-videowall-still-listlabel-length",K:[" (",{F:"span",W:"{{playlist_length}}"},")"]}]},{F:"span",X:["ytp-videowall-still-listlabel-mix","ytp-videowall-still-listlabel"],K:[{F:"span",I:"ytp-videowall-still-listlabel-mix-icon"},
"Mix",{F:"span",I:"ytp-videowall-still-listlabel-length",W:" (50+)"}]}]});this.C=d;this.w=a;this.A=null;this.B=new g.R(this);g.B(this,this.B);this.ha("click",this.G);this.ha("keypress",this.H);this.B.M(a,"videodatachange",this.D);g.rL(a,this.element,this);this.D()},M4=function(a){g.tL(a.w,a.element);
var b=a.A.va().videoId,c=a.A.getPlaylistId();g.sU(a.w.app,b,a.A.Gb,c,void 0,void 0)},N4=function(a){E4.call(this,a,"videowall-endscreen");
this.G=a;this.D=0;this.A=[];this.H=this.T=this.C=null;this.J=this.V=!1;this.U=null;this.B=new g.R(this);g.B(this,this.B);this.L=new g.J(g.Oa(g.L,this.element,"ytp-show-tiles"),0);g.B(this,this.L);var b=new g.X({F:"button",X:["ytp-button","ytp-endscreen-previous"],N:{"aria-label":"Previous"},K:[g.WM()]});g.B(this,b);b.o(this.element);b.ha("click",this.hG,this);this.P=new g.jK({F:"div",I:"ytp-endscreen-content"});g.B(this,this.P);this.P.o(this.element);b=new g.X({F:"button",X:["ytp-button","ytp-endscreen-next"],
N:{"aria-label":"Next"},K:[g.XM()]});g.B(this,b);b.o(this.element);b.ha("click",this.gG,this);this.w=new F4(a);g.B(this,this.w);g.oL(this.player,this.w.element,4);this.hide()},O4=function(a){return g.pL(a.player)&&a.ou()&&!a.H},P4=function(a,b){return(0,g.H)(b.suggestions,function(c){c=g.AN(a.G.O(),c);
g.B(a,c);return c})},Q4=function(a){var b=a.Uq();
b!=a.V&&(a.V=b,a.player.R("autonavvisibility"))},S4=function(a){g.EQ.call(this,a);
this.o=null;this.u=new g.R(this);g.B(this,this.u);this.w=a.O();R4(a)?this.o=new N4(this.player):this.w.Ja?this.o=new K4(this.player):this.o=new E4(this.player);g.B(this,this.o);g.oL(this.player,this.o.element,4);this.Uz();this.u.M(a,"videodatachange",this.Uz,this);this.u.M(a,g.kF("endscreen"),this.mF,this);this.u.M(a,"crx_endscreen",this.nF,this)},R4=function(a){a=a.O();
return a.oa&&!a.Ja};
g.r(E4,g.X);E4.prototype.create=function(){this.created=!0};
E4.prototype.destroy=function(){this.created=!1};
E4.prototype.ou=function(){return!1};
E4.prototype.Uq=function(){return!1};g.r(F4,g.X);g.h=F4.prototype;g.h.Nl=function(){this.D&&(this.H.stop(),this.Ua(this.G),this.G=null,this.D.close(),this.D=null)};
g.h.zy=function(){g.nK(this,g.SK(this.w))};
g.h.CK=function(){window.focus();this.Nl()};
g.h.hide=function(){g.X.prototype.hide.call(this)};
g.h.Mo=function(a){a=a||g.T(this.w.O().experiments,"autoplay_time")||1E4;var b=Math.min((0,g.Jq)()-this.J,a);a=Math.min(b/a,1);this.L.setAttribute("stroke-dashoffset",-211*(a+1));1<=a&&3!=this.w.getPresentingPlayerType()?J4(this,!0):this.A&&this.A.start()};
g.h.LK=function(a){!g.Ud(this.C.element,g.Zq(a))&&g.HN(a,this.w)&&J4(this)};
g.h.bJ=function(){g.UK(this.w,!0)};
g.h.dK=function(a){this.w.getPresentingPlayerType();this.show();G4(this,a)};
g.h.VA=function(a){this.w.getPresentingPlayerType();this.B&&this.B.va().videoId==a.va().videoId||(this.B=a,D4(this,a,"hqdefault.jpg"))};
g.h.eK=function(){this.w.getPresentingPlayerType();H4(this);this.hide()};
g.h.Y=function(){H4(this);this.Nl();g.X.prototype.Y.call(this)};g.r(K4,E4);g.r(L4,g.X);L4.prototype.G=function(a){g.HN(a,this.w,this.C,this.A.Gb||void 0)&&M4(this)};
L4.prototype.H=function(a){switch(a.keyCode){case 13:case 32:g.dr(a)||(M4(this),g.cr(a))}};
L4.prototype.D=function(){var a=this.w.getVideoData(),b=this.w.O();this.C=a.Zb?!1:b.u};g.r(N4,E4);g.h=N4.prototype;g.h.create=function(){E4.prototype.create.call(this);var a=this.player.getVideoData();a&&(this.C=P4(this,a),this.T=a);this.Nf();this.B.M(this.player,"appresize",this.Nf);this.B.M(this.player,"onVideoAreaChange",this.Nf);this.B.M(this.player,"videodatachange",this.iG);this.B.M(this.player,"autonavchange",this.Vq);this.B.M(this.player,"autonavcancel",this.fG);a=this.T.autonavState;a!=this.U&&this.Vq(a);this.B.M(this.element,"transitionend",this.cM)};
g.h.destroy=function(){g.Os(this.B);g.ee(this.A);this.A=[];this.C=null;E4.prototype.destroy.call(this);g.dn(this.element,"ytp-show-tiles");this.L.stop();this.U=this.T.autonavState};
g.h.ou=function(){return 1!=this.T.autonavState};
g.h.show=function(){E4.prototype.show.call(this);g.dn(this.element,"ytp-show-tiles");this.player.O().o?g.Um(this.L):this.L.start();(this.J||this.H&&this.H!=this.T.clientPlaybackNonce)&&g.UK(this.player,!1);O4(this)?(Q4(this),2==this.T.autonavState?g.S(this.player.O().experiments,"fast_autonav_in_background")&&3==this.player.getVisibilityState()?J4(this.w,!0):G4(this.w):3==this.T.autonavState&&I4(this.w)):(g.UK(this.player,!0),Q4(this))};
g.h.hide=function(){E4.prototype.hide.call(this);I4(this.w);Q4(this)};
g.h.cM=function(a){g.Zq(a)==this.element&&this.Nf()};
g.h.Nf=function(){if(this.C&&this.C.length){g.L(this.element,"ytp-endscreen-paginate");var a=g.fL(this.G,!0,this.G.isFullscreen()),b=g.DK(this.G);b&&(b=b.Ub()?48:32,a.width-=2*b);var c=a.width/a.height,d=96/54,e=b=2,f=Math.max(a.width/96,2),k=Math.max(a.height/54,2),l=this.C.length,m=Math.pow(2,2);var n=l*m+(Math.pow(2,2)-m);n+=Math.pow(2,2)-m;for(n-=m;0<n&&(b<f||e<k);){var q=b/2,t=e/2,u=b<=f-2&&n>=t*m,z=e<=k-2&&n>=q*m;if((q+1)/t*d/c>c/(q/(t+1)*d)&&z)n-=q*m,e+=2;else if(u)n-=t*m,b+=2;else if(z)n-=
q*m,e+=2;else break}d=!1;n>=3*m&&6>=l*m-n&&(4<=e||4<=b)&&(d=!0);m=96*b;n=54*e;c=m/n<c?a.height/n:a.width/m;c=Math.min(c,2);m*=c;n*=c;m*=g.kd(a.width/m||1,1,1.21);n*=g.kd(a.height/n||1,1,1.21);m=Math.floor(Math.min(a.width,m));n=Math.floor(Math.min(a.height,n));a=this.P.element;g.Dh(a,m,n);g.kh(a,{marginLeft:m/-2+"px",marginTop:n/-2+"px"});c=this.w;f=this.C[0];c.B=f;D4(c,f,"hqdefault.jpg");g.N(this.element,"ytp-endscreen-takeover",O4(this));Q4(this);m+=4;n+=4;for(f=c=0;f<b;f++)for(k=0;k<e;k++)if(q=
c,t=0,d&&f>=b-2&&k>=e-2?t=1:0==k%2&&0==f%2&&(2>k&&2>f?0==k&&0==f&&(t=2):t=2),q=g.ld(q+this.D,l),0!=t){u=this.A[c];u||(u=new L4(this.player),this.A[c]=u,a.appendChild(u.element));z=Math.floor(n*k/e);var C=Math.floor(m*f/b),D=Math.floor(n*(k+t)/e)-z-4,G=Math.floor(m*(f+t)/b)-C-4;g.th(u.element,C,z);g.Dh(u.element,G,D);g.kh(u.element,"transitionDelay",(k+f)/20+"s");g.N(u.element,"ytp-videowall-still-mini",1==t);g.N(u.element,"ytp-videowall-still-large",2<t);t=u;q=this.C[q];t.A!=q&&(t.A=q,D4(t,q,g.bn(t.element,
"ytp-videowall-still-large")?"hqdefault.jpg":"mqdefault.jpg"),(q=(q=q.Gb)&&q.itct)&&g.sL(t.w,t.element,q));c++}g.N(this.element,"ytp-endscreen-paginate",c<l);for(b=this.A.length-1;b>=c;b--)e=this.A[b],g.Qd(e.element),g.de(e);this.A.length=c}};
g.h.iG=function(){var a=this.player.getVideoData();this.T!=a&&(this.D=0,this.C=P4(this,a),this.T=a,this.Nf())};
g.h.gG=function(){this.D+=this.A.length;this.Nf()};
g.h.hG=function(){this.D-=this.A.length;this.Nf()};
g.h.DE=function(){return!!this.w.A};
g.h.Vq=function(a){1==a?(this.J=!1,this.H=this.T.clientPlaybackNonce,H4(this.w),this.Ha()&&this.Nf()):(this.J=!0,this.Ha()&&O4(this)&&(2==a?G4(this.w):3==a&&I4(this.w)))};
g.h.fG=function(a){if(a){for(a=0;a<this.A.length;a++)g.uL(this.G,this.A[a].element,!0);this.Vq(1)}else this.H=null,this.J=!1;this.Nf()};
g.h.Uq=function(){return this.Ha()&&O4(this)};g.r(S4,g.EQ);g.h=S4.prototype;g.h.Ww=function(){var a=this.player.getVideoData(),b=!!(a&&a.suggestions&&a.suggestions.length);b=!R4(this.player)||b;a=a.Qh||g.Rx(a.Na);var c=g.MT(this.player.app);return b&&!a&&!c};
g.h.Vw=function(){return this.o.Uq()};
g.h.vE=function(){return this.Vw()?this.o.DE():!1};
g.h.Y=function(){g.YR(this.player.app,"endscreen",void 0);g.EQ.prototype.Y.call(this)};
g.h.load=function(){g.EQ.prototype.load.call(this);this.o.show()};
g.h.unload=function(){g.EQ.prototype.unload.call(this);this.o.hide();this.o.destroy()};
g.h.mF=function(a){this.Ww()&&(this.o.created||this.o.create(),"load"==a.getId()&&this.load())};
g.h.nF=function(a){"load"==a.getId()&&this.loaded&&this.unload()};
g.h.Uz=function(){g.YR(this.player.app,"endscreen",void 0);var a=this.player.getVideoData();a=new g.hF(Math.max(1E3*(a.lengthSeconds-10),0),0x8000000000000,{id:"preload",namespace:"endscreen"});g.B(this,a);var b=new g.hF(0x8000000000000,0x8000000000000,{id:"load",priority:6,namespace:"endscreen"});g.B(this,b);g.kL(this.player,[a,b])};g.UQ.endscreen=S4;})(_yt_player);