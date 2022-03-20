$(".MobileButton").click(function () {
    $('.MainHeader .Inner .Navigation').addClass("Opened");
    if ($('.MainHeader .Inner .Navigation').hasClass('close')) {
        $('.MainHeader .Inner .Navigation').removeClass('close').addClass('Opened');
        $(".BodyOverlay").fadeIn(500)
    } else if ($('.MainHeader .Inner .Navigation').hasClass("Opened")) {
        $(".MainHeader .Inner .Navigation").removeClass("Opened").addClass("close");
        $(".BodyOverlay").fadeOut(400)
    }
    $('.BodyOverlay').click(function () {
        $(".MainHeader .Inner .Navigation").removeClass("Opened").addClass("close").trigger('click');
        $(".BodyOverlay").fadeOut(400)
    });
    $('.MainHeader .Inner .Navigation ul li a').click(function () {
        $(".MainHeader .Inner .Navigation").removeClass("Opened").addClass("close").trigger('click');
        $(".BodyOverlay").fadeOut(400)
    })
});
$(document).ready(function () {
    $(window).bind('scroll', function () {
        if ($(window).scrollTop() >= 100) {
            $('.MainHeader').addClass('fixed')
        } else {
            $('.MainHeader').removeClass('fixed')
        }
    })
});
$(document).ready(function () {
    $('.MainHeader .Inner .Navigation ul li a[href*=#]').bind('click', function (e) {
        e.preventDefault();
        var target = $(this).attr("href");
        $('html, body').stop().animate({
            scrollTop: $(target).offset().top
        }, 600, function () {
            location.hash = target
        });
        return !1
    })
});
$(window).scroll(function () {
    var scrollDistance = $(window).scrollTop();
    $('.Wuidth100').each(function (i) {
        if ($(this).position().top <= scrollDistance) {
            $('#menu a.active').removeClass('active');
            $('#menu a').eq(i).addClass('active')
        }
    })
}).scroll();

function model(mContent) {
    $(".overlay").fadeIn();
    $('.mText').html(mContent);
    $(".close").on('click', function () {
        $(".overlay").hide()
    })
}
var bac = "heading"
var abc = '<div class="well"><h2>' + bac + '<h2></div>'
$(document).ready(function () {
    model(abc)
});
setTimeout(function () {
    $('.overlay').hide()
}, 60000);
$('[open-modal]').on('click', function () {
    var id = $(this).attr('open-modal');
    $('.modal#' + id).addClass('active')
});
$('[close-modal]').on('click', function () {
    $(this).parents('.modal').removeClass('active')
});
$('.modal').on('click', function (e) {
    if (e.target !== this) {
        return
    };
    $(this).removeClass('active')
});
$.ajax({
    type: "GET",
    url: "https://www.myhomesfy.com/api/leads/projectdata/334"
}).done(function (data) {
    if ("result" in data) {
        phone_no = data.result.phone;
        whatsapp_url = data.result.wp_links;
        window.projectname = data.result.project_name;
        window.city = data.result.city;
        window.RegNo = data.result.reg_no;
        $(".phone_url").attr("href", "tel:" + phone_no + "");
        $(".whatsapp_url").attr("href", whatsapp_url + "!I want to know about " + data.result.project_name + ".");
        $(".phone_no").html(phone_no)
    }
}).fail(function () {
    var whatsapp_url = "https://api.whatsapp.com/send?phone=917304412403&text=Hi!"
    $(".whatsapp_url").attr("href", whatsapp_url);
    $(".phone_url").attr("href", "tel:" + 917304927701 + "");
    $(".phone_no").html("917304927701")
});
var utmsource, utmcampaign, utmmedium, utmterm, utmcontent;
var queryForm = function (settings) {
    var reset = settings && settings.reset ? settings.reset : !1;
    var self = window.location.toString();
    var querystring = self.split("?");
    if (querystring.length > 1) {
        var pairs = querystring[1].split("&");
        for (i in pairs) {
            var keyval = pairs[i].split("=");
            if (reset || sessionStorage.getItem(keyval[0]) === null) {
                sessionStorage.setItem(keyval[0], keyval[1])
            }
            if (keyval[0] == "utm_source")
                utmsource = keyval[1];
            if (keyval[0] == "utm_medium")
                utmmedium = keyval[1];
            if (keyval[0] == "utm_campaign")
                utmcampaign = keyval[1];
            if (keyval[0] == "utm_content")
                utmcontent = keyval[1];
            if (keyval[0] == "utm_term")
                utmterm = keyval[1]
        }
    }
    var hiddenFields = document.querySelectorAll("input[type=hidden]");
    for (var i = 0; i < hiddenFields.length; i++) {
        var param = sessionStorage.getItem(hiddenFields[i].name);
        if (param) document.getElementById(hiddenFields[i].name).value = param
    }
}
queryForm();
$(document).ready(function () {
    var Ipaddress;
    var browser;
    var device;
    if (navigator.userAgent.match(/Android/i) || navigator.userAgent.match(/webOS/i) || navigator.userAgent.match(/iPhone/i) || navigator.userAgent.match(/Windows Phone/i)) {
        device = "Mobile";
    } else if (navigator.userAgent.match(/iPad/i) || navigator.userAgent.match(/iPod/i)) {
        device = "Tablet";
    } else if (navigator.userAgent.match(/BlackBerry/i)) {
        device = "Blackberry";
    } else {
        device = "Desktop";
    }

    $.getJSON("https://jsonip.com?callback=?", function (data) {
        Ipaddress = data.ip;
    });

    if ((navigator.userAgent.indexOf("Opera") || navigator.userAgent.indexOf('OPR')) != -1) {
        browser = "Opera";
    } else if (navigator.userAgent.indexOf("Chrome") != -1) {
        browser = "Chrome";
    } else if (navigator.userAgent.indexOf("Safari") != -1) {
        browser = "Safari";
    } else if (navigator.userAgent.indexOf("Firefox") != -1) {
        browser = "Firefox";
    } else if ((navigator.userAgent.indexOf("MSIE") != -1) || (!!document.documentMode == true)) //IF IE > 10
    {
        browser = "MSIE";
    }
    $('#dropAnEnquiry').on("submit", function () {
        debugger
        var name = $('#dropname').val();
        var email = "No email";
        var number = $('#dropnumber').val();
        saveLead(name, email, number, 'top_enquire_form');
        return !1
    })
    $('#MobdropAnEnquiry').on("submit", function () {
        debugger;
        var name = $('#Mobdropname').val();
        var email = "No email";
        var number = $('#Mobdropnumber').val();
        saveLead(name, email, number, ' top_enquire_form');
        return !1
    })
    $('#HomemeetingForm').on("submit", function () {
        debugger
        var name = $('#Homemeetingname').val();
        var email = "Noe email";
        var number = $('#Homemeetingnumber').val();
        saveLead(name, email, number, ' homemeeting_overview_homepage');
        return !1
    })
    $('#BrochureForm').on("submit", function () {
        debugger
        var name = $('#Brochurename').val();
        var email = "Noe email";
        var number = $('#Brochurenumber').val();
        saveLead(name, email, number, ' downloadbrochure_overview_homepage');
        return !1
    })
    $('#PriceForm').on("submit", function () {
        debugger
        var name = $('#Pricename').val();
        var email = "Noe email";
        var number = $('#Pricenumber').val();
        saveLead(name, email, number, ' priceplan_overview_homepage');
        return !1
    })
    $('#BannerForm').on("submit", function () {
        debugger
        var name = $('#Bannername').val();
        var email = "Noe email";
        var number = $('#Bannernumber').val();
        saveLead(name, email, number, ' banner_form_homepage');
        return !1
    })
    $('#OfferModalForm').on("submit", function () {
        debugger
        var name = $('#OfferModalname').val();
        var email = "Noe email";
        var number = $('#OfferModalnumber').val();
        saveLead(name, email, number, ' gallery_overview_homepage');
        return !1
    })
    $('#AmenitiesForm').on("submit", function () {
        debugger
        var name = $('#Amenitiesname').val();
        var email = "Noe email";
        var number = $('#Amenitiesnumber').val();
        saveLead(name, email, number, ' amenities_overview_homepage');
        return !1
    })
    $('#FloorPlanForm').on("submit", function () {
        debugger
        var name = $('#FloorPlanName').val();
        var email = "Noe email";
        var number = $('#FloorPlanNumber').val();
        saveLead(name, email, number, ' floorplan_overview_homepage');
        return !1
    })
    $('#LocationForm').on("submit", function () {
        debugger;
        var name = $('#LocationName').val();
        var email = "Noe email";
        var number = $('#LocationNumber').val();
        saveLead(name, email, number, ' sitevisit_overview_homepage');
        return !1
    })
    $('#EmiFormModal').on("submit", function () {
        debugger;
        var name = $('#EmiFormname').val();
        var email = "Noe email";
        var number = $('#EmiFormnumber').val();
        saveLead(name, email, number, 'emicalculator_overview_homepage');
        return !1
    })
    $('#KnowMoreForm').on("submit", function () {
        debugger;
        var name = $('#KnowMoreName').val();
        var email = "Noe email";
        var number = $('#KnowMoreNumber').val();
        saveLead(name, email, number, 'Know_more_details_overview_homepage');
        return !1
    })
    $('#FeatureForm').on("submit", function () {
        debugger;
        var name = $('#FeatureName').val();
        var email = "Noe email";
        var number = $('#FeatureNumber').val();
        saveLead(name, email, number, 'featured_porject_details_overview_homepage');
        return !1
    })
    $('#OnLaodForm').on("submit", function () {
        debugger;
        var name = "No name";
        var email = "Noe email";
        var number = $('#OnLaodnumber').val();
        saveLead(name, email, number, ' onlaodform_overview_homepage');
        return !1
    })

    function saveLead(name, email, number, pref) {
        debugger
        var reg = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
        if (name.length == 0) {
            alert('Please Enter Your Sweet Name');
            return !1
        }
        if (number.length != 10) {
            alert('Number should be 10 digits');
            return !1
        } else {
            debugger;
            var obj = {};
            obj.p_username = name;
            obj.p_mobilenumber = number;
            obj.p_email = email;
            obj.p_pref = pref;
            obj.p_leadtype = window.projectname;
            obj.p_launchname = "";
            obj.p_source = "website";
            obj.p_city = window.city;
            obj.p_regionid = window.RegNo;
            obj.p_utmsource = utmsource;
            obj.p_utmmedium = utmmedium;
            obj.p_utmcampaign = utmcampaign;
            obj.p_utmcontent = utmcontent;
            obj.p_utmterm = utmterm;
            obj.p_ipaddress = Ipaddress;
            obj.p_userbrowser = browser;
            obj.p_useragent = device;
            SendLead(obj)
        }
        return !0
    }
})
var SendLead = function (obj) {
    $.post("https://www.myhomesfy.com/api/leads", obj, function (data) {
        alert("Thank You!");
        window.location.href = "thankyou.html";
        return !0
    })
}
window.$zopim || (function (g, a) {
    var f = $zopim = function (d) {
        f._.push(d)
    },
        b = f.s = g.createElement(a),
        c = g.getElementsByTagName(a)[0];
    f.set = function (d) {
        f.set._.push(d)
    };
    f._ = [];
    f.set._ = [];
    b.async = !0;
    b.setAttribute("charset", "utf-8");
    b.src = "//v2.zopim.com/?2F4uasrDz8AwB7cxrCz3igHZtZovK0w4";
    f.t = +new Date;
    b.type = "text/javascript";
    c.parentNode.insertBefore(b, c)
})(document, "script");
$zopim(function () {
    $zopim.livechat.button.setOffsetVerticalMobile(55);
    $zopim.livechat.button.setOffsetHorizontalMobile(10)
})

//
const observer = lozad();
observer.observe();