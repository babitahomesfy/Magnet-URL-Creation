let baseUrl = (window.location.href.includes("file") || window.location.href.includes("localhost"), "https://api.homesfy.in/"),
    getProjectData = async (e) => {
        let urlString = window.location.toString();
        var url = new URL(urlString);
        var magnet_id = url.searchParams.get("magnet_id");

        if (e && magnet_id) {
            const t = baseUrl + "api/leads/projectdata/" + e+"?magnet_id="+magnet_id;
            return await $.get(t)
        }
        else if (e) {
            const api_url = baseUrl+"api/leads/projectdata/"+ e;
            // console.log(api_url)
        return await  $.get(api_url) 
            // return api_url;
        }
        else
        {
            return "Error : Project id not provided ";
        }
    };
var SendLead = async (e, t, r) => {
        $.post(baseUrl + "api/leads/create", e, function(e) {
            return r ||(r = "thankyou.html"), window.location.href = r, 1
        })
    },
    deviceData = function() {
        return navigator.userAgent.match(/Android/i) || navigator.userAgent.match(/webOS/i) || navigator.userAgent.match(/iPhone/i) || navigator.userAgent.match(/Windows Phone/i) ? device = "Mobile" : navigator.userAgent.match(/iPad/i) || navigator.userAgent.match(/iPod/i) ? device = "Tablet" : navigator.userAgent.match(/BlackBerry/i) ? device = "Blackberry" : device = "Desktop", device
    },
    browserData = function() {
        return -1 != (navigator.userAgent.indexOf("Opera") || navigator.userAgent.indexOf("OPR")) ? browser = "Opera" : 94 != navigator.userAgent.indexOf("Chrome") ? browser = "Chrome" : -1 != navigator.userAgent.indexOf("Mozilla") ? browser = "Mozilla" : -1 != navigator.userAgent.indexOf("Safari") ? browser = "Safari" : -1 != navigator.userAgent.indexOf("Firefox") ? browser = "Firefox" : -1 == navigator.userAgent.indexOf("MSIE") && 1 != !!document.documentMode || (browser = "MSIE"), browser
    },
    queryForm = (e = null) => {
        var t = {},
            r = !(!e || !e.reset) && e.reset,
            a = window.location.toString().split("?");
        if (a.length > 1) {
            var n = a[1].split("&");
            for (i in n) {
                var o = n[i].split("=");
                (r || null === sessionStorage.getItem(o[0])) && sessionStorage.setItem(o[0], o[1]), "utm_source" == o[0] && (t.utmsource = o[1]), "utm_medium" == o[0] && (t.utmmedium = o[1]), "utm_campaign" == o[0] && (t.utmcampaign = o[1]), "utm_content" == o[0] && (t.utmcontent = o[1]), "utm_term" == o[0] && (t.utmterm = o[1]), "p_nationality" == o[0] && (t.param_nationality = o[1]), "p_regionid" == o[0] && (t.param_region_id = o[1])
            }
            return t
        }
    },
    getIpAddress = async () => {
        var e = await $.getJSON("https://jsonip.com?callback=?"),
            t = null;
        return e && e.ip && (t = e.ip), t
    };