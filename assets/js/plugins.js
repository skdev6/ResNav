// Avoid `console` errors in browsers that lack a console.
(function() {
  var method;
  var noop = function () {};
  var methods = [
    'assert', 'clear', 'count', 'debug', 'dir', 'dirxml', 'error',
    'exception', 'group', 'groupCollapsed', 'groupEnd', 'info', 'log',
    'markTimeline', 'profile', 'profileEnd', 'table', 'time', 'timeEnd',
    'timeline', 'timelineEnd', 'timeStamp', 'trace', 'warn'
  ];
  var length = methods.length;
  var console = (window.console = window.console || {});

  while (length--) {
    method = methods[length];

    // Only stub undefined methods.
    if (!console[method]) {
      console[method] = noop;
    }
  }
}());

// Place any jQuery/helper plugins in here.
! function(e) {
    e.fn.aceResponsiveMenu = function(s) {
        var i = s = e.extend({
                resizeWidth: "768",
                animationSpeed: "fast",
                accoridonExpAll: !1
            }, s),
            l = i.resizeWidth,
            n = i.animationSpeed,
            a = i.accoridonExpAll,
            t = e(this),
            d = e(this).attr("data-menu-style");

        function o() {
            if (e(window).innerWidth() <= l) t.find("li.menu-active").removeClass("menu-active"), t.find("ul.slide").removeClass("slide").removeAttr("style"), t.addClass("collapse hide-menu"), t.attr("data-menu-style", ""), e(".menu-toggle").show();
            else {
                if (t.attr("data-menu-style", d), t.removeClass("collapse hide-menu").removeAttr("style"), e(".menu-toggle").hide(), "accordion" == t.attr("data-menu-style")) return void t.addClass("collapse");
                t.find("li.menu-active").removeClass("menu-active"), t.find("ul.slide").removeClass("slide").removeAttr("style")
            }
        }
        return t.find("ul").addClass("sub-menu"), "accordion" == d && e(this).addClass("collapse"), e(window).innerWidth() <= l && o(), e(window).resize(function() {
            o()
        }), e("#menu-btn").click(function() {
            t.slideToggle().toggleClass("hide-menu")
        }), this.each(function() {
            t.on("mouseover", "> li a", function() {
                if (!0 === t.hasClass("collapse")) return !1;
                e(this).parent("li").siblings().children(".sub-menu").stop(!0, !0).slideUp(n).removeClass("slide").removeAttr("style").stop(), e(this).parent().addClass("menu-active").children(".sub-menu").slideDown(n).addClass("slide")
            }), t.on("mouseleave", "li", function() {
                if (!0 === t.hasClass("collapse")) return !1;
                e(this).off("click", "> li a"), e(this).removeClass("menu-active"), e(this).children("ul.sub-menu").stop(!0, !0).slideUp(n).removeClass("slide").removeAttr("style")
            }), t.on("click", "> li a", function() {
                if (t.hasClass("collapse"), e(this).off("mouseover", "> li a"), e(this).parent().hasClass("menu-active")) e(this).parent().children(".sub-menu").slideUp().removeClass("slide"), e(this).parent().removeClass("menu-active");
                else {
                    if (1 == a) return void e(this).parent().addClass("menu-active").children(".sub-menu").slideDown(n).addClass("slide");
                    e(this).parent().siblings().removeClass("menu-active"), e(this).parent("li").siblings().children(".sub-menu").slideUp().removeClass("slide"), e(this).parent().addClass("menu-active").children(".sub-menu").slideDown(n).addClass("slide")
                }
            })
        })
    }
}(jQuery);