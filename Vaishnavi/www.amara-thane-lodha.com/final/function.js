window.$zopim || function(e, a) {
    var t = $zopim = function(e) {
            t._.push(e)
        },
        o = t.s = e.createElement(a),
        n = e.getElementsByTagName(a)[0];
    t.set = function(e) {
        t.set._.push(e)
    }, t._ = [], t.set._ = [], o.async = !0, o.setAttribute("charset", "utf-8"), o.src = "//v2.zopim.com/?2F4uasrDz8AwB7cxrCz3igHZtZovK0w4", t.t = +new Date, o.type = "text/javascript", n.parentNode.insertBefore(o, n)
}(document, "script"), $zopim(function() {
    $zopim.livechat.button.setOffsetVerticalMobile(55), $zopim.livechat.button.setOffsetHorizontalMobile(10)
});