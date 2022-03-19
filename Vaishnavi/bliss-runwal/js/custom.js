
        
$('.Main').slick({
	slidesToShow: 1,
	slidesToScroll: 1,
	arrows: true,
	centerPadding: "0px",
	infinite: true,
	asNavFor: '.MainNav',
	prevArrow: '<div class="slick-nav prev-arrow"><i></i><svg><use xlink:href="#circle"></svg></div>',
	nextArrow: '<div class="slick-nav next-arrow"><i></i><svg><use xlink:href="#circle"></svg></div>',
});
$('.MainNav').slick({
	slidesToShow: 3,
	slidesToScroll: 1,
	asNavFor: '.Main',
	centerPadding: "0px",
	dots: false,
	arrows: false,
	centerMode: true,
	focusOnSelect: true
});
/* Please ❤ this if you like it! */




(function ($) {
	"use strict";

	$(function () {
		var header = $(".start-style");
		$(window).scroll(function () {
			var scroll = $(window).scrollTop();

			if (scroll >= 10) {
				header.removeClass('start-style').addClass("scroll-on");
			} else {
				header.removeClass("scroll-on").addClass('start-style');
			}
		});
	});

	//Animation

	$(document).ready(function () {
		$('body.hero-anime').removeClass('hero-anime');
	});

	//Menu On Hover

	$('body').on('mouseenter mouseleave', '.nav-item', function (e) {
		if ($(window).width() > 750) {
			var _d = $(e.target).closest('.nav-item'); _d.addClass('show');
			setTimeout(function () {
				_d[_d.is(':hover') ? 'addClass' : 'removeClass']('show');
			}, 1);
		}
	});

	//Switch light/dark

	$("#switch").on('click', function () {
		if ($("body").hasClass("dark")) {
			$("body").removeClass("dark");
			$("#switch").removeClass("switched");
		}
		else {
			$("body").addClass("dark");
			$("#switch").addClass("switched");
		}
	});

})(jQuery); 


//(function () {
//    var Util,
//        __bind = function (fn, me) { return function () { return fn.apply(me, arguments); }; };

//    Util = (function () {
//        function Util() { }

//        Util.prototype.extend = function (custom, defaults) {
//            var key, value;
//            for (key in custom) {
//                value = custom[key];
//                if (value != null) {
//                    defaults[key] = value;
//                }
//            }
//            return defaults;
//        };

//        Util.prototype.isMobile = function (agent) {
//            return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(agent);
//        };

//        return Util;

//    })();

//    this.WOW = (function () {
//        WOW.prototype.defaults = {
//            boxClass: 'wow',
//            animateClass: 'animated',
//            offset: 0,
//            mobile: true
//        };

//        function WOW(options) {
//            if (options == null) {
//                options = {};
//            }
//            this.scrollCallback = __bind(this.scrollCallback, this);
//            this.scrollHandler = __bind(this.scrollHandler, this);
//            this.start = __bind(this.start, this);
//            this.scrolled = true;
//            this.config = this.util().extend(options, this.defaults);
//        }

//        WOW.prototype.init = function () {
//            var _ref;
//            this.element = window.document.documentElement;
//            if ((_ref = document.readyState) === "interactive" || _ref === "complete") {
//                return this.start();
//            } else {
//                return document.addEventListener('DOMContentLoaded', this.start);
//            }
//        };

//        WOW.prototype.start = function () {
//            var box, _i, _len, _ref;
//            this.boxes = this.element.getElementsByClassName(this.config.boxClass);
//            if (this.boxes.length) {
//                if (this.disabled()) {
//                    return this.resetStyle();
//                } else {
//                    _ref = this.boxes;
//                    for (_i = 0, _len = _ref.length; _i < _len; _i++) {
//                        box = _ref[_i];
//                        this.applyStyle(box, true);
//                    }
//                    window.addEventListener('scroll', this.scrollHandler, false);
//                    window.addEventListener('resize', this.scrollHandler, false);
//                    return this.interval = setInterval(this.scrollCallback, 50);
//                }
//            }
//        };

//        WOW.prototype.stop = function () {
//            window.removeEventListener('scroll', this.scrollHandler, false);
//            window.removeEventListener('resize', this.scrollHandler, false);
//            if (this.interval != null) {
//                return clearInterval(this.interval);
//            }
//        };

//        WOW.prototype.show = function (box) {
//            this.applyStyle(box);
//            return box.className = "" + box.className + " " + this.config.animateClass;
//        };

//        WOW.prototype.applyStyle = function (box, hidden) {
//            var delay, duration, iteration;
//            duration = box.getAttribute('data-wow-duration');
//            delay = box.getAttribute('data-wow-delay');
//            iteration = box.getAttribute('data-wow-iteration');
//            return box.setAttribute('style', this.customStyle(hidden, duration, delay, iteration));
//        };

//        WOW.prototype.resetStyle = function () {
//            var box, _i, _len, _ref, _results;
//            _ref = this.boxes;
//            _results = [];
//            for (_i = 0, _len = _ref.length; _i < _len; _i++) {
//                box = _ref[_i];
//                _results.push(box.setAttribute('style', 'visibility: visible;'));
//            }
//            return _results;
//        };

//        WOW.prototype.customStyle = function (hidden, duration, delay, iteration) {
//            var style;
//            style = hidden ? "visibility: hidden; -webkit-animation-name: none; -moz-animation-name: none; animation-name: none;" : "visibility: visible;";
//            if (duration) {
//                style += "-webkit-animation-duration: " + duration + "; -moz-animation-duration: " + duration + "; animation-duration: " + duration + ";";
//            }
//            if (delay) {
//                style += "-webkit-animation-delay: " + delay + "; -moz-animation-delay: " + delay + "; animation-delay: " + delay + ";";
//            }
//            if (iteration) {
//                style += "-webkit-animation-iteration-count: " + iteration + "; -moz-animation-iteration-count: " + iteration + "; animation-iteration-count: " + iteration + ";";
//            }
//            return style;
//        };

//        WOW.prototype.scrollHandler = function () {
//            return this.scrolled = true;
//        };

//        WOW.prototype.scrollCallback = function () {
//            var box;
//            if (this.scrolled) {
//                this.scrolled = false;
//                this.boxes = (function () {
//                    var _i, _len, _ref, _results;
//                    _ref = this.boxes;
//                    _results = [];
//                    for (_i = 0, _len = _ref.length; _i < _len; _i++) {
//                        box = _ref[_i];
//                        if (!(box)) {
//                            continue;
//                        }
//                        if (this.isVisible(box)) {
//                            this.show(box);
//                            continue;
//                        }
//                        _results.push(box);
//                    }
//                    return _results;
//                }).call(this);
//                if (!this.boxes.length) {
//                    return this.stop();
//                }
//            }
//        };

//        WOW.prototype.offsetTop = function (element) {
//            var top;
//            top = element.offsetTop;
//            while (element = element.offsetParent) {
//                top += element.offsetTop;
//            }
//            return top;
//        };

//        WOW.prototype.isVisible = function (box) {
//            var bottom, offset, top, viewBottom, viewTop;
//            offset = box.getAttribute('data-wow-offset') || this.config.offset;
//            viewTop = window.pageYOffset;
//            viewBottom = viewTop + this.element.clientHeight - offset;
//            top = this.offsetTop(box);
//            bottom = top + box.clientHeight;
//            return top <= viewBottom && bottom >= viewTop;
//        };

//        WOW.prototype.util = function () {
//            return this._util || (this._util = new Util());
//        };

//        WOW.prototype.disabled = function () {
//            return !this.config.mobile && this.util().isMobile(navigator.userAgent);
//        };

//        return WOW;

//    })();

//}).call(this);


//wow = new WOW(
//    {
//        animateClass: 'animated',
//        offset: 100
//    }
//);
//wow.init();


