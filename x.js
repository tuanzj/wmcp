if ('undefined' == typeof s$) {
	var s$ = function(e,d) {
		var _d = s$.gwd();
		var o = null;
		if ('string' == typeof e) {
			var s = e.substr(0,1);
			if (s == '#') {
				o = new s$.o(_d.getElementById(e.substr(1)));
			} else if (s == '+') {
				o = new s$.o(_d.createElement(e.substr(1)));
				if (d) {
					o.a('id',d);
				}
			} else if (s == '.') {
				if (d == null) d = document;
				else if (d instanceof s$.o) d = d.o();
				var a = [];
				var re = new RegExp('\\b'+e.substr(1)+'\\b');
				var els = d.getElementsByTagName('*');
				for(var i=0,j=els.length; i< j; i++) {
					if(re.test(els[i].className)) {
						o = new s$.o(els[i]);
						a.push(o);
					}
				}
				return a;
			} else {
				if (d == null) d = document;
				else if (d instanceof s$.o) d = d.o();
				var a = [];
				var els = d.getElementsByTagName(e);
				for (i=0;i<els.length;++i){
					o = new s$.o(els[i]);
					a.push(o);
				}
				return a;
			}
		} else {
			o = new s$.o(e);
		}
		if (o.e == null || o.e == 'undefined') return null;
		return o;
	}
	//s$.da = {};
	s$.ird = null;
	/*s$.oi = function(es) {
		this.es = es;
		this.o = function(i) {
			return this.es[i];
		}
		this.s = function(s,v) {
			if (v==null) return false;
			for ()
			this.e.style[s] = v;
			return this;
		};
		this.ea = function() {

		}
	}*/
	s$.o = function(e) {
		this.inb = function(c) {
			this.e.parentNode.insertBefore(c.o(),this.e.nextSibling);
			return this;
		};
		this.o = function() {
			return this.e;
		};
		this.s = function(s,v) {
			if (v==null) return this.e.style[s];
			this.e.style[s] = v;
			return this;
		};
		this.st = function(v) {
			this.e.style.cssText = v;
			return this;
		};
		this.a = function(a,v) {
			if (v==null) return this.e.getAttribute(a);
			this.e.setAttribute(a,v);
			return this;
		};
		this.ra = function(a) {
			this.e.removeAttribute(a);
			return this;
		};
		this.ha = function(a) {
			if (this.e.hasAttribute) return this.e.hasAttribute(a);
			else return this.e.getAttribute(a) != null;
		};
		this.ud = function(a,v) {
//			if (!this.e.dataset && this.e.id) {
//				console.log(this.e.id);
//				if (v == null) {
//					if (s$.da[this.e.id] == null || s$.da[this.e.id] == 'undefined') {
//						s$.da[this.e.id] = {};
//					}
//					if (s$.da[this.e.id][a]) {
//						return s$.da[this.e.id][a];
//					}
//				} else {
//					if (s$.da[this.e.id] == null || s$.da[this.e.id] == 'undefined') {
//						s$.da[this.e.id] = {};
//					}
//					s$.da[this.e.id][a] = v;
//				}
//			}
			return this.a('data-'+a,v);
		};
		this.hud = function(a) {
//			if (!this.e.dataset && this.e.id) {
//				return s$.da[this.e.id][a] == 'undefined';
//			}
			return this.ha('data-'+a);
		};
		this.rud = function(a) {
//			if (!this.e.dataset && this.e.id) {
//				delete s$.da[this.e.id][a];
//			}
			return this.ra('data-'+a);
		};
		this.ac = function(c) {
			this.e.appendChild(c.o());
			return this;
		};
		this.ih = function(t){
			if (t == null) {
				return this.e.innerHTML;
			}
			this.e.innerHTML = t;
			return this;
		};
		this.ck = function(t){
			if (t == null) {
				this.e.click();
				return this;
			}
			this.e.onclick = t;
			return this;
		};
		this.ev = function(n,f) {
			var d = s$.gwd();
			if (d.addEventListener) {
				this.e.addEventListener(n,f);
			} else if (d.attachEvent) {
				d.attachEvent('on'+n, f);
			}
			return this;
		};
		this.rev = function(n,f) {
			var d = s$.gwd();
			if (d.removeEventListener) {
				this.e.removeEventListener(n,f);
			} else if (d.detachEvent) {
				d.detachEvent('on'+n,f);
			}
			return this;
		};
		this.fev = function(n,f) {
			var d = s$.gwd();
			if (d.dispatchEvent) {
				this.e.dispatchEvent(n);
			} else if (d.fireEvent) {
				d.fireEvent('on'+n);
			}
			return this;
		};
		this.w = function(v) {
			if (v != null) {
				if (s$.isn(v)) { this.a('width',v); v = v+'px'; }
				this.s('width',v);
				return this;
			}
			return parseInt(this.e.clientWidth);
		};
		this.h = function(v) {
			if (v != null) {
				if (s$.isn(v)) { this.a('height',v); v = v+'px'; }
				this.s('height',v);
				return this;
			}
			return parseInt(this.e.clientHeight);
		};
		this.sw = function(v) {
			if (v == 0) {
				this.ud('dedis', this.s('display'));
				this.s('display','none');
				return this;
			}
			var a = this.ud('dedis');
			if (a == null) a = '';
			this.s('display',a);
			return this;
		};
		this.po = function(t,l,r,b) {
			if (t!=null){if(s$.isn(t))t=''+t+'px';this.s('top',t);}
			if (l!=null){if(s$.isn(l))l=''+l+'px';this.s('left',l);}
			if (r!=null){if(s$.isn(r))r=''+r+'px';this.s('right',r);}
			if (b!=null){if(s$.isn(b))b=''+b+'px';this.s('bottom',b);}
			return this;
		};
		this.rm = function () {
            this.e.parentNode.removeChild(this.e);
            this.e = null;
        };
        this.hcls = function(c) {
            return this.e.className.match(RegExp("(\\s|^)" + c + "(\\s|$)"));
        };
        this.acls = function(c) {
            this.hcls(c) || (this.e.className += " " + c);
            return this;
        };
        this.rcls = function(c) {
            this.hcls(c) && (this.e.className = this.e.className.replace(RegExp("(\\s|^)" + c + "(\\s|$)"), " "));
            return this;
        };
        this.pa  = function(c) {
        	return s$(this.e.parentNode);
        }
        this.ani = function (a, b) {};
		this.e = e;
	}
	s$.isn = function(v) {
		  return (typeof(v) === 'number' || typeof(v) === 'string') && v !== '' && !isNaN(v);
	}
	s$.isa = function(o) {
		if (o instanceof Array) {
			return true;
		}
		if (typeof o !== 'object') {
			return false;
		}
		var t = true;
		if (o === null || o === undefined) {
		    t = String (o);
		} else {
			t = Object.prototype.toString.call(o).replace(/\[object ([a-zA-Z]+)\]/, '$1').toLowerCase();
		}
		if (t === 'array') {
		    return true;
		}
		return false;
	}
	s$.gwd = function() {
		var d = window.document;
		if (s$.isf()) {
			d = window.parent.document;
		}
		return d;
	}
	s$.ac = function(e,d) {
		(d==null?s$.gwd():d).body.appendChild(e.o());
	}
	s$.ios = function() {
		var ua = navigator.userAgent.toLowerCase();
		return ua.indexOf('iphone') > -1 || ua.indexOf('ipad') > -1 ;
	}
	s$.igo = function() {
		return navigator.userAgent.toLowerCase().indexOf('android') > -1;
	}
	s$.u =  'http://ads.nhanhnhanh.net/';
	//s$.u = 'http://training.sosmart.vn/kenel/www/delivery/';
		//+'&sw='+screen.width+'&sh='screen.height+'&sd='+screen.colorDepth;
	s$.pm = function(ms,h) {
		/*try {
			window.top.postMessage(ms,"http://demo.sosmart.vn");
		} catch (e){
			console.log(e);
		}*/

	}
	s$._isf = null;
	s$._xf = false;
	s$.isf = function()  {
		if (null !== s$._isf) return s$._isf;
        s$._isf = true;
        try {
        	if (window != window.top) {
        		if (top.location.host != location.host) {
        			s$._isf = false;
        			s$._xf = true;
        		}
        	}
        	if (s$._isf) {
        		if ("undefined" == typeof window.frameElement || null == window.frameElement) s$._isf = false;
        	}
//            window != window.top && top.location.host != location.host && (s$._isf = !1) false
        } catch (b) {
            s$._isf = false;
        }
        return s$._isf
		/*
        if (s$._isf !== null) {
			return s$._isf;
		}
		s$._isf = true;
		if (window == window.top) {
			s$._isf == false;
		}
		if (s$._isf) {
			try {
				if (window.location.href.indexOf(window.top.location.href) != 0) {
					s$._isf = false;
					s$._xf = true;
				}
				else if ('undefined' == typeof window.frameElement || null == window.frameElement) {
					s$._isf = false;
				}
			} catch(ex) {
				s$._isf = false;
			}
		}
		//console.log(s$._isf);
		//console.log(s$._xf);
		return s$._isf;*/
	}
	s$.fif = function(ss, zid) {
		var lo = window.location.toString(), ifa = null,
		ifls = s$('iframe',s$(window.parent.document));
		for (var i = 0; i < ifls.length; ++i) {
			if ((('undefined' != typeof frameElement && null != frameElement)
					&& frameElement.id == ifls[i].a('id')) || lo.indexOf(ifls[i].a('src')) > -1) {
				ifa = ifls[i].sw(0);
				break;
			}
		}
		if (ifa != null) {
			for (var i=0,j=ss.length;i<j;++i) {
				ifa.inb(s$('+div',ss[i].a('id')).ud('sosmart',ss[i].ud('sosmart')).ud('in',1));
			}
		}
	}
	s$.rq = function(u,d,f) {
		var x=window.XMLHttpRequest?new XMLHttpRequest():new ActiveXObject('Microsoft.XMLHTTP');
		//var x=new XMLHttpRequest();
		x.onreadystatechange=function(){if(x.readyState==4 && x.status==200)f(x.responseText);}
		x.open(d==null?'GET':'POST',u,true);if(d!=null){
			x.setRequestHeader('Content-type','application/x-www-form-urlencoded')};
		x.send(d);
	}
	s$.r = function() {
		alert(123);
		/*
		var s = s$('script');
		var sc = s[s.length-1];
		if (sc) {
			s = sc.a('src');
			s = s.split('#');
			if (s.length == 2) {
				if (s$.isn(s[1])) {
					var ad = s$('#sosmart_'+s[1]);
					if (ad == null) {
						ad = s$('+div','sosmart_'+s[1]);
						sc.inb(ad);
					}
				} else {
					if (s[1].match(/[a-z]{1}[\d]+/)) {
						s[1] = s[1].substr(1);
						s$.ac(s$('+script').a('src', s$.u+
								'ti.php?trackerid='+s[1]+'&sc=1&cb='+
								s$.unid()).a('type','text/javascript'),document);
					}
				}
			}
		}
		if (null == s$.ird) {
			s$.ird = false;
			s$.rd(function(){if(!s$.ird){s$.ird=true;window.s$.a = new s$.s$a();}});
		}
		*/
	}
	s$.unid = function() {
		return parseInt(new Date().getTime()/1000).toString();
	}
	s$.adz = function() {
		var a = [];
	    var els = s$('div');
	    for(var i=0,j=els.length;i<j;i++) {
	    	//console.log(els[i].ha('id'));
	        if(els[i].ha('id')) {
	        	var _id = els[i].a('id');
	        	if (_id.indexOf('sosmart_') == 0) {
	        		//console.log(_id);
	        		var zid = _id.replace('sosmart_', '');
	        		if (s$.isn(zid)) {
		        		els[i].ud('sosmart', zid);
		        		a.push(els[i]);
	        		}
	        	}
	        }
		}
	    return a;
	}
	s$.rd = function(f){
	    //if ( readyBound ) return;
	    //readyBound = true;
	    var d = window.document;
	    // Mozilla, Opera and webkit nightlies currently support this event
	    if (d.addEventListener) {
	    	// Use the handy event callback
	    	d.addEventListener('DOMContentLoaded', function(){
	    		d.removeEventListener('DOMContentLoaded', arguments.callee, false );
	    		f();
	    	}, false );

	    // If IE event model is used
	    } else if (d.attachEvent) {
	    	// ensure firing before onload,
	    	// maybe late but safe also for iframes
	    	d.attachEvent('onreadystatechange', function(){
	    		if (d.readyState === 'complete') {
	    			d.detachEvent('onreadystatechange', arguments.callee);
	    			f();
	    		}
	    	});

	    	// If IE and not an iframe
	    	// continually check to see if the document is ready
	    	if (document.documentElement.doScroll && window == window.top) (function(){
	    		try {
	    			// If IE is used, use the trick by Diego Perini
	    			// http://javascript.nwbox.com/IEContentLoaded/
	    			document.documentElement.doScroll('left');
	    		} catch( error ) {
	    			setTimeout(arguments.callee, 0);
	    			return;
	    		}

	    		// and execute any waiting functions
	    		f();
	    	})();

	    }

	    // A fallback to window.onload, that will always work
	    //jQuery.event.add( window, 'load', f );
	    s$(window).ev('load', f);
	}
	s$.pj = function(d) {
		if ( typeof d !== 'string' || !d) return null;
		if (window.JSON && window.JSON.parse) return window.JSON.parse(d);
		var rvc = /^[\],:{}\s]*$/,
		rve = /\\(?:["\\\/bfnrt]|u[0-9a-fA-F]{4})/g,
		rvt = /"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g,
		rvb = /(?:^|:|,)(?:\s*\[)+/g;
		if (rvc.test( d.replace( rve, '@' ).replace( rvt, ']' ).replace( rvb, '')) ) {
			return (new Function( 'return ' + d))();
		}
		return null;
	}
	s$.sc = function (c, v, a) {
		var b = new Date();
		b.setDate(b.getDate()+a);
		document.cookie = c+'='+escape(v)+((a == null)?'':'; expires='+
				b.toUTCString())+'; domain=sosmart.vn';
	}
	s$.gc = function (c) {
		if (document.cookie.length > 0) {
			cs = document.cookie.indexOf(c + '=');
			if (cs != -1) {
				cs = cs + c.length + 1;
				ce = document.cookie.indexOf(';', cs);
				if (ce == -1) ce = document.cookie.length;
				return unescape(document.cookie.substring(cs, ce))
			}
		}
		return '';
  	}
	s$.wd = function() {
		var _d = s$.gwd();
		var _w = window;
		if (s$.isf()) _w = window.parent;
		var w = _d.documentElement.clientWidth,h = _d.documentElement.clientHeight,y = 0, x = 0;
		if (typeof (_w.pageYOffset) == 'number') {
			y = _w.pageYOffset;
			x = _w.pageXOffset;
		} else if (_d.body
				&& (_d.body.scrollLeft || _d.body.scrollTop)) {
			y = _d.body.scrollTop;
			x = _d.body.scrollLeft;
			w = _d.body.clientWidth;
			h = _d.body.clientHeight;
		} else if (_d.documentElement &&
					(_d.documentElement.scrollLeft || _d.documentElement.scrollTop)) {
			y = _d.documentElement.scrollTop;
			x = _d.documentElement.scrollLeft;
		}
		if (w > _w.innerWidth) w = _w.innerWidth;
		if (h > _w.innerHeight) h = _w.innerHeight;
		return {w:w,h:h,x:x,y:y};
	}
	s$.s$a = function() {
		var pgim = function() {
			return 'position:fixed;left:0px;top:0px;z-index:990000;width:100%;'+
			'height:100%;background-color:rgba(10, 10, 10, 0.6);';
		};
		var cbim = function() {
			return 'display:block;font:20px sans-serif;line-height:22px;'+
			'text-decoration:none;color:#FFF;padding:0;width:26px;height:26px;'+
			'position:absolute;background-color:#222;border-radius:50%;'+
			'webkit-border-radius:50%;ms-border-radius:50%;moz-border-radius:50%;'+
			'o-border-radius:50%;border:2px solid #aaa;text-align:center;';
		};
		var txbx = function() {
			return 'display:block;overflow:hidden;text-align:center;'+
			'background-image:-webkit-gradient(linear,left top,left bottom,from(#f8f8f8),to(#fff));'+
			'background-image:-webkit-linear-gradient(top,#f8f8f8,#fff);'+
			'background-image:-moz-linear-gradient(top,#f8f8f8,#fff);'+
			'background-image:-ms-linear-gradient(top,#f8f8f8,#fff);'+
			'background-image:-o-linear-gradient(top,#f8f8f8,#fff);'+
			'background-image:linear-gradient(top,#f8f8f8,#fff);'+
			'border-radius:10%;-webkit-border-radius:10%;-o-border-radius:10%;'+
			'-moz-border-radius:10%;border:0.1em solid #dedede;'+
			'-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;'
		};
		var isv = function() {
			if (s$('+video').o().canPlayType) return true; return false;
			  //return v.canPlayType('video/mp4; codecs="avc1.42E01E, mp4a.40.2"');
		};
		var p = function(a, b) {
            a.ud("bn", b.b).s("text-align", "center");
            D(a, b.h);
            "ape" in b && a.ac(s$("+div").a("id", "ss_ape_" + b.b).ih(b.ape.replace("{{random}}", s$.unid())));
            b.ck = b.ck.replace("{{random}}", s$.unid);
            a.hud("track-view") && "" != a.ud("track-view") && s$.ads(a.ud("track-view"));
            y(b, "view")
        };
        var r = function(a, b) {
                "ppe" in b && a.ac(s$("+div").a("id", "ss_ppe_" + b.b).ih(b.ppe.replace("{{random}}", s$.unid())));
                return a
        };
        B = function(a, b, c) {
                a.sw(0);
                var d = s$(c.currentTarget);
                c = function() {
                    d.rev("click", B).ev("click")
                };
                return a.hud("track-click") && "" != a.ud("track-click") ? (s$.ads(a.ud("track-click"), null, c, c), !1) : d.hud("ga") ? (d.rud("ga"), y(b, "click", c), !1) : !0
        };
        // if ($bn['z'] == 1037) {
// 		$bn['bn'] = 'http://adi.vcmedia.vn/adt/cpc/mb/2015/06/640-11433732869.jpg';
// 		$bn['tp'] = 'inpage';
// 		$bn['container'] = '#detailct';
// 	}
		this.ipTp = function(a, b) {
            p(a, b);
            var c = s$(b.container);
            if (!c) return this.iTp(a, b);
            var d = s$("+div").st("clear:both;display:block;visibility:visible;opacity:1;position:relative;z-index: 5;background-color:#FFF;"),
                f = d.cln();
            d.a("id", "ssp1");
            f.a("id", "ssp2");
            for (var g = s$("*", c), t = Math.round(g.length / 2), l = 0; l < t; ++l) d.ac(g.o(l));
            for (l = t; l < g.length; ++l) f.ac(g.o(l));
            g = s$("+a").a("href", b.ck).ud("ga", 1).ev("click", function(c) {
                B(a, b, c)
            });
            b.u && -1 == b.u.indexOf("tel:") && -1 == b.u.indexOf("sms:") && g.a("target", "_blank");
            l = s$("+img").a("src", b.bn).ev("error", function() {
                a.sw(0)
            }).s({
                border: 0,
                "max-width": "100%"
            });
            g.ac(l);
            a.s("position", "relative").s("text-align", "center").ac(v(a, b).ac(g));
            l = s$("+div").st("display: block; opacity: 1; position: relative; z-index: 2; overflow: hidden; width: 100%; visibility: visible; height: 667px; background: transparent;");
            t = s$("+div").st("visibility: visible; z-index: 8; clear: both; position: fixed; top: 0px; background: transparent;");
            l.ac(t.ac(g));
            c.ih("").ac(d).ac(l).ac(f);
            return r(a, b)
        };
		this.iTp = function(ad, bn) {
			var a = s$('+a').a('href',bn.ck);
			if (bn.u) {
				if (bn.u.indexOf('tel:') == -1 && bn.u.indexOf('sms:') == -1) {
					a.a('target','_blank');
				}
			}
			//.w(bn.w).h(bn.h)
			var i = s$('+img').a('src',bn.bn).ev('error',function(){ad.sw(0);}).s('border','0');
			a.ac(i);
			ad.s('position','relative').s('text-align','center').ac(a);
			mck(ad,bn);
			fi();
		};
		this.mTp = function(ad,bn) {
			if (typeof window.s$.vd == 'undefined') {
				window.s$.vd = {}
				window.s$.vdi = {}
			}
			var a = s$('+a').a('href','javascript:;');
			//.w(bn.w).h(bn.h)
			var i = s$('+img').a('src',bn.bn).s('border','0').ev('error',function(){ad.sw(0);});
			a.ac(i);
			ad.ac(s$('+div').s('text-align','center').ac(a));
			a.ck(function(){
				var v = s$('#ssb'+bn.z);
				if (isv()) {
					if (v == null) {
						v = s$('+video','ssb'+bn.z).a('controls','controls').st('margin:auto;display:none')
						.w(bn.w).h(parseInt(bn.w)*2/3).a('src',bn.iu+'.m3u8');
						var cvd = function() {
							s$.ac(s$('+script').a('src', s$.u+'vd.php?z='+bn.z+'&b='+ad.ud('bn')+
									'&w='+screen.width+'&h='+screen.height+'&d='+v.o().duration+'&t='+
									window.s$.vd[bn.z]+'&sc=1&cb='+s$.unid()).a('type','text/javascript'));
							window.s$.vd[bn.z] = 0;
						}
						var tvd = function() {
							window.s$.vd[bn.z] += 1
							if (window.s$.vdi[bn.z] == true) setTimeout(tvd,1000);
							if (window.s$.vd[bn.z] % 5 == 0) cvd();
						}
						v.ev('playing',function(){
							//if (a.ud('clicked') == null) { ko tinh 1 lan
							//a.ud('clicked', 1);
							s$.ac(s$('+script').a('src', bn.ck).a('type','text/javascript'));
							//}

							if (typeof window.s$.vd[bn.z] == 'undefined') {
								window.s$.vd[bn.z] = 0;
							}
							window.s$.vdi[bn.z] = true;
							tvd();

						}).ev('error',function(){
							if (!v.hud('emp')) {
								v.ud('emp',1).a('src',bn.iu+'.webm');
								v.o().play();
							} else if (v.ud('emp') == 1) {
								v.ud('emp',2).a('src',bn.iu+'.mp4');
								v.o().play();
							}
						}).ev('pause',function(){
							window.s$.vdi[bn.z] = false;
							cvd();
							if (!s$.ios()) {
								a.sw();
								v.sw(0);
							}
						});
						ad.ac(v);
					}
					v.o().play();
				} else {  //flash player support
					if (v == null) {
						v = s$('+div','ssb'+bn.z).st('margin:auto;display:none').w(bn.w).h(parseInt(bn.w)*2/3);
						var fv = 'config={"clip":"'+bn.iu+'.mp4","autoPlay":true}';
						var fl = s$.u+'flowplayer-3.2.16.swf';
						var df = 'http://www.macromedia.com/go/getflashplayer';
						var ob = s$('+object','ssf'+bn.z).a('type','application/x-shockwave-flash').
							a('data', fl).a('codebase',df).w('100%').h('100%');
						ob.ac(s$('+param').a('name','movie').a('value',s$.u+'flowplayer-3.2.16.swf'));
						ob.ac(s$('+param').a('name','quality').a('value','high'));
						ob.ac(s$('+param').a('name','wmode').a('value','transparent'));
						ob.ac(s$('+param').a('name','allowfullscreen').a('value','true'));
						ob.ac(s$('+param').a('name','allowscriptaccess').a('value','true'));
						ob.ac(s$('+param').a('name','flashvars').a('value',fv));
						/*ob.ac(s$('+embed').a('type','application/x-shockwave-flash').
								w('100%').h('100%').a('flashvars',fv).
								a('src',fl).a('pluginspage',df).a('allowfullscreen','true').
								a('allowscriptaccess','true'));*/
						v.ac(ob);
						ad.ac(v);
					}
				}
				a.sw(0);
				v.sw();
			});
			fi();
		};
		this.pTp = function(ad,bn) {
			this.hTp(ad,bn,'');
		}
		this.tTp = function(ad, bn) {
			var a = s$('+a').a('href',bn.ck).a('target','_blank').ih(bn.tx);
			ad.s('text-align','center').ac(a);
			fi();
		}
		this.fTp = function(ad,bn) {
			var w = s$.wd();
			var adc = s$('+div').st('border:1px solid #eee;position:fixed;z-index:999999;margin:0;').w(bn.w).h(bn.h).
			po(null,Math.round(w.w / 2 - parseInt(bn.w) / 2),null,0);
			ad.ac(adc);
			var a = s$('+a').a('href','javascript:;');
			adc.ac(a);
			//w(bn.w).h(bn.h).
			var i = bn.tx == '' ? i = s$('+img').a('src',bn.bn).s('border','0') : s$('+span').
					st(txbx()).w(bn.w).h(bn.h).ih(bn.tx).ev('error',function(ev){ad.sw(0);});
			a.ac(i);
			var mcb = s$('+a').st(cbim()).po(-14,-14).a('href','javascript:;').ih('&rsaquo;&lsaquo;').
			ck(function(){adc.sw(0);});
			adc.ac(mcb);
			if (bn.u) {
				a.a('href',bn.ck);
				if (bn.u.indexOf('tel:') == -1 && bn.u.indexOf('sms:') == -1) {
					a.a('target','_blank');
				}
			} else {
				a.ck(function() {
					var bo = s$('#ssb'+bn.z);
					if (bo == null) {
						var rh = Math.round(parseInt(bn.hh)*w.h/100).toString();
						var rw = Math.round(parseInt(bn.hw)*w.w/100).toString();
						bo = s$('+div','ssb'+bn.z).st('background-color:#f2f2f2;position:fixed;').
								w(bn.hw+'%').h(bn.hh+'%').
								po(null,Math.round(w.w * ((100 - parseInt(bn.hw)) / 2) / 100),null,-1*rh).
								sw(0).ih(bn.ht);
						//var con = s$('+div').st('width:100%;height:100%;overflow:hidden;').ih(bn.ht);
						//bo.ac(con);
						var cb = s$('+a').st(cbim()).po(-14,-14).a('href','javascript:;').
								ih('&rsaquo;&lsaquo;').ck(function(){
							adc.sw();
							bo.sw(0).po(null,null,null,-1*rh);
						});
						bo.ac(cb);
						ad.ac(bo);
					}

					//if (a.ud('clicked') == null) {
						//a.ud('clicked',1);
						s$.ac(s$('+script').a('src',bn.ck).a('type','text/javascript'));
					//}
					adc.sw(0);
					function ani() {
						var _bt = parseInt(bo.s('bottom').replace('px',''));
						if (_bt < 0) {
							_bt += 3;
							bo.po(null,null,null,_bt);
							setTimeout(ani, 5);
						}
					}
					bo.sw();
					ani();
				});

			}
			mck(ad,bn);
			fi();
		}
		var mck = function(ad,bn) {
			//ad.st('width:'+bn.w+'px;height:'+bn.h+'px;background:url('+bn.bn+
			//') no-repeat;position:relative;');
			//var a = s$('+a').a('href',bn.ck).a('target','_blank').
			//st('position:absolute;display:block;width:100%;height:100%;top:0%;left:0%;z-index:900000');
			//ad.ac(a);
			if (bn.mck != null) {
				for (var i in bn.mck) {
					var m = bn.mck[i];
					var a = s$('+a').a('href',m.ck).st('position:absolute;'+
									'display:block;z-index:990000').
							w(m.w+'%').h(m.h+'%').po(m.y+'%',m.x+'%');
					if (m.u.indexOf('tel:') == -1 && m.u.indexOf('sms:') == -1) {
						a.a('target','_blank');
					}
					ad.ac(a);
				}
			}
		}
		this.hTp = function(ad,bn,p) {
			var w = s$.wd();
			var a = s$('+a').a('href','javascript:;').s('color','#0000FF');
			//.w(bn.w).h(bn.h)
			var i = bn.tx == '' ? i = s$('+img').a('src',bn.bn).
							s('border','0') : s$('+span').
							st('margin:auto;padding:2%;'+txbx()).
							ac(s$('+span').s('font-size','1.2em').ih(bn.tx)).
							ev('error',function(){ad.sw(0);});
			a.ac(i);
			ad.st('text-align:center');
			var di = s$('+div').st('display:inline-block;position:relative').w(bn.w).h(bn.h);
			ad.ac(di);
			di.ac(a);
			mck(di,bn);
			var ck = function(){
				var ih = s$('#ssb'+bn.z);
				var ov = s$('#sso'+bn.z);
				var ds = function(e){ e.preventDefault(); }
				if (ih == null) {
					ov = s$('+div','sso'+bn.z).st(pgim());
					ih = s$('+div','ssb'+bn.z).st('position:fixed;'+
									'background-color:#fafafa;z-index:999999');
					ih.w(bn.hw+'%').h(bn.hh+'%').
							po(Math.round(w.h * ((100 - parseInt(bn.hh)) / 2) / 100),
									Math.round(w.w * ((100 - parseInt(bn.hw)) / 2) / 100));
					ad.ac(ov);
					ad.ac(ih);
					var con = s$('+div').s('overflow','auto').w('100%').h('100%').ih(bn.ht);
					ih.ac(con);
					var cbf = function() {
						ov.sw(0);
						ih.sw(0);
						s$(s$.gwd().body).s('overflow','visible').s('-ms-touch-action','').rev('touchmove',ds);
					}
					var cb = s$('+a').st(cbim()).po(-14,null,-14).
							a('href','javascript:;').ih('&rsaquo;&lsaquo;').ck(cbf);
//					ov.ck(cbf);
					ih.ac(cb);
				}
				//if (a.ud('clicked') == null) {
				//a.ud('clicked',1);
					s$.ac(s$('+script').a('src', bn.ck).a('type','text/javascript'));
				//}
				ov.sw();
				ih.sw();
				s$(s$.gwd().body).s('overflow','hidden').s('-ms-touch-action','none').ev('touchmove',ds)
			}
			a.ck(ck);
			if (p==='') ck(); // fired popup
			fi();
		}

		var ss = s$.adz();
		if (s$.isf()) s$.fif(ss);
		var fi = function() {
			//if (!s$._xf) return;
			//s$.pm("alert(1)");
			//console.log(1);
		}
		/*if (s$.isf() || s$._xf) {
			var ml = s$('meta');
			for (i = 0; i < ml.length; ++i) {
				if (ml[i].a('http-equiv') == 'refresh') {
//					var c = parseInt(ml[i].a('content'));
					ml[i].rm();
					//window != window.top && top.location.host != location.host && (s$._isf = !1) false
//					c < 30 && (c = 30);
					break;
				}
			}
		}*/
		//if (s$._xf) s$.pm("ssif.setAttribute('allowTransparency','true');ssif.style['backgroud']='transparent';ssif.style['width']=document.documentElement.clientWidth+'px';ssif.style['height']=document.documentElement.clientHeight+'px';",'http://localhost');
		for (var i=0,j=ss.length;i<j;++i) {
			var ad = ss[i];
			if (ad.hud('bn') || ad.hud('in')) continue; // hud in da co external src xu ly
			var zid = ad.ud('sosmart');
			if (!s$.isn(zid))continue;
			s$.ac(s$('+script').a('src', s$.u+'avw.php?zoneid='+
						zid+'&n=abc'+zid+'f4'+'&sc=1&cb='+s$.unid()+((s$.isf()||s$._xf)?"&rf="+document.referrer:"")).
					a('type','text/javascript'),document);
		}
	}
}
s$.r();

/*
(function() {
    var a = s$("script"),
        c = a.o(a.length - 1);
    if (c && (a = c.a("src"), null !== a && (a = a.split("#"), 2 == a.length)))
        if (s$.isn(a[1])) {
            var d = s$("#sosmart_" + a[1]);
            null == d && (d = s$("+div", "sosmart_" + a[1]), c.inb(d));
            d.ud("track-view", c.ud("track-view"));
            c.rud("track-view");
            d.ud("track-click", c.ud("track-click"));
            c.rud("track-click");
            d.ud("verbose", c.ud("verbose"));
            c.rud("verbose")
        } else a[1].match(/[a-z]{1}[\d]+/) && (a[1] = a[1].substr(1), s$.ads(s$("+script").a("src", s$.u + "ti.php?trackerid=" + a[1] + "&sc=1&cb=" + s$.unid()).a("type",
            "text/javascript"), document))
})();
*/
