// =========================
$(document).ready(function () {
    // Custom function which toggles between sticky class (is-sticky)
    var stickyToggle = function (sticky, stickyWrapper, scrollElement) {
        var stickyHeight = sticky.outerHeight();
        var stickyTop = stickyWrapper.offset().top;
        if (scrollElement.scrollTop() >= stickyTop) {
            stickyWrapper.height(stickyHeight);
            sticky.addClass("is-sticky");
        }
        else {
            sticky.removeClass("is-sticky");
            stickyWrapper.height('auto');
        }
    };

    // Find all data-toggle="sticky-onscroll" elements
    $('[data-toggle="sticky-onscroll"]').each(function () {
        var sticky = $(this);
        var stickyWrapper = $('<div>').addClass('sticky-wrapper'); // insert hidden element to maintain actual top offset on page
        sticky.before(stickyWrapper);
        sticky.addClass('sticky');

        // Scroll & resize events
        $(window).on('scroll.sticky-onscroll resize.sticky-onscroll', function () {
            stickyToggle(sticky, stickyWrapper, $(this));
        });

        // On page load
        stickyToggle(sticky, stickyWrapper, $(window));
    });
});
////

// ===== Scroll to Top ====
$(window).scroll(function () {
    if ($(this).scrollTop() >= 50) {        // If page is scrolled more than 50px
        $('#return-to-top').fadeIn(300);    // Fade in the arrow
    } else {
        $('#return-to-top').fadeOut(300);   // Else fade out the arrow
    }
});

$('.link').click(function () {      // When arrow is clicked
    $('body,html').animate({
        scrollTop: 0                       // Scroll to top of body
    }, 700);
});



window.onload = function () {
    $.ajax({
        type: "GET",
        url: "https://www.myhomesfy.com/api/leads/projectdata/174"
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
        $(".phone_url").attr("href", "tel:" + 08045936068 + "");
        $(".phone_no").html("08045936068")
    });
    var utmsource, utmcampaign, utmmedium, utmterm, utmcontent;
    var param_region_id = window.RegNo;
    var param_nationality = 1;
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
                if (keyval[0] == "p_nationality")
                    param_nationality = keyval[1]
                if (keyval[0] == "p_regionid") {
                    param_region_id = keyval[1];
                    $.ajax({
                        type: "GET",
                        url: "https://myhomesfy.com/api/leads/regiondata/" + param_region_id
                    }).done(function (data) {
                        if ("result" in data) {

                            phone_no = data['result']['phone'];
                            whatsapp_url = data['result']['wp_links'];
                            $(".phone_url").attr("href", "tel:" + phone_no + "");
                            $(".whatsapp_url").attr("href", whatsapp_url + "!I want to know about Lodha Quality Homes Majiwada project.");
                            $(".phone_no").html(phone_no);
                        }
                    });
                }

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
            var name = $('#fullname').val();
            var email = $('#email').val();
            var number = $('#phone').val();
            var country_code = $('#dial_code').val();
            saveLead(name, email, number, country_code, 'all_enquire_form_overview_homepage');
            return !1
        })
        $('#HomemeetingForm').on("submit", function () {
            debugger
            var name = $('#Homemeetingname').val();
            var email = "Noe email";
            var number = $('#Homemeetingnumber').val();
            var country_code = $('#Homemeeting_CountryCode').val();
            saveLead(name, email, number, country_code, ' homemeeting_overview_homepage');
            return !1
        })
        $('#BrochureForm').on("submit", function () {
            debugger
            var name = $('#Brochurename').val();
            var email = "Noe email";
            var number = $('#Brochurenumber').val();
            var country_code = $('#Brochure_CountryCode').val();
            saveLead(name, email, number, country_code, 'downloadbrochure_overview_homepage');
            return !1
        })
        $('#PriceForm').on("submit", function () {
            debugger
            var name = $('#Pricename').val();
            var email = "Noe email";
            var number = $('#Pricenumber').val();
            var country_code = $('#Price_CountryCode').val();
            saveLead(name, email, number, country_code, ' priceplan_overview_homepage');
            return !1
        })
        $('#OfferModalForm').on("submit", function () {
            debugger
            var name = $('#OfferModalname').val();
            var email = "Noe email";
            var number = $('#OfferModalnumber').val();
            var country_code = $('#drop_CountryCode').val();
            saveLead(name, email, number, country_code, 'gallery_overview_homepage');
            return !1
        })
        $('#AmenitiesForm').on("submit", function () {
            debugger
            var name = $('#Amenitiesname').val();
            var email = "Noe email";
            var number = $('#Amenitiesnumber').val();
            var country_code = $('#Amenities_CountryCode').val();
            saveLead(name, email, number, country_code, ' amenities_overview_homepage');
            return !1
        })
        $('#FloorPlanForm').on("submit", function () {
            debugger
            var name = $('#FloorPlanName').val();
            var email = "Noe email";
            var number = $('#FloorPlanNumber').val();
            var country_code = $('#FloorPlan_CountryCode').val();
            saveLead(name, email, number, country_code, ' floorplan_overview_homepage');
            return !1
        })
        $('#LocationForm').on("submit", function () {
            debugger;
            var name = $('#LocationName').val();
            var email = "Noe email";
            var number = $('#LocationNumber').val();
            var country_code = $('#Location_CountryCode').val();
            saveLead(name, email, number, country_code, ' sitevisit_overview_homepage');
            return !1
        })
        $('#EmiFormModal').on("submit", function () {
            debugger;
            var name = $('#EmiFormname').val();
            var email = "Noe email";
            var number = $('#EmiFormnumber').val();
            var country_code = $('#EmiForm_CountryCode').val();
            saveLead(name, email, number, country_code, 'emicalculator_overview_homepage');
            return !1
        })
        $('#KnowMoreForm').on("submit", function () {
            debugger;
            var name = $('#KnowMoreName').val();
            var email = "Noe email";
            var number = $('#KnowMoreNumber').val();
            var country_code = $('#KnowMore_CountryCode').val();
            saveLead(name, email, number, country_code, 'Know_more_details_overview_homepage');
            return !1
        })
        $('#FeatureForm').on("submit", function () {
            debugger;
            var name = $('#FeatureName').val();
            var email = "Noe email";
            var number = $('#FeatureNumber').val();
            var country_code = $('#Feature_CountryCode').val();
            saveLead(name, email, number, country_code, 'featured_porject_details_overview_homepage');
            return !1
        })
        $('#GalleryForm').on("submit", function () {
            debugger;
            var name = $('#Galleryname').val();
            var email = "Noe email";
            var number = $('#Gallerynumber').val();
            var country_code = $('#Gallery_CountryCode').val();
            saveLead(name, email, number, country_code, 'video_gallery_overview_homepage');
            return !1
        })
        $('#contact_us2').on("submit", function () {
            debugger;
            var name = $('#fullname2').val();
            var email = $('#email2').val();
            var number = $('#phone2').val();
            var country_code = $('#dial_code2').val();
            saveLead(name, email, number, country_code, 'onloado_overview_homepage');
            return !1
        })

        function saveLead(name, email, number, country_code, pref) {
            var obj = {};
            obj.p_username = name;
            obj.p_mobilenumber = number;
            obj.p_email = email;
            obj.p_countrycode = country_code;
            obj.p_pref = pref;
            obj.p_leadtype = window.projectname;
            obj.p_launchname = "";
            obj.p_source = "Google Display";
            obj.p_city = window.city;
            //obj.p_regionid = window.RegNo;
            obj.p_nationality = param_nationality;
            obj.p_regionid = (param_region_id != undefined) ? parseInt(param_region_id) : window.RegNo;
            obj.p_utmsource = utmsource;
            obj.p_utmmedium = utmmedium;
            obj.p_utmcampaign = utmcampaign;
            obj.p_utmcontent = utmcontent;
            obj.p_utmterm = utmterm;
            obj.p_ipaddress = Ipaddress;
            obj.p_userbrowser = browser;
            obj.p_useragent = device;
            if (pref == 'priceplanoffer_overview_homepage') {
                SendPrice(obj);
            }
            else if (pref == 'downloadbrochure_overview_homepage') {
                SendBrochure(obj);
            }
            else if (pref == 'video_gallery_overview_homepage') {
                SendGallery(obj);
            }
            else if (pref == 'testimonialvideo_overview_homepage') {
                SendVideo(obj);
            }
            else if (pref == 'trending_projects_navigation_allpage') {
                SendTrending(obj);
            }
            else if (pref == 'sampleflat_overview_homepage') {
                SampleFlatform(obj);
            }

            else
                SendLead(obj);
        }
        return !0

    })
    var SendLead = function (obj) {
        $.post("https://www.myhomesfy.com/api/leads", obj, function (data) {
            alert("Thank You!");
            window.location.href = "thankyou.html";
            return !0
        })
    }
    var SendGallery = function (obj) {
        $.post("https://www.myhomesfy.com/api/leads", obj, function (data) {
            alert("Thank You!");
            window.location.href = "thankyou.html";
            return !0
        })
    }
    var SendBrochure = function (obj) {
        $.post("https://www.myhomesfy.com/api/leads", obj, function (data) {
            alert("Thank You!");
            window.location.href = "thankyou.html";
            return !0
        })
    }
};






var window_wt = $(window).width();
var window_ht = $(window).height();
$(document).ready(function () {
    var d = new Date();
    $('.copyrightYear').html(d.getFullYear());
    // $('.slide').css('height', window_ht);
    $('.banner-slider .slide').css({ 'height': (window_wt <= 768) ? window_ht - 107 : window_ht - 116 });

    // $('.banner-slider').bxSlider({
    // 	auto: true,
    // 	controls: false,
    // 	pager :true,
    //    touchEnabled: false
    //    onSlideBefore: function($slideElement, oldIndex, newIndex){
    //            if(window_wt <= 768){
    //              //Ipad Banners
    //              $(".slide1").css({'background-image':'url(/newblissv3/images/BAnner-01.jpg)'});              
    //            } else if(window_wt <= 767){
    //              // Mobile Banners
    //              $(".slide1").css({'background-image':'url(/newblissv3/images/BAnner-01.jpg)'});                
    //            }
    //            else{
    //              //Desktop Banners
    //              $(".slide1").css({'background-image':'url(/newblissv3/images/Slider01.jpg)'});
    //            }

    //           }
    // });
    if (window_wt > 768) {
        $(".banner-patch").css("height", window_ht - $("header").height() + 8);
    }

    $('.location-slider').bxSlider({
        minSlides: (window_wt < 768) ? 1 : 4,
        maxSlides: (window_wt < 768) ? 1 : 4,
        auto: true,
        controls: true,
        pager: false,
        slideWidth: 400,
        slideMargin: (window_wt < 768) ? 0 : 30,
        moveSlides: 1,
        responsive: true,
        infiniteLoop: true
    });

    $('.distance-slider').bxSlider({
        minSlides: (window_wt < 768) ? 1 : 3,
        maxSlides: (window_wt < 768) ? 1 : 3,
        auto: true,
        controls: false,
        pager: true,
        slideWidth: 600,
        slideMargin: 30,
        moveSlides: 1,
        responsive: true,
        infiniteLoop: false
    });

    $('.location-tab li a').click(function (e) {
        var box = $(this).attr('rel');
        $('.location-tab li a').removeClass('active-tab');
        $(this).addClass('active-tab');
        $(".location-tab-container").hide();
        $("#" + box).fadeIn('slow');
    });

    $('.location-tab1 li a').click(function (e) {
        var box = $(this).attr('rel');
        $('.location-tab1 li a').removeClass('active-tab1');
        $(this).addClass('active-tab1');
        $(".location-tab-container1").hide();
        $("#" + box).fadeIn('slow');
    });

    $('.location-tab2 li a').click(function (e) {
        var box = $(this).attr('rel');
        $('.location-tab2 li a').removeClass('active-tab2');
        $(this).addClass('active-tab2');
        $(".location-tab-container2").hide();
        $("#" + box).fadeIn('slow');
    });

    $(".plans_img").colorbox({
        inline: true,
        fixed: true,
        width: (window_wt > 768) ? '60%' : '100%',
        height: '18%',
        onComplete: function () {
            var rel = $(this).attr("data-image");
            $("#" + rel).smoothZoom({
                width: '100%',
                height: '70%',
                pan_BUTTONS_SHOW: "YES",
                pan_LIMIT_BOUNDARY: "YES",
                button_SIZE: 15,
                button_ALIGN: "bottom right",
                zoom_MAX: 550,
                border_TRANSPARENCY: 0,
            });
            $.colorbox.resize();
        }
    });


    $(".accordion_head").click(function () {
        if ($('.accordion_body').is(':visible')) {
            $(".accordion_body").slideUp(300);
            $(".plusminus").text('+');
        }
        if ($(this).next(".accordion_body").is(':visible')) {
            $(this).next(".accordion_body").slideUp(300);
            $(this).children(".plusminus").text('+');
        } else {
            $(this).next(".accordion_body").slideDown(300);
            $(this).children(".plusminus").text('-');
        }
    });


    $('.next-sec').on("click", function () {
        if (!$(this).hasClass('extLink')) {
            var href = $(this).attr("rel");
            $("#" + href).trigger("click");
        }
    });

    $(".group1").colorbox({ rel: 'group1', transition: "none", width: "75%", height: "75%" });

    $(".gallpop1").colorbox({ rel: 'gallpop1', width: "80%", height: "80%" });
    $(".gallpop2").colorbox({ rel: 'gallpop2', width: "80%", height: "80%" });
    $(".gallpop3").colorbox({ rel: 'gallpop3', width: "80%", height: "80%" });
    $(".offer , .show , .render ").colorbox({ inline: true, width: "70%", height: "30%" });
    $(".disclaimer, .privacy-policy").colorbox({ inline: true, width: "70%", height: "50%" });

    $(".enquire-now, .downloadPlanBtn, .open-form, .close-btn, .enq-banner").on("click", function () {
        $(".headerFormContainer").slideToggle('slow');
    });


    if (window_wt <= 768) {
        $('.burger-menu, .nav-links a').on('click', function () {
            $('.menu-list').slideToggle();
        });
    }

    if (window_wt < 767) {
        $(".offer , .show , .render ").colorbox({ inline: true, width: "95%", height: "60%" });
        $(".disclaimer, .privacy-policy ").colorbox({ inline: true, width: "95%", height: "60%" });
    }
    if (window_wt < 320) {
        $(".offer , .disclaimer, .show , .render, .privacy-policy ").colorbox({ inline: true, width: "100%", height: "20%" });
    }

    flag = 0;
    flag_after = 0;
    $('.downloadBro, .downloadflor').click(function () {
        $(".headerFormContainer").slideToggle('slow');
        flag = 1;
        if (flag_after == 2) {
            jQuery('.ebro1').css('display', 'block');
            jQuery('.foor-hide').css('display', 'block');
            jQuery('.downloadflor').css('display', 'block');

        }
    });


});

$(window).scroll(function () {
    $(".lazy").each(function () {
        if ($(this).attr("data-src")) {
            (this.tagName == "IMG" || this.tagName == "IFRAME") ? $(this).attr("src", $(this).data("src")) : $(this).css("background-image", "url(" + $(this).data("src") + ")");
            $(this).removeAttr("data-src");
        }
    });
});


function getUrlParameter(name) {
    name = name.replace(/[\[]/, '\\[').replace(/[\]]/, '\\]');
    var regex = new RegExp('[\\?&]' + name + '=([^&#]*)');
    var results = regex.exec(location.search);
    return results === null ? '' : decodeURIComponent(results[1].replace(/\+/g, ' '));
};