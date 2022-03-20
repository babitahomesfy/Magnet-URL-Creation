// Sticky navbar
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
//Amenites Slider
var $status = $('.pagingInfo');
var $slickElement = $('.amenitiesTextSlider');

var currentSlide = 0;
var slickcnt = $('.amenitiesTextSlider .slick-dots li a').length;
$('.amenitiesTextSlider .slick-dots').css('display', 'none');
$('#slider .flex-control-nav').css('display', 'none');
$('#video .flex-control-nav').css('display', 'none');
$('#view360 .flex-control-nav').css('display', 'none');
$(window).on("load", function () {
    var i = (currentSlide ? currentSlide : 0) + 1;
    $status.text(i + '/' + slickcnt);

});

$slickElement.on('init reInit afterChange', function (event, slick, currentSlide, nextSlide) {
    //currentSlide is undefined on init -- set it to 0 in this case (currentSlide is 0 based)
    var i = (currentSlide ? currentSlide : 0) + 1;
    $status.text(i + '/' + slick.slideCount);
});
//Banner
//Scroll to top
// ===== Scroll to Top ==== 
$(window).scroll(function () {
    if ($(this).scrollTop() >= 50) {        // If page is scrolled more than 50px
        $('#return-to-top').fadeIn(300);    // Fade in the arrow
    } else {
        $('#return-to-top').fadeOut(300);   // Else fade out the arrow
    }
});
$('#return-to-top').click(function () {      // When arrow is clicked
    $('body,html').animate({
        scrollTop: 0                       // Scroll to top of body
    }, 700);
});
//Floor Plan accordian
$(function () {
    var Accordion = function (el, multiple) {
        this.el = el || {};
        this.multiple = multiple || false;

        var links = this.el.find('.article-title');
        links.on('click', {
            el: this.el,
            multiple: this.multiple
        }, this.dropdown)
    }

    Accordion.prototype.dropdown = function (e) {
        var $el = e.data.el;
        $this = $(this),
                $next = $this.next();

        $next.slideToggle();
        $this.parent().toggleClass('open');

        if (!e.data.multiple) {
            $el.find('.accordion-content').not($next).slideUp().parent().removeClass('open');
        };
    }
    var accordion = new Accordion($('.accordion-container'), false);
});
///

//Gallery Section
$(".item").hover(function() {
    $("span").text($(this).find("img").attr("alt")), $(".item").not(this).find("img").addClass("fade")
}, function() {
    $("span").text(""), $(".item").not(this).find("img").removeClass("fade")
})
//Light Gallery Section
$(document).ready(function () {
    $('#dynamic').on('click', function (e) {
        $(this).lightGallery({
            dynamic: true,
            dynamicEl: [
                {
                    src: 'https://s3.amazonaws.com/cdnhomesfy/jogeshwari/Gallery/Ashish.jpg',
                    thumb: 'https://s3.amazonaws.com/cdnhomesfy/jogeshwari/Gallery/Ashish.jpg'
                },
                {
                    src: 'https://s3.amazonaws.com/cdnhomesfy/jogeshwari/Gallery/Bedroom.jpg',
                    thumb: 'https://s3.amazonaws.com/cdnhomesfy/jogeshwari/Gallery/Bedroom.jpg'
            }, {
                src: 'https://s3.amazonaws.com/cdnhomesfy/jogeshwari/Gallery/Building.jpg',
                thumb: 'https://s3.amazonaws.com/cdnhomesfy/jogeshwari/Gallery/Building.jpg'
               
            },  {
                src: 'https://s3.amazonaws.com/cdnhomesfy/jogeshwari/Gallery/Garden.jpg',
                thumb: 'https://s3.amazonaws.com/cdnhomesfy/jogeshwari/Gallery/Garden.jpg'
            }, {
                src: 'https://s3.amazonaws.com/cdnhomesfy/jogeshwari/Gallery/Libreray.jpg',
                thumb: 'https://s3.amazonaws.com/cdnhomesfy/jogeshwari/Gallery/Libreray.jpg'
            },
             {
                 src: 'https://s3.amazonaws.com/cdnhomesfy/jogeshwari/Gallery/LivingRoom.jpg',
                 thumb: 'https://s3.amazonaws.com/cdnhomesfy/jogeshwari/Gallery/LivingRoom.jpg'
             },            
            ]
        });
    });
});

//Navigation code
// Cache selectors
var lastId,
 topMenu = $("#mainNav"),
 topMenuHeight = topMenu.outerHeight() + 1,
 // All list items
 menuItems = topMenu.find("a"),
 // Anchors corresponding to menu items
 scrollItems = menuItems.map(function () {
     var item = $($(this).attr("href"));
     if (item.length) { return item; }
 });

// Bind click handler to menu items
// so we can get a fancy scroll animation
menuItems.click(function (e) {
    var href = $(this).attr("href"),
        offsetTop = href === "#" ? 100 : $(href).offset().top - topMenuHeight + 1;
    $('html, body').stop().animate({
        scrollTop: offsetTop
    }, 850);
    e.preventDefault();
});

// Bind to scroll
$(window).scroll(function () {
    // Get container scroll position
    var fromTop = $(this).scrollTop() + topMenuHeight;

    // Get id of current scroll item
    var cur = scrollItems.map(function () {
        if ($(this).offset().top < fromTop)
            return this;
    });
    // Get the id of the current element
    cur = cur[cur.length - 1];
    var id = cur && cur.length ? cur[0].id : "";

    if (lastId !== id) {
        lastId = id;
        // Set/remove active class
        menuItems
          .parent().removeClass("active")
          .end().filter("[href=#" + id + "]").parent().addClass("active");
    }
});
$.ajax({
    type: "GET",
    url: "https://www.myhomesfy.com/api/leads/projectdata/328"
}).done(function (data) {
    if ("result" in data) {
        phone_no = data['result']['phone'];
        whatsapp_url = data['result']['wp_links'];
        window.projectname = data['result']['project_name'];
        window.city = data['result']['city'];
        window.RegNo = data['result']['reg_no'];
        $(".phone_url").attr("href", "tel:" + phone_no + "");
        $(".whatsapp_url").attr("href", whatsapp_url + "!I want to know about " + data['result']['project_name'] + ".");
        $(".phone_no").html(phone_no);
        //$("#projectname").val(projectname);
    }
}).fail(function () {
    var whatsapp_url = "https://api.whatsapp.com/send?phone=917304412403&text=Hi!"
    $(".whatsapp_url").attr("href", whatsapp_url);
    $(".phone_url").attr("href", "tel:" + 917304927701 + "");
    $(".phone_no").html("917304927701");
});var utmsource, utmcampaign, utmmedium, utmterm, utmcontent;

var queryForm = function (settings) {
    var reset = settings && settings.reset ? settings.reset : false;
    var self = window.location.toString();
    var querystring = self.split("?");
    if (querystring.length > 1) {
        var pairs = querystring[1].split("&");
        for (i in pairs) {
            var keyval = pairs[i].split("=");
            if (reset || sessionStorage.getItem(keyval[0]) === null) {
                sessionStorage.setItem(keyval[0], keyval[1]);
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
                utmterm = keyval[1];
        }

    }
    var hiddenFields = document.querySelectorAll("input[type=hidden]");
    for (var i = 0; i < hiddenFields.length; i++) {
        var param = sessionStorage.getItem(hiddenFields[i].name);
        if (param) document.getElementById(hiddenFields[i].name).value = param;
    }
}
queryForm();


// ip address
$(document).ready(function () {
    
    //global variables for Ip address and Browsername
    var Ipaddress;
    var objbrowserName = navigator.appName;
    var result = getBrowserName();
    var browser = result.browser.name;
    var currentTime = moment(new Date()).format("YYYY-MM-DD HH:mm:ss");
    var device;

    //user Agent Info starts
    if
        (
            navigator.userAgent.match(/Android/i)
            || navigator.userAgent.match(/webOS/i)
            || navigator.userAgent.match(/iPhone/i)
            || navigator.userAgent.match(/Windows Phone/i)
        ) {
        device = "Mobile";
    }

    else if
        (
            navigator.userAgent.match(/iPad/i)
            || navigator.userAgent.match(/iPod/i)

        ) {
        device = "Tablet";
    }
    else if 
        (
            navigator.userAgent.match(/BlackBerry/i)
        ) {
        device = "Blackberry";
    }
    else {
        device = "Desktop";
    }
    //User Agent Info Ends

    //Ip Address Detection start
    $.getJSON("https://jsonip.com?callback=?", function (data) {
        Ipaddress = data.ip;
    });
    //Ip Address End


    //Detect Browser Name starts
    function getBrowserName() {
        var parser = new UAParser();
        var result = parser.getResult();
        return result;
    }

    $('#dropAnEnquiry').on("submit", function () {
        debugger;
        var name = $('#dropname').val();
        var email = "No email";
        var number = $('#dropnumber').val();
        saveLead(name, email, number, ' top_enquire_form');
        return false;
    })
    $('#OfferForm').on("submit", function () {
        debugger;
        var name = $('#Offername').val();
        var email = "No email";
        var number = $('#Offernumber').val();
        saveLead(name, email, number, 'specialoffer_overview_homepage');
        return false;
    })
    $('#HomeMeetingForm').on("submit", function () {
        debugger;
        var name = $('#HomeMeetingname').val();
        var email = "No email";
        var number = $('#HomeMeetingnumber').val();
        saveLead(name, email, number, 'homemeeting_overview_homepage');
        return false;
    })
    $('#FloorPlanForm').on("submit", function () {
        debugger;
        var name = $('#FloorPlanname').val();
        var email = "No email";
        var number = $('#FloorPlannumber').val();
        saveLead(name, email, number, 'floorplan_overview_homepage');
        return false;
    })
    $('#360Form').on("submit", function () {
        debugger;
        var name = $('#360name').val();
        var email = "No email";
        var number = $('#360number').val();
        saveLead(name, email, number, 'sampleflat_overview_homepage');
        return false;
    })
    $('#BrochureForm').on("submit", function () {
        debugger;
        var name = $('#Brochurename').val();
        var email = "No email";
        var number = $('#Brochurenumber').val();
        saveLead(name, email, number, 'downloadbrochure_overview_homepage');
        return false;
    })

    $('#PriceForm').on("submit", function () {

        debugger;
        var name = $('#Pricename').val();
        var email = "Noe email";
        var number = $('#Pricenumber').val();
        //NewApi(name, email, number);
        saveLead(name, email, number, 'priceplan_overview_homepage');
        return false;

    })


    function saveLead(name, email, number, pref) {
        debugger
        //check_if_capcha_is_filled();
        var reg = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
        if (name.length == 0) {
            alert('Please Enter Your Sweet Name');
            return false;
        }
        //if (reg.test(email) == false) {
        //    alert('Invalid Email Address');
        //    return false;
        //}
        if (number.length != 10) {
            alert('Number should be 10 digits');
            return false;
        }
        else {

           debugger;
            var obj = {};
            obj.p_username = name;
            obj.p_mobilenumber = number;
            obj.p_email = email;
            obj.p_pref = pref;
            obj.p_leadtype = window.projectname;
            obj.p_launchname = "";
            obj.p_source = "Landing Page";
            obj.p_city = window.city;
            //obj.p_projectid = "250";
            obj.p_regionid = window.RegNo;
            obj.p_magnetlead = 'yes'
            obj.p_magnetleadrm = 40343;
            obj.p_utmsource = utmsource;
            obj.p_utmmedium = utmmedium;
            obj.p_utmcampaign = utmcampaign;
            obj.p_utmcontent = utmcontent;
            obj.p_utmterm = utmterm;
            obj.p_ipaddress = Ipaddress;
            obj.p_userbrowser = browser;
            obj.p_useragent = device;
            // obj.p_campaigntype ="Event"
            SendLead(obj);
        }
        return true;
    }
})

var SendLead = function (obj) {

    $.post("https://www.myhomesfy.com/api/leads", obj, function (data) {
        alert("Thank You!");
        window.location.href = "thankyou.html";
        return true;
    });

}
//Number value start 
function character(evt) {
    evt = (evt) ? evt : event;
    var charCode = (evt.charCode) ? evt.charCode : ((evt.keyCode) ? evt.keyCode :
    ((evt.which) ? evt.which : 0));
    if (charCode > 33 && (charCode < 65 || charCode > 90) &&
    (charCode < 97 || charCode > 122)) {
        alert("Enter only characters");
        return false;
    }
    return true;
}
//Number value end
//tel
function isNumber(evt) {
    evt = (evt) ? evt : window.event;
    var charCode = (evt.which) ? evt.which : evt.keyCode;
    if (charCode > 31 && (charCode < 48 || charCode > 57)) {
        return false;
    }
    return true;
};

//Zopin
//OnLoad
$(window).load(function () {
    $('.loader').fadeOut();
});
//WhatsApp button
$(document).ready(function () {
    window.onscroll = function () {
        620 < document.body.scrollTop || 620 < document.documentElement.scrollTop ? document.getElementById("SocailSection").style.bottom = "0px" : document.getElementById("SocailSection").style.bottom = "-150px"
    }
});
window.$zopim || (function (g, a) { var f = $zopim = function (d) { f._.push(d) }, b = f.s = g.createElement(a), c = g.getElementsByTagName(a)[0]; f.set = function (d) { f.set._.push(d) }; f._ = []; f.set._ = []; b.async = !0; b.setAttribute("charset", "utf-8"); b.src = "//v2.zopim.com/?2F4uasrDz8AwB7cxrCz3igHZtZovK0w4"; f.t = +new Date; b.type = "text/javascript"; c.parentNode.insertBefore(b, c) })(document, "script"); $zopim(function () { $zopim.livechat.button.setOffsetVerticalMobile(55); $zopim.livechat.button.setOffsetHorizontalMobile(10) });

    
$(document).ready(function () {
  //called when key is pressed in textbox
  $(".quantity").keypress(function (e) {
     //if the letter is not digit then display error and don't type anything
     if (e.which != 8 && e.which != 0 && (e.which < 48 || e.which > 57)) {
        //display error message
        $(".errmsg").html("Digits Only").show().fadeOut("slow");
               return false;
    }
   });
});