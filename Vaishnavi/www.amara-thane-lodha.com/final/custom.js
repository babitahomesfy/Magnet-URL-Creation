$(window).on('load', function() {
        setTimeout(function() {
            $('#PopUp').modal('show');
        }, 6000);
    });
// count

var id, projectId, RegNo, city;
var is_magnet=0;
var magnet_id;

$("input[type=checkbox]").on("change", function() {
    this.value = this.checked ? 1 : 0
}).change(), $("[data-target][data-toggle=modal]").on("click", function() {
    id = $(this).attr("data-target"), Title = {
        Homemeeting: "Put your interests in action, get all the details right now.",
        DownloadBrochure: "Mention your whatsapp number to receive Brochure on whatsapp",
        PricePlan: "Get explicit details about the pricing and on spot offers",
        FloorPlan: "You are trying to download a big file, get it on Whatsapp",
        Location: "Due to huge rush at site we would request you to book your sitevisit in advance",
        Video_section: "Get complete 360 view of the project"
    }, $(".modal.form h4").text(Title[id]), $(".modal.form").attr("id", id).modal("show")
});
let apiDataGet = async () => {
    getProjectData(129).then(e => {
        phone_no = e.result.phone, whatsapp_url = e.result.wp_links_sms, whatsapp_url = whatsapp_url.split("="), whatsapp_url[2] = "I want to know about " + whatsapp_url[2], whatsapp_url = whatsapp_url.join("="), projectId = e.result.Project.p_id, is_magnet = e.result.is_magnet, magnet_id = e.result.magnet_id?e.result.magnet_id:null, city = e.result.Project.Region.city, RegNo = e.result.Project.Region.region_name, $(".phone_url").attr("href", "tel:" + phone_no), $(".whatsapp_url").attr("href", whatsapp_url + "."), $(".phone_no").html(phone_no)
    }).catch(e => {
        $(".whatsapp_url").attr("href", "https://api.whatsapp.com/send?phone=917304412403&text=Hi!"), $(".phone_url").attr("href", "tel:917304927701"), $(".phone_no").html("917304927701")
    })
};
apiDataGet();
var param_region_id = RegNo,
    param_nationality = 1;
async function saveLead(e, a, t, o, n) {
    var i = queryForm(),
        r = await getIpAddress(),
        s = deviceData(),
        l = browserData(),
        c = {};
    c.name = e, c.number = t, 
    c.email = a, 
    c.is_tc_agree = parseInt(o),
     c.nationality = param_nationality, c.source_id = 31, c.project_id = projectId, i && (c.Utm = {
        utm_medium: i.utmmedium,
        utm_source: i.utmsource,
        utm_content: i.utmcontent,
        utm_term: i.utmterm
    }), c.Digital = {
        user_device: s,
        user_browser: l,
        campaing_type: i ? i.utmcampaign : null,
        launch_name: "",
        client_ipaddress: r,
        client_pref: n
    }

    if(is_magnet===1)
        {
            c.is_magnet = is_magnet;
            c.magnet_id = magnet_id;
            c.source_id = 49;
        }
        else
        {
            c.source_id = 31;
        }
    if (pref == 'DownloadBrochure_overview_homepage') {
        SendLead(c, "Brochure.pdf");
    } else {
        SendLead(c, "thankyou.html");
    }
}

function character(e) {
    var a = (e = e || event).charCode ? e.charCode : e.keyCode ? e.keyCode : e.which ? e.which : 0;
    return !(a > 33 && (a < 65 || a > 90) && (a < 97 || a > 122)) || (alert("Enter only characters"), !1)
}

function isNumber(e) {
    var a = (e = e || window.event).which ? e.which : e.keyCode;
    return !(a > 31 && (a < 48 || a > 57))
}
$("#dropAnEnquiry").on("submit", function() {
    return saveLead($("#dropname").val(), $("#dropemail").val(), $("#dropnumber").val(), $("#drop-checkbox").val(), "top_enquire_form"), !1
}), $("#NRIEnquiry").on("submit", function() {
    return saveLead($("#nriname").val(), $("#nriemail").val(), $("#nrinumber").val(), $("#nri-checkbox").val(), "nri_enquire_form"), !1
}), $("#HomemeetingForm").on("submit", function() {
    return saveLead($("#Homemeetingname").val(), "Noe email", $("#Homemeetingnumber").val(), $("#checkbox").val(), id + "_overview_homepage"), !1
}), $("#OnLaodForm").on("submit", function() {
    return saveLead($("#OnLaodname").val(), "Noe email", $("#OnLaodnumber").val(), $("#onload-checkbox").val(), " onlaodform_overview_homepage"), !1
}), $(".MobileButton").click(function() {
    $(".MainHeader .Inner .Navigation").addClass("Opened"), $(".MainHeader .Inner .Navigation").hasClass("close") ? ($(".MainHeader .Inner .Navigation").removeClass("close").addClass("Opened"), $(".BodyOverlay").fadeIn(500)) : $(".MainHeader .Inner .Navigation").hasClass("Opened") && ($(".MainHeader .Inner .Navigation").removeClass("Opened").addClass("close"), $(".BodyOverlay").fadeOut(400)), $(".BodyOverlay").click(function() {
        $(".MainHeader .Inner .Navigation").removeClass("Opened").addClass("close").trigger("click"), $(".BodyOverlay").fadeOut(400)
    }), $(".MainHeader .Inner .Navigation ul li a").click(function() {
        $(".MainHeader .Inner .Navigation").removeClass("Opened").addClass("close").trigger("click"), $(".BodyOverlay").fadeOut(400)
    })
}), $(window).bind("scroll", function() {
    $(window).scrollTop() >= 100 && $(".MainHeader").addClass("fixed")
}), $(window).scroll(function() {
    var e = $(window).scrollTop();
    $(".Wuidth100").each(function(a) {
        $(this).position().top <= e && ($("#menu a.active").removeClass("active"), $("#menu a").eq(a).addClass("active"))
    })
}).scroll(), $(".slider").slick({
    speed: 1e3,
    infinite: !0,
    autoplay: !0,
    autoplaySpeed: 3e3,
    slidesToShow: 1,
    arrows: !1,
    fade: !0,
    adaptiveHeight: !1,
    arrows: !0,
    centerPadding: "0px",
    dots: !1,
    slidesToShow: 1,
    infinite: !1,
    draggable: !0
});