(self.webpackChunkai=self.webpackChunkai||[]).push([[8988],{446:function(t){t.exports=function(){"use strict";var t=1e3,e=6e4,r=36e5,n="millisecond",s="second",i="minute",a="hour",u="day",o="week",c="month",f="quarter",h="year",d="date",l="Invalid Date",m=/^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/,$=/\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g,M={name:"en",weekdays:"Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),months:"January_February_March_April_May_June_July_August_September_October_November_December".split("_"),ordinal:function(t){var e=["th","st","nd","rd"],r=t%100;return"["+t+(e[(r-20)%10]||e[r]||e[0])+"]"}},_=function(t,e,r){var n=String(t);return!n||n.length>=e?t:""+Array(e+1-n.length).join(r)+t},y={s:_,z:function(t){var e=-t.utcOffset(),r=Math.abs(e),n=Math.floor(r/60),s=r%60;return(e<=0?"+":"-")+_(n,2,"0")+":"+_(s,2,"0")},m:function t(e,r){if(e.date()<r.date())return-t(r,e);var n=12*(r.year()-e.year())+(r.month()-e.month()),s=e.clone().add(n,c),i=r-s<0,a=e.clone().add(n+(i?-1:1),c);return+(-(n+(r-s)/(i?s-a:a-s))||0)},a:function(t){return t<0?Math.ceil(t)||0:Math.floor(t)},p:function(t){return{M:c,y:h,w:o,d:u,D:d,h:a,m:i,s:s,ms:n,Q:f}[t]||String(t||"").toLowerCase().replace(/s$/,"")},u:function(t){return void 0===t}},p="en",v={};v[p]=M;var D="$isDayjsObject",g=function(t){return t instanceof Y||!(!t||!t[D])},S=function t(e,r,n){var s;if(!e)return p;if("string"==typeof e){var i=e.toLowerCase();v[i]&&(s=i),r&&(v[i]=r,s=i);var a=e.split("-");if(!s&&a.length>1)return t(a[0])}else{var u=e.name;v[u]=e,s=u}return!n&&s&&(p=s),s||!n&&p},k=function(t,e){if(g(t))return t.clone();var r="object"==typeof e?e:{};return r.date=t,r.args=arguments,new Y(r)},w=y;w.l=S,w.i=g,w.w=function(t,e){return k(t,{locale:e.$L,utc:e.$u,x:e.$x,$offset:e.$offset})};var Y=function(){function M(t){this.$L=S(t.locale,null,!0),this.parse(t),this.$x=this.$x||t.x||{},this[D]=!0}var _=M.prototype;return _.parse=function(t){this.$d=function(t){var e=t.date,r=t.utc;if(null===e)return new Date(NaN);if(w.u(e))return new Date;if(e instanceof Date)return new Date(e);if("string"==typeof e&&!/Z$/i.test(e)){var n=e.match(m);if(n){var s=n[2]-1||0,i=(n[7]||"0").substring(0,3);return r?new Date(Date.UTC(n[1],s,n[3]||1,n[4]||0,n[5]||0,n[6]||0,i)):new Date(n[1],s,n[3]||1,n[4]||0,n[5]||0,n[6]||0,i)}}return new Date(e)}(t),this.init()},_.init=function(){var t=this.$d;this.$y=t.getFullYear(),this.$M=t.getMonth(),this.$D=t.getDate(),this.$W=t.getDay(),this.$H=t.getHours(),this.$m=t.getMinutes(),this.$s=t.getSeconds(),this.$ms=t.getMilliseconds()},_.$utils=function(){return w},_.isValid=function(){return!(this.$d.toString()===l)},_.isSame=function(t,e){var r=k(t);return this.startOf(e)<=r&&r<=this.endOf(e)},_.isAfter=function(t,e){return k(t)<this.startOf(e)},_.isBefore=function(t,e){return this.endOf(e)<k(t)},_.$g=function(t,e,r){return w.u(t)?this[e]:this.set(r,t)},_.unix=function(){return Math.floor(this.valueOf()/1e3)},_.valueOf=function(){return this.$d.getTime()},_.startOf=function(t,e){var r=this,n=!!w.u(e)||e,f=w.p(t),l=function(t,e){var s=w.w(r.$u?Date.UTC(r.$y,e,t):new Date(r.$y,e,t),r);return n?s:s.endOf(u)},m=function(t,e){return w.w(r.toDate()[t].apply(r.toDate("s"),(n?[0,0,0,0]:[23,59,59,999]).slice(e)),r)},$=this.$W,M=this.$M,_=this.$D,y="set"+(this.$u?"UTC":"");switch(f){case h:return n?l(1,0):l(31,11);case c:return n?l(1,M):l(0,M+1);case o:var p=this.$locale().weekStart||0,v=($<p?$+7:$)-p;return l(n?_-v:_+(6-v),M);case u:case d:return m(y+"Hours",0);case a:return m(y+"Minutes",1);case i:return m(y+"Seconds",2);case s:return m(y+"Milliseconds",3);default:return this.clone()}},_.endOf=function(t){return this.startOf(t,!1)},_.$set=function(t,e){var r,o=w.p(t),f="set"+(this.$u?"UTC":""),l=(r={},r[u]=f+"Date",r[d]=f+"Date",r[c]=f+"Month",r[h]=f+"FullYear",r[a]=f+"Hours",r[i]=f+"Minutes",r[s]=f+"Seconds",r[n]=f+"Milliseconds",r)[o],m=o===u?this.$D+(e-this.$W):e;if(o===c||o===h){var $=this.clone().set(d,1);$.$d[l](m),$.init(),this.$d=$.set(d,Math.min(this.$D,$.daysInMonth())).$d}else l&&this.$d[l](m);return this.init(),this},_.set=function(t,e){return this.clone().$set(t,e)},_.get=function(t){return this[w.p(t)]()},_.add=function(n,f){var d,l=this;n=Number(n);var m=w.p(f),$=function(t){var e=k(l);return w.w(e.date(e.date()+Math.round(t*n)),l)};if(m===c)return this.set(c,this.$M+n);if(m===h)return this.set(h,this.$y+n);if(m===u)return $(1);if(m===o)return $(7);var M=(d={},d[i]=e,d[a]=r,d[s]=t,d)[m]||1,_=this.$d.getTime()+n*M;return w.w(_,this)},_.subtract=function(t,e){return this.add(-1*t,e)},_.format=function(t){var e=this,r=this.$locale();if(!this.isValid())return r.invalidDate||l;var n=t||"YYYY-MM-DDTHH:mm:ssZ",s=w.z(this),i=this.$H,a=this.$m,u=this.$M,o=r.weekdays,c=r.months,f=r.meridiem,h=function(t,r,s,i){return t&&(t[r]||t(e,n))||s[r].slice(0,i)},d=function(t){return w.s(i%12||12,t,"0")},m=f||function(t,e,r){var n=t<12?"AM":"PM";return r?n.toLowerCase():n};return n.replace($,(function(t,n){return n||function(t){switch(t){case"YY":return String(e.$y).slice(-2);case"YYYY":return w.s(e.$y,4,"0");case"M":return u+1;case"MM":return w.s(u+1,2,"0");case"MMM":return h(r.monthsShort,u,c,3);case"MMMM":return h(c,u);case"D":return e.$D;case"DD":return w.s(e.$D,2,"0");case"d":return String(e.$W);case"dd":return h(r.weekdaysMin,e.$W,o,2);case"ddd":return h(r.weekdaysShort,e.$W,o,3);case"dddd":return o[e.$W];case"H":return String(i);case"HH":return w.s(i,2,"0");case"h":return d(1);case"hh":return d(2);case"a":return m(i,a,!0);case"A":return m(i,a,!1);case"m":return String(a);case"mm":return w.s(a,2,"0");case"s":return String(e.$s);case"ss":return w.s(e.$s,2,"0");case"SSS":return w.s(e.$ms,3,"0");case"Z":return s}return null}(t)||s.replace(":","")}))},_.utcOffset=function(){return 15*-Math.round(this.$d.getTimezoneOffset()/15)},_.diff=function(n,d,l){var m,$=this,M=w.p(d),_=k(n),y=(_.utcOffset()-this.utcOffset())*e,p=this-_,v=function(){return w.m($,_)};switch(M){case h:m=v()/12;break;case c:m=v();break;case f:m=v()/3;break;case o:m=(p-y)/6048e5;break;case u:m=(p-y)/864e5;break;case a:m=p/r;break;case i:m=p/e;break;case s:m=p/t;break;default:m=p}return l?m:w.a(m)},_.daysInMonth=function(){return this.endOf(c).$D},_.$locale=function(){return v[this.$L]},_.locale=function(t,e){if(!t)return this.$L;var r=this.clone(),n=S(t,e,!0);return n&&(r.$L=n),r},_.clone=function(){return w.w(this.$d,this)},_.toDate=function(){return new Date(this.valueOf())},_.toJSON=function(){return this.isValid()?this.toISOString():null},_.toISOString=function(){return this.$d.toISOString()},_.toString=function(){return this.$d.toUTCString()},M}(),b=Y.prototype;return k.prototype=b,[["$ms",n],["$s",s],["$m",i],["$H",a],["$W",u],["$M",c],["$y",h],["$D",d]].forEach((function(t){b[t[1]]=function(e){return this.$g(e,t[0],t[1])}})),k.extend=function(t,e){return t.$i||(t(e,Y,k),t.$i=!0),k},k.locale=S,k.isDayjs=g,k.unix=function(t){return k(1e3*t)},k.en=v[p],k.Ls=v,k.p={},k}()},8988:function(t,e,r){t.exports=function(t){"use strict";function e(t){return t&&"object"==typeof t&&"default"in t?t:{default:t}}var r=e(t);function n(t){return t>1&&t<5&&1!=~~(t/10)}function s(t,e,r,s){var i=t+" ";switch(r){case"s":return e||s?"p\xe1r sek\xfand":"p\xe1r sekundami";case"m":return e?"min\xfata":s?"min\xfatu":"min\xfatou";case"mm":return e||s?i+(n(t)?"min\xfaty":"min\xfat"):i+"min\xfatami";case"h":return e?"hodina":s?"hodinu":"hodinou";case"hh":return e||s?i+(n(t)?"hodiny":"hod\xedn"):i+"hodinami";case"d":return e||s?"de\u0148":"d\u0148om";case"dd":return e||s?i+(n(t)?"dni":"dn\xed"):i+"d\u0148ami";case"M":return e||s?"mesiac":"mesiacom";case"MM":return e||s?i+(n(t)?"mesiace":"mesiacov"):i+"mesiacmi";case"y":return e||s?"rok":"rokom";case"yy":return e||s?i+(n(t)?"roky":"rokov"):i+"rokmi"}}var i={name:"sk",weekdays:"nede\u013ea_pondelok_utorok_streda_\u0161tvrtok_piatok_sobota".split("_"),weekdaysShort:"ne_po_ut_st_\u0161t_pi_so".split("_"),weekdaysMin:"ne_po_ut_st_\u0161t_pi_so".split("_"),months:"janu\xe1r_febru\xe1r_marec_apr\xedl_m\xe1j_j\xfan_j\xfal_august_september_okt\xf3ber_november_december".split("_"),monthsShort:"jan_feb_mar_apr_m\xe1j_j\xfan_j\xfal_aug_sep_okt_nov_dec".split("_"),weekStart:1,yearStart:4,ordinal:function(t){return t+"."},formats:{LT:"H:mm",LTS:"H:mm:ss",L:"DD.MM.YYYY",LL:"D. MMMM YYYY",LLL:"D. MMMM YYYY H:mm",LLLL:"dddd D. MMMM YYYY H:mm",l:"D. M. YYYY"},relativeTime:{future:"za %s",past:"pred %s",s:s,m:s,mm:s,h:s,hh:s,d:s,dd:s,M:s,MM:s,y:s,yy:s}};return r.default.locale(i,null,!0),i}(r(446))}}]);
//# sourceMappingURL=8988.68358ae2.chunk.js.map