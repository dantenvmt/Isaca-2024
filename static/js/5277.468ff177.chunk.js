(self.webpackChunkai=self.webpackChunkai||[]).push([[5277],{446:function(t){t.exports=function(){"use strict";var t=1e3,e=6e4,n=36e5,r="millisecond",a="second",i="minute",s="hour",u="day",o="week",c="month",f="quarter",h="year",d="date",l="Invalid Date",$=/^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/,m=/\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g,M={name:"en",weekdays:"Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),months:"January_February_March_April_May_June_July_August_September_October_November_December".split("_"),ordinal:function(t){var e=["th","st","nd","rd"],n=t%100;return"["+t+(e[(n-20)%10]||e[n]||e[0])+"]"}},y=function(t,e,n){var r=String(t);return!r||r.length>=e?t:""+Array(e+1-r.length).join(n)+t},w={s:y,z:function(t){var e=-t.utcOffset(),n=Math.abs(e),r=Math.floor(n/60),a=n%60;return(e<=0?"+":"-")+y(r,2,"0")+":"+y(a,2,"0")},m:function t(e,n){if(e.date()<n.date())return-t(n,e);var r=12*(n.year()-e.year())+(n.month()-e.month()),a=e.clone().add(r,c),i=n-a<0,s=e.clone().add(r+(i?-1:1),c);return+(-(r+(n-a)/(i?a-s:s-a))||0)},a:function(t){return t<0?Math.ceil(t)||0:Math.floor(t)},p:function(t){return{M:c,y:h,w:o,d:u,D:d,h:s,m:i,s:a,ms:r,Q:f}[t]||String(t||"").toLowerCase().replace(/s$/,"")},u:function(t){return void 0===t}},D="en",v={};v[D]=M;var g="$isDayjsObject",_=function(t){return t instanceof k||!(!t||!t[g])},p=function t(e,n,r){var a;if(!e)return D;if("string"==typeof e){var i=e.toLowerCase();v[i]&&(a=i),n&&(v[i]=n,a=i);var s=e.split("-");if(!a&&s.length>1)return t(s[0])}else{var u=e.name;v[u]=e,a=u}return!r&&a&&(D=a),a||!r&&D},S=function(t,e){if(_(t))return t.clone();var n="object"==typeof e?e:{};return n.date=t,n.args=arguments,new k(n)},Y=w;Y.l=p,Y.i=_,Y.w=function(t,e){return S(t,{locale:e.$L,utc:e.$u,x:e.$x,$offset:e.$offset})};var k=function(){function M(t){this.$L=p(t.locale,null,!0),this.parse(t),this.$x=this.$x||t.x||{},this[g]=!0}var y=M.prototype;return y.parse=function(t){this.$d=function(t){var e=t.date,n=t.utc;if(null===e)return new Date(NaN);if(Y.u(e))return new Date;if(e instanceof Date)return new Date(e);if("string"==typeof e&&!/Z$/i.test(e)){var r=e.match($);if(r){var a=r[2]-1||0,i=(r[7]||"0").substring(0,3);return n?new Date(Date.UTC(r[1],a,r[3]||1,r[4]||0,r[5]||0,r[6]||0,i)):new Date(r[1],a,r[3]||1,r[4]||0,r[5]||0,r[6]||0,i)}}return new Date(e)}(t),this.init()},y.init=function(){var t=this.$d;this.$y=t.getFullYear(),this.$M=t.getMonth(),this.$D=t.getDate(),this.$W=t.getDay(),this.$H=t.getHours(),this.$m=t.getMinutes(),this.$s=t.getSeconds(),this.$ms=t.getMilliseconds()},y.$utils=function(){return Y},y.isValid=function(){return!(this.$d.toString()===l)},y.isSame=function(t,e){var n=S(t);return this.startOf(e)<=n&&n<=this.endOf(e)},y.isAfter=function(t,e){return S(t)<this.startOf(e)},y.isBefore=function(t,e){return this.endOf(e)<S(t)},y.$g=function(t,e,n){return Y.u(t)?this[e]:this.set(n,t)},y.unix=function(){return Math.floor(this.valueOf()/1e3)},y.valueOf=function(){return this.$d.getTime()},y.startOf=function(t,e){var n=this,r=!!Y.u(e)||e,f=Y.p(t),l=function(t,e){var a=Y.w(n.$u?Date.UTC(n.$y,e,t):new Date(n.$y,e,t),n);return r?a:a.endOf(u)},$=function(t,e){return Y.w(n.toDate()[t].apply(n.toDate("s"),(r?[0,0,0,0]:[23,59,59,999]).slice(e)),n)},m=this.$W,M=this.$M,y=this.$D,w="set"+(this.$u?"UTC":"");switch(f){case h:return r?l(1,0):l(31,11);case c:return r?l(1,M):l(0,M+1);case o:var D=this.$locale().weekStart||0,v=(m<D?m+7:m)-D;return l(r?y-v:y+(6-v),M);case u:case d:return $(w+"Hours",0);case s:return $(w+"Minutes",1);case i:return $(w+"Seconds",2);case a:return $(w+"Milliseconds",3);default:return this.clone()}},y.endOf=function(t){return this.startOf(t,!1)},y.$set=function(t,e){var n,o=Y.p(t),f="set"+(this.$u?"UTC":""),l=(n={},n[u]=f+"Date",n[d]=f+"Date",n[c]=f+"Month",n[h]=f+"FullYear",n[s]=f+"Hours",n[i]=f+"Minutes",n[a]=f+"Seconds",n[r]=f+"Milliseconds",n)[o],$=o===u?this.$D+(e-this.$W):e;if(o===c||o===h){var m=this.clone().set(d,1);m.$d[l]($),m.init(),this.$d=m.set(d,Math.min(this.$D,m.daysInMonth())).$d}else l&&this.$d[l]($);return this.init(),this},y.set=function(t,e){return this.clone().$set(t,e)},y.get=function(t){return this[Y.p(t)]()},y.add=function(r,f){var d,l=this;r=Number(r);var $=Y.p(f),m=function(t){var e=S(l);return Y.w(e.date(e.date()+Math.round(t*r)),l)};if($===c)return this.set(c,this.$M+r);if($===h)return this.set(h,this.$y+r);if($===u)return m(1);if($===o)return m(7);var M=(d={},d[i]=e,d[s]=n,d[a]=t,d)[$]||1,y=this.$d.getTime()+r*M;return Y.w(y,this)},y.subtract=function(t,e){return this.add(-1*t,e)},y.format=function(t){var e=this,n=this.$locale();if(!this.isValid())return n.invalidDate||l;var r=t||"YYYY-MM-DDTHH:mm:ssZ",a=Y.z(this),i=this.$H,s=this.$m,u=this.$M,o=n.weekdays,c=n.months,f=n.meridiem,h=function(t,n,a,i){return t&&(t[n]||t(e,r))||a[n].slice(0,i)},d=function(t){return Y.s(i%12||12,t,"0")},$=f||function(t,e,n){var r=t<12?"AM":"PM";return n?r.toLowerCase():r};return r.replace(m,(function(t,r){return r||function(t){switch(t){case"YY":return String(e.$y).slice(-2);case"YYYY":return Y.s(e.$y,4,"0");case"M":return u+1;case"MM":return Y.s(u+1,2,"0");case"MMM":return h(n.monthsShort,u,c,3);case"MMMM":return h(c,u);case"D":return e.$D;case"DD":return Y.s(e.$D,2,"0");case"d":return String(e.$W);case"dd":return h(n.weekdaysMin,e.$W,o,2);case"ddd":return h(n.weekdaysShort,e.$W,o,3);case"dddd":return o[e.$W];case"H":return String(i);case"HH":return Y.s(i,2,"0");case"h":return d(1);case"hh":return d(2);case"a":return $(i,s,!0);case"A":return $(i,s,!1);case"m":return String(s);case"mm":return Y.s(s,2,"0");case"s":return String(e.$s);case"ss":return Y.s(e.$s,2,"0");case"SSS":return Y.s(e.$ms,3,"0");case"Z":return a}return null}(t)||a.replace(":","")}))},y.utcOffset=function(){return 15*-Math.round(this.$d.getTimezoneOffset()/15)},y.diff=function(r,d,l){var $,m=this,M=Y.p(d),y=S(r),w=(y.utcOffset()-this.utcOffset())*e,D=this-y,v=function(){return Y.m(m,y)};switch(M){case h:$=v()/12;break;case c:$=v();break;case f:$=v()/3;break;case o:$=(D-w)/6048e5;break;case u:$=(D-w)/864e5;break;case s:$=D/n;break;case i:$=D/e;break;case a:$=D/t;break;default:$=D}return l?$:Y.a($)},y.daysInMonth=function(){return this.endOf(c).$D},y.$locale=function(){return v[this.$L]},y.locale=function(t,e){if(!t)return this.$L;var n=this.clone(),r=p(t,e,!0);return r&&(n.$L=r),n},y.clone=function(){return Y.w(this.$d,this)},y.toDate=function(){return new Date(this.valueOf())},y.toJSON=function(){return this.isValid()?this.toISOString():null},y.toISOString=function(){return this.$d.toISOString()},y.toString=function(){return this.$d.toUTCString()},M}(),b=k.prototype;return S.prototype=b,[["$ms",r],["$s",a],["$m",i],["$H",s],["$W",u],["$M",c],["$y",h],["$D",d]].forEach((function(t){b[t[1]]=function(e){return this.$g(e,t[0],t[1])}})),S.extend=function(t,e){return t.$i||(t(e,k,S),t.$i=!0),S},S.locale=p,S.isDayjs=_,S.unix=function(t){return S(1e3*t)},S.en=v[D],S.Ls=v,S.p={},S}()},5277:function(t,e,n){t.exports=function(t){"use strict";function e(t){return t&&"object"==typeof t&&"default"in t?t:{default:t}}var n=e(t),r={name:"rw",weekdays:"Ku Cyumweru_Kuwa Mbere_Kuwa Kabiri_Kuwa Gatatu_Kuwa Kane_Kuwa Gatanu_Kuwa Gatandatu".split("_"),months:"Mutarama_Gashyantare_Werurwe_Mata_Gicurasi_Kamena_Nyakanga_Kanama_Nzeri_Ukwakira_Ugushyingo_Ukuboza".split("_"),relativeTime:{future:"mu %s",past:"%s",s:"amasegonda",m:"Umunota",mm:"%d iminota",h:"isaha",hh:"%d amasaha",d:"Umunsi",dd:"%d iminsi",M:"ukwezi",MM:"%d amezi",y:"umwaka",yy:"%d imyaka"},formats:{LT:"HH:mm",LTS:"HH:mm:ss",L:"DD/MM/YYYY",LL:"D MMMM YYYY",LLL:"D MMMM YYYY HH:mm",LLLL:"dddd, D MMMM YYYY HH:mm"},ordinal:function(t){return t}};return n.default.locale(r,null,!0),r}(n(446))}}]);
//# sourceMappingURL=5277.468ff177.chunk.js.map