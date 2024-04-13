(self.webpackChunkai=self.webpackChunkai||[]).push([[1634],{446:function(t){t.exports=function(){"use strict";var t=1e3,e=6e4,r=36e5,n="millisecond",u="second",s="minute",i="hour",a="day",o="week",c="month",f="quarter",d="year",h="date",l="Invalid Date",m=/^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/,$=/\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g,M={name:"en",weekdays:"Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),months:"January_February_March_April_May_June_July_August_September_October_November_December".split("_"),ordinal:function(t){var e=["th","st","nd","rd"],r=t%100;return"["+t+(e[(r-20)%10]||e[r]||e[0])+"]"}},_=function(t,e,r){var n=String(t);return!n||n.length>=e?t:""+Array(e+1-n.length).join(r)+t},g={s:_,z:function(t){var e=-t.utcOffset(),r=Math.abs(e),n=Math.floor(r/60),u=r%60;return(e<=0?"+":"-")+_(n,2,"0")+":"+_(u,2,"0")},m:function t(e,r){if(e.date()<r.date())return-t(r,e);var n=12*(r.year()-e.year())+(r.month()-e.month()),u=e.clone().add(n,c),s=r-u<0,i=e.clone().add(n+(s?-1:1),c);return+(-(n+(r-u)/(s?u-i:i-u))||0)},a:function(t){return t<0?Math.ceil(t)||0:Math.floor(t)},p:function(t){return{M:c,y:d,w:o,d:a,D:h,h:i,m:s,s:u,ms:n,Q:f}[t]||String(t||"").toLowerCase().replace(/s$/,"")},u:function(t){return void 0===t}},k="en",y={};y[k]=M;var v="$isDayjsObject",p=function(t){return t instanceof Y||!(!t||!t[v])},D=function t(e,r,n){var u;if(!e)return k;if("string"==typeof e){var s=e.toLowerCase();y[s]&&(u=s),r&&(y[s]=r,u=s);var i=e.split("-");if(!u&&i.length>1)return t(i[0])}else{var a=e.name;y[a]=e,u=a}return!n&&u&&(k=u),u||!n&&k},S=function(t,e){if(p(t))return t.clone();var r="object"==typeof e?e:{};return r.date=t,r.args=arguments,new Y(r)},w=g;w.l=D,w.i=p,w.w=function(t,e){return S(t,{locale:e.$L,utc:e.$u,x:e.$x,$offset:e.$offset})};var Y=function(){function M(t){this.$L=D(t.locale,null,!0),this.parse(t),this.$x=this.$x||t.x||{},this[v]=!0}var _=M.prototype;return _.parse=function(t){this.$d=function(t){var e=t.date,r=t.utc;if(null===e)return new Date(NaN);if(w.u(e))return new Date;if(e instanceof Date)return new Date(e);if("string"==typeof e&&!/Z$/i.test(e)){var n=e.match(m);if(n){var u=n[2]-1||0,s=(n[7]||"0").substring(0,3);return r?new Date(Date.UTC(n[1],u,n[3]||1,n[4]||0,n[5]||0,n[6]||0,s)):new Date(n[1],u,n[3]||1,n[4]||0,n[5]||0,n[6]||0,s)}}return new Date(e)}(t),this.init()},_.init=function(){var t=this.$d;this.$y=t.getFullYear(),this.$M=t.getMonth(),this.$D=t.getDate(),this.$W=t.getDay(),this.$H=t.getHours(),this.$m=t.getMinutes(),this.$s=t.getSeconds(),this.$ms=t.getMilliseconds()},_.$utils=function(){return w},_.isValid=function(){return!(this.$d.toString()===l)},_.isSame=function(t,e){var r=S(t);return this.startOf(e)<=r&&r<=this.endOf(e)},_.isAfter=function(t,e){return S(t)<this.startOf(e)},_.isBefore=function(t,e){return this.endOf(e)<S(t)},_.$g=function(t,e,r){return w.u(t)?this[e]:this.set(r,t)},_.unix=function(){return Math.floor(this.valueOf()/1e3)},_.valueOf=function(){return this.$d.getTime()},_.startOf=function(t,e){var r=this,n=!!w.u(e)||e,f=w.p(t),l=function(t,e){var u=w.w(r.$u?Date.UTC(r.$y,e,t):new Date(r.$y,e,t),r);return n?u:u.endOf(a)},m=function(t,e){return w.w(r.toDate()[t].apply(r.toDate("s"),(n?[0,0,0,0]:[23,59,59,999]).slice(e)),r)},$=this.$W,M=this.$M,_=this.$D,g="set"+(this.$u?"UTC":"");switch(f){case d:return n?l(1,0):l(31,11);case c:return n?l(1,M):l(0,M+1);case o:var k=this.$locale().weekStart||0,y=($<k?$+7:$)-k;return l(n?_-y:_+(6-y),M);case a:case h:return m(g+"Hours",0);case i:return m(g+"Minutes",1);case s:return m(g+"Seconds",2);case u:return m(g+"Milliseconds",3);default:return this.clone()}},_.endOf=function(t){return this.startOf(t,!1)},_.$set=function(t,e){var r,o=w.p(t),f="set"+(this.$u?"UTC":""),l=(r={},r[a]=f+"Date",r[h]=f+"Date",r[c]=f+"Month",r[d]=f+"FullYear",r[i]=f+"Hours",r[s]=f+"Minutes",r[u]=f+"Seconds",r[n]=f+"Milliseconds",r)[o],m=o===a?this.$D+(e-this.$W):e;if(o===c||o===d){var $=this.clone().set(h,1);$.$d[l](m),$.init(),this.$d=$.set(h,Math.min(this.$D,$.daysInMonth())).$d}else l&&this.$d[l](m);return this.init(),this},_.set=function(t,e){return this.clone().$set(t,e)},_.get=function(t){return this[w.p(t)]()},_.add=function(n,f){var h,l=this;n=Number(n);var m=w.p(f),$=function(t){var e=S(l);return w.w(e.date(e.date()+Math.round(t*n)),l)};if(m===c)return this.set(c,this.$M+n);if(m===d)return this.set(d,this.$y+n);if(m===a)return $(1);if(m===o)return $(7);var M=(h={},h[s]=e,h[i]=r,h[u]=t,h)[m]||1,_=this.$d.getTime()+n*M;return w.w(_,this)},_.subtract=function(t,e){return this.add(-1*t,e)},_.format=function(t){var e=this,r=this.$locale();if(!this.isValid())return r.invalidDate||l;var n=t||"YYYY-MM-DDTHH:mm:ssZ",u=w.z(this),s=this.$H,i=this.$m,a=this.$M,o=r.weekdays,c=r.months,f=r.meridiem,d=function(t,r,u,s){return t&&(t[r]||t(e,n))||u[r].slice(0,s)},h=function(t){return w.s(s%12||12,t,"0")},m=f||function(t,e,r){var n=t<12?"AM":"PM";return r?n.toLowerCase():n};return n.replace($,(function(t,n){return n||function(t){switch(t){case"YY":return String(e.$y).slice(-2);case"YYYY":return w.s(e.$y,4,"0");case"M":return a+1;case"MM":return w.s(a+1,2,"0");case"MMM":return d(r.monthsShort,a,c,3);case"MMMM":return d(c,a);case"D":return e.$D;case"DD":return w.s(e.$D,2,"0");case"d":return String(e.$W);case"dd":return d(r.weekdaysMin,e.$W,o,2);case"ddd":return d(r.weekdaysShort,e.$W,o,3);case"dddd":return o[e.$W];case"H":return String(s);case"HH":return w.s(s,2,"0");case"h":return h(1);case"hh":return h(2);case"a":return m(s,i,!0);case"A":return m(s,i,!1);case"m":return String(i);case"mm":return w.s(i,2,"0");case"s":return String(e.$s);case"ss":return w.s(e.$s,2,"0");case"SSS":return w.s(e.$ms,3,"0");case"Z":return u}return null}(t)||u.replace(":","")}))},_.utcOffset=function(){return 15*-Math.round(this.$d.getTimezoneOffset()/15)},_.diff=function(n,h,l){var m,$=this,M=w.p(h),_=S(n),g=(_.utcOffset()-this.utcOffset())*e,k=this-_,y=function(){return w.m($,_)};switch(M){case d:m=y()/12;break;case c:m=y();break;case f:m=y()/3;break;case o:m=(k-g)/6048e5;break;case a:m=(k-g)/864e5;break;case i:m=k/r;break;case s:m=k/e;break;case u:m=k/t;break;default:m=k}return l?m:w.a(m)},_.daysInMonth=function(){return this.endOf(c).$D},_.$locale=function(){return y[this.$L]},_.locale=function(t,e){if(!t)return this.$L;var r=this.clone(),n=D(t,e,!0);return n&&(r.$L=n),r},_.clone=function(){return w.w(this.$d,this)},_.toDate=function(){return new Date(this.valueOf())},_.toJSON=function(){return this.isValid()?this.toISOString():null},_.toISOString=function(){return this.$d.toISOString()},_.toString=function(){return this.$d.toUTCString()},M}(),b=Y.prototype;return S.prototype=b,[["$ms",n],["$s",u],["$m",s],["$H",i],["$W",a],["$M",c],["$y",d],["$D",h]].forEach((function(t){b[t[1]]=function(e){return this.$g(e,t[0],t[1])}})),S.extend=function(t,e){return t.$i||(t(e,Y,S),t.$i=!0),S},S.locale=D,S.isDayjs=p,S.unix=function(t){return S(1e3*t)},S.en=y[k],S.Ls=y,S.p={},S}()},1634:function(t,e,r){t.exports=function(t){"use strict";function e(t){return t&&"object"==typeof t&&"default"in t?t:{default:t}}var r=e(t),n={s:["nokkrar sek\xfandur","nokkrar sek\xfandur","nokkrum sek\xfandum"],m:["m\xedn\xfata","m\xedn\xfatu","m\xedn\xfatu"],mm:["m\xedn\xfatur","m\xedn\xfatur","m\xedn\xfatum"],h:["klukkustund","klukkustund","klukkustund"],hh:["klukkustundir","klukkustundir","klukkustundum"],d:["dagur","dag","degi"],dd:["dagar","daga","d\xf6gum"],M:["m\xe1nu\xf0ur","m\xe1nu\xf0","m\xe1nu\xf0i"],MM:["m\xe1nu\xf0ir","m\xe1nu\xf0i","m\xe1nu\xf0um"],y:["\xe1r","\xe1r","\xe1ri"],yy:["\xe1r","\xe1r","\xe1rum"]};function u(t,e,r,u){var s=function(t,e,r,u){var s=u?0:r?1:2,i=2===t.length&&e%10==1?t[0]:t,a=n[i][s];return 1===t.length?a:"%d "+a}(r,t,u,e);return s.replace("%d",t)}var s={name:"is",weekdays:"sunnudagur_m\xe1nudagur_\xferi\xf0judagur_mi\xf0vikudagur_fimmtudagur_f\xf6studagur_laugardagur".split("_"),months:"jan\xfaar_febr\xfaar_mars_apr\xedl_ma\xed_j\xfan\xed_j\xfal\xed_\xe1g\xfast_september_okt\xf3ber_n\xf3vember_desember".split("_"),weekStart:1,weekdaysShort:"sun_m\xe1n_\xferi_mi\xf0_fim_f\xf6s_lau".split("_"),monthsShort:"jan_feb_mar_apr_ma\xed_j\xfan_j\xfal_\xe1g\xfa_sep_okt_n\xf3v_des".split("_"),weekdaysMin:"Su_M\xe1_\xder_Mi_Fi_F\xf6_La".split("_"),ordinal:function(t){return t},formats:{LT:"H:mm",LTS:"H:mm:ss",L:"DD.MM.YYYY",LL:"D. MMMM YYYY",LLL:"D. MMMM YYYY [kl.] H:mm",LLLL:"dddd, D. MMMM YYYY [kl.] H:mm"},relativeTime:{future:"eftir %s",past:"fyrir %s s\xed\xf0an",s:u,m:u,mm:u,h:u,hh:u,d:u,dd:u,M:u,MM:u,y:u,yy:u}};return r.default.locale(s,null,!0),s}(r(446))}}]);
//# sourceMappingURL=1634.1ec54306.chunk.js.map